import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../slider/slider.css'

function Slider() {

  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 " src={require("../../images/1.jpg")}
            alt="Md Mazed Hossain" style={{height: "55vh"}}
          />
          <Carousel.Caption>
            <h3>Welcome</h3>
            <p>I have tried to share some of my experience and knowledge in this blog site. I always try to learn more than I have.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={require("../../images/2.jpg")}
            alt="Md Emdadul Haque" style={{height: "55vh"}}
          />
          <Carousel.Caption>
            <h3>Welcome</h3>
            <p>I have tried to share some of my experience and knowledge in this blog site. I always try to learn more than I have.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={require("../../images/3.jpg")}
            alt="Md Safayet Hosen Bhuiyan" style={{height: "55vh"}}
          />
          <Carousel.Caption>
            <h3>Welcome</h3>
            <p>I have tried to share some of my experience and knowledge in this blog site. I always try to learn more than I have.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider