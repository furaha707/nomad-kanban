import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import { DropResult as BeautifulDndDropResult } from "react-beautiful-dnd";
import DraggableCards from "./Components/DraggableCards";

const Board = styled.div`
  padding: 0 10px;
  padding-top:30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius:5px;
  min-height:300px;
`;

const Boards = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  width:100%;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width:480px;
  width:100%;
  margin: 0 auto;
`

function App() {

  const [toDos, setToDos] = useRecoilState(toDoState)
  const onDragEnd = ({draggableId, destination, source}: BeautifulDndDropResult) => {
    if (!destination) return;
    setToDos((oldTodos) => {
      const copyTodos = [...oldTodos];
      copyTodos.splice(source.index, 1);
      copyTodos.splice(destination?.index, 0, draggableId);
      return copyTodos;
    })
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">{(magic) => (
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((toDo, index) => (
                <DraggableCards toDo={toDo} index={index} key={toDo} />
              ))}
              {magic.placeholder}
            </Board>
          )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App
