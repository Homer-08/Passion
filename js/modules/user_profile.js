let HTMLUserStats = document.getElementById("user_stats_HTML")

let user_profile_stats_init = {
    monsters_killed: 0,
    dead_count: 0,
    items_received: 0
}

let user_stats_init = {
    level: 1,                   //user level
    gold: 0,                    //type of deffault money
    axe: 0,                     //types of rare money
    attack: 10,                 //user attack rating
    heal_point: 100,            //user heal points
    crit: 0,                    //crit power
    crit_chance: 0              //crit chance
}

let user_dressed_inventory_init = {
    head: {item_id: null, item_img_src: " "},
    body: {item_id: null, item_img_src: " "},
    hands:{item_id: null, item_img_src: " "},
    legs: {item_id: null, item_img_src: " "},
    weapon:{item_id: null, item_img_src: " "},
    ring: {item_id: null, item_img_src: " "},
    amulet: {item_id: null, item_img_src: "/resources/images/items/amulet.png"},
    pet: {item_id: null, item_img_src: " "}
}

call()

function call() {
    showUserStats()
    compress_data('user_dressed_inventory', user_dressed_inventory_init) //set global - user_dressed_inventory var
    compress_data('user_stats', user_stats_init) // set global - user_stats var
}

function compress_data(obj_name, obj) {
    localStorage.setItem(obj_name, JSON.stringify(obj));
}

function retrieve_data(obj_name) {
    let retrievedObject = localStorage.getItem(obj_name);
    return JSON.parse(retrievedObject)
}

function splitString(stringToSplit) {
    var result = stringToSplit.split('_')

    for (var i = 0; i <= result.length - 1; i++) {
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1)
    }

    return result.join(' ')
}

function showUserStats() {
    let userStats = ""
    let user_stats =  retrieve_data('user_stats')
    for (var key in user_stats) {
        userStats += '<div class="col-12" id="userStats">' + splitString(key) + ': ' + user_stats[key] + '</div>'
    }
    
    HTMLUserStats.insertAdjacentHTML('afterbegin', userStats)
}