
const issueNumber = document.getElementById('number-of-issues');
const openButton = document.getElementById('open-button');
const allButton = document.getElementById('all-button')

const allIssues = () => {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url).
        then((res) => res.json()).
        then((data) => displayCardsinAll(data.data));
}

allButton.addEventListener('click', allIssues);

const openIssue = () => {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url).
        then((res) => res.json()).
        then((data) => displayOpenCards(data.data));

}

openButton.addEventListener('click', openIssue);

const displayOpenCards = (openCards) => {

    const onlyOpen = openCards.filter(card => card.status === 'open');
    issueNumber.innerText = onlyOpen.length;
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';

    onlyOpen.forEach(openCard => {

        const divOpenCard = document.createElement('div');

        let priority = '';
        if (openCard.priority === 'high') {
            priority = 'bg-red-100 text-red-600';
        } else if (openCard.priority === 'medium') {
            priority = 'bg-yellow-100 text-yellow-700'
        } else if (openCard.priority === 'low') {
            priority = 'bg-gray-200 text-gray-600';
        }

        divOpenCard.innerHTML = `

    
              <div class="shadow-sm border-t-4 border-green-500 py-4 px-3 rounded-md h-full flex flex-col">
                <div class="flex justify-between mb-3">
                    <img src="./assets/Open-Status.png" alt="">
                    <p class="${priority}  px-3 py-1 text-center rounded-2xl ">${openCard.priority}</p>
                </div>
                <div>
                    <h2 class="text-[#1F2937] text-xl font-medium mb-2">${openCard.title}</h2>
                    <p class="text-[#64748B] mb-2"><small>${openCard.description}</small></p>
                    <button class=" rounded-xl text-red-600 border-red-400 px-3 py-1 border bg-red-100 "><i class="fa-solid fa-bug"></i> BUG</button>
                    <button class=" rounded-xl text-yellow-700 border border-yellow-400 py-1 px-3 bg-yellow-100"><i class="fa-regular fa-life-ring"></i> HELP WANTED</button>
                </div>
                <hr class="bg-gray-400 mt-5">

                <div class="mt-3 flex justify-between">
                    <div>
                    <p class="text-[#64748B]"><small> #1 by John_doe </small></p>
                    <p class="text-[#64748B]"><small> 1/15/2025 </small></p> 
                    </div>

                    <div>
                    <p class="text-[#64748B]"> <small> ${openCard.createdAt} </small> </p>
                    <p class="text-[#64748B]"> <small> ${openCard.updatedAt} </small> </p>
                    </div> 

                </div>

            </div>


    `
    cardsContainer.append(divOpenCard);

    })


}

const displayCardsinAll = (cards) => {
    issueNumber.innerText = cards.length;
      const cardsContainer = document.getElementById('cards-container');
      cardsContainer.innerHTML = '';
    // console.log(cards);

    cards.forEach(card => {

      
        const divCard = document.createElement('div');

        let priority = '';
        if (card.priority === 'high') {
            priority = 'bg-red-100 text-red-600';
        } else if (card.priority === 'medium') {
            priority = 'bg-yellow-100 text-yellow-700'
        } else if (card.priority === 'low') {
            priority = 'bg-gray-200 text-gray-600';
        }

        let greenBorder = '';
        if(card.status === 'open'){
            greenBorder = 'border-t-4 border-green-500'
        }
        divCard.innerHTML = `
        
              <div class=" ${greenBorder} shadow-sm py-4 px-3 rounded-md h-full flex flex-col">
                <div class="flex justify-between mb-3">
                    <img src="./assets/Open-Status.png" alt="">
                    <p class="${priority}  px-3 py-1 text-center rounded-2xl ">${card.priority}</p>
                </div>
                <div>
                    <h2 class="text-[#1F2937] text-xl font-medium mb-2">${card.title}</h2>
                    <p class="text-[#64748B] mb-2"><small>${card.description}</small></p>
                    <button class=" rounded-xl text-red-600 border-red-400 px-3 py-1 border bg-red-100 "><i class="fa-solid fa-bug"></i> BUG</button>
                    <button class=" rounded-xl text-yellow-700 border border-yellow-400 py-1 px-3 bg-yellow-100"><i class="fa-regular fa-life-ring"></i> HELP WANTED</button>
                </div>
                <hr class="bg-gray-400 mt-5">

                <div class="mt-3 flex justify-between">
                    <div>
                    <p class="text-[#64748B]"><small> #1 by John_doe </small></p>
                    <p class="text-[#64748B]"><small> 1/15/2025 </small></p> 
                    </div>

                    <div>
                    <p class="text-[#64748B]"> <small> ${card.createdAt} </small> </p>
                    <p class="text-[#64748B]"> <small> ${card.updatedAt} </small> </p>
                    </div> 

                </div>

            </div>

        `
        cardsContainer.append(divCard);
    })

}

allIssues();