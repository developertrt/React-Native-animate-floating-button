#ifdef __cplusplus
#import "react-native-animated-floating-button.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAnimatedFloatingButtonSpec.h"

@interface AnimatedFloatingButton : NSObject <NativeAnimatedFloatingButtonSpec>
#else
#import <React/RCTBridgeModule.h>

@interface AnimatedFloatingButton : NSObject <RCTBridgeModule>
#endif

@end
