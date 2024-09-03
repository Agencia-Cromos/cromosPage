import styled from "styled-components";

export const StyleHeaderContainer = styled.header`
    background-color: var(--grey-5);
    height: 70px;
    width: 100%;
    border-bottom: 2px solid var(--color-primary);
    position: fixed;
    z-index: 3;

    .containerMain {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        padding: 0 20px;
        margin: auto;
        height: 100%;

        .menuIcon {
            background-color: var(--grey-4);
            border-radius: 3px;
            height: 25px;
            width: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            
            svg {
                cursor: pointer;
                color: var(--grey-1);
            }
        }

        .containerMenu{
            display: none;
        }

    }
    
    @media (min-width: 768px) {
        .containerMain {
            display: flex;
            flex-direction: row;
            
            .menuIcon {
                display: none;
            }
    
            .containerMenu{
                display: flex;
                
                ul {
                    display: flex;
                    flex-direction: row;
                }
            }
        }
    }
`;
