import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../component/Button/Button';
import {details} from '../../data/detailsdata';

interface DetailsProps {
  title?: string;
  description?: string;
}

export const colors = ['#91DEDF', '#E7D3A2'];

const DetailsComponent: FC<DetailsProps> = ({title, description}) => {
  return (
    <View style={styles.detailsComponent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const Info: FC = () => {
  const [selectedBtn, setSelectedBtn] = useState<number>(1);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Understanding your Kundali</Text>
      <View style={styles.btnContainer}>
        <Button
          gradientColors={colors}
          isClick={selectedBtn === 1}
          onPress={() => setSelectedBtn(1)}>
          <Text
            style={[styles.btn, {color: selectedBtn === 1 ? '#000' : '#fff'}]}>
            General
          </Text>
        </Button>
        <Button
          gradientColors={colors}
          isClick={selectedBtn === 2}
          onPress={() => setSelectedBtn(2)}>
          <Text
            style={[styles.btn, {color: selectedBtn === 2 ? '#000' : '#fff'}]}>
            Planetry
          </Text>
        </Button>
        <Button
          gradientColors={colors}
          isClick={selectedBtn === 3}
          onPress={() => setSelectedBtn(3)}>
          <Text
            style={[styles.btn, {color: selectedBtn === 3 ? '#000' : '#fff'}]}>
            Yoga
          </Text>
        </Button>
      </View>
      <DetailsComponent
        title={details.description.title}
        description={details.description.info}
      />
      <DetailsComponent
        title={details.personality.title}
        description={details.personality.info}
      />
      <DetailsComponent
        title={details.career.title}
        description={details.career.info}
      />
      <DetailsComponent
        title={details.health.title}
        description={details.health.info}
      />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
  },
  title: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '700',
    backgroundColor: 'transparent',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  btn: {
    fontSize: 14,
  },
  detailsComponent: {
    backgroundColor: 'rgba(112,93,46,0.2)',
    padding: 16,
    borderRadius: 16,
    gap: 12,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 21,
    color: '#fff',
  },
});
