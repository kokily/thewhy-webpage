import styled from 'styled-components';
import { media } from '../../styles';
import ServiceFooter from './common/ServiceFooter';
import ServiceHeader from './common/ServiceHeader';
import ServicesList from './common/ServicesList';

interface Props {
  education: EducationType;
}

export default function Service({ education }: Props) {
  return (
    <Container>
      <img src={`/svg/${education.img}`} alt={education.title} />

      <ServiceHeader title={education.title} body={education.body} />

      <ServicesList list={education.list} />

      <ServiceFooter />
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1110px;
  img {
    width: 100%;
    ${media.large} {
      max-width: 760px;
    }
  }
`;
