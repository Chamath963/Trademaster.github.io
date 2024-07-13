document.addEventListener('DOMContentLoaded', () => {
    // Example PNL data
    const pnlData = [
        { date: '2024-07-01', profit_loss: '+5%' },
        { date: '2024-07-02', profit_loss: '-2%' },
        { date: '2024-07-03', profit_loss: '+1.5%' }
    ];

    // Example signals data
    const signalsData = [
        { time: '12:00', description: 'Buy BTC' },
        { time: '12:30', description: 'Sell ETH' },
        { time: '13:00', description: 'Buy LTC' }
    ];

    // Display PNL report
    const pnlTableBody = document.querySelector('#pnl-table tbody');
    pnlData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.date}</td><td>${row.profit_loss}</td>`;
        pnlTableBody.appendChild(tr);
    });

    // Display running signals
    const signalsList = document.getElementById('signals-list');
    signalsData.forEach(signal => {
        const li = document.createElement('li');
        li.textContent = `${signal.time}: ${signal.description}`;
        signalsList.appendChild(li);
    });
});
