/* Module 32 - Automation and API (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"8.32.1": {
  intro: "Automation means having systems do repetitive work instead of people. This lesson covers deciding what to automate.",
  plain: [
    "Anything you do the same way every time, on a schedule, following rules you could write down, is a candidate for automation.",
    "Anything requiring judgement, or where being wrong is expensive, usually is not, at least not without a human checking the result.",
    "That distinction covers most of the decision."
  ],
  idea: [
    "The work in an advertising account divides into three types. Mechanical work: pulling reports, checking whether campaigns are delivering, applying naming conventions, uploading data. This should be automated wherever possible.",
    "Rule based decisions: pausing an advertisement whose cost exceeds a threshold, raising a budget when performance is strong, alerting someone when spending stops. These can be automated, with care, because the rules can be written precisely.",
    "Judgement work: deciding what to say, interpreting why something changed, choosing strategy. This should not be automated, and attempts to do so usually produce confident bad decisions.",
    "The value of automation is not only time saved. It is consistency and reliability. A human checking delivery every morning will miss days. A system checking every hour will not, and will alert someone at 2am on a Sunday when spending stops.",
    "The risk is that automation applies rules without understanding context. A rule pausing advertisements above a cost threshold will pause your best performer during a temporary market fluctuation. This is why automated rules need thresholds set with judgement, and why alerting a human is often better than acting automatically."
  ],
  example: {
    title: "Alert rather than act",
    body: "A business set a rule automatically pausing any advertisement whose cost per purchase exceeded 60. During a three day period of unusual competition, it paused eleven advertisements including their two best performers, and the account lost most of its delivery. They changed the rule to alert rather than pause. The same conditions produced eleven alerts, a human looked, recognised the market conditions, and changed nothing."
  },
  steps: [
    "List every recurring task in your account management.",
    "Classify each as mechanical, rule based or judgement.",
    "Automate all mechanical work.",
    "Automate rule based work, preferring alerts over automatic action initially.",
    "Never automate judgement work.",
    "Review automated rules monthly for unintended consequences."
  ],
  mistakes: [
    "Automating actions before understanding what conditions trigger them.",
    "Setting thresholds without accounting for normal market fluctuation.",
    "Automating judgement, which produces confident bad decisions."
  ],
  words: [
    { t: "Mechanical work", d: "Repetitive tasks done the same way each time." },
    { t: "Rule based decision", d: "A decision that can be written as a precise rule." },
    { t: "Judgement work", d: "Decisions requiring interpretation and context." },
    { t: "Alert versus act", d: "Notifying a human rather than taking automatic action." }
  ],
  takeaways: [
    "Automate mechanical work entirely.",
    "Automate rule based decisions carefully, preferring alerts at first.",
    "Never automate judgement.",
    "The main value is consistency and reliability, not only time saved."
  ],
  selfCheck: [
    "I have classified my recurring tasks.",
    "My mechanical work is automated.",
    "My automated rules alert rather than act where the consequences are significant."
  ],
  quiz: [
    { q: "What should never be automated?", options: ["Report generation", "Judgement work such as strategy and interpretation", "Delivery monitoring"], a: 1, why: "Automating judgement produces confident decisions without understanding." },
    { q: "Why prefer alerts over automatic action initially?", options: ["It is easier to build", "Automatic action applies rules without understanding context, such as temporary market conditions", "Alerts are cheaper"], a: 1, why: "A human can recognise context that a rule cannot." },
    { q: "What is the main value of automation beyond time saved?", options: ["Lower costs", "Consistency and reliability, including outside working hours", "Better creative"], a: 1, why: "Systems do not forget or take weekends off." }
  ],
  exercise: { task: "List every recurring task you perform in your account. Classify each as mechanical, rule based or judgement, and mark the mechanical ones as automation candidates." },
  challenge: { task: "Build an automation plan: the full task inventory with classifications, the automation approach for each mechanical and rule based task, the alert versus act decision for each rule, the thresholds with their justification, and the monthly review process." }
},

"8.32.2": {
  intro: "Automated rules are the built in system for making changes based on conditions. This lesson covers using them safely.",
  plain: [
    "An automated rule watches a number and does something when it crosses a line. If cost per purchase goes above 50, pause the advertisement. If spending stops, send me a message.",
    "They are genuinely useful and they cause real damage when set carelessly, because they act at 3am without anyone thinking about whether it makes sense today."
  ],
  idea: [
    "The available actions include pausing, resuming, adjusting budget, adjusting bids and sending notifications. The conditions can be based on almost any metric, over a chosen time window, with a chosen frequency of checking.",
    "The three settings that determine whether a rule helps or harms are the metric, the time window and the action.",
    "The time window matters most and is set wrongly most often. A rule checking cost per result over the last day will fire constantly on normal daily variation. The same rule over the last seven days will fire only on genuine sustained problems. Longer windows produce fewer false alarms.",
    "The volume condition is the second essential element. A rule should require a minimum number of results before acting, or it will pause advertisements based on two conversions. Adding a condition such as at least 20 results in the window prevents most damaging false triggers.",
    "The safest rules to start with are notifications. A rule alerting you when spending stops, when cost per result rises substantially over a week, or when an advertisement is rejected, provides most of the value with none of the risk.",
    "Finally, every rule should be reviewed monthly. Rules written for conditions a year ago fire inappropriately when the account has changed, and forgotten rules are a common cause of mysterious account behaviour."
  ],
  example: {
    title: "The forgotten rule",
    body: "An account had unexplained pauses occurring every few weeks for months. Nobody could work out why. A rule created eighteen months earlier by a former employee was pausing anything above a cost threshold that had been appropriate then and was far below current market levels. It had been quietly damaging the account since the market shifted."
  },
  steps: [
    "Start with notification rules rather than action rules.",
    "Use time windows of at least three days, preferably seven.",
    "Add a minimum volume condition to every rule.",
    "Name rules clearly with their purpose and date.",
    "Review all rules monthly.",
    "Delete rules whose purpose no longer applies."
  ],
  mistakes: [
    "Using a one day time window, which fires on normal variation.",
    "Omitting a minimum volume condition, so rules act on two conversions.",
    "Never reviewing rules, so forgotten ones damage the account invisibly."
  ],
  words: [
    { t: "Automated rule", d: "A condition that triggers an action or notification automatically." },
    { t: "Time window", d: "The period over which the condition is measured." },
    { t: "Volume condition", d: "A minimum number of results required before the rule acts." },
    { t: "False trigger", d: "A rule firing on normal variation rather than a genuine problem." }
  ],
  takeaways: [
    "Start with notifications, which provide most of the value with none of the risk.",
    "Use time windows of at least three days, preferably seven.",
    "Always add a minimum volume condition.",
    "Review every rule monthly and delete those no longer needed."
  ],
  selfCheck: [
    "My rules use windows of three days or more.",
    "Every rule has a minimum volume condition.",
    "I review all rules monthly."
  ],
  quiz: [
    { q: "Which setting is most often wrong?", options: ["The action", "The time window, often set too short", "The frequency of checking"], a: 1, why: "Short windows fire on normal daily variation." },
    { q: "What prevents a rule acting on two conversions?", options: ["A longer window alone", "A minimum volume condition", "A lower threshold"], a: 1, why: "Without it, tiny samples trigger significant actions." },
    { q: "Which rules are safest to start with?", options: ["Automatic pausing", "Notifications", "Budget increases"], a: 1, why: "They surface information without taking irreversible action." }
  ],
  exercise: { task: "List every automated rule in your account with its creation date and purpose. Delete any you cannot justify, and add a minimum volume condition to any that lacks one." },
  challenge: { task: "Design an automated rule system: the notification rules covering your key risks, the action rules with their thresholds and justifications, the volume conditions, the naming convention, the monthly review process, and the approval required before any new action rule is created." }
},

"8.32.3": {
  intro: "Automated reporting and alerts deliver information without anyone assembling it. This lesson covers building a system that people actually read.",
  plain: [
    "A report nobody reads is worse than no report, because it consumes effort and creates a false sense that things are being watched.",
    "Automated reporting works when it is short, arrives at a useful moment, and tells people something they will act on."
  ],
  idea: [
    "The system has two parts that serve different purposes. Scheduled reports, which arrive regularly and describe performance. And alerts, which arrive only when something needs attention.",
    "The common failure is confusing them. A daily report describing normal performance trains people to ignore it, and then they also ignore the day something is wrong. Regular reports should be weekly or monthly. Anything requiring same day attention should be an alert, not a report.",
    "The alerts worth building cover the things that are urgent and unambiguous. Spending has stopped. An advertisement was rejected. Cost per result has risen substantially over a week. The payment method failed. Each of these needs someone to act, and none is ambiguous enough to require interpretation.",
    "The alerts not worth building are the ambiguous ones. Cost per result rose 8 percent yesterday is not actionable and will be ignored within a fortnight.",
    "The delivery channel matters. Email works for scheduled reports. Urgent alerts need something people actually see quickly, which for most teams means a messaging application rather than email.",
    "Finally, every alert should say what to do, not only what happened. Spending stopped on campaign X, check billing and campaign status is far more useful than spending stopped."
  ],
  example: {
    title: "The alert that was ignored",
    body: "A team built fourteen alerts. Within a month they were receiving several a day, most of which required no action. People stopped reading them. When a genuine alert fired about a failed payment, it sat unread for two days. They cut back to four alerts covering only urgent unambiguous situations, and those four are now read immediately."
  },
  steps: [
    "Separate scheduled reports from alerts.",
    "Set reports to weekly or monthly, never daily.",
    "Build alerts only for urgent, unambiguous situations.",
    "Limit alerts to a handful, so each one matters.",
    "Send urgent alerts through a channel people see quickly.",
    "Include the required action in every alert message."
  ],
  mistakes: [
    "Daily reports, which train people to ignore them.",
    "Too many alerts, which produces the same result.",
    "Alerts that state a problem without saying what to do."
  ],
  words: [
    { t: "Scheduled report", d: "A regular summary of performance delivered automatically." },
    { t: "Alert", d: "A notification sent only when something needs attention." },
    { t: "Alert fatigue", d: "People ignoring notifications because too many are unimportant." },
    { t: "Actionable", d: "Containing enough information for the recipient to know what to do." }
  ],
  takeaways: [
    "Reports are regular. Alerts are exceptional. Do not confuse them.",
    "Build only a handful of alerts, covering urgent unambiguous situations.",
    "Too many alerts produces exactly the same result as none.",
    "Every alert should state the required action."
  ],
  selfCheck: [
    "My reports are weekly or monthly, not daily.",
    "I have a small number of alerts, each genuinely urgent.",
    "Every alert states what to do."
  ],
  quiz: [
    { q: "What is wrong with daily performance reports?", options: ["They cost more", "They train people to ignore them, including on the day something is wrong", "They are inaccurate"], a: 1, why: "Routine information delivered constantly becomes background noise." },
    { q: "What makes an alert worth building?", options: ["Any change in performance", "An urgent, unambiguous situation requiring action", "Anything management asks for"], a: 1, why: "Ambiguous alerts get ignored and dilute the important ones." },
    { q: "What should every alert contain?", options: ["Full performance data", "What happened and what to do about it", "A chart"], a: 1, why: "Recipients act faster when the required action is stated." }
  ],
  exercise: { task: "List your current automated reports and alerts. Cut any daily report to weekly, and remove every alert that has not required action in the last three months." },
  challenge: { task: "Design a reporting and alerting system: the scheduled reports with audiences and frequencies, the small set of alerts with their exact conditions and required actions, the delivery channels, the review process for alert usefulness, and the rule limiting how many alerts may exist." }
},

"8.32.4": {
  intro: "The Marketing API lets software talk directly to Meta's advertising system. This lesson explains what it makes possible.",
  plain: [
    "Everything you can do in Ads Manager by clicking, a program can do by sending instructions instead. Creating campaigns, changing budgets, pulling reports, uploading data.",
    "That is what an interface like this is: a way for your software to operate the advertising system directly, without a person clicking anything.",
    "It matters when the volume of clicking becomes impractical, or when advertising needs to respond automatically to something happening elsewhere in your business."
  ],
  idea: [
    "The realistic uses divide into four. Reporting at scale, pulling data automatically into your own systems for analysis alongside other business data. Bulk management, creating or changing hundreds of items at once. Data upload, sending conversions and customer data automatically. And dynamic response, where advertising changes automatically based on something in your business, such as pausing advertisements for products that went out of stock.",
    "That last use is the one that produces the most value for most businesses, because it connects advertising to reality in a way manual management cannot sustain.",
    "The requirements are real. This is developer work, requiring someone who can write and maintain software. It also requires an application registered with Meta, access permissions, and maintenance as the interface changes over time.",
    "The honest assessment for most advertisers: you do not need this. Ads Manager, automated rules, and the platform integrations cover almost everything, and a poorly maintained custom system is worse than using the standard tools well.",
    "The threshold where it becomes worthwhile is roughly: managing many accounts, running catalogues large enough that manual management is impossible, needing advertising to respond automatically to business events, or requiring data combined with other systems in ways the standard reporting cannot produce."
  ],
  example: {
    title: "Connecting stock to advertising",
    body: "A retailer with 4,000 products kept advertising items that had sold out, because updating manually was impossible. They built a connection that checked stock levels hourly and paused or resumed products accordingly. Wasted spend on unavailable products fell to nearly nothing, and customer complaints about out of stock items dropped sharply. This was a genuine case where no standard tool could do the job."
  },
  steps: [
    "Establish whether standard tools genuinely cannot do what you need.",
    "Identify the specific problem the connection would solve.",
    "Assess whether you have developer capacity to build and maintain it.",
    "Register an application and obtain the necessary permissions.",
    "Build the narrowest solution that solves the problem.",
    "Plan for ongoing maintenance as the interface changes."
  ],
  mistakes: [
    "Building custom software for something automated rules already handle.",
    "Building without a plan for who maintains it afterwards.",
    "Building broad general systems rather than solving one specific problem."
  ],
  words: [
    { t: "Marketing API", d: "The interface allowing software to operate the advertising system directly." },
    { t: "Application", d: "A registered program permitted to connect to Meta's systems." },
    { t: "Bulk management", d: "Creating or changing many items at once programmatically." },
    { t: "Dynamic response", d: "Advertising changing automatically based on business events." }
  ],
  takeaways: [
    "The interface lets software do anything you can do by clicking.",
    "The most valuable use is connecting advertising to business events automatically.",
    "Most advertisers do not need it. Standard tools cover almost everything.",
    "Build the narrowest solution to a specific problem, and plan for maintenance."
  ],
  selfCheck: [
    "I know whether standard tools can solve my problem.",
    "I have a specific problem rather than a general desire for automation.",
    "I have a maintenance plan if I build anything."
  ],
  quiz: [
    { q: "What is the most valuable common use?", options: ["Creating campaigns faster", "Connecting advertising to business events, such as stock levels, automatically", "Prettier reports"], a: 1, why: "It maintains a connection to reality that manual management cannot sustain." },
    { q: "What should you establish first?", options: ["Which programming language to use", "Whether standard tools genuinely cannot do what you need", "Your budget"], a: 1, why: "Most requirements are covered by existing tools." },
    { q: "What is commonly forgotten when building?", options: ["The permissions", "Who maintains it as the interface changes over time", "The reporting"], a: 1, why: "Unmaintained custom systems break and become liabilities." }
  ],
  exercise: { task: "Write down the specific problem you would want a custom connection to solve. Then check whether automated rules, platform integrations or bulk editing could solve it instead." },
  challenge: { task: "Produce a build or buy assessment: the specific problem, whether standard tools can address it, the scope of a custom solution, the development and maintenance cost, the risks of the custom approach, and a recommendation with reasoning." }
},

"8.32.5": {
  intro: "Authentication and access control determine what your software may do. This lesson covers the concepts safely.",
  plain: [
    "When software connects to your advertising account, Meta needs to know two things: which program is this, and what is it allowed to do.",
    "Getting this wrong is a security problem rather than a technical inconvenience, because a leaked credential gives someone else the ability to spend your money."
  ],
  idea: [
    "There are three elements. An application, which is the registered program. An access token, which is a long secret string proving the program is permitted to act. And permissions, which define what specifically it may do.",
    "The access token is the sensitive element and it must be treated as a password. It should never appear in code stored in a shared repository, never be sent by email or message, and never be included in a document shared with others. Leaked tokens are a common cause of compromised accounts.",
    "Tokens expire, which is a security feature and a frequent cause of things silently breaking, as covered in the Conversions API module. Know when yours expire and renew them before that date.",
    "Permissions should follow the same principle as human access: the minimum required. A program that only reads reports should not have permission to change campaigns or manage payments. If that program is compromised, the damage is limited to what it could do.",
    "For businesses working with agencies or software providers, the same rules apply to them. An external tool asking for full management permission when it only produces reports is a risk worth questioning, and access should be revoked when the relationship ends."
  ],
  example: {
    title: "The token in the code",
    body: "A developer stored an access token directly in code that was later published to a public code repository. Within days someone found it and used it to run advertisements from the account. The business lost several thousand before noticing. The token had full management permission because nobody had considered restricting it, and the program only needed to read reports."
  },
  steps: [
    "Register an application for each distinct purpose.",
    "Request only the permissions genuinely required.",
    "Store tokens securely, never in shared code or documents.",
    "Record the expiry date of every token and set a renewal reminder.",
    "Review third party tool permissions periodically.",
    "Revoke access immediately when a relationship ends."
  ],
  mistakes: [
    "Storing access tokens in code repositories or shared documents.",
    "Granting full management permission to something that only reads.",
    "Leaving third party access in place after a relationship ends."
  ],
  words: [
    { t: "Application", d: "A registered program permitted to connect." },
    { t: "Access token", d: "A secret string proving a program may act on your behalf." },
    { t: "Permission", d: "What specifically a program is allowed to do." },
    { t: "Least privilege", d: "Granting only the minimum access required." }
  ],
  takeaways: [
    "Treat access tokens exactly as you would treat passwords.",
    "Grant only the minimum permission required for each purpose.",
    "Tokens expire, and expiry is a common cause of silent failures.",
    "Review and revoke third party access on a schedule."
  ],
  selfCheck: [
    "My tokens are stored securely and never in shared code.",
    "Every program has only the permissions it needs.",
    "I know every token's expiry date."
  ],
  quiz: [
    { q: "How should an access token be treated?", options: ["As configuration", "As a password, never stored in shared code or documents", "As public information"], a: 1, why: "It grants the ability to act on your account, including spending money." },
    { q: "What permission should a reporting tool have?", options: ["Full management", "Read only access", "Payment management"], a: 1, why: "Least privilege limits the damage if it is compromised." },
    { q: "Why do tokens expire?", options: ["A technical limitation", "As a security feature, which also causes silent failures if not renewed", "To encourage upgrades"], a: 1, why: "Expiry limits the damage from a leaked credential over time." }
  ],
  exercise: { task: "List every program and third party tool with access to your ad account. For each, note the permission level and whether it exceeds what the tool actually needs. Reduce or revoke where appropriate." },
  challenge: { task: "Build an access management policy: the application register, the permission standards by purpose, the token storage requirements, the expiry tracking and renewal process, the third party review schedule, and the revocation procedure." }
},

"8.32.6": {
  intro: "Managing campaigns programmatically means creating and changing advertising through software. This lesson covers doing it safely.",
  plain: [
    "Software can create a thousand advertisements in a minute. It can also pause a thousand advertisements in a minute, or set a thousand budgets to the wrong number.",
    "Speed cuts both ways, and the safeguards matter more than the capability."
  ],
  idea: [
    "The genuine uses are three. Creating campaigns from a template, which is useful when you launch many similar campaigns such as one per location or per product line. Bulk updating, such as changing budgets across many items according to a rule. And synchronising with another system, such as pausing advertising for products that went out of stock.",
    "The safeguards that prevent disasters are four. Test in a separate account or with a small subset before running anything broadly. Include a limit on how many items any single operation may affect. Log every change the software makes, so mistakes can be traced and reversed. And require confirmation for operations above a certain scale.",
    "The most valuable safeguard is the change log. When something goes wrong at scale, knowing exactly what was changed and when is the difference between a ten minute fix and a day of investigation.",
    "There is a further practical point about scale. Meta limits how many operations a program may perform in a period. Programs that exceed these limits are throttled, which means a bulk operation may partially complete. Handling this properly, so a half completed operation does not leave the account in an inconsistent state, is essential and frequently overlooked.",
    "Finally, changes made programmatically appear in the activity history like any other, which means the diagnostic habits from earlier modules still work."
  ],
  example: {
    title: "The half completed update",
    body: "A program updated budgets across 340 ad sets. It hit the operation limit after 190 and stopped. The remaining 150 kept their old budgets, so the account was running a mixture of intended and unintended settings that nobody knew about. The next month's performance was confusing until someone compared the intended budgets against the actual ones. Proper handling of the limit, and a completion check, would have prevented it."
  },
  steps: [
    "Test every operation on a small subset first.",
    "Include a maximum affected item count in every operation.",
    "Log every change with what, when and why.",
    "Handle operation limits so partial completion is detected.",
    "Verify the intended state matches the actual state after any bulk operation.",
    "Require human confirmation above a defined scale."
  ],
  mistakes: [
    "Running bulk operations without testing on a subset.",
    "Not handling operation limits, leaving accounts in inconsistent states.",
    "No change log, so mistakes cannot be traced or reversed."
  ],
  words: [
    { t: "Bulk operation", d: "A change affecting many items at once." },
    { t: "Operation limit", d: "A cap on how many actions a program may perform in a period." },
    { t: "Partial completion", d: "An operation stopping part way, leaving inconsistent settings." },
    { t: "Change log", d: "A record of every change the software made." }
  ],
  takeaways: [
    "Speed cuts both ways. Safeguards matter more than capability.",
    "Test on a subset, limit scope, log everything, confirm at scale.",
    "Handle operation limits so partial completion is detected.",
    "Always verify the actual state matches the intended state afterwards."
  ],
  selfCheck: [
    "Every bulk operation is tested on a subset first.",
    "My software logs every change it makes.",
    "Partial completion is detected and handled."
  ],
  quiz: [
    { q: "What is the most valuable safeguard?", options: ["Testing", "The change log, which makes mistakes traceable and reversible", "Permissions"], a: 1, why: "It turns a day of investigation into a ten minute fix." },
    { q: "What happens when a program hits the operation limit?", options: ["It queues", "It may stop part way, leaving a mixture of intended and unintended settings", "It restarts"], a: 1, why: "Partial completion produces inconsistent states nobody knows about." },
    { q: "What should follow any bulk operation?", options: ["A report", "Verification that the actual state matches the intended state", "A budget review"], a: 1, why: "It catches partial completion and unintended changes." }
  ],
  exercise: { task: "If you use any programmatic management, check whether it logs its changes and whether it handles operation limits. If you do not, write down the safeguards you would require before allowing any." },
  challenge: { task: "Design a safe programmatic management system: the operations permitted, the testing requirements, the scope limits, the logging specification, the limit handling, the state verification, the confirmation thresholds, and the rollback procedure." }
},

"8.32.7": {
  intro: "Extracting data programmatically lets you combine advertising figures with the rest of your business data. This lesson covers doing it well.",
  plain: [
    "Advertising data sitting inside Ads Manager can only be compared with other advertising data. Pulled into your own systems, it can be compared with sales, stock, margins and everything else you know.",
    "That combination is where the genuinely useful analysis lives, because it lets you answer business questions rather than advertising questions."
  ],
  idea: [
    "The practical approach is to pull the data you need on a schedule into a place where it can be joined with other information. That place may be a spreadsheet for a small business, or a proper database for a larger one.",
    "The questions this enables are the valuable ones. Which campaigns produce customers who buy again. Which products advertise profitably after accounting for returns and margin. Which regions produce customers who cost more to serve. None of these can be answered inside Ads Manager, because it does not hold the other half of the information.",
    "Three practical points make this work. Pull at a consistent level of detail, usually daily by campaign or by advertisement, since you can aggregate upward but never downward. Pull consistently, since gaps in a data history are difficult to fill later. And store the attribution settings alongside the figures, because a dataset assembled under different settings is not comparable with itself.",
    "There is a common trap worth naming. Pulling data with different attribution windows at different times produces a dataset that appears consistent and is not. Recording the settings with each pull prevents months of confusing analysis.",
    "Finally, the goal is answering questions, not collecting data. Many businesses build elaborate data pipelines and then never ask anything of them. Decide the questions first, then pull what those questions need."
  ],
  example: {
    title: "The question that needed both halves",
    body: "A business pulled advertising data alongside their sales and returns data. They discovered one product category had an excellent cost per purchase and a 41 percent return rate, making it their least profitable category despite looking like their best performing advertising. Neither dataset showed this alone. The combination showed it immediately."
  },
  steps: [
    "Decide the business questions you want to answer.",
    "Identify what advertising data those questions need.",
    "Pull at a consistent level of detail, usually daily by campaign or advertisement.",
    "Record the attribution settings with every pull.",
    "Join it with your other business data.",
    "Answer the questions, and stop collecting anything that answers none."
  ],
  mistakes: [
    "Building a data pipeline before deciding what questions it answers.",
    "Pulling with different attribution settings at different times.",
    "Pulling aggregated data, which cannot later be broken down."
  ],
  words: [
    { t: "Data extraction", d: "Pulling figures out of the advertising system into your own." },
    { t: "Level of detail", d: "How granular the data is, such as daily by advertisement." },
    { t: "Joining", d: "Combining advertising data with other business data." },
    { t: "Settings record", d: "Storing the attribution settings alongside the figures for comparability." }
  ],
  takeaways: [
    "The value is combining advertising data with the rest of your business data.",
    "Pull at a detailed level, since you can aggregate up but not down.",
    "Record attribution settings with every pull.",
    "Decide the questions first. Data nobody queries is waste."
  ],
  selfCheck: [
    "I know which business questions require combined data.",
    "My extracts record their attribution settings.",
    "I pull at a detailed enough level."
  ],
  quiz: [
    { q: "Why pull data at a detailed level?", options: ["It is faster", "You can aggregate upward later but never break aggregated data down", "It uses less storage"], a: 1, why: "Detail lost at extraction cannot be recovered." },
    { q: "What must be recorded alongside the figures?", options: ["The account name", "The attribution settings used", "The currency only"], a: 1, why: "Data pulled under different settings is not comparable with itself." },
    { q: "What should come first?", options: ["Building the pipeline", "Deciding the business questions the data will answer", "Choosing a database"], a: 1, why: "Many businesses build elaborate pipelines they never query." }
  ],
  exercise: { task: "Write down three business questions you cannot currently answer because advertising data and other business data are not combined. Identify what would need to be joined to answer each." },
  challenge: { task: "Design a data extraction system: the business questions, the data required, the extraction schedule and level of detail, the settings recording, the joining approach with other business data, the storage, and the specific analyses it will support." }
},

"8.32.8": {
  intro: "Automation that breaks silently causes more damage than no automation. This lesson covers building systems that fail safely.",
  plain: [
    "The dangerous thing about automation is not that it fails. Everything fails eventually. It is that automation fails quietly, and keeps appearing to work while doing nothing or doing the wrong thing.",
    "A person who stops doing their job is noticed. A program that stops doing its job may not be noticed for months."
  ],
  idea: [
    "The principles that prevent silent failure are five.",
    "Monitor the outcome, not the process. A program that runs successfully every day but produces no output has failed. Check that the intended result happened, not that the program executed.",
    "Alert on absence. Most monitoring alerts when something goes wrong. Equally important is alerting when something expected does not happen: no data arrived today, no events were sent this hour.",
    "Fail loudly. When a program encounters an error it should notify someone, not silently continue. Errors that are caught and ignored are how systems break invisibly.",
    "Handle partial failure explicitly. If an operation affects a hundred items and fails after sixty, the system should know, report it, and ideally reverse the sixty rather than leaving an inconsistent state.",
    "Keep a heartbeat. A simple record of when the system last ran successfully, checked regularly, catches the most common failure of all: something that quietly stopped running weeks ago.",
    "Together these turn a system that fails invisibly into one that fails visibly, which is the difference between an hour of disruption and a quarter of corrupted data."
  ],
  example: {
    title: "Six weeks of nothing",
    body: "An automated conversion upload ran nightly for a year. A change in a file format caused it to process zero records, but it completed without error every night and reported success. Six weeks passed before anyone noticed conversions had stopped arriving. A single check confirming that records were actually processed, rather than that the program had run, would have caught it the first night."
  },
  steps: [
    "Monitor the outcome, not just whether the program ran.",
    "Alert when expected things do not happen, not only when errors occur.",
    "Make errors notify someone rather than being silently caught.",
    "Detect and report partial failures explicitly.",
    "Maintain a heartbeat record of last successful operation.",
    "Test the failure paths, not only the success paths."
  ],
  mistakes: [
    "Monitoring whether the program ran rather than whether it achieved anything.",
    "Catching errors and continuing silently.",
    "Never testing what happens when something goes wrong."
  ],
  words: [
    { t: "Silent failure", d: "A system failing without producing any visible signal." },
    { t: "Outcome monitoring", d: "Checking the intended result occurred, not just that the program executed." },
    { t: "Alert on absence", d: "Notifying when something expected does not happen." },
    { t: "Heartbeat", d: "A record of when a system last operated successfully." }
  ],
  takeaways: [
    "Automation fails quietly, which is more dangerous than failing loudly.",
    "Monitor outcomes, not whether the program ran.",
    "Alert on absence as well as on errors.",
    "Test the failure paths, not only the success paths."
  ],
  selfCheck: [
    "My monitoring checks outcomes rather than execution.",
    "I have alerts for expected things not happening.",
    "I have tested what happens when my automation fails."
  ],
  quiz: [
    { q: "What is the most dangerous property of automation failure?", options: ["It is expensive", "It happens quietly and can continue unnoticed for months", "It is hard to fix"], a: 1, why: "Invisible failure allows the damage to accumulate." },
    { q: "What should be monitored?", options: ["Whether the program ran", "Whether the intended outcome actually occurred", "How long it took"], a: 1, why: "A program can run perfectly and achieve nothing." },
    { q: "What is alerting on absence?", options: ["Notifying when errors occur", "Notifying when something expected does not happen", "Alerting when nobody is available"], a: 1, why: "Most silent failures produce no error, only an absence of results." }
  ],
  exercise: { task: "For each automated process you have, write down how you would know if it silently stopped working. If the answer is you would not, add an outcome check." },
  challenge: { task: "Build a reliability framework: every automated process, its outcome monitoring, its absence alerts, its error notification path, its partial failure handling, its heartbeat, the failure path tests, and the regular verification schedule." }
},

"8.32.9": {
  intro: "This final lesson of Level 8 brings automation together into a system that is genuinely reliable over years.",
  plain: [
    "Automation built quickly and left alone becomes a liability. Nobody remembers how it works, it breaks in ways nobody understands, and eventually people work around it rather than fixing it.",
    "Reliable automation is a small number of well documented, well monitored, well maintained things rather than a large number of clever ones."
  ],
  idea: [
    "The characteristics of automation that lasts are five.",
    "Documentation. What it does, why it exists, how it works, who owns it, and how to turn it off. Written down where the next person will find it.",
    "Ownership. A named person responsible, and a named replacement. Automation with no owner decays until it breaks.",
    "Monitoring, as covered in the previous lesson.",
    "Simplicity. The narrowest solution that solves the problem. Every additional capability is another thing that can break and another thing to maintain.",
    "Reviewability. A regular check confirming it still does something useful. Businesses change, and automation built for a situation that no longer exists is pure risk.",
    "The organisational point matters most. Automation is frequently built by one enthusiastic person who then leaves. The systems that survive are the ones where the documentation was good enough that someone else could take them over, and honestly, that is a discipline rather than a technical skill."
  ],
  example: {
    title: "The system nobody could touch",
    body: "A business had eleven automated processes built by a developer over three years. When they left, nothing was documented. Two processes broke within months and nobody could fix them. Three more were suspected of doing something wrong but nobody dared change them. Eventually all eleven were switched off and rebuilt, taking four months. The original build had taken three weeks of actual work."
  },
  steps: [
    "Document every automated process: purpose, mechanism, owner, and how to disable it.",
    "Assign a named owner and a named replacement.",
    "Implement outcome monitoring and absence alerts.",
    "Keep each solution as narrow as possible.",
    "Review every process quarterly for continued usefulness.",
    "Retire anything no longer serving a purpose."
  ],
  mistakes: [
    "Building automation nobody but the author understands.",
    "Adding capabilities beyond the original problem.",
    "Never retiring automation whose purpose has passed."
  ],
  words: [
    { t: "Documentation", d: "A written record of what a system does and how to operate it." },
    { t: "Ownership", d: "A named person responsible for a process." },
    { t: "Simplicity", d: "Solving only the problem at hand, with nothing extra." },
    { t: "Retirement", d: "Switching off automation whose purpose no longer exists." }
  ],
  takeaways: [
    "A few well maintained processes beat many clever ones.",
    "Document purpose, mechanism, owner and how to disable it.",
    "Every process needs a named owner and a named replacement.",
    "Review quarterly and retire anything no longer useful."
  ],
  selfCheck: [
    "Every automated process is documented.",
    "Every process has a named owner and replacement.",
    "I review and retire processes quarterly."
  ],
  quiz: [
    { q: "What makes automation survive staff changes?", options: ["Clever code", "Documentation good enough for someone else to take it over", "A larger team"], a: 1, why: "Undocumented systems become untouchable when the author leaves." },
    { q: "Why keep solutions narrow?", options: ["To save money", "Every additional capability is another thing that can break and must be maintained", "Meta requires it"], a: 1, why: "Scope grows maintenance burden faster than it grows value." },
    { q: "What should happen to automation whose purpose has passed?", options: ["Leave it running", "Retire it, since it is pure risk with no benefit", "Expand it"], a: 1, why: "It can act unexpectedly while serving no purpose." }
  ],
  exercise: { task: "List every automated process in your business. For each, write whether it is documented, who owns it, and whether it still serves a purpose. Retire anything that fails the last test." },
  challenge: { task: "Build an automation governance framework: the process register with documentation standards, the ownership assignments and succession, the monitoring requirements, the simplicity principle, the quarterly review with retirement criteria, and the approval process for new automation." }
}

});
