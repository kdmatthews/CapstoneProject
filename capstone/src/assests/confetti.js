export const fadeIn = () => {

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  };