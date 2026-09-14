/* Module 03 - Ads Manager (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"1.3.1": {
  intro: "Ads Manager is the tool where you build, watch and change your ads. It looks crowded at first. This lesson walks through the screen slowly so it stops feeling frightening.",
  idea: [
    "The screen has three tabs across the top: Campaigns, Ad sets, Ads. These are the three levels you learned about. Clicking a campaign filters the other tabs to show only what is inside it.",
    "On the left is the navigation menu, where you reach other tools such as audiences, the pixel and billing. In the middle is the table of your campaigns with their numbers. Above the table sit the controls: the date range, the filters, and the buttons to create or edit.",
    "The most important control on the whole screen is the date range in the top right. Every number you look at belongs to that date range. Most confusing conversations about performance come from two people looking at two different date ranges.",
    "The second most important is the columns setting, which decides which numbers you see. The default columns are not the right ones for most businesses, and changing them is one of the first things a professional does."
  ],
  example: {
    title: "Two people, two truths",
    body: "A manager says the campaign is failing at 40 dollars per lead. The buyer says it is fine at 18. Both are looking at the same campaign. The manager's date range is yesterday. The buyer's is the last 14 days. Nobody is lying. The fix is a rule: all performance conversations use the last 7 or 14 days unless someone says otherwise."
  },
  steps: [
    "Open Ads Manager and find the three tabs: Campaigns, Ad sets, Ads.",
    "Set the date range in the top right to the last 14 days.",
    "Click one campaign and watch the other tabs filter to it.",
    "Open the columns menu and look at what is being shown.",
    "Find the toggle that switches a campaign on or off, and note how it looks in both states.",
    "Open the left menu once and read the tool names so you know what exists."
  ],
  mistakes: [
    "Reading numbers without checking the date range first.",
    "Editing while a filter is active and not realising other items are hidden.",
    "Working from the default columns, which hide the numbers that matter to you."
  ],
  words: [
    { t: "Ads Manager", d: "The main tool for building and managing ads." },
    { t: "Date range", d: "The period of time the numbers on screen belong to." },
    { t: "Columns", d: "The set of numbers shown in the table." },
    { t: "Filter", d: "A rule that hides rows you do not want to see right now." }
  ],
  takeaways: [
    "Three tabs match the three levels: campaign, ad set, ad.",
    "Check the date range before reading any number.",
    "Default columns rarely show what your business needs.",
    "Agree one standard date range with your team to avoid false arguments."
  ],
  selfCheck: [
    "I can find the date range and change it without searching.",
    "I know how to move between campaign, ad set and ad views.",
    "I know where the columns setting lives."
  ],
  quiz: [
    { q: "What should you check before reading any number in Ads Manager?", options: ["The account name", "The date range", "The currency"], a: 1, why: "Every figure on screen belongs to the selected period." },
    { q: "Clicking a campaign name does what?", options: ["Deletes it", "Filters the ad set and ad tabs to show only what is inside it", "Pauses it"], a: 1, why: "It narrows the view so you can drill down level by level." },
    { q: "Why change the default columns?", options: ["To make the page load faster", "Because the defaults usually hide the numbers your business decides on", "Because Meta requires it"], a: 1, why: "You need cost per result and your own key figures visible at a glance." }
  ],
  exercise: { task: "Open Ads Manager and spend ten minutes with no goal except looking. Write down five things on the screen you do not understand yet. Keep the list and cross items off as this module continues." },
  challenge: { task: "Write a one page guide to Ads Manager for a new colleague who has never seen it: what each area does, the three things to check before reading data, and the two mistakes that cause most confusion." }
},

"1.3.2": {
  intro: "This lesson walks through building a campaign from the first click to the moment before publishing, so you know what every screen is asking you.",
  idea: [
    "Creation happens in three screens that match the three levels. Screen one is the campaign: you choose the objective and name it. Screen two is the ad set: audience, budget, schedule, placements and the optimisation event. Screen three is the ad: the creative, the text and the link.",
    "At campaign level you will also see two switches worth knowing. One is the budget option, which decides whether the budget sits at campaign level and is shared between ad sets, or at ad set level where you control each one. The other is the special category declaration, which you must switch on for credit, employment, housing, social issues, elections and politics.",
    "Special categories change what targeting is allowed. Declaring correctly is a legal and policy matter, not an optional setting.",
    "Before publishing, always use the preview. It shows exactly what a person will see on each placement. About one in four problems is visible in the preview: cut off text, a logo covered by a button, a link that does not open."
  ],
  example: {
    title: "Caught in preview",
    body: "An ad looked perfect in the editing panel. In the Stories preview, the bottom third of the image sat behind the profile name and the swipe area, hiding the price. The designer moved the price up 200 pixels, re-uploaded, and the ad launched correctly. Thirty seconds of checking saved a week of poor results."
  },
  steps: [
    "Press Create and choose your objective.",
    "Name the campaign using your naming pattern.",
    "Decide where the budget sits: campaign or ad set.",
    "Declare a special category if your business is in one.",
    "Build the ad set: audience, budget, schedule, placements, optimisation event.",
    "Build the ad: creative, primary text, headline, link, button.",
    "Check every placement preview, then publish."
  ],
  mistakes: [
    "Publishing without opening the preview.",
    "Forgetting to declare a special category, which risks rejection or restriction.",
    "Leaving the default campaign name, so the account becomes unreadable in a month."
  ],
  words: [
    { t: "Special ad category", d: "A declaration required for credit, employment, housing, social issues, elections and politics." },
    { t: "Preview", d: "A view of the ad exactly as people will see it in each placement." },
    { t: "Publish", d: "The action that sends the ad for review and then delivery." }
  ],
  takeaways: [
    "Creation follows the same three levels every time.",
    "Decide the budget location before you build the ad sets.",
    "Declare special categories honestly, because it is a policy requirement.",
    "Always check every placement preview before publishing."
  ],
  selfCheck: [
    "I can build a campaign from start to finish without help.",
    "I know what a special ad category is and whether mine is one.",
    "I check previews every single time."
  ],
  quiz: [
    { q: "Which businesses must declare a special ad category?", options: ["All businesses", "Credit, employment, housing, social issues, elections and politics", "Only political parties"], a: 1, why: "These categories have restricted targeting for legal and fairness reasons." },
    { q: "What does the preview show you?", options: ["Estimated results", "Exactly how the ad appears to people in each placement", "Your competitors' ads"], a: 1, why: "It reveals layout problems before real money is spent." },
    { q: "Where do you decide whether the budget is shared between ad sets?", options: ["At ad level", "At campaign level", "In billing settings"], a: 1, why: "The campaign holds the option to place the budget centrally." }
  ],
  exercise: { task: "Build one complete campaign in draft without publishing it. Go through every screen and write down each setting you were unsure about. Then delete the draft." },
  challenge: { task: "Create a campaign build checklist for your team with every decision in order, including the checks before publishing and who must approve each one for spends above a set amount." }
},

"1.3.3": {
  intro: "The ad set is where most of your control lives. This lesson goes through each setting and explains what it actually does to delivery.",
  idea: [
    "The first decision is the conversion location: where the action happens. Your website, your app, a messaging conversation, a form inside Facebook, or a phone call. This shapes everything else.",
    "Then the optimisation event: the exact action the system hunts for. Then the budget and schedule, which decide how much is spent and when. Then the audience: location, age, gender, detailed targeting and custom audiences. Then placements: where your ad can appear.",
    "Two settings quietly cause many problems. The first is age and gender limits that are tighter than necessary, which starve the system of people to learn from. The second is manual placements chosen from habit, which cuts off cheap opportunities.",
    "A useful habit: build the ad set, then read it back as a sentence. Show my ad to people in this place, of this age, who match this, in these positions, and find me this action for this much per day. If that sentence sounds strange, the settings are wrong."
  ],
  example: {
    title: "The narrow ad set",
    body: "An ad set targeted women aged 28 to 34, in three cities, interested in four topics, on Instagram feed only. The audience size was 40,000. Costs were very high and results stopped after two days. Widening to one city-wide audience with automatic placements and no interest limits took the audience to 900,000 and cut cost per lead by more than half, because the system finally had room to find buyers."
  },
  steps: [
    "Choose the conversion location that matches where the action really happens.",
    "Choose the optimisation event closest to money that has enough volume.",
    "Set the budget and decide daily or lifetime.",
    "Set the location and keep age and gender as wide as the business allows.",
    "Add audiences only where you have a real reason.",
    "Leave placements automatic unless you have data proving otherwise.",
    "Read the whole ad set back to yourself as one sentence."
  ],
  mistakes: [
    "Narrowing the audience because it feels more targeted. Small audiences cost more.",
    "Optimising for an event that happens twice a week.",
    "Turning off placements without any data showing they hurt."
  ],
  words: [
    { t: "Conversion location", d: "Where the action happens: website, app, messages, form or call." },
    { t: "Detailed targeting", d: "Interests and behaviours used to narrow an audience." },
    { t: "Placements", d: "The positions where your ad can appear across Meta apps." }
  ],
  takeaways: [
    "Conversion location and optimisation event shape everything else.",
    "Wide audiences usually beat narrow ones on cost.",
    "Automatic placements is the right starting point.",
    "Read your ad set back as a sentence to catch nonsense settings."
  ],
  selfCheck: [
    "I can explain each ad set setting in one sentence.",
    "I can justify every narrowing I have applied.",
    "I know my current optimisation event and its weekly volume."
  ],
  quiz: [
    { q: "What usually happens when an audience is made very narrow?", options: ["Costs fall", "Costs rise because the system has less room to find good matches", "Nothing changes"], a: 1, why: "Fewer candidates means more expensive auctions and slower learning." },
    { q: "What is the safe default for placements?", options: ["Manual, Instagram feed only", "Automatic placements", "Audience Network only"], a: 1, why: "Automatic lets the system find the cheapest positions that work." },
    { q: "The conversion location decides...", options: ["Your currency", "Where the action you want takes place", "Your billing date"], a: 1, why: "It defines the destination and shapes the rest of the ad set." }
  ],
  exercise: { task: "Take one existing ad set and write it out as a plain English sentence. Then mark any setting you cannot justify with a real reason and note what you would change." },
  challenge: { task: "Build three ad set configurations for the same business: one for cold prospecting, one for website retargeting, one for existing customers. Write the exact settings for each and explain every difference." }
},

"1.3.4": {
  intro: "The ad is the only part real people ever see. This lesson covers building it properly: the parts of an ad, the identity, the link and the final checks.",
  idea: [
    "An ad has five visible parts. The identity at the top, which is your Page and Instagram account. The creative, meaning the image or video. The primary text above or below it. The headline, which is the short bold line. And the button with the link behind it.",
    "You can build an ad from scratch, or use an existing post that already has comments and likes. Using an existing post keeps that social proof, which often makes the ad perform better. To do this correctly you need the post identifier, and the ad must use the same Page.",
    "The link deserves attention. It must open fast, work on a phone, and match the promise of the ad. Adding tracking parameters at this stage lets your website analytics tell you which ad brought each visitor.",
    "Before publishing: check the preview on feed, Stories and Reels. Check the link opens. Check the text is not cut off. Check the button matches the action you want."
  ],
  example: {
    title: "The button that lied",
    body: "An ad used the Shop now button, but the link opened a page explaining the company history with no products and no price. People clicked, found no way to buy, and left. Changing the destination to the product page, with no other change, tripled the purchase rate. The ad was never the problem."
  },
  steps: [
    "Choose the Page and Instagram identity for the ad.",
    "Choose the format: single image, video, or carousel.",
    "Upload the creative at the correct size for each placement.",
    "Write the primary text, then the headline, then the description.",
    "Add the link, the button, and any tracking parameters.",
    "Preview on feed, Stories and Reels, then publish."
  ],
  mistakes: [
    "Using one square image for every placement, so vertical placements look wrong.",
    "A button that promises something the landing page does not deliver.",
    "Forgetting tracking parameters, then being unable to prove which ad worked."
  ],
  words: [
    { t: "Primary text", d: "The main message that sits with the image or video." },
    { t: "Headline", d: "The short bold line under or beside the creative." },
    { t: "Call to action button", d: "The button such as Learn more, Shop now or Send message." },
    { t: "Existing post", d: "A real post used as an ad, keeping its likes and comments." }
  ],
  takeaways: [
    "An ad has five parts: identity, creative, primary text, headline, button and link.",
    "Using an existing post keeps likes and comments, which builds trust.",
    "The button must match what the landing page actually offers.",
    "Preview in every placement before publishing."
  ],
  selfCheck: [
    "I can name the five visible parts of an ad.",
    "My links open correctly on a phone.",
    "My button matches the real action on the landing page."
  ],
  quiz: [
    { q: "What is the benefit of using an existing post as an ad?", options: ["It is cheaper per click automatically", "It keeps the existing likes and comments, which builds trust", "It skips the review process"], a: 1, why: "Accumulated social proof travels with the post." },
    { q: "Your button says Shop now. Where should the link go?", options: ["The home page", "The page where the product can actually be bought", "The about page"], a: 1, why: "The destination must deliver exactly what the button promised." },
    { q: "Why upload different sizes of the creative?", options: ["To use more storage", "So the ad looks correct in vertical placements such as Stories and Reels", "To pass review faster"], a: 1, why: "One square image gets cropped or padded badly in vertical positions." }
  ],
  exercise: { task: "Build one ad completely, then open every placement preview and screenshot anything that looks wrong. Fix each issue and note what caused it." },
  challenge: { task: "Take an existing ad in your account and rebuild it properly: correct sizes for each placement, a matched landing page, tracking parameters, and a button that matches the action. Write a before and after comparison of every element you changed." }
},

"1.3.5": {
  intro: "Columns decide which numbers you see. Most people never change them and therefore never see the numbers that matter. This lesson fixes that in fifteen minutes.",
  idea: [
    "The default column set shows general numbers such as reach and impressions. These do not tell you whether the business is making money. You need to build your own set and save it.",
    "A good default set for most businesses is: spend, impressions, CPM, CTR, cost per result, results, and then whatever your specific money number is, such as purchases and purchase value, or leads and cost per lead.",
    "You can also build a custom metric, which is your own calculation from existing numbers. For example: cost per qualified lead, if you send that information back to Meta. Or profit per purchase, if you enter your margin.",
    "Save each set with a clear name, such as Daily check or Creative review or Client report. Then switching views takes one click, and everyone on the team sees the same numbers."
  ],
  example: {
    title: "Two saved views",
    body: "A media buyer uses two presets. Daily check shows spend, results, cost per result, CPM, CTR and frequency, and is used every morning for five minutes. Creative review shows video watch time, hold rate, CTR and cost per result at ad level, and is used on Mondays. The two views take one click each and prevent the habit of staring at all 60 columns at once."
  },
  steps: [
    "Open the columns menu and choose to customise.",
    "Remove every column you do not use for decisions.",
    "Add spend, results, cost per result, CPM, CTR and frequency.",
    "Add your business specific money columns.",
    "Save the set with a clear name.",
    "Build a second set for creative review at ad level."
  ],
  mistakes: [
    "Keeping 40 columns visible, which makes it impossible to see anything.",
    "Never saving a preset, so you rebuild the same view every week.",
    "Using different column sets across the team, so reports disagree."
  ],
  words: [
    { t: "Columns", d: "The set of numbers shown in the table." },
    { t: "Preset", d: "A saved column set you can switch to in one click." },
    { t: "Custom metric", d: "Your own calculation built from existing numbers." }
  ],
  takeaways: [
    "Default columns hide the numbers that matter.",
    "Build and save two or three presets with clear names.",
    "Fewer, better columns beat many columns.",
    "The whole team should use the same presets to avoid conflicting reports."
  ],
  selfCheck: [
    "I have at least one saved column preset.",
    "My preset includes cost per result and my main money number.",
    "The team uses the same presets I do."
  ],
  quiz: [
    { q: "Why build a custom column preset?", options: ["To make the page look nicer", "Because the default columns rarely include the numbers you decide on", "It is required by Meta"], a: 1, why: "Decisions need cost per result and your business money numbers visible immediately." },
    { q: "What is a custom metric?", options: ["A metric Meta hides by default", "Your own calculation built from existing numbers", "A metric only agencies can use"], a: 1, why: "It lets you display something specific to your business, such as profit per sale." },
    { q: "How many columns should a daily view have?", options: ["As many as possible", "A small set focused on decisions, roughly six to ten", "Exactly three"], a: 1, why: "A tight set keeps attention on the numbers that drive action." }
  ],
  exercise: { task: "Build and save two presets: a daily check view and a creative review view. Write down which columns you removed and why you no longer need them." },
  challenge: { task: "Design a custom metric that would genuinely improve your decisions, define exactly how it is calculated and what data it needs, then write how you would get that data into Meta." }
},

"1.3.6": {
  intro: "When your account grows past a few campaigns, scrolling stops working. Filters and saved views let you find what you need in seconds. This lesson shows the practical patterns.",
  idea: [
    "A filter hides rows that do not match a rule. You can filter by delivery status, by objective, by spending amount, by result cost, by name, and by many other things.",
    "The most useful filters in daily work are simple. Show only active items, because paused ones are noise. Show only items that spent money in this period. Show items where cost per result is above a number, which finds problems instantly.",
    "Filters can be combined and then saved as a view. A saved view remembers the filter and often the columns, so your morning routine becomes one click instead of five minutes of setup.",
    "One warning: when a filter is active, some of your account is hidden. People sometimes think a campaign has disappeared, when it is simply filtered out. Always check whether a filter is on before panicking."
  ],
  example: {
    title: "Finding the problem in ten seconds",
    body: "An account has 340 active ads. The buyer applies one filter: ads that spent more than 50 in the last 7 days and have a cost per lead above 30. Eleven ads appear. Those eleven are where the money is leaking. Without the filter, finding them would mean reading 340 rows."
  },
  steps: [
    "Click the filter control above the table.",
    "Add a rule, for example delivery is active.",
    "Add a second rule, for example spend is greater than a number.",
    "Check the results make sense.",
    "Save the view with a clear name.",
    "Remember to clear filters when you finish, or note that they are on."
  ],
  mistakes: [
    "Leaving a filter on and thinking items have been deleted.",
    "Editing in bulk while filtered, without realising what is hidden.",
    "Never using filters at all in an account with hundreds of rows."
  ],
  words: [
    { t: "Filter", d: "A rule that hides rows that do not match." },
    { t: "Saved view", d: "A stored combination of filters and columns." },
    { t: "Delivery status", d: "Whether an item is active, paused, or limited." }
  ],
  takeaways: [
    "Filters turn a huge account into a short, useful list.",
    "The best daily filter finds high spend with poor cost per result.",
    "Save filter and column combinations as named views.",
    "Always check whether a filter is active before concluding something is missing."
  ],
  selfCheck: [
    "I have used a filter to find underperforming items.",
    "I have at least one saved view for daily work.",
    "I check for active filters before judging what I see."
  ],
  quiz: [
    { q: "What is the fastest way to find money leaks in a large account?", options: ["Scroll through everything", "Filter for high spend combined with poor cost per result", "Sort by campaign name"], a: 1, why: "That combination isolates exactly where spending is not producing results." },
    { q: "A campaign seems to have disappeared. What should you check first?", options: ["Billing", "Whether a filter is active and hiding it", "Your internet connection"], a: 1, why: "Active filters hide rows, which looks like deletion." },
    { q: "What does a saved view store?", options: ["Only the date range", "A combination of filters and usually columns, under a name", "Your password"], a: 1, why: "It restores your working setup in one click." }
  ],
  exercise: { task: "Create one filter that finds your worst performing active ads, based on spend and cost per result. Save it as a named view and use it tomorrow morning." },
  challenge: { task: "Design a complete set of saved views for managing a large account: a morning check, a weekly creative review, a scaling candidates view and a problem view. Define the exact rules for each and when it is used." }
},

"1.3.7": {
  intro: "Breakdowns split your results into smaller pieces, showing which age, place, device or position actually produced them. This is where real insight hides.",
  idea: [
    "A breakdown answers the question: where did these results actually come from. You can split by age, gender, country, region, platform, placement, device, and time.",
    "This often changes decisions completely. An ad set showing an acceptable average cost may be hiding one placement that is excellent and another that is terrible, with the average sitting between them.",
    "Placement and platform breakdowns are the most useful at the start. Device breakdowns matter when your website behaves differently on phones. Time breakdowns show whether certain days or hours are wasteful.",
    "One caution: do not cut too thin. When a breakdown shows three results in a segment, that is not evidence, that is noise. Wait for meaningful numbers before acting, and prefer removing clear, repeated waste over chasing small differences."
  ],
  example: {
    title: "The hidden winner",
    body: "An ad set showed 22 dollars per lead overall, which the client called acceptable. The placement breakdown showed Instagram Reels at 9 dollars, Facebook feed at 17, and Audience Network at 71. Most of the waste sat in one place. Moving budget toward the strong placements brought the blended cost down to 13 without any new creative."
  },
  steps: [
    "Open the breakdown menu above the table.",
    "Start with placement or platform.",
    "Look for large, repeated differences, not small ones.",
    "Check that each segment has enough results to trust.",
    "Decide whether to act at ad set level or with new creative.",
    "Re-check after a week to confirm the pattern held."
  ],
  mistakes: [
    "Acting on segments with only a handful of results.",
    "Turning off a placement that looked bad for three days, without checking the ad was designed for it.",
    "Using breakdowns to explain a result after the fact, rather than to decide what to do next."
  ],
  words: [
    { t: "Breakdown", d: "A split of your results by age, place, platform, placement, device or time." },
    { t: "Segment", d: "One slice inside a breakdown, for example Instagram Stories." },
    { t: "Blended cost", d: "The overall average that hides differences between segments." }
  ],
  takeaways: [
    "Averages hide both your best and your worst performers.",
    "Placement and platform breakdowns give the fastest insight.",
    "Small segments are noise, not evidence.",
    "Use breakdowns to decide the next action, not just to explain the past."
  ],
  selfCheck: [
    "I have run a placement breakdown on my own account.",
    "I can tell the difference between a real pattern and noise.",
    "I check segment volume before acting on a difference."
  ],
  quiz: [
    { q: "What is the main value of a breakdown?", options: ["It increases delivery", "It shows which segments produced your results, revealing what the average hides", "It lowers CPM"], a: 1, why: "Averages conceal both strong and weak segments." },
    { q: "A placement shows 2 results at a very low cost. What should you do?", options: ["Move all budget there immediately", "Wait for more data, because 2 results is noise", "Turn off every other placement"], a: 1, why: "Tiny samples move wildly and cannot support a decision." },
    { q: "Which breakdown is usually most useful first?", options: ["Time of day", "Placement or platform", "Gender"], a: 1, why: "Placement differences are typically the largest and most actionable." }
  ],
  exercise: { task: "Run a placement breakdown on your best spending ad set for the last 30 days. Write down the cost per result for each placement and identify the best and worst." },
  challenge: { task: "Write a breakdown analysis routine: which breakdowns you check, in what order, the minimum results needed before acting, and the specific action that follows each finding." }
},

"1.3.8": {
  intro: "Ads Manager records every change anyone makes. This history is the most honest teacher in your account, and almost nobody uses it. This lesson shows how.",
  idea: [
    "The activity history shows who changed what, and when. Budget changes, audience edits, ads switched on and off, and more.",
    "Its first use is explaining a sudden change in results. Costs jumped on Tuesday. The history shows someone raised the budget by 300 percent on Monday night. Mystery solved in twenty seconds instead of an afternoon of guessing.",
    "Its second use is learning. Reading your own history from three months ago shows your habits: how often you interfered, whether your changes helped, and which actions were pure panic.",
    "Combine it with results over the same period. Put the change dates beside the performance graph and the cause of most swings becomes obvious."
  ],
  example: {
    title: "The Monday mystery",
    body: "Cost per purchase doubled with no obvious reason. The team suspected the algorithm or competitors. The history showed a team member had edited the audience on Friday to add an interest, which restarted learning and changed who saw the ads. Reverting the change and waiting four days returned costs to normal."
  },
  steps: [
    "Open the activity history from the account menu or the campaign view.",
    "Set the date range to cover the period in question.",
    "Look for changes just before the shift in results.",
    "Note who made the change and what it was.",
    "Decide whether to revert or wait.",
    "Record the lesson in your own change log."
  ],
  mistakes: [
    "Blaming Meta or the market before checking whether someone changed something.",
    "Not keeping your own log, and relying only on the system view.",
    "Reverting immediately without allowing the current state to stabilise."
  ],
  words: [
    { t: "Activity history", d: "The record of every change made in the account." },
    { t: "Change log", d: "Your own written record of what you changed and why." },
    { t: "Revert", d: "Putting a setting back to what it was before." }
  ],
  takeaways: [
    "Check the change history before blaming outside forces.",
    "Line up change dates against the performance graph.",
    "Your own history reveals your bad habits better than any book.",
    "Keep a written log with reasons, which the system cannot record for you."
  ],
  selfCheck: [
    "I know where to find the activity history.",
    "I check it before diagnosing a sudden change.",
    "I keep my own change log with reasons."
  ],
  quiz: [
    { q: "Results changed suddenly. What should you check first?", options: ["Competitor activity", "The activity history, to see if someone changed something", "Your website hosting"], a: 1, why: "Internal changes explain most sudden shifts and take seconds to check." },
    { q: "What does the activity history not record?", options: ["Who made a change", "When it happened", "Why the person made the change"], a: 2, why: "Reasons live only in your own written log, which is why keeping one matters." },
    { q: "What is the value of reading your own old history?", options: ["It is required for reporting", "It shows your habits, including how often you interfered unnecessarily", "It restores deleted ads"], a: 1, why: "Patterns in your own behaviour are the fastest source of improvement." }
  ],
  exercise: { task: "Open the activity history for the last 30 days. Write down every change, who made it, and whether results improved afterwards. Mark any change that was made without a clear reason." },
  challenge: { task: "Build a change management process for a team of four: who may change what, what must be logged, the required waiting period before judging, and a weekly review where changes are compared against results." }
},

"1.3.9": {
  intro: "Naming sounds boring and saves hours every month. A good naming system lets you read your account at a glance, filter instantly and build reports automatically. This final Level 1 lesson gives you one.",
  idea: [
    "Without a system, accounts fill with names like New campaign, Copy of test 2, and final FINAL. After three months nobody knows what anything is.",
    "A naming pattern is simply a fixed order of pieces of information, separated by a symbol. For example, at campaign level: objective, funnel stage, offer, date started. At ad set level: audience type, location, age range. At ad level: format, angle, version.",
    "The pieces must be things you would want to filter by later. If you would never search for it, it does not belong in the name.",
    "Once names are consistent, everything improves: filters work, reports group correctly, and a new team member can understand the account without asking questions. Apply the pattern to new work immediately, and rename old items gradually."
  ],
  example: {
    title: "One account, readable",
    body: "Campaign: LEADS | Cold | Free-Consult | 2026-03. Ad set: Broad | Dubai | 25-54. Ad: Video | Patient-Story | v3. Now a filter on the word Cold shows all prospecting, a filter on Patient-Story shows every ad using that angle across the account, and a report grouped by the first piece separates objectives without any manual work."
  },
  steps: [
    "Decide the three or four pieces of information for each level.",
    "Choose one separator and use it everywhere, for example a vertical bar.",
    "Write the pattern down and share it with the team.",
    "Use dates in the year-month-day format so they sort correctly.",
    "Apply the pattern to every new item from today.",
    "Rename old items when you touch them, rather than all at once."
  ],
  mistakes: [
    "Inventing a new pattern every few months.",
    "Putting information in the name that you would never filter by.",
    "Using dates written as day-month-year, which sort incorrectly."
  ],
  words: [
    { t: "Taxonomy", d: "The naming system used across the account." },
    { t: "Separator", d: "The symbol between pieces of a name, such as a vertical bar." },
    { t: "Convention", d: "An agreed rule everyone follows." }
  ],
  takeaways: [
    "Names should contain only things you would filter or report by.",
    "Use one pattern and one separator everywhere.",
    "Write dates as year-month-day so they sort correctly.",
    "Apply the pattern going forward and rename old items gradually."
  ],
  selfCheck: [
    "We have a written naming pattern for all three levels.",
    "Everyone on the team uses it.",
    "I can filter the account by any part of a name and get useful results."
  ],
  quiz: [
    { q: "What should go in a name?", options: ["Everything you know about the campaign", "Only the pieces you would want to filter or group by later", "Just the date"], a: 1, why: "Names are search tools, so they should carry searchable information only." },
    { q: "Which date format sorts correctly?", options: ["12-03-2026", "March 12 2026", "2026-03-12"], a: 2, why: "Year first, then month, then day always sorts in true order." },
    { q: "What is the correct way to fix an account with messy old names?", options: ["Rename everything in one day", "Apply the new pattern to all new items and rename old ones as you work on them", "Delete the old campaigns"], a: 1, why: "Gradual renaming avoids disruption while the account becomes consistent." }
  ],
  exercise: { task: "Write your naming pattern for all three levels on one page. Then rename three existing campaigns using it and check that a filter on one piece of the name returns exactly what you expect." },
  challenge: { task: "Design a complete taxonomy for an agency managing 20 client accounts: the pattern for each level, the allowed values for each piece, how new values are approved, and how the naming feeds automated reporting." }
}

});
