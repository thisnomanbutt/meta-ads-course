/* Module 02 - Business Infrastructure (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"1.2.1": {
  intro: "Before you spend any money, you need a proper home for your advertising. That home is called the Meta Business Portfolio, known for years as Business Manager. This lesson explains what it is and why skipping it causes pain later.",
  idea: [
    "A Business Portfolio is a container owned by your company. Inside it sit your ad accounts, your Facebook Pages, your Instagram accounts, your pixels, your product catalogs and your team members.",
    "Without it, everything is tied to one person's personal profile. If that person leaves, or loses access, or their profile gets blocked, the business loses its advertising history, its audiences and sometimes its Page. This happens often and it is painful.",
    "With a portfolio, the company owns the assets and gives people permission to use them. A person leaving simply loses their permission. Nothing else moves.",
    "One more thing beginners get wrong: a Business Portfolio is not a Facebook Page and not an ad account. It is the shelf that holds them. You create it once, then put things on the shelf."
  ],
  example: {
    title: "Why ownership matters",
    body: "A marketing manager set up ads from her own profile for two years. She resigned. The company could not access the pixel with two years of data, could not reach the audiences built from it, and had to start from zero. Rebuilding the data took four months and thousands in wasted spend. A one hour setup at the start would have prevented all of it."
  },
  steps: [
    "Go to business.facebook.com and create a portfolio using the legal business name.",
    "Use a work email address, never a personal one.",
    "Add your Page and Instagram account as owned assets.",
    "Create or request access to the ad account inside the portfolio.",
    "Add your team as people with specific permissions.",
    "Add at least two administrators so you are never locked out by one person."
  ],
  mistakes: [
    "Running ads from a personal profile because it is quicker at the start.",
    "Having only one administrator. If that account is compromised, recovery is very hard.",
    "Creating several portfolios by accident, then scattering assets between them."
  ],
  words: [
    { t: "Business Portfolio", d: "The company container that owns ad accounts, Pages and other assets. Once called Business Manager." },
    { t: "Asset", d: "Anything owned inside the portfolio: a Page, an ad account, a pixel, a catalog." },
    { t: "Admin", d: "A person with full control of the portfolio." }
  ],
  takeaways: [
    "The company should own the assets, not an individual person.",
    "Set the portfolio up before spending money, not after a problem.",
    "Always keep at least two administrators.",
    "The portfolio is the shelf. Ad accounts and Pages are what sits on it."
  ],
  selfCheck: [
    "I know who legally owns each of our advertising assets today.",
    "We have two or more administrators.",
    "Our pixel and Page sit inside the business portfolio, not a personal profile."
  ],
  quiz: [
    { q: "What is the main risk of running ads from a personal profile?", options: ["Ads cost more", "The business can lose its assets and history when that person leaves or is blocked", "Meta does not allow it"], a: 1, why: "Ownership follows the person, so the company has no protection." },
    { q: "How many administrators should a portfolio have?", options: ["One, for security", "At least two", "Everyone on the team"], a: 1, why: "Two or more prevents a total lockout, without giving full control to everybody." },
    { q: "A Business Portfolio is...", options: ["Another name for a Facebook Page", "A container that owns ad accounts, Pages, pixels and people", "A type of ad"], a: 1, why: "It is the ownership layer above all the other assets." }
  ],
  exercise: { task: "Write down every advertising asset your business uses: Pages, Instagram accounts, ad accounts, pixels, catalogs. Next to each, write who owns it today. Circle anything owned by a person rather than the company." },
  challenge: { task: "Write a one page ownership and recovery plan: who are the admins, what happens if each one leaves, who holds backup access, and the exact steps to recover access if the main admin is unavailable." }
},

"1.2.2": {
  intro: "An ad account is where money and campaigns live. How many you need, and how you set them up, affects your costs and your learning speed. This lesson keeps it simple.",
  idea: [
    "An ad account holds your campaigns, your payment method, your currency, your time zone and your spending history. It also builds a quality history over time, which affects how easily your ads get approved.",
    "Two settings can never be changed after creation: currency and time zone. Choose them carefully. If your reporting day ends at midnight in the wrong country, every report you ever run will be slightly wrong.",
    "Most businesses need only one ad account. More accounts split your data and your history, which slows learning. Create a second account only for a real reason: a different country with a different currency, a legally separate company, or an agency managing a separate client.",
    "Your account also carries a reputation. Repeated policy problems make future approvals harder, which is another reason not to treat accounts as disposable."
  ],
  example: {
    title: "One account or four",
    body: "A retailer created four ad accounts, one per product line, thinking it would be tidy. Each account ran a small budget, none reached enough results to leave the learning phase, and the same customers were targeted in all four, pushing up their own prices. Merging into one account with four campaigns cut cost per purchase by about a third within a month."
  },
  steps: [
    "Create the ad account inside the business portfolio, not from a personal profile.",
    "Set the currency to the one you actually pay in.",
    "Set the time zone to the one your business reports in.",
    "Name it with the business name, not something temporary.",
    "Add the payment method at the account level, and note the billing contact.",
    "Only create another account when you have a clear reason you can write in one sentence."
  ],
  mistakes: [
    "Choosing the wrong time zone and living with broken daily reporting forever.",
    "Opening a new ad account to escape a problem instead of fixing the problem.",
    "Spreading a small budget across several accounts."
  ],
  words: [
    { t: "Ad account", d: "The place that holds campaigns, payment method, currency and time zone." },
    { t: "Time zone", d: "The clock used to decide when a reporting day starts and ends. Cannot be changed later." },
    { t: "Account history", d: "The record of spending and policy behaviour that builds your reputation." }
  ],
  takeaways: [
    "Currency and time zone are permanent. Set them correctly at creation.",
    "One account is usually right. Split only for a real reason.",
    "Splitting budgets across accounts slows learning and raises costs.",
    "Accounts build a reputation, so protect the one you have."
  ],
  selfCheck: [
    "I know our ad account time zone and currency without checking.",
    "I can justify in one sentence why we have the number of accounts we have.",
    "Our payment method and billing contact are current."
  ],
  quiz: [
    { q: "Which setting cannot be changed after an ad account is created?", options: ["Account name", "Time zone", "Payment method"], a: 1, why: "Time zone and currency are permanent, so they must be right from the start." },
    { q: "When is a second ad account genuinely needed?", options: ["For each product", "For a separate legal entity or a different billing currency", "For each new campaign idea"], a: 1, why: "Real separation of business or billing justifies it. Tidiness does not." },
    { q: "What happens when you split a small budget across several accounts?", options: ["Faster learning", "Each part gets too few results to learn from", "Lower CPM"], a: 1, why: "Thin data in many places is worse than concentrated data in one place." }
  ],
  exercise: { task: "Check your ad account settings now. Write down the currency, time zone, payment method and the exact account name. Note anything that looks wrong or temporary." },
  challenge: { task: "Write a short account structure policy for a company entering three countries. Decide how many ad accounts, why, what the naming pattern is, and how reporting will be combined across currencies." }
},

"1.2.3": {
  intro: "Your ads run from a Facebook Page and usually also an Instagram account. Who owns these, and how they are connected, decides whether your advertising is safe. This lesson explains the connections in plain terms.",
  idea: [
    "Every ad needs an identity: the Page name and picture that appear at the top. That identity is your Facebook Page. If you also want the ad to appear on Instagram with your Instagram name, the Instagram account must be connected.",
    "The safest arrangement is: the business portfolio owns the Page, owns the Instagram account, and owns the ad account. People are then given access to each one separately.",
    "A common problem is a Page owned personally by a founder or a former agency. The ads work, until the day that person leaves or the relationship ends. Then the identity your customers know disappears from your ads.",
    "Also remember the Page itself carries reputation. Customer feedback and ad experience scores are attached to it. A Page with many complaints will see its ads delivered less and cost more, so the Page is an asset to protect, not just a formality."
  ],
  example: {
    title: "The agency that walked away",
    body: "A clinic hired an agency who created the Page for them. Two years later they changed agencies. The old agency owned the Page with 40,000 followers and all the reviews. The clinic had to start a new Page from zero, lost its review history, and its ads temporarily cost more because the new Page had no positive feedback record."
  },
  steps: [
    "Check who owns the Page today in the Page settings.",
    "Move the Page into the business portfolio as an owned asset.",
    "Connect the Instagram account to the same portfolio.",
    "Link the Instagram account to the Page so ads can run across both.",
    "Give people and partners access, never ownership, unless they are your own company.",
    "Review Page feedback scores regularly, because they affect delivery."
  ],
  mistakes: [
    "Letting an agency or freelancer own the Page or the pixel.",
    "Connecting a personal Instagram account that a staff member also uses privately.",
    "Ignoring poor customer feedback on the Page until delivery is already suffering."
  ],
  words: [
    { t: "Page", d: "The public business identity that appears on your ads." },
    { t: "Asset ownership", d: "Which portfolio legally holds the item, as opposed to who can use it." },
    { t: "Partner access", d: "Giving another business permission to use your asset without owning it." },
    { t: "Feedback score", d: "A rating built from customer reactions that can affect delivery and cost." }
  ],
  takeaways: [
    "Your company should own the Page and the Instagram account.",
    "Give agencies access, never ownership.",
    "Page reputation affects the price and delivery of your ads.",
    "An identity you do not own can disappear from your ads overnight."
  ],
  selfCheck: [
    "Our company portfolio owns the Page and the Instagram account.",
    "Every external partner has access rather than ownership.",
    "I have checked our Page feedback in the last month."
  ],
  quiz: [
    { q: "An agency should be given...", options: ["Ownership of your Page", "Access to your Page through partner permissions", "Your personal password"], a: 1, why: "Access can be removed cleanly. Ownership cannot." },
    { q: "Why does Page reputation matter for advertising?", options: ["It does not matter", "Poor customer feedback can reduce delivery and raise costs", "It changes your currency"], a: 1, why: "Meta uses feedback signals when deciding how to deliver your ads." },
    { q: "What appears as the identity at the top of your ad?", options: ["Your ad account name", "Your Facebook Page, and Instagram account where connected", "Your website"], a: 1, why: "The Page and connected Instagram profile are the public face of the ad." }
  ],
  exercise: { task: "Open your Page settings and list every person and business that currently has access. Mark anyone who no longer needs it, and anyone whose access level is higher than their job requires." },
  challenge: { task: "Write the onboarding and offboarding checklist your company will use for agencies: exactly what access is granted on day one, what is never granted, and what is removed on the last day of the relationship." }
},

"1.2.4": {
  intro: "Giving the right people the right level of access keeps your account both safe and workable. This lesson explains roles in simple language and gives you a rule for deciding.",
  idea: [
    "Access in Meta works in two layers. First, a person is added to the business portfolio. Second, that person is given permission on specific assets, such as one ad account or one Page.",
    "At portfolio level the main split is simple: administrators can change anything, including adding and removing people. Employees can only use what they have been given.",
    "At asset level, the permissions describe tasks. On an ad account, someone can be given the ability to create and edit ads, or only to view performance, or to manage payments. Give each person the lowest level that lets them do their job.",
    "The reason is not distrust. It is damage control. Most account disasters come from an honest mistake by someone with more power than their job needed, or from one over-powered account being stolen."
  ],
  example: {
    title: "The 60,000 dollar typo",
    body: "A junior team member with full ad account control meant to set a daily budget of 600. They typed 60,000 and left for the weekend. With view and draft permission instead, the change would have needed one approval and the weekend would have been calm."
  },
  steps: [
    "List everyone who touches advertising and write their actual job in one line.",
    "Add each person to the business portfolio with their work email.",
    "Give portfolio admin rights only to the one or two people who manage people and payments.",
    "Give each person asset permissions that match their job and nothing more.",
    "Review the whole list every quarter and remove anyone who left.",
    "Never share one login between several people."
  ],
  mistakes: [
    "Making everyone an admin because it is easier than thinking about roles.",
    "Sharing a single login, which destroys your ability to see who changed what.",
    "Forgetting to remove people who left the company months ago."
  ],
  words: [
    { t: "Portfolio access", d: "Whether someone is an admin or a limited employee in the business." },
    { t: "Asset permission", d: "What a person can do on one specific ad account, Page or pixel." },
    { t: "Least privilege", d: "The habit of giving the smallest access that still allows the job." }
  ],
  takeaways: [
    "Access has two layers: the portfolio, then each individual asset.",
    "Give the lowest access that still lets the person work.",
    "Never share logins, because you lose the record of who did what.",
    "Review the access list every three months."
  ],
  selfCheck: [
    "Everyone has their own login, with no shared accounts.",
    "Only one or two people hold portfolio admin rights.",
    "I reviewed and cleaned our people list in the last three months."
  ],
  quiz: [
    { q: "What is the principle of least privilege?", options: ["Give everyone admin so nobody is blocked", "Give each person the smallest access that lets them do their job", "Give access only to managers"], a: 1, why: "It limits the damage from both mistakes and stolen accounts." },
    { q: "Why should logins never be shared?", options: ["Meta charges per login", "You lose the record of who made each change, and security is weakened", "It slows the site"], a: 1, why: "Change history is only useful if each action belongs to a real person." },
    { q: "Who should hold portfolio administrator rights?", options: ["Everyone in marketing", "One or two responsible people who manage people and payments", "The external agency"], a: 1, why: "Admin rights control people and money, so they belong with a small, accountable group." }
  ],
  exercise: { task: "Open your people list. For each person write their job in five words and the access they currently hold. Mark every mismatch, then fix the three most risky ones." },
  challenge: { task: "Design a full access policy for a 15 person marketing team plus one agency: define four role types, the exact permissions for each, the approval steps for budget changes, and the quarterly review process." }
},

"1.2.5": {
  intro: "Advertising stops the moment payment fails. This lesson covers how billing works, how spending limits protect you, and the simple habits that prevent a campaign from dying at the worst moment.",
  idea: [
    "Meta charges you after you spend, not before. Your account has a billing threshold: once your unpaid spending reaches a certain amount, Meta charges your card. You are also charged on a regular date each month for whatever is left.",
    "Because of this, a card that expires or a bank that blocks a foreign payment will stop your ads. The campaign does not pause politely and wait. It stops, and the learning you paid for starts to fade.",
    "Two safety tools exist. The account spending limit sets a maximum total the account can ever spend before it stops. The campaign spending limit does the same for one campaign. Both are useful, but both stop delivery suddenly when reached, so they must be watched.",
    "The habit that prevents most problems is boring and effective: keep a backup payment method on the account, and check the billing section on the same day each month."
  ],
  example: {
    title: "The weekend that stopped",
    body: "An ecommerce store was in its best week of the year. On Friday night the bank blocked the payment as unusual foreign activity. Ads stopped for 38 hours across the busiest weekend. A second card saved on the account would have kept everything running, because Meta simply moves to the next payment method."
  },
  steps: [
    "Add a primary payment method and at least one backup.",
    "Note your billing threshold and your monthly billing date.",
    "Tell your bank that regular payments to Meta are expected.",
    "Decide whether you need an account spending limit as protection.",
    "Check billing on a fixed day each month and download the receipt.",
    "Set a reminder one month before any card expires."
  ],
  mistakes: [
    "Running with a single card and no backup.",
    "Setting an account spending limit and forgetting it, so ads stop mid-month.",
    "Ignoring failed payment notices for a few days, which can restrict the account."
  ],
  words: [
    { t: "Billing threshold", d: "The unpaid amount that triggers a charge to your card." },
    { t: "Account spending limit", d: "A maximum total the whole account may spend before delivery stops." },
    { t: "Payment failure", d: "A charge the bank refused, which stops delivery until it is fixed." }
  ],
  takeaways: [
    "You are billed after spending, at a threshold and on a monthly date.",
    "Always keep a backup payment method saved.",
    "Spending limits protect you but stop delivery suddenly when reached.",
    "A fixed monthly billing check prevents most emergencies."
  ],
  selfCheck: [
    "We have a backup payment method saved right now.",
    "I know our billing date and threshold.",
    "Any spending limit in place has a reminder attached to it."
  ],
  quiz: [
    { q: "When does Meta charge you?", options: ["Before the ads run", "After spending, at a threshold and on a monthly date", "Only once a year"], a: 1, why: "Spending happens first, then billing follows the threshold and monthly cycle." },
    { q: "What is the main risk of an account spending limit?", options: ["It raises your CPM", "Delivery stops suddenly when the limit is reached", "It cancels your campaigns permanently"], a: 1, why: "It is a hard stop, so it must be tracked and raised deliberately." },
    { q: "Why keep a backup payment method?", options: ["To get a discount", "So delivery continues if the main card fails", "To increase daily budget"], a: 1, why: "Meta moves to the next method instead of stopping your ads." }
  ],
  exercise: { task: "Open the billing section. Write down: payment methods saved, card expiry dates, billing threshold, current spending limit if any, and next billing date. Fix anything missing today." },
  challenge: { task: "Write a billing continuity plan for a business spending 50,000 a month: payment methods, approval chain, what happens if a payment fails at midnight, who is contacted, and how spending limits are reviewed each month." }
},

"1.2.6": {
  intro: "Domain verification is a small technical step that proves your business owns its website. It matters more than it looks, because without it you lose control of important settings.",
  idea: [
    "Verifying a domain means adding a small piece of code or a text record that proves the website belongs to you. You do it once, inside the business portfolio.",
    "Why it matters: only the verified owner can decide the order of the eight conversion events used for measurement on Apple devices. If you do not verify, someone else could hold that control, and your own tracking choices are limited.",
    "It also protects your brand. Verification stops other advertisers from using your web pages in their ads with their own edits, and it is required for certain link editing features.",
    "The process takes about fifteen minutes with a web developer, or less if your website uses a common platform with a built-in option."
  ],
  example: {
    title: "Stuck at the last step",
    body: "A store finished its pixel setup and tried to choose which events matter most for iPhone users. The option was locked. The reason: the domain was never verified. A developer added one line to the site, verification completed in ten minutes, and the setting opened. Two weeks of poor measurement had passed for the sake of a ten minute task."
  },
  steps: [
    "Open the business portfolio and find the brand safety and domains section.",
    "Add your domain exactly, without www and without https.",
    "Choose one method: a DNS text record, an HTML file upload, or a meta tag in the site code.",
    "Ask your web developer or platform support to apply it.",
    "Return and press verify.",
    "Verify every domain you send ad traffic to, including landing page tools."
  ],
  mistakes: [
    "Verifying only the main website and forgetting the separate landing page domain.",
    "Adding the domain with www or with https, which causes it not to match.",
    "Assuming verification happens automatically when the pixel is installed. It does not."
  ],
  words: [
    { t: "Domain", d: "Your website address, for example yourbusiness.com." },
    { t: "DNS record", d: "A setting at your domain provider that proves ownership." },
    { t: "Event priority", d: "The order of importance of your tracked actions, which only a verified owner can set." }
  ],
  takeaways: [
    "Verification proves you own the website, and it is done once.",
    "Without it, you cannot control your own event priority settings.",
    "Verify every domain used in ads, not just the main one.",
    "Enter the domain in its plain form, with no www and no https."
  ],
  selfCheck: [
    "Our main domain shows as verified in the portfolio.",
    "Every landing page domain we advertise is also verified.",
    "I know which verification method we used, in case it needs checking."
  ],
  quiz: [
    { q: "What does domain verification unlock?", options: ["Cheaper ads", "Control over your conversion event priority and link editing protections", "Unlimited budget"], a: 1, why: "Ownership gives you the right to configure measurement for your own site." },
    { q: "How should the domain be entered?", options: ["https://www.example.com", "example.com", "www.example.com/home"], a: 1, why: "The plain root domain is what the system matches against." },
    { q: "Does installing the pixel verify the domain?", options: ["Yes, automatically", "No, verification is a separate step", "Only on some platforms"], a: 1, why: "They are two different tasks that both need doing." }
  ],
  exercise: { task: "List every web address your ads point to, including landing page builders and booking tools. Check each one in the portfolio and mark which are verified." },
  challenge: { task: "Write a step by step verification guide for your own website platform, with the exact menu names and where to paste the record, so a non technical colleague could do it alone next time." }
},

"1.2.7": {
  intro: "Governance sounds like a big word. It simply means having clear rules about who owns what, who can use it, and how that is checked. This lesson makes it practical for a small team.",
  idea: [
    "As a business grows, assets multiply: several Pages, several pixels, catalogs, apps, WhatsApp numbers, agencies with access. Without rules, nobody knows what exists or who controls it.",
    "Good governance answers four questions on one page. What do we own? Who has access to each thing? What is each thing for? When did we last check?",
    "The most valuable habit is the quarterly review. You open the portfolio, list every asset and every person, and remove what is no longer needed. Most businesses discover forgotten access from old employees and old agencies at this moment.",
    "Governance also means naming things properly, so that a pixel called Main Website Pixel is not sitting next to three called Pixel, Pixel copy and test."
  ],
  example: {
    title: "What a review found",
    body: "A company with 9 million in annual revenue ran a first asset review. They found 4 pixels with data spread between them, 2 Pages running ads, 11 people with access including 3 who had left the company, and an agency from two years earlier still holding admin rights. Cleaning this up took one afternoon and closed a serious security hole."
  },
  steps: [
    "Make one list of every asset in the portfolio.",
    "For each asset, write its purpose in one sentence and its owner by name.",
    "List every person and partner with access, and what level.",
    "Remove anything unused and anyone who no longer needs access.",
    "Rename anything with an unclear name.",
    "Put a repeating quarterly reminder in the calendar and keep the list updated."
  ],
  mistakes: [
    "Keeping duplicate pixels because nobody is sure which one is live.",
    "Leaving old agency access in place after the contract ended.",
    "Having no written record, so the knowledge lives only in one person's head."
  ],
  words: [
    { t: "Governance", d: "The written rules for owning, naming, sharing and reviewing assets." },
    { t: "Asset register", d: "The simple list of everything you own and who controls it." },
    { t: "Access review", d: "A scheduled check of who can do what." }
  ],
  takeaways: [
    "Write one asset register and keep it current.",
    "Review access every three months without exception.",
    "Clear names prevent expensive confusion later.",
    "Old agency and ex-employee access is the most common security hole."
  ],
  selfCheck: [
    "We have a written list of all advertising assets.",
    "A quarterly access review is in the calendar.",
    "Every pixel and Page has a clear, meaningful name."
  ],
  quiz: [
    { q: "How often should access be reviewed?", options: ["Once at setup", "Every three months", "Only when someone leaves"], a: 1, why: "Regular reviews catch what event-based checks miss." },
    { q: "What is an asset register?", options: ["A financial report", "A written list of what you own, its purpose and who controls it", "A type of campaign"], a: 1, why: "It is the simple record that makes governance possible." },
    { q: "Why are duplicate pixels a problem?", options: ["They cost money", "Data is split between them, weakening audiences and optimisation", "They slow the website only"], a: 1, why: "Split data means weaker learning and smaller audiences." }
  ],
  exercise: { task: "Build your asset register today in a spreadsheet: asset name, type, purpose, owner, who has access, last reviewed date. Fill it in for everything you can see." },
  challenge: { task: "Write the governance policy for a company that works with three agencies across five markets: naming rules, ownership rules, access levels, the review calendar, and the exact offboarding steps when an agency contract ends." }
},

"1.2.8": {
  intro: "Advertising accounts are a target for criminals, because they hold spending power. This lesson covers the small number of security habits that prevent almost all account theft.",
  idea: [
    "Most account thefts do not involve clever hacking. Someone clicks a fake message pretending to be from Meta, types their password into a copied login page, and loses the account within minutes. The thief then spends money on their own ads.",
    "The single strongest protection is two-factor authentication. This means that after typing the password, you must also enter a code from your phone. Even if someone steals the password, they cannot enter.",
    "Use an app that generates codes rather than text messages where possible, because phone numbers can be stolen through the mobile operator.",
    "The second protection is discipline about links. Meta does not send messages asking for your password. Any message saying your Page will be deleted in 24 hours unless you log in through this link is a trick. Go to the site directly instead of clicking."
  ],
  example: {
    title: "A typical theft",
    body: "A Page admin received an email that looked exactly like a Meta policy warning. The link opened a login page that looked real. He typed his details. Within ten minutes the thief added themselves as admin, removed the real owner, and started spending on the saved card. Two-factor authentication would have stopped it at the password step."
  },
  steps: [
    "Turn on two-factor authentication for every person with access.",
    "Prefer an authentication app over text message codes.",
    "Require two-factor for everyone through the portfolio security settings.",
    "Never enter a password from a link in an email or message.",
    "Keep at least two admins so a single lost account is recoverable.",
    "Review the active login sessions and remove ones you do not recognise."
  ],
  mistakes: [
    "Leaving two-factor off for one or two people, which becomes the weak door.",
    "Using the same password on the ad account as on other websites.",
    "Trusting urgent warning messages, which is exactly the pressure the trick relies on."
  ],
  words: [
    { t: "Two-factor authentication", d: "A second step after the password, usually a code from your phone." },
    { t: "Phishing", d: "A fake message or page designed to steal your login details." },
    { t: "Session", d: "A device currently logged into the account." }
  ],
  takeaways: [
    "Two-factor authentication stops nearly all account theft.",
    "Prefer app-based codes over text messages.",
    "Meta never asks for your password by message or email.",
    "Urgency in a message is a warning sign, not a reason to hurry."
  ],
  selfCheck: [
    "Every person with access has two-factor authentication turned on.",
    "I have checked active sessions in the last month.",
    "Our team knows never to log in through an emailed link."
  ],
  quiz: [
    { q: "What stops most account thefts?", options: ["A longer password alone", "Two-factor authentication", "Changing the account name"], a: 1, why: "A stolen password is useless without the second code." },
    { q: "You receive an urgent message saying your Page will be deleted unless you log in through a link. What do you do?", options: ["Log in quickly through the link", "Ignore the link and check by going to the official site directly", "Forward it to your team to handle"], a: 1, why: "Urgency plus a login link is the standard pattern of a phishing attempt." },
    { q: "Which second factor is generally safer?", options: ["Text message codes", "An authentication app on your phone", "A note on your desk"], a: 1, why: "Phone numbers can be taken over through the mobile operator." }
  ],
  exercise: { task: "Check right now whether two-factor authentication is on for your own account and for every person in the portfolio. Turn it on where missing and record the date." },
  challenge: { task: "Write a one page security briefing for your team: the three rules they must follow, two real examples of fake messages, and the exact steps to take in the first ten minutes if they suspect an account has been stolen." }
},

"1.2.9": {
  intro: "Sometimes an ad is rejected, or an account is restricted. This is stressful, but usually fixable. This lesson explains what account quality means and how to respond calmly and correctly.",
  idea: [
    "Meta keeps a record of how well your account follows the rules. Every rejected ad, every restriction, every appeal is recorded. You can see all of it in the Account Quality section.",
    "Rejections are normal and often automatic. A machine checks your ad in seconds against the rules. It sometimes gets things wrong, for example reading a medical word as a health claim. Your right to appeal exists for exactly this reason.",
    "Restrictions are more serious. They mean the whole account is limited or stopped, usually after repeated problems. The correct response is to read the exact reason, fix the real cause, then request a review once with a clear explanation.",
    "The wrong response, and a common one, is to create a new ad account or new Page to escape the problem. Meta connects these and treats it as avoiding enforcement, which makes the situation much worse."
  ],
  example: {
    title: "Rejected for a word",
    body: "A clinic's ad said: are you suffering from back pain. It was rejected under the rule about personal health attributes, because it implies something about the person. The fix was a rewrite: back pain has many causes. Here is what our physiotherapists check first. Same message, approved in under an hour, no appeal needed."
  },
  steps: [
    "Open Account Quality and read the exact rule that was named.",
    "Read that rule's own page, not a summary from a forum.",
    "Decide honestly whether the ad really broke it.",
    "If it did, rewrite the ad and republish.",
    "If it did not, appeal once with a short, factual explanation.",
    "Keep a record of every rejection and its cause, so patterns become visible."
  ],
  mistakes: [
    "Creating a new account or Page to get around a restriction.",
    "Appealing everything immediately without reading the rule.",
    "Republishing the same rejected ad repeatedly, which damages account standing."
  ],
  words: [
    { t: "Account Quality", d: "The section showing rejections, restrictions and appeals for your account." },
    { t: "Rejection", d: "One ad refused because it appears to break a rule." },
    { t: "Restriction", d: "A limit placed on the whole account or Page." },
    { t: "Appeal", d: "A request for a human review of a decision." }
  ],
  takeaways: [
    "Rejections are common and often automatic. Stay calm.",
    "Read the exact rule before appealing or rewriting.",
    "Never open a new account to escape a restriction.",
    "Keep a record so you can see repeating causes."
  ],
  selfCheck: [
    "I know where the Account Quality section is and have opened it.",
    "I read the named policy before appealing anything.",
    "We keep a record of rejections and their causes."
  ],
  quiz: [
    { q: "Your account is restricted. What is the worst response?", options: ["Read the reason and fix the cause", "Create a new ad account to keep running", "Appeal once with a clear explanation"], a: 1, why: "Meta treats new accounts made to avoid enforcement as a more serious violation." },
    { q: "Why was a headline saying are you suffering from back pain rejected?", options: ["It is too long", "It implies a personal health condition about the viewer", "It has a question mark"], a: 1, why: "Rules about personal attributes prevent ads that assume something about the person." },
    { q: "What should you do before appealing?", options: ["Read the exact rule that was named", "Republish the ad twice", "Change the budget"], a: 0, why: "Understanding the rule tells you whether to appeal or simply rewrite." }
  ],
  exercise: { task: "Open Account Quality and read your history. Write down every rejection reason you find and group them. If there are none, write down the three rules most relevant to your industry instead." },
  challenge: { task: "Write a pre-publication checklist for your industry that would prevent your three most likely rejection reasons, including wording patterns to avoid and approved alternatives for each." }
}

});
