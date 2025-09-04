import React from 'react';
import Image from "next/image";
import {cn} from "@/lib/utils";

interface ComingSoonProps {
	title: string;
	description: string;
	className?: string;
	illustrationSrc?: string;
}

function ComingSoon({title, description, className, illustrationSrc="construction-workers"}: ComingSoonProps) {
	return (
		<div className={cn("max-w-screen-sm mx-auto mt-10", className)}>
			<Image
				src={`/images/illustrations/${illustrationSrc}.svg`}
				alt="En construction"
				width={500}
				height={302.5}
				className="mx-auto"
			/>
			<h1 className="text-center text-2xl font-semibold mt-4 text-primary-gradient">
				{title}
			</h1>
			<p className="text-center text-base text-muted-foreground mt-4">
				{description}
			</p>
		</div>
	);
}

export default ComingSoon;