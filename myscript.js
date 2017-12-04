console.log('Start Crypto ext');
//Show cattributes on a grid
function updateCattributes() {
    document.querySelectorAll('.KittiesGrid-item').forEach(item => {
        const split = item.querySelectorAll('a')[0].href.split('/');
        const id = split[split.length - 1];
        fetch(`https://api.cryptokitties.co/kitties/${id}`).then(response => {
            response.json().then(data => {
                //data.cattributes
                let card = item.querySelectorAll('.KittyCard-details')[0];
                let container = document.createElement('div');
                container.innerHTML = data.cattributes.toString();
                container.style.maxWidth = '200px';
                container.style.overflow = 'hidden';
                container.style.wordWrap = 'break-word';

                card.appendChild(container);
            });
        });
    });
}

setTimeout(() => {
    setInterval(() => {
        let kittiesGrid = document.querySelectorAll('.KittiesGrid')[0];
        if (kittiesGrid && !kittiesGrid.dataset.extData) {
            updateCattributes();
            kittiesGrid.dataset.extData = true;
        }
    }, 100);
}, 3000);


