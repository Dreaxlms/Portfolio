<script>
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')) {
        toggle.textContent = 'Light Mode';
    } else {
        toggle.textContent = 'Dark Mode';
    }
});
</script>
