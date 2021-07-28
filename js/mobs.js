class Monster {
    constructor(id, name, damage, health_points, image_src) {
        this.id = id
        this.name = name
        this.damage = damage
        this.health_points = health_points
        this.image_src = image_src
    }
}

class Skelet extends Monster {
    constructor(id, name, damage, health_points, image_src) {
        super(id, name, damage, health_points, image_src)
    }
}

let all_mobs = []

let first_mob_for_first_dungeon = new Monster("1", "Elf", "1", "10", "/resources/images/temporary_image.png")
let second_mob_for_first_dungeon = new Monster("2", "Dragon", "5", "15", "/resources/images/temporary_image.png")
let third_mob_for_first_dungeon = new Monster("3", "Manticore", "10", "20", "/resources/images/temporary_image.png")
let fourth_mob_for_first_dungeon = new Monster("4", "Angel", "15", "25", "/resources/images/temporary_image.png")
let fifth_mob_for_first_dungeon = new Monster("5", "Demon", "20", "30", "/resources/images/temporary_image.png")
let sixth_mob_for_first_dungeon = new Monster("6", "Wolf", "25", "35", "/resources/images/temporary_image.png")
let seventh_mob_for_first_dungeon = new Monster("7", "Lion", "30", "40", "/resources/images/temporary_image.png")
let eighth_mob_for_first_dungeon = new Monster("8", "Gremlin", "35", "45", "/resources/images/temporary_image.png")
let ninth_mob_for_first_dungeon = new Monster("9", "Unicorn", "40", "50", "/resources/images/temporary_image.png")

all_mobs.push(first_mob_for_first_dungeon)
all_mobs.push(second_mob_for_first_dungeon)
all_mobs.push(third_mob_for_first_dungeon)
all_mobs.push(fourth_mob_for_first_dungeon)
all_mobs.push(fifth_mob_for_first_dungeon)
all_mobs.push(sixth_mob_for_first_dungeon)
all_mobs.push(seventh_mob_for_first_dungeon)
all_mobs.push(eighth_mob_for_first_dungeon)
all_mobs.push(ninth_mob_for_first_dungeon)

let first_mob_for_second_dungeon = new Monster("10", "Pix", "45", "55", "/resources/images/temporary_image.png")

all_mobs.push(first_mob_for_second_dungeon)

function push_data(var_name, _var) {
    localStorage.setItem(var_name, JSON.stringify(_var))
}

function pull_data(var_name) {
    let data = JSON.parse(localStorage.getItem(var_name))
    return data
}

push_data("allMobs", all_mobs)
