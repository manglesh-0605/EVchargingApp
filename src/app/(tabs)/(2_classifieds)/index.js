import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import ThemeConstant from '../../../constants/ThemeConstant';
import { useSelector, useDispatch } from 'react-redux';
import Itemcard from '../../../components/bookmark/Itemcard';
import FilterItem from '../../../components/bookmark/FilterItem';
import SearchBar from '../../../components/SearchBar';
import ClassifiedsCategoryItem from '../../../components/classifieds/ClassifiedCategoryItem';
import ClassifiedItemCard from '../../../components/classifieds/ClassifiedItemCard';
import Advert from '../../../components/classifieds/Advert';
import CustomButton from '../../../components/CustomButton';
import DrawerButton from '../../../components/DrawerButton';


const Page = () => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('')
    return (
        <SafeAreaView edges={['top']} style={styles.container}>

            <View style={{
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={styles.title}>Classifieds</Text>
                <DrawerButton />

            </View>


            <View>
                <SearchBar placeholder={"Search"} value={searchValue} setValue={setSearchValue} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: scale(20), paddingBottom: moderateVerticalScale(100) }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    rowGap: scale(10),
                    columnGap: scale(6)
                }}>
                    <ClassifiedsCategoryItem category={'Property'} selected={true} iconName={'greenhouse'} />
                    <ClassifiedsCategoryItem category={'Sports'} selected={false} iconName={'dumbbell'} />
                    <ClassifiedsCategoryItem category={'Furniture'} selected={false} iconName={'sofa'} />
                    <ClassifiedsCategoryItem category={'Vehicles'} selected={false} iconName={'bike'} />
                    <ClassifiedsCategoryItem category={'Cloths'} selected={false} iconName={'tshirt-crew'} />
                    <ClassifiedsCategoryItem category={'Electronics'} selected={false} iconName={'radio'} />
                </View>
                <Advert url={'https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg'} />

                <View style={{
                    gap: scale(20)
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontWeight: '700', fontSize: scale(20) }}>Recently Published</Text>
                        <TouchableOpacity>
                            <Text style={{ color: ThemeConstant.FADED_BLACK }}>View all</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: scale(12) }}
                        horizontal
                        data={[1, 2, 3, 4, 5]}
                        keyExtractor={(item, index) => index}
                        renderItem={() => {
                            return (
                                <ClassifiedItemCard />
                            )
                        }}

                    />
                </View>
            </ScrollView>

            <View style={{
                position: 'absolute',
                bottom: scale(10),
                width: '100%',
                alignSelf: 'center'

            }}>
                <CustomButton title={'Post an Advertisement'} />
            </View>
        </SafeAreaView>
    )
}

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        paddingHorizontal: ThemeConstant.PADDING_MAIN,
        gap: scale(20),
        paddingBottom: moderateVerticalScale(40),
        position: 'relative'
    },
    title: {
        fontWeight: '700',
        fontSize: 24,
    }
})