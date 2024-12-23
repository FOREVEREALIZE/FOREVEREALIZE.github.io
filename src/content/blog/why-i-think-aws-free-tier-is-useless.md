---
author: foreverealize!
pubDatetime: 2023-12-11T09:00:00.000+01:00
title: why i think the AWS Free Tier is useless, and how to fix it
postSlug: why-i-think-aws-free-tier-is-useless
featured: true
tags:
  - aws
description: the AWS Free Tier has always been praised as being generous but, is it really?
---

the AWS Free Tier has always been appreciated by developers. i _don't_ appreciate it, because i think it's borderline useless. why is that and how can you or amazon fix it?

## table of contents

## the EC2 instance size issue

let's face it, a `t2.micro` (_or_ `t3.micro`) instance is, to say it nicely, shit. with it's industry-leading 1 GiB of memory and 1 vCPU it offers no practical use other than consuming instance hours.

i recently tried to run [SimpleLogin](https://github.com/simple-login/app) on it (writeup coming soon) and, upon running it's webserver, the instance and, by extension, the SSH connection, hung and did not recover. i had to go to the AWS dashboard and force-reboot the instance for it to work again.

not to mention the _awful_ boot times (upwards of 5 minutes sometimes) that these instances have, probably because of their _extremely_ limited resources.

## the database situation

let's say you decide to pay for a usable EC2 instance and deploy your code on it. what would be the next logical component? well, a database, of course.

on AWS you have three main options for databases: SQL (with Amazon RDS), key-value (and document, depending on the page you read) NoSQL (with Amazon DynamoDB) or document-based NoSQL (with Amazon DocumentDB).

### DynamoDB

starting well and working backwards, Amazon DynamoDB is probably your best bet to get a database for free. though limited, Amazon provides _some_ information on DynamoDB's free tier availability.

on [DynamoDB's FAQ question "Does DynamoDB offer a free tier?"](https://aws.amazon.com/dynamodb/pricing/#Does_DynamoDB_offer_a_free_tier.3F) Amazon states that, with your free tier, you can get 25 GB of storage and something 25 WCUs and RCUs each month which, Amazon states, can "handle 200M requests". since DynamoDB is serverless, you do not have to pay for an instance. i must note, though, that this is a free _tier_ not a free _trial_, which means it applies indefinitely.

### DocumentDB

now it's DocumentDB's turn. this is the kind of service you would get if you want a fully-managed MongoDB database. it's a Mongo-compatible document-based NoSQL database. you can get a **one month free trial** (yes, only one month) which gives you a `db.t3.medium` instance, 5 GB of storage and another 5 GB of backups and 30 million IOs.

after one month, you will have to pay around [US$80](https://calculator.aws/#/estimate?id=ca9ac1c0d4f2b921c41b21841267072aee03f8da) monthly for the exact same service.

### RDS

Amazon RDS (Relational Database Service) is, as the name implies, a service for relational databases. it's available with a variety of engines and the option to make your own. with you AWS Free Tier you get, a `db.t4g.micro` (though it's only a `db.t2.micro` if you use the SQL Server engine) which is insufficient, to say the least. on top of that, you also get 20 GB of storage and 20 GB of backups.

this is, though, a free _trial_, which lasts for one year, after which you will have to pay around [US$20](https://calculator.aws/#/estimate?id=af56706071e9d7d20729dac8e5fcb41aa67b5444) (or [US$25](https://calculator.aws/#/estimate?id=d0d9a46d23ba0a210f1ead6d06797bca7f53cc88), if you use the SQL Server engine) every month, for the same service.

## the solution

### if Amazon reads this

TL;DR: give us developers more stuff for free, and don't limit things to one year.

though I doubt Amazon will _ever_ read this.

### for developers

i know it sound obvious but, just stop using AWS. there's cheaper (even free!) alternatives. my favourite is Oracle Cloud which, at no cost, gives you their equivalent to **two** `t2.micro` instances, plus a 24GiB of memory, 4 vCPU instance. Plus 200GB of disk storage. For free!
