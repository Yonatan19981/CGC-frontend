import React from "react";
import Carousel from "./Carousel";
import pic from '../../assets/img/pic2.png';
import pic1 from '../../assets/img/Dart Vider (1).png';
import ABI from './ABI';
import { ethers } from 'ethers';
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

function Gallery2() {

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
        <div className="container">
            <div className="gallery2">
                <Carousel />
                <div className="mint1">
                    <p onClick={handleMintModalShow} >Mint</p>
                </div>
                <div className='artist1'>
                    <div className='artist_desc'>
                        <strong>Artist Biography</strong><br />
                        Itzhak Mevorah, who is a third generation of a family of artists, who started her way in the beginning of the century in Bulgaria.
                        “MEVORAH ART & DESIGN” studio was founded in 1998,
                        The studio specializes in the wide variety of the art and design fields. The art of sculpting and painting and some other uniqueand unconventional projects.

                        Throughout the years “MEVORAH ART & DESIGN” company has lead dozens of exclusive and successful projects to some private clients from all kinds of places (including abroad). Mevorah’sartwork adorns public buildings, business buildings and offices, and takes place in some private collections of famous Israeli collectors.

                        ItzhaqMevorahis the main artist and designer of the company and he tries to emphasize his uniqueness of every new project the studio gets, be involved in the process of it, and lead it till the reaches the end result
                    </div>
                    <div className='famous'>
                        <img src={pic} alt='' />
                        <div className='birthday'>
                            Itzhak Mevorah
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
                        <div>
                            <img src={pic1} alt='' style={{ width: "320px", marginLeft: "auto", marginRight: "auto" }} />
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

export default Gallery2;