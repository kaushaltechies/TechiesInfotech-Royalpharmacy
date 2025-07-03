import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HeaderView from './HeaderView';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import ProductHorizontalSection from './components/ProductHorizontalSection';
import { Staticdata } from '../staticData/Staticdata';
import { logDebug } from '../../utils/Logger';
import { Sizes } from '../../styles/Sizes';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  // const handleViewAll = (sectionTitle: string) => {
  //     navigation.navigate('ViewAllScreen', { section: sectionTitle });
  //   };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderView />
        {Staticdata.map(section => (
          <ProductHorizontalSection
            data={section.products}
            onViewAll={() => logDebug(`View All clicked for section:`)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default React.memo(HomeScreen);
