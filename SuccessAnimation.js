/** @format */

import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SuccessAnimation({
  size = 120,
  iconSize = 120 * 0.7,
  dotColor = "#44c6b1",
  iconColor = "white",
  dotSize = 20,
  duration = 2000,
  backgroundColor = "#44c6b1",
  animatedLayerColor = "white",
  onAnimationEnd = () => {},
}) {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 2,
      duration,
      useNativeDriver: false,
    }).start((e) => onAnimationEnd());
  }, []);

  const particalScale = animation.interpolate({
    inputRange: [0, 1.5],
    outputRange: [dotSize, 0],
    extrapolate: "clamp",
  });
  const particalRadius = animation.interpolate({
    inputRange: [0, 1.5],
    outputRange: [dotSize / 2, 0],
    extrapolate: "clamp",
  });
  const particalOpacity = animation.interpolate({
    inputRange: [0, 0.5, 0.65],
    outputRange: [0, 0.1, 1],
    extrapolateRight: "clamp",
  });

  const Icon = Animated.createAnimatedComponent(Feather);
  const SIZE = size;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                scaleX: animation.interpolate({
                  inputRange: [0, 0.4],
                  outputRange: [0, 1],
                  extrapolateRight: "clamp",
                }),
              },
              {
                scaleY: animation.interpolate({
                  inputRange: [0, 0.4],
                  outputRange: [0, 1],
                  extrapolateRight: "clamp",
                }),
              },
            ],
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            backgroundColor,
          }}
        />

        <Animated.View
          style={{
            opacity: animation.interpolate({
              inputRange: [0, 1, 1.5],
              outputRange: [1, 0.5, 0],
              extrapolateRight: "clamp",
            }),
            transform: [
              {
                scaleX: animation.interpolate({
                  inputRange: [0, 0.4, 1.1],
                  outputRange: [0, 0.7, 1.1],
                  extrapolateRight: "clamp",
                }),
              },
              {
                scaleY: animation.interpolate({
                  inputRange: [0, 0.4, 1.1],
                  outputRange: [0, 0.7, 1.1],
                  extrapolateRight: "clamp",
                }),
              },
            ],
            position: "absolute",
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            backgroundColor: animatedLayerColor,
          }}
        />

        <Animated.View
          style={{
            transform: [
              {
                scaleX: animation.interpolate({
                  inputRange: [0, 0.4, 1],
                  outputRange: [0, 0.25, 1],
                  extrapolateRight: "clamp",
                }),
              },
              {
                scaleY: animation.interpolate({
                  inputRange: [0, 0.4, 1],
                  outputRange: [0, 0.25, 1],
                  extrapolateRight: "clamp",
                }),
              },
            ],
            position: "absolute",
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name="check"
            style={{
              alignSelf: "center",
              opacity: animation.interpolate({
                inputRange: [0, 0.5, 0.75, 1.5],
                outputRange: [0, 0, 0.5, 1],
              }),
            }}
            size={iconSize}
            color={iconColor}
          />
        </Animated.View>
      </View>

      <Animated.View
        style={{
          width: particalScale,
          height: particalScale,
          borderRadius: particalRadius,
          opacity: particalOpacity,
          position: "absolute",
          backgroundColor: dotColor,
          marginLeft: -SIZE * 0.25,
          transform: [
            {
              translateX: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [-0, -SIZE * 0.417, -SIZE * 0.92],
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
      />

      <Animated.View
        style={{
          width: particalScale,
          height: particalScale,
          borderRadius: particalRadius,
          opacity: particalOpacity,
          position: "absolute",
          backgroundColor: dotColor,
          marginLeft: SIZE * 0.25,
          transform: [
            {
              translateX: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [SIZE * 0.0417, SIZE * 0.417, SIZE * 0.92],
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
      />

      <Animated.View
        style={{
          width: particalScale,
          height: particalScale,
          borderRadius: particalRadius,
          opacity: particalOpacity,
          position: "absolute",
          backgroundColor: dotColor,
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, -SIZE * 0.417, -SIZE * 0.92],
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
      />

      <Animated.View
        style={{
          width: particalScale,
          height: particalScale,
          borderRadius: particalRadius,
          opacity: particalOpacity,
          position: "absolute",
          backgroundColor: dotColor,
          marginBottom: SIZE * 0.25,
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [SIZE * 0.0417, SIZE * 0.417, SIZE * 0.92],
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
      />

      <Animated.View
        style={{
          width: particalScale,
          height: particalScale,
          borderRadius: particalRadius,
          opacity: particalOpacity,

          position: "absolute",
          backgroundColor: dotColor,
          marginLeft: SIZE * 0.25,
          transform: [
            {
              translateX: animation.interpolate({
                inputRange: [0, 0.5, 0.85],
                outputRange: [SIZE * 0.0417, SIZE * 0.417, SIZE * 0.71],
                extrapolateRight: "clamp",
              }),
            },
            {
              translateY: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, SIZE * 0.417, SIZE * 0.71],
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
      />

      <Animated.View
        style={{
          width: particalScale,
          height: particalScale,
          borderRadius: particalRadius,
          opacity: particalOpacity,

          position: "absolute",
          backgroundColor: dotColor,
          marginLeft: SIZE * 0.25,
          transform: [
            {
              translateX: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [SIZE * 0.0417, SIZE * 0.417, SIZE * 0.67],
                extrapolateRight: "clamp",
              }),
            },
            {
              translateY: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, -SIZE * 0.417, -SIZE * 0.67],
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
      />

      <Animated.View
        style={{
          width: particalScale,
          height: particalScale,
          borderRadius: particalRadius,
          opacity: particalOpacity,
          position: "absolute",
          backgroundColor: dotColor,
          marginLeft: -SIZE * 0.08,
          transform: [
            {
              translateX: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [-SIZE * 0.0417, -SIZE * 0.417, -SIZE * 0.67],
                extrapolateRight: "clamp",
              }),
            },
            {
              translateY: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, -SIZE * 0.417, -SIZE * 0.67],
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
      />

      <Animated.View
        style={{
          width: particalScale,
          height: particalScale,
          borderRadius: particalRadius,
          opacity: particalOpacity,
          position: "absolute",
          backgroundColor: dotColor,
          marginLeft: -SIZE * 0.08,
          transform: [
            {
              translateX: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [-SIZE * 0.0417, -SIZE * 0.417, -SIZE * 0.67],
                extrapolateRight: "clamp",
              }),
            },
            {
              translateY: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, SIZE * 0.417, SIZE * 0.67],
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
      />
    </View>
  );
}
