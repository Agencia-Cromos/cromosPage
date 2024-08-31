import { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import { StyleDescriptionArticle } from "./StyleDescriptionArticle";
import { FaEllipsisH } from "react-icons/fa";

export function DescriptionArticle() {
  const [isHovered, setIsHovered] = useState(false);
  const [showEllipsis, setShowEllipsis] = useState(true);

  const transitions = useTransition(isHovered, {
    from: { maxHeight: 0, opacity: 0, transform: 'translateY(-20px)' },
    enter: { maxHeight: 1000, opacity: 1, transform: 'translateY(0)' },
    leave: { maxHeight: 0, opacity: 0, transform: 'translateY(-20px)' },
    config: { ...config.gentle, duration: 500 },
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (!isHovered) {
      timer = setTimeout(() => {
        setShowEllipsis(true);
      }, 500); // 500ms delay, ajuste conforme necessário
    } else {
      setShowEllipsis(false);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <StyleDescriptionArticle>
      <h1>
        Vamos Transformar ideias em <span> soluções digitais </span> através de um site
      </h1>
      <div className="quote">
        <p>
          "Nos dias de hoje um negócio sem site é um negócio que trabalha de porta fechada, e um site mal feito
          é um negocio que espanta cliente"
        </p>
        <cite>- Natã Spitz Alves</cite>
      </div>
      <div 
        className="aboutMe"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text">
          <p>
            Transformar ideias em realidade digital é minha <span>paixão</span>. Com expertise em <span>React</span> e <span>Next.js</span>, 
            e mais de dois anos de experiência, desenvolvo soluções que encantam e funcionam. Anos de estudo sobre <span>comportamento humano</span> me 
            capacitam a criar interfaces que realmente ressoam com os usuários, 
            tornando cada interação significativa.
          </p>
          {transitions((style, item) =>
            item ? (
              <animated.div className="rest_text" style={style}>
                <p>
                  A combinação de <span>estética</span> e <span>funcionalidade</span> é essencial no desenvolvimento de sites e aplicativos. 
                  Com profundo conhecimento em <span>design UX</span> e <span>UI</span>, e experiência em linguagem comportamental, construo 
                  plataformas que são extensões vitais das marcas. Cada projeto é uma oportunidade de transformar 
                  a presença online em um canal eficaz para engajar e converter.
                </p>
                <p>
                  Trabalhando de perto com empresários, traduzo suas necessidades em <span>soluções digitais personalizadas</span>. 
                  Minha experiência em <span>back-end</span> com <span>Python</span> e <span>Django</span> complementa a criação de interfaces atraentes, 
                  garantindo que o produto final seja completo e funcional.
                </p>
                <p>
                  Acredito que <span>estratégia</span> e <span>tecnologia</span> devem andar juntas. Meu compromisso é ajudar empresas a prosperarem 
                  online, oferecendo habilidades técnicas e uma visão estratégica que impulsiona resultados duradouros. 
                  Com a abordagem certa, o <span>sucesso</span> é inevitável.
                </p>
              </animated.div>
            ) : null
          )}
        </div>
        {showEllipsis && <FaEllipsisH />}
      </div>
    </StyleDescriptionArticle>
  );
}