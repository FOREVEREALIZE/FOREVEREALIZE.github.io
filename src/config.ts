import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://foreverealize.me/",
  author: "foreverealize",
  desc: "just a lil blog for some thingies!",
  title: "foreverealize's blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/foreverealize",
    linkTitle: ` ${SITE.author} on github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:foreverealize@proton.me",
    linkTitle: `send an email to ${SITE.author}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/foreverealize",
    linkTitle: `${SITE.author} on twitter (or x?) THIS IS PRIVATE`,
    active: true,
  },
];
