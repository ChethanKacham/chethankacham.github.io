import "./Clients.css";
import DreamStudioLogo from "../../assets/DreamStudio.jpeg";
import WiproLogo from "../../assets/Wipro.png";
import DaimlerLogo from "../../assets/Daimler.jpeg";
import TelstraLogo from "../../assets/Telstra.png";
import NFCLogo from "../../assets/NFC.jpeg";

const Clients = () => {
    const clients = [
        { id: 1, name: "DreamStudio", logo: DreamStudioLogo },
        { id: 2, name: "Wipro", logo: WiproLogo },
        { id: 3, name: "Daimler AG", logo: DaimlerLogo },
        { id: 4, name: "Telstra", logo: TelstraLogo },
        { id: 5, name: "Nuclear Fuel Complex", logo: NFCLogo },
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
                        <div className="clientLogoWrapper" key={client.id}>
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="clientLogo"
                            />
                            <h3 className="clientName">{client.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
