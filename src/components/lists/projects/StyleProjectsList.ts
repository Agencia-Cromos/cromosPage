import styled from "styled-components";

export const StyleProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    max-width: 270px;
    border: 2px solid var(--grey-2);
    border-radius: 10px;
    padding: 15px 30px;

    .tech {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 30%;

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
      color: var(--grey-1-75);
      height: 100px;
      overflow-y: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
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

    .links {
      display: flex;
      justify-content: space-between;
      gap: 20px;

      a {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
        text-decoration: none;
        color: var(--grey-3);

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
