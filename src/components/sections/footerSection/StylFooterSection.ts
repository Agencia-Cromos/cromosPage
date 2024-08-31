import styled from "styled-components";

export const StyleFooterSection = styled.footer`
    background-color: var(--grey-5);
    padding-top: 50px !important;
    padding-bottom: 50px !important;

    .containerFooter{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        max-width: 900px;
        padding: 0 20px !important;
        margin: auto !important;
        height: 100%;
    }

    .perfilFotter{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        img{
            border-radius: 100%;
            width: 85px;
            height: 90px;
        }

        div{
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;

            p{
                color: var(--grey-3);
                text-align: center;
                line-height: 20px;
            }
        }
    }

    ul{
        display: flex;
        align-items: center;
        gap: 15px;
    }

    @media(min-width: 768px){
        .containerFooter{
            flex-direction: row;
            justify-content: space-between;
        }

        .perfilFotter{
            flex-direction: row;
            width: 50%;
            
            div{
                align-items: flex-start;

                p{
                    text-align: left ;
                }
            }
        }
    }
`