import React from 'react';
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";
import {ICategory} from "@/features/articles/types/article.type";
import {getCategoryColor} from "@/features/articles/utils/category-colors";

function CategoryBadge({category, className}: { category: ICategory, className: string }) {
	return (
		<Badge className={cn(
			"first-letter:capitalize text-white rounded-2xl p-2 text-xs",
			getCategoryColor(category.name),
			className
		)}>
			{category.name}
		</Badge>
	);
}

export default CategoryBadge;