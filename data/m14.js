/* Module 14 - Bidding (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"4.14.1": {
  intro: "Bidding is how you tell Meta what you are willing to pay. Most advertisers never change it, and for many that is the right choice. This lesson explains what bidding actually controls.",
  idea: [
    "You do not set a price for each impression. You set a strategy, and the system bids on your behalf in every auction, thousands of times a day.",
    "There are two families. Spend based strategies, where you give the system a budget and tell it to get the most it can. And goal based strategies, where you tell it what a result should cost or what return you need, and it only bids when it thinks it can meet that.",
    "The trade-off between them is always the same: volume against control. Spend based gets you the most results your budget can buy, at whatever they cost. Goal based protects your cost or return, but may spend less, sometimes much less.",
    "The honest starting position for nearly everyone is the simplest spend based option, which is called Lowest cost. Move to a goal based strategy only when you have a specific reason, such as a cost you genuinely cannot exceed."
  ],
  example: {
    title: "Volume against control",
    body: "The same ad set was run two ways with a 500 daily budget. With Lowest cost it spent the full 500 and produced 23 leads at 22 each. With a cost goal of 15 it spent 180 and produced 11 leads at 16 each. The first got twice the volume at a higher price. The second protected the price and left most of the budget unspent. Neither is wrong. They answer different questions."
  },
  steps: [
    "Start with Lowest cost unless you have a specific reason not to.",
    "Let it run until learning completes so you know your natural cost.",
    "Decide whether that natural cost is acceptable for your business.",
    "If it is, keep Lowest cost and work on creative instead.",
    "If it is not, consider a cost goal, knowing volume may fall.",
    "Never change bidding and creative in the same week."
  ],
  mistakes: [
    "Changing bid strategy before knowing your natural cost per result.",
    "Using a cost goal to force a price the market will not support.",
    "Treating bid strategy as the main lever, when creative usually matters more."
  ],
  words: [
    { t: "Bid strategy", d: "The rule that decides how the system bids for you." },
    { t: "Spend based", d: "Strategies that aim to use the whole budget for maximum results." },
    { t: "Goal based", d: "Strategies that protect a target cost or return." }
  ],
  takeaways: [
    "You choose a strategy, not a price per impression.",
    "Spend based buys volume. Goal based protects price.",
    "Start with Lowest cost and learn your natural cost first.",
    "Creative usually matters more than bid strategy."
  ],
  selfCheck: [
    "I know which strategy each ad set uses.",
    "I know my natural cost per result under Lowest cost.",
    "I can explain the volume against control trade-off."
  ],
  quiz: [
    { q: "What does a bid strategy control?", options: ["The exact price of each impression", "How the system bids on your behalf in every auction", "Your daily budget"], a: 1, why: "You set the rule. The system executes it thousands of times a day." },
    { q: "What is the trade-off between strategy families?", options: ["Speed against accuracy", "Volume against control", "Reach against frequency"], a: 1, why: "Protecting cost usually means accepting fewer results." },
    { q: "Where should most advertisers start?", options: ["Bid cap", "Lowest cost", "ROAS goal"], a: 1, why: "It reveals your natural cost without artificial limits." }
  ],
  exercise: { task: "Check every ad set and write down which bid strategy it uses and why. Mark any where you cannot remember choosing it deliberately." },
  challenge: { task: "Write a bid strategy policy for your account: the default, the conditions that justify each alternative, who may change it, and the evidence required before switching." }
},

"4.14.2": {
  intro: "Lowest cost is the default strategy and the right choice for most accounts. This lesson explains exactly what it does and when it stops being suitable.",
  idea: [
    "Lowest cost tells the system: spend my whole budget and get me as many results as you can, as cheaply as you can.",
    "It has no price limit. The system will pay whatever is needed to spend the budget, which is both its strength and its risk. The strength is full delivery and maximum volume. The risk is that if your audience becomes expensive, costs rise and the system keeps spending anyway.",
    "In practice this risk is smaller than people fear, because the system is genuinely trying to be efficient. It does not waste money deliberately. It simply has no instruction to stop at a particular price.",
    "The right time to use it is at the start of any new campaign, whenever you are learning what a result naturally costs, and in any account where volume matters more than a precise cost ceiling. That covers most situations."
  ],
  example: {
    title: "Letting it find the price",
    body: "A new advertiser assumed leads should cost 10 and set a cost goal at that level. The ad set barely delivered for two weeks. Switching to Lowest cost revealed the real market price was 17, which was still profitable for their business. They had spent two weeks trying to enforce a number they had invented."
  },
  steps: [
    "Use Lowest cost for every new campaign.",
    "Let learning complete without interference.",
    "Record the natural cost per result it settles at.",
    "Compare that against what your business can afford.",
    "If it is affordable, keep it and improve creative.",
    "Only consider alternatives if the natural cost is genuinely too high."
  ],
  mistakes: [
    "Abandoning it after three days because costs looked high during learning.",
    "Assuming it will overspend recklessly, which it does not.",
    "Using it when you have an absolute cost ceiling you cannot exceed."
  ],
  words: [
    { t: "Lowest cost", d: "A strategy that spends the full budget for maximum results at no set price limit." },
    { t: "Natural cost", d: "What a result costs when no artificial limit is applied." },
    { t: "Full delivery", d: "Spending the entire budget." }
  ],
  takeaways: [
    "Lowest cost means spend it all and get the most you can.",
    "It has no price ceiling, which is its strength and its risk.",
    "Use it to discover your natural cost per result.",
    "It is the right default for most accounts."
  ],
  selfCheck: [
    "I have let Lowest cost run long enough to learn my natural cost.",
    "I know what that cost is.",
    "I can state whether it is affordable for my business."
  ],
  quiz: [
    { q: "What does Lowest cost do?", options: ["Bids a fixed amount per result", "Spends the full budget for as many results as possible, with no price ceiling", "Only bids below a set price"], a: 1, why: "Volume and full delivery are its purpose." },
    { q: "Why use it on a new campaign?", options: ["It is cheaper", "It reveals what a result naturally costs without artificial limits", "It is required"], a: 1, why: "You cannot set a sensible target before you know the real price." },
    { q: "When is it unsuitable?", options: ["When you want volume", "When you have an absolute cost ceiling you cannot exceed", "When you are new"], a: 1, why: "It offers no protection against costs rising above a specific number." }
  ],
  exercise: { task: "Take one ad set on Lowest cost and record its cost per result each week for four weeks. Write down the range and your natural cost." },
  challenge: { task: "Document your account's natural costs: the cost per result by campaign type under Lowest cost, how stable each is, and what that tells you about which campaigns could tolerate a cost control." }
},

"4.14.3": {
  intro: "Cost Per Result Goal tells Meta roughly what you want a result to cost. This lesson covers how it behaves and how to set it without destroying your delivery.",
  idea: [
    "You give the system a target cost. It then tries to keep your average cost per result around that number, bidding into auctions it believes will meet the goal and skipping ones it believes will not.",
    "Important detail: it is an average, not a limit. Individual results may cost more or less. The system aims for the average over time.",
    "The most common failure is setting the goal too low. If you ask for 10 when the market price is 20, the system finds almost no auctions it can win at that level, delivery collapses, and you get very few results. This is the single biggest cause of ad sets that mysteriously will not spend.",
    "The safe method is to learn your natural cost first with Lowest cost, then set the goal slightly below it, perhaps 10 to 20 percent lower, and watch whether delivery holds. If delivery falls sharply, the goal is too aggressive."
  ],
  example: {
    title: "Ten percent at a time",
    body: "Natural cost was 25 per lead. The team set a goal of 22, delivery held, and average cost settled at 23. They then tried 19, and spending fell by 70 percent. They returned to 22. The market would support a small improvement but not a large one, and testing in steps found the boundary without wasting a month."
  },
  steps: [
    "Run Lowest cost first and record the natural cost.",
    "Set the goal 10 to 20 percent below that number.",
    "Watch delivery for three to four days.",
    "If delivery holds and cost improves, consider a further small reduction.",
    "If delivery collapses, raise the goal back immediately.",
    "Never set a goal based on what you wish a result cost."
  ],
  mistakes: [
    "Setting the goal at a number invented from a business plan rather than market evidence.",
    "Treating the goal as a hard limit rather than an average.",
    "Lowering the goal repeatedly until delivery stops entirely."
  ],
  words: [
    { t: "Cost per result goal", d: "A target average cost the system aims to achieve." },
    { t: "Average, not limit", d: "The goal applies across results, so individual costs vary." },
    { t: "Delivery collapse", d: "When an unrealistic goal prevents the system winning auctions." }
  ],
  takeaways: [
    "The goal is an average target, not a hard ceiling.",
    "Set it from measured natural cost, never from a wish.",
    "Start 10 to 20 percent below natural cost and test.",
    "Collapsed delivery is almost always an over-aggressive goal."
  ],
  selfCheck: [
    "My goals are based on measured natural costs.",
    "I test reductions in small steps.",
    "I know the signs of an over-aggressive goal."
  ],
  quiz: [
    { q: "Is the cost goal a hard limit?", options: ["Yes, no result can cost more", "No, it is an average the system aims for", "Only for video"], a: 1, why: "Individual results vary around the target average." },
    { q: "An ad set with a cost goal barely spends. What is the likely cause?", options: ["The budget is too high", "The goal is set below what the market will support", "The creative is too good"], a: 1, why: "The system cannot find auctions it believes will meet the goal." },
    { q: "How should you set the goal?", options: ["From your business plan target", "From measured natural cost, slightly below it", "As low as possible"], a: 1, why: "Goals must be grounded in what the market actually charges." }
  ],
  exercise: { task: "Take one stable ad set, note its natural cost, and set a goal 15 percent below it. Watch delivery for four days and record what happened." },
  challenge: { task: "Design a cost goal testing programme: how you establish natural cost, the step sizes, the delivery thresholds that indicate an over-aggressive goal, the rollback procedure, and how findings are recorded for each campaign type." }
},

"4.14.4": {
  intro: "Bid Cap sets an absolute maximum the system may bid in any auction. It is the most controlling strategy and the easiest to misuse.",
  idea: [
    "A bid cap is a hard ceiling on the bid itself, not on the cost per result. The system will never bid above it, in any auction, for any person.",
    "This is a genuinely different thing from a cost goal. A cost goal aims at an average outcome. A bid cap constrains every individual bid. Because of this, a bid cap can stop delivery completely and instantly if set below market levels.",
    "It requires understanding the relationship between bid and result cost, which is not one to one. If your conversion rate from click to purchase is 2 percent, a bid on the optimisation event translates into a very different cost per purchase.",
    "Who should use it: experienced advertisers with stable data, clear unit economics and a genuine hard ceiling, for example an account where a lead above a specific cost is worthless. Who should not: almost everyone else."
  ],
  example: {
    title: "The cap that silenced an account",
    body: "An advertiser set a bid cap based on their target cost per purchase, not understanding that the cap applies to the bid, not the final result cost. Delivery stopped within hours. They spent three days assuming the account was broken before discovering the cap. Removing it restored normal delivery immediately."
  },
  steps: [
    "Confirm you genuinely need a hard ceiling rather than an average target.",
    "Establish stable historic data on cost and conversion rates.",
    "Calculate the bid level that corresponds to your acceptable result cost.",
    "Set the cap above that level initially, not at it.",
    "Monitor delivery hourly for the first day.",
    "Remove it immediately if delivery collapses."
  ],
  mistakes: [
    "Confusing a bid cap with a cost per result target.",
    "Using it without stable historical data.",
    "Leaving a cap in place after market prices have risen."
  ],
  words: [
    { t: "Bid cap", d: "An absolute maximum bid the system may place in any auction." },
    { t: "Hard ceiling", d: "A limit that is never exceeded, unlike an average target." },
    { t: "Unit economics", d: "What a customer is worth to you, which sets what you can pay." }
  ],
  takeaways: [
    "A bid cap limits the bid, not the cost per result.",
    "It can stop delivery instantly if set below market levels.",
    "It requires stable data and clear unit economics.",
    "Most advertisers should not use it."
  ],
  selfCheck: [
    "I understand the difference between a bid cap and a cost goal.",
    "I have the stable data a cap requires, or I am not using one.",
    "Any cap in place is reviewed as market prices change."
  ],
  quiz: [
    { q: "What does a bid cap limit?", options: ["Your daily spend", "The bid placed in each auction", "Your cost per result on average"], a: 1, why: "It constrains individual bids, which is why it can stop delivery entirely." },
    { q: "Who should use a bid cap?", options: ["New advertisers", "Experienced advertisers with stable data and a genuine hard ceiling", "Everyone"], a: 1, why: "It requires knowledge that only comes from established performance data." },
    { q: "Delivery stops immediately after setting a cap. What happened?", options: ["An account restriction", "The cap is below what the market requires to win auctions", "The creative was rejected"], a: 1, why: "A cap below market level means the system can never win." }
  ],
  exercise: { task: "Write down the difference between bid cap and cost goal in your own words, and state which of your campaigns, if any, genuinely needs a hard ceiling and why." },
  challenge: { task: "Build the calculation that would justify a bid cap in your business: customer value, acceptable acquisition cost, conversion rates through the funnel, the resulting bid level, and the monitoring plan if you implemented it." }
},

"4.14.5": {
  intro: "ROAS Goal asks the system to achieve a return on your advertising spend, rather than a cost per result. This lesson explains when that makes sense.",
  idea: [
    "Return on ad spend is revenue divided by spend. A goal of 3 means you want three units of revenue for every one spent.",
    "This strategy is only available when you send purchase values back to Meta, because the system needs to know what each sale was worth. Without value data it cannot optimise for value.",
    "It is genuinely better than cost based bidding for businesses with a wide range of order values. If your products range from 20 to 2,000, a cost per purchase target treats every sale as equal, which is wrong. A return goal lets the system chase the valuable ones.",
    "The requirement is accurate value data. If your tracking sends the wrong values, or sends the value before discounts, or double counts, the system optimises toward a fiction. Value based bidding is only as good as the numbers feeding it."
  ],
  example: {
    title: "When averages mislead",
    body: "A store had a cost per purchase target of 30. This looked fine on average. Analysis showed the system was finding many buyers of a 35 product and few buyers of a 400 product, because cheap purchases were easier to produce. Switching to a return goal, with accurate values sent back, reduced total purchase count by 22 percent and increased revenue by 61 percent."
  },
  steps: [
    "Confirm purchase values are sent back accurately.",
    "Check the values are correct: after discounts, without tax if that suits your reporting, not double counted.",
    "Calculate the return you need based on your margin.",
    "Set the goal slightly below your required return at first.",
    "Allow more learning time, since value optimisation needs more data.",
    "Verify against your own sales records, not only Meta's reporting."
  ],
  mistakes: [
    "Using a return goal without sending accurate values.",
    "Setting a return goal higher than your market can support, which collapses delivery.",
    "Trusting reported revenue without checking it against your own records."
  ],
  words: [
    { t: "Return on ad spend", d: "Revenue divided by advertising spend." },
    { t: "Value optimisation", d: "Optimising toward revenue rather than number of purchases." },
    { t: "Value accuracy", d: "Whether the amounts sent back reflect what you actually earned." }
  ],
  takeaways: [
    "Return goals suit businesses with a wide range of order values.",
    "They require accurate purchase values sent back to Meta.",
    "Value optimisation needs more data and more time to learn.",
    "Always verify reported revenue against your own records."
  ],
  selfCheck: [
    "My purchase values are sent back and verified as accurate.",
    "I know the return my margin requires.",
    "I check Meta's revenue reporting against my own records."
  ],
  quiz: [
    { q: "What does a return goal require?", options: ["A large budget", "Accurate purchase values sent back to Meta", "A specific objective"], a: 1, why: "Without values the system cannot optimise toward revenue." },
    { q: "Which business benefits most?", options: ["One product at a single price", "A business with order values ranging widely", "A lead generation business with no revenue data"], a: 1, why: "When values vary, treating all purchases as equal loses money." },
    { q: "What is the main risk?", options: ["Slower approval", "Optimising toward inaccurate value data", "Higher CPM"], a: 1, why: "The system faithfully optimises toward whatever numbers it receives, correct or not." }
  ],
  exercise: { task: "Check three recent purchases in Meta's reporting against your own sales records. Confirm the values match, including discounts. Write down any difference." },
  challenge: { task: "Build the case for or against value based bidding in your business: the spread of order values, the accuracy of your value data, the return your margin requires, and a test plan comparing it against cost based bidding." }
},

"4.14.6": {
  intro: "Cost controls are the limits you place on what you are willing to pay. This lesson gives a clear decision process for whether to use one at all.",
  idea: [
    "Every cost control is a trade. You give up volume in exchange for price protection. The question is whether that trade is worth it for your business.",
    "It is worth it when there is a genuine ceiling above which a result has no value. A business selling a product with a 40 margin genuinely cannot pay 55 for a sale. Here a control protects you from unprofitable spending.",
    "It is not worth it when you simply want results to be cheaper. Wanting a lower price is not a business constraint, and imposing one usually costs more in lost volume than it saves in price.",
    "There is also a timing question. Controls make sense once you have stable data. Applying them to a new campaign prevents the system learning, because it cannot explore enough to find out who converts."
  ],
  example: {
    title: "Testing the trade",
    body: "An account ran the same campaign with and without a cost control for a month each. Without: 340 leads at 21, total 7,140 spent. With a 17 goal: 180 leads at 17, total 3,060 spent. The second was cheaper per lead and produced 160 fewer leads. For this business, each lead was worth 60, so the first month produced far more profit despite the higher price."
  },
  steps: [
    "Calculate what a result is genuinely worth to you.",
    "Identify the price above which it becomes unprofitable.",
    "If your natural cost is well below that, use no control.",
    "If your natural cost is close to it, consider a goal at the profitable level.",
    "Never apply controls during the learning phase.",
    "Test with and without, and compare total profit, not cost per result."
  ],
  mistakes: [
    "Using a control because results feel expensive rather than because they are unprofitable.",
    "Applying controls to new campaigns.",
    "Comparing only cost per result and ignoring lost volume."
  ],
  words: [
    { t: "Cost control", d: "Any limit on what you will pay, whether a goal or a cap." },
    { t: "Profitability ceiling", d: "The price above which a result loses you money." },
    { t: "Volume trade", d: "The results you give up in exchange for a lower price." }
  ],
  takeaways: [
    "Controls trade volume for price protection.",
    "Use them when there is a genuine profitability ceiling.",
    "Do not use them merely to make results feel cheaper.",
    "Compare total profit, not cost per result alone."
  ],
  selfCheck: [
    "I know what a result is worth to my business.",
    "I know my profitability ceiling.",
    "Any control I use protects profitability rather than preference."
  ],
  quiz: [
    { q: "When is a cost control justified?", options: ["When results feel expensive", "When there is a price above which results are genuinely unprofitable", "Always"], a: 1, why: "A real business constraint justifies the lost volume. A preference does not." },
    { q: "What should you compare when testing a control?", options: ["Cost per result only", "Total profit across both approaches", "Impressions"], a: 1, why: "A lower price with much lower volume can easily produce less profit." },
    { q: "When should controls not be applied?", options: ["In mature campaigns", "During the learning phase of a new campaign", "In retargeting"], a: 1, why: "They prevent the exploration the system needs to learn." }
  ],
  exercise: { task: "Calculate what one result is worth to your business and the price above which it becomes unprofitable. Compare with your current natural cost and decide whether a control is justified." },
  challenge: { task: "Design a controlled test of cost controls: two equivalent periods or ad sets, the metrics compared including total profit, the duration, and the decision rule that would make you adopt or reject the control." }
},

"4.14.7": {
  intro: "This lesson brings the strategies together into a simple selection process, so you can decide quickly and defend the choice.",
  idea: [
    "The decision comes down to three questions. Do you have stable historical data? Do you have a genuine cost ceiling? Do you have accurate value data?",
    "No stable data means Lowest cost, always. You cannot set a sensible target for something you have not measured.",
    "Stable data with no genuine ceiling also means Lowest cost, because you would be giving up volume for no business reason.",
    "Stable data with a genuine ceiling means a cost per result goal, set just below your natural cost and tested in steps. Stable data plus accurate value data plus widely varying order values means a return goal. And a bid cap only where an absolute hard limit exists and the account is experienced enough to manage it."
  ],
  example: {
    title: "Three accounts, three answers",
    body: "A new ecommerce store with two weeks of data: Lowest cost, no question. An established lead generation business where leads above 45 are worthless: cost per result goal at 40, tested carefully. A retailer with products from 15 to 900 and verified value tracking: return goal. Same decision process, three different answers driven by their actual situations."
  },
  steps: [
    "Answer the three questions honestly.",
    "Choose the strategy the answers point to.",
    "Write down the reason so it can be reviewed later.",
    "Change one thing at a time when testing an alternative.",
    "Allow a full learning period after any change.",
    "Review the choice quarterly as data and market conditions change."
  ],
  mistakes: [
    "Copying a bid strategy from another business with different data.",
    "Changing strategy and creative at the same time.",
    "Never revisiting a strategy chosen a year ago."
  ],
  words: [
    { t: "Selection process", d: "A repeatable way of choosing the right strategy." },
    { t: "Stable data", d: "Enough consistent history to know what results cost." },
    { t: "Genuine ceiling", d: "A real business limit, not a preference." }
  ],
  takeaways: [
    "Three questions decide it: stable data, genuine ceiling, accurate values.",
    "No stable data always means Lowest cost.",
    "Write down the reason for your choice.",
    "Review the choice quarterly."
  ],
  selfCheck: [
    "I can answer the three questions for my account.",
    "My current strategy matches those answers.",
    "The reasoning is written down."
  ],
  quiz: [
    { q: "You have two weeks of data. Which strategy?", options: ["Bid cap", "Lowest cost", "ROAS goal"], a: 1, why: "Without stable data there is no basis for any target." },
    { q: "Stable data but no genuine cost ceiling. Which strategy?", options: ["Lowest cost", "Bid cap", "Cost goal well below natural cost"], a: 0, why: "Giving up volume without a business reason costs you results for nothing." },
    { q: "What must be true before using a return goal?", options: ["A large budget", "Accurate value data and widely varying order values", "A new account"], a: 1, why: "Value optimisation is only meaningful when values vary and are correct." }
  ],
  exercise: { task: "Answer the three questions for each of your campaigns and write down which strategy each should use. Note every mismatch with what is currently set." },
  challenge: { task: "Create a bid strategy decision tree for your organisation: the questions in order, the strategy each path leads to, the evidence required, the testing protocol for changes, and the quarterly review process." }
},

"4.14.8": {
  intro: "Bid strategies fail in recognisable ways. Knowing the patterns lets you diagnose problems in minutes instead of days.",
  idea: [
    "Failure one: delivery collapse. Spending drops to a fraction of the budget within hours of setting a control. Cause: the target is below what the market supports. Fix: raise the target or remove the control.",
    "Failure two: cost creep. With Lowest cost, the cost per result rises steadily over weeks. Cause: usually creative fatigue or audience exhaustion, not the bid strategy. Fix: new creative, not a cost control.",
    "Failure three: volume without value. Results are cheap and plentiful but the business sees no benefit. Cause: optimising for the wrong event, or value data missing. Fix: change the optimisation event or add value tracking.",
    "Failure four: instability. Costs swing wildly week to week. Cause: usually too many changes, ad sets too small to stabilise, or a control set right at the edge of what the market supports. Fix: consolidate, stop interfering, and loosen the control."
  ],
  example: {
    title: "Diagnosing in five minutes",
    body: "An ad set stopped spending overnight. The activity history showed a cost goal had been lowered from 24 to 16 the previous evening. That is failure one, delivery collapse, with an obvious cause and an obvious fix. Without knowing the pattern, the team would have checked creative, audience, billing and policy first, which is how a five minute problem becomes a two day investigation."
  },
  steps: [
    "Identify the symptom precisely: collapse, creep, volume without value, or instability.",
    "Check the activity history for recent bid or budget changes.",
    "Match the symptom to its usual cause.",
    "Apply the corresponding fix, one change at a time.",
    "Allow several days before judging the result.",
    "Record the incident so the pattern is recognised faster next time."
  ],
  mistakes: [
    "Treating cost creep as a bidding problem when it is usually creative fatigue.",
    "Adding a cost control to fix instability, which usually makes it worse.",
    "Making several changes at once during a diagnosis."
  ],
  words: [
    { t: "Delivery collapse", d: "Sudden severe underspending after a control is applied." },
    { t: "Cost creep", d: "A steady rise in cost per result over weeks." },
    { t: "Instability", d: "Large swings in cost from week to week." }
  ],
  takeaways: [
    "Four common failures: collapse, creep, volume without value, instability.",
    "Collapse means the target is below market level.",
    "Creep is usually creative fatigue, not bidding.",
    "Check the change history before investigating anything else."
  ],
  selfCheck: [
    "I can name the four failure patterns.",
    "I check the change history first.",
    "I do not use cost controls to fix instability."
  ],
  quiz: [
    { q: "Cost per result rises steadily over six weeks. Most likely cause?", options: ["Bid strategy", "Creative fatigue or audience exhaustion", "Billing"], a: 1, why: "Gradual decline usually reflects the audience having seen the ads too often." },
    { q: "Delivery collapses right after a change. What should you check?", options: ["The creative", "Whether a cost control was set below market level", "Your payment method"], a: 1, why: "Sudden collapse following a change almost always points to the control." },
    { q: "Results are cheap but the business sees no benefit. Likely cause?", options: ["Budget too high", "Optimising for the wrong event, or missing value data", "Too much creative"], a: 1, why: "The system produced exactly what you asked for, which was the wrong thing." }
  ],
  exercise: { task: "Review the last three months for any of the four failure patterns. For each one you find, write what the cause was and whether the right fix was applied." },
  challenge: { task: "Build a bidding diagnostic guide: each failure pattern, its symptoms, the checks that confirm it, the fix, the expected recovery time, and the prevention measure that stops it recurring." }
},

"4.14.9": {
  intro: "This final lesson of the module gives you a routine for checking whether your bidding is working, before problems become expensive.",
  idea: [
    "Bidding problems develop quietly. A weekly check of four numbers catches almost all of them early.",
    "Number one: delivery rate, meaning spend divided by budget. Below about 80 percent consistently means something is limiting delivery.",
    "Number two: cost per result compared with your natural cost. Rising steadily means investigate creative first.",
    "Number three: the trend in auction competition, visible in your cost per thousand impressions. If that rose and your cost per result rose in proportion, the market changed rather than your account.",
    "Number four: result quality, which does not appear in Ads Manager. Cheap results that do not become customers are the most expensive kind of failure, and only your own records reveal them."
  ],
  example: {
    title: "The weekly check that caught it",
    body: "Week four of a routine check showed delivery at 71 percent, down from 96. Nothing else had changed. Investigation found a cost goal had been applied to a duplicated ad set and carried over unnoticed. It was corrected the same day. Without the routine, it would have been found weeks later after significant lost volume."
  },
  steps: [
    "Every week, record spend against budget for each ad set.",
    "Record cost per result and compare with your known natural cost.",
    "Record cost per thousand impressions to see market movement.",
    "Check result quality against your own sales or CRM records.",
    "Investigate anything outside your normal range.",
    "Keep the record so trends become visible over months."
  ],
  mistakes: [
    "Checking only cost per result and missing delivery problems.",
    "Never checking result quality outside Meta.",
    "Keeping no record, so slow trends are invisible."
  ],
  words: [
    { t: "Delivery rate", d: "Spend divided by budget, showing whether delivery is constrained." },
    { t: "Market movement", d: "Changes in auction prices affecting everyone, not just you." },
    { t: "Result quality", d: "Whether results turn into real business value." }
  ],
  takeaways: [
    "Check four numbers weekly: delivery rate, cost per result, impression cost, result quality.",
    "Delivery below 80 percent consistently signals a constraint.",
    "Rising impression costs mean the market moved, not your account.",
    "Result quality only appears in your own records."
  ],
  selfCheck: [
    "I check delivery rate weekly.",
    "I compare my cost against market movement.",
    "I verify result quality outside Meta."
  ],
  quiz: [
    { q: "Delivery rate consistently at 60 percent means...", options: ["Excellent efficiency", "Something is limiting delivery and should be investigated", "The budget is too low"], a: 1, why: "Unspent budget is unused opportunity and usually has a fixable cause." },
    { q: "Your cost per result and your impression cost both rose by the same proportion. What does that suggest?", options: ["Your creative failed", "The market became more expensive for everyone", "Your audience is wrong"], a: 1, why: "Proportional movement points to auction conditions rather than your account." },
    { q: "Where does result quality appear?", options: ["In Ads Manager", "In your own sales or CRM records", "In the placement breakdown"], a: 1, why: "Meta knows a lead was submitted, not whether it became a customer." }
  ],
  exercise: { task: "Build a simple weekly tracking sheet with the four numbers for each ad set. Fill it in for this week and commit to updating it every Monday." },
  challenge: { task: "Design a bidding health monitoring system: the metrics, thresholds, the weekly routine, who is responsible, the escalation process when something is outside range, and how quality data flows back from sales." }
}

});
