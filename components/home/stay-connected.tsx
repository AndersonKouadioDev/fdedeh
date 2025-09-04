import React from 'react';
import SocialNetwork, {ISocialNetworkProps} from "@/components/home/social-network";
import Publicite from "@/components/publicite";
import {cn} from "@/lib/utils";

const socialNetworks: ISocialNetworkProps[] = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/yourpage",
        icon: "fa6-brands:facebook-f",
        className: "bg-[#448AE9]"
    },
    {
        name: "Twitter",
        href: "https://www.twitter.com/yourpage",
        icon: "mdi:twitter",
        className: "bg-[#1CA1F2]"
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/yourpage",
        icon: "fa6-brands:instagram",
        className: "bg-gradient-to-r from-[#863FA6] via-[#E12C61] to-[#F46F46]"
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/yourchannel",
        icon: "fa6-brands:youtube",
        className: "bg-[#F1563E]"
    },
];

function StayConnected({className = ''}: { className?: string }) {
    return (
        <aside className={cn("md:pt-8",className)}>
            <h6 className="font-extrabold uppercase text-lg">
                Restez connecté
            </h6>
            <ul className="mt-4 space-y-5 h-full">
                {socialNetworks.map((network, index) => (
                    <li key={index}>
                        <SocialNetwork
                            href={network.href}
                            icon={network.icon}
                            name={network.name}
                            className={network.className}
                        />
                    </li>
                ))}
                <Publicite className="block" bannerPosition="SIDEBAR_RIGHT"/>
            </ul>
        </aside>
    );
}

export default StayConnected;