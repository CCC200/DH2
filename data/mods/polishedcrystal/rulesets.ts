export const Rulesets: {[k: string]: ModdedFormatData} = {
    standardnatdex: {
        inherit: true,
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
    }
};
