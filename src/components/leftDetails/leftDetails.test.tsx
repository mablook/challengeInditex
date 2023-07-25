import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LeftDetails, { LeftDetailsProps } from "./leftDetails";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useNavigate: jest.fn(), // Mock useNavigate with jest.fn()
  };
});

describe("LeftDetails Component", () => {
  const mockProps: LeftDetailsProps = {
    podcastName: "Sample Podcast",
    podcastImage: "sample-image.jpg",
    poscastArtist: "John Doe",
    podcastSummary: "This is a sample podcast summary.",
    podcast: "sample-podcast",
  };

  test("renders the component with correct details", () => {
    render(
      <MemoryRouter>
        <LeftDetails {...mockProps} />
      </MemoryRouter>
    );

    const podcastNameElement = screen.getByText(mockProps.podcastName);
    const artistElement = screen.getByText(`by ${mockProps.poscastArtist}`);
    const descriptionElement = screen.getByText("Description:");
    const summaryElement = screen.getByText(mockProps.podcastSummary);

    expect(podcastNameElement).toBeInTheDocument();
    expect(artistElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(summaryElement).toBeInTheDocument();
  });

  test("navigates to the correct link when clicked", () => {
    const navigateMock = require("react-router-dom").useNavigate as jest.Mock;
    const mockNavigate = jest.fn();
    navigateMock.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <LeftDetails {...mockProps} />
      </MemoryRouter>
    );

    const cardElement = screen.getByTestId("dataleft-details-card");
    fireEvent.click(cardElement);

    expect(mockNavigate).toHaveBeenCalledWith(`/podcast/${mockProps.podcast}`);
  });
});
