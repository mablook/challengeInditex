import { render, screen, fireEvent } from '@testing-library/react';
import PodcastItem from './podcastItem';
import { PodcastContextType, Entry } from 'uiTypes';
import { PodcastContext } from '../../context/podcastContext';

const entry: Entry = {
    id: {
        attributes: {
            'im:id': '123',
        },
        label: '123',
    },
    'im:name': {
        label: 'Podcast Title',
    },
    'im:image': [
        {
            label: 'image-url',
            attributes: { height: '100' }
        },
    ],
    'im:artist': {
        label: 'Podcast Author',
        attributes: { href: '100' }
    },
    summary: { label: 'Podcast Summary' },
    'im:price': { label: 'Podcast Price', attributes: { amount: '100', currency: 'USD' } },
    'im:contentType': { attributes: { term: 'term', label: 'label' } },
    rights: { label: 'Podcast Rights' },
    title: { label: 'Podcast Title' },
    link: { attributes: { href: 'href', rel: 'rel', type: '' } },
    category: { attributes: { 'im:id': '123', term: 'term', scheme: 'scheme', label: 'label' } },
    'im:releaseDate': { label: new Date('2021-07-20T12:00:00Z'), attributes: { label: 'label' } },
};


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
        <PodcastItem entry={entry} />
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
        <PodcastItem entry={entry} />
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
