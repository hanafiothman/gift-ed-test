import { Box } from '@mui/material';

const GftDroppable = ({ id, dataTransferId, children, allowMultipleChild=false, onDrop, ...rest }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData(dataTransferId);
    if(!allowMultipleChild && e.target.childElementCount === 1) {
      return;
    }
    e.target.appendChild(document.getElementById(data));
    onDrop && onDrop(data, id);
  }
  
  const allowDrop = (e) => {
    e.preventDefault();4
  }

  return (
    <Box
      id={id}
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => allowDrop(e)}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default GftDroppable;