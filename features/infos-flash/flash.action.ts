"use server"

import { ActionResponse, PaginatedResponse } from "@/types";
import { handleServerActionError } from "@/utils/handleServerActionError";
import { flashApi } from "@/features/infos-flash/flash.api";
import { IFlash } from "@/features/infos-flash/flash.type";

export const obtenirToutesExclusivitesAction = async (): Promise<ActionResponse<PaginatedResponse<IFlash>>> => {
	try {
		const data = await flashApi.obtenirToutesExclusivites();
		return {
			success: true,
			data: data,
			message: "Exclusivités obtenues avec succès",
		};
	} catch (error) {
		return handleServerActionError(error, "Erreur lors de la récupération des exclusivités");
	}
};