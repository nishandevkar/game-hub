import {create} from "zustand";

export interface GameQuery {
	genreId?: number | undefined;
	platformId?: number | undefined;
	sortOrder?: string;
	searchText?: string;
}
interface GameQueryStore {
    gameQuery: GameQuery
    setSearchText: (searchText: string) => void;
    setSortOrder: (sortOrder: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;

}

const useGameQueryStore = create<GameQueryStore>()((set) => ({
  gameQuery: {},
    setSearchText: (searchText) => set(() => ({gameQuery: {searchText}})),
    setSortOrder: (sortOrder) => set((previousGameQueryStore) => ({gameQuery: {...previousGameQueryStore.gameQuery, sortOrder}})),
    setGenreId: (genreId) => set((previousGameQueryStore) => ({gameQuery: {...previousGameQueryStore.gameQuery, genreId}})),
    setPlatformId: (platformId) => set((previousGameQueryStore)=> ({gameQuery: {...previousGameQueryStore.gameQuery, platformId}})),
}))

export default useGameQueryStore;
