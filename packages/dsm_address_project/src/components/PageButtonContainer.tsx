import { useState } from "react";
import { styled } from "styled-components"
import PageButton from "./PageButton";

export default function PageButtonContainer() {
  const pages:number[] = [1,2,3,4,5];

  const [pageNum, setPageNum] = useState<number>(1);

  const onClick = (pageNum:number) => {
    setPageNum(pageNum);
  }

  return (
    <Wrapper>
      {pages.map((index)=>
        <PageButton onClick={() => {
          onClick(index);
        }} isSelected={index === pageNum} key={index}>
          {(index).toString()}
        </PageButton>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  gap:8px;
  margin-top:50px;
  height:30px;
`;