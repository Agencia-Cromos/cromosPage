import styled from "styled-components";


export const StyleProjectsSection = styled.section`
    background-color: var(--grey-5);
    padding-top: 30px !important;

    .mainInfos{
        display: flex;
        flex-direction: column;
        gap: 15px;

        h3{
            font-size: var(--title3-font-size);
        }

        p{
            font-size: var( --headline-font-size);

            span{
                color: var(--color-tertiary);
            }
        }
    }

    .projects{
        margin-top: 30px;
        width: 100%;
    }
`