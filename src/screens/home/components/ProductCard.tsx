import React, { memo, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Product } from '../types';
import imagePath from '../../../constants/imagePath';
import colors from '../../../styles/colors';
import fontFamily from '../../../styles/fontFamily';
import { Sizes } from '../../../styles/Sizes';
import strings from '../../../localization/strings';
import { moderateScale } from '../../../styles/utils';

interface Props {
  product: Product;
  onPress: () => void;
  isGrid?: boolean;
}
const ProductCard: React.FC<Props> = ({ product, onPress, isGrid = false }) => {
  const screenWidth = Dimensions.get('window').width;
  const tablet = DeviceInfo.isTablet();

  const cardWidth = useMemo(() => {
    const margin = 12;
    if (tablet) {
      return screenWidth * 0.24;
    }
    return isGrid ? (screenWidth - margin * (2 + 1)) / 2 : screenWidth * 0.445;
  }, [screenWidth, isGrid, tablet]);

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <View style={styles.borderImage}>
        <View style={styles.childContainer}>
          {product.discount && (
            <View style={styles.discountView}>
              <ImageBackground
                style={styles.discountBadge}
                source={imagePath.Discountbadge}
                resizeMode="contain"
              >
                <View style={styles.textWrapper}>
                  <Text
                    style={styles.discountPercent}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {product.discount}
                  </Text>
                  <Text
                    style={styles.discountOff}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {strings.OFF}{' '}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          )}
          <TouchableOpacity style={styles.iconView}>
            <Image source={imagePath.grayHeart} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        <Image
          source={product.image}
          style={[styles.image, tablet && { height: 140 }]}
          resizeMode="contain"
        />
        <View style={styles.trendingBadge}>
          <View style={styles.flashIconView}>
            <Image
              source={imagePath.trendingIcon}
              style={styles.flashIcon}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.trendingText}>{strings.TRENDING}</Text>
        </View>
      </View>

      <Text style={[styles.category, tablet && styles.tabletText]}>
        {product.category}
      </Text>
      <Text
        style={[styles.name, tablet && styles.tabletText]}
        numberOfLines={2}
      >
        {product.name}
      </Text>

      <View style={styles.priceRow}>
        <View style={styles.priceViewFirst}>
          <Text style={[styles.price, tablet && styles.tabletText]}>
            {product.price} {strings.KWD}
          </Text>
        </View>
        {product.originalPrice && (
          <View style={styles.priceViewSecond}>
            <Text style={[styles.originalPrice, tablet && styles.tabletText]}>
              {product.originalPrice} {strings.KWD}
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image
          source={imagePath.addCartBag}
          style={styles.cartIcon}
          resizeMode="contain"
        />
        <Text style={[styles.buttonText, tablet && styles.tabletText]}>
          {strings.ADD_TO_CART}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: Sizes.s10,
    margin: Sizes.s9,
    padding: Sizes.s9,
    elevation: 3,
  },
  borderImage: {
    paddingTop: Sizes.s26,
    paddingBottom: Sizes.s10,
    borderRadius: Sizes.s7,
    borderWidth: 1,
    borderColor: colors.buttonDisabled,
    marginBottom: Sizes.s10,
    position: 'relative',
    overflow: 'hidden',
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 1,
    right: 7,
    zIndex: 2,
  },
  discountView: {
    width: '50%',
  },
  trendingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: moderateScale(5),
    backgroundColor: colors.darkgray,
    paddingHorizontal: moderateScale(9),
    paddingVertical: moderateScale(3),
    borderRadius: moderateScale(5),
  },

  flashIconView: {
    width: '10%',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontFamily: fontFamily.bold,
  },
  flashIcon: {
    width: '100%',
    height: '72%',
  },
  trendingText: {
    fontWeight: '500',
    fontFamily: fontFamily.bold,
    color: colors.black,
    fontSize: moderateScale(12),
  },
  iconView: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: moderateScale(3),
  },
  discountBadge: {
    height: 50,
    width: 38,
    alignItems: 'center',
    overflow: 'hidden',
  },
  textWrapper: {
    alignItems: 'center',
    width: 35,
    justifyContent: 'center',
    marginTop: moderateScale(5.5),
  },
  discountPercent: {
    color: colors.primarySecond,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    textAlign: 'center',
  },
  discountOff: {
    color: colors.primarySecond,
    fontSize: 11,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 110,
    alignSelf: 'center',
    marginBottom: 8,
  },
  category: {
    color: colors.primary,
    fontSize: moderateScale(13),
    fontFamily: fontFamily.medium,
    marginBottom: moderateScale(5),
    fontWeight: '500',
    textAlign: 'left',
  },
  priceViewFirst: {
    width: '50%',
    alignItems: 'flex-start',
  },
  priceViewSecond: {
    width: '50%',
    alignItems: 'flex-end',
  },
  name: {
    fontWeight: '600',
    fontSize: moderateScale(14),
    fontFamily: fontFamily.semiBold,
    color: colors.black,
    marginBottom: moderateScale(5),
    textAlign: 'left',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(12),
  },
  price: {
    fontWeight: '600',
    fontSize: moderateScale(14),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: colors.textgray,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightgrayButton,
    paddingVertical: Sizes.s7,
    borderRadius: Sizes.s5,
  },
  buttonText: {
    color: colors.black,
    textAlign: 'center',
    fontSize: moderateScale(13.5),
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    marginLeft: moderateScale(6),
  },
  cartIcon: {
    width: 19,
    height: 19,
  },
  tabletText: {
    fontSize: 16,
  },
});

export default memo(ProductCard);
