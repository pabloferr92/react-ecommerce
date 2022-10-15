import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  font-size : 15px;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: ${(props) => props.theme.colors.background}
}

a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

/* --boulder: #7b7b7b;
--shark: #1d2121;
--espresso: #591e17;
--himalaya: #6c581d;
--tundora: #4e4948;
--saffron: #f7cf3a;
--silver-chalice: #ababab;
--nobel: #b4b4b4;
--silver: #bcbcbc; */

#__next {
  width: 100%;
  max-height: 100%;
  height: 100%;
  margin: 0;
}

.col {
  margin: 0;
}
.row {
  margin: 0;
}

`;
