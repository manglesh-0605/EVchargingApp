import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale } from 'react-native-size-matters';
import ThemeConstant from '../../../constants/ThemeConstant';
import { useSelector, useDispatch } from 'react-redux';
import Itemcard from '../../../components/bookmark/Itemcard';
import FilterItem from '../../../components/bookmark/FilterItem';
import SearchBar from '../../../components/SearchBar';
import ClassifiedsCategoryItem from '../../../components/classifieds/ClassifiedCategoryItem';


const Page = () => {
    const dispatch = useDispatch();
    const { isDark } = useSelector((state) => state.themeReducer);

    const [searchValue, setSearchValue] = useState('')
    return (
        <SafeAreaView edges={['top']} style={styles.container}>

            <Text style={styles.title}>Classifieds</Text>

            <SearchBar placeholder={"Search"} value={searchValue} setValue={setSearchValue} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                rowGap: scale(6),
                columnGap: scale(6)
            }}>
                <ClassifiedsCategoryItem category={'Property'} selected={true} iconName={'greenhouse'} />
                <ClassifiedsCategoryItem category={'Sports'} selected={false} iconName={'dumbbell'} />
                <ClassifiedsCategoryItem category={'Furniture'} selected={false} iconName={'sofa'} />
                <ClassifiedsCategoryItem category={'Vehicles'} selected={false} iconName={'bike'} />
                <ClassifiedsCategoryItem category={'Cloths'} selected={false} iconName={'tshirt-crew'} />
                <ClassifiedsCategoryItem category={'Electronics'} selected={false} iconName={'radio'}/>
            </View>


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: scale(8) }}>
                <Itemcard />
                <Itemcard />
                <Itemcard />
                <Itemcard />
                <Itemcard />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        paddingHorizontal: ThemeConstant.PADDING_MAIN,
        gap: scale(20)
    },
    title: {
        fontWeight: '700',
        fontSize: 24,
        marginTop: 30,
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