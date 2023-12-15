import { useState } from 'react';
import { styled } from 'styled-components';
import { gray,point } from "../styles/Theme";

function ResultBox () {
  const [open, setOpen] = useState<boolean>(false);
  const [eng,setEng] = useState<boolean>(false);
  const address:string[] = ["서울특별시 종로구 세종로 211","서울특별시 종로구 신문로1가 150","서울특별시 종로구 태평로1가 68 "]
  const onMoreAddress = () => {
    setOpen(true);
  }

  const AddressRenderer = () => {
    if(address.length === 1) {
      return <Address>{address[0]}</Address>;
    } else {
      if(open) {
        return <>{address.map((oneOfAddress)=><Address>{oneOfAddress}</Address>)}</>
      } else {
        return <>
            <Address>{address[0]}</Address>
            <MoreAddress onClick={onMoreAddress}>해당 위치의 도로명 주소 {address.length-1}개 더 보기</MoreAddress>
          </>
          
      }
    }
  }

  return (
    <Container>
      <ZipCode>
        <div>03186</div>
        <div onClick={() => {setEng(!eng)}}>
          {eng ? "영문보기" : "한글보기"}
        </div>
      </ZipCode>
      <MainAddress>
        서울특별시 종로구 세종대로 149 (세종로, 광화문빌딩)
      </MainAddress>
      <Bottom>
        <AssortmentBox>
          <Assortment>
            도로명
          </Assortment>
        </AssortmentBox>
        <AddressBox>
          <AddressRenderer/>
        </AddressBox>
      </Bottom>
    </Container>
  )
}

export default ResultBox;

const Container = styled.div`
  width:100%;
  padding:16px 20px;
  border-bottom: 1px solid #EEEEEE;
  background-color: #FFFFFF;
`;

const ZipCode = styled.div`
  width:100%;
  display:flex;
  align-items:end;
  justify-content:space-between;
  > :first-child {
    font-size:16px;
    font-weight: 700;
    color:${point}
  }
  > :last-child {
    font-size:12px;
    font-weight: 400;
    color:${gray};
    cursor:pointer;
  }
`;

const MainAddress = styled.div`
  width:100%;
  margin-top:4px;
  margin-bottom:8px;
  font-size:16px;
  font-weight: 400;
`;

const Bottom = styled.div`
  display:flex;
`;

const AssortmentBox = styled.div`
  width:46px;
  margin-right:16px;
`;

const Assortment = styled.div`
  width:46px;
  heigth:18px;
  font-size:12px;
  font-weight:500;
  text-align:center;
  line-height:20px;
  color:${gray};
  border:1px solid ${gray};
`;

const AddressBox = styled.div`
  display:flex;
  flex-direction:column;
  gap:4px;
`;

const Address = styled.div`
  color:${gray};
  font-size: 12px;
  font-weight: 400;
  height:20px;
  line-height:20px;
`;

const MoreAddress = styled.div`
  color:${point};
  font-size: 12px;
  font-weight: 400;
  cursor:pointer;
`;