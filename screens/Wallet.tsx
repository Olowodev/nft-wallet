import { FlatList, StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView, Text } from '../components/Themed'
import Header from '../components/Header'
import { AntDesign } from '@expo/vector-icons'
import { crypto } from '../data'
import FastImage from 'react-native-fast-image'

const Wallet = () => {
  return (
    <SafeAreaView style={styles.wallet}>
      <View style={{flex: 1}}>
        <Header title='Wallet' headerStyle={{paddingHorizontal: 22}} styleProps={{fontWeight: '600', fontSize: 24, lineHeight: 29}} />
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, paddingVertical: 15}}>
            <AntDesign name='arrowleft' size={30} color='white' style={{marginRight: 20}} />
            <TextInput placeholder='Search Tokens...' style={{ fontSize: 25, width: '100%'}} />
        </View>
        <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)', marginBottom: 20}}></View>
        <FlatList style={{marginBottom: 80}} showsVerticalScrollIndicator={false} ItemSeparatorComponent={()=> (
          <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)', marginVertical: 20}}></View>
            )}  data={crypto}
          renderItem={({item, index}) => {
            return (
            <TouchableOpacity>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 22}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image transition={false} source={item.icon} style={{width:40, height:40, marginRight: 20}} />
                    <Text style={{fontSize: 18, fontWeight: '700'}}>{item.name}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 16, fontWeight: '500'}}>{item.amount} {item.shortName}</Text>
                </View>
              </View>
            </TouchableOpacity>
            )
          }}
              />
      </View>
    </SafeAreaView>
  )
}

export default Wallet

const styles = StyleSheet.create({
    wallet: {
        flex: 1
    }
})