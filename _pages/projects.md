---
layout: post-index
permalink: /projects/
title: Projects
tagline: A List of Project Posts
tags: [projects]
comments: false
---

{% for post in site.categories.projects %}

  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != year_previous %}
  <h2>{{ post.date | date: '%Y' }}</h2>
  {% endif %}
  {% capture year_previous %}{{ post.date | date: '%Y' }}{% endcapture %}

  <h3 class="author-social"><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h3>
  <p><i><small>Posted: {{ post.date | date: "%B %-d, %Y"}} Updated: {{ post.modified | date: "%B %-d, %Y"}}</small></i></p>
  {% if post.image.teaser %}
  <figure>
    <a href="{{ site.url }}{{ post.url }}"><img src="/images/projects/{{ post.image.teaser }}"></a>
  </figure>
  {% endif %}
  <p style="margin-block-end: 0;">{{ post.excerpt | strip_html | truncate: 160 }}</p>
  {% if post.tags %}
  <div class="tags">
  <ul class="tag-box inline">
  <li><strong style="padding-right: 5px;"><i class="fas fa-fw fa-tags" aria-hidden="true"></i> Tags: </strong></li>
  {% for tag in post.tags %}
  <li><small><a href="/tags/#{{ tag | slugify }}-ref">{{ tag | replace: '-', ' ' }}</a></small></li>
  {% endfor %}
  </ul>
  </div>
  {% endif %}

{% endfor %}
