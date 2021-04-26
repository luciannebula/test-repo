/*
    We are going to build a mini-game that will play out automatically as soon as we run the program.

    What is the game?
        - A good guy vs a bad guy, rpg style battle. "What!?", you might be asking. Ok, lets name this game
            "Demon Slayer", if you will.

    (Note: You can use this clip to get a better concept of what you're trying to have happen between your Demon Slayer &
        demon -> https://youtu.be/vHp0cFUB5as?t=61 
        Definitely don't watch the whole thing.)
    
    What does the program look like?
        - You'll simulate a battle between your Demon Slayer and a demon.
        - You'll run the program and the battle will play out in the terminal.
        - The Demon Slayer and the demon will take turns attacking one another. 
            The stats will be shown after each attack.
        - The demon attacks should have a random damage value, but the Demon Slayer should have a consistent
            attack value. 
        - As soon as either the Demon Slayer or the demon hitpoints reaches 0, the other wins the battle.
        - Use console.log() to show each attack, how many hitpoints either character loses, and the updated stats
            for the ogre and adventurer - also be sure to log the winner.
        - Think about when and where you might want to use a loop...
        - Maybe you want to create an object to keep track of other data that isn't about either character...? Hmmm...
        - I'm leaving the execution of this program a little bit more open ended than our previous mini-projects.

    What's the idea here? Why are we doing this?
        - We want to get a sense of how we can create objects and have them interact. Something to keep in mind is that
            when creating objects you are modeling things - think of our car exercise. The character you're modeling
            will have properties and methods (things they can do).
        

    To do this efficiently you should probably create some sort of plan beforehand. "Timewise, programming is 75–90% 
    planning and 10–25% actually typing code."
*/
function save() {
    // we make the object from things that we want to save
    var save ={

    } 

    
}

const mrMurk = {
    username: "Demon Slayer",
    health: 200,
    damage: 100,
    moves: {
        facesmash: 50,
        soulreap: 25,
        typhoonkick: 25,
    }
}
//console.log(mrmurk, "<--- Demon Slayer");
//console.log(mrmurk.moves.facesmash,"<--Facesmash")
// console.log(mrmurk.moves.soulreap,"<--Soul reap")
// console.log(mrmurk.moves.typhoonkick,"Typhoon Kick")

const enemy = {
    username: "Brutus",
    health: 250,
    damage: 50,
    moves: {
        soulbeam: 25,
        soulstrike: 25,

    }
}
//console.log(enemy,"<---Brutus");
//console.log(enemy.moves.soulbeam,"<--soul beam");
//console.log(enemy.moves.soulstrike,"<--soulstrike")

function randomAttack() {
    const attacks = Object.keys(mrMurk.moves)
    const attack = attacks[Math.floor(Math.random() * attacks.length)]
    const damage = mrMurk.moves[attack]
    console.log('mrMurk attacks with', attack, 'for', damage, 'damage')
    enemy.health -= damage
    if (enemy.health <= 0) {
        console.log('mrMurk wins flawless victory')
        return
    } else {
        randomEnemyAttack()
    }
}
function randomEnemyAttack() {
    const attacks = Object.keys(enemy.moves)
    const attack = attacks[Math.floor(Math.random() * attacks.length)]
    const damage = enemy.moves[attack]
    console.log('enemy attacks with', attack, 'for', damage, 'damage')
    mrMurk.health -= damage
    if (mrMurk.health <= 0) {
        console.log('Enemy wins flawless victory')
        return
    } else {
        randomAttack()
    }
}
randomEnemyAttack()