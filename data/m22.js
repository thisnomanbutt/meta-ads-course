/* Module 22 - CRM and Offline Data (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"6.22.1": {
  intro: "Your customer database is the record of everyone who enquired or bought. This lesson covers organising it so it can improve your advertising.",
  plain: [
    "Most businesses have a list of customers somewhere. In a spreadsheet, in an email inbox, in a software system, or in several places at once.",
    "For advertising purposes, that list is only useful if three things are true. You can find everyone. You know where each person came from. And you know what happened to them.",
    "Most businesses fail on at least one of the three, which is why their advertising cannot learn from their customers."
  ],
  idea: [
    "The structure you need has three layers. Identity: how to recognise this person, meaning email, phone, name and location. Source: where they came from, meaning the campaign and advertisement. Outcome: what happened, meaning the stages they passed through and the money involved.",
    "The identity layer determines how well Meta can match your data, as covered in Level 5. More fields means better matching.",
    "The source layer must be captured at the moment of arrival and never overwritten. A common and destructive mistake is updating the source field when a customer later returns through a different route, which erases the original attribution and makes historical analysis impossible.",
    "The outcome layer is what most databases handle worst. Recording that someone became a customer is common. Recording when, for how much, through which stages, and how long each took, is rare. Yet those details are exactly what allows you to optimise toward value rather than volume.",
    "One organising principle helps enormously: one record per person, not one per enquiry. A person who enquires three times over two years is one customer with three enquiries, and treating them as three separate people corrupts every calculation you make."
  ],
  example: {
    title: "Three records, one person",
    body: "A company counted 4,200 leads in a year. Cleaning the data revealed 3,100 unique people, with many having enquired several times before buying. Their cost per lead had looked good and their conversion rate had looked poor, because the same people were counted repeatedly. Correcting to one record per person changed both figures substantially and revealed that repeat enquirers converted at four times the rate of first time enquirers, which changed how they handled them."
  },
  steps: [
    "Choose one system as the master record for customers.",
    "Ensure it holds identity, source and outcome fields.",
    "Capture the source at arrival and protect it from being overwritten.",
    "Record outcomes with dates and values, not just a status.",
    "Deduplicate so each person has one record.",
    "Check you can export the whole thing, since you will need to."
  ],
  mistakes: [
    "Overwriting the original source when a customer returns through another route.",
    "One record per enquiry rather than one per person.",
    "Recording that someone became a customer without recording when or for how much."
  ],
  words: [
    { t: "CRM", d: "Customer relationship management system: the database holding your leads and customers." },
    { t: "Identity fields", d: "Information used to recognise a person, such as email and phone." },
    { t: "Source attribution", d: "The record of where a person originally came from." },
    { t: "Deduplication", d: "Merging several records that describe the same person." }
  ],
  takeaways: [
    "Three layers are needed: identity, source and outcome.",
    "Capture the source at arrival and never overwrite it.",
    "Record outcomes with dates and values, not just a status.",
    "One record per person, not one per enquiry."
  ],
  selfCheck: [
    "We have one master customer database.",
    "Original sources are protected from being overwritten.",
    "Each person has one record, not several."
  ],
  quiz: [
    { q: "What happens if you overwrite the original source when a customer returns?", options: ["Nothing important", "You erase the attribution and make historical analysis impossible", "The record is deleted"], a: 1, why: "The first touch is what advertising needs to be credited against." },
    { q: "Why does one record per person matter?", options: ["It saves storage", "Counting the same person several times corrupts every calculation", "It is required by Meta"], a: 1, why: "Duplicate records distort both volume and conversion rates." },
    { q: "Which layer do most databases handle worst?", options: ["Identity", "Outcome, especially dates and values", "Source"], a: 1, why: "Recording a status is common. Recording the detail that enables value optimisation is rare." }
  ],
  exercise: { task: "Open your customer database and check three things: can you find where each person came from, can you see what happened to them with dates and values, and does each person appear only once. Write down which of the three fail." },
  challenge: { task: "Design your customer data structure: every field across the three layers, the rules protecting source attribution, the deduplication process, the export capability, and the ownership of data quality." }
},

"6.22.2": {
  intro: "Lead lifecycle stages describe the journey from first contact to customer. Defining them clearly is what makes everything else measurable.",
  plain: [
    "Without defined stages, a sales team describes progress in words like warm, promising, or nearly there. Those words mean different things to different people, so nothing can be counted.",
    "Stages replace that with a small number of clearly defined states that everyone agrees on. A lead is either in one stage or another, and moving between them is a specific event with a date.",
    "Once you have that, you can count, measure, and improve. Before you have it, you cannot."
  ],
  idea: [
    "A workable set of stages for most businesses is: new, meaning it just arrived. Contacted, meaning someone reached them. Qualified, meaning they are a genuine potential customer. Opportunity, meaning a real proposal or appointment exists. Won or lost.",
    "Each stage needs a written definition specific enough that two people would classify the same lead identically. Qualified is the one that causes most disagreement, so its definition should be the most precise. For example: qualified means they confirmed a need, a timeframe within six months, and authority to decide.",
    "Each transition should record a date. Those dates give you the two most useful operational numbers: how long each stage takes, and where leads get stuck.",
    "The advertising value comes from choosing which stage to send back to Meta as your optimisation signal. New leads are plentiful but weak. Won deals are strong but rare. Qualified is usually the right compromise, having enough volume to learn from while genuinely reflecting quality.",
    "Finally, stages should only move forward, with lost as an exit. A lead bouncing between stages produces unusable data and usually indicates the definitions are unclear."
  ],
  example: {
    title: "Where leads were getting stuck",
    body: "A company introduced dated stages and found that leads moved from new to contacted in an average of 4 hours, from contacted to qualified in 2 days, and then sat at qualified for an average of 31 days before anything happened. The bottleneck was not lead quality or follow up speed. It was that nobody owned the step from qualified to proposal. Assigning that step reduced the 31 days to 6."
  },
  steps: [
    "Define five or six stages with written definitions.",
    "Make the definition of qualified precise enough to remove disagreement.",
    "Record a date on every stage transition.",
    "Measure how long leads spend in each stage.",
    "Identify where leads accumulate and assign ownership of that step.",
    "Choose the stage you will send back to Meta as your optimisation signal."
  ],
  mistakes: [
    "Vague stage definitions that two people would apply differently.",
    "Not recording dates, which makes bottlenecks invisible.",
    "Allowing leads to move backwards between stages."
  ],
  words: [
    { t: "Lifecycle stage", d: "A defined state a lead occupies on the way to becoming a customer." },
    { t: "Stage definition", d: "The written rule determining when a lead enters a stage." },
    { t: "Transition date", d: "When a lead moved from one stage to the next." },
    { t: "Bottleneck", d: "The stage where leads accumulate and progress stalls." }
  ],
  takeaways: [
    "Five or six clearly defined stages, each with a written definition.",
    "Qualified needs the most precise definition, as it causes most disagreement.",
    "Record dates so bottlenecks become visible.",
    "Qualified is usually the right signal to send back to Meta."
  ],
  selfCheck: [
    "Our stages have written definitions two people would apply identically.",
    "Every transition records a date.",
    "I know which stage is our bottleneck."
  ],
  quiz: [
    { q: "Which stage definition causes most disagreement?", options: ["New", "Qualified", "Lost"], a: 1, why: "It requires judgement, so it needs the most precise written rule." },
    { q: "Why record dates on transitions?", options: ["For compliance", "So you can see how long each stage takes and where leads get stuck", "To sort the list"], a: 1, why: "Bottlenecks are invisible without timing data." },
    { q: "Which stage is usually the best optimisation signal?", options: ["New leads", "Qualified", "Won deals"], a: 1, why: "It balances sufficient volume with genuine quality." }
  ],
  exercise: { task: "Write definitions for your lifecycle stages, making qualified precise enough that two colleagues would classify the same lead identically. Test this by asking two people to classify five real leads." },
  challenge: { task: "Build a lifecycle measurement system: the stages and definitions, the transition tracking, the average time in each stage, the conversion rate between stages, the bottleneck analysis, and the ownership assignment for each step." }
},

"6.22.3": {
  intro: "Offline events are the actions that happen away from your website. This lesson covers designing which ones to send back to Meta.",
  plain: [
    "Meta can see what happens on your website. It cannot see the appointment someone attended, the phone call where they agreed to buy, or the contract signed three weeks later.",
    "Offline events are how you tell it. You are effectively saying: remember the person who clicked our advertisement in March? They just bought a car for 28,000 dollars.",
    "Meta then knows what kind of person eventually buys a car, and can look for more of them."
  ],
  idea: [
    "The design question is which events to send. The temptation is to send everything, but each event needs enough volume to be useful, and too many events dilutes attention.",
    "A good set for most businesses is three events. One mid funnel signal with reasonable volume, such as qualified lead or appointment attended. One strong signal, such as opportunity created or proposal sent. And the final outcome, such as sale completed, with its value.",
    "Each event needs the same components as any other: a name, a time, customer information for matching, and a value where money is involved. The action source should reflect where it happened, such as phone call or physical store.",
    "The timing rule matters here more than elsewhere. Offline events often reach the system days after the click, which is expected and fine, but they should be sent promptly after they happen rather than in a quarterly batch. Meta accepts events up to seven days old for some purposes and longer for offline uploads, but fresher is always better for optimisation.",
    "Finally, be consistent. An event sent sometimes and not others teaches the system a distorted pattern. If you send appointment attended, send it for every appointment attended, not only the ones someone remembered to record."
  ],
  example: {
    title: "Three events, in order",
    body: "A dental practice sent three offline events: appointment booked, appointment attended, and treatment purchased with value. Booking volume was high enough to optimise toward immediately. Within four months, treatment purchases had reached sufficient volume to optimise toward directly, and they switched. Cost per treatment fell by 44 percent, because the system had moved from finding people who book to finding people who attend and pay."
  },
  steps: [
    "List every meaningful action that happens away from your website.",
    "Choose three: a mid funnel signal, a strong signal, and the final outcome.",
    "Define exactly what triggers each one.",
    "Attach values to anything involving money.",
    "Set the correct action source for each.",
    "Send them promptly and consistently, without exceptions."
  ],
  mistakes: [
    "Sending events inconsistently, which teaches a distorted pattern.",
    "Sending only the final sale, which is usually too rare to optimise toward.",
    "Uploading in large infrequent batches rather than promptly."
  ],
  words: [
    { t: "Offline event", d: "An action happening away from your website, sent to Meta afterwards." },
    { t: "Action source", d: "Where the event happened, such as phone call or physical store." },
    { t: "Event consistency", d: "Sending the event every time it occurs, without exceptions." },
    { t: "Signal depth", d: "How close an event is to actual revenue." }
  ],
  takeaways: [
    "Choose about three offline events at different depths.",
    "Attach values to anything involving money.",
    "Send promptly and, above all, consistently.",
    "Move to deeper signals as their volume grows."
  ],
  selfCheck: [
    "I have chosen my offline events deliberately.",
    "They are sent consistently, every time.",
    "Values are attached where money is involved."
  ],
  quiz: [
    { q: "Why not send only the final sale?", options: ["It is not allowed", "It is usually too rare to provide enough volume for optimisation", "It costs more"], a: 1, why: "Learning needs roughly 50 events a week." },
    { q: "What does inconsistent sending cause?", options: ["Nothing", "The system learns a distorted pattern from a biased sample", "Higher costs per event"], a: 1, why: "Events sent only when remembered are not a representative sample." },
    { q: "What should accompany a completed sale event?", options: ["The product photograph", "Its value and currency", "The salesperson's name"], a: 1, why: "Without value, the system cannot distinguish large sales from small ones." }
  ],
  exercise: { task: "List every meaningful action in your business that happens away from your website. Choose three to send as events and write down exactly what triggers each and where the data would come from." },
  challenge: { task: "Design an offline event architecture: the events chosen with their triggers, the data sources, the values, the action sources, the sending frequency, the consistency controls, and the plan for moving to deeper signals as volume grows." }
},

"6.22.4": {
  intro: "A qualified lead signal tells Meta which enquiries were genuinely worth having. This lesson covers defining and sending it.",
  plain: [
    "If you tell Meta only that a form was filled in, it learns to find people who fill in forms. Some of those people are serious and some are not, and the system cannot tell the difference.",
    "Telling Meta which ones were serious is like correcting a student's homework. Without corrections they keep making the same mistakes. With corrections they improve.",
    "This single signal is usually the highest value improvement available to a lead generation business."
  ],
  idea: [
    "The definition must be objective and consistently applied. Qualified cannot mean the salesperson liked them. It should mean specific criteria were met, such as a confirmed need, a timeframe, and the ability to proceed.",
    "The volume needs checking. If you receive 200 leads a month and 30 are qualified, that is roughly 7 a week, which is below the learning threshold. In that case optimise toward a broader signal, such as contacted successfully, until volume grows.",
    "The delay matters too. If qualification happens three weeks after the lead arrives, the signal reaches Meta late. That is acceptable, and it is far better than nothing, but faster qualification produces faster learning. Businesses that can qualify within 48 hours have a real advantage.",
    "Send it with the same customer information used for matching, so Meta can connect the qualification back to the original person and therefore to the advertisement that produced them.",
    "One warning worth stating: once you optimise toward qualified leads, your cost per lead will rise and your lead volume will fall. This is the system doing what you asked. Judge the change on cost per qualified lead and cost per customer, never on cost per lead, or you will conclude that an improvement was a failure."
  ],
  example: {
    title: "The expected rise that looked like failure",
    body: "A company switched to optimising for qualified leads. Cost per lead rose from 18 to 44 and volume halved. Two managers wanted to reverse the change immediately. The team held for six weeks. Qualified leads per month had risen from 62 to 89, and customers from 19 to 31. Cost per customer had fallen from 340 to 208. Every number that mattered had improved while the most visible number had worsened."
  },
  steps: [
    "Write an objective definition of qualified with specific criteria.",
    "Check the monthly volume against the learning threshold.",
    "If volume is too low, choose a broader signal for now.",
    "Reduce the time between arrival and qualification where possible.",
    "Send the signal with full customer matching information.",
    "Judge results on cost per qualified lead and cost per customer only."
  ],
  mistakes: [
    "Defining qualified subjectively, so it is applied inconsistently.",
    "Optimising toward a signal with too little volume.",
    "Reversing the change when cost per lead rises, which it is supposed to do."
  ],
  words: [
    { t: "Qualified lead signal", d: "An event telling Meta which leads were genuinely worthwhile." },
    { t: "Objective definition", d: "Criteria specific enough that two people would agree." },
    { t: "Qualification delay", d: "Time between a lead arriving and being assessed." },
    { t: "Expected trade", d: "Fewer, more expensive leads in exchange for more customers." }
  ],
  takeaways: [
    "Define qualified objectively, not by how the salesperson felt.",
    "Check volume against the learning threshold before optimising toward it.",
    "Faster qualification produces faster learning.",
    "Expect cost per lead to rise. Judge on cost per customer."
  ],
  selfCheck: [
    "Our definition of qualified is objective and written down.",
    "Our qualified volume is sufficient to optimise toward.",
    "Everyone who reads reports understands that cost per lead will rise."
  ],
  quiz: [
    { q: "What happens to cost per lead when you optimise for qualified leads?", options: ["It falls", "It rises, which is expected and correct", "It stays the same"], a: 1, why: "The system stops chasing cheap leads and finds better ones instead." },
    { q: "Your qualified volume is 7 a week. What should you do?", options: ["Optimise toward it anyway", "Use a broader signal until volume grows", "Stop advertising"], a: 1, why: "Below the learning threshold the system cannot optimise reliably." },
    { q: "How should qualified be defined?", options: ["However the salesperson feels", "By specific objective criteria two people would apply identically", "By lead score alone"], a: 1, why: "Subjective definitions produce inconsistent signals and confused learning." }
  ],
  exercise: { task: "Write your objective definition of a qualified lead with three specific criteria. Count how many of last month's leads would have met it, and check whether that is enough weekly volume to optimise toward." },
  challenge: { task: "Plan a migration to qualified lead optimisation: the definition, the volume analysis, the technical implementation, the expected changes in every metric, the communication to management explaining why cost per lead will rise, and the six week review criteria." }
},

"6.22.5": {
  intro: "Opportunity and pipeline signals are deeper than qualification. This lesson covers when to use them and what they make possible.",
  plain: [
    "A qualified lead is someone worth talking to. An opportunity is a real possibility of money, with a proposal on the table or an appointment in the diary.",
    "Sending this deeper signal is like telling Meta not just which students were worth teaching, but which ones reached the exam.",
    "The information is better. The catch is that there is less of it, and it arrives later."
  ],
  idea: [
    "An opportunity signal typically means a proposal sent, a quotation issued, an appointment attended, or a trial started. It represents genuine progress toward money rather than merely interest.",
    "The advantage over qualification is precision. Qualification depends on human judgement. An opportunity usually depends on something concrete happening, which makes it a cleaner and more consistent signal.",
    "The disadvantage is volume and delay. Opportunities are fewer than qualified leads and arrive later. For many businesses this puts them below the learning threshold, which is why qualification remains the more common choice.",
    "Where opportunity signals genuinely work is in higher volume businesses, or as a secondary signal used for reporting rather than optimisation. You can send it to Meta for measurement even if you do not optimise toward it, which improves your reporting without risking your delivery.",
    "Pipeline value is the related idea: sending the expected value of the opportunity rather than just its existence. A proposal for 40,000 and a proposal for 4,000 are not the same event, and telling Meta the difference lets it distinguish between them."
  ],
  example: {
    title: "Sent for measurement, not optimisation",
    body: "A consultancy generated only 12 opportunities a month, far too few to optimise toward. They sent the events anyway, with their pipeline values, purely for reporting. Within a quarter they could see that one campaign produced 60 percent of pipeline value from 20 percent of leads. They moved budget accordingly. The signal had improved their decisions without ever being used for automatic optimisation."
  },
  steps: [
    "Define what constitutes an opportunity in your business, concretely.",
    "Count the monthly volume.",
    "If volume supports it, consider optimising toward it.",
    "If not, send it for measurement and reporting only.",
    "Attach the expected pipeline value to each opportunity.",
    "Use the reporting to guide budget allocation manually."
  ],
  mistakes: [
    "Optimising toward opportunities when volume is far below the threshold.",
    "Not sending them at all because they cannot be optimised toward.",
    "Sending opportunities without their values, losing the ability to distinguish size."
  ],
  words: [
    { t: "Opportunity", d: "A concrete step toward money, such as a proposal sent or appointment attended." },
    { t: "Pipeline value", d: "The expected value of an opportunity that has not yet closed." },
    { t: "Measurement only signal", d: "An event sent for reporting without being used for optimisation." },
    { t: "Signal precision", d: "How consistently an event reflects genuine progress." }
  ],
  takeaways: [
    "Opportunities are more precise than qualification but fewer and later.",
    "Send them for measurement even when volume is too low to optimise toward.",
    "Attach pipeline values so size differences are visible.",
    "Reporting improvements alone can justify sending a signal."
  ],
  selfCheck: [
    "I have defined what an opportunity means concretely.",
    "I know the monthly volume.",
    "I send them at least for measurement, with values attached."
  ],
  quiz: [
    { q: "Why are opportunity signals more precise than qualification?", options: ["They are automated", "They usually depend on something concrete happening rather than human judgement", "They arrive faster"], a: 1, why: "A proposal either exists or it does not." },
    { q: "Volume is too low to optimise toward opportunities. What should you do?", options: ["Do not send them", "Send them for measurement and reporting only", "Optimise anyway"], a: 1, why: "Better reporting improves manual decisions even without automatic optimisation." },
    { q: "What should accompany an opportunity event?", options: ["The salesperson's name", "Its expected pipeline value", "The lead's original form answers"], a: 1, why: "Without value, a large and a small opportunity look identical." }
  ],
  exercise: { task: "Define what counts as an opportunity in your business and count how many you had last month. Decide whether to optimise toward it or send it for measurement only, and write your reasoning." },
  challenge: { task: "Design a multi signal architecture: qualification, opportunity and closed sale, which are used for optimisation and which for measurement, the values attached to each, the volume analysis justifying the choices, and the reporting that uses the measurement only signals." }
},

"6.22.6": {
  intro: "Sending closed won revenue back to Meta is the deepest signal available. This lesson covers doing it properly.",
  plain: [
    "This is the complete correction. You are telling Meta exactly which people, out of everyone who saw your advertisements, eventually gave you money, and how much.",
    "It is the most valuable information you can send and the hardest to send well, because it arrives latest, in the smallest quantity, and it requires your business to record revenue against individual customers reliably.",
    "When it works, it changes what your advertising is looking for at the deepest level."
  ],
  idea: [
    "The event is usually called Purchase, with a value and currency, and an action source reflecting where it happened. The customer matching information is the same as always.",
    "Three decisions matter. Which value to send: gross revenue, revenue after discounts, or profit contribution. The most common choice is revenue after discounts, and the important thing is consistency, because changing the definition mid way makes historical comparison impossible. Some advanced advertisers send profit rather than revenue, which teaches the system to find profitable customers rather than merely large ones.",
    "When to send: at the point of payment rather than at contract signature, unless payment is reliably certain. Sending at signature and later losing the sale teaches the system something false.",
    "How to handle refunds and cancellations: these should ideally be sent back as negative or corrective events, so the system does not continue optimising toward customers who return everything. Many businesses skip this and quietly train their advertising to find people who buy and then cancel.",
    "For businesses with subscriptions or repeat purchase, there is a further choice: send the first payment, or send the expected lifetime value. Sending lifetime value is more powerful and requires confidence in your estimate, since a wrong estimate teaches the system a wrong pattern."
  ],
  example: {
    title: "The refunds nobody reported",
    body: "A retailer sent purchase events faithfully and never sent refunds. Their return rate on one product category was 38 percent. Meta continued optimising toward buyers of that category, because as far as it knew every one of those sales stood. Once refunds were sent as corrective events, delivery shifted toward categories with lower returns and net revenue rose by 12 percent with no change in spend."
  },
  steps: [
    "Decide which value definition you will send and record it.",
    "Send at the point of payment, not at agreement.",
    "Attach value, currency and full matching information.",
    "Send refunds and cancellations as corrective events.",
    "Decide whether to send first payment or lifetime value for repeat businesses.",
    "Verify Meta's reported revenue against your own accounts monthly."
  ],
  mistakes: [
    "Never sending refunds, which trains the system toward customers who return goods.",
    "Changing the value definition part way through, destroying comparability.",
    "Sending at contract signature when a meaningful share of contracts fall through."
  ],
  words: [
    { t: "Closed won", d: "A deal that completed and produced revenue." },
    { t: "Value definition", d: "Whether you send gross revenue, net revenue or profit." },
    { t: "Corrective event", d: "An event sent to reverse or adjust a previously reported one." },
    { t: "Lifetime value", d: "The total expected revenue from a customer over time." }
  ],
  takeaways: [
    "Choose one value definition and never change it silently.",
    "Send at payment rather than at agreement.",
    "Always send refunds as corrective events.",
    "Lifetime value is more powerful but requires a trustworthy estimate."
  ],
  selfCheck: [
    "Our value definition is written down and consistent.",
    "We send refunds and cancellations back.",
    "I verify Meta's revenue figures against our accounts."
  ],
  quiz: [
    { q: "What happens if you never send refunds?", options: ["Nothing", "The system keeps optimising toward customers who return goods", "Meta blocks your account"], a: 1, why: "It only knows about the sale, not the reversal." },
    { q: "When should a sale event be sent?", options: ["At contract signature", "At the point of payment, unless payment is reliably certain", "At first contact"], a: 1, why: "Sending sales that later fall through teaches false patterns." },
    { q: "Why does the value definition need to stay consistent?", options: ["Meta requires it", "Changing it makes historical comparison impossible", "It affects billing"], a: 1, why: "Comparing periods measured differently produces meaningless conclusions." }
  ],
  exercise: { task: "Check whether your refunds and cancellations are sent back to Meta. If they are not, calculate what percentage of your sales they represent, and consider what the system has been learning." },
  challenge: { task: "Design a revenue signal system: the value definition and its rationale, the trigger point, the refund and cancellation handling, the lifetime value approach if applicable, the reconciliation against accounts, and the governance preventing silent definition changes." }
},

"6.22.7": {
  intro: "Data matching decides how much of your offline information Meta can actually use. This lesson covers maximising the match.",
  plain: [
    "You upload a thousand customers. Meta matches six hundred. The other four hundred were real customers who saw your advertisements, but Meta could not recognise them, so they teach it nothing.",
    "Improving matching is often the cheapest improvement available, because the customers already exist and the data is already in your systems. You are simply describing them more completely."
  ],
  idea: [
    "The fields that improve matching are email address, phone number with country code, first and last name, city, state or region, postal code, country, date of birth and gender. Also your own customer reference and, where captured, the click identifier.",
    "Practical improvements that produce the largest gains, in order. Adding phone numbers where you only send emails. Adding country codes to phone numbers that lack them. Adding name and location fields, which are almost always available. Sending several email addresses where a person has more than one. And capturing the click identifier at the point of enquiry.",
    "Formatting matters more than people expect. Phone numbers need consistent international format. Names should be lower case with no punctuation before hashing. Whitespace should be removed. Most integration tools handle this automatically, but custom implementations frequently get it wrong and lose matches silently.",
    "There is also a business process element. If your staff record customer details inconsistently, no technical improvement will fix it. A booking system where the phone number field is optional will produce poor matching forever. Sometimes the fix is a required field rather than a code change."
  ],
  example: {
    title: "The optional field",
    body: "A clinic matched only 41 percent of its offline conversions. Investigation found their booking software treated the phone number as optional, and reception staff often skipped it when busy. Making the field required raised the match rate to 78 percent within two months. No technical work was involved at all, and the improvement in optimisation was immediate."
  },
  steps: [
    "Check your current match rate on offline uploads.",
    "List which fields you currently send.",
    "Identify fields your systems hold but do not send.",
    "Check formatting, especially phone country codes.",
    "Fix any business process producing incomplete records.",
    "Re-measure the match rate after a month."
  ],
  mistakes: [
    "Assuming poor matching is a technical problem when it is a data collection problem.",
    "Sending phone numbers without country codes.",
    "Never checking the match rate at all."
  ],
  words: [
    { t: "Match rate", d: "The share of uploaded records Meta could connect to a person." },
    { t: "Formatting", d: "How data is written, which affects whether it matches." },
    { t: "Required field", d: "A field that must be completed, improving data quality at source." },
    { t: "Silent loss", d: "Records failing to match without any error being shown." }
  ],
  takeaways: [
    "Match rate determines how much of your offline data is usable.",
    "Adding phone numbers and country codes usually produces the largest gain.",
    "Formatting errors lose matches silently.",
    "Sometimes the fix is a required field, not a code change."
  ],
  selfCheck: [
    "I know my current offline match rate.",
    "We send every field our systems hold.",
    "Our data collection process produces complete records."
  ],
  quiz: [
    { q: "What often causes poor matching in practice?", options: ["Meta limitations", "Incomplete data collection, such as optional phone number fields", "Slow uploads"], a: 1, why: "The most common cause is a business process rather than technology." },
    { q: "What must accompany a phone number?", options: ["The customer's name", "The country code, in consistent international format", "The area they live in"], a: 1, why: "Without it the number cannot be matched reliably." },
    { q: "Why is poor matching described as a silent loss?", options: ["It generates no error message, so nobody notices", "It happens overnight", "Meta hides it"], a: 0, why: "Unmatched records simply do nothing, with no warning." }
  ],
  exercise: { task: "Upload a sample of offline conversions and check the match rate. List every field your systems hold that you are not currently sending, and identify any collection process producing incomplete records." },
  challenge: { task: "Build a data matching improvement project: the current match rate, the field gap analysis, the formatting audit, the business process changes required at the point of collection, the technical changes, and the expected match rate after implementation." }
},

"6.22.8": {
  intro: "A feedback loop is the complete circle: advertisement produces lead, lead becomes customer, customer information returns to Meta. This lesson covers building it as a working system.",
  plain: [
    "Without a feedback loop, your advertising is a person shouting into a room and never hearing whether anyone replied. They will shout the same thing forever.",
    "With a loop, they hear which shouts got answers, and adjust. Over months they become considerably better at shouting.",
    "The loop is not one thing you build. It is a circle that must be complete at every point, and it fails at whichever point is weakest."
  ],
  idea: [
    "The circle has six points. Advertisement produces a lead. The lead's source is captured. The lead progresses through stages. The outcome is recorded with a value. The outcome is sent back to Meta with matching information. Meta uses it to find better people.",
    "Break any one and the whole circle stops working. The most commonly broken points are the second and fourth: source not captured at arrival, and outcomes recorded inconsistently.",
    "The frequency of the return journey matters. Daily or weekly is good. Monthly is workable. Quarterly is close to useless for optimisation, though still valuable for reporting. Automating the return removes the main cause of it not happening.",
    "The loop also needs a review element, which is the part most businesses omit entirely. Sending data back improves automatic optimisation. Looking at that data yourself improves your decisions. Both are needed, and the second is free once the first exists.",
    "Finally, expect the loop to take months to show its full effect. The system needs to accumulate outcomes before its behaviour changes noticeably. Businesses that abandon the loop after six weeks never see the benefit they built."
  ],
  example: {
    title: "Six months to compound",
    body: "A business built a complete loop sending qualified leads weekly and closed sales monthly with values. For the first two months nothing visibly changed. By month four, cost per qualified lead had fallen 18 percent. By month eight it had fallen 37 percent, and the mix of customers had shifted noticeably toward higher value clients. Had they judged it at week six they would have concluded it did nothing."
  },
  steps: [
    "Map the six points of your loop and identify which are missing.",
    "Fix source capture first, since everything downstream depends on it.",
    "Make outcome recording mandatory rather than optional.",
    "Automate the return journey so it does not depend on someone remembering.",
    "Set the frequency to weekly where possible.",
    "Review the returned data yourself quarterly, and give the loop months to show its effect."
  ],
  mistakes: [
    "Building most of the loop and leaving one point broken.",
    "Sending data back quarterly, which is too slow to help optimisation.",
    "Abandoning the loop before it has had time to compound."
  ],
  words: [
    { t: "Feedback loop", d: "The complete circle from advertisement to outcome and back to Meta." },
    { t: "Loop integrity", d: "Whether every point in the circle is functioning." },
    { t: "Return frequency", d: "How often outcomes are sent back." },
    { t: "Compounding period", d: "The months required before accumulated data changes behaviour noticeably." }
  ],
  takeaways: [
    "Six points, and the loop fails at whichever is weakest.",
    "Source capture and outcome recording are the most commonly broken points.",
    "Automate the return and aim for weekly.",
    "Give it months. The benefit compounds rather than appearing immediately."
  ],
  selfCheck: [
    "All six points of my loop function.",
    "The return journey is automated and at least monthly.",
    "I review the returned data myself as well as letting the system use it."
  ],
  quiz: [
    { q: "Which points are most commonly broken?", options: ["The first and last", "Source capture at arrival, and consistent outcome recording", "The technical send"], a: 1, why: "Both depend on human process rather than technology." },
    { q: "What return frequency is close to useless for optimisation?", options: ["Weekly", "Quarterly", "Daily"], a: 1, why: "The information arrives too late to influence learning meaningfully." },
    { q: "How long before the loop shows its full effect?", options: ["A few days", "Several months, as outcomes accumulate", "Immediately"], a: 1, why: "The system needs volume of outcome data before behaviour changes noticeably." }
  ],
  exercise: { task: "Draw your feedback loop as six points and mark each as working or broken. Fix the earliest broken point first, since everything after it depends on it." },
  challenge: { task: "Build a complete feedback loop implementation plan: each of the six points, its current state, the work required, the automation, the frequency, the review process, the expected timeline for visible effect, and how you will avoid abandoning it prematurely." }
},

"6.22.9": {
  intro: "This final lesson of the module covers value based lead optimisation, the most advanced form of lead generation available.",
  plain: [
    "Ordinary optimisation treats every customer as equal. One customer worth 500 dollars and one worth 50,000 dollars count the same.",
    "Value based optimisation tells Meta the difference, so it stops looking for customers and starts looking for valuable customers.",
    "For businesses where customer value varies widely, this is the largest single improvement available, and most businesses that could use it do not."
  ],
  idea: [
    "The requirement is straightforward to state and demanding to meet. You must send the actual value of each customer back to Meta, with reliable matching, in sufficient volume, consistently.",
    "The volume requirement is the usual constraint. Value optimisation needs more data than ordinary optimisation, because the system is learning a more complex pattern. If you close 15 deals a month, value optimisation is unlikely to work well, and qualified lead optimisation remains the better choice.",
    "Where it does work, the effect is often dramatic, because customer value in many businesses follows a steep distribution. A small proportion of customers frequently produce most of the revenue. A system optimising for count will find the many small ones. A system optimising for value will find the few large ones.",
    "There is a practical middle path for lower volume businesses. Rather than sending exact values, send different events for different value tiers, such as standard customer and high value customer. This is coarser but requires less volume, and it captures most of the benefit.",
    "Finally, the values you send must be accurate. A system optimising toward wrong values will confidently find the wrong customers, which is worse than not optimising for value at all."
  ],
  example: {
    title: "Finding the few that mattered",
    body: "A business analysed its customers and found the top 12 percent produced 61 percent of revenue. Their advertising, optimising for lead count, was finding mostly small customers. They implemented value based optimisation with real revenue sent back weekly. Over five months lead volume fell 22 percent and total revenue from advertising rose 71 percent, because the mix of customers had shifted decisively toward the valuable ones."
  },
  steps: [
    "Analyse how much your customer values vary.",
    "If variation is small, value optimisation offers little. Stay with qualified leads.",
    "If variation is large, check whether your volume supports value optimisation.",
    "If volume is insufficient, use value tiers as separate events instead.",
    "Verify the accuracy of every value you send.",
    "Expect lead volume to fall and revenue per customer to rise."
  ],
  mistakes: [
    "Attempting value optimisation with too little volume.",
    "Sending inaccurate values, which finds the wrong customers confidently.",
    "Judging the change on lead volume rather than total revenue."
  ],
  words: [
    { t: "Value based optimisation", d: "Optimising toward revenue produced rather than number of customers." },
    { t: "Value distribution", d: "How widely customer values vary in your business." },
    { t: "Value tier", d: "A band of customer value, sent as a separate event when exact values are impractical." },
    { t: "Value accuracy", d: "Whether the amounts sent reflect what you genuinely earned." }
  ],
  takeaways: [
    "Value optimisation suits businesses where customer value varies widely.",
    "It needs more volume than ordinary optimisation.",
    "Value tiers are a practical middle path for lower volume businesses.",
    "Inaccurate values are worse than no value optimisation at all."
  ],
  selfCheck: [
    "I know how widely my customer values vary.",
    "I know whether my volume supports value optimisation.",
    "Every value I send has been verified as accurate."
  ],
  quiz: [
    { q: "Which businesses benefit most from value optimisation?", options: ["Those with one product at a fixed price", "Those where customer value varies widely", "Those with low volume"], a: 1, why: "When all customers are worth the same, there is nothing to optimise toward." },
    { q: "What is the practical alternative for lower volume businesses?", options: ["Nothing", "Value tiers sent as separate events", "Optimising for clicks"], a: 1, why: "Coarser bands need less data while capturing most of the benefit." },
    { q: "What is worse than not optimising for value?", options: ["Optimising for volume", "Optimising toward inaccurate values", "Sending too many events"], a: 1, why: "The system will confidently and efficiently find the wrong customers." }
  ],
  exercise: { task: "Analyse your customers by value. Calculate what percentage of revenue comes from your top 20 percent of customers. If it is above half, value optimisation is likely to be worth pursuing." },
  challenge: { task: "Design a value based optimisation implementation: the value distribution analysis, the volume assessment, the exact values or tiers to be sent, the accuracy verification, the technical implementation, the expected changes across every metric, and the six month review criteria." }
}

});
