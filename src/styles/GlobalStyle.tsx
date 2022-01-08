import * as styled from "styled-components";
import reset from "styled-reset";

const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }

  #root {
    height: 100vh;
    padding: 20px;
    background-color: ${(props) => props.theme.bgColor};
  }
`;

export default GlobalStyle;
