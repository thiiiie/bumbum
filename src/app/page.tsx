import { CardsList } from "@/components/CardsList";
import Image from "next/image";

export default function Home() {
	return (
		<div className="w-full h-[100dvh] overflow-hidden">
			<main className="max-w-[400px] w-[80%] mx-auto flex flex-col items-center justify-center gap-6 pt-10 overflow-hidden">
				<Image
					src="/logo.png"
					alt="BUMBUM logo imagem"
					className="w-[80%] mb-10"
					width={679}
					height={170}
					priority
				/>

				<CardsList />
			</main>
		</div>
	);
}
