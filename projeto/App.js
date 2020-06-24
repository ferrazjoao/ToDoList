
import React from 'react';
import {SafeAreaView, ImageBackground, View, Text, Image} from 'react-native';
import img from './src/img/background_1.jpg';
import Botao from './src/components/Botao';
import CaixaDeTexto from './src/components/CaixaDeTexto';


export default function App() {
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source = {img} style={{flex:1}}>
        <View>
            <Text style={{ color: 'white' }} >LOGIN
            </Text>
          </View>
          <View>
              <CaixaDeTexto placeholder ={'jaiminho@gmail.com'} onChangeText={onChangeText} value={value} />
          </View>
          </ImageBackground>
      </SafeAreaView>
  )
}
