import {Dimensions, Platform} from 'react-native';

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('screen');

export const imageFit: any = {
  width: '100%',
  height: '100%',
};

export const DUMMY_IMAGE =
  'https://cdn.pixabay.com/photo/2021/01/03/21/28/mannequin-5885693_1280.png';

export const BRAND_NAME = 'Health';

export const HIT_SLOP = {top: 20, right: 20, left: 20, bottom: 20};

export const Padding = 16;

export const iconSize = {
  height: 20,
  width: 20,
};
const touch = 15;

export const detectTouch = {
  top: touch,
  left: touch,
  right: touch,
  bottom: touch,
};

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
