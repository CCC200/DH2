export const Moves: {[k: string]: ModdedMoveData} = {
    // GSC backported moves
	crunch: {
		inherit: true,
		gen: 1,
		category: "Special",
	},
	dragonbreath: {
		inherit: true,
		gen: 1,
		category: "Special",
	},
	shadowball: {
		inherit: true,
		gen: 1,
		category: "Physical",
	},
	// Updated moves
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
    karatechop: {
		inherit: true,
		gen: 1,
        type: "Fighting",
	},
};
