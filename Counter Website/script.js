<script>
    const textarea = document.getElementById('inputText');
    const wordCountSpan = document.getElementById('wordCount');
    const charCountSpan = document.getElementById('charCount');
    const specialCountSpan = document.getElementById('specialCount');

    textarea.addEventListener('input', function()
    
        let text = textarea.value.trim();

        // Count words
        let words = text.match(/\b\w+\b/g);
        wordCountSpan.textContent = words ? words.length : 0;

        // Count characters
        charCountSpan.textContent = text.length;

        // Count numbers and special characters
        let specialChars = text.replace(/[^\d\s\w]/g, '').length; // Modify regex as needed
        specialCountSpan.textContent = specialChars;
    
    );
</script>
