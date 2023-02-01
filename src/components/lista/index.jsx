import { StyleSheet, View, Text } from "react-native";

export function Lista({data}){
    return(
        <View style={styles.container}>
          <Text style={styles.text}>Nome: {data.nome}</Text>
          <Text style={styles.text}>Cargo: {data.cargo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: 390,
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#121212',
        borderRadius: 9
    },
    text: {
        color: '#FFF',
        fontSize: 17,
        paddingLeft: 30,
        paddingRight: 30
    }
})