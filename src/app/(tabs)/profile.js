import { Image, ScrollView, StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import ThemeConstant from '../../constants/ThemeConstant';
import Profileitem from '../../components/profile/profileitem';
import Line from '../../components/profile/line';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { SET_THEME } from '../../store/allactionsTypes';


const Profile = () => {
    const dispatch = useDispatch();
    const { isDark } = useSelector((state) => state.themeReducer);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                backgroundColor: '#F5F5F5',
                paddingHorizontal: ThemeConstant.PADDING_MAIN,
                height: moderateVerticalScale(218),
            }}>
                <Text style={styles.title}>My Profile</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View
                        style={{
                            backgroundColor: '#fff', position: 'relative',
                            borderRadius: scale(1000),
                            padding: scale(5),
                            width: moderateScale(100),
                            aspectRatio: 1 / 1
                        }}>
                        <Image source={{ uri: 'https://xsgames.co/randomusers/assets/avatars/male/67.jpg' }}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: scale(1000),
                                resizeMode: 'contain'

                            }} />
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: moderateScale(30),
                            aspectRatio: 1 / 1,
                            backgroundColor: ThemeConstant.PRIMARY_COLOR,
                            borderRadius: scale(100),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <SimpleLineIcons name="pencil" size={18} color="#fff" />
                        </View>
                    </View>

                    <View style={{
                        marginLeft: moderateScale(40),
                        flex: 1
                    }}>
                        <Text style={styles.name}>Abdul Rahman</Text>
                        <Text style={styles.number}>+971 1234567891</Text>
                        <Text style={styles.email}>abdulrahman@gmail.com</Text>
                    </View>
                </View>
            </View>

            <ScrollView>
                <View style={{
                    paddingHorizontal: ThemeConstant.PADDING_MAIN,
                    gap: scale(14),
                    marginTop: moderateScale(30)
                }}>
                    <Profileitem name={'Personal Info'} />
                    <Profileitem name={'My Vehicles'} />
                    <Line />
                    <Profileitem name={'Reviews'} />
                    <Profileitem name={'Alerts'} />
                    <Profileitem name={'Subscription   '} />
                    <Profileitem name={'Language'} />
                    <Line />
                    <Profileitem name={'Add New Charging Station'} />
                    <Line />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: scale(16)
                        }}>
                            Dark Mode
                        </Text>

                        <View>
                            <Switch
                                trackColor={{ false: '#c3c3c3', true: '#000' }}
                                thumbColor={true ? '#fff' : '#000'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => { dispatch({ type: SET_THEME, payload: isDark ? false : true }) }}
                                value={isDark}
                            />
                        </View>
                    </View>
                    <Line />

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            color: '#ff0000',
                            fontWeight: '600',
                            fontSize: scale(16)
                        }}>
                            Logout
                        </Text>

                        <View>
                            <MaterialIcons name="logout" size={24} color="#ff0000" />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontWeight: '700',
        fontSize: 24,
        marginVertical: 30,
    },
    name: {
        fontWeight: '700',
        fontSize: scale(21),
        color: '#0E1617',
        marginBottom: moderateScale(15)
    },
    number: {
        marginBottom: moderateScale(4),
        color: '#0E1617',
        fontSize: moderateScale(14)

    },
    email: {
        color: ThemeConstant.FADED_BLACK,
        fontSize: moderateScale(14),

    }
})