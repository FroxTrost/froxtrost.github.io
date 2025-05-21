---
layout: default
title: Tags
permalink: /tags
---

<div class="tags-container">
    <h1 class="page-title">Tags</h1>

    <div class="search-container">
        <input type="text" id="search-input" placeholder="Search posts or tags..." />
    </div>

    <div class="tags-overview">
        {% for tag in site.tags %}
        {% if tag[1][0].publish %}
        <a href="#{{ tag[0] | slugify }}" class="tag-chip">#{{ tag[0] }}</a>
        {% endif %}
        {% endfor %}
    </div>

    <div id="no-results" class="no-results" style="display: none;">
        <p>No matching posts found</p>
    </div>

    <div class="tags-list">
        {% for tag in site.tags %}
        {% if tag[1][0].publish %}
        <div class="tag-section" id="{{ tag[0] | slugify }}">
            <h2>#{{ tag[0] }}</h2>
            {% for post in tag[1] %}
            <div class="writing-item">
                <span class="post-date">{{ post.date | date: "%d.%m.%y" }}</span>
                <a href="{{ post.url | relative_url }}" class="post-title">{{ post.title }}</a>
            </div>
            {% endfor %}
        </div>
        {% endif %}
        {% endfor %}
    </div>
</div>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
