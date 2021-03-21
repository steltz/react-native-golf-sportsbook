import React from 'react';
import { Button, Text } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';

const FinishingPositionRow = ({ player }) => {
  return (
    <Grid>
      <Col style={{ justifyContent: 'center' }} size={31}>
        <Text style={{ fontSize: 12 }}>{ player.name }</Text>
      </Col>
      <Col size={23}>
          <Button bordered style={{ width: 75, justifyContent: 'center' }}>
            <Text style={{ fontSize: 12 }}>{ player.winnerLine }</Text>
          </Button>
      </Col>
      <Col size={23}>
        <Button bordered style={{ width: 75, justifyContent: 'center' }}>
          <Text style={{ fontSize: 12 }}>{ player.top5line }</Text>
        </Button>
      </Col>
      <Col size={23}>
        <Button bordered style={{ width: 75, justifyContent: 'center' }}>
          <Text style={{ fontSize: 12 }}>{ player.top10line }</Text>
        </Button>
      </Col>
    </Grid>
  );
};

export default FinishingPositionRow;