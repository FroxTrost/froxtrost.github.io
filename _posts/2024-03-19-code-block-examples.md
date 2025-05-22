---
layout: post
title: "Code Block Examples with Syntax Highlighting"
date: 2024-03-19
tags: [programming, examples, syntax]
publish: false
---

# Code Block Examples

This post demonstrates various code blocks with syntax highlighting and copy functionality.

## Python Example

Here's a simple Python class with type hints:

```python
from typing import List, Optional

class BlogPost:
    def __init__(self, title: str, content: str, tags: Optional[List[str]] = None):
        self.title = title
        self.content = content
        self.tags = tags or []
    
    def add_tag(self, tag: str) -> None:
        if tag not in self.tags:
            self.tags.append(tag)
    
    def __str__(self) -> str:
        return f"{self.title} ({', '.join(self.tags)})"

# Usage
post = BlogPost("Hello World", "My first post!", ["coding", "blog"])
post.add_tag("python")
print(post)  # Output: Hello World (coding, blog, python)
```

## JavaScript/TypeScript Example

A React component with TypeScript:

```typescript
interface PostProps {
  title: string;
  excerpt: string;
  publishDate: Date;
  tags: string[];
}

const BlogPostCard: React.FC<PostProps> = ({ 
  title, 
  excerpt, 
  publishDate, 
  tags 
}) => {
  return (
    <article className="post-card">
      <h2>{title}</h2>
      <time>{publishDate.toLocaleDateString()}</time>
      <p>{excerpt}</p>
      <div className="tags">
        {tags.map(tag => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default BlogPostCard;
```

## SQL Examples

Creating a blog schema:

```sql
-- Create tables for a simple blog
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id INTEGER REFERENCES users(id)
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE post_tags (
    post_id INTEGER REFERENCES posts(id),
    tag_id INTEGER REFERENCES tags(id),
    PRIMARY KEY (post_id, tag_id)
);

-- Query to fetch posts with their tags
SELECT 
    p.title,
    p.published_at,
    STRING_AGG(t.name, ', ') as tags
FROM posts p
LEFT JOIN post_tags pt ON p.id = pt.post_id
LEFT JOIN tags t ON pt.tag_id = t.id
GROUP BY p.id, p.title, p.published_at
ORDER BY p.published_at DESC;
```

## Ruby Example

A Jekyll plugin for tag generation:

```ruby
module Jekyll
  class TagPageGenerator < Generator
    safe true

    def generate(site)
      tags = site.posts.docs.flat_map { |post| post.data['tags'] || [] }.uniq
      
      tags.each do |tag|
        site.pages << TagPage.new(site, site.source, tag)
      end
    end
  end

  class TagPage < Page
    def initialize(site, base, tag)
      @site = site
      @base = base
      @dir  = File.join('tags', tag.downcase)
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag.html')
      
      self.data['tag'] = tag
      self.data['title'] = "Posts tagged with #{tag}"
    end
  end
end
```

## Shell Script Example

A deployment script:

```bash
#!/bin/bash

# Build and deploy Jekyll site
echo "🚀 Starting deployment process..."

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    echo "❌ Ruby is not installed!"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
bundle install

# Build the site
echo "🏗️ Building site..."
JEKYLL_ENV=production bundle exec jekyll build

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
git add _site
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

echo "✅ Deployment complete!"
```

## CSS/SCSS Example

Styling for the blog:

```scss
// Variables
$font-family-sans: 'Inter', -apple-system, system-ui, sans-serif;
$color-primary: #2563eb;
$color-text: #374151;
$color-background: #ffffff;

// Base styles
body {
  font-family: $font-family-sans;
  color: $color-text;
  line-height: 1.7;
  
  @media (prefers-color-scheme: dark) {
    background: #1a1a1a;
    color: #e5e5e5;
  }
}

// Post card component
.post-card {
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  h2 {
    margin-top: 0;
    color: $color-primary;
  }
  
  .tags {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }
}
```

## JSON Example

A blog post configuration:

```json
{
  "post": {
    "title": "Getting Started with Jekyll",
    "author": {
      "name": "John Doe",
      "email": "john@example.com",
      "social": {
        "twitter": "@johndoe",
        "github": "johndoe"
      }
    },
    "categories": ["tutorial", "web"],
    "tags": ["jekyll", "ruby", "static-site"],
    "metadata": {
      "featured": true,
      "readTime": "5 min",
      "comments": true
    },
    "seo": {
      "description": "Learn how to build a blog with Jekyll",
      "keywords": ["jekyll", "blog", "tutorial"],
      "ogImage": "/assets/images/jekyll-tutorial.jpg"
    }
  }
}
```

This post demonstrates various code blocks with different languages and use cases. Each code block includes:
- Syntax highlighting
- Copy button functionality
- Real-world examples
- Proper formatting

Feel free to use this as a reference for testing syntax highlighting and the copy functionality across different languages! 