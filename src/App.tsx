import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";

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

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius:5px;
  margin-bottom:3px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width:480px;
  width:100%;
  margin: 0 auto;
`

const toDos = ["a", "b", "c", "d", "e"];

function App() {

  const [toDos, setToDos] = useRecoilState(toDoState)
  const onDragEnd = (arg: any) => {
    console.log(arg)
  };

  return <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
        <Droppable droppableId="one">{(magic) => (
          <Board ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <Draggable key={index} draggableId={toDo} index={index}>{(magic) => (
                <Card ref={magic.innerRef} 
                {...magic.draggableProps} 
                {...magic.dragHandleProps}>
                  {toDo}
                </Card>
              )}
              </Draggable>  
              )
            )}
            {magic.placeholder}
          </Board>
        )}
        </Droppable>
        </Boards>
    </Wrapper>
  </DragDropContext>;
}

export default App
