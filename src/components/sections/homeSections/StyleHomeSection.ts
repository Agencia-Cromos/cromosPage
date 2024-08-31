import styled from "styled-components";
import background from "../../../assets/header-background.png";

export const StyleHomeSection = styled.section`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: none;
  padding: 30px 0 !important;
  border-bottom: 2px solid var(--grey-1);

  @media (min-width: 768px) {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: right -15px center;
    background-size: 50%;
  }

`;
