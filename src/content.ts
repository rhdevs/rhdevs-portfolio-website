/*
 * Single source of truth for every fact on the site.
 *
 * Rule: nothing here may be invented or rounded up. If a value is unknown,
 * leave it null and add a `TODO(content)` comment. Components skip null
 * fields instead of rendering filler copy.
 */

export const site = {
  // TODO(content): switch to the custom domain if one is set up (also used for canonical + OG URLs).
  url: "https://rhdevs.vercel.app",
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
  linkedinUrl: "https://www.linkedin.com/in/patricksteveharrison/",
  linkedinLabel: "in/patricksteveharrison",
  websiteUrl: "https://www.patricksteveharrison.com/",
  websiteLabel: "patricksteveharrison.com",
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
    users: "About 600 Raffles Hall residents.",
    metric: { value: "~600", label: "residents use it", short: "residents" },
    endorsement:
      "Endorsed by the JCRC and hall admin as the main way to apply for CCAs, register for events and book rooms.",
    screenshot: {
      src: "/products/rhapp.webp",
      width: 1291,
      height: 800,
      alt: "RHApp booking hub: a September calendar beside the day's room bookings, with a Book a Facility button.",
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
    users: "70+ CCA leaders and the hall finance team.",
    metric: { value: "100%", label: "of the hall's CCA claims", short: "of CCA claims" },
    screenshot: {
      src: "/products/finance-bot.webp",
      width: 486,
      height: 365,
      alt: "Finance bot claims dashboard: claim counts by stage, from review to reimbursed, with reminders for treasurers.",
    },
    phone: {
      src: "/products/finance-bot-phone.webp",
      width: 486,
      height: 876,
      alt: "Finance bot in Telegram: the claims dashboard with counts by stage, treasurer reminders and the latest claims.",
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

export interface PartnerLogo {
  src: string;
  width: number;
  height: number;
}

export interface Sponsor {
  name: string;
  url: string;
  logo?: string;
}

/*
 * Source: the New Frontiers proposal deck (Google Slides, 24 slides). Only
 * what the deck states is used. Anything the deck marks as proposed or TBC is
 * labelled that way on the page. Deliberately left out: the OpenAI sponsor
 * slides (exploratory, not confirmed), the budget and the committee's open
 * decisions.
 */
export const newFrontiers = {
  name: "New Frontiers",
  tagline: "Build the Future.",
  status: "Upcoming · in planning",
  summary: "A 36-hour AI hackathon for about 200 NUS students.",
  dates: {
    label: "Fri 19 to Sun 21 Feb 2027",
    proposed: true,
    /* Start of the proposed first day, Singapore time. Drives the countdown. */
    kickoffISO: "2027-02-19T00:00:00+08:00",
  },
  durationHours: 36,
  // TODO(content): the deck lists the participant target as "not set"; the site brief said about 200. Confirm.
  participants: "About 200 NUS students",
  openTo: "All NUS students, every discipline",

  theme: {
    statement:
      "Build AI that plans, acts and interacts with the world, and show what it would take to put it into real use.",
    howMightWe:
      "How might we design an AI-powered product that solves a meaningful problem in our hall, on campus or beyond, and that people could keep using after the hackathon?",
    deliverables: [
      "A working prototype.",
      "A credible case for who needs it, why they would adopt it and how it could grow into a sustainable venture.",
    ],
  },

  pillars: [
    {
      name: "Technical experimentation",
      body: "Teams build with agents, robots and AI tools in a 36-hour window, ending with a prototype that works.",
    },
    {
      name: "Interdisciplinary teams",
      body: "Open to every faculty, with a team-matching session so engineers, designers and domain experts build together.",
    },
    {
      name: "Entrepreneurial thinking",
      body: "The startup viability track runs across all three subtracks, so every team pitches users, adoption and growth.",
    },
  ],

  format: [
    { when: "Friday", what: "Kickoff" },
    { when: "36 hours", what: "Teams build" },
    { when: "Sunday", what: "Pitches" },
  ],

  mainTrack: "Startup Viability",
  mainTrackBrief: "Applies to every team: real need, target users, adoption path and sustainability as a venture.",
  mainTrackCriteria: [
    { name: "Real need", body: "Evidence the problem exists and matters: people asked, pain observed, a cost or time lost today." },
    { name: "Target users", body: "A specific first group of users, not “everyone”, and what they do about the problem now." },
    { name: "Adoption path", body: "How first users find it, why they switch from today’s way, and why they keep using it after the weekend." },
    { name: "Sustainability", body: "Who pays or funds it, what it costs to run (AI usage included) and how it could grow into a venture." },
  ],

  subtracks: [
    {
      name: "AI and Agentic Systems",
      note: "Main subtrack" as string | null,
      brief: "Build systems that reason, plan and use tools to complete tasks, with appropriate human oversight.",
      explore: ["Agents that coordinate workflows", "Agents that collaborate with users", "Agents that work together on a problem"],
      suitedTo: "Teams with software or AI experience",
      shownThrough: "A working agent or multi-agent prototype",
      questions: [
        "Which multi-step task can an agent complete reliably that people currently do by hand?",
        "Where should a human review, approve or override the agent, and how is that built in?",
        "How does the team show the agent is dependable, not just impressive in one demo?",
      ],
    },
    {
      name: "Robotics",
      note: "Physical AI" as string | null,
      brief: "Build AI systems that perceive and act in the physical world, on real hardware or in simulation.",
      explore: ["Robotics", "Intelligent sensing", "Human–robot interaction"],
      suitedTo: "Teams with hardware, sensing or simulation skills",
      shownThrough: "A hardware or simulation demo",
      questions: [
        "How does the system sense its surroundings and decide what to do next?",
        "What real-world setting (home, hall, lab, community space) does it improve?",
        "How does it behave safely around people, and when something goes wrong?",
      ],
    },
    {
      name: "Open Innovation",
      note: "Beginner-friendly" as string | null,
      brief:
        "Apply AI to problems outside the other two subtracks. Open to every team, and a good place to start for first-time hackathon participants and teams new to AI.",
      explore: ["Education", "Creative tools", "Accessibility", "Sustainability", "Community life"],
      suitedTo: "Any team, including first-time hackathon participants",
      shownThrough: "A working prototype or functional demo",
      questions: [
        "What everyday problem around you could AI make easier, fairer or more enjoyable?",
        "Who would use it, and what would they do differently because of it?",
        "What is the simplest working version that shows the idea?",
      ],
    },
  ],
  trackRule:
    "Every team enters exactly one subtrack and is judged on startup viability as well. Any team can also take on the Hall Life challenge.",

  challenge: "Hall Life challenge",
  hallLife: {
    hosts: "Co-hosted by Sheares Hall and KEVII Hall",
    brief: "Teams in any subtrack can also build for a real hall problem.",
    examples: ["Booking", "Food waste", "Sign-ups", "Welfare", "Facilities"],
    howItRuns: [
      "Each hall sends two or three real problems, published with registration.",
      "Each problem names a contact that teams can talk to during the weekend.",
      "A joint panel, one judge from each hall, picks one Hall Life award. Judges do not score teams with residents from their own hall.",
    ],
  },

  eligibility: [
    { name: "Open to every discipline", body: "Any NUS student can enter. A matching session helps individuals find teammates." },
    { name: "Teams of 1 to 4", body: "Proposed size, to be confirmed. Solo entries are allowed." },
    { name: "One subtrack per team", body: "Each team picks one subtrack at registration. A project cannot be entered in more than one." },
    { name: "Beginners welcome", body: "No prior experience needed. Open Innovation is open to every team and a good place to start." },
  ],

  stages: [
    { name: "Registration and team matching", body: "Teams register and pick a subtrack. A matching session helps individuals find teammates." },
    { name: "Kickoff and workshops", body: "Opening briefing, track overviews and technical workshops." },
    { name: "36-hour build", body: "Teams build their prototypes over the weekend, with scheduled mentor check-ins." },
    { name: "Submission", body: "Each team submits a working prototype, a short demo and a pitch." },
    { name: "Pitching and judging", body: "Teams pitch and demo to a judging panel, followed by Q&A." },
    { name: "Showcase and awards", body: "Finalists present to the wider community, then prizes are presented." },
  ],

  /* Draft run of show. Every time here is proposed. */
  schedule: [
    {
      day: "Fri 19 Feb",
      items: [
        { time: "6:00 pm", what: "Check-in and team matching" },
        { time: "7:00 pm", what: "Opening briefing and track overviews" },
        { time: "8:00 pm", what: "Build starts" },
      ],
    },
    {
      day: "Sat 20 Feb",
      items: [
        { time: "Morning", what: "Technical workshops" },
        { time: "All day", what: "Mentor check-in rounds" },
        { time: "Overnight", what: "Building continues" },
      ],
    },
    {
      day: "Sun 21 Feb",
      items: [
        { time: "8:00 am", what: "Submission deadline" },
        { time: "9:00 am", what: "Pitching and judging, until 12:00 pm" },
        { time: "2:00 pm", what: "Finalist showcase, then awards" },
      ],
    },
  ],
  buildClock: "Fri 8:00 pm to Sun 8:00 am",

  judging: [
    { weight: 25, name: "Technical execution", body: "A prototype that works, is well built and matches the claims made." },
    { weight: 25, name: "Purposeful use of AI", body: "AI is central to solving the problem, not added for show." },
    { weight: 25, name: "User value", body: "A clear user, a real problem and a noticeable improvement for them." },
    { weight: 25, name: "Adoption and startup viability", body: "A believable path to real-world use and a sustainable venture." },
  ],
  judgingBeginnerNote:
    "For first-time teams, judges also weigh learning, effort and clarity of idea alongside polish, so beginners are not compared with experienced builders on technical depth alone.",

  deliverables: [
    { name: "Functional prototype", body: "Software, hardware or simulation. It has to actually run." },
    { name: "Live demo", body: "Up to 5 minutes (length to be confirmed), shown to the judging panel." },
    { name: "Short pitch", body: "The problem, the users, the solution and the path to adoption." },
    { name: "AI and oversight note", body: "How the team uses AI, and where human oversight applies." },
  ],

  awards: {
    count: 8,
    note: "Proposed. Prize values to be confirmed.",
    featured: { name: "Best Startup Potential", body: "The main-track award, open to every team." },
    perSubtrack: ["Winner", "Runner-up"],
    extra: { name: "Hall Life award", body: "One shared award, judged by Sheares Hall and KEVII Hall." },
  },

  outcomes: [
    { name: "Working prototypes", body: "Practical, creative solutions to real problems, built by students from many disciplines." },
    { name: "Early-stage ventures", body: "Product concepts with validated user needs and a credible path toward a startup." },
    { name: "Hands-on experience", body: "Interdisciplinary teamwork in problem-solving and product development." },
    { name: "Stronger networks", body: "Links between student builders, mentors, technology partners and the startup ecosystem." },
  ],

  /* Flip to false if any co-organiser withdraws; the lines disappear everywhere. */
  coOrganisersConfirmed: true,
  coOrganisers: ["CDE Club", "Eusoff Hackers", "RMI Club", "Sheares Hall", "KEVII Hall"],
  /*
   * The deck lists these roles as proposed ("roles to be agreed"); the page says so.
   * Logos: official files in assets-src/partners/<id>.(png|jpg|svg), converted
   * by `npm run assets`. A partner with logo: null shows as a name tile.
   */
  organiserRoles: [
    {
      id: "cde-club",
      name: "CDE Club",
      role: "Proposed Open Innovation host",
      group: "Track hosts (proposed)",
      detail: "Open Innovation track",
      logo: { src: "/partners/cde-club.webp", width: 308, height: 320 } as PartnerLogo | null,
    },
    {
      id: "eusoff-hackers",
      name: "Eusoff Hackers",
      role: "Co-organiser",
      group: "Co-organiser",
      detail: "Startup Viability track",
      logo: { src: "/partners/eusoff-hackers.webp", width: 238, height: 320 } as PartnerLogo | null,
    },
    {
      id: "rmi-club",
      name: "RMI Club",
      role: "Proposed Robotics host",
      group: "Track hosts (proposed)",
      detail: "Robotics track",
      logo: { src: "/partners/rmi-club.webp", width: 313, height: 320 } as PartnerLogo | null,
    },
    {
      id: "sheares-hall",
      name: "Sheares Hall",
      role: "Hall Life challenge co-host",
      group: "Hall Life challenge",
      detail: "Co-host",
      logo: { src: "/partners/sheares-hall.webp", width: 366, height: 320 } as PartnerLogo | null,
    },
    {
      id: "kevii-hall",
      name: "KEVII Hall",
      role: "Hall Life challenge co-host",
      group: "Hall Life challenge",
      detail: "Co-host",
      logo: { src: "/partners/kevii-hall.webp", width: 272, height: 320 } as PartnerLogo | null,
    },
  ],

  /* What a sponsor could contribute, and get back. Generic: no sponsor is named until signed. */
  sponsorAsks: [
    { name: "Credits for building", body: "API credits or developer resources for teams, lowering the cost of building with AI during the event." },
    { name: "Credits as prizes", body: "Credits or resources for winning teams, so promising projects keep developing after the weekend." },
    { name: "Mentorship and workshops", body: "Engineers or practitioners running workshops and advising teams." },
    { name: "Ecosystem exposure", body: "Industry perspectives on product development and entrepreneurship for participants." },
  ],
  sponsorReturns: [
    "Direct contact with university developers and aspiring founders across disciplines.",
    "Your technology in practical use across varied problems, from agents to robotics.",
    "Acknowledgement in event materials and publicity.",
    "An agreed workshop or mentoring presence during the weekend.",
    "Recognition at the finalist showcase and awards.",
  ],

  /* Only add a sponsor after they have signed. Renders nothing while empty. */
  sponsors: [] as Sponsor[],

  // TODO(content): put the deck at /public/new-frontiers-sponsor-deck.pdf and set this to that path.
  // While null, the sponsor block offers "request the deck" by email instead of a dead link.
  sponsorDeckUrl: null as string | null,
};
