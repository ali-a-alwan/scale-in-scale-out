import React, { useRef } from 'react';
import { Animated, View, Text, Button } from 'react-native';

const ScaleAnimation = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const scaleIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 2, // Increase the scale to 2
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  const scaleOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1, // Return the scale to 1
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }], // Bind scale to animated value
        }}>
         <Text style={{ fontSize: 24 , marginVertical: 10}}>Hello, React Native!</Text>
      </Animated.View>
      <Button title="Scale Out" onPress={scaleOut} />
       <View style={{ fontSize: 24, marginVertical: 10 }}>
      <Button title="Scale In" onPress={scaleIn} />
    </View>
    </View>
  );
};

export default ScaleAnimation;
