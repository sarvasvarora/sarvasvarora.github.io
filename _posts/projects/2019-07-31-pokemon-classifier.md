---
layout: post
title: Pokémon Classification
excerpt: Multiclass Pokémon classification using the KNN algorithm.
modified: 2020-01-12
categories: projects
tags: [Machine Learning, Computer Vision]
comments: true
share: true
image:
  teaser: 2019-07-31-Pokemon-Classifier/teaser.jpg
gallery:
  - url: /images/projects/2019-07-31-Pokemon-Classifier/pikachu.jpg
    image_path: /images/projects/2019-07-31-Pokemon-Classifier/pikachu.jpg
    alt: "Pikachu"
    title: "Pikachu"
  - url: /images/projects/2019-07-31-Pokemon-Classifier/bulbasaur.jpg
    image_path: /images/projects/2019-07-31-Pokemon-Classifier/bulbasaur.jpg
    alt: "Bulbasaur"
    title: "Bulbasaur"
  - url: /images/projects/2019-07-31-Pokemon-Classifier/charmander.jpg
    image_path: /images/projects/2019-07-31-Pokemon-Classifier/charmander.jpg
    alt: "Charmander"
    title: "Charmander"
---
## About the project
This was a project I did while I was getting started with Machine Learning. [Coding Blocks](https://codingblocks.com) had a competition where we had to classify Pokémons based on their names. It's a **multi-class classification problem** and the Pokémons need to be classified as either Pikachu, Bulbasaur, or Charmander.  
\
I learned how to implement the **naïve KNN algorithm** from scratch and use the **Numpy** for image processing. The biggest challenge was getting used to working with images as I had never done that before.

{% include gallery caption="Some images from each category in the dataset" %}

These are a few pictures from each category in the dataset provided. I scored an accuracy of over 97% in the final submission.  
\
The github repository for the same can be found [here](https://github.com/sarvasvarora/PokeDex-Coding-Blocks-Challenge--KNN-Classifier).
