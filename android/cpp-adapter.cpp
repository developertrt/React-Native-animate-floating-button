#include <jni.h>
#include "react-native-animated-floating-button.h"

extern "C"
JNIEXPORT jint JNICALL
Java_com_animatedfloatingbutton_AnimatedFloatingButtonModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return animatedfloatingbutton::multiply(a, b);
}
