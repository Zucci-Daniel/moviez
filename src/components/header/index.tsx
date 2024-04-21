import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '..';
import {BackIcon} from '../../assets/svg';
import {styles} from './styles';

const Header = ({text, show = true}: {text: string; show?: boolean}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {show && (
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      )}
      <AppText style={styles.header}>{text}</AppText>
    </View>
  );
};

export default Header;
