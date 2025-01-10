import "./Clients.css";
import DreamStudioLogo from "../../assets/DreamStudio.jpeg";
import WiproLogo from "../../assets/Wipro.png";
import DaimlerLogo from "../../assets/Daimler.jpeg";
import TelstraLogo from "../../assets/Telstra.png";
import NFCLogo from "../../assets/NFC.jpeg";

const Clients = () => {
    const clients = [
        { id: 1, name: "DreamStudio", logo: DreamStudioLogo, link: "https://dreamstudio.com/" },
        { id: 2, name: "Wipro", logo: WiproLogo, link: "https://www.wipro.com/" },
        { id: 3, name: "Daimler AG", logo: DaimlerLogo, link: "https://group.mercedes-benz.com/company/" },
        { id: 4, name: "Telstra", logo: TelstraLogo, link: "https://www.telstra.com.au/" },
        { id: 5, name: "NFC", logo: NFCLogo, link: "https://www.nfc.gov.in/" },
    ];

    return (
        <section className="clients" id="clients">
            <div className="clientsContainer">
                <h2 className="clientsTitle">Clients</h2>
                <p className="clientsSubtitle">
                    I&apos;ve had the privilege to work with these amazing clients.
                </p>
                <div className="clientLogos">
                    {clients.map((client) => (
                        <a
                            href={client.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="clientLogoWrapper"
                            key={client.id}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="clientLogo"
                            />
                            <h3 className="clientName">{client.name}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
