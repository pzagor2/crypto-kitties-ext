console.log('Start Crypto ext');
//Show cattributes on a grid
const cattributesData = JSON.parse(`{"totesbasic":{"value":18781},"kittencream":{"value":18536},"granitegrey":{"value":17462},"luckystripe":{"value":12901},"thicccbrowz":{"value":12078},"crazy":{"value":11598},"soserious":{"value":9307},"himalayan":{"value":9244},"pouty":{"value":9102},"sizzurp":{"value":8801},"happygokitty":{"value":8792},"strawberry":{"value":8634},"ragamuffin":{"value":8602},"greymatter":{"value":7796},"sphynx":{"value":7517},"munchkin":{"value":7164},"mintgreen":{"value":7162},"aquamarine":{"value":7104},"orangesoda":{"value":7025},"topaz":{"value":6986},"chocolate":{"value":6967},"lemonade":{"value":6870},"swampgreen":{"value":6812},"simple":{"value":6643},"raisedbrow":{"value":6614},"royalpurple":{"value":6371},"coffee":{"value":5864},"salmon":{"value":5814},"shadowgrey":{"value":5714},"tongue":{"value":4218},"chestnut":{"value":3599},"cloudwhite":{"value":3413},"laperm":{"value":3338},"saycheese":{"value":3257},"calicool":{"value":3179},"barkbrown":{"value":3116},"cymric":{"value":2990},"beard":{"value":2743},"tigerpunk":{"value":2419},"mauveover":{"value":2324},"limegreen":{"value":2243},"skyblue":{"value":1935},"spock":{"value":1746},"dali":{"value":1671},"emeraldgreen":{"value":1537},"otaku":{"value":1458},"bubblegum":{"value":1316},"bloodred":{"value":1163},"scarlet":{"value":1028},"fabulous":{"value":674},"peach":{"value":473},"gold":{"value":448},"chartreux":{"value":260},"cerulian":{"value":226},"jaguar":{"value":156},"wingtips":{"value":125},"whixtensions":{"value":94},"mainecoon":{"value":81}}`);

function updateCattributes() {
    document.querySelectorAll('.KittiesGrid-item').forEach(item => {
        const split = item.querySelectorAll('a')[0].href.split('/');
        const id = split[split.length - 1];
        fetch(`https://api.cryptokitties.co/kitties/${id}`).then(response => {
            response.json().then(data => {
                let card = item.querySelectorAll('.KittyCard-details')[0];
                let container = document.createElement('div');
                let text = '';

                data.cattributes.forEach(attr => {
                    text += `${attr} (${cattributesData[attr].value}), `;
                });
                container.innerHTML = text;
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


