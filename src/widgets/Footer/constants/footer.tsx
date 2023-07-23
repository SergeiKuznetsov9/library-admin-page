import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";
import vkIcon from "../assets/vk.svg";

export interface SocialLinkType {
  img: string | SVGSVGElement;
  name: string;
  link: string;
}

export const SOCIAL_LINK = [
  {
    img: facebookIcon,
    name: "facebook",
    link: "https://facebook.com/",
  },
  {
    img: instagramIcon,
    name: "instagram",
    link: "https://www.instagram.com/",
  },
  {
    img: vkIcon,
    name: "vk",
    link: "https://vk.com/",
  },
  {
    img: linkedinIcon,
    name: "linkedin",
    link: "https://linkedin.com/",
  },
];
