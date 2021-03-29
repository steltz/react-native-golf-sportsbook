import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const PlayerBtn = ({ player }) => {
  return (
    <Button bordered style={ styles.btnStyle }>
      <Text style={{ fontSize: 12 }}>{ player.name }</Text>
      <Text style={{ fontSize: 12 }}>{ player.winnerLine }</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    alignSelf: 'stretch', 
    height: 50,
    marginBottom: 15,
    flexDirection: 'column'
  }
});

export default PlayerBtn;