/* Module 20 - Reporting and Analytics (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"5.20.1": {
  intro: "A report exists to help someone make a decision. If nobody acts differently after reading it, the report failed, however beautiful it was.",
  plain: [
    "Imagine a doctor handing you forty pages of test results with no explanation. All the numbers are correct. You still have no idea what to do.",
    "Now imagine the doctor says: your blood pressure is high, here is what we will change, and we will test again in a month. Same information, but now it produces action.",
    "Most advertising reports are the forty pages. Good reports are the doctor's sentence."
  ],
  idea: [
    "Before building any report, answer three questions. Who reads this? What decision do they make? What would change their mind?",
    "The answers differ enormously by audience. A media buyer needs detail at ad level to decide what to pause and scale. A marketing manager needs channel level performance to allocate budget. A business owner needs to know whether advertising is making money and whether to spend more.",
    "Giving the business owner the buyer's report is a common and damaging mistake. They see numbers they cannot interpret, focus on whichever looks alarming, and ask questions that send the team chasing noise.",
    "There is also a discipline about what to leave out. Every number included implies it matters. If you show frequency to someone who will never act on frequency, you have added confusion at no benefit. A short report that produces a decision beats a complete one that produces a discussion.",
    "Finally, a report should always contain interpretation, not just figures. What happened, why, what you are doing about it. Numbers alone force every reader to interpret independently, and they will interpret differently."
  ],
  example: {
    title: "The report that finally worked",
    body: "An agency sent clients 14 pages of tables every month. Clients rarely read them and frequently asked confused questions. They replaced it with one page: three numbers, three sentences of explanation, and one recommendation with its expected effect. Client satisfaction rose sharply, meetings became shorter, and decisions were made faster. The 14 pages remained available as an appendix, and were almost never opened."
  },
  steps: [
    "Identify who reads the report and what they decide.",
    "Choose the smallest number of figures that inform that decision.",
    "Write the interpretation, not just the numbers.",
    "State clearly what you are doing next and why.",
    "Remove anything the reader will never act on.",
    "Keep the detail available separately for anyone who wants it."
  ],
  mistakes: [
    "Sending the same report to every audience.",
    "Presenting figures with no interpretation.",
    "Including numbers because they are available rather than because they matter."
  ],
  words: [
    { t: "Report", d: "A document produced to help someone make a decision." },
    { t: "Audience", d: "The specific person who reads it and what they control." },
    { t: "Interpretation", d: "The explanation of what the numbers mean and what follows." },
    { t: "Appendix", d: "Detailed data kept available but out of the main report." }
  ],
  takeaways: [
    "A report that produces no decision has failed.",
    "Different audiences need different reports.",
    "Always include interpretation, not only figures.",
    "Leave out anything the reader will never act on."
  ],
  selfCheck: [
    "I know who reads each of my reports and what they decide.",
    "My reports include interpretation and a recommendation.",
    "I have removed numbers nobody acts on."
  ],
  quiz: [
    { q: "What makes a report successful?", options: ["Completeness", "Someone makes a better decision because of it", "Visual design"], a: 1, why: "The purpose of a report is action, not documentation." },
    { q: "Why not send the same report to everyone?", options: ["It takes more time", "Different readers make different decisions and need different information", "Meta forbids it"], a: 1, why: "Irrelevant detail produces confusion and wasted discussion." },
    { q: "What must every report contain besides numbers?", options: ["A logo", "Interpretation and a clear next action", "Every available metric"], a: 1, why: "Numbers alone force each reader to interpret differently." }
  ],
  exercise: { task: "Take your current report and cross out every number the reader has never once acted on. Write one sentence of interpretation and one recommendation at the top. Compare the two versions." },
  challenge: { task: "Design three reports for three audiences: the media buyer, the marketing manager and the business owner. For each, state the decision it serves, the figures included, the interpretation format, and the frequency." }
},

"5.20.2": {
  intro: "Report Builder lets you create custom reports and schedule them. This lesson covers building reports that stay useful without daily rebuilding.",
  plain: [
    "Most people rebuild the same report by hand every week, choosing the same columns and the same date range, then copying it into a document.",
    "Report Builder is the tool that does that automatically and emails the result. The setup takes twenty minutes once, and saves an hour every week afterwards.",
    "It is the difference between cooking every meal from scratch and preparing a week's food on Sunday."
  ],
  idea: [
    "Report Builder sits inside Ads Manager as a separate reporting area. You choose the level of detail, the metrics, the breakdowns and the date range, then save the arrangement.",
    "The most valuable feature is scheduling. A saved report can be emailed automatically to a list of people, daily, weekly or monthly. This removes the human step that usually causes reports to be late or forgotten.",
    "Three practical points make reports genuinely useful. Use relative date ranges, such as last 7 days, rather than fixed dates, so the report stays current automatically. Include a comparison against the previous period, because a number without context tells you nothing. And group by whatever your naming pattern allows, which is why the naming discipline from Level 1 pays off here.",
    "Build a small number of reports and maintain them, rather than many that decay. Three well maintained reports serve almost every business: a daily operational summary, a weekly performance report, and a monthly business review."
  ],
  example: {
    title: "The hour returned every week",
    body: "A team spent about ninety minutes each Monday assembling a report by hand: selecting columns, exporting, pasting into a document, formatting. They built the same thing in Report Builder with a relative date range and weekly scheduling. Setup took half an hour. Every Monday since, the report has arrived by email before anyone opened a computer, and the ninety minutes went into creative work instead."
  },
  steps: [
    "Open Report Builder from Ads Manager.",
    "Choose the level: campaign, ad set or ad.",
    "Add only the metrics that inform the decision this report serves.",
    "Set a relative date range such as last 7 days.",
    "Add a comparison against the previous period.",
    "Save it with a clear name and schedule it to the right people."
  ],
  mistakes: [
    "Using fixed date ranges, so the report shows the same old period forever.",
    "Building twenty reports and maintaining none of them.",
    "Scheduling reports to people who never asked for them."
  ],
  words: [
    { t: "Report Builder", d: "The tool inside Ads Manager for creating and scheduling custom reports." },
    { t: "Relative date range", d: "A range that moves with time, such as last 7 days." },
    { t: "Scheduling", d: "Having a report emailed automatically on a set rhythm." },
    { t: "Comparison period", d: "The previous period shown alongside, giving the numbers context." }
  ],
  takeaways: [
    "Build the report once and schedule it rather than rebuilding weekly.",
    "Use relative date ranges so reports stay current.",
    "Always include a comparison period for context.",
    "Maintain three good reports rather than twenty neglected ones."
  ],
  selfCheck: [
    "My regular reports are scheduled rather than built by hand.",
    "They use relative date ranges.",
    "Each includes a comparison against the previous period."
  ],
  quiz: [
    { q: "Why use relative date ranges?", options: ["They load faster", "The report stays current automatically instead of showing a fixed old period", "They are more accurate"], a: 1, why: "A fixed range stops being useful the moment time moves on." },
    { q: "What gives a number context?", options: ["A larger font", "A comparison against the previous period", "The campaign name"], a: 1, why: "A cost per result of 22 means nothing until you know last period was 18 or 31." },
    { q: "How many reports should most businesses maintain?", options: ["As many as possible", "A small number, around three, kept genuinely current", "One"], a: 1, why: "Maintained reports are useful. Neglected ones mislead." }
  ],
  exercise: { task: "Build one scheduled report in Report Builder: relative date range, comparison period, only the metrics that drive decisions. Schedule it to yourself weekly and see whether you actually read it." },
  challenge: { task: "Build your organisation's reporting suite: three scheduled reports with their audiences, metrics, frequencies and recipients, plus the maintenance process ensuring they stay accurate as the account changes." }
},

"5.20.3": {
  intro: "Cost and efficiency metrics tell you what you are paying and whether it is reasonable. This lesson covers reading them together rather than one at a time.",
  plain: [
    "If someone tells you a car costs 200 a month, you cannot say whether that is good until you know what car, bought how, over how long.",
    "Advertising costs work the same way. A cost per click of 40 cents means nothing on its own. It only becomes meaningful next to what those clicks are worth and what they cost you before.",
    "So these numbers are never read alone. They are read as a set, against your own history."
  ],
  idea: [
    "The main cost metrics are cost per thousand impressions, which measures how expensive it is to reach your audience. Cost per click, which measures the price of getting someone to your site. Cost per result, which measures the price of the action you actually want. And cost per purchase or cost per lead, which are specific versions of cost per result.",
    "They connect mathematically. Cost per click equals cost per thousand impressions divided by the click rate, adjusted for scale. Cost per result equals cost per click divided by the conversion rate. This means a change in cost per result can always be traced to one of the earlier numbers, which is the basis of all diagnosis.",
    "Efficiency metrics express value rather than cost. Return on ad spend is revenue divided by spend. Cost per acquisition compared against customer value tells you whether the account is profitable. And contribution, meaning revenue minus product cost minus ad cost, is what the business actually keeps.",
    "The most common reporting failure here is showing cost metrics without the value side. A cost per lead of 12 dollars is not good or bad. A cost per lead of 12 dollars where each lead is worth 40 is good. The same 12 dollars where each lead is worth 9 is a business losing money efficiently."
  ],
  example: {
    title: "Efficient and unprofitable",
    body: "An account was praised for reducing cost per lead from 21 to 12 over six months. Nobody had checked lead value. During the same period the leads had shifted toward a cheaper product with a much lower conversion rate, and the value per lead had fallen from 44 to 8. The account had become more efficient at producing something worth less than it cost."
  },
  steps: [
    "Report cost per result alongside the value of that result.",
    "Include cost per thousand impressions and click rate so changes can be diagnosed.",
    "Compare every figure against your own previous period.",
    "Calculate whether the account is profitable, not only whether it is efficient.",
    "Watch for value changes hiding behind cost improvements.",
    "Express the final answer in money the business recognises."
  ],
  mistakes: [
    "Celebrating a lower cost per result without checking what the result is worth.",
    "Reporting cost metrics with no comparison period.",
    "Using industry benchmarks instead of your own history."
  ],
  words: [
    { t: "Cost per thousand impressions", d: "What it costs to show your ad a thousand times." },
    { t: "Cost per result", d: "What one useful action costs you." },
    { t: "Return on ad spend", d: "Revenue divided by advertising spend." },
    { t: "Contribution", d: "What remains after product costs and advertising costs." },
    { t: "Efficiency without profit", d: "Getting cheaper at producing something worth less than it costs." }
  ],
  takeaways: [
    "Cost metrics are meaningless without the value beside them.",
    "The metrics connect mathematically, which is what makes diagnosis possible.",
    "Always compare against your own history, not industry averages.",
    "A falling cost per result can hide a falling value per result."
  ],
  selfCheck: [
    "My reports show value alongside cost.",
    "I know what one result is worth to my business.",
    "I compare against my own previous periods."
  ],
  quiz: [
    { q: "Cost per lead fell from 21 to 12. Is this good?", options: ["Yes, always", "Only if the value of each lead has not fallen further", "No, it means quality dropped"], a: 1, why: "Efficiency without value is a business losing money more efficiently." },
    { q: "Why do the cost metrics connect mathematically?", options: ["Meta calculates them together", "Because each is derived from the ones before it, which allows diagnosis", "They do not connect"], a: 1, why: "Tracing a change back through the chain identifies the cause." },
    { q: "What is the best comparison for your costs?", options: ["Industry benchmarks", "Your own previous periods", "Competitor estimates"], a: 1, why: "Your business, price and market make external averages unreliable." }
  ],
  exercise: { task: "Add a value column to your reporting: what one result is worth to your business. Calculate cost per result against value per result for the last three months and note whether the gap is widening or narrowing." },
  challenge: { task: "Build a profitability report: cost per result, value per result, contribution after product and advertising costs, the trend over six months, and the point at which the account would stop being profitable." }
},

"5.20.4": {
  intro: "Funnel metrics show where people drop out between seeing your ad and becoming a customer. This is where most improvement opportunities hide.",
  plain: [
    "Imagine a shop where a thousand people walk past, a hundred come in, ten pick something up, and one buys.",
    "Knowing only that you made one sale tells you nothing about where to improve. Knowing the four numbers tells you exactly where people are leaving.",
    "If ten people pick something up and only one buys, the problem is at the till. If a hundred come in and only ten touch anything, the problem is the display. Same single sale, completely different fixes."
  ],
  idea: [
    "The standard funnel for a website is impressions, clicks, landing page views, then the intermediate steps such as add to cart or form start, then the final conversion.",
    "The gap between clicks and landing page views is one of the most revealing and most ignored numbers in advertising. If 1,000 people clicked and only 700 landing page views were recorded, 300 people left while the page was loading. That is usually a website speed problem and it is often the largest single loss in the whole funnel.",
    "Each step should be expressed as a rate rather than a count, because rates are comparable across periods and campaigns. Click rate, landing page view rate, add to cart rate, checkout rate, purchase rate.",
    "The purpose is to find the worst step relative to your own history, then improve that one. Improving a step that is already strong produces little, as covered in the scaling module. The funnel view makes the weak step obvious in a way that a single cost per result never can."
  ],
  example: {
    title: "The 300 who never arrived",
    body: "An account recorded 4,100 clicks and 2,600 landing page views in a month. Thirty six percent of the people they paid for never saw the page. The cause was a page taking eleven seconds to load on mobile connections. Fixing the page speed recovered most of those visitors, and cost per purchase fell by 31 percent without a single change to the advertising."
  },
  steps: [
    "List every step between impression and conversion.",
    "Record the count at each step for a meaningful period.",
    "Convert each to a rate against the step before it.",
    "Compare each rate against your own history.",
    "Identify the step that has fallen most or is furthest below normal.",
    "Fix that step, then re-measure the whole funnel."
  ],
  mistakes: [
    "Ignoring the gap between clicks and landing page views.",
    "Working on the ads when the drop is happening after the click.",
    "Comparing rates against other businesses rather than your own history."
  ],
  words: [
    { t: "Funnel", d: "The sequence of steps from seeing an ad to becoming a customer." },
    { t: "Landing page view", d: "A recorded arrival on your page, which is fewer than clicks when pages load slowly." },
    { t: "Drop off", d: "The people lost between one step and the next." },
    { t: "Step rate", d: "The percentage progressing from one step to the next." }
  ],
  takeaways: [
    "Express every step as a rate, not a count.",
    "The gap between clicks and landing page views reveals page speed problems.",
    "Find the weakest step relative to your own history and fix that one.",
    "Most large improvements are found after the click, not before it."
  ],
  selfCheck: [
    "I know my click to landing page view rate.",
    "I have each funnel step expressed as a rate.",
    "I know which step is currently weakest."
  ],
  quiz: [
    { q: "You have 1,000 clicks and 700 landing page views. What does that suggest?", options: ["A tracking error", "300 people left while the page was loading, usually a speed problem", "The ads are wrong"], a: 1, why: "It is one of the largest and most commonly ignored losses in advertising." },
    { q: "Why express steps as rates rather than counts?", options: ["It looks better", "Rates are comparable across periods and campaigns of different sizes", "Counts are inaccurate"], a: 1, why: "A count depends on volume. A rate describes performance." },
    { q: "Where are large improvements most often found?", options: ["In the ad creative only", "After the click, in the landing page and checkout", "In the audience settings"], a: 1, why: "The post-click experience is where most drop off occurs and where few people look." }
  ],
  exercise: { task: "Build your funnel for last month: impressions, clicks, landing page views, intermediate steps, conversions. Calculate every rate. Write down your click to landing page view rate and whether it concerns you." },
  challenge: { task: "Produce a full funnel analysis: every step as a rate, the trend over six months, benchmarking against your own best period, the weakest step identified with evidence, the estimated value of fixing it, and a prioritised improvement plan." }
},

"5.20.5": {
  intro: "Creative reporting tells you which advertisements work and, more importantly, why. This lesson covers reporting that improves your next creative rather than just ranking the last one.",
  plain: [
    "Knowing which advertisement won is mildly useful. Knowing why it won is what makes the next one better.",
    "A ranked list of ads by cost per result is like a list of exam results with no subjects attached. You know who did well. You have learned nothing about what to study."
  ],
  idea: [
    "Useful creative reporting works at two levels. The performance level shows cost per result, spend and volume by advertisement. The diagnostic level shows why: hold rate at three seconds, click rate, and conversion rate after the click.",
    "Those three diagnostic numbers separate the three possible failures. A low hold rate means the opening failed. A good hold rate with a low click rate means the message held attention but did not create desire. A good click rate with a low conversion rate means the ad promised something the page did not deliver.",
    "The second requirement is tagging your creative by attribute. If your naming pattern records the angle, the format and the mechanism, you can group results by those attributes and answer questions such as: do testimonials beat demonstrations for us? Does vertical video beat static images? These answers guide production for months.",
    "Without attribute tagging you can only ever say ad seven did well, which does not tell you what to make next. With it you can say testimonials consistently beat demonstrations in our market, which does."
  ],
  example: {
    title: "The pattern behind the winners",
    body: "A team tagged 60 ads by mechanism. Grouping the results showed demonstrations averaging 34 per purchase, testimonials 22, and comparisons 19. No single ad had made this visible. The pattern only appeared when results were grouped by attribute. They shifted production toward comparisons and testimonials and their average cost per purchase fell over the following quarter."
  },
  steps: [
    "Record the angle, format and mechanism in every advertisement name.",
    "Report hold rate, click rate and post-click conversion rate for each ad.",
    "Use those three to diagnose why each ad performed as it did.",
    "Group results by attribute to find patterns across many ads.",
    "Feed the patterns into your production plan.",
    "Re-check quarterly, since patterns change as the market shifts."
  ],
  mistakes: [
    "Reporting only a ranked list with no diagnostic numbers.",
    "Not tagging creative by attribute, so no pattern can ever emerge.",
    "Drawing conclusions from too few ads to show a real pattern."
  ],
  words: [
    { t: "Hold rate", d: "The share of viewers still watching at three seconds." },
    { t: "Diagnostic metric", d: "A number that explains why performance happened." },
    { t: "Attribute tagging", d: "Recording the angle, format and mechanism in the ad name." },
    { t: "Pattern", d: "A consistent result across many ads sharing an attribute." }
  ],
  takeaways: [
    "Report why an ad performed, not only that it did.",
    "Hold rate, click rate and conversion rate separate the three failure types.",
    "Tag creative by attribute so patterns can emerge across many ads.",
    "Patterns guide production. Rankings do not."
  ],
  selfCheck: [
    "My ad names record angle, format and mechanism.",
    "My creative reports include the three diagnostic numbers.",
    "I can name a pattern my own data has revealed."
  ],
  quiz: [
    { q: "Good hold rate, low click rate. What does that indicate?", options: ["The opening failed", "The ad held attention but did not create enough desire to act", "The landing page is broken"], a: 1, why: "People watched but were not persuaded to click." },
    { q: "Why tag creative by attribute?", options: ["For tidiness", "So results can be grouped and patterns found across many ads", "Meta requires it"], a: 1, why: "Patterns across attributes guide what to produce next." },
    { q: "Good click rate, poor conversion rate. What does that indicate?", options: ["The hook failed", "The ad promised something the landing page did not deliver", "The audience is wrong"], a: 1, why: "The disconnect is between the ad and the destination." }
  ],
  exercise: { task: "Tag your last twenty ads by mechanism: demonstration, testimonial, comparison, explanation, story. Group the results and write down which mechanism performs best for your business." },
  challenge: { task: "Build a creative intelligence report: the attribute taxonomy, the diagnostic metrics per ad, the grouped analysis by attribute, the patterns identified with sample sizes, and how the findings translate into a production plan for the next quarter." }
},

"5.20.6": {
  intro: "Audience and placement reporting shows where your results came from. This lesson covers reading these breakdowns without being misled by small numbers.",
  plain: [
    "Breaking your results into small groups is like cutting a cake into slices. Useful, until the slices get so small that you cannot tell what any of them tastes like.",
    "Every time you split the data, each piece has fewer results and becomes less reliable. Split by age and gender and placement and device at once, and you have thirty pieces, each meaningless.",
    "So the skill is knowing when to stop cutting."
  ],
  idea: [
    "The breakdowns available include age, gender, region, placement, platform, device and time. Each can be revealing and each can mislead.",
    "The rule that prevents most errors: a segment needs enough results to be trusted, and the practical minimum is around 30 to 50 conversions before you act on a difference. Below that, apparent differences are usually noise.",
    "There is also a structural point about audience breakdowns that catches people out. If you targeted broadly and one age group produced most results, that does not automatically mean you should exclude the others. The system deliberately sent more budget toward that group because it was performing. Excluding the rest removes the system's ability to keep testing, and often raises costs.",
    "Placement breakdowns are more actionable, because you can genuinely improve creative for a specific placement. Audience breakdowns are usually better used as insight for creative and messaging than as targeting instructions.",
    "Finally, always check whether a difference persists across periods. A segment that outperformed last month and underperformed this month was never genuinely different."
  ],
  example: {
    title: "The exclusion that raised costs",
    body: "An account saw that people aged 55 and over produced only 6 percent of conversions, so they excluded them. Cost per purchase rose by 18 percent over the following month. The older group had been cheap to reach and occasionally converted well, and their presence gave the system a wider pool to optimise within. Removing a low volume segment removed useful flexibility."
  },
  steps: [
    "Choose one breakdown at a time, not several combined.",
    "Check each segment has at least 30 to 50 conversions before drawing conclusions.",
    "Look for large differences, not small ones.",
    "Check whether the difference persists across two or three periods.",
    "Use audience breakdowns to inform creative rather than to exclude people.",
    "Use placement breakdowns to improve format specific creative."
  ],
  mistakes: [
    "Combining several breakdowns until every segment is too small to trust.",
    "Excluding low volume audience segments, which reduces the system's flexibility.",
    "Acting on a difference visible in only one period."
  ],
  words: [
    { t: "Breakdown", d: "Splitting results into segments such as age, placement or device." },
    { t: "Segment", d: "One slice of a breakdown." },
    { t: "Minimum sample", d: "The number of results needed before a difference can be trusted." },
    { t: "Persistence", d: "Whether a difference repeats across several periods." }
  ],
  takeaways: [
    "Every split makes each segment less reliable. Stop cutting early.",
    "Around 30 to 50 conversions per segment before acting.",
    "Audience breakdowns inform creative better than they inform exclusions.",
    "A difference that does not persist across periods was never real."
  ],
  selfCheck: [
    "I check segment volume before drawing conclusions.",
    "I use one breakdown at a time.",
    "I confirm differences persist before acting."
  ],
  quiz: [
    { q: "How many conversions should a segment have before you act on it?", options: ["About five", "Around 30 to 50", "Any number is fine"], a: 1, why: "Below that, apparent differences are usually random variation." },
    { q: "Why is excluding a low performing age group often a mistake?", options: ["It is against policy", "It removes flexibility the system was using, and often raises costs", "Older audiences are always valuable"], a: 1, why: "The system had already allocated budget according to performance." },
    { q: "Which breakdown is most directly actionable?", options: ["Age", "Placement, because you can improve creative for specific formats", "Gender"], a: 1, why: "It points to a concrete fix rather than a targeting change." }
  ],
  exercise: { task: "Run one breakdown on your largest campaign. Count the conversions in each segment and cross out every segment with fewer than 30. Write down what remains and whether any difference is large enough to act on." },
  challenge: { task: "Write a breakdown analysis protocol: which breakdowns you run and in what order, the minimum sample thresholds, the persistence requirement, which findings justify creative changes versus targeting changes, and the documentation of conclusions." }
},

"5.20.7": {
  intro: "For lead generation businesses, the most important reporting happens outside Meta. This lesson covers reporting on what leads actually became.",
  plain: [
    "A lead is a promise, not a result. Someone gave you their details. Whether that turns into money depends entirely on what happens next.",
    "Reporting only on leads is like a fisherman reporting how many times something touched the line. Interesting, but the question is how many fish reached the boat.",
    "Quality reporting connects the two: which advertisements produced leads that actually became customers."
  ],
  idea: [
    "The reporting you need has three layers. Volume: how many leads. Cost: what each cost. Quality: what proportion became customers, and what those customers were worth.",
    "The quality layer requires data from your sales system, connected back to the advertising source, as covered in the attribution module. Without that connection this reporting is impossible, which is why the connection matters.",
    "The most useful single report for a lead business is cost per qualified lead and cost per customer, broken down by campaign and by advertisement. It frequently reveals that the cheapest leads come from the campaigns producing the fewest customers.",
    "There is also a timing problem to handle honestly. If your sales cycle is six weeks, this month's leads have not yet become customers, so the current month's quality figures are always incomplete. The solution is cohort reporting, which follows a group of leads from a specific month forward through time, rather than mixing months together.",
    "Report the incomplete recent data separately, clearly labelled, and make decisions on cohorts old enough to have matured."
  ],
  example: {
    title: "The cheapest source was the worst",
    body: "A business reported cost per lead by campaign: campaign A at 14, campaign B at 31. They had been steadily moving budget to A. Adding quality data showed campaign A converting at 3 percent and B at 19 percent, giving cost per customer of 467 for A and 163 for B. The cheap leads had been the expensive customers, and eight months of budget decisions had been made backwards."
  },
  steps: [
    "Connect your sales outcomes back to the advertising source.",
    "Report volume, cost and quality together, never quality alone.",
    "Calculate cost per qualified lead and cost per customer by campaign.",
    "Use cohort reporting so incomplete recent data does not distort conclusions.",
    "Label immature cohorts clearly and exclude them from decisions.",
    "Review quality monthly and reallocate budget accordingly."
  ],
  mistakes: [
    "Optimising and reporting on cost per lead alone.",
    "Mixing recent immature leads with older matured ones.",
    "Waiting for perfect data instead of starting with one quality signal."
  ],
  words: [
    { t: "Lead quality", d: "The proportion of leads that become genuine customers." },
    { t: "Cost per customer", d: "Advertising spend divided by customers won, the figure that matters." },
    { t: "Cohort", d: "A group of leads from one time period, followed forward through time." },
    { t: "Maturity", d: "Whether enough time has passed for a cohort's outcomes to be known." }
  ],
  takeaways: [
    "Report volume, cost and quality together.",
    "Cheap leads are frequently expensive customers.",
    "Use cohorts so immature data does not distort decisions.",
    "Cost per customer is the figure that should drive allocation."
  ],
  selfCheck: [
    "I can report cost per customer by campaign.",
    "I use cohorts rather than mixing months.",
    "I know whether my cheapest leads are my best or worst."
  ],
  quiz: [
    { q: "Why is cost per lead insufficient?", options: ["It is hard to measure", "Cheap leads frequently produce fewer customers, making them expensive overall", "It changes daily"], a: 1, why: "Only cost per customer reflects business reality." },
    { q: "What is cohort reporting?", options: ["Reporting by age group", "Following a group of leads from one period forward through time", "Reporting weekly"], a: 1, why: "It prevents immature recent data from distorting conclusions." },
    { q: "What should you do with this month's incomplete quality data?", options: ["Include it in decisions", "Report it separately and clearly labelled, excluding it from decisions", "Ignore it entirely"], a: 1, why: "It is informative but not yet reliable for allocation." }
  ],
  exercise: { task: "Take last quarter's leads by campaign and find out how many became customers. Calculate cost per customer for each campaign and compare the ranking against cost per lead. Note whether the order changes." },
  challenge: { task: "Build a lead quality reporting system: the pipeline stages tracked, the cohort structure, the maturity rules, the cost per stage calculations by campaign and ad, the monthly review, and how findings drive budget reallocation." }
},

"5.20.8": {
  intro: "Cohort and time analysis means following groups forward through time rather than looking at everything mixed together. It reveals things no snapshot can show.",
  plain: [
    "A snapshot report is a photograph of one moment. Cohort analysis is a series of photographs of the same group as it ages.",
    "If you photograph a school every year you learn nothing about individual children, because the children change. If you follow one class through the years, you see how they develop.",
    "Advertising data has the same problem. This month's customers are a mixture of people who arrived at different times through different campaigns. Following each arrival group separately shows what actually happened to them."
  ],
  idea: [
    "A cohort is a group defined by when they arrived: everyone who first came from advertising in March, for example. You then follow that group forward and measure what they did in month one, month two, month six.",
    "This answers questions a snapshot cannot. Do customers acquired through Meta buy again as often as those from other sources? Is the quality of new customers improving or declining over time? How long does it take for a cohort to repay what it cost to acquire?",
    "The payback question is particularly valuable. If a cohort costs 60 per customer to acquire and returns 25 in the first month, 20 in the second and 18 in the third, it repays in about three months. That fact governs how aggressively the business can afford to spend, and it cannot be seen in any single month's report.",
    "Time analysis is the related habit of looking at trends rather than points. A cost per result of 22 tells you little. The same figure as part of a six month trend rising from 14 tells you a great deal. Always show the trend."
  ],
  example: {
    title: "Payback changed the budget",
    body: "A subscription business looked only at first month revenue and concluded it could not afford more than 40 per customer. Cohort analysis showed that customers acquired at 40 returned 38 in month one, and a further 96 over the following six months. Knowing the payback period, they raised their acceptable acquisition cost to 90 and tripled their advertising, profitably. The data had always existed. Nobody had followed a cohort forward."
  },
  steps: [
    "Define cohorts by the month customers first arrived.",
    "Record the acquisition cost for each cohort.",
    "Track revenue from each cohort month by month afterwards.",
    "Calculate how long each cohort takes to repay its acquisition cost.",
    "Compare cohorts to see whether customer quality is improving or declining.",
    "Show trends over at least six months in every regular report."
  ],
  mistakes: [
    "Judging acquisition cost against first month revenue only.",
    "Mixing cohorts together, which hides changes in customer quality.",
    "Reporting single figures with no trend."
  ],
  words: [
    { t: "Cohort", d: "A group defined by when they first arrived, followed forward through time." },
    { t: "Payback period", d: "How long a cohort takes to return what it cost to acquire." },
    { t: "Snapshot", d: "A single moment's figures, mixing groups of different ages." },
    { t: "Trend", d: "How a figure has moved over several periods." }
  ],
  takeaways: [
    "Cohorts follow one arrival group forward. Snapshots mix everyone together.",
    "Payback period governs how much you can afford to spend on acquisition.",
    "Comparing cohorts reveals whether customer quality is changing.",
    "Always show trends, never isolated figures."
  ],
  selfCheck: [
    "I know my payback period.",
    "I can compare the quality of customers acquired in different months.",
    "My reports show trends rather than single figures."
  ],
  quiz: [
    { q: "What does payback period tell you?", options: ["How long a campaign runs", "How long a cohort takes to return what it cost to acquire", "The attribution window"], a: 1, why: "It governs how aggressively the business can afford to spend." },
    { q: "Why is a snapshot report limited?", options: ["It is inaccurate", "It mixes together groups that arrived at different times, hiding changes", "It takes too long"], a: 1, why: "Mixed groups conceal trends in customer quality." },
    { q: "A cohort costs 60 and returns 25, 20 and 18 in three months. When does it repay?", options: ["Month one", "About month three", "It never does"], a: 1, why: "The cumulative return of 63 exceeds the 60 cost during month three." }
  ],
  exercise: { task: "Take customers acquired three months ago and calculate their total revenue since. Compare against what they cost to acquire. Write down your payback period." },
  challenge: { task: "Build a cohort analysis model: monthly cohorts with acquisition costs, revenue tracked forward by month, payback periods, quality trends across cohorts, and the acceptable acquisition cost the analysis justifies." }
},

"5.20.9": {
  intro: "This final lesson of Level 5 covers reporting to senior people who have limited time and control the budget.",
  plain: [
    "A business owner does not want to know your click rate. They want to know three things: is this making money, is it getting better or worse, and what do you need from me.",
    "Everything else is detail that belongs somewhere else. The skill of executive reporting is having the confidence to leave out things you worked hard on."
  ],
  idea: [
    "An executive report should fit on one page and answer four questions. What did we spend? What did we get? Is it profitable? What is the recommendation?",
    "Express everything in business terms, not advertising terms. Not cost per result but cost per customer. Not return on ad spend but profit contributed. Not impressions but people reached. Senior people think in money and customers, and translating for them is your job, not theirs.",
    "Include the trend. A single month's figures invite the question is that good, which you then spend the meeting answering. Six months of trend answers it in advance.",
    "Be honest about what is not working. A report that only contains good news teaches the reader to distrust all of it. Stating a problem plainly, with what you are doing about it, builds far more confidence than presenting everything as a success.",
    "Finally, make the recommendation specific and quantified. Not we should increase budget, but increasing the budget by 30 percent should produce approximately 40 additional customers per month at a cost per customer rising from 60 to about 70, which remains profitable against a customer value of 190."
  ],
  example: {
    title: "One page that changed the budget",
    body: "A team replaced their monthly twelve page deck with one page: spend, customers acquired, cost per customer, profit contributed, a six month trend line, two sentences on what changed, one problem stated plainly, and one quantified recommendation. The budget conversation that had previously taken ninety minutes took twelve, and the recommendation was approved, because the reader could see the reasoning without having to reconstruct it."
  },
  steps: [
    "Limit the report to one page.",
    "Answer the four questions: spent, received, profitable, recommended.",
    "Translate every metric into business language.",
    "Show a six month trend on the main figures.",
    "State one problem honestly with your response to it.",
    "Make the recommendation specific and quantified."
  ],
  mistakes: [
    "Using advertising vocabulary with people who do not work in advertising.",
    "Presenting only good news, which erodes trust in everything.",
    "Making vague recommendations that force the reader to do the arithmetic."
  ],
  words: [
    { t: "Executive report", d: "A short report for senior people who control budget." },
    { t: "Business language", d: "Money and customers, rather than impressions and click rates." },
    { t: "Quantified recommendation", d: "A proposal stating the expected result in numbers." },
    { t: "Trend line", d: "Several periods shown together so direction is visible." }
  ],
  takeaways: [
    "One page, four questions: spent, received, profitable, recommended.",
    "Translate everything into money and customers.",
    "Always include the trend and one honest problem.",
    "Quantify the recommendation so the decision is easy."
  ],
  selfCheck: [
    "My executive report fits on one page.",
    "It uses business language throughout.",
    "It includes a quantified recommendation and an honest problem."
  ],
  quiz: [
    { q: "What should an executive report contain?", options: ["Every available metric", "Spend, results, profitability, and a quantified recommendation", "Only good news"], a: 1, why: "Senior readers need the decision, not the workings." },
    { q: "Why include a problem you have not solved?", options: ["To lower expectations", "Reports containing only good news teach the reader to distrust all of it", "It is required"], a: 1, why: "Honesty about problems makes the successes believable." },
    { q: "How should a recommendation be expressed?", options: ["We should spend more", "Specifically and quantified, with the expected result and its cost", "As a question"], a: 1, why: "A quantified proposal lets the reader decide without doing the arithmetic themselves." }
  ],
  exercise: { task: "Write a one page executive report for last month: spend, customers, cost per customer, profit contributed, six month trend, one honest problem, one quantified recommendation. Show it to someone outside marketing and ask whether it makes sense." },
  challenge: { task: "Design an executive reporting system: the one page template, the definitions behind each figure, the trend presentation, the honesty standard, the recommendation format, the monthly rhythm, and the supporting detail available on request." }
}

});
