import Carousel from './Carousel';
import './artist.css';

function Artists() {

    return (
        <div className='artists'>
            <div className='container'>
                <div className='arttists_desc'>
                    <h4>World-renowned Artists</h4>
                    <p>Our artists are at the bleeding edge of generative art. We also partner with traditional artists, and give them the support they need to release generative art.</p>
                </div>
                <div className='mar_top'>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default Artists;