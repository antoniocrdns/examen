import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FeedScreen = () => {

    const Navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://sm.ign.com/t/ign_pk/deal/t/the-legend/the-legend-of-zelda-echoes-of-wisdom-is-on-sale_5me6.1200.jpg' }} 
                style={styles.image}
            />
            <Text style={styles.title}>
                Zelda ahora es la protagonista
            </Text>
            <Text style={styles.description}>
                La princesa de la leyenda protagoniza una divertidísima aventura capaz de reinventar con maestría las fórmulas 
                más tradicionales de la saga de Nintendo con la libertad que ha caracterizado a sus últimas entregas.
            </Text>
            <TouchableOpacity 
                onPress={() => Navigation.navigate("Stack")}
                style={{
                    backgroundColor: "blue",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >Go to Stack Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16, 
        textAlign: 'center',
        color: '#666', 
    },
});

export default FeedScreen;
