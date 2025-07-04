import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { conditions } from '../../staticData/Staticdata';
import { Sizes } from '../../../styles/Sizes';
import strings from '../../../localization/strings';
import colors from '../../../styles/colors';
import fontFamily from '../../../styles/fontFamily';
import imagePath from '../../../constants/imagePath';
interface Props {
  title: string;
  image: any;
}

const ShopByCondition = () => {
  const ConditionCard: React.FC<Props> = ({ image }) => {
    return (
      <TouchableOpacity>
        <Image source={image} resizeMode="contain" />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.headingView}>
          <Text style={styles.heading}>{strings.SHOP_BY_CONDITION}</Text>
        </View>
        <TouchableOpacity style={styles.ViewMoreBtn}>
          <Text style={styles.viewMore}>{strings.VIEW_MORE}</Text>
          <Image source={imagePath.rightArrowIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={conditions}
        horizontal
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={styles.SeparatorComponent} />
        )}
        renderItem={({ item }) => {
          return <ConditionCard title={item.title} image={item.image} />;
        }}
      />
    </View>
  );
};

export default ShopByCondition;

const styles = StyleSheet.create({
  container: {
    marginTop: Sizes.s12,
    marginBottom: Sizes.s9,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Sizes.s3,
    marginBottom: Sizes.s7,
  },
  headingView: {
    width: '56%',
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
  },
  viewMore: {
    fontSize: Sizes.s14,
    fontFamily: fontFamily.medium,
    color: colors.black,
    fontWeight: '500',
    textAlign: 'center',
    marginRight: Sizes.s4,
  },
  SeparatorComponent: {
    width: Sizes.s14,
  },
  contentContainer: {
    paddingVertical: Sizes.s10,
    marginLeft: 2,
  },
});
