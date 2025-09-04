import React from 'react';
import {cn} from "@/lib/utils";

function SectionTitle({text, className}: {text: string; className?: string}) {
    return (
        <h2 className={cn(
            "bg-custom-gradient text-white text-nowrap md:text-lg lg:text-xl font-bold pl-4 rounded-tr-full",
            "w-max pr-10 lg:pr-44 py-0.5 first-letter:capitalize",
            className,
        )}>
            {text}
        </h2>
    );
}

export default SectionTitle;