import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class PromotionSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <Container>
        <Slider {...settings}>
          <div>
            <BannerImage></BannerImage>
          </div>
          <div>
            <BannerImage></BannerImage>
          </div>
          <div>
            <BannerImage></BannerImage>
          </div>
          <div>
            <BannerImage></BannerImage>
          </div>
          <div>
            <BannerImage></BannerImage>
          </div>
          <div>
            <BannerImage></BannerImage>
          </div>
        </Slider>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 60rem;
`;

const BannerImage = styled.div`
  width: 18em;
  height: 10em;
  margin: 1.2em;
  background-color: yellowgreen;
  border-radius: 2em;
`;
