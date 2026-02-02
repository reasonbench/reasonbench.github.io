/* === Table Sorting === */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.leaderboard-table').forEach(table => {
    const headers = table.querySelectorAll('thead th[data-sort]');
    headers.forEach((header, index) => {
      header.addEventListener('click', () => {
        const type = header.dataset.sort; // 'string' or 'number'
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        const colIndex = Array.from(header.parentNode.children).indexOf(header);

        // Determine sort direction
        const isAsc = header.classList.contains('sorted-asc');
        // Clear all sorted classes in this table
        headers.forEach(h => h.classList.remove('sorted-asc', 'sorted-desc'));

        const direction = isAsc ? 'desc' : 'asc';
        header.classList.add(`sorted-${direction}`);

        rows.sort((a, b) => {
          let aVal = a.children[colIndex].dataset.value || a.children[colIndex].textContent.trim();
          let bVal = b.children[colIndex].dataset.value || b.children[colIndex].textContent.trim();

          if (type === 'number') {
            aVal = parseFloat(aVal) || 0;
            bVal = parseFloat(bVal) || 0;
          } else {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
          }

          if (aVal < bVal) return direction === 'asc' ? -1 : 1;
          if (aVal > bVal) return direction === 'asc' ? 1 : -1;
          return 0;
        });

        rows.forEach(row => tbody.appendChild(row));
      });
    });
  });

  /* === Copy BibTeX === */
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const bibtex = btn.closest('.bibtex-block').querySelector('pre').textContent;
      navigator.clipboard.writeText(bibtex).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });
});
