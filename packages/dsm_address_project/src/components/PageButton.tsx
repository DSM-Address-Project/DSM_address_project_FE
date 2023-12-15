import { styled } from "styled-components"
import { point } from "../styles/Theme"

type PageButtonType = {
  children:string;
  isSelected:boolean;
  onClick:() => void;
}

function PageButton (props:PageButtonType) {
  const isSelected:boolean = props.isSelected;

  return <Body selected={isSelected} onClick={props.onClick}>{props.children}</Body>
}

export default PageButton

const Body = styled.div<{selected:boolean}>`
  font-size:16px;
  font-weight:700;
  width:30px;
  heigth:30px;
  background-color:${({selected}) => selected ? `${point}` : "white"};
  color:${({selected}) => selected ? "white" : "black"};
  border-radius:12px;
  font-size: 16px;
  font-weight: 700;
  text-align:center;
  line-height:30px;
  cursor:pointer;
`;