import Link from "next/link";

import { Container } from "../Container/Container";
import { LinckBtn } from "../LinckBtn/LinckBtn";
import { LinkAddress } from "../LinkAddress/LInkAddress";

import youtube from "../../../public/youtube.svg";
import twitter from "../../../public/twitter.svg";
import dribbble from "../../../public/dribbble.svg";
import inst from "../../../public/instagram.svg";
import emailIcon from "../../../public/message.svg";
import phoneIcon from "../../../public/calling.svg";
import locationIcon from "../../../public/location.svg";
// import disclaimer from "../../../public/Disclaimer.docx";
// import privacy from "../../../public/privacy-policy-template.pdf";

import { manrope, poppins } from "../../fonts/fonts";
import styles from "./Footer.module.css";

const socials = [
  { name: "instagram", icon: inst, link: "https://www.instagram.com/" },
  { name: "dribbble", icon: dribbble, link: "https://dribbble.com/" },
  { name: "twitter", icon: twitter, link: "https://twitter.com/" },
  { name: "youtube", icon: youtube, link: "https://www.youtube.com/" },
];

const address = [
  {
    info: "admin@goodlyfe.co",
    icon: emailIcon,
    name: "E-mail",
    link: "mailto:admin@goodlyfe.co",
  },
  {
    info: "+88 987654 3210",
    icon: phoneIcon,
    name: "phone number",
    link: "tel:+889876543210",
  },
  {
    info: "90210 Beverly Hills California USA",
    icon: locationIcon,
    name: "address",
    link: "https://maps.app.goo.gl/PpEj1r5uoQ4BHykJ9",
  },
];

export const Footer = () => {
  return (
    <footer className={`${manrope.variable} ${styles.footer}`}>
      <Container>
        <div>
          <div>
            <Link href="/" className={`${poppins.variable} ${styles.logo}`}>
              Good<span className={styles.logoAccent}>lyfe</span>
            </Link>
            <p className={styles.text}>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
              nunc quam ac sed turpis volutpat. Cursus sed massa non nisi,
              placerat.
            </p>
            <ul className={styles.socialList}>
              {socials.map(({ name, icon, link }) => (
                <LinckBtn
                  key={name}
                  href={link}
                  icon={icon}
                  currentLink={"second"}
                />
              ))}
            </ul>
          </div>
          <div className={styles.reachWrapp}>
            <p className={styles.reach}>Reach us</p>
            <address>
              <ul className={styles.addressList}>
                {address.map(({ icon: Icon, info, name, link }) => (
                  <li key={name} className={styles.addressItem}>
                    <LinkAddress href={link} type={name === "address"}>
                      <div className={styles.addressIconWrapp}>
                        <Icon alt={name} width={"20px"} height={"20px"} />
                        <p className={styles.addressText}>{info}</p>
                      </div>
                    </LinkAddress>
                  </li>
                ))}
              </ul>
            </address>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <a href="/public/privacy-policy-template.pdf" download>
                GGGG
              </a>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
          <p></p>
        </div>
      </Container>
    </footer>
  );
};

// ("ChIJ7xfS-zW8woARXNkAJzX5Hs8"); 34.06954688539107,
//   -118.40340728601463(
//     "https://www.google.com/maps/search/?api=1&query=34.06954688539107%2C-118.40340728601463&query_place_id=ChIJ7xfS-zW8woARXNkAJzX5Hs8"
//   );
