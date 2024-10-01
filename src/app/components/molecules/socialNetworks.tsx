import React from 'react';
import SocialNetworkButton from "@/app/components/atoms/socialNetworkButton";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

interface SocialNetworksProps {}
const SocialNetworks: React.FC<SocialNetworksProps> = () => {
    return (
        <div className="flex flex-row gap-4">
            <SocialNetworkButton
                href={'https://www.facebook.com'}
                icon={<FaFacebookSquare />}
                alt={'Facebook logo'}>
            </SocialNetworkButton>
            <SocialNetworkButton
                href={'https://www.instagram.com'}
                icon={<AiFillInstagram />}
                alt={'Instagram logo'}>
            </SocialNetworkButton>
            <SocialNetworkButton
                href={'https://www.x.com'}
                icon={<FaSquareXTwitter />}
                alt={'Equis logo'}>
            </SocialNetworkButton>
        </div>
    );
};
export default SocialNetworks;