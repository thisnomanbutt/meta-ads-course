/* Module 23 - Advantage+ and Meta AI Campaigns (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"6.23.1": {
  intro: "Advantage+ is Meta's name for its automated tools. This lesson explains what the name covers and how to think about handing over control.",
  plain: [
    "Imagine hiring a driver. You can tell them every turn to take, or you can give them the address and let them choose the route.",
    "If you know the city better than they do, giving directions is sensible. If they drive it every day and can see the traffic, your directions will make the journey longer.",
    "Advantage+ is the second option. You give the destination and the system chooses the route. The question in every case is simply whether you genuinely know something it does not."
  ],
  idea: [
    "The name Advantage+ appears in several places and means different things in each. Advantage+ audience means the system may reach beyond your stated targeting. Advantage+ placements means it chooses where ads appear. Advantage+ creative means it adjusts and combines your creative. And Advantage+ shopping or sales campaigns are complete campaign types with most settings automated.",
    "The underlying pattern is the same throughout: fewer settings for you, more decisions for the system. Meta has moved consistently in this direction for years, and the direction is unlikely to reverse.",
    "The honest position is that automation usually wins when you have no specific knowledge to add, and loses when you do. Meta can see auction prices, user behaviour and response patterns you cannot. It cannot see that your product cannot ship to a particular region, that a certain customer type always cancels, or that a regulator restricts certain claims.",
    "So the working rule for the whole module: automate everything except what you know and it does not. Then verify by testing rather than by assumption, because most people are wrong about what they know."
  ],
  example: {
    title: "Knowledge the system did not have",
    body: "A business let the system target freely and performance was good, except that a growing share of leads came from a region where their service was not available. The system had found cheap responsive people who could never buy, because nothing in the data told it they could not. Adding one geographic exclusion, which was genuine knowledge the system lacked, improved cost per customer by 23 percent while leaving everything else automated."
  },
  steps: [
    "List what you genuinely know that the system cannot observe.",
    "Keep manual control only over those things.",
    "Automate everything else.",
    "Test each restriction you keep, to confirm it is genuine knowledge rather than habit.",
    "Re-check periodically, since both the tools and your knowledge change.",
    "Judge every automation decision on cost per customer, not on how it feels."
  ],
  mistakes: [
    "Refusing automation because it feels like losing control.",
    "Accepting all automation without applying knowledge the system genuinely lacks.",
    "Never testing whether your restrictions actually help."
  ],
  words: [
    { t: "Advantage+", d: "Meta's name for its automated tools, covering audience, placements, creative and campaign types." },
    { t: "Automation", d: "Letting the system make decisions rather than setting them yourself." },
    { t: "Genuine knowledge", d: "Something true about your business the system cannot observe." },
    { t: "Habit restriction", d: "A limit kept out of routine rather than evidence." }
  ],
  takeaways: [
    "Advantage+ means fewer settings for you and more decisions for the system.",
    "Automation wins where you have no specific knowledge to add.",
    "Keep control only over what you genuinely know and it cannot see.",
    "Test your restrictions. Most are habit rather than knowledge."
  ],
  selfCheck: [
    "I can list what I genuinely know that the system cannot observe.",
    "My manual restrictions are limited to those things.",
    "I have tested at least one restriction to confirm it helps."
  ],
  quiz: [
    { q: "When does automation usually lose?", options: ["Always", "When you have genuine knowledge the system cannot observe", "In large accounts"], a: 1, why: "Business constraints and regulatory limits are invisible in the data." },
    { q: "What is the working rule for automation?", options: ["Automate nothing", "Automate everything except what you genuinely know and it does not", "Automate everything"], a: 1, why: "It captures the system's strengths while applying your unique information." },
    { q: "What should you do with restrictions you have kept for years?", options: ["Leave them", "Test whether they are genuine knowledge or habit", "Add more"], a: 1, why: "Most long standing restrictions turn out to be untested habit." }
  ],
  exercise: { task: "List every restriction currently in your account. Next to each, write whether it reflects something the system genuinely cannot know, or whether it is habit. Test one habit restriction by removing it." },
  challenge: { task: "Write your automation policy: what is always automated, what is always controlled manually with the business reason for each, the testing protocol for restrictions, and the quarterly review that reassesses the boundary as tools change." }
},

"6.23.2": {
  intro: "Advantage+ audience lets the system reach beyond the targeting you specified. This lesson explains how it behaves and when to use it.",
  plain: [
    "You tell the system: show my advertisement to people interested in gardening. With Advantage+ audience switched on, it treats that as a suggestion rather than a boundary.",
    "It starts with your suggestion, watches who actually responds, and then goes looking for similar people whether or not they match what you asked for.",
    "This frequently finds customers you would never have targeted, and that is the point. It also means you have less control over who is reached."
  ],
  idea: [
    "The mechanism is that your specified audience becomes a starting signal rather than a fixed limit. The system prioritises the people you described, then expands as it learns who actually converts.",
    "Certain things remain hard limits regardless. Your location settings, your minimum age where legally required, and your exclusions are respected. Advantage+ audience does not override exclusions, which is important: your customer list exclusion and your retargeting exclusion still function.",
    "It tends to work well when your specified audience was arbitrary anyway, which is most interest based targeting. It tends to work less well when your audience was carefully constructed from real customer data, because in that case your specification contained genuine information.",
    "The practical test is simple. Run your existing targeting against the same targeting with expansion enabled, at the same budget, and compare cost per customer over enough volume. Most accounts find the expanded version performs as well or better, which tells you the original restrictions were not adding value.",
    "One important detail for accounts with exclusions: verify after enabling that your exclusions are still applied as expected, because assumptions here are worth checking rather than trusting."
  ],
  example: {
    title: "The audience nobody would have chosen",
    body: "A company selling office chairs targeted office workers and interior design interests. With audience expansion enabled, the system found strong response among people who worked from home in rural areas, a group nobody had considered and which matched none of the original interests. That group became 30 percent of sales within three months. Human targeting had never been going to find them."
  },
  steps: [
    "Keep your location, legal age limits and exclusions in place.",
    "Enable audience expansion on one ad set as a test.",
    "Run it against your existing targeting at equal budget.",
    "Compare cost per customer over enough volume to be meaningful.",
    "Verify exclusions are still functioning as expected.",
    "Adopt the winner and re-test periodically."
  ],
  mistakes: [
    "Assuming expansion overrides exclusions, and therefore avoiding it unnecessarily.",
    "Enabling it on a carefully built customer based audience where your specification carried real information.",
    "Judging it on cost per lead rather than cost per customer."
  ],
  words: [
    { t: "Audience expansion", d: "Allowing the system to reach beyond your specified targeting." },
    { t: "Starting signal", d: "Your specified audience used as a hint rather than a boundary." },
    { t: "Hard limit", d: "A setting that is always respected, such as location or exclusions." }
  ],
  takeaways: [
    "Your targeting becomes a starting signal rather than a boundary.",
    "Location, legal age limits and exclusions are still respected.",
    "It usually helps where your targeting was arbitrary, which is most interest targeting.",
    "Test it against your existing setup on cost per customer."
  ],
  selfCheck: [
    "I know which of my settings remain hard limits.",
    "I have tested expansion against my existing targeting.",
    "I verified my exclusions still function after enabling it."
  ],
  quiz: [
    { q: "What still applies when audience expansion is enabled?", options: ["Nothing", "Location, legally required age limits and your exclusions", "Only the budget"], a: 1, why: "Expansion widens interest based targeting, not your genuine boundaries." },
    { q: "When is expansion least likely to help?", options: ["With arbitrary interest targeting", "When your audience was carefully built from real customer data", "With broad targeting"], a: 1, why: "In that case your specification contained genuine information the system lacks." },
    { q: "How should expansion be judged?", options: ["By audience size", "By cost per customer over meaningful volume", "By reach"], a: 1, why: "Only the business outcome settles whether the wider reach was valuable." }
  ],
  exercise: { task: "Set up a test comparing your current targeting against the same targeting with expansion enabled. Equal budgets, same creative. Write down the decision rule before you start." },
  challenge: { task: "Design an audience automation programme: which audiences are tested for expansion and in what order, the exclusion verification procedure, the test structure, the decision criteria, and how findings change your overall targeting strategy." }
},

"6.23.3": {
  intro: "Advantage+ placements lets the system choose where your ads appear. This lesson covers the setting most advertisers should simply leave on.",
  plain: [
    "This is the same idea covered in the placements module, and it remains the clearest case where automation wins.",
    "The system can see, second by second, which positions are cheap and which are producing results. You cannot. Restricting its choices removes cheap opportunities and raises your average cost."
  ],
  idea: [
    "With this enabled, your advertisement is eligible for every placement its format and objective allow, and budget moves toward whichever is producing results most cheaply.",
    "The consistent finding across most accounts is that this outperforms any hand picked combination. The reasons are that the system reacts faster than any human, it evaluates continuously rather than weekly, and it accounts for interactions between placements that are not visible in reports.",
    "The three legitimate reasons to restrict were covered earlier and still apply: a legal or brand requirement, a creative that only functions in one format, and proven repeated waste after the creative was properly adapted for that placement.",
    "The requirement that makes it work is creative in the right shapes. Automatic placements with only a horizontal image is not really automation, it is automation with one hand tied. Supply square, vertical and full vertical versions and the setting can do its job.",
    "One practical addition: placement customisation lets you supply a different creative file per placement while still allowing all placements. This gives you format control without giving up reach, and it is underused."
  ],
  example: {
    title: "Control without restriction",
    body: "A brand insisted their Stories creative must be a specific vertical design, and had been excluding Stories because uploaded feed images looked wrong there. Using placement customisation, they supplied the correct vertical file for Stories while leaving all placements enabled. Stories went from excluded to their second cheapest placement within a month."
  },
  steps: [
    "Enable automatic placements on all ad sets.",
    "Supply creative in square, vertical and full vertical shapes.",
    "Use placement customisation where a specific placement needs a specific file.",
    "Review the placement breakdown after enough results.",
    "Improve creative for weak placements rather than excluding them.",
    "Exclude only for legal, brand or proven repeated waste reasons."
  ],
  mistakes: [
    "Enabling automatic placements with only one creative shape.",
    "Excluding placements before adapting the creative for them.",
    "Assuming placement customisation requires excluding other placements."
  ],
  words: [
    { t: "Automatic placements", d: "Letting the system use every eligible position and move budget freely." },
    { t: "Placement customisation", d: "Supplying a different creative file for specific placements." },
    { t: "Eligible placement", d: "A position your format and objective are permitted to use." }
  ],
  takeaways: [
    "Automatic placements outperforms hand picked combinations in most accounts.",
    "It only works properly when creative exists in the right shapes.",
    "Placement customisation gives format control without losing reach.",
    "Exclude only for legal, brand or proven waste reasons."
  ],
  selfCheck: [
    "All my ad sets use automatic placements.",
    "My creative exists in every required shape.",
    "I use placement customisation rather than exclusion where formats differ."
  ],
  quiz: [
    { q: "What does automatic placements require to work properly?", options: ["A large budget", "Creative supplied in the right shapes for each format", "Manual review"], a: 1, why: "Unsuitable creative sets some placements up to fail." },
    { q: "What is placement customisation?", options: ["Excluding placements", "Supplying a different creative file per placement while keeping all enabled", "Changing the budget by placement"], a: 1, why: "It gives format control without sacrificing reach." },
    { q: "Why does automation beat hand picking here?", options: ["Meta favours it", "It reacts continuously to changing prices and results in a way humans cannot", "It reaches more people"], a: 1, why: "The advantage is speed and frequency of evaluation." }
  ],
  exercise: { task: "Check every ad set for placement exclusions. For each one you find, write the reason. Where the reason is creative format, replace the exclusion with placement customisation instead." },
  challenge: { task: "Build a placement and creative system: the shapes produced for every campaign, the customisation rules by placement, the review process for placement performance, the criteria justifying exclusion, and the documentation for any exclusion kept." }
},

"6.23.4": {
  intro: "Advantage+ creative automatically adjusts and combines your creative for each viewer. This lesson covers what it does and how to control it.",
  plain: [
    "You supply several images, several headlines and several pieces of text. Rather than fixing one combination for everyone, the system mixes them and shows each person the combination it expects will work best for them.",
    "It also makes small adjustments: brightness, cropping, adding music, applying visual treatments.",
    "The result is that two people may see meaningfully different advertisements built from the same materials. That is powerful, and it is also why you must check what it produces."
  ],
  idea: [
    "The features divide into two groups. Combination features, which mix your supplied assets in different arrangements. And enhancement features, which alter your assets: adjusting the image, adding music, generating text variations, expanding images to fit shapes.",
    "The combination features are generally safe and genuinely useful, because everything shown is something you supplied. The enhancement features need review, because they produce material you did not create, as covered in the AI creative module.",
    "The performance case is real. With enough assets and enough volume, personalised combinations outperform a single fixed advertisement in most accounts. The cost, again, is that you cannot easily say which element caused the result, which weakens your learning.",
    "The practical approach that keeps both benefits: use full creative automation in your scaling campaigns, where results matter more than understanding, and keep fixed creative in your testing campaigns, where understanding is the entire purpose.",
    "For regulated industries, review every enhancement individually. Automatically generated text has produced compliance problems for financial and healthcare advertisers, and the fact that a machine wrote it is not a defence."
  ],
  example: {
    title: "Separating the two jobs",
    body: "An account enabled full creative automation everywhere and saw an 11 percent improvement in cost per purchase. Three months later they could not answer which of their four angles was working, because every advertisement had become a shifting combination. They moved testing into separate campaigns with automation disabled, kept it enabled for scaling, and regained their ability to learn while keeping the performance gain."
  },
  steps: [
    "Supply several images, headlines and text variations.",
    "Enable combination features in scaling campaigns.",
    "Review every enhancement feature before enabling it.",
    "Disable automation in campaigns used for testing specific variables.",
    "In regulated industries, review generated text individually.",
    "Check the actual combinations being shown, not just the settings."
  ],
  mistakes: [
    "Enabling automation everywhere and losing the ability to learn anything.",
    "Allowing generated text in regulated industries without review.",
    "Supplying only one asset, which leaves the system nothing to combine."
  ],
  words: [
    { t: "Combination feature", d: "Mixing your supplied assets into different arrangements." },
    { t: "Enhancement feature", d: "Altering your assets or generating new material." },
    { t: "Personalised combination", d: "A different arrangement shown to different people." },
    { t: "Learning cost", d: "The loss of understanding when many elements vary at once." }
  ],
  takeaways: [
    "Combination features mix what you supplied. Enhancement features create new material.",
    "Combination is generally safe. Enhancement needs review.",
    "Automate in scaling campaigns, keep fixed creative in testing campaigns.",
    "Regulated industries must review generated text individually."
  ],
  selfCheck: [
    "I know which features are combination and which are enhancement.",
    "My testing campaigns have automation disabled.",
    "I have reviewed what the system actually produces."
  ],
  quiz: [
    { q: "What is the difference between combination and enhancement features?", options: ["Nothing", "Combination mixes what you supplied, enhancement creates or alters material", "Combination costs more"], a: 1, why: "One rearranges your work, the other produces something you did not make." },
    { q: "Where should creative automation be disabled?", options: ["Everywhere", "In campaigns used to test a specific variable", "In scaling campaigns"], a: 1, why: "Testing requires knowing exactly what changed." },
    { q: "What must regulated industries do?", options: ["Avoid Meta", "Review generated text individually before it runs", "Enable everything"], a: 1, why: "Automatically produced wording can still create compliance breaches." }
  ],
  exercise: { task: "Open one live advertisement and list every creative automation feature enabled. Preview what the system produces and note anything you would not have approved yourself." },
  challenge: { task: "Write a creative automation policy: the features allowed by campaign type, the review requirements for enhancements, the separation between testing and scaling campaigns, the regulated content approval process, and the periodic audit of live combinations." }
},

"6.23.5": {
  intro: "Advantage+ Sales campaigns automate most of the campaign setup for businesses selling products. This lesson covers when to use them.",
  plain: [
    "A normal campaign asks you to make perhaps twenty decisions. An Advantage+ Sales campaign asks for about five: budget, location, creative, and a couple of settings.",
    "Everything else is decided by the system: who to reach, where to show, how to balance new customers against existing ones, and which creative to show whom.",
    "For many businesses this performs better than the twenty decision version, because most of those twenty decisions were guesses."
  ],
  idea: [
    "The campaign type is designed for businesses selling products online. You supply your catalog or creative, your budget and your location, and the system handles the rest.",
    "One genuinely useful control it does offer is the existing customer budget cap. You can specify what proportion of the budget may go to people who have already bought from you. This matters because a system optimising for purchases will naturally favour existing customers, who buy more readily, and a business wanting growth needs new customers instead.",
    "The setting to watch is that these campaigns tend to consume budget from your other campaigns' opportunities. Running an Advantage+ Sales campaign alongside a standard campaign targeting similar people means competing against yourself, as covered in the overlap lesson.",
    "The evidence across most ecommerce accounts is that this campaign type performs at least as well as a well built manual campaign, and considerably better than a poorly built one. The main reason to avoid it is a genuine need for control it does not offer.",
    "The recommended structure for most product businesses is now one Advantage+ Sales campaign carrying most of the budget, plus a small standard campaign for creative testing where control is needed."
  ],
  example: {
    title: "The existing customer cap",
    body: "A store launched an Advantage+ Sales campaign and saw an excellent return of 6.2. Examining the breakdown showed 71 percent of purchases came from existing customers, who would largely have bought anyway. They set the existing customer cap to 25 percent. Reported return fell to 3.8, and new customer acquisition tripled. The lower number represented far more business growth than the higher one."
  },
  steps: [
    "Confirm you sell products and have a catalog or strong product creative.",
    "Create one Advantage+ Sales campaign with most of your budget.",
    "Set the existing customer budget cap according to your growth goals.",
    "Avoid running standard campaigns targeting the same people alongside it.",
    "Keep a small standard campaign for creative testing.",
    "Judge it on new customer acquisition, not only on total return."
  ],
  mistakes: [
    "Leaving the existing customer cap unset, so the campaign harvests existing buyers.",
    "Running overlapping standard campaigns, which competes against yourself.",
    "Judging by total return, which flatters campaigns that target existing customers."
  ],
  words: [
    { t: "Advantage+ Sales", d: "An automated campaign type for businesses selling products." },
    { t: "Existing customer cap", d: "A limit on the share of budget spent on people who already bought." },
    { t: "New customer acquisition", d: "Purchases from people who have not bought before." },
    { t: "Self competition", d: "Two of your own campaigns bidding for the same people." }
  ],
  takeaways: [
    "It automates most decisions and performs at least as well as a good manual campaign.",
    "Set the existing customer cap according to your growth goals.",
    "Do not run overlapping standard campaigns alongside it.",
    "Judge on new customer acquisition, not total return."
  ],
  selfCheck: [
    "My existing customer cap reflects my growth goals.",
    "I am not running overlapping campaigns against it.",
    "I track new customer acquisition separately."
  ],
  quiz: [
    { q: "Why set an existing customer cap?", options: ["To reduce costs", "Because the system will otherwise favour existing customers who buy readily", "Meta requires it"], a: 1, why: "A high reported return can hide the fact that no new customers are being acquired." },
    { q: "What should you avoid running alongside it?", options: ["Creative tests", "Standard campaigns targeting the same people", "Retargeting"], a: 1, why: "Overlapping campaigns compete against each other and raise your own prices." },
    { q: "How should the campaign be judged?", options: ["Total return only", "New customer acquisition alongside return", "Impressions"], a: 1, why: "Total return is flattered by sales to existing customers." }
  ],
  exercise: { task: "If you sell products, check what proportion of your purchases come from existing customers. Decide what your existing customer cap should be based on your growth goals, and set it." },
  challenge: { task: "Design an ecommerce account structure using Advantage+ Sales: the budget split, the existing customer cap and its reasoning, the supporting testing campaign, the overlap prevention, and the reporting that separates new from returning customer revenue." }
},

"6.23.6": {
  intro: "Advantage+ Leads campaigns bring the same automation to businesses collecting enquiries. This lesson covers the differences that matter.",
  plain: [
    "The same idea as the sales version, applied to lead generation. Fewer settings, more automation, the system deciding who to reach.",
    "The important difference is that leads are much easier to produce than sales, which means an automated system optimising for leads can produce a great many worthless ones very efficiently.",
    "So the automation is more useful here, and also more dangerous, depending entirely on what signal you feed it."
  ],
  idea: [
    "The campaign automates audience selection, placement and creative combination while you supply the form or destination, budget and location.",
    "The critical decision is the optimisation event, and it matters more here than anywhere else in this module. Automation applied to lead volume will find you an enormous number of low intent enquiries, because that is genuinely what you asked for and the system is genuinely good at it.",
    "The correct approach is to use this campaign type together with the feedback loop from the previous module. Send qualified leads or customer values back, and optimise toward those. The automation then works in your favour rather than against it.",
    "Without that feedback loop, automated lead campaigns frequently produce a worse business outcome than manual ones, despite better looking numbers. This is one of the few places where automation genuinely can harm you, and the reason is not the automation but the instruction it was given.",
    "The practical rule: automate the campaign, but only after you can tell it what a good lead looks like."
  ],
  example: {
    title: "Automation pointed at the wrong target",
    body: "A business launched an automated leads campaign optimising for form submissions. Leads rose from 190 to 620 a month and cost per lead fell from 31 to 9. Customers fell from 24 to 17. The system had efficiently found an enormous number of people willing to fill in a form and unwilling to buy. After connecting qualified lead data and re-optimising, leads settled at 240 and customers rose to 41."
  },
  steps: [
    "Build your feedback loop before using automated lead campaigns.",
    "Define and send a qualified lead signal.",
    "Create the campaign optimising toward that signal, not raw form submissions.",
    "Supply several creative variations for the system to combine.",
    "Monitor lead quality weekly for the first two months.",
    "Judge on cost per customer throughout."
  ],
  mistakes: [
    "Using automated lead campaigns before the feedback loop exists.",
    "Optimising toward form submissions and celebrating the cost per lead.",
    "Monitoring volume rather than quality during the first weeks."
  ],
  words: [
    { t: "Advantage+ Leads", d: "An automated campaign type for collecting enquiries." },
    { t: "Optimisation target", d: "The signal the automation works toward." },
    { t: "Efficient failure", d: "Producing large volumes of the wrong thing very cheaply." }
  ],
  takeaways: [
    "Automation applied to lead volume produces many worthless leads efficiently.",
    "Build the feedback loop before using this campaign type.",
    "Optimise toward qualified leads or customer value, never raw submissions.",
    "Monitor quality weekly during the first two months."
  ],
  selfCheck: [
    "My feedback loop exists and functions.",
    "My automated lead campaign optimises toward a quality signal.",
    "I monitor cost per customer, not cost per lead."
  ],
  quiz: [
    { q: "Why is automation more dangerous in lead generation?", options: ["It costs more", "Leads are easy to produce, so the system can efficiently produce many worthless ones", "It is less accurate"], a: 1, why: "The system succeeds at exactly what you asked for, which may be the wrong thing." },
    { q: "What must exist before using automated lead campaigns?", options: ["A large budget", "A feedback loop telling the system what a good lead looks like", "A catalog"], a: 1, why: "Without it, automation optimises toward volume rather than value." },
    { q: "Leads tripled and customers fell. What happened?", options: ["A tracking error", "The system efficiently found people who fill forms rather than people who buy", "Seasonal change"], a: 1, why: "The optimisation target was form submissions, not customers." }
  ],
  exercise: { task: "Check what signal your lead campaigns currently optimise toward. If it is raw form submissions and you have quality data available, plan the change to a qualified signal." },
  challenge: { task: "Plan an automated lead campaign properly: the feedback loop prerequisites, the qualified signal definition and volume, the campaign configuration, the creative supplied, the weekly quality monitoring, and the criteria for judging success after three months." }
},

"6.23.7": {
  intro: "Advantage+ Shopping campaigns are the product focused automated campaign type built around your catalog. This lesson covers running them well.",
  plain: [
    "You give the system your product catalog and a budget. It decides which products to show to which people, builds the advertisements itself, and manages everything from there.",
    "For a shop with hundreds of products, this replaces work that would take a person weeks and could never be kept current.",
    "The trade is that you are trusting your catalog to do the persuading, so the catalog itself becomes the thing that matters most."
  ],
  idea: [
    "The campaign draws from your product catalog: images, titles, descriptions, prices and availability. It then shows relevant products to each person, including products they viewed and products it predicts they may want.",
    "Because the catalog supplies the creative, catalog quality becomes the main lever you control. Poor images, unclear titles, missing descriptions and wrong prices all directly damage performance, and no amount of budget adjustment compensates.",
    "The most valuable practical work is therefore unglamorous: improve your product images, write clear titles that include what the thing actually is, keep prices and availability accurate, and use product groups so you can control which products are eligible.",
    "Product groups deserve particular attention. Without them, the system may spend heavily promoting your lowest margin products because they sell most readily. Creating groups by margin, and prioritising accordingly, is one of the few strategic controls available and it is frequently unused.",
    "Finally, keep the feed updated frequently. A catalog updated weekly will advertise products that sold out five days ago, which wastes budget and disappoints customers."
  ],
  example: {
    title: "The catalog was the campaign",
    body: "A retailer's shopping campaign underperformed for months while they adjusted budgets and audiences. An audit of the catalog found 40 percent of products had no description, many titles were internal product codes, and a fifth of images were low resolution. Fixing the catalog over three weeks, with no advertising changes at all, improved return on ad spend from 2.1 to 4.6."
  },
  steps: [
    "Audit your catalog: images, titles, descriptions, prices, availability.",
    "Fix the worst quality items before adjusting anything in the campaign.",
    "Create product groups, including by margin.",
    "Set the campaign to prioritise higher margin groups where appropriate.",
    "Update the feed at least daily.",
    "Review performance by product group, not only by campaign."
  ],
  mistakes: [
    "Adjusting budgets and audiences while the catalog remains poor.",
    "Not grouping products, so the system promotes whatever sells easiest regardless of margin.",
    "Infrequent feed updates, so unavailable products are advertised."
  ],
  words: [
    { t: "Catalog", d: "The file listing your products with images, titles, prices and availability." },
    { t: "Product group", d: "A subset of your catalog you can control separately." },
    { t: "Feed update", d: "Refreshing the catalog so prices and availability stay accurate." },
    { t: "Margin prioritisation", d: "Directing the system toward products that earn you more." }
  ],
  takeaways: [
    "The catalog supplies the creative, so catalog quality is the main lever.",
    "Fix images, titles, descriptions and prices before touching the campaign.",
    "Use product groups to control which products get promoted.",
    "Update the feed daily so unavailable products are not advertised."
  ],
  selfCheck: [
    "My catalog images, titles and descriptions are good quality.",
    "I have product groups including by margin.",
    "My feed updates at least daily."
  ],
  quiz: [
    { q: "What is the main lever in a shopping campaign?", options: ["The budget", "The quality of the product catalog", "The audience settings"], a: 1, why: "The catalog supplies the creative, so it determines what people see." },
    { q: "Why create product groups by margin?", options: ["For reporting only", "Otherwise the system promotes whatever sells easiest, regardless of what you earn", "Meta requires it"], a: 1, why: "Easy sellers are often your lowest margin products." },
    { q: "How often should the feed update?", options: ["Weekly", "At least daily", "Monthly"], a: 1, why: "Stale feeds advertise products that are unavailable or wrongly priced." }
  ],
  exercise: { task: "Audit twenty random products in your catalog. Check the image quality, whether the title describes the product clearly, whether a description exists, and whether the price and availability are correct. Count how many fail." },
  challenge: { task: "Build a catalog quality programme: the audit criteria, the current state across your whole catalog, the remediation plan, the product group structure including margin bands, the feed update process, and the reporting by product group." }
},

"6.23.8": {
  intro: "This lesson covers how to build a modern account strategy around Meta's automated systems rather than fighting them.",
  plain: [
    "Ten years ago, skill in this work meant knowing which audiences to target and which settings to adjust. Those skills have largely been automated away.",
    "What remains, and what has become more valuable, is knowing what to say, knowing what a good customer is worth, and telling the system the truth about your business.",
    "A modern strategy accepts this rather than resisting it. The people doing best today are not the ones who found clever ways to keep manual control. They are the ones who focused their effort where humans still matter."
  ],
  idea: [
    "The modern account has three layers. A simple structure, usually two or three campaigns, because the system handles distribution better than your structure can. Strong creative, produced in volume, because this is where the remaining advantage lives. And accurate signals, meaning good tracking and a working feedback loop telling the system what you actually value.",
    "Notice what is absent: detailed audience construction, placement selection, bid management and complex campaign hierarchies. These consumed most of the working day a decade ago and now contribute very little.",
    "The reallocation of effort is the actual strategy. If automation removed six hours a week of settings work, the question is where those six hours went. Businesses that put them into creative production and customer understanding improved. Businesses that found new settings to adjust did not.",
    "There is a discipline required here that many find difficult. Automation performs better when left alone, which means much of the skill is restraint. Checking weekly rather than daily, changing less, and resisting the urge to intervene because intervening feels like working.",
    "The final element is verification. Trusting automation does not mean trusting it blindly. Test its decisions periodically, check that the signals you send are accurate, and confirm the outcomes in your own records."
  ],
  example: {
    title: "Where the hours went",
    body: "Two accounts adopted full automation in the same month, each freeing about six hours a week. The first team used the time to produce eight new creative concepts a month instead of two, and to build a feedback loop from their sales system. The second team used it to build more detailed reports and adjust budgets more frequently. After a year the first account's cost per customer had fallen by a third. The second's was unchanged."
  },
  steps: [
    "Simplify the structure to two or three campaigns.",
    "Enable automation across audience, placement and creative combination.",
    "Build accurate tracking and a working feedback loop.",
    "Redirect the time saved into creative production and customer research.",
    "Reduce your intervention frequency deliberately.",
    "Verify automated decisions periodically against your own records."
  ],
  mistakes: [
    "Using the time saved by automation to find new things to adjust.",
    "Trusting automation without verifying the signals it receives.",
    "Intervening frequently because it feels like working."
  ],
  words: [
    { t: "Modern account structure", d: "Simple structure, strong creative, accurate signals." },
    { t: "Reallocation of effort", d: "Moving work from settings to creative and understanding." },
    { t: "Restraint", d: "Deliberately intervening less, because automation performs better undisturbed." },
    { t: "Verification", d: "Checking automated outcomes against your own records." }
  ],
  takeaways: [
    "Simple structure, strong creative, accurate signals.",
    "The skills that mattered a decade ago have largely been automated.",
    "The strategy is where you reallocate the time automation saved.",
    "Trust automation, but verify the signals and the outcomes."
  ],
  selfCheck: [
    "My structure is simple.",
    "I have redirected saved time into creative and customer understanding.",
    "I verify automated outcomes against my own records."
  ],
  quiz: [
    { q: "What defines a modern account?", options: ["Complex structure and detailed targeting", "Simple structure, strong creative and accurate signals", "Many small campaigns"], a: 1, why: "The system handles distribution. Humans supply the message and the truth about value." },
    { q: "What is the real strategic question about automation?", options: ["Whether to use it", "Where you reallocate the time it saves", "How to override it"], a: 1, why: "The gain comes from what the freed time is spent on." },
    { q: "Why is restraint a skill here?", options: ["It saves money", "Automation performs better when not constantly disturbed", "Meta penalises changes"], a: 1, why: "Frequent intervention restarts learning and prevents stability." }
  ],
  exercise: { task: "Count how many hours a week you spend on settings versus creative and customer understanding. If settings dominate, write down what you would produce instead with that time." },
  challenge: { task: "Design a modern account operating model: the structure, the automation settings, the signal infrastructure, the weekly time allocation across activities, the intervention rules, the verification schedule, and how you will measure whether the reallocation of effort worked." }
},

"6.23.9": {
  intro: "This final lesson of the module covers the specific situations where overriding automation is genuinely correct.",
  plain: [
    "The previous lessons argued for trusting automation. This one is the balance: the cases where you should not.",
    "Automation optimises toward what it can measure, within the rules it has been given. When something important is either unmeasurable or outside those rules, a human must intervene.",
    "The skill is recognising those cases accurately, rather than using them as an excuse to keep control out of habit."
  ],
  idea: [
    "There are five genuine cases. First, legal and regulatory constraints. If a claim, an audience or a placement is prohibited in your industry or country, that is not a performance question and automation cannot know it.",
    "Second, operational limits. If you can only handle forty enquiries a week, a system that produces two hundred is harming you regardless of cost per lead. Capacity is invisible in the data.",
    "Third, business knowledge the data cannot contain. A customer type that always cancels, a region you cannot serve, a product being discontinued next month.",
    "Fourth, deliberate strategic choices. Entering a new market at a loss to establish presence, or prioritising a product line for reasons unrelated to short term return. Automation optimises for measured outcomes and cannot represent strategy.",
    "Fifth, measurement failure. If your signals are broken or biased, automation will confidently optimise toward the wrong thing, and the correct response is to fix the signals and intervene until they are fixed.",
    "Everything else is usually habit. The test is whether you can state the reason as a fact about your business rather than a preference about how results feel."
  ],
  example: {
    title: "Capacity, not performance",
    body: "A specialist clinic ran automated campaigns that performed excellently, producing 90 enquiries a week at a low cost. The clinic could see 30 patients a week. Response times collapsed, reviews suffered, and most enquiries went unanswered. The correct intervention was to reduce budget deliberately, accepting worse advertising metrics in exchange for a functioning business. No data in the ad account could have revealed this."
  },
  steps: [
    "Write down your genuine constraints: legal, operational, strategic.",
    "For each, state it as a fact about your business, not a preference.",
    "Apply manual control only where those facts require it.",
    "Verify your measurement is accurate before trusting automation elsewhere.",
    "Review the list quarterly, since constraints change.",
    "Test any restriction you cannot justify with a stated fact."
  ],
  mistakes: [
    "Using genuine constraint categories as cover for habitual control.",
    "Trusting automation while your measurement signals are broken.",
    "Ignoring operational capacity because the advertising metrics look good."
  ],
  words: [
    { t: "Genuine constraint", d: "A fact about your business that automation cannot observe." },
    { t: "Operational capacity", d: "How much work your business can actually handle." },
    { t: "Strategic choice", d: "A deliberate decision not driven by short term measured return." },
    { t: "Signal failure", d: "Broken or biased measurement that makes automation optimise wrongly." }
  ],
  takeaways: [
    "Five genuine cases: legal, operational, business knowledge, strategy, signal failure.",
    "Capacity limits are invisible in advertising data and frequently ignored.",
    "Broken measurement means automation confidently finds the wrong customers.",
    "If you cannot state the reason as a fact, it is habit."
  ],
  selfCheck: [
    "My constraints are written as facts about the business.",
    "I know my operational capacity and my advertising respects it.",
    "I have verified my measurement before trusting automation."
  ],
  quiz: [
    { q: "Your automated campaign produces three times more enquiries than you can handle. What should you do?", options: ["Celebrate the performance", "Reduce budget, accepting worse advertising metrics for a functioning business", "Increase budget further"], a: 1, why: "Capacity is a real constraint that no advertising metric reflects." },
    { q: "What should you do if your measurement signals are broken?", options: ["Trust automation anyway", "Fix the signals and intervene manually until they are correct", "Increase the budget"], a: 1, why: "Automation optimises confidently toward whatever it is told, correct or not." },
    { q: "How do you tell a genuine constraint from habit?", options: ["How long it has been in place", "Whether you can state it as a fact about your business rather than a preference", "Whether it improves results"], a: 1, why: "Facts justify overrides. Preferences do not." }
  ],
  exercise: { task: "List every manual override in your account. For each, write the constraint as a factual statement about your business. Remove any where you cannot write one." },
  challenge: { task: "Produce an override register: every manual control, the factual constraint justifying it, who approved it, the review date, the test that would validate or remove it, and the process for adding new overrides." }
}

});
