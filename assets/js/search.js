function initSearch() {
    const searchInput = document.getElementById('search-input');
    const allPosts = document.querySelectorAll('.tag-post');
    const tagSections = document.querySelectorAll('.tag-section');
    const noResults = document.getElementById('no-results');
    const tagChips = document.querySelectorAll('.tag-chip');

    function normalizeText(text) {
        return text.toLowerCase().trim();
    }

    function filterPosts(searchTerm) {
        searchTerm = normalizeText(searchTerm);
        let hasResults = false;

        tagSections.forEach(section => {
            let sectionHasVisiblePosts = false;
            const posts = section.querySelectorAll('.tag-post');
            
            posts.forEach(post => {
                const title = normalizeText(post.querySelector('.post-title').textContent);
                const tag = normalizeText(section.querySelector('h2').textContent.substring(1)); // Remove # from tag
                const isVisible = title.includes(searchTerm) || tag.includes(searchTerm);
                
                post.style.display = isVisible ? 'flex' : 'none';
                if (isVisible) {
                    sectionHasVisiblePosts = true;
                    hasResults = true;
                }
            });

            section.style.display = sectionHasVisiblePosts ? 'block' : 'none';
        });

        noResults.style.display = hasResults ? 'none' : 'block';
    }

    searchInput.addEventListener('input', (e) => {
        filterPosts(e.target.value);
    });

    // Handle tag chip clicks
    tagChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            e.preventDefault();
            const tagName = chip.textContent.substring(1); // Remove # from tag
            searchInput.value = tagName;
            filterPosts(tagName);
        });
    });
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', initSearch); 