"use server"

import {ActionResponse, PaginatedResponse} from "@/types";
import {handleServerActionError} from "@/utils/handleServerActionError";
import {questionApi} from "@/features/question/question.api";
import {IQuestion} from "@/features/question/question.type";

export const obtenirToutesQuestionsAction = async (): Promise<ActionResponse<PaginatedResponse<IQuestion>>> => {
	try {
		const data = await questionApi.obtenirToutesQuestions();
		return {
			success: true,
			data: data,
			message: "Questions obtenues avec succès",
		};
	} catch (error) {
		return handleServerActionError(error, "Erreur lors de la récupération des questions");
	}
};

// export const repondreQuestionAction = async ({questionId, fullname, email, response}: {
// 	questionId: number,
// 	fullname: string,
// 	email: string,
// 	response: string
// }): Promise<ActionResponse<{ success: boolean }>> => {
// 	try {
// 		const data = await questionApi.repondreQuestion({questionId, fullname, email, response});
// 		return {
// 			success: true,
// 			data: data,
// 			message: "Réponse envoyée avec succès",
// 		};
// 	} catch (error) {
// 		return handleServerActionError(error, "Erreur lors de l'envoi de la réponse à la question");
// 	}
// };