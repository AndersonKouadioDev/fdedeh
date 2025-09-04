// src/lib/category-colors.ts
const predefinedColors: Record<string, string> = {
	politique: "bg-[#6155F5] hover:bg-[#4E44C9] text-white",
	economie: "bg-[#FF383C] hover:bg-[#D12E31] text-white",
	social: "bg-[#FF8D28] hover:bg-[#D17622] text-white",
	sante: "bg-[#00B894] hover:bg-[#009973] text-white",
	sport: "bg-[#6C5CE7] hover:bg-[#5948B5] text-white",
	"culture & art": "bg-[#E84393] hover:bg-[#B73774] text-white",
	technologie: "bg-[#00CEC9] hover:bg-[#00A6A2] text-white",
	environnement: "bg-[#2D3436] hover:bg-[#24292C] text-white",
	lunion: "bg-[#FD79A8] hover:bg-[#CA6286] text-white"
};

export function getCategoryColor(name: string): string {
	const processedName = name.toLowerCase();
	return predefinedColors[processedName];
}
