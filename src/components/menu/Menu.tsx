import React from 'react';
import { StyleMenu } from './StyleMenu';
import { SpringValue } from 'react-spring';

interface IPropsMenu {
  menuAnimation?: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  };
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Menu({ menuAnimation, setOpenMenu }: IPropsMenu) {
  return (
    <StyleMenu style={menuAnimation}>
      <ul>
        <li>
          <a href="#home" onClick={() => { setOpenMenu(false) }}>Home</a>
        </li>
        <li>
          <a href="#projects" onClick={() => { setOpenMenu(false) }}>Projects</a>
        </li>
        <li>
          <a href="#contacts" onClick={() => { setOpenMenu(false) }}>Contacts</a>
        </li>
        <li>
          <a href="#networks" onClick={() => { setOpenMenu(false) }}>Digital Media</a>
        </li>
      </ul>
    </StyleMenu>
  );
}
