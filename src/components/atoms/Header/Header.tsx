import { Image, Text, View } from "react-native";
import SvgUri from 'react-native-svg';
import { styles } from './styles';



export function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('/assets/Logo.png')} />


        </View>
    )

}