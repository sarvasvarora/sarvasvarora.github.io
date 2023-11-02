---
layout: page
permalink: /cv/
title: My CV
tags: [about]
comments: false
---

## Education

#### McGill University (September 2020 - December 2023) <br> GPA: 3.86

I am currently pursuing Bachelor's degree at McGill University as a Computer Science major, along with a Statistics minor. Throughout my undergraduate degree, I took courses in Distributed Systems, Database System, Computer Networks, Cloud Computing, Software Privacy, Parallel Computing, Applied Machine Learning, NLP, Probability and Statistics, and Applied Linear Algebra.  
Apart from that, I was involved with the McGill Computer Science Undergraduate Society (CSUS) as its VP Internal, where I was responsible for organizing the Industry Mentorship Program, and designing CSUS stickers and merch. I was also involved in Hack McGill as a developer, where I was responsible for working on the McHacks website.

#### Banasthali Public School (April 2018 - March 2020) <br> GPA: 95.6%

I graduated high school from Banasthali Public School as the class valedictorian. I was also involved with the school's CS club, and participated in several olympiads/quizzes (achieved good results in a few).
My senior year research projects involved analyzing the affect of various bleaching agents on different types of fabrics and investigating changes in magnetic behavior of permanent magnets subject to extreme temperatures.

## Relevant Work Experience

#### SDE Intern at AWS Step Functions
In summer 2023, I worked at [AWS Step Functions Console](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html), where I worked on writing integration tests for upcoming Step Functions Console features. I also refactored the existing integration tests onto an internal AWS platform as a move to onboarding the Console to Native AWS (NAWS).
Further, I laid foundation and successfully converted one of the Console backend's private APIs to an NPM library that can directly be imported and used on the Console frontend (utilizing the AWS SDK), which is also a roadmap item for the move to NAWS. Further private APIs will be converted using this approach.

#### SDE Intern at AWS Simple Workflow

In summer 2022, I worked at [AWS SimpleWorkflow (SWF)](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-welcome.html), where I onboarded over a hundred SWF Ops scripts (used in handling customer requests, SEV2s, etc.) onto an internal AWS tool, making my team’s operations more efficient and concise as compared to the previous stop-gap solution. I also provisioned the necessary resources (pipeline, Apollo environments, Clusters, etc.) to deploy my project to production, and increased the ops test coverage by around 30%. Further, I wrote runbooks/documentation for new tools, automation script to update existing runbooks with the new command syntax, and an extensive tester script to automate ops tools testing.
I also worked with AWS CloudFormation on a non-swimlane task, which I took up as an additional challenge and opportunity to learn more about the SWF infrastructure.

#### Teaching Assistant (Introduction to Software Systems)

I worked as the TA for COMP 206 (Introduction to Software Systems) for three semesters, and COMP 421 (Database Systems) for another semester. My responsibilities include facilitating office hours, grading assignments and exams, and monitoring discussion boards.

#### VP Internal at the Computer Science Undergraduate Society (CSUS)

As the VP Internal for [CSUS](http://mcgill-csus.ca/), I spearheaded the CSUS Industry Mentorship Program, bringing together a team of 15 industry professionals to closely mentor a pool of over 50 McGill CS students over the course of a semester on building technical skills essential to thrive in the tech industry.
I was also responsible for designing CSUS stickers and merch, and organizing the annual sales.

#### Development Coordinator at HackMcGill

I worked on the dev team of [HackMcGill](https://www.mchacks.ca/) (the organization behind McHacks, one of the largest hackathons in Canada), maintaining and developing new website features.

#### Research Intern at [DMaS Lab](https://dmas.lab.mcgill.ca/), McGill University

In summer 2021, I researched on the application of deep learning NLP methods in the domain of authorship analysis. I updated the old ICWSM12 Twitter dataset to a new custom dataset with millions of Tweets, scraped using [twint](https://github.com/twintproject/twint) and [scweet](https://github.com/Altimis/Scweet) libraries, and the Twitter API.

#### [SPARK](https://spark.iitr.ac.in/) Reseach Internship at IIT Roorkee

In summer 2021, I was selected as a research intern in the SPARK program at IIT Roorkee. I guided the previous research of bit-flip attack on image classification models to the under-explored domain of NLP models like LSTM, BERT and RoBERTa by developing custom model layers and reformulating the existing code for the adversarial attack. Refined the attack dynamics, further speeding up the adversarial attack by as much as 15-20% in some cases.


## Etc.

Please browse this website for more information on me. My socials are linked on the sidebar.
You can also grab my resume <a href="/docs/Sarvasv_Arora_Resume.pdf" target="resume" onclick="show()">here</a>.

<iframe name="resume" frameborder="0" style="width:100%;height:44rem;display:none;"></iframe>
<script type="text/javascript">
    function show() {
        $("iframe").css("display", "");
        $("iframe").css("height", `${Math.sqrt(2) * $("iframe").height}px`);
    }
</script>
