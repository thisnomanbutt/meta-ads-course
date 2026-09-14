/* Module 26 - App Advertising (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"6.26.1": {
  intro: "App advertising promotes a mobile application rather than a website. This lesson covers what makes it a different discipline.",
  plain: [
    "Advertising a website is simple: someone clicks, the page opens, they act. Advertising an app has an extra step that changes everything.",
    "The person taps your advertisement, goes to an app store, decides whether to download, waits for the download, opens the app, and only then can they do anything useful.",
    "Every one of those steps loses people, and none of them happen on your website where you can watch them. That is why app advertising needs its own tools and its own measurement."
  ],
  idea: [
    "The journey has five points where people are lost: seeing the advertisement, tapping it, viewing the store listing, installing, and opening the app for the first time. Typical patterns lose the majority of people at the store listing and again between installing and opening.",
    "Because of this, the store listing is part of your advertising whether you treat it as such or not. The screenshots, the title, the rating and the first two lines of description do as much work as the advertisement itself. Many campaigns fail because the advertisement was good and the store listing was not.",
    "Measurement is also different. Meta cannot see inside your app the way a pixel sees a website. Instead the app must send events back through a software development kit, which is code built into the app, or through a measurement partner. Without one of these, you can measure installs and nothing else.",
    "The final difference is that an install is almost never the real goal. An app that is downloaded and never opened is worthless. The business goal is usually registration, subscription, purchase or ongoing use, and campaigns should be built toward those rather than toward installs."
  ],
  example: {
    title: "The listing was the problem",
    body: "A company spent four months testing advertisement creative for their app with poor results. Analysis showed 42 percent of people who tapped the advertisement never installed. Their store listing had three screenshots, all of settings screens, and a description beginning with a corporate mission statement. Rewriting the listing with screenshots showing the app in use and a first line stating what it does, without changing the advertisements at all, raised the install rate to 71 percent."
  },
  steps: [
    "Map your five step journey and find where people are lost.",
    "Treat the store listing as part of the advertising and improve it.",
    "Install measurement code or connect a measurement partner.",
    "Define the real business goal beyond installs.",
    "Send in-app events back so campaigns can optimise toward them.",
    "Measure cost per active user, not cost per install."
  ],
  mistakes: [
    "Optimising for installs when installs are not the business goal.",
    "Neglecting the store listing, which loses more people than the advertisement.",
    "Advertising an app with no measurement code, so nothing after install is visible."
  ],
  words: [
    { t: "App install", d: "Someone downloading and installing your application." },
    { t: "Store listing", d: "Your app's page in the app store, with screenshots and description." },
    { t: "Software development kit", d: "Code built into your app that sends activity back for measurement." },
    { t: "Measurement partner", d: "A specialist company that measures app activity and shares it with advertising platforms." }
  ],
  takeaways: [
    "The store listing is part of your advertising and often the weakest part.",
    "You cannot measure inside an app without measurement code or a partner.",
    "An install is almost never the real business goal.",
    "Measure cost per active user, not cost per install."
  ],
  selfCheck: [
    "I know where in the five step journey I lose most people.",
    "My app sends events back for measurement.",
    "I know my real business goal beyond installs."
  ],
  quiz: [
    { q: "Where do app campaigns most commonly fail unnoticed?", options: ["In the advertisement", "At the store listing, between tap and install", "In the auction"], a: 1, why: "The listing does as much persuasive work as the advertisement." },
    { q: "How does Meta see activity inside your app?", options: ["Through the pixel", "Through measurement code in the app or a measurement partner", "It cannot, ever"], a: 1, why: "Websites use a pixel. Apps need their own measurement." },
    { q: "Why is cost per install a poor goal?", options: ["It is expensive", "An app downloaded and never opened is worthless", "It cannot be measured"], a: 1, why: "The business value comes from use, not from the download." }
  ],
  exercise: { task: "Look at your app's store listing as a new customer would. Read only the title, the first two lines and the first three screenshots. Write down whether you would understand what the app does and want it." },
  challenge: { task: "Produce an app funnel analysis: the five steps with current numbers at each, the biggest loss point, the store listing assessment, the measurement gaps, and a prioritised improvement plan with expected impact." }
},

"6.26.2": {
  intro: "App events are the actions people take inside your application. This lesson covers choosing and sending them.",
  plain: [
    "Inside your app, people do things: register, complete a tutorial, add something to a basket, subscribe, buy. Each of those is an event.",
    "Meta cannot see any of them unless your app tells it. Once it does, everything becomes possible: optimising toward real value rather than downloads, and knowing which advertisements produce useful users."
  ],
  idea: [
    "There are standard app events Meta already understands, similar to the standard events on websites: complete registration, tutorial completion, add to cart, initiate checkout, purchase, subscribe, start trial, achieve level and others. Use these wherever they fit, for the same reason as on websites: Meta already knows what they mean.",
    "The events worth sending are those that predict value. For a game, that might be reaching a certain level or making a first purchase. For a subscription app, completing registration and starting a trial. For a shopping app, adding to basket and purchasing.",
    "The technical requirement is a software development kit installed in the app, or a measurement partner integration. This is developer work and should be specified carefully, because retrofitting events later is more difficult than including them at the start.",
    "The parameter rules are the same as on websites. Purchase events need value and currency. No sensitive personal information may be sent. And the more matching information provided, the better the events connect to real people.",
    "One app specific consideration: events must be sent for both Apple and Android users, and the measurement differs between them because of Apple's privacy framework. Expect Apple measurement to be less complete, and plan reporting accordingly."
  ],
  example: {
    title: "The event that predicted value",
    body: "A subscription app analysed which early action best predicted a paying subscriber. It was not registration or trial start. It was completing three tasks within the first 48 hours, which predicted subscription with 74 percent accuracy. They added that as a custom event and optimised toward it. Cost per paying subscriber fell by 46 percent, because the system was now looking for people who engage rather than people who download."
  },
  steps: [
    "Identify which in-app actions predict eventual value.",
    "Map each to a standard app event where one fits.",
    "Specify the measurement implementation for your developers.",
    "Include value and currency on anything involving money.",
    "Verify events arrive correctly on both Apple and Android.",
    "Optimise toward the deepest event with sufficient volume."
  ],
  mistakes: [
    "Sending only install events, which teaches the system nothing about quality.",
    "Retrofitting events late, which is harder than including them from the start.",
    "Assuming Apple and Android measurement are equally complete."
  ],
  words: [
    { t: "App event", d: "An action taken inside your application, sent to Meta." },
    { t: "Standard app event", d: "A ready made event name Meta already understands." },
    { t: "Predictive event", d: "An early action that reliably predicts eventual value." },
    { t: "Retrofitting", d: "Adding measurement to an app after it was built." }
  ],
  takeaways: [
    "Send events that predict value, not just installs.",
    "Use standard event names wherever they fit.",
    "Specify measurement early. Retrofitting is harder.",
    "Apple measurement is less complete than Android. Plan for it."
  ],
  selfCheck: [
    "My app sends events beyond install.",
    "I know which early action predicts eventual value.",
    "Events are verified on both Apple and Android."
  ],
  quiz: [
    { q: "What kind of event is most valuable to send?", options: ["App opened", "An early action that reliably predicts eventual value", "Every screen view"], a: 1, why: "It lets the system find people likely to become valuable, early enough to matter." },
    { q: "Why use standard app event names?", options: ["They are shorter", "Meta already understands them and can apply existing knowledge", "They are required"], a: 1, why: "Custom names start with no borrowed understanding." },
    { q: "What should you expect about Apple measurement?", options: ["It is more complete", "It is less complete because of privacy frameworks", "It is identical"], a: 1, why: "Reporting and optimisation are both affected." }
  ],
  exercise: { task: "Analyse your existing users: find one early action that the eventual paying users almost all completed and the non paying users mostly did not. That is your candidate predictive event." },
  challenge: { task: "Design an app event architecture: every event with its business meaning, the predictive analysis identifying early value signals, the standard event mapping, the parameters, the implementation specification for developers, and the verification plan across both platforms." }
},

"6.26.3": {
  intro: "App install campaigns aim to get your app downloaded. This lesson covers running them without falling into the install trap.",
  plain: [
    "An install campaign does exactly what it says: it finds people who will download your app.",
    "The trap is that downloading is easy and free, so a system optimising for installs will find people who download things casually and use nothing. You can buy an enormous number of installs very cheaply, and gain nothing at all."
  ],
  idea: [
    "Install campaigns are appropriate in two situations. When your app is genuinely new and has no in-app event data yet, so nothing deeper can be optimised toward. And when your business model genuinely values reach, such as an app funded by advertising where usage volume matters more than any individual user's value.",
    "For everything else, they should be a temporary stage. The correct sequence is: launch optimising for installs to gather initial data, accumulate enough in-app events to optimise toward something deeper, then switch. Businesses that stay on install optimisation permanently usually have poor user quality and do not understand why.",
    "The practical detail is how quickly you can switch. You need roughly 50 of the deeper event per week for the system to learn. If your registration event happens 60 times a week, you can switch quickly. If your purchase event happens twice, you cannot, and you should optimise toward an intermediate event instead.",
    "There is also a creative consideration specific to install campaigns. Showing the app in use, on a phone, doing the thing it does, consistently outperforms abstract or branded creative. People want to see what they are about to download."
  ],
  example: {
    title: "Cheap installs, no business",
    body: "A company celebrated installs at 0.34 each, an extraordinary figure. Two months later they examined usage: 4 percent of installs had opened the app more than once, and none had subscribed. They had bought 90,000 downloads from people who install anything. Switching to registration optimisation raised cost per install to 2.80 and produced more paying subscribers in the first month than the previous two combined."
  },
  steps: [
    "Use install optimisation only at launch or where reach is genuinely the goal.",
    "Implement in-app event measurement before launching.",
    "Track how many of the deeper event occur weekly.",
    "Switch optimisation as soon as that event reaches sufficient volume.",
    "Show the app in use in your creative.",
    "Measure retention, not just installs, from the first week."
  ],
  mistakes: [
    "Staying on install optimisation permanently.",
    "Celebrating very cheap installs without checking whether anyone uses the app.",
    "Abstract creative that does not show the app doing anything."
  ],
  words: [
    { t: "Install campaign", d: "A campaign optimising for app downloads." },
    { t: "Install trap", d: "Buying large numbers of downloads from people who never use the app." },
    { t: "Retention", d: "Whether people continue using the app after installing." },
    { t: "Intermediate event", d: "An event between install and purchase, used when purchases are too rare." }
  ],
  takeaways: [
    "Install optimisation is a temporary stage, not a permanent strategy.",
    "Very cheap installs usually mean people who install everything and use nothing.",
    "Switch to a deeper event as soon as it reaches about 50 per week.",
    "Show the app actually working in your creative."
  ],
  selfCheck: [
    "I know whether install optimisation is still appropriate for me.",
    "I track retention, not just installs.",
    "I know the weekly volume of my deeper events."
  ],
  quiz: [
    { q: "When is install optimisation appropriate?", options: ["Always", "At launch before deeper data exists, or where reach is genuinely the business model", "Never"], a: 1, why: "It is a starting stage for most businesses, not a destination." },
    { q: "What do extremely cheap installs usually indicate?", options: ["Excellent targeting", "People who install many apps and use none of them", "A pricing error"], a: 1, why: "The system found people for whom installing costs nothing emotionally." },
    { q: "What creative works best for install campaigns?", options: ["Abstract brand imagery", "The app actually being used on a phone", "Text only"], a: 1, why: "People want to see what they are about to download." }
  ],
  exercise: { task: "Check what proportion of your installs opened the app more than once, and how many completed your key action. If retention is under 20 percent, install optimisation is likely costing you money." },
  challenge: { task: "Plan a migration from install to event optimisation: the current install quality analysis, the event volumes available, the intermediate event if needed, the switching sequence, the expected changes in cost per install, and the retention measurement proving improvement." }
},

"6.26.4": {
  intro: "App engagement campaigns reach people who already have your app installed. This lesson covers bringing them back.",
  plain: [
    "Most people who install an app stop using it within a week. Getting them back is usually cheaper than finding new people, and most businesses never try.",
    "Engagement campaigns advertise to people who already have the app, with a link that opens it directly at a specific place inside."
  ],
  idea: [
    "The mechanism is deep linking: a link that opens the app rather than a website, and goes to a specific screen rather than the home screen. Someone who abandoned a basket can be taken directly back to that basket.",
    "The audiences available include people who installed but never opened, people who opened but did not complete a key action, people who were active but stopped, and people who completed a purchase and might buy again. Each needs a different message.",
    "The most valuable audience is usually people who used the app and then stopped, within a recent window. They are proven users with demonstrated interest, and something specific caused them to stop. A message addressing that, or simply reminding them of value, frequently performs well.",
    "The technical requirement is that deep linking is configured in your app, which is developer work. Without it, your advertisement opens the app at the home screen, which loses much of the benefit.",
    "The measurement point: engagement campaigns should be judged on the action you wanted, not on app opens. An app opened and closed immediately is not a success, and optimising for opens produces exactly that."
  ],
  example: {
    title: "Straight back to the basket",
    body: "A shopping app advertised to people who had added items and not purchased. The first version opened the app at the home screen and produced a 3 percent purchase rate. They configured deep linking so the advertisement opened directly at the abandoned basket. The purchase rate rose to 19 percent. The audience and the message were identical. Only the destination changed."
  },
  steps: [
    "Configure deep linking in the app with your developers.",
    "Build audiences by behaviour: never opened, lapsed, purchased before.",
    "Write a specific message for each audience.",
    "Send each audience to the relevant screen, not the home screen.",
    "Optimise for the action you want, not app opens.",
    "Measure the value of returned users against the cost."
  ],
  mistakes: [
    "Advertising to existing users without deep linking, so they land on the home screen.",
    "Optimising for app opens, which produces opens and nothing else.",
    "Sending the same message to lapsed users and previous purchasers."
  ],
  words: [
    { t: "Engagement campaign", d: "Advertising to people who already have your app." },
    { t: "Deep link", d: "A link that opens the app at a specific screen." },
    { t: "Lapsed user", d: "Someone who used the app and then stopped." },
    { t: "App open", d: "The app being launched, which is not itself a business outcome." }
  ],
  takeaways: [
    "Bringing back existing users is usually cheaper than finding new ones.",
    "Deep linking to the relevant screen dramatically improves results.",
    "Different behaviour groups need different messages.",
    "Optimise for the action you want, never for app opens."
  ],
  selfCheck: [
    "Deep linking is configured in my app.",
    "I have separate audiences by behaviour with separate messages.",
    "I optimise for actions, not opens."
  ],
  quiz: [
    { q: "What is deep linking?", options: ["Linking to your website", "A link that opens the app at a specific screen rather than the home screen", "A tracking method"], a: 1, why: "It removes the navigation step that loses most returning users." },
    { q: "Which audience is usually most valuable?", options: ["People who never installed", "People who used the app and then stopped recently", "People who uninstalled"], a: 1, why: "They are proven users with demonstrated interest." },
    { q: "Why not optimise for app opens?", options: ["It is expensive", "The system will find people who open and immediately close", "It is unavailable"], a: 1, why: "An open is not a business outcome." }
  ],
  exercise: { task: "Check whether deep linking is configured in your app. If it is, build one audience of users who lapsed in the last 30 days and write a message specifically for them." },
  challenge: { task: "Design an engagement programme: every behavioural audience, the deep link destination for each, the message and offer, the optimisation event, the frequency limits preventing annoyance, and the measurement of returned user value against cost." }
},

"6.26.5": {
  intro: "App event optimisation means telling the system to find people who will do something valuable inside the app. This lesson covers doing it well.",
  plain: [
    "This is the same principle as everywhere else in the course, applied to apps: optimise for what you actually want, not for the easiest thing to measure.",
    "The complication in apps is that the valuable events happen days or weeks after the install, which makes the feedback slower and the learning harder."
  ],
  idea: [
    "The sequence most apps should follow is a ladder. Install, then registration, then first key action, then first purchase or subscription, then repeat value. You climb the ladder as each event reaches sufficient volume.",
    "The delay problem is real. If subscriptions happen on day seven of a trial, the system learns about a click's outcome a week later. This slows learning considerably compared with a website purchase that happens within an hour.",
    "The practical response is to optimise toward the earliest event that reliably predicts value, rather than the most valuable event. If completing three tasks in 48 hours predicts subscription well, optimising toward that gives you almost the same quality with much faster feedback.",
    "Value optimisation is available for apps and works the same way as elsewhere: send the actual value of purchases or subscriptions, and the system finds people likely to spend more. For apps with wide variation in user value, particularly games and subscription services, this is often the largest available improvement.",
    "One app specific caution: because Apple measurement is less complete, event optimisation performs differently across platforms. Many advertisers run separate campaigns by platform for this reason, accepting the fragmentation in exchange for cleaner measurement on each."
  ],
  example: {
    title: "Climbing the ladder",
    body: "A fitness app started on installs, then moved to registration once it exceeded 50 a week, then to first workout completed, and finally to subscription. Each step took roughly six weeks to accumulate volume. Over five months cost per subscriber fell from 78 to 31. Nothing about the app or the creative changed. Only the signal the system was chasing."
  },
  steps: [
    "Map the ladder from install to your most valuable event.",
    "Measure the weekly volume of each event.",
    "Optimise toward the deepest event with about 50 weekly occurrences.",
    "Identify the earliest event that reliably predicts value.",
    "Send purchase and subscription values for value optimisation.",
    "Consider separate campaigns by platform because measurement differs."
  ],
  mistakes: [
    "Optimising toward an event with too little volume, which prevents learning.",
    "Waiting for the most valuable event when an earlier predictive one exists.",
    "Ignoring the measurement difference between Apple and Android."
  ],
  words: [
    { t: "Event ladder", d: "The sequence of events from install to most valuable action." },
    { t: "Predictive event", d: "An early action that reliably indicates eventual value." },
    { t: "Feedback delay", d: "The time between the click and the valuable event occurring." },
    { t: "Platform separation", d: "Running separate campaigns for Apple and Android because measurement differs." }
  ],
  takeaways: [
    "Climb the ladder as each event reaches about 50 per week.",
    "Prefer the earliest event that reliably predicts value.",
    "Send values for purchases and subscriptions where possible.",
    "Consider separate campaigns by platform because measurement differs."
  ],
  selfCheck: [
    "I know the weekly volume of each event on my ladder.",
    "I optimise toward the deepest event with sufficient volume.",
    "I have identified an early predictive event."
  ],
  quiz: [
    { q: "What is the practical response to slow feedback in apps?", options: ["Wait longer", "Optimise toward the earliest event that reliably predicts value", "Increase the budget"], a: 1, why: "It gives similar quality with much faster learning." },
    { q: "When should you climb to a deeper event?", options: ["Immediately", "When it reaches roughly 50 occurrences per week", "After a year"], a: 1, why: "Below that volume the system cannot learn reliably." },
    { q: "Why might you separate campaigns by platform?", options: ["Different creative sizes", "Measurement completeness differs between Apple and Android", "Different currencies"], a: 1, why: "Mixed measurement quality makes optimisation less reliable." }
  ],
  exercise: { task: "List your app events and their weekly volumes. Identify the deepest event above 50 per week and check whether you are currently optimising toward it." },
  challenge: { task: "Design an event optimisation plan: the full ladder with volumes, the predictive analysis identifying early value signals, the migration sequence with timing, the value optimisation setup, the platform separation decision, and the measurement proving each step improved quality." }
},

"6.26.6": {
  intro: "Mobile Measurement Partners are specialist companies that measure app activity independently. This lesson covers what they do and whether you need one.",
  plain: [
    "If you advertise your app on Meta, Google, TikTok and elsewhere, each platform will claim the installs it thinks it caused. Added together, they will claim more installs than you actually had.",
    "A measurement partner is an independent referee. All the platforms report to it, it applies one consistent set of rules, and it tells you who genuinely produced what.",
    "For a business advertising on one platform, this is unnecessary. For a business advertising on four, it is close to essential."
  ],
  idea: [
    "A measurement partner sits between your app and the advertising platforms. Your app sends events to the partner, and the partner distributes attributed results back to each platform while giving you a single unified view.",
    "The main benefits are three. Independent attribution across platforms, so you can compare fairly. Fraud detection, which matters in app advertising where install fraud is a genuine and substantial problem. And unified reporting, so you have one source of truth rather than four conflicting ones.",
    "Install fraud deserves specific mention because it is far more common in app advertising than in other channels. Techniques exist to falsely claim credit for organic installs, and to generate fake installs entirely. Measurement partners specialise in detecting this. Advertising only on major platforms reduces but does not eliminate the risk.",
    "The costs are a monthly fee, usually scaling with volume, and implementation work in your app. For small apps advertising on one platform, this is not worthwhile. The usual threshold is advertising on three or more platforms, or spending enough that a few percent of misattribution matters in money terms.",
    "One important practical point: if you use a partner, the integration must be configured correctly for Meta, including passing the right events and respecting attribution settings. A badly configured partner integration produces worse data than no partner at all."
  ],
  example: {
    title: "Four platforms, one truth",
    body: "An app advertised on four platforms, each claiming installs. Added together the platforms claimed 34,000 installs in a month against 21,000 actual. After implementing a measurement partner, the unified view showed one platform had been claiming credit for installs that another had genuinely produced. Reallocating budget according to the independent measurement improved cost per paying user by 28 percent."
  },
  steps: [
    "Count how many platforms you advertise your app on.",
    "If three or more, evaluate measurement partners.",
    "Compare the platforms' claimed installs against your actual total.",
    "Implement the partner with correct Meta configuration.",
    "Verify events flow correctly after implementation.",
    "Use the unified view for budget allocation between platforms."
  ],
  mistakes: [
    "Adding up installs claimed by different platforms and believing the total.",
    "Implementing a partner without configuring the Meta integration correctly.",
    "Paying for a partner while advertising on only one platform."
  ],
  words: [
    { t: "Mobile Measurement Partner", d: "An independent company measuring app activity across advertising platforms." },
    { t: "Independent attribution", d: "One consistent set of rules applied across all platforms." },
    { t: "Install fraud", d: "Falsely claiming credit for installs, or generating fake ones." },
    { t: "Unified view", d: "A single source of truth rather than several conflicting platform reports." }
  ],
  takeaways: [
    "Platforms each claim credit, so their totals exceed reality.",
    "A measurement partner applies one consistent rule across all of them.",
    "Install fraud is a genuine problem in app advertising.",
    "Worth it from roughly three platforms upward, not before."
  ],
  selfCheck: [
    "I know how many platforms claim my installs.",
    "I have compared claimed totals against actual installs.",
    "My partner integration, if any, is correctly configured for Meta."
  ],
  quiz: [
    { q: "What problem does a measurement partner solve?", options: ["Slow app performance", "Each platform claiming credit under its own rules, so totals exceed reality", "High install costs"], a: 1, why: "Independent attribution allows fair comparison between platforms." },
    { q: "When is a partner worthwhile?", options: ["Always", "From roughly three advertising platforms upward", "Only for games"], a: 1, why: "With one platform there is nothing to reconcile." },
    { q: "What is unusually common in app advertising?", options: ["Slow approval", "Install fraud", "Currency errors"], a: 1, why: "Fake and falsely claimed installs are a genuine and substantial problem." }
  ],
  exercise: { task: "Add up the installs claimed by every platform you advertise on last month and compare against your actual install count from the app stores. Write down the difference." },
  challenge: { task: "Produce a measurement partner evaluation: the platforms you advertise on, the current attribution conflict measured in installs and money, the partner options with costs, the implementation requirements, the Meta configuration specification, and the expected benefit." }
},

"6.26.7": {
  intro: "App attribution decides which advertisement gets credit for an install or an in-app purchase. This lesson covers how it differs from website attribution.",
  plain: [
    "Website attribution follows a person from click to purchase using information in their browser. App attribution cannot do that, because the app store sits in the middle and breaks the chain.",
    "So app attribution uses different methods, and on Apple devices in particular it works quite differently and much less precisely than most people expect."
  ],
  idea: [
    "On Android, attribution generally works through referrer information passed from the store to the app, which is reasonably reliable.",
    "On Apple devices, the framework is different. Apple provides a system that reports conversions in an aggregated, delayed and limited way. The consequences are that you receive less detail, you receive it later, and some breakdowns are unavailable. The number of distinct conversion values you can report is limited, so you must choose carefully what to measure.",
    "This means app campaigns on Apple devices need different expectations: fewer reported conversions, delayed reporting of up to a few days, and limited breakdowns. Judging Apple campaign performance on the same day is not possible in the way it is elsewhere.",
    "The practical approach is to configure your conversion values deliberately, choosing the small number of outcomes that matter most, in the same spirit as the eight event configuration for websites. Then set reporting expectations accordingly and compare Apple and Android separately rather than as one blended figure.",
    "Finally, verify against your own app analytics. Your own systems know exactly how many people registered and purchased. Meta's reported figures for Apple users will be lower, and the gap should be measured rather than assumed to be a fault."
  ],
  example: {
    title: "Two platforms, two realities",
    body: "An app compared its platforms. Android reported 1,240 registrations against 1,290 recorded in their own analytics, a small and expected gap. Apple reported 410 against 980 recorded internally. Neither figure was wrong. The Apple gap reflected the privacy framework, and treating the two platforms as one blended number had been making their overall performance look far worse than it was."
  },
  steps: [
    "Understand that Apple and Android attribution work differently.",
    "Configure your Apple conversion values deliberately and sparingly.",
    "Expect delayed and less detailed Apple reporting.",
    "Report the two platforms separately, never blended.",
    "Verify both against your own app analytics.",
    "Measure the gap on each platform and track it over time."
  ],
  mistakes: [
    "Blending Apple and Android figures, which distorts both.",
    "Judging Apple campaigns on same day data.",
    "Assuming the Apple reporting gap indicates a technical fault."
  ],
  words: [
    { t: "Referrer information", d: "Data passed from the app store to the app, used for attribution on Android." },
    { t: "Aggregated reporting", d: "Conversions reported in grouped form without individual detail." },
    { t: "Conversion value", d: "A limited set of outcome codes you can report on Apple devices." },
    { t: "Platform gap", d: "The difference between reported and actual conversions on each platform." }
  ],
  takeaways: [
    "Apple and Android attribution work differently and cannot be blended.",
    "Apple reporting is aggregated, delayed and limited in detail.",
    "Configure your Apple conversion values deliberately.",
    "Verify both platforms against your own app analytics."
  ],
  selfCheck: [
    "I report Apple and Android separately.",
    "My Apple conversion values are configured deliberately.",
    "I know the reporting gap on each platform."
  ],
  quiz: [
    { q: "Why can Apple and Android figures not be blended?", options: ["Different currencies", "The attribution frameworks differ, so the numbers mean different things", "Different time zones"], a: 1, why: "Blending distorts both platforms' apparent performance." },
    { q: "What should you expect from Apple reporting?", options: ["More detail than Android", "Aggregated, delayed and less detailed reporting", "Identical reporting"], a: 1, why: "The privacy framework limits what can be reported." },
    { q: "How should you verify app attribution?", options: ["Trust the platform figures", "Compare against your own app analytics on each platform", "Ask Meta support"], a: 1, why: "Your own systems know the true figures." }
  ],
  exercise: { task: "Compare Meta's reported registrations against your own app analytics, separately for Apple and Android. Calculate the gap on each platform and write both down." },
  challenge: { task: "Build an app attribution framework: the platform specific methods, the conversion value configuration with reasoning, the reporting expectations by platform, the internal verification process, the gap tracking, and the guidance for interpreting each platform's figures." }
},

"6.26.8": {
  intro: "App retargeting brings back people who installed but drifted away. This lesson covers doing it at scale.",
  plain: [
    "Most apps lose the large majority of their users within the first week. Those people are not gone, they simply stopped opening the app.",
    "Retargeting is reaching them again. It is usually much cheaper than acquiring new users, and most app businesses do very little of it."
  ],
  idea: [
    "The audiences worth building are defined by behaviour and recency. Installed but never opened, within seven days. Opened once and stopped. Was active and lapsed within 30 days. Was active and lapsed beyond 30 days. Previously purchased and stopped.",
    "Each needs a different approach. Someone who never opened the app needs a reason to try it, usually a reminder of the value they downloaded it for. Someone who was active and stopped needs a reason to return, often new content, a new feature, or something they left unfinished.",
    "Frequency control matters more here than almost anywhere. These people already have your app and already made a decision to stop using it. Repeated advertising to them becomes irritating quickly, and irritation leads to uninstalls, which is a permanent loss rather than a temporary one.",
    "The measurement question is whether returned users have lasting value or open once and stop again. A returning user who opens the app and vanishes again has cost you money for nothing. Measure retention of returned users specifically, not just the return itself.",
    "Finally, some lapsed users are lapsed for good reasons: the app did not suit them, or they no longer need it. Beyond a certain point, retargeting them is spending money on people who correctly decided your app was not for them."
  ],
  example: {
    title: "Returned but not retained",
    body: "An app ran retargeting to lapsed users and reported strong results: 12,000 returning opens at low cost. Deeper analysis showed 84 percent of those users opened once and never returned. The genuinely reactivated users numbered under 2,000, making the real cost per reactivated user six times the reported figure. They narrowed to users lapsed under 14 days, where reactivation held far better, and cost per genuinely returned user halved."
  },
  steps: [
    "Build audiences by behaviour and recency.",
    "Write a different message for each behaviour group.",
    "Set frequency limits to avoid driving uninstalls.",
    "Use deep linking to the relevant screen.",
    "Measure retention of returned users, not just returns.",
    "Stop retargeting users beyond the point where reactivation holds."
  ],
  mistakes: [
    "Advertising repeatedly to lapsed users, which causes uninstalls.",
    "Counting returns without checking whether returned users stayed.",
    "Retargeting very old lapsed users who have genuinely moved on."
  ],
  words: [
    { t: "Lapsed user", d: "Someone who used the app and stopped." },
    { t: "Reactivation", d: "A lapsed user returning and continuing to use the app." },
    { t: "Uninstall risk", d: "The danger that excessive advertising causes permanent loss." },
    { t: "Return retention", d: "Whether users who came back stayed."}
  ],
  takeaways: [
    "Build audiences by behaviour and recency, each with its own message.",
    "Control frequency. Irritated lapsed users uninstall permanently.",
    "Measure whether returned users stayed, not just that they returned.",
    "Very old lapsed users are usually not worth pursuing."
  ],
  selfCheck: [
    "My retargeting audiences are split by behaviour and recency.",
    "I have frequency limits in place.",
    "I measure retention of returned users."
  ],
  quiz: [
    { q: "What is the risk of excessive retargeting to lapsed users?", options: ["Higher costs only", "Uninstalls, which are a permanent loss", "Nothing"], a: 1, why: "Irritating someone who already stopped using the app removes them entirely." },
    { q: "What should be measured beyond returns?", options: ["Impressions", "Whether returned users stayed and kept using the app", "Frequency"], a: 1, why: "A user who opens once and vanishes cost money for nothing." },
    { q: "Which lapsed users are usually most worth pursuing?", options: ["Those lapsed over a year", "Those lapsed recently, within a couple of weeks", "Those who never installed"], a: 1, why: "Recent lapse means the intent that caused the install may still exist." }
  ],
  exercise: { task: "Build one audience of users who lapsed in the last 14 days. Run a small retargeting campaign and measure not just returns but how many of those returners used the app again the following week." },
  challenge: { task: "Design an app retargeting programme: every behavioural audience with recency bands, the message and deep link for each, the frequency caps, the uninstall risk monitoring, the retention measurement of returned users, and the cut-off point where retargeting stops." }
},

"6.26.9": {
  intro: "This final lesson of Level 6 covers value optimisation for apps, which is where app advertising becomes genuinely sophisticated.",
  plain: [
    "In most apps, a small number of users produce most of the revenue. In games this is extreme: a few percent of players may produce the majority of income.",
    "A system optimising for users finds many users. A system optimising for value finds the few who matter. For apps with this pattern, the difference is enormous."
  ],
  idea: [
    "Value optimisation requires sending the actual revenue each user produces, which for apps means in-app purchases, subscriptions and any other spending, sent as events with values.",
    "The complication specific to apps is timing. A user's value accumulates over months. A player who spends 4 dollars in week one might spend 400 over a year. Sending only the first purchase teaches the system to find small spenders.",
    "There are two approaches. Send every purchase as it happens, which accumulates the true picture over time but means the system learns slowly. Or send a predicted lifetime value early, based on early behaviour, which teaches faster but depends entirely on the quality of your prediction.",
    "Predicted value is powerful and dangerous in equal measure. A good prediction model transforms performance. A poor one confidently directs the system toward the wrong people. It should only be attempted where you have enough historical data to validate the prediction against actual outcomes.",
    "The measurement discipline is to compare predicted against actual regularly. If your model predicted these users would be worth 40 each and they turned out to be worth 12, the model is teaching the system something false and must be corrected before it does further damage."
  ],
  example: {
    title: "Predicting value early",
    body: "A game analysed a year of player data and found that spending in the first three days predicted 90 day value with reasonable accuracy. They built a predicted value model and sent it as an early event. Cost per install rose from 1.90 to 6.40 and revenue per installed user rose from 2.30 to 11.80. They were buying far fewer players and far more revenue."
  },
  steps: [
    "Measure how unevenly value is distributed across your users.",
    "Send all purchase and subscription events with real values.",
    "Analyse whether early behaviour predicts long term value.",
    "If it does reliably, build and validate a predicted value model.",
    "Compare predicted against actual value monthly.",
    "Correct the model whenever the gap widens."
  ],
  mistakes: [
    "Sending only first purchases, which finds small spenders.",
    "Using a predicted value model without validating it against actual outcomes.",
    "Never checking whether the prediction remains accurate as the app changes."
  ],
  words: [
    { t: "Value distribution", d: "How unevenly revenue is spread across users." },
    { t: "Lifetime value", d: "Total revenue a user produces over their whole relationship." },
    { t: "Predicted value", d: "An early estimate of eventual value based on initial behaviour." },
    { t: "Model validation", d: "Comparing predictions against actual outcomes to confirm accuracy." }
  ],
  takeaways: [
    "In most apps a small proportion of users produce most revenue.",
    "Sending only first purchases teaches the system to find small spenders.",
    "Predicted value is powerful when validated and harmful when not.",
    "Compare predicted against actual value every month."
  ],
  selfCheck: [
    "I know how unevenly value is distributed in my app.",
    "I send real purchase values, not just purchase counts.",
    "Any prediction model I use is validated against actual outcomes."
  ],
  quiz: [
    { q: "What is the problem with sending only first purchases?", options: ["It is technically difficult", "It teaches the system to find people who make small first purchases", "It is not permitted"], a: 1, why: "The most valuable users may not be the ones who spend first." },
    { q: "When is a predicted value model appropriate?", options: ["Always", "When you have enough historical data to validate the prediction against actual outcomes", "Never"], a: 1, why: "An unvalidated model confidently finds the wrong users." },
    { q: "What must be checked monthly?", options: ["The budget", "Whether predicted values match actual outcomes", "The creative"], a: 1, why: "A drifting model damages performance while appearing to work." }
  ],
  exercise: { task: "Calculate what proportion of your app revenue comes from your top 5 percent of users. If it is above half, value optimisation is likely to be your largest available improvement." },
  challenge: { task: "Design a value optimisation system: the value distribution analysis, the event and value sending architecture, the early behaviour analysis, the predicted value model with its validation method, the monthly accuracy review, and the correction process when predictions drift." }
}

});
