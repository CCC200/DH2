export const Moves: {[k: string]: ModdedMoveData} = {
    bite: {
		inherit: true,
        type: "Dark",
		category: "Special",
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		desc: "Has a 10% chance to make the target flinch.",
		shortDesc: "10% chance to make the target flinch.",
	},
    karatechop: {
		inherit: true,
        type: "Fighting",
	},
};
