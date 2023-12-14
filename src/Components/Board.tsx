import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import DraggableCards from "./DraggableCards";

const Wrapper = styled.div`
  padding: 0 10px;
  padding-top:30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius:5px;
  min-height:300px;
`;

interface boardI {
  toDos: string[];
  boardId: string;
}

function Board({toDos, boardId}: boardI) {
  return (
    <Droppable droppableId={boardId}>{(magic) => (
      <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
        {toDos.map((toDo, index) => (
          <DraggableCards toDo={toDo} index={index} key={toDo} />
        ))}
        {magic.placeholder}
      </Wrapper>
    )}
    </Droppable>
  );
}

export default Board;