import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faPython,
  faNode,
  faReact,
  faNpm,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { StyledTechList } from "./StyleTechsList";

interface ITechIcon {
  icon: IconDefinition;
  name: string;
}

export function TechList() {
  const icons: ITechIcon[] = [
    { icon: faHtml5, name: "HTML5" },
    { icon: faCss3, name: "CSS3" },
    { icon: faJs, name: "JavaScript" },
    { icon: faPython, name: "Python" },
    { icon: faNode, name: "Node.js" },
    { icon: faReact, name: "React" },
    { icon: faNpm, name: "npm" },
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
                <FontAwesomeIcon icon={item.icon} />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </StyledTechList>
  );
}
