import useFrom from "../hooks/useForm";
import { styled } from "styled-components";
import { cancel, search } from "../assets/icons";

interface PropsType {
  onSubmit: (keyword: string) => void;
}

export default function TextFiled({ onSubmit }: PropsType) {
  const { value, setValue, handleChange } = useFrom("");
  const enterEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit(value);
  };
  return (
    <Container>
      <Input
        type="text"
        placeholder="도로명, 건물명, 지번검색"
        value={value}
        onChange={handleChange}
        onKeyUp={enterEvent}
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
            onSubmit(value);
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
