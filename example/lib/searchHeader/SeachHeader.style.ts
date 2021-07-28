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
  leftButtonContainerStyle: ViewStyle;
}

export const _rightButton = (backgroundColor: string): ViewStyle => ({
  backgroundColor,
  borderRadius: 12,
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 3,
  paddingBottom: 3,
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
});

export const _leftButtonContainerStyle = (
  backgroundColor: string,
): ViewStyle => ({
  backgroundColor,
  borderRadius: 12,
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 3,
  paddingBottom: 3,
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
});

export const _bottomContainerStyle = (borderColor: string): ViewStyle => ({
  width: '100%',
  height: 40,
  marginTop: 12,
  borderRadius: 12,
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
    alignItems: 'center',
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
  leftButtonContainerStyle: {
    borderRadius: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 3,
    paddingBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
});
