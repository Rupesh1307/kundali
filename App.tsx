import React, {FC, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
import {Canvas, Circle, RadialGradient, vec} from '@shopify/react-native-skia';
import TableScreen from './src/screen/table/table';
import Info from './src/screen/info/info';
import {Divider} from './src/screen/table/table';

const {width} = Dimensions.get('screen');
const panchange = require('./src/assets/panchange.png');

const Buttons = ['Basic', 'Chart', 'KP', 'Ashtakvarga', 'Dasha', 'Report'];

const App: FC = () => {
  const ballOffset = useSharedValue<string>('0 deg');
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const ballAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: ballOffset.value,
      },
    ],
  }));

  useEffect(() => {
    ballOffset.value = withRepeat(
      withTiming('360 deg', {
        duration: 1200000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);

  const _renderButton = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => setSelectedIndex(index)}>
        <Text
          style={[
            styles.headerBtnText,
            {color: selectedIndex === index ? '#fff' : 'rgba(255,255,255,0.5)'},
            {fontWeight: selectedIndex === index ? '600' : '400'},
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, ballAnimation]}>
        <View style={[styles.first, styles.ball]}>
          <Canvas style={styles.canvas}>
            <Circle cx={128} cy={128} r={128}>
              <RadialGradient
                c={vec(128, 128)}
                r={128}
                colors={[
                  'rgba(114, 95, 47,1)',
                  'rgba(114, 95, 47,0.8)',
                  'rgba(114, 95, 47,0.6)',
                  'rgba(114, 95, 47,0.4)',
                  'rgba(114, 95, 47,0.2)',
                ]}
              />
            </Circle>
          </Canvas>
        </View>
        <View style={[styles.second, styles.ball]}>
          <Canvas style={styles.canvas}>
            <Circle cx={128} cy={128} r={128}>
              <RadialGradient
                c={vec(128, 128)}
                r={128}
                colors={[
                  'rgba(114, 95, 47,1)',
                  'rgba(114, 95, 47,0.8)',
                  'rgba(114, 95, 47,0.6)',
                  'rgba(114, 95, 47,0.4)',
                  'rgba(114, 95, 47,0.2)',
                ]}
              />
            </Circle>
          </Canvas>
        </View>
      </Animated.View>
      <SafeAreaView style={styles.safearea}>
        <View style={{gap: 16}}>
          <Text style={styles.header}>Kundali</Text>
          <View style={styles.headerBtnContainer}>
            <FlatList
              data={Buttons}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => `buttons${index}`}
              renderItem={_renderButton}
              ItemSeparatorComponent={Divider}
            />
          </View>
        </View>
        <ScrollView style={styles.scollViewContainer}>
          <View style={styles.appContainer}>
            <Image
              source={panchange}
              style={styles.image}
              resizeMode="stretch"
            />
            <TableScreen />
            <Info />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C281C',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  ball: {
    height: 256,
    width: 256,
  },
  first: {
    position: 'absolute',
    top: -100,
    left: -100,
  },
  second: {
    position: 'absolute',
    bottom: -100,
    right: -100,
  },
  safearea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21,
    marginHorizontal: width * 0.05,
    color: '#fff',
  },
  headerBtnContainer: {
    marginHorizontal: width * 0.05,
  },
  headerBtn: {
    paddingHorizontal: 6,
  },
  headerBtnText: {
    fontSize: 14,
  },
  canvas: {
    flex: 1,
  },
  scollViewContainer: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingVertical: 32,
  },
  appContainer: {
    flex: 1,
    gap: 32,
    paddingBottom: 32,
  },
  image: {
    width: width * 0.9,
  },
});
