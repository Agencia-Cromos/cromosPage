import styled from "styled-components";

export const StyleProjectsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  overflow-x: scroll;
  padding: 20px !important;
  margin: 0;
  list-style-type: none;

  &::-webkit-scrollbar {
    height: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-50);
  }

  &::-webkit-scrollbar-track {
    background-color: var(--grey-4);
    border-radius: 10px;
  }


  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    min-width: 350px;
    border: 2px solid var(--grey-2);
    border-radius: 10px;
    padding: 15px 30px;

    .tech {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 75%;

      p {
        color: var(--grey-3);
        font-size: var(--headline-font-size);
      }

      span {
        font-size: var(--headline-font-size);
        color: var(--grey-3);
        background-color: var(--grey-4);
        padding: 5px 10px;
        border-radius: 5px;
      }
    }

    .description {

      p{
        color: var(--grey-1-75);
        height: 100px;
        overflow-y: hidden;
        position: relative;
  
        &:hover {
          overflow-y: auto;
  
          &::-webkit-scrollbar {
            width: 3px;
          }
  
          &::-webkit-scrollbar-thumb {
            background-color: var(--grey-3);
            border-radius: 10px;
          }
  
          &::-webkit-scrollbar-track {
            background-color: var(--grey-2);
            border-radius: 10px;
          }
        
      }
      }
    }


    figure{
      height: 300px;
      width: 300px;

      img{
        height: 100%;
        width: 100%;
      }
    }
  }
`;
