/* Module 15 - Scaling and Optimisation (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"4.15.1": {
  intro: "Optimisation means making an account better over time. This lesson defines what that actually involves, because the word is used loosely and often means nothing.",
  idea: [
    "Optimisation is not fiddling. It is a cycle: measure, find the weakest part, change one thing, wait, measure again.",
    "The word is often used to describe activity rather than improvement. Someone spends two hours in the account adjusting things and calls it optimisation. If cost per result is the same at the end of the month, nothing was optimised. Activity is not progress.",
    "Real optimisation targets one of four things: the price of reaching people, the rate at which they respond, the rate at which responses turn into business, or the value of each piece of business. Everything else is noise.",
    "The discipline is to know, before you touch anything, which of those four you are trying to improve and what evidence tells you it is the weakest. Without that, changes are guesses, and guesses average out to nothing."
  ],
  example: {
    title: "Activity against improvement",
    body: "One manager made 47 changes in a month: budget adjustments, audience edits, paused and unpaused ads. Cost per lead went from 19 to 20. Another made 4 changes: replaced three fatigued creatives and fixed a slow landing page. Cost per lead went from 19 to 13. The second person did far less and improved far more, because each change targeted an identified weakness."
  },
  steps: [
    "Measure the four parts: impression cost, response rate, conversion rate, value per result.",
    "Identify which is weakest compared with your own history.",
    "Form one specific idea about why.",
    "Make one change aimed at it.",
    "Wait long enough for evidence.",
    "Measure again and record whether it worked."
  ],
  mistakes: [
    "Measuring activity instead of improvement.",
    "Changing several things so nothing can be attributed.",
    "Optimising the part that is already strong."
  ],
  words: [
    { t: "Optimisation", d: "A cycle of measuring, changing one thing, and measuring again." },
    { t: "Weakest part", d: "The step in the chain doing most damage to your result." },
    { t: "Attribution of change", d: "Knowing which change caused which effect." }
  ],
  takeaways: [
    "Optimisation is a cycle, not constant activity.",
    "Four things can be improved: impression cost, response rate, conversion rate, value.",
    "Identify the weakest part before touching anything.",
    "Count improvements, not changes."
  ],
  selfCheck: [
    "I can name the four things that can be optimised.",
    "I identify the weakest part before making changes.",
    "I measure improvement rather than counting activity."
  ],
  quiz: [
    { q: "What does real optimisation require first?", options: ["More budget", "Identifying which part is weakest, with evidence", "More ads"], a: 1, why: "Without a target, changes are guesses that average out to nothing." },
    { q: "Which is not one of the four improvable parts?", options: ["The price of reaching people", "The number of changes you make", "The rate at which people respond"], a: 1, why: "Activity is not an outcome." },
    { q: "Why change one thing at a time?", options: ["It is faster", "So you can tell which change caused the effect", "Meta requires it"], a: 1, why: "Multiple simultaneous changes destroy attribution." }
  ],
  exercise: { task: "Measure your four parts for last month. Identify the weakest compared with your own three month history and write one specific idea about why it is weak." },
  challenge: { task: "Build an optimisation framework: the four parts, how each is measured, the benchmarks from your own history, the diagnostic questions for each, and a monthly review process that produces one or two targeted changes." }
},

"4.15.2": {
  intro: "Knowing what to optimise is more valuable than knowing how. This lesson gives you a way to find the biggest opportunity quickly.",
  idea: [
    "Your cost per result is the product of a chain. It costs a certain amount to show your ad. A share of people click. A share of those convert. Multiply the three and you have your cost per result.",
    "Because it is a chain, the weakest link limits everything. Improving a step that is already strong produces little. Improving the weakest step produces a lot.",
    "So the first job is always to compare each step against something. Your own history is the best comparison. Industry averages are weak comparisons, because your business, price and market differ.",
    "A practical shortcut: calculate what would happen if each step improved by 20 percent. Whichever produces the biggest improvement in cost per result is where your attention belongs. This takes five minutes with a calculator and prevents months of work in the wrong place."
  ],
  example: {
    title: "Finding the weak link",
    body: "Impression cost 8, click rate 1.2 percent, conversion rate 0.9 percent, cost per purchase 74. Improving impression cost by 20 percent gives 59. Improving click rate by 20 percent gives 62. Improving conversion rate by 20 percent gives 62. But comparing against their own history showed conversion rate had been 2.1 percent six months ago. Restoring it to that level would give 32. The landing page, not the ads, was the opportunity."
  },
  steps: [
    "Write down your impression cost, click rate and conversion rate.",
    "Compare each against your own history over the last six months.",
    "Identify any step that has fallen significantly.",
    "Calculate the effect of restoring it to its previous level.",
    "Work on the largest opportunity first.",
    "Re-run this analysis monthly."
  ],
  mistakes: [
    "Comparing against industry averages rather than your own history.",
    "Working on the ads when the landing page is the weak link.",
    "Improving a step that is already performing well."
  ],
  words: [
    { t: "Chain", d: "The sequence of steps that together produce your cost per result." },
    { t: "Weakest link", d: "The step limiting your overall performance." },
    { t: "Own history", d: "Your past performance, the most reliable comparison available." }
  ],
  takeaways: [
    "Cost per result is a chain, and the weakest link limits everything.",
    "Compare each step against your own history, not industry averages.",
    "Calculate which improvement would help most before starting work.",
    "The weak link is often outside the ad account."
  ],
  selfCheck: [
    "I have my three step metrics written down.",
    "I compare against my own six month history.",
    "I know which step is currently weakest."
  ],
  quiz: [
    { q: "What is the best comparison for your metrics?", options: ["Industry averages", "Your own historical performance", "Competitor claims"], a: 1, why: "Your business, price and market make external averages unreliable." },
    { q: "Why focus on the weakest link?", options: ["It is easiest to fix", "Because it limits everything downstream, so improving it produces the largest gain", "It looks worst in reports"], a: 1, why: "Improving a strong step yields little when a weak one constrains the chain." },
    { q: "Where is the weak link often found?", options: ["Always in the ads", "Often outside the ad account, such as the landing page", "Always in the audience"], a: 1, why: "Conversion rate problems live on the website, not in Ads Manager." }
  ],
  exercise: { task: "Calculate your cost per result chain and compare each step against six months ago. Identify which step fell most and calculate the effect of restoring it." },
  challenge: { task: "Build a diagnostic model in a spreadsheet: the three steps, your current and historical figures, a calculator showing the effect of improving each by a set percentage, and a ranked list of opportunities." }
},

"4.15.3": {
  intro: "Stability is what makes an account predictable and scalable. This lesson explains how to build it and why it matters more than short bursts of good performance.",
  idea: [
    "A stable account produces similar results week after week. An unstable one produces a great week, a terrible week, and no way to plan.",
    "Stability comes mainly from three things. Enough results per ad set, which means around 50 a week. Few changes, because every change restarts learning. And enough creative variety that no single ad fatiguing destroys performance.",
    "Instability has a cost beyond frustration. You cannot scale an unstable account, because you do not know what you are scaling. Doubling the budget on something that swings between 15 and 45 per result simply produces more swing.",
    "The practical target: before scaling anything, you should be able to predict next week's cost per result within about 20 percent. If you cannot, fix stability first, and that usually means consolidating ad sets and leaving them alone."
  ],
  example: {
    title: "Stability before scale",
    body: "An account swung between 18 and 52 per lead week to week. The owner wanted to double the budget. Instead they consolidated eight ad sets into three, stopped making daily changes, and added four new creatives. After six weeks the range was 22 to 27. They then doubled the budget, and the range moved to 26 to 31, which was predictable and manageable. Scaling the earlier version would have been chaos."
  },
  steps: [
    "Measure your weekly cost per result over the last eight weeks.",
    "Calculate the range between best and worst.",
    "If the range is wider than about 30 percent, do not scale yet.",
    "Consolidate ad sets so each gets enough results.",
    "Reduce the number of changes you make.",
    "Add creative variety so no single ad carries everything."
  ],
  mistakes: [
    "Scaling an unstable account and blaming the scaling.",
    "Making frequent changes while trying to achieve stability.",
    "Depending on a single ad, so its fatigue destroys the account."
  ],
  words: [
    { t: "Stability", d: "Producing similar results week after week." },
    { t: "Range", d: "The difference between your best and worst recent weeks." },
    { t: "Predictability", d: "Being able to estimate next week within a reasonable margin." }
  ],
  takeaways: [
    "Stability comes from enough results, few changes and creative variety.",
    "You cannot scale what you cannot predict.",
    "Aim to predict next week within about 20 percent before scaling.",
    "Consolidation is usually the fastest route to stability."
  ],
  selfCheck: [
    "I know my weekly range over the last eight weeks.",
    "I can predict next week within 20 percent.",
    "No single ad carries my entire account."
  ],
  quiz: [
    { q: "What should you do before scaling?", options: ["Add more ad sets", "Achieve stability, so you can predict results", "Lower your bid"], a: 1, why: "Scaling multiplies whatever you have, including instability." },
    { q: "What is the fastest route to stability?", options: ["More ad sets", "Consolidating so each ad set gets enough results", "More frequent changes"], a: 1, why: "Enough results per ad set is the main requirement for steady delivery." },
    { q: "How predictable should an account be before scaling?", options: ["Exactly predictable", "Within about 20 percent for next week", "No prediction needed"], a: 1, why: "That is close enough to plan with, while allowing for normal variation." }
  ],
  exercise: { task: "Chart your weekly cost per result for eight weeks and calculate the range. Write down whether you are stable enough to scale, and if not, which of the three causes applies." },
  challenge: { task: "Write a stability improvement plan for an unstable account: the consolidation steps, the change freeze period, the creative additions, the measurement schedule, and the criteria that would confirm readiness to scale." }
},

"4.15.4": {
  intro: "Vertical scaling means spending more money in the same place. This lesson covers how to do it without losing what was working.",
  idea: [
    "Vertical scaling is the simplest form of growth: take a working ad set and raise its budget. Nothing about the structure changes.",
    "It works because the system can usually find more people similar to those already converting. It stops working when it runs out of them, which shows as rising costs and rising frequency.",
    "The method is gradual increases, as covered in the budgeting module: 20 to 30 percent, every two to three days, watching cost per result after each step. This allows the system to absorb each increase without a disruptive re-learning period.",
    "The important part is knowing when to stop. Every ad set has a ceiling where additional budget produces worse results than it is worth. That point is not failure, it is information: it tells you that further growth must come from somewhere else, which is what horizontal scaling is for."
  ],
  example: {
    title: "Finding the ceiling",
    body: "An ad set at 200 a day produced leads at 18. At 260, still 18. At 340, 19. At 440, 23. At 570, 31. The useful ceiling was around 340 to 440 depending on what the business could afford. Pushing to 570 raised total leads but at a cost that was no longer profitable. Knowing the ceiling let them hold there and grow elsewhere."
  },
  steps: [
    "Confirm the ad set is stable before increasing anything.",
    "Raise the budget by 20 to 30 percent.",
    "Wait two to three days.",
    "Compare cost per result against the previous level.",
    "If it held, repeat. If it worsened significantly, stop or step back.",
    "Record the ceiling you found, and revisit it periodically."
  ],
  mistakes: [
    "Increasing budget before the ad set is stable.",
    "Pushing past the ceiling because the total number of results still rises.",
    "Never revisiting the ceiling, which moves as creative and market change."
  ],
  words: [
    { t: "Vertical scaling", d: "Increasing budget within the same ad set." },
    { t: "Ceiling", d: "The budget level beyond which results become unprofitable." },
    { t: "Absorption", d: "The system adjusting to a budget increase without disruption." }
  ],
  takeaways: [
    "Vertical scaling is raising budget in the same place, gradually.",
    "Increase 20 to 30 percent every two to three days.",
    "Every ad set has a ceiling. Find it and record it.",
    "Rising total results does not mean the increase was worthwhile."
  ],
  selfCheck: [
    "I only scale stable ad sets.",
    "I increase in controlled steps with waiting periods.",
    "I know the ceiling of my main ad sets."
  ],
  quiz: [
    { q: "How should vertical scaling be done?", options: ["Double the budget at once", "20 to 30 percent every two to three days", "Change it daily"], a: 1, why: "Gradual increases are absorbed without disrupting delivery." },
    { q: "What is the ceiling?", options: ["The maximum Meta allows", "The budget level beyond which additional spend becomes unprofitable", "The largest audience"], a: 1, why: "It marks where vertical scaling should stop and other growth must begin." },
    { q: "Total results still rise but cost per result is now unprofitable. What does that mean?", options: ["Keep increasing", "You have passed the useful ceiling", "The tracking is broken"], a: 1, why: "More results at an unprofitable price makes the business worse, not better." }
  ],
  exercise: { task: "Take your best ad set and plan a vertical scaling schedule: the steps, the dates, and what you will check before each. Record the cost per result at each level to find the ceiling." },
  challenge: { task: "Document the ceilings across your account: each major ad set, the budget level where performance degrades, the evidence, and a plan for what growth route follows once each ceiling is reached." }
},

"4.15.5": {
  intro: "Horizontal scaling means growing by adding new things rather than spending more on existing ones. This lesson covers the options and when each makes sense.",
  idea: [
    "When an ad set reaches its ceiling, further growth must come from somewhere new. There are four directions.",
    "New audiences: a different country or region, a new lookalike source, or a different age range you previously excluded. This adds people.",
    "New creative angles: a message aimed at a group you have not spoken to. This reaches people who were always there but never responded.",
    "New placements or formats: if you have never run Reels properly, that is new inventory available to you.",
    "New objectives or offers: a different entry point into your business, such as a lower priced first purchase or a different lead magnet. The right choice depends on which limit you hit. If frequency is high and the audience is exhausted, you need new people. If frequency is low but response is poor, you need new messages."
  ],
  example: {
    title: "Reading the limit correctly",
    body: "An account hit its ceiling with frequency at 6.8 and click rate falling. That is audience exhaustion, so they expanded to two neighbouring countries and performance recovered. A second account hit its ceiling with frequency at 1.9 and a stable click rate. That is not exhaustion, so expanding the audience would not have helped. They added three new creative angles instead, which lifted the ceiling by about 40 percent."
  },
  steps: [
    "Check frequency and click rate at the point where scaling stopped working.",
    "High frequency means you need new people.",
    "Low frequency with weak response means you need new messages.",
    "Add one new direction at a time.",
    "Give it its own ad set and enough budget to reach 50 results a week.",
    "Compare against the existing ad set before deciding it worked."
  ],
  mistakes: [
    "Adding new audiences when the real limit was creative.",
    "Adding several new directions at once so nothing can be judged.",
    "Starving the new ad set of budget so it never leaves learning."
  ],
  words: [
    { t: "Horizontal scaling", d: "Growing by adding new audiences, creative, placements or offers." },
    { t: "Audience exhaustion", d: "Having reached most of the available people repeatedly." },
    { t: "Entry point", d: "A different offer that brings new people into the business." }
  ],
  takeaways: [
    "When vertical scaling stops, growth must come from something new.",
    "High frequency means you need people. Low frequency with weak response means you need messages.",
    "Add one new direction at a time.",
    "Give each new ad set enough budget to learn."
  ],
  selfCheck: [
    "I know whether my limit is people or messages.",
    "I add one new direction at a time.",
    "New ad sets receive enough budget to reach 50 results a week."
  ],
  quiz: [
    { q: "Frequency is 7 and click rate is falling. What do you need?", options: ["New creative only", "New people: a wider or different audience", "A lower budget"], a: 1, why: "High frequency means you have reached the available audience repeatedly." },
    { q: "Frequency is 1.8 and response is weak. What do you need?", options: ["A larger audience", "New creative angles", "A bid cap"], a: 1, why: "Plenty of people are available but the message is not reaching them effectively." },
    { q: "How many new directions should you add at once?", options: ["One", "Four", "As many as possible"], a: 0, why: "Adding several at once makes the result impossible to attribute." }
  ],
  exercise: { task: "Check frequency and click rate at your current scaling limit. Decide whether you need new people or new messages, and write down the single direction you will add first." },
  challenge: { task: "Design a horizontal scaling roadmap: the directions available to your business ranked by expected value, the evidence that would trigger each, the budget each requires, and the sequence over the next six months." }
},

"4.15.6": {
  intro: "Creative is usually the most reliable way to grow, because it raises the ceiling rather than just spending more under it. This lesson explains the mechanism.",
  idea: [
    "When you add a genuinely new creative angle, you reach people who were always in your audience but never responded to your previous message. The audience did not change. The share of it you can convert did.",
    "This is why creative scaling compounds while budget scaling does not. Doubling the budget gives you more of the same people at rising prices. A new angle that works gives you a new group at the original prices.",
    "The practical approach is to keep a steady flow of new angles rather than waiting for performance to decline. Businesses that add two or three new angles a month rarely hit hard ceilings, because they are constantly opening new pockets of their market.",
    "There is a measurement point worth knowing. When a new angle works, you often see the whole account improve, not just the new ad set, because the system has more effective options to choose from across a wider range of people."
  ],
  example: {
    title: "Raising the ceiling",
    body: "An account was stuck at 400 a day, with costs rising above that. They introduced a new angle aimed at a group they had never addressed. Within three weeks they were spending 700 a day at the same cost per result as they had at 400. The audience had not changed and the budget ceiling had not been pushed. A new message had simply made more of the same audience reachable."
  },
  steps: [
    "Identify groups within your audience you have never spoken to directly.",
    "Write one angle for each.",
    "Produce two concepts per angle.",
    "Launch them alongside existing creative, not instead of it.",
    "Watch both the new ad set and the total account performance.",
    "Maintain a rhythm of new angles rather than reacting to decline."
  ],
  mistakes: [
    "Producing variations of the existing angle and calling it new creative.",
    "Replacing working creative instead of adding alongside it.",
    "Waiting for performance to fall before producing anything new."
  ],
  words: [
    { t: "Creative scaling", d: "Growing by reaching more of your audience with new messages." },
    { t: "Reachable share", d: "The proportion of an audience your current messages can convert." },
    { t: "Compounding", d: "Each new working angle adding to the total rather than replacing it." }
  ],
  takeaways: [
    "New angles raise the ceiling rather than spending more beneath it.",
    "Creative scaling compounds. Budget scaling does not.",
    "Add alongside existing creative, never instead of it.",
    "Maintain a steady rhythm rather than reacting to decline."
  ],
  selfCheck: [
    "I add new angles on a regular schedule.",
    "My new creative is genuinely new, not a variation.",
    "I watch total account performance when adding angles."
  ],
  quiz: [
    { q: "Why does creative scaling compound?", options: ["It is cheaper", "Each new working angle reaches people the previous ones could not", "Meta rewards new files"], a: 1, why: "It increases the share of the audience you can convert, rather than spending more on the same share." },
    { q: "What should happen to existing working creative when you add a new angle?", options: ["Pause it", "Keep it running alongside", "Delete it"], a: 1, why: "Adding builds the portfolio. Replacing simply swaps one result for another." },
    { q: "When should new angles be produced?", options: ["Only when performance declines", "On a steady schedule, before decline", "Once a year"], a: 1, why: "Reacting to decline means paying for the gap while new work is produced." }
  ],
  exercise: { task: "List three groups inside your audience you have never spoken to directly. Write one angle for each and schedule production of the first this month." },
  challenge: { task: "Build a creative scaling plan: the untouched segments in your market, the angles for each, the production schedule, how they launch alongside existing work, and how you measure the effect on the account ceiling." }
},

"4.15.7": {
  intro: "Audience expansion adds new people to reach. This lesson covers the options in order of usual value and the traps in each.",
  idea: [
    "The options, roughly in order of how often they work: widening the existing audience by removing restrictions, extending the age range, adding neighbouring geographic areas, adding a new lookalike source, and entering a genuinely new market.",
    "Removing restrictions is first because it is free and immediate. Many accounts carry age limits, interest limits or placement exclusions set long ago for reasons nobody remembers. Removing them often adds reach at the same cost.",
    "Geographic expansion is usually next, but with a caution: costs differ substantially between countries, and a cheaper country is not automatically better. Cheap impressions in a market where your product cannot be delivered are worthless.",
    "New markets are last because they require more than targeting. Language, payment methods, delivery, local competition and cultural fit all change. Treat a new country as a new business, not as a new ad set."
  ],
  example: {
    title: "Expansion done in the wrong order",
    body: "A business expanded into three new countries to grow, spending four months on translation, payment methods and local logistics. Afterwards they discovered their main ad set still excluded everyone over 45, a restriction set two years earlier. Removing it added 30 percent more volume at the same cost, in one afternoon. The easy expansion had been available all along."
  },
  steps: [
    "Audit every restriction in your existing ad sets and remove any without a current reason.",
    "Extend the age range in one step and measure.",
    "Add neighbouring areas you can genuinely serve.",
    "Test a new lookalike source if your customer data supports one.",
    "Treat a new country as a full business project, not a targeting change.",
    "Measure each expansion separately."
  ],
  mistakes: [
    "Entering new countries before removing pointless restrictions at home.",
    "Chasing cheap impressions in markets you cannot serve.",
    "Expanding several directions at once."
  ],
  words: [
    { t: "Restriction audit", d: "Reviewing every limit in your targeting and removing those without a reason." },
    { t: "Geographic expansion", d: "Adding new areas or countries." },
    { t: "Market entry", d: "Entering a new country, which affects the whole business, not just ads." }
  ],
  takeaways: [
    "Remove pointless restrictions first. It is free and immediate.",
    "Extend age ranges before entering new countries.",
    "Cheap impressions in markets you cannot serve are worthless.",
    "A new country is a business project, not an ad set."
  ],
  selfCheck: [
    "I have audited every restriction in my targeting.",
    "My expansions are measured separately.",
    "I understand what a new market requires beyond advertising."
  ],
  quiz: [
    { q: "What should you do first when expanding?", options: ["Enter a new country", "Remove restrictions in your existing audience that no longer have a reason", "Change objective"], a: 1, why: "It is free, immediate and often the largest easy gain available." },
    { q: "Why is a cheap new country not automatically good?", options: ["Meta charges more there", "Cheap impressions are worthless if you cannot serve that market", "Currency conversion"], a: 1, why: "Reach only matters if the business can actually fulfil the sale." },
    { q: "How should entering a new country be treated?", options: ["As a targeting change", "As a full business project involving language, payment and delivery", "As a creative test"], a: 1, why: "Advertising is only one part of what a new market requires." }
  ],
  exercise: { task: "Audit every restriction in your ad sets: age, gender, interests, placements, devices. For each, write the current reason. Remove every one where you cannot state a reason." },
  challenge: { task: "Build an expansion sequence for the next year: the restrictions to remove, the geographic steps, the lookalike sources to test, the market entry requirements if applicable, and the measurement plan for each stage." }
},

"4.15.8": {
  intro: "Every account eventually reaches a point where more money produces proportionally less. Understanding this pattern prevents both premature stopping and expensive overreach.",
  idea: [
    "Diminishing returns means each additional unit of budget buys slightly less than the previous one. It is not a failure. It is the normal shape of advertising.",
    "The reason is simple. The system spends your first money on the cheapest, most likely buyers. As the budget grows it must reach further into the audience, toward people less likely to convert, which costs more per result.",
    "The practical question is where to stop. The answer is not where cost per result starts rising. It is where the additional results stop being worth their cost to your business.",
    "This requires knowing your marginal economics. If a customer is worth 100 to you, results at 60 are profitable even if your average was 35. Stopping at the average means leaving profitable growth unclaimed, which is a common and expensive mistake."
  ],
  example: {
    title: "Stopping at the wrong point",
    body: "An account averaged 28 per customer and the owner refused to let it rise. Analysis showed each customer was worth 95 over a year. Increasing spend pushed the average to 41, with the additional customers costing about 68 each. Every one of those was profitable. Holding the average at 28 had been costing them roughly 40 percent of their possible growth."
  },
  steps: [
    "Calculate what a customer is genuinely worth to you.",
    "Increase budget in steps and record the cost of the additional results at each step.",
    "Compare the marginal cost with customer value, not the average cost.",
    "Continue while additional results remain profitable.",
    "Stop when marginal cost approaches customer value.",
    "Re-check as customer value and market conditions change."
  ],
  mistakes: [
    "Holding the average cost constant and forgoing profitable growth.",
    "Ignoring the difference between average and marginal cost.",
    "Scaling past the point where additional results lose money."
  ],
  words: [
    { t: "Diminishing returns", d: "Each additional unit of budget producing fewer results." },
    { t: "Marginal cost", d: "The cost of the additional results produced by extra budget." },
    { t: "Customer value", d: "What a customer is worth to your business, ideally over their lifetime." }
  ],
  takeaways: [
    "Diminishing returns is normal, not a failure.",
    "Judge growth by marginal cost against customer value, not by average cost.",
    "Holding the average constant leaves profitable growth unclaimed.",
    "Stop when additional results approach customer value."
  ],
  selfCheck: [
    "I know what a customer is worth to my business.",
    "I understand the difference between average and marginal cost.",
    "My stopping point is based on value, not on protecting the average."
  ],
  quiz: [
    { q: "Why does cost per result rise as budget grows?", options: ["Meta penalises large spenders", "The system must reach further into the audience, toward less likely buyers", "Creative fatigues instantly"], a: 1, why: "The cheapest, most likely buyers are reached first." },
    { q: "What should decide when to stop scaling?", options: ["When the average cost rises at all", "When the additional results stop being worth their cost", "A fixed budget limit"], a: 1, why: "Marginal profitability, not average cost, defines the correct stopping point." },
    { q: "Average cost is 30, customer value is 90, additional customers cost 65. What should you do?", options: ["Stop, the average is rising", "Continue, because those additional customers are still profitable", "Reduce the budget"], a: 1, why: "Every customer acquired below their value adds profit." }
  ],
  exercise: { task: "Calculate the marginal cost of your last budget increase: the additional spend divided by the additional results. Compare it against your customer value and decide whether to continue." },
  challenge: { task: "Build a marginal economics model: customer value including repeat purchase, the marginal cost at several budget levels from your own history, the profitable scaling ceiling, and the review process as value changes." }
},

"4.15.9": {
  intro: "This final lesson of Level 4 gives you a diagnostic routine for when scaling stops working, so you can identify the cause quickly.",
  idea: [
    "When results worsen during scaling, there are five usual causes, and they can be separated with a few checks.",
    "Cause one: audience exhaustion. Frequency rises, click rate falls, reach stops growing. Fix: expand the audience.",
    "Cause two: creative fatigue. Frequency rises and click rate falls, but reach is still growing. Fix: new creative angles.",
    "Cause three: learning disruption. It follows a change you made, and costs were fine before. Fix: stop changing things and wait.",
    "Cause four: market conditions. Impression costs rose across the whole account, including campaigns you did not touch. Fix: usually nothing, but adjust expectations and check the calendar. Cause five: the destination. Click rate is fine but conversion rate fell, meaning the problem is after the click."
  ],
  example: {
    title: "Separating two similar causes",
    body: "Two accounts both showed rising frequency and falling click rate. In the first, reach had stopped growing entirely, which meant the audience was exhausted. In the second, reach was still climbing steadily, which meant new people were still being found and the message itself had gone stale. Same symptoms, different causes, opposite fixes: one needed a bigger audience, the other needed new creative."
  },
  steps: [
    "Check frequency and whether reach is still growing.",
    "Check whether click rate or conversion rate fell.",
    "Check the activity history for recent changes.",
    "Check whether impression costs rose across untouched campaigns too.",
    "Match the pattern to one of the five causes.",
    "Apply one fix and wait before judging."
  ],
  mistakes: [
    "Applying the audience fix to a creative problem, or the reverse.",
    "Diagnosing without checking whether reach is still growing.",
    "Making several fixes at once."
  ],
  words: [
    { t: "Audience exhaustion", d: "Having reached most available people, so reach stops growing." },
    { t: "Learning disruption", d: "Instability caused by a recent change." },
    { t: "Destination problem", d: "A fall in conversion after the click, outside the ad account." }
  ],
  takeaways: [
    "Five causes: exhaustion, fatigue, disruption, market, destination.",
    "Whether reach is still growing separates exhaustion from fatigue.",
    "Check untouched campaigns to identify market-wide movement.",
    "Apply one fix at a time and wait."
  ],
  selfCheck: [
    "I can separate audience exhaustion from creative fatigue.",
    "I check untouched campaigns to detect market movement.",
    "I apply one fix at a time."
  ],
  quiz: [
    { q: "Frequency rises, click rate falls, reach has stopped growing. What is it?", options: ["Creative fatigue", "Audience exhaustion", "A tracking problem"], a: 1, why: "Reach no longer growing means you have reached the available people." },
    { q: "Frequency rises, click rate falls, but reach is still growing. What is it?", options: ["Audience exhaustion", "Creative fatigue", "A billing issue"], a: 1, why: "New people are still being found, so the message has gone stale." },
    { q: "How do you confirm a market-wide change?", options: ["Ask Meta support", "Check whether impression costs rose in campaigns you did not touch", "Change the objective"], a: 1, why: "Movement across untouched campaigns points to conditions rather than your changes." }
  ],
  exercise: { task: "Take a period when your scaling stopped working. Run the five checks and identify which cause it was. Write down whether the fix you applied matched the real cause." },
  challenge: { task: "Build a scaling diagnostic guide: the five causes, the exact checks that separate them, the fix for each, the expected recovery time, and the prevention measures that reduce how often each occurs." }
}

});
