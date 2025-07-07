import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from './colors';

interface Props {
  color?: string;
  thickness?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  width?: number | `${number}%`;
}

const LineSeparator: React.FC<Props> = ({
  color = colors.lightGray,
  thickness = 1,
  marginVertical = moderateScale(9),
  marginHorizontal = 0,
  width = '100%',
}) => {
  return (
    <View
      style={[
        styles.line,
        {
          backgroundColor: color,
          height: thickness,
          marginVertical,
          marginHorizontal,
          width,
        },
      ]}
    />
  );
};

export default LineSeparator;

const styles = StyleSheet.create({
  line: {
    alignSelf: 'center',
  },
});
