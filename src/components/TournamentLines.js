import React from 'react';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import FinishingPosition from './FinishingPosition';
import RoundLeader from './RoundLeader';

const TournamentLines = () => {
  return (
    <Container>
      <Tabs>
        <Tab heading={ <TabHeading><Text>FINISHING POSITION</Text></TabHeading> }>
          <FinishingPosition />
        </Tab>
        <Tab heading={ <TabHeading><Text>LEADER AFTER ROUND 3</Text></TabHeading> }>
          <RoundLeader />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TournamentLines;