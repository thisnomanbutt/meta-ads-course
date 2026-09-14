/* Module 06 - Placements and Delivery (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"2.6.1": {
  intro: "A placement is a position where your ad can appear. Meta has around twenty of them across its apps. This lesson explains what they are and why the choice matters.",
  idea: [
    "When people say Meta ads they usually picture the Facebook feed. In reality your ad can appear in the Facebook feed, the Instagram feed, Instagram and Facebook Stories, Reels on both apps, the Facebook video feed, search results, Marketplace, the right column on desktop, Messenger, Threads, and apps outside Meta through the Audience Network.",
    "Each position has a different shape, a different mood and a different price. A person scrolling Reels is relaxed and expects sound and movement. A person in Marketplace is actively shopping. Someone in the right column on desktop is barely paying attention to it at all.",
    "The price differs too. Some placements have far more available space than advertiser demand, which makes them cheap. Others are crowded and expensive. The system uses this, moving your budget toward wherever it can get your result most cheaply.",
    "That is the key point of this whole module: placements are not a style choice. They are a price and attention market, and the system is usually better than you at navigating it."
  ],
  example: {
    title: "Same ad, different worlds",
    body: "One video ran in four positions. In the Facebook feed it cost 9 per 1,000 views with a 1.1 percent click rate. In Instagram Reels, 6 per 1,000 with 1.6 percent. In Stories, 5 per 1,000 with 0.7 percent, because the video was horizontal and looked wrong in a vertical space. In the right column, 2 per 1,000 with 0.1 percent. The same file performed completely differently depending on where it landed."
  },
  steps: [
    "Open the placements section in any ad set and read the full list.",
    "Note which placements are vertical and which are horizontal.",
    "Note which have sound on by default and which do not.",
    "Prepare your creative in at least two shapes: square or vertical, and full vertical.",
    "Leave placements automatic at first, then review performance by placement.",
    "Improve the creative for weak placements before switching them off."
  ],
  mistakes: [
    "Assuming Meta ads means the Facebook feed only.",
    "Using one horizontal video everywhere, which looks wrong in vertical placements.",
    "Switching off a placement that performed badly because the creative did not suit it."
  ],
  words: [
    { t: "Placement", d: "A position where your ad can appear, such as Instagram Stories." },
    { t: "Aspect ratio", d: "The shape of the creative: square, vertical or horizontal." },
    { t: "Inventory", d: "The amount of advertising space available in a placement." }
  ],
  takeaways: [
    "There are around twenty placements, each with its own shape, mood and price.",
    "Cheap placements exist where space is plentiful and demand is lower.",
    "Creative shape must match the placement or performance suffers.",
    "Fix the creative before blaming the placement."
  ],
  selfCheck: [
    "I can name at least eight placements.",
    "I know which of my creatives are vertical and which are not.",
    "I understand why the same ad performs differently in different positions."
  ],
  quiz: [
    { q: "Why are some placements cheaper than others?", options: ["Meta discounts them", "More available space compared with advertiser demand", "They reach fewer people"], a: 1, why: "Price follows the balance of space and competition, like any market." },
    { q: "A horizontal video performs badly in Stories. What is the likely cause?", options: ["Stories is a bad placement", "The creative shape does not suit the vertical space", "The audience is wrong"], a: 1, why: "Shape mismatch is the most common reason a placement looks weak." },
    { q: "What is the safest first approach to placements?", options: ["Facebook feed only", "Automatic placements, then review by placement", "Audience Network only"], a: 1, why: "Let the system find cheap results, then improve what the data shows." }
  ],
  exercise: { task: "Open one of your ad sets and list every placement currently enabled. Then look at your creative library and write down which placements your current files actually suit." },
  challenge: { task: "Build a placement and creative matrix for your business: every placement you use, the required shape and length, whether sound matters, and which of your creative types belongs in each." }
},

"2.6.2": {
  intro: "You can let Meta choose placements automatically, or choose them yourself. This lesson explains the real difference and gives a clear rule for deciding.",
  idea: [
    "Automatic placements, now often called Advantage+ placements, allow your ad in every eligible position. The system then moves budget toward wherever it gets results most cheaply, minute by minute.",
    "Manual placements means you choose. This sounds like control, and it usually costs you money, because you are removing options from a system that was using them to find cheap results.",
    "The evidence is consistent: in most accounts, automatic placements deliver a lower cost per result than any hand picked combination, because it can react faster than any human to changing prices.",
    "There are only three good reasons to go manual. A legal or brand requirement that certain positions are not allowed. A creative that genuinely only works in one format. Or a clear, repeated pattern in your own data showing a placement is wasting money even after the creative was fixed for it."
  ],
  example: {
    title: "Control that cost money",
    body: "An advertiser disabled Audience Network and Stories, keeping only the two feeds, because that felt safer. Cost per lead was 27. A test ad set with automatic placements, same audience, same creative and same budget, produced leads at 19, with 31 percent of results coming from placements the manual version had removed."
  },
  steps: [
    "Start every new ad set with automatic placements.",
    "Upload creative in the right shapes so every placement gets a fair chance.",
    "Let it run until you have enough results to judge.",
    "Review the placement breakdown.",
    "Fix creative for weak placements first.",
    "Only exclude a placement if it stays clearly wasteful after the creative was suited to it."
  ],
  mistakes: [
    "Going manual from habit or from advice given years ago.",
    "Excluding a placement based on a few days of thin data.",
    "Using automatic placements but only uploading one horizontal image."
  ],
  words: [
    { t: "Automatic placements", d: "Letting the system use every eligible position and move budget freely." },
    { t: "Manual placements", d: "Choosing the positions yourself." },
    { t: "Eligible", d: "A placement your ad format and objective are allowed to use." }
  ],
  takeaways: [
    "Automatic usually beats manual because the system reacts to prices faster.",
    "Manual is justified by legal rules, format limits, or proven repeated waste.",
    "Automatic only works properly when your creative suits every shape.",
    "Fix creative before removing a placement."
  ],
  selfCheck: [
    "My ad sets use automatic placements unless I can justify otherwise.",
    "I have uploaded creative suited to vertical placements.",
    "Any exclusion I have made is supported by real repeated data."
  ],
  quiz: [
    { q: "What is the usual result of choosing placements manually?", options: ["Lower costs", "Higher costs, because the system has fewer cheap options", "No difference"], a: 1, why: "Removing options removes the system's ability to find cheap results." },
    { q: "When is manual placement justified?", options: ["When it feels more controlled", "For legal or brand rules, format limits, or proven repeated waste", "Always for new accounts"], a: 1, why: "Only real constraints or real evidence justify the cost." },
    { q: "Automatic placements work best when...", options: ["You upload one horizontal image", "Your creative is prepared in the right shapes for each position", "You use a small budget"], a: 1, why: "Without suitable creative, some placements are set up to fail." }
  ],
  exercise: { task: "Find any ad set where you disabled placements. Write down why you did it and whether you have data to support it. If not, create a test with automatic placements and compare after two weeks." },
  challenge: { task: "Design the fair test that settles automatic versus manual in your account: the structure, what is held constant, the budget, the duration, the minimum results needed, and the decision rule." }
},

"2.6.3": {
  intro: "The Facebook and Instagram feeds are still where most advertising money goes. This lesson explains how to make ads that work in a feed, where people scroll fast and decide in less than a second.",
  idea: [
    "The feed is a stream of posts from friends, pages and ads. Your ad is competing with a baby photo, a joke and a news story. It has to earn attention rather than demand it.",
    "The feed gives you more room than most placements. You get an image or video, several lines of text above it, a headline below, and a button. This makes feeds good for offers that need a sentence of explanation.",
    "Two practical points decide feed performance. First, the visual must stop the scroll on its own, with no sound, because most people scroll with sound off. Second, the first line of text must earn the click on See more, because only two or three lines show before the text is cut.",
    "Square and vertical images perform better than horizontal ones, simply because they take up more of the screen on a phone, giving your ad more time in view."
  ],
  example: {
    title: "Two lines that changed everything",
    body: "An ad started with: we are a family run company established in 2009 offering a range of services. Almost nobody expanded the text. Changed to: most people pay 40 percent too much for this. Here is how to check. Expansions rose sharply and cost per lead fell by 35 percent. Nothing else changed, including the image."
  },
  steps: [
    "Use square or vertical creative, not horizontal.",
    "Make the first two lines of text carry the whole message.",
    "Design the image to be understood with no sound and no reading.",
    "Keep important content away from the edges where it may be covered.",
    "Use a headline that says what happens next, not a slogan.",
    "Check the preview in both Facebook and Instagram feeds, because they differ."
  ],
  mistakes: [
    "Writing a long introduction before the point.",
    "Using horizontal images that occupy less screen space.",
    "Relying on sound or on text too small to read on a phone."
  ],
  words: [
    { t: "Feed", d: "The main scrolling stream of posts and ads." },
    { t: "Scroll stopper", d: "Something visual that makes a person pause." },
    { t: "See more", d: "The cut-off point where longer text is hidden." }
  ],
  takeaways: [
    "The feed competes with friends and news, so attention must be earned.",
    "Square and vertical creative occupy more screen and perform better.",
    "The first two lines decide whether the rest is ever read.",
    "Design for sound off and for small screens."
  ],
  selfCheck: [
    "My creative is square or vertical.",
    "My first two lines contain the real message.",
    "My ad makes sense with no sound."
  ],
  quiz: [
    { q: "Why do square and vertical images work better in feeds?", options: ["Meta prefers them", "They take up more screen space on a phone, giving more time in view", "They load faster"], a: 1, why: "More screen space means more seconds of attention as people scroll." },
    { q: "How many lines of text are usually visible before See more?", options: ["About two or three", "Ten", "All of them"], a: 0, why: "Only the first few lines show, so they must carry the message." },
    { q: "What should you assume about sound?", options: ["Everyone has it on", "Most people scroll with sound off", "Sound is not supported"], a: 1, why: "The ad must work silently, with sound as a bonus." }
  ],
  exercise: { task: "Take three of your current ads and rewrite the first two lines of each so the main point appears immediately. Compare the old and new versions side by side." },
  challenge: { task: "Write a feed creative standard for your team: required shapes, the first line rules, text limits, contrast and legibility checks, and the review process before anything is published." }
},

"2.6.4": {
  intro: "Stories and Reels are full screen vertical placements where people expect movement. They are often the cheapest attention available, and they punish lazy creative harder than anywhere else.",
  idea: [
    "Stories are short full screen posts that disappear after a day. Reels are short vertical videos people watch one after another. In both, your ad takes the entire screen, which is a huge advantage, but people can skip instantly.",
    "The rules are different from the feed. You have the whole screen, so anything horizontal looks wrong immediately. You have roughly one second before a thumb decides. And the content around you is casual, filmed on phones, so a polished studio advertisement often feels like an intrusion.",
    "This is why simple phone-filmed video frequently outperforms expensive production here. It matches the environment.",
    "There are practical safe areas too. The top of the screen holds the profile name and the bottom holds the button and system controls. Keep important text and faces in the middle, or they will be covered."
  ],
  example: {
    title: "Studio versus phone",
    body: "A skincare brand tested two Reels ads. One was a professional advertisement costing 4,000 to produce. The other was a customer filming herself in her bathroom explaining what changed for her, filmed on a phone for nothing. The phone video produced purchases at 21, the studio version at 58. In this placement, matching the environment beat production value."
  },
  steps: [
    "Film or crop everything to full vertical, 9 by 16.",
    "Put the hook in the first second, visually and in words.",
    "Keep text and faces in the middle third, away from the top and bottom.",
    "Add captions, because most people watch without sound.",
    "Keep it short: fifteen to thirty seconds usually works best.",
    "Make it look like it belongs in the app, not like a television advertisement."
  ],
  mistakes: [
    "Uploading a horizontal video with blank bars top and bottom.",
    "Putting the offer at the end, which almost nobody reaches.",
    "Spending heavily on production that makes the ad feel out of place."
  ],
  words: [
    { t: "Stories", d: "Full screen posts that disappear after 24 hours." },
    { t: "Reels", d: "Short vertical videos watched one after another." },
    { t: "Safe area", d: "The middle part of the screen not covered by app controls." },
    { t: "Hook", d: "The first moment that decides whether someone keeps watching." }
  ],
  takeaways: [
    "These placements take the whole screen and are often the cheapest attention.",
    "Everything must be full vertical, with the hook in the first second.",
    "Keep content inside the safe area so controls do not cover it.",
    "Content that looks native to the app usually beats polished production."
  ],
  selfCheck: [
    "I have true vertical versions of my main creative.",
    "My hook lands within the first second.",
    "My text sits inside the safe area with captions added."
  ],
  quiz: [
    { q: "Why does phone-filmed content often win in Reels?", options: ["It is cheaper to make", "It matches the casual environment people are already watching", "Meta boosts it"], a: 1, why: "Ads that feel native to the surrounding content interrupt less and get watched more." },
    { q: "Where should important text sit?", options: ["At the very top", "In the middle third, inside the safe area", "At the very bottom"], a: 1, why: "The top and bottom are covered by the profile name and controls." },
    { q: "How long do you have to hook someone?", options: ["About one second", "About ten seconds", "Thirty seconds"], a: 0, why: "The decision to keep watching or skip happens almost immediately." }
  ],
  exercise: { task: "Take your best performing feed ad and rebuild it as a true vertical video under 20 seconds, with the hook in the first second and captions added. Compare the two in the same ad set." },
  challenge: { task: "Write a short-form production brief your team can follow: shooting format, hook patterns that work in your industry, caption style, safe area guides, length targets, and three example scripts." }
},

"2.6.5": {
  intro: "Threads is Meta's text-based conversation app, and it now carries ads. This lesson explains what it is, how ads behave there, and how to decide whether it deserves your budget.",
  idea: [
    "Threads is built around short written posts and replies. The mood is conversational, opinionated and fast moving, closer to a discussion than a photo gallery.",
    "Ads appear between posts in the main stream. Because the surrounding content is mostly text, an ad that reads like a thoughtful post fits better than a polished product photograph with a slogan.",
    "As a newer placement, it often has more available space than advertiser demand, which means lower costs for the advertisers who use it well. This advantage narrows as more advertisers arrive, which is the normal pattern for every new placement.",
    "The practical approach is simple: because it is included in automatic placements, you are probably already testing it without realising. Check the placement breakdown, see what it is producing, and if it performs, make creative specifically for it rather than passing through whatever was made for the feed."
  ],
  example: {
    title: "Writing for the room",
    body: "A software company ran the same offer in two forms. The feed version was a designed graphic with a headline. The Threads version was a short written observation about a problem their customers complain about, ending with one line about the product. The written version produced signups at roughly half the cost, because it read like part of the conversation rather than an interruption."
  },
  steps: [
    "Confirm Threads is included in your automatic placements.",
    "Check the placement breakdown to see what it is currently producing.",
    "If results are promising, write ad copy specifically in a conversational style.",
    "Lead with an opinion or an observation, not a slogan.",
    "Keep images simple, and let the words carry the message.",
    "Review again after a few weeks, since costs in new placements change as competition grows."
  ],
  mistakes: [
    "Ignoring the placement breakdown and never noticing what Threads is doing.",
    "Reusing polished feed graphics with no change in tone.",
    "Expecting today's low costs to last, and building a plan that depends on them."
  ],
  words: [
    { t: "Threads", d: "Meta's text-based conversation app, which now shows ads." },
    { t: "Native tone", d: "Writing that matches how people normally post in that app." },
    { t: "Early placement advantage", d: "Lower costs available while advertiser demand is still low." }
  ],
  takeaways: [
    "Threads is conversational and text-led, so writing matters more than design.",
    "It is usually already running inside automatic placements.",
    "New placements often carry a temporary cost advantage.",
    "Check the breakdown, then make creative specifically for it if it performs."
  ],
  selfCheck: [
    "I have checked what Threads is producing in my placement breakdown.",
    "I understand why its costs may rise over time.",
    "I have considered writing copy specifically for a conversational placement."
  ],
  quiz: [
    { q: "What kind of creative suits Threads best?", options: ["Polished product photography with a slogan", "Writing that reads like a genuine conversational post", "Long horizontal video"], a: 1, why: "The surrounding content is text, so native writing fits the environment." },
    { q: "Why are costs often lower in a new placement?", options: ["Meta subsidises it", "Available space exceeds advertiser demand at first", "It reaches fewer people"], a: 1, why: "Low competition for plentiful space keeps prices down until advertisers arrive." },
    { q: "How do most advertisers first run on Threads?", options: ["By building a separate campaign", "Automatically, because it is included in automatic placements", "By applying for access"], a: 1, why: "It is part of the automatic placement set, so it often runs unnoticed." }
  ],
  exercise: { task: "Run a placement breakdown for the last 30 days and find what Threads produced. Write down the spend, results and cost per result, and decide whether it deserves dedicated creative." },
  challenge: { task: "Write three Threads-specific ads for your business in a conversational style, each leading with a genuine observation your customers would recognise, and explain how you would test them fairly against your feed creative." }
},

"2.6.6": {
  intro: "Audience Network places your ads in other companies' apps and websites. It has a poor reputation, some of it deserved and some of it not. This lesson gives you a fair view.",
  idea: [
    "Audience Network is not inside Facebook or Instagram. It is space in other apps, such as games and news apps, sold through Meta. Messenger placements and the Facebook right column are also often grouped with these secondary positions.",
    "The complaint is that it produces cheap clicks that do not convert, including accidental taps on small banners inside games. That complaint is often true when the creative was designed for a feed and dropped into a banner.",
    "The defence is that it is very cheap, and for some objectives, particularly app installs and broad awareness, it genuinely performs.",
    "The sensible position is neither love nor hate. Leave it on inside automatic placements, look at the breakdown after enough results, and judge it on cost per real result, not cost per click. If it produces results at an acceptable cost, keep it. If it produces cheap clicks and no results after a fair test, exclude it in that account."
  ],
  example: {
    title: "Judged on the right number",
    body: "An account saw Audience Network producing clicks at 0.04, twenty times cheaper than the feed, and the owner was delighted. The conversion data told a different story: 6,200 clicks and 3 leads. Cost per lead was 82 against 14 in the feed. Judged on clicks it looked outstanding. Judged on results it was the worst placement in the account."
  },
  steps: [
    "Keep it enabled while you gather data.",
    "Run a placement breakdown after enough results have accumulated.",
    "Compare cost per result, never cost per click.",
    "Check whether your creative was suitable for a small banner space.",
    "If it fails a fair test, exclude it for that account and note why.",
    "Re-test occasionally, because results change with creative and objective."
  ],
  mistakes: [
    "Judging it by cheap clicks.",
    "Excluding it by reputation without ever looking at your own data.",
    "Testing it with creative that could never work in a small space."
  ],
  words: [
    { t: "Audience Network", d: "Advertising space in other apps and sites, sold through Meta." },
    { t: "Banner", d: "A small advertising space, often at the edge of an app screen." },
    { t: "Accidental click", d: "A tap that was not intended, common in small spaces inside games." }
  ],
  takeaways: [
    "Audience Network is space outside Meta's own apps.",
    "Cheap clicks there often hide poor results.",
    "Judge it on cost per result in your own account.",
    "Neither keep it nor exclude it by reputation. Test it."
  ],
  selfCheck: [
    "I have looked at Audience Network results in my own account.",
    "I judge it by cost per result, not cost per click.",
    "Any exclusion I made came from data, not from advice online."
  ],
  quiz: [
    { q: "What is the correct way to judge Audience Network?", options: ["Cost per click", "Cost per real result in your own account", "Its reputation online"], a: 1, why: "Cheap clicks there frequently produce very few results." },
    { q: "Where do Audience Network ads appear?", options: ["Inside Instagram", "In other companies' apps and websites", "Only on desktop"], a: 1, why: "It is external space sold through Meta." },
    { q: "Before excluding it, what should you check?", options: ["Whether your creative could ever work in a small space", "Your billing date", "Your account age"], a: 0, why: "Unsuitable creative guarantees failure, which is not the placement's fault." }
  ],
  exercise: { task: "Run a placement breakdown for the last 60 days. Write down Audience Network's spend, clicks, results and cost per result, then make a decision and record your reason." },
  challenge: { task: "Design a fair test of secondary placements for your account: how much budget, how long, what creative is prepared specifically for them, and the exact numbers that would justify keeping or excluding each." }
},

"2.6.7": {
  intro: "Every placement has its own economics: its own price for attention and its own likelihood of producing a result. Understanding this changes how you read your reports.",
  idea: [
    "Two numbers describe a placement's economics. What it costs to appear there, measured as cost per thousand impressions. And how likely a person there is to act, which shows in the click rate and conversion rate.",
    "A cheap placement with a low action rate can still be excellent value. An expensive placement with a high action rate can also be excellent value. What matters is the multiplication of the two, which is your cost per result.",
    "This explains a common confusion. People see that Reels has a much lower cost per thousand impressions than the feed and conclude that Reels is better. But if the feed converts three times as well, the feed may still win. Only the final cost per result settles it.",
    "There is a second effect worth knowing. When you allow more placements, the system has more cheap options, which usually lowers your blended cost. So placements interact: adding a mediocre placement can still reduce your overall cost by taking pressure off the expensive ones."
  ],
  example: {
    title: "Doing the multiplication",
    body: "Placement A: 4 per thousand impressions, 1 result per 400 impressions, giving 1.60 per result. Placement B: 12 per thousand impressions, 1 result per 600 impressions, giving 7.20 per result. Placement C: 9 per thousand, 1 result per 250, giving 2.25. The cheapest placement to appear in is A, and it is also best here, but B being three times the price of A did not make it three times worse. Only the multiplication tells the truth."
  },
  steps: [
    "Pull the placement breakdown with impressions, results and spend.",
    "Calculate cost per thousand impressions for each placement.",
    "Calculate the result rate for each placement.",
    "Multiply to get cost per result and rank the placements.",
    "Check whether weak placements have unsuitable creative.",
    "Decide based on the final cost per result, not the first number you see."
  ],
  mistakes: [
    "Judging placements by cost per thousand impressions alone.",
    "Ignoring that allowing more placements can lower your overall cost.",
    "Comparing placements across different time periods or audiences."
  ],
  words: [
    { t: "Cost per thousand impressions", d: "What it costs to appear a thousand times in a placement." },
    { t: "Result rate", d: "How often an appearance turns into the result you want." },
    { t: "Blended cost", d: "Your overall cost per result across all placements together." }
  ],
  takeaways: [
    "Cost per result is the price to appear multiplied by the chance of acting.",
    "A cheap placement is not automatically better.",
    "More allowed placements usually lowers blended cost.",
    "Always compare placements over the same period and audience."
  ],
  selfCheck: [
    "I can calculate cost per result from impressions and results.",
    "I do not judge a placement by its impression price alone.",
    "I understand why allowing more placements can reduce overall cost."
  ],
  quiz: [
    { q: "A placement has a very low cost per thousand impressions. Is it better?", options: ["Yes, always", "Only if the result rate makes the final cost per result competitive", "No, cheap placements are always worse"], a: 1, why: "The two numbers must be multiplied to know the truth." },
    { q: "What often happens when you allow more placements?", options: ["Blended cost rises", "Blended cost falls, because the system finds cheaper options", "Nothing changes"], a: 1, why: "More options means more chances to find a cheap result." },
    { q: "What must be equal when comparing placements?", options: ["The creative file size", "The time period and audience", "The campaign name"], a: 1, why: "Comparisons across different periods or audiences are not valid." }
  ],
  exercise: { task: "Export your placement breakdown and build a small table: impressions, spend, results, cost per thousand, result rate and cost per result for each placement. Rank them and write down what surprised you." },
  challenge: { task: "Write an analysis of placement economics in your account, including how the mix changed over the last three months, what caused the change, and what you would do if your cheapest placement doubled in price." }
},

"2.6.8": {
  intro: "Placement optimisation means improving results across positions without simply switching things off. This lesson gives the correct order of actions.",
  idea: [
    "When a placement underperforms, there are three possible causes, and only one of them is the placement itself. The creative may be wrong for the format. The destination may be wrong for that audience. Or the placement may genuinely not suit your business.",
    "Almost everyone jumps to the third conclusion first, which is the expensive mistake. Excluding a placement removes cheap opportunities permanently and usually raises the blended cost.",
    "The correct order is: fix the creative, fix the destination, then and only then consider excluding.",
    "There is also a positive side to placement optimisation that most people ignore. When a placement performs well, you can make more creative specifically for it. If Reels produces your cheapest results, the answer is not to leave it alone, it is to make three more Reels videos."
  ],
  example: {
    title: "Fixed, not removed",
    body: "Stories showed a cost per lead of 44 against 16 elsewhere, and the team wanted to switch it off. Instead they made a true vertical version of the ad with captions and the offer in the middle of the screen. Two weeks later Stories was at 13, the cheapest placement in the account. The placement was never the problem. The creative was."
  },
  steps: [
    "Identify the weak placement from the breakdown, with enough results to be sure.",
    "Look at the ad exactly as it appears there, using the preview.",
    "Fix the shape, the safe areas, the captions and the length.",
    "Check the destination works well for the traffic coming from that placement.",
    "Run again and re-measure.",
    "Only exclude if it still fails after a fair second test, and write down why."
  ],
  mistakes: [
    "Excluding placements as the first action instead of the last.",
    "Not making extra creative for the placements that already perform well.",
    "Making a decision from a handful of results."
  ],
  words: [
    { t: "Placement optimisation", d: "Improving results across positions rather than removing them." },
    { t: "Format fit", d: "How well the creative suits the shape and behaviour of a placement." },
    { t: "Exclusion of last resort", d: "Removing a placement only after fixes have failed." }
  ],
  takeaways: [
    "Fix creative first, destination second, exclude last.",
    "Excluding placements removes cheap opportunities permanently.",
    "Strong placements deserve more creative, not less attention.",
    "Any exclusion should be written down with its reason and date."
  ],
  selfCheck: [
    "I fix creative before excluding a placement.",
    "I make extra creative for placements that perform well.",
    "Every exclusion in my account has a written reason."
  ],
  quiz: [
    { q: "What should be your first action when a placement underperforms?", options: ["Exclude it", "Check and fix the creative for that format", "Raise the budget"], a: 1, why: "Format mismatch causes most placement underperformance." },
    { q: "A placement performs very well. What is the best response?", options: ["Leave it alone", "Make more creative specifically for it", "Exclude everything else"], a: 1, why: "Doubling down on what works is the cheapest available improvement." },
    { q: "Excluding a placement usually...", options: ["Lowers your blended cost", "Removes cheap opportunities and often raises blended cost", "Has no effect"], a: 1, why: "The system loses options it was using to find cheap results." }
  ],
  exercise: { task: "Find your weakest placement with meaningful volume. Instead of excluding it, build one new creative made specifically for that format and test it for two weeks." },
  challenge: { task: "Create a placement optimisation routine: how often you review, the minimum results needed, the fix order, the documentation required for any exclusion, and how you decide to invest more creative in strong placements." }
},

"2.6.9": {
  intro: "The final lesson of Level 2 covers reading device and placement data together, which reveals problems that neither view shows alone.",
  idea: [
    "Meta can break your results down by device: phone, computer, tablet, and even by operating system. On its own this is mildly interesting. Combined with placement data it becomes genuinely useful.",
    "The most common finding is a website problem. If phone results are much worse than computer results across every placement, the ads are probably fine and the mobile version of your website is the issue. This is extremely common and usually fixable.",
    "The second common finding is a format problem. If one placement is weak on phones but acceptable on computers, the creative shape is usually wrong for the mobile version of that placement.",
    "The third is an audience insight. If nearly all your results come from one device type, that tells you something real about your customers that should shape your creative, your landing page and your expectations."
  ],
  example: {
    title: "It was never the ads",
    body: "An account showed a conversion rate of 4.1 percent on computers and 0.7 percent on phones, across every placement and every audience. The team had spent a month testing creative. The actual cause was a checkout form that did not fit on a phone screen, with a Continue button pushed below the visible area. Fixing the form raised the mobile rate to 3.6 percent within days, with no advertising changes at all."
  },
  steps: [
    "Run a device breakdown across a meaningful period.",
    "Compare conversion rates between phone and computer.",
    "If phones are far worse everywhere, test your own site on a phone immediately.",
    "Combine device with placement to find format specific problems.",
    "Fix the website or the creative, depending on what the pattern shows.",
    "Re-measure and record what changed."
  ],
  mistakes: [
    "Testing new creative for weeks when the real problem is the mobile website.",
    "Looking at device data without placement data, missing the real pattern.",
    "Assuming your site works on a phone because it works on your computer."
  ],
  words: [
    { t: "Device breakdown", d: "Results split by phone, computer or tablet." },
    { t: "Conversion rate", d: "The share of clicks that turn into results." },
    { t: "Cross-analysis", d: "Looking at two breakdowns together to find a pattern." }
  ],
  takeaways: [
    "Device and placement together reveal what neither shows alone.",
    "Poor phone results across everything usually means a website problem.",
    "One weak placement on phones usually means a creative shape problem.",
    "Always test your own site on a real phone before blaming the ads."
  ],
  selfCheck: [
    "I have compared phone and computer conversion rates.",
    "I have used my own website on a phone recently, all the way to the end.",
    "I know which device produces most of my results."
  ],
  quiz: [
    { q: "Phone conversion is far worse than computer across every placement. What is the likely cause?", options: ["The creative", "The mobile version of your website", "The audience"], a: 1, why: "A pattern that appears everywhere points to the destination, not the ads." },
    { q: "One placement is weak on phones only. What is the likely cause?", options: ["A website problem", "The creative shape is wrong for that mobile format", "Your budget"], a: 1, why: "A problem in one placement only points to format fit." },
    { q: "What should you do before testing more creative?", options: ["Raise the budget", "Use your own website on a phone, all the way through to the end", "Change your objective"], a: 1, why: "Experiencing the real journey often reveals the problem immediately." }
  ],
  exercise: { task: "Complete your own buying or enquiry process on a phone, from ad click to final confirmation. Write down every point where it was slow, confusing or broken." },
  challenge: { task: "Produce a full device and placement analysis of your account: the cross-table, the three clearest patterns, the cause of each, and a prioritised fix list with the expected effect of each fix." }
}

});
