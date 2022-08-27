import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './gallery1.css';
import card1_1 from '../../assets/img/001/001_1.mp4';
import card2_1 from '../../assets/img/002/002_1.mp4';
import card3_1 from '../../assets/img/003/003_1.mp4';
import card4_1 from '../../assets/img/004/004_1.mp4';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <div>
            <video loop muted autoPlay  preload='auto' className='video'>
                <source src={card1_1} type='video/webm'></source>
            </video>
        </div>
    </div>,
    <div className="item" data-value="2">
        <div>
            <video loop muted autoPlay  preload='auto' className='video'>
                <source src={card2_1} type='video/webm'></source>
            </video>
        </div>
    </div>,
    <div className="item" data-value="3">
        <div>
            <video loop muted autoPlay  preload='auto' className='video'>
                <source src={card4_1} type='video/webm'></source>
            </video>
        </div>
    </div>,
    <div className="item" data-value="4">
        <div>
            <video loop muted autoPlay  preload='auto' className='video'>
                <source src={card3_1} type='video/webm'></source>
            </video>
        </div>
    </div>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);

export default Carousel;