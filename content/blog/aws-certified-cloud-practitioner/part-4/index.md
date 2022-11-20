---
title: AWS Certified Cloud Practitioner - Part 4
description: Billing and Pricing
date: "2022-10-31T13:34:03.284Z"
---

Welcome to the AWS Certified Cloud Practitioner blog series. In this series, we're going through all the domains you need to learn to get an AWS Cloud Practitioner certificate. We will follow the [Oficial AWS Certified Cloud Practitioner Exam Guide](https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf) divided by domains:

- Part 1: Cloud Concepts
- Part 2: Security and Compliance
- Part 3: Technology
- **Part 4: Billing and Pricing**

The Part 4 of this series will focus on Billing and Pricing. Let's go!

### Domain 4: Billing and Pricing

1. Compare and contrast the various pricing models for AWS (for example, On-Demand Instances,
Reserved Instances, and Spot Instance pricing)
- Identify scenarios/best fit for On-Demand Instance pricing
- Identify scenarios/best fit for Reserved-Instance pricing
  - Describe Reserved-Instances flexibility
  - Describe Reserved-Instances behavior in AWS Organizations
- Identify scenarios/best fit for Spot Instance pricing
2. Recognize the various account structures in relation to AWS billing and pricing
- Recognize that consolidated billing is a feature of AWS Organizations
- Identify how multiple accounts aid in allocating costs across departments
3. Identify resources available for billing support
- Identify ways to get billing support and information
  - Cost Explorer, AWS Cost and Usage Report, Amazon QuickSight, third-party partners,
and AWS Marketplace tools
  - Open a billing support case
  - The role of the Concierge for AWS Enterprise Support Plan customers
- Identify where to find pricing information on AWS services
  - AWS Simple Monthly Calculator
  - AWS Services product pages
  - AWS Pricing API
- Recognize that alarms/alerts exist
- Identify how tags are used in cost allocation

AWS offers you a pay-as-you-go approach for pricing for the vast majority of our cloud services. With AWS you pay only for the individual services you need, for as long as you use them, and without requiring long-term contracts or complex licensing. AWS pricing is similar to how you pay for utilities like water and electricity. You only pay for the services you consume, and once you stop using them, there are no additional costs or termination fees.
- [AWS Billing and Cost Management Documentation](https://docs.aws.amazon.com/account-billing/index.html)

##### PRICING PLANS FOR EC2
- On-demand is the easiest, but most expensive
- Spot instances allow you to bid on excess capacity (up to 90% savings), but instances can be terminated at any time
- Reserved offers 30-60% savings for reservations of 1-3 years
- Savings Plans combine on-demand and reserved; you receive savings on the commitment of 1-3 years and then get on-demand pricing after that
##### ACCOUNTS AND ORGANIZATIONS
- Organizations are a collection of accounts
- Enable consolidated billing (costs for all accounts roll up into a single bill)
- Can share discounted pricing across accounts
##### COST ALLOCATION TAGS
- Once activated, can be used to group and filter charges (such as "createdBy")
 Billing and Pricing: Important Points to Remember
##### BILLING DASHBOARD
- Provides a snapshot of costs by service, forecasted costs, etc. COST EXPLORER
- Provides a way to drill into specific charges and group/filter by service, region, tags, etc.
- Can provide a forecast of charges based on existing usage AWS PRICING CALCULATOR
- Prior iterations were called the "Total Cost of Ownership" (TCO) Calculator and the "Simple Monthly Calculator"
- Publicly available at calculator.aws
- Provides an estimate of costs based on the services chosen (useful for existing customers, as well as those who are evaluating AWS)
##### AWS BUDGETS
- Create and track budgets and send alerts
- Alerts can be based on actual AND forecasted spend
- Can filter alarms by region and service
- Budgets can be created for cost, usage, Savings Plans and Reservations
##### CLOUDWATCH BILLING ALERTS/ALARMS
- Activated through Billing (not through CloudWatch)
- More limited than Budgets; only used to send alerts
- Alerts can only be based on actual spend (NOT forecasted)
- Filtering by region is not possible

That's it for Part 4 (and final) of this series. We covered all the **Billing and Pricing**. With this, we've corvered all the content required for the exam.

#### Tips
1. Read the questions carefully
- Look for qualifier phrases such as "least expensive," or "with the least amount of effort"
- There may be more than one correct answer
2. You can usually eliminate two answers right away because they don’t make sense ("the distractors")
3. Correct answers:
- Are usually simple
- Usually involve an AWS managed service
4. Make your first pass through all questions, answering things you’re sure of
- Flag the others to come back to
- Make a second pass on all questions if you have time
- Sometimes a question later in the exam will help you remember an earlier answer Never leave a question unanswered - It will automatically be marked wrong - Guessing at least gives you a chance
- [Take the official practice exam](https://aws.amazon.com/certification/certification-prep/)

#### What to Expect
- ONLINE
  - Check in 30 minutes prior to exam
  - Required to run a system test (for video and audio)
  - Required to show ID
  - Required to show the proctor pictures/video of your surroundings
  - Wired Internet connection recommended (you might not be able to resume if disconnected)
  - Digital scratchpad provided in software Will be monitored via your web cam
- AT A TESTING CENTER
  - Arrive early
  - Required to show ID
  - Place personal belongings in a locker
  - Scratchpad and marker provided (have to give back at the end)
  - Will be monitored during the exam

I hope you learned something new. Feel free to reach out to me with suggestions. Thanks!

See you 👍

<small>Disclaimer: This series is based on the Zero to Mastery AWS Certified Cloud Practitioner Course</small>