import styled from "styled-components";

export const StyleMessageHome = styled.section`
    margin: 30vh auto;
    padding: 20px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: 2px solid var(--color-primary);
    border-radius: 12px;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    
        h1{
            font-size: 3rem;
        }

        p{
            color: var(--grey-1-75);
            span{
                color: var(--color-primary);
                font-weight: 600;
            }
        }

    }
    button{
        height: 35px;
        width: 200px;
        background-color: transparent;
        color: var(--grey-1);
        border: 2px solid var(--color-tertiary);
    }
`