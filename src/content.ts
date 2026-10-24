/*
 * Single source of truth for every fact on the site.
 *
 * Rule: nothing here may be invented or rounded up. If a value is unknown,
 * leave it null and add a `TODO(content)` comment. Components skip null
 * fields instead of rendering filler copy.
 */

export const site = {
  // TODO(content): switch to the custom domain if one is set up (also used for canonical + OG URLs).
  url: "https://rhdevs-portfolio-website.vercel.app",
  name: "RHDevs",
  hall: "Raffles Hall",
  university: "National University of Singapore",
  memberCount: 25,
};

export const contact = {
  name: "Patrick",
  role: "Head of RHDevs",
  telegramHandle: "@patricksharrison",
  telegramUrl: "https://t.me/patricksharrison",
  email: "patricksteveharrison@gmail.com",
};

/* ------------------------------------------------------------------ */
/* Products we ship and maintain                                       */
/* ------------------------------------------------------------------ */

export interface Screenshot {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  kind: string;
  url?: string;
  urlLabel?: string;
  problem: string | null;
  does: string | null;
  users: string | null;
  metric: { value: string; label: string; short: string } | null;
  endorsement?: string;
  /* Drop a PNG into assets-src/products/ (crop it and blur residents' names first),
   * run `npm run assets`, then fill this in with the .webp path and the
   * dimensions the script prints. */
  screenshot: Screenshot | null;
  /* Optional extra views for the home hero stage: a wider desktop view, and a
   * full-height phone view for the Telegram bots. */
  overview?: Screenshot;
  phone?: Screenshot;
}

