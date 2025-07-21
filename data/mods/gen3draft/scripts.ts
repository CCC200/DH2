export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen3',
	init() {
		// Fix ability list & move desc
		for(const i in this.data.Pokedex) {
			this.modData('Pokedex', i).abilities = this.species.get(i).abilities;
		}
		for(const i in this.data.Moves) {
			const move = this.moves.get(i);
			this.modData('Moves', i).desc = move.desc;
			this.modData('Moves', i).shortDesc = move.shortDesc;
		}
	},
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ["S", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
	},
};
