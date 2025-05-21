---
layout: default
title: Tags
permalink: /tags/
---

<div class="tags-container">
    <h1 class="page-title">Tags</h1>

    <div class="tags-overview">
        {% for tag in site.tags %}
        {% if tag[1][0].publish %}
        <a href="{{ site.baseurl }}/tags/{{ tag[0] | slugify }}" class="tag-chip">{{ tag[0] }}</a>
        {% endif %}
        {% endfor %}
    </div>
</div>
