import React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface prop {
  style: any
  iconColors: string
  menuImage: any
  image1: any
  image2: any
  image3: any
}

export const AnimatedFloatingButton = ({ iconColors, style, menuImage, image1, image2, image3 }: prop) => {

  let animation = new Animated.Value(0)
  let open = true

  const togglemenu = () => {
    const toValue = open ? 0 : 1;
    Animated.spring(animation, {
      toValue: toValue,
      friction: 5,
      tension: 30,
      useNativeDriver: true
    }).start()
    open = !open
  }

  const heart = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -200]
        })
      }
    ]
  }


  const thumb = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140]
        })
      }
    ]
  }


  const pin = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80]
        })
      }
    ]
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"]
        })
      }
    ]
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableWithoutFeedback >
        <Animated.View style={[styles.second, heart]}>
          <Image source={image3} style={{ height: 20, width: 20, tintColor: iconColors }} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.second, thumb]}>
          <Image source={image2} style={{ height: 20, width: 20, tintColor: iconColors }} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.second, pin]}>
          <Image source={image1} style={{ height: 20, width: 20, tintColor: iconColors }} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => togglemenu()}>
        <Animated.View style={[styles.button, style, rotation]}>
          <Image source={menuImage} style={{ height: 15, width: 15, tintColor: 'black'}} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 10, width: 0 },
    shadowColor: '#F02A4B',
  },
  second: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: { height: 0, width: 0 },
    shadowColor: '#F02A4B',
    backgroundColor: '#FFFFFF'
  }
});

