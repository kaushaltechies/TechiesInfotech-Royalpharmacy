import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HeaderView from './HeaderView';
import colors from '../../styles/colors';
import ProductHorizontalSection from './components/ProductHorizontalSection';
import { Staticdata } from '../staticData/Staticdata';
import { Sizes } from '../../styles/Sizes';
import ShopByCondition from './components/ShopByCondition';
import TrendingDeals from './components/TrendingDeals';
import Divider from '../../styles/divider';
import TrendingProducts from './components/TrendingProducts';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderView />
        <View style={styles.commonView}>
          {/* Product Highlight */}
          {Staticdata.map(section => (
            <ProductHorizontalSection data={section.products} />
          ))}
          <Divider />

          {/* Trending Deals */}
          <TrendingDeals />

          {/* Shop By Condition */}
          <ShopByCondition />
        </View>
        {/* Trending Products */}
        <TrendingProducts />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  commonView: {
    paddingHorizontal: Sizes.s9,
  },
});

export default React.memo(HomeScreen);
