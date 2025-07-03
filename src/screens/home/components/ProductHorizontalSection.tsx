import React, { useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { ProductItem } from '../types';
import imagePath from '../../../constants/imagePath';
import { Sizes } from '../../../styles/Sizes';
import colors from '../../../styles/colors';
import { getResponsiveImage } from '../../../styles/getResponsiveImage';
import fontFamily from '../../../styles/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
import useDeviceMetrics from '../../../styles/responsiveSize';

interface Props {
  data: ProductItem[];
}
interface CategoryCardProps {
  item: any;
  index: number;
}
const bgs = [imagePath.CategoryFirst, imagePath.CategorySecond];
const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth * 0.33;
const cardHeight = cardWidth * 0.79;
const ProductHorizontalSection: React.FC<Props> = ({ data }) => {
  const bannerImage = getResponsiveImage('Slider');
  const { scaleModerate, scaleText } = useDeviceMetrics();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: colors.white,
        },
        header: {
          paddingVertical: Sizes.s3,
          paddingHorizontal: Sizes.s9,
          marginBottom: Sizes.s3,
        },
        imageStyle: {
          width: '100%',
        },
        listContainer: {
          paddingLeft: Sizes.s9,
        },
        backgroundImage: {
          borderTopLeftRadius: Sizes.s3,
          borderTopRightRadius: Sizes.s3,
        },
        productCardcontainer: {
          marginRight: Sizes.s13,
          borderWidth: Sizes.s1,
          borderColor: colors.lightGray,
          borderRadius: Sizes.s6,
          marginTop: Sizes.s8,
        },
        productCard: {
          width: cardWidth,
          height: cardHeight,
          alignItems: 'center',
          justifyContent: 'center',
        },
        imageContainer: {
          width: '55%',
          aspectRatio: 0.9,
        },
        image: {
          width: '100%',
          height: '100%',
        },
        textView: {
          width: '100%',
          backgroundColor: colors.white,
          borderBottomRightRadius: Sizes.s5,
          borderBottomLeftRadius: Sizes.s5,
          paddingVertical: Sizes.s2,
        },
        productTitle: {
          textAlign: 'center',
          fontSize: scaleText(14),
          fontWeight: '500',
          fontFamily: fontFamily.normal,
        },
      }),
    [scaleText],
  );

  const CategoryCard: React.FC<CategoryCardProps> = ({ item, index }) => (
    <TouchableOpacity style={styles.productCardcontainer}>
      <ImageBackground
        style={styles.productCard}
        source={bgs[index % 2]}
        imageStyle={styles.backgroundImage}
      >
        <LinearGradient colors={['#FFFFFF', '#A2936E']}></LinearGradient>

        <TouchableOpacity style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.textView}>
        <Text style={styles.productTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={bannerImage}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </View>
        <FlatList
          horizontal
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <CategoryCard item={item} index={index} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductHorizontalSection;
