---
permalink: /tags.html
layout: default
title: wmsa | All Tags
---

<div>
{%-include back_link.html-%}
</div>

<h1>All tags</h1>

<div>
    {% for tag in site.tags %}
    <a href="#{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] }}</a>
    {% endfor %}
</div>

<!-- <hr><hr/> -->

<div>
    {% for tag in site.tags %}
    <h2 id="{{ tag[0] | slugify }}">{{ tag | first }}</h2>

    <ul>
        {% for post in tag[1] %}
        <li>
            <span>{{- post.date | date: site.theme_config.date_format -}}</span>
            <a href="{{ post.url | relative_url }}">{{ post.title | downcase }}</a>
        </li>
        {% endfor %}
    </ul>
    {% endfor %}
</div>