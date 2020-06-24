import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default function CaixaDeTexto(props) {
    return (
      <TextInput placeholderTextColor= '#696969' placeholder= {props.placeholder}
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 22,
          height: 50,
          width: 300,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          alignSelf: 'center',
          backgroundColor: 'white'
        }}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    );
  }