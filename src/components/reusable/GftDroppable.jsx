import { Box } from '@mui/material';

const GftDroppable = ({ id, dataTransferId, children, allowMultipleChild=false, onDrop, ...rest }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData(dataTransferId);
    console.log(allowMultipleChild, e.target.childElementCount);
    e.target.appendChild(document.getElementById(data));
    onDrop && onDrop(data, id);
  }
  
  const allowDrop = (e) => {
    e.preventDefault();
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