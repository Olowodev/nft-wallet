import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Text } from './Themed'
import { FontAwesome5 } from '@expo/vector-icons'

interface cardProps {
    image: any,
    collection: string,
    price: string, 
    name: string
}

const NftCard: React.FC<cardProps> = ({image, collection, price, name}) => {
  return (
    <View style={{margin: 14}}>
        <View style={{borderRadius: 20, backgroundColor: '#2A3547'}}>
            <Image source={image} style={styles.img} />
            <View style={{margin: 10}}>
                <Text style={{fontWeight: '600', fontSize: 14, lineHeight: 14,}}>{collection}</Text>
                <View style={{marginTop: 6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontWeight: '700', fontSize: 17, lineHeight: 17}}>{name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome5 name='ethereum' color='white' />
                    <Text style={{marginLeft: 3}}>{price}</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default NftCard

const styles = StyleSheet.create({
    img: {
        width: 159,
        height: 159,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    }
})