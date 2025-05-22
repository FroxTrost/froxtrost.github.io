document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('div.highlighter-rouge');
    
    codeBlocks.forEach(block => {
        // Create copy button
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.textContent = 'Copy';
        
        // Add click handler
        button.addEventListener('click', async () => {
            const code = block.querySelector('code');
            const text = code.textContent;
            
            try {
                await navigator.clipboard.writeText(text);
                button.textContent = 'Copied!';
                button.classList.add('copied');
                
                // Reset button after 1 seconds
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.classList.remove('copied');
                }, 1000);
            } catch (err) {
                console.error('Failed to copy code:', err);
                button.textContent = 'Error';
            }
        });
        
        block.appendChild(button);
    });
}); 