import React from 'react';
import SocialNetworkButton from "@/app/components/atoms/socialNetworkButton";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

interface SocialNetworksProps {}
const SocialNetworks: React.FC<SocialNetworksProps> = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
            <SocialNetworkButton
                href={'https://www.facebook.com'}
                icon={<FaFacebookSquare className="text-xl sm:text-3xl hover:text-valracol-letter-hover transition ease-in-out hover:-translate-y-1 hover:scale-110 " />}
                alt={'Facebook logo'}>
            </SocialNetworkButton>
            <SocialNetworkButton
                href={'https://www.instagram.com'}
                icon={<AiFillInstagram className="text-xl sm:text-3xl hover:text-valracol-letter-hover transition ease-in-out hover:-translate-y-1 hover:scale-110 " />}
                alt={'Instagram logo'}>
            </SocialNetworkButton>
            <SocialNetworkButton
                href={'https://www.x.com'}
                icon={<FaSquareXTwitter className="text-xl sm:text-3xl hover:text-valracol-letter-hover transition ease-in-out hover:-translate-y-1 hover:scale-110 " />}
                alt={'Equis logo'}>
            </SocialNetworkButton>
        </div>
    );
};
export default SocialNetworks;