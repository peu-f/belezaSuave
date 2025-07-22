import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function BottomMenu() {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuBtn}>
        <Image source={require('../../assets/homeimg.png')} style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBtn}>
        <Image source={require('../../assets/homeimg.png')} style={styles.menuIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fbeee6',
    borderRadius: 24,
    padding: 12,
    marginBottom: 8,
    marginTop: 8,
  },
  menuBtn: {
    flex: 1,
    alignItems: 'center',
  },
  menuIcon: {
    width: 36,
    height: 36,
  },
});