import { DragDropContext } from "react-beautiful-dnd"
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import { DropResult as BeautifulDndDropResult } from "react-beautiful-dnd";
import Board from "./Components/Board";

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
    // setToDos((oldTodos) => {
    //   const copyTodos = [...oldTodos];
    //   copyTodos.splice(source.index, 1);
    //   copyTodos.splice(destination?.index, 0, draggableId);
    //   return copyTodos;
    // })
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map(boardId => <Board boardId={boardId} key={boardId} toDos={toDos[boardId]}/>)}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App
