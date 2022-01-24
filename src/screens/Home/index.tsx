import React, { useState, useEffect } from 'react';

import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, Header, HeaderContent, TotalCars, CarList } from './style';
import { CarDTO } from '../../dtos/CarDTO';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';
import { Loader } from '../../components/Loader';

import carros from '../../services/server';

export function Home() {
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setTimeout(() => {
        setCars(carros.cars);
      }, 700);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  return (
    <Container>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor='transparent'
      />

      <Header>
        <HeaderContent>
          <Logo height={RFValue(12)} width={108} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Loader />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
}
