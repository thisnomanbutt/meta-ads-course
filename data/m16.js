/* Module 16 - Pixel and Events (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"5.16.1": {
  intro: "The Meta Pixel is a small piece of code you put on your website. It tells Meta what people do after they click your ad. Without it, Meta is guessing. With it, Meta can learn.",
  plain: [
    "Imagine you own a shop. You pay someone to hand out flyers in the street. At the end of the day you want to know one thing: did anyone who took a flyer actually come in and buy something?",
    "Without that information, you cannot tell if the flyers worked. You would just keep paying and hoping.",
    "The pixel is the person standing at your shop door, quietly noting: this customer came from a flyer, and they bought a jacket for 80 dollars. Then they tell the flyer team, so next time the flyers go to the right streets.",
    "That is all the pixel does. It watches what happens on your website and reports it back to Meta."
  ],
  idea: [
    "The pixel is a short piece of code. Your web developer puts it on every page of your website. It is invisible to visitors.",
    "When someone visits your site, the pixel notices. When they view a product, add something to a basket, or buy, the pixel notices those too, if it has been set up to do so. It sends this information back to Meta.",
    "Meta uses this information in three ways, and all three matter. First, reporting: it can tell you that your ad produced 14 sales, not just 300 clicks. Second, optimisation: it learns what kind of person buys from you, and looks for more people like them. Third, audiences: it lets you build groups such as people who visited but did not buy, so you can advertise to them again.",
    "The third point is worth repeating because people miss it. The pixel is not only a measuring tool. It is the thing that makes Meta's system intelligent about your business. An account with no pixel is running blind, and it will always cost more than one that can see."
  ],
  example: {
    title: "The same campaign, with and without",
    body: "A shop ran ads for one month with no pixel. Meta could see 2,100 clicks. It could not see that 31 of those people bought. So Meta had no way to learn which kind of person buys, and simply looked for people who click. The next month they installed the pixel and changed nothing else. Meta could now see the 31 buyers, learned what they had in common, and started finding more people like them. By week three, sales per month had risen to 58 on the same budget."
  },
  steps: [
    "Go to Events Manager inside your Meta business account.",
    "Create a pixel and give it a clear name, such as Main Website Pixel.",
    "Copy the code, or use the direct connection option if your website platform offers one.",
    "Place the code on every page of your website, not just the home page.",
    "Test it using the Meta Pixel Helper browser extension, which shows whether it is firing.",
    "Check in Events Manager that activity is arriving within a few hours."
  ],
  mistakes: [
    "Installing the pixel on only the home page, so nothing after that is seen.",
    "Creating several pixels by accident, which splits your data into separate piles that cannot be combined.",
    "Assuming the pixel is working because it was installed once, without ever checking it again."
  ],
  words: [
    { t: "Pixel", d: "A small piece of code on your website that reports visitor activity to Meta." },
    { t: "Events Manager", d: "The section of Meta where you create pixels and see the activity they report." },
    { t: "Fire", d: "When the pixel notices something and sends the information. People say the pixel fired." },
    { t: "Event", d: "One action that gets reported, such as a page view or a purchase." },
    { t: "Pixel Helper", d: "A free browser extension that shows you whether a pixel is working on a page." }
  ],
  takeaways: [
    "The pixel is code on your website that tells Meta what people do after clicking.",
    "It does three jobs: reporting, teaching the system, and building audiences.",
    "It must be on every page, not only the home page.",
    "One pixel per website. Several pixels split your data and weaken everything."
  ],
  selfCheck: [
    "I know whether my website has a pixel installed right now.",
    "I can explain the three jobs the pixel does.",
    "I know how to check whether the pixel is working."
  ],
  quiz: [
    { q: "What does the pixel actually do?", options: ["It makes your ads cheaper automatically", "It reports what people do on your website back to Meta", "It designs your ads"], a: 1, why: "It is a reporting tool. Everything else it enables comes from that reporting." },
    { q: "Where should the pixel be installed?", options: ["Only the home page", "On every page of the website", "Only the checkout page"], a: 1, why: "It can only report what happens on pages where it exists." },
    { q: "Why is having several pixels a problem?", options: ["It slows the website", "Your data is split into separate piles that cannot be combined", "Meta charges per pixel"], a: 1, why: "Split data means weaker learning and smaller audiences." }
  ],
  exercise: { task: "Install the free Meta Pixel Helper extension in your browser. Visit your own website and check whether a pixel is present, and whether it fires on the home page, a product or service page, and the thank you page after an enquiry or purchase. Write down what you find on each." },
  challenge: { task: "Produce a pixel status report for your business: which pixel is live, who owns it, which pages it appears on, which pages are missing it, whether any duplicate pixels exist, and a written plan to fix every gap you found." }
},

"5.16.2": {
  intro: "Installing the pixel correctly is a one time job that affects everything afterwards. This lesson walks through the ways to do it and how to check your work.",
  plain: [
    "Putting a pixel on a website is like putting a bell above a shop door. Every time someone walks through, the bell rings and you know.",
    "There are three ways to hang the bell. You can do it yourself, if your shop door is simple. You can ask the builder who made the door, which is your web developer. Or your door may come with a bell already built in, which is what modern website platforms offer.",
    "All three end up with a ringing bell. The only question is which is easiest for your particular door."
  ],
  idea: [
    "Method one is the direct connection. Platforms such as Shopify, WordPress, Wix and Squarespace have a built in option where you enter your pixel number and it is installed for you. This is the easiest method and the least likely to go wrong. Use it if it exists.",
    "Method two is manual installation. You copy the pixel code and paste it into the head section of your website, on every page. This is what a developer does. The head section is a part of the page code that loads before anything visible.",
    "Method three is a tag manager, most commonly Google Tag Manager. This is a tool that holds all your tracking codes in one place, so you can add or change them without touching the website itself. It is the best choice for larger sites, because you can make changes without a developer each time.",
    "Whichever method you use, the installation is not finished until you have tested it. Installation and working are two different things, and the gap between them has cost many businesses months of bad data."
  ],
  example: {
    title: "Installed but not working",
    body: "A company installed the pixel through their platform and started advertising. Three months later they noticed no purchases were being recorded. The pixel was on every page of the main site, but their checkout ran on a different website address owned by their payment provider, where the pixel had never been placed. Every visit was recorded and no purchase ever was. Three months of optimisation had been aimed at page views."
  },
  steps: [
    "Find your pixel identification number in Events Manager.",
    "Check whether your website platform offers a direct connection option, and use it if so.",
    "If not, give the code to your developer and ask for it in the head section of every page.",
    "If you use several tracking tools, consider a tag manager instead.",
    "Test with the Pixel Helper on at least five different pages, including your checkout or thank you page.",
    "Check Events Manager after 24 hours to confirm real activity is arriving."
  ],
  mistakes: [
    "Forgetting pages that sit on a different web address, such as a booking system or payment page.",
    "Placing the code in the wrong part of the page, so it loads late or not at all.",
    "Declaring the job finished without testing."
  ],
  words: [
    { t: "Head section", d: "The part of a web page code that loads first, before anything visible appears." },
    { t: "Direct connection", d: "A built in option in your website platform that installs the pixel for you." },
    { t: "Tag manager", d: "A tool that holds all your tracking codes in one place, so they can be changed without editing the website." },
    { t: "Pixel ID", d: "The number that identifies your specific pixel." },
    { t: "Subdomain", d: "A separate part of a web address, such as shop.example.com, which may need its own setup." }
  ],
  takeaways: [
    "Use your platform's built in option if it exists. It is the safest method.",
    "A tag manager is better for larger sites with several tracking tools.",
    "Pages on a different web address, such as a payment page, are the most commonly missed.",
    "Installation is not finished until you have tested it on real pages."
  ],
  selfCheck: [
    "I know which installation method my site uses.",
    "I have checked pages that sit on a different web address.",
    "I have confirmed activity arriving in Events Manager."
  ],
  quiz: [
    { q: "Which pages are most commonly missed?", options: ["Blog pages", "Pages on a different web address, such as a booking or payment system", "The home page"], a: 1, why: "People assume the whole journey is on one site, and the most valuable page often is not." },
    { q: "What is a tag manager?", options: ["A type of pixel", "A tool holding all your tracking codes in one place, editable without touching the website", "A reporting tool"], a: 1, why: "It separates tracking changes from website changes, which saves developer time." },
    { q: "When is the installation finished?", options: ["When the code is pasted in", "When you have tested it on real pages and seen activity arrive", "When the developer says so"], a: 1, why: "Installed and working are different things, and the gap is expensive." }
  ],
  exercise: { task: "Walk through your entire customer journey on your own website: home page, product or service page, form or basket, and the final confirmation page. Check the Pixel Helper on each step. Write down the exact web address of any page where the pixel is missing." },
  challenge: { task: "Write an installation and verification document for your website: the method used, every page type that must be covered, the separate web addresses involved, the test procedure, who performs it, and how often it is re-checked." }
},

"5.16.3": {
  intro: "A standard event is one of Meta's ready made action names, such as Purchase or Lead. Using them correctly is what turns a pixel from a visitor counter into a business tool.",
  plain: [
    "Think of the pixel as a person taking notes in your shop. Without instructions, all they can write is: someone came in.",
    "Standard events are a fixed list of note types that Meta already understands. Rather than the note saying something happened, it says a purchase happened, worth 80 dollars.",
    "The reason the list is fixed is so that everyone uses the same words. If one shop writes bought and another writes sale and another writes transaction, nobody can compare anything. Meta gives everyone the same vocabulary."
  ],
  idea: [
    "There are around seventeen standard events. The ones most businesses need are: PageView, which happens automatically on every page. ViewContent, when someone looks at a specific product or service. AddToCart. InitiateCheckout, when they begin the payment process. Purchase, when they buy. Lead, when they submit an enquiry. CompleteRegistration, when they create an account. And Contact, when they call or message.",
    "Two of these deserve special attention. Purchase should always carry a value and a currency, so Meta knows the sale was 80 dollars and not 8. Lead should be placed only on genuine enquiry submissions, not on button clicks.",
    "The reason standard events matter more than custom ones is that Meta already knows what they mean. It has learned from billions of purchases across millions of businesses what a purchase looks like. When your pixel reports a standard Purchase event, all of that understanding is available to your account. A custom event named my_sale has none of it.",
    "So the rule is: always use a standard event when one fits. Only create your own when nothing on the list describes what happened."
  ],
  example: {
    title: "Why the name matters",
    body: "A business tracked their sales with a custom event called order_complete. Everything worked, reports were accurate, and optimisation was mediocre for eight months. They changed it to the standard Purchase event with a value attached, and nothing else. Within three weeks cost per sale fell by 29 percent, because Meta could finally apply what it already knew about purchase behaviour to their account."
  },
  steps: [
    "List every meaningful action on your website.",
    "Match each one to a standard event name from Meta's list.",
    "Place each event on the page or button where that action genuinely completes.",
    "Add value and currency to Purchase, and to any event with a money amount.",
    "Test each event by performing the action yourself and watching Events Manager.",
    "Only create a custom event where no standard event fits."
  ],
  mistakes: [
    "Using custom names when a standard event exists, which throws away Meta's existing knowledge.",
    "Firing Purchase on the checkout page instead of the confirmation page, which counts people who never paid.",
    "Sending Purchase without a value, so Meta cannot tell a 5 dollar sale from a 5,000 dollar one."
  ],
  words: [
    { t: "Standard event", d: "One of Meta's ready made action names that the system already understands." },
    { t: "Custom event", d: "An action name you invent yourself, which Meta has no prior knowledge of." },
    { t: "Value", d: "The money amount attached to an event." },
    { t: "Currency", d: "Which money the value is in, such as USD. Required whenever a value is sent." },
    { t: "Confirmation page", d: "The page shown after a purchase completes, sometimes called the thank you page." }
  ],
  takeaways: [
    "Always use a standard event when one fits your action.",
    "Meta already understands standard events, and that knowledge helps your account.",
    "Purchase must carry a value and a currency.",
    "Fire Purchase on the confirmation page, never on the checkout page."
  ],
  selfCheck: [
    "Every important action on my site uses a standard event.",
    "My Purchase event carries a value and a currency.",
    "My Purchase fires only after payment completes."
  ],
  quiz: [
    { q: "Why prefer standard events over custom ones?", options: ["They are easier to type", "Meta already understands them and can apply what it has learned elsewhere", "They are cheaper"], a: 1, why: "A standard Purchase event connects to Meta's existing understanding of purchase behaviour." },
    { q: "Where should the Purchase event fire?", options: ["When the checkout page opens", "On the confirmation page after payment completes", "When Add to Cart is clicked"], a: 1, why: "Firing earlier counts people who never actually paid." },
    { q: "What must always accompany a Purchase event?", options: ["A product photograph", "A value and a currency", "The customer's name"], a: 1, why: "Without them, Meta cannot tell a small sale from a large one." }
  ],
  exercise: { task: "List every action a visitor can complete on your website. Next to each, write the standard event name that fits. Then check in Events Manager which of those are actually being received today, and mark the gaps." },
  challenge: { task: "Design a complete event plan for your website: every action, its standard event name, the exact page or trigger, the value where applicable, the parameters attached, and a testing procedure confirming each one fires exactly once at the right moment." }
},

"5.16.4": {
  intro: "A custom event is an action you define yourself, for things Meta's ready made list does not cover. This lesson explains when to create one and how to keep it useful.",
  plain: [
    "Standard events are like the printed forms at a government office. There is a form for a passport, a form for a driving licence, and the clerk knows exactly what to do with each one.",
    "A custom event is a blank sheet of paper. You can write anything on it, which is useful when your situation does not fit any printed form. But the clerk has never seen it before, so it takes longer to be useful, and you must explain it.",
    "Use the printed form whenever one exists. Use blank paper only when nothing fits."
  ],
  idea: [
    "A custom event is one you name yourself. Examples where this is genuinely needed: a user finishing a video course lesson, a patient completing a symptom questionnaire, a visitor downloading a specific technical document, or someone using a price calculator.",
    "The trade off is real. Meta has no prior understanding of your custom event, so optimising toward it needs more data before it becomes reliable. Standard events arrive with borrowed knowledge. Custom events start from nothing.",
    "There is a middle path many people miss. You can send a standard event and attach extra detail to it, rather than inventing a new event. For example, send the standard Lead event but attach a parameter saying which service the enquiry was about. You keep Meta's understanding of leads and gain your own detail.",
    "If you do create custom events, name them clearly and consistently, in a way another person could understand without explanation. Names like event_2 or test_final will confuse whoever inherits the account, including you in six months."
  ],
  example: {
    title: "The middle path",
    body: "A clinic wanted to separate enquiries for three different treatments. Their first approach was three custom events with different names. Optimisation was slow and each event had too little data. They changed to a single standard Lead event with a parameter naming the treatment. Meta could now optimise using its understanding of leads generally, while the clinic could still report by treatment. Cost per enquiry fell and the reporting stayed exactly as detailed."
  },
  steps: [
    "Check the standard event list carefully before creating anything custom.",
    "Ask whether a standard event with an extra parameter would work instead.",
    "If a custom event is genuinely needed, name it clearly in plain words.",
    "Keep the naming consistent across your whole site.",
    "Document what each custom event means and where it fires.",
    "Check the volume. A custom event happening five times a week cannot be optimised toward."
  ],
  mistakes: [
    "Creating custom events for actions a standard event already covers.",
    "Naming events in ways nobody else can interpret.",
    "Optimising toward a custom event that happens too rarely to learn from."
  ],
  words: [
    { t: "Custom event", d: "An action you name yourself, outside Meta's ready made list." },
    { t: "Parameter", d: "Extra detail attached to an event, such as which service or product it concerned." },
    { t: "Event volume", d: "How often an event happens, which decides whether it can be optimised toward." },
    { t: "Documentation", d: "A written record of what each event means and where it fires." }
  ],
  takeaways: [
    "Use a standard event with a parameter before inventing a custom event.",
    "Custom events start with no borrowed knowledge, so they learn more slowly.",
    "Name custom events so another person could understand them without help.",
    "A rare event cannot be optimised toward, no matter how meaningful it is."
  ],
  selfCheck: [
    "I have checked whether a standard event covers each of my custom events.",
    "My event names are understandable to someone else.",
    "I know the weekly volume of each event I optimise toward."
  ],
  quiz: [
    { q: "What should you try before creating a custom event?", options: ["Nothing, custom is always better", "A standard event with an extra parameter attached", "A second pixel"], a: 1, why: "It keeps Meta's existing understanding while adding your own detail." },
    { q: "Why do custom events learn more slowly?", options: ["They send less data", "Meta has no prior understanding of what they mean", "They are lower priority"], a: 1, why: "Standard events arrive with knowledge borrowed from millions of other businesses." },
    { q: "A custom event happens four times a week. What is the problem?", options: ["The name is wrong", "There is far too little volume to optimise toward it", "It costs more"], a: 1, why: "Optimisation needs roughly 50 events a week to become reliable." }
  ],
  exercise: { task: "List every custom event on your website. For each one, write whether a standard event plus a parameter could replace it, and note its weekly volume. Mark any that are too rare to optimise toward." },
  challenge: { task: "Audit and redesign your event structure: every current event, whether it should be standard or custom, the parameters that replace unnecessary custom events, the naming convention, the documentation, and a migration plan that avoids losing historical data." }
},

"5.16.5": {
  intro: "Parameters are extra details attached to an event. They turn a purchase happened into a purchase of a blue jacket, size medium, worth 80 dollars, from a returning customer.",
  plain: [
    "An event without parameters is like a receipt that says only: something was sold.",
    "Parameters are the rest of the receipt. What was sold, how much it cost, what currency, how many items, which category.",
    "You would never accept a receipt that just said something was sold. But many businesses send Meta exactly that, then wonder why the reporting is not useful."
  ],
  idea: [
    "The most important parameters are value and currency. Value is the amount of money. Currency says which money it is. Without both, Meta cannot compare your sales or optimise toward revenue.",
    "Other useful parameters include content_name, which is the product or service name. content_ids, which is the product code, needed for catalog and dynamic product ads. content_type, which says whether it is a product or a product group. content_category, for grouping. And num_items, for how many were bought.",
    "Parameters make three things possible that are otherwise impossible. Value based bidding, which needs values. Dynamic product ads, which need product codes. And detailed reporting, which needs categories and names.",
    "One important rule, and it is not optional: never send personal or sensitive information in parameters. No names, no email addresses in plain text, no medical conditions, no financial details about an individual. This is both a Meta policy requirement and, in many countries, a legal one. Parameters describe the transaction, not the person."
  ],
  example: {
    title: "What parameters unlock",
    body: "A store sent Purchase events with no parameters for a year. Reports showed 400 purchases and nothing more. They added value, currency, content_ids and content_category. Immediately they could see that one category produced 61 percent of revenue from 22 percent of purchases, they could switch to value based bidding, and they could run dynamic product ads. None of that was new activity. It was the same purchases, finally described properly."
  },
  steps: [
    "Add value and currency to every event involving money.",
    "Add content_ids matching the product codes in your catalog.",
    "Add content_name and content_category for reporting.",
    "Check that the value sent is the amount after discounts, and decide consistently whether it includes tax.",
    "Test by making a real purchase and checking the parameters in Events Manager.",
    "Confirm that no personal or sensitive detail is being sent."
  ],
  mistakes: [
    "Sending a value before discounts, so reported revenue is higher than reality.",
    "Sending product codes that do not match the catalog, which breaks dynamic ads.",
    "Sending personal or sensitive information, which breaks policy and possibly the law."
  ],
  words: [
    { t: "Parameter", d: "Extra detail attached to an event." },
    { t: "value", d: "The money amount of the event." },
    { t: "currency", d: "Which money the value is in, such as USD." },
    { t: "content_ids", d: "The product codes, which must match your catalog exactly." },
    { t: "content_category", d: "The grouping a product belongs to, used for reporting." },
    { t: "Sensitive information", d: "Personal details such as health, finances or identity, which must never be sent." }
  ],
  takeaways: [
    "Value and currency are essential on any event involving money.",
    "Product codes must match your catalog exactly or dynamic ads break.",
    "Send the value after discounts, and be consistent about tax.",
    "Never send personal or sensitive information in parameters."
  ],
  selfCheck: [
    "My purchase events carry value and currency.",
    "My product codes match my catalog.",
    "I have confirmed no personal or sensitive data is being sent."
  ],
  quiz: [
    { q: "What must accompany any money value?", options: ["The customer's name", "The currency", "The product photograph"], a: 1, why: "Without currency the number is meaningless across markets." },
    { q: "Why must product codes match the catalog?", options: ["For faster loading", "Otherwise dynamic product ads cannot show the right products", "Meta requires it for billing"], a: 1, why: "The system matches events to catalog items using those codes." },
    { q: "Which must never be sent in a parameter?", options: ["Product category", "A person's health condition or identity details", "Number of items"], a: 1, why: "It breaks Meta policy and often data protection law." }
  ],
  exercise: { task: "Make a test purchase or enquiry on your own site and open Events Manager. Write down every parameter that arrived. Check the value is correct after discounts, and confirm nothing personal is included." },
  challenge: { task: "Create a parameter specification for your website: every event, every parameter it should carry, the exact source of each value, the rules on discounts and tax, the forbidden fields, and the review process confirming compliance." }
},

"5.16.6": {
  intro: "Event configuration means telling Meta which of your events matter most. This is required because of privacy rules on Apple devices, and it affects what you can measure.",
  plain: [
    "Imagine you can only send eight postcards a month, and each one can carry one piece of news. You have twenty things you could report. You must choose the eight that matter most, in order of importance.",
    "That is what event configuration is. Because of privacy rules, Meta can only reliably measure a limited number of your events for people on Apple devices, and only the single most important one per person.",
    "So you rank your events. If someone does three of them, only the highest ranked one gets counted for that person."
  ],
  idea: [
    "Since Apple introduced its privacy changes, Meta measures a maximum of eight events per website domain for people who declined tracking. You choose which eight, and in what order of priority.",
    "The rule that catches people out: for one person, only the highest priority event they completed is counted. If your order is Purchase first and ViewContent second, and someone views a product then buys, you see the purchase only. That is correct behaviour, not lost data.",
    "This means the order matters enormously. Put the events closest to money at the top. Purchase first for ecommerce. Lead first for enquiry businesses. Never put PageView near the top, because everyone triggers it and it would mask everything valuable beneath it.",
    "You configure this in Events Manager, under the aggregated event measurement settings. You must have verified your domain first, which was covered in Level 1. If your domain is not verified, you cannot set this, and someone else could control it."
  ],
  example: {
    title: "The order that hid the sales",
    body: "A store had ViewContent ranked first and Purchase fourth. For Apple users who declined tracking, almost every session recorded a ViewContent, so purchases were rarely counted. Their reports showed a fraction of real sales, and optimisation suffered because the system saw very few purchases. Moving Purchase to first position restored accurate reporting immediately. No tracking had been broken. The priority order had been wrong."
  },
  steps: [
    "Verify your domain first, if you have not already.",
    "Open Events Manager and find the aggregated event measurement settings.",
    "List your events in order of business importance, money first.",
    "Place Purchase or Lead at position one.",
    "Fill the remaining positions with events you genuinely report on.",
    "Wait 72 hours after changes, since reconfiguration takes time to take effect."
  ],
  mistakes: [
    "Ranking PageView or ViewContent above Purchase, which hides your most valuable events.",
    "Changing the configuration frequently, since each change causes a delay before measurement resumes properly.",
    "Not verifying the domain, which leaves you unable to control your own configuration."
  ],
  words: [
    { t: "Aggregated Event Measurement", d: "Meta's system for measuring events under Apple's privacy rules." },
    { t: "Event priority", d: "The order of importance you assign to your events." },
    { t: "Eight event limit", d: "The maximum number of events measurable per domain for people who declined tracking." },
    { t: "Domain verification", d: "Proving you own the website, which is required before setting priorities." }
  ],
  takeaways: [
    "You may configure eight events per domain, in priority order.",
    "Only the highest priority event a person completes is counted for them.",
    "Put money events at the top, never PageView.",
    "Domain verification is required first, and changes take about 72 hours."
  ],
  selfCheck: [
    "My domain is verified.",
    "My highest priority event is the one closest to money.",
    "I understand why only one event per person is counted."
  ],
  quiz: [
    { q: "How many events can be configured per domain?", options: ["Unlimited", "Eight", "Three"], a: 1, why: "Apple's privacy rules limit measurement to eight prioritised events." },
    { q: "A person views a product then buys. What is counted?", options: ["Both events", "Only the highest priority event, which should be the purchase", "Neither"], a: 1, why: "For affected users only one event per person is measured." },
    { q: "What must happen before you can configure priorities?", options: ["Spend a minimum amount", "Verify your domain", "Create a catalog"], a: 1, why: "Only the verified domain owner may control the configuration." }
  ],
  exercise: { task: "Open your aggregated event measurement settings and write down your current event order. Check whether your money event is in position one. If it is not, fix it and note the date so you can allow 72 hours before judging results." },
  challenge: { task: "Design your event priority configuration with reasoning: all eight positions, why each event earns its place, what you are deliberately choosing not to measure, and how the configuration would change if the business added a new revenue stream." }
},

"5.16.7": {
  intro: "Browser side tracking means the pixel runs in the visitor's web browser. This lesson explains how that works and why it has become less reliable over time.",
  plain: [
    "The pixel lives inside the visitor's browser, which is a place you do not control. It is like leaving your notebook in someone else's house. Most of the time it is fine. But the owner can lock the room, throw the notebook away, or refuse to let you in at all.",
    "Browsers have increasingly been doing exactly that, on purpose, to protect privacy. Ad blockers, privacy settings and browser makers all remove or limit tracking code.",
    "This is why the notes coming back are incomplete. Nothing is broken. The house rules changed."
  ],
  idea: [
    "When someone visits your page, their browser downloads and runs the pixel code. The pixel then sends information from their browser to Meta. This is browser side tracking, and it was the original way everything worked.",
    "Several things now interfere with it. Ad blockers stop the pixel from loading at all, and a significant share of people use them. Browsers such as Safari and Firefox limit tracking by default. Cookies, which are small files used to recognise a returning visitor, are deleted much sooner than they once were, often after seven days or less. And on Apple devices, people who decline tracking cannot be measured in the old way.",
    "The practical effect is under reporting. Your pixel shows fewer purchases than actually happened. Not because sales are missing, but because the report of them never arrived. Many businesses see 20 to 40 percent of conversions missing from browser data alone.",
    "This is not a problem you fix by reinstalling the pixel. It is a structural change in how the internet works, and the answer is to send information a second way, from your own server. That is the Conversions API, which is the whole of the next module."
  ],
  example: {
    title: "The gap between two records",
    body: "A store's own records showed 214 sales in a month. The Meta pixel reported 138. Nothing was broken. The difference was ad blockers, browser privacy limits and people who declined tracking. Because Meta could only see 138, it was learning from two thirds of the picture, and the reports understated the campaign's real performance by a third."
  },
  steps: [
    "Compare your own sales records against what the pixel reports for the same period.",
    "Calculate the percentage gap.",
    "Accept that some gap is normal and structural.",
    "Do not attempt to fix it by reinstalling the pixel.",
    "Plan to add server side tracking, covered in the next module.",
    "Adjust your expectations of reported numbers in the meantime."
  ],
  mistakes: [
    "Assuming a gap means the pixel is broken and reinstalling it repeatedly.",
    "Reporting Meta's numbers to management as complete truth.",
    "Ignoring the gap entirely and optimising toward partial data."
  ],
  words: [
    { t: "Browser side tracking", d: "Tracking that runs inside the visitor's web browser." },
    { t: "Cookie", d: "A small file stored in a browser used to recognise a returning visitor." },
    { t: "Ad blocker", d: "Software that prevents advertising and tracking code from loading." },
    { t: "Under reporting", d: "When fewer conversions are recorded than actually happened." },
    { t: "Structural change", d: "A permanent change in how something works, not a fault to be repaired." }
  ],
  takeaways: [
    "Browser tracking runs in a place you do not control.",
    "Ad blockers, privacy settings and short cookie lifetimes all reduce what arrives.",
    "A 20 to 40 percent gap is common and is not a fault.",
    "The answer is to also send data from your own server."
  ],
  selfCheck: [
    "I have compared my own records against pixel reported numbers.",
    "I know my current gap as a percentage.",
    "I understand why reinstalling the pixel does not fix it."
  ],
  quiz: [
    { q: "Your own records show more sales than the pixel reports. What is the likely cause?", options: ["The pixel is broken", "Normal under reporting from ad blockers and browser privacy limits", "Fraud"], a: 1, why: "A structural gap of this kind is expected in browser tracking today." },
    { q: "What is the correct response to that gap?", options: ["Reinstall the pixel repeatedly", "Add server side tracking alongside the pixel", "Stop advertising"], a: 1, why: "Sending data a second way recovers much of what browsers block." },
    { q: "Why do cookies matter less than they used to?", options: ["Websites stopped using them", "Browsers now delete them much sooner, often within seven days", "Meta stopped reading them"], a: 1, why: "Short lifetimes mean returning visitors are no longer recognised." }
  ],
  exercise: { task: "Compare one full month of your own sales or enquiry records against what Meta reported for the same period. Calculate the percentage difference and write it down as your current measurement gap." },
  challenge: { task: "Produce a measurement gap analysis: the comparison over three months, the gap by traffic source and device where visible, an estimate of how much it distorts your reported cost per result, and the business case for server side tracking." }
},

"5.16.8": {
  intro: "Event Match Quality is a score showing how well Meta can connect your events to real accounts. A low score quietly weakens everything, and most advertisers never look at it.",
  plain: [
    "When your pixel reports a purchase, Meta needs to work out which person made it, so it can learn from them.",
    "Think of it like returning a lost wallet. If the wallet contains a full name, address and phone number, returning it is easy. If it contains only a single initial, you have almost no chance.",
    "Event Match Quality is a score out of ten telling you how much identifying information your events carry. More information means Meta matches more events to real people, which means better learning and more accurate reporting."
  ],
  idea: [
    "Every event can carry customer information such as email address, phone number, first name, last name, city, state, postal code, country and date of birth. This is used only to match the event to an account, and it is scrambled before sending so the raw details are protected.",
    "Meta scores this from 0 to 10. Below about 4 is poor. Between 4 and 6 is workable. Above 6 is good. Above 8 is strong.",
    "The score matters because unmatched events are wasted. If Meta cannot tell which person bought, it cannot learn what that kind of person looks like, and it cannot credit your campaign properly. A low match score means you paid for a result the system cannot learn from.",
    "Improving it is usually straightforward: send more fields. Most businesses send only an email address when they already hold the phone number, name and city. Each extra field raises the chance of a match. Send everything you legitimately hold, always scrambled, and never sensitive categories such as health details."
  ],
  example: {
    title: "Five fields instead of one",
    body: "An account sent only email addresses with its purchase events and scored 3.8. They added phone number, first name, last name and city, all of which were already in their order system. The score rose to 7.9. Reported purchases rose by 22 percent, not because more people bought, but because more of the same purchases could now be matched and credited. Cost per purchase in the reports fell accordingly, and optimisation improved because the system had more examples to learn from."
  },
  steps: [
    "Open Events Manager and find the Event Match Quality score for each event.",
    "Note which customer information fields you currently send.",
    "List the fields your order or enquiry system already holds.",
    "Add every legitimate field you are missing, especially phone number and name.",
    "Confirm the information is being scrambled before sending.",
    "Re-check the score after a week and record the improvement."
  ],
  mistakes: [
    "Sending only an email address when several other fields are available.",
    "Sending information in plain text rather than scrambled.",
    "Ignoring the score entirely, so poor matching persists for years."
  ],
  words: [
    { t: "Event Match Quality", d: "A score from 0 to 10 showing how well Meta can match your events to real accounts." },
    { t: "Customer information parameters", d: "Fields such as email, phone and name used only for matching." },
    { t: "Hashing", d: "Scrambling information before it is sent, so the original cannot be read." },
    { t: "Match rate", d: "The share of your events that Meta successfully connects to an account." }
  ],
  takeaways: [
    "Event Match Quality scores how well your events can be matched, from 0 to 10.",
    "Unmatched events are wasted: they teach the system nothing.",
    "Send every legitimate field you hold, especially phone and name.",
    "Information must be scrambled before sending, and must never include sensitive categories."
  ],
  selfCheck: [
    "I know my current Event Match Quality score.",
    "I send more than just an email address.",
    "I have confirmed the data is scrambled before it is sent."
  ],
  quiz: [
    { q: "What does Event Match Quality measure?", options: ["How fast your website loads", "How well Meta can connect your events to real accounts", "How many events you send"], a: 1, why: "It reflects the identifying information carried with each event." },
    { q: "Why do unmatched events matter?", options: ["They cost extra", "The system cannot learn from them or credit them properly", "They slow reporting"], a: 1, why: "An event that cannot be tied to a person teaches the system nothing." },
    { q: "What is the usual way to improve the score?", options: ["Increase the budget", "Send more customer information fields that you already hold", "Reinstall the pixel"], a: 1, why: "Each additional field raises the chance of a successful match." }
  ],
  exercise: { task: "Find your Event Match Quality score in Events Manager. Write it down, then list every customer information field your order or enquiry system holds. Identify which ones you are not currently sending." },
  challenge: { task: "Build a match quality improvement plan: current scores by event, the fields available in each of your systems, the technical work required to send them, the privacy review confirming what is permitted, and the expected score after implementation." }
},

"5.16.9": {
  intro: "This final lesson of the module gives you a routine for finding and fixing pixel problems, which are more common than most advertisers realise.",
  plain: [
    "A pixel is not a thing you install once and forget. Websites change. Developers update pages. Payment systems get replaced. Any of these can break tracking silently.",
    "It is like a smoke alarm. It appears to be fine, because a broken one looks exactly like a working one. The only way to know is to test it deliberately, on a schedule.",
    "The businesses that avoid disasters are the ones that press the test button every month."
  ],
  idea: [
    "The main problems, in order of how often they occur. Missing events, where an action is not being reported at all. Duplicate events, where a purchase is counted twice, making results look better than they are. Wrong values, such as sending the price before discount. Events firing on the wrong page, such as a purchase counted when the checkout opens. Broken events after a website update. And poor match quality, covered in the previous lesson.",
    "The tools available to you are the Test Events tool in Events Manager, which shows events arriving in real time as you browse your own site, the Pixel Helper browser extension, which shows what is firing on the current page, and the Diagnostics tab in Events Manager, which lists problems Meta has detected automatically.",
    "The most valuable single habit is to complete your own customer journey once a month, watching the Test Events tool as you go. This takes about ten minutes and catches nearly everything.",
    "The second habit is to compare Meta's reported conversions against your own records monthly. A sudden change in the gap usually means something broke, and finding it in week one rather than month three saves a great deal of money."
  ],
  example: {
    title: "Found by the monthly check",
    body: "A routine monthly test showed the purchase event firing twice on every order. A website update had added the pixel a second time. Reported sales were double the real figure, which meant the account looked twice as profitable as it was, and budgets had been raised based on false numbers. The check caught it eleven days after the update, rather than at the end of the quarter."
  },
  steps: [
    "Open the Test Events tool in Events Manager.",
    "Complete your own customer journey from ad click to confirmation.",
    "Confirm each event fires once, on the right page, with the right value.",
    "Check the Diagnostics tab for problems Meta has flagged.",
    "Compare monthly reported conversions against your own records.",
    "Repeat monthly, and always after any website change."
  ],
  mistakes: [
    "Testing only after something obviously breaks.",
    "Not re-testing after a website update, which is when most breakages happen.",
    "Ignoring duplicate events, which flatter your results and lead to bad decisions."
  ],
  words: [
    { t: "Test Events", d: "A tool showing events arriving in real time while you browse your own site." },
    { t: "Diagnostics", d: "The Events Manager tab listing problems Meta has automatically detected." },
    { t: "Duplicate event", d: "The same action counted more than once, inflating your results." },
    { t: "Silent failure", d: "A breakage that produces no error message and is only found by testing." }
  ],
  takeaways: [
    "Broken tracking looks exactly like working tracking. Only testing reveals it.",
    "Complete your own customer journey monthly, watching Test Events.",
    "Always re-test after any website change.",
    "Duplicate events are dangerous because they make results look better than reality."
  ],
  selfCheck: [
    "I have a monthly testing routine in my calendar.",
    "I re-test after every website change.",
    "I compare Meta's numbers against my own records monthly."
  ],
  quiz: [
    { q: "When do most tracking breakages happen?", options: ["Randomly", "After a website update", "At the end of the month"], a: 1, why: "Website changes are the most common cause, which is why re-testing then matters." },
    { q: "Why are duplicate events particularly dangerous?", options: ["They cost more", "They make results look better than reality, leading to bad decisions", "They slow the site"], a: 1, why: "Inflated numbers lead to budget increases that are not justified." },
    { q: "What is the most valuable single habit?", options: ["Checking reports daily", "Completing your own customer journey monthly while watching Test Events", "Reinstalling the pixel"], a: 1, why: "Ten minutes of real testing catches nearly every common problem." }
  ],
  exercise: { task: "Complete your own full customer journey today with the Test Events tool open. Record which events fired, on which pages, with what values, and whether any fired twice or not at all." },
  challenge: { task: "Build a tracking quality assurance system: the monthly test procedure, the checklist of every event and its expected behaviour, the reconciliation against internal records, the trigger for testing after website changes, who is responsible, and how failures are escalated and recorded." }
}

});
