import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Image, FlatList, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, SafeAreaView } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Header from '../components/Header';
import WalletBalance from '../components/WalletBalance';
import Action from '../components/Action';
import { Dimensions, PixelRatio } from 'react-native';


import TokenRow from '../components/TokenRow';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  const {width, height} = Dimensions.get("window")
  const homeTabs = [
    {
      id: 1,
      title: 'Tokens',
      cryptoData: [
        {
          bgColor: 'orange',
          iconName: require('../assets/images/btc.png'),
          price: '23,230.19',
          percentage: 0.1,
          shortName:'BTC',
          cryptoName:'Bitcoin'
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/eth.png'),
          price: '1,585.69',
          percentage: 3.9,
          shortName:'ETH',
          cryptoName:'Ethereum',
          f5: 'f5' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/usdt.png'),
          price: '0.998667',
          percentage: 0.5,
          shortName:'USDT',
          cryptoName:'Tether' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/usdc.png'),
          price: '0.998449',
          percentage: 0.4,
          shortName:'USDC',
          cryptoName:'USD Coin' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/bnb.png'),
          price: '266.43',
          percentage: 3.1,
          shortName:'BNB',
          cryptoName:'BNB' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/busd.png'),
          price: '1',
          percentage: 0.0,
          shortName:'BUSD',
          cryptoName:'Binance USD' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/xrp.png'),
          price: '0.366603',
          percentage: 1.0,
          shortName:'XRP',
          cryptoName:'XRP' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/ada.png'),
          price: '0.502086',
          percentage: 2.2,
          shortName:'ADA',
          cryptoName:'Cardano' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/sol.png'),
          price: '43.24',
          percentage: 4.1,
          shortName:'SOL',
          cryptoName:'Solana' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/doge.png'),
          price: '0.070467',
          percentage: 1.0,
          shortName:'DOGE',
          cryptoName:'Dogecoin' 
        },
      ]
    },
    {
      id: 2,
      title: 'NFTs',
      cryptoData: [
        {
          bgColor: 'orange',
          iconName: require('../assets/images/3266.png'),
          price: '2,921.63',
          percentage: 1.84,
          shortName:'#3266',
          cryptoName:'Moonbird Oddities',
          nft: 'nft' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/6784.png'),
          price: '146,000',
          percentage: 92,
          shortName:'#6784',
          cryptoName:'Bored Ape Yacht Club',
          nft: 'nft' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/71832.png'),
          price: '3,914.24',
          percentage: 2.49,
          shortName:'#71832',
          cryptoName:'Otherdeed For Otherside' ,
          nft: 'nft' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/2016.png'),
          price: '231.82',
          percentage: 0.148,
          shortName:'#2016',
          cryptoName:'Froots V2',
          nft: 'nft' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/3266.png'),
          price: '2,921.63',
          percentage: 1.84,
          shortName:'#3266',
          cryptoName:'Moobirds Oddities',
          nft: 'nft' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/6784.png'),
          price: '146,000',
          percentage: 92,
          shortName:'#6784',
          cryptoName:'Bored Ape Yacht Club',
          nft: 'nft' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/2016.png'),
          price: '231.82',
          percentage: 0.148,
          shortName:'#2016',
          cryptoName:'Froots V2',
          nft: 'nft' 
        },
        {
          bgColor: 'orange',
          iconName: require('../assets/images/71832.png'),
          price: '3,914.24',
          percentage: 2.49,
          shortName:'#71832',
          cryptoName:'Otherdeed For Otherside',
          nft: 'nft' 
        },
      ]
    },
  ]


  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.container}>
        <Header image styleProps={{marginLeft: 13, fontWeight: '600', fontSize: 16, lineHeight: 19}} title='Olowoo' />
        <WalletBalance />
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35}}>
          <Action color='#2A3547' name='bank-transfer-out' text='Send' />
          <Action color='blue' name='plus' text='Buy' />
          <Action color='#2A3547' name='bank-transfer-in' text='Receive' />
        </View>
        <View style={{marginTop: 34, flexDirection: 'row', borderRadius: 100, backgroundColor: '#212436',}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3B3F58', height: '100%',  paddingVertical: 14, borderRadius: 100}}>
            <Text>Tokens</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Text>NFTs</Text>
          </View>
        </View>
        <FlatList ItemSeparatorComponent={()=> (
          <View style={{width: 20}}></View>
  )} horizontal data={homeTabs} snapToAlignment='center'
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1, width: width - 48}}>
              <FlatList showsVerticalScrollIndicator={false}  style={{ marginBottom: 75, }} data={item.cryptoData}
                renderItem={({ item, index}) => {
                  return (
                    <TokenRow key={index} {...item} />
                )
              }}
              />
              {/*{cryptoData.map((data, index)=> (
                  <TokenRow key={index} bgColor={data.bgColor} iconName={data.iconName} price={data.price} percentage={data.percentage} shortName={data.shortName} cryptoName={data.cryptoName} />
                ))}*/}
              </View>
            )
          }} />
          
          
        
        
        
        
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  container: {
    paddingTop: 22,
    paddingHorizontal: 24,
    flex: 1
  },
  
});
