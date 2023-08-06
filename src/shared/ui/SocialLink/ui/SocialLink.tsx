import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import cls from "./SocialLink.module.scss";

type SocialLinkProps = {
  img: string;
  name: string;
  link: string;
  className?: string;
};

export const SocialLink: FC<SocialLinkProps> = ({
  img,
  name,
  link,
  className,
}: SocialLinkProps) => (
  <Link
    to={link}
    target="_blank"
    className={classNames(className, cls.SocialLink)}
  >
    <img src={img} alt={name} />
  </Link>
);
