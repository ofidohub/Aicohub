// HeaderTitle.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeaderTitle = ({ title }) => (
  <Text style={styles.headerTitle}>{title}</Text>
);

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HeaderTitle;