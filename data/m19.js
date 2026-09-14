/* Module 19 - Attribution and Measurement (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"5.19.1": {
  intro: "Attribution means deciding which advertisement gets the credit for a sale. It sounds simple and it is one of the most misunderstood subjects in advertising.",
  plain: [
    "A customer sees your Instagram ad on Monday. On Wednesday they search your name on Google. On Friday a friend mentions you. On Saturday they buy.",
    "Who gets the credit for that sale? The Instagram ad? Google? The friend? All three played a part, but you only made one sale, so you cannot count it three times.",
    "Attribution is the set of rules that decides. And here is the uncomfortable truth: there is no correct answer. Every set of rules is a choice, and different tools make different choices, which is why your numbers never agree."
  ],
  idea: [
    "Meta's rules are these. If someone clicks your ad and then converts within the attribution window, Meta credits that sale. If someone merely sees your ad without clicking, and converts within a shorter window, Meta may also credit it.",
    "Meta only sees its own advertising. It does not know about the Google search, the friend, or the email you sent. So Meta credits itself whenever its rules are met, and it is not lying when it does so. It is answering a narrower question than the one you are asking.",
    "This produces the single most common confusion in advertising. Meta says it produced 50 sales. Google says it produced 30. Your email tool says 20. Your actual total was 70. Nobody is wrong. Each tool counted every sale it touched, and many sales were touched by more than one.",
    "The professional response is to stop expecting these numbers to add up, and to hold two different measurements in mind at once. Platform attribution tells you which ads to optimise within Meta. Total business results tell you whether advertising is working overall. Both are useful. Neither replaces the other."
  ],
  example: {
    title: "Why the numbers exceeded reality",
    body: "A business made 70 sales in a month. Meta claimed 50, Google claimed 30, email claimed 20, giving 100 claimed sales for 70 real ones. Management assumed someone was inflating figures. Nobody was. Thirty sales had been touched by two or more channels, and each channel counted them. Once the team understood this, they stopped adding platform numbers together and started judging total sales against total spend."
  },
  steps: [
    "Accept that channel numbers will exceed real sales when added together.",
    "Use platform attribution to compare ads within that platform only.",
    "Use total business results to judge whether advertising works overall.",
    "Never add attributed conversions from different platforms.",
    "Report both figures to management with an explanation of each.",
    "Decide in advance which figure governs which type of decision."
  ],
  mistakes: [
    "Adding conversions from different platforms and believing the total.",
    "Accusing a platform of inflating numbers when it is following its own stated rules.",
    "Using platform attribution as the only measure of whether advertising works."
  ],
  words: [
    { t: "Attribution", d: "The rules deciding which advertisement gets credit for a sale." },
    { t: "Attribution window", d: "The period after a click or view within which a sale is credited." },
    { t: "Double counting", d: "Two platforms each claiming the same sale, because both touched it." },
    { t: "Platform attribution", d: "What one advertising platform says it produced, using its own rules." },
    { t: "Total business result", d: "What actually happened to your sales, regardless of which channel gets credit." }
  ],
  takeaways: [
    "Attribution is a set of rules, not a fact. There is no single correct answer.",
    "Every platform counts every sale it touched, so totals exceed reality.",
    "Use platform attribution to compare ads within that platform.",
    "Use total business results to judge whether advertising works at all."
  ],
  selfCheck: [
    "I understand why platform numbers exceed real sales when added.",
    "I know which figure I use for which decision.",
    "I can explain this clearly to someone who does not work in advertising."
  ],
  quiz: [
    { q: "Meta claims 50 sales, Google 30, email 20, but you made 70. What happened?", options: ["Someone is lying", "Several sales were touched by more than one channel and each counted them", "Your records are wrong"], a: 1, why: "Each platform counts every sale it influenced under its own rules." },
    { q: "What is platform attribution good for?", options: ["Knowing total business impact", "Comparing ads within that same platform", "Setting your budget total"], a: 1, why: "Within one platform the rules are consistent, so comparisons are meaningful." },
    { q: "What should judge whether advertising works overall?", options: ["Meta's reported conversions", "Total business results across periods", "Click-through rate"], a: 1, why: "It is the only measure not shaped by one platform's crediting rules." }
  ],
  exercise: { task: "Add up the conversions claimed by every marketing channel you use for last month. Compare that total against your actual number of sales or enquiries. Write down the difference as a percentage." },
  challenge: { task: "Write an explanation of attribution for your management or client: why channel numbers exceed reality, what each number is genuinely useful for, which figure should govern budget decisions, and how you will report both going forward." }
},

"5.19.2": {
  intro: "Attribution settings control the windows Meta uses to credit conversions. This lesson explains each setting and how to choose consistently.",
  plain: [
    "An attribution window is a time limit on credit. Think of a shop offering a commission to whoever introduced a customer, but only if the customer buys within seven days of the introduction.",
    "Change the limit to one day and fewer introductions qualify. Change it to twenty eight days and more do. The introductions themselves did not change. Only the rule about who gets paid.",
    "This is why comparing two periods measured with different windows is meaningless. You are comparing two different rules, not two different performances."
  ],
  idea: [
    "The settings available are click windows of one day or seven days, and view windows of one day, sometimes with longer options in specific contexts. The standard default is seven day click and one day view.",
    "A click window means the person clicked your ad and converted within that many days. A view window means they saw your ad without clicking, and converted within that many days. View attribution is weaker evidence, because seeing an ad and later buying does not prove the ad caused it.",
    "There is an important reporting detail. Changing the attribution setting changes historical reporting too, because Meta recalculates. This can be useful for comparison, but it means a report run today may not match the same report run last month if the setting changed.",
    "The practical rule is to pick one setting, usually the seven day click and one day view default, and use it consistently for every comparison and every report. If you want to examine a different window, do it as a deliberate one off analysis, clearly labelled, and then return to your standard."
  ],
  example: {
    title: "The same month, three answers",
    body: "One month of data reported three ways. Seven day click and one day view: 142 purchases, cost per purchase 31. One day click only: 89 purchases, cost per purchase 49. Twenty eight day click where available: 176 purchases, cost per purchase 25. The business made the same number of sales in all three cases. Only the crediting rule changed. A manager shown the third figure and later the second would conclude performance had collapsed."
  },
  steps: [
    "Choose seven day click and one day view as your standard.",
    "Apply it to every routine report.",
    "Never compare two periods measured with different windows.",
    "Label any one off analysis using a different window clearly.",
    "Record the window used on every report you share.",
    "Tell your team and management which setting is standard and why."
  ],
  mistakes: [
    "Changing the window to make results look better.",
    "Comparing this month's report against an older one measured differently.",
    "Not recording which window a report used."
  ],
  words: [
    { t: "Click window", d: "The days after clicking within which a conversion is credited." },
    { t: "View window", d: "The days after seeing without clicking within which a conversion is credited." },
    { t: "Default setting", d: "Seven day click and one day view, Meta's standard." },
    { t: "Recalculation", d: "Meta reworking historical figures when the window setting changes." }
  ],
  takeaways: [
    "Seven day click and one day view is the standard. Use it consistently.",
    "Changing the window changes historical reporting too.",
    "Never compare periods measured with different windows.",
    "Record the window on every report you share."
  ],
  selfCheck: [
    "I have a standard attribution setting and I use it everywhere.",
    "My reports state which window was used.",
    "I never compare across different window settings."
  ],
  quiz: [
    { q: "Which is the standard attribution setting?", options: ["One day click, no view", "Seven day click and one day view", "Twenty eight day click and seven day view"], a: 1, why: "It is Meta's default and the most common basis for comparison." },
    { q: "What happens to historical reports when you change the window?", options: ["Nothing", "They are recalculated, so old reports may no longer match", "They are deleted"], a: 1, why: "This is why the setting used must be recorded on every report." },
    { q: "Why is view attribution weaker evidence than click attribution?", options: ["It is measured less accurately", "Seeing an ad and later buying does not prove the ad caused it", "It uses a longer window"], a: 1, why: "There is no action linking the person to the ad." }
  ],
  exercise: { task: "Run the same campaign report using two different attribution windows. Write down both sets of numbers side by side, and note how differently the same performance can be presented." },
  challenge: { task: "Write your organisation's attribution standard: the default setting, when alternatives may be used, how reports must be labelled, who may change the setting, and how historical comparisons are protected from recalculation confusion." }
},

"5.19.3": {
  intro: "Click and view attribution answer different questions. This lesson explains the difference and how much weight each deserves.",
  plain: [
    "Click attribution says: this person clicked your ad, then bought. There is a clear action connecting them to the advertisement.",
    "View attribution says: this person saw your ad, did nothing, and bought later. There is no action connecting them. Maybe the ad worked quietly. Maybe they were going to buy anyway and the ad was irrelevant.",
    "Both can be true. The difference is how much you should believe."
  ],
  idea: [
    "Click attribution is strong evidence. The person interacted with the ad, arrived at your site, and converted. The chain of events is visible.",
    "View attribution is weaker but not worthless. Advertising genuinely does work without clicks: people see something, remember it, and act later through a different route. Ignoring this entirely understates the value of advertising, particularly for brand building and for products people research before buying.",
    "The problem is that view attribution can also credit coincidence. If your ad reached a million people this month and forty thousand of them were going to buy from you regardless, some of those purchases will fall inside the view window and be credited to advertising that changed nothing.",
    "The practical position most experienced advertisers take: use click attribution as your main figure for decisions, look at view attribution separately to understand the fuller picture, and never combine them into one number you then treat as fact. If view attributed conversions are a large share of your total, that is a signal to run a proper incrementality test, which is covered in Level 7."
  ],
  example: {
    title: "When view credit was mostly coincidence",
    body: "A well known brand saw 60 percent of its reported conversions coming from view attribution. Suspicious, they ran a test where advertising was switched off entirely in some regions. Sales in those regions fell by only 8 percent. Most of the view attributed conversions had been people who would have bought anyway. Their real advertising contribution was a fraction of what the reports claimed."
  },
  steps: [
    "Separate click attributed and view attributed conversions in your reporting.",
    "Use click attributed figures as your main decision basis.",
    "Review view attributed figures separately for context.",
    "Notice if view attribution is a large share of the total.",
    "If it is, plan an incrementality test to check whether it is real.",
    "Never present a combined figure as if it were a measured fact."
  ],
  mistakes: [
    "Treating view attributed conversions as equivalent to click attributed ones.",
    "Ignoring view attribution entirely, which understates brand advertising.",
    "Never testing whether view attributed conversions were genuinely caused by advertising."
  ],
  words: [
    { t: "Click attribution", d: "Crediting a conversion to an ad that was clicked." },
    { t: "View attribution", d: "Crediting a conversion to an ad that was seen but not clicked." },
    { t: "Coincidental credit", d: "Crediting a sale that would have happened anyway." },
    { t: "Incrementality", d: "Whether advertising actually caused additional sales, tested by comparison." }
  ],
  takeaways: [
    "Click attribution is strong evidence. View attribution is weaker.",
    "View attribution is not worthless, but it can credit coincidence.",
    "Report them separately and decide mainly on click attributed figures.",
    "A large share of view attributed conversions should trigger a proper test."
  ],
  selfCheck: [
    "My reporting separates click and view attributed conversions.",
    "I know what share of my conversions are view attributed.",
    "I decide mainly on click attributed figures."
  ],
  quiz: [
    { q: "Why is view attribution weaker evidence?", options: ["It is measured less often", "There is no action linking the person to the ad, so it may credit coincidence", "It uses shorter windows"], a: 1, why: "Some of those people would have bought regardless." },
    { q: "What should you do if view attribution is a large share of your conversions?", options: ["Celebrate the brand effect", "Run an incrementality test to check whether it is real", "Increase the view window"], a: 1, why: "Only a controlled comparison can distinguish influence from coincidence." },
    { q: "Should view attribution be ignored entirely?", options: ["Yes, it is meaningless", "No, advertising genuinely works without clicks, but the figure needs verification", "Yes, unless you sell online"], a: 1, why: "Ignoring it understates real brand effects." }
  ],
  exercise: { task: "Split your last 90 days of conversions into click attributed and view attributed. Write down the percentage of each, and note whether the view share is large enough to warrant testing." },
  challenge: { task: "Design an incrementality test to check your view attributed conversions: the structure, what is switched off and where, the duration, the sample size needed, what result would prove the conversions were real, and how you would act on either outcome." }
},

"5.19.4": {
  intro: "Attribution asks who gets credit. Incrementality asks whether the sale would have happened anyway. This lesson explains why the second question is the important one.",
  plain: [
    "A shop owner hires someone to stand outside handing flyers to people already walking through the door. At the end of the month the flyer handler reports: I gave flyers to four hundred people who then came in and bought.",
    "True. Also worthless. Those people were already coming in.",
    "Attribution measures who touched the sale. Incrementality measures whether the sale would have happened without you. They are completely different questions, and only the second one tells you whether your money did anything."
  ],
  idea: [
    "This is the most important idea in measurement, and the one most advertising accounts never address.",
    "Attribution is available in your reports for free, every day. Incrementality requires a deliberate test, because the only way to know what would have happened without advertising is to have a group who did not see it.",
    "The clearest example is retargeting to people who already put an item in their basket. Attribution credits those ads with enormous returns, because those people were extremely likely to buy anyway. Incrementality tests frequently show that a large share of those sales would have happened regardless.",
    "This does not mean retargeting is worthless. It means the reported return is not the real return, and budget decisions made from attribution alone will systematically over invest in the bottom of the funnel and under invest in reaching new people.",
    "The methods for testing incrementality properly are covered in Level 7. What matters now is understanding the distinction, because it changes how much you trust every number in your reports."
  ],
  example: {
    title: "The 14x that was really 2x",
    body: "A retailer's basket abandonment campaign reported a return of 14 times its spend. They ran a test where a randomly chosen half of abandoners saw no ads at all. The group with no ads still bought at nearly the same rate. The genuine additional return was around 2 times, not 14. The campaign was still profitable, but seven times less so than the reports claimed, and the budget had been set on the basis of the larger number."
  },
  steps: [
    "Understand that attribution and incrementality answer different questions.",
    "Treat reported returns on bottom of funnel campaigns with particular caution.",
    "Identify which of your campaigns most likely credit sales that would have happened anyway.",
    "Plan a holdout test for the largest of them.",
    "Use the result to adjust your budget allocation.",
    "Repeat periodically, because the answer changes as your mix changes."
  ],
  mistakes: [
    "Setting budgets from attributed return alone.",
    "Assuming a high reported return means high real value.",
    "Never testing, which means never knowing the difference."
  ],
  words: [
    { t: "Incrementality", d: "Whether advertising caused sales that would not otherwise have happened." },
    { t: "Holdout", d: "A group deliberately shown no advertising, used for comparison." },
    { t: "Counterfactual", d: "What would have happened without the advertising." },
    { t: "Over crediting", d: "Attribution assigning credit for sales that were going to happen anyway." }
  ],
  takeaways: [
    "Attribution asks who gets credit. Incrementality asks whether it mattered.",
    "Bottom of funnel campaigns are the most over credited.",
    "Only a holdout test can answer the incrementality question.",
    "Budget decisions from attribution alone over invest in retargeting."
  ],
  selfCheck: [
    "I understand the difference between the two questions.",
    "I know which of my campaigns are most likely over credited.",
    "I have a plan to test at least one of them."
  ],
  quiz: [
    { q: "What does incrementality measure?", options: ["Which ad was clicked last", "Whether the sale would have happened without the advertising", "How many people saw the ad"], a: 1, why: "It isolates the genuine additional effect of the spending." },
    { q: "Which campaigns are typically most over credited?", options: ["Cold prospecting", "Retargeting to people already close to buying", "Brand awareness"], a: 1, why: "Those people were already likely to buy, so credit does not equal cause." },
    { q: "How can incrementality be measured?", options: ["From the standard reports", "With a holdout group who see no advertising", "By changing the attribution window"], a: 1, why: "You need a comparison group to know what would have happened otherwise." }
  ],
  exercise: { task: "Look at the reported return of your retargeting campaigns. Write down what you believe the real incremental return might be, and what evidence you currently have either way. Most people find they have none." },
  challenge: { task: "Design a holdout test for your highest reported return campaign: how the holdout group is selected, its size, the duration, what you will measure, the result that would confirm or deny incrementality, and how you would reallocate budget based on each possible outcome." }
},

"5.19.5": {
  intro: "Most businesses advertise in more than one place. This lesson covers how to measure across channels without the numbers descending into chaos.",
  plain: [
    "If four people each claim to have introduced the same customer, you need a rule for who gets the commission, or four people get paid for one introduction.",
    "Cross channel measurement is agreeing that rule, in one place, using one set of records that all channels are compared against.",
    "The rule does not have to be perfect. It has to be consistent, so that comparisons between channels mean something."
  ],
  idea: [
    "The core problem is that each platform reports using its own rules and sees only its own activity. Combining these reports produces nonsense.",
    "The solution is to have one source of truth outside all of them. Usually this is your website analytics or your customer database, where every sale is recorded once, with a note of where the customer appeared to come from.",
    "Within that single source you apply one consistent rule. Common choices are last click, where the final touch before purchase gets the credit, and first click, where the original discovery gets it. Neither is correct in an absolute sense, but each is consistent, which is what makes comparison possible.",
    "Two practical points make this work. Tag every advertisement with tracking parameters, so your own analytics can identify where visitors came from. And accept that your own analytics will show lower numbers for Meta than Meta does, because it uses last click and does not credit views. That gap is expected and should be measured rather than argued about.",
    "The most useful discipline is to look at both: platform reports to optimise within each channel, and your single source of truth to decide how much each channel deserves overall."
  ],
  example: {
    title: "Two views of the same month",
    body: "Meta reported 142 purchases. The company's own analytics, using last click, credited Meta with 88. The difference was view attributed conversions and people who clicked the ad, left, and returned later through a search. Both numbers were correct under their own rules. The company used Meta's figure to compare ads against each other, and their own figure to compare Meta against Google and email."
  },
  steps: [
    "Choose one source of truth, usually your analytics or customer database.",
    "Choose one attribution rule inside it and apply it to every channel equally.",
    "Tag every advertisement with tracking parameters.",
    "Compare channels only within that single source.",
    "Use platform reports only for optimising within each platform.",
    "Measure and expect the gap between the two views rather than trying to close it."
  ],
  mistakes: [
    "Comparing Meta's own report against Google's own report.",
    "Failing to tag ads, so your analytics cannot identify the source.",
    "Spending months trying to make two systems agree exactly."
  ],
  words: [
    { t: "Cross channel measurement", d: "Comparing different advertising channels fairly." },
    { t: "Source of truth", d: "The single dataset used for cross channel comparison." },
    { t: "Last click", d: "Crediting the final touch before purchase." },
    { t: "First click", d: "Crediting the first touch that introduced the customer." },
    { t: "Tracking parameters", d: "Codes added to your ad links so analytics can identify the source." }
  ],
  takeaways: [
    "Never compare one platform's report against another's.",
    "Use one source of truth with one consistent rule for all channels.",
    "Tag every advertisement so the source can be identified.",
    "Expect a gap between platform figures and your own, and measure it."
  ],
  selfCheck: [
    "I have one source of truth for cross channel comparison.",
    "Every advertisement is tagged with tracking parameters.",
    "I know the size of the gap between Meta's figures and my own."
  ],
  quiz: [
    { q: "How should channels be compared?", options: ["Using each platform's own report", "Inside one source of truth using one consistent rule", "By total spend"], a: 1, why: "Different rules produce numbers that cannot be compared." },
    { q: "Why will your analytics show fewer Meta conversions than Meta does?", options: ["Meta inflates figures", "Your analytics typically uses last click and does not credit views", "Your tracking is broken"], a: 1, why: "Different rules produce different, legitimate answers." },
    { q: "What must be added to every advertisement?", options: ["A logo", "Tracking parameters so your analytics can identify the source", "A longer headline"], a: 1, why: "Without them your own records cannot attribute anything." }
  ],
  exercise: { task: "Check whether every one of your ads carries tracking parameters. List any that do not, and add them. Then compare Meta's reported conversions against your own analytics for the same period." },
  challenge: { task: "Build a cross channel measurement framework: the source of truth, the attribution rule, the tagging standard, how each channel is compared, what each platform report is used for, and how the expected gaps are reported to management." }
},

"5.19.6": {
  intro: "UTM parameters are codes added to your advertisement links so your own analytics knows where visitors came from. This lesson covers using them properly.",
  plain: [
    "Imagine every visitor arriving at your shop wearing a small badge saying where they heard about you. That is what these codes do. Without them, your analytics sees a visitor and has no idea which advertisement sent them.",
    "The codes are simply extra text added to the end of your link. Invisible to the visitor in practice, and read automatically by your analytics.",
    "The whole system depends on writing them consistently. If one person writes facebook and another writes Facebook and a third writes fb, your reports will show three separate sources that are actually one."
  ],
  idea: [
    "There are five standard parameters. utm_source names where the traffic came from, such as facebook. utm_medium names the type, such as paid_social. utm_campaign names the specific campaign. utm_content identifies the specific advertisement. utm_term is mainly used for search keywords and is often left out.",
    "The critical rule is consistency. These values are case sensitive in most analytics tools, meaning Facebook and facebook are treated as different sources. Always use lower case, always use the same words, and never use spaces.",
    "Meta also offers dynamic parameters, which fill themselves in automatically. Instead of typing the campaign name into every link, you can use a placeholder that Meta replaces with the real campaign name, ad set name and ad name. This removes the main cause of errors, which is human typing, and it keeps working when you rename things.",
    "One warning worth knowing: tagging tells your analytics where a visitor came from, but it does not fix attribution differences. Your analytics will still credit differently from Meta. Tagging makes your own records complete and comparable. It does not make two systems agree."
  ],
  example: {
    title: "Three sources that were one",
    body: "A company found their analytics showing traffic from facebook, Facebook, FB and facebook.com as four separate sources, none of which looked significant on its own. Combined, Meta was their second largest channel. They had been under investing in it for eight months because inconsistent tagging had hidden its true size."
  },
  steps: [
    "Decide your standard values for source and medium, all in lower case.",
    "Write them down where the whole team can see them.",
    "Use Meta's dynamic parameters for campaign, ad set and ad names.",
    "Apply the tagging to every advertisement without exception.",
    "Check your analytics after a week for inconsistent variations.",
    "Correct any variations and clean up historical data where possible."
  ],
  mistakes: [
    "Inconsistent capitalisation, which splits one source into several.",
    "Tagging only some advertisements, so the data is incomplete.",
    "Expecting tagging to make your analytics agree with Meta."
  ],
  words: [
    { t: "UTM parameter", d: "A code added to a link so analytics can identify the traffic source." },
    { t: "utm_source", d: "Where the visitor came from, such as facebook." },
    { t: "utm_medium", d: "The type of traffic, such as paid_social." },
    { t: "Dynamic parameter", d: "A placeholder Meta fills in automatically with real campaign details." },
    { t: "Case sensitive", d: "Treating upper and lower case letters as different values." }
  ],
  takeaways: [
    "Tagging lets your own analytics identify where visitors came from.",
    "Consistency matters more than the exact words chosen.",
    "Use dynamic parameters to remove human typing errors.",
    "Tagging completes your own records. It does not reconcile two systems."
  ],
  selfCheck: [
    "We have a written tagging standard.",
    "Every advertisement is tagged.",
    "I have checked analytics for inconsistent variations."
  ],
  quiz: [
    { q: "Why does capitalisation matter?", options: ["It looks untidy", "Most analytics treat Facebook and facebook as different sources", "Meta rejects capitals"], a: 1, why: "Inconsistency splits one channel into several small ones." },
    { q: "What is the advantage of dynamic parameters?", options: ["They load faster", "Meta fills in the real campaign details automatically, removing typing errors", "They improve delivery"], a: 1, why: "Human typing is the main source of tagging errors." },
    { q: "What will tagging not do?", options: ["Identify traffic sources", "Make your analytics agree with Meta's reported conversions", "Complete your own records"], a: 1, why: "The two systems use different attribution rules, which tagging does not change." }
  ],
  exercise: { task: "Open your analytics and list every traffic source containing the word facebook or instagram in any form. Note any inconsistent variations, then write your standard tagging values and apply them." },
  challenge: { task: "Create a tagging standard document: the exact values for source and medium by channel, the dynamic parameters used, examples of a correctly tagged link, the review process, and how historical inconsistencies will be cleaned up." }
},

"5.19.7": {
  intro: "For businesses where sales happen after a conversation, the customer database holds the truth. This lesson covers connecting it back to advertising.",
  plain: [
    "A lead arrives from an advertisement. Three weeks later a salesperson closes the deal. The advertising system knows a form was filled in. The sales system knows a deal was won. Neither knows about the other.",
    "Connecting them means writing the source onto the customer record when the lead arrives, so that when the deal is won, you can see it came from a Meta advertisement.",
    "That single connection changes everything, because you stop optimising toward forms and start optimising toward customers."
  ],
  idea: [
    "The mechanism has three parts. First, capture the source when the lead arrives, including the campaign and advertisement if possible, and store it on the customer record permanently. Second, record what happens to that lead as it progresses: contacted, qualified, proposal sent, won or lost, and the value if won. Third, send the meaningful outcomes back to Meta as events, so the system can learn which advertisements produce customers rather than forms.",
    "The third part is what most businesses never do, and it is where the value is. When Meta receives a signal saying this specific person became a qualified opportunity worth 8,000 dollars, it can find more people like them. When it only receives form submissions, it finds more form fillers.",
    "The practical requirement is that the sales team records outcomes reliably. This is usually the hardest part, and it is a management problem rather than a technical one. A system that depends on salespeople updating records will only work if updating records is genuinely required.",
    "Start simple. Even sending one additional signal, such as qualified lead, is a large improvement over sending nothing. Full pipeline integration can come later."
  ],
  example: {
    title: "Optimising toward customers",
    body: "A software company sent only form submissions to Meta and received leads at 24 dollars, of which 4 percent became customers. They added one signal: sales qualified lead, sent back when a salesperson confirmed the lead was genuine. Volume fell to 90 leads a month from 340, cost per lead rose to 61, and customers per month rose from 14 to 23. The advertising system had been optimising toward the wrong thing for two years."
  },
  steps: [
    "Capture the advertising source on every lead record.",
    "Define the stages a lead passes through and make recording them mandatory.",
    "Choose one meaningful outcome to send back first, such as qualified lead.",
    "Send it to Meta as a server side event with the matching customer information.",
    "Once stable, add further stages such as opportunity and closed won with values.",
    "Optimise campaigns toward the deepest signal that has enough volume."
  ],
  mistakes: [
    "Not capturing the source at the moment the lead arrives, so it is lost forever.",
    "Sending back only closed sales, which are usually too rare to optimise toward.",
    "Building the technical connection while the sales team does not update records reliably."
  ],
  words: [
    { t: "CRM", d: "Customer relationship management system: the database holding your leads and customers." },
    { t: "Lead source", d: "Where a lead originally came from, recorded on their record." },
    { t: "Qualified lead", d: "A lead the sales team confirms is a genuine potential customer." },
    { t: "Feedback loop", d: "Sending real outcomes back to Meta so the system learns from them." }
  ],
  takeaways: [
    "Capture the advertising source on every lead record permanently.",
    "Send meaningful outcomes back to Meta, not just form submissions.",
    "Start with one signal such as qualified lead and expand later.",
    "Reliable recording by the sales team is a management problem, not a technical one."
  ],
  selfCheck: [
    "Every lead record carries its advertising source.",
    "Our sales team reliably records what happens to each lead.",
    "At least one outcome signal is sent back to Meta."
  ],
  quiz: [
    { q: "What is the main benefit of sending outcomes back?", options: ["Better reports", "Meta learns to find people who become customers, not just form fillers", "Lower costs per click"], a: 1, why: "The system optimises toward whatever signal it receives." },
    { q: "Why start with qualified lead rather than closed sale?", options: ["It is easier technically", "Closed sales are usually too rare to provide enough volume for learning", "Meta prefers it"], a: 1, why: "Optimisation needs sufficient event volume, typically around 50 a week." },
    { q: "What is usually the hardest part?", options: ["The technical connection", "Getting the sales team to record outcomes reliably", "Choosing the events"], a: 1, why: "It is a management and process challenge rather than a technical one." }
  ],
  exercise: { task: "Check whether your customer records show where each lead came from. Then check whether you could count how many leads from Meta became customers last quarter. Write down what is missing." },
  challenge: { task: "Design a full CRM to Meta feedback loop: the source capture, the pipeline stages, the recording requirements and how they are enforced, the events sent back with values, the technical method, and the expected effect on optimisation." }
},

"5.19.8": {
  intro: "Offline conversion measurement means sending Meta the sales that happen away from your website: in a shop, over the phone, or in person.",
  plain: [
    "A customer sees your advertisement, then telephones you and buys. Your website never knew. Your pixel never fired. As far as Meta is concerned, that advertisement produced nothing.",
    "Offline measurement is telling Meta afterwards: these sales happened, here is when, here is how much, and here is scrambled information about who bought.",
    "Meta then checks whether those people saw or clicked your advertisements, and credits the ones that did."
  ],
  idea: [
    "This matters enormously for certain businesses. Car dealerships, clinics, restaurants, professional services, business to business sales and any retailer with physical shops all complete most transactions away from the website. Without offline measurement, their advertising appears to produce far less than it does.",
    "The mechanism is straightforward. You collect the transaction details, including customer information for matching, and send them to Meta either as offline events or through the Conversions API with the appropriate action source, such as phone call or physical store.",
    "The matching works the same way as everything else in this level. The more customer information you can provide, the more sales get matched. A phone number and name usually produce good matching for phone sales.",
    "The practical challenge is collection. Someone must record the customer's details at the point of sale, and connect them to the transaction. In a clinic or dealership this happens naturally. In a restaurant it does not. Where collection is impractical, other measurement approaches such as geographic testing become more important."
  ],
  example: {
    title: "The advertising that looked like it failed",
    body: "A car dealership spent 12,000 a month on advertising. Meta reported 40 website enquiries and no sales, because every car was sold in person. On paper the advertising looked wasteful. They began uploading their monthly sales with customer details. Meta matched 61 vehicle sales to people who had clicked their advertisements. The campaign had been producing over 400,000 in vehicle revenue while appearing to produce almost nothing."
  },
  steps: [
    "Identify how many of your sales complete away from the website.",
    "Establish how customer details are recorded at the point of sale.",
    "Collect transaction date, value, currency and customer matching information.",
    "Send them to Meta as offline events or through the Conversions API.",
    "Set the correct action source, such as phone call or physical store.",
    "Check the match rate and improve the collected fields if it is low."
  ],
  mistakes: [
    "Judging campaigns on website conversions when most sales happen elsewhere.",
    "Collecting insufficient customer detail, so matching fails.",
    "Uploading sales months late, when they are outside the matching window."
  ],
  words: [
    { t: "Offline conversion", d: "A sale completed away from your website." },
    { t: "Offline event set", d: "The container in Meta where offline sales are uploaded." },
    { t: "Action source", d: "Where the sale happened, such as phone call or physical store." },
    { t: "Match rate", d: "The share of uploaded sales that Meta could connect to a person who saw an advertisement." }
  ],
  takeaways: [
    "Many businesses complete most sales away from the website.",
    "Without offline measurement those campaigns appear to fail.",
    "Collect customer details at the point of sale so matching is possible.",
    "Upload promptly and set the correct action source."
  ],
  selfCheck: [
    "I know what share of my sales happen away from the website.",
    "Customer details are recorded at the point of sale.",
    "Offline sales are being sent back to Meta."
  ],
  quiz: [
    { q: "Why do some campaigns appear to produce nothing?", options: ["The ads are bad", "The sales complete away from the website, where the pixel cannot see them", "The budget is too low"], a: 1, why: "Website measurement cannot record a sale made by telephone or in person." },
    { q: "What is required for offline matching to work?", options: ["A larger budget", "Customer details collected at the point of sale", "A separate pixel"], a: 1, why: "Meta matches the sale to a person using that information." },
    { q: "What should the action source be for a telephone sale?", options: ["Website", "Phone call", "App"], a: 1, why: "Accurate action sources let Meta treat different sale types appropriately." }
  ],
  exercise: { task: "Calculate what percentage of your sales complete away from your website. If it is more than a fifth, write down what customer details are currently recorded at the point of sale and what is missing for matching." },
  challenge: { task: "Design an offline measurement system: where sales are recorded, what details are captured, how they reach Meta, the upload schedule, the action sources used, the privacy review, and how the newly visible conversions will change your optimisation." }
},

"5.19.9": {
  intro: "This final lesson of the module assembles everything into a measurement framework you can actually run.",
  plain: [
    "Measurement fails when it is a collection of separate tools nobody has connected. A framework is simply deciding, in writing, which number answers which question.",
    "Three questions cover almost everything a business needs. Which advertisement should get more budget? Is this channel worth what we spend on it? Is our advertising making the business bigger?",
    "Each has a different answer, from a different source. Confusing them is the cause of most measurement arguments."
  ],
  idea: [
    "Question one, which advertisement deserves more budget, is answered by platform attribution inside Meta. The rules are consistent across all your ads, so comparison is fair. This is a daily and weekly question.",
    "Question two, is this channel worth its cost, is answered by your own source of truth with one consistent rule across all channels. This is a monthly question.",
    "Question three, is advertising growing the business, is answered by incrementality testing and by comparing total business results across periods. This is a quarterly question, and it is the one that should govern your total budget.",
    "The framework also needs three supporting habits. Reconcile monthly between Meta and your own records, tracking the gap. Document your standards: attribution window, tagging, definitions. And report all three levels to management rather than only the flattering one.",
    "The mark of a mature measurement setup is not that all the numbers agree. It is that everyone understands why they differ, and knows which one to use for the decision in front of them."
  ],
  example: {
    title: "Three questions, three answers",
    body: "A business reviewed weekly using Meta's attribution to decide which creatives to scale. Monthly they used their analytics to compare Meta against Google and email. Quarterly they ran a geographic holdout test to establish the real incremental effect, which came out at 60 percent of what attribution claimed. They then set total budget from the quarterly figure, allocated between channels using the monthly figure, and managed creative using the weekly figure. No number had to be wrong for the system to work."
  },
  steps: [
    "Write down the three questions and which source answers each.",
    "Set the review rhythm: weekly, monthly, quarterly.",
    "Establish your single source of truth and its attribution rule.",
    "Reconcile monthly and track the gap.",
    "Document every standard: windows, tagging, definitions.",
    "Report all three levels honestly, including the least flattering."
  ],
  mistakes: [
    "Using one number to answer all three questions.",
    "Reporting only the most flattering figure to management.",
    "Having no quarterly check on whether advertising grows the business at all."
  ],
  words: [
    { t: "Measurement framework", d: "A written system stating which number answers which question." },
    { t: "Review rhythm", d: "The schedule of weekly, monthly and quarterly checks." },
    { t: "Source of truth", d: "The single dataset used for cross channel comparison." },
    { t: "Maturity", d: "Not that numbers agree, but that everyone understands why they differ." }
  ],
  takeaways: [
    "Three questions, three sources, three rhythms.",
    "Platform attribution for creative decisions, own analytics for channel decisions, incrementality for total budget.",
    "Reconcile monthly and document every standard.",
    "Maturity means understanding the differences, not eliminating them."
  ],
  selfCheck: [
    "I know which source answers each of the three questions.",
    "We have a written measurement framework.",
    "We test incrementality at least quarterly."
  ],
  quiz: [
    { q: "Which source answers which advertisement deserves more budget?", options: ["Incrementality testing", "Platform attribution inside Meta", "Your accounting system"], a: 1, why: "Within one platform the rules are consistent, making comparison fair." },
    { q: "Which question should govern your total advertising budget?", options: ["Which ad performs best", "Whether advertising is genuinely growing the business", "Which channel gets the most clicks"], a: 1, why: "Total spend should depend on total incremental effect." },
    { q: "What marks a mature measurement setup?", options: ["All numbers agree", "Everyone understands why the numbers differ and which to use when", "Only one number is used"], a: 1, why: "Different questions legitimately produce different answers." }
  ],
  exercise: { task: "Write your measurement framework on one page: the three questions, the source for each, the review rhythm, and who is responsible. Share it with anyone who reads your reports." },
  challenge: { task: "Build a complete measurement operating system: the framework, the reporting templates for each rhythm, the reconciliation process, the incrementality testing calendar, the documentation standards, and the training note that lets a new team member understand the whole system in an hour." }
}

});
