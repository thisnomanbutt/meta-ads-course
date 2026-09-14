/* Module 04 - Campaign Architecture (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"2.4.1": {
  intro: "Campaign architecture means the shape of your account: how many campaigns, how many ad sets, and what goes where. A good shape makes the system learn fast. A bad shape wastes money quietly, every day.",
  idea: [
    "There is one rule behind all good structures: keep data together. The system learns from results. If your results are split across twelve ad sets, each one has a small pile of data and none of them learns properly. If the same results sit in two ad sets, each pile is large and learning is fast.",
    "So the default answer to how many should I build is: as few as possible. You only split when splitting gives you something you cannot get any other way.",
    "There are exactly three good reasons to split. First, a different budget you must control separately, for example a fixed amount for one product. Second, a genuinely different audience that needs a different message, such as existing customers versus strangers. Third, a test you are deliberately running.",
    "Everything else, including tidiness, curiosity and habit, is not a good reason. Most accounts that struggle are simply too complicated for the money they spend."
  ],
  example: {
    title: "Same budget, two shapes",
    body: "A company spends 3,000 a month. Shape one: 8 campaigns, 19 ad sets, about 5 a day each. No ad set ever reaches 50 results in a week, so every one stays in learning forever. Shape two: 2 campaigns, 3 ad sets, about 33 a day each. Two of the three leave learning in the first week. Same money, same ads, completely different outcome, because the second shape let the system learn."
  },
  steps: [
    "Write your monthly budget on paper.",
    "Divide it by 30 to get the daily amount.",
    "Estimate your cost per result, then work out how many results per week one ad set can produce.",
    "Decide how many ad sets can each reach about 50 results a week. That number is your maximum.",
    "Build that many or fewer, never more.",
    "Only add another ad set when the budget grows enough to feed it."
  ],
  mistakes: [
    "Building the structure first and then discovering the budget cannot feed it.",
    "Copying an account structure from a much larger business.",
    "Adding a new ad set every time someone has an idea, instead of testing inside the existing one."
  ],
  words: [
    { t: "Architecture", d: "The overall shape of your account: campaigns, ad sets and what sits inside them." },
    { t: "Consolidation", d: "Putting things together instead of splitting them apart." },
    { t: "Fragmentation", d: "Splitting into so many pieces that each one is too small to learn from." }
  ],
  takeaways: [
    "Keep data together. Fewer, fuller ad sets learn faster.",
    "Your budget decides how many ad sets you are allowed to have.",
    "Split only for a separate budget, a genuinely different message, or a deliberate test.",
    "Most struggling accounts are too complicated for the money they spend."
  ],
  selfCheck: [
    "I can work out how many ad sets my budget can actually feed.",
    "I can name the three valid reasons to split.",
    "I can look at an account and say whether it is too complicated."
  ],
  quiz: [
    { q: "What is the main cost of having too many ad sets?", options: ["Higher account fees", "Each one gets too few results to learn from", "Slower loading in Ads Manager"], a: 1, why: "Data gets split into piles too small for the system to learn from." },
    { q: "Which is a good reason to create a separate ad set?", options: ["It feels tidier", "A genuinely different audience that needs a different message", "You want more rows to look at"], a: 1, why: "A different message for a different group is a real need. Tidiness is not." },
    { q: "Your budget is small. What shape should the account be?", options: ["Many small ad sets to test everything", "Few ad sets so each collects enough results", "One ad set per interest"], a: 1, why: "Small budgets must be concentrated or nothing ever leaves learning." }
  ],
  exercise: { task: "Take your monthly budget, divide by 30, then divide by your cost per result. That is your daily results. Multiply by 7. Now work out how many ad sets could each reach 50 results a week. Write down whether your current account has more ad sets than that number." },
  challenge: { task: "Audit a real account structure. List every campaign and ad set with its weekly results. Mark every ad set below 50 results a week, then design a simpler structure and explain exactly what you would merge and what you expect to improve." }
},

"2.4.2": {
  intro: "Most businesses need a much simpler account than they think. This lesson gives you the simple structure that works for the large majority of advertisers, and tells you when you have outgrown it.",
  idea: [
    "The simple structure has two campaigns. One campaign for new people who do not know you, called prospecting. One campaign for people who already visited or engaged, called retargeting.",
    "Inside prospecting, start with one broad ad set. No interests, wide age range, the whole area you serve, automatic placements. Inside it, put three to five different ads.",
    "Inside retargeting, one ad set containing everyone who visited your website or engaged with your content in the last 30 days, with your existing customers excluded if you are looking for new business.",
    "That is the whole account. Two campaigns, two ad sets, perhaps eight ads. It looks too simple to be professional, and it beats complicated accounts regularly, because all the budget and all the learning sit in two strong places."
  ],
  example: {
    title: "From 14 ad sets to 2",
    body: "A furniture shop had 14 ad sets, each targeting one interest such as interior design or home decor. Cost per purchase was 61. They merged everything into one broad prospecting ad set and one retargeting ad set, keeping the best six ads. After 12 days, cost per purchase was 38. Nothing new was created. The same ads simply got enough data to work with."
  },
  steps: [
    "Create the prospecting campaign with the objective that matches your real goal.",
    "Inside it, build one ad set: your location, wide age range, no interests, automatic placements.",
    "Add three to five genuinely different ads.",
    "Create the retargeting campaign.",
    "Inside it, build one ad set using website visitors and engagers from the last 30 days.",
    "Give prospecting most of the budget, usually 70 to 85 percent."
  ],
  mistakes: [
    "Adding interests immediately because a broad audience feels uncomfortable.",
    "Giving retargeting half the budget, which exhausts a small audience quickly.",
    "Starting with a complicated structure because it looks more professional."
  ],
  words: [
    { t: "Prospecting", d: "Advertising to people who do not know your business yet." },
    { t: "Retargeting", d: "Advertising to people who already visited or engaged." },
    { t: "Broad", d: "An audience with no interest limits, letting the system choose freely." }
  ],
  takeaways: [
    "Two campaigns and two ad sets is enough for most businesses.",
    "Start broad and let the system find your buyers.",
    "Most of the budget belongs in prospecting, not retargeting.",
    "Simple structures leave learning faster and cost less."
  ],
  selfCheck: [
    "I understand why a broad ad set often beats many interest ad sets.",
    "I know roughly what share of budget prospecting should get.",
    "I could rebuild my account into this simple shape today."
  ],
  quiz: [
    { q: "How much of the budget usually belongs in prospecting?", options: ["About 20 percent", "About 70 to 85 percent", "Exactly half"], a: 1, why: "New people must keep entering, or retargeting runs out of people." },
    { q: "What does broad mean in an ad set?", options: ["Every country in the world", "No interest limits, letting the system choose inside your location and age range", "Only people who already bought"], a: 1, why: "Broad removes artificial narrowing so the system can find buyers itself." },
    { q: "Why does the simple structure often beat a complicated one?", options: ["It costs less to set up", "Budget and learning are concentrated in fewer places", "Meta gives it priority"], a: 1, why: "Concentration is what makes learning complete." }
  ],
  exercise: { task: "Draw the simple two campaign structure for your own business on paper. Write the audience, budget and three ad ideas for each ad set. Compare it to what you run today and list the differences." },
  challenge: { task: "Write the business case for simplifying an account from 15 ad sets to 3, as if presenting to a nervous client. Include what they fear losing, why that fear is wrong, and how you would measure the change." }
},

"2.4.3": {
  intro: "Lead generation means collecting contact details from people interested in your service. The structure for it has one special feature: you must think about lead quality, not just lead cost.",
  idea: [
    "A normal lead structure has three parts. Prospecting, to find new people. Retargeting, for people who visited but did not leave their details. And sometimes a separate campaign for a different service or price level.",
    "The decision that shapes everything is where the form lives. A form inside Facebook or Instagram, called an Instant Form, is fast and cheap because the person never leaves the app. A form on your website is slower and more expensive per lead, but the people who complete it are usually more serious.",
    "So the structure often looks like this: one campaign using Instant Forms for volume, one campaign sending people to a landing page for quality, and you compare not the cost per lead, but the cost per lead that actually becomes a customer.",
    "This is why lead generation accounts need feedback from sales. Without it, you will simply pick whatever produces the cheapest names, and cheap names are often worthless."
  ],
  example: {
    title: "Cheap leads, expensive customers",
    body: "A training company ran both. Instant Forms produced leads at 4 dollars, and 3 in 100 became students. Landing page forms produced leads at 14 dollars, and 19 in 100 became students. Cost per student: 133 from the cheap route, 74 from the expensive route. The cheaper lead was twice as expensive where it mattered."
  },
  steps: [
    "Decide your lead destination: Instant Form, landing page, or both for comparison.",
    "Build one prospecting campaign optimising for the lead action.",
    "Build one retargeting campaign for people who visited but did not submit.",
    "Add qualifying questions if lead quality is a problem.",
    "Track what happens to each lead after it arrives, by source.",
    "Judge each route by cost per customer, not cost per lead."
  ],
  mistakes: [
    "Judging success by cost per lead alone.",
    "Using Instant Forms with no qualifying questions in a market full of casual clickers.",
    "Not passing the lead source back from the sales team, so nobody knows which route works."
  ],
  words: [
    { t: "Instant Form", d: "A form that opens inside Facebook or Instagram with details already filled in." },
    { t: "Lead quality", d: "How likely a lead is to become a real customer." },
    { t: "Qualifying question", d: "A question that filters out people who are not a real fit." }
  ],
  takeaways: [
    "Cost per lead is a vanity number without quality information.",
    "Instant Forms give volume, landing pages usually give quality.",
    "Run both and compare cost per customer where you can.",
    "A lead structure needs feedback from sales to be managed properly."
  ],
  selfCheck: [
    "I know where my leads currently land and why.",
    "I can find out how many of my leads become customers.",
    "I judge lead campaigns on cost per customer where possible."
  ],
  quiz: [
    { q: "Which number should judge a lead campaign?", options: ["Cost per lead", "Cost per lead that becomes a customer", "Number of clicks"], a: 1, why: "Cheap leads that never buy cost more in the end." },
    { q: "What is the trade-off with Instant Forms?", options: ["They are slower to complete", "They are cheaper and higher volume, but often lower quality", "They cannot be used on mobile"], a: 1, why: "Less effort to submit means more people submit, including less serious ones." },
    { q: "What makes a lead structure manageable?", options: ["More ad sets", "Feedback from sales about which leads became customers", "A larger budget"], a: 1, why: "Without outcome feedback you optimise blindly toward cheap names." }
  ],
  exercise: { task: "Find out, for your last 50 leads, how many became customers. If nobody tracks this, write the exact steps needed to start tracking it, including who must record what." },
  challenge: { task: "Design a full lead generation structure for a service costing 5,000: campaigns, forms, qualifying questions, the feedback loop from sales, and the exact report you would review every week." }
},

"2.4.4": {
  intro: "Selling products online has its own structure, built around the product catalog and the stages between seeing a product and buying it.",
  idea: [
    "An ecommerce account usually has three layers. Prospecting, to reach new buyers. Retargeting, to bring back people who viewed products or added them to the cart. And sometimes a catalog campaign that automatically shows each person the products they looked at.",
    "The special tool here is the catalog: a file containing every product with its price, image and link. Once connected, Meta can build ads automatically, showing the right product to the right person without you creating each ad by hand.",
    "Modern ecommerce accounts are simpler than they used to be. A common shape now is one Advantage+ shopping campaign doing most of the work, plus one standard prospecting campaign for testing new creative, plus a small retargeting campaign for people deep in the buying process.",
    "The key numbers change too. Cost per purchase matters, but so does return on ad spend, because a 40 dollar cost per purchase is excellent for a 300 dollar sofa and terrible for a 25 dollar phone case."
  ],
  example: {
    title: "Three layers in practice",
    body: "A clothing store spends 200 a day. 140 goes to broad prospecting with video ads showing how items fit. 40 goes to a catalog campaign showing people the exact items they viewed. 20 goes to a small campaign for people who added to cart in the last 3 days with a free delivery offer. Prospecting fills the pipeline, and the other two convert what prospecting created."
  },
  steps: [
    "Upload or connect your product catalog and check the prices and links are correct.",
    "Set up the pixel events for viewing a product, adding to cart and purchasing.",
    "Build broad prospecting with strong creative showing the product in use.",
    "Build a catalog retargeting campaign for viewers and cart abandoners.",
    "Set your target return on ad spend based on your real margin.",
    "Review by product group, not just by campaign."
  ],
  mistakes: [
    "Spending most of the budget on retargeting because its numbers look good. Those sales were largely created by prospecting.",
    "Running a catalog campaign with broken images, wrong prices or dead links.",
    "Judging every product by the same cost per purchase, ignoring different margins."
  ],
  words: [
    { t: "Catalog", d: "A file listing all your products with prices, images and links." },
    { t: "Return on ad spend", d: "Revenue divided by ad spend. 4 means four back for every one spent." },
    { t: "Cart abandoner", d: "Someone who added a product to the cart and did not buy." }
  ],
  takeaways: [
    "Prospecting creates the demand that retargeting converts.",
    "A correct catalog is the foundation of ecommerce advertising.",
    "Judge by return on ad spend and margin, not cost per purchase alone.",
    "Modern structures are simpler: one main campaign plus small support campaigns."
  ],
  selfCheck: [
    "My catalog prices, images and links are correct today.",
    "I know my margin well enough to set a target return.",
    "I understand why retargeting numbers look better than they are."
  ],
  quiz: [
    { q: "Why do retargeting numbers usually look better than prospecting?", options: ["The ads are better", "They convert demand that prospecting already created", "They reach more people"], a: 1, why: "Retargeting takes credit for interest that prospecting generated." },
    { q: "What does a catalog allow?", options: ["Cheaper impressions", "Ads that automatically show the right products to each person", "Faster approval"], a: 1, why: "The system builds the ad from your product file for each viewer." },
    { q: "A 40 cost per purchase is...", options: ["Always bad", "Good or bad depending on the product price and margin", "Always good"], a: 1, why: "The only meaningful judgement includes what the product earns you." }
  ],
  exercise: { task: "Check your catalog today: pick 10 products at random and confirm the price, image and link are correct. Write down how many had a problem." },
  challenge: { task: "Design an ecommerce structure for a store with 400 products across 6 categories and very different margins. Explain how you group products, what target return each group gets, and how you stop low margin products absorbing the budget." }
},

"2.4.5": {
  intro: "Business to business and software companies sell to a small number of specific people, often over a long period. This changes the structure in important ways.",
  idea: [
    "The first difference is audience size. Your buyers might be 12,000 people in the whole country, not 3 million. Very small audiences get expensive quickly because you show the same ads to the same people again and again.",
    "The second difference is time. A software purchase can take three months and involve four people from the same company. The person who clicks the ad is often not the person who signs.",
    "So the structure usually runs in stages. A top layer that teaches and builds recognition, judged on cheap attention. A middle layer offering something useful such as a guide or a demonstration video. A bottom layer asking for a meeting or a trial.",
    "The most important structural decision is what you optimise for. Optimising for a trial signup produces many casual signups. Optimising for a qualified meeting produces fewer, better ones, but only if that information is sent back to Meta. Without that feedback, the system cannot tell a real buyer from a student collecting free trials."
  ],
  example: {
    title: "Two signals, two outcomes",
    body: "A software company optimised for free trial signups. They got 340 trials at 22 each, and 6 became paying customers, so each customer cost 1,246. They then sent sales-qualified information back to Meta and optimised for that instead. Volume fell to 90 signups at 61 each, but 21 became customers, so each customer cost 261. Fewer leads, five times cheaper customers."
  },
  steps: [
    "Estimate how many real buyers exist in your market. If it is small, plan for higher frequency and expect higher costs.",
    "Build the stages: teach, help, then ask.",
    "Choose the deepest action you can reliably feed back to Meta.",
    "Set the attention layer's budget as an investment, judged on reach and engagement, not sales.",
    "Connect your customer database so real outcomes return to the system.",
    "Review on a longer cycle, because your sales cycle is long."
  ],
  mistakes: [
    "Judging a three month sales cycle on a seven day report.",
    "Optimising for trials or downloads and then complaining about lead quality.",
    "Building an audience so narrow that the same 4,000 people see the ad twenty times a month."
  ],
  words: [
    { t: "Sales cycle", d: "The time between first contact and buying." },
    { t: "Qualified lead", d: "A lead the sales team judges to be a genuine potential buyer." },
    { t: "Feedback loop", d: "Sending real outcomes back to Meta so it learns who the good buyers are." }
  ],
  takeaways: [
    "Small audiences mean higher frequency and higher costs. Plan for it.",
    "Optimise for the deepest signal you can reliably send back.",
    "Judge results on your real sales cycle, not on a weekly report.",
    "Without a feedback loop, the system cannot find serious buyers."
  ],
  selfCheck: [
    "I know roughly how many real buyers exist in my market.",
    "I know which signal my campaigns currently optimise for.",
    "I know whether real outcomes are sent back to Meta today."
  ],
  quiz: [
    { q: "Why can optimising for free trial signups be a mistake?", options: ["Trials are expensive", "The system finds people who like signing up, not people who buy", "Meta does not support it"], a: 1, why: "You get exactly what you asked for, and you asked for signups." },
    { q: "What is the effect of a very small audience?", options: ["Lower costs", "Higher frequency and rising costs over time", "Faster learning"], a: 1, why: "The same people see the ads repeatedly, which raises cost and reduces response." },
    { q: "How should a long sales cycle change your reporting?", options: ["Report daily and react quickly", "Review over a period matching the real sales cycle", "Stop reporting"], a: 1, why: "Short reports on long cycles show noise, not truth." }
  ],
  exercise: { task: "Write down the last 10 customers your business won. For each, note how long it took from first contact to signature. Use the average to set the right review period for your campaigns." },
  challenge: { task: "Design the full structure for a software company with a 90 day sales cycle and 15,000 potential buyers: stages, offers, optimisation signals, the feedback loop, and the report you would present monthly." }
},

"2.4.6": {
  intro: "Local businesses sell to people nearby: a clinic, a restaurant, a gym, a garage. The structure is simpler than most, but it has traps that waste money quietly.",
  idea: [
    "The defining feature is the map. Your customers live or work within a certain distance. Everything outside that circle is waste, no matter how cheap it looks.",
    "Because the audience is small, one campaign is usually enough. Inside it, one broad ad set covering the real travel distance for your business. A clinic might use 15 kilometres. A restaurant might use 5. A specialist surgeon might use the whole country.",
    "The second feature is frequency. With a small area, people will see your ads often. This is not automatically bad. Local businesses often benefit from being seen repeatedly, as long as the message changes. What kills response is the same image every day for two months.",
    "The third feature is the action. Most local businesses want a call, a message, a booking or a visit. Choose the one your business actually handles well. A restaurant with nobody to answer the phone should not optimise for calls."
  ],
  example: {
    title: "The wasted half",
    body: "A dental clinic targeted the whole city of 4 million people. Analysis of their patients showed 82 percent came from three districts within 6 kilometres. They narrowed the map to those districts plus 3 kilometres. Audience dropped from 2.1 million to 260,000. Cost per booking fell from 44 to 19, because the budget stopped paying to reach people who would never travel that far."
  },
  steps: [
    "Look at your existing customers and find where they actually come from.",
    "Set the map to that real travel distance, not the whole city.",
    "Use one campaign with one broad ad set inside that area.",
    "Choose the action your business can genuinely handle: call, message, booking or visit.",
    "Plan to change the creative every few weeks because frequency builds fast.",
    "Add opening hours to your schedule if your action needs a human to answer."
  ],
  mistakes: [
    "Targeting the whole city or country when customers only travel 10 minutes.",
    "Optimising for calls when nobody answers the phone.",
    "Running the same single image for months in a small area."
  ],
  words: [
    { t: "Radius targeting", d: "Choosing a distance around a point on the map." },
    { t: "Catchment area", d: "The real area your customers travel from." },
    { t: "Frequency", d: "How many times the average person sees your ad." }
  ],
  takeaways: [
    "Set the map to the real travel distance, proved by your customer data.",
    "One campaign and one broad ad set is usually enough locally.",
    "Expect high frequency and change creative regularly.",
    "Choose an action your business can actually handle."
  ],
  selfCheck: [
    "I know which areas my customers really come from.",
    "My targeting radius matches that, not the whole city.",
    "I have a plan to refresh creative every few weeks."
  ],
  quiz: [
    { q: "How should a local business choose its targeting radius?", options: ["As wide as possible for more reach", "From where existing customers actually travel from", "Exactly 10 kilometres always"], a: 1, why: "Real customer data shows the distance people will genuinely travel." },
    { q: "High frequency in a small area is...", options: ["Always a failure", "Normal, and manageable if the creative keeps changing", "Impossible"], a: 1, why: "Repetition is expected locally. Repetition of the same image is what fails." },
    { q: "A restaurant cannot answer the phone during service. What should it not optimise for?", options: ["Messages", "Calls", "Website visits"], a: 1, why: "Never optimise for an action your business cannot handle well." }
  ],
  exercise: { task: "List your last 30 customers and their area. Draw the real catchment on a map. Compare it with the radius currently set in your ad account and write the correction needed." },
  challenge: { task: "Build a full local campaign plan for a business with three branches in one city: how you separate them, whether you use one campaign or three, how you avoid competing against yourself, and how you measure which branch each booking belongs to." }
},

"2.4.7": {
  intro: "Healthcare advertising is possible and effective, but it follows stricter rules than other industries. This lesson explains how to structure campaigns so they work and stay approved.",
  idea: [
    "The core rule is simple to state: you may describe your service, but you may not describe the person. Saying our clinic treats back pain is fine. Saying do you suffer from back pain is not, because it assumes something personal about the viewer.",
    "This affects structure, not just wording. You cannot build audiences around health conditions, and you should not create separate ad sets that reveal a sensitive assumption about a group of people.",
    "So healthcare structures lean on broad audiences and let the creative do the qualifying. The ad speaks clearly about the service, and the people it applies to identify themselves by clicking.",
    "Tracking is also stricter. Health information must not be sent back to Meta in event data. This means structures often rely on offline outcomes shared carefully, and on measuring what happens after the click inside your own systems."
  ],
  example: {
    title: "The rewrite that worked",
    body: "A hair transplant clinic ran: losing your hair? Book a free consultation. Rejected, because it makes a personal assumption. The rewrite: our surgeons perform over 40 hair restoration procedures each month. See how the process works. Approved, and it performed better, because it led with proof instead of pointing at the viewer."
  },
  steps: [
    "Read the policy on personal attributes before writing anything.",
    "Write ads about the service, the process and the team, never about the viewer.",
    "Use broad audiences and let the creative attract the right people.",
    "Check what your pixel sends, and remove any health related detail.",
    "Keep landing pages consistent with the ad and free of exaggerated claims.",
    "Build a small library of approved wording your team can reuse safely."
  ],
  mistakes: [
    "Writing headlines that point at the viewer with you or your.",
    "Building audiences that imply a medical condition.",
    "Sending condition or treatment details in tracking data."
  ],
  words: [
    { t: "Personal attributes", d: "Anything that assumes something about the individual seeing the ad." },
    { t: "Sensitive category", d: "A topic with extra rules, including health." },
    { t: "Claim", d: "A promise about a result, which must be accurate and provable." }
  ],
  takeaways: [
    "Describe your service, never the person seeing the ad.",
    "Use broad audiences and let the creative qualify people.",
    "Keep health details out of tracking data.",
    "Build an approved wording library to stop repeated rejections."
  ],
  selfCheck: [
    "I can rewrite any you-focused headline into a service-focused one.",
    "I know what my pixel currently sends back.",
    "We have a list of approved phrases for our clinic."
  ],
  quiz: [
    { q: "Which headline is acceptable?", options: ["Struggling with anxiety?", "Our clinic offers therapy with licensed psychologists", "Are you depressed?"], a: 1, why: "It describes the service without assuming anything about the viewer." },
    { q: "How should healthcare campaigns qualify the right people?", options: ["Through narrow condition based audiences", "Through clear creative that the right people respond to", "By asking Meta for medical targeting"], a: 1, why: "Condition based targeting is not allowed, so the creative does the work." },
    { q: "What must never be sent in tracking data?", options: ["Page names", "Health or treatment details about a person", "Purchase value"], a: 1, why: "Sensitive health information must stay out of event data." }
  ],
  exercise: { task: "Take three existing healthcare ads, yours or any you find, and rewrite each headline so it describes the service rather than the viewer. Keep the meaning and the appeal." },
  challenge: { task: "Build a compliance playbook for a clinic: approved and banned wording patterns with examples, the audience rules, what the pixel may and may not send, and the approval process before anything is published." }
},

"2.4.8": {
  intro: "Almost every account has two jobs running at once: finding new people and converting people who already know you. This lesson explains how to split them properly so they help each other instead of competing.",
  idea: [
    "Prospecting fills the top. Retargeting converts the bottom. The mistake most people make is treating them as two competitors and giving the budget to whichever shows better numbers, which is always retargeting.",
    "Retargeting looks better because it is talking to people who already showed interest. But those people only exist because prospecting created them. Cutting prospecting to feed retargeting is like eating your seed grain.",
    "A healthy split is usually 70 to 85 percent prospecting. Retargeting needs less because its audience is small, and overspending simply shows the same people the same ad many times a day, which irritates them.",
    "Exclusions matter too. Your prospecting campaign should exclude recent purchasers if you are chasing new customers. Your retargeting campaign should exclude people who already converted. Without exclusions you pay to advertise to people who already did what you wanted."
  ],
  example: {
    title: "Feeding the wrong side",
    body: "An account moved budget toward retargeting because it showed a return of 9 against prospecting's 2. Within three weeks total sales fell by 40 percent, while retargeting still showed a return of 8. The ratio stayed beautiful and the business shrank, because nobody new was entering the pool. Restoring the prospecting budget recovered total sales in two weeks."
  },
  steps: [
    "Decide the split: usually 70 to 85 percent to prospecting.",
    "Build retargeting audiences from website visitors, video viewers and engagers.",
    "Exclude recent purchasers from prospecting if you want new customers.",
    "Exclude converters from retargeting so you stop paying to reach them.",
    "Watch the size of the retargeting audience. If it shrinks, prospecting is too small.",
    "Judge the account on total results, not on the ratio of one campaign."
  ],
  mistakes: [
    "Moving budget to retargeting because its return looks better.",
    "Forgetting exclusions, so you advertise to people who already bought.",
    "Using a 180 day retargeting window for a product people buy in one day."
  ],
  words: [
    { t: "Exclusion", d: "A rule that stops certain people seeing an ad." },
    { t: "Audience pool", d: "The number of people currently available for retargeting." },
    { t: "Seed grain", d: "The idea that prospecting creates what retargeting harvests." }
  ],
  takeaways: [
    "Retargeting numbers look better because prospecting did the hard work.",
    "Give most of the budget to prospecting and judge the account as a whole.",
    "Exclusions prevent paying to reach people who already converted.",
    "A shrinking retargeting audience is a warning that prospecting is too small."
  ],
  selfCheck: [
    "I know my current prospecting and retargeting split.",
    "My exclusions are set correctly in both directions.",
    "I judge the account by total results, not by one campaign's ratio."
  ],
  quiz: [
    { q: "Why does retargeting usually show a better return?", options: ["Better creative", "It converts interest that prospecting already created", "Lower CPM"], a: 1, why: "It harvests demand rather than creating it." },
    { q: "Your retargeting audience is shrinking. What does that mean?", options: ["Your ads are broken", "Prospecting is not bringing in enough new people", "Meta reduced your reach"], a: 1, why: "The retargeting pool is fed entirely by prospecting activity." },
    { q: "Who should be excluded from a new customer prospecting campaign?", options: ["Everyone under 30", "Recent purchasers", "People who never visited"], a: 1, why: "Paying to find people you already converted wastes budget." }
  ],
  exercise: { task: "Check your account: what percentage of the budget goes to prospecting? What exclusions are set? Write down the two changes you would make today and what you expect each to do." },
  challenge: { task: "Design a complete prospecting and retargeting system with time based stages: 3 day, 14 day and 60 day audiences, the message for each, the exclusions between them, and the rule for how budget moves between them as the business grows." }
},

"2.4.9": {
  intro: "An architecture audit is a structured look at the shape of an account, to find waste and confusion before touching any creative. This lesson gives you the checklist.",
  idea: [
    "An audit is not about opinions. It is a list of questions with factual answers. Done properly, it takes about an hour and usually finds money.",
    "The main questions are always the same. How many ad sets are running, and how many results does each get per week? Are any of them below 50? Are any two ad sets targeting overlapping people? Are exclusions in place? Does each campaign have a clear job you can say in one sentence?",
    "Then the naming and reporting questions. Can you tell what everything is from its name? Are old paused campaigns cluttering the view? Is spend concentrated where results are?",
    "Finally the honest question: if you were rebuilding this account from nothing today, would you build this? The gap between the current account and the answer is your work list."
  ],
  example: {
    title: "What one audit found",
    body: "An account spending 12,000 a month had 31 active ad sets. 23 of them received under 15 results a week. Two prospecting ad sets targeted overlapping audiences. No exclusions existed between prospecting and retargeting. Consolidating to 6 ad sets and adding exclusions cut cost per purchase by 27 percent within a month, with no new creative."
  },
  steps: [
    "List every active ad set with its weekly spend and weekly results.",
    "Mark every ad set under 50 results per week.",
    "Check for overlapping audiences between ad sets.",
    "Check exclusions in both directions.",
    "Write the one sentence job of each campaign. Delete or merge anything without one.",
    "Write the rebuild plan and apply it in stages, not all at once."
  ],
  mistakes: [
    "Rebuilding everything in one day, losing all learning at once.",
    "Auditing creative before structure, which hides the real cause.",
    "Leaving the audit as a document nobody acts on."
  ],
  words: [
    { t: "Audit", d: "A structured review using fixed questions and factual answers." },
    { t: "Overlap", d: "Two ad sets competing for the same people." },
    { t: "Consolidation plan", d: "The written list of what gets merged and in what order." }
  ],
  takeaways: [
    "Audit structure before creative. Structure problems hide everything else.",
    "Any ad set under 50 results a week is a candidate for merging.",
    "Every campaign must have a job you can state in one sentence.",
    "Apply changes in stages so you keep some learning alive."
  ],
  selfCheck: [
    "I have listed every ad set with its weekly results.",
    "I know which of my ad sets are too small.",
    "I have a written rebuild plan with an order."
  ],
  quiz: [
    { q: "What should you audit first?", options: ["Creative", "Structure", "Colours in the ads"], a: 1, why: "Structure problems make every other measurement unreliable." },
    { q: "An ad set gets 11 results a week. What is it?", options: ["Fine, leave it", "A candidate for merging into a larger ad set", "A reason to raise the bid"], a: 1, why: "It will never leave learning, so it should be consolidated." },
    { q: "How should a rebuild be applied?", options: ["All at once for a clean start", "In stages, to keep some learning alive", "Never, rebuild is always wrong"], a: 1, why: "Staged changes protect performance while the structure improves." }
  ],
  exercise: { task: "Run the audit on your own account today. Answer all six questions in writing, and produce a list of exactly three changes, in the order you will make them." },
  challenge: { task: "Build a reusable audit template for an agency: every question, the data needed for each, how findings are scored by likely impact, and the standard recommendations document given to the client." }
}

});
