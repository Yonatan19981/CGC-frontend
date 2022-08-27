import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../assets/img/pic1.png';
import img2 from '../../assets/img/pic2.png';
import img3 from '../../assets/img/pic3.png';
import img4 from '../../assets/img/pic4.png';
import './artist.css';
import { Link } from 'react-router-dom'

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <Link to='gallery1'>
            <img className='carousel' src={img1} />
            <div className='name'>Abdul Qader Al Rais</div>
        </Link>
    </div>,
    <div className="item" data-value="2">
        <Link to='gallery2'>
            <img className='carousel' src={img2} />
            <div className='name'>Itzhaq Mevorah</div>
        </Link>
    </div>,
    <div className="item" data-value="5">
        <img className='carousel' src={img3} />
        <div className='name'>David Roytman</div>
    </div>,
    <div className="item" data-value="3">
        <img className='carousel' src={img4} />
        <div className='name'>Yalda</div>
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