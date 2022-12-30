package com.animatedfloatingbutton;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

public class AnimatedFloatingButtonModule {
  public static final String NAME = "AnimatedFloatingButton";

  public AnimatedFloatingButtonModule(ReactApplicationContext reactContext) {
    super();
  }

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
