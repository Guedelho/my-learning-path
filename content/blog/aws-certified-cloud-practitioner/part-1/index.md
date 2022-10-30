---
title: AWS Certified Cloud Practitioner - Part 1
description: Cloud Concepts and Fundamentals
date: "2022-10-29T13:34:03.284Z"
---

Welcome to the AWS Certified Cloud Practitioner blog series. In this series, we're going through all the domains you need to learn to get an AWS Cloud Practitioner certificate. We will follow the [Oficial AWS Certified Cloud Practitioner Exam Guide](https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf) divided by domains:

- **Part 1: Cloud Concepts**
- Part 2: Security and Compliance 
- Part 3: Technology
- Part 4: Billing and Pricing

T﻿he Part 1 of this series will focus on Cloud Concepts and Fundamentals. Let's go!

### Domain 1: Cloud Concepts

1. Define the AWS Cloud and its value proposition
   - Define the benefits of the AWS cloud including:
     - Security
     - Reliability
     - High Availability
     - Elasticity
     - Agility
     - Pay-as-you go pricing
     - Scalability
     - Global Reach
     - Economy of scale
   - Explain how the AWS cloud allows customers to focus on business value
     - Shifting technical resources to revenue-generating activities as opposed to managing infrastructure
2. Identify aspects of AWS Cloud economics
   - Define items that would be part of a Total Cost of Ownership proposal
     - Understand the role of operational expenses (OpEx)
     - Understand the role of capital expenses (CapEx)
     - Understand labor costs associated with on-premises operations
     - Understand the impact of software licensing costs when moving to the cloud
   - Identify which operations will reduce costs by moving to the cloud
     - Right-sized infrastructure
     - Benefits of automation
     - Reduce compliance scope (for example, reporting)
     - Managed services (for example, RDS, ECS, EKS, DynamoDB)
3. Explain the different cloud architecture design principles
   - Explain the design principles
     - Design for failure
     - Decouple components versus monolithic architecture
     - Implement elasticity in the cloud versus on-premises
     - Think parallel


Amazon Web Services provides on-demand cloud computing and APIs to customers of all sizes on a pay-as-you-go basis. It allows the customers to focus on business value, shifting technical resources to revenue-generating activities instead of managing infrastructure.

#### AWS Cloud Foundational Services

- **Compute**: Elastic Compute Cloud (EC2)
- **Database**: Relational Database Service (RDS) and DynamoDB
- **Storage**: Simple Storage Service (S3)
- **Networking**: Virtual Private Cloud (VPC)
- **Security**: Identity and Access Management (IAM)

#### AWS Cloud Main Benefits
- Security: Hundreds of engineers work to secure and maintain the infrastructure
- Elasticity: The ability to adapt to workload changes
- Scalability: The ability to handle increased workloads by adding resources
- High Availability: The ability to continue functioning even if some components fail
- Reliability: The ability to function consistently and correctly when expected
- Agility: The ability to rapidly develop, test, and launch applications to deliver business value
- Global Reach: The ability to get closer to your customers through a global infrastructure
- Pay-as-you-go Pricing: Only pay for what you use, and only when you need it
- Economies Of Scale: Because of its size, AWS can purchase things more cheaply than an individual organization can

In addition to all these benefits, AWS Cloud allows customers to eliminate Capital Expenses (CapEx) and reduce Operational Expenses(OpEx). The customer no longer needs to spend money on hardware or software licensing, and there are no costs associated with premises (to store the hardware) and power (to keep the hardware running). The customer will only pay for what he needs when he uses it.

Having the right-size infrastructure, automating servers to start and stop, and having managed services will help to reduce operational expenses even more.

Moreover, to ensure reliable, secure, efficient, and cost-effective systems in the cloud, it is also very important to follow the architectural best practices for designing and operation.

#### AWS Cloud Main Design Principles

- Design For Failure: Design your components to handler failures because it will happen
- Decouple Components: Avoid thighed coupled components. Build components that are independent
- Implement Elasticity: Take advantage of the elasticity. Workload changes happen all the time
- Think Parallel: You can speed things over using parallel processing


#### Important points to remember

##### BENEFITS
- Global reach: data centers around the world
- High availability: continue functioning even when one component (server, data center, etc.) goes down
- Cost savings: reduces up-front costs (“CapEx”) and ongoing costs (“OpEx”)
  - Only pay for what you use
  - Right-sizing infrastructure means you don’t have to “guess” capacity
  - Managed services reduce your IT overhead/spend

##### DESIGN PRINCIPLES
- Design for failure: assume things will fail, and architect for that
- Loose coupling: reduces the dependencies between components
- Elasticity: the ability to scale resources up and down based on needs
- Reliability: perform an intended function correctly and consistently when expected to
- Review [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)


That's it for Part 1 of this series. We covered all the **Cloud Concepts and Fundamentals**. In the next part, we will convert **Security and Compliance**.

See you 👍