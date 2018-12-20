$(function () {
	getPlayers()
})

function getPlayers() {
	$('a#players-list').on('click', function (event) {
		event.preventDefault()
		console.log(event);

		$.ajax({
			url: this.href,
			method: 'get',
			dataType: 'json'
		}).done(function (response) {

			let playerDataString = JSON.stringify(response)

			let playerDataDiv = $('div#players-data')
			playerDataDiv.html(playerDataString)


		})
	})
}

function getPlayerStats() {
	// listening for click of 
	$('p.player-card').on('click', function (event) {
		// 
	})
}

class Player {
	constructor(obj) {
		this.name = obj.name
		this.age = obj.age
		this.address = obj.address
		this.sports = obj.sports
		this.positions = obj.positions
	}
}

Player.prototype.playerHTML = function () {
	`<p class='player-card' id=${this.id}>${this.name}</p>`
}

Player.prototype.playerStats = function () {
	`<p class='player-card' id=${this.id}>${this.name}</p>`
}


function newPlayer() {
	$.ajax({
		url: '/new_player',
		method: 'get'
	}).done(function (response) {


		debugger;
	})
}