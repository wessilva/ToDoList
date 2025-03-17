import { Text, View } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/atoms/Header/Header';


export default function Home() {
    return (
        <View style={styles.container}>

            <Header />
        </View>
    )
}