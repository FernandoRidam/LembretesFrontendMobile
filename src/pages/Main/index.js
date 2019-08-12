import React, { useState, useEffect } from 'react';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import api from '../../services/api';

import Styles from './styles';

import dislike from '../../assets/dislike/dislike.png';

export default function Main({ navigation }) {
  const [ stickys, setStickys ] = useState([]);

  useEffect(() => {
    async function loadStickys() {
      const response = await api.get('/stickys');

      console.log( response.data );

      setStickys( response.data );
    }

    loadStickys();
  }, []);

  async function handleOk(){
    const [ sticky, ...rest ] = stickys;

    await api.delete(`/sticky/delete/${ sticky._id }`);

    setStickys( rest );
  }

  return (
    <View style={ Styles.Container }>
      <TouchableOpacity
        onPress={ () => navigation.navigate('New') }
        style={ Styles.ButtonNew }
      >
        <Text style={ Styles.TextButton }>Criar</Text>
      </TouchableOpacity>

      <View style={ Styles.CardsContainer } >
        <ScrollView style={ Styles.ScrollContainer } >
        { stickys.length === 0
          ? <Text style={ Styles.Empty}>Acabou :) </Text>
          : (stickys.map(( sticky, index ) => (
            <View
              key={ sticky._id }
              style={[ Styles.Card, { zIndex: stickys.length - index }]}
            >  
              <View style={ Styles.Footer }>
                <Text style={ Styles.Name }>
                  { sticky.title }
                </Text>
  
                <Text style={ Styles.Bio } numberOfLines={ 5 }>
                  { sticky.message }
                </Text>
              </View>
  
              <View style={ Styles.ButtonsContainer }>
                <TouchableOpacity
                  style={ Styles.Button }
                  onPress={ () => handleOk( sticky._id ) }
                >
                  <Image source={ dislike }/>
                </TouchableOpacity>
              </View>
            </View>
          )))}
          </ScrollView>
        </View>
    </View>
  );
};