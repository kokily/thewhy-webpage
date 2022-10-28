import styled from 'styled-components';
import CardItem from './LinkCardItem';
import { media } from '../../styles';

interface Props {
  links: MainLinkType[];
}

export default function LinkCardsList({ links }: Props) {
  return (
    <Container>
      {links.map((link) => (
        <CardItem key={link.id} link={link} />
      ))}
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 100%;
    justify-content: center;
  }
`;
