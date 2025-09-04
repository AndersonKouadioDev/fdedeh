export function addDomainToBackendImagePath(imagePath: string | null | undefined): string {
		if (!imagePath) {
				return '/images/default-image.png';
		}

		if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
				return imagePath; // Si c'est déjà une URL complète, on la retourne telle quelle
		}

		const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8081";

		// S'Assurer qu'il n'y a pas de double slash
		if (imagePath.startsWith('/')) {
				imagePath = imagePath.substring(1);
		}

		// Concaténation de l'URL de base et du chemin de l'image
		return `${baseURL}/${imagePath}`;
}