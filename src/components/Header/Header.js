import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from 'react-router-dom';
import './header.css'
import './Show'
import logo1 from '../../assets/img/metamask-logo.svg'
import logo2 from '../../assets/img/walletconnect.svg'

import { Modal } from "react-bootstrap";
import { useWeb3React } from '@web3-react/core';
import { connectorsByName, resetWalletConnector } from './web3React';

function Header() {
  const [walletConnectionModalShow, setWallectConnectionModalShow] = useState(false);
  const [installMetamaskModalShow, setInstallMetamaskModalShow] = useState(false);
  const [walletAddr, setWalletAddr] = useState("");
  const { account, library, activate, deactivate } = useWeb3React();

  const connectWallet = () => {
    setWallectConnectionModalShow(true);
  };

  const disconnectWallet = () => {
    deactivate(null);
  };

  useEffect(() => {
    let walletAddress = "";
    if (account !== undefined) {
      walletAddress = account
      setWalletAddr(
        walletAddress.substr(0, 6) + " ... " + walletAddress.substr(-4)
      );
    }
    else walletAddress = ""
  }, [account]);

  return (
    <div className='top_header'>
      <div className='header'>
        <div className='container'>
          <div className='main_top'>
            <div className='logo'>
              <h2><Link to='/'>Carl Gallery Club</Link></h2>
            </div>
            <div className='navbar'>
              <ul className='list'>
                <li><Link to='about'>About</Link></li>
                <li><Link to='membership'>MemberShip</Link></li>
                <li className='gallery'>
                  <a>Gallery collection</a>
                  <div className='dropdown'>
                    <p><Link to='gallery1'>Abdul Qader genesis collection</Link></p>
                    <p><Link to='gallery2'>Itzhaq Mevorah collection</Link></p>
                  </div>
                </li>
                <div className='connect'>
                  {!!(library && account) ? (
                    <div size="sm" onClick={disconnectWallet}>
                      Disconnect Wallet<br />
                    </div>
                  ) : (
                    <div size="sm" onClick={connectWallet}>
                      Connect Wallet
                    </div>
                  )}
                </div>
              </ul>
            </div>
            <div className='navbar_hidden'>
              <div className='menubar'>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='navbar_show'>
        <ul className='navbar_show1' id='navbar_show1'>
          <li className='show'><Link to='about'>About</Link></li>
          <li className='show'><Link to='membership'>MemberShip</Link></li>
          <li className='show'><Link to='gallery1'>Abdul Qader genesis collection</Link></li>
          <li className='show'><Link to='gallery2'>Itzhaq Mevorah collection</Link></li>
          <li className='show'>
            {!!(library && account) ? (
              <div size="sm" onClick={disconnectWallet}>
                Disconnect Wallet<br />
              </div>
            ) : (
              <div size="sm" onClick={connectWallet}>
                Connect Wallet
              </div>
            )}
          </li>
        </ul>
      </div>

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
    </div>
  );
}


export default Header;