import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {GoogleVoiceIcon} from '../../assets/svg';
import {wp} from '../../configs/config';

const Listen = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const animateIcon = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0.5,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    animateIcon();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{scale: scaleAnim}],
        opacity: opacityAnim,
        alignSelf: 'center',
      }}>
      <GoogleVoiceIcon height={wp(100)} width={wp(100)} />
    </Animated.View>
  );
};

export default Listen;
