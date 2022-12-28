import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { AnimatedFloatingButton } from '../../src/index'


export const App : React.FC =()=> {
  return (
    <View style={styles.container}>
      <AnimatedFloatingButton iconColors={'lightblue'} style={{backgroundColor: 'lightblue', shadowColor: 'blue'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
