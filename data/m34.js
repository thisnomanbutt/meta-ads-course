/* Module 34 - Unit Economics and Business Strategy (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"9.34.1": {
  intro: "Unit economics means understanding the money in one transaction. This lesson covers why advertising decisions are impossible without it.",
  plain: [
    "If you do not know what one customer is worth and what one costs, then every conversation about whether advertising is expensive is a conversation about feelings.",
    "Unit economics replaces feelings with arithmetic. It answers one question: does one more customer make us better off, and by how much."
  ],
  idea: [
    "The unit is usually one customer, or one order in a business where customers buy once.",
    "The calculation has three parts. What the customer pays you. What that costs you to deliver, including the product, the delivery, the payment fees and any direct service cost. And what it cost to acquire them.",
    "The result is contribution per customer: what is left over to cover your fixed costs and profit. If it is positive, more customers make you better off. If it is negative, growth makes things worse, and no amount of advertising skill fixes that.",
    "The reason this belongs in an advertising course is that it sets every target you use. Your acceptable cost per customer, your target return, your bid caps and your scaling ceiling all derive from these numbers. Advertisers working without them are guessing at every threshold.",
    "There is one further point. Many businesses have very different unit economics across their products or services, and treating them as one blended number hides the fact that some are worth advertising heavily and others are not worth advertising at all."
  ],
  example: {
    title: "One blended number hid two businesses",
    body: "A company calculated an average contribution of 40 per customer and set their acquisition target accordingly. Splitting by service revealed one service contributing 110 and another contributing 6. They had been advertising both equally. Moving nearly all budget to the first service raised total profit by 80 percent on the same spend, and the second service was quietly withdrawn from advertising entirely."
  },
  steps: [
    "Define your unit, usually one customer or one order.",
    "Calculate what the customer pays.",
    "Subtract every cost directly caused by serving them.",
    "Subtract the acquisition cost.",
    "Calculate contribution per customer.",
    "Repeat separately for each product or service line."
  ],
  mistakes: [
    "Using one blended figure across products with very different economics.",
    "Omitting delivery, payment fees or service costs from the calculation.",
    "Setting advertising targets without doing this arithmetic first."
  ],
  words: [
    { t: "Unit economics", d: "The money involved in one customer or one transaction." },
    { t: "Contribution", d: "What is left after all costs directly caused by the transaction." },
    { t: "Direct cost", d: "A cost caused by serving that customer, as opposed to a fixed cost." },
    { t: "Blended figure", d: "One average hiding very different results across products." }
  ],
  takeaways: [
    "Unit economics answers whether one more customer makes you better off.",
    "Every advertising target derives from these numbers.",
    "Calculate separately by product or service, not as one blend.",
    "Positive contribution means growth helps. Negative means growth harms."
  ],
  selfCheck: [
    "I know my contribution per customer.",
    "I have calculated it separately by product or service.",
    "My advertising targets derive from these numbers."
  ],
  quiz: [
    { q: "What does contribution per customer tell you?", options: ["Your total profit", "Whether one more customer makes you better off, and by how much", "Your market share"], a: 1, why: "It is the basis of every advertising threshold." },
    { q: "Why calculate separately by product?", options: ["For reporting detail", "Because economics frequently differ enormously and a blend hides it", "It is required"], a: 1, why: "Some products may be worth advertising heavily and others not at all." },
    { q: "What happens if contribution is negative?", options: ["Advertise more efficiently", "Growth makes things worse, and no advertising skill fixes it", "Increase the budget"], a: 1, why: "Each additional customer costs more than they bring." }
  ],
  exercise: { task: "Calculate contribution per customer for your two largest products or services separately. Compare them and note whether your advertising budget reflects the difference." },
  challenge: { task: "Build a unit economics model: the unit definition, the revenue and every direct cost by product line, the acquisition cost, the contribution per line, the comparison against current budget allocation, and the reallocation the analysis implies." }
},

"9.34.2": {
  intro: "Acquisition cost, lifetime value and payback together determine how aggressively you can grow. This lesson covers the relationship.",
  plain: [
    "Three numbers govern growth. What a customer costs to get, what they are worth over time, and how long you wait to get your money back.",
    "The first two decide whether growth is profitable. The third decides whether you can afford it."
  ],
  idea: [
    "Acquisition cost, covered in Level 7, should include all costs and only genuinely new customers.",
    "Lifetime value should state its period explicitly and be based on measured repeat behaviour rather than hope.",
    "The ratio between them is the common shorthand. A lifetime value three times acquisition cost is a frequently cited target, though the right number depends on your margins and growth stage. What matters more than hitting a standard ratio is knowing your own and deciding deliberately.",
    "Payback period is the number most often ignored and most likely to cause failure. It measures how many months before a customer has repaid what they cost. A business with excellent lifetime value and an eighteen month payback needs substantial cash to grow, because every new customer widens the gap before they close it.",
    "The relationship between these and growth rate is direct. Faster growth means more customers in the payback period simultaneously, which means more cash tied up. This is why businesses with good unit economics still run out of money, and why the payback period should be calculated before any aggressive growth plan.",
    "The practical rule: check profitability with the ratio, check affordability with the payback period, and never assume the first implies the second."
  ],
  example: {
    title: "Profitable and out of cash",
    body: "A business had lifetime value of 620 and acquisition cost of 180, a healthy ratio. Payback took eleven months. They tripled advertising to grow faster. Within five months they had 900 customers in their payback period representing 162,000 of unrecovered acquisition cost. They ran out of working capital while every individual customer remained profitable."
  },
  steps: [
    "Calculate fully loaded acquisition cost.",
    "Calculate lifetime value over a stated period from measured behaviour.",
    "Calculate the ratio and compare against your target.",
    "Calculate the payback period in months.",
    "Model how much cash a given growth rate ties up.",
    "Set your growth rate from the cash constraint, not only the profitability one."
  ],
  mistakes: [
    "Assuming a good ratio means growth is affordable.",
    "Using an unmeasured lifetime value based on optimistic assumptions.",
    "Growing faster than the cash position supports."
  ],
  words: [
    { t: "Acquisition cost", d: "The fully loaded cost of gaining one new customer." },
    { t: "Lifetime value", d: "Total contribution from a customer over a stated period." },
    { t: "Payback period", d: "Months before a customer repays their acquisition cost." },
    { t: "Working capital", d: "The cash tied up in customers who have not yet repaid their cost." }
  ],
  takeaways: [
    "The ratio checks profitability. The payback period checks affordability.",
    "Faster growth ties up more cash simultaneously.",
    "Businesses with good economics still fail through payback and cash.",
    "Set your growth rate from the cash constraint as well as the profit one."
  ],
  selfCheck: [
    "I know my ratio and my payback period.",
    "My lifetime value is measured, not assumed.",
    "My growth rate accounts for the cash it ties up."
  ],
  quiz: [
    { q: "What does the payback period determine?", options: ["Profitability", "Whether growth is affordable, given the cash it ties up", "Customer satisfaction"], a: 1, why: "Long payback means large amounts of cash unrecovered during growth." },
    { q: "Why do businesses with good unit economics still fail?", options: ["Poor advertising", "Growing faster than their cash position supports during the payback period", "Bad products"], a: 1, why: "Profitability and cash flow are different things." },
    { q: "What must accompany any lifetime value figure?", options: ["A profit margin", "The period it covers", "The customer count"], a: 1, why: "Value over three years is a different figure from one year." }
  ],
  exercise: { task: "Calculate your acquisition cost, lifetime value over twelve months, the ratio, and your payback period in months. Then calculate how much cash would be tied up if you doubled your customer acquisition rate." },
  challenge: { task: "Build a growth affordability model: the three figures, the cash tied up at several growth rates, the maximum sustainable growth rate given your cash position, the effect of reducing payback period, and the financing required for faster growth." }
},

"9.34.3": {
  intro: "Optimising for profit rather than revenue changes what your advertising does. This lesson covers making that shift.",
  plain: [
    "Two customers spend 200 each. One buys a product that costs you 40 to supply. The other buys one that costs you 170. To your advertising system they look identical. To your business they are completely different.",
    "Profit based optimisation means telling the system the difference, so it stops treating them as the same."
  ],
  idea: [
    "The mechanism is to send profit rather than revenue as the value of your conversion events. Instead of reporting a purchase worth 200, you report one worth 160 and one worth 30, reflecting what you actually kept.",
    "The effect is that the system learns to find buyers of profitable products rather than buyers of any product. In businesses with varied margins this frequently changes the customer mix substantially.",
    "The practical requirements are that you know your margin by product, that this information is available at the moment the conversion is recorded, and that the system sending events can access it. For many businesses this is achievable, and for some it requires connecting the advertising data to the product cost data, which is a project rather than a setting change.",
    "There is an intermediate approach for businesses that cannot send exact profit. Group products into margin bands and send a representative value for each band. This is coarser and captures most of the benefit.",
    "One caution: sending profit rather than revenue makes your reported return figures look much worse, because the values are smaller. This is expected and correct, and it must be explained before anyone sees the reports, or the change will be reversed by someone alarmed at the apparent collapse."
  ],
  example: {
    title: "The reported collapse that was an improvement",
    body: "A retailer switched from sending revenue to sending contribution. Reported return fell from 4.1 to 1.6, which caused immediate alarm. Actual monthly profit rose 34 percent over the following quarter, because the system had shifted toward higher margin products. The reported number had become smaller and more honest at the same time."
  },
  steps: [
    "Establish your margin by product or product group.",
    "Make that information available at the point of conversion.",
    "Send contribution rather than revenue as the event value.",
    "If exact figures are impractical, use margin bands.",
    "Explain the expected fall in reported return before anyone sees it.",
    "Measure actual profit, not reported return, to judge the change."
  ],
  mistakes: [
    "Switching to profit values without warning anyone that reported returns will fall.",
    "Sending revenue when margins vary substantially between products.",
    "Judging the change by reported return rather than actual profit."
  ],
  words: [
    { t: "Profit based optimisation", d: "Sending contribution rather than revenue as the conversion value." },
    { t: "Margin band", d: "A group of products with similar margins, used when exact figures are impractical." },
    { t: "Reported return", d: "The figure Meta shows, which falls when you send smaller values." },
    { t: "Customer mix", d: "The proportion of customers buying different products." }
  ],
  takeaways: [
    "Sending profit teaches the system to find profitable customers.",
    "Margin bands are a workable approximation when exact figures are impractical.",
    "Reported return will fall, which is expected and correct.",
    "Judge the change by actual profit, not by the reported figure."
  ],
  selfCheck: [
    "I know my margin by product.",
    "I send values reflecting profit rather than revenue where margins vary.",
    "Everyone reading reports understands why the reported return is lower."
  ],
  quiz: [
    { q: "What happens to reported return when you send profit instead of revenue?", options: ["It rises", "It falls, because the values are smaller", "It stays the same"], a: 1, why: "Smaller values produce a smaller ratio, which is expected and correct." },
    { q: "What is the workable approximation when exact profit is impractical?", options: ["Sending revenue", "Grouping products into margin bands with representative values", "Sending nothing"], a: 1, why: "It captures most of the benefit with much less complexity." },
    { q: "How should the change be judged?", options: ["By reported return", "By actual business profit", "By conversion count"], a: 1, why: "Reported return necessarily falls, so it cannot measure the improvement." }
  ],
  exercise: { task: "Check whether your margins vary substantially between products. If they do, calculate what your average conversion value would be if you sent contribution rather than revenue." },
  challenge: { task: "Plan a migration to profit based optimisation: the margin data by product, the technical route to make it available at conversion, the exact or banded approach, the communication explaining the reported return change, the implementation, and the profit measurement proving the effect." }
},

"9.34.4": {
  intro: "Revenue and margin can be improved without changing your advertising at all. This lesson covers those levers.",
  plain: [
    "Every conversation about advertising performance assumes the price, the products and the offer are fixed, and only the advertising can change.",
    "Frequently the largest available improvement is on the other side: raising the average order value, improving the margin, or changing what is sold."
  ],
  idea: [
    "The levers that improve advertising economics without touching advertising are five.",
    "Price. A price increase flows almost entirely to contribution, because your costs barely change. A 10 percent price rise on a product with a 40 percent margin raises contribution by 25 percent, which is usually far more than any realistic advertising improvement.",
    "Average order value. Bundles, quantity discounts, free delivery thresholds and recommended additions all raise what each customer spends, which improves every advertising metric simultaneously.",
    "Product mix. Directing advertising toward higher margin products, as covered in the catalog module, changes economics without changing anything about the advertising itself.",
    "Cost reduction. Lower product, delivery or payment costs increase contribution directly.",
    "Repeat purchase. Improving how many customers buy again raises lifetime value, which raises what you can afford to spend acquiring them.",
    "The point of this lesson is not that advertisers should set prices. It is that when advertising economics are marginal, the conversation should include these levers rather than only asking the advertising to work harder."
  ],
  example: {
    title: "The price rise that fixed the advertising",
    body: "A business could not make advertising profitable at 89 per unit with a 34 percent margin. Every advertising improvement they tried produced small gains. They raised the price to 99, a change of about 11 percent. Contribution per unit rose by roughly a third, sales volume fell by 6 percent, and advertising became clearly profitable. The advertising had never been the problem."
  },
  steps: [
    "Calculate what a 10 percent price rise would do to your contribution.",
    "Compare that against the improvement a realistic advertising change would produce.",
    "Examine average order value and what would raise it.",
    "Check whether product mix could shift toward higher margins.",
    "Examine direct costs for reduction opportunities.",
    "Raise these options in the conversation when advertising economics are marginal."
  ],
  mistakes: [
    "Treating price, product and offer as fixed when they are the largest lever.",
    "Asking advertising to solve a margin problem it cannot solve.",
    "Never calculating what a modest price change would achieve."
  ],
  words: [
    { t: "Average order value", d: "What the typical customer spends in one transaction." },
    { t: "Product mix", d: "The proportion of sales across products with different margins." },
    { t: "Price elasticity", d: "How much volume falls when price rises." },
    { t: "Non advertising lever", d: "A change outside the ad account that improves advertising economics." }
  ],
  takeaways: [
    "A modest price rise frequently beats any realistic advertising improvement.",
    "Average order value improvements affect every advertising metric at once.",
    "Product mix and cost reduction change economics without changing advertising.",
    "When economics are marginal, these levers belong in the conversation."
  ],
  selfCheck: [
    "I have calculated what a price change would do to contribution.",
    "I have examined average order value opportunities.",
    "I raise these levers when advertising economics are marginal."
  ],
  quiz: [
    { q: "Why does a price rise flow largely to contribution?", options: ["Volume rises", "Your costs barely change, so most of the increase is kept", "Advertising becomes cheaper"], a: 1, why: "The extra revenue has almost no additional cost attached." },
    { q: "What does raising average order value improve?", options: ["Only revenue", "Every advertising metric simultaneously, since each customer is worth more", "Only margin"], a: 1, why: "Cost per customer stays the same while value rises." },
    { q: "What should happen when advertising economics are marginal?", options: ["Try harder on the advertising", "Include price, offer and margin levers in the conversation", "Reduce the budget"], a: 1, why: "The largest available improvement is frequently outside the ad account." }
  ],
  exercise: { task: "Calculate the effect on contribution of a 10 percent price rise, assuming a 6 percent fall in volume. Compare that against what a 15 percent improvement in cost per customer would achieve." },
  challenge: { task: "Build a non advertising improvement analysis: the price sensitivity assessment, the average order value opportunities with expected impact, the product mix shift potential, the cost reduction options, each quantified, and a comparison against realistic advertising improvements." }
},

"9.34.5": {
  intro: "For businesses selling through conversations, lead value and pipeline economics govern everything. This lesson covers calculating them.",
  plain: [
    "A lead is not worth what a customer is worth. It is worth what a customer is worth multiplied by the chance this lead becomes one.",
    "If a customer is worth 3,000 and one lead in twelve becomes a customer, then a lead is worth 250. That single number tells you what you can afford to pay for one."
  ],
  idea: [
    "The calculation is straightforward once you have the conversion rate. Customer value multiplied by lead to customer rate equals lead value. This is the number that sets your acceptable cost per lead.",
    "The refinement that matters is that not all leads are equal. Leads from different sources, different campaigns and different qualification answers convert at different rates, and therefore have different values. Calculating a single blended lead value hides this and produces poor allocation.",
    "The pipeline view adds the stages between. A lead has a value. A qualified lead has a higher value because it is more likely to close. An opportunity has a higher value still. Knowing the value at each stage lets you calculate acceptable costs at each stage and identify where the pipeline is leaking most expensively.",
    "There is also a time dimension. A lead that converts in three weeks and one that converts in nine months have the same eventual value and very different cash implications, which affects how aggressively you can pursue each.",
    "The practical use is allocation. When you know that leads from campaign A are worth 250 and from campaign B are worth 90, you can pay proportionally, and the decision becomes arithmetic rather than argument."
  ],
  example: {
    title: "Two campaigns, two lead values",
    body: "A business calculated lead value by campaign. Campaign A produced leads converting at 14 percent, worth 420 each. Campaign B produced leads converting at 3 percent, worth 90 each. They had been paying roughly the same cost per lead for both and judging them equally. Reallocating budget according to lead value raised customers per month by 40 percent on the same total spend."
  },
  steps: [
    "Calculate your customer value.",
    "Measure your lead to customer rate.",
    "Multiply to get lead value.",
    "Repeat separately by campaign and by qualification answer.",
    "Calculate the value at each pipeline stage.",
    "Allocate budget according to lead value rather than lead cost."
  ],
  mistakes: [
    "Using one blended lead value across sources with very different conversion rates.",
    "Setting an acceptable cost per lead without calculating what a lead is worth.",
    "Ignoring the time to conversion, which has cash implications."
  ],
  words: [
    { t: "Lead value", d: "Customer value multiplied by the chance a lead becomes a customer." },
    { t: "Lead to customer rate", d: "The proportion of leads that eventually buy." },
    { t: "Pipeline stage value", d: "What a lead is worth at each stage of progression." },
    { t: "Blended value", d: "One average lead value hiding large differences between sources." }
  ],
  takeaways: [
    "Lead value is customer value multiplied by conversion rate.",
    "Calculate separately by campaign, since rates differ enormously.",
    "Stage values show where the pipeline leaks most expensively.",
    "Allocate budget by lead value, which makes the decision arithmetic."
  ],
  selfCheck: [
    "I know my lead value.",
    "I have calculated it separately by campaign.",
    "My budget allocation reflects lead value differences."
  ],
  quiz: [
    { q: "A customer is worth 3,000 and one lead in twelve converts. What is a lead worth?", options: ["3,000", "250", "36,000"], a: 1, why: "Customer value divided by twelve, or multiplied by the conversion rate." },
    { q: "Why calculate lead value by campaign?", options: ["For reporting", "Conversion rates differ enormously, so lead values differ enormously", "Meta requires it"], a: 1, why: "A blended figure produces poor allocation." },
    { q: "What should set your acceptable cost per lead?", options: ["Industry benchmarks", "The calculated value of a lead from that source", "Your competitor's cost"], a: 1, why: "Only your own value determines what you can afford." }
  ],
  exercise: { task: "Calculate lead value for your two largest campaigns separately, using their actual lead to customer rates. Compare against what you currently pay per lead for each." },
  challenge: { task: "Build a pipeline economics model: customer value, conversion rates by stage and by campaign, lead values at each stage, acceptable costs at each stage, the leak analysis showing where value is lost most expensively, and the budget allocation the model implies." }
},

"9.34.6": {
  intro: "Businesses with several products must decide how to split advertising between them. This lesson covers doing it on evidence.",
  plain: [
    "Most businesses allocate advertising budget across products by habit, by internal politics, or by which product the person in charge likes most.",
    "There is an arithmetic answer, and it is usually different from the habitual one."
  ],
  idea: [
    "The correct basis is contribution produced per unit of advertising spend, at the margin. Not revenue, not sales count, and not average return, but the additional contribution the next amount of spending would produce on each product.",
    "This requires knowing three things per product: the contribution per sale, the current cost per sale, and roughly how that cost changes as spending increases. The third is the elasticity concept from Level 7, applied per product.",
    "The practical method is simpler than it sounds. Rank your products by contribution per advertising unit spent. Move budget from the bottom of the list toward the top in steps, measuring after each step. Continue while the reallocation improves total contribution.",
    "Two complications are worth handling. Products with strategic value beyond their direct contribution, such as a product that brings customers who then buy others, should be assessed on total customer value rather than the individual sale. And products with limited stock or capacity should not receive budget beyond what they can supply.",
    "The organisational difficulty is usually greater than the analytical one. Product owners rarely accept losing budget, and the reallocation needs to be presented as arithmetic with the numbers visible, not as a judgement about whose product matters."
  ],
  example: {
    title: "Ranked by contribution",
    body: "A business with six product lines ranked them by contribution produced per advertising unit. The top line produced 4.10 of contribution per unit spent, the bottom produced 0.30. Budget had been allocated roughly evenly. Reallocating in three steps over two months, moving budget upward through the ranking, raised total contribution by 61 percent on unchanged total spend."
  },
  steps: [
    "Calculate contribution per sale for each product.",
    "Calculate current cost per sale for each.",
    "Calculate contribution produced per advertising unit spent.",
    "Rank the products by that figure.",
    "Move budget upward through the ranking in steps.",
    "Adjust for strategic value and capacity constraints."
  ],
  mistakes: [
    "Allocating by revenue rather than contribution.",
    "Ignoring products whose customers go on to buy other things.",
    "Moving budget to a product that cannot supply the demand."
  ],
  words: [
    { t: "Contribution per advertising unit", d: "How much contribution each unit of spend produces on a product." },
    { t: "Strategic product", d: "One whose value includes bringing customers who buy other things." },
    { t: "Capacity constraint", d: "A limit on how much of a product can be supplied." },
    { t: "Reallocation", d: "Moving budget between products according to their productivity." }
  ],
  takeaways: [
    "Allocate by contribution produced per advertising unit, not by revenue.",
    "Rank products and move budget upward through the ranking in steps.",
    "Adjust for strategic value and capacity limits.",
    "Present reallocation as visible arithmetic, not as a judgement about products."
  ],
  selfCheck: [
    "I have ranked my products by contribution per advertising unit.",
    "My allocation reflects that ranking.",
    "I have accounted for strategic value and capacity."
  ],
  quiz: [
    { q: "What should budget allocation across products be based on?", options: ["Revenue produced", "Contribution produced per unit of advertising spend", "Sales count"], a: 1, why: "Revenue ignores what you keep from each sale." },
    { q: "Which products need special handling?", options: ["The cheapest", "Those bringing customers who then buy other things, and those with capacity limits", "The newest"], a: 1, why: "Their true value or their supply differs from the simple calculation." },
    { q: "How should reallocation be presented?", options: ["As a management decision", "As visible arithmetic with the numbers shown", "As a trial"], a: 1, why: "It removes the appearance of a judgement about whose product matters." }
  ],
  exercise: { task: "Rank your products by contribution produced per advertising unit spent. Compare the ranking against your current budget allocation and note the largest mismatch." },
  challenge: { task: "Build a product allocation model: contribution and cost per sale by product, the productivity ranking, the strategic value adjustments, the capacity constraints, the stepped reallocation plan, and the presentation making the arithmetic visible to product owners." }
},

"9.34.7": {
  intro: "Portfolio thinking means treating your advertising as a set of investments with different risk and return. This lesson covers it.",
  plain: [
    "Some of your spending is reliable and produces steady, known returns. Some is exploratory and might produce nothing or might find your next major channel.",
    "Treating both the same way means either abandoning exploration because it looks unprofitable, or funding too much of it and destabilising your reliable performance.",
    "A portfolio approach allocates deliberately across both."
  ],
  idea: [
    "The standard division is three parts. Core, meaning proven activity with known returns, which should carry the majority of spend. Growth, meaning expansion of things that work into new audiences, markets or products, with reasonable confidence but less certainty. And exploration, meaning genuinely new things that may fail entirely.",
    "A common allocation is roughly 70 percent core, 20 percent growth and 10 percent exploration, though the right split depends on how mature your business is and how quickly your market changes.",
    "The essential discipline is judging each part by its own standard. Exploration judged by the returns expected from core will always look like failure, and will be cut, after which the business stops finding new things and slowly declines as its core activity saturates.",
    "The exploration budget should be treated as an expected cost with occasional large payoffs, in the same way research spending is treated in other businesses. Most of it produces nothing. The occasional success pays for years of the rest.",
    "The practical safeguard is to fix the exploration budget as a percentage rather than approving individual experiments, which removes the repeated argument about whether each specific test is justified."
  ],
  example: {
    title: "The exploration that paid for a decade",
    body: "A business allocated 10 percent to exploration for three years. Most of it produced nothing: four channels that failed, several creative directions that did not work, two market tests abandoned. In year three one exploration found a customer segment nobody had considered, which became 40 percent of their revenue within eighteen months. Judged individually, almost every exploration had been a waste. Judged as a portfolio, it was the best money they spent."
  },
  steps: [
    "Divide your spending into core, growth and exploration.",
    "Set the allocation deliberately, around 70, 20 and 10 as a starting point.",
    "Judge each part by its own standard, not by core returns.",
    "Fix the exploration budget as a percentage rather than approving each test.",
    "Expect most exploration to fail and record what was learned.",
    "Move successful exploration into growth and then into core."
  ],
  mistakes: [
    "Judging exploration by core standards, which guarantees it gets cut.",
    "Approving exploration case by case, which produces repeated arguments and eventual abandonment.",
    "Allocating everything to core, which works until the core saturates."
  ],
  words: [
    { t: "Core", d: "Proven activity with known returns." },
    { t: "Growth", d: "Expansion of proven activity into new areas." },
    { t: "Exploration", d: "Genuinely new activity that may fail entirely." },
    { t: "Portfolio allocation", d: "Deliberately splitting spend across different risk levels." }
  ],
  takeaways: [
    "Three parts: core, growth and exploration, each judged by its own standard.",
    "Roughly 70, 20 and 10 as a starting allocation.",
    "Exploration judged by core standards will always be cut.",
    "Fix exploration as a percentage rather than approving each test."
  ],
  selfCheck: [
    "My spending is divided into the three parts deliberately.",
    "Exploration is judged by its own standard.",
    "The exploration budget is fixed rather than approved case by case."
  ],
  quiz: [
    { q: "What happens when exploration is judged by core standards?", options: ["It improves", "It always looks like failure and gets cut", "Nothing"], a: 1, why: "Exploration is expected to fail most of the time." },
    { q: "Why fix exploration as a percentage?", options: ["It is simpler to calculate", "It removes the repeated argument about whether each individual test is justified", "Meta requires it"], a: 1, why: "Case by case approval leads to exploration being abandoned." },
    { q: "What is the risk of allocating everything to core?", options: ["Immediate losses", "It works until the core saturates, after which there is nothing new to grow into", "Higher costs"], a: 1, why: "Businesses that stop exploring decline slowly as their proven activity exhausts." }
  ],
  exercise: { task: "Categorise your current spending into core, growth and exploration. Calculate the actual percentages and compare against 70, 20 and 10." },
  challenge: { task: "Build a portfolio allocation framework: the three categories with definitions, the target allocation with reasoning, the separate success standards for each, the exploration governance, the graduation criteria moving things from exploration to growth to core, and the annual review." }
},

"9.34.8": {
  intro: "Forecasting and scenario planning let you decide before circumstances force you to. This lesson covers doing both practically.",
  plain: [
    "A forecast is your best estimate of what will happen. Scenario planning is preparing for the versions where you are wrong.",
    "The value is not accuracy. It is that you have already thought about what you would do, so when circumstances change you act rather than debate."
  ],
  idea: [
    "The forecast should cover spend, cost per customer, customers and contribution, monthly for at least six months, with seasonality and diminishing returns built in as covered in Level 4.",
    "Scenario planning adds two more versions. A downside where things go worse: costs rise 30 percent, or volume falls, or a competitor enters. And an upside where things go better than expected.",
    "For each scenario, the question is what you would do. In the downside: what gets cut first, what is protected, at what point do you stop advertising entirely. In the upside: can you supply the demand, do you have the cash, what would you spend the additional money on.",
    "The upside planning is more often neglected and frequently more valuable, because businesses that cannot handle success waste the opportunity. A campaign that works far better than expected and produces more enquiries than the business can serve is a failure in practice.",
    "The practical output is a small number of trigger points with predetermined actions. If cost per customer exceeds a stated figure for two consecutive weeks, we do this. If volume exceeds a stated level, we do that. Deciding in advance removes the delay and the argument that otherwise consume the moment when action matters."
  ],
  example: {
    title: "The plan that was already made",
    body: "A business wrote three scenarios with trigger points. Four months later a competitor entered with heavy spending and their costs rose 40 percent within three weeks. Because the downside plan existed, they executed it within two days: paused two campaigns, protected the core, shifted to a different audience segment. Competitors in the same market spent six weeks debating before acting, and lost considerably more."
  },
  steps: [
    "Build the expected forecast with seasonality and diminishing returns.",
    "Build a downside scenario with specific adverse assumptions.",
    "Build an upside scenario.",
    "For each, decide what you would do, specifically.",
    "Define trigger points that would tell you which scenario you are in.",
    "Review monthly against actual results and update."
  ],
  mistakes: [
    "Planning only for the expected case.",
    "Neglecting the upside, so unexpected success is wasted.",
    "Defining scenarios without deciding the actions, which leaves you debating when it matters."
  ],
  words: [
    { t: "Forecast", d: "Your expected case, written in advance." },
    { t: "Scenario", d: "An alternative version of the future with different assumptions." },
    { t: "Trigger point", d: "A measurable condition indicating which scenario is occurring." },
    { t: "Predetermined action", d: "What you decided in advance to do in each scenario." }
  ],
  takeaways: [
    "Forecast the expected case, then plan the downside and the upside.",
    "The value is deciding actions in advance, not forecasting accurately.",
    "Upside planning is neglected and frequently more valuable.",
    "Define trigger points so you know which scenario you are in."
  ],
  selfCheck: [
    "I have a written forecast with seasonality and diminishing returns.",
    "I have downside and upside scenarios with specific actions.",
    "I have defined trigger points."
  ],
  quiz: [
    { q: "What is the main value of scenario planning?", options: ["Forecasting accurately", "Having decided the actions in advance so you act rather than debate", "Satisfying management"], a: 1, why: "Speed of response matters more than prediction accuracy." },
    { q: "Which scenario is most often neglected?", options: ["The downside", "The upside, so unexpected success is wasted", "The expected case"], a: 1, why: "Businesses that cannot handle success lose the opportunity." },
    { q: "What is a trigger point?", options: ["A budget limit", "A measurable condition indicating which scenario is occurring", "A campaign setting"], a: 1, why: "It tells you when to execute a predetermined plan." }
  ],
  exercise: { task: "Write three scenarios for the next six months: expected, a downside with costs 30 percent higher, and an upside with double the volume. For each, write down specifically what you would do." },
  challenge: { task: "Build a scenario planning document: the expected forecast, the downside and upside scenarios with their assumptions, the specific actions for each, the trigger points with thresholds, the responsible owners, and the monthly review comparing actual against expected." }
},

"9.34.9": {
  intro: "This final lesson of the module covers the trade-offs that cannot be avoided, only chosen.",
  plain: [
    "Some decisions in advertising have no correct answer, only a choice with consequences. Pretending otherwise produces endless argument.",
    "Recognising a genuine trade-off, naming it, and choosing deliberately is a large part of doing this work well."
  ],
  idea: [
    "The main trade-offs are five.",
    "Growth against efficiency. Spending more produces more customers at higher cost. You can have volume or you can have low cost per customer, not both.",
    "Short term against long term. Retargeting produces quick returns and exhausts the audience. Prospecting is slower and builds the pool everything else depends on.",
    "Certainty against opportunity. Proven activity is safe and eventually saturates. Exploration is uncertain and is where future growth comes from.",
    "Control against automation. Manual control gives understanding and usually worse results. Automation gives better results and less understanding.",
    "Simplicity against precision. A simple account is easier to manage and learns faster. A complex one can address more situations and frequently learns nothing because everything is too thin.",
    "The practical discipline is threefold. Recognise which trade-off you are facing, because most arguments are actually disagreements about which side to choose. Make the choice explicitly rather than drifting. And write it down, because unwritten choices get relitigated every month."
  ],
  example: {
    title: "Naming the trade-off ended the argument",
    body: "A team argued for a year about whether to run more campaigns. One side wanted precision for different customer types. The other wanted simplicity for faster learning. Neither was wrong. Once they named it as the simplicity against precision trade-off and wrote down a choice, with a review date, the argument stopped. They chose simplicity, recorded why, and revisited it a year later when their volume had tripled and precision had become affordable."
  },
  steps: [
    "Learn to recognise the five main trade-offs.",
    "When an argument recurs, identify which trade-off it is about.",
    "Make the choice explicitly, with the reasoning.",
    "Write it down with a review date.",
    "Judge results against the choice you made, not the other side.",
    "Revisit at the review date, since the right choice changes as the business changes."
  ],
  mistakes: [
    "Trying to have both sides of a genuine trade-off.",
    "Leaving the choice unwritten, so it is relitigated repeatedly.",
    "Never revisiting, when the correct choice changes as circumstances change."
  ],
  words: [
    { t: "Trade-off", d: "A choice where gaining one thing necessarily costs another." },
    { t: "Explicit choice", d: "A decision made and recorded deliberately rather than drifted into." },
    { t: "Relitigation", d: "Repeatedly reopening a decision that was never properly recorded." },
    { t: "Review date", d: "The point at which the choice is deliberately reconsidered." }
  ],
  takeaways: [
    "Five main trade-offs, none of which can be avoided.",
    "Most recurring arguments are disagreements about which side to choose.",
    "Make the choice explicitly and write it down with a review date.",
    "The right choice changes as the business changes, so revisit deliberately."
  ],
  selfCheck: [
    "I can name the five trade-offs.",
    "My choices are written down with reasoning.",
    "Each has a review date."
  ],
  quiz: [
    { q: "What causes most recurring advertising arguments?", options: ["Poor data", "Disagreement about which side of a genuine trade-off to choose", "Personality clashes"], a: 1, why: "Both sides are often correct about their own priority." },
    { q: "Why write the choice down?", options: ["For compliance", "Unwritten choices get relitigated repeatedly", "To assign blame"], a: 1, why: "A recorded decision with reasoning ends the recurring argument." },
    { q: "Why set a review date?", options: ["To satisfy process", "The right choice changes as the business changes", "To allow appeals"], a: 1, why: "A choice correct at one scale may be wrong at another." }
  ],
  exercise: { task: "Identify a recurring argument in your business and work out which of the five trade-offs it is about. Write down the choice, the reasoning, and a review date." },
  challenge: { task: "Produce a strategic choices document: each of the five trade-offs, your current position on each with reasoning, the evidence supporting it, the conditions that would change the choice, the review dates, and how the choices connect to your overall business strategy." }
}

});
