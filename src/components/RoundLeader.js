import React from 'react';
import { ScrollView } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import PlayerBtn from './PlayerBtn';
import finishingPositionLines from '../data/FinishingPositionLines'

const RoundLeader = () => {
  const playersLeft = finishingPositionLines.filter((player, idx) => idx % 2 === 0)
  const playersRight = finishingPositionLines.filter((player, idx) => idx % 2 !== 0)

  return (
    <ScrollView>
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
            playersRight.map(player => {
              return (
                <PlayerBtn player={player} />
              );
            })
          }
        </Col>
      </Grid>
    </ScrollView>
  );
};

export default RoundLeader;