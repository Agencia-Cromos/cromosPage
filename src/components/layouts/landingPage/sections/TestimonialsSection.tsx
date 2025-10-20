"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/common/container";
import { TestimonialCard } from "@/components/fragments/landingPage/testimonials/TestimonialCard";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Costa",
    role: "CEO - Vision Tech Group",
    quote:
      "A equipe da CROMOS entendeu nossa dor de forma cirurgica e entregou um sistema que revolucionou nossa operacao.",
  },
  {
    name: "Lucas Andrade",
    role: "Fundador - SmartGo Logistics",
    quote:
      "Raros profissionais com tanto comprometimento e clareza tecnica. A entrega foi rapida, bonita e funcional.",
  },
  {
    name: "Rafael Monteiro",
    role: "Diretor - Infinity Solutions",
    quote:
      "Confiei a CROMOS nosso portal principal, e o resultado superou as expectativas. Atendimento e tecnologia de ponta.",
  },
];

const CAROUSEL_DUPLICATION = 3;
const MOBILE_DUPLICATED_TESTIMONIALS: Testimonial[] = Array.from(
  { length: CAROUSEL_DUPLICATION },
  () => TESTIMONIALS,
).flat();

const fadeUp = (delay: number) => ({
  animation: "fadeUp 0.85s ease-out forwards",
  animationDelay: `${delay}s`,
});

export function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) {
      return;
    }

    const desktopQuery = window.matchMedia("(min-width: 640px)");

    if (desktopQuery.matches) {
      return;
    }

    const getSegmentWidth = () => container.scrollWidth / CAROUSEL_DUPLICATION;

    const repositionToMiddle = () => {
      const segmentWidth = getSegmentWidth();
      if (!segmentWidth || Number.isNaN(segmentWidth)) {
        return;
      }
      container.scrollLeft = segmentWidth;
    };

    let animationFrame: number | null = null;
    let isJumping = false;

    const handleScroll = () => {
      if (isJumping) {
        return;
      }

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        const segmentWidth = getSegmentWidth();
        if (!segmentWidth || Number.isNaN(segmentWidth)) {
          animationFrame = null;
          return;
        }

        const wrapThreshold = segmentWidth * 0.2;
        const upperLimit = segmentWidth * (CAROUSEL_DUPLICATION - 1);

        if (container.scrollLeft <= wrapThreshold) {
          isJumping = true;
          container.scrollLeft += segmentWidth;
          requestAnimationFrame(() => {
            isJumping = false;
          });
        } else if (container.scrollLeft >= upperLimit - wrapThreshold) {
          isJumping = true;
          container.scrollLeft -= segmentWidth;
          requestAnimationFrame(() => {
            isJumping = false;
          });
        }

        animationFrame = null;
      });
    };

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        return;
      }
      repositionToMiddle();
    };

    const handleQueryChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        repositionToMiddle();
      }
    };

    repositionToMiddle();

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", handleQueryChange);
    } else {
      desktopQuery.addListener(handleQueryChange);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (desktopQuery.removeEventListener) {
        desktopQuery.removeEventListener("change", handleQueryChange);
      } else {
        desktopQuery.removeListener(handleQueryChange);
      }
    };
  }, []);

  return (
    <section id="testimonialsSection" className="relative overflow-hidden bg-[#05080E] py-28 sm:py-32">
      <div className="pointer-events-none absolute -inset-x-24 -top-56 -z-5 h-[480px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(76,159,255,0.12)_0%,_rgba(9,18,40,0)_70%)] blur-3xl" />
      <Container variant="default" className="mx-auto flex flex-col items-center text-center">
        <div className="max-w-3xl" style={fadeUp(0.05)}>
          <p className="font-headline text-4xl text-white sm:text-5xl">O que nossos clientes dizem</p>
          <p className="mt-4 text-pretty font-sans text-base text-gray-400 sm:text-lg">
            Clientes que confiaram na CROMOS e tiveram resultados reais.
          </p>
        </div>

        <div
          className="mt-12 w-full sm:hidden"
          role="region"
          aria-label="Depoimentos em carrossel horizontal"
          style={fadeUp(0.18)}
        >
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {MOBILE_DUPLICATED_TESTIMONIALS.map((testimonial, index) => (
              <div key={`${testimonial.name}-${index}`} className="shrink-0 snap-center basis-full">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 hidden w-full gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3" aria-live="polite">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={testimonial.name} style={fadeUp(0.18 + index * 0.08)}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <p
          className="mt-12 max-w-xl text-pretty text-sm text-gray-500 sm:text-base"
          style={fadeUp(0.46)}
        >
          Cada parceria e construida com empatia, propósito e inovação.
        </p>
      </Container>
    </section>
  );
}
