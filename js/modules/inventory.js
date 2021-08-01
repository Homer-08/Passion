import "./items.js"
let HTMLUserDressedItems = document.getElementById("user_dressed_items_id")
let HTMLUserItems = document.getElementById("user_items_id")


call()

function call() {
    
    show_user_dressed_items()
}

function fill_user_dressed_items() {

}

function show_user_dressed_items() {
    let user_dressed_items = ''
    let user_dressed_inventory = retrieve_data('user_dressed_inventory')

    user_dressed_items += "<div class='row'><div class='col dressed_item_cell'><img src =" + user_dressed_inventory.head.item_img_src
            +" class='item_icon'></div><div class='col dressed_item_cell'><img src = " + user_dressed_inventory.body.item_img_src
            + " class='item_icon'></div></div>"

    user_dressed_items += "<div class='row'><div class='col dressed_item_cell'><img src = " + user_dressed_inventory.hands.item_img_src
            +" class='item_icon'></div><div class='col dressed_item_cell'><img src = " + user_dressed_inventory.legs.item_img_src
            + " class='item_icon'></div></div>"

    user_dressed_items += "<div class='row'><div class='col dressed_item_cell'><img src = " + user_dressed_inventory.weapon.item_img_src
            +" class='item_icon'></div><div class='col dressed_item_cell'><img src = " + user_dressed_inventory.ring.item_img_src
            + " class='item_icon'></div></div>"

    user_dressed_items += "<div class='row'><div class='col dressed_item_cell'><img src = " + user_dressed_inventory.amulet.item_img_src
            +" class='item_icon'></div><div class='col dressed_item_cell'><img src = " + user_dressed_inventory.pet.item_img_src
            + " class='item_icon'></div></div>"
    HTMLUserDressedItems.insertAdjacentHTML('afterbegin', user_dressed_items)
}

function compress_data(obj_name, obj) {
     localStorage.setItem(obj_name, JSON.stringify(obj));
}
    
function retrieve_data(obj_name) {
     let retrievedObject = localStorage.getItem(obj_name);
     return JSON.parse(retrievedObject)
}