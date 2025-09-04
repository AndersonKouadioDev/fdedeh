export interface IEmission {
    id: number;
    title: string;
    description: string;
    href: string;
    audioUrl: string;
    date: string;
    derniere_emission: string;
}

export const emissionsList: IEmission[] = [
    {
        id: 1,
        title: "La matinale",
        description: "Discussion sur les effets du numérique sur l'environnement et les solutions possibles.",
        href: "/podcasts/1",
        audioUrl: "https://example.com/audio1.mp3",
        date: "2024-01-15",
        derniere_emission: "2024-06-10"
    },
    {
        id: 2,
        title: "100% Politique",
        description: "Exploration des dernières avancées dans le domaine des énergies renouvelables.",
        href: "/podcasts/2",
        audioUrl: "https://example.com/audio2.mp3",
        date: "2024-02-20",
        derniere_emission: "2023-08-20"
    },
    {
        id: 3,
        title: "La nuit de débat",
        description: "Analyse de la biodiversité mondiale et des efforts pour la préserver.",
        href: "/podcasts/3",
        audioUrl: "https://example.com/audio3.mp3",
        date: "2024-03-10",
        derniere_emission: "2025-01-08"
    },
    {
        id: 4,
        title: "Midi News",
        description: "Démystification des idées reçues sur le changement climatique.",
        href: "/podcasts/4",
        audioUrl: "https://example.com/audio4.mp3",
        date: "2024-04-05",
        derniere_emission: "2025-05-14"
    },
    {
        id: 5,
        title: "Heure de sports",
        description: "Discussion sur les initiatives pour rendre les villes plus durables.",
        href: "/podcasts/5",
        audioUrl: "https://example.com/audio5.mp3",
        date: "2024-05-12",
        derniere_emission: "2025-08-24"
    },
    {
        id: 6,
        title: "10 minutes pour comprendre",
        description: "Examen des politiques environnementales actuelles et de leur efficacité.",
        href: "/podcasts/6",
        audioUrl: "https://example.com/audio6.mp3",
        date: "2024-06-01",
        derniere_emission: "2025-02-20"
    }
];