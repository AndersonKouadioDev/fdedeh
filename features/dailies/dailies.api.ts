import {PaginatedResponse} from "@/types";
import {IDaily} from "@/features/dailies/types";
import {api} from "@/lib/api";

export interface IDailyAPI {
	obtenirTousDailies(): Promise<PaginatedResponse<IDaily>>;
}

export const dailyAPI: IDailyAPI = {
	obtenirTousDailies(): Promise<PaginatedResponse<IDaily>> {
		return api.request<PaginatedResponse<IDaily>>({
			endpoint: `/dailies`,
			method: "GET",
		})
	},
};
