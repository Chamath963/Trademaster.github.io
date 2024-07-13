document.addEventListener('DOMContentLoaded', () => {
    const pnlData = [14, -20, 60, 2, 35, 4, 131, -50];
    const overallPnl = pnlData.reduce((acc, val) => acc + val, 0);
    document.getElementById('overall-pnl').textContent = `Overall PNL: ${overallPnl}%`;

    document.getElementById('last-month-link').addEventListener('click', (event) => {
        event.preventDefault();
        const lastMonthPnlDiv = document.getElementById('last-month-pnl');
        const pnlImage = document.getElementById('pnl-image');
        
        if (lastMonthPnlDiv.style.display === 'none') {
            lastMonthPnlDiv.style.display = 'block';
            pnlImage.style.display = 'block'; // Ensure image is visible when div is shown
        } else {
            lastMonthPnlDiv.style.display = 'none';
            pnlImage.style.display = 'none'; // Hide image when div is hidden
        }
    });
});
