import { Pressable, Text, Image } from 'react-native';

const Button = (props) => {
    const { onPress, title, buttonStyle, textStyle, icon } = props;
    return (
        <Pressable style={[buttonStyle, {display: 'flex', flexDirection: 'row', gap: 6}]} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
            {icon ? <Image source={icon} style={{width: 24, height: 24}}/> : null}
        </Pressable>
    );
}

  export default Button;