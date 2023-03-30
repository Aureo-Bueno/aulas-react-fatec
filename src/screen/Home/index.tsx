import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { addButton, initialUser, removeUser } from '../../hooks/customHook';
import { styles } from '../../../styles';
import { IUser } from '../../../types';
import { IHomeProps } from './@types';

export const Home = ({ navigation }: IHomeProps ) => {
  const [name, setName] = useState<IUser>({ name: '', lasName: '' });  
  const { sizeText, container } = styles;
  const { add, addValue, decreaseValue, resetValue } = addButton();
  const handleName = (user: IUser):void => {
    setName(user);
  };

  return (
    <View style={container}>
      <Button onPress={() => handleName(initialUser)} title='Colocar Nome e Sobrenome' />
      <Button onPress={() => handleName(removeUser)} title='Remover Nome e Sobrenome' />
      <Text style={sizeText}>Nome e Sobrenome:{name.name} { name.lasName }</Text>
      <Button onPress={() => addValue()} title='Adicionar Valor' />
      <Button onPress={() => decreaseValue()} title='Remover Valor' />
      <Button onPress={() => resetValue()} title='Resetar Valor' />
      <Text style={sizeText}>Valor: {add}</Text>
      <StatusBar style="auto" />
      <Button title='Ir para Detalhes' onPress={() => navigation.navigate('Details')} />
    </View>
  );
}
