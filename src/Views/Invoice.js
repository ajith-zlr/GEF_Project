import React from 'react';
import './Invoice.css';
import invoiceImage from '../Images/invoiceImage.png';

function Invoice() {
    return (
        <div className='container'>
            <div className='centered'>
                <span className="hover-text" style={{backgroundColor:"yellow"}}><b>Invoice Details</b></span>
                <div className='popup'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>Invoice:</div>
                        <img src={invoiceImage} alt="Invoice" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p>Seal 1:</p>
                        <img src={invoiceImage} alt="Seal 1" />
                        <p>Seal 3:</p>
                        <img src={invoiceImage} alt="Seal 3" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p>Seal 2:</p>
                        <img src={invoiceImage} alt="Seal 2" />
                        <p>Seal 4:</p>
                        <img src={invoiceImage} alt="Seal 4" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
