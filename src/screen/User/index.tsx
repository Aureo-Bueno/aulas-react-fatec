import { Text, FlatList, View } from 'react-native';
import { IUser } from './@types';
import { useQuery } from 'react-query';
import { useGetUser } from '../../service';
import { styles } from './styles';

function User() {
  const { data, isLoading, isError } = useQuery<IUser[], Error>('users', useGetUser);

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
            renderItem={({item}) => <Text>{item.first_name}</Text>} 
          >
          </FlatList>
        </View>

        <View style={styles.viewMap}>
          {data?.map((user) => (
            <View>
              <Text>{user.first_name}</Text>
            </View>
          ))}
        </View>
    </View>
  );
}

export default User;
