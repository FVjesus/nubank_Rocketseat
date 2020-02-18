import {Animated} from 'react-native';
import styled from 'styled-components';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingleft: 10, paddingright:20},
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  height: 100px;
  width: 100px;
  background: rgba(255,255,255,0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #FFF;
`;
