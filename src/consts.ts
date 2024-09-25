import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "FOSS CLUB CEKNPY",
  DESCRIPTION: "Welcome to FOSS CLUB CEKNPY",
  AUTHOR: "Twilighty Abhi",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}
// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}
// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Events",
  DESCRIPTION: "Recent events conducted.",
}
// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and events by keyword.",
}

// About page
export const ABOUT: Page = {
  TITLE: "About",
  DESCRIPTION: "about the foss club.",
}
// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  // {
  //   TEXT: "Work",
  //   HREF: "/work",
  // },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Events",
    HREF: "/projects", 
  },
  { 
    TEXT: "About", 
    HREF: "/about", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "fossceknpy@gmail.com",
    HREF: "mailto:fossceknpy@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "foss CEKNPY",
    HREF: "https://github.com/thceknpy"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "fossclub CEKNPY",
    HREF: "#",
  },
  { 
    NAME: "Instagram",
    ICON: "Instagram",
    TEXT: "fossceknpy",
    HREF: "https://www.instagram.com/fossceknpy",
  },

  // {
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "foss CEKNPY",
  //   HREF: "#",
  // },
]

