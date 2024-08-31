import styled from "styled-components";

export const StyleContactsSection = styled.section`
  padding-top: 40px !important;
  background-color: var(--grey-5-75);

  .info__cta{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 80%;

        h2{
            line-height: 35px;
            text-align: left;
        }
    
        span{
            color: var(--color-primary);
        }

        p{
            color: var(--grey-3);
            width: 90%;
            line-height: 20px;
        }
  }

  .contacts{
    display: flex;
    flex-direction: column;
    gap: 40px;

    article{
      display: flex;
      gap: 20px;
      max-width: 400px;

      img{
        height: 80px;
        width: 80px;
      }

      div{
        display: flex;
        flex-direction: column;
        gap: 10px;

        p{
          color: var(--grey-3);
          font-size: var(--caption-font-size);
        }

        a{
          color: var(--color-primary);
          padding: 2px;
          width: fit-content;

          &:hover{
            color: var(--color-primary-50);
          }
        }
      }
    }
  }


  .contactsContainer{
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 1000px;
    padding: 0 20px !important;
    margin: auto !important;
    height: 100%;
    padding-bottom: 50px !important;

    @media(min-width: 768px){
      flex-direction: row;
      gap: 80px;

      .info__cta{
        margin-top: 50px;
      }
    }
  }


`;
