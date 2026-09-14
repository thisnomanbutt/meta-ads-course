/* Module 12 - Meta AI Creative Tools (9 lessons) */
window.LESSONS = window.LESSONS || {};
Object.assign(window.LESSONS, {

"3.12.1": {
  intro: "Meta has built automatic creative tools directly into Ads Manager. This lesson explains what they are, where to find them, and the honest position on using them.",
  idea: [
    "When you build an ad, Meta offers a set of automatic improvements. It can adjust brightness and contrast, add music, create variations of your text, expand an image to fit a different shape, apply visual filters, and show different combinations to different people.",
    "These are grouped under names like Advantage+ creative or standard enhancements. Some are switched on by default, which means many advertisers are already using them without realising.",
    "The honest position is that they are useful for volume and testing, not for control. They produce more variations than you could make by hand, and the system then finds which combination works for each person. What they cannot do is understand your brand, your legal requirements or your taste.",
    "The practical approach: allow the mechanical ones, review the visual ones, and check what is actually being shown. Many advertisers discover their ad is running with music they never chose or text they never wrote, simply because a default was on."
  ],
  example: {
    title: "The text nobody wrote",
    body: "A regulated financial company found their ad running with an automatically generated headline that implied a guaranteed return. It had been created by a text variation feature switched on by default. Nobody in the company had written or approved it. They now review every enhancement setting before publishing, which takes two minutes and prevents a serious compliance problem."
  },
  steps: [
    "Open an ad and find the creative enhancement settings.",
    "Read each one and decide whether it suits your brand.",
    "Switch off anything that generates text or claims in regulated industries.",
    "Allow mechanical improvements such as brightness and cropping.",
    "Preview what the system actually produces before publishing.",
    "Check occasionally, because defaults change over time."
  ],
  mistakes: [
    "Leaving every enhancement on without ever looking at the output.",
    "Switching everything off because of one bad result.",
    "Assuming the settings stay as you left them across new campaigns."
  ],
  words: [
    { t: "Creative enhancement", d: "An automatic change Meta makes to your ad." },
    { t: "Default setting", d: "A setting switched on unless you turn it off." },
    { t: "Variation", d: "An automatically produced alternative version of your ad." }
  ],
  takeaways: [
    "Several automatic enhancements are on by default.",
    "They are useful for volume, not for control.",
    "Always preview what the system produces before publishing.",
    "In regulated industries, switch off anything that generates claims."
  ],
  selfCheck: [
    "I have read every enhancement setting in my ads.",
    "I know which ones are currently switched on.",
    "I preview the generated output before publishing."
  ],
  quiz: [
    { q: "What is true of several creative enhancements?", options: ["They must be requested", "They are switched on by default", "They are only for large accounts"], a: 1, why: "Many advertisers use them without realising, which is why review matters." },
    { q: "What can automatic tools not do?", options: ["Adjust brightness", "Understand your brand, legal requirements and taste", "Produce variations"], a: 1, why: "Judgement about appropriateness remains human work." },
    { q: "What should regulated industries do?", options: ["Allow everything", "Switch off features that generate text or claims", "Avoid Meta entirely"], a: 1, why: "Automatically generated wording can create compliance problems." }
  ],
  exercise: { task: "Open one of your live ads and list every enhancement currently switched on. Preview the output and write down anything you would not have approved yourself." },
  challenge: { task: "Write your company's policy on automatic creative features: which are allowed, which are forbidden, who checks them, how often settings are reviewed, and the approval process for regulated wording." }
},

"3.12.2": {
  intro: "AI background generation replaces or creates the background behind a product. This lesson covers where it genuinely helps and where it damages trust.",
  idea: [
    "The tool takes a product image and places it in a generated setting: a kitchen counter, a beach, a studio backdrop. For businesses with many products and no photography budget, this can produce usable images quickly.",
    "It works well for simple objects with clear edges, and for backgrounds that are plainly decorative. A bottle on a generated marble surface is fine, because nobody is being misled about anything.",
    "It works badly in two situations. When the generated background implies something untrue, such as showing a product in a location it cannot be used. And when the edges are imperfect, which happens with complex shapes, hair, transparent materials or fine detail. Viewers may not name the problem, but they sense something is wrong.",
    "There is also a category where it should be avoided entirely: anything where the setting is part of the claim. A building company showing generated houses, or a clinic showing a generated facility, is showing something that does not exist."
  ],
  example: {
    title: "Where the edges gave it away",
    body: "A furniture company generated backgrounds for a chair with a woven back. The generated room looked convincing at first glance, but the gaps in the weave showed fragments of the original background. On a phone it read as slightly wrong. Performance was 30 percent below the plain photographs, and several comments asked whether the image was real."
  },
  steps: [
    "Use it for simple products with clear edges.",
    "Keep the background plainly decorative, never a claim.",
    "Review the edges closely at full size and on a phone.",
    "Never generate settings that imply something untrue about your business.",
    "Compare generated versions against real photographs before adopting them.",
    "Keep real photography for anything where trust is the main barrier."
  ],
  mistakes: [
    "Generating backgrounds for products with complex edges.",
    "Showing premises, vehicles or facilities that do not exist.",
    "Adopting generated images without comparing them against real ones."
  ],
  words: [
    { t: "Background generation", d: "Creating a new setting behind a product image." },
    { t: "Edge quality", d: "How cleanly the product separates from the background." },
    { t: "Implied claim", d: "Something the image suggests, even if the words do not say it." }
  ],
  takeaways: [
    "Best for simple products and clearly decorative settings.",
    "Complex edges reveal the generation and reduce trust.",
    "Never generate settings that imply something untrue.",
    "Always compare against real photography before adopting."
  ],
  selfCheck: [
    "My generated images have clean edges at full size.",
    "No generated background implies something untrue.",
    "I have compared generated against real images."
  ],
  quiz: [
    { q: "Which product suits background generation?", options: ["A chair with a woven back", "A simple bottle with clear edges", "A person's portrait"], a: 1, why: "Clean simple edges separate reliably. Complex detail does not." },
    { q: "When should it never be used?", options: ["For decorative surfaces", "When the setting implies something untrue, such as premises you do not have", "For small products"], a: 1, why: "An implied claim is still a claim, even without words." },
    { q: "Why do imperfect edges matter?", options: ["File size increases", "Viewers sense something is wrong even without naming it, and trust falls", "Meta rejects the ad"], a: 1, why: "Trust is fragile and subtle errors are noticed." }
  ],
  exercise: { task: "Generate backgrounds for two of your products and inspect the edges at full size on a phone. Write down what you notice and whether you would run them." },
  challenge: { task: "Design a test comparing generated backgrounds against real photography for your products: which products, the test structure, what you measure beyond cost per result, and the rule deciding when generated images are acceptable." }
},

"3.12.3": {
  intro: "Image expansion fills in extra area around your picture so it fits a different shape. Variation tools produce alternative versions. This lesson covers both.",
  idea: [
    "Expansion solves a real problem. You have a square image and need a full vertical one for Stories. Rather than adding empty bars, the tool invents the missing area at the top and bottom.",
    "For simple backgrounds this works well and saves genuine time. A product on a plain surface expands convincingly, because the missing area is more of the same thing.",
    "It fails when the missing area would contain something meaningful. If a person is cut off at the shoulders, the tool must invent the rest of them, and invented bodies are often wrong in ways viewers notice immediately.",
    "The practical rule: expansion is safe when the new area is background, and unsafe when it would be subject. If you find yourself relying on it for people or products, the correct fix is to produce the vertical version properly, which takes minutes if you plan for it during production."
  ],
  example: {
    title: "The invented hand",
    body: "An expanded image added the lower part of a person holding a product. The generated hand had the wrong number of fingers arranged oddly. It passed unnoticed in the editing preview and ran for four days before someone spotted it in a comment. The ad had the worst performance of the month and required an apology in the comments."
  },
  steps: [
    "Use expansion only when the new area would be background.",
    "Review every expanded image at full size before publishing.",
    "Check hands, faces, text and product edges specifically.",
    "Produce true vertical versions during filming wherever possible.",
    "Use variation tools for text options, then edit them yourself.",
    "Never publish a generated variation you have not read word for word."
  ],
  mistakes: [
    "Expanding images where people or products are cut off.",
    "Publishing without reviewing the generated area.",
    "Treating generated text variations as ready to publish."
  ],
  words: [
    { t: "Image expansion", d: "Automatically filling in extra area to change the shape." },
    { t: "Generated area", d: "The part of the image invented by software." },
    { t: "Variation tool", d: "Software producing alternative versions of text or images." }
  ],
  takeaways: [
    "Expansion is safe for background, unsafe for subject.",
    "Always review generated areas closely, especially hands and faces.",
    "Plan vertical versions during production instead of relying on expansion.",
    "Read every generated text variation before it goes live."
  ],
  selfCheck: [
    "I only expand images where the new area is background.",
    "I review generated areas at full size.",
    "I read every generated text variation."
  ],
  quiz: [
    { q: "When is image expansion safe?", options: ["When the new area would contain a person", "When the new area is simply more background", "Always"], a: 1, why: "Inventing subject matter produces visible errors. Inventing background rarely does." },
    { q: "What must you check in a generated area?", options: ["File size", "Hands, faces, text and product edges", "Colour temperature only"], a: 1, why: "These are where generation errors are most common and most noticeable." },
    { q: "What is the better long term fix?", options: ["Expand every image", "Produce true vertical versions during production", "Use only square placements"], a: 1, why: "Planning at production takes minutes and avoids the problem entirely." }
  ],
  exercise: { task: "Expand three of your images to vertical and inspect each generated area closely. Write down which would be safe to publish and which would not." },
  challenge: { task: "Write a review checklist for generated creative: every element that must be inspected, at what size, on what device, who signs off, and the specific failure types that require rejection." }
},

"3.12.4": {
  intro: "Meta can generate alternative versions of your ad text automatically. This lesson covers how to use that safely and where the real value is.",
  idea: [
    "The tool takes your primary text or headline and produces alternatives, then shows different versions to different people to find what works.",
    "The genuine value is volume. Writing fifteen headline variations by hand takes an hour. Generating fifteen takes seconds, and even if only three are usable, you have saved real time.",
    "The genuine risk is accuracy. Generated text can change meaning, invent specifics, soften or strengthen a claim, or produce wording that breaks a rule in your industry. The system does not know your guarantee is 30 days and not 60.",
    "So the correct workflow is: generate many, read every one carefully, delete most, edit the rest, and approve only what you would have been willing to write yourself. Used this way it is a fast first draft machine, which is a genuinely useful thing to have."
  ],
  example: {
    title: "The invented guarantee",
    body: "A company's original text said returns accepted within 30 days. A generated variation said money back, no questions asked, any time. It performed well and created a customer service problem, because people quoted it when requesting refunds after five months. The tool had not lied deliberately. It had produced a plausible sentence that happened to be false."
  },
  steps: [
    "Write your own strongest version first.",
    "Generate alternatives from it.",
    "Read every generated line word for word.",
    "Delete anything that changes a fact, a number or a promise.",
    "Edit the survivors into your own voice.",
    "Approve only what you would have written yourself."
  ],
  mistakes: [
    "Approving generated text in bulk without reading it.",
    "Allowing generated text in regulated categories without legal review.",
    "Using it to replace writing rather than to speed up drafting."
  ],
  words: [
    { t: "Text variation", d: "An automatically produced alternative version of your wording." },
    { t: "Factual drift", d: "When generated text changes a number, promise or detail." },
    { t: "Draft machine", d: "Using generation for first drafts rather than final copy." }
  ],
  takeaways: [
    "The value is speed of drafting, not finished copy.",
    "Generated text can invent facts that sound plausible.",
    "Read every line individually before approving.",
    "Never allow unreviewed generated claims in regulated industries."
  ],
  selfCheck: [
    "I read every generated line before approving.",
    "No generated text in my account states a fact I did not verify.",
    "I write my own strongest version first."
  ],
  quiz: [
    { q: "What is the main risk of generated text?", options: ["It is too short", "It can change facts, numbers or promises in plausible sounding ways", "It cannot be edited"], a: 1, why: "Plausible but false statements are the hardest errors to notice." },
    { q: "What is the correct workflow?", options: ["Generate and approve all", "Generate many, read each, delete most, edit the rest", "Never generate anything"], a: 1, why: "It gives you the speed benefit without the accuracy risk." },
    { q: "What should you do before generating?", options: ["Nothing", "Write your own strongest version first", "Increase the budget"], a: 1, why: "Generation works from your input, so a strong original produces better alternatives." }
  ],
  exercise: { task: "Generate ten text variations for one ad. Read each one and mark it keep, edit or delete, noting exactly why. Count how many stated something not strictly true." },
  challenge: { task: "Create a text generation policy: when generation is allowed, the review steps, who approves regulated wording, the record kept of approvals, and the periodic audit checking live ads against approved copy." }
},

"3.12.5": {
  intro: "Advantage+ creative automations combine several automatic features and decide what to show each person. This lesson explains what they actually do and when to allow them.",
  idea: [
    "When switched on, the system may adjust your image, generate text options, change the order of carousel cards, add music, apply a filter, or combine your assets differently for different viewers.",
    "The underlying idea is sound. Rather than one version for everyone, each person sees the combination the system believes will work for them. With enough assets and enough volume, this genuinely improves results.",
    "The cost is control and clarity. When many elements vary automatically, you cannot easily say which version won or why, which weakens your learning. You get better results and less understanding.",
    "A reasonable position for most advertisers: allow it in campaigns that are running for volume and results, and switch it off in campaigns you are using to learn something specific. Testing requires control. Scaling does not."
  ],
  example: {
    title: "Results up, learning down",
    body: "An account switched on full creative automation across all campaigns. Cost per purchase improved by 14 percent, which was real and welcome. Three months later they could not answer which angle was working, because every ad had become a shifting combination. They moved their testing campaigns back to manual control and kept automation in the scaling campaigns."
  },
  steps: [
    "Decide the job of each campaign: learning or scaling.",
    "Switch automation on in scaling campaigns.",
    "Switch it off in campaigns where you are testing a specific variable.",
    "Give the system several good assets to work with.",
    "Review the generated combinations before they run.",
    "Re-check the results after a few weeks to confirm the improvement is real."
  ],
  mistakes: [
    "Switching automation on everywhere and losing the ability to learn.",
    "Switching it on with only one asset, which gives it nothing to work with.",
    "Assuming it is always an improvement without measuring."
  ],
  words: [
    { t: "Creative automation", d: "Automatic combining and adjusting of your creative elements." },
    { t: "Combination", d: "One particular mix of image, text and features shown to a person." },
    { t: "Control versus scale", d: "The trade-off between understanding and performance." }
  ],
  takeaways: [
    "Automation improves results and reduces understanding.",
    "Allow it in scaling campaigns, switch it off in testing campaigns.",
    "It needs several good assets to work with.",
    "Measure whether it actually improved things in your account."
  ],
  selfCheck: [
    "Each of my campaigns has a defined job: learning or scaling.",
    "Automation is off where I am testing something specific.",
    "I have measured whether automation improved my results."
  ],
  quiz: [
    { q: "What does creative automation cost you?", options: ["Money directly", "Control and clarity about what worked and why", "Delivery speed"], a: 1, why: "When many things vary at once, attribution of the improvement becomes impossible." },
    { q: "Where should automation be switched off?", options: ["Everywhere", "In campaigns used to test a specific variable", "In scaling campaigns"], a: 1, why: "Testing requires control over what changes." },
    { q: "What does automation need to work well?", options: ["A single perfect asset", "Several good assets to combine", "A large audience only"], a: 1, why: "It improves results by choosing between options, so it needs options." }
  ],
  exercise: { task: "Label each of your campaigns as learning or scaling. Check the automation settings in each and correct any mismatch." },
  challenge: { task: "Design an account structure that separates learning from scaling: which campaigns hold which job, the automation settings for each, how winners move from learning to scaling, and how you preserve understanding while using automation." }
},

"3.12.6": {
  intro: "The practical question is when to use AI creative and when to make something yourself. This lesson gives a clear decision framework.",
  idea: [
    "The decision rests on one question: is this element carrying trust, or is it carrying volume?",
    "Volume elements are things where more options genuinely help and where nobody is being persuaded by the element itself: text variations, format conversions, captions, brightness adjustments, background surfaces for simple products. Automate these.",
    "Trust elements are the parts that make someone believe you: the person speaking, the demonstration, the customer's face and voice, the actual product in the actual place, the specific claim. Make these yourself, with real people and real footage.",
    "There is also a cost consideration that often points the same way. AI is cheapest where the work is mechanical and repetitive, which is exactly where volume elements sit. It is least reliable where judgement and authenticity matter, which is where trust elements sit. The economics and the quality argument agree."
  ],
  example: {
    title: "Splitting the work",
    body: "A company films real customers speaking, which is the trust element. They then use AI to produce vertical versions, generate captions, create twelve text variations and adjust colour for each placement. The human work is the part that persuades. The automated work is the part that would otherwise consume two days a week."
  },
  steps: [
    "List every element in your creative process.",
    "Mark each as trust carrying or volume producing.",
    "Automate the volume elements entirely.",
    "Keep trust elements human and real.",
    "Review anything automated that appears near a trust element.",
    "Re-check the split every few months as tools improve."
  ],
  mistakes: [
    "Automating the testimonial, which is the element that had to be real.",
    "Doing mechanical reformatting by hand while producing too few concepts.",
    "Deciding once and never reviewing as the tools change."
  ],
  words: [
    { t: "Trust element", d: "The part of an ad that makes someone believe you." },
    { t: "Volume element", d: "A part where more options help and nobody is being persuaded directly." },
    { t: "Decision framework", d: "A simple rule that makes repeated choices consistent." }
  ],
  takeaways: [
    "Automate volume. Keep trust human.",
    "The economics and the quality argument point the same way.",
    "Mechanical work is where AI genuinely saves time.",
    "Review the split periodically as tools improve."
  ],
  selfCheck: [
    "I have classified my creative elements as trust or volume.",
    "Nothing carrying trust in my ads is synthetic.",
    "My mechanical work is automated."
  ],
  quiz: [
    { q: "Which element should stay human?", options: ["Caption generation", "A customer speaking about their experience", "Format conversion"], a: 1, why: "It is the element whose entire value comes from being real." },
    { q: "Where does AI save the most time safely?", options: ["Mechanical, repetitive work such as reformatting and captioning", "Producing testimonials", "Making claims"], a: 0, why: "Repetitive work is checkable and carries no authenticity requirement." },
    { q: "How often should the split be reviewed?", options: ["Never", "Every few months, as tools change", "Daily"], a: 1, why: "Capability shifts, so the boundary moves over time." }
  ],
  exercise: { task: "List every step in producing one ad. Mark each step trust or volume. Automate one volume step this week and note the time saved." },
  challenge: { task: "Write your organisation's AI creative framework: the trust and volume classification for every element, the tools approved for each, the review requirements, and the schedule for reassessing as capabilities change." }
},

"3.12.7": {
  intro: "Anything generated automatically needs checking before it reaches the public. This lesson gives you a practical quality control process.",
  idea: [
    "The errors that generated creative produces are not random. They cluster in predictable places, which means a checklist catches most of them quickly.",
    "The visual checks: hands and fingers, faces and eyes, text within the image, product shapes and logos, edges where the product meets the background, and repeated patterns that do not line up.",
    "The written checks: numbers, prices, guarantees, time periods, superlatives such as best or safest, health or financial claims, and anything that states a fact about your business.",
    "The process check matters as much as the list. Someone other than the person who generated it should review, because the person who made it stops seeing the errors. A second pair of eyes takes two minutes and catches most problems."
  ],
  example: {
    title: "A two minute check",
    body: "A team introduced a rule that every generated asset is reviewed by one other person against a six point checklist before publishing. In the first month the reviews caught: two images with malformed hands, one headline claiming a guarantee that did not exist, one price that was wrong, and one expanded image with a duplicated product edge. Total review time was under an hour for the month."
  },
  steps: [
    "Build a short checklist of visual and written checks.",
    "Require review by someone other than the creator.",
    "View images at full size and on a phone.",
    "Read generated text aloud, which reveals errors faster than reading silently.",
    "Verify every number, price and promise against a reliable source.",
    "Record approvals so you know what was checked and by whom."
  ],
  mistakes: [
    "Reviewing your own generated work and missing obvious errors.",
    "Checking on a large monitor only, where small errors hide.",
    "Approving text without verifying the numbers in it."
  ],
  words: [
    { t: "Quality control", d: "The process of checking work before it is published." },
    { t: "Checklist", d: "A fixed list of checks applied every time." },
    { t: "Second reviewer", d: "Someone other than the creator who checks the work." }
  ],
  takeaways: [
    "Generated errors cluster in predictable places, so a checklist works.",
    "Hands, faces, text and edges are the main visual failure points.",
    "Numbers, guarantees and claims are the main written failure points.",
    "Always have someone other than the creator review."
  ],
  selfCheck: [
    "We have a written checklist for generated assets.",
    "Someone other than the creator reviews everything.",
    "Every number and promise is verified before publishing."
  ],
  quiz: [
    { q: "Where do generated visual errors cluster?", options: ["In file metadata", "Hands, faces, text in images and edges", "In colour balance"], a: 1, why: "These are the elements generation handles least reliably." },
    { q: "Why should a second person review?", options: ["Company policy", "The creator stops seeing their own errors", "It is faster"], a: 1, why: "Familiarity with the work hides obvious mistakes." },
    { q: "What must always be verified in generated text?", options: ["Sentence length", "Numbers, prices, guarantees and claims", "Font"], a: 1, why: "Plausible but incorrect facts create real business problems." }
  ],
  exercise: { task: "Write a six point checklist for reviewing generated creative in your business. Apply it to three current ads and record what you find." },
  challenge: { task: "Build a quality control system: the checklist, the reviewer roles, the record of approvals, the escalation path for regulated claims, and a monthly audit of live ads against what was approved." }
},

"3.12.8": {
  intro: "If you are going to use AI creative, you should know whether it is actually helping. This lesson covers testing and tracking it honestly.",
  idea: [
    "The temptation is to adopt automatic features because they save time and assume the results are fine. Time saved is real, but it is not the same as results improved.",
    "The test is straightforward. Run your human made creative against your AI assisted creative in the same ad set, same audience, same budget, and compare cost per result over enough volume.",
    "Beyond cost, watch two quality signals. Negative feedback, meaning people hiding the ad or reporting it, which often rises when something feels wrong. And comments, where people occasionally say directly that an image looks fake.",
    "Also track the time saved, honestly. If AI assisted creative performs 10 percent worse but takes a quarter of the time, that may still be the right trade for some campaigns and clearly wrong for others. The decision is a business one, and it needs both numbers."
  ],
  example: {
    title: "Both numbers mattered",
    body: "A team found AI assisted static images performed 8 percent worse than their photographed versions but took 90 percent less time to produce. They used generated images for testing many angles quickly, then photographed properly whichever angle won. Neither number alone would have produced that decision."
  },
  steps: [
    "Run human and AI assisted versions in the same ad set.",
    "Wait for enough results to be meaningful.",
    "Compare cost per result.",
    "Check negative feedback rates on each.",
    "Read the comments on both.",
    "Record the time each took to produce, and decide using both numbers."
  ],
  mistakes: [
    "Assuming time saved means results maintained.",
    "Comparing across different periods or audiences.",
    "Ignoring negative feedback signals that indicate something feels wrong."
  ],
  words: [
    { t: "Negative feedback", d: "People hiding, reporting or reacting badly to an ad." },
    { t: "Production time", d: "How long a creative took to make, which has real cost." },
    { t: "Fair comparison", d: "Testing in the same conditions so the difference is meaningful." }
  ],
  takeaways: [
    "Time saved and results improved are different things. Measure both.",
    "Test AI assisted against human made in the same conditions.",
    "Watch negative feedback and comments as quality signals.",
    "The right answer may differ between testing and scaling campaigns."
  ],
  selfCheck: [
    "I have compared AI assisted against human creative fairly.",
    "I track negative feedback on both.",
    "I know the real time saved in hours."
  ],
  quiz: [
    { q: "What must be measured besides cost per result?", options: ["File size", "Negative feedback and production time", "Number of colours"], a: 1, why: "Quality signals and real time cost both affect the decision." },
    { q: "How should the comparison be run?", options: ["In different months", "In the same ad set, audience and budget", "In separate accounts"], a: 1, why: "Only matched conditions make the difference meaningful." },
    { q: "AI creative performs slightly worse but takes far less time. What follows?", options: ["Always reject it", "It may suit testing while winners are produced properly", "Always adopt it everywhere"], a: 1, why: "The trade-off can be right for one job and wrong for another." }
  ],
  exercise: { task: "Set up one fair comparison between an AI assisted creative and a human made one. Record cost per result, negative feedback and production time for both." },
  challenge: { task: "Design an ongoing evaluation programme for AI creative: the comparison structure, the metrics tracked, the review cadence, the thresholds that decide adoption, and how the policy is updated as tools change." }
},

"3.12.9": {
  intro: "This final lesson of Level 3 looks ahead, carefully. The aim is not prediction but preparation: what is likely to change, and what will still matter.",
  idea: [
    "The clear direction is that mechanical creative work will keep becoming cheaper and more automatic. Reformatting, captioning, variation production and basic editing are already largely solved and will improve further.",
    "The likely consequence is that creative volume stops being a competitive advantage. When everyone can produce a hundred variations, having a hundred variations is no longer special. What remains scarce is knowing what to say.",
    "So the durable skills are the ones this level has focused on: understanding customers well enough to find real angles, gathering genuine proof, and judging what is true and appropriate. These are the parts that require being a person with access to a real business and real customers.",
    "There is also a trust question worth watching. As synthetic content becomes common, audiences become better at detecting it and more suspicious generally. It is possible that demonstrably real content becomes more valuable precisely because so much is not. Businesses with real customers, real premises and real results have something that cannot be generated."
  ],
  example: {
    title: "What stayed scarce",
    body: "A team that once needed three days to produce five ads can now produce fifty in a day. Their results did not improve fifty fold. They improved when they spent the time they saved talking to customers and finding two new angles. The bottleneck moved from production to understanding, which is where it is likely to stay."
  },
  steps: [
    "Automate every mechanical part of your process.",
    "Spend the time saved on customer research, not on more variations.",
    "Keep collecting real proof: customers, results, demonstrations.",
    "Build a record of which angles work in your market, which no tool can give you.",
    "Watch how your audience responds to synthetic content over time.",
    "Re-evaluate your tool use every few months rather than settling permanently."
  ],
  mistakes: [
    "Using time saved to produce more variations of the same idea.",
    "Assuming the current tool limitations are permanent.",
    "Assuming today's advantages from automation will last as competitors adopt the same tools."
  ],
  words: [
    { t: "Commodity skill", d: "Something everyone can do, which stops being an advantage." },
    { t: "Durable skill", d: "Something that remains valuable as tools change." },
    { t: "Authenticity premium", d: "The possible extra value of demonstrably real content." }
  ],
  takeaways: [
    "Mechanical creative work is becoming a commodity.",
    "Knowing what to say remains scarce and valuable.",
    "Spend saved time on understanding customers, not on more variations.",
    "Real customers, real proof and real results cannot be generated."
  ],
  selfCheck: [
    "I automate mechanical work and spend the time on research.",
    "I have a written record of which angles work in my market.",
    "I review my tool use regularly rather than settling."
  ],
  quiz: [
    { q: "What is likely to stop being a competitive advantage?", options: ["Understanding customers", "The ability to produce many creative variations", "Real customer proof"], a: 1, why: "When everyone can produce volume cheaply, volume stops distinguishing anyone." },
    { q: "Where should saved time go?", options: ["Into more variations", "Into customer research and finding new angles", "Into reporting"], a: 1, why: "The bottleneck moves to understanding, which tools do not solve." },
    { q: "What cannot be generated?", options: ["Captions", "Real customers, real premises and real results", "Text variations"], a: 1, why: "These come from actually operating a business, which is the remaining scarce thing." }
  ],
  exercise: { task: "List the mechanical tasks in your creative process that could be automated this month. Then write what you will do with the hours saved, specifically." },
  challenge: { task: "Write a two year creative capability plan: which work you expect to automate, which skills you will deliberately build in your team, how you will maintain a supply of real proof, and the signals that would tell you the landscape has shifted again." }
}

});
