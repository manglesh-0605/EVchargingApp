import { StyleSheet, Text, View, useWindowDimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import BackButton from '../../components/BackButton';
import { Entypo } from '@expo/vector-icons';
import ThemeConstant from '../../constants/ThemeConstant';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import { AntDesign, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Line from '../../components/profile/line';
import Advert from '../../components/classifieds/Advert';
import MapView from 'react-native-maps';
import Search from '../../components/SearchBar';
import DrawerButton from '../../components/DrawerButton';



const Page = () => {
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView edges={[]} style={styles.container}>

      <MapView style={styles.map} />


      <View style={{
        paddingHorizontal: ThemeConstant.PADDING_MAIN,
        position: 'absolute',
        top: scale(50),
        right: scale(0),
        zIndex: 2,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: scale(20),
        alignItems: 'center'
      }}>
        <View style={{ flex: 1 }}>
          <Search placeholder={"Search"} />
        </View>

        {/* This will be drawer */}
        <DrawerButton />

      </View>

      {/* ADVERTISMENT */}
      <View style={{
        paddingHorizontal: ThemeConstant.PADDING_MAIN,
        position: 'absolute',
        bottom: scale(20),
        right: scale(0),
        zIndex: 2,
        width: '100%'
      }}>
        <Advert url={'https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg'} />
      </View>


      {/* ALL Floating Icons */}
      <View style={{
        paddingHorizontal: ThemeConstant.PADDING_MAIN,
        position: 'absolute',
        top: scale(150),
        right: scale(0),
        gap: scale(10)
      }}>
        <TouchableOpacity activeOpacity={0.9} style={styles.iconContainer}>
          <MaterialCommunityIcons name="transit-connection-variant" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} style={styles.iconContainer}>
          <AntDesign name="menufold" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} style={styles.iconContainer}>
          <FontAwesome name="bullseye" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} style={styles.iconContainer}>
          <MaterialIcons name="add-location" size={24} color="#fff" />
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  }, iconContainer: {
    width: scale(40),
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeConstant.PRIMARY_COLOR,
    borderRadius: scale(1000)
  },
  map: {
    width: '100%',
    height: '100%',
  },
})