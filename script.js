document.addEventListener('DOMContentLoaded', () => {
    const pnlData = [5, -2, 1.5];
    const overallPnl = pnlData.reduce((acc, val) => acc + val, 0);
    document.getElementById('overall-pnl').textContent = `Overall PNL: ${overallPnl}%`;

    document.getElementById('last-month-link').addEventListener('click', (event) => {
        event.preventDefault();
        const lastMonthPnlDiv = document.getElementById('last-month-pnl');
        lastMonthPnlDiv.style.display = lastMonthPnlDiv.style.display === 'none' ? 'block' : 'none';
    });
});
