---
layout: post-index
permalink: /miscellaneous/
title: Miscellaneous
tagline: Some misc. stuff I'd like sharing ;)
tags: [misc]
modified: 8-15-2017
comments: false
image:
    feature:
    credit:
    creditlink:
---

# WIP 
<!-- #TODO: MOOCs, Resources, Notes, Following list -->

{% for post in site.categories.misc %}

  <h3><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h3>
  <p><i><small>Posted: {{ post.date | date: "%B %-d, %Y"}} Updated: {{ post.modified | date: "%B %-d, %Y"}}</small></i></p>
  {% if post.image.teaser %}
  <figure>
    <a href="{{ site.url }}{{ post.url }}"><img src="/images/misc/{{ post.image.teaser }}"></a>
  </figure>
  {% endif %}
  <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>

{% endfor %}
