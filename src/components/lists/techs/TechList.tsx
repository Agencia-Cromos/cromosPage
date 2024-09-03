import { useState, useEffect } from "react";
import { StyledTechList } from "./StyleTechsList";

interface ITechIcon {
  icon: string;
  name: string;
}

export function TechList() {
  const icons: ITechIcon[] = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", name: "Django" },
    { icon: "https://www.django-rest-framework.org/img/logo.png", name: "DRF" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "Express" },
    { icon: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg", name: "Prisma" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
    { icon: "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png", name: "Styled" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", name: "MUI" },
    { icon: "https://vitejs.dev/logo.svg", name: "Vite" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", name: "npm" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", name: "Redux" },
    { icon: "https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png", name: "Vercel" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", name: "Firebase" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma" },
  ];

  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        return newPosition;
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(autoSlide);
    }, 3600000);

    return () => clearInterval(autoSlide);
  }, [icons.length]);

  const totalDuplications = 100;
  const visibleCards = 3;
  const cardWidth = 60;

  const duplicatedIcons: ITechIcon[] = Array.from(
    { length: totalDuplications * icons.length + visibleCards },
    (_, index) => icons[index % icons.length]
  );

  const getFontSize = (name: string) => {
    if (name.length > 8) {
      return '0.7em';
    }
    return '0.9em';
  };

  return (
    <StyledTechList>
      <div className="slider">
        <ul
          style={{
            transform: `translateX(-${currentPosition * cardWidth}px)`,
            width: `${(totalDuplications + 1) * icons.length * cardWidth}px`,
          }}
        >
          {duplicatedIcons.map((item, index) => (
            <li key={index}>
              <img src={item.icon} alt={item.name} style={{ width: '1.5em', height: '1.5em' }} />
              <p style={{ fontSize: getFontSize(item.name) }}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </StyledTechList>
  );
}