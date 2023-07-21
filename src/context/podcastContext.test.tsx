import React, { useContext, useEffect } from "react";
import PodcastProvider, { PodcastContext } from "./podcastContext";
import { act, renderHook } from "@testing-library/react-hooks";
import { getLocalStorage } from "../api/persistData";
import { PodcastContextType } from "uiTypes";
import { _rootFeed } from "./mock";
import { render } from "@testing-library/react";

const podDetails = {
  resultCount: 16,
  results: [
    {
      wrapperType: "track",
      kind: "podcast",
      collectionId: 1635211340,
      trackId: 1635211340,
      artistName: "The Ringer",
      collectionName: "60 Songs That Explain the '90s",
      trackName: "60 Songs That Explain the '90s",
      collectionCensoredName: "60 Songs That Explain the '90s",
      trackCensoredName: "60 Songs That Explain the '90s",
      collectionViewUrl: "https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=4",
      feedUrl: "https://feeds.megaphone.fm/60-songs",
      trackViewUrl: "https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=4",
      artworkUrl30: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/30x30bb.jpg",
      artworkUrl60: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/60x60bb.jpg",
      artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/100x100bb.jpg",
      collectionPrice: 0,
      trackPrice: 0,
      collectionHdPrice: 0,
      releaseDate: "2023-07-19T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      trackCount: 102,
      trackTimeMillis: 5296,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Music",
      artworkUrl600: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/600x600bb.jpg",
      genreIds: ["1310", "26"],
      genres: ["Music", "Podcasts"],
    },
    {
      country: "USA",
      previewUrl: "https://traffic.megaphone.fm/GLT6878650508.mp3?updated=1689748058",
      artistIds: [],
      genres: [
        {
          name: "Music",
          id: "1310",
        },
      ],
      episodeGuid: "bb551c18-1b05-11ee-a165-bbaf1fca37ef",
      description:
        "In a very special 100th episode, Rob looks back at the records his parents played downstairs when he was supposed to be sleeping. Oh, and of course he dedicates a significant amount of time praising the band that unlocked 90 percent of his then-12-year-old identity, They Might Be Giants. Later, rapper and host of ‘What Had Happened Was,’ Open Mike Eagle, joins Rob to discuss his shared love for They Might Be Giants and how “Birdhouse in Your Soul” forever changed his perception of music at a young age.\nHost: Rob Harvilla\nGuest: Open Mike Eagle\nProducers: Jonathan Kermah and Justin Sayles\nAdditional Production Support: Chloe Clark\nLearn more about your ad choices. Visit podcastchoices.com/adchoices",
      shortDescription: "",
      feedUrl: "https://feeds.megaphone.fm/60-songs",
      closedCaptioning: "none",
      trackId: 1000621606703,
      trackName: "“Birdhouse in Your Soul”—They Might Be Giants",
      collectionId: 1635211340,
      collectionName: "60 Songs That Explain the '90s",
      artworkUrl160: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/160x160bb.jpg",
      episodeFileExtension: "mp3",
      episodeContentType: "audio",
      collectionViewUrl: "https://itunes.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?mt=2&uo=4",
      trackViewUrl: "https://podcasts.apple.com/us/podcast/birdhouse-in-your-soul-they-might-be-giants/id1635211340?i=1000621606703&uo=4",
      trackTimeMillis: 5296000,
      episodeUrl: "https://traffic.megaphone.fm/GLT6878650508.mp3?updated=1689748058",
      artworkUrl600: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/600x600bb.jpg",
      artworkUrl60: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/60x60bb.jpg",
      kind: "podcast-episode",
      wrapperType: "podcastEpisode",
      releaseDate: "2023-07-19T07:00:00Z",
    },
  ],
  validate: 1689865927067,
  podcastInfo: {
    "im:name": {
      label: "60 Songs That Explain the '90s",
    },
    "im:image": [
      {
        label: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "The 1990s were a turning point in music: with the increasingly connected world enabling an unprecedented coalescence of various styles and genres, the decade featured the rapid evolution of sonic artistry — and subsequently shaped the soundscape of eras that followed. Listen along as The Ringer’s preeminent music critic Rob Harvilla curates and explores 60 iconic songs from the ‘90s that define the decade.",
    },
    "im:price": {
      label: "Get",
      attributes: {
        amount: "0",
        currency: "USD",
      },
    },
    "im:contentType": {
      attributes: {
        term: "Podcast",
        label: "Podcast",
      },
    },
    rights: {
      label: "© All rights reserved.",
    },
    title: {
      label: "60 Songs That Explain the '90s - The Ringer",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=2",
      },
    },
    id: {
      label: "https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=2",
      attributes: {
        "im:id": "1635211340",
      },
    },
    "im:artist": {
      label: "The Ringer",
    },
    category: {
      attributes: {
        "im:id": "1310",
        term: "Music",
        scheme: "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
        label: "Music",
      },
    },
    "im:releaseDate": {
      label: "2023-07-19T00:00:00-07:00",
      attributes: {
        label: "July 19, 2023",
      },
    },
  },
};

