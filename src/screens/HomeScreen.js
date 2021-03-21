import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import TournamentLines from '../components/TournamentLines';
import LiveGolfBetting from '../components/LiveGolfBetting';

const HomeScreen = () => {
  return (
    <Container>
      <Tabs>
        <Tab heading={ <TabHeading><Text style={styles.tabHeading}>TOURNAMENT LINES</Text></TabHeading> }>
          <TournamentLines />
        </Tab>
        <Tab heading={ <TabHeading><Text style={styles.tabHeading}>LIVE GOLF BETTING</Text></TabHeading> }>
          <LiveGolfBetting />
        </Tab>
      </Tabs>
    </Container>
  );
};

const styles = StyleSheet.create({
  tabHeading: {
    fontSize: 10
  }
});

export default HomeScreen;