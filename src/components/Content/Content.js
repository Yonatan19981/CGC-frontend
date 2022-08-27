import './content.css';
import video from '../../assets/img/002/002_1.mp4';
import video1 from '../../assets/img/004/004_1.mp4';
import { Link } from 'react-router-dom'

function Content() {
    return (
        <div className='content'>
            <div className='container'>
                <div className='content1'>
                    <div className='content1_left mar'>
                        <p>Carl Gallery Club NFT</p>
                        <p className='desc'>
                            Our project team explores every nook & corner of the world to discover known & unknown brilliant artists.
                            Our team  puts in extensive effort to curate the best artwork for you through the parameters of quality, skill, innovation and propriety.
                            We plan to go the extra mile to ensure a smooth experience for each one of you.
                            Each of our art projects will be tested thoroughly on testnet before migrating and deploying on mainnet.
                            We, after all, aim to keep giving the best in the world artists the very best platform to showcase their valuable artwork.
                            We want you, the artists and us to come together to build a strong and massively supportive community that breathes and lives in art.</p>
                        <div><Link to='/about'>About Us</Link></div>
                    </div>
                    <div className='content2_right'>
                        <div>
                            <video loop muted autoPlay  preload='auto' className='video'>
                                <source src={video} type='video/webm'></source>
                            </video>
                        </div>
                    </div>
                </div>
                <div className='content2'>
                    <div className='content1_right mar'>
                        <div>
                            <video loop muted autoPlay  preload='auto' className='video'>
                                <source src={video1} type='video/webm'></source>
                            </video>
                        </div>
                    </div>
                    <div className='content1_left'>
                        <p>All Art Is Fully On-Chain</p>
                        <p className='desc'>Exquisite artwork by our world-best artists.
                            Enjoy yourself as you visit the Carl gallery NFT club platform & experience strikingly beautiful works by our chosen artists.
                            If you feel drawn to an artwork on our platform, you have the opportunity to mint a unique iteration of this work for yourself.
                            Our team combines creative coding with Blockchain technology to allow you to become a contributor in the artwork you mint.
                            Your final NFT will be a surprise for you being a blend of your reflection and the artist’s vision.
                            there is something unique especially for you. </p>
                        <div><Link to='/gallery1'>View Projects</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;