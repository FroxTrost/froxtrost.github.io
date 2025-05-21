---
layout: default
title: Writing
permalink: /writing
---

<div class="writing-container">
    <h1 class="page-title">Writing</h1>
    
    <div class="writing-list">
        {% for post in site.posts %}
        {% if post.publish %}
        <div class="writing-item">
            <span class="post-date">{{ post.date | date: "%d.%m.%y" }}</span>
            <a href="{{ post.url | relative_url }}" class="post-title">{{ post.title }}</a>
        </div>
        {% endif %}
        {% endfor %}
    </div>
</div> 