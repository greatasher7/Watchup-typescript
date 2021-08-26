import { createGlobalStyle } from "styled-components";
import { reset } from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    body{
        
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`;