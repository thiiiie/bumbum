"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

interface SuccessModalProps {
	onClose?: () => void;
	isOpen?: boolean;
	checkoutUrl: string;
}

export const SuccessModal = ({
	onClose,
	isOpen,
	checkoutUrl,
}: SuccessModalProps) => {
	return (
		<Dialog.Root modal open={isOpen}>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-black/50 w-screen min-h-[100dvh] fixed inset-0 z-[9999] flex items-center justify-center">
					<Dialog.Content className="bg-scratch-card-background border-8 border-scratch-card-border text-scratch-card-foreground p-4 rounded-xl text-center max-w-[350px] w-[90%]">
						<Dialog.Title className="text-2xl font-bold">
							🎉 Parabéns! 🎉
						</Dialog.Title>

						<Dialog.Description className="my-6 text-xl font-bold">
							Você ganhou 65% de desconto no BUMBUM CREAM, aproveite agora e
							acabe com suas estrias!
						</Dialog.Description>

						<Dialog.Close className="my-4 outline-none" onClick={onClose}>
							<Link
								href={checkoutUrl}
								className="px-6 py-4 bg-primary rounded-lg"
							>
								Aproveitar agora!
							</Link>
						</Dialog.Close>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
