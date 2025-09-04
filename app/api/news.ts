export interface INews {
    id: string;
    title: string;
    imageUrl: string;
    category: ICategory;
    slug: string;
    publishedAt: string;
}

export interface ICategory {
    id: string;
    name: "politique" | "économie" | "social" | "santé" | "economie";
    slug: string;
    color: string;
}

export const newsList: INews[] = [
    {
        id: "1",
        title: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        imageUrl: "/images/news/news1.png",
        category: {
            id: "1",
            name: "politique",
            slug: "politics",
            color: "bg-[#6155F5] hover:bg-[#4e42d9]"
        },
        slug: "lorem-ipsum-error",
        publishedAt: "2023-10-01T12:00:00Z"
    },
    {
        id: "2",
        title: "Le remarquable travail de l’Agence nationale de la statistique méconnu...",
        imageUrl: "/images/news/news2.png",
        category: {
            id: "2",
            name: "économie",
            slug: "Economy",
            color: "bg-[#FF383C] hover:bg-[#e63033]"
        },
        slug: "big-shape-1",
        publishedAt: "2023-10-02T12:00:00Z"
    },
    {
        id: "3",
        title: "Association des femmes de Ziguedia (Sous-Préfecture de Gboguhé, département...",
        imageUrl: "/images/news/news3.png",
        category: {
            id: "3",
            name: "social",
            slug: "Social",
            color: "bg-[#FF8D28] hover:bg-[#e6761f]"
        },
        slug: "big-shape-2",
        publishedAt: "2023-10-03T12:00:00Z"
    },
    {
        id: "4",
        title: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        imageUrl: "/images/news/news4.png",
        category: {
            id: "1",
            name: "santé",
            slug: "health",
            color: "bg-[#6155F5] hover:bg-[#4e42d9]"
        },
        slug: "lorem-ipsum-error-2",
        publishedAt: "2023-10-04T12:00:00Z"
    },
    {
        id: "5",
        title: "8èmes Jeux de la Francophonie / Il y’a 9 ans, la CI inscrivait son nom en lettres d'or dans...",
        imageUrl: "/images/news/news5.png",
        category: {
            id: "2",
            name: "economie",
            slug: "economy",
            color: "bg-blue-500 hover:bg-blue-600"
        },
        slug: "big-shape-1-2",
        publishedAt: "2023-10-05T12:00:00Z"
    },
    {
        id: "6",
        title: "Épidémie de choléra au PPA, quand une phrase anodine déclenche des réactions ...",
        imageUrl: "/images/news/news6.png",
        category: {
            id: "3",
            name: "social",
            slug: "social",
            color: "bg-[#FF8D28] hover:bg-[#e6761f]"
        },
        slug: "big-shape-2-2",
        publishedAt: "2023-10-06T12:00:00Z"
    }
];
