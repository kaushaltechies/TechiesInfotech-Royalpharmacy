import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewToken,
} from 'react-native';
import ProductCard from './ProductCard';
import strings from '../../../localization/strings';
import { Sizes } from '../../../styles/Sizes';
import colors from '../../../styles/colors';
import fontFamily from '../../../styles/fontFamily';
import { isTablet } from 'react-native-device-info';
import {
  fetchedProducts,
  productCategories,
} from '../../staticData/Staticdata';
import { FirstBannerProductsProps, Product } from '../types';
import LinearGradient from 'react-native-linear-gradient';
import LineSeparator from '../../../styles/LineSeparator';
import { moderateScale, scale } from 'react-native-size-matters';

const FirstBannerProducts = ({
  topBanner,
  bottomBanner,
  topthirdBanner,
  topforthBanner,
  topfifthBanner,
  topsixthBanner,
}: FirstBannerProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(fetchedProducts);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('Baby');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filtered = fetchedProducts.filter(
      item => item.category === selectedCategory,
    );
    setFilteredProducts(filtered);
  }, [selectedCategory]);

  const renderCategory = ({ item }: { item: string }) => {
    const isSelected = selectedCategory === item;
    return (
      <TouchableOpacity
        style={[styles.tab, isSelected ? styles.activeTab : styles.inactiveTab]}
        onPress={() => setSelectedCategory(item)}
      >
        <Text
          style={[
            styles.tabText,
            isSelected ? styles.activeTabText : styles.inactiveTabText,
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index ?? 0);
      }
    },
  ).current;

  const renderBanner = (banner: any) => (
    <View style={styles.imageView}>
      <Image source={banner} resizeMode="contain" style={styles.imageStyle} />
    </View>
  );
  return (
    <LinearGradient
      colors={[colors.filterGrey, colors.white]}
      style={styles.container}
    >
      {topBanner && renderBanner(topBanner)}
      {topfifthBanner && renderBanner(topfifthBanner)}

      <View style={styles.categoryList}>
        <FlatList
          data={productCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={renderCategory}
          ItemSeparatorComponent={() => <View style={{ width: scale(8) }} />}
        />
      </View>

      {filteredProducts.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>{strings.NO_PRODUCT_AVAILABLE}</Text>
        </View>
      ) : (
        <>
          <FlatList
            horizontal
            data={filteredProducts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onPress={() => console.log('Add to cart:', item.name)}
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />

          {/* Dot Indicator */}
          <View style={styles.dotContainer}>
            {filteredProducts.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentIndex
                    ? styles.activeDot
                    : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </>
      )}

      {topthirdBanner && renderBanner(topthirdBanner)}

      {topforthBanner && (
        <>
          <LineSeparator color={colors.filterGrey} thickness={2} width="100%" />
          {renderBanner(topforthBanner)}
        </>
      )}

      {bottomBanner && (
        <>
          <LineSeparator color={colors.filterGrey} thickness={2} width="100%" />
          {renderBanner(bottomBanner)}
        </>
      )}
      {topsixthBanner && (
        <>
          <LineSeparator color={colors.filterGrey} thickness={2} width="100%" />
          {renderBanner(topsixthBanner)}
        </>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Sizes.s10,
    paddingVertical: Sizes.s12,
  },
  imageView: {
    marginTop: Sizes.s10,
    marginBottom: Sizes.s7,
    alignItems: 'center',
    paddingHorizontal: Sizes.s9,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Sizes.s3,
    marginBottom: Sizes.s7,
    paddingHorizontal: Sizes.s10,
  },
  headingView: {
    width: '56%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ViewMoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'flex-end',
  },
  heading: {
    fontSize: Sizes.s18,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.black,
    marginLeft: Sizes.s2,
  },
  trendIcon: {
    width: isTablet() ? 32 : 24,
    aspectRatio: 1.2,
  },
  viewMore: {
    fontSize: Sizes.s14,
    fontFamily: fontFamily.medium,
    color: colors.black,
    fontWeight: '500',
    textAlign: 'center',
    marginRight: Sizes.s4,
  },
  listContainer: {
    paddingHorizontal: Sizes.s2,
  },
  tab: {
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(16),
    borderRadius: moderateScale(20),
    borderWidth: 1.2,
  },
  categoryList: {
    marginTop: Sizes.s10,
    paddingHorizontal: Sizes.s9,
    marginBottom: Sizes.s3,
  },
  activeTab: {
    backgroundColor: colors.Tapselect,
    borderColor: colors.Tapselect,
  },
  inactiveTab: {
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
  },
  tabText: {
    fontSize: moderateScale(13),
    fontFamily: fontFamily.medium,
  },
  activeTabText: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontWeight: '500',
    fontSize: moderateScale(14),
  },
  inactiveTabText: {
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontWeight: '500',
    fontSize: moderateScale(14),
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Sizes.s20,
  },
  noDataText: {
    fontSize: moderateScale(14),
    fontFamily: fontFamily.medium,
    color: colors.borderGrey,
    fontWeight: '500',
  },
  imageStyle: {
    width: '100%',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(25),
    marginBottom: moderateScale(10),
  },
  dot: {
    width: moderateScale(24),
    height: moderateScale(2.5),
    borderRadius: scale(4),
    marginHorizontal: scale(4),
  },
  activeDot: {
    backgroundColor: colors.sliderGray,
  },
  inactiveDot: {
    backgroundColor: colors.sliderLigtGray,
  },
});

export default FirstBannerProducts;
