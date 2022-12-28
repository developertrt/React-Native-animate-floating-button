package com.animatedfloatingbutton;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = AnimatedFloatingButtonModule.NAME)
public class AnimatedFloatingButtonModule extends NativeAnimatedFloatingButtonSpec {
  public static final String NAME = "AnimatedFloatingButton";

  public AnimatedFloatingButtonModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  static {
    System.loadLibrary("cpp");
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
}
