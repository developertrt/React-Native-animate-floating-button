import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { AnimatedFloatingButton } from '../../src/index'


export const App =()=> {

  let images = [
    { image: require('../../images/Pin.png') },
    { image: require('../../images/Love.png') },
    { image: require('../../images/Like.png') }
  ]

  return (
    <View style={styles.container}>
      <AnimatedFloatingButton
        onMenuClick={(res) => {
          console.log(res)
        }}
        onIconClick={(res) => {
          console.log(res)
        }}
        menuImage={require('../../images/Plus.png')}
        iconColors={'lightpink'}
        style={{ backgroundColor: 'lightpink' }}
        images={images}
      />
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
