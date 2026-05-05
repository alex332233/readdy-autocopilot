import { createContext, useContext } from "react";
import type { HomePageContent } from "../../sanity/types";

const HomePageContentContext = createContext<HomePageContent | null>(null);

export function HomePageContentProvider({
  value,
  children,
}: {
  value: HomePageContent;
  children: React.ReactNode;
}) {
  return (
    <HomePageContentContext.Provider value={value}>
      {children}
    </HomePageContentContext.Provider>
  );
}

export function useHomePageContentContext() {
  return useContext(HomePageContentContext);
}
