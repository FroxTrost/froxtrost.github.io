# Personal Blog

This is a personal blog built with Jekyll, a static site generator.

## Prerequisites

- Ruby (version 3.0.0 or higher)
- Bundler gem
- Git
- rbenv (Ruby version manager)

## Setup Instructions

1. Install rbenv and Ruby:
   ```bash
   brew install rbenv ruby-build
   rbenv install 3.2.3
   rbenv global 3.2.3
   ```

2. Initialize rbenv in your shell:
   ```bash
   echo 'eval "$(rbenv init -)"' >> ~/.zshrc && source ~/.zshrc
   ```

3. Install Ruby dependencies:
   ```bash
   gem install bundler
   bundle install
   ```

4. Start the Jekyll development server:
   ```bash
   bundle exec jekyll serve
   ```

5. Open your browser and visit:
   ```
   http://localhost:4000
   ```

## Development

- The site will automatically rebuild when you make changes to the source files
- Posts are located in the `_posts` directory
- Pages are in the root directory with `.markdown` or `.md` extensions
- Configuration is in `_config.yml`

## Deployment

This site is configured for GitHub Pages deployment. Simply push your changes to the main branch, and GitHub Pages will automatically build and deploy your site.

## Theme

This blog uses the "no-style-please" theme, which provides a clean and minimal design.
