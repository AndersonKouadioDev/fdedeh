import React from 'react';
import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {IEmission} from "@/app/api/emissions";
import {dateFormat} from "@/utils/date-format";

function EmissionCard({emission}: { emission: IEmission }) {
    return (
        <Link
            href={emission.href}
            className={cn("group block h-full duration-300")}
        >
            <div
                className={cn("bg-custom-gradient relative rounded-3xl p-4 shadow hover:shadow-lg",
                    "transition-shadow overflow-hidden flex flex-col justify-center min-h-52 lg:min-h-72")}
            >
                <h2 className="text-white text-lg md:text-2xl lg:text-4xl font-extrabold leading-tight max-w-56 uppercase">
                    {emission.title}
                </h2>
                <Image
                    src={"/logo-white.png"}
                    alt={"logo blanc"}
                    width={100}
                    height={100}
                    className="absolute bottom-0 left-0"
                />
            </div>
            <h2 className="mt-4 transition-all duration-300 block font-bold uppercase group-hover:underline">
                {emission.title}
            </h2>
            <span className="text-[#595959] mt-4">
                    Dernière émission - <time className="font-bold">{dateFormat(emission.derniere_emission)}</time>
            </span>
        </Link>
    );
}

export default EmissionCard;