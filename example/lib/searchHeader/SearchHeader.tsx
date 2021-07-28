import React from 'react';
import {
  Button,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  TextStyle,
  Keyboard,
} from 'react-native';
import styles, {
  _rightButton,
  _bottomContainerStyle,
  _leftButtonContainerStyle,
} from './SeachHeader.style';

export interface Props {
  mainContainerStyle?: ViewStyle | Array<ViewStyle>;
  leftIconComponent?: React.ReactChild;
  headerText?: string;
  rightButtonComponent?: React.ReactChild;
  rightButtonBackgroundColor?: string;
  headerTitleTextStyle?: TextStyle | Array<TextStyle>;
  headerTitleTextComponent?: React.ReactChild;
  searchIconComponent?: React.ReactChild;
  placeholderText?: string;
  textInputStyle?: TextStyle | Array<TextStyle>;
  bottomContainerStyle?: ViewStyle | Array<ViewStyle>;
  leftButtonContainerStyle?: ViewStyle | Array<ViewStyle>;
  leftButtonBackgroundColor?: string;
  isVisibleLeftButton: boolean;
  isVisibleRightButton: boolean;
  isVisibleSearch: boolean;
  onLeftButtonPress?: () => void;
  onRightButtonPress?: () => void;
}

interface State {
  isSearchActive: boolean;
}

export class SearchHeader extends React.Component<Props, State> {
  inputRef: TextInput | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      isSearchActive: false,
    };
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidHide', this._forceLoseFocus);
  }

  topComponent = () => {
    const {
      leftIconComponent,
      headerText = '',
      rightButtonComponent,
      rightButtonBackgroundColor = '#F4F4F4',
      leftButtonBackgroundColor = '#F4F4F4',
      headerTitleTextStyle,
      headerTitleTextComponent,
      leftButtonContainerStyle,
      isVisibleLeftButton = true,
      isVisibleRightButton = true,
      onLeftButtonPress,
      onRightButtonPress,
    } = this.props;
    return (
      <View style={styles.topContainerStyle}>
        {isVisibleLeftButton && (
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
        )}
        <View>
          {headerTitleTextComponent || (
            <Text style={[styles.headerTitleTextStyle, headerTitleTextStyle]}>
              {headerText}
            </Text>
          )}
        </View>
        {isVisibleRightButton && (
          <View>
            <TouchableOpacity
              style={_rightButton(rightButtonBackgroundColor)}
              onPress={onRightButtonPress && onRightButtonPress}>
              {rightButtonComponent || (
                <Image
                  source={require('../local-assets/bell.png')}
                  style={{width: 20, height: 20}}
                />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  _forceLoseFocus = () => {
    this.inputRef?.blur();
  };

  bottomComponent = () => {
    const {
      searchIconComponent,
      placeholderText = 'Search..',
      textInputStyle,
      bottomContainerStyle,
    } = this.props;
    const icon = this.state.isSearchActive
      ? require('../local-assets/active-search.png')
      : require('../local-assets/search.png');
    const borderColor = this.state.isSearchActive ? '#50C479' : '#F4F4F4';
    return (
      <View style={[_bottomContainerStyle(borderColor), bottomContainerStyle]}>
        {searchIconComponent || (
          <Image source={icon} style={{width: 20, height: 20}} />
        )}
        <TextInput
          placeholderTextColor={'#C5C5C5'}
          {...this.props}
          ref={(ref) => (this.inputRef = ref)}
          placeholder={placeholderText}
          style={[styles.textInputStyle, textInputStyle]}
          onFocus={() => this.setState({isSearchActive: true})}
          onBlur={() => {
            this.setState({isSearchActive: false});
          }}
        />
      </View>
    );
  };

  render() {
    const {mainContainerStyle, isVisibleSearch = true} = this.props;
    return (
      <View style={[styles.mainContainerStyle, mainContainerStyle]}>
        {this.topComponent()}
        {isVisibleSearch && this.bottomComponent()}
      </View>
    );
  }
}
