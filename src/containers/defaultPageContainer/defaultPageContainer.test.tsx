import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DefaultPageContainer from './defaultPageContainer';
import PodcastProvider from '../../context/podcastContext';

describe('DefaultPageContainer', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <PodcastProvider>
        <DefaultPageContainer />
        </PodcastProvider>
      </MemoryRouter>
    );

    // Check if the component renders the header with the correct title
    const headerTitle = screen.getByText(/Podcaster/i);
    expect(headerTitle).toBeInTheDocument();

    // Check if the hr element is present
    const hrElement = screen.getByRole('separator');
    expect(hrElement).toBeInTheDocument();

    // Check if the main element contains the Outlet from react-router-dom
    const outletElement = screen.getByTestId('podcast-container');
    expect(outletElement).toBeInTheDocument();
  });
});
