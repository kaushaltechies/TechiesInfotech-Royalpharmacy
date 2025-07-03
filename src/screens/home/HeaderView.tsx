import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  I18nManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import SearchView from '../globalComponents/SearchView';
import colors from '../../styles/colors';
import { moderateScale } from '../../styles/utils';
import { Dropdown } from 'react-native-element-dropdown';
import strings from '../../localization/strings';
import { LanguageContext } from '../../localization/LanguageContext';
import fontFamily from '../../styles/fontFamily';
import { Sizes } from '../../styles/Sizes';
import useDeviceMetrics from '../../styles/responsiveSize';

const languageOptions = [
  { label: 'EN', value: 'en' },
  { label: 'AR', value: 'ar' },
];

const HeaderView: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const { scaleText } = useDeviceMetrics();

  useEffect(() => {
    setSelectedLanguage(language);
  }, [language]);

  const handleLanguageChange = (item: { label: string; value: string }) => {
    if (item.value === 'en' || item.value === 'ar') {
      setSelectedLanguage(item.value);
      setLanguage(item.value, true);
    }
  };

  const renderDropdownIcon = () => (
    <Image
      source={imagePath.dropDown}
      tintColor={colors.black}
      style={styles.iconStyle}
      resizeMode="contain"
    />
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: colors.white,
        },
        banner: {
          backgroundColor: colors.primary,
          paddingVertical: moderateScale(6),
          paddingHorizontal: moderateScale(10),
        },
        bannerText: {
          color: colors.white,
          fontSize: 14,
          fontWeight: '500',
          textAlign: 'center',
          fontFamily: fontFamily.medium,
        },
        header: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: moderateScale(10),
          marginTop: moderateScale(10),
          marginBottom: Sizes.s5,
        },
        imageContainer: {
          width: '14%',
          alignItems: 'center',
        },
        logo: {
          width: 50,
          height: 50,
          marginRight: 10,
        },
        searchContainer: {
          width: '70%',
        },
        langSwitchContainer: {
          width: '16%',
          height: 50,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'space-around',
        },
        dropdown: {
          width: 62,
          borderRadius: moderateScale(10),
          paddingHorizontal:
            Platform.OS === 'android' ? moderateScale(10) : moderateScale(7.5),
          height: 30,
        },
        dropdownContainer: {
          borderRadius: moderateScale(8),
          marginTop: moderateScale(2),
          elevation: 4,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 2,
          shadowOffset: { width: 0, height: 2 },
        },
        selectedTextStyle: {
          fontSize: scaleText(15.5),
          fontFamily: fontFamily.medium,
          color: colors.black,
          fontWeight: '500',
        },
        iconStyle: {
          height: moderateScale(16),
          width: moderateScale(20),
        },
      }),
    [scaleText],
  );

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>{strings.UP_TO_OFF_TEXT}</Text>
      </View>

      <View style={styles.header}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={imagePath.Royal_Pharmacy_Logo} resizeMode="contain" />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <SearchView editable={false} text={strings.SEARCH_FOR_MEDICINES} />
        </View>

        <View style={styles.langSwitchContainer}>
          <Dropdown
            style={styles.dropdown}
            containerStyle={styles.dropdownContainer}
            selectedTextStyle={styles.selectedTextStyle}
            data={languageOptions}
            maxHeight={150}
            labelField="label"
            valueField="value"
            value={selectedLanguage}
            iconColor={colors.black}
            iconStyle={{ display: 'none' }}
            onChange={handleLanguageChange}
            {...(I18nManager.isRTL
              ? { renderLeftIcon: renderDropdownIcon }
              : { renderRightIcon: renderDropdownIcon })}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(HeaderView);
