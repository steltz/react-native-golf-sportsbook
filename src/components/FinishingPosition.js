import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import FinishingPositionRow from './FinishingPositionRow'

const FinishingPosition = () => {
  const players = [
    {
      name: 'Aaron Wise',
      odds: 2.38
    },
    {
      name: 'Matt Jones',
      odds: 2.38
    }
  ]
  return (
    <Grid>
      {
        players.map(player => {
          return (
          <Row style={{ height: 60, padding: 10 }}>
            <FinishingPositionRow player={player} />
          </Row>
          );
        })
      }
    </Grid>
  );
};

export default FinishingPosition;