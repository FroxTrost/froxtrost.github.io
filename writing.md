---
layout: default
title: Notes
permalink: /notes
---

<div class="notes-container">
    <h1 class="page-title">Notes</h1>
    
    <div class="writing-list">
        {% for post in site.posts %}
        {% if post.publish %}
            {% include post_item.html post=post show_tags=false %}
        {% endif %}
        {% endfor %}
    </div>
</div> 