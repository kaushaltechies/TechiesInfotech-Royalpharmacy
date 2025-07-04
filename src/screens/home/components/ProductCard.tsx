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
            <ImageBackground
              style={styles.discountBadge}
              source={imagePath.Discountbadge}
              resizeMode="contain"
            >
              <Text style={styles.discountText}>{product.discount}</Text>
            </ImageBackground>
          )}
          <TouchableOpacity>
            <Image source={imagePath.grayHeart} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        <Image
          source={product.image}
          style={[styles.image, tablet && { height: 140 }]}
          resizeMode="contain"
        />
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
        <View style={styles.priceView}>
          <Text style={[styles.price, tablet && styles.tabletText]}>
            {product.price} {strings.KWD}
          </Text>
        </View>
        {product.originalPrice && (
          <View style={styles.priceView}>
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
    paddingVertical: Sizes.s12,
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
    left: 8,
    right: 8,
    zIndex: 2,

  },
  discountBadge: {
    height: 50,
    width: 50,
    // position: 'absolute',
  },
  discountText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
    marginBottom: 8,
  },
  category: {
    color: colors.primary,
    fontSize: 12,
    marginBottom: 2,
  },
  priceView: {
    width: '50%',
  },
  name: {
    fontWeight: '600',
    fontSize: 13,
    marginBottom: 4,
    color: colors.black,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.black,
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: '#999',
    marginLeft: 8,
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
    fontSize: 13,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    marginLeft: 6,
  },
  cartIcon: {
    width: 18.5,
    height: 18.5,
  },
  tabletText: {
    fontSize: 16,
  },
});

export default memo(ProductCard);
