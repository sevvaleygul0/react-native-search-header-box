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
import styles, {_rightButton} from './SeachHeader.style';

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
}

interface State {}

export class SearchHeader extends React.Component<Props, State> {
  inputRef: TextInput | null = null;
  constructor(props: Props) {
    super(props);
    this.state = {};
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
    } = this.props;
    return (
      <View style={styles.bottomContainerStyle}>
        {searchIconComponent || (
          <Image
            source={require('../local-assets/search.png')}
            style={{width: 20, height: 20}}
          />
        )}
        <TextInput
          placeholderTextColor="#C5C5C5"
          {...this.props}
          ref={(ref) => (this.inputRef = ref)}
          placeholder={placeholderText}
          style={[styles.textInputStyle, textInputStyle]}
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
