import type {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Fernand Dedeh Blog",
		short_name: "FDedeh Blog",
		description: 'Le blog de Fernand Dédéh : analyses sportives, réflexions médiatiques et prises de position en Côte d\'Ivoire.',
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#000000',
		icons: [
			{
				"src": "/web-app-manifest-192x192.png",
				"sizes": "192x192",
				"type": "image/png",
				"purpose": "maskable"
			},
			{
				"src": "/web-app-manifest-512x512.png",
				"sizes": "512x512",
				"type": "image/png",
				"purpose": "maskable"
			}
		],
	}
}