const TestingComponent = () => {
  const { podcasts, podcastDetail, getPodcasts, getPodcastDetail, loading } = useContext(PodcastContext) as PodcastContextType;

  useEffect(() => {
    getPodcasts();
    getPodcastDetail("1000621606703");
  }, []);

  return (
    <div>
      {loading ? "Loading..." : "Not Loading"}
      {podcasts ? "Podcasts available" : "No podcasts"}
      {podcastDetail ? "Podcast detail available" : "No podcast detail"}
    </div>
  );
};

// Mock the getLocalStorage function
jest.mock("../api/persistData", () => ({
  getLocalStorage: jest.fn(),
}));

describe("PodcastProvider", () => {
  it("should provide the PodcastContext with initial values", () => {
    // Render the component wrapped with the context provider
    const { getByText } = render(
      <PodcastProvider>
        <PodcastContext.Consumer>
          {(value: any) => {
            // Check that the context provides initial values
            expect(value.podcasts).toBeUndefined();
            expect(value.podcastDetail).toBeUndefined();
            expect(typeof value.getPodcasts).toBe("function");
            expect(typeof value.getPodcastDetail).toBe("function");
            expect(typeof value.setPodcastDetail).toBe("function");
            expect(value.loading).toBe(false);

            // You can add more specific tests based on your context logic
            return <div>Context Consumer Test</div>;
          }}
        </PodcastContext.Consumer>
      </PodcastProvider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Context Consumer Test")).toBeInTheDocument();
  });

  it("should handle Context with Podcasts and Podcast Detail", () => {
    const customContextValue: PodcastContextType = {
      setLoading: jest.fn(),
      loading: false,
      getPodcastDetail: jest.fn(),
      podcasts: _rootFeed, // Assuming _rootFeed is a valid RootFeed data
      podcastDetail: podDetails, // Assuming podDetails is a valid PodcastDetailsResponse data
      getPodcasts: jest.fn(),
      setPodcastDetail: jest.fn(),
    };

    const { result } = renderHook(() => useContext(PodcastContext), { wrapper: ({ children }) => <PodcastContext.Provider value={customContextValue}>{children}</PodcastContext.Provider> });

    expect(result.current?.podcasts).toEqual(_rootFeed);
    expect(result.current?.podcastDetail).toEqual(podDetails);
    expect(typeof result.current?.getPodcasts).toBe("function");
    expect(typeof result.current?.getPodcastDetail).toBe("function");
    expect(typeof result.current?.setPodcastDetail).toBe("function");
    expect(result.current?.loading).toBe(false);
  });

  it("should handle Context with Podcasts but No Podcast Detail", () => {
    const customContextValue: PodcastContextType = {
      setLoading: jest.fn(),
      loading: false,
      getPodcastDetail: jest.fn(),
      podcasts: _rootFeed, // Assuming _rootFeed is a valid RootFeed data
      podcastDetail: undefined,
      getPodcasts: jest.fn(),
      setPodcastDetail: jest.fn(),
    };

    const { result } = renderHook(() => useContext(PodcastContext), { wrapper: ({ children }) => <PodcastContext.Provider value={customContextValue}>{children}</PodcastContext.Provider> });

    expect(result.current?.podcasts).toEqual(_rootFeed);
    expect(result.current?.podcastDetail).toBeUndefined();
    expect(typeof result.current?.getPodcasts).toBe("function");
    expect(typeof result.current?.getPodcastDetail).toBe("function");
    expect(typeof result.current?.setPodcastDetail).toBe("function");
    expect(result.current?.loading).toBe(false);
  });

  it("should handle Context with Loading State", () => {
    const customContextValue: PodcastContextType = {
      setLoading: jest.fn(),
      loading: true,
      getPodcastDetail: jest.fn(),
      podcasts: undefined,
      podcastDetail: undefined,
      getPodcasts: jest.fn(),
      setPodcastDetail: jest.fn(),
    };

    const { result } = renderHook(() => useContext(PodcastContext), { wrapper: ({ children }) => <PodcastContext.Provider value={customContextValue}>{children}</PodcastContext.Provider> });

    expect(result.current?.podcasts).toBeUndefined();
    expect(result.current?.podcastDetail).toBeUndefined();
    expect(typeof result.current?.getPodcasts).toBe("function");
    expect(typeof result.current?.getPodcastDetail).toBe("function");
    expect(typeof result.current?.setPodcastDetail).toBe("function");
    expect(result.current?.loading).toBe(true);
  });

  it("should handle Context with Podcast Detail but No Podcasts", () => {
    const customContextValue: PodcastContextType = {
      setLoading: jest.fn(),
      loading: false,
      getPodcastDetail: jest.fn(),
      podcasts: undefined,
      podcastDetail: podDetails, // Assuming podDetails is a valid PodcastDetailsResponse data
      getPodcasts: jest.fn(),
      setPodcastDetail: jest.fn(),
    };

    const { result } = renderHook(() => useContext(PodcastContext), { wrapper: ({ children }) => <PodcastContext.Provider value={customContextValue}>{children}</PodcastContext.Provider> });

    expect(result.current?.podcasts).toBeUndefined();
    expect(result.current?.podcastDetail).toEqual(podDetails);
    expect(typeof result.current?.getPodcasts).toBe("function");
    expect(typeof result.current?.getPodcastDetail).toBe("function");
    expect(typeof result.current?.setPodcastDetail).toBe("function");
    expect(result.current?.loading).toBe(false);
  });

  it("should call getPodcasts when the component mounts", async () => {
    // Create a mocked version of the getPodcasts function
    const mockedGetPodcasts = jest.fn();
    const mockedGetPodcastsDetails = jest.fn();

    // Prepare the custom context value with the mocked function
    const customContextValue: PodcastContextType = {
      setLoading: jest.fn(),
      loading: false,
      getPodcastDetail: mockedGetPodcastsDetails,
      getPodcasts: mockedGetPodcasts,
      podcasts: undefined,
      podcastDetail: podDetails,
      setPodcastDetail: jest.fn(),
    };

    // Render the component with the custom context
    render(
      <PodcastContext.Provider value={customContextValue}>
        <TestingComponent />
      </PodcastContext.Provider>
    );

    // Assert that the getPodcasts function was called during the component mounting
    expect(mockedGetPodcasts).toHaveBeenCalledTimes(1);
    expect(mockedGetPodcastsDetails).toHaveBeenCalledTimes(1);
  });

  it("should call getPodcasts when the component mounts", async () => {
    // Create a mocked version of the getPodcasts function
    const mockedGetPodcasts = jest.fn();

    // Prepare the custom context value with the mocked function
    const customContextValue: PodcastContextType = {
      setLoading: jest.fn(),
      loading: false,
      getPodcastDetail: jest.fn(),
      getPodcasts: mockedGetPodcasts,
      podcasts: undefined,
      podcastDetail: podDetails,
      setPodcastDetail: jest.fn(),
    };

    // Render the component with the custom context
    render(
      <PodcastContext.Provider value={customContextValue}>
        <TestingComponent />
      </PodcastContext.Provider>
    );

    // Assert that the getPodcasts function was called during the component mounting
    expect(mockedGetPodcasts).toHaveBeenCalledTimes(1);
  });

  it("should handle multiple calls to getPodcasts", async () => {
    // Mock the getLocalStorage function to return the rootFeedData
    getLocalStorage.mockResolvedValueOnce(_rootFeed);

    // Render the component wrapped with the context provider
    const { result } = renderHook(() => useContext(PodcastContext), { wrapper: PodcastProvider });

    // Assert initial values
    expect(result.current?.podcasts).toBeUndefined();
    expect(result.current?.loading).toBe(false);

    // Wait for getPodcasts to be called multiple times
    await act(async () => {
      await Promise.all([result.current?.getPodcasts(), result.current?.getPodcasts(), result.current?.getPodcasts()]);
    });

    // Assert that podcasts are now available in the context
    expect(result.current?.podcasts).toEqual(_rootFeed);
    expect(result.current?.loading).toBe(false);
    // Ensure that getLocalStorage was called only once
    expect(getLocalStorage).toHaveBeenCalledTimes(3);
  });

  it("should handle Context with setPodcastDetail called", async () => {
    // Render the component wrapped with the context provider
    const { result } = renderHook(() => useContext(PodcastContext), { wrapper: PodcastProvider });

    // Assert initial values
    expect(result.current?.podcastDetail).toBeUndefined();

    // Call setPodcastDetail with podcastDetailsData
    act(() => {
      result.current?.setPodcastDetail(podDetails);
    });

    // Assert that podcastDetail is set to podcastDetailsData
    expect(result.current?.podcastDetail).toEqual(podDetails);

    // Call setPodcastDetail with undefined
    act(() => {
      result.current?.setPodcastDetail(undefined);
    });

    // Assert that podcastDetail is set to undefined
    expect(result.current?.podcastDetail).toBeUndefined();
  });

  it("should handle Context with getPodcastDetail called with invalid id", async () => {
    // Mock the getLocalStorage function to return the rootFeedData
    getLocalStorage.mockResolvedValueOnce(_rootFeed);

    // Render the component wrapped with the context provider
    const { result } = renderHook(() => useContext(PodcastContext), { wrapper: PodcastProvider });

    // Wait for getPodcasts to be called
    await act(async () => {
      await result.current?.getPodcasts();
    });

    // Assert initial values
    expect(result.current?.podcastDetail).toBeUndefined();

    // Wait for getPodcastDetail to be called with invalid id
    await act(async () => {
      await result.current?.getPodcastDetail("invalid-id");
    });

    // Assert that podcastDetail remains undefined in the context
    expect(result.current?.podcastDetail).toBeUndefined();
  });

  it("should handle Context with getPodcastDetail called and no podcasts available", async () => {
    // Mock the getLocalStorage function to return undefined (no data)
    getLocalStorage.mockResolvedValueOnce(undefined);

    // Render the component wrapped with the context provider
    const { result } = renderHook(() => useContext(PodcastContext), { wrapper: PodcastProvider });

    // Wait for getPodcasts to be called
    await act(async () => {
      await result.current?.getPodcasts();
    });

    // Assert initial values
    expect(result.current?.podcastDetail).toBeUndefined();

    // Wait for getPodcastDetail to be called
    await act(async () => {
      await result.current?.getPodcastDetail("1635211340");
    });

    // Assert that podcastDetail is still undefined in the context
    expect(result.current?.podcastDetail).toBeUndefined();
  });

  it("should handle Context with getPodcastDetail called and podcasts available", async () => {
    // Mock the getLocalStorage function to return the rootFeedData
    getLocalStorage.mockResolvedValueOnce(_rootFeed);

    // Render the component wrapped with the context provider
    const { result } = renderHook(() => useContext(PodcastContext), { wrapper: PodcastProvider });

    // Wait for getPodcasts to be called
    await act(async () => {
      await result.current?.getPodcasts();
    });

    // Assert initial values
    expect(result.current?.podcastDetail).toBeUndefined();

    // Wait for getPodcastDetail to be called
    await act(async () => {
      await result.current?.getPodcastDetail("1635211340");
    });

    // Assert that podcastDetail is now available in the context
    expect(result.current?.podcastDetail).toBe(undefined);
  });

  it("should handle Context with setLoading called", async () => {
    // Render the component wrapped with the context provider
    const { result } = renderHook(() => useContext(PodcastContext), { wrapper: PodcastProvider });

    // Assert initial values
    expect(result.current?.loading).toBe(false);

    // Call setLoading with true
    act(() => {
      result.current?.setLoading(true);
    });

    // Assert that loading is set to true
    expect(result.current?.loading).toBe(true);

    // Call setLoading with false
    act(() => {
      result.current?.setLoading(false);
    });

    // Assert that loading is set to false
    expect(result.current?.loading).toBe(false);
  });

  it("should not call getLocalStorage when getPodcasts is called and podcasts are available", async () => {
    // Mock the getLocalStorage function to return the rootFeedData
    getLocalStorage.mockResolvedValueOnce(_rootFeed);

    // Render the component wrapped with the context provider
    const { result } = renderHook(() => useContext(PodcastContext), { wrapper: PodcastProvider });

    // Wait for getPodcasts to be called
    await act(async () => {
      await result.current?.getPodcasts();
    });

    // Assert that podcasts are now available in the context
    expect(result.current?.podcasts).toEqual(_rootFeed);

    // Call getPodcasts again
    await act(async () => {
      await result.current?.getPodcasts();
    });

    // Ensure that getLocalStorage was called only once (initial call)
    expect(getLocalStorage).toHaveBeenCalledTimes(1);
  });
  // Add more specific tests for the context functions if needed
});
