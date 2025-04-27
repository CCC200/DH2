export const Rulesets: {[k: string]: ModdedFormatData} = {
    standard: {
        inherit: true,
        onValidateTeam(team) {
			/**@type {{[k: string]: true}} */
			const tiers = ['Uber ', 'OU ', 'UUBL ', 'UU ', 'NU ', 'PU ', 'ZU ', 'NFE '];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!tiers.includes(template.tier)) {
					return [set.species + ' is not legal in Polished Crystal.'];
				}
			}
		},
    }
};
