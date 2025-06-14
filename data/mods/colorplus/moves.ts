export const Moves: {[k: string]: ModdedMoveData} = {
    bite: {
		inherit: true,
		gen: 1,
        type: "Dark",
		category: "Special",
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		desc: "Has a 10% chance to make the target flinch.",
		shortDesc: "10% chance to make the target flinch.",
	},
	crunch: {
		inherit: true,
		gen: 1,
		type: "Dark",
		category: "Special",
	},
    karatechop: {
		inherit: true,
		gen: 1,
        type: "Fighting",
	},
};
