import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import colors from './styles/Colors';

type Props = {
  children?: JSX.Element;
  style?: StyleProp<ViewStyle>;
};
export const KeyboardAvoider: React.FC<Props> = ({
  children,
  style,
}: Props) => {
  return (
    <KeyboardAvoidingView
      style={[styles.flex, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.flex}>
        <SafeAreaView>{children}</SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
