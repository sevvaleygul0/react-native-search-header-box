import {
  ViewStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
  ImageStyle,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface Style {
  mainContainerStyle: ViewStyle;
  topContainerStyle: ViewStyle;
  rightTextStyle: TextStyle;
  headerTitleTextStyle: TextStyle;
  textInputStyle: TextStyle;
  leftButtonContainerStyle: ViewStyle;
  searchIconStyle: ImageStyle;
  rightButtonImageStyle: ImageStyle;
  leftButtonImageStyle: ImageStyle;
}

export const _headerButtonShadowStyle = (shadowColor: string): ViewStyle => ({
  shadowRadius: 8,
  shadowOpacity: 0.3,
  shadowColor: shadowColor,
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

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
  width: screenWidth * 0.9,
  height: 40,
  borderWidth: 1,
  marginTop: 12,
  marginBottom: 8,
  borderRadius: 12,
  backgroundColor: '#F4F4F4',
  alignItems: 'center',
  paddingLeft: 12,
  paddingRight: 12,
  flexDirection: 'row',
  borderColor,
});

export const _searchBarShadowStyle = (shadowColor): ViewStyle => ({
  shadowRadius: 8,
  shadowOpacity: 0.2,
  shadowColor,
  shadowOffset: {
    width: 0,
    height: 3,
  },
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
    width: '100%',
    height: '100%',
    color: '#707070',
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
  searchIconStyle: {
    width: 20,
    height: 20,
  },
  rightButtonImageStyle: {
    width: 20,
    height: 20,
  },
  leftButtonImageStyle: {
    width: 16,
    height: 16,
  },
});
