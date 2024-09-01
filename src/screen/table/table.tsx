import React, {FC, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Button from '../../component/Button/Button';
import {planetData} from '../../data/tabledata';
import {colors} from '../info/info';

const {width} = Dimensions.get('screen');

export const Divider: FC = () => {
  return <View style={[styles.divider]} />;
};

const AstrologyChart: FC = () => {
  const [selectedBtn, setSelectedBtn] = useState<number>(2);
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.title}>Planets</Text>
      <View style={styles.btnContainer}>
        <Button
          gradientColors={colors}
          isClick={selectedBtn === 1}
          onPress={() => setSelectedBtn(1)}>
          <Text
            style={[styles.btn, {color: selectedBtn === 1 ? '#000' : '#fff'}]}>
            Sign
          </Text>
        </Button>
        <Button
          gradientColors={colors}
          isClick={selectedBtn === 2}
          onPress={() => setSelectedBtn(2)}>
          <Text
            style={[styles.btn, {color: selectedBtn === 2 ? '#000' : '#fff'}]}>
            Nakshtra
          </Text>
        </Button>
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header]}>Planet</Text>
          <Divider />
          <Text style={[styles.cell, styles.header]}>Sign</Text>
          <Divider />
          <Text style={[styles.cell, styles.header]}>Sign Lord</Text>
          <Divider />
          <Text style={[styles.cell, styles.header]}>Degree</Text>
          <Divider />
          <Text style={[styles.cell, styles.header]}>House</Text>
        </View>
        {planetData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.planet}</Text>
            <Divider />
            <Text style={styles.cell}>{item.sign}</Text>
            <Divider />
            <Text style={styles.cell}>{item.signLord}</Text>
            <Divider />
            <Text style={styles.cell}>{item.degree}</Text>
            <Divider />
            <Text style={styles.cell}>{item.house}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    gap: 16,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: 'rgba(112,93,46,0.2)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: width * 0.18,
    paddingVertical: 12,
    paddingHorizontal: width * 0.005,
    color: '#ecf0f1',
    textAlign: 'center',
    fontSize: 12,
  },
  header: {
    backgroundColor: '#404940',
    fontWeight: 'bold',
  },
  divider: {
    width: 0.5,
    backgroundColor: '#fff',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  btn: {
    fontSize: 14,
  },
});

export default AstrologyChart;
