import { useState } from "react";
import TextFiled from "./components/TextFiled";
import TipContainer from "./components/TipContainer";

function App() {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <TextFiled
        onSubmit={(keyword) => {
          setKeyword(keyword);
        }}
      />
      <TipContainer />
    </>
  );
}

export default App;
