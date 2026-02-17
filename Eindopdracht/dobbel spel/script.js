let wins = 0, losses = 0, draws = 0;

function playGame() {
    let p1 = Math.floor(Math.random() * 6) + 1;
    let p2 = Math.floor(Math.random() * 6) + 1;
    let c1 = Math.floor(Math.random() * 6) + 1;
    let c2 = Math.floor(Math.random() * 6) + 1;
    
    let pTotal = p1 + p2;
    let cTotal = c1 + c2;
    
    document.getElementById('player1').textContent = p1;
    document.getElementById('player2').textContent = p2;
    document.getElementById('computer1').textContent = c1;
    document.getElementById('computer2').textContent = c2;
    
    document.getElementById('playerTotal').textContent = pTotal;
    document.getElementById('computerTotal').textContent = cTotal;
    
    let msg = '';
    if (pTotal > cTotal) {
        wins++;
        msg = 'win';
    } else if (pTotal < cTotal) {
        losses++;
        msg = 'verloren';
    } else {
        draws++;
        msg = 'gelijkspel';
    }
    
    document.getElementById('result').textContent = msg;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('draws').textContent = draws;
}
