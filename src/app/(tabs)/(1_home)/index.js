import { StyleSheet, Text, View, useWindowDimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemeConstant from '../../../constants/ThemeConstant';
import { scale } from 'react-native-size-matters';
import { AntDesign, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Advert from '../../../components/classifieds/Advert';
import MapView, { Marker } from 'react-native-maps';
import Search from '../../../components/SearchBar';
import DrawerButton from '../../../components/DrawerButton';
import HomeModal from '../../../components/home/HomeModal';
import PIN from '../../../../assets/custom_pin.png';

const MAPDATA = [
  {
    "id": "1",
    "name": "GreenCharge Station",
    "location": {
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "address": "123 Main Street, City, State, 12345, Country",
    "rating": 4.5,
    "vehicleType": "Car",
    "numPlugs": 8,
    "numReviews": 120,
    "isAvailable": true,
    "price": "4,500"
  },
  {
    "id": "2",
    "name": "EcoPower Charging Hub",
    "location": {
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "address": "456 Charging Avenue, Town, State, 54321, Country",
    "rating": 4.2,
    "vehicleType": "Car & Bike",
    "numPlugs": 12,
    "numReviews": 85,
    "isAvailable": true,
    "price": "6,000"
  },
  {
    "id": "3",
    "name": "SwiftCharge Point",
    "location": {
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "address": "789 Electric Street, Metro, State, 67890, Country",
    "rating": 4.8,
    "vehicleType": "Car",
    "numPlugs": 6,
    "numReviews": 150,
    "isAvailable": false,
    "price": "3,500"
  },
  {
    "id": "4",
    "name": "CityBike Power Hub",
    "location": {
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "address": "101 Bike Lane, City, State, 11111, Country",
    "rating": 4.0,
    "vehicleType": "Bike",
    "numPlugs": 4,
    "numReviews": 95,
    "isAvailable": true,
    "price": "2,500"
  },
  {
    "id": "5",
    "name": "GreenWheels Charging Station",
    "location": {
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "address": "234 Renewable Road, Green City, State, 45678, Country",
    "rating": 4.6,
    "vehicleType": "Car",
    "numPlugs": 10,
    "numReviews": 110,
    "isAvailable": true,
    "price": "3,800"
  }
]



const Page = () => {
  const { width } = useWindowDimensions();
  const [searchValue, setSearchValue] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemsSelected, setItemSelected] = useState("");

  return (
    <SafeAreaView edges={[]} style={styles.container}>

      <MapView
        style={styles.map}
        provider={'google'}
        showsUserLocation
        showsMyLocationButton

      >
        {
          MAPDATA.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Marker
                  coordinate={{ latitude: item.location.latitude, longitude: item.location.longitude }}
                  onPress={() => {
                    setItemSelected(item)
                    setIsModalVisible(true)
                  }}

                />
              </TouchableOpacity>
            )
          })
        }

      </MapView>



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
          <Search placeholder={"Search"} value={searchValue} setValue={setSearchValue} />
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

      {/* MODAL */}
      <HomeModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} item={itemsSelected} />

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