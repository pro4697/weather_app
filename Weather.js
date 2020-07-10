import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#373B44', '#4286f4'],
    title: '천둥번개',
    subtitle: '나가지 않는걸 추천드립니다.',
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
    title: '이슬비',
    subtitle: '우산은 챙기셨죠?',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00C6FB', '#005BEA'],
    title: '비',
    subtitle: '우산은 챙기셨죠?',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7DE2FC', '#B9B6E5'],
    title: '눈',
    subtitle: '미끄러짐 조심!',
  },
  Atmosphere: {
    iconName: 'weather-sunny',
    gradient: ['#89F7FE', '#66A6FF'],
    title: '고기압 맑음',
    subtitle: '구름한점 없이 맑네요.',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#89F7FE', '#66A6FF'],
    title: '맑음',
    subtitle: '매우 맑은 날씨네요!',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
    title: '흐림',
    subtitle: '우울한 날씨군요.',
  },
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '옅은 안개, 미세먼지',
    subtitle: '시야확보가 어렵습니다',
  },
  Mist: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '옅은 안개',
    subtitle: '시야확보가 어렵습니다',
  },
  Dust: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '미세먼지 주의',
    subtitle: '마스크 착용은 필수!',
  },
};

export default function Weather({ temp, condition, name, country }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle='light-content' />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color='white'
        />
        <Text style={styles.temp}>{temp}℃</Text>
        <Text style={styles.location}>
          {name}, {country}
        </Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Dust',
  ]).isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  location: {
    fontSize: 22,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: '300',
    marginBottom: 10,
    //textAlign: 'left',
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    //textAlign: 'left',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    left: 40,
    marginTop: 0,
  },
});
