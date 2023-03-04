import { Box } from '@mui/material';
import { useState } from 'react';

const styles = {
  draggable: {
    cursor: 'move',
    userSelect: 'none'
  }
}

const GftDragDropList = ({
  items,
  renderItem,
  direction='column'
}) => {
  const [draggingElem, setDraggingElem] = useState(null);
  const [cursorPos, setCursorPos] = useState({x: 0, y: 0});
  const [placeholder, setPlaceholder] = useState(null);
  const [isDraggingStarted, setDraggingStarted] = useState(false);

  const mouseDownHandler = (e) => {
    setDraggingElem(e.target);

    const rect = e.target.getBoundingClientRect();
    setCursorPos({
      x:  e.pageX - rect.left,
      y: e.pageY - rect.top
    });

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = (e) => {
    if(!isDraggingStarted) {
      setDraggingStarted(true);
      handleDragStarted();
    }
    draggingElem.style.position = 'absolute';
    draggingElem.style.top = `${e.pageY - cursorPos.y}px`;
    draggingElem.style.left = `${e.pageX - cursorPos.x}px`;
  };

  const handleDragStarted = () => {
    let _placeholder = document.createElement('div');
    draggingElem.parentNode.insertBefore(
      _placeholder,
      draggingElem.nextSibling
    );
    const draggingRect = draggingElem.getBoundingClientRect();
    if(direction === 'column') _placeholder.style.height = `${draggingRect.height}px`;
    else _placeholder.style.width = `${draggingRect.width}px`;
    setPlaceholder(_placeholder);
  }

  const mouseUpHandler = function () {
    if(placeholder) placeholder.parentNode.removeChild(placeholder);
    setDraggingStarted(false);

    draggingElem.style.removeProperty('top');
    draggingElem.style.removeProperty('left');
    draggingElem.style.removeProperty('position');

    setCursorPos({
      x: null,
      y: null
    });
    setDraggingElem(null);

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

  return (
    <Box
      display={'flex'}
      flexDirection={direction}
    >
      {items.map((item, i) => {
        return (
          <Box key={i} sx={styles.draggable} onMouseDown={(e) => mouseDownHandler(e)}>
            {renderItem()}
          </Box>
        );
      })}
    </Box>
  );
}

export default GftDragDropList;