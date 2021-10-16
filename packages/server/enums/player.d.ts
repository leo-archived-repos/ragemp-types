declare module 'rage-server' {
	export const enum PlayerActions {
		CLIMBING = 'climbing',
		IN_COVER = 'in_cover',
		AIMING_FROM_COVER = 'aiming_from_cover',
		DIVING = 'diving',
		ENTERING_VEHICLE = 'entering_vehicle',
		EXITING_VEHICLE = 'exiting_vehicle',
		JUMPING = 'jumping',
		MOVING = 'moving',
		MOVING_AIMING = 'moving_aiming',
		MOVING_RELOADING = 'moving_reloading',
		PARACHUTING = 'parachuting',
		RAGDOLL = 'ragdoll',
		AIMING = 'aiming',
		RELOADING = 'reloading',
		STOPPED = 'stopped'
	}

	export const enum ClothesComponent {
		HEAD = 0,
		BEARD = 1,
		HAIR = 2,
		TORSO = 3,
		LEGS = 4,
		HANDS = 5,
		FOOT = 6,
		NONE = 7,
		ACCESSORIES_1 = 8,
		ACCESSORIES_2 = 9,
		MASK = 10,
		DECALS = 11,
		AUXILIARY = 12
	}

	export const enum HeadOverlay {
		BLEMISHES = 0,
		FACIAL_HAIR = 1,
		EYEBROWS = 2,
		AGEING = 3,
		MAKEUP = 4,
		BLUSH = 5,
		COMPLEXION = 6,
		SUN_DAMAGE = 7,
		LIPSTICK = 8,
		FRECKLES = 9,
		CHEST_HAIR = 10,
		BODY_BLEMISHES = 11,
		ADD_BODY_BLEMISHES = 12
	}

	export const enum PlayerProp {
		HELMET = 0,
		GLASSES = 1,
		EAR_ACCESSORY = 2
	}
}
