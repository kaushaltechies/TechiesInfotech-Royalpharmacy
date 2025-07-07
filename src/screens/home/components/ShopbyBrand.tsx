import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { dummyBrands } from '../../staticData/Staticdata';
import { Sizes } from '../../../styles/Sizes';
import strings from '../../../localization/strings';
import colors from '../../../styles/colors';
import fontFamily from '../../../styles/fontFamily';
import { moderateScale } from 'react-native-size-matters';
import { BrandItem } from '../types';

const ShopbyBrand = () => {
  const renderBrandCard = ({ item }: { item: BrandItem }) => {
    return (
      <TouchableOpacity style={styles.brandCard}>
        <Image source={item.logo} resizeMode="contain" />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.headingView}>
          <Text style={styles.heading}>{strings.SHOP_BY_BRAND}</Text>
        </View>
      </View>
      <FlatList
        data={dummyBrands}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderBrandCard}
        ItemSeparatorComponent={() => (
          <View style={styles.SeparatorComponent} />
        )}
      />
    </View>
  );
};

export default ShopbyBrand;

const styles = StyleSheet.create({
  container: {
    marginTop: Sizes.s2,
    marginBottom: Sizes.s9,
  },
  brandCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: moderateScale(4.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandLogo: {
    width: '80%',
    height: '60%',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Sizes.s3,
    marginBottom: Sizes.s14,
  },
  headingView: {
    width: '56%',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: Sizes.s18,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.black,
    textAlign: 'left',
  },
  SeparatorComponent: {
    width: Sizes.s14,
  },
});
