Vue.component('game-header', {
	template: [
		'<div class="col-12 p-3 mb-3 bg-secondary">',
			'<h1 class="text-center text-white">Video Games</h1>',
		'</div>'
	].join('')
});

Vue.component('game-add', {
	template: [
		'<div class="col-12">',			
			'<div class="input-group mb-3">',
				'<input class="form-control" type="text" v-model="titleGame" />',
				'<div class="input-group-append">',
					'<button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="emitNewGame">Add New Video Game</button>',
				'</div>',
			'</div>',
		'</div>'

	].join(''),
	data: function() {
		return {
			titleGame: null
		}
	},
	methods: {
		emitNewGame: function(){
			if (this.titleGame){
				this.$emit('new', { title: this.titleGame });
				this.titleGame = null;
			}
		}
	}
});

Vue.component('game-list', {
	props: ['games'],
	template: [
		'<ol>',
			'<game-item v-for="item in games" :game="item" :ket="item.id"></game-item>',
		'</ol>',
	].join('')

});

Vue.component('game-item', {
	props: ['game'],
	template: '<li>{{ game.title }}</li>'
});



const app = new Vue({

	el: "#app",
	template: [
		'<div class="container-fluid">',
			'<div class="row">',
				'<game-header></game-header>',
				'<div class="container">',
					'<div class="row">',
						'<game-add @new="addNewGame"></game-add>',
						'<game-list v-bind:games="games"></game-list>',
					'</div>',
				'</div>',
			'</div>',
		'</div>'
	].join(''),

	data: {
		games: [
			{title: 'PUBG' },
			{title: 'Fifa 2019' },
			{title: 'Candy Crush' }
		]
	},

	methods: {
		addNewGame: function(game){
			this.games.push(game);
		}
	}
})