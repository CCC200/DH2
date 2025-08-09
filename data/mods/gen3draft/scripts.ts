export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen3',
	init() {
		// Fix ability list, move desc, items
		for(const i in this.data.Pokedex) {
			const species = this.species.get(i);
			this.modData('Pokedex', i).abilities = species.abilities;
		}
		for(const i in this.data.Moves) {
			const move = this.moves.get(i);
			this.modData('Moves', i).desc = move.desc;
			this.modData('Moves', i).shortDesc = move.shortDesc;
		}
		for(const i in this.data.Items) {
			const item = this.items.get(i);
			this.modData('Items', i).desc = item.desc; 
		}
	},
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ["S", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
	},
};
