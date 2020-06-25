import React from 'react';
import { SafeAreaView, ImageBackground, View, Text } from 'react-native';
import img2 from './src/img/background_2.jpg';
import Botao from './src/components/Botao';
import CaixaDeTexto from './src/components/CaixaDeTexto';

export default function App() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={img2} style={{ flex: 1 }}>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 40 }}> Cadastro </Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <CaixaDeTexto placeholder={'Login'} marginTop={20} />
                    <CaixaDeTexto placeholder={'E-mail'} marginTop={20} />
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1, marginBottom: 100 }}>
                    <Botao text={'Cadastrar'} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}