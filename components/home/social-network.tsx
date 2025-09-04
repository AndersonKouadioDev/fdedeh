import React from 'react';
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Icon} from "@/components/ui/icon";
import {IconifyIcon} from "@iconify/react";


export interface ISocialNetworkProps {
    className?: string;
    href: string;
    icon: IconifyIcon | string;
    name: string;
}

function SocialNetwork({href = "#", ...props}: ISocialNetworkProps) {
    return (
        <Link
            href={href}
            className={cn(
                "hover:scale-x-105 transition-transform duration-200 ease-in-out",
                "flex items-center gap-4 w-full bg-custom-gradient py-2.5 pl-4 text-white rounded-full",
                props.className
            )}
            target="_blank">
            <Icon icon={props.icon}/>
            <span>{props.name}</span>
        </Link>
    );
}

export default SocialNetwork;