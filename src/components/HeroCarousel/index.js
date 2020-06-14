import React, {useState} from "react";
import "./style.css";
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
// import { Card} from 'reactstrap';



const items = [
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/crm7_7.jpg",    
                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/crm1963.jpg",                  
                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/crm2.jpg",                  
                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/crm3.jpg",                 
                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/crm4.jpg",                  
                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/crm5.jpg",
                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/crm6.jpg",
                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/crm7.jpg",
                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/crm8.jpg",
                },
                
            ];

const HeroCarousal = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="carousel-img">
          <img src={item.src} alt={item.altText} />
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.altText} /> */}
        </div>
      </CarouselItem>
    );
  });

  return (
    // <Card className="carousel-card">
      <Carousel 
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl className="carousel-left-indicator" direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl className="carousel-right-indicator" direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      // {/* {props.children} */}
    // </Card>
  );
}

export default HeroCarousal;
