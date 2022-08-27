import './title.css';
import video from '../../assets/img/1.mp4';
import Carousel from './Carousel';
import { Link } from 'react-router-dom'

function Title() {
    return (
        <div className='background'>
            <div>
                <video loop muted autoPlay  preload='auto' className='video'>
                    <source src={video} type='video/webm'></source>
                </video>
            </div>
            <div className='container'>
                <div className='title'>
                    <h3>Where art, code, creativity<br />and community merge</h3>
                    <p>A fully on-chain generative art platform . As a member you’ll<br />get access to monthly drops from incredible artists.<br />And much more.</p>
                    <div className='title_buttons'>
                        <button className='coming'>Coming Soon</button>
                        <button className='learn'><Link to='membership'>Learn More</Link></button>
                    </div>
                </div>
                <div className='card_lists'>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default Title;