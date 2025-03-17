import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryBlack,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyles: {
        fontSize: 35,
        color: 'blue',
    }

});

export { styles };