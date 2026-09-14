/* Module 28 - Causal Measurement (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"7.28.1": {
  intro: "Causal thinking means asking whether your advertising actually caused the result, rather than merely appearing alongside it. This lesson introduces the idea.",
  plain: [
    "A rooster crows every morning before sunrise. The rooster does not cause the sunrise.",
    "Ice cream sales and drowning deaths rise together every summer. Ice cream does not cause drowning. Hot weather causes both.",
    "Advertising reports are full of roosters. Your retargeting advertisements appear before purchases. That does not prove they caused them. Some of those people were going to buy anyway, and your advertisement simply appeared first."
  ],
  idea: [
    "There are three ways two things can appear connected. One causes the other, which is what you hope. Both are caused by something else, such as a seasonal effect raising both your spending and your sales. Or they line up by chance, which happens more than people expect.",
    "Advertising measurement systems cannot tell these apart. They record that an advertisement was seen and a purchase followed, and they credit the advertisement. That is attribution, and it answers a different question from the one you actually care about.",
    "The question you care about is: if I had not run this advertising, what would have happened? That is the causal question, and answering it requires a comparison with a situation where the advertising did not run.",
    "This matters most where attribution is most generous. Retargeting people who abandoned a basket produces spectacular reported returns and frequently produces very little additional revenue, because most of those people were returning anyway.",
    "The rest of this module covers how to answer the causal question properly. The first step is simply to hold the question in mind: not who gets credit, but what would have happened otherwise."
  ],
  example: {
    title: "The brand search trap",
    body: "A company advertised on their own brand name and reported excellent returns: people searching their name saw the advertisement, clicked, and bought. They switched it off for two weeks as a test. Sales were unchanged, because those people found the company anyway through the normal listing directly beneath. The advertising had been buying customers it already had."
  },
  steps: [
    "For any reported result, ask what would have happened without the advertising.",
    "Identify which of your campaigns are most likely to be over credited.",
    "Notice where reported returns look unusually high, since that is often a warning.",
    "Accept that attribution cannot answer the causal question.",
    "Plan a comparison where the advertising does not run.",
    "Use the result to adjust budget allocation."
  ],
  mistakes: [
    "Treating a high reported return as proof of high value.",
    "Assuming that because an advertisement came first, it caused the result.",
    "Never testing the campaigns with the most flattering numbers."
  ],
  words: [
    { t: "Causation", d: "One thing genuinely making another happen." },
    { t: "Correlation", d: "Two things appearing together, which may or may not be causal." },
    { t: "Common cause", d: "A third factor producing both of the things you observed." },
    { t: "Counterfactual", d: "What would have happened without the advertising." }
  ],
  takeaways: [
    "Things appearing together does not mean one caused the other.",
    "Attribution answers who gets credit, not whether it mattered.",
    "Unusually high reported returns are often a warning, not a success.",
    "The causal question needs a comparison where the advertising did not run."
  ],
  selfCheck: [
    "I can explain the difference between correlation and causation.",
    "I know which of my campaigns are most likely over credited.",
    "I ask what would have happened otherwise."
  ],
  quiz: [
    { q: "Ice cream sales and drowning both rise in summer. What explains it?", options: ["Ice cream causes drowning", "A common cause, hot weather, produces both", "Coincidence"], a: 1, why: "A third factor drives both, which is a common pattern in advertising data too." },
    { q: "What question does attribution answer?", options: ["Whether advertising caused the sale", "Which advertisement gets the credit", "How much the sale was worth"], a: 1, why: "Credit and cause are different questions." },
    { q: "Which campaigns are most likely over credited?", options: ["Cold prospecting", "Retargeting people already close to buying", "Brand awareness"], a: 1, why: "Those people were largely going to buy anyway." }
  ],
  exercise: { task: "List your campaigns in order of reported return. Write down, for the top two, how much of that return you believe would have happened without the advertising. Note that you almost certainly have no evidence either way." },
  challenge: { task: "Write a causal assessment of your account: each campaign, its reported return, your estimate of the incremental portion, the reasoning behind each estimate, and which campaign most urgently needs a proper test." }
},

"7.28.2": {
  intro: "A counterfactual is what would have happened if you had not advertised. This lesson covers why it cannot be observed and what to do instead.",
  plain: [
    "You cannot run the same month twice, once with advertising and once without, and compare. Time only goes one way.",
    "So you can never directly observe what would have happened. You can only estimate it, by finding something that resembles the situation without advertising closely enough to stand in for it.",
    "Everything in causal measurement is a method for building that stand-in."
  ],
  idea: [
    "The stand-in is called a control group or a comparison group. The three ways to build one are: randomly split people so some see no advertising, split geographic areas so some receive none, or use a past period as the comparison.",
    "Random splitting of people is the strongest method, because random division means the two groups differ only by chance. If one group sees advertising and the other does not, any difference in their behaviour is caused by the advertising.",
    "Geographic splitting is second best, because regions differ in ways that are not random. Careful matching of similar regions reduces this problem but does not eliminate it.",
    "Using a past period is weakest, because everything changes over time: seasons, competitors, prices, the economy. A comparison between March and April measures the difference between March and April, only part of which is your advertising.",
    "The practical implication is that where a random split is available, use it. Where it is not, use geography with careful matching. Use time comparisons only when nothing else is possible, and treat the result with appropriate suspicion."
  ],
  example: {
    title: "Why the time comparison misled",
    body: "A business switched off advertising for a month and compared against the previous month. Sales fell 22 percent, and they concluded advertising produced 22 percent of sales. The previous month had included a public holiday and the start of a season. Repeating the exercise with a geographic split, running advertising in half their regions and not the other half in the same month, showed the true effect was closer to 9 percent."
  },
  steps: [
    "Identify which comparison method is available to you.",
    "Prefer random splitting of people where possible.",
    "Use geographic splitting with careful region matching as the second option.",
    "Use time comparisons only as a last resort.",
    "Whatever method you use, state its weaknesses explicitly.",
    "Treat weaker methods as directional rather than precise."
  ],
  mistakes: [
    "Using a before and after comparison and treating it as conclusive.",
    "Comparing regions that differ substantially from each other.",
    "Presenting an estimate as if it were a measurement."
  ],
  words: [
    { t: "Counterfactual", d: "What would have happened without the advertising." },
    { t: "Control group", d: "The group that does not receive advertising, used for comparison." },
    { t: "Random split", d: "Dividing people by chance so the groups differ only randomly." },
    { t: "Before and after", d: "Comparing a period with advertising against one without, the weakest method." }
  ],
  takeaways: [
    "The counterfactual cannot be observed, only estimated.",
    "Random splitting of people is the strongest method.",
    "Geographic splitting is second, with careful region matching.",
    "Before and after comparisons measure the difference between periods, not just your advertising."
  ],
  selfCheck: [
    "I understand why a before and after comparison is weak.",
    "I know which comparison method is available to me.",
    "I state the weaknesses of my method when presenting results."
  ],
  quiz: [
    { q: "Why is before and after the weakest method?", options: ["It takes longer", "Everything else changes between periods too", "It requires more budget"], a: 1, why: "Seasons, competitors and prices all change, and the comparison cannot separate them." },
    { q: "Why is random splitting strongest?", options: ["It is cheapest", "Random division means the groups differ only by chance", "It is fastest"], a: 1, why: "Any systematic difference must therefore come from the advertising." },
    { q: "What must accompany any causal estimate?", options: ["A profit figure", "An honest statement of the method's weaknesses", "A competitor comparison"], a: 1, why: "Estimates presented as measurements mislead decision makers." }
  ],
  exercise: { task: "For your business, write down which of the three comparison methods you could realistically use, and what the main weakness of that method would be in your situation." },
  challenge: { task: "Design the comparison approach for your business: the method available, the practical constraints, the specific weaknesses, how you would mitigate each, and how you would present the resulting estimate honestly to management." }
},

"7.28.3": {
  intro: "Incrementality is the additional business your advertising produced that would not otherwise have happened. This lesson covers measuring it.",
  plain: [
    "If you make 100 sales while advertising, and you would have made 70 without it, then advertising produced 30. That 30 is the incremental result, and it is the only part you genuinely bought.",
    "Attribution might tell you advertising produced 85 of those sales. Both numbers can be calculated correctly. Only one describes what your money did."
  ],
  idea: [
    "The measurement is a comparison. Group A sees advertising and produces a certain result. Group B, as similar as possible, sees none and produces a different result. The difference between them is the incremental effect.",
    "Two figures matter. The incremental lift, which is the difference expressed as a percentage. And the incremental cost per result, which is your total spend divided by the additional results rather than by all results.",
    "That second figure is usually a shock the first time it is calculated. If you spent 10,000 and attribution credits 400 sales, your attributed cost per sale is 25. If the incremental analysis shows 160 additional sales, your true cost per sale is 62. Both are correct answers to different questions, and only the second tells you whether the spending made sense.",
    "The practical use is comparison across campaigns, not just a single number. If prospecting has an incremental cost per sale of 70 and retargeting has 210, you should move budget toward prospecting, even though the attributed figures say the opposite.",
    "Finally, incrementality is not fixed. It changes with your spending level, your market and your mix. A campaign highly incremental at low spend becomes less so as it saturates. This is why the measurement should be repeated periodically rather than treated as a permanent finding."
  ],
  example: {
    title: "The number that reversed a decision",
    body: "An account's attributed figures showed retargeting at 14 per sale and prospecting at 68. Every instinct said move budget to retargeting. A holdout test showed retargeting's incremental cost per sale was 190, because most of those people bought anyway, while prospecting's was 81. Budget moved the opposite way from what attribution suggested, and total sales rose 26 percent over the following quarter."
  },
  steps: [
    "Choose the campaign with the most flattering attributed numbers.",
    "Build a comparison group who see no advertising.",
    "Run for long enough to accumulate meaningful results.",
    "Calculate the difference in results between the groups.",
    "Divide total spend by the additional results to get incremental cost.",
    "Compare incremental costs across campaigns and reallocate."
  ],
  mistakes: [
    "Calculating incrementality once and treating it as permanent.",
    "Comparing attributed cost in one campaign against incremental cost in another.",
    "Allocating budget on attributed figures when incremental figures point the other way."
  ],
  words: [
    { t: "Incremental result", d: "Additional business that would not have happened without advertising." },
    { t: "Incremental lift", d: "The difference between groups expressed as a percentage." },
    { t: "Incremental cost per result", d: "Total spend divided by additional results, not all results." },
    { t: "Saturation", d: "The point where additional spending produces progressively less additional business." }
  ],
  takeaways: [
    "Incremental results are what your money genuinely bought.",
    "Incremental cost per result is usually much higher than attributed cost.",
    "Compare incremental costs across campaigns to allocate budget correctly.",
    "Incrementality changes with spending level, so repeat the measurement."
  ],
  selfCheck: [
    "I understand the difference between attributed and incremental cost.",
    "I have measured incrementality for at least one campaign.",
    "I compare campaigns on the same basis."
  ],
  quiz: [
    { q: "You spent 10,000, attribution credits 400 sales, and the test shows 160 additional. What is your incremental cost per sale?", options: ["25", "62.50", "160"], a: 1, why: "Spend divided by additional results, which is 10,000 divided by 160." },
    { q: "Why can attributed figures lead to the wrong budget decision?", options: ["They are calculated wrongly", "They credit sales that would have happened anyway, flattering some campaigns more than others", "They update slowly"], a: 1, why: "Campaigns closest to purchase are flattered most." },
    { q: "Why repeat incrementality measurement?", options: ["For reporting", "It changes with spending level, market and mix", "Meta requires it"], a: 1, why: "A finding at one spending level does not hold at another." }
  ],
  exercise: { task: "Take your highest reported return campaign and calculate what its incremental cost per result would be if only half those conversions were genuinely additional. Compare that against your other campaigns' attributed figures." },
  challenge: { task: "Design an incrementality measurement plan: which campaigns to test and in what order, the comparison method for each, the duration and volume required, the calculation method, and how findings would change your budget allocation." }
},

"7.28.4": {
  intro: "A geographic experiment switches advertising on in some areas and off in others. This lesson covers running one.",
  plain: [
    "You cannot easily stop showing advertisements to half your customers individually. But you can stop showing them in half your cities.",
    "Run advertising in ten regions and not in ten similar regions, then compare sales in both. The difference is what advertising did.",
    "It is the most practical causal test available to most businesses, because it needs no special tools, only careful planning."
  ],
  idea: [
    "The method has four steps. Choose matched regions, split them into test and control, run the campaign only in the test regions, then compare the results in both against their own past performance.",
    "Region matching is the critical part. The regions should be similar in size, in past sales, in seasonal patterns and ideally in demographics. The standard technique is to look at twelve months of sales history and pair regions whose sales moved together.",
    "The comparison is not simply test sales against control sales, because the regions differ in size. Instead you compare how each group changed relative to its own history. If test regions grew 18 percent and control regions grew 4 percent, the advertising produced roughly 14 percentage points of growth.",
    "The practical requirements are meaningful scale and patience. You need enough regions that one unusual city does not dominate, usually at least eight to ten per side. And you need at least four weeks, preferably six to eight, because regional sales are noisy week to week.",
    "The main limitation is that it measures your total advertising effect in those regions, not a single campaign. To isolate one campaign, only that campaign should differ between the groups."
  ],
  example: {
    title: "Twenty cities, one answer",
    body: "A retailer with shops in 40 cities matched them into 20 pairs by size and sales history. They ran advertising in one city from each pair for eight weeks. Test cities grew 11 percent against the same period last year. Control cities grew 2 percent. The 9 percentage point difference, applied to their sales base, showed advertising was producing roughly half what attribution had claimed, which changed their budget planning for the following year."
  },
  steps: [
    "List your regions with twelve months of sales history.",
    "Pair regions that are similar in size and whose sales move together.",
    "Randomly assign one of each pair to test and one to control.",
    "Run the advertising only in test regions for six to eight weeks.",
    "Compare each group's change against its own history.",
    "Calculate the difference and convert it into incremental results."
  ],
  mistakes: [
    "Using too few regions, so one unusual area dominates the result.",
    "Comparing test against control directly rather than each against its own history.",
    "Running for too short a period, so weekly noise swamps the effect."
  ],
  words: [
    { t: "Geographic experiment", d: "Running advertising in some areas and not others to measure its effect." },
    { t: "Matched regions", d: "Areas paired for similarity in size and sales behaviour." },
    { t: "Test and control", d: "The groups that do and do not receive advertising." },
    { t: "Relative change", d: "How much each group moved compared with its own history." }
  ],
  takeaways: [
    "Geographic tests are the most practical causal method for most businesses.",
    "Match regions carefully using twelve months of sales history.",
    "Compare each group against its own past, not against each other directly.",
    "Use at least eight regions per side and run six to eight weeks."
  ],
  selfCheck: [
    "I have enough regions to run a geographic test.",
    "I know how to match them using sales history.",
    "I understand the relative change comparison method."
  ],
  quiz: [
    { q: "How should test and control regions be compared?", options: ["Test sales against control sales directly", "Each group's change against its own past performance", "By population"], a: 1, why: "Regions differ in size, so absolute comparison is meaningless." },
    { q: "How many regions per side are usually needed?", options: ["Two or three", "At least eight to ten", "Fifty"], a: 1, why: "Fewer means one unusual region can dominate the result." },
    { q: "How long should a geographic test run?", options: ["One week", "Six to eight weeks", "Six months"], a: 1, why: "Regional sales are noisy weekly, so short tests show noise rather than effect." }
  ],
  exercise: { task: "List your regions with their sales for the last twelve months. Pair them by size and by how similarly their sales have moved. Write down whether you have at least eight viable pairs." },
  challenge: { task: "Design a complete geographic experiment: the region matching with evidence, the random assignment, the campaign configuration, the duration, the measurement method, the calculation of incremental results, and how you would handle contamination between neighbouring regions." }
},

"7.28.5": {
  intro: "A holdout test keeps a random group of people from seeing your advertising. This lesson covers running one.",
  plain: [
    "A holdout is a group of people deliberately excluded from your advertising, chosen at random, so you can see what they do without it.",
    "Because they were chosen randomly, they are just like everyone else. Any difference in their behaviour must therefore be caused by the advertising they did not see.",
    "It is the strongest method available, and the main cost is that you deliberately stop advertising to some potential customers."
  ],
  idea: [
    "There are two ways to build one. Meta offers built in lift studies for some objectives, where the platform holds back a random group automatically and reports the difference. Or you can build one yourself, by randomly splitting your own customer list or audience and excluding one half.",
    "The platform version is easier and handles the randomisation properly. The self built version gives you more control and works with your own data, but requires care to ensure the split is genuinely random rather than accidentally systematic.",
    "The size question matters. The holdout must be large enough to produce a measurable number of conversions, typically at least several hundred conversions expected in the control group over the test period. Too small and the comparison is noise.",
    "The cost is real and should be stated honestly: you are deliberately not advertising to a group of people who might have bought. For a two week test on 10 percent of your audience, that cost is modest. For a long test on half your audience, it is substantial.",
    "The most valuable application is testing retargeting, because that is where attribution is most generous and where the answer most often changes decisions."
  ],
  example: {
    title: "Ten percent held back",
    body: "A business held back 10 percent of their retargeting audience for six weeks. The advertised group converted at 8.1 percent. The held back group converted at 6.9 percent. The genuine lift was 1.2 percentage points, meaning about 15 percent of the conversions in the advertised group were caused by the advertising and 85 percent would have happened anyway. Their retargeting was profitable, but at roughly a sixth of the value the reports had claimed."
  },
  steps: [
    "Choose the campaign where the answer would most change your decisions.",
    "Use the platform lift study if available for your objective.",
    "Otherwise split your audience randomly and exclude one part.",
    "Size the holdout so the control group produces enough conversions.",
    "Run long enough to accumulate meaningful volume.",
    "Compare conversion rates and calculate the genuine lift."
  ],
  mistakes: [
    "Making the holdout too small to produce measurable results.",
    "Splitting the audience in a way that is not genuinely random.",
    "Running the test on a campaign where the answer would not change anything."
  ],
  words: [
    { t: "Holdout", d: "A randomly chosen group deliberately excluded from advertising." },
    { t: "Lift study", d: "A platform provided test that holds back a group and reports the difference." },
    { t: "Genuine lift", d: "The difference in conversion rate between advertised and held back groups." },
    { t: "Randomisation", d: "Dividing people by chance so the groups are otherwise identical." }
  ],
  takeaways: [
    "A holdout is the strongest causal method available.",
    "Random division means any difference must be caused by the advertising.",
    "Size it so the control group produces enough conversions to measure.",
    "The most valuable application is testing retargeting."
  ],
  selfCheck: [
    "I know which campaign would most benefit from a holdout test.",
    "I understand how to size the holdout properly.",
    "I accept the real cost of not advertising to some people."
  ],
  quiz: [
    { q: "Why is a random holdout the strongest method?", options: ["It is cheapest", "Random division means the groups differ only by chance, so differences must be caused by the advertising", "It is fastest"], a: 1, why: "Randomisation removes all systematic differences." },
    { q: "What is the real cost of a holdout test?", options: ["Platform fees", "You deliberately do not advertise to people who might have bought", "Extra creative work"], a: 1, why: "The cost is forgone sales in the control group." },
    { q: "Where is a holdout most valuable?", options: ["Brand awareness", "Retargeting, where attribution is most generous", "New campaigns"], a: 1, why: "It is where reported and real value differ most." }
  ],
  exercise: { task: "Calculate what a 10 percent holdout on your retargeting would cost you over four weeks, in forgone sales, using your current figures. Decide whether that cost is worth knowing the answer." },
  challenge: { task: "Design a holdout study: the campaign chosen with reasoning, the holdout size and its expected conversion volume, the randomisation method, the duration, the calculation of lift, the cost of the test, and the decisions the result would change." }
},

"7.28.6": {
  intro: "Conversion Lift is Meta's built in system for measuring incrementality. This lesson covers what it does and its limitations.",
  plain: [
    "Rather than building a holdout yourself, Meta can do it for you. It randomly holds back a group of people from seeing your advertisements, then reports how many more conversions the advertised group produced.",
    "It is the easiest way to get a proper causal answer, and it has real limitations worth understanding before you rely on it."
  ],
  idea: [
    "The mechanism is that Meta randomly assigns people to test and control before the campaign runs. The control group is never shown your advertisements. At the end, Meta compares conversion rates and reports the lift.",
    "The advantages are that randomisation is handled properly, the control group is genuinely comparable, and it requires no technical work from you beyond having conversion tracking in place.",
    "The limitations matter. Availability varies by objective, region and account, and it is not offered for everything. It requires meaningful scale, because the control group must produce enough conversions. It measures the campaigns included in the study, not your advertising as a whole. And the results come from Meta measuring its own effectiveness, which is worth noting even though the methodology is sound.",
    "The practical guidance is to use it where available, because a proper randomised test from the platform beats an estimate. But treat it as one input rather than the final word, particularly for large budget decisions, and consider running a geographic test independently as a cross check.",
    "The most common practical failure is running it at insufficient scale. If the study produces a wide range of possible answers, for example a lift somewhere between 2 and 40 percent, that result cannot support a decision and the test needs more volume or more time."
  ],
  example: {
    title: "Two studies, one useful",
    body: "A business ran a lift study on a campaign spending 2,000 a month. The result was a lift somewhere between minus 5 and plus 31 percent, which told them nothing. They repeated it on their main campaign spending 30,000 a month. That result showed a lift between 9 and 15 percent, narrow enough to act on. Scale was the difference between a wasted month and a usable answer."
  },
  steps: [
    "Check whether lift studies are available for your objective and region.",
    "Choose a campaign with enough scale to produce a narrow result.",
    "Set the study up before the campaign period begins.",
    "Run for the full duration without changing the campaign.",
    "Read the range of the result, not only the central figure.",
    "Treat a wide range as an inconclusive result needing more scale."
  ],
  mistakes: [
    "Running a lift study on a campaign too small to produce a usable result.",
    "Reading only the central estimate and ignoring the range around it.",
    "Changing the campaign during the study period."
  ],
  words: [
    { t: "Conversion Lift", d: "Meta's built in randomised test measuring incremental conversions." },
    { t: "Control group", d: "People randomly prevented from seeing the advertisements." },
    { t: "Result range", d: "The span of possible answers, which shows how certain the result is." },
    { t: "Scale requirement", d: "The volume needed for the study to produce a narrow, usable result." }
  ],
  takeaways: [
    "Lift studies provide proper randomised measurement with no technical work.",
    "They need meaningful scale to produce a usable answer.",
    "Always read the range, not just the central estimate.",
    "Use them as a strong input, ideally cross checked with an independent test."
  ],
  selfCheck: [
    "I know whether lift studies are available for my objectives.",
    "I know which of my campaigns has the scale to support one.",
    "I read result ranges rather than single figures."
  ],
  quiz: [
    { q: "What makes a lift study result unusable?", options: ["A negative result", "A very wide range of possible answers, indicating insufficient scale", "A small lift"], a: 1, why: "A result spanning from negative to strongly positive cannot support a decision." },
    { q: "What does a lift study require from you technically?", options: ["A custom integration", "Working conversion tracking and sufficient scale", "A measurement partner"], a: 1, why: "Meta handles the randomisation and comparison." },
    { q: "How should lift results be treated?", options: ["As the final word", "As a strong input, ideally cross checked with an independent test", "As unreliable"], a: 1, why: "The methodology is sound, and independent verification is still prudent for large decisions." }
  ],
  exercise: { task: "Check which of your campaigns has enough monthly conversions to support a lift study with a narrow result. If one does, set up a study on it." },
  challenge: { task: "Plan a lift measurement programme: the campaigns with sufficient scale, the study configuration, the duration, how you will interpret the ranges, the independent cross check method, and the decisions each possible result would trigger." }
},

"7.28.7": {
  intro: "Difference-in-differences is a method for comparing two groups that were not identical to begin with. This lesson explains it simply.",
  plain: [
    "Two shops. Shop A sells 100 units a week, Shop B sells 60. You advertise only for Shop A. Afterwards A sells 130 and B sells 66.",
    "You cannot compare 130 against 66, because A was always bigger. Instead compare the changes. A grew by 30 percent. B grew by 10 percent. The extra 20 percentage points is what advertising added.",
    "That is the whole method: compare the change in each group rather than the levels."
  ],
  idea: [
    "The method requires two things. Data from before the advertising began, for both groups. And a reasonable belief that without the advertising, both groups would have changed in similar ways.",
    "That second requirement is the important one and it is called the parallel trends assumption. If the two groups had been moving in the same direction at similar rates before the test, it is reasonable to assume they would have continued to. If they had been diverging beforehand, the method breaks.",
    "The practical check is to plot both groups for several months before the test. If the lines move roughly in parallel, the method is sound. If one was already accelerating away from the other, any result will be unreliable.",
    "The main use in advertising is when a true random split is impossible: comparing regions, comparing store locations, or comparing time periods where a partial control exists.",
    "The main weakness is that something else may have changed for one group during the test period. A competitor opening in your test region, a local event, or a supply problem would all corrupt the result. Checking for such events afterwards is part of the analysis, not an optional extra."
  ],
  example: {
    title: "Checking the parallel trends",
    body: "A business planned a regional test and first plotted six months of sales for both groups. The lines moved in parallel until the final month, when one group jumped sharply. Investigating revealed a large employer had opened in that region. They swapped that region out of the test and replaced it with another whose trend matched. Without the check, the result would have credited advertising with an effect caused by local employment."
  },
  steps: [
    "Collect at least six months of data for both groups before the test.",
    "Plot both and confirm they move roughly in parallel.",
    "Replace any group whose trend diverges before the test begins.",
    "Run the advertising in one group only.",
    "Compare the percentage change in each group.",
    "Investigate any external event affecting either group during the period."
  ],
  mistakes: [
    "Skipping the parallel trends check before the test.",
    "Comparing levels rather than changes.",
    "Ignoring external events during the test period."
  ],
  words: [
    { t: "Difference-in-differences", d: "Comparing the change in each group rather than their levels." },
    { t: "Parallel trends", d: "The assumption that both groups would have moved similarly without the intervention." },
    { t: "Pre-period", d: "The time before the test, used to check the assumption." },
    { t: "External event", d: "Something affecting one group during the test that corrupts the comparison." }
  ],
  takeaways: [
    "Compare changes, not levels, when groups start at different sizes.",
    "The method depends on the groups having moved in parallel beforehand.",
    "Always plot several months of pre-test data to check this.",
    "Investigate external events affecting either group during the test."
  ],
  selfCheck: [
    "I check parallel trends before running such tests.",
    "I compare changes rather than levels.",
    "I check for external events during the test period."
  ],
  quiz: [
    { q: "Why compare changes rather than levels?", options: ["It is easier", "The groups started at different sizes, so levels cannot be compared directly", "It is more accurate mathematically"], a: 1, why: "Only the relative movement is comparable." },
    { q: "What is the parallel trends assumption?", options: ["Both groups are the same size", "Without the intervention, both groups would have changed similarly", "Both groups grow at the same rate"], a: 1, why: "It is what allows one group to stand in for the other's counterfactual." },
    { q: "How do you check the assumption?", options: ["Ask the platform", "Plot several months of pre-test data and confirm the lines move in parallel", "Run the test twice"], a: 1, why: "Past parallel movement supports the assumption of continued parallel movement." }
  ],
  exercise: { task: "Plot six months of sales for two regions or two customer groups you might compare. Check whether their lines move roughly in parallel, and write down whether a difference-in-differences comparison would be valid." },
  challenge: { task: "Design a difference-in-differences study: the groups, the pre-period trend analysis with evidence of parallel movement, the intervention, the measurement period, the calculation, the external event checks, and an honest statement of the assumptions and their risks." }
},

"7.28.8": {
  intro: "A synthetic control builds an artificial comparison group from several real ones. This lesson explains the idea at a practical level.",
  plain: [
    "Sometimes no single region resembles your test region closely enough to serve as a comparison.",
    "A synthetic control solves this by building an artificial comparison from a blend of several regions. Perhaps 40 percent of one city, 35 percent of another and 25 percent of a third combine to produce a pattern that closely matches your test region's history.",
    "You then compare your test region against that blend. It is a more sophisticated version of the matching idea, and it is genuinely useful when good matches do not exist naturally."
  ],
  idea: [
    "The method works by finding weights for a set of comparison regions such that the weighted combination closely tracks your test region during the period before the test. If the blend matched the test region's history well, it is reasonable to use it as an estimate of what would have happened afterwards.",
    "The advantages are that it works when no single good match exists, it produces a visibly checkable fit against history, and it handles the case where your test unit is unusual.",
    "The requirements are substantial. You need a good number of comparison units, ideally at least ten and preferably more. You need a reasonably long history, usually at least a year. And you need the analytical capability to compute the weights, which usually means a data analyst or specialist software.",
    "The practical honesty here is that this method is beyond what most advertisers will implement themselves. It matters to understand because it is what specialist measurement providers frequently use, and knowing the idea lets you evaluate their work rather than accepting it as unexplained expertise.",
    "The key question to ask of any synthetic control analysis is: how well did the synthetic version match the real one before the intervention? If the fit was poor beforehand, the estimate afterwards is unreliable, and that check is the first thing to look at in any such report."
  ],
  example: {
    title: "Judging the analyst's work",
    body: "An agency presented a synthetic control analysis showing 23 percent incremental lift. The client asked one question: how closely did the synthetic control track the real region before the campaign started. The chart showed the two lines diverging by up to 15 percent in the pre-period. Since the method's accuracy depends entirely on that fit, the 23 percent estimate could not be trusted, and the analysis was redone with a larger pool of comparison regions."
  },
  steps: [
    "Establish whether you have enough comparison units and history.",
    "Have the weighted blend computed, usually by an analyst or specialist tool.",
    "Check how closely the synthetic version matched reality before the test.",
    "Reject the analysis if the pre-period fit is poor.",
    "Compare the test region against the synthetic control after the intervention.",
    "State the pre-period fit quality whenever presenting the result."
  ],
  mistakes: [
    "Accepting a synthetic control result without checking the pre-period fit.",
    "Attempting the method without enough comparison units or history.",
    "Presenting the estimate without stating how well the synthetic version matched."
  ],
  words: [
    { t: "Synthetic control", d: "An artificial comparison group built by blending several real ones." },
    { t: "Weights", d: "The proportions of each comparison unit in the blend." },
    { t: "Pre-period fit", d: "How closely the synthetic version tracked reality before the intervention." },
    { t: "Donor pool", d: "The set of comparison units available to build the blend from." }
  ],
  takeaways: [
    "A synthetic control blends several regions into one artificial comparison.",
    "It works when no single good match exists naturally.",
    "Its accuracy depends entirely on how well it matched history beforehand.",
    "Always ask about the pre-period fit before trusting any such analysis."
  ],
  selfCheck: [
    "I understand what a synthetic control is.",
    "I know to ask about pre-period fit.",
    "I know whether my business has the units and history to support one."
  ],
  quiz: [
    { q: "What is the first thing to check in a synthetic control analysis?", options: ["The final lift figure", "How closely the synthetic version matched reality before the intervention", "The number of regions used"], a: 1, why: "The method's validity depends entirely on that fit." },
    { q: "When is a synthetic control useful?", options: ["Always", "When no single comparison unit matches your test unit well", "For small accounts"], a: 1, why: "It solves the problem of no natural match existing." },
    { q: "What does the method require?", options: ["A large budget", "Many comparison units, long history and analytical capability", "A measurement partner"], a: 1, why: "It is more demanding than simpler matching methods." }
  ],
  exercise: { task: "Count how many comparison regions or units you have with at least a year of history. Write down whether a synthetic control approach would be feasible for your business." },
  challenge: { task: "Write an evaluation checklist for any causal analysis presented to you: the method used, the comparison group construction, the pre-period fit evidence, the assumptions stated, the external events checked, the result range, and the specific questions you would ask before accepting the conclusion." }
},

"7.28.9": {
  intro: "This final lesson of the module covers building causal measurement into how your business operates.",
  plain: [
    "One incrementality test tells you about one campaign at one moment. A system tells you continuously, and adjusts your spending accordingly.",
    "Very few businesses do this. Those that do generally spend their money considerably better than those that do not, because they are the only ones who actually know what their advertising is worth."
  ],
  idea: [
    "A causal measurement system has four parts. A schedule of tests, so measurement happens regularly rather than when someone remembers. A hierarchy of methods, using the strongest available for each question. A record of findings, so estimates accumulate. And a link to budget decisions, so the findings actually change what you do.",
    "A reasonable schedule for most businesses is: one major test per quarter on the largest budget item, and an annual full assessment covering the whole account. Larger advertisers test continuously.",
    "The findings should feed a set of incrementality factors: your estimate, for each campaign type, of what proportion of attributed conversions are genuinely incremental. Applying these factors to your ordinary reporting gives you a continuously adjusted view without running a test every month.",
    "Those factors should be reviewed and re-measured periodically, because they change with spending level and market conditions. A factor measured a year ago at a different budget is a guess, not a measurement.",
    "The final and most important element is that findings must change behaviour. A business that measures incrementality carefully and then allocates budget on attributed figures has wasted the effort entirely. The purpose is different decisions, not better reports."
  ],
  example: {
    title: "Factors applied continuously",
    body: "A business measured incrementality for each campaign type once, establishing factors: prospecting 0.85, general retargeting 0.30, basket abandonment 0.18. They then applied these to their ordinary reporting every month, producing an adjusted view alongside the attributed one. Budget decisions were made on the adjusted figures. They re-measured every six months. Over two years their cost per genuinely incremental customer fell by 41 percent, while their attributed figures barely moved."
  },
  steps: [
    "Set a testing schedule: quarterly on the largest item, annually across the account.",
    "Use the strongest method available for each question.",
    "Establish an incrementality factor for each campaign type.",
    "Apply those factors to ordinary reporting to produce an adjusted view.",
    "Make budget decisions on the adjusted figures.",
    "Re-measure the factors every six months, since they change with spend."
  ],
  mistakes: [
    "Measuring incrementality and then allocating budget on attributed figures anyway.",
    "Using factors measured long ago at different spending levels.",
    "Testing only when someone remembers, rather than on a schedule."
  ],
  words: [
    { t: "Incrementality factor", d: "Your estimate of what proportion of attributed conversions are genuinely additional." },
    { t: "Adjusted view", d: "Ordinary reporting with incrementality factors applied." },
    { t: "Measurement schedule", d: "A calendar ensuring causal testing happens regularly." },
    { t: "Decision linkage", d: "The requirement that findings actually change budget allocation." }
  ],
  takeaways: [
    "Four parts: schedule, method hierarchy, findings record, decision linkage.",
    "Incrementality factors let you adjust ordinary reporting continuously.",
    "Re-measure factors every six months, since they change with spending.",
    "Measurement that does not change decisions is wasted effort."
  ],
  selfCheck: [
    "I have a testing schedule rather than occasional tests.",
    "I have incrementality factors for my main campaign types.",
    "My budget decisions use adjusted rather than attributed figures."
  ],
  quiz: [
    { q: "What is an incrementality factor?", options: ["A bid setting", "Your estimate of what proportion of attributed conversions are genuinely additional", "A reporting metric from Meta"], a: 1, why: "It lets you adjust ordinary reporting without testing every month." },
    { q: "How often should factors be re-measured?", options: ["Never", "Roughly every six months, because they change with spending level", "Every week"], a: 1, why: "A factor measured at a different budget is no longer a measurement." },
    { q: "What makes causal measurement worthwhile?", options: ["Better reports", "Different budget decisions based on the findings", "Client confidence"], a: 1, why: "Measurement that changes nothing has produced no value." }
  ],
  exercise: { task: "Write down your best estimate of the incrementality factor for each of your campaign types, and mark how confident you are in each. Then plan a test for the one where you are least confident and spending most." },
  challenge: { task: "Build a causal measurement system: the testing calendar, the method for each question, the incrementality factors with their evidence and confidence, the adjusted reporting format, the budget decision rules using adjusted figures, and the six month re-measurement schedule." }
}

});
