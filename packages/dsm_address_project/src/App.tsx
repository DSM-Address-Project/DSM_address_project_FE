import { ChangeEvent, useState } from "react";
import TextFiled from "./components/TextFiled";

function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  return (
    <>
      <TextFiled value={searchInput} setValue={setSearchInput} handleChange={handleChange} />
    </>
  );
}

export default App;
