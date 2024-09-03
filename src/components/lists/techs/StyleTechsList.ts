import styled from "styled-components";

export const StyledTechList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden; 
  padding: 20px;
  position: relative;
  width: 100%;
  z-index: 0;

  ul {
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
    transition: transform 0.5s ease;
    position: relative;
    z-index: 1;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: 0;
      right: 0;
      z-index: -1;
      background: linear-gradient(to bottom, transparent 0%, var(--background-color) 5%, var(--background-color) 95%, transparent 100%);
    }

    li {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      min-width: 100px;
      width: 50px;
      border-radius: 20px;
      padding: 10px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

      img {
        width: 50px !important;
        height: 50px !important;
        color: var(--grey-3);
      }

      p {
        font-size: 1rem;
        color: var(--grey-3);
      }
    }
  }

  @media(min-width: 768px){
    width: 50%;
  }
`;
