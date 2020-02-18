import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';


import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Descripition, Annotation } from './styles';

export default function Main() {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  )

  function onHandlerStateChanged(event) {

  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350,0,380],
                outputRange: [-50,0,380],
                extrapolate: 'clamp',
              }),
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponivel</Title>
              <Descripition>R$167.611,25 </Descripition>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 200,00 recebida de Fabio Jesus hoje ás 07:00h
                    </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>

      <Tabs />
    </Container>
  );
}