import { compress_data } from '/js/data_manipulation.js'

class Monster {
    constructor(id, name, damage, health_points, image_src) {
        this.id = id
        this.name = name
        this.damage = damage
        this.health_points = health_points
        this.image_src = image_src
    }
}

let all_mobs = []

let first_mob_for_first_dungeon = new Monster("1", "Elf", "1", "10", "/resources/images/mobs/mob_one.png")
let second_mob_for_first_dungeon = new Monster("2", "Dragon", "5", "15", "/resources/images/mobs/mob_one.png")
let third_mob_for_first_dungeon = new Monster("3", "Manticore", "10", "20", "/resources/images/mobs/mob_one.png")
let fourth_mob_for_first_dungeon = new Monster("4", "Angel", "15", "25", "/resources/images/mobs/mob_one.png")
let fifth_mob_for_first_dungeon = new Monster("5", "Demon", "20", "30", "/resources/images/mobs/mob_one.png")
let sixth_mob_for_first_dungeon = new Monster("6", "Wolf", "25", "35", "/resources/images/mobs/mob_one.png")
let seventh_mob_for_first_dungeon = new Monster("7", "Lion", "30", "40", "/resources/images/mobs/mob_one.png")
let eighth_mob_for_first_dungeon = new Monster("8", "Gremlin", "35", "45", "/resources/images/mobs/mob_one.png")
let ninth_mob_for_first_dungeon = new Monster("9", "Unicorn", "40", "50", "/resources/images/mobs/mob_one.png")

all_mobs.push(first_mob_for_first_dungeon)
all_mobs.push(second_mob_for_first_dungeon)
all_mobs.push(third_mob_for_first_dungeon)
all_mobs.push(fourth_mob_for_first_dungeon)
all_mobs.push(fifth_mob_for_first_dungeon)
all_mobs.push(sixth_mob_for_first_dungeon)
all_mobs.push(seventh_mob_for_first_dungeon)
all_mobs.push(eighth_mob_for_first_dungeon)
all_mobs.push(ninth_mob_for_first_dungeon)

compress_data("allMobs", all_mobs)
