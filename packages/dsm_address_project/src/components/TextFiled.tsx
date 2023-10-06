import { ChangeEvent } from "react";
import { styled } from "styled-components";
import { cancel, search } from "../assets/icons";

interface PropsType {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function TextFiled({
  value,
  handleChange,
  setValue,
}: PropsType) {
  return (
    <Container>
      <Input
        type="text"
        placeholder="도로명, 건물명, 지번검색"
        value={value}
        onChange={handleChange}
      />
      <aside>
        {value && (
          <button
            onClick={() => {
              setValue("");
            }}
          >
            <img src={cancel} />
          </button>
        )}
        <button
          onClick={() => {
            //search
          }}
        >
          <img src={search} />
        </button>
      </aside>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #ffffff;
  border-bottom: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & aside {
    padding: 14px 16px;
    display: flex;
    gap: 12px;
  }
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 0;
  outline: none;
`;
