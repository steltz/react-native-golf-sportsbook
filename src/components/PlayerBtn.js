import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const PlayerBtn = ({ player }) => {
  return (
    <Button bordered style={ styles.btnStyle }>
      <Text>{ player.name }</Text>
      <Text>{ player.odds }</Text>
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