import { Button, Text, View } from 'react-native';
import { IUser } from './@types';
import { useQuery } from 'react-query';
import { useGetUser } from '../../service';
import { styles } from './styles/index';

function User() {
  const { data, isLoading, isError } = useQuery<IUser[], Error>('users', useGetUser);


  return(
    <View style={styles.container}>
      {isLoading &&
        <Text>Carregando</Text>
      }

      {isError &&
        <Text>Deu erro...</Text>
      }
      {data?.map(user => (
        <>
          <View style={styles.mainCardView}>
           <Text key={user.id}>{user.first_name} {user.last_name}</Text>
          </View>
        </>
        ))}
    </View>
  );
}

export default User;
