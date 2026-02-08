---
title: Blog
icon: fas fa-pen-nib
order: 4
---

## Blog

This page collects research notes, technical writeups, and experiment logs.

{% assign visible_posts = site.posts | where_exp: "item", "item.hidden != true" %}

{% if visible_posts.size > 0 %}
<div class="blog-index">
  {% for post in visible_posts %}
    <article class="blog-entry">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="blog-meta">
        {{ post.date | date: "%B %-d, %Y" }}
        {% if post.categories and post.categories.size > 0 %}
          - {{ post.categories | join: ", " }}
        {% endif %}
      </p>
      <p>{{ post.excerpt | strip_html | truncate: 190 }}</p>
    </article>
  {% endfor %}
</div>
{% else %}
No posts yet. Research notes will appear here soon.
{% endif %}
