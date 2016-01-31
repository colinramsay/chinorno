document.body.innerHTML += '<audio autoplay loop><source src="chimtrim.mp3"></audio>';

var chins = [
    {
        img: 'jimmyhill.jpg',
        isChin: true
    },
    {
        img: 'cat.jpg'
    },
    {
        img: 'dog.jpg'
    },
    {
        img: 'rabbit.jpg'
    },
    {
        img: 'elephant.jpg',
        shouldRamsay: true
    },
    {
        img: 'chinp1.jpg',
        shouldChinp: true
    },
    {
        img: 'chimp2.jpg',
        shouldChinp: true
    },
    {
        img: 'arma.jpg'
    },
    {
        img: 'bear.jpg'
    },
    {
        img: 'bee.jpg'
    },
    {
        img: 'jay.jpg',
        isChin: true
    },
    {
        img: 'sam.jpg',
        isChin: true
    },
    {
        img: 'witch.jpg',
        isChin: true
    }
];


var alreadyChinned = [],
    totalCount = chins.length,
    correctCount = 0;


function getNewRandomChineqsue() {
    var idx = Math.floor(Math.random() * chins.length),
        chinOrNo = chins[idx];

    chins.splice(idx, 1);

    return chinOrNo;
}


function replaceChin() {
    var container = document.querySelector('.chins'),
        img = document.createElement('img'),
        chinEsque = getNewRandomChineqsue();

    if(!chinEsque) {
        var again = confirm('You got ' + correctCount + ' out of ' + totalCount + ' correct. Play again?');

        if(again) {
            window.location.reload();
        } else {
            window.location = 'http://www.theatlantic.com/notes/2016/01/no-really-other-animals-dont-have-chins/433890/';
        }
        return;
    }

    container.innerHTML = '';

    img.dataset.chin = JSON.stringify(chinEsque);
    img.src = 'img/' + chinEsque.img;

    container.appendChild(img);
}


function chinp() {
    var chinnn = document.createElement('div');
    chinnn.className = 'chinnn';

    document.body.appendChild(chinnn);

    setTimeout(function() {
        document.body.removeChild(chinnn);
        replaceChin();
    }, 4000);
}


function ramsay() {
    var ramsay = document.createElement('div');
    ramsay.className = 'ramsay';

    var img = document.createElement('img');
    img.src = 'img/ramsay.gif';
    ramsay.appendChild(img);

    document.body.appendChild(ramsay);

    setTimeout(function() {
        document.body.removeChild(ramsay);
        replaceChin();
    }, 4000);
}


function beginChin() {
    replaceChin();

    document.querySelector('button.yes').addEventListener('click', function() {
        var chin = JSON.parse(document.querySelector('.chins img').dataset.chin);

        if(chin.shouldChinp) {
            chinp();
        } else if(chin.shouldRamsay) {
            ramsay();
        } else if(chin.isChin) {
            correctCount++;
            alert('Hurray! You have successfully identified a being with a chin.');
            replaceChin();
        } else {
            alert('NO CHIN. CHINLESS. NO CHIN.');
            replaceChin();
        }
    });

    document.querySelector('button.no').addEventListener('click', function() {
        var chin = JSON.parse(document.querySelector('.chins img').dataset.chin);

        if(chin.shouldChinp) {
            chinp();
        } else if(chin.shouldRamsay) {
            ramsay();
        } else if(chin.isChin) {
            alert('Wrong! This is a chin, you chinless wonder!');
            replaceChin();
        } else {
            correctCount++;
            alert('You have correctly recognised this non-chin.');
            replaceChin();
        }
    });
}


beginChin();