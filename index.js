changeLudo = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const playDice = `ludo${randomNumber}.PNG`;
    const playDice2 = `ludo${randomNumber2}.PNG`;
    document.getElementById('img1').setAttribute(
        'src', playDice
    )
    document.getElementById('img2').setAttribute(
        'src', playDice2
    )
    if (playDice > playDice2) {
        document.querySelector('h1').innerHTML = "Player1 won!!!";
    } else if (playDice < playDice2) {
        document.querySelector('h1').innerHTML = "Player2 won!!!";
    } else {
        document.querySelector('h1').innerHTML = "DRAW!!! ";
    }
}