// transforme un titre en slug
export const slugify = (title: string): string => {
	return title
		.normalize('NFD') // Décompose les caractères accentués
		.replace(/[\u0300-\u036f]/g, '') // Supprime les accents
		.toLowerCase()
		.trim()
		.replace(/[\s\W-]+/g, '-')
		.replace(/^-+|-+$/g, '');
};