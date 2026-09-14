/* Module 24 - Ecommerce and Catalogs (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"6.24.1": {
  intro: "Selling products online has its own rules. This lesson covers what makes ecommerce advertising different from everything else in this course.",
  plain: [
    "When you sell a service, the advertisement starts a conversation. When you sell a product online, the advertisement can complete the entire sale within two minutes.",
    "That changes everything. Measurement is immediate rather than delayed. Value is known exactly rather than estimated. And the numbers that matter are about money rather than enquiries.",
    "It also means the whole journey is visible, which is both an advantage and a pressure: every weakness in your website shows up in the data."
  ],
  idea: [
    "Three characteristics define ecommerce advertising. Immediate measurement, because the purchase happens the same day. Known value, because you know exactly what each sale was worth. And a wide range of order sizes in most shops, which makes value based optimisation genuinely useful.",
    "The metrics shift accordingly. Cost per purchase matters, but return on ad spend matters more, and contribution after product costs matters most of all. A return of 3 is excellent for a business with 70 percent margins and ruinous for one with 20 percent.",
    "The other distinctive feature is the catalog. Once your products are in a structured file, Meta can build advertisements automatically, show people the exact items they viewed, and manage hundreds of products without you creating a single advertisement by hand.",
    "Finally, the post-click experience carries more weight than in any other type of advertising. A slow product page or a difficult checkout destroys results directly and visibly, which is why Level 9 devotes an entire module to it. For ecommerce, the website is part of the advertising."
  ],
  example: {
    title: "The same return, two outcomes",
    body: "Two shops both achieved a return of 3.2. The first sold handmade goods with a 68 percent margin, so each 100 of spend produced 320 of revenue and about 118 of contribution after product costs. The second resold electronics with an 18 percent margin, producing 320 of revenue and about minus 42 after product costs. Identical advertising performance, one business profitable and one losing money on every sale."
  },
  steps: [
    "Calculate your true product margin before setting any target.",
    "Work out the return on ad spend that breaks even for you.",
    "Set your target above that, not at an industry average.",
    "Build and maintain an accurate product catalog.",
    "Measure contribution, not only return.",
    "Treat your website speed and checkout as part of the advertising."
  ],
  mistakes: [
    "Using an industry standard return target without checking your own margin.",
    "Measuring return while ignoring product costs.",
    "Treating the website as separate from the advertising."
  ],
  words: [
    { t: "Return on ad spend", d: "Revenue divided by advertising spend." },
    { t: "Margin", d: "The share of the sale price you keep after product costs." },
    { t: "Contribution", d: "What remains after both product costs and advertising costs." },
    { t: "Break even return", d: "The return at which advertising exactly covers its own cost." }
  ],
  takeaways: [
    "Ecommerce has immediate measurement, known values and wide order variation.",
    "Return targets must come from your own margin, never from industry averages.",
    "Contribution after product costs is the figure that decides profitability.",
    "The website is part of the advertising, not separate from it."
  ],
  selfCheck: [
    "I know my true product margin.",
    "I know my break even return on ad spend.",
    "I measure contribution, not only return."
  ],
  quiz: [
    { q: "Why is a return of 3 not automatically good?", options: ["It is too low", "Whether it is profitable depends entirely on your product margin", "It depends on the season"], a: 1, why: "The same return is excellent at high margins and loss making at low ones." },
    { q: "What should set your return target?", options: ["Industry benchmarks", "Your own break even calculation from your margin", "Your competitor's return"], a: 1, why: "Only your own economics determine what return you need." },
    { q: "What figure decides profitability?", options: ["Return on ad spend", "Contribution after product and advertising costs", "Cost per click"], a: 1, why: "It is what the business actually keeps." }
  ],
  exercise: { task: "Calculate your break even return on ad spend: divide 1 by your margin as a decimal. If your margin is 40 percent, that is 1 divided by 0.4, which is 2.5. Compare it against your current return." },
  challenge: { task: "Build an ecommerce economics model: margin by product category, break even return for each, your target returns with reasoning, the contribution calculation, and the point at which each category stops being worth advertising." }
},

"6.24.2": {
  intro: "This lesson covers the campaign structure that suits most online shops today.",
  plain: [
    "Ecommerce structures used to be complicated: separate campaigns for each product category, each audience type and each stage of the journey.",
    "Modern accounts are far simpler, because the system handles the distribution that structure used to handle. Most shops now need two or three campaigns in total.",
    "Simplicity here is not laziness. It is what lets each part collect enough data to work."
  ],
  idea: [
    "The recommended structure for most shops has three parts. One automated shopping campaign carrying most of the budget, handling both new customer acquisition and retargeting through the catalog. One small standard campaign for creative testing, where you keep control so you can learn. And optionally one campaign for a specific strategic purpose, such as a product launch or a seasonal push.",
    "What this replaces is the older pattern of separate prospecting, retargeting, cart abandonment and category campaigns. Those splits fragmented budgets, created overlap, and made every campaign too small to learn from.",
    "Two structural points still matter. Set the existing customer cap on the automated campaign, or it will harvest people who would have bought anyway. And keep the testing campaign genuinely separate, with automation reduced, or you will lose the ability to learn what works.",
    "For very large catalogs, product group separation within the campaign can be useful, particularly to protect margin as covered later in this module. But that is separation inside one campaign, not additional campaigns."
  ],
  example: {
    title: "From eleven campaigns to three",
    body: "A shop ran eleven campaigns: one per product category, plus retargeting and cart abandonment. Each received a small budget and none reached enough purchases weekly to leave learning. They consolidated to one automated shopping campaign with 80 percent of budget, one testing campaign with 15, and one seasonal campaign with 5. Cost per purchase fell 29 percent in six weeks with the same total spend."
  },
  steps: [
    "Consolidate to one main automated shopping campaign.",
    "Set the existing customer cap according to your growth goals.",
    "Create one small testing campaign with automation reduced.",
    "Add a strategic campaign only for a specific temporary purpose.",
    "Use product groups inside the campaign rather than separate campaigns.",
    "Check that no two campaigns target substantially the same people."
  ],
  mistakes: [
    "One campaign per product category, which fragments the budget.",
    "Separate cart abandonment campaigns, which the automated campaign already handles.",
    "Letting the testing campaign use full automation, which prevents learning."
  ],
  words: [
    { t: "Consolidation", d: "Combining campaigns so each has enough data to learn from." },
    { t: "Testing campaign", d: "A separate campaign with reduced automation, used to learn what works." },
    { t: "Product group", d: "A subset of the catalog controlled separately inside one campaign." },
    { t: "Strategic campaign", d: "A temporary campaign for a specific purpose such as a launch." }
  ],
  takeaways: [
    "Most shops need two or three campaigns in total.",
    "One automated shopping campaign handles both acquisition and retargeting.",
    "Keep one small testing campaign with automation reduced.",
    "Use product groups inside campaigns rather than creating more campaigns."
  ],
  selfCheck: [
    "My structure is three campaigns or fewer.",
    "My testing campaign has automation reduced.",
    "No two campaigns target substantially the same people."
  ],
  quiz: [
    { q: "How many campaigns do most shops need?", options: ["One per product category", "Two or three in total", "Ten or more"], a: 1, why: "Fragmentation prevents any campaign from collecting enough data." },
    { q: "Why keep a separate testing campaign?", options: ["For reporting", "To retain control so you can learn what actually works", "Meta requires it"], a: 1, why: "Full automation improves results while removing your ability to attribute them." },
    { q: "Where should product separation happen?", options: ["In separate campaigns", "Through product groups inside one campaign", "In separate ad accounts"], a: 1, why: "It keeps budget consolidated while giving you control." }
  ],
  exercise: { task: "Count your current ecommerce campaigns and the weekly purchases each produces. Mark every campaign under 50 purchases a week as a consolidation candidate." },
  challenge: { task: "Design a consolidation plan: the current structure with volumes, the target structure, the merge sequence protecting learning, the product group configuration, the existing customer cap, and the expected effect on cost per purchase." }
},

"6.24.3": {
  intro: "A catalog is a structured file listing your products. This lesson covers what it contains and why it is the foundation of ecommerce advertising.",
  plain: [
    "A catalog is a list of everything you sell, written in a format Meta can read. For each product: what it is called, what it costs, what it looks like, where to buy it, and whether it is in stock.",
    "Once Meta has this, it can build advertisements automatically. Show a person the exact jacket they looked at last week, at the current price, with the current photograph, and stop showing it the moment it sells out.",
    "None of that requires you to create a single advertisement by hand, which is why the catalog is worth getting right."
  ],
  idea: [
    "The required fields are an identification code, a title, a description, availability, condition, price, a link to the product page, an image link and a brand. Optional but valuable fields include product category, colour, size, material, sale price and additional images.",
    "The identification code is the most important field because everything connects through it. Your pixel sends this code when someone views a product, and Meta matches it to the catalog entry. If the codes do not match exactly, nothing works, and this mismatch is the single most common catalog problem.",
    "Availability matters more than people expect. A catalog saying a product is in stock when it is not produces advertisements for things nobody can buy, which wastes budget and creates complaints. This is why update frequency matters.",
    "Titles deserve attention because they appear in the advertisement. A title reading SKU-4471-BLK-M tells a customer nothing. A title reading Black merino wool jumper, medium tells them exactly what it is. Many catalogs are built from internal systems and carry internal language into public advertisements.",
    "Finally, the catalog is a business asset like the pixel. It should be owned by your business portfolio, not by an agency or an individual."
  ],
  example: {
    title: "The mismatch that broke everything",
    body: "A shop's dynamic advertisements showed the wrong products constantly. The cause was that their website pixel sent the product code with a prefix, while the catalog stored it without. Every code failed to match. The system, unable to identify what people had viewed, showed essentially random products. Removing the prefix fixed months of poor performance in one afternoon."
  },
  steps: [
    "Create the catalog inside your business portfolio.",
    "Include every required field and the valuable optional ones.",
    "Confirm the product codes exactly match what your pixel sends.",
    "Write titles a customer would understand, not internal codes.",
    "Set up automatic updates at least daily.",
    "Check availability accuracy weekly."
  ],
  mistakes: [
    "Product codes in the catalog not matching what the pixel sends.",
    "Titles carrying internal product codes into public advertisements.",
    "Infrequent updates, so unavailable products are advertised."
  ],
  words: [
    { t: "Catalog", d: "A structured file listing your products for Meta to read." },
    { t: "Product identification code", d: "The unique code connecting your website, pixel and catalog." },
    { t: "Availability", d: "Whether a product is currently in stock." },
    { t: "Required field", d: "Information the catalog must contain to function." }
  ],
  takeaways: [
    "The catalog lets Meta build advertisements automatically from your products.",
    "Product codes must match exactly between pixel and catalog.",
    "Titles appear in advertisements, so they must be human readable.",
    "The catalog is a business asset and should be owned by your portfolio."
  ],
  selfCheck: [
    "My catalog sits in my business portfolio.",
    "My product codes match what the pixel sends.",
    "My titles would make sense to a customer."
  ],
  quiz: [
    { q: "What is the most common catalog problem?", options: ["Missing descriptions", "Product codes not matching between the pixel and the catalog", "Low resolution images"], a: 1, why: "Without matching codes, the system cannot identify what people viewed." },
    { q: "Why do titles matter?", options: ["For search ranking", "They appear in the advertisement, so customers read them", "They affect delivery"], a: 1, why: "Internal codes in titles tell customers nothing." },
    { q: "Who should own the catalog?", options: ["Your agency", "Your business portfolio", "An individual employee"], a: 1, why: "It is a business asset like the pixel and the Page." }
  ],
  exercise: { task: "Open a product page on your website, note the product code your pixel sends, and check whether that exact code appears in your catalog. Repeat for three products." },
  challenge: { task: "Produce a catalog specification: every field and its source, the code matching verification, the title writing rules, the update mechanism and frequency, the ownership and access, and the quality audit process." }
},

"6.24.4": {
  intro: "A product feed is how your catalog stays current. This lesson covers the ways to connect your shop and keep the data accurate.",
  plain: [
    "A catalog is a snapshot. A feed is what keeps refreshing that snapshot so it stays true.",
    "Without a feed, you would update prices and stock levels by hand, which nobody does reliably, which is why catalogs go stale within days.",
    "With a feed, the catalog updates itself from the same system that runs your shop."
  ],
  idea: [
    "There are four connection methods. A platform integration, where your shop software connects directly to Meta and updates automatically, which is the best option if available. A scheduled feed, where Meta fetches a file from a web address at set intervals. A manual upload, where you upload a file yourself. And the pixel based method, where the catalog builds itself from website activity, which is the least reliable.",
    "Frequency should match how fast your data changes. A shop with stable prices and plentiful stock can update daily. A shop with frequent price changes or limited stock should update hourly, which scheduled feeds support.",
    "Feed errors are common and often invisible. Meta reports them in Commerce Manager under diagnostics, showing products rejected for missing fields, broken image links, invalid prices or unreachable product pages. A catalog can appear healthy while a third of its products are silently rejected.",
    "The practical habit is to check the diagnostics monthly. Most shops discover rejected products they never knew about, sometimes including their best sellers.",
    "One further point: if you sell in several countries or currencies, feed structure becomes more complex. You generally need either separate feeds or a feed with country specific overrides for price and availability, since a single price cannot be correct everywhere."
  ],
  example: {
    title: "The third that never advertised",
    body: "A shop with 1,400 products checked their catalog diagnostics for the first time. 460 products were rejected: 210 for missing descriptions, 140 for broken image links after a website redesign, and 110 for product pages returning errors. A third of their range had been unadvertisable for months, including two of their five best sellers."
  },
  steps: [
    "Use your platform's direct integration if one exists.",
    "Otherwise set up a scheduled feed at an appropriate frequency.",
    "Match update frequency to how fast your prices and stock change.",
    "Check catalog diagnostics monthly for rejected products.",
    "Fix rejections in order of product importance.",
    "Set up country specific handling if you sell in several markets."
  ],
  mistakes: [
    "Never checking diagnostics, so silent rejections persist for months.",
    "Manual uploads, which stop happening as soon as someone is busy.",
    "One price for several countries, which is wrong in most of them."
  ],
  words: [
    { t: "Feed", d: "The automatic process keeping your catalog current." },
    { t: "Scheduled feed", d: "A file Meta fetches from a web address at set intervals." },
    { t: "Diagnostics", d: "The Commerce Manager section reporting rejected products and errors." },
    { t: "Rejection", d: "A product excluded from advertising because of a data problem." }
  ],
  takeaways: [
    "Use a platform integration where available, otherwise a scheduled feed.",
    "Match frequency to how fast your data changes.",
    "Check diagnostics monthly. Silent rejections are common.",
    "Multi country selling needs country specific price and availability."
  ],
  selfCheck: [
    "My catalog updates automatically at an appropriate frequency.",
    "I have checked diagnostics within the last month.",
    "Country specific pricing is handled correctly if applicable."
  ],
  quiz: [
    { q: "Why check catalog diagnostics?", options: ["For reporting", "Products can be silently rejected and never advertised", "Meta requires it"], a: 1, why: "Rejections produce no visible warning in the ad account." },
    { q: "What determines update frequency?", options: ["Your budget", "How fast your prices and stock levels change", "The number of products"], a: 1, why: "Stale data advertises wrong prices and unavailable products." },
    { q: "What is the least reliable catalog method?", options: ["Platform integration", "Building it from website activity through the pixel", "Scheduled feed"], a: 1, why: "It depends on people visiting pages and produces incomplete data." }
  ],
  exercise: { task: "Open Commerce Manager and check your catalog diagnostics. Count how many products are rejected and note the reasons. Fix the rejections affecting your best selling products first." },
  challenge: { task: "Build a feed management system: the connection method, the update frequency and its justification, the monthly diagnostic review, the rejection remediation process by product importance, the multi country handling, and the ownership." }
},

"6.24.5": {
  intro: "Dynamic Product Ads show each person the specific products they are most likely to buy. This lesson covers how they work.",
  plain: [
    "A normal advertisement shows the same product to everyone. A dynamic advertisement shows a different product to each person, chosen based on what they looked at or what the system predicts they want.",
    "Somebody who viewed a blue coat sees the blue coat. Somebody who bought boots last month sees things that go with boots. Somebody new sees whatever the system thinks suits them.",
    "You create one advertisement template. The system fills it with different products for different people, automatically, forever."
  ],
  idea: [
    "These advertisements draw the product image, title and price directly from your catalog at the moment of display. This means they are always current: if the price changed this morning, the advertisement shows the new price.",
    "There are two main uses. Retargeting, showing people products they viewed or added to their basket, which is the classic use and the one with the highest reported returns. And broad prospecting, showing predicted products to people who have never visited, which is now common inside automated shopping campaigns.",
    "The setup requires three things working together: an accurate catalog, a pixel sending the correct product codes with view, add to cart and purchase events, and the codes matching exactly between them.",
    "There is a design element that is frequently neglected. You can add a frame, a logo, a price overlay or a discount badge to the product images. Plain catalog images look like a shop listing. A simple consistent frame makes them look like advertising from a specific brand, and usually performs better.",
    "Finally, remember the caution from the attribution module. Retargeting dynamic advertisements report exceptionally high returns because they reach people already close to buying. Much of that is credit rather than cause, and the budget should be set accordingly."
  ],
  example: {
    title: "The frame that changed performance",
    body: "A shop ran dynamic retargeting with plain catalog images and achieved a reported return of 7. They added a consistent brand frame, a small logo and a price badge showing the saving. Reported return rose to 11 and, more importantly, click rate rose 60 percent, which meant the same audience produced considerably more traffic before exhausting itself."
  },
  steps: [
    "Confirm your catalog is accurate and your codes match.",
    "Verify the pixel sends view, add to cart and purchase with product codes.",
    "Create a dynamic advertisement template.",
    "Add a consistent visual frame, logo and price treatment.",
    "Set appropriate time windows for retargeting.",
    "Set budget according to incremental value, not reported return."
  ],
  mistakes: [
    "Using plain catalog images with no brand treatment.",
    "Setting budgets from the reported return, which overstates real value.",
    "Running dynamic ads while product codes do not match, so wrong products appear."
  ],
  words: [
    { t: "Dynamic Product Ad", d: "An advertisement that shows different products to different people automatically." },
    { t: "Template", d: "The advertisement structure that the catalog fills with products." },
    { t: "Product code matching", d: "The pixel and catalog using identical identifiers." },
    { t: "Visual frame", d: "A consistent brand treatment applied over catalog images." }
  ],
  takeaways: [
    "One template, filled automatically with different products for each person.",
    "Requires accurate catalog, correct pixel events and matching codes.",
    "Add a brand frame. Plain catalog images underperform.",
    "Reported returns overstate real value, so set budget accordingly."
  ],
  selfCheck: [
    "My product codes match between pixel and catalog.",
    "My dynamic ads carry a consistent brand treatment.",
    "My retargeting budget reflects incremental value, not reported return."
  ],
  quiz: [
    { q: "Where do dynamic advertisements get their images and prices?", options: ["From your uploaded creative", "From your catalog at the moment of display", "From the website automatically"], a: 1, why: "This is why they always show current prices." },
    { q: "What usually improves dynamic ad performance?", options: ["Larger budgets", "A consistent brand frame over the plain catalog images", "More products"], a: 1, why: "Plain listings look like a catalog rather than advertising." },
    { q: "Why be cautious with reported returns on dynamic retargeting?", options: ["The tracking is unreliable", "It reaches people already close to buying, so much of the credit is not cause", "The values are wrong"], a: 1, why: "High attributed return does not mean high incremental value." }
  ],
  exercise: { task: "Look at your dynamic advertisements as a customer would. Do they look like advertising from your brand, or like a plain shop listing? If the latter, design a simple consistent frame." },
  challenge: { task: "Design a complete dynamic advertising system: the catalog and pixel verification, the template designs with brand treatment, the retargeting windows and messages by recency, the prospecting configuration, and the budget set from incremental rather than attributed value." }
},

"6.24.6": {
  intro: "Catalog audiences are groups built from how people interacted with specific products. This lesson covers building and using them.",
  plain: [
    "A normal website audience knows someone visited your site. A catalog audience knows they looked at the blue coat, added the boots to their basket, and bought the scarf last month.",
    "That extra detail lets you say different things to different people. The person who abandoned a basket needs a different message from the person who browsed once and left.",
    "It also lets you exclude sensibly, such as not advertising a product to someone who already bought it."
  ],
  idea: [
    "The audiences you can build include: viewed a product, added to basket, purchased, and combinations such as added to basket but did not purchase. You can also specify product sets, so the audience covers only people who interacted with certain products.",
    "Time windows matter enormously here. Someone who abandoned a basket three hours ago is in a very different state from someone who did so three weeks ago. A common structure uses one to three days for urgent messages, four to fourteen days for reassurance and answers to objections, and fifteen to thirty days for a final incentive.",
    "Exclusions are equally important. Exclude purchasers from advertisements for the product they bought. Exclude recent purchasers from prospecting if you want new customers. And exclude people in a shorter window from the longer window audiences, so each person receives one message rather than three.",
    "There is a further use that is often overlooked: building lookalike audiences from high value purchasers. A lookalike of everyone who purchased is weaker than a lookalike of people who spent over a certain amount, and catalog data makes that segmentation possible.",
    "Finally, watch audience size. In smaller shops, a basket abandonment audience over three days may contain only a few hundred people, which is too small to advertise to efficiently. In that case widen the window or combine audiences."
  ],
  example: {
    title: "Three windows, three messages",
    body: "A shop split basket abandoners into three groups. Zero to two days received a simple reminder with the product image. Three to seven days received a message answering the two most common objections, about sizing and returns. Eight to twenty one days received a small discount. Total recovered sales rose 54 percent compared with sending the same discount message to everyone immediately, and the average discount given fell because most people converted before reaching the third group."
  },
  steps: [
    "Build audiences for viewed, added to basket and purchased.",
    "Split each by time window: short, medium and long.",
    "Write a different message for each window.",
    "Exclude shorter windows from longer ones so people receive one message.",
    "Exclude purchasers from advertisements for what they bought.",
    "Check audience sizes and widen windows where they are too small."
  ],
  mistakes: [
    "Sending the same message to someone who abandoned three hours ago and three weeks ago.",
    "Offering a discount immediately, which trains customers to abandon baskets.",
    "Failing to exclude purchasers, so people see advertisements for what they own."
  ],
  words: [
    { t: "Catalog audience", d: "A group built from interactions with specific products." },
    { t: "Product set", d: "A defined subset of your catalog used for targeting or reporting." },
    { t: "Time window", d: "How recently the interaction happened." },
    { t: "Sequential exclusion", d: "Excluding shorter windows from longer ones so messages do not overlap." }
  ],
  takeaways: [
    "Catalog audiences know which products people interacted with.",
    "Split by time window and write a different message for each.",
    "Exclude shorter windows from longer ones to avoid overlapping messages.",
    "Do not discount immediately. It teaches customers to abandon baskets."
  ],
  selfCheck: [
    "My catalog audiences are split by time window.",
    "Each window has its own message.",
    "Purchasers are excluded from advertisements for what they bought."
  ],
  quiz: [
    { q: "Why split basket abandoners by time?", options: ["For reporting", "Someone who abandoned three hours ago is in a different state from three weeks ago", "To reduce costs"], a: 1, why: "Different states need different messages." },
    { q: "What is the risk of an immediate discount to abandoners?", options: ["It costs money", "It teaches customers to abandon baskets deliberately to receive discounts", "Meta rejects it"], a: 1, why: "Customers learn the pattern quickly and it becomes expensive." },
    { q: "What must be excluded from longer window audiences?", options: ["Nothing", "The shorter windows, so each person receives one message", "All purchasers only"], a: 1, why: "Without it, one person sits in three audiences and receives three messages." }
  ],
  exercise: { task: "Build three basket abandonment audiences at different time windows and check the size of each. Write the specific message each window should receive." },
  challenge: { task: "Design a complete catalog audience architecture: every audience with its time window, the message for each, the exclusion structure, the audience size checks, the lookalike sources from high value purchasers, and the review process." }
},

"6.24.7": {
  intro: "Commerce Manager is where catalogs, shops and orders are managed. This lesson covers the parts that affect your advertising.",
  plain: [
    "Commerce Manager is the control room for everything product related: your catalog, your shop on Facebook and Instagram, and if you sell through those platforms directly, your orders.",
    "Most advertisers only ever use one part of it, the catalog. But the diagnostics, the product sets and the shop settings all affect how your advertising performs."
  ],
  idea: [
    "The catalog section is where you manage products, check diagnostics and create product sets. Product sets are subsets of your catalog, and they are the main strategic control available in ecommerce advertising. Creating sets by margin, by season, by best seller status or by stock level lets you direct budget deliberately.",
    "The diagnostics section reports rejected products and warnings. As covered earlier, this should be checked monthly.",
    "The shops section controls whether people can browse and buy within Facebook and Instagram. This matters for advertising because it changes the buying journey: a person can complete a purchase without leaving the app, which removes the website loading step entirely. For shops in markets with slow connections, or with younger audiences who prefer staying in the app, this can meaningfully improve conversion.",
    "There are also settings for taxes, shipping and returns policies, which affect what customers see and therefore how many complete a purchase.",
    "The practical priority for an advertiser is: check diagnostics monthly, build product sets for strategic control, and consider whether in app buying suits your market."
  ],
  example: {
    title: "Product sets by margin",
    body: "A shop created three product sets: high margin above 50 percent, medium, and low margin below 25 percent. They set their main campaign to exclude the low margin set entirely. Revenue fell 9 percent and contribution rose 34 percent, because the system had previously been promoting cheap easy sellers that earned almost nothing after costs."
  },
  steps: [
    "Open Commerce Manager and review your catalog and diagnostics.",
    "Create product sets by margin as the first priority.",
    "Create further sets by season, stock level or best seller status.",
    "Use sets to direct or exclude budget deliberately.",
    "Review whether in app buying suits your market and audience.",
    "Check that shipping, tax and returns information is accurate and clear."
  ],
  mistakes: [
    "Never creating product sets, leaving the system to promote whatever sells easiest.",
    "Ignoring diagnostics for months.",
    "Enabling in app shops without checking the fulfilment implications."
  ],
  words: [
    { t: "Commerce Manager", d: "The area where catalogs, shops and orders are managed." },
    { t: "Product set", d: "A defined subset of your catalog used for targeting, exclusion or reporting." },
    { t: "In app shop", d: "Allowing people to browse and buy without leaving Facebook or Instagram." },
    { t: "Fulfilment", d: "How orders are processed and delivered." }
  ],
  takeaways: [
    "Product sets are the main strategic control in ecommerce advertising.",
    "Create sets by margin first, then by other business priorities.",
    "Check diagnostics monthly for silently rejected products.",
    "In app buying removes the website loading step, which suits some markets."
  ],
  selfCheck: [
    "I have product sets including by margin.",
    "I check diagnostics monthly.",
    "I have considered whether in app buying suits my market."
  ],
  quiz: [
    { q: "What is the main strategic control in ecommerce advertising?", options: ["Bid strategy", "Product sets directing which products get promoted", "Placement selection"], a: 1, why: "Without them the system promotes whatever sells most easily, regardless of margin." },
    { q: "Why might excluding low margin products increase profit?", options: ["They are unpopular", "The system was spending budget on easy sellers that earn almost nothing after costs", "They have poor images"], a: 1, why: "Revenue and profit are different things." },
    { q: "What does an in app shop change?", options: ["Your catalog structure", "People can buy without leaving the app, removing the website loading step", "Your product codes"], a: 1, why: "It shortens the journey, which helps in markets with slow connections." }
  ],
  exercise: { task: "Create three product sets by margin band. Check what proportion of your advertising spend currently goes to your lowest margin products." },
  challenge: { task: "Build a Commerce Manager strategy: the product set structure by margin and other priorities, the budget direction rules, the diagnostic review schedule, the in app shop assessment for your market, and the reporting by product set." }
},

"6.24.8": {
  intro: "This lesson covers how to use automated shopping campaigns well, building on the earlier introduction with practical operating detail.",
  plain: [
    "The automated shopping campaign does most of the work. Your job becomes deciding what it works with, what it is allowed to promote, and how you judge it.",
    "That is a smaller job than the old one, and the parts that remain matter more than they used to."
  ],
  idea: [
    "Four operating decisions determine how well these campaigns perform.",
    "First, the catalog quality, covered throughout this module. Everything the campaign shows comes from it.",
    "Second, the product sets. Excluding low margin or unprofitable products is the single most valuable control available, and it is frequently unused.",
    "Third, the existing customer cap. Left unset, the system will find existing customers because they convert most readily, which flatters your reported return while producing little growth. Set it deliberately according to whether you want growth or efficiency.",
    "Fourth, the creative supplied alongside the catalog. These campaigns accept your own creative as well as catalog products, and supplying strong brand creative usually improves performance beyond catalog images alone.",
    "The operating rhythm should be weekly, not daily. Check spend against budget, cost per purchase against your target, the new versus returning customer split, and performance by product set. Make at most one change per week, and give each change a fortnight before judging."
  ],
  example: {
    title: "Four settings, one campaign",
    body: "A shop reviewed their automated campaign against these four points. Catalog: 18 percent of products rejected, fixed. Product sets: none existed, created and low margin excluded. Existing customer cap: unset at 61 percent of spend, capped at 30. Creative: catalog only, added six brand videos. Over ten weeks, revenue rose 22 percent and contribution rose 71 percent, from the same budget."
  },
  steps: [
    "Fix catalog quality and rejections first.",
    "Create product sets and exclude unprofitable products.",
    "Set the existing customer cap according to your growth goals.",
    "Supply strong brand creative alongside the catalog.",
    "Review weekly: spend, cost per purchase, customer split, product set performance.",
    "Make at most one change per week and allow a fortnight to judge."
  ],
  mistakes: [
    "Leaving the existing customer cap unset and celebrating the flattering return.",
    "Supplying no creative and relying entirely on catalog images.",
    "Making several changes a week, which prevents the campaign from stabilising."
  ],
  words: [
    { t: "Operating decision", d: "A setting that determines how the automated campaign behaves." },
    { t: "Existing customer cap", d: "The share of budget allowed to reach previous buyers." },
    { t: "Brand creative", d: "Your own advertisements supplied alongside catalog products." },
    { t: "Operating rhythm", d: "The regular schedule of review and change." }
  ],
  takeaways: [
    "Four decisions: catalog quality, product sets, customer cap, supplied creative.",
    "The existing customer cap is the most commonly neglected setting.",
    "Supply brand creative as well as catalog products.",
    "Review weekly, change once a week, judge after a fortnight."
  ],
  selfCheck: [
    "All four operating decisions have been made deliberately.",
    "I review weekly rather than daily.",
    "I supply brand creative alongside the catalog."
  ],
  quiz: [
    { q: "Which setting is most commonly neglected?", options: ["The budget", "The existing customer cap", "The location"], a: 1, why: "Left unset, the campaign harvests previous buyers and flatters the reported return." },
    { q: "Should you supply your own creative?", options: ["No, the catalog is enough", "Yes, brand creative alongside catalog products usually improves performance", "Only for retargeting"], a: 1, why: "Catalog images alone look like listings rather than advertising." },
    { q: "What is the right review rhythm?", options: ["Daily", "Weekly, with at most one change per week", "Monthly"], a: 1, why: "Frequent changes prevent the campaign from stabilising." }
  ],
  exercise: { task: "Review your automated shopping campaign against the four operating decisions. Write down the current state of each and which one you will address first." },
  challenge: { task: "Write an operating manual for automated shopping campaigns: the four decisions with your settings and reasoning, the weekly review checklist, the change rules, the escalation criteria, and the monthly deeper review by product set." }
},

"6.24.9": {
  intro: "This final lesson of the module covers scaling an ecommerce account profitably rather than merely growing revenue.",
  plain: [
    "Revenue is easy to grow. Spend more, accept a lower return, and revenue rises. Whether the business is better off is a completely different question.",
    "Profitable scaling means growing revenue while keeping what you actually keep. That requires knowing your numbers well enough to say exactly how far you can push before growth starts costing you money."
  ],
  idea: [
    "The calculation that governs everything is contribution per order: the selling price, minus product cost, minus shipping and transaction costs, minus advertising cost. If that number is positive, each additional order helps. If it is negative, each additional order harms.",
    "The important refinement is marginal rather than average, as covered in the scaling module. Your average return may be 4, while the additional orders from your last budget increase came at a return of 1.8. If your break even is 2.2, that last increase was losing money even though the average looked healthy.",
    "The second consideration is customer lifetime value. If customers reorder, a first order at break even may be highly profitable over a year. Shops that only measure the first order systematically underspend, and shops that assume generous repeat rates without measuring them systematically overspend.",
    "The third is capacity and cash. Growth consumes stock, warehouse space and working capital. An advertising plan that outruns your ability to hold stock produces stockouts, which waste the advertising that created the demand.",
    "The practical approach is to establish your break even return, measure your marginal return as you scale, know your genuine repeat purchase rate, and increase budget in steps while watching all three. Stop when marginal contribution reaches zero, not when the average return looks uncomfortable."
  ],
  example: {
    title: "Scaling to the right point",
    body: "A shop had an average return of 4.1 and a break even of 2.3. They increased budget in six steps over three months, measuring the marginal return at each. Steps one to four produced marginal returns above 3. Step five produced 2.6. Step six produced 1.9, below break even, so they returned to the step five level. Revenue had grown 71 percent and contribution had grown 58 percent, and they knew precisely where the ceiling sat."
  },
  steps: [
    "Calculate contribution per order including all costs.",
    "Establish your break even return on ad spend.",
    "Measure your genuine repeat purchase rate over twelve months.",
    "Increase budget in steps, calculating marginal return at each.",
    "Check stock and cash capacity before each increase.",
    "Stop when marginal contribution reaches zero, and record the ceiling."
  ],
  mistakes: [
    "Scaling on average return rather than marginal return.",
    "Assuming a repeat purchase rate rather than measuring it.",
    "Growing demand faster than the business can supply stock."
  ],
  words: [
    { t: "Contribution per order", d: "What you keep from one order after all costs including advertising." },
    { t: "Marginal return", d: "The return produced by the additional spend, not the average." },
    { t: "Repeat purchase rate", d: "How often customers buy again, which changes what a first order is worth." },
    { t: "Capacity constraint", d: "Limits on stock, space or cash that growth can exceed." }
  ],
  takeaways: [
    "Contribution per order decides whether growth helps or harms.",
    "Judge scaling on marginal return, not average return.",
    "Measure your repeat purchase rate rather than assuming it.",
    "Check stock and cash capacity before each increase."
  ],
  selfCheck: [
    "I know my contribution per order and my break even return.",
    "I measure marginal return when I scale.",
    "I have measured my genuine repeat purchase rate."
  ],
  quiz: [
    { q: "What should govern how far you scale?", options: ["Average return on ad spend", "Marginal contribution from the additional spend", "Competitor spending"], a: 1, why: "The average hides whether the last increase was profitable." },
    { q: "Why does repeat purchase rate matter?", options: ["It affects delivery", "A first order at break even may be highly profitable over a year", "It changes your catalog"], a: 1, why: "It determines what a new customer is genuinely worth." },
    { q: "What can outrun advertising growth?", options: ["Your catalog size", "Stock, warehouse space and working capital", "Your pixel"], a: 1, why: "Demand you cannot supply wastes the advertising that created it." }
  ],
  exercise: { task: "Calculate your contribution per order including product cost, shipping, transaction fees and advertising. Then calculate your break even return and compare it against your current return." },
  challenge: { task: "Build a profitable scaling model: contribution per order by product category, break even returns, measured repeat purchase rates, the marginal return at each historical budget level, the capacity constraints, and a stepped scaling plan with stopping rules." }
}

});
