import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import FinishingPosition from './FinishingPosition';
import RoundLeader from './RoundLeader';

const TournamentLines = () => {
  return (
    <Tabs>
      <Tab heading={ <TabHeading><Text style={styles.tabHeading}>FINISHING POSITION</Text></TabHeading> }>
        <FinishingPosition />
      </Tab>
      <Tab heading={ <TabHeading><Text style={styles.tabHeading}>LEADER AFTER ROUND 3</Text></TabHeading> }>
        <RoundLeader />
      </Tab>
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabHeading: {
    fontSize: 10
  }
});

export default TournamentLines;