/* Module 29 - Advanced Optimisation Economics (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"7.29.1": {
  intro: "Marginal thinking means judging the next unit of spending rather than the average of everything spent. This lesson covers the single most valuable idea in advertising economics.",
  plain: [
    "You run a stall. Your first hour makes 100 dollars. Your second makes 80. Your third makes 50. Your fourth makes 10. Your average across four hours is 60 an hour, which looks fine.",
    "But if staying open costs 30 an hour, the fourth hour lost you 20. The average hid that, because the good first hour propped it up.",
    "The question is never what did all my spending average. It is what did the last part of my spending produce, and was that part worth it."
  ],
  idea: [
    "Every account has an average cost per result and a marginal cost per result. The average includes your cheapest, easiest conversions. The marginal describes only what the additional spending produced.",
    "The marginal figure is always worse than the average, in every account, always. This is not a fault. It is the necessary shape of advertising, because the system spends your first money on the cheapest opportunities and must reach further as the budget grows.",
    "The calculation is simple. Take two periods or two budget levels. Subtract the smaller spend from the larger. Subtract the smaller result count from the larger. Divide the extra spend by the extra results. That is your marginal cost per result.",
    "The decision rule follows directly. Keep increasing while the marginal cost is below what a result is worth to you. Stop when it reaches that value. Not when the average rises, which is the mistake almost everyone makes.",
    "This single idea resolves most budget arguments. Someone says costs are rising so we should cut back. The correct response is to ask whether the additional results are still worth more than they cost, which is a question the average cannot answer."
  ],
  example: {
    title: "The average said stop, the margin said continue",
    body: "An account at 5,000 a month produced 200 customers, an average of 25 each. Increasing to 8,000 produced 280 customers, an average of 29. The manager wanted to revert because the average had worsened. The marginal calculation: 3,000 extra spend produced 80 extra customers, a marginal cost of 37.50. Each customer was worth 95. The additional spending had produced 80 customers at 37.50 each, generating roughly 4,600 in additional value for 3,000 spent."
  },
  steps: [
    "Take two budget levels or two periods with different spend.",
    "Calculate the difference in spend and the difference in results.",
    "Divide extra spend by extra results to get marginal cost.",
    "Compare that against what a result is worth to you.",
    "Continue increasing while marginal cost is below value.",
    "Stop when marginal cost reaches value, not when the average rises."
  ],
  mistakes: [
    "Judging budget decisions on the average cost per result.",
    "Cutting spending because the average worsened while the margin was still profitable.",
    "Never calculating the marginal figure at all."
  ],
  words: [
    { t: "Average cost", d: "Total spend divided by total results." },
    { t: "Marginal cost", d: "The extra spend divided by the extra results it produced." },
    { t: "Result value", d: "What one result is genuinely worth to your business." },
    { t: "Decision rule", d: "Continue while marginal cost is below result value." }
  ],
  takeaways: [
    "Marginal cost is always worse than average cost. That is normal.",
    "Judge additional spending on the marginal figure, never the average.",
    "Continue while marginal cost is below what a result is worth.",
    "This one idea resolves most budget arguments."
  ],
  selfCheck: [
    "I can calculate marginal cost per result.",
    "I know what one result is worth to my business.",
    "My budget decisions use marginal rather than average figures."
  ],
  quiz: [
    { q: "You spend 3,000 more and gain 80 more customers. What is the marginal cost?", options: ["25", "37.50", "80"], a: 1, why: "Extra spend divided by extra results: 3,000 divided by 80." },
    { q: "When should you stop increasing budget?", options: ["When the average cost rises", "When the marginal cost reaches what a result is worth", "After a fixed limit"], a: 1, why: "The average rising is normal and does not indicate unprofitable spending." },
    { q: "Why is marginal cost always worse than average?", options: ["A calculation error", "The system spends your first money on the cheapest opportunities and must reach further as budget grows", "Meta charges more at higher spend"], a: 1, why: "It is the necessary shape of advertising, not a fault." }
  ],
  exercise: { task: "Find two months with different spending levels. Calculate the marginal cost per result between them and compare it against what a result is worth to you." },
  challenge: { task: "Build a marginal analysis of your account: the last six budget changes, the marginal cost at each, your result value, which increases were justified, which were not, and the budget level your analysis suggests is optimal." }
},

"7.29.2": {
  intro: "A response curve shows how results change as spending rises. This lesson covers building and using one.",
  plain: [
    "Draw a graph with money spent along the bottom and results up the side. Plot your actual figures at different spending levels. The line you get bends: steep at first, then flattening.",
    "That curve is the most useful picture of your advertising you can have, because it shows where you are on it and what the next increase would buy."
  ],
  idea: [
    "The typical shape rises steeply at low spend, then bends and flattens. The steep part is where cheap opportunities exist. The flat part is where they are exhausted and additional money buys progressively less.",
    "Building one requires spending at several different levels and recording the results. This can be done deliberately, by stepping the budget up over months and recording each level, or approximately from historical data if your spending has varied.",
    "The curve tells you three things. Where you currently sit, which is often further along the flat part than people expect. What the next increase would produce, read from the slope at your current point. And where the curve becomes too flat to justify further spending.",
    "There is an important caution. The curve moves. New creative shifts it upward, meaning more results at every spending level. Increased competition shifts it downward. A curve built a year ago describes a business that no longer exists, so it should be rebuilt periodically.",
    "The practical version most businesses can manage is simple: record spend and results monthly for two years, plot them, and look at the shape. It will not be a perfect curve because many things changed, but the general shape is usually visible and useful."
  ],
  example: {
    title: "Reading position on the curve",
    body: "A business plotted 24 months of spend against customers. The curve was steep up to about 8,000 a month, bent noticeably between 8,000 and 14,000, and was nearly flat beyond 18,000. They were spending 19,000. The picture made it immediately obvious that further increases would buy very little, and that their growth would have to come from shifting the curve upward through better creative rather than from more spending."
  },
  steps: [
    "Collect monthly spend and result figures for as long as you have them.",
    "Plot spend along the bottom and results up the side.",
    "Look for the shape: steep, bending, flat.",
    "Identify where your current spending sits on it.",
    "Estimate what the next increase would produce from the slope there.",
    "Rebuild the curve every six to twelve months, since it moves."
  ],
  mistakes: [
    "Using a curve built from old data that no longer describes the business.",
    "Assuming the curve is fixed rather than something creative can shift.",
    "Expecting a perfectly smooth curve from real data, which is always messy."
  ],
  words: [
    { t: "Response curve", d: "A graph showing how results change as spending rises." },
    { t: "Steep region", d: "The part where additional spending produces many additional results." },
    { t: "Flattening", d: "Where additional spending produces progressively fewer results." },
    { t: "Curve shift", d: "The whole curve moving up or down as creative or competition changes." }
  ],
  takeaways: [
    "The curve rises steeply then flattens as cheap opportunities are exhausted.",
    "It shows where you sit and what the next increase would buy.",
    "Better creative shifts the whole curve upward.",
    "Rebuild it every six to twelve months, because it moves."
  ],
  selfCheck: [
    "I have plotted my spend against results over time.",
    "I know roughly where I sit on the curve.",
    "I understand that better creative shifts the curve rather than moving along it."
  ],
  quiz: [
    { q: "What does the flattening part of the curve mean?", options: ["Something is broken", "Cheap opportunities are exhausted and additional money buys progressively less", "Your tracking failed"], a: 1, why: "It is the normal consequence of reaching further into the audience." },
    { q: "What shifts the whole curve upward?", options: ["A larger budget", "Better creative, which produces more results at every spending level", "A different bid strategy"], a: 1, why: "Moving along the curve and shifting the curve are different things." },
    { q: "How often should the curve be rebuilt?", options: ["Never", "Every six to twelve months, because conditions change", "Weekly"], a: 1, why: "An old curve describes a business that no longer exists." }
  ],
  exercise: { task: "Plot your monthly spend against monthly results for the last two years. Look at the shape and mark where your current spending sits." },
  challenge: { task: "Build a response curve analysis: the plotted data, the identified regions, your current position, the estimated marginal return at your position, the evidence of curve shifts over time, and what would be required to shift it upward rather than move along it." }
},

"7.29.3": {
  intro: "Budget elasticity measures how sensitive your results are to spending changes. This lesson covers what it tells you.",
  plain: [
    "If you increase spending by 10 percent and results rise by 10 percent, your results are perfectly responsive to spending.",
    "If results rise by only 4 percent, they are much less responsive, which means you are well into the flat part of the curve.",
    "Elasticity is simply that ratio, and it tells you at a glance how much room you have left to grow through spending alone."
  ],
  idea: [
    "The calculation is the percentage change in results divided by the percentage change in spend. A 10 percent spend increase producing a 7 percent result increase gives an elasticity of 0.7.",
    "Interpreting it is straightforward. Close to 1 means you have plenty of room and additional spending is efficient. Around 0.5 to 0.7 is typical for an established account, meaning diminishing but still worthwhile returns. Below 0.3 means you are near saturation and further spending buys very little.",
    "The number is useful for planning because it converts directly into a forecast. If your elasticity is 0.6 and you want 30 percent more customers, you need roughly 50 percent more budget, which may or may not be affordable at the resulting cost per customer.",
    "Elasticity varies by campaign type. Prospecting into a large market usually shows higher elasticity than retargeting into a small audience, which saturates quickly. Measuring it separately by campaign shows where additional money should go.",
    "Like everything in this module, it changes over time and should be re-measured. It also differs by season: an account may show high elasticity during a peak buying period and low elasticity in a quiet month."
  ],
  example: {
    title: "Different elasticity, different allocation",
    body: "A business measured elasticity separately by campaign. Prospecting was 0.8. Retargeting was 0.2. This meant a 50 percent increase in prospecting would produce roughly 40 percent more results, while the same increase in retargeting would produce 10 percent more. They moved the planned increase entirely into prospecting, and the growth achieved was almost four times what an even split would have produced."
  },
  steps: [
    "Take two periods with different spending levels.",
    "Calculate the percentage change in spend and in results.",
    "Divide the result change by the spend change.",
    "Repeat separately for each major campaign type.",
    "Direct additional budget toward the highest elasticity campaigns.",
    "Re-measure every few months and by season."
  ],
  mistakes: [
    "Calculating one figure for the whole account and missing large differences between campaigns.",
    "Using an elasticity measured in a peak season to plan a quiet month.",
    "Assuming elasticity stays constant as spending grows."
  ],
  words: [
    { t: "Elasticity", d: "The percentage change in results divided by the percentage change in spend." },
    { t: "Saturation", d: "The point where additional spending produces very little additional result." },
    { t: "Campaign level elasticity", d: "Measuring the ratio separately for each campaign type." },
    { t: "Seasonal variation", d: "Elasticity differing between busy and quiet periods." }
  ],
  takeaways: [
    "Elasticity is the result change divided by the spend change.",
    "Close to 1 means room to grow. Below 0.3 means near saturation.",
    "Measure it separately by campaign, since it varies enormously.",
    "Direct additional budget toward the highest elasticity campaigns."
  ],
  selfCheck: [
    "I have calculated elasticity for my main campaigns.",
    "I know which campaign has the most room to grow.",
    "I re-measure periodically and account for season."
  ],
  quiz: [
    { q: "Spend rose 20 percent and results rose 12 percent. What is the elasticity?", options: ["0.6", "1.67", "8"], a: 0, why: "Result change divided by spend change: 12 divided by 20." },
    { q: "An elasticity of 0.2 means what?", options: ["Excellent growth potential", "Near saturation, so additional spending buys very little", "A measurement error"], a: 1, why: "Results barely respond to additional spending." },
    { q: "Why measure elasticity by campaign?", options: ["For reporting detail", "It varies enormously, and additional budget should go where it is highest", "Meta requires it"], a: 1, why: "Prospecting and retargeting typically differ by a large margin." }
  ],
  exercise: { task: "Calculate elasticity for your two largest campaigns using two periods with different spending. Compare them and note which should receive any additional budget." },
  challenge: { task: "Build an elasticity model: the calculation for each campaign type, the seasonal variation, the current figures with dates, the budget allocation implied by the differences, and the forecast of what a given increase would produce in each." }
},

"7.29.4": {
  intro: "Saturation is the point where your market cannot absorb more advertising. This lesson covers recognising and modelling it.",
  plain: [
    "There are only so many people who might buy from you. Once you have reached most of them, several times each, additional spending mostly means showing the same people the same advertisements more often.",
    "That is saturation. It is not a failure of your advertising. It is a limit of your market, and the response is different from the response to a performance problem."
  ],
  idea: [
    "The signals of saturation are consistent. Frequency rising while reach stops growing. Cost per result rising steadily as budget increases. Elasticity falling below about 0.3. And a shrinking pool of new people entering your audiences.",
    "It is important to distinguish saturation from creative fatigue, which produces similar symptoms. The distinguishing test is whether reach is still growing. If new people are still being found and results are worsening, the problem is the message. If reach has stopped growing, the problem is the market size.",
    "Saturation has three possible responses. Accept the ceiling and hold spending at the efficient level, redirecting money elsewhere. Expand the market, through new geographies, new audiences or new products. Or shift the curve upward through better creative, which increases how much of the existing market you can convert.",
    "The mistake is to treat saturation as a problem to be solved by spending more, which produces exactly the poor returns that signalled saturation in the first place.",
    "Modelling it approximately is possible: plot your reach against spend and see where reach stops growing. That point, and the cost at that point, defines your practical ceiling in the current market."
  ],
  example: {
    title: "Reach stopped growing",
    body: "An account increased spend by 60 percent over three months. Impressions rose 58 percent. Reach rose 4 percent. Frequency went from 2.9 to 4.4. They had reached essentially everyone available and were now showing the same people more advertisements. The correct response was market expansion, and they opened two neighbouring countries, where the curve was steep again."
  },
  steps: [
    "Plot reach against spend over several months.",
    "Identify where reach stops growing despite rising spend.",
    "Check frequency at that point.",
    "Confirm it is saturation and not creative fatigue by checking whether reach is still growing.",
    "Choose a response: accept the ceiling, expand the market, or improve creative.",
    "Do not respond by spending more into the same market."
  ],
  mistakes: [
    "Confusing saturation with creative fatigue and applying the wrong fix.",
    "Spending more into a saturated market.",
    "Treating the ceiling as permanent, when creative and expansion can move it."
  ],
  words: [
    { t: "Saturation", d: "The point where the market cannot absorb more advertising usefully." },
    { t: "Reach ceiling", d: "The maximum number of people your advertising can practically reach." },
    { t: "Frequency growth", d: "Showing the same people more advertisements as reach stops growing." },
    { t: "Market expansion", d: "Adding new geographies, audiences or products to escape a ceiling." }
  ],
  takeaways: [
    "Saturation is a market limit, not a performance problem.",
    "Distinguish it from creative fatigue by checking whether reach is still growing.",
    "Three responses: accept, expand the market, or improve creative.",
    "Spending more into a saturated market produces exactly the poor returns you already see."
  ],
  selfCheck: [
    "I have plotted reach against spend.",
    "I can distinguish saturation from creative fatigue.",
    "I know which response my situation calls for."
  ],
  quiz: [
    { q: "How do you distinguish saturation from creative fatigue?", options: ["By the cost per result", "By whether reach is still growing", "By the frequency alone"], a: 1, why: "Saturation means reach has stopped growing. Fatigue can occur while reach still grows." },
    { q: "What is the wrong response to saturation?", options: ["Expanding the market", "Spending more into the same market", "Improving creative"], a: 1, why: "It produces precisely the poor returns that indicated saturation." },
    { q: "What is saturation a limit of?", options: ["Your advertising skill", "Your market size at the current creative and positioning", "Meta's system"], a: 1, why: "It reflects how many people are available and reachable." }
  ],
  exercise: { task: "Plot your reach and frequency against spend for the last six months. Determine whether your reach is still growing as spend rises, and write down whether you are approaching saturation." },
  challenge: { task: "Produce a saturation analysis: the reach and frequency curves, the evidence for or against saturation, the distinction from creative fatigue, the practical ceiling with its cost, and a three option response plan with expected outcomes for each." }
},

"7.29.5": {
  intro: "Frequency economics covers how the number of times someone sees your advertising affects what it achieves. This lesson covers finding the right level.",
  plain: [
    "Showing someone an advertisement once may not be enough to register. Showing it twenty times in a week is irritating and may make them dislike you.",
    "Somewhere between those extremes is a level that works for your business. Finding it is worth real money, because both too little and too much cost you."
  ],
  idea: [
    "The relationship between frequency and response is not straight. Early repetitions help, because recognition builds. Then there is a range where additional exposure adds little. Then response declines, and eventually becomes negative as irritation grows.",
    "Where that range sits differs by business. A complex or expensive product may need more exposure before someone acts. A simple impulse purchase needs less. A small local audience will reach high frequency quickly regardless of what you want.",
    "The measurable signals of excessive frequency are falling click rate as frequency rises, rising negative feedback such as ads being hidden, and rising cost per result while nothing else changed.",
    "The practical method is to plot cost per result against frequency across several periods. Most accounts find a range where cost is lowest, and can then manage toward it by adjusting budget, audience size or creative rotation.",
    "There is an important distinction between frequency of the same advertisement and frequency of your brand. Seeing five different advertisements from a business is a different experience from seeing the same one five times. Creative rotation lets you maintain brand frequency while keeping individual advertisement frequency low, which is usually the best position."
  ],
  example: {
    title: "Finding the range",
    body: "A business plotted cost per purchase against weekly frequency across eight months. Below 1.5 the cost was high, suggesting insufficient exposure. Between 2 and 3.5 the cost was lowest. Above 4.5 it rose sharply. They set audience sizes and budgets to keep frequency between 2 and 3.5, and their average cost per purchase fell 17 percent purely from managing this."
  },
  steps: [
    "Record frequency and cost per result together over several months.",
    "Plot one against the other and find the range with the lowest cost.",
    "Check negative feedback rates at higher frequencies.",
    "Manage toward the efficient range using budget and audience size.",
    "Rotate creative so brand frequency can stay higher than advertisement frequency.",
    "Re-check the range periodically, since it shifts with creative and market."
  ],
  mistakes: [
    "Assuming a universal correct frequency rather than measuring your own.",
    "Confusing brand frequency with individual advertisement frequency.",
    "Managing frequency by reducing budget when rotating creative would work better."
  ],
  words: [
    { t: "Frequency", d: "How many times the average person saw your advertising." },
    { t: "Efficient range", d: "The frequency band where your cost per result is lowest." },
    { t: "Negative feedback", d: "People hiding or reporting your advertisements." },
    { t: "Brand frequency", d: "Total exposure to your business, across different advertisements." }
  ],
  takeaways: [
    "Both too little and too much frequency cost you money.",
    "Find your own efficient range by plotting cost against frequency.",
    "Watch negative feedback as an early warning of excessive frequency.",
    "Creative rotation lets brand frequency rise while advertisement frequency stays low."
  ],
  selfCheck: [
    "I know my efficient frequency range.",
    "I monitor negative feedback rates.",
    "I use creative rotation rather than only budget to manage frequency."
  ],
  quiz: [
    { q: "What happens at very high frequency?", options: ["Results keep improving", "Response declines and irritation grows, eventually making the effect negative", "Nothing changes"], a: 1, why: "Excessive repetition damages both response and brand perception." },
    { q: "What is the difference between brand frequency and advertisement frequency?", options: ["Nothing", "Seeing five different advertisements differs from seeing the same one five times", "One is measured weekly"], a: 1, why: "Rotation lets total exposure rise without the irritation of repetition." },
    { q: "How do you find your efficient range?", options: ["Use an industry standard", "Plot your own cost per result against frequency across several periods", "Ask Meta"], a: 1, why: "The right range differs by business and must be measured." }
  ],
  exercise: { task: "Record frequency and cost per result for each of the last eight weeks. Plot them and identify the frequency range where your cost was lowest." },
  challenge: { task: "Build a frequency management system: the measured efficient range with evidence, the negative feedback thresholds, the levers used to manage frequency, the creative rotation schedule maintaining brand frequency, and the periodic re-measurement." }
},

"7.29.6": {
  intro: "Creative lifespan is how long an advertisement remains effective. Understanding it lets you plan production properly.",
  plain: [
    "Every advertisement has a working life. It starts, it performs, it declines, and eventually it costs more than it returns.",
    "If you know roughly how long that takes in your business, you can plan production to have replacements ready. If you do not, you will always be producing replacements in a panic after performance has already fallen."
  ],
  idea: [
    "Lifespan is driven mainly by audience size and spending rate. A small audience with high spending exhausts an advertisement in days. A large audience with modest spending may sustain one for months.",
    "The practical way to measure it is to record, for each advertisement, the date it launched, the date its cost per result began rising consistently, and the total impressions it accumulated by that point. After a dozen advertisements, a pattern emerges: your advertisements typically last a certain number of weeks or a certain volume of impressions.",
    "Impressions is usually the better measure than time, because it accounts for spending rate. An advertisement that lasts eight weeks at 100 a day will last two weeks at 400 a day.",
    "Knowing the pattern converts into a production requirement. If your advertisements last roughly six weeks and you run four at a time, you need roughly four new advertisements every six weeks simply to stand still, plus more if you want to improve.",
    "This calculation is the honest basis for creative resourcing, and it is why businesses that treat creative production as occasional always struggle. The requirement is continuous and it can be calculated."
  ],
  example: {
    title: "Calculating the requirement",
    body: "A business measured their advertisements' lifespan at roughly 400,000 impressions before decline. At their spending level they accumulated about 1.2 million impressions monthly across four running advertisements, meaning each advertisement lasted around five weeks. Running four at a time, they needed roughly four new advertisements every five weeks, or about 40 a year. They had been producing 12. The gap explained years of gradually worsening performance."
  },
  steps: [
    "Record launch date, decline date and total impressions for each advertisement.",
    "After a dozen, calculate the typical lifespan in impressions.",
    "Convert to time at your current spending rate.",
    "Multiply by the number of advertisements you run simultaneously.",
    "Calculate your annual production requirement.",
    "Compare against what you actually produce and close the gap."
  ],
  mistakes: [
    "Measuring lifespan in weeks without accounting for spending rate.",
    "Producing creative reactively after decline rather than on a schedule.",
    "Never calculating the requirement, so production is always insufficient."
  ],
  words: [
    { t: "Creative lifespan", d: "How long an advertisement remains effective." },
    { t: "Impressions to decline", d: "The volume of exposure before performance falls consistently." },
    { t: "Production requirement", d: "How much new creative you need simply to maintain performance." },
    { t: "Standing still", d: "Producing enough to replace decline without improving." }
  ],
  takeaways: [
    "Lifespan depends on audience size and spending rate.",
    "Measure it in impressions rather than weeks.",
    "Convert lifespan into an annual production requirement.",
    "Most businesses produce far less than their requirement."
  ],
  selfCheck: [
    "I know my typical creative lifespan in impressions.",
    "I have calculated my annual production requirement.",
    "I produce on a schedule rather than after decline."
  ],
  quiz: [
    { q: "Why measure lifespan in impressions rather than weeks?", options: ["It is easier", "It accounts for spending rate, since higher spend exhausts an advertisement faster", "Meta reports it that way"], a: 1, why: "The same advertisement lasts different lengths of time at different budgets." },
    { q: "What is the production requirement?", options: ["Whatever you can afford", "The amount of new creative needed simply to replace natural decline", "One per month"], a: 1, why: "It can be calculated from lifespan and the number running simultaneously." },
    { q: "What happens when production falls short of the requirement?", options: ["Nothing", "Performance gradually worsens as advertisements decline faster than they are replaced", "Costs fall"], a: 1, why: "The account slowly runs on increasingly tired creative." }
  ],
  exercise: { task: "For your last ten advertisements, record the impressions each accumulated before its cost per result started rising. Calculate the average and convert it into your annual production requirement." },
  challenge: { task: "Build a creative resourcing model: the measured lifespan, the production requirement calculation, your current production rate, the gap, the resourcing needed to close it, and the expected performance effect of closing versus not closing it." }
},

"7.29.7": {
  intro: "Customer acquisition cost is what it costs to gain one new customer. This lesson covers calculating it honestly.",
  plain: [
    "This sounds simple: divide what you spent by how many customers you gained. In practice almost every business calculates it wrongly, usually in a way that flatters the result.",
    "The three common errors are counting existing customers as new, ignoring costs beyond the advertising itself, and using attributed rather than incremental figures."
  ],
  idea: [
    "The honest calculation divides your total acquisition cost by the number of genuinely new customers acquired.",
    "The numerator should include more than advertising spend. Creative production, agency fees, software, and the staff time spent on acquisition all belong in it if you want a true figure. Many businesses report a cost that excludes half of what acquisition actually costs.",
    "The denominator should include only genuinely new customers. Counting returning customers as acquisitions is common, particularly in ecommerce where a returning buyer looks identical to a new one in the advertising reports.",
    "The third refinement is incrementality. If some of those new customers would have found you anyway, they were not acquired by advertising. Applying the incrementality factor from the previous module gives the true acquisition cost.",
    "The result is often two or three times higher than the figure the business had been using. This is uncomfortable and it is important, because acquisition cost is the number that determines whether growth is affordable, and a wrong figure produces confident wrong decisions."
  ],
  example: {
    title: "The three corrections",
    body: "A business reported acquisition cost of 32. Correcting for existing customers counted as new took it to 48. Adding creative production, agency fees and software took it to 61. Applying an incrementality factor of 0.7 took it to 87. Their customer was worth 140 over a year, so the business remained viable, but their planned expansion had been modelled on 32 and would have failed."
  },
  steps: [
    "Add every cost of acquisition, not just media spend.",
    "Count only genuinely new customers in the denominator.",
    "Apply your incrementality factor to the customer count.",
    "Calculate the corrected figure.",
    "Compare it against customer value.",
    "Rebuild any plan that was based on the uncorrected figure."
  ],
  mistakes: [
    "Counting returning customers as new acquisitions.",
    "Excluding creative, agency and software costs from the calculation.",
    "Using attributed rather than incremental customer counts."
  ],
  words: [
    { t: "Acquisition cost", d: "What it costs to gain one genuinely new customer." },
    { t: "Fully loaded cost", d: "All acquisition costs including creative, fees and staff time." },
    { t: "New versus returning", d: "Distinguishing genuinely new customers from repeat buyers." },
    { t: "Incremental acquisition", d: "Customers who would not have come without the advertising." }
  ],
  takeaways: [
    "Include all acquisition costs, not only media spend.",
    "Count only genuinely new customers.",
    "Apply your incrementality factor.",
    "The honest figure is often two or three times the reported one."
  ],
  selfCheck: [
    "My acquisition cost includes all costs.",
    "I count only genuinely new customers.",
    "I apply an incrementality adjustment."
  ],
  quiz: [
    { q: "What belongs in the acquisition cost besides media spend?", options: ["Nothing", "Creative production, agency fees, software and staff time", "Product costs"], a: 1, why: "They are all genuinely part of what acquisition costs." },
    { q: "Why does counting returning customers distort the figure?", options: ["They spend less", "They were not acquired, so including them understates the true cost", "They are harder to track"], a: 1, why: "The denominator becomes larger than it should be." },
    { q: "Why does the honest figure matter?", options: ["For reporting accuracy", "It determines whether growth is affordable, so a wrong figure produces confident wrong decisions", "Meta requires it"], a: 1, why: "Expansion plans built on a flattering figure fail." }
  ],
  exercise: { task: "Recalculate your acquisition cost with all three corrections: full costs, new customers only, and an incrementality adjustment. Compare against the figure you have been using." },
  challenge: { task: "Build a fully loaded acquisition cost model: every cost component with its source, the new customer definition and measurement, the incrementality adjustment with evidence, the corrected figure, the comparison against customer value, and the implications for your growth plan." }
},

"7.29.8": {
  intro: "Contribution margin and lifetime value determine how much you can afford to spend acquiring a customer. This lesson covers both.",
  plain: [
    "If a customer is worth 40 to you, spending 60 to acquire them loses money. If they are worth 400, spending 60 is excellent.",
    "So before any discussion about whether advertising is expensive, you need to know what a customer is actually worth. Most businesses have a rough idea that is wrong, usually too low, because they count only the first purchase."
  ],
  idea: [
    "Contribution margin is what you keep from a sale after the costs directly caused by that sale: the product, the shipping, the payment fees. Not your rent or salaries, which you pay regardless.",
    "Lifetime value is the total contribution a customer produces across their whole relationship with you. For a business where people buy once, it equals the contribution from that one purchase. For a business with repeat purchase or subscription, it is considerably more.",
    "The calculation for repeat businesses is: average contribution per order, multiplied by average orders per customer over a defined period. The period matters and should be stated: lifetime value over one year is a different figure from over three, and using a long period to justify spending you cannot afford today is a common and dangerous error.",
    "The affordability rule connects them. You can afford to spend up to the lifetime value to acquire a customer and break even, though most businesses target considerably less to remain profitable and to fund other costs. A common target is acquisition cost at a third of lifetime value, though the right ratio depends on your cash position and growth stage.",
    "The cash consideration is real and frequently overlooked. If a customer is worth 300 over two years but produces only 40 in the first month, spending 200 to acquire them is profitable and may still bankrupt you, because the money goes out immediately and comes back slowly."
  ],
  example: {
    title: "Profitable and unaffordable",
    body: "A subscription business calculated lifetime value at 480 over two years and set acquisition cost targets at 160. The arithmetic was correct. But each customer paid 20 a month, so it took eight months to recover the 160. Growing quickly meant an ever widening cash gap, and they ran out of money while being profitable on paper. They reduced acquisition cost to 90, grew more slowly, and survived."
  },
  steps: [
    "Calculate contribution per order after direct costs.",
    "Measure average orders per customer over a defined period.",
    "Multiply to get lifetime value, and state the period clearly.",
    "Set your acquisition cost target as a fraction of it.",
    "Calculate the payback period in months.",
    "Check whether your cash position supports that payback period at your growth rate."
  ],
  mistakes: [
    "Using a long lifetime value period to justify spending you cannot fund today.",
    "Including fixed costs such as rent in contribution margin.",
    "Ignoring the cash gap between spending and recovery."
  ],
  words: [
    { t: "Contribution margin", d: "What you keep after costs directly caused by the sale." },
    { t: "Lifetime value", d: "Total contribution from a customer over a defined period." },
    { t: "Payback period", d: "How long before a customer repays what they cost to acquire." },
    { t: "Cash gap", d: "The money tied up between spending on acquisition and recovering it." }
  ],
  takeaways: [
    "Contribution margin excludes fixed costs you pay regardless.",
    "State the period for any lifetime value figure.",
    "Acquisition cost is commonly targeted at around a third of lifetime value.",
    "A profitable acquisition cost can still bankrupt you if payback is slow."
  ],
  selfCheck: [
    "I know my contribution per order.",
    "I know my lifetime value and over what period.",
    "I know my payback period and whether my cash supports it."
  ],
  quiz: [
    { q: "What should be excluded from contribution margin?", options: ["Product cost", "Fixed costs such as rent and salaries you pay regardless", "Payment fees"], a: 1, why: "Contribution counts only costs caused by the sale itself." },
    { q: "Why must the lifetime value period be stated?", options: ["For accounting rules", "Value over three years is a different figure from one year, and long periods can justify unaffordable spending", "Meta requires it"], a: 1, why: "An unstated period allows convenient inflation of the figure." },
    { q: "How can profitable acquisition still bankrupt a business?", options: ["It cannot", "Money goes out immediately and returns slowly, creating a widening cash gap during growth", "Through tax"], a: 1, why: "Profitability and cash flow are different things." }
  ],
  exercise: { task: "Calculate your contribution per order, your average orders per customer over twelve months, and therefore your one year lifetime value. Then calculate your payback period at your current acquisition cost." },
  challenge: { task: "Build a unit economics model: contribution margin by product, lifetime value over one, two and three years with the underlying repeat rates, the acquisition cost targets each supports, the payback periods, the cash requirement at three growth rates, and the maximum sustainable growth rate given your cash position." }
},

"7.29.9": {
  intro: "This final lesson of Level 7 covers optimising when you cannot simply maximise, because real businesses have limits.",
  plain: [
    "Textbook advice says spend until the marginal return equals the cost. Real businesses have other limits: fixed budgets, limited stock, limited staff, cash constraints and targets set by someone else.",
    "Optimising under constraints means getting the best result possible within the limits you actually have, rather than the theoretically best result you could have with unlimited freedom."
  ],
  idea: [
    "The common constraints are five. A fixed budget you cannot exceed. A capacity limit on how many customers you can serve. A cash limit on how long you can wait for payback. A target imposed by management, such as a required return. And a minimum volume requirement, such as needing a certain number of sales regardless of efficiency.",
    "Each changes the optimisation. With a fixed budget, the goal is allocating it to the highest marginal return uses, not spending until the margin equals value. With a capacity limit, the goal is filling capacity at the lowest cost, then stopping. With a target return, the goal is maximising volume at or above that return.",
    "The most common conflict is between efficiency and volume. Maximising return on ad spend usually means spending less. Maximising volume usually means accepting worse efficiency. A business can have one or the other, and pretending both are possible simultaneously produces confused decisions and frustrated teams.",
    "The correct approach is to state the constraint and the objective explicitly, in writing, before optimising anything. We will maximise volume subject to a return of at least 3. Or, we will maximise return within a fixed budget of 20,000. Both are legitimate. Which one you are pursuing must be decided, not assumed.",
    "The mark of sophistication here is not clever mathematics. It is clarity about what you are actually trying to achieve, which is surprisingly rare and eliminates most of the argument that surrounds budget decisions."
  ],
  example: {
    title: "Stating the objective ended the argument",
    body: "A team had argued for months. The media buyer optimised for volume and was criticised when the return fell. The finance director optimised for return and was criticised when growth stalled. They wrote one sentence: maximise new customers subject to acquisition cost remaining below 70. Both parties agreed it was correct. The argument ended immediately, because the trade-off had been decided rather than repeatedly relitigated."
  },
  steps: [
    "List every genuine constraint on your advertising.",
    "State the objective explicitly: what you are maximising.",
    "State the constraint explicitly: what limit must be respected.",
    "Write both in one sentence and agree it with whoever controls the budget.",
    "Optimise within that statement rather than in general.",
    "Revisit the statement when circumstances change, rather than drifting."
  ],
  mistakes: [
    "Pursuing efficiency and volume simultaneously without deciding which matters more.",
    "Optimising without stating the constraint, so success cannot be judged.",
    "Never revisiting the objective as the business changes."
  ],
  words: [
    { t: "Constraint", d: "A limit within which optimisation must happen." },
    { t: "Objective", d: "What you are trying to maximise." },
    { t: "Efficiency versus volume", d: "The core trade-off between cheap results and many results." },
    { t: "Explicit statement", d: "Writing the objective and constraint in one agreed sentence." }
  ],
  takeaways: [
    "Real optimisation happens within constraints, not in theory.",
    "Efficiency and volume cannot both be maximised at once.",
    "State the objective and constraint in one written sentence.",
    "Clarity about the goal eliminates most budget arguments."
  ],
  selfCheck: [
    "I have listed my genuine constraints.",
    "My objective is written in one sentence and agreed.",
    "I revisit it when circumstances change."
  ],
  quiz: [
    { q: "Can efficiency and volume both be maximised?", options: ["Yes, with good management", "No, they trade against each other and one must be chosen", "Only in large accounts"], a: 1, why: "Maximising one necessarily compromises the other." },
    { q: "What should be written before optimising?", options: ["A budget forecast", "One sentence stating the objective and the constraint", "A creative brief"], a: 1, why: "Without it, success cannot be judged and arguments recur." },
    { q: "With a fixed budget, what is the correct goal?", options: ["Spend until marginal return equals value", "Allocate the fixed amount to the highest marginal return uses", "Spend as little as possible"], a: 1, why: "The constraint changes the optimisation from how much to where." }
  ],
  exercise: { task: "Write your objective and constraint in one sentence, in the form: maximise X subject to Y. Show it to whoever controls the budget and confirm they agree." },
  challenge: { task: "Produce a constrained optimisation plan: every constraint with its source and rigidity, the agreed objective statement, the allocation method it implies, the trade-offs being accepted, the measurement of success against that objective, and the review trigger for revisiting it." }
}

});
