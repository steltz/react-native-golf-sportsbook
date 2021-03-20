import React from 'react';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import TournamentLines from '../components/TournamentLines'

const HomeScreen = () => {
  return (
    <Container>
      <Tabs>
        <Tab heading={ <TabHeading><Text>TOURNAMENT LINES</Text></TabHeading> }>
          <TournamentLines />
        </Tab>
        <Tab heading={ <TabHeading><Text>LIVE GOLF BETTING</Text></TabHeading> }>
          <Text>Tab 2</Text>
        </Tab>
        <Tab heading={ <TabHeading><Text>MATCHUPS</Text></TabHeading> }>
          <Text>Tab 3</Text>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default HomeScreen;