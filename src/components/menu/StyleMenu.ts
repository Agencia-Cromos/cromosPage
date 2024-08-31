import styled from "styled-components";
import { animated } from "react-spring";


export const StyleMenu = styled(animated.div)`
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    background-color: var(--grey-5-75);
    z-index: 1;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        gap: 8px;

        a {
            color: var(--grey-3);
            font-size: var(--caption-font-size);
            font-weight: 800;
            background-color: transparent;
            padding: 8px 16px;

        }
        a:focus{
            color: var(--grey-1);
        }
    }

    @media (min-width: 768px) {
        position: static;
    }
`
