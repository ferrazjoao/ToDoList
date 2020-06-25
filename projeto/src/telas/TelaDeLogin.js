import React from 'react';
import { SafeAreaView, ImageBackground, View, Text } from 'react-native';
import img from './src/img/background_1.jpg';
import Botao from './src/components/Botao';
import CaixaDeTexto from './src/components/CaixaDeTexto';

export default function App() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={img} style={{ flex: 1 }}>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 40 }}> Login </Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <CaixaDeTexto placeholder={'jaiminho@gmail.com'} />
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1, marginBottom: 200 }}>
                    <Botao text={'Entrar'} />
                    <Botao text={'Cadastrar-se'} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}