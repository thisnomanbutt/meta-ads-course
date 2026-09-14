/* Module 05 - Audiences (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"2.5.1": {
  intro: "An audience is the group of people your ad is allowed to reach. This lesson explains the three types that exist, and corrects the biggest misunderstanding in Meta advertising.",
  idea: [
    "There are only three kinds of audience. Saved audiences, which you build from location, age, gender and interests. Custom audiences, built from people who already interacted with you. And lookalike audiences, built by asking Meta to find people similar to a group you provide.",
    "Everything else is a combination of those three.",
    "Now the misunderstanding. Most beginners believe that choosing more interests makes the targeting better. In reality, adding interests usually makes results worse. The reason is that Meta already knows far more about who responds to your ad than any interest label can describe. Every extra restriction removes people the system might have found.",
    "So the modern approach is to set the boundaries that truly matter, usually just location, language and a wide age range, and then let the system search. You describe the edges of the field. Meta finds the people inside it."
  ],
  example: {
    title: "The interest that meant nothing",
    body: "A gym targeted people interested in fitness. The audience contained personal trainers, sports journalists, people who once liked a running page in 2016, and people who genuinely wanted to join a gym. The label described a topic, not an intention. Removing the interest and going broad gave the system freedom to find people who actually signed up, and cost per signup fell by a third."
  },
  steps: [
    "Start with the boundaries you truly need: location, language, minimum age if required by law.",
    "Leave interests off unless you have a strong, tested reason.",
    "Build custom audiences from your own data as your safety net for retargeting.",
    "Use lookalikes when your customer list is large enough to be meaningful.",
    "Check audience size. Very small audiences will cost more.",
    "Let one audience run long enough to prove itself before adding another."
  ],
  mistakes: [
    "Stacking many interests and calling it precise targeting.",
    "Building a new audience every week instead of letting one work.",
    "Assuming an interest label describes intention. It usually describes curiosity."
  ],
  words: [
    { t: "Saved audience", d: "An audience built from location, age, gender and interests." },
    { t: "Custom audience", d: "An audience built from people who already interacted with you." },
    { t: "Lookalike audience", d: "People Meta believes are similar to a group you provided." },
    { t: "Broad targeting", d: "Using only the necessary boundaries and letting the system choose." }
  ],
  takeaways: [
    "There are three audience types. Everything else is a combination.",
    "Interests describe curiosity, not intention to buy.",
    "Every restriction you add removes people the system might have found.",
    "Set the boundaries, then let the system search inside them."
  ],
  selfCheck: [
    "I can name the three audience types.",
    "I understand why broad often beats narrow.",
    "I can justify every restriction currently in my ad sets."
  ],
  quiz: [
    { q: "Why does adding many interests often make results worse?", options: ["Meta charges more for interests", "Each restriction removes people the system could have found", "Interests are always inaccurate"], a: 1, why: "Narrowing reduces the pool the system can search for good matches." },
    { q: "What does an interest label usually describe?", options: ["A desire to buy now", "A topic someone showed curiosity about", "Income level"], a: 1, why: "Curiosity about a topic is very different from intention to purchase." },
    { q: "What should you almost always set?", options: ["Ten interests", "Location, language and a sensible age range", "Detailed behaviours"], a: 1, why: "These are real boundaries. The rest is usually unnecessary narrowing." }
  ],
  exercise: { task: "Open one ad set and write down every targeting restriction it has. For each one, write the reason it exists. Delete any restriction where your reason is because it felt right." },
  challenge: { task: "Design a test that fairly compares a broad audience against your best interest based audience: what is held constant, how long it runs, how much each gets, and the exact number that decides the winner." }
},

"2.5.2": {
  intro: "Demographics, interests and behaviours are the oldest targeting tools in Meta. They still have uses. This lesson explains what each one is, where they come from, and when they are worth using.",
  idea: [
    "Demographics are facts about a person: age range, gender, language, and in some countries education or relationship status. Interests come from pages people engage with and topics they read. Behaviours come from actions, such as recently travelling, using a certain kind of phone, or being an administrator of a business page.",
    "The important thing to understand is where this information comes from. Much of it is inferred, meaning guessed from behaviour, not confirmed. Someone who liked three cooking videos may be labelled interested in cooking forever.",
    "That does not make these tools useless. They are valuable in two situations. First, when your product has a genuine hard requirement, for example advertising a tool that only works on one type of phone. Second, when your audience is so large that you need a starting point to explore.",
    "Use them as boundaries, not as a strategy. And never combine so many that the audience drops below a few hundred thousand people, unless your business is genuinely that specific."
  ],
  example: {
    title: "A behaviour that mattered",
    body: "A company selling a case for one specific phone model used the device behaviour to show ads only to people using that phone. This is a real requirement, not a guess about taste. Cost per purchase halved, because every impression could actually buy the product. The same company saw no benefit at all from adding interests such as technology or gadgets."
  },
  steps: [
    "Decide whether your product has a genuine hard requirement.",
    "If yes, use the demographic or behaviour that matches it exactly.",
    "If no, leave these fields empty and go broad.",
    "Check the audience size indicator after each addition.",
    "Never combine restrictions that each cut the audience in half.",
    "Test any interest against a broad audience before trusting it."
  ],
  mistakes: [
    "Treating interests as proof of intention to buy.",
    "Adding several narrow behaviours together and creating a tiny audience.",
    "Using age and gender limits from assumption rather than from customer data."
  ],
  words: [
    { t: "Demographic", d: "A fact about a person such as age, gender or language." },
    { t: "Interest", d: "A topic Meta believes a person cares about, based on engagement." },
    { t: "Behaviour", d: "An action or situation, such as device used or recent travel." },
    { t: "Inferred data", d: "Information guessed from behaviour rather than stated by the person." }
  ],
  takeaways: [
    "Much of this information is guessed, not confirmed.",
    "Use these tools only for genuine hard requirements.",
    "Check audience size after every restriction you add.",
    "Test any interest against broad before trusting it."
  ],
  selfCheck: [
    "I know whether my product has a genuine targeting requirement.",
    "My age and gender limits come from data, not assumption.",
    "I check audience size as I build."
  ],
  quiz: [
    { q: "When is a behaviour restriction genuinely useful?", options: ["Always", "When your product has a hard requirement, such as a specific device", "When you want a smaller audience"], a: 1, why: "Real requirements justify restriction. Guesses about taste usually do not." },
    { q: "Where does most interest data come from?", options: ["People filling in a survey", "Behaviour that Meta uses to infer a topic of interest", "Public records"], a: 1, why: "It is inferred from engagement, which makes it approximate." },
    { q: "What should you check after adding each restriction?", options: ["The colour of the button", "The audience size indicator", "Your billing date"], a: 1, why: "Restrictions stack quickly and can leave an audience too small to work." }
  ],
  exercise: { task: "Take your product and write down any genuine hard requirement a buyer must meet. If there are none, write none and remove your current interest targeting from one test ad set." },
  challenge: { task: "Analyse your actual customer base by age and gender, then compare it to the limits set in your ad account. Write a report on where your assumptions differ from reality and what you would change." }
},

"2.5.3": {
  intro: "Custom audiences are built from your own information: your website visitors, your customer list, your video viewers. They are the most valuable audiences you own, because they are based on real behaviour.",
  idea: [
    "A custom audience answers the question: who has already shown some connection to my business. The sources are your website, your customer list, your app, your Facebook and Instagram activity, your videos, your forms and your messages.",
    "They matter for two reasons. First, retargeting: these people already know you, so they convert at higher rates. Second, they are the raw material for lookalike audiences, which is how you find new people similar to your best customers.",
    "The quality of a custom audience depends entirely on the quality of the data behind it. A website audience needs a working pixel. A customer list needs accurate emails and phone numbers.",
    "Build them early, even before you need them. A website audience only starts collecting people from the day it is created. If you build it today it will be useful next month. If you wait until you need it, you start from zero."
  ],
  example: {
    title: "The audience nobody built",
    body: "A shop decided to start retargeting during their busiest season. They created a website visitors audience that day and found it contained almost nobody, because collection had just begun. Had they created the same audience three months earlier, it would have held 40,000 people ready to advertise to. The pixel had been installed all along. Only the audience was missing."
  },
  steps: [
    "Confirm your pixel is installed and firing correctly.",
    "Create a website audience for all visitors in the last 180 days.",
    "Create shorter versions: 7 days, 30 days, 90 days.",
    "Create engagement audiences for your Page, Instagram and videos.",
    "Upload your customer list if you have one, with permission to use it.",
    "Create these now even if you will not use them for months."
  ],
  mistakes: [
    "Waiting until you need an audience before creating it.",
    "Building audiences on a pixel that is broken or missing on key pages.",
    "Uploading a customer list without the legal right to use it."
  ],
  words: [
    { t: "Custom audience", d: "An audience built from people who already interacted with your business." },
    { t: "Source", d: "Where the audience data comes from: website, list, app or Meta activity." },
    { t: "Retention window", d: "How many days a person stays in the audience after their action." }
  ],
  takeaways: [
    "Custom audiences are built from real behaviour, which makes them powerful.",
    "They only collect people from the day you create them, so create them early.",
    "Their quality depends entirely on the data behind them.",
    "They are also the raw material for finding new people through lookalikes."
  ],
  selfCheck: [
    "My pixel is confirmed working on all key pages.",
    "I have website audiences at several time lengths already created.",
    "I have permission to use any customer list I upload."
  ],
  quiz: [
    { q: "When does a website custom audience start collecting people?", options: ["From the day the pixel was installed", "From the day the audience is created", "From the first campaign"], a: 1, why: "This is why audiences should be created early, even before they are needed." },
    { q: "What determines a custom audience's quality?", options: ["Its name", "The quality of the data behind it", "The size of your budget"], a: 1, why: "A broken pixel or a bad list produces a useless audience." },
    { q: "Besides retargeting, what are custom audiences used for?", options: ["Lowering CPM directly", "As the source for lookalike audiences", "Changing your objective"], a: 1, why: "Lookalikes are built from a custom audience as the starting group." }
  ],
  exercise: { task: "Create five custom audiences today: website visitors at 7, 30, 90 and 180 days, plus all video viewers. Note the current size of each one." },
  challenge: { task: "Design the complete custom audience library a business should maintain: every source, every time window, the naming pattern, and a written explanation of what each one will be used for." }
},

"2.5.4": {
  intro: "Website audiences are the most useful custom audiences for most businesses. This lesson shows how to build them so they reflect real intention, not just a passing visit.",
  idea: [
    "The simplest website audience is everyone who visited. It is useful but blunt, because it treats a person who bounced in two seconds the same as someone who read three product pages.",
    "Better audiences use specific pages. People who visited the pricing page are closer to buying than people who read a blog article. People who reached the checkout and did not finish are closest of all.",
    "You can also use time spent, selecting the most engaged 25 percent of visitors, which is a good filter when your traffic is mixed.",
    "The other important choice is the time window. Match it to how long people actually take to decide. If most customers buy within three days, a 7 day audience is right and a 180 day audience mostly contains people who moved on. If your product takes two months of thinking, longer windows make sense."
  ],
  example: {
    title: "Three windows, three messages",
    body: "An online course used three audiences. People who visited in the last 3 days saw an ad answering the most common objection. People from 4 to 14 days ago saw a student success story. People from 15 to 45 days ago saw a limited time discount. Each group got the message that suited how long they had been thinking, and total enrolments rose 31 percent without extra budget."
  },
  steps: [
    "List the pages on your site that show real intention.",
    "Create an audience for each important page.",
    "Create a cart or checkout abandoner audience if you sell online.",
    "Choose time windows that match your real buying cycle.",
    "Exclude people who already converted from each audience.",
    "Write down which message each audience will receive."
  ],
  mistakes: [
    "Using one 180 day all visitors audience for everything.",
    "Forgetting to exclude people who already bought.",
    "Building page based audiences on pages the pixel does not actually track."
  ],
  words: [
    { t: "Page based audience", d: "An audience of people who visited a specific page." },
    { t: "Abandoner", d: "Someone who started an action such as checkout and did not finish." },
    { t: "Time window", d: "How many days back the audience looks." }
  ],
  takeaways: [
    "Specific pages show intention. All visitors is blunt.",
    "Match the time window to your real buying cycle.",
    "Always exclude people who already converted.",
    "Different time windows deserve different messages."
  ],
  selfCheck: [
    "I know which pages on my site show real buying intention.",
    "My time windows match how long customers actually take.",
    "My exclusions stop me advertising to existing customers."
  ],
  quiz: [
    { q: "Which audience shows the strongest intention?", options: ["All website visitors", "People who reached checkout and did not complete", "Blog readers"], a: 1, why: "They came closest to buying, so they are the most valuable to reach again." },
    { q: "How should you choose the time window?", options: ["Always 180 days", "Match it to how long your customers really take to decide", "Always 7 days"], a: 1, why: "A window longer than the decision period fills with people who moved on." },
    { q: "What must you remember with every retargeting audience?", options: ["Raise the bid", "Exclude people who already converted", "Use only Instagram"], a: 1, why: "Otherwise you pay to advertise to people who already did what you wanted." }
  ],
  exercise: { task: "List the five most meaningful pages on your website in order of buying intention. Create an audience for the top three, with a time window that matches your buying cycle." },
  challenge: { task: "Build a full website audience map for an ecommerce store: every audience, its time window, its exclusions, the message it receives and the budget share it deserves. Explain how the map changes during a sale period." }
},

"2.5.5": {
  intro: "Engagement audiences are built from people who interacted with your content inside Facebook and Instagram, without ever visiting your website. For many businesses they are the largest audience available.",
  idea: [
    "Sources include people who watched your videos, opened your Instant Form, sent you a message, visited your profile, saved a post, or engaged with your Page or Instagram account.",
    "Video audiences are the most useful, because watch time shows real attention. Someone who watched 75 percent of a two minute video is genuinely interested. Someone who watched 3 seconds simply scrolled past slowly.",
    "These audiences are valuable in markets where people do not visit websites much, and for businesses whose selling happens in messages rather than on a website.",
    "They are also free to build. Every video you post, every form you run, quietly builds an audience you can advertise to later, as long as you create the audience so it starts collecting."
  ],
  example: {
    title: "Selling without a website",
    body: "A tailoring business in a market where most customers buy through messages had no real website. They posted short videos showing fabric and fitting. They then built an audience of people who watched at least half of any video in the last 90 days, and advertised a seasonal offer to them. Cost per conversation was less than a quarter of their cold campaigns, using content they had already made."
  },
  steps: [
    "Create a video audience for people who watched at least 50 percent.",
    "Create separate audiences for Page engagers and Instagram engagers.",
    "Create an audience for people who opened a form but did not submit.",
    "Create an audience for people who messaged you.",
    "Choose windows of 90 or 180 days for these, since the signal fades slowly.",
    "Use them both for retargeting and as sources for lookalikes."
  ],
  mistakes: [
    "Building video audiences on 3 second views, which is almost everyone who scrolled.",
    "Ignoring these audiences because the business focuses only on website data.",
    "Treating an engagement audience as if it were as valuable as a purchase audience."
  ],
  words: [
    { t: "Engagement audience", d: "People who interacted with your content inside Meta apps." },
    { t: "Watch percentage", d: "How much of a video someone watched, used to judge attention." },
    { t: "Form opener", d: "Someone who opened your Instant Form without submitting it." }
  ],
  takeaways: [
    "Engagement audiences are built from activity inside the apps, not your website.",
    "Video watch percentage is a strong attention signal.",
    "They are especially valuable where selling happens in messages.",
    "They build quietly and cost nothing extra to create."
  ],
  selfCheck: [
    "I have created video audiences based on meaningful watch percentages.",
    "I have an audience of people who opened a form but did not submit.",
    "I use engagement audiences as lookalike sources."
  ],
  quiz: [
    { q: "Which video audience shows real interest?", options: ["3 second viewers", "People who watched at least 50 or 75 percent", "Everyone the video reached"], a: 1, why: "Substantial watch time indicates genuine attention." },
    { q: "Who is especially well served by engagement audiences?", options: ["Businesses with no strong website whose selling happens in messages", "Only large corporations", "Only ecommerce stores"], a: 0, why: "They capture interest that never touches a website." },
    { q: "What is a form opener audience?", options: ["People who submitted a form", "People who opened a form and did not submit it", "People who saw the ad"], a: 1, why: "They showed clear intention then stopped, which makes them worth reaching again." }
  ],
  exercise: { task: "Create three engagement audiences today: 50 percent video viewers, form openers who did not submit, and people who messaged you. Note the size of each and write what message you would send to each group." },
  challenge: { task: "Design a content and audience system where organic posting deliberately builds advertising audiences: what you post, what audiences it feeds, how long the windows are, and how the paid campaigns use them." }
},

"2.5.6": {
  intro: "Your customer list is the most valuable data you own. This lesson explains how to use it correctly, safely and legally inside Meta.",
  idea: [
    "You can upload a list of customers with their emails and phone numbers. Meta matches them to accounts and builds an audience. The original details are protected during this process and are not given to other advertisers.",
    "There are three main uses. Excluding existing customers from campaigns looking for new ones. Advertising to existing customers for repeat business or a new product. And using the list as the source for a lookalike audience, which is usually the most valuable use of all.",
    "Match rate matters. If you upload 10,000 customers and only 3,000 are matched, your audience is 3,000. Match rates improve when you include several fields: email, phone number with country code, first name, last name, city and country.",
    "The legal part is not optional. You must have the right to use that data for advertising, based on what the customer agreed to when they gave it. Uploading a purchased list is both against the rules and usually against the law."
  ],
  example: {
    title: "Value based matching",
    body: "A store uploaded 8,000 customers including how much each had spent. Instead of one list, they made three: the top 500 spenders, the middle, and one time buyers. A lookalike built from the top 500 performed far better than one built from all 8,000, because the source described the customers they actually wanted more of."
  },
  steps: [
    "Export your customer list with as many matching fields as possible.",
    "Confirm you have the right to use this data for advertising.",
    "Clean it: remove duplicates, fix formatting, include country codes on phone numbers.",
    "Upload and check the match rate.",
    "Create separate lists for your best customers, not just one big list.",
    "Refresh the list on a schedule, because it goes out of date."
  ],
  mistakes: [
    "Uploading one big list when a best customers list would be far more useful.",
    "Uploading purchased or scraped data, which breaks the rules and the law.",
    "Never refreshing the list, so exclusions slowly stop working."
  ],
  words: [
    { t: "Customer list", d: "A file of customer details uploaded to build an audience." },
    { t: "Match rate", d: "The share of your uploaded records that Meta could match to accounts." },
    { t: "Hashing", d: "A protection process that scrambles details before they are sent." },
    { t: "Value based audience", d: "A list that includes how much each customer spent." }
  ],
  takeaways: [
    "Your customer list is your most valuable audience data.",
    "Split it by value rather than uploading one large list.",
    "More matching fields means a higher match rate.",
    "You must have the legal right to use the data for advertising."
  ],
  selfCheck: [
    "I know where our customer data lives and who can export it.",
    "I have confirmed we may use it for advertising.",
    "We have a schedule for refreshing uploaded lists."
  ],
  quiz: [
    { q: "What usually makes the most valuable lookalike source?", options: ["All customers", "Your highest value customers", "All website visitors"], a: 1, why: "The system finds more people like the source you give it, so give it your best." },
    { q: "How do you improve match rate?", options: ["Upload fewer records", "Include more fields such as phone with country code, name and city", "Upload more often"], a: 1, why: "More matching information means more records can be matched." },
    { q: "Can you upload a purchased list?", options: ["Yes, if it is large", "No, you must have the right to use the data for advertising", "Only for exclusions"], a: 1, why: "It breaks Meta rules and usually data protection law." }
  ],
  exercise: { task: "Export your customer list and check which fields it contains. Write down what is missing that would improve matching, and who in your company can add it." },
  challenge: { task: "Design a customer data strategy: which segments you will maintain, how often each is refreshed, how value is attached, the permissions required, and how these audiences are used across prospecting, retargeting and exclusions." }
},

"2.5.7": {
  intro: "A lookalike audience asks Meta to find new people similar to a group you already have. Used well it is powerful. Used carelessly it quietly wastes money.",
  idea: [
    "You give Meta a source, for example your best customers. Meta studies what those people have in common, then builds an audience of others who resemble them. You choose the size, from 1 percent of a country, which is the closest match, up to 10 percent, which is much broader and looser.",
    "The quality of a lookalike depends almost entirely on the source. A lookalike of everyone who visited your website is weak, because that group includes people who left immediately. A lookalike of customers who spent a lot is strong, because the group actually describes value.",
    "Size matters. The source should usually contain at least 1,000 people, and more is better. Below that, the pattern is too thin to be meaningful.",
    "One honest note: as Meta's automatic systems have improved, the advantage of lookalikes over broad targeting has narrowed in many accounts. They remain useful, especially with a strong value based source, but they are no longer an automatic win. Test them against broad rather than assuming."
  ],
  example: {
    title: "Source quality decides everything",
    body: "The same account built two lookalikes of the same size. One from all website visitors in 180 days, one from customers who had spent over 400. The first produced purchases at 71. The second produced purchases at 34. Identical settings, identical budget, identical ads. Only the source differed."
  },
  steps: [
    "Choose the strongest source you have, usually high value customers.",
    "Check the source has at least 1,000 people, ideally several thousand.",
    "Start with a 1 to 3 percent size for most businesses.",
    "Set the country or region you want it built from.",
    "Exclude your existing customers and existing audiences from the ad set.",
    "Test it against a broad audience before deciding it is better."
  ],
  mistakes: [
    "Building a lookalike from a weak source such as all page engagers.",
    "Using many lookalike sizes at once, which overlap heavily and compete with each other.",
    "Assuming a lookalike always beats broad. Test it."
  ],
  words: [
    { t: "Lookalike", d: "An audience of people similar to a source group you provide." },
    { t: "Source audience", d: "The group Meta studies to find similar people." },
    { t: "Percentage size", d: "How closely matched the audience is. 1 percent is closest, 10 percent is broadest." }
  ],
  takeaways: [
    "The source decides the quality. Use your best customers.",
    "Sources need at least 1,000 people to be meaningful.",
    "Overlapping lookalike sizes compete against each other.",
    "Always test lookalike against broad rather than assuming it wins."
  ],
  selfCheck: [
    "My lookalike sources describe value, not just traffic.",
    "Each source has enough people to be meaningful.",
    "I have compared a lookalike against broad in a fair test."
  ],
  quiz: [
    { q: "What matters most in a lookalike audience?", options: ["The percentage size", "The quality of the source group", "The day it was created"], a: 1, why: "The system copies the pattern in the source, so a weak source gives a weak audience." },
    { q: "What is the minimum useful source size?", options: ["About 100 people", "About 1,000 people, and more is better", "About 50,000 people"], a: 1, why: "Below roughly a thousand, the pattern is too thin to be reliable." },
    { q: "Should you assume a lookalike beats broad targeting?", options: ["Yes, always", "No, test it, because automatic systems have narrowed the gap", "Only on Instagram"], a: 1, why: "Modern broad delivery often performs as well, so it must be tested." }
  ],
  exercise: { task: "Build one lookalike from your strongest possible source. Write down the source, its size, the percentage chosen, and the audience you will fairly compare it against." },
  challenge: { task: "Design a lookalike testing programme: which sources you will build from, how you will avoid overlap, the test structure that compares them against broad, and the decision rule for keeping or removing each one." }
},

"2.5.8": {
  intro: "When two of your own ad sets target the same people, you compete against yourself and pay more. This lesson explains overlap, exclusions and how to keep your audiences clean.",
  idea: [
    "Meta will not let two of your ad sets show the same person an ad at exactly the same moment, but they still enter the same auctions for the same people, which pushes up what you pay and splits your results.",
    "Overlap appears in predictable places. Two lookalikes at different sizes contain mostly the same people. A broad audience contains everyone in your retargeting audience. An interest audience overlaps heavily with a similar interest audience.",
    "The tool for this is exclusions. Exclude your retargeting audiences from your prospecting ad set. Exclude existing customers from campaigns hunting for new ones. Exclude converters from every campaign whose goal they already completed.",
    "There is a simple test for whether exclusions are needed: if a person could reasonably appear in two ad sets at once, and you would not want to pay twice to reach them, exclude."
  ],
  example: {
    title: "Bidding against yourself",
    body: "An account ran a 1 percent lookalike, a 3 percent lookalike and a 5 percent lookalike as three ad sets. The 3 percent contains the 1 percent. The 5 percent contains both. Effectively the same people sat in all three, so the account bid against itself in every auction. Merging into a single 5 percent ad set reduced cost per result by 22 percent immediately."
  },
  steps: [
    "List every ad set and the audience inside it.",
    "Mark any pair that could contain the same person.",
    "Exclude retargeting audiences from prospecting.",
    "Exclude customers from new customer campaigns.",
    "Merge lookalikes that sit inside each other rather than running them separately.",
    "Re-check after every structural change."
  ],
  mistakes: [
    "Running nested lookalike sizes as separate ad sets.",
    "Forgetting exclusions after adding a new campaign.",
    "Excluding so much that the remaining audience is too small to work."
  ],
  words: [
    { t: "Overlap", d: "The same people existing in two or more of your audiences." },
    { t: "Exclusion", d: "A rule that removes a group from an audience." },
    { t: "Nested audience", d: "A smaller audience completely contained inside a larger one." }
  ],
  takeaways: [
    "Overlapping ad sets make you compete against yourself and raise costs.",
    "Nested lookalike sizes are the most common hidden overlap.",
    "Exclusions are how you keep audiences separate and clean.",
    "Re-check exclusions every time the structure changes."
  ],
  selfCheck: [
    "I have checked which of my ad sets could contain the same people.",
    "My prospecting excludes my retargeting audiences.",
    "I do not run nested lookalike sizes as separate ad sets."
  ],
  quiz: [
    { q: "What happens when two of your ad sets target the same people?", options: ["Results double", "You compete in the same auctions and pay more", "Meta merges them automatically"], a: 1, why: "Self-competition raises your own prices and splits your data." },
    { q: "A 1 percent and a 3 percent lookalike of the same source are...", options: ["Completely separate", "Nested, since the 3 percent contains the 1 percent", "Impossible to run together"], a: 1, why: "Larger percentages include everyone in the smaller ones." },
    { q: "What should prospecting usually exclude?", options: ["Nobody", "Your retargeting audiences and existing customers", "All women"], a: 1, why: "Prospecting should hunt for new people, not those you already reach elsewhere." }
  ],
  exercise: { task: "Map your ad sets and their audiences on one page. Draw a line between any pair that could contain the same person. Fix the two worst overlaps today." },
  challenge: { task: "Create an exclusion policy for a large account: the standard exclusions for every campaign type, who checks them, how often, and the test that proves exclusions are working correctly." }
},

"2.5.9": {
  intro: "The final lesson of this module brings audiences together into a decision: what targeting strategy suits your specific business type, and why.",
  idea: [
    "The right strategy depends on three things. How many potential buyers exist. How much you spend. And how well your own data describes your best customers.",
    "A large market with a decent budget should go broad. There are enough buyers that the system will find them, and narrowing only gets in the way. This covers most consumer businesses: food, clothing, fitness, entertainment, everyday services.",
    "A small, specific market must use its own data. If only 20,000 people in the country could ever buy your product, broad wastes most of your budget. Here, custom audiences, strong lookalikes from real customers, and careful exclusions do the work.",
    "A local business is bounded by the map, which is itself a strong restriction, so broad inside that map is usually right.",
    "And a new business with no data starts broad by necessity, collects results for a few weeks, then builds its custom audiences and lookalikes from what it learns. Targeting strategy is not a permanent decision. It changes as your data grows."
  ],
  example: {
    title: "Three businesses, three answers",
    body: "A pizza shop: broad, inside a 4 kilometre radius, because everyone nearby eats. A company selling equipment to dental laboratories: narrow, because only around 900 such laboratories exist in the country, so a customer list and lookalike matter more than anything. A new clothing brand: broad for six weeks to collect purchase data, then a value based lookalike built from the first 500 buyers."
  },
  steps: [
    "Estimate how many real potential buyers exist for your product.",
    "Compare that with your monthly budget.",
    "If the market is large, go broad and invest in creative instead.",
    "If the market is small, invest in your own data: lists, lookalikes and exclusions.",
    "If you are new, start broad and build audiences from the results.",
    "Review the strategy every quarter as your data grows."
  ],
  mistakes: [
    "Copying a strategy from a business with a completely different market size.",
    "Staying narrow after the business has grown enough to go broad.",
    "Trying to build lookalikes before you have enough customers to learn from."
  ],
  words: [
    { t: "Market size", d: "The number of people who could realistically buy your product." },
    { t: "Targeting strategy", d: "Your overall plan for who your ads are allowed to reach." },
    { t: "Data maturity", d: "How much useful customer information you have collected so far." }
  ],
  takeaways: [
    "Market size and budget decide whether broad or narrow is right.",
    "Large markets reward broad targeting and better creative.",
    "Small markets reward your own data and careful exclusions.",
    "The right strategy changes as your data grows, so review it."
  ],
  selfCheck: [
    "I can estimate my market size with a real number.",
    "My current strategy matches that size and my budget.",
    "I have a date to review this again."
  ],
  quiz: [
    { q: "A consumer business in a large market should usually...", options: ["Use many narrow interest audiences", "Go broad and invest effort in creative", "Only use retargeting"], a: 1, why: "With plenty of buyers, the system finds them and creative becomes the lever." },
    { q: "A business selling to 900 specialist companies should rely on...", options: ["Broad targeting", "Its own customer list, lookalikes and exclusions", "Interest targeting only"], a: 1, why: "In a tiny market, your own data is far more precise than any label." },
    { q: "A brand new business with no customer data should...", options: ["Wait until it has data", "Start broad, collect results, then build audiences from them", "Buy a list"], a: 1, why: "Broad is how you generate the data that later enables better targeting." }
  ],
  exercise: { task: "Estimate your market size using a real method: industry figures, number of businesses, population and share. Write the number down, then state in one sentence whether broad or data driven targeting suits you and why." },
  challenge: { task: "Write a targeting strategy document for your business covering the next 12 months: the strategy now, the data you will collect, the trigger points at which the strategy changes, and how you will prove each change was right." }
}

});
