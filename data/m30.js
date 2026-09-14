/* Module 30 - Troubleshooting (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"8.30.1": {
  intro: "A diagnostic framework is a fixed order of checks that finds the cause of a problem quickly. This lesson gives you one.",
  plain: [
    "When a doctor sees a patient with chest pain, they do not guess. They work through a fixed sequence of checks, ruling things out in order, starting with the most serious and most likely.",
    "Advertising problems deserve the same approach. Most people instead guess, change something, wait, guess again. That takes weeks and often makes things worse.",
    "The framework below takes about twenty minutes and finds the cause of most problems."
  ],
  idea: [
    "The order matters, because each step rules out a category. Work through them in sequence and stop when you find the cause.",
    "Step one: is it real? Check that the change is outside your normal variation and covers enough days and results. Many reported problems are noise.",
    "Step two: did something change? Check the activity history. Internal changes explain most sudden shifts and take seconds to rule out.",
    "Step three: is it measurement or performance? Compare against your own internal records. If your sales are unchanged but Meta reports fewer, the problem is tracking, not advertising.",
    "Step four: is it the market? Check whether impression costs rose across campaigns you did not touch, and check the calendar for seasonal events.",
    "Step five: where in the chain? Use the impression cost, click rate and conversion rate to identify which part broke, as covered in Level 1.",
    "Step six: is it the destination? If click rate is fine and conversion fell, the problem is after the click.",
    "Only after all six should you conclude the problem is creative or audience, which is where most people start."
  ],
  example: {
    title: "Twenty minutes instead of three weeks",
    body: "Cost per lead doubled. Step one confirmed it was real, across nine days and 200 leads. Step two showed no changes. Step three showed internal enquiries had also halved, so it was performance not tracking. Step four showed impression costs flat elsewhere. Step five showed click rate unchanged and conversion rate collapsed. Step six found the enquiry form had broken after a website update. Total diagnosis time: eighteen minutes. The team had previously spent three weeks testing creative."
  },
  steps: [
    "Confirm the change is real and outside normal variation.",
    "Check the activity history for recent changes.",
    "Compare against internal records to separate measurement from performance.",
    "Check untouched campaigns and the calendar for market effects.",
    "Use impression cost, click rate and conversion rate to locate the break.",
    "Check the destination before concluding it is creative or audience."
  ],
  mistakes: [
    "Starting with creative, which is the last step not the first.",
    "Skipping the internal records comparison and diagnosing a tracking problem as a performance problem.",
    "Changing something before completing the diagnosis."
  ],
  words: [
    { t: "Diagnostic framework", d: "A fixed order of checks that isolates the cause of a problem." },
    { t: "Normal variation", d: "The range within which figures move without anything being wrong." },
    { t: "Measurement problem", d: "When the business is fine and only the reporting changed." },
    { t: "Chain location", d: "Which part of impression cost, click rate or conversion rate broke." }
  ],
  takeaways: [
    "Work through six steps in order and stop when you find the cause.",
    "Most reported problems are noise or internal changes.",
    "Always separate measurement problems from performance problems.",
    "Creative is the last thing to check, not the first."
  ],
  selfCheck: [
    "I have the six steps written down where I work.",
    "I check the activity history before anything else.",
    "I compare against internal records before diagnosing."
  ],
  quiz: [
    { q: "What should you check immediately after confirming a problem is real?", options: ["The creative", "The activity history for recent changes", "The audience"], a: 1, why: "Internal changes explain most sudden shifts and take seconds to rule out." },
    { q: "Your Meta conversions fell but your internal sales are unchanged. What is it?", options: ["A performance problem", "A measurement problem", "Seasonality"], a: 1, why: "The business is fine and only the reporting changed." },
    { q: "Where does creative sit in the diagnostic order?", options: ["First", "Last, after everything else is ruled out", "Second"], a: 1, why: "Most problems have other causes that are faster to check." }
  ],
  exercise: { task: "Write the six steps on a card and keep it where you work. Apply them to the next problem you encounter and note how long the diagnosis took." },
  challenge: { task: "Build a diagnostic manual for your team: the six steps with the exact checks at each, the data needed, the typical time for each step, the decision points, and a worked example from a real problem in your account." }
},

"8.30.2": {
  intro: "High cost per thousand impressions means it has become expensive to reach your audience. This lesson covers diagnosing why.",
  plain: [
    "This number tells you the price of showing your advertisement, before anyone does anything with it. When it rises, you are paying more for the same exposure.",
    "The causes fall into two groups: things about your account, and things about the market. Separating them decides whether you can fix it or must adapt to it."
  ],
  idea: [
    "The account causes are: an audience that is too small, so you are competing for a limited pool. Poor advertisement quality, which lowers your auction score and forces higher bids. High frequency, since reaching the same people repeatedly costs more. Restrictive targeting or placements, which removes cheap options. And competing against yourself with overlapping ad sets.",
    "The market causes are: seasonal competition, particularly major shopping periods. A new competitor entering your market with a large budget. A general rise in advertising demand. And your audience simply being expensive, as some are, particularly high income professionals in wealthy countries.",
    "The separating test is to check untouched campaigns. If everything rose together, including campaigns you did not change, the cause is the market. If only one campaign rose, the cause is in that campaign.",
    "The fixes differ accordingly. For account causes: widen the audience, improve creative quality, reduce frequency, remove restrictions, fix overlap. For market causes: accept the higher cost and check whether it is still profitable, shift budget to periods or audiences that are cheaper, or improve creative quality to win auctions more cheaply, which is the one lever that works in both cases.",
    "That last point is worth emphasising. Better creative is the only response that helps regardless of the cause, because a higher action rate wins auctions at lower cost whatever the competitive environment."
  ],
  example: {
    title: "Market, not account",
    body: "An advertiser saw impression costs rise 60 percent in November and began rebuilding audiences. Checking untouched campaigns showed all of them had risen similarly. The cause was seasonal competition from retailers. The correct response was not rebuilding but deciding whether the higher cost was still profitable, which it was, and planning for the same rise the following year."
  },
  steps: [
    "Check whether untouched campaigns rose too.",
    "If they did, the cause is the market. Check the calendar.",
    "If only one campaign rose, examine its audience size and frequency.",
    "Check advertisement quality signals and negative feedback.",
    "Check for overlapping ad sets competing against each other.",
    "Improve creative quality, which helps regardless of cause."
  ],
  mistakes: [
    "Rebuilding audiences in response to a market wide increase.",
    "Ignoring frequency, which raises costs quietly.",
    "Not checking for self competition between your own ad sets."
  ],
  words: [
    { t: "Cost per thousand impressions", d: "What it costs to show your advertisement a thousand times." },
    { t: "Account cause", d: "Something in your setup raising your costs." },
    { t: "Market cause", d: "Something affecting all advertisers, not just you." },
    { t: "Auction score", d: "The combination of bid, likely action and quality that decides who wins." }
  ],
  takeaways: [
    "Check untouched campaigns first to separate market from account causes.",
    "Account causes: small audience, poor quality, high frequency, restrictions, overlap.",
    "Market causes: seasonality, new competitors, general demand.",
    "Better creative is the only fix that works for both."
  ],
  selfCheck: [
    "I check untouched campaigns before diagnosing.",
    "I know my frequency and audience size.",
    "I have ruled out self competition."
  ],
  quiz: [
    { q: "How do you separate market causes from account causes?", options: ["Ask Meta", "Check whether campaigns you did not touch also rose", "Compare with last year"], a: 1, why: "A rise across untouched campaigns points to market conditions." },
    { q: "Which fix helps regardless of the cause?", options: ["Reducing the budget", "Improving creative quality, which wins auctions more cheaply", "Changing placement"], a: 1, why: "A higher action rate improves your auction position in any environment." },
    { q: "What raises impression costs quietly?", options: ["A large audience", "High frequency from repeatedly reaching the same people", "Automatic placements"], a: 1, why: "Reaching the same people again costs more each time." }
  ],
  exercise: { task: "Compare impression costs across all your campaigns for the last 30 days against the previous 30. Note whether the change is uniform, which indicates a market cause, or isolated to one campaign." },
  challenge: { task: "Build a diagnostic guide for high impression costs: the separating test, the full list of account and market causes, the check for each, the fix for each, and the seasonal calendar for your market showing expected increases." }
},

"8.30.3": {
  intro: "Low click-through rate means people see your advertisement and do not act. This lesson covers finding out why.",
  plain: [
    "Click rate answers one question: is the advertisement interesting to the people seeing it?",
    "When it is low, either the advertisement is not interesting, or it is being shown to the wrong people, or both. Those need different fixes, and there is a way to tell them apart."
  ],
  idea: [
    "The separating question is whether the click rate was ever good. If a new advertisement never achieved a decent rate, the advertisement is the problem. If it started well and declined, the problem is usually fatigue or audience exhaustion, which are covered elsewhere.",
    "For advertisements that never worked, examine the elements in order of impact. The visual, which decides whether anyone stops scrolling. The first line of text, which decides whether they read on. The offer itself, which may simply be unattractive. And the format fit, since a horizontal image in a vertical placement performs badly regardless of content.",
    "For audience problems, the signals are a reasonable click rate in some placements or segments and a poor one in others, or a click rate that is fine for your retargeting and poor for prospecting, suggesting the message does not work for people who do not know you.",
    "There is a diagnostic worth knowing: check the click rate by placement. A rate that is acceptable in feeds and terrible in Stories almost always means the creative was not adapted for vertical placement, which is a format problem rather than a message problem.",
    "Finally, remember that a low click rate is not always a problem. An advertisement that filters heavily, for example by stating a high price, will have a low click rate and may produce excellent cost per customer. Judge the click rate in the context of what happens afterwards."
  ],
  example: {
    title: "Format, not message",
    body: "An advertisement had a click rate of 0.4 percent overall, which looked like a message failure. Breaking it down by placement showed 1.3 percent in the Facebook feed and 0.08 percent in Stories and Reels, which were receiving most of the impressions. The vertical version had never been made, so the horizontal image was being padded with blank space. Producing a proper vertical version raised the overall rate to 1.5 percent."
  },
  steps: [
    "Check whether the click rate was ever good, or never was.",
    "Break the click rate down by placement.",
    "If one placement is far worse, check the creative format for it.",
    "Examine the visual, the first line and the offer in that order.",
    "Compare prospecting against retargeting click rates.",
    "Check whether the low rate is actually harming cost per customer."
  ],
  mistakes: [
    "Rewriting the message when the problem is a missing vertical format.",
    "Treating a low click rate as a problem when cost per customer is good.",
    "Not separating advertisements that never worked from those that declined."
  ],
  words: [
    { t: "Click-through rate", d: "The share of people who clicked after seeing the advertisement." },
    { t: "Format fit", d: "Whether the creative shape suits the placement." },
    { t: "Filtering creative", d: "An advertisement designed to discourage unsuitable people, producing a low rate deliberately." },
    { t: "Never versus declined", d: "The distinction between an advertisement that failed from the start and one that faded." }
  ],
  takeaways: [
    "Separate advertisements that never worked from those that declined.",
    "Break the rate down by placement before diagnosing the message.",
    "Format problems are commonly mistaken for message problems.",
    "A low click rate with good cost per customer is not a problem."
  ],
  selfCheck: [
    "I check click rate by placement before diagnosing.",
    "I know whether my low rate advertisements ever performed.",
    "I judge click rate against cost per customer."
  ],
  quiz: [
    { q: "Click rate is fine in feeds and terrible in Stories. What is the likely cause?", options: ["Wrong audience", "The creative was not adapted to vertical format", "Bad offer"], a: 1, why: "Format mismatch is the most common cause of placement specific weakness." },
    { q: "When is a low click rate acceptable?", options: ["Never", "When the advertisement deliberately filters and cost per customer is good", "In retargeting only"], a: 1, why: "Filtering creative trades clicks for quality intentionally." },
    { q: "What is the first distinction to make?", options: ["Placement or audience", "Whether the advertisement never worked or declined from a good start", "Budget or bid"], a: 1, why: "The two situations have completely different causes." }
  ],
  exercise: { task: "Take your lowest click rate advertisement and break its performance down by placement. Write down whether the problem is uniform or concentrated in specific placements." },
  challenge: { task: "Build a click rate diagnostic guide: the never versus declined distinction, the placement breakdown method, the element examination order, the format checks, the filtering exception, and the fix for each pattern." }
},

"8.30.4": {
  intro: "High cost per click means each visit is expensive. This lesson covers the two numbers that always explain it.",
  plain: [
    "Cost per click is entirely determined by two things: what it costs to show your advertisement, and how many people click when they see it.",
    "That is not an approximation, it is arithmetic. If your cost per click rose, either impressions became more expensive or fewer people clicked. There is no third possibility.",
    "So the diagnosis is always the same two checks, in that order."
  ],
  idea: [
    "Check impression cost first. If it rose and click rate stayed the same, your cost per click rose because reaching people became more expensive, and the diagnosis moves to the impression cost lesson.",
    "Check click rate second. If impression cost stayed the same and click rate fell, your cost per click rose because the advertisement became less interesting, and the diagnosis moves to the click rate lesson.",
    "Frequently both moved, which is common during fatigue: the audience becomes saturated, so impressions cost more and fewer people respond. Both symptoms have the same underlying cause.",
    "There is a further practical point specific to cost per click. Meta reports several click metrics, and they measure different things. Link clicks count people clicking through to your destination. All clicks include people clicking your Page name, expanding the text, or reacting. Comparing the wrong metric across periods produces false conclusions, and using all clicks flatters your figures considerably.",
    "Always use link clicks or, better still, landing page views, which counts people who actually arrived. The gap between link clicks and landing page views reveals page speed problems, as covered in the funnel lesson."
  ],
  example: {
    title: "The metric that was not comparable",
    body: "A team reported cost per click rising from 0.32 to 0.71 and began an investigation. The earlier report had used all clicks and the later one used link clicks, which are far fewer. Measured consistently, the cost had risen from 0.68 to 0.71, which was normal variation. Two hours of investigation had been caused by comparing two different metrics."
  },
  steps: [
    "Confirm you are comparing the same click metric across periods.",
    "Use link clicks or landing page views, never all clicks.",
    "Check whether impression cost rose.",
    "Check whether click rate fell.",
    "If both moved, suspect fatigue or saturation.",
    "Follow the relevant diagnostic path for whichever moved."
  ],
  mistakes: [
    "Comparing all clicks against link clicks across periods.",
    "Diagnosing cost per click without checking its two components.",
    "Using all clicks in reporting, which flatters the figures."
  ],
  words: [
    { t: "Cost per click", d: "What one click costs, determined by impression cost and click rate." },
    { t: "Link click", d: "A click that goes to your destination." },
    { t: "All clicks", d: "Every click including Page name taps and text expansions." },
    { t: "Landing page view", d: "A recorded arrival on your page, fewer than link clicks when pages load slowly." }
  ],
  takeaways: [
    "Cost per click is entirely explained by impression cost and click rate.",
    "Check both, in that order.",
    "Always use link clicks or landing page views, never all clicks.",
    "Both moving together usually indicates fatigue or saturation."
  ],
  selfCheck: [
    "My reporting uses link clicks or landing page views consistently.",
    "I check both components when cost per click changes.",
    "I know the gap between my link clicks and landing page views."
  ],
  quiz: [
    { q: "What two things fully determine cost per click?", options: ["Budget and bid", "Impression cost and click rate", "Audience and placement"], a: 1, why: "It is arithmetic, so there is no third possibility." },
    { q: "Which click metric should you use?", options: ["All clicks", "Link clicks or landing page views", "Any, as long as it is consistent"], a: 1, why: "All clicks includes interactions that never reach your destination." },
    { q: "Both impression cost and click rate worsened. What does that suggest?", options: ["A tracking error", "Fatigue or audience saturation", "A billing problem"], a: 1, why: "A saturated audience costs more to reach and responds less." }
  ],
  exercise: { task: "Check which click metric your reports use. Then calculate your cost per click from impression cost and click rate to confirm the arithmetic, and identify which component drove any recent change." },
  challenge: { task: "Build a cost per click diagnostic: the metric definitions and which to use, the two component check, the interpretation of each pattern, the fatigue indicator when both move, and a reporting standard preventing metric mismatches." }
},

"8.30.5": {
  intro: "Low conversion rate means people arrive and do not act. This lesson covers diagnosing what happens after the click.",
  plain: [
    "You paid to bring someone to your page. They arrived and left without doing anything. Every one of those is money spent for nothing.",
    "This is usually the largest single loss in an advertising account, and the one advertisers investigate least, because it happens on the website rather than in Ads Manager."
  ],
  idea: [
    "The causes divide into four groups, and they can be separated with specific checks.",
    "Speed. If the page takes more than about three seconds to become usable on a phone, a substantial share of people leave before seeing anything. The check is the gap between link clicks and landing page views, plus timing the page yourself on a mobile connection.",
    "Mismatch. If the advertisement promised something the page does not immediately deliver, people leave confused. The check is to click your own advertisement and see whether the page's first screen matches what was promised.",
    "Friction. If the form is long, the checkout requires an account, or the next step is unclear, people abandon. The check is completing the process yourself on a phone and counting the steps.",
    "Trust. If the page looks unprofessional, lacks contact details, or asks for sensitive information without explanation, people hesitate. The check is showing the page to someone unfamiliar with the business and asking whether they would buy.",
    "The order to check them is speed, mismatch, friction, trust, because that is roughly their order of impact and ease of measurement. Almost every account has a substantial problem in at least one of the four."
  ],
  example: {
    title: "Three seconds",
    body: "A business had a conversion rate of 0.8 percent and had spent two months testing creative. Timing their page on a normal mobile connection showed 9.4 seconds before it became usable, caused by large uncompressed images. Compressing the images brought it to 2.1 seconds. Conversion rate rose to 2.6 percent within a week, with no advertising changes at all."
  },
  steps: [
    "Time your page on a phone using a normal mobile connection.",
    "Compare link clicks against landing page views to quantify speed loss.",
    "Click your own advertisement and check the first screen matches the promise.",
    "Complete the full process on a phone and count the steps.",
    "Show the page to someone unfamiliar and ask whether they would proceed.",
    "Fix in order of impact, then re-measure."
  ],
  mistakes: [
    "Testing creative for weeks when the page takes nine seconds to load.",
    "Never completing your own purchase or enquiry process on a phone.",
    "Assuming the page is fine because it works on your office computer."
  ],
  words: [
    { t: "Conversion rate", d: "The share of arrivals who complete the action you wanted." },
    { t: "Load loss", d: "People leaving before the page becomes usable." },
    { t: "Message mismatch", d: "The page not delivering what the advertisement promised." },
    { t: "Friction", d: "Unnecessary steps or effort in the process." }
  ],
  takeaways: [
    "This is usually the largest loss in an account and the least investigated.",
    "Four causes: speed, mismatch, friction, trust.",
    "Check them in that order, since it reflects impact and ease of measurement.",
    "Always test on a real phone with a normal mobile connection."
  ],
  selfCheck: [
    "I have timed my page on a phone recently.",
    "I have completed my own process end to end on a phone.",
    "I know my link click to landing page view gap."
  ],
  quiz: [
    { q: "What should be checked first?", options: ["The creative", "Page speed on a mobile connection", "The audience"], a: 1, why: "It has the largest impact and is the fastest to measure." },
    { q: "What reveals speed loss in your reporting?", options: ["Frequency", "The gap between link clicks and landing page views", "Impression cost"], a: 1, why: "People lost during loading never register as landing page views." },
    { q: "Why test on a real phone with a mobile connection?", options: ["It is more convenient", "An office computer on fast internet hides the experience most visitors have", "Meta requires it"], a: 1, why: "Most traffic is mobile, often on slower connections." }
  ],
  exercise: { task: "Complete your own enquiry or purchase process on a phone, on mobile data rather than office internet. Time each step and write down every point of friction or confusion." },
  challenge: { task: "Produce a post-click audit: the page speed measurement, the load loss calculation, the message match assessment, the friction step count, the trust review by an outsider, the prioritised fixes with expected impact, and the re-measurement plan." }
},

"8.30.6": {
  intro: "High cost per lead is the most common complaint in lead generation. This lesson covers diagnosing it properly.",
  plain: [
    "Cost per lead is the end of a chain, and any link in that chain can raise it. Diagnosing it means walking back along the chain until you find the broken link.",
    "The chain is: impression cost, click rate, landing page or form completion. Multiply them together and you have your cost per lead."
  ],
  idea: [
    "Work backwards from the result. Take your cost per lead and check each component against your own history.",
    "If impression cost rose, follow the impression cost diagnosis. If click rate fell, follow the click rate diagnosis. If form or page completion fell, follow the conversion diagnosis.",
    "There is a fourth cause specific to lead generation: the form itself. A form that was changed, that added questions, or that broke after a website update will reduce completion without any advertising change. Checking the form completion rate separates this.",
    "There is also a category that is not a problem at all: deliberate quality filtering. If you added qualifying questions or stated your price, cost per lead should rise. Checking whether the change was intentional prevents diagnosing a success as a failure.",
    "Finally, the most important reframing. Cost per lead rising is only a problem if cost per customer also rose. If leads became more expensive and more of them convert, the account improved. This check should come first, before any diagnosis, because it frequently ends the investigation immediately."
  ],
  example: {
    title: "The problem that was an improvement",
    body: "A business reported cost per lead rising from 22 to 41 and asked for an urgent review. The first check was cost per customer, which had fallen from 310 to 185. Two months earlier they had added a qualifying question. Fewer people were filling in the form and far more of them were buying. The reported problem was the intended effect of a deliberate improvement."
  },
  steps: [
    "Check cost per customer before anything else.",
    "If cost per customer improved, there is no problem.",
    "If it worsened, check impression cost against history.",
    "Check click rate against history.",
    "Check form or page completion rate against history.",
    "Check whether any deliberate change explains the movement."
  ],
  mistakes: [
    "Diagnosing cost per lead without checking cost per customer first.",
    "Missing a form change made by someone else.",
    "Treating deliberate quality filtering as a performance problem."
  ],
  words: [
    { t: "Cost per lead", d: "What one enquiry costs, determined by the whole chain before it." },
    { t: "Form completion rate", d: "The share of people opening the form who submit it." },
    { t: "Deliberate filtering", d: "Changes intended to reduce volume and improve quality." },
    { t: "Chain diagnosis", d: "Working backwards through the components to find the broken link." }
  ],
  takeaways: [
    "Check cost per customer first. It frequently ends the investigation.",
    "Work backwards through impression cost, click rate and completion rate.",
    "Form changes are a common cause that has nothing to do with advertising.",
    "Rising cost per lead with falling cost per customer is an improvement."
  ],
  selfCheck: [
    "I check cost per customer before diagnosing cost per lead.",
    "I know my form completion rate and its history.",
    "I check for deliberate changes before diagnosing a problem."
  ],
  quiz: [
    { q: "What should be checked before diagnosing high cost per lead?", options: ["The creative", "Whether cost per customer also worsened", "The budget"], a: 1, why: "More expensive but better leads is an improvement, not a problem." },
    { q: "Which cause has nothing to do with advertising?", options: ["Impression cost", "A change to the form itself", "Click rate"], a: 1, why: "Form changes reduce completion without any advertising change." },
    { q: "How should the diagnosis proceed?", options: ["Test new creative", "Work backwards through impression cost, click rate and completion", "Increase the budget"], a: 1, why: "The chain identifies which link broke." }
  ],
  exercise: { task: "For a period when your cost per lead rose, check whether cost per customer rose too. Then check each chain component against your history and identify which one moved." },
  challenge: { task: "Build a lead cost diagnostic: the cost per customer check first, the chain components with your historical benchmarks, the form change check, the deliberate change register, the diagnosis path for each pattern, and the fix for each." }
},

"8.30.7": {
  intro: "Poor lead quality is a complaint with several possible causes, most of which are not advertising problems. This lesson covers finding the real one.",
  plain: [
    "When a sales team says the leads are rubbish, they are describing a feeling. Before spending money on it, you need to turn that feeling into a number and a cause.",
    "There are five possible causes and only two of them are in the ad account."
  ],
  idea: [
    "Cause one: no agreed definition. If nobody wrote down what a good lead is, the sales team and the marketing team are using different standards and the disagreement is definitional rather than factual. This is the most common cause.",
    "Cause two: slow follow up. Leads contacted hours or days later go cold. A lead that was good at 10am is genuinely poor by the following afternoon, and the advertising did not cause that.",
    "Cause three: the wrong optimisation signal. If you optimise for form submissions, the system finds people who submit forms. This is an advertising cause and it is fixable through the feedback loop.",
    "Cause four: the offer attracts the wrong people. A free gift attracts gift seekers. A vague offer attracts vague interest. This is also an advertising cause, fixable through creative and offer changes.",
    "Cause five: the expectation is wrong. Some businesses expect a conversion rate their market cannot produce, and no advertising change will deliver it.",
    "The diagnosis order is: definition, follow up speed, then the two advertising causes, then expectations. Checking the first two takes an hour and resolves most complaints."
  ],
  example: {
    title: "Definition, not quality",
    body: "A sales team rejected 70 percent of leads as poor quality. Nobody had defined a good lead. Sitting down together, they discovered the sales team expected leads to be ready to buy within a month, while marketing had been optimising for anyone with a genuine interest. Both were reasonable positions. Writing one shared definition, and adding a timing question to the form, resolved a dispute that had lasted eight months."
  },
  steps: [
    "Check whether a written definition of a good lead exists.",
    "If not, write one with the sales team before anything else.",
    "Measure the time between lead arrival and first contact.",
    "Check what signal your campaigns optimise toward.",
    "Review whether your offer attracts genuine prospects.",
    "Check whether the expected conversion rate is realistic for your market."
  ],
  mistakes: [
    "Changing targeting before checking the definition and the follow up speed.",
    "Accepting a subjective judgement without turning it into a measured rate.",
    "Optimising for form submissions and then complaining about quality."
  ],
  words: [
    { t: "Lead quality", d: "The proportion of leads that become genuine customers." },
    { t: "Definition dispute", d: "Disagreement caused by different unstated standards." },
    { t: "Follow up decay", d: "Good leads becoming poor because contact was slow." },
    { t: "Optimisation signal", d: "What the system is being told to find." }
  ],
  takeaways: [
    "Five causes, and only two are in the ad account.",
    "The most common cause is no agreed definition of a good lead.",
    "The second most common is slow follow up.",
    "Check both before changing anything in the advertising."
  ],
  selfCheck: [
    "We have a written definition of a good lead.",
    "I know our average time to first contact.",
    "I know what signal my campaigns optimise toward."
  ],
  quiz: [
    { q: "What is the most common cause of lead quality complaints?", options: ["Bad targeting", "No agreed written definition of a good lead", "Low budget"], a: 1, why: "Without a shared standard, the disagreement is definitional rather than factual." },
    { q: "How can a good lead become a poor one?", options: ["It cannot", "Through slow follow up, which lets it go cold", "Through the wrong placement"], a: 1, why: "Delay destroys interest that genuinely existed." },
    { q: "Which two causes are advertising problems?", options: ["Definition and follow up", "The optimisation signal and the offer attracting the wrong people", "Expectations and definition"], a: 1, why: "The others belong to process and agreement rather than the ad account." }
  ],
  exercise: { task: "Ask your sales team to write down what makes a lead good. Compare it with what marketing has been optimising for. Note any difference, which is likely the root of the complaint." },
  challenge: { task: "Build a lead quality diagnostic process: the definition workshop with the sales team, the follow up speed measurement, the optimisation signal review, the offer assessment, the market expectation check, and the ongoing quality reporting that prevents the dispute recurring." }
},

"8.30.8": {
  intro: "Delivery and tracking problems stop things working entirely. This lesson covers diagnosing when nothing is happening.",
  plain: [
    "Sometimes the problem is not that results are poor. It is that nothing is happening at all: no spend, no impressions, or no conversions being recorded.",
    "These problems have specific causes and can usually be found in minutes if you know where to look."
  ],
  idea: [
    "For no delivery at all, check in this order: is the campaign, ad set and advertisement all switched on, since one being off stops everything below it. Is the advertisement approved, or was it rejected. Is the payment method working, since a failed payment stops delivery. Has an account or campaign spending limit been reached. Is the schedule set to a period that has ended. And is a cost control set below what the market will support.",
    "For low delivery, the causes are: an audience too small, a cost control too tight, a bid too low, heavy competition, or a creative that cannot win auctions.",
    "For tracking problems where conversions stop appearing, check: has the pixel been removed by a website change, has an access token expired for server side sending, has the domain verification lapsed, or has an event been renamed.",
    "The single most useful habit is to check the activity history first for all of these, because a human change explains a majority of sudden stoppages.",
    "The second most useful is to check whether the problem affects one campaign or all of them, which separates a campaign specific cause from an account level one such as billing or a policy restriction."
  ],
  example: {
    title: "The switch nobody noticed",
    body: "An account stopped delivering entirely. The team checked creative, audiences, bids and billing over two days. The campaign was switched on and the ad set was switched on. The single advertisement inside had been paused by someone during a review three days earlier and never switched back. The activity history showed it in the first thirty seconds of looking, and nobody had checked."
  },
  steps: [
    "Check the activity history first.",
    "Confirm campaign, ad set and advertisement are all switched on.",
    "Check the advertisement status for rejection.",
    "Check billing and spending limits.",
    "Check schedules and cost controls.",
    "Determine whether the problem affects one campaign or the whole account."
  ],
  mistakes: [
    "Investigating complex causes before checking whether everything is switched on.",
    "Not checking the activity history, which explains most sudden stoppages.",
    "Assuming a tracking problem is a delivery problem, or the reverse."
  ],
  words: [
    { t: "No delivery", d: "Nothing being spent or shown at all." },
    { t: "Spending limit", d: "A cap that stops delivery when reached." },
    { t: "Rejection", d: "An advertisement refused for a policy reason." },
    { t: "Account level cause", d: "Something affecting every campaign, such as billing." }
  ],
  takeaways: [
    "Check the activity history first. It explains most sudden stoppages.",
    "Confirm all three levels are switched on before anything else.",
    "Billing, limits, schedules and cost controls stop delivery completely.",
    "Determine whether one campaign or all are affected."
  ],
  selfCheck: [
    "I check the activity history first when something stops.",
    "I know where to check billing and spending limits.",
    "I check whether the problem is campaign specific or account wide."
  ],
  quiz: [
    { q: "What should you check first when delivery stops?", options: ["The creative", "The activity history for recent changes", "The audience size"], a: 1, why: "A human change explains most sudden stoppages." },
    { q: "Which of these stops delivery entirely?", options: ["High frequency", "A reached account spending limit", "Low click rate"], a: 1, why: "It is a hard stop rather than a performance issue." },
    { q: "How do you separate account level causes from campaign causes?", options: ["Check the budget", "Determine whether the problem affects all campaigns or only one", "Contact support"], a: 1, why: "Account wide problems point to billing, policy or limits." }
  ],
  exercise: { task: "Write a stoppage checklist in the order given in this lesson and keep it accessible. Time yourself running through it on a live campaign to confirm it takes under five minutes." },
  challenge: { task: "Build a delivery incident procedure: the ordered checklist, the expected time for each check, the escalation path, the account level versus campaign level separation, the tracking specific checks, and a log of past incidents with their causes." }
},

"8.30.9": {
  intro: "This final lesson of the module gives you a complete account audit procedure.",
  plain: [
    "An audit is a full examination of an account, done on a schedule rather than in response to a problem.",
    "Its purpose is to find the things that are quietly wrong but not yet causing an obvious emergency, which is where most wasted money sits."
  ],
  idea: [
    "A full audit covers six areas in order. Structure: how many campaigns and ad sets, and whether each gets enough results. Measurement: whether tracking is accurate, complete and verified against internal records. Creative: how many advertisements, their age, their performance spread and the production rate. Economics: cost per customer against customer value, and marginal figures. Compliance: account quality, rejections, and any policy risk. And governance: access, ownership, naming and documentation.",
    "Each area produces findings, and each finding should be recorded with its estimated impact and the effort to fix. This lets you rank the work rather than attempting everything.",
    "The rhythm that works for most businesses is a full audit twice a year and a shorter review monthly covering only measurement and economics, which are the two areas where problems appear fastest.",
    "The most valuable habit within an audit is to check the things nobody has looked at recently. Long standing settings, old exclusions, dormant campaigns and inherited configurations are where quiet waste accumulates, precisely because they are never examined.",
    "Finally, an audit is only worth doing if it produces a written action list with owners and dates. An audit that produces a document nobody acts on has consumed a day and changed nothing."
  ],
  example: {
    title: "What the audit found",
    body: "A six month audit on an account spending 40,000 monthly found: 9 of 14 ad sets below the learning threshold, a broken purchase event on one product category, 3 advertisements running for over a year, exclusions referencing a deleted audience, a former agency still holding admin access, and cost per customer 40 percent above customer value on one campaign. None had caused an emergency. Together they represented roughly 9,000 a month in waste."
  },
  steps: [
    "Schedule a full audit twice a year and a short review monthly.",
    "Work through the six areas in order.",
    "Record every finding with estimated impact and effort.",
    "Pay particular attention to settings nobody has examined recently.",
    "Rank the findings and produce an action list with owners and dates.",
    "Review the action list at the next audit to confirm completion."
  ],
  mistakes: [
    "Auditing only when there is a problem.",
    "Producing findings without an action list, owners and dates.",
    "Skipping the areas that seem fine, which is where quiet waste hides."
  ],
  words: [
    { t: "Audit", d: "A scheduled full examination of an account." },
    { t: "Quiet waste", d: "Money lost through problems that never cause an obvious emergency." },
    { t: "Finding", d: "One identified problem with its impact and fix effort." },
    { t: "Action list", d: "The ranked work list with owners and dates." }
  ],
  takeaways: [
    "Audit on a schedule, not in response to problems.",
    "Six areas: structure, measurement, creative, economics, compliance, governance.",
    "The quiet waste hides in settings nobody has examined recently.",
    "An audit without an action list has changed nothing."
  ],
  selfCheck: [
    "I have a scheduled audit in the calendar.",
    "My audits cover all six areas.",
    "Every audit produces an action list with owners and dates."
  ],
  quiz: [
    { q: "When should audits happen?", options: ["When something goes wrong", "On a schedule, twice yearly with shorter monthly reviews", "Once at the start"], a: 1, why: "Their purpose is finding problems before they become emergencies." },
    { q: "Where does quiet waste usually hide?", options: ["In the newest campaigns", "In long standing settings nobody has examined recently", "In the creative"], a: 1, why: "Unexamined configurations accumulate errors invisibly." },
    { q: "What makes an audit worthwhile?", options: ["Its length", "A written action list with owners and dates", "The number of findings"], a: 1, why: "Findings that nobody acts on change nothing." }
  ],
  exercise: { task: "Run a short audit today covering just measurement and economics. Record every finding with its estimated monthly impact, and produce an action list with dates." },
  challenge: { task: "Build a full audit procedure: the six areas with their specific checks, the data required for each, the finding template with impact and effort scoring, the ranking method, the action list format with owners and dates, and the schedule with review of previous actions." }
}

});
