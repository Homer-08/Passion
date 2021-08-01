class Swords {
    constructor(id, title, deffault_attack, rarity, cost, image_src){
        this.id = id
        this.title = title
        this.deffault_attack = deffault_attack
        this.rarity = rarity
        this.cost = cost
        this.image_src = image_src
    }
}

let game_items = []
let wooden_sword = new Swords(1, 'Wooden Sword', 10, "Common", 30, "");

call()

function call() {
    compress_all_items_to_array()
    compress_data("game_items", game_items)
}

function compress_all_items_to_array() {
    game_items.push(wooden_sword)
}

function compress_data(obj_name, obj) {
    localStorage.setItem(obj_name, JSON.stringify(obj));
}

function retrieve_data(obj_name) {
    let retrievedObject = localStorage.getItem(obj_name);
    return JSON.parse(retrievedObject)
}