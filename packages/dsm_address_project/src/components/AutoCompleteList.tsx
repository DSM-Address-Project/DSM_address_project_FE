import { styled } from "styled-components";
import Parser from "html-react-parser";
import { useEffect, useState } from "react";

interface PropsType {
  keyword: string;
  autoCompleteSearch: (keyword: string) => void;
}

//test 더미값
const autoCompleteObject = [
  "서울특별시 종로구 세종대로",
  "서울특별시 중구 세종대로",
  "서울특별시 중구 세종대로1길",
  "서울특별시 중구 세종대로2가길",
  "서울특별시 중구 세종대로2길",
  "서울특별시 중구 세종대로2나길",
  "서울특별시 중구 세종대로3길",
  "서울특별시 중구 세종대로4길",
  "서울특별시 중구 세종대로5길",
  "경기도 여주시 세종대왕면",
];

export default function AutoCompleteList({
  keyword,
  autoCompleteSearch,
}: PropsType) {
  const [autoCompleteState, setAutoCompleteState] = useState<Array<string>>([]);

  useEffect(() => {
    if (keyword) {
      if (autoCompleteObject.filter((item) => item.includes(keyword))[0])
        setAutoCompleteState(
          autoCompleteObject.filter((item) => item.includes(keyword)),
        );
    } else setAutoCompleteState(autoCompleteObject);
  }, [keyword]);

  const highlight = (item: string) => {
    return item.replace(keyword, `<span>${keyword}</span>`);
  };

  return (
    <Container>
      {autoCompleteState.map((item) => (
        <AutoCompleteItem onClick={() => autoCompleteSearch(item)}>
          {Parser(highlight(item))}
        </AutoCompleteItem>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 51px;
  left: 0;
  width: 100vw;
  height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const AutoCompleteItem = styled.div`
  width: 100vw;
  height: 45px;
  padding: 12px 16px;
  line-height: 130%;
  border-bottom: 1px solid #eee;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  > span {
    color: #de781f;
  }
`;
