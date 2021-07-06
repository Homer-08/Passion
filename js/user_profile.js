export let user_profile_stats = {
    monsters_killed: 0,
    dead_count: 0,
    items_received: 0
}

export let user_stats = {
    level: 1,                   //user level
    gold: 0,                    //type of deffault money
    axe: 0,                      //types of rare money
    attack: 10,                 //user attack rating
    heal_point: 0,            //user heal points
    crit: 0,                    //crit power
    crit_chance: 0             //crit chance
}

export let user_dressed_items = [{}]
export let user_inventory_items = [{}]

let userStats = ""

let HTMLUserStats = document.getElementById("user_stats_HTML")

function showUserStats() {
    userStats = '<div class="col-12" id="userStats">' + 'Hero Level: ' + user_stats.level + '</div>' +
        '<div class="col-12" id="userStats">' + 'Gold: ' + user_stats.gold + '</div>' +
        '<div class="col-12" id="userStats">' + 'Axe: ' + user_stats.axe + '</div>' +
        '<div class="col-12" id="userStats">' + 'Hero Attack: ' + user_stats.attack + '</div>' +
        '<div class="col-12" id="userStats">' + 'Hero Health Point: ' + user_stats.heal_point + '</div>' +
        '<div class="col-12" id="userStats">' + 'Crit Damage: ' + user_stats.crit + '</div>' +
        '<div class="col-12" id="userStats">' + 'Crit Chance: ' + user_stats.crit_chance + '</div>'
}
 
showUserStats()

HTMLUserStats.insertAdjacentHTML('afterbegin', userStats)