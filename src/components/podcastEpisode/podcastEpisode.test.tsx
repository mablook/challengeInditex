import React from "react";
import { render, screen } from "@testing-library/react";
import PodcastEpisode from "./podcastEpisode"; // Replace with the correct path to your component
import { PodcastContextType, PodcastDetailsResponse } from "uiTypes";
import { PodcastContext } from "../../context/podcastContext";
import { useParams } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

const podDetails:PodcastDetailsResponse = {
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

describe("PodcastEpisode Component", () => {
  beforeEach(() => {
    // Mock the useParams value before each test
    useParams.mockReturnValue({ podcastId: "123", episodeId: "episode-1" });
  });

  it("should render correctly", () => {
    const customContextValue: PodcastContextType = {
        setLoading: jest.fn(),
        loading: false,
        getPodcastDetail: jest.fn(),
        podcastDetail: podDetails,
        getPodcasts: jest.fn(),
        setPodcastDetail: undefined
    };

    render(
      <PodcastContext.Provider value={customContextValue}>
        <PodcastEpisode />
      </PodcastContext.Provider>
    );
  });

  it("should render left details section correctly", () => {
    const customContextValue: PodcastContextType = {
        setLoading: jest.fn(),
        loading: false,
        getPodcastDetail: jest.fn(),
        podcastDetail: podDetails,
        getPodcasts: jest.fn(),
        setPodcastDetail: undefined
    };

    render(
      <PodcastContext.Provider value={customContextValue}>
        <PodcastEpisode />
      </PodcastContext.Provider>
    );

    expect(screen.getByAltText("60 Songs That Explain the '90s")).toBeInTheDocument();
    expect(screen.getByText("60 Songs That Explain the '90s")).toBeInTheDocument();
    expect(screen.getByText(/The 1990s were a turning point/)).toBeInTheDocument();
  });

  it("should render audio player correctly", () => {
    const customContextValue: PodcastContextType = {
        setLoading: jest.fn(),
        loading: false,
        getPodcastDetail: jest.fn(),
        podcastDetail: podDetails,
        getPodcasts: jest.fn(),
        setPodcastDetail: undefined
    };

    render(
      <PodcastContext.Provider value={customContextValue}>
        <PodcastEpisode />
      </PodcastContext.Provider>
    );

    // Check if the episode title and description are rendered correctly

    expect(screen.getByText("60 Songs That Explain the '90s")).toBeInTheDocument();

    // Check if the audio player is rendered and has the episode URL as the source
    const audioPlayer = screen.getByTestId("audio-player");
    expect(audioPlayer).toBeInTheDocument();
  });
});
