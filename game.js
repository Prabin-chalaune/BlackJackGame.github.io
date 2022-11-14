
        // let secondCard = getRandomcard() //7 before random card;
        let cards = []
        let sum = 0
        console.log(cards)
        let message = "";
        let player = {
            name: "prabin",
            chips: 124
        }
        let hasBlackJack = false
            // let sum = firstCard + secondCard;
            // let cards = [firstCard, secondCard]
        let isAlive = false;
        let messageEl = document.getElementById("message-el")
        let sumEl = document.getElementById("sum-el")
        let cardsEl = document.getElementById("card")
        let playerEl = document.getElementById("player-el")
        playerEl.textContent = player.name + ": $" + player.chips


        // function startGame() {
        //     let firstCard = getRandomcard()
        //     let SecondCard = getRandomNumber()
        //     cards = [firstCard, SecondCard]
        //     sum = firstCard + SecondCard
        //     renderGame()
        //     isAlive = true
        // }

        function renderGame() {
            cardsEl.textContent = "cards: ";
            for (let i = 0; i < cards.length; i++) {
                cardsEl.textContent += cards[i] + " ";

            }

            sumEl.textContent = "sum: " + sum;


            if (sum < 21) {
                message = "Do you want to draw a new card ?"
            } else if (sum === 21) {
                message = "Wohoo! you got a blackjack!"
                hasBlackJack = true
            } else if (sum > 21) {
                message = "Oh! you are out from game"
            }
            messageEl.textContent = message;
        }


        function runCard() {
            // console.log("Drawing a new card from the deck !")
            if (isAlive === false && hasBlackJack === false) {
                var card = getRandomcard()
                sum += card
                cards.push(card)
                console.log(cards)
                renderGame()
            }


        }

        function getRandomcard() {
            let randomNumber = Math.floor(Math.random() * 13) + 1
            if (randomNumber > 10) {
                return 10;
            } else if (randomNumber === 1) {
                return 11;
            } else {
                return randomNumber;
            }
        }


        function ClosePage(){
            window.close()
        }