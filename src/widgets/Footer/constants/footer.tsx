import facebookIcon from "../../../shared/assets/facebook.svg";
import instagramIcon from "../../../shared/assets/instagram.svg";
import linkedinIcon from "../../../shared/assets/linkedin.svg";
import vkIcon from "../../../shared/assets/vk.svg";

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
