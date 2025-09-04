import React from 'react';
import {Link} from "@/i18n/navigation";
import {IMenuItem} from "@/components/partials/public-header/constants";
import {ChevronDown} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {cn} from "@/lib/utils";

type NavLinkProps = {
	prefetch?: boolean;
	onMouseEnter?: (name: string | null) => void;
	activeSubMenu?: string | null;
	pathName?: string;
} & IMenuItem;

function NavLink({prefetch = false, ...props}: NavLinkProps) {
	const dropdownVariants = {
		hidden: {opacity: 0, y: -10, scale: 0.95},
		visible: {opacity: 1, y: 0, scale: 1},
	};

	return (
		<div className="relative"
		     onMouseEnter={() => props.hasSubMenu && props.onMouseEnter?.(props.name)}
		     onMouseLeave={() => props.hasSubMenu && props.onMouseEnter?.(null)}
		>
			{props.hasSubMenu ? (
				<div
					className={cn(
						"flex items-center font-medium transition-all",
						"hover:bg-custom-gradient hover:text-white",
						props.pathName?.includes(props.href) && "bg-custom-gradient text-white font-bold",
						"rounded-full py-2 px-4 duration-150 hover:font-bold",
						"cursor-pointer"
					)}
				>
					<span>{props.name}</span>
					<ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"/>
				</div>
			) : (
				<Link
					prefetch={prefetch}
					href={props.href}
					className={cn(
						"flex items-center font-medium transition-all",
						"hover:bg-custom-gradient hover:text-white",
						props.pathName?.includes(props.href) && "bg-custom-gradient text-white font-bold",
						"rounded-full py-2 px-4 duration-150 hover:font-bold"
					)}
				>
					<span>{props.name}</span>
				</Link>
			)}
			{props.hasSubMenu && (
				<AnimatePresence>
					{props.activeSubMenu === props.name && (
						<motion.div
							className="border-border bg-background/95 absolute top-full left-0 mt-2 w-64 overflow-hidden rounded-xl border shadow-xl backdrop-blur-lg"
							variants={dropdownVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{duration: 0.2}}
						>
							{props.subMenuItems?.map((subItem) => (
								<Link
									prefetch={prefetch}
									key={subItem.name}
									href={subItem.href}
									className="group text-foreground block px-4 py-3 font-normal transition-colors duration-200"
								>
									<span
										className="group-hover:bg-custom-gradient group-hover:text-transparent bg-clip-text"> {subItem.name} </span>
								</Link>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			)}
		</div>
	);
}

export default NavLink;