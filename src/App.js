import React from "react";

import Routes from "./routes";

import 
  GlobalStyle
 from "./styles/GlobalStyle";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;