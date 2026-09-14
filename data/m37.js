/* Module 37 - Vertical Playbooks (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"10.37.1": {
  intro: "This playbook brings the whole course together for an online shop selling physical products.",
  plain: [
    "A playbook is a complete answer for one type of business: the structure, the creative, the measurement, the numbers to watch, and the order to do things in.",
    "This one is for a shop selling products online, shipping them to customers, where the sale completes on the website."
  ],
  idea: [
    "Foundations. Pixel and Conversions API both running with deduplication verified. Catalog accurate with correct product codes matching the pixel. Domain verified and event priorities set with Purchase first. Values sent after discounts, refunds sent back as corrections.",
    "Structure. One automated shopping campaign carrying most of the budget with the existing customer cap set deliberately, plus one standard campaign for creative testing with automation reduced. Product sets created by margin, with unprofitable products excluded.",
    "Creative. Product in use rather than on white backgrounds. Vertical versions for Stories and Reels. A steady production rhythm calculated from your measured creative lifespan. Brand frames on dynamic product advertisements.",
    "Measurement. Contribution per order after product, shipping and payment costs. Break even return calculated from margin. Marginal return measured at each budget increase. Repeat purchase rate measured over twelve months.",
    "Post click. Page speed under three seconds on mobile. Delivery cost visible before checkout. Guest checkout allowed. Your own purchase completed on a phone monthly.",
    "The numbers to watch weekly: contribution, marginal return at current spend, new versus returning customer split, and the click to landing page view gap. Monthly: cohort payback and product set performance."
  ],
  example: {
    title: "The order of work",
    body: "A shop starting from nothing worked in this order over eight weeks. Weeks one and two: tracking, catalog, domain verification, checkout testing. Weeks three and four: structure, product sets by margin, first creative batch. Weeks five and six: launch and stabilise, resisting all changes. Weeks seven and eight: first measurement of contribution and marginal return, then the first scaling step. Doing the foundations first meant the launch worked immediately rather than being debugged for a month."
  },
  steps: [
    "Complete the foundations before spending: tracking, catalog, verification, checkout.",
    "Build the two campaign structure with product sets by margin.",
    "Produce creative showing products in use, in every required shape.",
    "Establish contribution and break even return from real margins.",
    "Fix page speed, delivery transparency and guest checkout.",
    "Launch, stabilise for three weeks, then scale by marginal return."
  ],
  mistakes: [
    "Launching before the catalog and tracking are verified.",
    "Judging performance by return on ad spend without knowing the break even figure.",
    "Ignoring the checkout, where a large share of paid visitors are lost."
  ],
  words: [
    { t: "Playbook", d: "A complete approach for one type of business." },
    { t: "Break even return", d: "The return at which advertising exactly covers its cost, calculated from margin." },
    { t: "Product set", d: "A subset of the catalog controlled separately, usually by margin." },
    { t: "Contribution per order", d: "What you keep after product, shipping, payment and advertising costs." }
  ],
  takeaways: [
    "Foundations first: tracking, catalog, verification, checkout.",
    "Two campaigns: automated shopping plus a testing campaign.",
    "Product sets by margin prevent the system promoting unprofitable items.",
    "Scale by marginal return against contribution, not by average return."
  ],
  selfCheck: [
    "My foundations are complete and verified.",
    "I know my break even return from my real margin.",
    "I have completed my own checkout on a phone this month."
  ],
  quiz: [
    { q: "What should be completed before spending?", options: ["Creative production", "Tracking, catalog, verification and checkout testing", "Competitor research"], a: 1, why: "Launching on broken foundations produces a month of debugging." },
    { q: "Why create product sets by margin?", options: ["For reporting", "To stop the system promoting easy selling products that earn almost nothing", "Meta requires it"], a: 1, why: "Easy sellers are frequently the lowest margin items." },
    { q: "What governs scaling decisions?", options: ["Average return on ad spend", "Marginal return measured against contribution", "Competitor spending"], a: 1, why: "The average hides whether the last increase was profitable." }
  ],
  exercise: { task: "Work through the six steps and mark which your shop has completed properly. Start with the earliest incomplete one." },
  challenge: { task: "Produce a complete ecommerce implementation plan: the foundation checklist with verification, the structure with product sets, the creative production schedule from measured lifespan, the economics model, the post click fixes, and the eight week sequence." }
},

"10.37.2": {
  intro: "This playbook covers software and business to business companies selling to other organisations.",
  plain: [
    "You are selling to a business, which means several people are involved, the decision takes months, and the person who clicks the advertisement is often not the person who signs.",
    "That changes almost everything about how the advertising should be built and judged."
  ],
  idea: [
    "Foundations. Customer database connected so lead sources are captured and never overwritten. Qualified lead and opportunity signals sent back with values. Reporting by cohort, since this month's leads have not yet become customers.",
    "Structure. Stages rather than a single campaign: an attention layer judged on reach and engagement, a consideration layer offering something useful, and a direct layer asking for a meeting or trial. Small markets mean high frequency, so plan creative rotation accordingly.",
    "Creative. Specific to a role and a situation rather than to a company type. Proof heavy, since business buyers must justify the decision to others. Long copy works here more than in most categories, because the reader is genuinely evaluating.",
    "Optimisation. Toward qualified leads, never toward form submissions. Toward opportunity value once volume permits. This is the single largest available improvement in most business to business accounts.",
    "Measurement. Cost per qualified lead, cost per opportunity, cost per customer, all by cohort. Attribution will understate performance because the sales cycle exceeds the window, so internal records matter more here than anywhere else.",
    "The numbers to watch: qualified lead volume and cost weekly, pipeline value monthly, cost per customer by cohort quarterly."
  ],
  example: {
    title: "Optimising toward the right thing",
    body: "A software company optimised for trial signups and acquired customers at 1,240 each. They connected their sales system, defined a qualified lead objectively, and optimised toward that instead. Signups fell by two thirds, cost per signup tripled, and cost per paying customer fell to 310. Every visible advertising metric worsened and the business improved substantially."
  },
  steps: [
    "Connect the customer database and capture lead sources permanently.",
    "Define qualified lead objectively with the sales team.",
    "Build the three stage structure with appropriate offers.",
    "Optimise toward qualified leads, not submissions.",
    "Report by cohort, since sales cycles exceed reporting periods.",
    "Judge on cost per customer using internal records."
  ],
  mistakes: [
    "Optimising for trials or downloads and then complaining about lead quality.",
    "Judging a three month sales cycle on a weekly report.",
    "Building narrow audiences that produce very high frequency in a small market."
  ],
  words: [
    { t: "Qualified lead", d: "A lead the sales team confirms is a genuine potential buyer." },
    { t: "Cohort reporting", d: "Following leads from one period forward through time." },
    { t: "Pipeline value", d: "The expected value of opportunities not yet closed." },
    { t: "Sales cycle", d: "The time between first contact and signature." }
  ],
  takeaways: [
    "Optimise toward qualified leads, never toward form submissions.",
    "Report by cohort, because sales cycles exceed reporting periods.",
    "Attribution understates performance here more than in any other category.",
    "Expect visible advertising metrics to worsen when you optimise correctly."
  ],
  selfCheck: [
    "Our qualified lead definition is objective and agreed with sales.",
    "Outcomes flow back to Meta as events.",
    "I report by cohort rather than by calendar month."
  ],
  quiz: [
    { q: "What is the largest available improvement in most business to business accounts?", options: ["Better creative", "Optimising toward qualified leads rather than form submissions", "Lower bids"], a: 1, why: "The system finds what you ask for, and submissions are the wrong thing to ask for." },
    { q: "Why does attribution understate performance here?", options: ["Poor tracking", "The sales cycle exceeds the attribution window, so closed deals are not credited", "Small budgets"], a: 1, why: "Sales closing after the window are never attributed." },
    { q: "What should happen to cost per lead when you optimise correctly?", options: ["It falls", "It rises, while cost per customer falls", "It stays the same"], a: 1, why: "Fewer, better leads is the intended effect." }
  ],
  exercise: { task: "Find out what proportion of your leads become customers, and what your cost per customer is. Compare against your cost per lead and note how differently the campaigns rank." },
  challenge: { task: "Build a business to business advertising system: the customer database connection, the qualified lead definition, the three stage structure with offers, the feedback loop with values, the cohort reporting, and the twelve month measurement plan." }
},

"10.37.3": {
  intro: "This playbook covers healthcare and health technology, where the rules are strictest and the mistakes most consequential.",
  plain: [
    "Everything in the earlier modules applies here, plus a layer of constraint that cannot be worked around.",
    "The constraint is not only Meta's policy. It is also data protection law, and in some countries specific health privacy law, which carries consequences well beyond a rejected advertisement."
  ],
  idea: [
    "Foundations. Generic event names revealing nothing clinical. No condition or treatment detail in any parameter. Consent mechanism functioning and respected. Specialist legal advice where health privacy law applies, rather than assumed compliance.",
    "Creative. Describe the service, never the reader. No outcome guarantees. Before and after imagery reviewed carefully or avoided. Proof through credentials, volume of procedures and process explanation rather than promised results.",
    "Structure. Broad audiences, since condition based targeting is prohibited. The creative does the qualifying rather than the targeting. Expect this to feel uncomfortable to anyone used to precise targeting elsewhere.",
    "Measurement. Offline conversion measurement matters enormously, because most healthcare sales complete in person or by telephone. Without it, campaigns appear to produce far less than they do.",
    "Operations. Response speed to enquiries matters more here than almost anywhere, because health concerns are urgent and people contact several providers.",
    "The numbers to watch: cost per booked appointment rather than per enquiry, attendance rate, and cost per treatment completed. Enquiry counts alone are close to meaningless in this category."
  ],
  example: {
    title: "Generic events, complete measurement",
    body: "A clinic sent a single Schedule event with a value, keeping all clinical detail in their own practice system. They uploaded attended appointments and completed treatments as offline conversions with values. Meta could optimise toward patients who actually attended and paid, without ever receiving a single piece of clinical information. Cost per completed treatment fell by half over four months, and their compliance position was clean."
  },
  steps: [
    "Review every event name and parameter for clinical detail and remove it.",
    "Confirm consent is obtained and respected before any tracking.",
    "Write creative describing the service, never the reader, with no guarantees.",
    "Use broad audiences and let creative qualify.",
    "Implement offline conversion measurement for in person and telephone bookings.",
    "Measure cost per attended appointment and completed treatment."
  ],
  mistakes: [
    "Naming events after conditions or treatments, which breaches rules even when hashed.",
    "Judging performance on enquiry volume rather than attended appointments.",
    "Assuming a standard tracking setup is permissible under health privacy law."
  ],
  words: [
    { t: "Generic event", d: "An event name revealing nothing clinical about the person." },
    { t: "Personal attributes", d: "The policy prohibiting implying the reader has a condition." },
    { t: "Offline conversion", d: "A booking or treatment completed away from the website." },
    { t: "Attendance rate", d: "The proportion of booked appointments actually attended." }
  ],
  takeaways: [
    "Describe the service, never the reader, and guarantee nothing.",
    "Clinical detail must never appear in event names or parameters.",
    "Broad audiences with creative doing the qualifying.",
    "Measure attended appointments and completed treatments, not enquiries."
  ],
  selfCheck: [
    "No event name or parameter reveals anything clinical.",
    "My creative describes the service rather than the reader.",
    "I measure attendance and completion, not just enquiries."
  ],
  quiz: [
    { q: "What must never appear in an event name?", options: ["A location", "A condition or treatment", "A value"], a: 1, why: "It reveals sensitive information about every person it describes." },
    { q: "What does the qualifying in healthcare campaigns?", options: ["Condition based targeting", "The creative, since condition targeting is prohibited", "Placement selection"], a: 1, why: "The right people identify themselves by responding." },
    { q: "What should be measured?", options: ["Enquiry volume", "Attended appointments and completed treatments", "Click rate"], a: 1, why: "Enquiries that never attend produce no revenue." }
  ],
  exercise: { task: "Audit every event name, parameter and advertisement headline for clinical detail or reader directed wording. Rewrite everything that fails." },
  challenge: { task: "Build a healthcare advertising system: the compliance framework across all three rule sets, the generic measurement architecture, the creative standards with approved wording, the offline conversion implementation, the response speed operation, and the outcome based measurement." }
},

"10.37.4": {
  intro: "This playbook covers businesses serving customers within a specific geographic area.",
  plain: [
    "A restaurant, a clinic, a garage, a gym. Your customers live nearby, your audience is small, and your advertising works differently because of both.",
    "The main consequences are that frequency builds fast, precision about the map matters enormously, and the action must be something your business can actually handle."
  ],
  idea: [
    "Foundations. Simple tracking, since most conversions are calls, messages or visits rather than website purchases. Offline measurement where possible. A verified business location.",
    "Structure. Usually one campaign with one broad ad set covering the real catchment area, established from where existing customers actually come from rather than from optimism about how far people travel.",
    "Creative. Local specificity beats production quality. Recognisable places, real staff, actual premises. Change it every few weeks, because a small audience sees the same advertisement repeatedly.",
    "Action. Choose what the business can genuinely handle. A restaurant with nobody free during service should not optimise for calls. Messaging suits businesses that can reply promptly. Bookings suit those with a system.",
    "Measurement. Cost per booking, per call answered, or per visit where measurable. Attribution is weakest here because much of the effect is a person walking in a week later, so internal records and simply asking customers how they heard about you both matter more.",
    "The numbers to watch: frequency weekly, since it rises fast, cost per handled enquiry, and the proportion of enquiries the business actually converted."
  ],
  example: {
    title: "The map, corrected",
    body: "A clinic targeted their whole city of four million. Analysis of patient addresses showed 82 percent came from within six kilometres. Narrowing to that area plus a small margin reduced their audience from 2.1 million to 260,000 and cut cost per booking from 44 to 19. They had been paying to reach people who would never travel that far."
  },
  steps: [
    "Map where your existing customers actually come from.",
    "Set the targeting radius to that reality, not the whole city.",
    "Use one campaign with one broad ad set inside the area.",
    "Choose an action the business can genuinely handle at volume.",
    "Refresh creative every few weeks because frequency builds fast.",
    "Ask customers how they heard about you, since attribution is weak locally."
  ],
  mistakes: [
    "Targeting the whole city when customers travel ten minutes.",
    "Optimising for an action the business cannot handle.",
    "Running the same creative for months in a small audience."
  ],
  words: [
    { t: "Catchment area", d: "The real area your customers travel from." },
    { t: "Frequency", d: "How often the average person sees your advertising, which rises fast locally." },
    { t: "Handled enquiry", d: "An enquiry the business actually responded to." },
    { t: "Walk in effect", d: "Advertising producing visits that attribution cannot capture." }
  ],
  takeaways: [
    "Set the radius from where customers actually come from, proved by data.",
    "One campaign, one broad ad set, inside that area.",
    "Refresh creative frequently because small audiences saturate fast.",
    "Attribution is weak locally, so ask customers how they heard about you."
  ],
  selfCheck: [
    "My radius matches where customers actually come from.",
    "My chosen action is one the business can handle.",
    "I refresh creative every few weeks."
  ],
  quiz: [
    { q: "How should a local radius be set?", options: ["As wide as possible", "From where existing customers actually travel from", "Ten kilometres always"], a: 1, why: "Real customer data shows the genuine travel distance." },
    { q: "Why does creative need refreshing more often locally?", options: ["Local rules", "A small audience sees the same advertisement repeatedly, so frequency builds fast", "Lower budgets"], a: 1, why: "Saturation arrives in weeks rather than months." },
    { q: "Why does attribution work poorly for local businesses?", options: ["Poor tracking tools", "Much of the effect is someone walking in later, which cannot be tracked", "Small budgets"], a: 1, why: "Asking customers directly becomes an important measurement method." }
  ],
  exercise: { task: "List your last thirty customers and their locations. Draw the real catchment area and compare against the radius currently set in your account." },
  challenge: { task: "Build a local business advertising system: the catchment analysis, the campaign structure, the action selection matched to operational capacity, the creative refresh schedule, the measurement combining platform data with direct enquiry, and the weekly frequency monitoring." }
},

"10.37.5": {
  intro: "This playbook covers businesses selling expensive services where each customer is worth a great deal.",
  plain: [
    "When one customer is worth 20,000 or 200,000, everything changes. You need very few of them, you can afford to spend a lot finding each one, and the sales process is long and human.",
    "The main risk is not high costs. It is wasting expensive sales time on people who were never going to buy."
  ],
  idea: [
    "Foundations. The feedback loop matters more here than in any other category, because the volumes are too small to learn from anything shallow. Send qualified leads and closed deals with real values.",
    "Structure. Heavy qualification before the enquiry rather than after. Stating price ranges in creative, asking qualifying questions, and using higher intent forms all filter before you pay for the conversation.",
    "Creative. Proof and credibility dominate. Case studies, named clients, specific results, credentials. The reader is making a significant decision and needs justification, particularly if they must defend it to others.",
    "Economics. A lead may be worth hundreds, which means an apparently expensive cost per lead is frequently correct. Calculate lead value properly and be prepared for the figure to be far higher than instinct suggests.",
    "Operations. Sales capacity is the binding constraint. Producing more leads than the sales team can pursue properly wastes both the leads and the money that produced them.",
    "The numbers to watch: cost per qualified lead, sales team capacity utilisation, cost per closed deal by cohort, and time from enquiry to close."
  ],
  example: {
    title: "Expensive leads, cheap customers",
    body: "A business selling a 60,000 service was alarmed at a cost per lead of 340. Their lead to customer rate was 18 percent and their contribution per customer was 22,000. Each lead was therefore worth roughly 3,900. A cost of 340 was not expensive, it was excellent, and they had been restricting spend for a year based on a figure that felt high in isolation."
  },
  steps: [
    "Calculate lead value from customer value and conversion rate.",
    "Accept that the affordable cost per lead may be far higher than instinct suggests.",
    "Filter heavily before the enquiry using price, questions and form design.",
    "Build creative around proof and credibility.",
    "Send qualified leads and closed deals back with values.",
    "Match lead volume to genuine sales capacity."
  ],
  mistakes: [
    "Judging cost per lead by instinct rather than against calculated lead value.",
    "Producing more leads than the sales team can pursue properly.",
    "Filtering after the enquiry rather than before, which wastes both money and sales time."
  ],
  words: [
    { t: "High ticket", d: "A service where each customer is worth a large amount." },
    { t: "Lead value", d: "Customer value multiplied by the lead to customer rate." },
    { t: "Pre-enquiry filtering", d: "Discouraging unsuitable people before they cost you a conversation." },
    { t: "Sales capacity", d: "How many enquiries the team can pursue properly." }
  ],
  takeaways: [
    "Calculate lead value. The affordable cost is usually far higher than instinct suggests.",
    "Filter before the enquiry, not after, to protect both money and sales time.",
    "Creative must carry proof and credibility for a significant decision.",
    "Sales capacity, not budget, is usually the binding constraint."
  ],
  selfCheck: [
    "I know my lead value calculated properly.",
    "I filter before the enquiry rather than after.",
    "My lead volume matches genuine sales capacity."
  ],
  quiz: [
    { q: "How should cost per lead be judged in a high ticket business?", options: ["Against industry averages", "Against the calculated value of a lead", "By instinct"], a: 1, why: "Lead values can be in the thousands, making apparently high costs excellent." },
    { q: "Where should filtering happen?", options: ["After the enquiry, by the sales team", "Before the enquiry, through price statements and questions", "It should not happen"], a: 1, why: "Filtering later wastes both the advertising spend and expensive sales time." },
    { q: "What is usually the binding constraint?", options: ["Budget", "Sales capacity to pursue enquiries properly", "Creative production"], a: 1, why: "More leads than can be pursued wastes both leads and money." }
  ],
  exercise: { task: "Calculate your lead value: customer contribution multiplied by your lead to customer rate. Compare it against what you currently pay per lead and note whether you have been under-spending." },
  challenge: { task: "Build a high ticket advertising system: the lead value calculation, the affordable cost per lead, the pre-enquiry filtering approach, the proof based creative strategy, the feedback loop with deal values, the sales capacity model, and the cohort measurement." }
},

"10.37.6": {
  intro: "This playbook covers businesses where customers pay repeatedly over time.",
  plain: [
    "A subscription customer pays a little each month for a long time. That changes the arithmetic completely, because what you can afford to spend acquiring them depends on how long they stay.",
    "It also introduces the problem that decides whether subscription businesses succeed: the gap between paying to acquire someone now and recovering that money slowly."
  ],
  idea: [
    "Foundations. Measure retention honestly, over at least twelve months, from real data rather than assumption. Send subscription events and ideally ongoing payments so lifetime value builds in the system.",
    "Economics. Lifetime value equals monthly contribution multiplied by average months retained. State the period. Payback period is months of contribution to recover acquisition cost, and it governs how fast you can grow.",
    "The cash constraint. Growing faster means more customers simultaneously in their payback period, tying up more cash. This is the most common cause of failure in otherwise sound subscription businesses, and it must be modelled before aggressive growth.",
    "Structure. Trials and introductory offers reduce the initial barrier and attract people who may not convert. Measure cost per paying customer after the trial period, never cost per trial start.",
    "Optimisation. Toward paying subscribers where volume permits, or toward an early behaviour that predicts payment. The early predictive event, as covered in the app module, is frequently the best available option.",
    "The numbers to watch: cost per paying subscriber, retention by acquisition cohort, payback period, and cash tied up at current growth rate."
  ],
  example: {
    title: "Retention differed by source",
    body: "A subscription business found their cheapest acquisition source produced customers who stayed four months, while a more expensive source produced customers who stayed nineteen months. Cost per subscriber was 40 and 95. Lifetime value was 88 and 418. The expensive source was more than twice as profitable per customer, and they had been shifting budget away from it for a year."
  },
  steps: [
    "Measure retention over twelve months from real data, by acquisition source.",
    "Calculate lifetime value and payback period per source.",
    "Model the cash tied up at several growth rates.",
    "Set growth from the cash constraint as well as profitability.",
    "Optimise toward paying subscribers or an early predictive event.",
    "Judge sources by lifetime value, not by acquisition cost."
  ],
  mistakes: [
    "Judging sources by cost per trial or cost per signup rather than by lifetime value.",
    "Growing faster than the cash position supports during the payback period.",
    "Assuming a retention rate rather than measuring it."
  ],
  words: [
    { t: "Retention", d: "How long customers continue paying." },
    { t: "Lifetime value", d: "Monthly contribution multiplied by average months retained." },
    { t: "Payback period", d: "Months of contribution needed to recover acquisition cost." },
    { t: "Cash gap", d: "Money tied up in customers who have not yet repaid their acquisition cost." }
  ],
  takeaways: [
    "Retention differs enormously by acquisition source. Measure it separately.",
    "Judge sources by lifetime value, not by acquisition cost.",
    "The cash gap during payback is the most common cause of failure.",
    "Model cash before planning aggressive growth."
  ],
  selfCheck: [
    "I measure retention by acquisition source.",
    "I know my payback period.",
    "I have modelled the cash my growth rate ties up."
  ],
  quiz: [
    { q: "How should acquisition sources be judged?", options: ["By cost per signup", "By lifetime value, since retention differs enormously by source", "By trial volume"], a: 1, why: "A cheap source producing customers who leave quickly is expensive." },
    { q: "What is the most common cause of failure in sound subscription businesses?", options: ["Poor products", "The cash gap during payback while growing", "High acquisition costs"], a: 1, why: "Profitability and cash flow are different things." },
    { q: "What should retention be based on?", options: ["Industry benchmarks", "Your own measured data over at least twelve months", "Optimistic projections"], a: 1, why: "Assumed retention produces confidently wrong economics." }
  ],
  exercise: { task: "Measure how long customers from your two largest acquisition sources stay, over the last twelve months. Calculate lifetime value for each and compare against their acquisition costs." },
  challenge: { task: "Build a subscription advertising model: retention by source measured over twelve months, lifetime value and payback per source, the cash model at three growth rates, the maximum sustainable growth rate, the optimisation signal, and the source allocation the analysis implies." }
},

"10.37.7": {
  intro: "This playbook covers businesses selling courses, training and educational products.",
  plain: [
    "Education is bought emotionally and justified rationally. People buy because they want to become something different, and then explain the decision in terms of career prospects and value.",
    "The advertising has to serve both the emotional reason and the rational justification."
  ],
  idea: [
    "Foundations. Standard tracking with purchase values. For higher priced programmes with a consultation stage, the lead generation infrastructure from Level 6 applies instead.",
    "Structure. Depends heavily on price. Low priced products sell directly like ecommerce. Higher priced programmes require a lead and a conversation, with an enrolment cycle. Anything above a few hundred typically needs the multi stage approach.",
    "Creative. Two elements dominate. Transformation: showing who the person becomes, which is the emotional driver. And proof: student results, completion rates, specific outcomes, which is the rational justification. Student testimonials work particularly well here because prospective students identify with them directly.",
    "The objection to handle is almost always the same: will I actually complete this. Most people who have bought a course before have abandoned one, and they know it. Addressing completion directly, through structure, support and evidence of completion rates, handles the real hesitation.",
    "Seasonality is pronounced in education, following academic calendars and new year intentions. Budget planning should account for periods where demand is several times higher than average.",
    "The numbers to watch: cost per enrolment, refund rate, completion rate, and enrolment by cohort against the seasonal pattern."
  ],
  example: {
    title: "Addressing the real objection",
    body: "A course business advertised the curriculum, the instructor and the price. Enrolments were steady and unremarkable. They tested a message addressing completion directly: most people abandon online courses, here is why ours are different, with specific completion rates and the support structure. It became their best performing angle, because it addressed the hesitation everyone had and nobody else mentioned."
  },
  steps: [
    "Choose the structure by price: direct for low, multi stage for higher.",
    "Build creative around transformation and proof together.",
    "Use student testimonials, which produce strong identification.",
    "Address the completion objection directly and specifically.",
    "Plan budget around the pronounced seasonal pattern.",
    "Measure refunds and completion, not only enrolments."
  ],
  mistakes: [
    "Advertising the curriculum rather than the transformation.",
    "Ignoring the completion objection, which is the real hesitation.",
    "Flat budget planning in a category with strong seasonality."
  ],
  words: [
    { t: "Transformation", d: "Who the student becomes, which is the emotional driver." },
    { t: "Rational justification", d: "The evidence people use to explain the decision to themselves and others." },
    { t: "Completion objection", d: "The fear of buying a course and abandoning it." },
    { t: "Enrolment cycle", d: "The seasonal pattern of when people commit to learning." }
  ],
  takeaways: [
    "Education is bought emotionally and justified rationally. Serve both.",
    "Student testimonials work particularly well through identification.",
    "The real objection is usually about completion, not price or content.",
    "Seasonality is pronounced. Plan budget around it."
  ],
  selfCheck: [
    "My creative shows transformation, not just curriculum.",
    "I address the completion objection directly.",
    "My budget plan accounts for seasonal demand."
  ],
  quiz: [
    { q: "What is usually the real hesitation?", options: ["The price", "Whether they will actually complete it", "The instructor"], a: 1, why: "Most people who bought a course before have abandoned one." },
    { q: "What should creative show?", options: ["The curriculum", "The transformation, supported by proof", "The platform features"], a: 1, why: "People buy who they will become, then justify it with evidence." },
    { q: "Why do student testimonials work particularly well here?", options: ["They are cheap", "Prospective students identify directly with people like themselves", "They are required"], a: 1, why: "Identification is stronger when the subject is personal change." }
  ],
  exercise: { task: "Write one advertisement addressing the completion objection directly, with specific evidence about how your programme handles it. Test it against your current best performer." },
  challenge: { task: "Build an education advertising system: the structure by price point, the transformation and proof creative strategy, the testimonial programme, the completion objection handling with evidence, the seasonal budget plan, and the measurement including refunds and completion." }
},

"10.37.8": {
  intro: "This playbook covers growing a mobile application.",
  plain: [
    "Everything in the app module applies. This lesson assembles it into a sequence and adds the parts that only matter when you are trying to grow rather than simply run.",
    "The distinguishing feature of app growth is that installs are easy to buy and almost worthless on their own."
  ],
  idea: [
    "Foundations. Measurement code or a partner installed before any spending. Events beyond install defined and firing. The store listing treated as advertising, since it loses more people than the advertisement does. Deep linking configured.",
    "Sequence. Launch on install optimisation only long enough to gather data. Move to registration, then to a key early action, then to payment or subscription, climbing as each reaches sufficient weekly volume. Businesses that remain on install optimisation permanently have poor user quality and usually do not know why.",
    "Creative. Show the app being used on a phone. Vertical, fast, opening mid action. Abstract brand creative performs badly because people want to see what they are about to download.",
    "Retention. Engagement campaigns to lapsed users, deep linked to the relevant screen, with frequency controlled to avoid driving uninstalls. Measure whether returned users stayed, not merely that they returned.",
    "Value. Where user value varies widely, which it does in most apps and extremely in games, value optimisation is the largest available improvement. Predicted value from early behaviour, properly validated, transforms performance.",
    "The numbers to watch: cost per active user rather than per install, retention at day one, seven and thirty, and revenue per installed user by cohort."
  ],
  example: {
    title: "Climbing the ladder",
    body: "An app moved from installs to registrations to first key action to subscription over five months, climbing each time volume permitted. Cost per install rose from 1.20 to 5.80. Cost per paying subscriber fell from 96 to 34. Every visible acquisition metric worsened and the business improved by a factor of three."
  },
  steps: [
    "Install measurement before any spending.",
    "Improve the store listing, which loses more people than the advertisement.",
    "Climb the event ladder as each level reaches sufficient volume.",
    "Show the app in use in all creative.",
    "Run engagement campaigns with deep linking and frequency control.",
    "Implement value optimisation where user value varies widely."
  ],
  mistakes: [
    "Remaining on install optimisation permanently.",
    "Neglecting the store listing while testing advertisement creative for months.",
    "Measuring installs rather than active, paying users."
  ],
  words: [
    { t: "Event ladder", d: "The sequence from install to the most valuable action." },
    { t: "Store listing", d: "Your app's page in the store, which is part of the advertising." },
    { t: "Deep link", d: "A link opening the app at a specific screen." },
    { t: "Revenue per installed user", d: "The measure that matters, rather than cost per install." }
  ],
  takeaways: [
    "Installs are easy to buy and almost worthless alone.",
    "The store listing loses more people than the advertisement does.",
    "Climb the event ladder as volume permits at each level.",
    "Value optimisation is the largest improvement where user value varies widely."
  ],
  selfCheck: [
    "My measurement was installed before spending began.",
    "I have climbed beyond install optimisation.",
    "I measure revenue per installed user, not cost per install."
  ],
  quiz: [
    { q: "What loses more people than the advertisement?", options: ["The checkout", "The store listing", "The first screen of the app"], a: 1, why: "It does as much persuasive work and is usually neglected." },
    { q: "What happens to cost per install as you climb the event ladder?", options: ["It falls", "It rises, while cost per valuable user falls", "It stays the same"], a: 1, why: "You stop buying cheap installs from people who never use the app." },
    { q: "Where is value optimisation most valuable?", options: ["Apps with a single price", "Apps where user value varies widely, such as games", "New apps"], a: 1, why: "A small proportion of users frequently produce most revenue." }
  ],
  exercise: { task: "Check what proportion of your installs became active users, and what proportion paid. Then check whether your current optimisation reflects those stages or stops at install." },
  challenge: { task: "Build an app growth plan: the measurement foundation, the store listing improvement, the event ladder with volumes and climbing schedule, the creative approach, the retention programme with deep linking, the value optimisation model, and the cohort measurement of revenue per installed user." }
},

"10.37.9": {
  intro: "This final lesson of the module gives you a method for building a playbook for any business type, including ones not covered here.",
  plain: [
    "The eight playbooks above cover common situations. Yours may be different, or may combine several.",
    "What transfers is not the specific answers but the questions. Ask the same eight questions of any business and the playbook builds itself."
  ],
  idea: [
    "The eight questions are these.",
    "Where does the sale complete: website, phone, in person, in app, in conversation. This determines your measurement approach entirely.",
    "How long does the decision take: minutes, days, months. This determines your attribution expectations, your reporting periods and your funnel structure.",
    "How much is a customer worth, and over what period. This determines every threshold you will use.",
    "How many potential customers exist. This determines whether you go broad or rely on your own data, and how fast frequency will build.",
    "Who is involved in the decision. One person deciding quickly needs different advertising from four people deliberating.",
    "What rules apply. Restricted categories, health data, special categories, local law.",
    "What can the business actually handle. Capacity constrains everything and is invisible in advertising data.",
    "What does the business know that the system cannot. This determines where automation should be overridden.",
    "Answer those eight and the structure, the creative approach, the measurement and the numbers to watch all follow. The playbooks in this module are simply those eight answered for common cases."
  ],
  example: {
    title: "A business between categories",
    body: "A company sold equipment to farms: high value, long decision, several people involved, seasonal, rural audience, in person demonstration required before purchase. No standard playbook fitted. Answering the eight questions produced one: offline conversion measurement for in person sales, a three stage funnel with a long consideration period, lead value calculated at over 1,100, broad rural targeting given a small total market, heavy proof creative for multiple decision makers, and demonstration capacity as the binding constraint."
  },
  steps: [
    "Answer the eight questions for your business in writing.",
    "Derive your measurement approach from where the sale completes.",
    "Derive your reporting periods from the decision length.",
    "Derive your thresholds from customer value.",
    "Derive your targeting approach from market size.",
    "Derive your constraints from capacity, rules and business knowledge."
  ],
  mistakes: [
    "Copying a playbook from a business whose answers differ.",
    "Skipping the capacity question, which constrains everything invisibly.",
    "Building the structure before answering the questions."
  ],
  words: [
    { t: "Playbook method", d: "The eight questions from which any playbook can be derived." },
    { t: "Sale completion point", d: "Where the transaction actually happens, which determines measurement." },
    { t: "Decision length", d: "How long customers take, which determines attribution expectations." },
    { t: "Binding constraint", d: "The limit that governs everything else, frequently capacity." }
  ],
  takeaways: [
    "Eight questions produce a playbook for any business.",
    "Where the sale completes determines measurement.",
    "Decision length determines attribution expectations and reporting.",
    "Capacity constrains everything and is invisible in advertising data."
  ],
  selfCheck: [
    "I have answered the eight questions for my business.",
    "My structure derives from those answers.",
    "I have identified my binding constraint."
  ],
  quiz: [
    { q: "What determines your measurement approach?", options: ["Your budget", "Where the sale completes", "Your industry"], a: 1, why: "A sale completing by telephone needs entirely different measurement from one on a website." },
    { q: "Which constraint is invisible in advertising data?", options: ["Budget", "Operational capacity", "Competition"], a: 1, why: "No metric shows how many customers the business can actually serve." },
    { q: "What should be done before building the structure?", options: ["Produce creative", "Answer the eight questions", "Set the budget"], a: 1, why: "The structure derives from the answers." }
  ],
  exercise: { task: "Answer all eight questions for your business in writing. Then check whether your current account reflects those answers, and note the largest mismatch." },
  challenge: { task: "Build your own playbook: the eight questions answered with evidence, the measurement approach derived, the structure, the creative strategy, the economics and thresholds, the constraints, the numbers to watch at each rhythm, and the implementation sequence." }
}

});
