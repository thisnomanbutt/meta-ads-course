/* Module 01 - The Meta Advertising Ecosystem (8 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"1.1.1": {
  intro: "Meta Ads is the system that shows your ads on Facebook, Instagram, Messenger, Threads and some apps. This lesson explains, in simple words, what happens between the moment you press Publish and the moment a person sees your ad.",
  idea: [
    "Meta has about 3 billion people using its apps every day. Each person opens Facebook or Instagram many times a day. Every time someone opens the app, Meta must decide which posts to show, and which ads to show between those posts.",
    "You do not buy a fixed spot on a page. You do not pay for a banner that sits there all day. Instead, you tell Meta three things: who you want to reach, how much money you want to spend, and what result you want. Meta then finds the people most likely to give you that result, and shows your ad to them one person at a time.",
    "This is the most important idea in the whole course: you are not buying space. You are buying a result from a machine that decides, again and again, who should see your ad. Your job is to give that machine good instructions and good material to work with."
  ],
  example: {
    title: "A simple example",
    body: "Sara owns a small bakery in Dubai. She spends 20 dollars a day on ads. She tells Meta: show my ad to people in Dubai, aged 25 to 45, and I want messages from them. Meta shows her ad to around 4,000 people that day. 90 people click. 12 people send a message. 4 people order a cake. Sara did not choose those 4 people. Meta found them, because Meta noticed that people like them had sent messages to shops like Sara's before."
  },
  steps: [
    "You create an ad and choose your goal, your audience and your budget.",
    "A person opens Instagram. In that same second, Meta looks at everyone who wants to show an ad to this person.",
    "Meta runs a very fast competition (called an auction) to decide which ad wins.",
    "The winning ad appears in the person's feed. You are charged a small amount.",
    "The person does something or nothing. Meta records what happened.",
    "Meta uses what it learned to choose better people for your next ad."
  ],
  mistakes: [
    "Thinking you control exactly who sees the ad. You only guide the system. It makes the final choice, person by person.",
    "Changing settings every few hours. Every change makes the system start learning again from the beginning.",
    "Judging an ad after 2 hours or 10 clicks. The system needs days and hundreds of results before its choices become steady."
  ],
  words: [
    { t: "Meta", d: "The company that owns Facebook, Instagram, Messenger, WhatsApp and Threads." },
    { t: "Ad", d: "The picture, video or text that people see. One single advertisement." },
    { t: "Impression", d: "One time your ad appears on one person's screen." },
    { t: "Result", d: "The action you asked for: a click, a message, a form, a sale." }
  ],
  takeaways: [
    "You buy results, not advertising space.",
    "Meta decides who sees your ad, one person at a time, in less than a second.",
    "Your instructions (goal, audience, budget) guide the system, but they do not control it.",
    "The system needs time and data before it becomes good at finding your buyers."
  ],
  selfCheck: [
    "I can explain in one sentence what happens when someone opens Instagram and my ad is running.",
    "I understand that I am buying results, not a fixed advertising spot.",
    "I understand why changing settings too often is a problem."
  ],
  quiz: [
    { q: "When you run a Meta ad, what are you really buying?", options: ["A fixed spot on a page for the whole day", "A chance to be shown to people who are likely to give you the result you asked for", "A list of names and phone numbers"], a: 1, why: "You are buying delivery to people, chosen one at a time, based on the result you asked for." },
    { q: "Who makes the final decision about which single person sees your ad?", options: ["You, when you choose the audience", "Meta's delivery system, in the moment the person opens the app", "The person who sees the ad"], a: 1, why: "You set the boundaries. Meta chooses inside those boundaries, in real time." },
    { q: "Why is it a bad idea to judge an ad after two hours?", options: ["Because ads only run at night", "Because the system has not collected enough results yet to be steady", "Because Meta hides the data for 24 hours"], a: 1, why: "Early numbers move a lot. The system needs many results before its behaviour settles." }
  ],
  exercise: { task: "Open Facebook or Instagram on your phone. Scroll slowly and find 5 ads. For each one, write down: (1) what the business wants you to do, (2) why you think this ad was shown to you.", hint: "On Facebook you can tap the three dots on an ad and choose the option about why you are seeing it. This shows you the real reason." },
  challenge: { task: "Take one business you know well. Write one page explaining: what result they should ask Meta for, who should see the ad, and what a good day of spending would look like in numbers (spend, results, cost per result). Keep every sentence under 15 words." }
},

"1.1.2": {
  intro: "Every time an ad space becomes free, Meta holds a very fast competition to decide which ad to show. This competition is called an auction. Understanding it explains almost everything about why your costs go up or down.",
  idea: [
    "Imagine 200 advertisers all want to reach the same person at the same moment. Meta cannot show 200 ads. It must pick one. So it holds an auction that finishes in less than a second.",
    "Here is the surprise: the advertiser who offers the most money does not always win. Meta wants the person to have a good experience, because if people hate the ads they stop using the app. So Meta scores each ad on three things together: how much you are willing to pay, how likely this person is to do the action you want, and how good the ad feels to that person.",
    "This means a cheap advertiser with a great ad can beat a rich advertiser with a boring ad. Your creative work is not decoration. It is part of your price."
  ],
  example: {
    title: "Two advertisers, one space",
    body: "Advertiser A is willing to pay up to 1.00 dollar. But only 1 person in 100 is likely to click their ad. Advertiser B is willing to pay up to 0.50 dollars, but 4 people in 100 are likely to click. Meta multiplies these together. A scores 1.00 x 1 = 1.0. B scores 0.50 x 4 = 2.0. Advertiser B wins the space, even though B offered half the money. B pays less and reaches more people, simply because the ad was better."
  },
  steps: [
    "An ad space opens on someone's screen.",
    "Meta collects all the advertisers who are allowed to reach this person.",
    "For each one, Meta estimates: how much they will pay, and how likely this person is to act.",
    "Meta adds a quality score based on signals such as people hiding the ad or watching it fully.",
    "The highest total score wins and the ad is shown.",
    "You are charged only the amount needed to beat the next advertiser, not your full maximum."
  ],
  mistakes: [
    "Believing the highest budget always wins. Budget size does not decide a single auction.",
    "Blaming the auction when costs rise, without checking whether the ad itself became boring to people.",
    "Running two of your own ad sets at the same people. You then compete against yourself and push your own price up."
  ],
  words: [
    { t: "Auction", d: "The fast competition that decides which ad is shown in one space." },
    { t: "Bid", d: "The most you are willing to pay for one result." },
    { t: "Estimated action rate", d: "Meta's guess about how likely this person is to do what you want." },
    { t: "Ad quality", d: "How positive or negative people's reactions to your ad are." }
  ],
  takeaways: [
    "The auction picks a winner using three things together: your bid, the chance of action, and ad quality.",
    "A better ad lowers your cost without spending one extra dollar.",
    "You usually pay less than your maximum, only enough to win.",
    "Competing against your own ad sets raises your own prices."
  ],
  selfCheck: [
    "I can name the three parts of the auction score.",
    "I can explain how a smaller bid can still win.",
    "I understand why two of my own ad sets should not target the same people."
  ],
  quiz: [
    { q: "Which advertiser wins a Meta auction?", options: ["The one with the biggest budget", "The one with the highest total score from bid, likely action and ad quality", "The oldest account"], a: 1, why: "Meta combines all three factors, so a strong ad can beat a bigger bid." },
    { q: "What happens to your cost when your ad becomes more interesting to people?", options: ["It goes down, because the likely action rate rises", "It goes up, because Meta charges for popularity", "Nothing changes"], a: 0, why: "A higher chance of action means you win more auctions without raising your bid." },
    { q: "You are charged...", options: ["Always your full maximum bid", "Only the amount needed to beat the next advertiser", "A fixed daily fee"], a: 1, why: "The system charges the minimum needed to win, not your ceiling." }
  ],
  exercise: { task: "Look at 3 ads in your feed from the same industry. Rank them from best to worst as a normal viewer, not as a marketer. Write one sentence for each explaining what makes it feel good or annoying." },
  challenge: { task: "Write a short note to a business owner who says: my competitor has a bigger budget, so I cannot win. Explain in simple words why this is not true, using the scoring idea and one number example." }
},

"1.1.3": {
  intro: "After you press Publish, your ad enters a period where the system is still guessing. This lesson explains what delivery, optimisation and the learning phase mean, and why patience in the first days saves money.",
  idea: [
    "Delivery means: the system is actually showing your ad to people. Optimisation means: the system is trying to find the people most likely to give you the result you asked for. Learning means: the system does not know yet who those people are, so it is testing.",
    "When a new ad set starts, Meta shows the ad to a mixed group of people. It watches who acts and who ignores it. With every result, its guesses get sharper. Meta calls this the learning phase. It usually ends after about 50 results in one week for that ad set.",
    "During learning, costs jump around. One day looks great, the next looks terrible. This is normal. The mistake is to panic and change things, because every meaningful change restarts learning and you pay for the same lessons twice."
  ],
  example: {
    title: "A week of learning",
    body: "A clinic starts an ad set with a 50 dollar daily budget. Day 1: 2 bookings at 25 dollars each. Day 2: 1 booking at 50 dollars. Day 3: 6 bookings at 8 dollars. The owner almost switched it off on day 2. By day 6 the ad set had 48 bookings and a steady cost near 11 dollars. The system was not broken on day 2. It was still learning."
  },
  steps: [
    "Publish the ad set and leave it alone.",
    "Watch it fill up with results, not hours. Aim for about 50 results in 7 days.",
    "While the label says Learning, do not change budget, audience, or the main creative.",
    "When learning finishes, look at the steady cost per result. That is your real number.",
    "If after 7 days you are far from 50 results, the budget is too small or the goal is too hard. Fix that, not the small settings.",
    "Make changes in bigger steps and less often, so learning restarts as rarely as possible."
  ],
  mistakes: [
    "Editing the budget every day. Each edit can push the ad set back into learning.",
    "Splitting a small budget across many ad sets, so none of them ever reaches 50 results.",
    "Choosing a goal that happens very rarely, like a 5,000 dollar purchase, when the budget can only produce a few per month."
  ],
  words: [
    { t: "Delivery", d: "The act of showing your ad to people." },
    { t: "Learning phase", d: "The early period when the system is still testing who responds." },
    { t: "Learning limited", d: "A warning that the ad set is not getting enough results to ever become steady." },
    { t: "Optimisation event", d: "The exact action you asked the system to find, for example a purchase." }
  ],
  takeaways: [
    "Roughly 50 results in 7 days is the target that makes an ad set steady.",
    "Costs swing during learning. Judge after learning, not during.",
    "Every meaningful edit can restart learning and cost you money again.",
    "Learning limited is a budget or goal problem, not a small settings problem."
  ],
  selfCheck: [
    "I know what number of results ends the learning phase.",
    "I can list three changes that restart learning.",
    "I can explain to a client why day 2 results should not cause panic."
  ],
  quiz: [
    { q: "About how many results in 7 days does one ad set need to leave the learning phase?", options: ["5", "50", "500"], a: 1, why: "Around 50 results in a week is the guideline for steady delivery." },
    { q: "What does Learning limited usually mean?", options: ["The ad was rejected", "The ad set cannot collect enough results, usually because the budget is too small or the goal too rare", "Your audience is too big"], a: 1, why: "It is a signal to raise budget, widen the audience, or pick an easier goal." },
    { q: "You change the daily budget every morning. What is the likely effect?", options: ["Faster learning", "Learning keeps restarting and costs stay unstable", "Nothing at all"], a: 1, why: "Frequent meaningful edits reset the learning process." }
  ],
  exercise: { task: "Take a goal you care about, such as a booking. Work out how many you get per week now. Then write down whether one ad set could reach 50 per week with your budget. If not, write what you would change: budget, goal, or structure." },
  challenge: { task: "Design a 14 day launch plan for a new ad set. Write exactly what you will look at on each day, and list the days on which you are allowed to change something. Justify every allowed change." }
},

"1.1.4": {
  intro: "Meta ads are built in three levels: campaign, ad set, and ad. Each level controls different decisions. Mixing them up is the most common beginner mistake, so this lesson makes the split very clear.",
  idea: [
    "Think of it like a company trip. The campaign decides the purpose of the trip. The ad set decides who goes, when, where and how much money they get. The ad is what the people actually see when they arrive.",
    "Campaign level controls one thing above all: the objective, meaning the type of result you want. It can also hold the budget if you choose that option.",
    "Ad set level is where most of your control lives: the audience, the places your ad can appear, the schedule, the budget, and the exact action you are optimising for.",
    "Ad level is the message: the image or video, the text, the headline, the button and the link. Everything a real person sees or touches."
  ],
  example: {
    title: "One account, drawn out",
    body: "Campaign: Get leads for the clinic. Inside it, Ad set A: people in Dubai aged 25-45, 40 dollars a day, optimising for form submissions. Ad set B: people who visited the website in the last 30 days, 20 dollars a day. Inside Ad set A there are three ads: a patient story video, a before-and-after image, and a simple offer card. Same goal, same audience, three different messages competing."
  },
  steps: [
    "Start at campaign level and choose the objective that matches your real business goal.",
    "Create one ad set for each group of people you want to keep separate, or one broad ad set if you have no strong reason to split.",
    "Inside the ad set, set the audience, budget, placements and schedule.",
    "Add 3 to 5 ads inside the ad set so the system has different messages to choose from.",
    "Name everything clearly so you can read the structure later without opening each item."
  ],
  mistakes: [
    "Creating a new campaign for every small idea. You end up with 30 campaigns and none of them learns.",
    "Putting one single ad inside an ad set. The system has nothing to compare.",
    "Splitting the same audience into many ad sets, which divides your data and raises your costs."
  ],
  words: [
    { t: "Campaign", d: "The top container. It holds the objective." },
    { t: "Ad set", d: "The middle container. It holds audience, budget, placements and schedule." },
    { t: "Ad", d: "The bottom item. The message people actually see." },
    { t: "Objective", d: "The type of result you want, chosen at campaign level." }
  ],
  takeaways: [
    "Campaign = why. Ad set = who, where, how much. Ad = what people see.",
    "Most of your control sits at ad set level.",
    "Fewer, fuller ad sets learn faster than many thin ones.",
    "Put several ads in each ad set so the system can pick a winner."
  ],
  selfCheck: [
    "I can say which level controls the budget.",
    "I can say which level controls the audience.",
    "I can draw my own account structure on paper in under two minutes."
  ],
  quiz: [
    { q: "Which level controls the audience?", options: ["Campaign", "Ad set", "Ad"], a: 1, why: "Audience, budget, placements and schedule all live at ad set level." },
    { q: "Which level controls the objective?", options: ["Campaign", "Ad set", "Ad"], a: 0, why: "The objective is chosen once, at campaign level, and shapes everything below it." },
    { q: "How many ads should normally sit inside one ad set?", options: ["Exactly one", "Three to five", "Twenty or more"], a: 1, why: "Three to five gives the system real choice without splitting the data too thin." }
  ],
  exercise: { task: "Draw your own three-level structure on paper for a business you know. One campaign, two ad sets, three ads in each. Write the audience and budget next to each ad set." },
  challenge: { task: "Take an existing account, real or imagined, that has 12 campaigns with one ad set each. Redesign it into a structure with 2 or 3 campaigns. Explain what you merged, what you deleted, and what improves as a result." }
},

"1.1.5": {
  intro: "The objective is the single most powerful setting in your account. It tells Meta what kind of person to look for. This lesson shows how to choose it, and how it connects to the optimisation event.",
  idea: [
    "Meta groups objectives into six families: Awareness, Traffic, Engagement, Leads, App promotion and Sales. Each one sends the system hunting for a different type of person.",
    "This is not a label. It changes who sees your ad. Choose Traffic and Meta looks for people who click a lot, including people who click everything and buy nothing. Choose Sales and Meta looks for people who spend money.",
    "Inside the objective you pick the optimisation event: the exact action you want. This is even more specific. For example, inside Sales you might optimise for Purchase, or for Add to Cart. Always optimise for the action closest to real money, as long as it happens often enough to learn from.",
    "The general rule: choose the objective that matches the result you actually want, not the result that produces the nicest looking numbers."
  ],
  example: {
    title: "Same budget, two objectives",
    body: "A software company ran the same ad twice with 1,000 dollars each. With the Traffic objective: 3,200 clicks, 9 sign-ups, cost per sign-up 111 dollars. With the Leads objective optimising for sign-ups: 900 clicks, 41 sign-ups, cost per sign-up 24 dollars. The Traffic version looked better in the click column and was four times worse in the only column that paid the bills."
  },
  steps: [
    "Write down the real business result you want in plain words.",
    "Pick the objective family that matches it.",
    "Pick the optimisation event that is closest to money.",
    "Check the volume: can you reach around 50 of those events per week? If not, step back to the action just before it in your funnel.",
    "Make sure that event is properly tracked, or the system is optimising blind."
  ],
  mistakes: [
    "Using Traffic or Engagement because those numbers look big and cheap.",
    "Optimising for a rare event with a small budget, so learning never completes.",
    "Choosing a sales objective while the purchase event is broken or not set up."
  ],
  words: [
    { t: "Objective", d: "The family of result you want: awareness, traffic, engagement, leads, app, sales." },
    { t: "Optimisation event", d: "The exact action the system hunts for, such as Purchase or Lead." },
    { t: "Funnel step", d: "One stage on the way to buying, for example view, add to cart, buy." }
  ],
  takeaways: [
    "The objective decides which type of person the system hunts for.",
    "Optimise for the action closest to money that still happens often enough.",
    "Cheap clicks from the Traffic objective often hide expensive results.",
    "If the event is not tracked properly, the objective cannot work."
  ],
  selfCheck: [
    "I can name the six objective families.",
    "I can explain why Traffic often produces poor sales.",
    "I know which optimisation event my own business should use and why."
  ],
  quiz: [
    { q: "You sell online and want purchases. Which objective fits?", options: ["Traffic", "Engagement", "Sales, optimising for Purchase"], a: 2, why: "The objective should match the real result, so the system hunts for buyers." },
    { q: "Your purchases are only 6 per week. What is the sensible move?", options: ["Keep optimising for Purchase anyway", "Optimise for an earlier, more frequent action such as Add to Cart while volume grows", "Switch to Awareness"], a: 1, why: "Too few events means learning never completes, so step one stage back in the funnel." },
    { q: "Why can the Traffic objective be misleading?", options: ["It shows fake clicks", "It finds people who click often, who are not always people who buy", "It costs more per click"], a: 1, why: "The system delivers exactly what you asked for: clicks, not customers." }
  ],
  exercise: { task: "List the last 3 campaigns you or your company ran. For each, write the objective used and the real business result wanted. Mark any place where they did not match." },
  challenge: { task: "Build a simple decision table: 8 common business situations in the left column, the correct objective and optimisation event in the right column, and one line of reasoning for each. Keep the language simple enough for a new team member." }
},

"1.1.6": {
  intro: "Numbers in Ads Manager can feel overwhelming. In truth, only a small group of them matter for daily decisions. This lesson explains each one in plain language and shows how they connect.",
  idea: [
    "Every metric answers one question. Spend answers how much money went out. Impressions answers how many times the ad appeared. Reach answers how many different people saw it. Frequency answers how many times the average person saw it.",
    "Then come the reaction numbers. CTR, the click-through rate, is the share of people who clicked after seeing the ad. CPC is what one click costs you. CPM is the cost of 1,000 appearances, and it tells you how expensive it is to reach your chosen audience.",
    "Finally the money numbers. Cost per result is what one useful action costs. ROAS is how much revenue you get back for each unit of money spent. These are the ones that decide whether the account lives or dies.",
    "The connection matters: CPM tells you what the audience costs, CTR tells you whether the ad is interesting, conversion rate tells you whether the page and offer work. Cost per result is all three multiplied together. So when cost per result rises, one of those three parts broke, and the numbers tell you which."
  ],
  example: {
    title: "Reading a row",
    body: "Spend 500. Impressions 100,000. Reach 40,000. Frequency 2.5. Clicks 1,200. CTR 1.2 percent. CPC 0.42. CPM 5.00. Leads 40. Cost per lead 12.50. Reading it in words: I reached 40,000 people, each saw the ad about two and a half times, a bit over 1 in 100 clicked, and 1 in 30 of the clickers became a lead which cost me 12.50 each."
  },
  steps: [
    "Start at cost per result. This is the headline.",
    "If it is bad, look at CPM. Is the audience itself expensive?",
    "Then look at CTR. Is the ad failing to interest people?",
    "Then look at conversion rate on the page. Are clickers arriving and leaving?",
    "Fix the broken part, not all three at once."
  ],
  mistakes: [
    "Celebrating a high CTR while cost per result gets worse. Clicks are not the goal.",
    "Comparing CPM between very different audiences or countries as if they should match.",
    "Looking at frequency alone without checking whether results are actually falling."
  ],
  words: [
    { t: "Impressions", d: "How many times the ad appeared on screens." },
    { t: "Reach", d: "How many different people saw it." },
    { t: "Frequency", d: "Impressions divided by reach. How often the average person saw it." },
    { t: "CTR", d: "Click-through rate. Clicks divided by impressions, shown as a percent." },
    { t: "CPM", d: "Cost of 1,000 impressions. A measure of how expensive your audience is." },
    { t: "ROAS", d: "Revenue divided by ad spend. 3 means 3 dollars back for each 1 spent." }
  ],
  takeaways: [
    "Cost per result is the headline number. Everything else explains it.",
    "CPM = audience cost. CTR = ad interest. Conversion rate = page and offer.",
    "A metric is only useful if it changes what you do next.",
    "Never compare CPM across different countries or audiences as if equal."
  ],
  selfCheck: [
    "I can define reach, frequency, CTR, CPM and cost per result without notes.",
    "I can read one row of data out loud as a sentence in plain English.",
    "I know which three parts to check when cost per result rises."
  ],
  quiz: [
    { q: "Frequency of 4.0 means...", options: ["4 people saw the ad", "The average person saw the ad about 4 times", "You paid 4 dollars per person"], a: 1, why: "Frequency is impressions divided by reach, so it describes repetition per person." },
    { q: "Cost per result rose, CTR stayed the same, CPM doubled. What most likely happened?", options: ["The ad became boring", "The audience became more expensive to reach", "The landing page broke"], a: 1, why: "Stable CTR with rising CPM points to auction or audience cost, not creative." },
    { q: "Which number is the headline for most businesses?", options: ["CTR", "Impressions", "Cost per result"], a: 2, why: "It ties spending directly to the outcome the business needs." }
  ],
  exercise: { task: "Take any ad report, real or sample. Write one paragraph in plain English describing what happened, using reach, frequency, CTR, CPM and cost per result. No jargon allowed beyond those words." },
  challenge: { task: "Build a one-page diagnostic sheet: if cost per result rises, which metric do you check first, second and third, and what action follows each answer. Make it usable by someone on their first week." }
},

"1.1.7": {
  intro: "People rarely buy the first time they see a business. They move through stages. This lesson explains those stages in simple words, and shows how to match ads to each one.",
  idea: [
    "A funnel is just a way of describing distance from buying. At the top are people who do not know you exist. In the middle are people who know you and are thinking about it. At the bottom are people who are almost ready and need a small push.",
    "The word funnel is used because the group gets smaller at each step. 10,000 people see the ad, 300 visit the site, 40 give their details, 8 buy.",
    "Each stage needs a different message. Showing a Buy now, last chance ad to someone who has never heard of you is like proposing marriage on a first meeting. Showing a gentle introduction video to someone who already has items in their cart wastes the moment.",
    "The practical use of the funnel is simple: it tells you what to say, and it tells you what number to judge each ad by. Top of funnel ads are judged on cheap attention and new people reached. Bottom of funnel ads are judged on cost per sale."
  ],
  example: {
    title: "Three ads, three stages",
    body: "A dental clinic. Top: a 20 second video called Three signs you should not ignore in your teeth, shown to everyone in the city. Middle: a post explaining how the treatment works and what it costs, shown to people who watched over half the video. Bottom: a simple offer with a booking button, shown to people who visited the booking page and did not book. Same clinic, three different conversations."
  },
  steps: [
    "Write down the stages your customers actually pass through, in their words.",
    "For each stage, write the one question in the customer's mind.",
    "Write one ad that answers that exact question.",
    "Decide the audience for each stage: cold people, engagers, or site visitors.",
    "Decide the number that judges each stage before you launch."
  ],
  mistakes: [
    "Running only bottom of funnel retargeting. The pool of people dries up and costs climb.",
    "Running only top of funnel content and never asking for the sale.",
    "Judging a top of funnel video by cost per purchase. Wrong stage, wrong number."
  ],
  words: [
    { t: "Funnel", d: "The path from not knowing you to buying from you." },
    { t: "Cold audience", d: "People who have never interacted with your business." },
    { t: "Retargeting", d: "Showing ads to people who already visited or engaged." },
    { t: "Customer journey", d: "The real sequence of steps a person takes before buying." }
  ],
  takeaways: [
    "Different stages need different messages and different success numbers.",
    "Retargeting alone will run dry without new people entering at the top.",
    "The funnel is a communication tool first, a targeting tool second.",
    "Match the ask to the distance: small ask for strangers, direct ask for the ready."
  ],
  selfCheck: [
    "I can describe the three broad stages in one sentence each.",
    "I can name the right success number for each stage.",
    "I can spot an ad that asks for too much too early."
  ],
  quiz: [
    { q: "Which number should judge a top of funnel awareness video?", options: ["Cost per purchase", "Cost to reach new people and how many watch it fully", "Return on ad spend"], a: 1, why: "Early stage ads are judged on attention and new reach, not final sales." },
    { q: "What happens if you only run retargeting?", options: ["Costs fall forever", "The audience pool shrinks and costs rise", "Nothing changes"], a: 1, why: "Without new people entering at the top, you keep showing ads to the same shrinking group." },
    { q: "A person has items in their cart. What should the ad say?", options: ["An introduction to who you are", "A small, direct push to finish the order", "A general brand story"], a: 1, why: "Match the message to how close the person is to buying." }
  ],
  exercise: { task: "Write three ad messages for one business: one for strangers, one for people who showed interest, one for people who almost bought. Each message maximum 3 sentences." },
  challenge: { task: "Map a real customer journey for a considered purchase that takes weeks. Include the moments of doubt, and write the exact ad that answers each doubt. Then state which audience and which number judges each one." }
},

"1.1.8": {
  intro: "This last lesson of the module ties everything together. It gives you a simple way to make decisions so that you change the right things, at the right time, for the right reasons.",
  idea: [
    "Most people lose money on Meta ads not because they lack knowledge, but because they react too fast, to numbers that are too small, at the wrong level of the account.",
    "A good decision rule has three parts. First, enough data: never decide on fewer than about 50 results, or at least 3 to 4 days for a young ad set. Second, one change at a time: if you change three things and results improve, you learned nothing. Third, the right level: fix audience problems at ad set level, message problems at ad level, and goal problems at campaign level.",
    "There is also a useful question to ask before every change: what would have to be true for this change to help? If you cannot answer, you are guessing, and guessing is expensive.",
    "Finally, write down what you did and why. In three weeks you will not remember, and the account history is the only honest teacher you have."
  ],
  example: {
    title: "A decision, done properly",
    body: "Cost per lead rose from 12 to 19 over five days. Before touching anything, the buyer checks: CPM flat, CTR fell from 1.4 to 0.6 percent, frequency rose from 1.8 to 4.6. Conclusion: people have seen the ad too many times and stopped caring. Decision: add new creative at ad level. Do not touch budget, audience or bidding. One change, correct level, clear reason, written in the log."
  },
  steps: [
    "State the problem as a number, not a feeling.",
    "Check whether you have enough data to trust it.",
    "Find the broken part using CPM, CTR and conversion rate.",
    "Decide the level where the fix belongs.",
    "Make one change, and write down what you expect to happen.",
    "Wait the agreed number of days before judging."
  ],
  mistakes: [
    "Changing budget, audience and creative on the same day.",
    "Reacting to a single bad day inside a good week.",
    "Keeping no record, so the same mistake repeats every few months."
  ],
  words: [
    { t: "Decision rule", d: "A written rule that says when you are allowed to change something." },
    { t: "Signal", d: "A number big enough to be trusted." },
    { t: "Noise", d: "Normal random movement that means nothing." }
  ],
  takeaways: [
    "Decide on results and days, never on hours and feelings.",
    "One change at a time, or you cannot learn from the outcome.",
    "Match the fix to the level: campaign, ad set or ad.",
    "Write every change down with the reason and the expected effect."
  ],
  selfCheck: [
    "I have a written minimum amount of data before I allow myself to act.",
    "I can name which level fixes which type of problem.",
    "I keep a simple log of changes and reasons."
  ],
  quiz: [
    { q: "Results dropped for one day inside an otherwise steady week. What should you do?", options: ["Cut the budget immediately", "Wait, because one day is usually noise", "Rebuild the campaign"], a: 1, why: "Single day swings are normal. Act on trends supported by enough results." },
    { q: "Frequency is high and CTR is falling. Where does the fix belong?", options: ["Campaign level, change objective", "Ad level, add new creative", "Billing settings"], a: 1, why: "People have seen the same message too often, so the message is what must change." },
    { q: "Why change only one thing at a time?", options: ["Meta charges for multiple edits", "So you can tell which change caused the result", "It is faster"], a: 1, why: "Multiple simultaneous changes make the outcome impossible to explain." }
  ],
  exercise: { task: "Write your personal decision rules on one page: how many results before you judge, how many days minimum, which change you are allowed to make for each symptom. Pin it where you work." },
  challenge: { task: "Take a past campaign that did badly. Rewrite its history: list each change that was made, judge whether it followed good decision rules, and write what you would have done instead at each point." }
}

});
