import React from 'react';
import { View, TextInput, KeyboardTypeOptions } from 'react-native';
import colors from '../../styles/colors';

interface LocaleTextProps {
  style?: any;
  placeHolder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureText?: boolean;
  handleBlur?: any;
  handleChangeText?: any;
  lines?: number;
  multiline?: boolean;
  editable?: boolean;
  textValue?: string;
  length?: number;
}

const LocaleTextInput: React.FC<LocaleTextProps> = ({
  style = null,
  placeHolder = '',
  keyboardType,
  secureText = false,
  handleBlur,
  handleChangeText,
  lines = 1,
  multiline = false,
  editable = true,
  textValue = '',
  length = 140,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={colors.offBlack}
        keyboardType={keyboardType}
        secureTextEntry={secureText}
        style={[
          style,
          { minHeight: lines > 1 ? 100 : 30, color: colors.black },
        ]}
        onBlur={handleBlur}
        maxLength={length}
        multiline={multiline}
        numberOfLines={lines}
        editable={editable}
        value={textValue}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

export default React.memo(LocaleTextInput);
