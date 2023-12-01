import { useState } from "react";
import TextFiled from "./components/TextFiled";
import TipContainer from "./components/TipContainer";

function App() {
  const [keyword, setKeyword] = useState(""); //검색결과 state
  console.log(keyword);

  return (
    <>
      <div>
        <TextFiled
          onSubmit={(keyword) => {
            setKeyword(keyword);
          }}
        />
      </div>
      <TipContainer />
    </>
  );
}

export default App;
