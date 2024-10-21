import ContactCard from "./ContactCard"

import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {

    const LINKS = [
        {
            name: "Email",
            link: "mailto:florian.decodtspro@gmail.com",
            text: "Envoyez-moi un email",
            logo: <IoIosMail />
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/florian-d-70a926176/",
            text: "Contactez-moi",
            logo: <FaLinkedin />
        }
    ]

  return (
    <div className="">
        {LINKS.map((links, index) => (
            <ContactCard
                key={index}
                name={links.name}
                link={links.link}
                text={links.text}
                logo={links.logo}
            />
        ))}
    </div>
  )
}