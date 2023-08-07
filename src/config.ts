import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://foreverealize.me/",
  author: "Sat Naing",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
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
    linkTitle: `${SITE.author} on twitter (or x?)`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/leslocuresdenfelix",
    linkTitle: `${SITE.author} on twitch`,
    active: true,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/profiles/76561199061531028",
    linkTitle: `${SITE.author} on steam`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://pastebin.com/Si6RmJXJ",
    linkTitle: `${SITE.author} on discord`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on YouTube`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Snapchat`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Instagram`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on CodePen`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Skype`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Mastodon`,
    active: false,
  },
];
