let HTMLUserStats = document.getElementById("user_stats_HTML")

export let user_profile_stats = {
    monsters_killed: 0,
    dead_count: 0,
    items_received: 0
}

export let user_stats = {
    level: 1,                   //user level
    gold: 0,                    //type of deffault money
    axe: 0,                     //types of rare money
    attack: 10,                 //user attack rating
    heal_point: 0,              //user heal points
    crit: 0,                    //crit power
    crit_chance: 0              //crit chance
}

export let user_dressed_items = [{}]
export let user_inventory_items = [{}]

function splitString(stringToSplit) {
    var result = stringToSplit.split('_')

    for (var i = 0; i <= result.length - 1; i++) {
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1)
    }

    return result.join(' ')
}

function showUserStats() {
    let userStats = ""

    for (var key in user_stats) {
        userStats += '<div class="col-12" id="userStats">' + splitString(key) + ': ' + user_stats[key] + '</div>'
    }
    
    HTMLUserStats.insertAdjacentHTML('afterbegin', userStats)
}
 
showUserStats()

