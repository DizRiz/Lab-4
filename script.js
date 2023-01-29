const cards = [
    { title: 'Yamaha', description: 'Yamaha is a Japanese bike manufacture, commonly used worldwide for their cost-friendly factor.' },
    { title: 'Harley-Davidson', description: 'Harley-Davidson, Inc. (H-D, or simply Harley) is an American motorcycle manufacturer headquartered in Milwaukee, Wisconsin, United States.' },
    { title: 'E-Bikes', description: 'Electric motorbikes are quickly gaining popularity for numerous reasons such as being eco-friendly and money-saving.' }
];
function addCard(card) {
    const template = document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = card.title;
    template.querySelector('.card-text').innerText = card.description;
    document.querySelector('#bike-list').appendChild(template);
}
if ('content' in document.createElement('template')) {
    cards.forEach((card) => {
        addCard(card);
    })
}
