// features/dailies/stores/daily.store.ts
import {create} from 'zustand';
import {IDaily} from "@/features/dailies/types";

interface DailyStoreState {
	allDailies: IDaily[];
	isLoading: boolean;
	isError: boolean;
	error: any | null;
	isFetching: boolean;
	setAllDailies: (dailies: IDaily[]) => void;
	setQueryState: (state: { isLoading: boolean; isError: boolean; error: any; isFetching: boolean }) => void;
	getDailyById: (id: string) => IDaily | undefined;
	getDailyByDate: (date: string | Date) => IDaily | undefined;
    getLastDaily: () => IDaily | undefined;
}


export const useDailyStore = create<DailyStoreState>((set, getState) => ({
	allDailies: [],
	isLoading: false,
	isError: false,
	error: null,
	isFetching: false,
	setAllDailies: (dailies) => set({allDailies: dailies}),
	setQueryState: (state) => set(state),
	getDailyById: (id) => {
		return getState().allDailies.find(daily => daily.id == id);
	},
	getDailyByDate: (date:string|Date) => {
		return getState().allDailies.find(daily => new Date(daily.published_at).toDateString() === new Date(date).toDateString());
	},
    getLastDaily: () => {
        const dailies = getState().allDailies;
        if (dailies.length === 0) return undefined;

        return dailies.reduce((latest, daily) => {
            if (!latest.published_at || !daily.published_at) return latest;
            return new Date(daily.published_at) > new Date(latest.published_at)
                ? daily
                : latest;
        }, dailies[0]);
    }
}));
