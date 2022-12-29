# react-native-animated-floating-button

animated button

![animated image example](https://github.com/developertrt/React-native-animate-floating-button/blob/main/images/demo.mov)
<!-- <img src="https://github.com/Rutvik1842/react-native-animated-floating-button/blob/main/images/demo.png" style="border:5px;" width="200" hight="200" title="react-native-animated-floating-button"> -->

## Installation

```sh
npm install react-native-animated-floating-button
```

## Usage


```js
import { AnimatedFloatingButton } from 'react-native-animated-floating-button'

// ...

let images = [
    { image: require('./assets/images/Pin.png') },
    { image: require('./assets/images/Love.png') }
  ]

<AnimatedFloatingButton
    onMenuClick={(res) => {
     console.log(res)
    }}
    onIconClick={(res) => {
     console.log(res)
    }}
    menuImage={require('./assets/images/Plus.png')}
    iconColors={'lightpink'}
    style={{ backgroundColor: 'lightpink' }}
    images={images}
/>
```

### Properties
| Name                 | Description                                                                                                                                                                                                                                                                                          | Type                                                   |                   Default Value                   |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|:-------------------------------------------------:|
| `images`                | how many item show in child array of image                                                                                                                                                                                                                                                                              | array                                                 |                  _**required**_                   |
| `menuImage`                | menu list icon                                                                                                                                                                                                                                                                              | image                                                 |                  _**required**_                   |

| `onMenuClick`        |  retrun menu is open or not  |
`()=>Node`                                            |                  _**required**_                    |

| `onIconClick`        |  retrun icon index when you click  |
`()=>Node`                                            |                  _**required**_                    |
