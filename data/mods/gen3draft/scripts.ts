export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen3',
	init() {
		// Fix ability list
		for(const i in this.data.Pokedex) {
			this.modData('Pokedex', i).abilities = this.species.get(i).abilities;
		}
	},
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ["S", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
	},
};
