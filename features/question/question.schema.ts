import {z} from "zod";

export const reponseQuestionAddSchema = z.object({
	contenu: z.string()
		.min(1, "Le contenu de la réponse ne peut pas être vide")
		.max(1000, "Le contenu de la réponse ne peut pas dépasser 1000 caractères")
		.trim()
}).refine(data => !!data.contenu, {
	message: "Le contenu de la réponse est requis",
	path: ["contenu"]
});