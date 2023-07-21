import { getData } from './fetchApi';

// Mock the fetch function
const mockFetch = jest.fn();

beforeEach(() => {
  // Reset the mock before each test
  mockFetch.mockClear();
  // Replace the global fetch with the mockFetch
  (global as any).fetch = mockFetch;
});

describe('getData', () => {
  it('should fetch data from the endpoint and return the response', async () => {
    const mockData = { message: 'Mocked data' };
    const mockResponse = { ok: true, json: jest.fn().mockResolvedValue(mockData) };
    mockFetch.mockResolvedValue(mockResponse);

    const endpoint = 'https://api.example.com/data';
    const result = await getData(endpoint);

    expect(mockFetch).toHaveBeenCalledWith(endpoint);
    expect(mockResponse.json).toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });

  it('should handle fetch errors and return undefined', async () => {
    const mockResponse = { ok: false };
    mockFetch.mockResolvedValue(mockResponse);

    const endpoint = 'https://api.example.com/data';
    const result = await getData(endpoint);

    expect(mockFetch).toHaveBeenCalledWith(endpoint);
    expect(result).toBeUndefined();
  });

  it('should handle JSON parsing errors and return undefined', async () => {
    const mockResponse = { ok: true, json: jest.fn().mockRejectedValue(new Error('JSON parsing error')) };
    mockFetch.mockResolvedValue(mockResponse);

    const endpoint = 'https://api.example.com/data';
    const result = await getData(endpoint);

    expect(mockFetch).toHaveBeenCalledWith(endpoint);
    expect(result).toBeUndefined();
  });

  it('should handle network errors and return undefined', async () => {
    mockFetch.mockRejectedValue(new Error('Network error'));

    const endpoint = 'https://api.example.com/data';
    const result = await getData(endpoint);

    expect(mockFetch).toHaveBeenCalledWith(endpoint);
    expect(result).toBeUndefined();
  });
});
