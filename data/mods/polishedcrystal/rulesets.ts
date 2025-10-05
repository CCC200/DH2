export const Rulesets: {[k: string]: ModdedFormatData} = {
    standard: {
        inherit: true,
		ruleset: [
			// Standard rules
			'Obtainable', '+Past', 'Sketch Post-Gen 7 Moves', 'Species Clause', 'Nickname Clause', 'OHKO Clause',
			'Evasion Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod',
			// Polished specific
			'Sleep Clause Mod', 'Freeze Clause Mod', 'Terastal Clause', 'DryPass Clause',
		],
		// Check real tiers of cosmetic formes
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if(species.isCosmeticForme) {
				const baseSpecies = this.dex.species.get(this.toID(species.baseSpecies));
				if(this.ruleTable.isBannedSpecies(baseSpecies)) {
					return[`${baseSpecies} is tagged ${baseSpecies.tier}, which is banned.`];
				}
			}
		},
    },
};
