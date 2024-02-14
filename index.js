document.getElementById('button').onclick = (function() {
    document.getElementsByTagName('audio')[0].play();
    document.getElementsByTagName('span')[0].innerHTML = 'რა იყო ვერ აჭერ იძიოტკა?';
    return false;
});

document.getElementById('button3').onclick = (function() {
    document.getElementsByTagName('audio')[1].play();
    document.getElementsByTagName('span')[1].innerHTML = 'რა ძებილი ხარ ჰაჰა 🤣';
    return false;
});

