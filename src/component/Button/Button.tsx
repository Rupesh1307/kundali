import React, {FC} from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  isClick?: boolean;
  gradientColors?: string[];
  style?: StyleProp<ViewStyle>;
}

const Button: FC<ButtonProps> = ({
  children,
  isClick = false,
  gradientColors,
  style,
  ...rest
}) => {
  let Colors =
    gradientColors && gradientColors.length > 0
      ? gradientColors
      : ['red', 'green'];
  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        style={[style, styles.btn]}
        colors={isClick ? Colors : ['transparent', 'transparent']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
