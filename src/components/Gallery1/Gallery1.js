import Carousel from './Carousel';
import './gallery1.css';
import card1_1 from '../../assets/img/001/001_1.mp4';
import pic from '../../assets/img/pic1.png';
import { ethers } from 'ethers';
import ABI from './ABI';
import { Modal } from "react-bootstrap";
import { useState } from 'react';
import { Button } from "reactstrap";
import { useWeb3React } from '@web3-react/core';
import { connectorsByName, resetWalletConnector } from '../Header/web3React';
import logo1 from '../../assets/img/metamask-logo.svg'
import logo2 from '../../assets/img/walletconnect.svg'

async function mint() {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const abi = ABI.abi;
    const contract = new ethers.Contract(ABI.address, abi, provider);
    try {
        alert('Success');
        await contract.purchase(0.001, 0);
    } catch (err) {
        console.log(err);
    }
}

function Gallery1() {

    const [mintModalShow, setMintModalShow] = useState(false);
    const { account, library, activate, chainId } = useWeb3React();
    const [networkChangeModalShow, setNetworkChangeModalShow] = useState(false);
    const [installMetamaskModalShow, setInstallMetamaskModalShow] = useState(false);
    const [walletConnectInfoModalShow, setWalletConnectInfoModalShow] = useState(false);
    const [walletConnectionModalShow, setWallectConnectionModalShow] = useState(false);

    const handleMintModalShow = () => {
        if (!!(library && account)) {
            if (chainId !== 4) {
                setNetworkChangeModalShow(true);
            } else {
                mint();
            }
        } else {
            setWalletConnectInfoModalShow(true);
        }
    };

    return (
        <div className="gallery1">
            <div className='container'>
                <Carousel />
                <div className='mint1'>
                    <p onClick={handleMintModalShow} >Mint</p>
                </div>
                <div className='artist1'>
                    <div className='artist_desc'>
                        <strong>Artist Biography</strong><br />
                        Self-taught artist Abdul Qader Al Rais is one of the most acclaimed and iconic painters of the United Arab Emirates. Influenced by the Dutch Masters and Impressionists early in his career, Al Rais’s style is unique; inspired by the region’s landscapes and the Emirate’s distinctive architecture, his paintings often depict palm trees, shops, neighbourhoods, local iconography, and customs. His later works, such as Serenity Series (2018), are more abstract and are often energized by the incorporation of Arabic letters written in the artist’s elegant calligraphy script. Rais is a founding member of the Emirates Fine Arts Society. His work was exhibited at the 2015 Venice Biennale, and is in the collections of the British Museum; the Museum of Contemporary Art Shanghai; and the National Gallery of Modern Art, New Delhi. He is the recipient of numerous awards including the Sheikha Latifa Prize for Art & Literature and the Golden Soafah (Palm Leaf) Award at the GCC exhibition.
                        <p>Blue-chip representation<br />
                            Represented by internationally reputable galleries.
                        </p>
                    </div>
                    <div className='famous'>
                        <img src={pic} alt='' />
                        <div className='birthday'>
                            Abdul Qader Al Rais<br />
                            Emirati, b. 1951
                        </div>
                    </div>
                </div>

                {/* WalletConnection Info Modal */}
                <Modal
                    className="info-modal"
                    show={walletConnectInfoModalShow}
                    onHide={() => setWalletConnectInfoModalShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="text-center">
                            Please connect your wallet by clicking 'Connect Wallet' button
                        </p>
                    </Modal.Body>
                </Modal>

                {/* Mint Modal */}
                <Modal show={mintModalShow} onHide={() => setMintModalShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Mint a Gallery1</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ width: "320px", marginLeft: "auto", marginRight: "auto" }}>
                            <video loop muted autoPlay  preload='auto' className='video'>
                                <source src={card1_1} type='video/webm' ></source>
                            </video>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => mint()} style={{ justifyContent: "center !important" }}>
                            Mint
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Install Metamask */}
                <Modal
                    className="info-modal"
                    show={installMetamaskModalShow}
                    onHide={() => setInstallMetamaskModalShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="text-center">
                            Please install metamask extension on your browser.
                        </p>
                    </Modal.Body>
                </Modal>

                {/* WalletConnection Modal */}
                <Modal
                    show={walletConnectionModalShow}
                    onHide={() => setWallectConnectionModalShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>CONNECT TO A WALLET</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button
                            className="metamask-btn"
                            variant="primary"
                            onClick={() => {
                                if (!window.ethereum) {
                                    setWallectConnectionModalShow(false);
                                    setInstallMetamaskModalShow(true);
                                } else {
                                    activate(connectorsByName["Injected"]);
                                    setWallectConnectionModalShow(false);
                                }
                            }}
                        >
                            <img src={logo1} alt="" />
                            <span>METAMASK</span>
                        </Button>
                        <Button
                            className="walletconnection-btn"
                            variant="primary"
                            onClick={() => {
                                resetWalletConnector(connectorsByName["WalletConnect"]);
                                activate(connectorsByName["WalletConnect"]);
                                setWallectConnectionModalShow(false);
                            }}
                        >
                            <img src={logo2} alt="" />
                            <span>WALLET CONNECT</span>
                        </Button>
                    </Modal.Body>
                </Modal>

                {/* wrong network modal Modal */}
                <Modal
                    className="network-change"
                    show={networkChangeModalShow}
                    onHide={() => setNetworkChangeModalShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>WRONG NETWORK</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="text-center">
                            Please switch your wallet network to Mainnet to use the app
                        </p>
                        <p className="text-center">
                            If you still encounter problems, you may want to switch to a
                            different wallet
                        </p>
                        <div>
                            <Button
                                style={{ width: "fit-content" }}
                                className="walletconnection-btn text-center"
                                variant="primary"
                                onClick={() => {
                                    setNetworkChangeModalShow(false);
                                    setWallectConnectionModalShow(true);
                                }}
                            >
                                Switch Wallet
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Gallery1;