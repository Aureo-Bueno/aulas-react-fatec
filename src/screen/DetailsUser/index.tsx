import { RouteProp, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { IUser } from '../User/@types';
import { useSearchUser } from '../../service';

type UserParams = {
  DetailsUser: {
    id: string;
  };
};

function DetailsUser() {
  const route = useRoute<RouteProp<UserParams, 'DetailsUser'>>();
  const { data } = useQuery<IUser, Error>('users', () => useSearchUser(route.params.id));
  return(
    <View>
      <Text>{data?.first_name}</Text>
      <Text>{data?.last_name}</Text>
      <Text>{data?.email}</Text>
    </View>
  )
}

export default DetailsUser;