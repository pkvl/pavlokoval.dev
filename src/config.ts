import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://pavlokoval.dev/",
  author: "Pavlo Koval",
  desc: "Pavlo Koval - software engineer",
  title: "Pavlo Koval",
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const SOCIALS: SocialObjects = [
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
];