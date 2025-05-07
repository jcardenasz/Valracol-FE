import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import SocialNetworks from "@/app/components/molecules/socialNetworks/socialNetworks";
import "./footer.css";
import Image from "next/image"; // Import the CSS file

export function FooterComponent() {
    return (
        <Footer container className=" bg-gradient-to-b from-valracol-footer-red to-black pt-3 px- pb-1">
            <div className=" w-full text-center">
                <div className="h-full w-full flex justify-between items-center">
                    <div className="h-full flex-1 flex flex-col justify-center items-center transition ease-in-out hover:scale-110">
                        <Image src={"/images/logoValracol.webp"} alt={"Logo Valracol"} className="h-16 sm:h-20" width={64} height={64} />
                        <span className="self-center whitespace-nowrap text-lg sm:text-2xl font-bold dark:text-white">VALRACOL</span>
                    </div>
                    <div className="vl"/> {/* Vertical line */}
                    <div className="flex-1 flex justify-center p-5">
                        <FooterLinkGroup className="flex flex-col justify-center items-center w-full">
                            <FooterLink className="FooterLink-text text-sm sm:text-base text-center" href="#">Sobre nosotros</FooterLink>
                            <FooterLink className="FooterLink-text text-sm sm:text-base text-center" href="#">Catálogo</FooterLink>
                            <FooterLink className="FooterLink-text-con text-sm sm:text-base text-center" href={"https://wa.me/+57"+process.env.WACONTACT} target="_blank"> ✆ Contáctenos</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div className="vl"/> {/* Vertical line */}
                    <div className="flex-1 flex justify-center">
                        <SocialNetworks/>
                    </div>
                </div>
                <div className="w-full sm:flex sm:items-center sm:justify-center">
                    <FooterCopyright className="text-neutral-400" href="#" by="Valracol™ - Todos los derechos reservados" year={2025}/>
                </div>
            </div>
        </Footer>
    );
}
export default FooterComponent;