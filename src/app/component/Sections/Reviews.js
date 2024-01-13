"use client"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];
export default function Reviews(props) {
  return (
    <div className="reviews">
       <CarouselProvider
        className='carousel'
        naturalSlideWidth={400}
        naturalSlideHeight={125}
        totalSlides={6}
        visibleSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
          <Slide index={3}>I am the third Slide.</Slide>
          <Slide index={4}>I am the third Slide.</Slide>
          <Slide index={5}>I am the third Slide.</Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}
