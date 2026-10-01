import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsGithub,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "WhatsApp",
    href: "https://wa.me/",
    icon: BsWhatsapp,
  },
  { title: "GitHub", href: "https://github.com/", icon: BsGithub },
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: BsFacebook,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: BsLinkedin,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
