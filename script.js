document.addEventListener('DOMContentLoaded', () => {
    // Calculate and display overall PnL
    const pnlData = [5, -2, 1.5];
    const overallPnl = pnlData.reduce((acc, val) => acc + val, 0);
    document.getElementById('overall-pnl').textContent = `Overall PNL: ${overallPnl}%`;

    // Toggle the visibility of the last month's PnL image
    document.getElementById('show-pnl-link').addEventListener('click', (event) => {
        event.preventDefault();
        const pnlImageContainer = document.getElementById('pnl-image-container');
        pnlImageContainer.style.display = pnlImageContainer.style.display === 'none' ? 'block' : 'none';
    });
});
