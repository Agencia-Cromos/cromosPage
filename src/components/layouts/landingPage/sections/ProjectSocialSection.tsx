'use client';

import { ProjectSocialIllustration } from "@/components/fragments/landingPage/projectSocial/ProjectSocialIllustration";
import { ProjectSocialModal } from "@/components/fragments/landingPage/projectSocial/ProjectSocialModal";
import { ProjectSocialSuccessToast } from "@/components/fragments/landingPage/projectSocial/ProjectSocialSuccessToast";
import { ProjectSocialTextBlock } from "@/components/fragments/landingPage/projectSocial/ProjectSocialTextBlock";
import { FormEvent, useEffect, useRef, useState } from "react";


const fadeUp = (delay: number) => ({
  animation: "fadeUp 0.85s ease-out forwards",
  animationDelay: `${delay}s`,
});

export function ProjectSocialSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    console.log("Formulario enviado:", payload);
    event.currentTarget.reset();
    setIsModalOpen(false);
    setShowToast(true);

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-bg-light py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-[#E2E8F0]/40" />
      <div className="pointer-events-none absolute -left-32 top-24 -z-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18)_0%,_rgba(59,130,246,0)_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-12 -z-10 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.15)_0%,_rgba(236,72,153,0)_70%)] blur-3xl" />
      <div className="relative flex w-full flex-col gap-14 lg:grid lg:grid-cols-[minmax(0,60vw)_minmax(0,1fr)] lg:items-center">
        <div className="order-1 lg:order-none" style={fadeUp(0.1)}>
          <ProjectSocialIllustration />
        </div>
        <div className="order-2 px-6 sm:px-8 lg:order-none lg:pl-0 lg:pr-16" style={fadeUp(0.2)}>
          <div className="mx-auto w-full max-w-xl lg:ml-auto lg:max-w-lg xl:max-w-xl">
            <ProjectSocialTextBlock onRequestModal={handleOpenModal} />
          </div>
        </div>
      </div>

      <ProjectSocialModal open={isModalOpen} onDismiss={handleCloseModal} onSubmit={handleSubmit} />
      <ProjectSocialSuccessToast visible={showToast} message="Indicacao enviada com sucesso!" />
    </section>
  );
}
