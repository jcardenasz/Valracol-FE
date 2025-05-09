import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import './whatsappButton.css';

const WhatsappButton = () => {
    return (
        <div>
            <a href={"https://wa.me/+57" + process.env.WACONTACT}
               className="float" target="_blank" rel="noopener noreferrer">
                <BsWhatsapp className="my-float" />
            </a>
        </div>
    );
};

export default WhatsappButton;
