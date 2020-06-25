import React from 'react';
import { SafeAreaView, ImageBackground, View, Text, CheckBox } from 'react-native';
import img3 from './src/img/background_3.jpg';
import Botao from './src/components/Botao';
import CaixaDeTexto from './src/components/CaixaDeTexto';

export default function App() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={img3} style={{ flex: 1 }}>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                  <CheckBox></CheckBox>
                    <Text style={{ color: 'white', fontSize: 40 }}> Olá João, </Text>
                    <Text style={{ color: 'white', fontSize: 20 }}> aqui estão as suas tarefas </Text>
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