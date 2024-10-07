"use client";
import Lottie from "lottie-react";
import { useState } from "react";
import animationData from "../../../public/confetti.json";
import { ScratchCard } from "../ScratchCard";
import { SuccessModal } from "../SuccessModal";

const SECOUNDS_TO_SHOW_MODAL = 2; // 3 SECONDS

export const CardsList = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);

	function handleToggleModal() {
		setIsModalOpen((state) => !state);
	}

	function handleReward() {
		setShowConfetti(true);
		setTimeout(() => handleToggleModal(), SECOUNDS_TO_SHOW_MODAL * 1000);
	}

	return (
		<section className="flex flex-col items-center justify-center gap-6">
			{showConfetti && (
				<Lottie
					animationData={animationData}
					autoPlay
					className="fixed top-0 left-0 z-[9999]"
				/>
			)}

			<ScratchCard title="Tente novamente" />
			<ScratchCard title="Tente novamente" />
			<ScratchCard
				title="Parabéns, você ganhou 65% de desconto"
				onComplete={handleReward}
			/>

			<SuccessModal
				checkoutUrl="https://bumbum-git-main-thixs-projects.vercel.app/?__vercel_draft=1" // colocar url de pagamento aqui
				isOpen={isModalOpen}
				onClose={handleToggleModal}
			/>
		</section>
	);
};
