const players = [
    { name: 'Ronaldo', position: 'forward' },
    { name: 'Messi', position: 'forward' },
    { name: 'Neymar', position: 'forward' },
    { name: 'Modric', position: 'midfielder' },
    { name: 'Kroos', position: 'midfielder' },
    { name: 'De Bruyne', position: 'midfielder' },
    { name: 'Alaba', position: 'defender' },
    { name: 'Ramos', position: 'defender' },
    { name: 'Varane', position: 'defender' },
    { name: 'Neuer', position: 'goalkeeper' },
    { name: 'Buffon', position: 'goalkeeper' },
    { name: 'Casillas', position: 'goalkeeper' }
]

const goalkeepers = players.filter(function(players) {
    return players.position == 'goalkeeper';
})

const defenders = players.filter(function(players) {
    return players.position == 'defender';
})

const midfielders = players.filter(function(players) {
    return players.position == 'midfielder';
})
const forwards = players.filter(function(players) {
    return players.position == 'midfielder';
})

