import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { trendingDeals } from '../../staticData/Staticdata';
import strings from '../../../localization/strings';
import fontFamily from '../../../styles/fontFamily';
import { Sizes } from '../../../styles/Sizes';
import colors from '../../../styles/colors';
import imagePath from '../../../constants/imagePath';
import { isTablet } from 'react-native-device-info';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.46;
const TrendingDeals = () => {
  const renderItem = ({ item }: { item: (typeof trendingDeals)[0] }) => (
    <LinearGradient
      colors={[
        colors.white,
        colors.lightWhite,
        colors.lightwhiteSecond,
        colors.lightWhiteThird,
        colors.lightWhiteForth,
      ]}
      locations={[0.01, 0.45, 0.78, 1, 2]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.card}
    >
      <View style={styles.contentView}>
        <View style={styles.ribbon}>
          <Text style={styles.ribbonText}>30</Text>
          <Image
            source={imagePath.discountIcon}
            style={styles.discountImage}
            resizeMode="contain"
          />
          <Text style={styles.ribbonText}>{item.tag}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreText}>{strings.EXPLORE}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>{strings.TRENDING_DEALS_JUST_FOR_YOU}</Text>
      </View>

      <FlatList
        data={trendingDeals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TrendingDeals;

const styles = StyleSheet.create({
  container: {},
  titleView: {
    marginTop: Sizes.s18,
    marginBottom: Sizes.s15,
  },
  title: {
    fontSize: Sizes.s18,
    fontWeight: '700',

    textAlign: 'center',
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  listContent: {
    paddingBottom: Sizes.s2,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: Sizes.s15,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: Sizes.s5,
    width: CARD_WIDTH,
    shadowColor: colors.lightGray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginTop: Sizes.s7,
  },
  contentView: {
    padding: Sizes.s10,
    borderRadius: Sizes.s5,
  },
  discountImage: {
    width: isTablet() ? 25 : 20,
    aspectRatio: 1.25,
  },
  ribbon: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingVertical: Sizes.s3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Sizes.s7,
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: Sizes.s7,
    borderTopRightRadius: Sizes.s6,
  },
  ribbonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1.35,
  },
  productImage: {
    height: '100%',
    width: '100%',
  },
  cardTitle: {
    marginTop: Sizes.s1,
    fontSize: Sizes.s12,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: fontFamily.bold,
    color: colors.black,
  },
  exploreButton: {
    backgroundColor: colors.primary,
    borderRadius: Sizes.s5,
    paddingVertical: Sizes.s6,
    marginTop: Sizes.s6,
    marginBottom: Sizes.s4,
    alignItems: 'center',
  },
  exploreText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: Sizes.s12,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
  },
});
