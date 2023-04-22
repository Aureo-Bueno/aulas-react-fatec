import { Text, FlatList, View, TextInput, Button, Pressable, Touchable, TouchableOpacity } from 'react-native';
import { IUser } from './@types';
import { useQuery } from 'react-query';
import { useGetUser, useSearchUser } from '../../service';
import { styles } from './styles';
import { useState } from 'react';
import { IHomeProps } from '../Home/@types';
import { useNavigation } from '@react-navigation/native';

function User({ navigation }: IHomeProps) {
  const [id, setId] = useState('');
  const { data, isLoading, isError } = useQuery<IUser[], Error>('users', useGetUser);
  const teste = useNavigation();

  // const searchUser = () => {
  //   const { data } = useQuery<IUser, Error>('users', () => useSearchUser(id));
  // }

  return(
    <View style={styles.view}>
      {isLoading &&
        <Text>Carregando</Text>
      }

      {isError &&
        <Text>Deu erro...</Text>
      }
        <View style={styles.viewFlat}>
          <FlatList 
            data={data} 
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Details User', { id: item.id })}> 
                <Text>Nome completo:{item.first_name} - {item.last_name}</Text>
              </TouchableOpacity>
            )} 
          >
          </FlatList>
        </View>

        {/* <View style={styles.viewMap}>
          {data?.map((user) => (
            <View>
              <TouchableOpacity onPress={navigation.navigate('Details User', { id: user.id })}> 
                <Text key={user.id}>{user.first_name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View> */}
        {/* <TextInput
          placeholder='Digite o id do usuário'
          onChangeText={setId}
          value={id}
        />
        <Button 
          title='Buscar'
          onPress={searchUser}
        /> */}
    </View>
  );
}

export default User;
