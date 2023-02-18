import { Pressable, Text } from 'react-native';

const Button = (props) => {
    const { onPress, title, buttonStyle, textStyle } = props;
    return (
        <Pressable style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
}

  export default Button;