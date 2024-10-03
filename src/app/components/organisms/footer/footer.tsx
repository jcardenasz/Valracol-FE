import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import SocialNetworks from "@/app/components/molecules/socialNetworks";
import "./footer.css"; // Import the CSS file

export function FooterComponent() {
    return (
        <Footer container className="h-32 bg-gradient-to-b from-valracol-footer-red to-neutral-950">
            <div className="h-20 w-full text-center">
                <div className="h-full w-full flex justify-between items-center">
                    <div className="h-full flex-1 flex flex-col justify-center items-center transition ease-in-out hover:scale-110">
                        <img src="/logoValracol.webp" className="h-16 sm:h-20" alt="Logo Valracol"/>
                        <span className="self-center whitespace-nowrap text-lg sm:text-2xl font-bold dark:text-white">VALRACOL</span>
                    </div>
                    <div className="vl"/> {/* Vertical line */}
                    <div className="flex-1 flex justify-center p-5">
                        <FooterLinkGroup className="flex justify-center items-center w-full">
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
                <FooterDivider/>
                <FooterCopyright className="text-neutral-400" href="#" by="Valracol™ - Todos los derechos reservados" year={2024}/>
            </div>
        </Footer>
    );
}
export default FooterComponent;