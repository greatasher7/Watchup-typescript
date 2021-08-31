import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export default createGlobalStyle`
    ${reset}
    body{
        padding: 10px;
    }
    *, *::before, *::after{
        box-sizing: border-box;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`;
