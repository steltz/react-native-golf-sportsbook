import React from 'react';
import { Button, Text } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';

const FinishingPositionRow = ({ player }) => {
  return (
    <Grid>
      <Col style={{justifyContent: 'center'}} size={31}>
        <Text>{ player.name }</Text>
      </Col>
      <Col size={23}>
          <Button bordered style={{ width: 75 }}>
            <Text>{ player.odds }</Text>
          </Button>
      </Col>
      <Col size={23}>
        <Button disabled bordered style={{ width: 75 }}>
        </Button>
      </Col>
      <Col size={23}>
        <Button disabled bordered style={{ width: 75 }}>
        </Button>
      </Col>
    </Grid>
  );
};

export default FinishingPositionRow;