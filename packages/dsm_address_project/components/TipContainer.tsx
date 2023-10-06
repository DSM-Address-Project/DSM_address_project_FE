import react, { useState } from 'react'
import { styled } from "styled-components";
import { point } from "../styles/theme";

function TipContainer() {
  const examples:{keyword:string,example:string}[] = [
    {
      "keyword":"도로명 + 건물번호",
      "example":"예) 세종대로 110, 서빙고로 137"
    },{
      "keyword":"지역명(동/리) + 번지",
      "example":"예) 여수동 200, 인계동 1111"
    },{
      "keyword":"건물명, 아파트명",
      "example":"예) 반포힐스테이트, 래미안원베일리"
    },{
      "keyword":"사서함명",
      "example":"예) 서울강남우체국사서함"
    },
  ]

  return (
    <Container>
      <Tip>
        Tip
      </Tip>
      <SubTip>
        다음과 같은 방식으로 검색하시면 원하시는 결과를 더욱 빠르게 찾으실 수 있어요.
      </SubTip>
      {examples.map((example,index)=>(
        <KeywordExample key={index}>
          <div>{example.keyword}</div>
          <div>{example.example}</div>
        </KeywordExample>
      ))}
    </Container>
  )
}

export default TipContainer;

const Container = styled.div`
  width:calc(100% - 72px);
  heigth:600px;
  padding-left:36px;
  padding-right:36px;
  padding-top:48px;
`;

const Tip = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const SubTip = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top:8px;
  margin-bottom:4px;
`;

const KeywordExample = styled.div`
  margin-top:8px;
  font-size: 14px;
  font-weight: 400;
  display:flex;
  flex-direction:column;
  gap:8px;
  > :last-child {
    color:${point}
  }
`;