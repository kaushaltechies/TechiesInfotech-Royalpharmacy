import React, { useMemo } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Badge } from 'react-native-paper';
import { useSelector } from 'react-redux';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import { Sizes } from '../styles/Sizes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import useDeviceMetrics from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';

interface CustomTabBarProps {
  state: {
    index: number;
    routes: { key: string; name: string }[];
  };
  descriptors: Record<string, any>;
  navigation: {
    emit: (event: { type: string; target: string }) => void;
    navigate: (routeName: string) => void;
  };
}

const icons = [
  { icon: imagePath.Home, selectedIcon: imagePath.HomeSelected },
  { icon: imagePath.wishlist, selectedIcon: imagePath.wishlistSelected },
  { icon: imagePath.category, selectedIcon: imagePath.category },
  { icon: imagePath.cart, selectedIcon: imagePath.cartSelect },
  { icon: imagePath.user, selectedIcon: imagePath.userselect },
];

const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { scaleText, scaleModerate } = useDeviceMetrics();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: colors.white,
        },
        tabBar: {
          flexDirection: 'row',
          paddingBottom: scaleModerate(10),
          paddingTop: scaleModerate(7),
          backgroundColor: colors.white,
          borderTopLeftRadius: scaleModerate(15),
          borderTopRightRadius: scaleModerate(15),
          borderWidth: Sizes.s1,
          borderColor: colors.creamwhite,
        },
        tabButton: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        selectedIconBg: {
          paddingHorizontal: scaleModerate(15),
          paddingVertical: scaleModerate(3),
          marginBottom: scaleModerate(4),
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: 40,
        },
        iconBg: {
          paddingHorizontal: scaleModerate(15),
          paddingVertical: scaleModerate(3),
          borderRadius: 40,
          overflow: 'hidden',
          marginBottom: scaleModerate(4),
          justifyContent: 'center',
          alignItems: 'center',
        },
        badge: {
          backgroundColor: colors.primary,
          position: 'absolute',
          top: 0,
          right: 8,
          fontSize: 10,
          fontFamily: fontFamily.medium,
        },
        centerIconContainer: {
          backgroundColor: colors.primary,
          borderRadius: Sizes.ms24,
          paddingHorizontal: scaleModerate(11),
          paddingVertical: scaleModerate(11),
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [scaleModerate],
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              activeOpacity={1}
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}
            >
              {index === 2 ? (
                <View style={styles.centerIconContainer}>
                  <Image source={icons[index].icon} resizeMode="contain" />
                </View>
              ) : (
                <View style={isFocused ? styles.selectedIconBg : styles.iconBg}>
                  <Image
                    source={
                      isFocused ? icons[index].selectedIcon : icons[index].icon
                    }
                    resizeMode="contain"
                  />
                  {index === 3 && <Badge style={styles.badge}>1</Badge>}
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;
