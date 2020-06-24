import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


export default function Botao(props) {
    const lidarComClique = () => {
    };

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                height: 50,
                marginTop: 10,
                width: 190,
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 2
            }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black'
            }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}