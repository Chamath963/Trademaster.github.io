document.addEventListener('DOMContentLoaded', () => {
    const pnlData = [14, -20, 60, 2, 35, 4, 131, -50];
    const overallPnl = pnlData.reduce((acc, val) => acc + val, 0);
    const pnlPercentage = overallPnl > 0 ? `+${overallPnl}%` : `${overallPnl}%`;

    document.getElementById('pnl-value').textContent = pnlPercentage;

    document.getElementById('show-last-month').addEventListener('click', (event) => {
        event.preventDefault();
        const lastMonthPnlDiv = document.getElementById('last-month-pnl');
        const backToHomeLink = document.getElementById('back-to-home');

        if (lastMonthPnlDiv.style.display === 'none') {
            lastMonthPnlDiv.style.display = 'block';
            backToHomeLink.style.display = 'block';
        } else {
            lastMonthPnlDiv.style.display = 'none';
            backToHomeLink.style.display = 'none';
        }
    });

    document.getElementById('back-to-home').addEventListener('click', (event) => {
        event.preventDefault();
        const lastMonthPnlDiv = document.getElementById('last-month-pnl');
        const backToHomeLink = document.getElementById('back-to-home');

        lastMonthPnlDiv.style.display = 'none';
        backToHomeLink.style.display = 'none';
    });

    document.getElementById('join-telegram-group').addEventListener('click', function() {
    colour #333
    // Retrieve the URL from the data-url attribute
    var url = this.getAttribute('data-url');
    
    // Open the URL in a new tab/window
    window.open(url, '_blank');
    });
});
