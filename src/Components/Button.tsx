import styled from "styled-components";

interface IProps {
  text: string;
}

const Btn = styled.button`
  border-radius: 4px;
  width: max-content;
  border: none;
  background-color: ${(props) => props.theme.cardColor};
  padding: 6px 12px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ text }: IProps) => <Btn type="submit">{text}</Btn>;

export default Button;
