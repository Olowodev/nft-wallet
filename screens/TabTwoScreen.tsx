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
          name: '#1030',
          collection: 'Hume Genesis',
          price: '0.574',
          image: require('../assets/images/1030.png'),
        },
        {
          name: '#3209',
          collection: 'The Orbs',
          price: '0.245',
          image: require('../assets/images/3209.png'),
        },
        {
          name: 'Renenev',
          collection: 'Audioglyphs',
          price: '0.04',
          image: require('../assets/images/renenev.png'),
        },
        {
          name: '#339',
          collection: 'Arpeggi',
          price: '0.32',
          image: require('../assets/images/339.png'),
        },
        {
          name: '#522',
          collection: 'Ocarinas',
          price: '0.077',
          image: require('../assets/images/522.png'),
        },
        {
          name: '#795',
          collection: 'Bridges',
          price: '0.1',
          image: require('../assets/images/795.jpg'),
        },
        {
          name: '#1030',
          collection: 'Hume Genesis',
          price: '0.574',
          image: require('../assets/images/1030.png'),
        },
        {
          name: '#3209',
          collection: 'The Orbs',
          price: '0.245',
          image: require('../assets/images/3209.png'),
        },
        {
          name: 'Renenev',
          collection: 'Audioglyphs',
          price: '0.04',
          image: require('../assets/images/renenev.png'),
        },
        {
          name: '#339',
          collection: 'Arpeggi',
          price: '0.32',
          image: require('../assets/images/339.png'),
        },
        {
          name: '#522',
          collection: 'Ocarinas',
          price: '0.077',
          image: require('../assets/images/522.png'),
        },
        {
          name: '#795',
          collection: 'Bridges',
          price: '0.1',
          image: require('../assets/images/795.jpg'),
        },
      ]
    },
    {
      id: 4,
      category: 'Sports',
      nftData: [
        {
          name: '#748',
          collection: 'Diamond Dawgs',
          price: '0.025',
          image: require('../assets/images/748.png'),
        },
        {
          name: '#8636',
          collection: 'The Association',
          price: '0.011',
          image: require('../assets/images/8636.png'),
        },
        {
          name: '#4339',
          collection: 'Knights of Degen',
          price: '0.199',
          image: require('../assets/images/4339.png'),
        },
        {
          name: '#985',
          collection: 'Steedz of Degen',
          price: '0.115',
          image: require('../assets/images/985.png'),
        },
        {
          name: '#1637',
          collection: 'Silks Gensis',
          price: '0.467',
          image: require('../assets/images/1637.png'),
        },
        {
          name: '#01226',
          collection: 'Legion DAO',
          price: '0.8',
          image: require('../assets/images/01226.png'),
        },
        {
          name: '#748',
          collection: 'Diamond Dawgs',
          price: '0.025',
          image: require('../assets/images/748.png'),
        },
        {
          name: '#8636',
          collection: 'The Association',
          price: '0.011',
          image: require('../assets/images/8636.png'),
        },
        {
          name: '#4339',
          collection: 'Knights of Degen',
          price: '0.199',
          image: require('../assets/images/4339.png'),
        },
        {
          name: '#985',
          collection: 'Steedz of Degen',
          price: '0.115',
          image: require('../assets/images/985.png'),
        },
        {
          name: '#1637',
          collection: 'Silks Gensis',
          price: '0.467',
          image: require('../assets/images/1637.png'),
        },
        {
          name: '#01226',
          collection: 'Legion DAO',
          price: '0.8',
          image: require('../assets/images/01226.png'),
        },
      ]
    },
    {
      id: 5,
      category: 'Photography',
      nftData: [
        {
          name: '#18',
          collection: 'Twin Flames',
          price: '100',
          image: require('../assets/images/18.png'),
        },
        {
          name: 'Purgatory',
          collection: 'Joey Photographer',
          price: '6',
          image: require('../assets/images/purgatory.png'),
        },
        {
          name: '#1',
          collection: 'Beyond the Veil',
          price: '1.1',
          image: require('../assets/images/1.png'),
        },
        {
          name: '#02',
          collection: 'RowHomes',
          price: '2.22',
          image: require('../assets/images/02.png'),
        },
        {
          name: 'Bark',
          collection: 'For The People(FTP)',
          price: '1',
          image: require('../assets/images/bark.jpg'),
        },
        {
          name: 'Twin Seals',
          collection: 'Powerful Iceland',
          price: '1.5',
          image: require('../assets/images/twinSeals.jpg'),
        },
        {
          name: '#18',
          collection: 'Twin Flames',
          price: '100',
          image: require('../assets/images/18.png'),
        },
        {
          name: 'Purgatory',
          collection: 'Joey Photographer',
          price: '6',
          image: require('../assets/images/purgatory.png'),
        },
        {
          name: '#1',
          collection: 'Beyond the Veil',
          price: '1.1',
          image: require('../assets/images/1.png'),
        },
        {
          name: '#02',
          collection: 'RowHomes',
          price: '2.22',
          image: require('../assets/images/02.png'),
        },
        {
          name: 'Bark',
          collection: 'For The People(FTP)',
          price: '1',
          image: require('../assets/images/bark.jpg'),
        },
        {
          name: 'Twin Seals',
          collection: 'Powerful Iceland',
          price: '1.5',
          image: require('../assets/images/twinSeals.jpg'),
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