export const products: Product[] = [
  {
    id: "rhapp",
    name: "RHApp",
    kind: "Web platform",
    url: "https://new.rhapp.lol",
    urlLabel: "new.rhapp.lol",
    // TODO(content): confirm this problem statement reads right to you.
    problem:
      "Residents need one place to apply for CCAs, register for events and book rooms.",
    does: "The hall's one-stop platform for CCA applications, event registration and room booking.",
    users: "About 500 Raffles Hall residents.",
    metric: { value: "~500", label: "residents use it", short: "residents" },
    endorsement:
      "Endorsed by the JCRC and hall admin as the main way to apply for CCAs, register for events and book rooms.",
    screenshot: {
      src: "/products/rhapp-calendar.webp",
      width: 712,
      height: 508,
      alt: "RHApp room-booking calendar for September 2026, with a dot on each day that has bookings.",
    },
    overview: {
      src: "/products/rhapp.webp",
      width: 1291,
      height: 800,
      alt: "RHApp booking hub: a September calendar beside the day's room bookings, with a Book a Facility button.",
    },
  },
  {
    id: "finance-bot",
    name: "Finance bot",
    kind: "Telegram bot",
    // TODO(content): confirm this problem statement reads right to you.
    problem:
      "Every CCA claim has to reach the hall's finance team and go through approval.",
    does: "Handles the hall's CCA claims and is part of the finance team's approval workflow.",
    users: "30+ CCA leaders and the hall finance team.",
    metric: { value: "100%", label: "of the hall's CCA claims", short: "of CCA claims" },
    screenshot: {
      src: "/products/finance-bot.webp",
      width: 476,
      height: 357,
      alt: "Finance bot claims dashboard: counts of claims by stage, from review to submitted and reimbursed.",
    },
    phone: {
      src: "/products/finance-bot-phone.webp",
      width: 478,
      height: 840,
      alt: "Finance bot in Telegram: the Finance Hub claims dashboard with claim counts by stage and treasurer reminders.",
    },
  },
  {
    id: "heartfelt-bot",
    name: "Heartfelt bot",
    kind: "Telegram bot",
    // TODO(content): confirm this problem statement reads right to you.
    problem:
      "Residents need a simple way to reach Heartfelt members and peer student supporters.",
    does: "Opens conversations between residents and Heartfelt members and peer student supporters.",
    users: "Residents, and 30+ Heartfelt members and peer student supporters.",
    metric: { value: "~100", label: "conversations opened", short: "conversations" },
    screenshot: {
      src: "/products/heartfelt-bot.webp",
      width: 687,
      height: 515,
      alt: "Heartfelt bot welcome message in Telegram explaining how to request anonymous support from a companion.",
    },
    phone: {
      src: "/products/heartfelt-bot-phone.webp",
      width: 687,
      height: 1180,
      alt: "Heartfelt bot in Telegram: the welcome message explaining how to request anonymous support, step by step.",
    },
  },
  {
    id: "announcement-bot",
    name: "Announcement bot",
    kind: "Telegram bot",
    // TODO(content): the problem line, and confirm the rest. "Does", "users" and the
    // subscriber count are read off the bot's reply and the channel header in your screenshots.
    problem: null,
    does: "Broadcasts posts from approved senders to the Raffles Hall Announcements channel, spaced out by a cooldown.",
    users: "Approved senders and the JCRC post through it.",
    metric: { value: "674", label: "channel subscribers", short: "subscribers" },
    screenshot: {
      src: "/products/announcement-bot.webp",
      width: 747,
      height: 560,
      alt: "Announcement bot reply in Telegram confirming an approved sender can broadcast to the channel.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Cohort model                                                        */
/* ------------------------------------------------------------------ */

export const cohort = {
  label: "Cohort 26/27",
  semesters: [
    {
      id: "sem-1",
      name: "Semester 1",
      title: "Training",
      lanes: ["Design track", "Engineering track"],
    },
    {
      id: "sem-2",
      name: "Semester 2",
      title: "Project teams",
      lanes: ["Mixed designer and engineer teams"],
    },
  ],
  // TODO(content): optional. A sentence per track on what is taught (tools, outputs) would strengthen this section.
};

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */

export interface Leader {
  name: string;
  role: string;
  photo: { base: string; width: number; height: number } | null;
}

export const leaders: Leader[] = [
  {
    name: "Patrick Steve Harrison",
    role: "Head of RHDevs",
    photo: { base: "/team/patrick", width: 768, height: 960 },
  },
  {
    name: "Zhiyuan",
    role: "Vice Head, Design",
    // TODO(content): replace with a face-forward headshot (current photo is a hand, not a portrait). Full name?
    photo: { base: "/team/zhiyuan", width: 512, height: 640 },
  },
  {
    name: "Ram",
    role: "Vice Head, Engineering",
    // TODO(content): full name?
    photo: { base: "/team/ram", width: 512, height: 640 },
  },
];

/* ------------------------------------------------------------------ */
/* Recruitment                                                         */
/* ------------------------------------------------------------------ */

export const recruitment = {
  // TODO(content): when the next intake opens, e.g. "Applications for Cohort 27/28 open in August 2027."
  timing: null as string | null,
};

/* ------------------------------------------------------------------ */
/* New Frontiers                                                       */
/* ------------------------------------------------------------------ */

export interface Sponsor {
  name: string;
  url: string;
  logo?: string;
}

export const newFrontiers = {
  name: "New Frontiers",
  status: "Upcoming · in planning",
  summary: "A 36-hour AI hackathon for about 200 NUS students.",
  dates: {
    label: "Fri 19 to Sun 21 Feb 2027",
    proposed: true,
    /* Start of the proposed first day, Singapore time. Drives the countdown. */
    kickoffISO: "2027-02-19T00:00:00+08:00",
  },
  durationHours: 36,
  participants: "About 200 NUS students",
  format: [
    { when: "Friday", what: "Kickoff" },
    { when: "36 hours", what: "Teams build" },
    { when: "Sunday", what: "Pitches" },
  ],
  mainTrack: "Startup Viability",
  subtracks: [
    { name: "AI and Agentic Systems", note: null as string | null },
    { name: "Robotics", note: null as string | null },
    { name: "Open Innovation", note: "Beginner track" as string | null },
  ],
  challenge: "Hall Life challenge",
  // TODO(content): one-line brief for each track and the Hall Life challenge, once finalised.

  /* Flip to false if any co-organiser withdraws; the line disappears everywhere. */
  coOrganisersConfirmed: true,
  coOrganisers: ["CDE Club", "Eusoff Hackers", "RMI Club", "Sheares Hall", "KEVII Hall"],

  /* Only add a sponsor after they have signed. Renders nothing while empty. */
  sponsors: [] as Sponsor[],

  // TODO(content): put the deck at /public/new-frontiers-sponsor-deck.pdf and set this to that path.
  // While null, the sponsor block offers "request the deck" by email instead of a dead link.
  sponsorDeckUrl: null as string | null,
};
