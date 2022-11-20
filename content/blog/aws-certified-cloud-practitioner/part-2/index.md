---
title: AWS Certified Cloud Practitioner - Part 2
description: Security and Compliance
date: "2022-10-29T13:34:03.284Z"
---

Welcome to the AWS Certified Cloud Practitioner blog series. In this series, we're going through all the domains you need to learn to get an AWS Cloud Practitioner certificate. We will follow the [Oficial AWS Certified Cloud Practitioner Exam Guide](https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf) divided by domains:

- Part 1: Cloud Concepts
- **Part 2: Security and Compliance**
- Part 3: Technology
- Part 4: Billing and Pricing

The Part 2 of this series will focus on Security and Compliance. Let's go!

### Domain 2: Security and Compliance

1. Define the AWS shared responsibility model
   - Recognize the elements of the Shared Responsibility Model
   - Describe the customer’s responsibly on AWS
     - Describe how the customer’s responsibilities may shift depending on the service used (for example with RDS, Lambda, or EC2)
   - Describe AWS responsibilities
2. Define AWS Cloud security and compliance concepts
    - Identify where to find AWS compliance information
      - Locations of lists of recognized available compliance controls (for example, HIPPA, SOCs)
      -  Recognize that compliance requirements vary among AWS services
    - At a high level, describe how customers achieve compliance on AWS
      - Identify different encryption options on AWS (for example, In transit, At rest)
    - Describe who enables encryption on AWS for a given service
    - Recognize there are services that will aid in auditing and reporting
      - Recognize that logs exist for auditing and monitoring (do not have to understand the logs)
      - Define Amazon CloudWatch, AWS Config, and AWS CloudTrail
    - Explain the concept of least privileged access
3. Identify AWS access management capabilities
    - Understand the purpose of User and Identity Management
      - Access keys and password policies (rotation, complexity)
      - Multi-Factor Authentication (MFA)
      - AWS Identity and Access Management (IAM)
        - Groups/users
        - Roles
        - Policies, managed policies compared to custom policies
      - Tasks that require use of root accounts
        - Protection of root accounts
4. Identify resources for security support
    - Recognize there are different network security capabilities
      - Native AWS services (for example, security groups, Network ACLs, AWS WAF)
      - 3rd party security products from the AWS Marketplace
    - Recognize there is documentation and where to find it (for example, best practices, whitepapers, official documents)
      - AWS Knowledge Center, Security Center, security forum, and security blogs
      - Partner Systems Integrators
    - Know that security checks are a component of AWS Trusted Advisor

The AWS shared responsibility is a model where the customer and AWS share responsibility for Security and Compliance.

![](https://d1.awsstatic.com/security-center/Shared_Responsibility_Model_V2.59d1eccec334b366627e9295b304202faf7b899b.jpg)

**Security of the Cloud**: AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud. This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services.

**Security in the Cloud**: Customer responsibility will be determined by the AWS Cloud services that a customer selects. This determines the amount of configuration work the customer must perform as part of their security responsibilities.

This customer/AWS shared responsibility model also extends to IT controls. Just as the responsibility to operate the IT environment is shared between AWS and its customers, so is the management, operation, and verification of IT controls shared. AWS can help relieve the customer burden of operating controls by managing those controls associated with the physical infrastructure deployed in the AWS environment that may have previously been managed by the customer. As every customer is deployed differently in AWS, customers can take advantage of shifting management of certain IT controls to AWS, which results in a (new) distributed control environment.

See more about the [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/).

#### AWS Identity and Access Management (IAM)
- Service used to securely control access to your AWS resources
- Controls authentication (who) and authorization (what they can do)

The IAM service has four main parts:
- **Users**: Allows multiple users on the same AWS account
- **User Groups**: Allows having a different group of users with different permissions
- **Roles**: Roles are identities with specific permissions with credentials valid for a short duration
- **Policies**: Controls who can do what to which resources and when

Key concepts:
1. By default, users have no permissions.
2. Avoid using the Root user for day-to-day work; use the IAM user
3. Use roles to give permissions to AWS services
4. Don't share credentials
5. Assign permissions to groups, not individuals
6. Users should have the least possible amount of permissions
7. Enforce MFA and string password Policies

Other important concepts are MFA and Access key:

- AWS multi-factor authentication (MFA) is an AWS Identity and Access Management (IAM) best practice that requires a second authentication factor in addition to a user name and password sign-in credentials.
- An access key grants programmatic access to your resources. This means that you must guard the access key as carefully as the AWS account root user sign-in credentials.

#### Security and Compliance Services

- **Infrastructure Protection**:
  - AWS Shield
  - AWS Web Application Firewall (WAF)
- **Data Protection**:
  - AWS Key Management **System (KMS) and CloudHSM
  - AWS Certificate Manager (ACM)
  - AWS Secrets Manager
  - Amazon Macie
- **Detection**:
  - Amazon Inspector
  - Amazon GuardDuty
  - AWS Config
  - AWS Security Hub
- **Incident Response**:
  - Amazon Detective
- **Compliance**:
  - AWS Artifact

See more about the [Security, Identity, and Compliance on AWS](https://aws.amazon.com/products/security/).

##### AWS SHIELD
- Protects against DDoS attacks
##### AWS WEB APPLICATION FIREWALL (WAF)
- Controls incoming and outgoing traffic for applications and websites
- Based on rules like "Block traffic from IP address X."
##### AWS KEY MANAGEMENT SYSTEM (KMS)
- Primary service for encryption in AWS
- AWS manages the encryption hardware, software, and keys for you
##### AWS HARDWARE SECURITY MODULE (CLOUDHSM)
- AWS provisions the hardware, and you do everything else
##### AWS CERTIFICATE MANAGER (ACM)
- Provision, manage and deploy SSL/TLS certificates
##### AWS SECRETS MANAGER
- Securely store and rotate secrets, such as a database name/password
##### AMAZON MACIE
- Scans S3 for personally identifiable information (PII)
##### AMAZON INSPECTOR
- Monitors EC2 instances and ECR repositories for software vulnerabilities and network exposure
##### AMAZON GUARDDUTY
- Monitors AWS accounts, network, and S3 for malicious activity
##### AWS CONFIG
- Inventory of resources and recording of configuration/changes
##### AWS SECURITY HUB
- Consolidated view of all things security (pulls from many other services into a dashboard)
- Works for multiple accounts
##### AMAZON DETECTIVES
- Used to quickly get to the root cause of security issues
##### AMAZON ARTIFACT
- View AWS's internal compliance reports and agreements
##### SHARED RESPONSIBILITY MODEL
- AWS is responsible for the security OF the cloud
- Customer (you) are responsible for security IN the cloud
##### IDENTITY AND ACCESS MANAGEMENT (IAM)
- Root account has permission to do everything, including access to billing info
  - Do NOT use it for everyday work; use an IAM user instead
- By default, IAM users have no permissions
- Multi-factor authentication (MFA) can be enforced for the root account and individual users
- Access keys are required for programmatic access (CLI, SDK)
- Roles should be used to give permissions to other AWS services
- Permissions are controlled by policies; give the least privileges

That's it for Part 2 of this series. We covered all the **Security and Compliance**. In the next part, we will convert **Technology**.

See you 👍

<small>Disclaimer: This series is based on the Zero to Mastery AWS Certified Cloud Practitioner Course</small>