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
  images: any
  onIconClick: (index: number) => void
  onMenuClick: (index: boolean) => void
}

export const AnimatedFloatingButton = ({ iconColors, style, menuImage, images, onIconClick, onMenuClick }: prop) => {

  let animation = new Animated.Value(0)
  let open = true
  let outrange = -80

  const renderImages = () => {
    return (
      <>
        {
          images.map((res: any, index: number) => (
            <TouchableWithoutFeedback key={index} onPress={() => {
              onIconClick(index)
            }}>
              <Animated.View style={[styles.second, heart(index)]}>
                <Image source={res.image} style={{ height: 20, width: 20, tintColor: iconColors }} />
              </Animated.View>
            </TouchableWithoutFeedback>
          )
          )
        }
      </>
    )
  }

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

  const heart = (index: number) => {
    if (index === 0) outrange
    else outrange = outrange - 60
    let res = {
      transform: [
        { scale: animation },
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, outrange]
          })
        }
      ]
    }
    return res
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
      {renderImages()}
      <TouchableWithoutFeedback onPress={() => {
        onMenuClick(!open)
        togglemenu()
      }}>
        <Animated.View style={[styles.button, style, rotation]}>
          <Image source={menuImage} style={{ height: 15, width: 15, tintColor: 'black' }} />
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
    elevation: 5
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
    backgroundColor: '#FFFFFF',
    elevation: 5,
  }
});

