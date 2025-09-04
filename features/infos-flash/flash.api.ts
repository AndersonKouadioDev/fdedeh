import { api } from "@/lib/api";
import { PaginatedResponse } from "@/types";
import {IFlash} from "@/features/infos-flash/flash.type";

export interface IFlashAPI {
	obtenirToutesExclusivites(): Promise<PaginatedResponse<IFlash>>;
}

export const flashApi: IFlashAPI = {
	obtenirToutesExclusivites(): Promise<PaginatedResponse<IFlash>> {
		return api.request<PaginatedResponse<IFlash>>({
			endpoint: `/exclusivities`,
			method: "GET",
		});
	},
};
