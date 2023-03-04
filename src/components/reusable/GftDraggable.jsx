import { Box } from '@mui/material';

const GftDraggable = ({ id, dataTransferId, children, sx, ...rest }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData(dataTransferId, e.target.id);
  }

  return (
    <Box
      id={id}
      draggable
      onDragStart={(e) => handleDragStart(e)}
      sx={{
        cursor: 'move',
        userText: 'none',
        ...sx
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default GftDraggable;