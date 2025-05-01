export const Rulesets: {[k: string]: ModdedFormatData} = {
    standardnatdex: {
        inherit: true,
		ruleset: [
			'Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause',
			'Evasion Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod',
			'Freeze Clause Mod', 'Terastal Clause',
		],
        onValidateTeam(team) {
			/**@type {{[k: string]: true}} */
			const tiers = ['Uber ', 'OU ', 'UUBL ', 'UU ', 'NU ', 'PU ', 'ZU ', 'NFE ',  'LC '];
			for (const set of team) {
				let mon = this.dex.species.get(set.species);
				if (!tiers.includes(mon.tier)) {
					return [set.species + ' is not legal in Polished Crystal.'];
				}
			}
		},
    },
	littlecup: {
		inherit: true,
		onValidateTeam(team) {
			for(const set of team) {
				if(this.dex.species.get(set.species).tier !== 'LC ') {
					return [set.species + ' is not available in Little Cup.'];
				}
			}
		},
	},
};
