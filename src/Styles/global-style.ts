import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export default createGlobalStyle`
    ${reset}
    body{
        padding: 10px;
        background-color: rgb(40, 40, 40);
        color: rgb(240, 240, 240);
    }
    *, *::before, *::after{
        box-sizing: border-box;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`;
