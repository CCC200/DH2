export const Rulesets: {[k: string]: ModdedFormatData} = {
    standarddraft: {
        inherit: true,
        onValidateTeam(team) {
            const tiers = ["S", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
            for(const set of team) {
                let template = this.dex.species.get(set.species);
                if(!tiers.includes(template.tier)) return [
                    `${set.species} is not in the draft list.`
                ]; 
            }
        },
	},
};
