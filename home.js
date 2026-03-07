
const issueNumber = document.getElementById('number-of-issues');

const allIssues = () => {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url).
        then((res) => res.json()).
        then((data) => displayCards(data.data));
}




const displayCards = (cards) => {
    issueNumber.innerText = cards.length;
    cards.forEach(card => {
        
        const cardsContainer = document.getElementById('cards-container');
        const divCard = document.createElement('div');
        // cardsContainer.innerHTML = `
            
        // `
    })

}

allIssues();