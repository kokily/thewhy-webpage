import styled from 'styled-components';
import Slider from 'react-slick';
import { media } from '../../styles';

interface Props {
  slides: string[];
}

export default function HomeImages({ slides }: Props) {
  const slideSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
  };

  return (
    <Container>
      <ImageBox>
        <Slider {...slideSetting}>
          {slides.map((slide, i) => (
            <div key={i}>
              <img src={slide} alt={`Main Image ${i}`} />
            </div>
          ))}
        </Slider>
      </ImageBox>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const ImageBox = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: 1110px;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;
