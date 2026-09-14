/* Module 27 - Experimentation (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"7.27.1": {
  intro: "A test compares two things fairly to find out which is better. This lesson covers what makes a comparison fair, which is harder than it sounds.",
  plain: [
    "Two shops sell the same jacket. One sells more. Is their jacket better, or is their shop on a busier street, or was their week sunnier, or do they simply have more customers already?",
    "You cannot answer without holding everything else equal. That is the whole idea of testing: change one thing, keep everything else the same, and any difference in the result must have come from the thing you changed.",
    "Most advertising tests fail not because the idea was wrong, but because something else was different too and nobody noticed."
  ],
  idea: [
    "A fair test has four requirements. One difference between the versions. The same audience, or randomly divided audiences. The same time period. And enough results for the difference to be meaningful rather than luck.",
    "The time requirement catches people out constantly. Running version A this week and version B next week is not a test, because the weeks differ: different weather, different competitor activity, different days near a payday. Any difference you find might be the week rather than the version.",
    "The random division requirement matters too. If version A goes to your existing customers and version B goes to strangers, you have not tested the versions, you have tested the audiences.",
    "The volume requirement is where most small accounts struggle honestly. With 20 conversions in total, almost no difference is trustworthy. This is not a reason to avoid testing, but it is a reason to test only big changes, where the difference is large enough to see through the noise.",
    "Finally, decide before you start what result would make you act. Writing it down prevents the very human habit of looking at the data and then deciding what the test was measuring."
  ],
  example: {
    title: "Two weeks, two answers",
    body: "A team ran version A for a week and version B the following week. B produced results 30 percent cheaper and was declared the winner. They ran the comparison again the following month, this time simultaneously, and A won by 12 percent. The first result had been the difference between two weeks, one of which included a public holiday, and had nothing to do with the versions at all."
  },
  steps: [
    "Write the question the test answers in one sentence.",
    "Change exactly one thing between the versions.",
    "Run both at the same time, not one after the other.",
    "Ensure the audiences are the same or randomly divided.",
    "Write down before starting what result would make you act.",
    "Wait for enough results before looking at conclusions."
  ],
  mistakes: [
    "Running versions in sequence rather than simultaneously.",
    "Changing several things and calling it one test.",
    "Deciding what counts as a win after seeing the results."
  ],
  words: [
    { t: "Test", d: "A fair comparison designed to find out which of two things is better." },
    { t: "Variable", d: "The one thing you deliberately change." },
    { t: "Simultaneous", d: "Running both versions at the same time so conditions match." },
    { t: "Decision rule", d: "The written standard, set in advance, for what result would make you act." }
  ],
  takeaways: [
    "One difference, same time, comparable audiences, enough results.",
    "Sequential testing measures the weeks, not the versions.",
    "Small accounts should test big changes, where differences are visible.",
    "Write the decision rule before you start."
  ],
  selfCheck: [
    "My tests run simultaneously, not in sequence.",
    "I change exactly one thing.",
    "I write the decision rule before launching."
  ],
  quiz: [
    { q: "Why is running version A this week and B next week not a test?", options: ["It takes too long", "The weeks differ, so any difference might be the week rather than the version", "Meta does not allow it"], a: 1, why: "Conditions must be held constant for the comparison to mean anything." },
    { q: "What should a small account test?", options: ["Small refinements", "Big changes, where the difference is large enough to see through the noise", "Nothing"], a: 1, why: "Low volume cannot detect small differences reliably." },
    { q: "When should the decision rule be written?", options: ["After seeing results", "Before launching the test", "Halfway through"], a: 1, why: "Deciding afterwards lets you choose the conclusion you already wanted." }
  ],
  exercise: { task: "Take a comparison you made recently and check it against the four requirements. Write down which ones it met and whether the conclusion was actually justified." },
  challenge: { task: "Write your testing standard: the four requirements, the minimum volume for your account, the decision rule format, the documentation required, and a review of the last five tests you ran against this standard." }
},

"7.27.2": {
  intro: "A hypothesis is a specific prediction you can be wrong about. This lesson covers writing them, which is what turns fiddling into learning.",
  plain: [
    "Let us try a different image is not a hypothesis. It is an activity. Whatever happens, you learn almost nothing.",
    "Showing the product being used will produce more clicks than showing it on a white background, because people want to see how big it actually is, is a hypothesis. It makes a prediction, it gives a reason, and it can be proved wrong.",
    "The value of writing it this way is that a failed test still teaches you something, because you learn the reason was wrong."
  ],
  idea: [
    "A good hypothesis has three parts. The change: what you will do differently. The prediction: what you expect to happen, ideally with a rough size. And the reasoning: why you believe it, which is the part that produces learning.",
    "The reasoning is what most people skip and what matters most. If your reasoning is that people cannot judge the size of the product from a plain photograph, then a win supports that belief and you can apply it elsewhere. Without the reasoning, a win tells you only that this particular image worked.",
    "Hypotheses should come from evidence rather than imagination. Customer questions, support conversations, comments on your advertisements, and competitor patterns all suggest hypotheses worth testing. A hypothesis invented in a meeting with no evidence behind it is usually a waste of a test slot.",
    "The size prediction is worth including because it forces honesty. If your best case is a three percent improvement, and your account produces 40 conversions a month, you will never detect it, and the test should not be run.",
    "Finally, keep a written record of every hypothesis and its outcome. After a year this becomes a document describing how your specific customers behave, which is worth considerably more than any general advice."
  ],
  example: {
    title: "The reasoning that transferred",
    body: "A hypothesis stated: showing the price in the advertisement will reduce clicks but improve cost per customer, because unqualified people will not click. It proved correct. Because the reasoning was written down, the team applied the same logic to their landing pages and their messaging templates, and found the same effect in both. One test produced three improvements, because the belief transferred, not just the tactic."
  },
  steps: [
    "Find evidence suggesting something might be true.",
    "Write the change, the predicted effect and the reasoning.",
    "Estimate the size of the expected difference.",
    "Check whether your volume could detect a difference that size.",
    "Run the test and record the outcome against the hypothesis.",
    "Note whether the reasoning was supported, not just whether the version won."
  ],
  mistakes: [
    "Testing ideas with no reasoning behind them.",
    "Omitting the size prediction, then running tests that could never show anything.",
    "Recording which version won without recording why you thought it would."
  ],
  words: [
    { t: "Hypothesis", d: "A specific prediction with reasoning that can be proved wrong." },
    { t: "Reasoning", d: "Why you believe the prediction, which is what transfers to other decisions." },
    { t: "Effect size", d: "How large a difference you expect." },
    { t: "Detectable difference", d: "The smallest difference your volume allows you to see reliably." }
  ],
  takeaways: [
    "A hypothesis has a change, a prediction and a reason.",
    "The reasoning is what transfers to other decisions.",
    "Predict the size, then check your volume could detect it.",
    "Record whether the reasoning was supported, not just which version won."
  ],
  selfCheck: [
    "My tests start from written hypotheses.",
    "Each includes reasoning and an expected size.",
    "I record whether the reasoning was supported."
  ],
  quiz: [
    { q: "Which part of a hypothesis produces the most learning?", options: ["The change", "The reasoning behind the prediction", "The test structure"], a: 1, why: "Reasoning transfers to other decisions. A tactic does not." },
    { q: "Why predict the size of the effect?", options: ["For reporting", "To check whether your volume could detect a difference that small", "It is required"], a: 1, why: "Tests that could never show anything waste time and delivery." },
    { q: "Where should hypotheses come from?", options: ["Team brainstorming alone", "Evidence such as customer questions, comments and competitor patterns", "Industry blogs"], a: 1, why: "Evidence based hypotheses are far more likely to be worth a test slot." }
  ],
  exercise: { task: "Write three hypotheses for your account using the three part structure. For each, state the expected size and check whether your monthly volume could detect it." },
  challenge: { task: "Build a hypothesis backlog: ten hypotheses drawn from real evidence, each with change, prediction, size and reasoning, ranked by expected value and detectability, with the evidence source recorded for each." }
},

"7.27.3": {
  intro: "Variables and controls are the mechanics of a fair test. This lesson covers what to change and what to hold still.",
  plain: [
    "In a test, one thing moves and everything else stays fixed. The thing that moves is the variable. The things held fixed are the controls.",
    "If two things move, you cannot tell which one caused the result. This sounds obvious and it is broken constantly, usually by accident."
  ],
  idea: [
    "The variable is what you deliberately change: the image, the headline, the audience, the offer, the landing page. Choose one, and choose it at one level. Changing the image and the headline together is two variables.",
    "The controls are everything else: budget, audience, placements, schedule, bid strategy, time period and the destination. Any of these differing between versions invalidates the comparison.",
    "Two controls are quietly broken more often than the rest. Budget, when one version receives more spend than the other, which happens automatically in some test structures. And time, when one version starts a day earlier.",
    "There is a subtlety worth understanding about creative tests inside one ad set. The system deliberately gives more delivery to whichever performs early, so budget is not equal between them. This is acceptable for practical decisions, because it answers which advertisement the system can use best. It is not acceptable if you need a clean scientific comparison, in which case a formal split test with enforced equal division is required.",
    "Finally, write down your controls before starting. The act of listing them frequently reveals that something you intended to hold constant is not actually constant."
  ],
  example: {
    title: "Two variables, no conclusion",
    body: "A team tested a new advertisement against their existing one. The new advertisement had a different image and pointed to a newly built landing page. It won by 40 percent. They could not tell whether the image or the page produced the result, so they could not apply the learning anywhere. Repeating the test properly, one variable at a time, took another three weeks and showed the page was responsible and the image was slightly worse."
  },
  steps: [
    "Choose one variable and write it down.",
    "List every control that must stay the same.",
    "Check each control is genuinely identical between versions.",
    "Decide whether you need enforced equal budget or practical comparison.",
    "Launch both versions at the same moment.",
    "Verify after 24 hours that nothing unintended differs."
  ],
  mistakes: [
    "Changing the creative and the destination together.",
    "Starting one version a day before the other.",
    "Assuming budget is equal when the system is allocating it dynamically."
  ],
  words: [
    { t: "Variable", d: "The one thing you deliberately change." },
    { t: "Control", d: "Something held constant so it cannot affect the result." },
    { t: "Confounded test", d: "A test where two things changed, so the cause cannot be identified." },
    { t: "Enforced equal division", d: "A formal structure that splits budget and audience evenly." }
  ],
  takeaways: [
    "One variable, everything else held constant.",
    "Budget and start time are the most commonly broken controls.",
    "Creative tests inside one ad set do not have equal budget, and that is usually acceptable.",
    "List your controls before starting. It reveals accidental differences."
  ],
  selfCheck: [
    "My tests change exactly one variable.",
    "I list my controls before launching.",
    "I know whether I need enforced equal division for each test."
  ],
  quiz: [
    { q: "What is wrong with changing the creative and the landing page together?", options: ["It takes longer", "You cannot tell which change caused the result", "Meta rejects it"], a: 1, why: "A confounded test produces a number you cannot learn from." },
    { q: "Which controls are most commonly broken by accident?", options: ["Placement and objective", "Budget and start time", "Currency and time zone"], a: 1, why: "Both differ easily without anyone noticing." },
    { q: "When do you need enforced equal division?", options: ["Always", "When you need a clean comparison rather than a practical decision", "Never"], a: 1, why: "Practical creative tests tolerate unequal delivery. Scientific comparisons do not." }
  ],
  exercise: { task: "Take a test you are planning and write down the variable and every control. Then check each control in the actual setup and note any that differ." },
  challenge: { task: "Create a test setup checklist: the variable declaration, the full control list, the verification steps after launch, the structures requiring enforced division, and the sign off process before any test goes live." }
},

"7.27.4": {
  intro: "Statistical thinking means knowing when a difference is real and when it is luck. This lesson covers it without mathematics.",
  plain: [
    "Toss a coin ten times and you might get seven heads. That does not mean the coin is biased. Toss it a thousand times and get seven hundred heads, and it almost certainly is.",
    "Small numbers produce strange results by chance. Large numbers do not. That is the whole of what you need to understand.",
    "The practical question in advertising is always: do I have enough results that this difference is unlikely to be chance?"
  ],
  idea: [
    "Three ideas cover most of what an advertiser needs.",
    "First, sample size. More results means more reliable conclusions. As a rough practical guide, fewer than 30 conversions per version means almost nothing is trustworthy, 50 to 100 allows large differences to be seen, and several hundred allows moderate differences to be detected.",
    "Second, effect size. Large differences need less data to confirm. A version that doubles performance can be spotted with modest volume. A version that improves things by five percent needs an enormous amount of data, usually more than a normal account can produce.",
    "Third, the danger of looking repeatedly. If you check a test every day and stop the moment it looks good, you will frequently declare winners that are not real. Random variation guarantees that at some point one version will be temporarily ahead. Deciding the duration in advance and waiting protects you from this, and it is the single most useful discipline in this lesson.",
    "The honest conclusion for most advertisers is that only large differences can be reliably detected, and that is fine. The changes worth making are usually large ones anyway."
  ],
  example: {
    title: "The winner that kept changing",
    body: "A test was checked daily. On day two version A led by 40 percent. On day four B led by 25 percent. On day six A led by 10 percent. On day fourteen, with 180 conversions in total, they were within 3 percent of each other. Anyone stopping early on any of those days would have declared a confident winner, and would have been wrong."
  },
  steps: [
    "Estimate how large a difference you expect.",
    "Check whether your volume could detect a difference that size.",
    "If not, test something bigger instead.",
    "Set the duration in advance, usually at least 7 to 14 days.",
    "Do not check daily, and do not stop early because it looks good.",
    "Judge only at the point you decided in advance."
  ],
  mistakes: [
    "Stopping a test the moment one version looks ahead.",
    "Running tests that could never detect the difference you are looking for.",
    "Treating a difference from 20 conversions as meaningful."
  ],
  words: [
    { t: "Sample size", d: "How many results the test collected." },
    { t: "Effect size", d: "How large the difference between versions is." },
    { t: "Random variation", d: "Differences that appear by chance and mean nothing." },
    { t: "Stopping early", d: "Ending a test when it looks good, which produces false winners." }
  ],
  takeaways: [
    "Small numbers produce strange results by chance.",
    "Large differences need less data. Small ones need more than most accounts have.",
    "Checking daily and stopping early produces false winners regularly.",
    "Set the duration in advance and wait."
  ],
  selfCheck: [
    "I know my minimum conversion count before judging.",
    "I set test durations in advance.",
    "I resist stopping early when one version looks ahead."
  ],
  quiz: [
    { q: "Why is stopping a test early dangerous?", options: ["It wastes budget", "Random variation guarantees one version will temporarily lead, producing false winners", "Meta penalises it"], a: 1, why: "Early leads reverse frequently." },
    { q: "Which differences can most accounts reliably detect?", options: ["Differences of a few percent", "Large differences", "Any difference"], a: 1, why: "Small effects require far more data than most accounts produce." },
    { q: "Roughly how many conversions per version before a difference means much?", options: ["About 10", "At least 30, and preferably 50 to 100", "About 5"], a: 1, why: "Below that, chance dominates the result." }
  ],
  exercise: { task: "Look at a test you ran and note the conversion count per version. Then check whether the difference you concluded was based on enough data to be trustworthy." },
  challenge: { task: "Build a testing volume framework: your typical monthly conversions, the minimum per version, the effect sizes you can and cannot detect, the standard test duration, the rules preventing early stopping, and which types of test your account simply cannot support." }
},

"7.27.5": {
  intro: "Deciding how long a test should run, and how much data it needs, prevents most wasted testing. This lesson gives practical rules.",
  plain: [
    "Two things determine test length: how much data you need, and how long it takes to collect it.",
    "The data requirement comes from how big a difference you are looking for. The collection time comes from your volume. Multiply the two and you have your duration.",
    "There is also a minimum regardless of volume, because a test shorter than a week measures particular days rather than general performance."
  ],
  idea: [
    "The practical minimum duration is seven days, and fourteen is safer. This is because behaviour varies by day of the week substantially in most businesses, and a test covering only weekdays or only a weekend measures something specific rather than general.",
    "The data requirement depends on effect size. As a working guide: to detect a difference of 50 percent or more, roughly 30 to 50 conversions per version may suffice. For 20 to 30 percent, expect to need several hundred. For under 10 percent, most accounts cannot do it at all.",
    "The calculation is straightforward. If you need 100 conversions per version and each version produces 8 a day, that is roughly 13 days, so you round to 14.",
    "There is a further consideration specific to Meta: the learning phase. A test where one version is still learning is not comparing steady performance. Ideally each version should complete learning before the comparison period begins, which in practice means either running longer or accepting some noise from the early days.",
    "Finally, decide in advance what happens if the test is inconclusive. Most tests are inconclusive, and having a plan for that outcome prevents the temptation to invent a winner."
  ],
  example: {
    title: "Planned before launch",
    body: "A team calculated: expected difference around 25 percent, so approximately 200 conversions per version needed. Each version produces about 14 conversions a day, giving roughly 14 days. Add 5 days for learning, giving 19 days, rounded to three weeks. They wrote: if the difference is under 15 percent after three weeks, we will call it inconclusive and keep the existing version. The test came in at 11 percent, and they kept the original without argument."
  },
  steps: [
    "Estimate the difference you expect.",
    "Determine the conversions needed per version for that size.",
    "Divide by your daily conversion rate per version.",
    "Add several days for the learning phase.",
    "Round up to a whole number of weeks.",
    "Decide in advance what an inconclusive result means."
  ],
  mistakes: [
    "Running tests shorter than a week, which measures particular days.",
    "Not accounting for the learning phase in the duration.",
    "Having no plan for an inconclusive result, then inventing a winner."
  ],
  words: [
    { t: "Test duration", d: "How long the test runs before you judge it." },
    { t: "Day of week variation", d: "Behaviour differing systematically across the week." },
    { t: "Inconclusive", d: "A result too small or uncertain to act on." },
    { t: "Learning allowance", d: "Extra days added so versions are compared at steady performance." }
  ],
  takeaways: [
    "Minimum seven days, preferably fourteen, regardless of volume.",
    "Data needed depends on the size of the difference you seek.",
    "Add days for the learning phase before the comparison period.",
    "Plan for inconclusive results, because most tests are inconclusive."
  ],
  selfCheck: [
    "I calculate duration before launching rather than guessing.",
    "My tests run at least a full week.",
    "I have a written plan for inconclusive results."
  ],
  quiz: [
    { q: "Why is seven days the practical minimum?", options: ["Meta requires it", "Behaviour varies by day of the week, so shorter tests measure specific days", "The system needs time to spend"], a: 1, why: "A partial week is not representative of general performance." },
    { q: "What should be added to the calculated duration?", options: ["Nothing", "Days for the learning phase to complete", "A month"], a: 1, why: "Comparing versions still in learning compares unsettled performance." },
    { q: "What should you decide in advance about inconclusive results?", options: ["That they will not happen", "What you will do, since most tests are inconclusive", "To rerun automatically"], a: 1, why: "Without a plan, people invent winners from noise." }
  ],
  exercise: { task: "Calculate the duration for your next test: expected difference, conversions needed, daily rate, learning allowance. Write the number of days and the inconclusive plan before you launch." },
  challenge: { task: "Build a test planning calculator: the effect size to sample size guide, your account's daily conversion rates by campaign, the duration formula, the learning allowance, the inconclusive rules, and a worked example for three typical tests." }
},

"7.27.6": {
  intro: "Creative experiments are the most valuable tests most advertisers can run. This lesson covers running them properly.",
  plain: [
    "Creative produces the largest differences of anything you can test, which means creative tests are the ones most likely to show a real result with the volume you have.",
    "They are also the tests most often run badly, usually by comparing things that differ in several ways at once."
  ],
  idea: [
    "The most useful creative tests, in order of value, are: different angles, different mechanisms, different hooks, and then smaller variations. This mirrors the creative strategy module, and the reason is the same: bigger differences produce bigger effects, which are easier to detect and more useful to learn from.",
    "The standard structure is three to five advertisements inside one ad set, everything else identical. The system distributes delivery, and after enough results you compare cost per result. This is not a perfectly controlled experiment, but it answers the practical question of which advertisement the system can use most effectively.",
    "There is an important subtlety. Because the system allocates delivery unevenly, an advertisement that received very little delivery has not really been tested. If one of your five received 3 percent of impressions, you have not learned that it fails, only that the system did not favour it early. For a genuine comparison of all five, a formal split test with enforced division is needed.",
    "The practical compromise most experienced advertisers use: run the informal test first, since it is cheap and answers the practical question, and reserve formal split tests for expensive decisions such as choosing between two entire creative directions.",
    "Finally, record the attributes of every advertisement so that patterns can emerge across many tests, as covered in the creative reporting lesson. A single test tells you which advertisement won. Fifty tagged tests tell you what kind of advertising works for your customers."
  ],
  example: {
    title: "The advertisement that was never tested",
    body: "A team ran five advertisements and concluded two had failed. Checking the delivery showed those two had received 2 and 4 percent of impressions respectively, roughly 40 conversions between them across two weeks. They had not been tested, merely under-delivered. Rerunning those two alone against each other showed one of them outperformed the original winner by 20 percent."
  },
  steps: [
    "Test angles and mechanisms before variations.",
    "Put three to five advertisements in one ad set with everything else identical.",
    "Check delivery distribution before concluding anything.",
    "Re-test anything that received very little delivery.",
    "Use a formal split test for expensive directional decisions.",
    "Tag every advertisement by attribute so patterns can emerge."
  ],
  mistakes: [
    "Concluding an advertisement failed when it barely received delivery.",
    "Testing small variations before finding a working angle.",
    "Not tagging attributes, so fifty tests produce no cumulative learning."
  ],
  words: [
    { t: "Delivery distribution", d: "How impressions were shared between the advertisements being tested." },
    { t: "Under-delivered", d: "An advertisement that received too few impressions to be judged." },
    { t: "Formal split test", d: "A structure enforcing equal budget and separated audiences." },
    { t: "Attribute tagging", d: "Recording the angle, format and mechanism of each advertisement." }
  ],
  takeaways: [
    "Creative produces the largest detectable differences.",
    "Test angles and mechanisms before variations.",
    "Check delivery before concluding an advertisement failed.",
    "Tag attributes so many tests produce cumulative learning."
  ],
  selfCheck: [
    "I check delivery distribution before drawing conclusions.",
    "I test angles before variations.",
    "My advertisements are tagged by attribute."
  ],
  quiz: [
    { q: "An advertisement received 3 percent of impressions and performed poorly. What can you conclude?", options: ["It failed", "Very little, because it was never really tested", "The audience is wrong"], a: 1, why: "Under-delivered advertisements have not been given a fair comparison." },
    { q: "What should be tested first?", options: ["Button colours", "Different angles and mechanisms", "Font choices"], a: 1, why: "They produce the largest differences, which are detectable and useful." },
    { q: "When is a formal split test worth the extra cost?", options: ["For every creative test", "For expensive decisions such as choosing between entire creative directions", "Never"], a: 1, why: "Enforced division costs more but gives a cleaner answer where it matters." }
  ],
  exercise: { task: "Look at your last creative test and check the impression share each advertisement received. Note any that received under 10 percent, and rerun those against each other." },
  challenge: { task: "Design a creative testing programme: the hierarchy from angle to variation, the standard structure, the delivery distribution checks, when formal split tests are used, the attribute tagging system, and the quarterly pattern analysis across all tests." }
},

"7.27.7": {
  intro: "Audience experiments compare who you reach. This lesson covers running them fairly, which is harder than creative tests.",
  plain: [
    "Comparing two audiences is more difficult than comparing two advertisements, because the audiences may overlap. If the same people are in both, you are not comparing two groups, you are comparing one group against itself.",
    "This is the main reason audience tests produce confusing results."
  ],
  idea: [
    "The overlap problem is central. A broad audience contains almost everyone in your interest audience. A 3 percent lookalike contains the entire 1 percent lookalike. Testing these against each other in the normal way means both versions compete for the same people, and the results are meaningless.",
    "The solution is a formal split test, which divides the audience randomly and ensures no person appears in both sides. This is why audience tests, unlike creative tests, genuinely need the formal structure most of the time.",
    "The tests worth running are the ones where the answer would change what you do. Broad against your best interest audience. Lookalike against broad. Wide age range against narrow. Each of these could change your standing approach, which makes them worth the cost.",
    "One practical warning: audience tests take longer than creative tests, because the difference between two audiences is usually smaller than the difference between two creative angles. Expect to need more data and more patience.",
    "Finally, remember from the audiences module that automation has narrowed the differences between audience choices considerably. Many audience tests now return inconclusive results, which is itself a useful finding: it means you should stop spending effort on audience construction and spend it on creative instead."
  ],
  example: {
    title: "Inconclusive was the answer",
    body: "A team ran a formal split test comparing their carefully built interest audience against broad targeting. After three weeks and 340 conversions per side, the difference was 4 percent in favour of broad, well within noise. The conclusion was not that broad won. It was that audience construction was not where their advantage lay, and the six hours a week spent on it were redirected to creative production."
  },
  steps: [
    "Check whether the audiences overlap before designing the test.",
    "Use a formal split test to ensure no person appears in both sides.",
    "Choose tests where the answer would change your standing approach.",
    "Plan for longer duration than a creative test.",
    "Judge on cost per customer, not cost per lead.",
    "Treat an inconclusive result as a useful finding about where to spend effort."
  ],
  mistakes: [
    "Testing overlapping audiences in a normal structure.",
    "Expecting audience tests to produce differences as large as creative tests.",
    "Treating inconclusive as a failed test rather than a finding."
  ],
  words: [
    { t: "Overlap", d: "The same people existing in both audiences being compared." },
    { t: "Formal split test", d: "A structure that divides audiences randomly with no overlap." },
    { t: "Standing approach", d: "The default you would use in the absence of a test result." },
    { t: "Inconclusive finding", d: "A result showing the choice does not matter much, which is itself useful." }
  ],
  takeaways: [
    "Audience overlap makes normal test structures meaningless.",
    "Audience tests usually need the formal split test structure.",
    "Expect smaller differences and longer durations than creative tests.",
    "Inconclusive means stop spending effort here, which is useful to know."
  ],
  selfCheck: [
    "I check for overlap before designing audience tests.",
    "I use formal split tests for audience comparisons.",
    "I treat inconclusive results as findings rather than failures."
  ],
  quiz: [
    { q: "Why do audience tests usually need a formal split test?", options: ["They cost more", "Audiences often overlap, so both sides would compete for the same people", "Meta requires it"], a: 1, why: "Overlap makes the comparison meaningless." },
    { q: "What does an inconclusive audience test tell you?", options: ["The test failed", "That audience choice is not where your advantage lies, so spend effort elsewhere", "To test again immediately"], a: 1, why: "Knowing something does not matter is genuinely valuable." },
    { q: "How do audience test differences compare with creative test differences?", options: ["Larger", "Usually smaller, needing more data and patience", "Identical"], a: 1, why: "Automation has narrowed audience differences considerably." }
  ],
  exercise: { task: "Identify two audiences you use and check whether one contains the other. If they overlap, design the test as a formal split test rather than a normal comparison." },
  challenge: { task: "Design an audience testing programme: the overlap analysis of your current audiences, the tests worth running ranked by decision impact, the split test structures, the duration calculations, and how inconclusive results would change your effort allocation." }
},

"7.27.8": {
  intro: "Budget and bidding experiments test how much to spend and how to bid. This lesson covers testing these safely.",
  plain: [
    "Testing money settings is different from testing creative, because the changes take time to settle and the wrong answer is expensive while you find out.",
    "It is also the area where people test most carelessly, changing a budget on Monday and judging on Wednesday."
  ],
  idea: [
    "The three tests worth running here are: budget level, meaning whether more spend still produces acceptable results. Bid strategy, meaning whether a cost control improves your business outcome. And budget structure, meaning whether campaign level or ad set level allocation performs better.",
    "The budget level test is really the scaling question from Level 4, run deliberately. Increase in steps, measure the marginal cost of the additional results at each step, and stop when marginal cost approaches customer value. This is a sequence of small experiments rather than one test.",
    "The bid strategy test requires patience, because changing strategy restarts learning. Expect two weeks of unstable performance before the comparison period even begins, and plan a total of four to six weeks.",
    "The structure test compares campaign budget optimisation against ad set budgets. Run both structures with the same total budget and the same creative for at least three weeks. This is a genuine question with different answers for different accounts, and it is worth settling once rather than debating repeatedly.",
    "The essential discipline in all three is patience. Money settings take longer to show their true effect than anything else, and the most common error is judging them after a few days of noise."
  ],
  example: {
    title: "Judged too early, twice",
    body: "A team switched to a cost control and judged after four days, seeing worse results, so they reverted. Two months later they tried again, judged after five days, saw worse results, and reverted again. The third time they committed to four weeks. Weeks one and two were poor, week three recovered, and week four was 22 percent better than the original. The change had always been correct and they had abandoned it twice during the learning period they had not allowed for."
  },
  steps: [
    "Choose one money variable to test.",
    "Allow two weeks for learning before the comparison period starts.",
    "Plan a total duration of four to six weeks.",
    "Change nothing else during the test.",
    "Measure on cost per customer and total contribution.",
    "Commit to the full duration before starting."
  ],
  mistakes: [
    "Judging bid strategy changes within a week.",
    "Testing money settings while also changing creative.",
    "Reverting during the learning period, then concluding the change failed."
  ],
  words: [
    { t: "Marginal cost", d: "The cost of the additional results produced by extra budget." },
    { t: "Settling period", d: "The time before performance stabilises after a money change." },
    { t: "Structure test", d: "Comparing campaign level against ad set level budget allocation." },
    { t: "Commitment", d: "Deciding the full duration in advance and not abandoning early." }
  ],
  takeaways: [
    "Money settings take longer to show their true effect than anything else.",
    "Allow two weeks of learning before the comparison period begins.",
    "Plan four to six weeks total for bid strategy tests.",
    "The most common error is reverting during the learning period."
  ],
  selfCheck: [
    "I allow for learning before judging money changes.",
    "My money tests run four to six weeks.",
    "I commit to the full duration before starting."
  ],
  quiz: [
    { q: "Why do bid strategy tests need four to six weeks?", options: ["Meta requires it", "The change restarts learning, so early weeks show unstable performance", "To collect more data than creative tests"], a: 1, why: "Judging during the settling period produces false conclusions." },
    { q: "What is the most common error in money testing?", options: ["Testing too many variables", "Reverting during the learning period and concluding the change failed", "Using too much budget"], a: 1, why: "The early instability is expected and temporary." },
    { q: "How should budget level be tested?", options: ["One large increase", "In steps, measuring the marginal cost of additional results at each", "By doubling and comparing"], a: 1, why: "Steps reveal where marginal cost reaches customer value." }
  ],
  exercise: { task: "Plan one money test with a written commitment: the variable, the four to six week duration, what you will not change during it, and a note to yourself about the expected poor performance in the first two weeks." },
  challenge: { task: "Design a money testing programme: the three test types, the durations and learning allowances, the metrics judged, the commitment protocol preventing early reversal, the sequence over six months, and how findings are recorded and applied." }
},

"7.27.9": {
  intro: "This final lesson of the module covers running testing as an ongoing programme rather than occasional experiments.",
  plain: [
    "Occasional testing produces occasional insights that get forgotten. A programme produces accumulating knowledge that compounds.",
    "The difference is not sophistication. It is a calendar, a written record, and the discipline of running tests continuously rather than when someone remembers."
  ],
  idea: [
    "A testing programme has four elements. A backlog of hypotheses waiting to be tested, ranked by expected value. A calendar allocating test slots, because you can only run a limited number at once. A written record of every test and its outcome. And a review rhythm where patterns across tests are examined.",
    "The capacity question is important and often ignored. Your account can only support a certain number of simultaneous tests, limited by conversion volume. Running six tests in an account producing 200 conversions a month means each test has too little data. Two well powered tests beat six underpowered ones.",
    "The record is what turns tests into knowledge. It should contain the hypothesis, the reasoning, the structure, the result, and crucially whether the reasoning was supported. After a year this document describes how your specific customers behave.",
    "The review rhythm matters because individual tests are noisy while patterns across many tests are reliable. Reviewing quarterly, looking for consistent findings across several tests, produces more trustworthy conclusions than any single test.",
    "Finally, a programme needs an honest culture. Tests that fail are valuable and should be recorded as prominently as successes. A team that only records wins builds a document that lies to them."
  ],
  example: {
    title: "The pattern nobody test showed alone",
    body: "A team reviewed a year of tests. No single test had been conclusive about creative length. But across eleven tests, shorter creative had won or drawn nine times. Individually each result had been within noise. Together they formed a clear pattern that changed their production standard. The quarterly review found what no individual test could."
  },
  steps: [
    "Build a ranked backlog of hypotheses.",
    "Calculate how many simultaneous tests your volume supports.",
    "Allocate test slots on a calendar.",
    "Record every test with hypothesis, reasoning, structure and outcome.",
    "Review quarterly for patterns across multiple tests.",
    "Record failures as prominently as successes."
  ],
  mistakes: [
    "Running more simultaneous tests than your volume can support.",
    "Recording only the tests that worked.",
    "Never reviewing across tests, so patterns remain invisible."
  ],
  words: [
    { t: "Testing programme", d: "A continuous system of hypotheses, slots, records and reviews." },
    { t: "Test capacity", d: "How many simultaneous tests your conversion volume can support." },
    { t: "Test record", d: "The written history of every test and its outcome." },
    { t: "Pattern review", d: "Examining findings across many tests to find reliable conclusions." }
  ],
  takeaways: [
    "Four elements: backlog, calendar, record, review.",
    "Two well powered tests beat six underpowered ones.",
    "The record turns individual tests into accumulated knowledge.",
    "Record failures as prominently as successes."
  ],
  selfCheck: [
    "I have a ranked hypothesis backlog.",
    "I know how many simultaneous tests my volume supports.",
    "I review across tests quarterly."
  ],
  quiz: [
    { q: "What limits how many tests you can run at once?", options: ["Your budget", "Your conversion volume, since each test needs enough data", "Meta's rules"], a: 1, why: "Splitting limited conversions across many tests underpowers all of them." },
    { q: "Why review across many tests?", options: ["For reporting", "Individual tests are noisy while patterns across many are reliable", "To satisfy management"], a: 1, why: "Consistent findings across tests are far more trustworthy than any single one." },
    { q: "Why record failures?", options: ["For completeness", "A record containing only wins builds a document that misleads you", "Meta requires it"], a: 1, why: "Selective recording produces false confidence in patterns that do not exist." }
  ],
  exercise: { task: "Start your test record today with the last five tests you ran, including the failures. Add the hypothesis, reasoning and outcome for each, from memory if necessary." },
  challenge: { task: "Build a complete testing programme: the hypothesis backlog with rankings, the capacity calculation, the test calendar for six months, the record template, the quarterly pattern review process, and the cultural rules ensuring failures are recorded honestly." }
}

});
