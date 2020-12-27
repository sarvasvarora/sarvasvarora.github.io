---
layout: post-index
permalink: /tags/
title: Tags Archive
tagline: All the posts categorized by tags.
tags: [tags]
comments: false
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- site_tags: {{ site_tags }} -->

{% assign tag_words = site_tags | split:',' | sort %}

<!-- tag_words: {{ tag_words }} -->

<div id="tags">
  <ul class="tag-box inline">
  {% for tag in tag_words %}
    <li><small><a href="#{{ tag | slugify }}-ref"><i class="fa fa-tags" style="padding-right: 3px;"></i>{{ tag | replace: '-', ' ' }} <span>{{ site.tags[tag] | size }}</span></a></small></li>
  {% endfor %}
  </ul>

{% for item in (0..site.tags.size) %}{% unless forloop.last %}
{% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}

  <h3 id="{{ this_word | slugify }}-ref">{{ this_word | replace: '-', ' ' }}</h3>
  <ul class="posts">
    {% for post in site.tags[this_word] %}{% if post.title != null %}
    <li itemscope>
        <a class="author-social" href="{{ post.url }}" style="border-bottom: none;">
        <i class="fas fa-external-link-alt"></i>
          {{ post.title }}
           <span class="entry-date">
              <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">
                {{ post.date | date: "%B %d, %Y" }}
              </time>
          </span> 
        </a>
    </li>
    {% endif %}{% endfor %}
  </ul>
  {% endunless %}{% endfor %}
</div>
