import { Box, Grid, Typography } from '@mui/material';
import GftDraggable from 'components/reusable/GftDraggable';
import GftDroppable from 'components/reusable/GftDroppable';
import GftPaper from 'components/reusable/GftPaper';
import { LABELS } from 'helper/constants';
import { forwardRef, useState } from 'react';

const GRAPH_WIDTH = 1100;
const GRAPH_PADDING = 32;
const CELL_WIDTH = (GRAPH_WIDTH-GRAPH_PADDING)/5;
const CELL_HEIGHT = CELL_WIDTH/2;
const CELL_GAP = GRAPH_PADDING/10;

const styles = {
  labelsContainer: {
    width: '100%',
    border: 2,
    borderColor: 'grayLine',
    borderRadius: '5px',
    p: 1,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  labelBox: {
    backgroundColor: 'primary.main',
    py: 1.5,
    px: 2,
    borderRadius: '3.5px'
  },
  labelText: {
    color: 'white'
  },
  graphContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    py: 4,
    px: 3
  },
  graph: {
    position: 'relative',
    borderLeft: 1,
    borderBottom: 1,
    pt: GRAPH_PADDING/8, 
    pr: GRAPH_PADDING/8,
    minWidth: GRAPH_WIDTH,
    width: GRAPH_WIDTH
  },
  rows: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  box: {
    pt: CELL_GAP/8,
    pr: CELL_GAP/8,
    minWidth: CELL_WIDTH,
    height: CELL_HEIGHT
  },
  innerBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

const Dashboard = () => {
  const [unassignedLabels, setUnassignedLabels] = useState(LABELS);

  const rows = ['Negligible', 'Low', 'Moderate', 'Significant', 'Catastrophic'];
  const columns = ['Improbable', 'Remote', 'Occasional', 'Probable', 'Frequent'];

  const getBoxColor = (x, y) => {
    const colors = ['#d3f3ee', '#bdede5', '#a8e7dd', '#67d5c3', '#51cfbb', '#3bc9b2', '#26c3aa'];
    const sumCoords = x + y;
    if(sumCoords <= 2) return colors[0];
    else if(sumCoords <= 3) return colors[1];
    else if(sumCoords <= 4) return colors[2];
    else if(sumCoords <= 5) return colors[3];
    else if(sumCoords <= 6) return colors[4];
    else if(sumCoords <= 7) return colors[5];
    else if(sumCoords <= 8) return colors[6];
  }

  const [grids, setGrids] = useState([
    ...[...Array(5).keys()].map(() => {
      return [
        ...[...Array(5).keys()].map(() => {
          return null;
        })
      ];
    })
  ]);

  return (
    <Grid container py={2}>
      <Grid item xs={12} mb={2}>
        <GftDroppable
          dataTransferId={'label'}
          sx={styles.labelsContainer}
          allowMultipleChild
        >
          {unassignedLabels.map((l, i) => (
            <GftDraggable
              id={`label-${i}`}
              dataTransferId={'label'}
              key={i}
              sx={{
                m: 0.5
              }}
            >
              <Label
                key={i}
                text={l}
              />   
            </GftDraggable>
          ))}
        </GftDroppable>
      </Grid>
      <Grid item xs={12}>
        <GftPaper sx={styles.graphContainer}>
          <Box pt={4} display={'flex'} flexDirection={'column-reverse'}>
            {rows.map((e, i) => (
              <Box
                key={i}
                sx={{
                  height: CELL_HEIGHT,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  px: 1
                }}
              >
                <Typography>{e}</Typography>
              </Box>
            ))}
          </Box>
          <Box>
            <Box sx={styles.graph}>
              <Box sx={styles.rows}>
                {grids.map((row, i) => {
                  return (
                    <Box key={i} sx={styles.row}>
                      {row.map((col, j) => {
                        return (
                          <Box sx={styles.box} key={j}>
                            <GftDroppable
                              id={`droppable-${i}-${j}`}
                              dataTransferId={'label'}
                              sx={{...styles.innerBox, backgroundColor: getBoxColor(j, i)}}
                              onDrop={(data, destinationId) => console.log(data)}
                            >
                            </GftDroppable>
                          </Box>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box pr={4} width={GRAPH_WIDTH} display={'flex'}>
              {columns.map((e, i) => (
                <Box
                  key={i}
                  sx={{
                    width: CELL_WIDTH,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 1
                  }}
                >
                  <Typography>{e}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </GftPaper>
      </Grid>
    </Grid>
  );
}

const Label = forwardRef(({ text, ...rest }, ref) => {
  return (
    <Box ref={ref} sx={styles.labelBox} {...rest}>
      <Typography sx={styles.labelText}>{text}</Typography>
    </Box>
  );
});

export default Dashboard;