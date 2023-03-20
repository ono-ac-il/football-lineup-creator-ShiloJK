
const players = [
    ,
    { name: 'mbappe', position: 'striker' },
    { name: 'holland', position: 'striker' },
    { name: 'benzema', position: 'striker' },
    { name: 'Ronaldo', position: 'forward' },
    { name: 'Messi', position: 'forward' },
    { name: 'Neymar', position: 'forward' },
    { name: 'Modric', position: 'midfielder' },
    { name: 'Kroos', position: 'midfielder' },
    { name: 'De Bruyne', position: 'midfielder' },
    { name: 'Alaba', position: 'defender' },
    { name: 'Ramos', position: 'defender' },
    { name: 'Varane', position: 'defender' },
    { name: 'dumfries', position: 'defender' },
    { name: 'davies', position: 'defender' },
    { name: 'hakimi', position: 'defender' },
    { name: 'Neuer', position: 'goalkeeper' },
    { name: 'Buffon', position: 'goalkeeper' },
    { name: 'Casillas', position: 'goalkeeper' }
]

const goalkeepers = players.filter(function (players) {
    return players.position == 'goalkeeper';
})

const defenders = players.filter(function (players) {
    return players.position == 'defender';
})

const midfielders = players.filter(function (players) {
    return players.position == 'midfielder';
})
const forwards = players.filter(function (players) {
    return players.position == 'forward';
})
const strikers = players.filter(function (players) {
    return players.position == 'striker';
})

const mappedGoalkeepers = goalkeepers.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});
mappedGoalkeepers.push(`<option value=""></option>`)
document.getElementById('pos1').innerHTML = mappedGoalkeepers.join('');

const mappeddefenders = defenders.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});
mappeddefenders.push(`<option value=""></option>`)

document.getElementById('def1').innerHTML = mappeddefenders.join('');
document.getElementById('def2').innerHTML = mappeddefenders.join('');
document.getElementById('def3').innerHTML = mappeddefenders.join('');
document.getElementById('def4').innerHTML = mappeddefenders.join('');
document.getElementById('def5').innerHTML = mappeddefenders.join('');

const mappedMidfielders = midfielders.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});
mappedMidfielders.push(`<option value=""></option>`)
document.getElementById('mid2').innerHTML = mappedMidfielders.join('');
document.getElementById('mid3').innerHTML = mappedMidfielders.join('');
document.getElementById('mid4').innerHTML = mappedMidfielders.join('');

const mappedForwards = forwards.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});
mappedForwards.push(`<option value=""></option>`)
document.getElementById('mid1').innerHTML = mappedForwards.join('');
document.getElementById('mid5').innerHTML = mappedForwards.join('');

const mappedStrikers = strikers.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});
mappedStrikers.push(`<option value=""></option>`)
document.getElementById('st1').innerHTML = mappedStrikers.join('');
document.getElementById('st2').innerHTML = mappedStrikers.join('');
document.getElementById('st3').innerHTML = mappedStrikers.join('');

const btn = document.getElementById('sum');
function lineUpConsole() {
    console.log("                           " + document.getElementById("pos1").value) +
        console.log("   " + document.getElementById("def1").value + "        " + document.getElementById("def2").value + "        " + document.getElementById("def3").value + "        " + document.getElementById("def4").value + "        " + document.getElementById("def5").value)
    console.log("   " + document.getElementById("mid1").value + "        " + document.getElementById("mid2").value + "        " + document.getElementById("mid3").value + "        " + document.getElementById("mid4").value + "        " + document.getElementById("mid5").value)
    console.log("             " + document.getElementById("st1").value + "        " + document.getElementById("st2").value + "        " + document.getElementById("st3").value)
}
btn.addEventListener('click', lineUpConsole);
