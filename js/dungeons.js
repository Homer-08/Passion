let HTMLDungeonList = document.getElementById("dungeon_list_HTML")

export let dungeon_list = {
    dungeon_1: {
        id: 1,
        name: "Сastle of giants",
        max_number_mobs: 9,
        src: "/resources/images/dungeons/castle_of_giants.jpg"
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

function showDungeonList() {
    let resDungeonList = ""

    for (var key in dungeon_list) {
        console.log(dungeon_list[key].src)
        resDungeonList += '<div class="col-4 mt-3 text-center"><img class="img_shadow" src="' + dungeon_list[key].src + '"><button type="button" class="btn btn-secondary m-3 btn-lg btn_shadow" data-toggle="modal" data-target="#exampleModalLong">' + dungeon_list[key].name + '</button></div>'
    }
    HTMLDungeonList.insertAdjacentHTML('afterbegin', resDungeonList)
}

showDungeonList()