import './gallery.css';
import svg from './1.svg'
import svg1 from './2.svg'
import svg2 from './3.svg'
import svg3 from './4.svg'
import logo from '../../assets/img/logo.png'
// import Accordion from './Accordion';

function Gallery() {
    return (
        <div className='membership'>
            <div className='container'>
                <div className='m_title'>
                    <h3>Who we are and what we <br />want to achieve ?</h3>
                    <p className='m_text1'>The Carl gallery club is on a mission to create a platform to help artists enter the new and exciting world of <br />NFT & community & Metaverse.
                        We want to create value for their art.
                        We also want you and <br />our innovative artists to have a space to build stronger connections with each other.
                    </p>
                    <p className='join_botton'><a href='https://augmind.me/' target='_black'>Powered by Augmind Labs</a></p>
                    <img src={logo} />
                </div>
                <div className='m_content'>
                    <h3>What will you get<br />when you join Carl Gallery Club</h3>
                    <div className='m_row'>
                        <div className='m_row_left'>
                            <div className='m_icon'>
                                <img src={svg} />
                            </div>
                            <div className='m_desc'>
                                <div className='m_num'>1</div>
                                <div className='m_desc1'>
                                    <p className='m_m_title'>Amazing art from world renowned artists</p>
                                    <p className='m_m_desc'>We put a lot of focus and effort into partnering with incredibly talented artists. Our team puts in extensive effort to curate the best artwork for you through the parameters of quality, skill, innovation and propriety.</p>
                                </div>
                            </div>
                        </div>
                        <div className='m_row_right'>
                            <div className='m_icon'>
                                <img src={svg1} />
                            </div>
                            <div className='m_desc'>
                                <div className='m_num'>2</div>
                                <div className='m_desc1'>
                                    <p className='m_m_title'>Community that thrives on art.</p>
                                    <p className='m_m_desc'>Build stronger connections with our artists, witness stunning artwork and attend workshops with the creation of The Carl Gallery club.
                                        You get to be a part of a dynamic community.
                                        The Carl Art Gallery is for you and therefore, you suggest the kind of events you would like to attend.
                                        Our project team & artists endeavor to consider your suggestions and make them possible for you.
                                        Together, let’s build a home for the future of art
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='m_row'>
                        <div className='m_row_left'>
                            <div className='m_icon'>
                                <img src={svg2} />
                            </div>
                            <div className='m_desc'>
                                <div className='m_num'>3</div>
                                <div className='m_desc1'>
                                    <p className='m_m_title'>Our community come first</p>
                                    <p className='m_m_desc'>Enrich your experience of art and get free passes to our Dubai Art Gallery, attend live workshops or get a free airdrop or surprise mint by holding on to your Carl gallery Club Membership.
                                        now prepare to enjoy privileges and discounts in public sales held during our much sought after events in Dubai Art Gallery.</p>
                                </div>
                            </div>
                        </div>
                        <div className='m_row_right'>
                            <div className='m_icon'>
                                <img src={svg3} />
                            </div>
                            <div className='m_desc'>
                                <div className='m_num'>4</div>
                                <div className='m_desc1'>
                                    <p className='m_m_title'>Realizing your NFT vision</p>
                                    <p className='m_m_desc'>The Carl Gallery Club project team powered by Augmind Labs, will incorporate augmented reality into our platform to allow NFT holders an exciting experience of visualizing how their NFT art would appear on their favorite products.
                                        You will be able to Point your camera at a blank wall, a piece of jar, your bike, your car or books and see it transform with the artwork from your NFT.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Accordion /> */}
            </div>
        </div>
    )
}

export default Gallery;