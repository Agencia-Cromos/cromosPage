import styled from "styled-components";

export const StyleDescriptionArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media(min-width: 768px){
    width: 50%;
  }

  h1 {
    margin-top: 20px;

    span {
      color: var(--color-primary);
      font-family: 700;
      line-height: 35px;
    }
  }

  .quote {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 500px;
    gap: 20px;
    
    p {
      color: var(--grey-3);
      font-size: var(--caption-font-size);
      font-weight: var(--font-weight-bold);
    }
    
    cite {
      align-self: flex-end;
      color: var(--grey-2);
      font-size: var(--caption-font-size);
    }
  }

  .aboutMe {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      border-radius: 10px;
      background-color: var(--grey-5);
      padding: 10px;

      p{
        color: var(--grey-1-75);

      }
      
      span{
        /* color: var(--grey-1); */
        font-weight:700;
      }
    .text {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .rest_text {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    svg{
      height: 25px;
      width: 25px;
    }
  }
`
