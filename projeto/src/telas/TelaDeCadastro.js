import React from 'react';
import { SafeAreaView, ImageBackground, View, Text, Alert } from 'react-native';
import img2 from './src/img/background_2.jpg';
import Botao from './src/components/Botao';
import CaixaDeTexto from './src/components/CaixaDeTexto';
import { cadastrar } from '../API/usuario';
import Usuario from './src/API/Usuario';

class TelaDeCadastro extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            usuario: ''
        }
    }

    fazerCadastro = () => {
        cadastrar(this.state.usuario, this.state.email)
        .then (() => {Alert.alert('Cadastro feito');
        this.props.navigation.navigate('Login')
    })
        .catch (() => {Alert.alert('Ops, erro ao cadastrar, tente novamente') 
    })
    }

    render() {
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
                        <Botao text='Cadastrar' onPress={this.fazerCadastro} />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
export default TelaDeCadastro;