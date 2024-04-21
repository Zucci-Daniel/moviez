import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '..';
import {BackIcon} from '../../assets/svg';
import {styles} from './styles';

const Header = ({text}: {text: string}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
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
