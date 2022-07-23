import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Header from '../components/Header';
import NftCard from '../components/NftCard';
import { Text, SafeAreaView } from '../components/Themed';

export default function TabTwoScreen() {

  const market = [
    {
      id: 1,
      category: 'Art',
      nftData: [
        {
          name: '#6154',
          collection: 'PLUR Official',
          price: '0.094',
          image: require('../assets/images/plur6154.png'),
        },
        {
          name: '#67',
          collection: 'Phanta Bear',
          price: '0.55',
          image: require('../assets/images/phantaBear67.png'),
        },
        {
          name: '#4262',
          collection: 'Los Muertos',
          price: '0.167',
          image: require('../assets/images/losMuertos4262.png'),
        },
        {
          name: '#2424',
          collection: 'Karafuru',
          price: '0.39',
          image: require('../assets/images/kuyaku2424.png'),
        },
        {
          name: '#2951',
          collection: 'Feline Fiendz',
          price: '0.115',
          image: require('../assets/images/felineFiend2951.png'),
        },
        {
          name: '#860',
          collection: 'Rude Demon',
          price: '0.392',
          image: require('../assets/images/demon860.png'),
        },
        {
          name: '#2474',
          collection: 'Boki',
          price: '0.295',
          image: require('../assets/images/boki2474.png'),
        },
        {
          name: '#4506',
          collection: 'Bored Ape',
          price: '92',
          image: require('../assets/images/4506.png'),
        },
        {
          name: '#5719',
          collection: 'Ape Hater Club',
          price: '0.09',
          image: require('../assets/images/5719.png'),
        },
        {
          name: '#6154',
          collection: 'PLUR Official',
          price: '0.094',
          image: require('../assets/images/plur6154.png'),
        },
        {
          name: '#67',
          collection: 'Phanta Bear',
          price: '0.55',
          image: require('../assets/images/phantaBear67.png'),
        },
        {
          name: '#4262',
          collection: 'Los Muertos',
          price: '0.167',
          image: require('../assets/images/losMuertos4262.png'),
        },
      ]
    },
    {
      id: 2,
      category: 'Collectibles',
      nftData: [
        {
          name: '#5059',
          collection: 'HAPE PRIME',
          price: '0.87',
          image: require('../assets/images/5059.png'),
        },
        {
          name: '#1062',
          collection: 'Blitmap',
          price: '4',
          image: require('../assets/images/1062.png'),
        },
        {
          name: '#2323',
          collection: 'Purrnelopes',
          price: '0.23',
          image: require('../assets/images/2323.png'),
        },
        {
          name: '#1377',
          collection: 'Kumaverse',
          price: '0.179',
          image: require('../assets/images/1377.png'),
        },
        {
          name: '#6645',
          collection: 'DASK',
          price: '0.12',
          image: require('../assets/images/6645.png'),
        },
        {
          name: '#11',
          collection: 'Ghxsts',
          price: '24',
          image: require('../assets/images/11.png'),
        },
        {
          name: '#5059',
          collection: 'HAPE PRIME',
          price: '0.87',
          image: require('../assets/images/5059.png'),
        },
        {
          name: '#1062',
          collection: 'Blitmap',
          price: '4',
          image: require('../assets/images/1062.png'),
        },
        {
          name: '#2323',
          collection: 'Purrnelopes',
          price: '0.23',
          image: require('../assets/images/2323.png'),
        },
        {
          name: '#1377',
          collection: 'Kumaverse',
          price: '0.179',
          image: require('../assets/images/1377.png'),
        },
        {
          name: '#6645',
          collection: 'DASK',
          price: '0.12',
          image: require('../assets/images/6645.png'),
        },
        {
          name: '#11',
          collection: 'Ghxsts',
          price: '24',
          image: require('../assets/images/11.png'),
        },
      ]
    },
    {
      id: 3,
      category: 'Music',
      nftData: [
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
      ]
    },
    {
      id: 4,
      category: 'Sports',
      nftData: [
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
      ]
    },
    {
      id: 5,
      category: 'Photography',
      nftData: [
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },{
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
        {
          name: '',
          collection: '',
          price: '',
          image: '',
        },
      ]
    },
  ]

  const [categoryState, setCategoryState] = useState('Collectibles');
  return (
    <SafeAreaView style={styles.market}>
      <View style={styles.container}>
        <Header title='Market' headerStyle={{paddingHorizontal: 22}} styleProps={{fontWeight: '600', fontSize: 24, lineHeight: 29}} />
        <View style={{marginTop: 24, marginLeft: 20}}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
             <TouchableOpacity onPress={()=>setCategoryState('Art')} style={{paddingVertical: 8, paddingHorizontal: 19, borderRadius: 50, backgroundColor: '#2f2f34', marginRight: 15, borderColor: '#0aff96', borderWidth: categoryState=='Art' ? 2 : 0}}>
                <Text>Art</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setCategoryState('Collectibles')} style={{paddingVertical: 8, paddingHorizontal: 19, borderRadius: 50, backgroundColor: '#2f2f34', marginRight: 15, borderColor: '#0aff96', borderWidth: categoryState=='Collectibles' ? 2 : 0}}>
                <Text>Collectibles</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setCategoryState('Music')} style={{paddingVertical: 8, paddingHorizontal: 19, borderRadius: 50, backgroundColor: '#2f2f34', marginRight: 15, borderColor: '#0aff96', borderWidth: categoryState=='Music' ? 2 : 0}}>
                <Text>Music</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setCategoryState('Sports')} style={{paddingVertical: 8, paddingHorizontal: 19, borderRadius: 50, backgroundColor: '#2f2f34', marginRight: 15, borderColor: '#0aff96', borderWidth: categoryState=='Sports' ? 2 : 0}}>
                <Text>Sports</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setCategoryState('Photography')} style={{paddingVertical: 8, paddingHorizontal: 19, borderRadius: 50, backgroundColor: '#2f2f34', marginRight: 15, borderColor: '#0aff96', borderWidth: categoryState=='Photography' ? 2 : 0}}>
                <Text>Photography</Text>
              </TouchableOpacity>
          </ScrollView>
        
        </View>
        <View style={{flex: 1, marginHorizontal: 6, marginTop: 21, marginBottom: 50}}>
        <FlatList showsVerticalScrollIndicator={false} numColumns={2}
          data={market.find(({category})=> category == categoryState)?.nftData}
          renderItem={({item, index}) => {
            return (
              <NftCard {...item} />
            )
          }}

        />
        </View>
        
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  market: {
    flex: 1,
  },
  container: {
    paddingTop: 35,
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#fff'
  },
});
