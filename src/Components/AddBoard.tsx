import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { recoilBoard } from "../atoms";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h2`
  color: white;
`;

const Form = styled.form`
  display: flex;
`;
const Input = styled.input`
  border-radius: 4px;
  margin: 10px 0px;
  border: none;
  padding: 8px 10px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
  }
`;

interface IForm {
  title: string;
}

const AddBoard = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [board, setBoard] = useRecoilState(recoilBoard);

  const onSubmit = handleSubmit(({ title }) => {
    if (title === "") return;
    setValue("title", "");
    if (Object.keys(board).indexOf(title) !== -1) return;
    setBoard((prev) => ({ ...prev, [title + "."]: [] }));
  });

  return (
    <Header>
      <Title> Add Board</Title>
      <Form onSubmit={onSubmit}>
        <Input
          id="title"
          type="text"
          placeholder="Enter list title..."
          {...register("title")}
        />
      </Form>
    </Header>
  );
};

export default AddBoard;
