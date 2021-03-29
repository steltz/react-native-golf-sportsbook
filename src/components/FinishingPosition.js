import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid';
import FinishingPositionRow from './FinishingPositionRow';
import finishingPositionLines from '../data/FinishingPositionLines'

const FinishingPosition = () => {
  return (
    <ScrollView>
      <Grid>
        <Row style={{ marginTop: 10 }}>
          <Col size={31}></Col>
          <Col size={23}>
            <Text style={{ fontSize: 12, marginLeft: 17 }}>Winner</Text>
          </Col>
          <Col size={23}>
            <Text style={{ fontSize: 12, marginLeft: 17 }}>Top 5</Text>
          </Col>
          <Col size={23}>
            <Text style={{ fontSize: 12, marginLeft: 17 }}>Top 10</Text>
          </Col>
        </Row>
        {
          finishingPositionLines.map(player => {
            return (
              <Row style={{ height: 60, padding: 10 }}>
                <FinishingPositionRow player={player} />
              </Row>
            );
          })
        }
      </Grid>
    </ScrollView>
  );
};

export default FinishingPosition;