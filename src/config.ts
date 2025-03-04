import type { Site, LinkObject } from "./types";

export const SITE: Site = {
  website: "https://pavlokoval.dev/",
  author: "Pavlo Koval",
  desc: "Software Engineer with a Frontend focus.",
  title: "Pavlo Koval",
  email: "me@pavlokoval.dev",
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

// export const HEADER_MENU: LinkObject = [
// {
//   linkTitle: "home",
//   href: "/",
// },
// {
//   linkTitle: "posts",
//   href: "/posts",
// },
// {
//   linkTitle: "projects",
//   href: "/projects",
// },
// {
//   linkTitle: "about",
//   href: "/about",
// },
// ];

export const SOCIALS: LinkObject = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pavlo-k-aa3813b3/",
    linkTitle: `LinkedIn`,
  },
  {
    name: "Github",
    href: "https://github.com/pkvl",
    linkTitle: `Github`,
  },
  {
    name: "X",
    href: "https://x.com/thisispavlodev",
    linkTitle: `Twitter(X)`,
  },
  // {
  //   name: "BlueSky",
  //   href: "https://bsky.app",
  //   linkTitle: "BlueSky",
  // },
];
