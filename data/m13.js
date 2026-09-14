/* Module 13 - Budgeting (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"4.13.1": {
  intro: "Your budget is the instruction that tells Meta how much to spend. It sounds simple, and the way you set it quietly decides how fast you learn and how stable your results are.",
  idea: [
    "A budget is not a target. It is a limit. Meta will try to spend the whole amount every day, because unspent budget is a missed opportunity from the system's point of view.",
    "The first principle is that budget and results are connected through learning. A budget too small for your cost per result means too few results per week, which means the ad set never becomes steady. The rough guide from earlier still applies: aim for around 50 results a week per ad set.",
    "The practical calculation is easy. If your cost per result is 20, and you want 50 results a week, you need 1,000 a week, which is about 143 a day for that ad set. If you cannot afford that, you must either accept a slower learning period, choose a cheaper optimisation event, or run fewer ad sets.",
    "The second principle is stability. Large sudden changes disturb delivery. The system paces spending across the day based on the budget it was given, so doubling a budget at 2pm creates a scramble to spend the rest."
  ],
  example: {
    title: "The budget that could not work",
    body: "A business set four ad sets at 10 a day each with a cost per purchase of 35. That is roughly two purchases per week per ad set, against the 50 needed. Nothing ever stabilised and results looked random for months. Combining into one ad set at 40 a day produced eight purchases a week, still short, but learning progressed and cost per purchase fell to 24 within six weeks."
  },
  steps: [
    "Find your current cost per result.",
    "Multiply by 50 to find the weekly budget one ad set needs.",
    "Divide by 7 for the daily amount.",
    "Compare with what you can afford, and decide how many ad sets that allows.",
    "Set budgets and leave them alone for at least three to four days.",
    "Change budgets in steps, not in leaps."
  ],
  mistakes: [
    "Spreading a small budget across many ad sets.",
    "Treating the budget as a target to hit rather than a limit to set.",
    "Changing budgets daily, which keeps delivery unsettled."
  ],
  words: [
    { t: "Budget", d: "The maximum you allow to be spent in a day or over a period." },
    { t: "Pacing", d: "How the system spreads spending across the day." },
    { t: "Minimum viable budget", d: "The smallest amount that still produces enough results to learn from." }
  ],
  takeaways: [
    "Budget is a limit, not a target.",
    "Aim for roughly 50 results per week per ad set.",
    "Cost per result multiplied by 50 gives the weekly budget you need.",
    "Change budgets in steps and leave them to settle."
  ],
  selfCheck: [
    "I have calculated the minimum budget one ad set needs.",
    "My number of ad sets matches what my budget can feed.",
    "I do not change budgets daily."
  ],
  quiz: [
    { q: "Your cost per result is 12. Roughly what weekly budget does one ad set need?", options: ["About 120", "About 600", "About 60"], a: 1, why: "50 results multiplied by 12 is 600 per week for that ad set." },
    { q: "What is a budget, from the system's point of view?", options: ["A target to reach", "A limit it will try to spend fully each day", "A suggestion"], a: 1, why: "The system aims to spend the full amount, because unspent budget is lost opportunity." },
    { q: "What happens when a small budget is split across many ad sets?", options: ["Faster learning", "No ad set gets enough results to stabilise", "Lower CPM"], a: 1, why: "Thin data in many places prevents learning everywhere." }
  ],
  exercise: { task: "Calculate your minimum viable daily budget: cost per result multiplied by 50, divided by 7. Compare it with what each of your ad sets currently receives and note every one that is underfunded." },
  challenge: { task: "Build a budget plan for your account: the total, the number of ad sets it can properly support, the amount each receives, the reasoning, and the trigger points at which you would add another ad set." }
},

"4.13.2": {
  intro: "You can set a budget per day or for a whole period. This lesson explains the difference and when each one is right.",
  idea: [
    "A daily budget is an amount to spend each day. In practice the system may spend up to about 25 percent more on a good day and less on a weak one, balancing over the week.",
    "A lifetime budget is a total for the whole period, and the system decides how to distribute it across the days. This allows it to spend more when opportunities are good and less when they are not.",
    "Daily is right for ongoing campaigns with no end date, which is most advertising. It is simple, predictable and easy to adjust.",
    "Lifetime is right in two situations. When you have a fixed total to spend by a fixed date, such as an event or a product launch. And when you want to use scheduling, meaning running only at certain hours, which requires a lifetime budget."
  ],
  example: {
    title: "Fixed total, fixed date",
    body: "A concert promoter had 9,000 to spend over 21 days before the event. With a daily budget they would have spent about 430 each day regardless of demand. With a lifetime budget the system spent lightly in the first week and heavily in the final five days, when ticket buying intent rose sharply. Same total, 34 percent more tickets sold."
  },
  steps: [
    "Decide whether your campaign has a fixed end date and a fixed total.",
    "If yes, use a lifetime budget.",
    "If it is ongoing, use a daily budget.",
    "If you need hour scheduling, use a lifetime budget.",
    "With lifetime budgets, avoid editing mid-flight, which redistributes the remaining amount.",
    "With daily budgets, expect natural day to day variation."
  ],
  mistakes: [
    "Panicking when a daily budget overspends slightly on one day.",
    "Using a lifetime budget for an ongoing campaign, then editing it constantly.",
    "Forgetting that scheduling by hour requires a lifetime budget."
  ],
  words: [
    { t: "Daily budget", d: "An amount to spend each day, with some natural variation." },
    { t: "Lifetime budget", d: "A total for the whole period, distributed by the system." },
    { t: "Dayparting", d: "Running ads only at certain hours of the day." }
  ],
  takeaways: [
    "Daily suits ongoing campaigns. Lifetime suits fixed totals and end dates.",
    "Daily budgets vary by up to about 25 percent on any given day.",
    "Hour scheduling requires a lifetime budget.",
    "Editing a lifetime budget mid-flight redistributes what remains."
  ],
  selfCheck: [
    "I know which budget type each of my campaigns uses and why.",
    "I do not panic at normal daily variation.",
    "I use lifetime budgets where a fixed date genuinely applies."
  ],
  quiz: [
    { q: "When is a lifetime budget the right choice?", options: ["For all campaigns", "When you have a fixed total to spend by a fixed date", "Never"], a: 1, why: "It lets the system distribute the total across the period intelligently." },
    { q: "How much can a daily budget vary on one day?", options: ["Not at all", "Up to roughly 25 percent above the set amount", "Double"], a: 1, why: "The system balances across the week, spending more on stronger days." },
    { q: "What does hour scheduling require?", options: ["A daily budget", "A lifetime budget", "A special permission"], a: 1, why: "Scheduling by hour is only available with a lifetime budget." }
  ],
  exercise: { task: "Review each campaign and write down whether its budget type matches its purpose. Change any that are wrong and note why." },
  challenge: { task: "Plan a product launch with a fixed total and a fixed date: the budget type, the distribution you expect, how you would handle a mid-flight change in demand, and how you would measure whether lifetime distribution helped." }
},

"4.13.3": {
  intro: "Campaign Budget Optimisation means putting the budget at campaign level and letting the system share it between ad sets. This lesson explains when it helps and when it causes problems.",
  idea: [
    "Normally each ad set has its own budget. With campaign level budgeting, the campaign holds one budget and the system gives more of it to whichever ad set is producing results most cheaply, hour by hour.",
    "The advantage is efficiency. Money flows to what is working without you doing anything, and it responds faster than any human could.",
    "The disadvantage is control. If you need a guaranteed minimum spend on a particular audience, campaign budgeting will not respect that by default. It may starve an ad set you care about because it is slightly more expensive today.",
    "The main practical problem is unequal audience sizes. If one ad set has a huge broad audience and another has a small retargeting audience, the system will usually pour money into the large one, because it can find cheap results there. The small audience gets almost nothing, even though it might be valuable. Keeping ad sets comparable in size and purpose avoids most of this."
  ],
  example: {
    title: "The starved ad set",
    body: "A campaign contained one broad prospecting ad set and one retargeting ad set with 30,000 people. Under campaign budgeting, prospecting took 94 percent of the budget, because retargeting exhausted its small audience quickly and became expensive. Splitting them into separate campaigns with their own budgets restored a sensible balance."
  },
  steps: [
    "Decide whether you need guaranteed spend on any specific audience.",
    "If yes, use ad set budgets or separate campaigns.",
    "If not, use campaign budgeting with ad sets of comparable size.",
    "Keep prospecting and retargeting in separate campaigns.",
    "Use minimum or maximum spend limits per ad set if you need some control.",
    "Review the distribution weekly to check it matches your intentions."
  ],
  mistakes: [
    "Mixing very different audience sizes under one campaign budget.",
    "Mixing prospecting and retargeting under one campaign budget.",
    "Assuming the system's distribution always matches your business priorities."
  ],
  words: [
    { t: "Campaign Budget Optimisation", d: "One budget at campaign level, shared automatically between ad sets." },
    { t: "Spend limit", d: "A minimum or maximum you can set for an individual ad set." },
    { t: "Distribution", d: "How the budget actually ended up being shared." }
  ],
  takeaways: [
    "Campaign budgeting moves money to what works, faster than you can.",
    "It costs you control over guaranteed spend.",
    "Keep ad sets comparable in size and purpose inside one campaign.",
    "Keep prospecting and retargeting in separate campaigns."
  ],
  selfCheck: [
    "My campaign budgeted campaigns contain comparable ad sets.",
    "Prospecting and retargeting are in separate campaigns.",
    "I review the actual distribution weekly."
  ],
  quiz: [
    { q: "What is the main risk of campaign level budgeting?", options: ["Higher CPM", "Ad sets you care about can be starved of budget", "Slower approval"], a: 1, why: "The system optimises for cheap results, not for your strategic priorities." },
    { q: "What should not be mixed under one campaign budget?", options: ["Two similar prospecting audiences", "Prospecting and a small retargeting audience", "Two creative tests"], a: 1, why: "Very different audience sizes produce very unequal distribution." },
    { q: "How can you retain some control?", options: ["Pausing ad sets daily", "Using minimum or maximum spend limits per ad set", "Changing the objective"], a: 1, why: "Spend limits constrain the distribution without removing the automation." }
  ],
  exercise: { task: "Check your campaign budgeted campaigns and look at how the budget was actually distributed last week. Note any ad set receiving almost nothing and decide whether that is acceptable." },
  challenge: { task: "Design a budgeting structure for an account with prospecting, retargeting and a test campaign: where budgets sit, why, what spend limits are used, and how you would detect and respond to unwanted distribution." }
},

"4.13.4": {
  intro: "When budgets sit at ad set level, you decide how much each audience receives. This lesson covers how to make those decisions sensibly.",
  idea: [
    "Ad set budgets give you control, which is valuable when different audiences serve different purposes and you do not want the system deciding which matters.",
    "The starting allocation should follow purpose, not performance. Prospecting usually receives 70 to 85 percent because it feeds everything else. Retargeting receives a small amount because its audience is small. Testing receives a fixed small share, often 10 percent.",
    "Once running, adjust based on results, but slowly and with a rule. A useful rule: review weekly, and move no more than 20 to 30 percent of an ad set's budget at a time.",
    "The important discipline is not to chase the best looking number. Retargeting will almost always look best, and moving budget toward it repeatedly will slowly starve the prospecting that creates the retargeting audience in the first place."
  ],
  example: {
    title: "A weekly allocation review",
    body: "Prospecting at 300 a day producing purchases at 42. Retargeting at 60 a day producing purchases at 11. The tempting move is to shift money to retargeting. The correct move, given a retargeting audience of only 40,000, is to leave it. The team instead raised prospecting by 20 percent, which grew the retargeting pool and increased total purchases by 18 percent the following month."
  },
  steps: [
    "Allocate first by purpose: prospecting, retargeting, testing.",
    "Set the initial split at roughly 75, 15 and 10 percent.",
    "Review weekly, not daily.",
    "Move no more than 20 to 30 percent of an ad set's budget at once.",
    "Check the retargeting audience size before increasing its budget.",
    "Judge changes by total results, not by the ratio of one ad set."
  ],
  mistakes: [
    "Chasing the best looking cost per result and starving prospecting.",
    "Moving large amounts of budget at once.",
    "Reviewing daily, which produces constant disturbance."
  ],
  words: [
    { t: "Allocation", d: "How the total budget is divided between ad sets." },
    { t: "Purpose based allocation", d: "Dividing budget by the job each ad set does." },
    { t: "Budget step", d: "The size of a single budget change." }
  ],
  takeaways: [
    "Allocate by purpose first, then adjust by results.",
    "Roughly 75 percent prospecting, 15 percent retargeting, 10 percent testing.",
    "Move budget in steps of 20 to 30 percent, weekly.",
    "Total results decide, not the ratio of any single ad set."
  ],
  selfCheck: [
    "My allocation follows purpose, not just performance.",
    "I review weekly and move budget in controlled steps.",
    "I check audience size before increasing retargeting."
  ],
  quiz: [
    { q: "What should the initial allocation follow?", options: ["Whichever ad set looks best", "The purpose of each ad set", "Equal shares always"], a: 1, why: "Purpose reflects the job each part does in the system as a whole." },
    { q: "How much budget should move at once?", options: ["All of it", "No more than about 20 to 30 percent of that ad set", "Exactly half"], a: 1, why: "Large moves disturb delivery and restart learning." },
    { q: "Why not move budget to retargeting when it looks better?", options: ["Meta forbids it", "Its audience is small and it depends on prospecting to exist", "Retargeting is always bad"], a: 1, why: "Starving prospecting shrinks the pool retargeting draws from." }
  ],
  exercise: { task: "Write down your current allocation as percentages by purpose. Compare it to 75, 15 and 10, and write the reason for any difference." },
  challenge: { task: "Create an allocation policy: the target split by purpose, the review schedule, the maximum step size, the rules for when retargeting may increase, and how you will judge whether reallocation improved total results." }
},

"4.13.5": {
  intro: "Pacing is how the system spreads your budget across the day. Understanding it explains several confusing things about delivery.",
  idea: [
    "The system does not spend your budget as fast as possible. It plans across the whole day, aiming to find good opportunities throughout rather than exhausting the money in the first two hours.",
    "This is why spending looks slow in the morning and accelerates later, and why a new ad set often spends very little in its first hours. The system is being careful while it learns.",
    "Pacing also explains underspending. If your ad set cannot find enough suitable opportunities at an acceptable cost, it will simply not spend the full budget. That is usually a signal that your audience is too small, your bid control is too tight, or your ad is not competitive enough to win auctions.",
    "The practical rule: underspending is information, not a bug. Before raising the budget, find out why the current budget is not being used."
  ],
  example: {
    title: "Reading underspend",
    body: "An ad set with a 200 daily budget spent only 60. The advertiser raised the budget to 400, and it spent 58. The problem was a cost control set too low, so the system could not win auctions at that price. Raising the cost control allowed the original 200 to spend fully. The budget had never been the limit."
  },
  steps: [
    "Check the actual spend against the budget for each ad set.",
    "If spend is well below budget, do not raise the budget.",
    "Check the audience size first.",
    "Check whether a bid or cost control is limiting delivery.",
    "Check whether the ad is competitive, using click rate and quality signals.",
    "Fix the real cause, then see whether spending rises on its own."
  ],
  mistakes: [
    "Raising the budget in response to underspending.",
    "Judging delivery by the morning's numbers.",
    "Assuming underspending means the audience is exhausted, without checking the cost controls."
  ],
  words: [
    { t: "Pacing", d: "How the system distributes spending across the day." },
    { t: "Underdelivery", d: "Spending less than the budget allows." },
    { t: "Cost control", d: "A limit on what you are willing to pay per result." }
  ],
  takeaways: [
    "The system paces spending across the whole day deliberately.",
    "Morning numbers are not representative of the day.",
    "Underspending is a signal, not a fault.",
    "Never raise a budget that is not being spent."
  ],
  selfCheck: [
    "I compare actual spend against budget for each ad set.",
    "I investigate underspending rather than raising budgets.",
    "I do not judge the day by the morning."
  ],
  quiz: [
    { q: "An ad set spends far less than its budget. What should you do first?", options: ["Raise the budget", "Find out why: audience size, cost controls, or ad competitiveness", "Pause it"], a: 1, why: "If the budget is not the limit, raising it changes nothing." },
    { q: "Why does spending look slow in the morning?", options: ["Fewer people are online", "The system paces across the whole day rather than spending early", "Billing has not started"], a: 1, why: "It preserves budget for opportunities later in the day." },
    { q: "Underdelivery usually points to...", options: ["A Meta error", "An audience, cost control or competitiveness problem", "The wrong currency"], a: 1, why: "These three causes account for the large majority of cases." }
  ],
  exercise: { task: "For each ad set, compare yesterday's spend with its budget. For any spending under 80 percent, write down which of the three causes you suspect and how you would check." },
  challenge: { task: "Write an underdelivery diagnostic guide: the checks in order, the evidence that points to each cause, the fix for each, and the expected time before delivery recovers." }
},

"4.13.6": {
  intro: "Spending and results move around from day to day even when nothing changes. This lesson explains why, and how to tell normal variation from a real problem.",
  idea: [
    "Volatility is normal. Auction prices change as competitors enter and leave. People behave differently on different days. Your audience is not available in the same numbers every hour.",
    "A useful expectation: daily cost per result can reasonably vary by 30 to 50 percent either way in a small account, and less in a large one. Weekly figures are much steadier than daily ones, which is why weekly is the right unit for most decisions.",
    "Certain periods are predictably more expensive. Major shopping events, holidays and election periods raise competition sharply. If your costs rise in late November, the most likely explanation is that every retailer in your market raised their budgets.",
    "The practical discipline is to compare like with like. This Tuesday against last Tuesday, this week against last week, this month against the same month last year. Comparing a quiet Sunday with a busy Friday tells you nothing about your advertising."
  ],
  example: {
    title: "The panic that was not needed",
    body: "Cost per lead rose from 14 to 23 in two days and the team rebuilt the campaign. The following week, costs returned to 15 with the rebuilt campaign performing worse than the original because it had lost its learning. The two expensive days had been a local holiday weekend, which they discovered afterwards by comparing against the same weekend the previous year."
  },
  steps: [
    "Establish your normal range by looking at the last eight weeks.",
    "Judge on weekly figures, not daily ones.",
    "Compare the same day of the week, or the same week last year.",
    "Check the calendar for events, holidays and shopping periods.",
    "Only act when the change persists beyond your normal range.",
    "Record unusual periods so next year you recognise them."
  ],
  mistakes: [
    "Reacting to a two day change.",
    "Comparing a weekend with a weekday.",
    "Forgetting that seasonal competition affects your costs even when you do nothing."
  ],
  words: [
    { t: "Volatility", d: "Normal variation in spending and results from day to day." },
    { t: "Seasonality", d: "Predictable changes in competition and behaviour across the year." },
    { t: "Like for like comparison", d: "Comparing equivalent periods rather than mismatched ones." }
  ],
  takeaways: [
    "Daily variation of 30 to 50 percent is normal in small accounts.",
    "Weekly is the right unit for most decisions.",
    "Check the calendar before diagnosing a problem.",
    "Compare like with like, always."
  ],
  selfCheck: [
    "I know my normal weekly range.",
    "I compare equivalent periods.",
    "I check the calendar before reacting to a cost rise."
  ],
  quiz: [
    { q: "What is the right unit for most decisions?", options: ["Hourly", "Weekly", "Yearly"], a: 1, why: "Weekly figures smooth out normal daily noise while staying timely." },
    { q: "Costs rise sharply in late November. What is the likely cause?", options: ["Your ads broke", "Seasonal competition as retailers increase budgets", "Meta changed its rules"], a: 1, why: "Auction prices rise when many advertisers spend more at once." },
    { q: "What is a like for like comparison?", options: ["Any two periods", "Equivalent periods, such as the same weekday or the same week last year", "The best two days"], a: 1, why: "Mismatched periods produce meaningless differences." }
  ],
  exercise: { task: "Chart your cost per result by week for the last eight weeks. Write down your normal range, then mark any week that fell outside it and find the reason." },
  challenge: { task: "Build a seasonality calendar for your market: the periods when competition rises, the expected effect on costs, the budget adjustments you will plan, and the historical evidence supporting each." }
},

"4.13.7": {
  intro: "Changing a budget affects more than the amount spent. This lesson explains how changes disturb delivery and how to make them safely.",
  idea: [
    "When you change a budget significantly, the system must re-plan. A large increase means it suddenly needs to find many more results, which often means bidding into more expensive auctions. A large decrease means it must become far more selective.",
    "Big changes can also push an ad set back into learning, which costs you the stability you had built.",
    "The widely used guideline is to change budgets by no more than about 20 to 30 percent at a time, and to wait two to three days between changes. This is not an official rule with a precise number, but it reflects real behaviour: gradual changes are absorbed, sudden ones are disruptive.",
    "There is an important exception. If something is genuinely broken, such as a runaway cost or a policy problem, act immediately. Stability matters less than stopping a loss."
  ],
  example: {
    title: "Two ways to triple a budget",
    body: "Account A went from 100 to 300 a day in one step. Cost per purchase rose from 22 to 48 for nine days before settling at 31. Account B went from 100 to 130, then 170, then 220, then 290 over two weeks. Cost per purchase stayed between 22 and 26 throughout. Both reached the same place. One paid a lot for the journey."
  },
  steps: [
    "Decide the target budget.",
    "Plan the increases in steps of 20 to 30 percent.",
    "Wait two to three days between steps.",
    "Watch cost per result after each step before taking the next.",
    "If costs rise sharply, pause the increases and let it settle.",
    "Act immediately regardless of these rules if something is genuinely broken."
  ],
  mistakes: [
    "Doubling or tripling a budget in one move.",
    "Making several changes on the same day.",
    "Applying the gradual rule to a genuine emergency."
  ],
  words: [
    { t: "Budget step", d: "One increase or decrease in a planned sequence." },
    { t: "Delivery disturbance", d: "The unstable period following a significant change." },
    { t: "Re-entering learning", d: "When a change is large enough to restart the learning phase." }
  ],
  takeaways: [
    "Change budgets by 20 to 30 percent at a time.",
    "Wait two to three days between steps.",
    "Large sudden changes cost money during the adjustment.",
    "Emergencies override the gradual approach."
  ],
  selfCheck: [
    "My budget changes are gradual and spaced out.",
    "I watch results after each step before the next.",
    "I know when to override the rule for a genuine problem."
  ],
  quiz: [
    { q: "How large should a single budget change be?", options: ["As large as you like", "About 20 to 30 percent", "Exactly double"], a: 1, why: "Gradual changes are absorbed without disturbing delivery." },
    { q: "How long should you wait between steps?", options: ["An hour", "Two to three days", "A month"], a: 1, why: "It takes a few days for delivery to settle after a change." },
    { q: "When should you ignore the gradual rule?", options: ["Never", "When something is genuinely broken and costing money", "Every Friday"], a: 1, why: "Stopping a real loss matters more than protecting stability." }
  ],
  exercise: { task: "Plan a budget increase from your current amount to double it, using 25 percent steps. Write the schedule with dates and what you will check before each step." },
  challenge: { task: "Write a budget change protocol for your team: step sizes, waiting periods, the metrics checked between steps, who may approve changes above a certain size, and the emergency override conditions." }
},

"4.13.8": {
  intro: "Deciding how much of your budget goes to each stage of the funnel is one of the most consequential choices in an account. This lesson gives you a way to decide.",
  idea: [
    "The three stages are reaching new people, converting interested people, and keeping existing customers. Each competes for the same money, and each looks different in the reports.",
    "The natural pull is always toward the bottom, because those numbers look best. Resisting that pull is most of the skill.",
    "A practical method is to work backwards from your growth goal. If you want 100 new customers a month, and your prospecting produces a customer for 60 while retargeting converts a share of those already interested, you can calculate roughly how much prospecting volume you need to feed the rest.",
    "A simpler starting rule for most businesses: 70 to 80 percent to reaching new people, 15 to 25 percent to converting, and a small amount to existing customers unless repeat purchase is a major part of your business, in which case that share grows."
  ],
  example: {
    title: "Working backwards",
    body: "A business wanted 200 new customers a month. Their data showed that for every 1,000 new people reached at the top, about 40 became interested and about 9 became customers overall including retargeting. To reach 200 customers they needed roughly 22,000 new people reached per month, which at their cost meant about 9,000 a month in prospecting. The budget question answered itself once the arithmetic was done."
  },
  steps: [
    "Write your monthly customer goal.",
    "Find how many new people you must reach to produce one customer.",
    "Calculate the prospecting budget that produces that reach.",
    "Allocate retargeting based on the size of the audience prospecting creates.",
    "Allocate a small share to existing customers, larger if repeat purchase matters.",
    "Review monthly and adjust as the numbers become clearer."
  ],
  mistakes: [
    "Allocating by which stage looks best in the report.",
    "Setting retargeting budget without checking the audience size.",
    "Never doing the arithmetic and allocating by feel."
  ],
  words: [
    { t: "Funnel stage", d: "One part of the journey: reach, convert, retain." },
    { t: "Working backwards", d: "Calculating required spend from a customer goal." },
    { t: "Repeat purchase", d: "Customers buying again, which changes the value of retention spending." }
  ],
  takeaways: [
    "Work backwards from your customer goal to find the prospecting budget.",
    "Most of the money belongs at the top, feeding everything else.",
    "Retargeting budget should match the audience size it has to work with.",
    "Retention deserves more when repeat purchase is significant."
  ],
  selfCheck: [
    "I know how many new people I must reach per customer.",
    "My allocation was calculated, not guessed.",
    "My retargeting budget matches its audience size."
  ],
  quiz: [
    { q: "How should funnel allocation be decided?", options: ["By which stage shows the best numbers", "By working backwards from your customer goal", "Equal thirds"], a: 1, why: "The arithmetic reveals how much top of funnel volume the goal requires." },
    { q: "What limits how much retargeting budget makes sense?", options: ["Your total budget", "The size of the audience prospecting has created", "The number of ads"], a: 1, why: "Beyond that, you simply show the same people more ads." },
    { q: "When should retention receive a larger share?", options: ["Never", "When repeat purchase is a significant part of the business", "Always"], a: 1, why: "The value of retention spending depends on how often customers buy again." }
  ],
  exercise: { task: "Do the arithmetic for your business: monthly customer goal, new people needed per customer, and the prospecting budget that produces it. Compare with what you currently spend." },
  challenge: { task: "Build a funnel budget model: the conversion rates at each stage, the calculation from goal to budget, the allocation it produces, and a sensitivity check showing what happens if each conversion rate falls by a fifth." }
},

"4.13.9": {
  intro: "Planning a budget means deciding in advance what you will spend and what you expect in return. This final lesson of the module covers simple forecasting that is actually useful.",
  idea: [
    "A forecast is not a prediction of the future. It is a written expectation, which lets you notice quickly when reality differs and ask why.",
    "The simplest useful forecast has three numbers: planned spend, expected cost per result, and therefore expected results. Write them monthly for the next six months.",
    "Two adjustments make it much better. Seasonality, because costs and demand change through the year, so a flat forecast is wrong by construction. And diminishing returns, because doubling the budget rarely doubles results. A common pattern is that a 50 percent budget increase produces perhaps 30 to 40 percent more results, with cost per result rising.",
    "The value of writing it down is the conversation it produces when reality differs. Without a forecast you only know that things changed. With one you know by how much, and in which direction, which is where the useful questions start."
  ],
  example: {
    title: "A simple six month plan",
    body: "Month 1: spend 10,000, expect cost per sale 40, so 250 sales. Month 2 to 3: same. Month 4: budget rises to 15,000, expect cost per sale 46 due to diminishing returns, so 326 sales. Month 5: seasonal peak, expect cost per sale 55 but higher conversion, so 273 sales. When month 4 came in at 52 per sale instead of 46, the team had a specific question to investigate rather than a vague feeling."
  },
  steps: [
    "Write planned spend for each of the next six months.",
    "Write your expected cost per result for each month.",
    "Adjust for known seasonal periods.",
    "Adjust for diminishing returns whenever the budget increases.",
    "Calculate expected results and write them down.",
    "Compare actual against forecast monthly and investigate the gaps."
  ],
  mistakes: [
    "Forecasting a flat cost per result all year.",
    "Assuming results scale exactly with budget.",
    "Writing a forecast and never comparing it against reality."
  ],
  words: [
    { t: "Forecast", d: "A written expectation of spend, cost and results." },
    { t: "Diminishing returns", d: "Each additional unit of budget producing less than the previous one." },
    { t: "Variance", d: "The difference between forecast and actual." }
  ],
  takeaways: [
    "A forecast is a written expectation, not a prediction.",
    "Adjust for seasonality and diminishing returns or it is wrong by construction.",
    "Its value is the questions it produces when reality differs.",
    "Compare actual against forecast every month."
  ],
  selfCheck: [
    "I have a written six month forecast.",
    "It includes seasonality and diminishing returns.",
    "I compare it against actual results monthly."
  ],
  quiz: [
    { q: "What is the main value of a forecast?", options: ["Predicting the future accurately", "Producing specific questions when reality differs from expectation", "Satisfying management"], a: 1, why: "The gap between expected and actual is where learning happens." },
    { q: "What happens when you increase budget by 50 percent?", options: ["Results rise by exactly 50 percent", "Results usually rise less, and cost per result usually rises", "Results double"], a: 1, why: "Diminishing returns mean each additional amount buys less." },
    { q: "What makes a flat forecast wrong?", options: ["It is too simple", "Costs and demand change through the year", "Meta forbids it"], a: 1, why: "Seasonality affects both competition and customer behaviour." }
  ],
  exercise: { task: "Write a six month forecast: planned spend, expected cost per result, expected results, with adjustments for seasonality and diminishing returns. Keep it and compare monthly." },
  challenge: { task: "Build a forecasting model with three scenarios: conservative, expected and ambitious. Include the assumptions behind each, what would have to be true for the ambitious case, and the early signals that would tell you which one you are living in." }
}

});
