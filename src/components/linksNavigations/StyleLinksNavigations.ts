import styled from "styled-components";


export const StyleLinksNavigations = styled.div`
    margin-top: 30px !important;
    display: flex;
    flex-direction: row;
    gap: 30px;

    .projects{
        background-color: var(--color-primary);
        border-radius: 10px;
        color: var(--grey-1);
        font-weight: 700;
        padding: 15px 30px;

        &:hover {
            background-color: var(--color-primary-50);
        }
    }

    .github{
        &:hover {
            transform: scale(1.1);
        }
    }
`