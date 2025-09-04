import Image from "next/image";
import LogoFd from "@/components/logo-fd";
import Link from "next/link";

export default function PublicFooter() {
	return (
		<footer className="bg-black text-white mt-16 w-full place-self-end rounded-t-xl">
			<div className="mx-auto max-w-screen-2xl px-4 pt-6 pb-6 sm:px-6 lg:px-8 lg:pt-10">
				<div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
					<div className="mx-auto">
						<LogoFd
							className="size-36 md:size-56 lg:size-64 transition-all duration-300 max-md:mx-auto"
						/>

						<p className="mt-2 max-w-md text-center leading-relaxed sm:max-w-xs md:text-left font-bold">
							Le portail de référence de l&#39;actualité ivoirienne
						</p>
					</div>

					<div className="mx-auto text-center w-full max-w-xl">
						<h6 className="text-lg md:text-xl lg:text-3xl">
							Projet de modernisation de la presse: une stratégie de transformation digitale
							pour tout ces acteurs.
						</h6>
						<p className="text-center mx-auto text-gray-300 mt-4">
							Idée originale, conçue et développée par {" "}
							<Link href="https://www.lunion-lab.com/" className="font-semibold">LUNION-LAB</Link>.
						</p>
					</div>

					<div className="mx-auto size-24 md:size-40 lg:size-48 object-contain relative">
						<Image
							src="/logo-lunion.png"
							alt="LUNION-LAB"
							fill
							className="mx-auto md:mx-0 transition-all duration-300"
						/>
					</div>
				</div>

				<div className="mt-10 pt-6">
					<p className="text-center text-white/70 mt-4 text-sm transition sm:order-first sm:mt-0">
						COPYRIGHT &copy; 2025 Fernand Dedeh, Développé par {" "}
						<strong className="font-semibold">
							LUNION-LAB
						</strong> .
					</p>
				</div>
			</div>
		</footer>
	);
}
