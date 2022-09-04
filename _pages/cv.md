---
layout: page
permalink: /cv/
title: My CV
tags: [about]
comments: false
---
## Education

#### McGill University (September 2020 - Present) <br> GPA: 3.86

I am currently pursuing my Bachelor's degree at McGill University as a Computer Science major, along with a Statistics minor. My current coursework includes Distributed Systems, Parallel Computing, Applied Robotics, and Applied Regression.  
Apart from that, I'm involved with the McGill Computer Science Undergraduate Society (CSUS) as the VP Internal, where I am responsible for organizing the Industry Mentorship Program, and designing CSUS stickers and merch.

#### Banasthali Public School (April 2018 - March 2020) <br> GPA: 95.6%

I graduated high school from Banasthali Public School as the class valedictorian. I was also involved with the school's CS club, and participated in several olympiads/quizzes (achieved good results in a few).
My senior year research projects involved analyzing the affect of various bleaching agents on different types of fabrics and investigating changes in magnetic behavior of permanent magnets subject to extreme temperatures.

## Relevant Work Experience

#### SDE Intern at AWS Simple Workflow

This summer, I worked at [AWS SimpleWorkflow (SWF)](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-welcome.html), where I onboarded over a hundred SWF Ops scripts (used in handling customer requests, SEV2s, etc.) onto an internal AWS tool, making my team’s operations more efficient and concise as compared to the previous stop-gap solution. I also provisioned the necessary resources (pipeline, Apollo environments, Clusters, etc.) to deploy my project to production, and increased the ops test coverage by around 30%. Further, I wrote runbooks/documentation for new tools, automation script to update existing runbooks with the new command syntax, and an extensive tester script to automate ops tools testing.
I also worked with AWS CloudFormation on a non-swimlane task, which I took up as an additional challenge and opportunity to learn more about the SWF infrastructure.

#### Teaching Assistant (Introduction to Software Systems)

I've been working as the TA for COMP 206 (Introduction to Software Systems) for three semesters. My responsibilities include facilitating office hours, grading assignments and exams, and monitoring discussion boards.

#### VP Internal at the Computer Science Undergraduate Society (CSUS)

As the VP Internal for [CSUS](http://mcgill-csus.ca/) this year, I spearhead the industry mentorship program, bringing together a team of 15 industry professionals to closely mentor a pool of over 50 McGill CS students over the course of a semester on building technical skills essential to thrive in the tech industry.
I am also responsible for designing CSUS stickers and merch, and organizing the annual sales.

#### Development Coordinator at HackMcGill

I'm also working on the dev team of [HackMcGill](https://www.mchacks.ca/), the organization behind McHacks, one of the largest hackathons in Canada. I maintain the hackathon website, create applicant screening tools for the backend API leading to smoother internal operations.

#### Research Intern at [DMaS Lab](https://dmas.lab.mcgill.ca/), McGill University

Research on the application of deep learning NLP methods in the domain of authorship analysis. I updated the old ICWSM12 Twitter dataset to a new custom dataset with millions of Tweets, scraped using [twint](https://github.com/twintproject/twint) and [scweet](https://github.com/Altimis/Scweet) libraries, and the Twitter API.

#### [SPARK](https://spark.iitr.ac.in/) Reseach Internship at IIT Roorkee

I guided the previous research of bit-flip attack on image classification models to the under-explored domain of NLP models like LSTM, BERT and RoBERTa by developing custom model layers and reformulating the existing code for the adversarial attack. Refined the attack dynamics, further speeding up the adversarial attack by as much as 15-20% in some cases.

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
