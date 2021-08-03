import { retrieve_data } from '/js/data_manipulation.js'

let HTMLDungeonList = document.getElementById("dungeon_list_HTML")
let HTMLModalWindowForFirstDungeon = document.getElementById("modal_window_for_first_dundeon")
let selectedIMG

export let dungeon_list = {
    dungeon_1: {
        id: 1,
        name: "Сastle of giants",
        max_number_mobs: 9,
        src: "/resources/images/dungeons/castle_of_giants.jpg",
        mobs_id: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    dungeon_2: {
        id: 2,
        name: "Crypt of dead",
        max_number_mobs: 9,
        src: "/resources/images/dungeons/crypt_of_dead.jpg"
    },
    dungeon_3: {
        id: 3,
        name: "Desert of ancestors",
        max_number_mobs: 6,
        src: "/resources/images/dungeons/desert_of_ancestors.jpg"
    },
    dungeon_4: {
        id: 4,
        name: "Heavenly prison",
        max_number_mobs: 7,
        src: "/resources/images/dungeons/heavenly_prison.jpg"
    },
    dungeon_5: {
        id: 5,
        name: "Ice peak",
        max_number_mobs: 7,
        src: "/resources/images/dungeons/ice_peak.jpg"
    },
    dungeon_6: {
        id: 6,
        name: "Wet valley",
        max_number_mobs: 7,
        src: "/resources/images/dungeons/wet_valley.jpg"
    }
}

call()

function showDungeonList() {
    let resDungeonList = ""
    for (var key in dungeon_list) {
        resDungeonList += '<div class="col-4 mt-3 text-center"><img class="img_shadow" src="' + dungeon_list[key].src +
            '"><button type="button" class="btn btn-secondary m-3 btn-lg btn_shadow" data-toggle="modal" data-target="#' + key + 'ModalWindow">' + dungeon_list[key].name + '</button></div>'
    }
    HTMLDungeonList.insertAdjacentHTML('afterbegin', resDungeonList)
}

function showFirstDungeonMobsList() {
    let first_mobs_list = ""
    let mobs_array = dungeon_list.dungeon_1.mobs_id
    let temp = retrieve_data('allMobs')

    for (var i = 0; i <= mobs_array.length - 1; i++) {
        if (temp[i].id == mobs_array[i]) {
            first_mobs_list += '<div class="col-4 mt-3 text-center"><h4>' + temp[i].name +
                '</h4><div class="col-12"><img class="size_img model_img_shadow" src="' + temp[i].image_src +
                '"></div><div class="col-12"></div></div>'
        }
    }
    HTMLModalWindowForFirstDungeon.insertAdjacentHTML('afterbegin', first_mobs_list)
}

function call() {
    showDungeonList()
    showFirstDungeonMobsList()
}

document.getElementById("modal_window_for_first_dundeon").onclick = function (e) {
    let target = e.target
    while (target != this) {
        if (target.tagName == 'IMG')
            setGreenColor(target)
        return;
    }
    target = target.parentNode
}

function setGreenColor(element) {
    if (selectedIMG) {
        console.log(selectedIMG)
        selectedIMG.classList.remove('set-border')
    }
    selectedIMG = element
    selectedIMG.classList.add('set-border');
}

var elem = document.querySelector('input[type="range"]');

var rangeValue = function () {
    var newValue = elem.value;
    var target = document.querySelector('.value');
    target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);