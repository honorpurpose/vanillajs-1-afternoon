const id = document.getElementById('idTag')
const color = document.getElementById('styleTag')

const setCard = () => {
    const card = document.getElementById(id.value)
    console.log(card)
    card.style.color = color.value;
}

const reset = () => {
    const diamonds = document.getElementById('diamonds')
    const spades = document.getElementById('spades')
    const clubs= document.getElementById('clubs')
    const hearts= document.getElementById('hearts')

    diamonds.style.color = 'gray';
    spades.style.color = 'gray';
    clubs.style.color = 'gray';
    hearts.style.color = 'gray';
   
}