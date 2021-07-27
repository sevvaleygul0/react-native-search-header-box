import React from 'react';
import {
  Button,
  StyleSheet,
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
}

interface State {}

export class SearchHeader extends React.Component<Props, State> {
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
    } = this.props;
    return (
      <View style={styles.topContainerStyle}>
        <TouchableOpacity>
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
            <TouchableOpacity style={_rightButton(rightButtonColor)}>
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

  bottomComponent = () => (
    <View>
      <Text></Text>
    </View>
  );

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
