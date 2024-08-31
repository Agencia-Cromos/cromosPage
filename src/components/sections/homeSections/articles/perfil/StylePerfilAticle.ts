import styled from "styled-components";

export const StylePerfilArticle = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    align-items: center;
    max-width: 400px;
    margin-bottom: 30px !important;
    margin-top: 60px !important;

    .image{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
        border-radius: 100%;
        width: 65px;
        height: 65px;
        border: 2px solid var(--color-primary);

        img {
          height: 100%;
          width: 100%;
          border-radius: 100%;
        }
    }
`
