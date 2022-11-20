---
title: AWS Certified Cloud Practitioner - Part 3
description: Technology
date: "2022-10-30T13:34:03.284Z"
---

Welcome to the AWS Certified Cloud Practitioner blog series. In this series, we're going through all the domains you need to learn to get an AWS Cloud Practitioner certificate. We will follow the [Oficial AWS Certified Cloud Practitioner Exam Guide](https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf) divided by domains:

- Part 1: Cloud Concepts
- Part 2: Security and Compliance
- **Part 3: Technology**
- Part 4: Billing and Pricing

The Part 3 of this series will focus on Technology. Let's go!

### Domain 3: Technology

1. Define methods of deploying and operating in the AWS Cloud
   - Identify at a high level different ways of provisioning and operating in the AWS cloud
     - Programmatic access, APIs, SDKs, AWS Management Console, CLI, Infrastructure as Code
   - Identify different types of cloud deployment models
     - All in with cloud/cloud native
     - Hybrid
     - On-premises
   - Identify connectivity options
     - VPN
     - AWS Direct Connect
     - Public internet
2. Define the AWS global infrastructure
   - Describe the relationships among Regions, Availability Zones, and Edge Locations
   - Describe how to achieve high availability through the use of multiple Availability Zones
     - Recall that high availability is achieved by using multiple Availability Zones
     - Recognize that Availability Zones do not share single points of failure
   - Describe when to consider the use of multiple AWS Regions
     - Disaster recovery/business continuity
     - Low latency for end-users
     - Data sovereignty
   - Describe at a high level the benefits of Edge Locations
     - Amazon CloudFront
     - AWS Global Accelerator
3. Identify the core AWS services
   - Describe the categories of services on AWS (compute, storage, network, database)
   - Identify AWS compute services
     - Recognize there are different compute families
     - Recognize the different services that provide compute (for example, AWS Lambda compared to Amazon Elastic Container Service (Amazon ECS), or Amazon EC2, etc.)
     - Recognize that elasticity is achieved through Auto Scaling
     - Identify the purpose of load balancers
   - Identify different AWS storage services
     - Describe Amazon S3
     - Describe Amazon Elastic Block Store (Amazon EBS)
     - Describe Amazon S3 Glacier
     - Describe AWS Snowball
     - Describe Amazon Elastic File System (Amazon EFS)
     - Describe AWS Storage Gateway
   - Identify AWS networking services
     - Identify VPC
     - Identify security groups
     - Identify the purpose of Amazon Route 53
     - Identify VPN, AWS Direct Connect
   - Identify different AWS database services
     - Install databases on Amazon EC2 compared to AWS managed databases Version 2.1 CLF-C01 6 | PAGE
     - Identify Amazon RDS
     - Identify Amazon DynamoDB
     - Identify Amazon Redshift
4. Identify resources for technology support
   - Recognize there is documentation (best practices, whitepapers, AWS Knowledge Center, forums, blogs)
   - Identify the various levels and scope of AWS support
     - AWS Abuse
     - AWS support cases
     - Premium support
     - Technical Account Managers
   - Recognize there is a partner network (marketplace, third-party) including Independent Software Vendors and System Integrators
   - Identify sources of AWS technical assistance and knowledge including professional services, solution architects, training and certification, and the Amazon Partner Network
   - Identify the benefits of using AWS Trusted Advisor

There're three ways to work with AWS:

1. Software Developer Kit (SDK)
2. Command Line Interface (CLI)
3. AWS Cloudshell

Three different types of deployment models:

1. Cloud (Public) - Infrastructure available to general public on the internet
2. Hybrid - Comprised of two or more clouds (private, public)
3. On-Premises (Private) - Infrastructure solely for one organization

And two ways to use Hybrid deployment models:
1. Site-to-Site VPN (Public internet)
2. AWS Direct Connect (Private internet)

The AWS Cloud spans 93 Availability Zones within 29 geographic regions around the world.

**Availability Zone**: A single data center or group of data centers within a region, each with redundant power, networking and connectivity, housed in separate facilities.

**Edge Location**: A site that Amazon CloudFront uses to store cached copies of your content closer to your customers for faster delivery

