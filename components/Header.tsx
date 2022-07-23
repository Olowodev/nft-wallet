import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import {Text} from './Themed'

interface headerProps {
  image?: boolean,
  styleProps: any,
  title: string,
  headerStyle?: any
}

const Header: React.FC<headerProps> = ({image, styleProps, title, headerStyle}) => {
  return (
    <View style={[styles.header, {...headerStyle}]}>
        <View style={[styles.leftHeader]}>
            {image ?<Image source={require('../assets/images/profile.png')} /> : null}
            <Text style={{...styleProps}}>{title}</Text>
        </View>
        <View style={styles.notification}>
            <FontAwesome size={28} name='bell' color="#fff" />
            <View style={styles.notificationNum}><Text>1</Text></View>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      leftHeaderTitle: {
        marginLeft: 13,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19
      },
      notification: {
        position: 'relative'
      },
      notificationNum: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        width: 18,
        height: 18,
        borderRadius: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }
})