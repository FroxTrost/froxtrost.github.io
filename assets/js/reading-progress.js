document.addEventListener('DOMContentLoaded', () => {
    // Add progress bar to post pages
    if (document.querySelector('.post-content')) {
        // Create and append progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        document.body.appendChild(progressBar);

        // Calculate reading time
        const content = document.querySelector('.post-content');
        const words = content.textContent.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200); // Assuming 200 words per minute

        // Add reading time to post meta
        const postMeta = document.querySelector('.post-meta');
        if (postMeta) {
            const readingTimeSpan = document.createElement('span');
            readingTimeSpan.className = 'reading-time';
            readingTimeSpan.textContent = `${readingTime} min read`;
            postMeta.appendChild(readingTimeSpan);
        }

        // Update progress bar on scroll
        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
            progressBar.style.width = `${progress}%`;
        });
    }
}); 