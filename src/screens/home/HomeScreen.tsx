import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HeaderView from './HeaderView';
import colors from '../../styles/colors';
import ProductHorizontalSection from './components/ProductHorizontalSection';
import { Staticdata } from '../staticData/Staticdata';
import { Sizes } from '../../styles/Sizes';
import ShopByCondition from './components/ShopByCondition';
import TrendingDeals from './components/TrendingDeals';
import TrendingProducts from './components/TrendingProducts';
import ShopbyBrand from './components/ShopbyBrand';
import LineSeparator from '../../styles/LineSeparator';
import FirstBannerProducts from './components/FirstBannerProducts';
import imagePath from '../../constants/imagePath';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderView />
        {/* Product Highlight */}
        {Staticdata.map(section => (
          <ProductHorizontalSection data={section.products} />
        ))}
        <View style={styles.commonView}>
          {/* Trending Deals */}
          <TrendingDeals />

          {/* Shop By Condition */}
          <ShopByCondition />
        </View>

        {/* Trending Products */}
        <TrendingProducts />
        <LineSeparator color={colors.filterGrey} thickness={2} width="100%" />

        <View style={styles.commonView}>
          <ShopbyBrand />
        </View>

        <FirstBannerProducts
          topBanner={imagePath.firstBanner}
          bottomBanner={imagePath.secondBannner}
        />

        <FirstBannerProducts
          topthirdBanner={imagePath.thirdBanner}
          topforthBanner={imagePath.topforthBanner}
        />

        <FirstBannerProducts
          topfifthBanner={imagePath.topfifthBanner}
          topsixthBanner={imagePath.topsixthBanner}
        />
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
