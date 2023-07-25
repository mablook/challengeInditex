//@ts-ignore / needs to redefine the type of CustomProvider
import React, { ReactNode } from "react";
import { MemoryRouter, Router, RouterProps } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import { render, Queries } from "@testing-library/react";
import { PodcastContextType } from "uiTypes";
import { PodcastContext } from "../../context/podcastContext";

// Define custom render function to wrap components with necessary providers and routers
export function renderWithRouter<QueriesType extends Queries>(
  ui: React.ReactElement,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  }: { route?: string; history?: MemoryHistory } = {}
): CustomProvider<QueriesType> & { history: MemoryHistory } {
  const Wrapper: React.FC = ({ children }: { children?: ReactNode }) => (
    <Router history={history as unknown as RouterProps}>
      <MemoryRouter initialEntries={[route]}>
        <PodcastContext.Provider value={{} as PodcastContextType}>
          {children}
        </PodcastContext.Provider>
      </MemoryRouter>
    </Router>
  );

  const result = render<QueriesType>(ui, { wrapper: Wrapper });

  return {
    ...result,
    history,
  };
}

// Define a mock for the custom provider value
const customProviderValue: PodcastContextType = {
  setLoading: jest.fn(),
  loading: false,
  getPodcastDetail: jest.fn(),
  podcastDetail: undefined,
  getPodcasts: jest.fn(),
  setPodcastDetail: undefined,
};

// Define a custom provider component
export const CustomProvider: React.FC<{ value: PodcastContextType }> = ({ children, value }) => (
  <PodcastContext.Provider value={value}>
    {children}
  </PodcastContext.Provider>
);
