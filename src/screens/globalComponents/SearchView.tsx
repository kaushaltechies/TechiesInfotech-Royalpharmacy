import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import useDeviceMetrics from '../../styles/responsiveSize';
import LocaleTextInput from './LocaleTextInput';
import { moderateScale } from '../../styles/utils';
import fontFamily from '../../styles/fontFamily';

const SearchView: React.FC<any> = ({
  editable = true,
  onTextChange,
  text = '',
}) => {
  const { scaleModerate, scaleText } = useDeviceMetrics();
  const [searchText, setSearchText] = useState<string>('');

  const styles = useMemo(
    () =>
      StyleSheet.create({
        parent: {},
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: colors.borderGrey,
          borderRadius: scaleModerate(50),
          paddingHorizontal: scaleModerate(11),
          paddingVertical: Platform.OS == 'ios' ? scaleModerate(6.5) : 2.5,
          backgroundColor: colors.white,
        },
        input: {
          fontSize: scaleText(12),
          fontFamily: fontFamily.normal,
          color: colors.black,
          paddingHorizontal: scaleModerate(10),
        },
        searchIcon: {
          height: moderateScale(17),
          width: moderateScale(17),
        },
        CameraIcon: {
          height: moderateScale(25),
          width: moderateScale(25),
        },
      }),
    [scaleText, scaleModerate],
  );

  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={imagePath.searchIcon}
            resizeMode="contain"
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        <LocaleTextInput
          placeHolder="searchHint"
          style={styles.input}
          textValue={text}
          editable={editable}
          handleChangeText={onTextChange}
        />
        <TouchableOpacity>
          <Image
            source={imagePath.CameraIcon}
            resizeMode="contain"
            style={styles.CameraIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(SearchView);
