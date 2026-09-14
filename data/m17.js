/* Module 17 - Conversions API (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"5.17.1": {
  intro: "The Conversions API, usually shortened to CAPI, sends information to Meta from your own server instead of from the visitor's browser. This lesson explains what that means in plain terms.",
  plain: [
    "The pixel sends its report from inside the visitor's browser. That is like asking a customer to post you a letter on their way home. Many will. Some will forget. Some have no postbox nearby. Some have decided never to post anything for anyone.",
    "CAPI sends the report from your own computer system instead. That is like your own shop assistant writing the note and posting it themselves. It arrives because you sent it, not because the customer chose to.",
    "Both letters describe the same purchase. The difference is who posts them, and how reliably they arrive.",
    "Most businesses should send both. Meta then removes the duplicates and keeps one copy."
  ],
  idea: [
    "API stands for application programming interface. In simple terms it is a way for two computer systems to talk directly to each other. Your server talks to Meta's server, with no browser involved.",
    "The reason this matters is everything covered at the end of the last module. Ad blockers, browser privacy limits, deleted cookies and people declining tracking all stop browser reports from arriving. None of those things affect a server. Your server is not blocked by an ad blocker, because the visitor's browser is not involved.",
    "CAPI can also send things the browser never knew. A purchase completed by phone. A refund processed three days later. A lead that your sales team later marked as qualified. A subscription renewal. These happen after the visitor left, so the browser cannot report them, but your systems know about them.",
    "The standard recommendation from Meta, and the right one for nearly all businesses, is to run both the pixel and CAPI together. This is called a redundant setup. You send each event twice, from two directions, and Meta removes the duplicate. What you keep is the coverage of both."
  ],
  example: {
    title: "What the second channel recovered",
    body: "A business had 214 real sales in a month. The pixel reported 138, missing 76 because of blockers and privacy settings. They added CAPI alongside. The following month, with the same real sales volume, Meta recorded 201. The extra 63 events were purchases that had always happened but had never been reported. Optimisation improved within weeks, because the system was now learning from nearly all buyers rather than two thirds of them."
  },
  steps: [
    "Understand that CAPI does not replace the pixel. They work together.",
    "Check whether your website platform offers a built in CAPI connection.",
    "If not, decide between a partner integration, a gateway, or a developer build.",
    "Send the same events through both channels.",
    "Include a matching identifier on each event so duplicates can be removed.",
    "Verify in Events Manager that both channels are arriving and deduplication is working."
  ],
  mistakes: [
    "Switching off the pixel after installing CAPI, which loses browser only signals.",
    "Sending events through CAPI without the matching identifier, which double counts everything.",
    "Assuming CAPI is only for large technical companies, when most platforms now offer it in a few clicks."
  ],
  words: [
    { t: "CAPI", d: "Conversions API. Sending event information to Meta directly from your server." },
    { t: "API", d: "A way for two computer systems to communicate directly with each other." },
    { t: "Server", d: "The computer that runs your website or business systems, which you control." },
    { t: "Redundant setup", d: "Sending the same event through both the pixel and CAPI on purpose." },
    { t: "Deduplication", d: "Meta recognising two reports of the same event and keeping only one." }
  ],
  takeaways: [
    "CAPI sends events from your server, which browsers cannot block.",
    "It runs alongside the pixel, not instead of it.",
    "It can report things the browser never sees, such as phone sales and refunds.",
    "Every event must carry a matching identifier so duplicates are removed."
  ],
  selfCheck: [
    "I can explain the difference between browser and server reporting.",
    "I understand why both should run together.",
    "I know whether my platform offers a built in CAPI connection."
  ],
  quiz: [
    { q: "What is the main advantage of CAPI?", options: ["It is cheaper", "It sends from your server, which ad blockers and browser limits cannot stop", "It replaces the need for a pixel"], a: 1, why: "The visitor's browser is not involved, so browser restrictions do not apply." },
    { q: "Should you switch off the pixel after installing CAPI?", options: ["Yes, it is redundant", "No, run both together and let Meta remove duplicates", "Only on mobile"], a: 1, why: "Each channel catches things the other misses, so coverage is best with both." },
    { q: "What can CAPI report that the pixel cannot?", options: ["Page views", "Events happening after the visitor left, such as phone sales and refunds", "Ad clicks"], a: 1, why: "Your systems know about later events. The browser closed long ago." }
  ],
  exercise: { task: "Find out whether your website platform offers a built in Conversions API connection. Write down what it is called, what it requires, and whether it is currently switched on." },
  challenge: { task: "Write a business case for CAPI in your organisation: your current measurement gap, the events that only your systems know about, the implementation options with effort estimates, the expected improvement, and the verification plan." }
},

"5.17.2": {
  intro: "This lesson explains why measuring from your own server has become necessary rather than optional, and what happens to businesses that do not.",
  plain: [
    "Imagine your business depends on feedback from customers, and every year fewer of them are allowed to give it. Not because they are unhappy, but because the postal service keeps closing routes.",
    "Eventually you would stop waiting for post and start collecting feedback yourself at the counter.",
    "That is the situation with browser tracking. The routes keep closing, for genuine privacy reasons. Server side measurement is collecting the information yourself, at your own counter, where nobody can close the route."
  ],
  idea: [
    "Three forces have made browser reporting unreliable, and all three are getting stronger, not weaker.",
    "First, browser makers. Safari and Firefox limit tracking by default, and other browsers have followed. Cookies used for tracking are deleted quickly, often within seven days, sometimes within one.",
    "Second, device makers. Apple's tracking permission prompt means a large share of users decline being tracked across apps and websites. When they decline, browser based measurement of them largely stops.",
    "Third, users themselves. Ad blockers are widely used, and they block the pixel entirely, before it can run.",
    "The consequence is not just missing reports. It is worse learning. Meta's system improves by seeing which people converted. If it only sees two thirds of your buyers, it is learning from an incomplete and possibly biased sample, because the people who block tracking are not a random selection. Server side measurement restores the picture, which improves both what you can see and what the system can do."
  ],
  example: {
    title: "The bias, not just the gap",
    body: "An account found that its browser reported conversions skewed heavily toward Android users, because a large share of its iPhone customers had declined tracking. Meta was therefore learning that Android users convert and quietly shifting delivery toward them. After adding server side measurement, iPhone conversions appeared properly, delivery rebalanced, and total sales rose 19 percent. The missing data had not just been missing. It had been teaching the system something false."
  },
  steps: [
    "Measure your current gap between real conversions and reported ones.",
    "Check whether the gap differs by device, which reveals bias.",
    "Understand that the gap will widen over time, not narrow.",
    "Treat server side measurement as necessary infrastructure, not an optional extra.",
    "Plan implementation before the gap affects business decisions.",
    "Re-measure the gap after implementation to confirm improvement."
  ],
  mistakes: [
    "Treating the gap as a reporting inconvenience rather than a learning problem.",
    "Assuming missing data is random, when it is systematically biased toward privacy conscious users.",
    "Waiting for the situation to improve, when the direction of travel is clearly one way."
  ],
  words: [
    { t: "Signal loss", d: "The general term for measurement data that no longer reaches Meta." },
    { t: "Bias", d: "When missing data is not random, so what remains gives a distorted picture." },
    { t: "Tracking prompt", d: "The message asking users whether to allow tracking across apps and websites." },
    { t: "Infrastructure", d: "Basic systems a business needs to function, rather than optional extras." }
  ],
  takeaways: [
    "Browser reporting is declining for three reasons, all getting stronger.",
    "Missing data is biased, not random, so it teaches the system false patterns.",
    "The problem affects learning quality, not only reporting accuracy.",
    "Server side measurement is now basic infrastructure."
  ],
  selfCheck: [
    "I know my measurement gap and whether it differs by device.",
    "I understand why missing data is biased rather than random.",
    "I treat this as an infrastructure priority."
  ],
  quiz: [
    { q: "Why is missing conversion data worse than it first appears?", options: ["It costs more to fix later", "The missing people are not a random sample, so the system learns false patterns", "Meta charges for missing data"], a: 1, why: "Privacy conscious users differ systematically from others." },
    { q: "What is the direction of travel for browser tracking?", options: ["Becoming more permissive", "Becoming more restricted over time", "Staying the same"], a: 1, why: "Browser makers, device makers and users are all moving the same way." },
    { q: "Server side measurement should be treated as...", options: ["An optional advanced tactic", "Basic infrastructure for any business that advertises", "Something only large companies need"], a: 1, why: "Without it, both reporting and optimisation are structurally impaired." }
  ],
  exercise: { task: "Break down your reported conversions by device for the last 60 days. Compare the split against your own sales records by device. Write down whether iPhone conversions are under represented in Meta's data." },
  challenge: { task: "Produce an analysis of signal loss in your account: the total gap, the gap by device and browser, the estimated bias it introduces into optimisation, the business impact in money terms, and a prioritised remediation plan." }
},

"5.17.3": {
  intro: "This lesson traces exactly what happens when a server side event is sent, so the process stops feeling mysterious.",
  plain: [
    "Follow a single purchase through the system, step by step, like following a parcel.",
    "A customer clicks your ad. They arrive at your website. They buy something. Your system processes the order. Your system then sends a message to Meta saying: a purchase happened, worth this much, and here is scrambled information about who made it. Meta receives it, matches it to an account, checks whether the pixel already reported the same purchase, and if so throws one copy away.",
    "That is the entire journey. Nine steps, and none of them are complicated once written down."
  ],
  idea: [
    "The detailed flow works like this. First, the click. When someone clicks your ad, Meta adds a piece of information to the web address they arrive at, called a click identifier. Your website should capture and store this, because it is the strongest way to connect that person to the click later.",
    "Second, the action. The person buys, enquires, or does whatever you are measuring. Your server processes it.",
    "Third, the send. Your server builds a message containing the event name, the time it happened, the value, the customer information for matching in scrambled form, the click identifier if you captured it, and a unique event identifier.",
    "Fourth, the receipt. Meta receives the message, verifies it came from you using an access token, which is a long secret password proving your identity.",
    "Fifth, the matching and deduplication. Meta uses the customer information to identify the account, then compares the unique event identifier against what the pixel sent. If both describe the same event, one copy is discarded. What remains feeds your reporting, your optimisation and your audiences, exactly as a pixel event would."
  ],
  example: {
    title: "One purchase, followed through",
    body: "A customer clicks an ad at 14:02 and arrives with a click identifier in the address. The site stores it. At 14:11 they buy for 240 dollars. The pixel fires from their browser with event identifier abc-123. At 14:11 and two seconds, the server sends the same purchase with the same identifier abc-123, plus their scrambled email, phone and the stored click identifier. Meta receives both, sees the matching identifier, keeps one, and credits one purchase of 240 dollars to the campaign. Had the browser been blocked, only the server copy would have arrived, and the purchase would still have been counted."
  },
  steps: [
    "Capture the click identifier from the web address when visitors arrive.",
    "Store it with the visitor's session, so it is available when they convert.",
    "On conversion, build the event with name, time, value and currency.",
    "Add scrambled customer information for matching.",
    "Add the same unique event identifier used by the pixel.",
    "Send to Meta with your access token, and confirm receipt in Events Manager."
  ],
  mistakes: [
    "Not capturing the click identifier, which loses the strongest matching signal available.",
    "Sending a different event identifier from the pixel, so deduplication fails.",
    "Sending the event hours later, which weakens matching and delays optimisation."
  ],
  words: [
    { t: "Click identifier", d: "A code Meta adds to the web address when someone clicks your ad, used to connect them to that click." },
    { t: "Access token", d: "A long secret password proving that the message genuinely came from you." },
    { t: "Event identifier", d: "A unique code for one event, used to recognise duplicates." },
    { t: "Event time", d: "When the action actually happened, which should be as close to real time as possible." },
    { t: "Payload", d: "The complete message sent to Meta containing all the event information." }
  ],
  takeaways: [
    "Capture and store the click identifier when visitors arrive from an ad.",
    "Every event needs a name, time, value, matching information and a unique identifier.",
    "The access token proves the message came from you.",
    "Send events as close to real time as possible."
  ],
  selfCheck: [
    "I know whether my site captures the click identifier.",
    "I understand what the access token does.",
    "I know how quickly my events are sent after the action."
  ],
  quiz: [
    { q: "What is the click identifier used for?", options: ["Counting clicks", "Connecting a later conversion back to the specific ad click", "Setting the budget"], a: 1, why: "It is the strongest single signal for matching a conversion to a click." },
    { q: "What does the access token do?", options: ["Encrypts the customer data", "Proves the message genuinely came from you", "Sets the event priority"], a: 1, why: "It authenticates your server to Meta, like a password." },
    { q: "Why must the event identifier match the pixel's?", options: ["For faster processing", "So Meta recognises the two reports as the same event and removes the duplicate", "It is required by law"], a: 1, why: "Without matching identifiers, every event is counted twice." }
  ],
  exercise: { task: "Click one of your own ads and look at the web address you arrive at. Find the click identifier in it. Then ask whoever manages your website whether that value is captured and stored." },
  challenge: { task: "Document your event data flow end to end: where the click identifier is captured and stored, what triggers the server send, the exact fields included, how the event identifier is generated and shared with the pixel, the timing, and the verification at each stage." }
},

"5.17.4": {
  intro: "Designing your server side events well decides how much value you get from CAPI. This lesson covers what to send, when, and with what detail.",
  plain: [
    "Sending events is like filing reports to a head office. A report that arrives late, missing details, or describing the wrong thing is worse than useless, because decisions get made from it.",
    "Good event design means every report arrives quickly, describes exactly one real thing, carries all the details you legitimately hold, and can be matched to the right customer file."
  ],
  idea: [
    "Start by deciding which events to send from the server. The straightforward answer is: everything the pixel sends, plus anything only your systems know. Sending the same set through both channels is the standard approach and makes deduplication simple.",
    "Then decide the timing. Events should be sent as close to the moment of the action as possible. Meta's guidance is within a few minutes where possible, and there is a hard limit of seven days after which events are not accepted. Delayed events weaken matching and arrive too late to help optimisation.",
    "Then the content. Every event should carry the event name, the event time, the action source describing where it happened, the customer information for matching, the value and currency where money is involved, and the unique event identifier.",
    "The action source deserves a note because it is often set wrongly. It describes where the action took place: website, app, phone call, chat, email, physical shop, or other. Setting it accurately matters, because Meta treats an in person purchase differently from a website purchase.",
    "Finally, only send real events. Sending test data, estimated conversions, or events you assume happened will corrupt the system's learning with information that is not true."
  ],
  example: {
    title: "The events only the server knew",
    body: "A car dealership sent website enquiries through the pixel. They then added three server side events their systems alone knew about: an appointment attended, a test drive completed, and a vehicle sold, each with its real value. Optimisation moved from finding people who fill in forms to finding people who actually turn up and buy. Enquiry volume fell by a quarter and vehicle sales from advertising rose by half."
  },
  steps: [
    "List every event the pixel sends, and send the same set from the server.",
    "List the valuable actions only your systems know about, and add them.",
    "Send each event within minutes of it happening.",
    "Include the correct action source for each event.",
    "Attach value and currency wherever money is involved.",
    "Never send estimated, test or assumed events to your live setup."
  ],
  mistakes: [
    "Sending events in a nightly batch, which weakens matching and delays optimisation.",
    "Setting every action source to website, including phone and in person sales.",
    "Sending events you assume happened rather than events you know happened."
  ],
  words: [
    { t: "Action source", d: "Where the event happened: website, app, phone call, chat, email, shop or other." },
    { t: "Batch sending", d: "Grouping events and sending them together later, rather than immediately." },
    { t: "Event freshness", d: "How soon after the action the event is sent." },
    { t: "Seven day limit", d: "The maximum age of an event Meta will accept." }
  ],
  takeaways: [
    "Send everything the pixel sends, plus what only your systems know.",
    "Send within minutes. Events older than seven days are rejected.",
    "Set the action source accurately for each event type.",
    "Never send estimated or assumed events."
  ],
  selfCheck: [
    "My server sends the same events as my pixel, plus extra ones.",
    "My events arrive within minutes, not overnight.",
    "My action sources reflect where each action really happened."
  ],
  quiz: [
    { q: "How quickly should events be sent?", options: ["Within a week", "Within minutes of the action where possible", "Once a month"], a: 1, why: "Fresh events match better and can influence optimisation while it matters." },
    { q: "What is the action source?", options: ["Which ad produced the event", "Where the action took place: website, phone, shop and so on", "The event value"], a: 1, why: "Meta treats different action sources differently, so accuracy matters." },
    { q: "Which events are most valuable to add from the server?", options: ["Page views", "Actions only your own systems know about, such as a sale completed later", "Ad impressions"], a: 1, why: "They represent real business outcomes the browser could never report." }
  ],
  exercise: { task: "List three valuable actions your business systems know about that Meta currently does not, such as a completed appointment, a qualified lead, or a refund. For each, write when it happens and where the data lives." },
  challenge: { task: "Design a complete server side event specification: every event, its trigger, its timing, its action source, its parameters, its matching fields, how the event identifier is generated, and the rules preventing test or estimated data reaching the live setup." }
},

"5.17.5": {
  intro: "Deduplication is how Meta avoids counting the same event twice when you send it from both the browser and the server. Getting it wrong doubles your reported results, which is worse than sending nothing.",
  plain: [
    "You and your colleague both post a letter reporting the same sale. Head office receives two letters describing one sale. If they cannot tell the letters are about the same sale, they record two sales, and everyone believes business is twice as good as it is.",
    "The solution is to write the same reference number on both letters. Head office sees the matching number, realises it is one sale reported twice, and files only one.",
    "That reference number is the event identifier. Getting it right is the single most important detail in a CAPI setup."
  ],
  idea: [
    "Meta removes duplicates by comparing two things: the event name and the event identifier. If a pixel event and a server event share both, Meta treats them as one event and keeps a single copy.",
    "This means the event identifier must be generated once and used by both channels. The usual method is that your website generates a unique code for the transaction, passes it to the pixel, and passes the same code to your server for the CAPI send.",
    "A common and effective approach is to use your own order number as the basis, since it is already unique. For events without a natural identifier, such as a page view, your system generates a random code.",
    "Two failure patterns are worth memorising. If the identifiers do not match, everything is counted twice, your reported results double, and you may increase budgets based on numbers that are not real. If you send only one channel to avoid the risk, you lose the coverage that made CAPI worthwhile in the first place.",
    "Meta compares events within a window of several days, so a small timing difference between the two sends is fine. They do not need to arrive at the same moment."
  ],
  example: {
    title: "Double counting found late",
    body: "A business launched CAPI without matching identifiers. Reported sales doubled overnight and the team celebrated a breakthrough. They increased budgets by 60 percent over the following month based on an apparent cost per sale that had halved. Their actual sales had not changed at all. When the error was found, the account had spent heavily against imaginary performance. The fix was one line of code passing the same identifier to both channels."
  },
  steps: [
    "Decide what generates your unique event identifier, ideally your existing order number.",
    "Pass that identifier to the pixel when the event fires in the browser.",
    "Pass the same identifier to your server for the CAPI send.",
    "Ensure the event name is identical in both channels.",
    "Test by making a real transaction and confirming Events Manager shows one event, not two.",
    "Check the deduplication status in Events Manager regularly."
  ],
  mistakes: [
    "Generating separate identifiers in the browser and on the server, which prevents matching entirely.",
    "Using different event names between channels, such as Purchase in one and purchase in the other.",
    "Celebrating a sudden doubling of reported results instead of investigating it."
  ],
  words: [
    { t: "Deduplication", d: "Recognising two reports of one event and keeping a single copy." },
    { t: "Event identifier", d: "The unique code shared by both channels for the same event." },
    { t: "Double counting", d: "Recording one real event twice, inflating your results." },
    { t: "Deduplication window", d: "The period within which Meta will match two reports of the same event." }
  ],
  takeaways: [
    "The same event identifier and event name must be used by both channels.",
    "Your order number is usually the best basis for the identifier.",
    "Failed deduplication doubles reported results and leads to real overspending.",
    "A sudden doubling of results is a warning sign, not a success."
  ],
  selfCheck: [
    "I know what generates my event identifiers.",
    "I have confirmed the same identifier reaches both channels.",
    "I have verified in Events Manager that deduplication is working."
  ],
  quiz: [
    { q: "What two things must match for deduplication to work?", options: ["The value and the currency", "The event name and the event identifier", "The time and the device"], a: 1, why: "Meta compares both to recognise the same event reported twice." },
    { q: "Your reported sales double overnight after a CAPI launch. What happened?", options: ["A genuine improvement", "Deduplication is failing and every event is counted twice", "Meta changed its reporting"], a: 1, why: "A sudden exact doubling almost always means duplicate counting." },
    { q: "What is usually the best basis for an event identifier?", options: ["The date", "Your existing order or transaction number, which is already unique", "The customer's email"], a: 1, why: "It is unique, already available in both places, and easy to reuse." }
  ],
  exercise: { task: "Make one real transaction on your site and check Events Manager. Confirm it appears once, and look for the deduplication indicator showing both channels were received and matched. Write down what you see." },
  challenge: { task: "Write a deduplication test and monitoring plan: how identifiers are generated and shared, the test procedure after any change, the Events Manager indicators to watch, the warning signs of failure, and the reconciliation against internal records that would catch double counting early." }
},

"5.17.6": {
  intro: "Server side events can carry far more matching information than browser events. This lesson covers how to raise your match quality using what your business already holds.",
  plain: [
    "The last module explained match quality using the lost wallet comparison: the more identifying detail inside, the easier it is to return.",
    "Server side events have an advantage here. The browser only knows what the visitor typed on that page. Your business systems know much more: the full customer record, previous orders, the phone number from an earlier purchase, the address from delivery.",
    "So the server can send a much fuller description of who this was, which means far more events get matched and used."
  ],
  idea: [
    "The fields available for matching are email address, phone number, first name, last name, city, state or region, postal code, country, date of birth, gender, and an external identifier which is your own customer reference. Also the click identifier and browser identifier if you captured them.",
    "All of these except the click and browser identifiers must be scrambled before sending, using a method called hashing. Most integrations do this automatically. If you are building it yourself, this is not optional, and sending readable personal data would be a serious privacy failure.",
    "Two fields deserve emphasis. The click identifier is the strongest single matching signal, because it directly connects to a specific ad click. Capture and store it. And the phone number is the most commonly available field that businesses fail to send, usually because nobody thought to include it. It must include the country code.",
    "There are strict limits on what may be sent. Never send health conditions, treatments, financial account details, or anything revealing sensitive personal characteristics. Match fields exist to identify a person, not to describe them. For a healthcare business, this distinction is not a technicality, it is the line between compliant and not."
  ],
  example: {
    title: "Using what was already there",
    body: "A retailer sent email addresses only, scoring 4.1. Their order system already held phone numbers with country codes, full names, cities and postcodes for every order, because they ship physical goods. Adding those five fields, all already in the database, raised the score to 8.6. Matched events rose by a third, reported revenue rose accordingly, and cost per purchase in the reports fell without any change to the advertising itself."
  },
  steps: [
    "List every matching field your systems already hold.",
    "Confirm each one may lawfully be used for this purpose.",
    "Confirm all fields are hashed before sending.",
    "Add the click identifier by capturing it on arrival and storing it.",
    "Include phone numbers with country codes.",
    "Check your match quality score after a week and record the change."
  ],
  mistakes: [
    "Sending only an email address when the database holds five other usable fields.",
    "Sending phone numbers without country codes, which prevents matching.",
    "Confusing matching fields with descriptive data, and sending sensitive information."
  ],
  words: [
    { t: "Hashing", d: "Scrambling data before sending so the original cannot be read." },
    { t: "External identifier", d: "Your own customer reference number, usable as a matching field." },
    { t: "Browser identifier", d: "A value stored by the pixel that helps connect browser and server events." },
    { t: "Country code", d: "The international dialling prefix, required for phone number matching." }
  ],
  takeaways: [
    "Server events can carry far more matching information than browser events.",
    "The click identifier is the strongest single matching signal.",
    "Phone numbers need country codes and are the most commonly missed field.",
    "Matching fields identify a person. They must never describe sensitive characteristics."
  ],
  selfCheck: [
    "I send every matching field my systems legitimately hold.",
    "My phone numbers include country codes.",
    "I have confirmed no sensitive information is included."
  ],
  quiz: [
    { q: "What is the strongest single matching signal?", options: ["The city", "The click identifier captured when the visitor arrived", "The date of birth"], a: 1, why: "It ties the conversion directly to a specific ad click." },
    { q: "Why do server events usually match better than browser events?", options: ["They are faster", "Your business systems hold much more customer information than the browser does", "Meta prioritises them"], a: 1, why: "More fields means a higher chance of a successful match." },
    { q: "What must never be sent as matching data?", options: ["Postal code", "Health conditions or other sensitive personal characteristics", "First name"], a: 1, why: "Matching fields identify a person. They must not describe sensitive traits." }
  ],
  exercise: { task: "List every field your order or enquiry database holds about a customer. Mark which are valid matching fields, which you currently send, and which you could add. Check that none of the additions are sensitive." },
  challenge: { task: "Build a match quality improvement project plan: the fields available across each of your systems, the legal review confirming permitted use, the hashing implementation, the click identifier capture, the rollout sequence, and the before and after measurement." }
},

"5.17.7": {
  intro: "Sending customer information to Meta carries real responsibility. This lesson covers the privacy rules in plain terms, and the specific care required in sensitive industries.",
  plain: [
    "You are handing information about your customers to another company. That is a serious act, and the rules exist for good reasons.",
    "Two questions decide whether you may do it. Did the customer agree to this use of their information? And is the information itself the kind that may be shared at all?",
    "Some information may never be shared regardless of consent, because of what it reveals about the person. Health, finances, religion, political views, sexual orientation, and similar categories fall into this group.",
    "If you are unsure, the safe answer is to send less. Nobody has ever been penalised for sending too little identifying data."
  ],
  idea: [
    "The first requirement is a lawful basis, which in most regions means consent. Your website should have a consent mechanism, and events should respect what the visitor chose. If a visitor declines, you should not send their personal matching data. Sending it anyway is a breach regardless of technical capability.",
    "The second requirement is hashing. All personal fields must be scrambled before transmission. This is required by Meta and is basic practice under most privacy law.",
    "The third requirement concerns categories. Meta's terms prohibit sending sensitive information, and this includes anything revealing health conditions, treatments, medical appointments, financial status, or membership of protected groups. Importantly, this applies to event names and parameters too, not just matching fields. An event named diabetes_consultation_booked breaks the rule even though it contains no name.",
    "For healthcare specifically, the safe approach is to send the fact that a conversion happened without describing what it concerned. A generic Lead or Schedule event with a value is permitted. The same event named after a condition is not. This is the single most common compliance mistake in medical advertising.",
    "Finally, keep records. Which fields you send, on what basis, reviewed by whom and when. If anyone ever asks, the answer should be a document rather than a memory."
  ],
  example: {
    title: "The event name that broke the rule",
    body: "A clinic set up server side events named after each service, including one for a mental health assessment. No patient names were sent and the data was hashed. The setup was still non compliant, because the event name itself revealed something sensitive about every person it described. The correction was straightforward: a single generic Schedule event with a value, and the service type kept in their own internal system where it belonged."
  },
  steps: [
    "Confirm you have a lawful basis for sending customer information.",
    "Implement a consent mechanism and make your events respect it.",
    "Confirm all personal fields are hashed.",
    "Review every event name and parameter for anything revealing a sensitive category.",
    "In healthcare, use generic event names and keep clinical detail in your own systems.",
    "Document what you send, why, and who approved it, and review it periodically."
  ],
  mistakes: [
    "Sending matching data for visitors who declined consent.",
    "Naming events after medical conditions, treatments or financial situations.",
    "Assuming hashing makes any data acceptable to send, when category restrictions still apply."
  ],
  words: [
    { t: "Lawful basis", d: "The legal justification for processing someone's personal information." },
    { t: "Consent", d: "The visitor's agreement to a specific use of their information." },
    { t: "Sensitive category", d: "Information revealing health, finances, beliefs or protected characteristics." },
    { t: "Hashing", d: "Scrambling data before sending so the original cannot be read." },
    { t: "Data minimisation", d: "The principle of sending only what is genuinely necessary." }
  ],
  takeaways: [
    "You need a lawful basis, and events must respect consent choices.",
    "All personal fields must be hashed before sending.",
    "Category restrictions apply to event names and parameters, not just matching fields.",
    "In healthcare, send that a conversion happened, never what it concerned."
  ],
  selfCheck: [
    "Our events respect the visitor's consent choice.",
    "No event name or parameter reveals a sensitive category.",
    "We have written documentation of what we send and why."
  ],
  quiz: [
    { q: "A clinic sends an event named cancer_screening_booked with hashed data. Is this acceptable?", options: ["Yes, because the data is hashed", "No, because the event name itself reveals sensitive health information", "Yes, if consent was given"], a: 1, why: "Category restrictions apply to the event name, regardless of hashing or consent." },
    { q: "What should happen when a visitor declines consent?", options: ["Send their data anyway, it is hashed", "Do not send their personal matching data", "Send only their email"], a: 1, why: "Consent governs whether you may send the information at all." },
    { q: "What is data minimisation?", options: ["Compressing files", "Sending only what is genuinely necessary", "Reducing your budget"], a: 1, why: "It reduces both risk and the consequences of any mistake." }
  ],
  exercise: { task: "Review every event name and parameter in your setup. Write down any that could reveal something sensitive about the person, and rewrite them as generic equivalents." },
  challenge: { task: "Produce a privacy compliance document for your tracking: the lawful basis, the consent mechanism and how events respect it, the full list of fields sent, the hashing method, the category review of every event name, the approval record, and the schedule for re-review." }
},

"5.17.8": {
  intro: "There are several ways to implement CAPI, ranging from a few clicks to a full developer project. This lesson helps you choose the right one.",
  plain: [
    "There are four ways to get water into your house. A tap that already exists, a plumber connecting you to the mains, a prefabricated system you install in a day, or building your own pipework from scratch.",
    "All four deliver water. The right choice depends on what your house already has and who you can call.",
    "CAPI is the same. Most businesses can use an option that already exists, and only a few need to build anything."
  ],
  idea: [
    "Option one is the platform integration. Shopify, WooCommerce, BigCommerce, Wix and others have a built in CAPI connection. You enter your details and it works. If you have this, use it. It is the fastest and least error prone route, and deduplication is usually handled for you.",
    "Option two is a partner integration. Tools such as customer data platforms, tag managers with server side containers, and various marketing platforms offer prebuilt connections. This suits businesses already using such a tool.",
    "Option three is the Conversions API Gateway. This is a service Meta offers where a server is set up on your behalf, usually in a cloud account you own. It requires some technical setup but no code writing, and it suits businesses with a website that has no built in option.",
    "Option four is a direct build. Your developers write code that sends events to Meta's endpoint. This gives complete control and is the only option for complex systems, offline events, or unusual business flows. It also requires ongoing maintenance.",
    "The honest guidance: start with option one if it exists. Most businesses that spent months on a custom build could have used a platform integration in an afternoon. Only build when you genuinely need something the ready made options cannot do."
  ],
  example: {
    title: "Choosing the simplest route that works",
    body: "A business began a three month developer project to build CAPI. Two weeks in, someone noticed their platform had a built in connection that supported every event they needed, including deduplication. They switched it on in twenty minutes. The developer time was redirected to sending offline sales data, which genuinely did require a custom build and which no ready made option covered."
  },
  steps: [
    "Check first whether your website platform has a built in connection.",
    "If not, check whether a tool you already use offers a partner integration.",
    "If neither, consider the gateway option.",
    "Only choose a direct build when the ready made options cannot do what you need.",
    "Whichever you choose, verify deduplication is handled.",
    "Document who maintains it and how it is monitored."
  ],
  mistakes: [
    "Starting a custom build before checking for a built in option.",
    "Choosing a partner integration without confirming it handles deduplication.",
    "Building something with no plan for who maintains it afterwards."
  ],
  words: [
    { t: "Platform integration", d: "A built in CAPI connection provided by your website platform." },
    { t: "Partner integration", d: "A prebuilt connection offered by another tool you already use." },
    { t: "Conversions API Gateway", d: "A Meta provided service that runs the server side connection for you." },
    { t: "Direct build", d: "Custom code written by your developers to send events." },
    { t: "Endpoint", d: "The address on Meta's servers where events are sent." }
  ],
  takeaways: [
    "Use the platform integration if one exists. It is fastest and safest.",
    "Partner integrations suit businesses already using a suitable tool.",
    "The gateway suits sites with no built in option and limited developer time.",
    "Build custom only when ready made options genuinely cannot do the job."
  ],
  selfCheck: [
    "I have checked whether my platform offers a built in connection.",
    "I know which option my business should use and why.",
    "I know who maintains the implementation."
  ],
  quiz: [
    { q: "What should you check first?", options: ["Developer availability", "Whether your website platform has a built in CAPI connection", "Your budget"], a: 1, why: "It is usually the fastest, safest and cheapest route by a wide margin." },
    { q: "When is a custom build genuinely justified?", options: ["Always, for maximum control", "When ready made options cannot handle your events, such as complex offline data", "For any business over a certain size"], a: 1, why: "Custom work should solve a problem the simple options cannot." },
    { q: "What must you verify with any option?", options: ["The server location", "That deduplication is correctly handled", "The programming language"], a: 1, why: "Failed deduplication doubles your reported results." }
  ],
  exercise: { task: "Research which CAPI options are available for your specific website platform. Write down the built in option if it exists, what it supports, what it does not, and the effort required." },
  challenge: { task: "Produce an implementation recommendation: the options available to your business, what each supports, the effort and cost of each, the maintenance burden, your recommendation with reasoning, and the verification plan for whichever is chosen." }
},

"5.17.9": {
  intro: "This final lesson of the module covers checking that your server side setup works, and keeping it working over time.",
  plain: [
    "A server side connection is a machine running quietly in the background. It has no visible parts, so when it stops nobody notices.",
    "That is different from a broken website, where customers complain within minutes. A broken CAPI connection produces silence, and the only symptom is that your numbers slowly become wrong.",
    "So you need deliberate checks, on a schedule, forever. This is the last lesson of the module because it is the one that decides whether all the previous work keeps paying."
  ],
  idea: [
    "Start with the test tool. Events Manager has a Test Events section where you can send a test event and watch it arrive. Use it during setup and after every change. Important: use the test event code, so test data never mixes with your real data.",
    "Then check the quality indicators. Events Manager shows, for each event, how many came from the browser, how many from the server, how many were deduplicated, and the match quality score. These four numbers tell you almost everything about the health of your setup.",
    "Then set up monitoring. The most valuable single check is a weekly comparison of your own records against Meta's reported conversions. A sudden change in the gap means something broke. Many teams also set an alert if server events stop arriving for a few hours.",
    "Then plan for failures. Servers go down, tokens expire, and website updates break things. Access tokens in particular can expire, and when they do, events stop silently. Know when yours expires and set a reminder before that date.",
    "Finally, re-test after every change to your website, your payment system, your customer database, or your platform. Those four are where breakages come from."
  ],
  example: {
    title: "The token that expired",
    body: "A business had CAPI running perfectly for eight months. The access token expired on a Tuesday. No error appeared in Ads Manager, no email arrived, and nothing looked wrong. Server events simply stopped. Reported conversions fell by 40 percent over the following weeks, which the team interpreted as declining performance and responded to by cutting budgets. The real cause was found five weeks later. A calendar reminder would have prevented all of it."
  },
  steps: [
    "Use Test Events with a test code during setup and after every change.",
    "Check the four health numbers weekly: browser events, server events, deduplicated events, match quality.",
    "Compare Meta's conversions against your own records weekly.",
    "Note your access token expiry date and set a reminder well before it.",
    "Set an alert for server events stopping.",
    "Re-test after any change to the website, payment system, database or platform."
  ],
  mistakes: [
    "Testing once at setup and never again.",
    "Letting an access token expire, which stops everything silently.",
    "Interpreting a tracking failure as a performance decline and cutting budgets."
  ],
  words: [
    { t: "Test Events", d: "A tool for sending and watching test events without mixing them into real data." },
    { t: "Test event code", d: "A code that marks an event as a test so it is kept separate." },
    { t: "Token expiry", d: "The date after which your access token stops working." },
    { t: "Silent failure", d: "A breakage that produces no warning, only wrong numbers." }
  ],
  takeaways: [
    "Server side failures are silent. Only deliberate checks find them.",
    "Watch four numbers weekly: browser, server, deduplicated, match quality.",
    "Access tokens expire. Know the date and set a reminder.",
    "Re-test after any change to website, payments, database or platform."
  ],
  selfCheck: [
    "I know my access token expiry date.",
    "I check the four health numbers weekly.",
    "I re-test after every relevant system change."
  ],
  quiz: [
    { q: "Why are server side failures dangerous?", options: ["They cost more to fix", "They are silent, so the only symptom is numbers slowly becoming wrong", "They break the website"], a: 1, why: "Nothing alerts you, so failures can persist for months." },
    { q: "What happens when an access token expires?", options: ["Meta emails you", "Server events stop arriving, usually with no warning", "Events queue until renewed"], a: 1, why: "This is a common cause of sudden unexplained drops in reported conversions." },
    { q: "What must you use when sending test events?", options: ["A separate pixel", "The test event code, so test data stays out of real data", "A different account"], a: 1, why: "Otherwise test events pollute your real reporting and optimisation." }
  ],
  exercise: { task: "Send a test event using the Test Events tool with a test code. Confirm it arrives. Then find your access token expiry date and put a reminder in your calendar two weeks before it." },
  challenge: { task: "Build a CAPI monitoring and maintenance system: the weekly health checks with thresholds, the reconciliation against internal records, the token renewal schedule, the alerting for stopped events, the re-test triggers, the responsible owner, and the incident procedure when something fails." }
}

});
