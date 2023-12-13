import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius:5px;
  margin-bottom:3px;
`;

interface dragCradI {
  toDo: string,
  index: number
}

function DraggableCards({toDo, index}: dragCradI) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>{(magic) => (
      <Card ref={magic.innerRef} 
      {...magic.draggableProps} 
      {...magic.dragHandleProps}>
        {toDo}
      </Card>
    )}
    </Draggable>  
  )
}

export default DraggableCards