import React from 'react';
import { Grid, Col } from 'react-native-easy-grid';
import PlayerBtn from './PlayerBtn';

const RoundLeader = () => {
  const playersLeft = [
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
      <Col style={{ padding: 10 }}>
        {
          playersLeft.map(player => {
            return (
              <PlayerBtn player={player} />
            );
          })
        }
      </Col>
      <Col style={{ padding: 10 }}>
        {
          playersLeft.map(player => {
            return (
              <PlayerBtn player={player} />
            );
          })
        }
      </Col>
    </Grid>
  );
};

export default RoundLeader;