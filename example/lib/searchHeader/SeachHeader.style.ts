import {
  ViewStyle,
  Platform,
  TextStyle,
  StyleSheet,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface Style {
  mainContainerStyle: ViewStyle;
  topContainerStyle: ViewStyle;
  rightTextStyle: TextStyle;
  headerTitleTextStyle: TextStyle;
  textInputStyle: TextStyle;
}

export const _rightButton = (backgroundColor) => ({
  backgroundColor,
  borderRadius: 12,
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 3,
  paddingBottom: 3,
  maxWidth: 80,
  maxHeight: 50,
});

export const _bottomContainerStyle = (borderColor) => ({
  width: '100%',
  height: 40,
  marginTop: 12,
  borderRadius: 20,
  backgroundColor: '#F4F4F4',
  alignItems: 'center',
  paddingLeft: 12,
  paddingRight: 12,
  flexDirection: 'row',
  borderWidth: 1,
  borderColor,
});

export default StyleSheet.create<Style>({
  mainContainerStyle: {
    width: screenWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainerStyle: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rightTextStyle: {
    color: '#fff',
  },
  headerTitleTextStyle: {
    fontWeight: '600',
  },
  textInputStyle: {
    paddingLeft: 12,
    paddingRight: 12,
    width: '95%',
    height: '100%',
  },
});
