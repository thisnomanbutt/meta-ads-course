/* Official sources and the update log.
   Meta changes weekly. This file is meant to be edited: add a LOG entry whenever
   you find something that changes what a lesson teaches, and tag the lessons it affects. */

window.UPDATE_SOURCES = [
  {
    name: "Marketing API changelog",
    url: "https://developers.facebook.com/docs/marketing-api/changelog",
    what: "Dated, precise and technical. Changes usually appear here before they are announced anywhere else, which makes it the best early warning of what is coming.",
    check: "Monthly",
    affects: "Levels 5, 6 and 8"
  },
  {
    name: "Meta for Business news",
    url: "https://www.facebook.com/business/news",
    what: "Announcements of new advertising products and features, written for advertisers rather than developers.",
    check: "Monthly",
    affects: "All levels"
  },
  {
    name: "Business Help Centre",
    url: "https://www.facebook.com/business/help",
    what: "How each feature actually works today. Updated continuously and quietly, so the page you read last year may have changed without notice.",
    check: "When something behaves unexpectedly",
    affects: "All levels"
  },
  {
    name: "Advertising Standards",
    url: "https://transparency.meta.com/policies/ad-standards/",
    what: "The advertising policies themselves. The place to check before writing anything in a restricted or sensitive category.",
    check: "Quarterly, and before any new campaign in a regulated category",
    affects: "Level 8, Module 31"
  },
  {
    name: "Graph API changelog",
    url: "https://developers.facebook.com/docs/graph-api/changelog",
    what: "Underlying platform changes, including versions being retired. Matters if you have any custom integration or a Conversions API build.",
    check: "Quarterly",
    affects: "Level 5, Module 17 and Level 8, Module 32"
  },
  {
    name: "Meta Newsroom",
    url: "https://about.fb.com/news/",
    what: "Company level announcements. Broader than advertising, and where larger shifts are signalled first.",
    check: "Quarterly",
    affects: "Levels 7 and 9"
  },
  {
    name: "Your own Ads Manager",
    url: "https://adsmanager.facebook.com/",
    what: "The most reliable source of all. New settings appear in your own account, often before any announcement. Read the notifications and look for options you do not recognise.",
    check: "Weekly, as part of your Monday review",
    affects: "All levels"
  }
];

/* kind: "baseline" = what was true when the course was written, worth re-checking
   kind: "update"   = something that has genuinely changed since
   lessons: the lesson ids this affects, so the entry appears inside those lessons */
window.UPDATE_LOG = [
  {
    date: "Course baseline",
    kind: "baseline",
    title: "Automated campaigns keep absorbing manual settings",
    what: "Advantage+ campaign types have steadily taken over decisions that used to be set by hand: audience, placement and increasingly creative. The direction has been consistent for several years and shows no sign of reversing.",
    why: "If a setting this course tells you to configure has disappeared from your account, it has most likely been absorbed into an automated option rather than removed. Check what the automation now decides before assuming something broke.",
    lessons: ["6.23.1", "6.23.2", "6.23.5", "2.6.2", "2.5.1"]
  },
  {
    date: "Course baseline",
    kind: "baseline",
    title: "Measurement continues to tighten, never to loosen",
    what: "Every significant privacy change since 2021 has reduced what can be tracked about individuals. Browser restrictions, device permissions and consent law have all moved the same way.",
    why: "Treat any measurement approach that depends on following individuals across the internet as temporary. The lessons on server side measurement and first party data describe the durable answer.",
    lessons: ["5.18.1", "5.18.2", "5.18.5", "5.18.9", "5.17.1"]
  },
  {
    date: "Course baseline",
    kind: "baseline",
    title: "AI creative tools are expanding into new formats",
    what: "Generation, editing and variation tools inside Ads Manager grow steadily, and features that were optional are frequently switched on by default for new campaigns.",
    why: "Re-read your enhancement settings every few months. A default that changed can put wording in your advertisements that nobody in your company wrote or approved.",
    lessons: ["3.12.1", "3.12.4", "3.12.5", "6.23.4"]
  },
  {
    date: "Course baseline",
    kind: "baseline",
    title: "Policy wording changes more often than the policies themselves",
    what: "The substance of the advertising rules is fairly stable. The specific wording, the examples given and the enforcement emphasis all change more frequently.",
    why: "Before any campaign in a restricted category, read the current policy page rather than relying on what you learned. This matters most in healthcare, finance, housing, employment and credit.",
    lessons: ["8.31.1", "8.31.3", "8.31.5", "2.4.7"]
  }
];
