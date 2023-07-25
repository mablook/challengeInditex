import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PodcastDetails from "./podcastDetails";
import { CustomProvider } from "./test-utils";
import { podDetailsMock } from "../../mocks/test-utils-data";

// Mock the useParams and useNavigate hooks from 'react-router-dom'
import { useParams, useNavigate } from "react-router-dom";
jest.mock("react-router-dom");

describe("PodcastDetails Component", () => {
  beforeEach(() => {
    // Mock the useParams value before each test
    (useParams as jest.Mock).mockReturnValue({ podcastId: "123305545" });

    // Mock the useNavigate hook
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
  });

  it("should render correctly and show loading state", () => {
    const customContextValue = {
      setLoading: jest.fn(),
      loading: true,
      getPodcastDetail: jest.fn(),
      podcastDetail: undefined,
      getPodcasts: jest.fn(),
      setPodcastDetail: undefined,
    };

    render(
      <CustomProvider value={customContextValue}>
        <PodcastDetails />
      </CustomProvider>
    );

    // Ensure that the loading state is shown
    expect(screen.getByText(/Description:/i)).toBeInTheDocument();
  });

  it("should render podcast details correctly", () => {
    const customContextValue = {
      setLoading: jest.fn(),
      loading: false,
      getPodcastDetail: jest.fn(),
      podcastDetail: podDetailsMock,
      getPodcasts: jest.fn(),
      setPodcastDetail: undefined,
    };

    render(
      <CustomProvider value={customContextValue}>
        <PodcastDetails />
      </CustomProvider>
    );

    // Check if the podcast details are rendered correctly
    expect(screen.getByText(/60 Songs That Explain the '90s/i)).toBeInTheDocument();
    expect(screen.getByText(/The 1990s were a turning point/i)).toBeInTheDocument();
    // Add more assertions for other elements if needed
  });

  it("should call getPodcastDetail when podcastId is available", () => {
    const customContextValue = {
      setLoading: jest.fn(),
      loading: false,
      getPodcastDetail: jest.fn(),
      podcastDetail: podDetailsMock,
      getPodcasts: jest.fn(),
      setPodcastDetail: undefined,
    };

    // Mock the useParams value to have a podcastId
    (useParams as jest.Mock).mockReturnValue({ podcastId: "sample-podcast" });

    render(
      <CustomProvider value={customContextValue}>
        <PodcastDetails />
      </CustomProvider>
    );

    // Check if getPodcastDetail is called with the correct podcastId
    expect(customContextValue.getPodcastDetail).toHaveBeenCalledWith("sample-podcast");
  });

  it("should call useNavigate when clicking on the episode button", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    const customContextValue = {
      setLoading: jest.fn(),
      loading: false,
      getPodcastDetail: jest.fn(),
      podcastDetail: podDetailsMock,
      getPodcasts: jest.fn(),
      setPodcastDetail: undefined,
    };

    render(
      <CustomProvider value={customContextValue}>
        <PodcastDetails />
      </CustomProvider>
    );

    // Click on the episode button
    const episodeButton = screen.getByText("“Birdhouse in Your Soul”—They Might Be G...");
    // Check if the episode button is in the document
    expect(episodeButton).toBeInTheDocument();
    // Click on a podcast episode button
    fireEvent.click(episodeButton);
    // Check if useNavigate is called with the correct arguments
    expect(mockNavigate).toHaveBeenCalledWith("/podcast/123305545/episode/1000621606703");
  });
});
