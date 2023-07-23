import { SOCIAL_LINK, SocialLinkType } from "../constants/footer";
import { SocialLink } from "../../../shared/ui/SocialLink";

import cls from "./Footer.module.scss";

export const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className={cls.Footer}>
      <span className={cls.copyright}>
        © 2020-{thisYear} Cleverland. Все права защищены.
      </span>
      <div className={cls.socialLinks}>
        {SOCIAL_LINK.map(({ img, name, link }: SocialLinkType) => (
          <SocialLink
            img={img as string}
            name={name}
            link={link}
            key={name.toString()}
          />
        ))}
      </div>
    </footer>
  );
};