- [AWS Global Infrastructure Map (regions, availability zones)](https://aws.amazon.com/about-aws/global-infrastructure)
- [Edge Locations](https://aws.amazon.com/cloudfront/features/?whats-new-cloudfront.sort-by=item.additionalFields.postDateTime&whats-new-cloudfront.sort-order=desc)

##### WAYS TO WORK WITH AWS
- AWS Management Console (browser)
- Programmatic access
  - From your local machine – both require access key IDs and secrets § SoftwareDeveloperKit(SDK)
    - CommandLineInterface(CLI)
  - AWS CloudShell
    - Browser-based; doesn’t require access key ID
##### DEPLOYMENT MODELS
- Public cloud
- On-premises
- Hybrid
  - Connectivity: Site-to-Site VPN (over public internet) or Direct Connect (dedicated physical connection)


#### About Compute

##### ELASTIC COMPUTE CLOUD (EC2)
- Primary compute service used to create virtual servers
- Infrastructure as a service; YOU are responsible for operating systems, patching, access
- Different pricing options (on-demand, reserved, spot, etc.)
- SSH is a secure way to log into and administer remote computers
- AWS Marketplace allows partners to market and sell their software to AWS customers
##### LOAD BALANCING AND AUTO-SCALING
- Load balancing distributes load across multiple instances, across multiple availability zones (i.e., high availability)
- Auto-scaling automatically scales out/in instances based on the load ELASTIC BEANSTALK
- Platform as a Service that allows you to "just write code"; all underlying work "magically" happens for you
##### AWS LIGHTSAIL
- "AWS lite," used to create simple websites without having to understand all of the underlying infrastructure
- Interface quite different from "regular" AWS
##### AMAZON WORKSPACES
- Desktops in the cloud
- Easily create workstations for employees and contractors (without having to set up/ship physical laptops or desktops)
##### AWS BATCH
- Managed service that allows you to schedule jobs for processing (e.g., media encoding, deep learning, big data analytics)
##### AWS LAMBDA
- Serverless functions or scripts
- You’re responsible for security of your code, data, and IAM; AWS does everything else
##### CONTAINERS
- Light-weight compute that lets you package up everything needed to run an application (no dedicated operating system required); built on Docker technology
- Services: Elastic Container Service (ECS) or Elastic Kubernetes Service (EKS)
- Fargate is a serverless solution for running containers (creates EC2 instances for you)
- Container images stored in Elastic Container Registry (ECR)


#### About Storage

##### SIMPLE STORAGE SERVICE (S3)
- Inexpensive, unlimited, reliable object storage (think: files, photos, logs, etc.)
- Storage classes let you optimize cost by storing data according to frequency of access
  - e.g., S3 Glacier can be used to store data you rarely access, but it takes some time to retrieve
- Versioning and object lock help prevent accidental deletion of objects
- [S3 Storage Classes](https://aws.amazon.com/s3/storage-classes/)
##### ELASTIC BLOCK STORE (EBS)
- Virtual hard drives for your EC2 instances
- Can only be attached to one instance at a time; default is to delete them when an instance is terminated
- Can create snapshots and then restore them (for backup/recovery purposes)
##### ELASTIC FILE SYSTEM (EFS)
- Storage that can be used by multiple services (EC2, Lambda, on-premises servers, etc.)
- Only pay for what you use (no up-front provisioning)
##### AMAZON FSx
- Third-party file systems
- FSx for Windows File Server – built on Windows Server
- FSx for Lustre – high-performance file system
- [Amazon FSx](https://aws.amazon.com/fsx/)
##### STORAGE GATEWAY
- Used in a hybrid architecture, to store data in AWS from on-premises SNOW FAMILY OF PRODUCTS
- Physical storage devices used to transfer massive amounts of data (Snowcone, Snowball, Snowmobile)
- [AWS Snow Family](https://aws.amazon.com/snow/)


#### About Networking and Content Delivery

##### VIRTUAL PRIVATE CLOUD (VPC)
- Your own private cloud/network within the cloud that isolates your resources
- Split into subnets
  - Public: has a route to an Internet Gateway
  - Private: does NOT have a route to an Internet Gateway; if you need to access the internet, use a NAT
##### Gateway
- VPCs are tied to a region and span multiple availability zones
- Network access control lists (ACLs) control traffic at the subnet level
- Security groups control traffic at the EC2 instance level
- VPC endpoints allow you to access other AWS services through a private network (vs. going across the public internet)
##### CLOUDFRONT
- Content delivery network (CDN) that’s geographically distributed to delivery content faster by caching
- Commonly used to deliver media files (videos, images)
##### GLOBAL ACCELERATOR
- Uses global network of edge locations to improve speeds for a variety of applications
- Does not use caching; improvement comes from network routing of traffic (moving off
the public internet)
##### ROUTE 53
- Managed domain name service (DNS)
- Used to map IP addresses (216.58.211.110) to domain names (google.com)
- Can register domain names (mywebsite.com)


#### About Databases

##### RELATIONAL DATABASE SERVICE (RDS)
- Relational database service with six engines available (Aurora, MySQL, PostgreSQL, etc.)
- Managed database service
  - AWS does all the underlying administrative work
  - You are responsible for network access and managing database users and permissions
##### REDSHIFT
- Used for data warehousing and analytics
  - A central repository of data that pulls from many other sources (e.g., S3, databases, etc.)
##### DYNAMODB
- Non-relational or NoSQL database
  - Data stored as key/value pairs
  - Massively scalable and highly performant
##### ELASTICACHE
- In-memory database used for caching and session management
- Used for read-intensive web applications, such as gaming or media streaming
##### NEPTUNE
- Graph database
- Used for social media, fraud detection and recommendation engines


#### About Anaytics

##### ATHENA
- Used to query data in S3 using SQL queries KINESIS FAMILY OF PRODUCTS
- Used for stream or real-time processing of data (such as stock prices or video streaming)
##### QUICKSIGHT
- Used for business intelligence/analytics to visualize your data using reports and dashboards
##### EMR (ELASTIC MAPREDUCE)
- A hosted Hadoop framework that also supports Spark, Hive and Presto


#### About Deploying/Managing Infrastructure

##### CLOUDFORMATION
- "Infrastructure as Code," defined in a JSON or YAML template
- Repeatable way to deploy, update and delete resources
- Can be used cross-account and cross-region
##### SERVICE CATALOG
- An approved "catalog" of products that developers can use
- Organized into portfolios (e.g., web development, data analysis)
##### SYSTEMS MANAGER (SSM)
- Manage a fleet of servers at scale
- Commonly used for patching and maintenance


#### About Monitoring

##### CLOUDWATCH
- Used for performance monitoring of applications and resources • e.g., CPU, memory, disk, GPU utilization
##### CLOUDTRAIL
- Captures user activity and API calls
  - e.g., who created an EC2 instance, who terminated an EC2 instance, who logged into the Console
##### AWS SERVICE HEALTH DASHBOARD
- Status of all services around the world
- Public site available for anyone to check (status.aws.amazon.com)
##### PERSONAL HEALTH DASHBOARD
- View alerts about services that underlie YOUR applications
- Must be logged into your account (pdh.aws.amazon.com)


#### About Integration

##### SIMPLE QUEUE SERVICE (SQS)
- Key way to decouple components
- Producer sends to the queue; consumer polls from the queue
##### SIMPLE NOTIFICATION SERVICE (SNS)
- Send notifications by email, text, HTTP, Lambda
- "Pub-sub" model where a publisher publishes to a SNS topic, and subscribers subscribe to receive notifications
##### EVENTBRIDGE
- Some features were formerly called CloudWatch Events
- Used to built event-driven architectures (also a "pub-sub" model)
  - Subscribers set rules about what to receive
  - Schemas defined up front
  - Publishers can be third parties (e.g., Shopify, Zendesk)
  - Events can be scheduled


#### About Support

##### BASIC
- Free to all customers
  - AWS Trusted Advisor service quota checks, limited security checks
  - Use of AWS Personal Health Dashboard
  - Access to whitepapers, documentation and support communities
##### DEVELOPER
- For experimenting and testing
  - AWS Trusted Advisor service quota and security checks
  - Business hours email address to Cloud Support Associates
  - Unlimited cases, one primary contact
  - General guidance < 24 hours; System impaired < 12 hours
##### BUSINESS
- Minimum recommendation minimum for production
  - All Trusted Advisor checks
  - 24x7 phone, email, and chat access to Cloud Support Engineers
  - Unlimited cases, unlimited contacts
  - General guidance < 24 hours; System impaired < 12 hours
  - Production system impaired < 4 hours; Production system down < 1 hour
##### ENTERPRISE
- Recommended for mission-critical workloads
  - All Trusted Advisor checks
  - 24x7 phone, email, and chat access to Cloud Support Engineers
  - Access to a Technical Account Manager (TAM)
  - Concierge Support Team for billing and account questions
  - Unlimited cases, unlimited contacts
  - General guidance < 24 hours; System impaired < 12 hours
  - Production system impaired < 4 hours; Production system down < 1 hour
  - Business/mission-critical system down < 15 minutes

#### Additional Resources
- [AWS Professional Services](https://aws.amazon.com/professional-services)
- [AWS Knowledge Center - FAQs](https://aws.amazon.com/premiumsupport/knowledge-center)
- [Whitepapers](https://aws.amazon.com/whitepapers)
- [Blog](https://aws.amazon.com/blogs/aws)


That's it for Part 3 of this series. We covered all the **Technology**. In the next part, we will convert **Billing and Pricing**.

See you 👍

<small>Disclaimer: This series is based on the Zero to Mastery AWS Certified Cloud Practitioner Course</small>