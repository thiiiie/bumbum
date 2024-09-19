"use client";
import "./styles.css";
import { ScratchCard as NScratchCard } from "next-scratchcard";

interface ScratchCardProps {
	title: string;
	onComplete?: () => void;
	height?: number;
}

export const ScratchCard = ({
	title,
	onComplete,
	height = 135,
}: ScratchCardProps) => {
	return (
		<NScratchCard
			height={height}
			image="/scratch.png"
			finishPercent={60}
			brushSize={50}
			onComplete={onComplete}
		>
			<div className="scratch-card">
				<p>{title}</p>
			</div>
		</NScratchCard>
	);
};
