import { Link } from "react-router-dom";

import cls from "./SocialLink.module.scss";
import classNames from "classnames";

interface SocialLinkProps {
  img: string;
  name: string;
  link: string;
  className?: string;
}

export const SocialLink = ({ img, name, link, className }: SocialLinkProps) => (
  <Link
    to={link}
    target="_blank"
    className={classNames(className, cls.SocialLink)}
  >
    <img src={img} alt={name} />
  </Link>
);
