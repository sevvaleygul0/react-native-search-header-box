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
} from 'react-native';
import styles, {_rightButton, _bottomContainerStyle} from './SeachHeader.style';

export interface Props {
  mainContainerStyle?: ViewStyle | Array<ViewStyle>;
  leftIconComponent?: React.ReactChild;
  headerText?: string;
  rightButtonComponent?: React.ReactChild;
  rightButtonText?: string;
  rightButtonColor?: string;
  rightTextComponent?: React.ReactChild;
  rightTextStyle?: TextStyle | Array<TextStyle>;
  headerTitleTextStyle?: TextStyle | Array<TextStyle>;
  headerTitleTextComponent?: React.ReactChild;
  searchIconComponent?: React.ReactChild;
  placeholderText?: string;
  textInputStyle?: TextStyle | Array<TextStyle>;
  onLeftButtonPress?: () => void;
  onRightButtonPress?: () => void;
  onChangeText?: () => void;
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

  topComponent = () => {
    const {
      leftIconComponent,
      headerText,
      rightButtonComponent,
      rightButtonText,
      rightButtonColor = '#50C479',
      rightTextComponent,
      rightTextStyle,
      headerTitleTextStyle,
      headerTitleTextComponent,
      onLeftButtonPress,
      onRightButtonPress,
    } = this.props;
    return (
      <View style={styles.topContainerStyle}>
        <TouchableOpacity onPress={onLeftButtonPress && onLeftButtonPress}>
          {leftIconComponent || (
            <Image
              source={require('../local-assets/arrow.png')}
              style={{width: 16, height: 16}}
            />
          )}
        </TouchableOpacity>
        <View>
          {headerTitleTextComponent || (
            <Text style={[styles.headerTitleTextStyle, headerTitleTextStyle]}>
              {headerText || 'Add expenses'}
            </Text>
          )}
        </View>
        <View>
          {rightButtonComponent || (
            <TouchableOpacity
              style={_rightButton(rightButtonColor)}
              onPress={onRightButtonPress && onRightButtonPress}>
              {rightTextComponent || (
                <Text style={[styles.rightTextStyle, rightTextStyle]}>
                  {rightButtonText || 'New'}
                </Text>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  bottomComponent = () => {
    const {
      searchIconComponent,
      placeholderText = 'Search your services..',
      textInputStyle,
      onChangeText,
    } = this.props;
    const icon = this.state.isSearchActive
      ? require('../local-assets/active-search.png')
      : require('../local-assets/search.png');
    const borderColor = this.state.isSearchActive ? '#50C479' : '#F4F4F4';
    return (
      <View style={_bottomContainerStyle(borderColor)}>
        {searchIconComponent || (
          <Image source={icon} style={{width: 20, height: 20}} />
        )}
        <TextInput
          placeholderTextColor={'#C5C5C5'}
          {...this.props}
          onChangeText={onChangeText && onChangeText}
          ref={(ref) => (this.inputRef = ref)}
          placeholder={placeholderText}
          style={[styles.textInputStyle, textInputStyle]}
          onFocus={() => this.setState({isSearchActive: true})}
        />
      </View>
    );
  };

  render() {
    const {mainContainerStyle} = this.props;
    return (
      <View style={[styles.mainContainerStyle, mainContainerStyle]}>
        {this.topComponent()}
        {this.bottomComponent()}
      </View>
    );
  }
}
