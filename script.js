var showItems = document.getElementById('showEmojis')
var emojiData;
var main = document.getElementsByClassName('main')[0];

async function getEmojis(){
    try {
        const result = await fetch('https://unpkg.com/emoji.json/emoji.json');
        const data = await result.json();
        emojiData = data
        showSelected('face-smiling')

    } catch (error) {
        alert(error)
    }
}
getEmojis();

function showAll(){
    for (let i = 0; i < emojiData.length; i++) {
        var emojiDiv = document.createElement('div');
        emojiDiv.className = "emojiItem";
        var emoji = document.createElement('h1');
        emoji.innerHTML = emojiData[i].char;
        var emojiName = document.createElement('h2');
        emojiName.innerHTML = emojiData[i].name.toUpperCase()
        main.appendChild(emojiDiv);
        emojiDiv.appendChild(emoji);
        emojiDiv.appendChild(emojiName);
    }
}

function showSelected(sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10, sub11, sub12){
    var allEmojis = document.getElementById('allmojis');
    allEmojis.innerHTML = "Loading..."
    main.innerHTML = "";
    var pageSpace = document.createElement('div');
    pageSpace.className = "pageSpace";
    main.appendChild(pageSpace);
        for (let i = 0; i < emojiData.length; i++) {
            if(
                emojiData[i].subgroup === sub1 
                || emojiData[i].subgroup === sub2 
                || emojiData[i].subgroup === sub3 
                || emojiData[i].subgroup === sub4 
                || emojiData[i].subgroup === sub5 
                || emojiData[i].subgroup === sub6 
                || emojiData[i].subgroup === sub7 
                || emojiData[i].subgroup === sub8
                || emojiData[i].subgroup === sub9
                || emojiData[i].subgroup === sub10
                || emojiData[i].subgroup === sub11
                || emojiData[i].subgroup === sub12
                ){

                var emojiDiv = document.createElement('div');
                emojiDiv.className = "emojiItem";
                var emoji = document.createElement('h1');
                emoji.innerHTML = emojiData[i].char;
                var emojiName = document.createElement('h2');
                emojiName.innerHTML = emojiData[i].name.toUpperCase()
                main.appendChild(emojiDiv);
                emojiDiv.appendChild(emoji);
                emojiDiv.appendChild(emojiName);
            }
        }
        allEmojis.innerHTML = "ALL-EMOJIS"
}