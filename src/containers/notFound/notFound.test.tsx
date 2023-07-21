import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './notFound';

describe('NotFound', () => {
  it('should render correctly', () => {
    render(<NotFound />);

    // Check if the component renders "Not Found" text
    const notFoundText = screen.getByText(/Not Found/i);
    expect(notFoundText).toBeInTheDocument();

    // Check if the "back to home" link is present with the correct content and attributes
    const backToHomeLink = screen.getByTestId('not-found');
    expect(backToHomeLink).toBeInTheDocument();
    expect(backToHomeLink).toHaveTextContent('back to home');
    expect(backToHomeLink).toHaveAttribute('href', '/');
  });
});
