import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import PlayerBtn from './PlayerBtn';

const LiveBettingHole = ({ lines }) => {
  return (
    <Grid>
      {
        lines.map(player => {
          return (
            <Col size={33} style={ styles.colStyle }>
              <PlayerBtn player={player}/>
            </Col>
          );
        })
      }
    </Grid>
  );
};

const styles = StyleSheet.create({
  colStyle: {
    padding: 10
  }
});

export default LiveBettingHole;