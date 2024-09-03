import { useState } from 'react';
import { HeaderContainer } from "../../components/containers/HeaderContainer/HeaderContainer";
import { Menu } from "../../components/menu/Menu";
import { useTransition, animated, config } from "react-spring";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const transitions = useTransition(openMenu, {
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
    config: config.default,
  });

  return (
    <>
      <HeaderContainer openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {transitions((style, item) =>
        item ? (
          <animated.div className={"headerMenu-animate"} style={style}>
            <Menu setOpenMenu={setOpenMenu} />
          </animated.div>
        ) : null
      )}
    </>
  );
}