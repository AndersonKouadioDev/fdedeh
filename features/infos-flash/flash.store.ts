import {create} from 'zustand';
import {IFlash} from "@/features/infos-flash/flash.type";

interface FlashStoreState {
	allFlashInfos: IFlash[];

	// react query
	isLoading: boolean;
	isError: boolean;
	error: any | null;
	isFetching: boolean;

	setAllFlashInfos: (flashInfos: IFlash[]) => void;
	setQueryState: (state: { isLoading: boolean, isError: boolean, error: any, isFetching: boolean }) => void;

	// Utilitaires pour calculer les infos flash filtrées
	getActiveFlashInfos: () => IFlash[];
}

export const useFlashStore = create<FlashStoreState>((set, getState) => ({
	allFlashInfos: [],
	isLoading: false,
	isError: false,
	error: null,
	isFetching: false,

	setAllFlashInfos: (flashInfos: IFlash[]) => set({allFlashInfos: flashInfos}),
	setQueryState: (state) => set(state),

	getActiveFlashInfos: () => {
		return getState().allFlashInfos;
	},
}));