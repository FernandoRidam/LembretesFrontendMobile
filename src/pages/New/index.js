import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import Styles from './styles';

import api from '../../services/api';

export default function New({ navigation }) {
  const [ title, setTitle ] = useState('');
  const [ message, setMessage ] = useState('');

  async function handleNew() {
    await api.post('/sticky/new', {
      title,
      message,
    });

    navigation.navigate('Main');
  }

  return (
    <View style={ Styles.Container }>
      <TextInput style={ Styles.Input }
        placeholder="Titulo do lembrete"
        value={ title }
        onChangeText={ setTitle }
      />

      <TextInput style={ Styles.Input }
        placeholder="Mensagem"
        value={ message }
        onChangeText={ setMessage }
      />

      <TouchableOpacity
        style={ Styles.Button }
        onPress={ () => handleNew() }
      >
        <Text style={ Styles.TextButton }>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={ Styles.Button }
        onPress={ () => navigation.navigate('Main') }
      >
        <Text style={ Styles.TextButton }>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};