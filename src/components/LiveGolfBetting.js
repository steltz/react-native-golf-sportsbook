import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import LiveBettingHole from './LiveBettingHole';

const LiveGolfBetting = () => {
  const holes = [
    {
      title: "Best Score - Hole 14 (Par 4), Round 3",
      lines: [
        {
          name: 'Shane Lowry',
          winnerLine: 3.05
        },
        {
          name: 'Tie',
          winnerLine: 2.35
        },
        {
          name: 'Russell Henly',
          winnerLine: 4.35
        }
      ]
    },
    {
      title: "Best Score - Hole 15 (Par 3), Round 3",
      lines: [
        {
          name: 'Shane Lowry',
          winnerLine: 3.20
        },
        {
          name: 'Tie',
          winnerLine: 2.15
        },
        {
          name: 'Russell Henly',
          winnerLine: 3.20
        }
      ]
    },
    {
      title: "Best Score - Hole 16 (Par 4), Round 3",
      lines: [
        {
          name: 'Shane Lowry',
          winnerLine: 4.60
        },
        {
          name: 'Tie',
          winnerLine: 1.54
        },
        {
          name: 'Russell Henly',
          winnerLine: 5.40
        }
      ]
    },
    {
      title: "Best Score - Hole 17 (Par 4), Round 3",
      lines: [
        {
          name: 'Shane Lowry',
          winnerLine: 3.45
        },
        {
          name: 'Tie',
          winnerLine: 2.35
        },
        {
          name: 'Russell Henly',
          winnerLine: 3.45
        }
      ]
    },
    {
      title: "Best Score - Hole 18 (Par 3), Round 3",
      lines: [
        {
          name: 'Shane Lowry',
          winnerLine: 3.05
        },
        {
          name: 'Tie',
          winnerLine: 2.15
        },
        {
          name: 'Russell Henly',
          winnerLine: 3.20
        }
      ]
    }
  ]
  return (
    <ScrollView>
      <Grid>
        {
          holes.map(hole => {
            return (
              <Row style={ styles.rowStyle }>
                <Text style={ styles.titleStyle }>
                  { hole.title }
                </Text>
                <LiveBettingHole lines={ hole.lines }/>
              </Row>
            );
          })
        }
      </Grid>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginBottom: 10
  },
  rowStyle: {
    padding: 10,
    height: 100,
    flexDirection: 'column'
  }
});

export default LiveGolfBetting;