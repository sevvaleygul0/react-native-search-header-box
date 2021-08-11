import * as React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  TextStyle,
} from 'react-native';
import Androw from 'react-native-androw';
import styles, {
  _rightButton,
  _bottomContainerStyle,
  _leftButtonContainerStyle,
  _searchBarShadowStyle,
  _headerButtonShadowStyle,
} from './SeachHeaderBox.style';

interface IProps {
  mainContainerStyle?: ViewStyle | Array<ViewStyle>;
  leftIconComponent?: React.ReactChild;
  headerText?: string;
  rightButtonComponent?: React.ReactChild;
  rightButtonBackgroundColor?: string;
  headerTitleTextStyle?: TextStyle | Array<TextStyle>;
  headerTitleTextComponent?: React.ReactChild;
  searchIconComponent?: React.ReactChild;
  textInputStyle?: TextStyle | Array<TextStyle>;
  bottomContainerStyle?: ViewStyle | Array<ViewStyle>;
  leftButtonContainerStyle?: ViewStyle | Array<ViewStyle>;
  leftButtonBackgroundColor?: string;
  isVisibleLeftButton?: boolean;
  isVisibleRightButton?: boolean;
  isVisibleSearch?: boolean;
  rightButtonContainerStyle?: ViewStyle | Array<ViewStyle>;
  searchBarShadowColor?: string;
  searchBarShadowStyle?: ViewStyle | Array<ViewStyle>;
  inputActiveBorderColor?: string;
  inputBorderColor?: string;
  leftButtonShadowStyle?: ViewStyle | Array<ViewStyle>;
  leftButtonShadowColor?: string;
  rightButtonShadowColor?: string;
  rightButtonShadowStyle?: ViewStyle | Array<ViewStyle>;
  onLeftButtonPress?: () => void;
  onRightButtonPress?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

interface State {
  isSearchActive: boolean;
}

export default class SearchHeaderBox extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isSearchActive: false,
    };
  }

  renderLeftButton = () => {
    const {
      leftIconComponent,
      leftButtonBackgroundColor = '#F4F4F4',
      leftButtonContainerStyle,
      isVisibleLeftButton = true,
      leftButtonShadowStyle,
      leftButtonShadowColor = '#F4F4F4',
      onLeftButtonPress,
    } = this.props;
    return (
      isVisibleLeftButton && (
        <Androw
          style={[
            _headerButtonShadowStyle(leftButtonShadowColor),
            leftButtonShadowStyle,
          ]}>
          <TouchableOpacity
            style={[
              _leftButtonContainerStyle(leftButtonBackgroundColor),
              leftButtonContainerStyle,
            ]}
            onPress={onLeftButtonPress && onLeftButtonPress}>
            {leftIconComponent || (
              <Image
                source={require('../local-assets/arrow.png')}
                style={{width: 16, height: 16}}
              />
            )}
          </TouchableOpacity>
        </Androw>
      )
    );
  };

  renderTitle = () => {
    const {
      headerText = '',
      headerTitleTextStyle,
      headerTitleTextComponent,
    } = this.props;
    return (
      headerTitleTextComponent || (
        <Text style={[styles.headerTitleTextStyle, headerTitleTextStyle]}>
          {headerText}
        </Text>
      )
    );
  };

  renderRightButton = () => {
    const {
      rightButtonComponent,
      rightButtonBackgroundColor = '#F4F4F4',
      rightButtonContainerStyle,
      isVisibleRightButton = true,
      rightButtonShadowColor = '#F4F4F4',
      rightButtonShadowStyle,
      onRightButtonPress,
    } = this.props;
    return (
      isVisibleRightButton && (
        <Androw
          style={[
            _headerButtonShadowStyle(rightButtonShadowColor),
            rightButtonShadowStyle,
          ]}>
          <TouchableOpacity
            style={[
              _rightButton(rightButtonBackgroundColor),
              rightButtonContainerStyle,
            ]}
            onPress={onRightButtonPress && onRightButtonPress}>
            {rightButtonComponent || (
              <Image
                source={require('../local-assets/bell.png')}
                style={styles.rightButtonImageStyle}
              />
            )}
          </TouchableOpacity>
        </Androw>
      )
    );
  };

  renderTopContainer = () => {
    return (
      <View style={styles.topContainerStyle}>
        {this.renderLeftButton()}
        {this.renderTitle()}
        {this.renderRightButton()}
      </View>
    );
  };

  renderBottomContainer = () => {
    const {
      searchIconComponent,
      textInputStyle,
      bottomContainerStyle,
      searchBarShadowColor = '#50C479',
      searchBarShadowStyle,
      inputActiveBorderColor = '#50C479',
      inputBorderColor = '#F4F4F4',
      isVisibleSearch = true,
      onFocus,
      onBlur,
    } = this.props;
    const icon = this.state.isSearchActive
      ? require('../local-assets/active-search.png')
      : require('../local-assets/search.png');
    const borderColor = this.state.isSearchActive
      ? inputActiveBorderColor
      : inputBorderColor;
    return (
      isVisibleSearch && (
        <Androw
          style={[
            _searchBarShadowStyle(searchBarShadowColor),
            searchBarShadowStyle,
          ]}>
          <View
            style={[_bottomContainerStyle(borderColor), bottomContainerStyle]}>
            {searchIconComponent || (
              <Image source={icon} style={styles.searchIconStyle} />
            )}
            <TextInput
              {...this.props}
              style={[styles.textInputStyle, textInputStyle]}
              onFocus={() => {
                onFocus && onFocus();
                this.setState({isSearchActive: true});
              }}
              onBlur={() => {
                onBlur && onBlur();
                this.setState({isSearchActive: false});
              }}
            />
          </View>
        </Androw>
      )
    );
  };

  render() {
    const {mainContainerStyle} = this.props;
    return (
      <View style={[styles.mainContainerStyle, mainContainerStyle]}>
        {this.renderTopContainer()}
        {this.renderBottomContainer()}
      </View>
    );
  }
}
