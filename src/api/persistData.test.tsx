import { getLocalStorage, setLocalStorage } from "./persistData"; // Replace with the actual path to the file
import localStorageMock from "./localStorageMock";
import * as fetchApiModule from "./fetchApi"; // Import the module with a wildcard to spy on its functions

jest.mock("./fetchApi", () => ({
  getData: jest.fn().mockResolvedValue({}),
}));

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("localStorageUtil", () => {
  afterEach(() => {
    jest.clearAllMocks();
    window.localStorage.clear(); // Clear localStorage after each test
  });

  it("should get data from localStorage if valid and not expired", async () => {
    // Test Case 1: Valid data in localStorage
    const mockValidData = {
      validate: Date.now(),
      /* Add other mock properties as needed */
    };

    const url = "mockValidURL";
    window.localStorage.setItem(url, JSON.stringify(mockValidData));

    const result = await getLocalStorage({ url });
    expect(result).toEqual(mockValidData);
  });

  it("should fetch data and store in localStorage if data is expired or not present", async () => {
    // Test Case 2: Data not present in localStorage
    const url = "mockNonExistentURL";
    const getDataSpy = jest.spyOn(fetchApiModule, "getData");

    const mockFetchedData = {};

    getDataSpy.mockResolvedValue(mockFetchedData);

    const result = await getLocalStorage({ url });

    expect(getDataSpy).toHaveBeenCalledWith(url);
    expect(result).toEqual(mockFetchedData);

    // Test Case 3: Expired data in localStorage
    const mockExpiredData = {
      validate: Date.now() - Number(process.env.REACT_APP_API_INVALIDATE || "3600000") - 1000,
    };

    window.localStorage.setItem(url, JSON.stringify(mockExpiredData));
    const resultExpired = await getLocalStorage({ url });

    expect(getDataSpy).toHaveBeenCalledWith(url);
    expect(resultExpired).toEqual(mockFetchedData);
  });

  it("should handle errors and return undefined", async () => {
    // Test Case 4: Error handling when `getData` function throws an error
    const url = "mockErrorURL";
    const getDataSpy = jest.spyOn(fetchApiModule, "getData");
    getDataSpy.mockRejectedValue(new Error("Mock Fetch Error"));

    const result = await getLocalStorage({ url });
    expect(result).toBeUndefined();
  });

  it("should set data in localStorage", () => {
    const key = "mockKey";
    const value = "mockValue";
    setLocalStorage({ key, value });
    const result = window.localStorage.getItem(key);
    expect(result).toEqual(JSON.stringify(value));
  });

  it("should handle errors and return undefined for setLocalStorage", () => {
    // Test Case 5: Error handling for `setLocalStorage`
    const key = "errorKey"; // Set the key to trigger an error
    const result = setLocalStorage({ key, value: "mockValue" });
    expect(result).toBeUndefined();
  });
});
