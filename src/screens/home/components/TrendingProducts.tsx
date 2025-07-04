import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import ProductCard from './ProductCard';
import imagePath from '../../../constants/imagePath';
import strings from '../../../localization/strings';
import { Sizes } from '../../../styles/Sizes';
import colors from '../../../styles/colors';
import fontFamily from '../../../styles/fontFamily';
import { isTablet } from 'react-native-device-info';
import { fetchedProducts } from '../../staticData/Staticdata';
import { Product } from '../types';

const TrendingProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(fetchedProducts);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.headingView}>
          <Image
            source={imagePath.TrendingChartIcon}
            resizeMode="contain"
            style={styles.trendIcon}
          />
          <Text style={styles.heading}>{strings.TRENDING_PRODUCTS}</Text>
        </View>
        <TouchableOpacity style={styles.ViewMoreBtn}>
          <Text style={styles.viewMore}>{strings.VIEW_MORE}</Text>
          <Image source={imagePath.rightArrowIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => console.log('Add to cart:', item.name)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Sizes.s10,
    backgroundColor: colors.gray,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Sizes.s3,
    marginBottom: Sizes.s7,
    paddingHorizontal: Sizes.s9,
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
});

export default TrendingProducts;
