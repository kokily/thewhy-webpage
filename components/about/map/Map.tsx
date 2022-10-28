import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';
import { media } from '../../../styles';

interface Props {
  ref: Ref<HTMLDivElement>;
}

const Map: React.FC<Props> = forwardRef((_, ref) => {
  return (
    <Container>
      <MapPane className="map" ref={ref} />
    </Container>
  );
});

export default Map;

// Styles
const Container = styled.div`
  width: 100%;
  height: 600px;
  ${media.large} {
    max-width: 760px;
  }
  ${media.small} {
    max-width: 100%;
  }
`;

const MapPane = styled.div`
  width: 100%;
  height: 100%;
`;
