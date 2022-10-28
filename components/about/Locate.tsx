import styled from 'styled-components';
import Map from './map/Map';
import useMap from '../../libs/hooks/about/useMap';

export default function Locate() {
  const kakaoMap = useMap();

  return (
    <Container>
      <Map ref={kakaoMap} />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
