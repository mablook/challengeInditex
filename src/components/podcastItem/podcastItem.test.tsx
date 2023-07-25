import { render, screen, fireEvent } from '@testing-library/react';
import PodcastItem from './podcastItem';
import { PodcastContextType, Entry } from 'uiTypes';
import { PodcastContext } from '../../context/podcastContext';
import { entryMock } from '../../mocks/test-utils-data';


// Mock useNavigate
const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockUseNavigate,
}));

describe('PodcastItem', () => {
  const customContextValue: PodcastContextType = {
      setLoading: jest.fn(),
      loading: false,
      getPodcasts: function (): Promise<void> {
          throw new Error('Function not implemented.');
      },
      getPodcastDetail: function (id: string): Promise<void> {
          throw new Error('Function not implemented.');
      },
      setPodcastDetail: undefined
  };

  it('should render correctly', () => {


    render(
      <PodcastContext.Provider value={customContextValue}>
        <PodcastItem entry={entryMock} />
      </PodcastContext.Provider>
    );

    // Check if the podcast item content is rendered correctly
    const titleElement = screen.getByText(/Podcast Title/i);
    const authorElement = screen.getByText(/Author: Podcast Author/i);
    const imageElement = screen.getByAltText(/pic/i);

    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  it('should handle click event and call useNavigate and setLoading', () => {

    render(
      <PodcastContext.Provider value={customContextValue}>
        <PodcastItem entry={entryMock} />
      </PodcastContext.Provider>
    );

    // Fire the click event on the podcast item
    fireEvent.click(screen.getByText(/Podcast Title/i));

    // Check if useNavigate is called with the correct parameter
    expect(mockUseNavigate).toHaveBeenCalledWith('/podcast/123');

    // Check if setLoading is called with true
    expect(customContextValue.setLoading).toHaveBeenCalledWith(true);
  });
});
