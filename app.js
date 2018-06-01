document.onreadystatechange = function () {
    const song1 = document.getElementById('1');
    const song2 = document.getElementById('2');
    const song3 = document.getElementById('3');
    const song4 = document.getElementById('4');
    const song5 = document.getElementById('5');
    const song6 = document.getElementById('6');
    const song7 = document.getElementById('7');
    const song8 = document.getElementById('8');
    const song9 = document.getElementById('9');
    const song10 = document.getElementById('10');
    const song11 = document.getElementById('11');

    song1.addEventListener('click', clickOnSong, false);
    song2.addEventListener('click', clickOnSong, false);
    song3.addEventListener('click', clickOnSong, false);
    song4.addEventListener('click', clickOnSong, false);
    song5.addEventListener('click', clickOnSong, false);
    song6.addEventListener('click', clickOnSong, false);
    song7.addEventListener('click', clickOnSong, false);
    song8.addEventListener('click', clickOnSong, false);
    song9.addEventListener('click', clickOnSong, false);
    song10.addEventListener('click', clickOnSong, false);
    song11.addEventListener('click', clickOnSong, false);
};

function clickOnSong(event) {
    const target = event.target;
    target.className += ' clickedItem';

    const songContainerID = parseInt(target.id);
    const content = document.getElementById(`song${songContainerID}container`);

    content.style.display = 'block';

    for (let i = 1; i <= 11; i++) {
        if (i !== songContainerID) {
            const songNames = document.getElementById(i)
            const otherLyrics = document.getElementById(`song${i}container`);
            const audioPlayer = document.getElementById(`audio${i}`);

            songNames.className = 'links';
            otherLyrics.style.display = 'none';
            audioPlayer.pause();
        }
    }
};