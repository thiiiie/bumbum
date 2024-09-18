'use client';
import { useState } from "react";
import { ScratchCard } from "../ScratchCard"
import { SuccessModal } from "../SuccessModal"

export const CardsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleToggleModal() {
    setIsModalOpen(state => !state);
  }


  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <ScratchCard title="Tente novamente" />
      <ScratchCard title="Tente novamente" />
      <ScratchCard title="Parabéns, você ganhou 65% de desconto" onComplete={handleToggleModal} />

      <SuccessModal
        checkoutUrl="/" // colocar url de pagamento aqui
        isOpen={isModalOpen}
        onClose={handleToggleModal}
      />
    </section>
  )
}
