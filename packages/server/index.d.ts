/// <reference types="@ragemp/types-shared"/>
/// <reference path="vehicle_hashes.d.ts" />

import { VehicleHash } from './vehicle_hashes';

declare module 'rage-server' {
	import * as shared from 'rage-shared';

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

	export const enum VehicleSeat {
		DRIVER,
		PASSENGER_1,
		PASSENGER_2,
		PASSENGER_3,
		PASSENGER_4,
		PASSENGER_5,
		PASSENGER_6,
		PASSENGER_7,
		PASSENGER_8,
		PASSENGER_9,
		PASSENGER_10,
		PASSENGER_11,
		PASSENGER_12,
		PASSENGER_13,
		PASSENGER_14,
		PASSENGER_15,
		PASSENGER_16
	}

	export type PlayerWeaponMp = {
		current: number;
		all: number;
		hash: string;
		name: string;
	};

	export const enum VehicleNumberPlateType {
		BLUE_WHITE = 0,
		YELLOW_BLACK = 1,
		YELLOW_BLUE = 2,
		BLUE_WHITE2 = 3,
		BLUE_WHITE3 = 4,
		YANKTON = 5
	}

	export const enum ColshapeType {
		CIRCLE = 'circle',
		CUBOID = 'cuboid',
		POLYGON = 'polygon',
		RECTANGLE = 'rectangle',
		SPHERE = 'sphere',
		TUBE = 'tube'
	}

	export const enum Weather {
		BLIZZARD = 'BLIZZARD',
		CLEAR = 'CLEAR',
		CLEARING = 'CLEARING',
		CLOUDS = 'CLOUDS',
		EXTRA_SUNNY = 'EXTRASUNNY',
		FOGGY = 'FOGGY',
		OVERCAST = 'OVERCAST',
		RAIN = 'RAIN',
		SMOG = 'SMOG',
		SNOW_LIGHT = 'SNOWLIGHT',
		THUNDER = 'THUNDER',
		XMAS = 'XMAS'
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

	export interface EntityMpPool<T> {
		/**
		 * This property is used to get the element count of a pool.
		 */
		readonly length: number;

		/**
		 * A property to get an element pool size, useful to be used in explicit array size declaration or manual for loop size (non [foreach](https://wiki.rage.mp/index.php?title=Pool::forEach)).
		 */
		readonly size: number;

		// TODO: wiki
		apply(callingFunction: (...args: any[]) => void, ...args: any[]): void;

		/**
		 * This function is used to return an element from a pool at an ID.
		 *
		 * @param id Element ID, what you need get from the pool.
		 */
		at(id: number): T;

		/**
		 * This function is used for check, exists entity with ID in pool or not.
		 *
		 * @param entity Entity ID or the entity itself, what you wanna check in pool.
		 */
		exists(entity: T | number): boolean;

		/**
		 * This function is used for calling a function for each element in a pool.
		 *
		 * @param callingFunction function what will be called
		 */
		forEach(callingFunction: (entity: T) => void): void;

		/**
		 * This function is used to call a function for each elements in the pool.
		 *
		 * @param dimension Int, dimension
		 * @param callingFunction Function, what will be called.
		 */
		forEachInDimension(dimension: number, callingFunction: (entity: T) => void): void;

		/**
		 * This function is used for calling a function for each element in a pool, but only if it in range of position.
		 *
		 * @param callingFunction Function, what will be called.
		 */
		forEachInRange(position: shared.Vector3Mp, range: number, callingFunction: (entity: T) => void): void;
		forEachInRange(position: shared.Vector3Mp, range: number, dimension: number, callingFunction: (entity: T) => void): void;

		/**
		 * Sorts the closest entities to a certain specified point in the entities pool.
		 *
		 * @param position Vector3
		 * @param limit Int (Default is 1)
		 */
		getClosest(position: shared.Vector3Mp, limit?: number): T | T[];

		/**
		 * Gets the closest set of entities to a position in the defined dimension.
		 *
		 * @param position Vector3
		 * @param dimension Int
		 * @param limit Int
		 */
		getClosestInDimension(position: shared.Vector3Mp, dimension: number, limit?: number): T | T[];

		/**
		 * This function converts a pool to an array. If you don't need to create a new array every time, use [Pool::toArrayFast](https://wiki.rage.mp/index.php?title=Pool::toArrayFast).
		 */
		toArray(): T[];

		/**
		 * Same as [Pool::toArray](https://wiki.rage.mp/index.php?title=Pool::toArray) except it doesn't create a new array each time and instead updates it and returns the same array.
		 */
		toArrayFast(): T[];
	}

	export interface EntityMp {
		/**
		 * This property is used for getting an entity ID. The ID is a unique identifier for the entity.
		 *
		 * A server-side ID is NOT the same as a client-side ID. Use [remoteId](https://wiki.rage.mp/index.php?title=Entity::remoteId) property if you want it to match the server-side ID.
		 */
		readonly id: number;

		/**
		 * Returns type of entity.
		 */
		readonly type: shared.EntityType;

		/**
		 * This property using for setting or getting entity alpha.
		 */
		alpha: number;

		/**
		 * This property is used to get or set entity data.
		 */
		data: any;

		/**
		 * This property used for setting or getting an entity's dimension. The dimension determines who the entity is visible to.
		 */
		dimension: number;

		/**
		 * This property is used for setting or getting an entity's model.
		 */
		model: number;

		/**
		 * This property gets/sets the entity position.
		 */
		position: shared.Vector3Mp;

		/**
		 * Retrieves the custom data from the entity.
		 *
		 * @param name String
		 */
		getVariable(name: string): any | undefined;

		/**
		 * Set custom data to an entity.
		 *
		 * @param name String
		 * @param value Any
		 */
		setVariable(name: string, value: any): void;

		/**
		 * Gets the distance between two entities.
		 *
		 * @param position Vector3
		 */
		dist(position: shared.Vector3Mp): number;

		/**
		 * Function that gets the squared distance between two entities.
		 *
		 * @param position Vector3
		 */
		distSquared(position: shared.Vector3Mp): number;

		/**
		 * This function is used to destroy a created entity.
		 */
		destroy(): void;
	}

	export interface PlayerMp extends EntityMp {
		/**
		 * This property returns player action.
		 */
		readonly action: PlayerActions;

		/**
		 * This property is the aim target of a player.
		 *
		 * If player currently [isn't aiming](https://wiki.rage.mp/index.php?title=Player::isAiming), this property will be last aim target.
		 */
		readonly aimTarget: PlayerMp;

		/**
		 * Gets the player's weapon hash and ammo.
		 */
		readonly allWeapons: number[];

		// TODO: wiki
		readonly faceFeatures: any;

		/**
		 * This property returns the player's primary hair color.
		 */
		readonly hairColor: number;

		/**
		 * This property returns the player's secondary hair color.
		 */
		readonly hairHighlightColor: number;

		/**
		 * This property returns the player's Social club ID.
		 */
		readonly rgscId: string;

		/**
		 * This property returns the player's IP address.
		 */
		readonly ip: string;

		/**
		 * This property returns player's client serial.
		 */
		readonly serial: string;

		/**
		 * This property returns true or false of player aim state.
		 */
		readonly isAiming: boolean;

		/**
		 * This property returns true or false of player climbing state.
		 */
		readonly isClimbing: boolean;

		/**
		 * This property returns true or false of player vehicle enter state.
		 */
		readonly isEnteringVehicle: boolean;

		/**
		 * 	This property returns true or false of player cover state.
		 */
		readonly isInCover: boolean;

		// TODO: wiki
		readonly isInMelee: boolean;

		/**
		 * This function returns 1 or 0 of player jumping state.
		 */
		readonly isJumping: boolean;

		/**
		 * This property returns true or false of player vehicle leave state.
		 */
		readonly isLeavingVehicle: boolean;

		/**
		 * Returns whether the specified ped is on ladder.
		 */
		readonly isOnLadder: boolean;

		/**
		 * Returns whether the specified ped is reloading.
		 */
		readonly isReloading: boolean;

		/**
		 * This property returns players packet loss.
		 */
		readonly packetLoss: number;

		/**
		 * This property returns players ping.
		 */
		readonly ping: number;

		/**
		 * This property returns the player's current vehicle seat.
		 */
		readonly seat: VehicleSeat;

		/**
		 * This property returns players social club name.
		 */
		readonly socialClub: string;

		/**
		 * Returns array of streamed-in players for the player.
		 */
		readonly streamedPlayers: PlayerMp[];

		/**
		 * Returns the vehicle object the player is currently sitting in.
		 */
		readonly vehicle: VehicleMp;

		/**
		 * This property returns players' current weapon.
		 */
		readonly weapon: number;

		/**
		 * Gets ammo from the current player's weapon
		 */
		readonly weaponAmmo: number;

		/**
		 * Gets current player weapons
		 */
		readonly weapons: PlayerWeaponMp;

		/**
		 * Property for getting or setting player name.
		 */
		name: string;

		/**
		 * This property using for getting or setting player armour.
		 */
		armour: number;

		/**
		 * Sets/gets the players eye color.
		 */
		eyeColor: number;

		/**
		 * This property using for getting or setting player rotation.
		 */
		heading: number;

		/**
		 * This property using for getting or setting player health.
		 */
		health: number;

		/**
		 * This property is used to return all active voice listeners as array, which got added by [Player::enableVoiceTo](https://wiki.rage.mp/index.php?title=Player::enableVoiceTo).
		 */
		voiceListeners: PlayerMp[];

		/**
		 * This function bans the player from your server.
		 *
		 * The ban reason doesn't display for the player, you need to use something else to display it for the player. Also, all bans that use this function are cleared once the server restarts. You need to save the bans yourself if you want them to stay after restarting your server.
		 *
		 * @param reason Reason
		 */
		ban(reason: string): void;

		/**
		 * `FROM SERVER` This function calls a client-side event for the selected player
		 *
		 * `FROM CLIENT` For Peer 2 Peer connections.
		 *
		 * The current client can call an event on another client's scriptside and that other client can handle that event.
		 *
		 * @param eventName The event name that will be called
		 * @param args Any arguments, what should be sent to client. Supports entities, strings, numbers and booleans. (Objects and Arrays should be packed to JSON format.) Arguments has to be packed in an array.
		 */
		call(eventName: string, args?: any[]): void;

		/**
		 * This function calls the specified player's clientside Remote prodecure call (RPC) event and expects a callback.
		 *
		 * @param eventProcName Procedure Name
		 * @param args Args
		 */
		callProc(eventProcName: string, args?: any[]): Promise<any>;

		/**
		 * This function calls all streamed in players' clientside from the specified player passing data.
		 *
		 * @param includeSelf Calls the specified player's clientside also along with the streamed players to him
		 * @param eventName Event Name
		 * @param args Args
		 */
		callToStreamed(includeSelf: boolean, eventName: string, args?: any[]): void;

		/**
		 * This function triggers a client-side event for the selected player unreliably, which means it will be affected by potential packet loss, but it will be triggered way more faster, useful for when you need frequent triggers.
		 *
		 * @param eventName Event Name
		 * @param args Args
		 */
		callUnreliable(eventName: string, args?: any[]): void;

		// TODO: wiki
		cancelPendingProc(eventProcName: string): void;

		// TODO: wiki
		clearDecorations(): void;

		/**
		 * This function return a hash of player clothes.
		 *
		 * @param component [Components](https://wiki.rage.mp/index.php?title=Player::getClothes)
		 */
		getClothes(component: ClothesComponent | number): {
			drawable: number;
			texture: number;
			palette: number;
		};

		/**
		 * This function gets the tattoo (decoration) from a collection specified.
		 *
		 * @param collection [Collections](https://github.com/root-cause/v-tattoos)
		 */
		getDecoration(collection: number): number;

		/**
		 * Gets the various freemode face features, e.g. nose length, chin shape. Scale ranges from -1.0 to 1.0. Index can be 0 - 19.
		 *
		 * @param index [Index](https://wiki.rage.mp/index.php?title=Player::getFaceFeature)
		 */
		getFaceFeature(index: number): number;

		// TODO: wiki
		getHeadBlend(): {
			shapes: number[];
			skins: number[];
			shapeMix: number;
			skinMix: number;
			thirdMix: number;
		};

		// TODO: wiki
		getHeadOverlay(overlay: HeadOverlay | number): shared.Array4d;

		/**
		 * This function returns a prop of player from ID.
		 *
		 * @param prop [Props](https://wiki.rage.mp/index.php?title=Player::getProp)
		 */
		getProp(prop: PlayerProp | number): {
			drawable: number;
			texture: number;
		};

		/**
		 * Get the weapon's ammo.
		 *
		 * @param weapon Weapon Hash
		 */
		getWeaponAmmo(weapon: shared.WeaponHash | shared.HashOrString): number;

		/**
		 * This function gives a weapon(see) for the player.
		 *
		 * @param weaponHash Weapon Hash
		 * @param ammo Ammo
		 */
		giveWeapon(weaponHash: shared.WeaponHash | shared.HashOrString | shared.WeaponHash[] | shared.HashOrString[], ammo: number): void;

		// TODO: wiki
		hasPendingProc(eventProcName: string): void;

		/**
		 * Invokes specified [native](https://cdn.rage.mp/public/natives/) function
		 *
		 * @param hash Hash
		 * @param args Args
		 */
		invoke(hash: string, ...args: any[]): void;

		/**
		 * This function is used for check, player is located in stream distance for another player or not.
		 *
		 * @param player Player
		 */
		isStreamed(player: PlayerMp): boolean;

		// TODO: wiki
		isStreamedFor(...args: any[]): boolean;

		/**
		 * Kicks a player from the server.
		 *
		 * @param reason This message does not show up for the player being kicked
		 */
		kick(reason: string): void;

		/**
		 * Silently kicks the player which will then reconnect them back to the server. Useful for quick reconnects without going through the UI. The client will act as if it has timed out.
		 */
		kickSilent(): void;

		/**
		 * This function sends a notification to the player.
		 *
		 * You can use the colour codes found here: [Fonts and colors](https://wiki.rage.mp/index.php?title=Fonts_and_Colors)
		 *
		 * @param message Message
		 */
		notify(message: string): void;

		/**
		 * This functions writes a chat message to player.
		 *
		 * @param message Text what should be output in player chat.
		 */
		outputChatBox(message: string): void;

		/**
		 * Starts animation
		 *
		 * @param dict [Animation List](https://wiki.rage.mp/index.php?title=Animations)
		 * @param name Animation Name
		 * @param speed Animation Speed
		 * @param flag [Animation Flags](https://wiki.rage.mp/index.php?title=Player::playAnimation)
		 */
		playAnimation(dict: string, name: string, speed: number, flag: number): void;

		/**
		 * This function makes the player play a scenario.
		 *
		 * @param scenario [Scenario List](https://wiki.rage.mp/index.php?title=Scenarios)
		 */
		playScenario(scenario: string): void;

		/**
		 * This function puts player into vehicle.
		 *
		 * You can't put player in vehicle immediately after creating vehicle, use timeout (200 ms will be fine)
		 *
		 * @param vehicle Vehicle
		 * @param seat Seat Number
		 */
		putIntoVehicle(vehicle: VehicleMp, seat: VehicleSeat | number): void;

		/**
		 * This functions eject player from vehicle.
		 */
		removeFromVehicle(): void;

		// TODO: wiki
		removeObject(object: any): void;

		/**
		 * This function removes a weapon of player. Weapon's hashes list
		 *
		 * @param weaponHash [Weapon Hash](https://wiki.rage.mp/index.php?title=Weapons)
		 */
		removeWeapon(weaponHash: shared.WeaponHash | shared.HashOrString): void;

		/**
		 * Removes all weapons from the player
		 */
		removeAllWeapons(): void;

		// TODO: wiki
		resetWeapon(...args: any[]): void;

		/**
		 * This function set clothing for player.
		 *
		 * Alternative of client-side function: [Player::setComponentVariation](https://wiki.rage.mp/index.php?title=Player::setComponentVariation)
		 *
		 * @param component ClothesComponent
		 * @param drawable Number
		 * @param texture Texture
		 * @param palette Palette
		 */
		setClothes(component: ClothesComponent | number, drawable: number, texture: number, palette: number): void;

		/**
		 * This method set player customization (NB: This resets your weapons also).
		 *
		 * IMPORTANT! faceFeatures array must contain 20 elements
		 */
		setCustomization(
			gender: boolean,
			shapeFirst: number,
			shapeSecond: number,
			shapeThird: number,
			skinFirst: number,
			skinSecond: number,
			skinThird: number,
			shapeMix: number,
			skinMix: number,
			thirdMix: number,
			eyeColor: number,
			hairColor: number,
			hightlightColor: number,
			faceFeatures: number[]
		): void;

		/**
		 * Applies an Item from a PedDecorationCollection to a player. These include tattoos and shirt decals.
		 *
		 * @param collection Model hash or name
		 * @param overlay Model hash or name
		 */
		setDecoration(collection: number, overlay: number): void;

		/**
		 * Sets the various freemode face features, e.g. nose length, chin shape. Scale ranges from -1.0 to 1.0. Index can be 0 - 19.
		 */
		setFaceFeature(index: number, scale: number): void;

		/**
		 * Used for freemode (online) characters.
		 *
		 * @param firstColor First Color
		 * @param secondColor Second Color
		 */
		setHairColor(firstColor: number, secondColor: number): void;

		// TODO: wiki
		setHeadBlend(
			shapeFirst: number,
			shapeSecond: number,
			shapeThird: number,
			skinFirst: number,
			skinSecond: number,
			skinThird: number,
			shapeMix: number,
			skinMix: number,
			thirdMix: number
		): void;

		/**
		 * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
		 *
		 * First and second color you can take in the list of hair colors.
		 *
		 * [List of colors](https://wiki.gtanet.work/index.php?title=Hair_Colors)
		 *
		 * To disable any overlay use 255 as index.
		 */
		setHeadOverlay(overlay: HeadOverlay | number, value: shared.Array4d): void;

		/**
		 * This function sets the prop for the player
		 */
		setProp(prop: PlayerProp | number, drawable: number, texture: number): void;

		/**
		 * Sets the amount of ammo for the selected weapon
		 *
		 * @param weapon Weapon Hash
		 * @param ammo Ammo
		 */
		setWeaponAmmo(weaponHash: shared.WeaponHash | shared.HashOrString, ammo: number): void;

		/**
		 * This function spawn a player.
		 *
		 * @param position Vector3
		 */
		spawn(position: shared.Vector3Mp): void;

		/**
		 * This method stops animation of the player
		 */
		stopAnimation(): void;

		/**
		 * Update player head blend data
		 */
		updateHeadBlend(shapeMix: number, skinMix: number, thirdMix: number): void;

		/**
		 * This function is used to enable voice listening to a certain player.
		 *
		 * @param targetPlayer The Player you want to listen to.
		 */
		enableVoiceTo(targetPlayer: PlayerMp): void;

		/**
		 * This function is used to disable voice listening to a certain player.
		 *
		 * @param targetPlayer The Player you want to stop listen to.
		 */
		disableVoiceTo(targetPlayer: PlayerMp): void;

		// TODO: wiki
		eval(code: string): void;
	}

	export interface VehicleMp extends EntityMp {
		/**
		 * This functions using for getting or setting body health.
		 */
		readonly bodyHealth: number;

		/**
		 * This property returns brake state.
		 */
		readonly brake: boolean;

		/**
		 * This functions using for getting engine health.
		 *
		 * For edit health use [Vehicle::repair](https://wiki.rage.mp/index.php?title=Vehicle::repair)
		 */
		readonly engineHealth: number;

		// TODO: wiki
		readonly extras: boolean[];

		/**
		 * This property returns high beams state.
		 */
		readonly highbeams: boolean;

		/**
		 * This property returns horn state.
		 */
		readonly horn: boolean;

		// TODO: wiki
		readonly mods: number[];

		/**
		 * This property returns rocket boost state (voltic2).
		 */
		readonly rocketBoost: boolean;

		/**
		 * This property returns siren state.
		 */
		readonly siren: boolean;

		/**
		 * This property returns steer angle value: from -1 to 1.
		 */
		readonly steerAngle: boolean;

		// TODO: wiki
		readonly streamedPlayers: PlayerMp[];

		/**
		 * This property using for getting vehicle velocity.
		 */
		readonly velocity: shared.Vector3Mp;

		// TODO: wiki
		dashboardColor: number;

		/**
		 * The getter property, says that the vehicle is dead or not The Setter property, sets the vehicle dead state.
		 */
		dead: boolean;

		/**
		 * This property returns engine state.
		 */
		engine: boolean;

		/**
		 * This property using for getting or setting vehicle livery.
		 */
		livery: number;

		/**
		 * A vehicle property used for locking or unlocking a vehicle.
		 */
		locked: boolean;

		// TODO: wiki
		movable: boolean;

		/**
		 * This property is used to check whether vehicle neon light is enabled or disabled
		 */
		neonEnabled: boolean;

		/**
		 * Number plate change (Maximum length: 8 char)
		 */
		numberPlate: string;

		/**
		 * This function sets the number plate type.
		 */
		numberPlateType: VehicleNumberPlateType;

		/**
		 * This function is used to set the pearlescent color of a vehicle. Using the [Vehicle colors](https://wiki.rage.mp/index.php?title=Vehicle_Colors).
		 */
		pearlescentColor: number;

		/**
		 * This property is being used to get or set vehicle rotation.
		 */
		rotation: shared.Vector3Mp;

		// TODO: wiki
		taxiLights: boolean;

		// TODO: wiki
		trailer: VehicleMp;

		// TODO: wiki
		traileredBy: VehicleMp;

		// TODO: wiki
		trimColor: number;

		/**
		 * This property gets/sets vehicle window tint.
		 *
		 * 1 - 255
		 */
		windowTint: number;

		/**
		 * This property gets/sets vehicle wheels [color](https://wiki.rage.mp/index.php?title=Vehicle_Colors).
		 */
		wheelColor: number;

		// TODO: wiki
		wheelType: number;

		/**
		 * Explodes the target vehicle.
		 */
		explode(): void;

		/**
		 * On the client-side, this function requires three args (red: int, green: int, blue: int), and will return an object: RGB
		 *
		 * @param id 0 - Primary Color | 1 - Secondary Color
		 */
		getColor(id: number): number;

		/**
		 * This function used to get the vehicle RGB body color. Returns null if never set explicitly.
		 *
		 * @param id 0 - Primary Color | 1 - Secondary Color
		 */
		getColorRGB(id: number): shared.RGB;

		/**
		 * Get the extra currently applied on vehicle in the target extra id.
		 *
		 * @param extraId Extra Id
		 */
		getExtra(extraId: number): boolean;

		/**
		 * Gets the mod currently applied on your vehicle in the targetted modType.
		 *
		 * @param modType Mod Type
		 */
		getMod(modType: number): number;

		/**
		 * This function is used to get the current neon lights of a vehicle.
		 */
		getNeonColor(): number[];

		/**
		 * Get the occupant inside a vehicle by seat number
		 *
		 * @param seat Vehicle Seat
		 */
		getOccupant(seat: VehicleSeat): PlayerMp;

		/**
		 * Gets the occupants inside of a vehicle.
		 */
		getOccupants(): PlayerMp[];

		/**
		 * Get vehicle paint by id
		 *
		 * @param id 0 - Primary Color | 1 - Secondary Color
		 */
		getPaint(id: number): number;

		/**
		 * This function is used for check, vehicle is located in stream distance for player or not.
		 *
		 * @param player Player object
		 */
		isStreamed(player: PlayerMp): boolean;

		// TODO: wiki
		isStreamedFor(...args: any[]): boolean;

		/**
		 * This function repairs a vehicle.
		 */
		repair(): void;

		/**
		 * Sets vehicle body color. ([Vehicle colors](https://wiki.rage.mp/index.php?title=Vehicle_Colors))
		 *
		 * @param primary Primary Color
		 * @param secondary Secondary Color
		 */
		setColor(primary: number, secondary: number): void;

		/**
		 * This function used for set vehicle RGB body color.
		 *
		 * @param red1 Primary Red Colour [0 - 255]
		 * @param green1 Primary Green Colour [0 - 255]
		 * @param blue1 Primary Blue Colour [0 - 255]
		 * @param red2 Secondary Red Colour [0 - 255]
		 * @param green2 Secondary Green Colour [0 - 255]
		 * @param blue2 Secondary Blue Colour [0 - 255]
		 */
		setColorRGB(red1: number, green1: number, blue1: number, red2: number, green2: number, blue2: number): void;

		/**
		 * Max extra ID is 16.
		 */
		setExtra(index: number, value: boolean): void;

		/**
		 * Applies the specified mod onto the vehicle.
		 *
		 * @param modType Mod Type
		 * @param modIndex Mod Index
		 */
		setMod(modType: number, modIndex: number): void;

		/**
		 * This function is used to set the neon lights of a vehicle.
		 *
		 * @param red Red Value 0 - 255.
		 * @param green Green Value 0 - 255.
		 * @param blue Blue Value 0 - 255.
		 */
		setNeonColor(red: number, green: number, blue: number): void;

		// TODO: wiki
		setPaint(primaryType: number, primaryColor: number, secondaryType: number, secondaryColor: number): void;

		// TODO: wiki
		setOccupant(seat: number, player: PlayerMp): void;

		/**
		 * This function spawns a vehicle.
		 *
		 * @param position Vector3
		 * @param heading Heading
		 */
		spawn(position: shared.Vector3Mp, heading: number): void;
	}

	export interface PlayerMpPool extends EntityMpPool<PlayerMp> {
		/**
		 * This function writes a chat message for all players (like [Player::outputChatBox](https://wiki.rage.mp/index.php?title=Player::outputChatBox)).
		 *
		 * @param text The text to be sent
		 */
		broadcast(text: string): void;

		/**
		 * This function writes a chat message for all players in dimension (like [Player::outputChatBox](https://wiki.rage.mp/index.php?title=Player::outputChatBox)).
		 *
		 * @param dimension The dimension in which the broadcast will be sent
		 * @param text The text to be sent
		 */
		broadcastInDimension(dimension: string, text: string): void;

		/**
		 * This function writes a chat message for all players in range (like [Player::outputChatBox](https://wiki.rage.mp/index.php?title=Player::outputChatBox)).
		 *
		 * @param position The position from which the broadcast will be sent
		 * @param range The range from position
		 * @param dimension The dimension in which the broadcast will be sent (optional)
		 * @param text The text to be sent
		 */
		broadcastInRange(position: shared.Vector3Mp, range: number, text: string): void;
		broadcastInRange(position: shared.Vector3Mp, range: number, dimension: number, text: string): void;

		/**
		 * This function triggers an event for:
		 *
		 * - the whole server
		 * - specified players array
		 *
		 * @param eventName Event name, what will be called
		 * @param args Any arguments, what should be sended to client. Supports entities, strings, numbers and booleans. (Objects and Arrays should be packed to JSON format.)
		 */
		call(eventName: string, args?: any[]): void;
		call(players: PlayerMp[], eventName: string, args?: any[]): void;

		/**
		 * This function call added client-side event for any players in a specific dimension
		 *
		 * @param dimension The dimension in which the event will be sent
		 * @param eventName Event name, what will be called
		 * @param args Any arguments, what should be sended to client. Supports entities, strings, numbers and booleans. (Objects and Arrays should be packed to JSON format.)
		 */
		callInDimension(dimension: number, eventName: string, args?: any[]): void;

		/**
		 * This function is used for calling a function for each player in range of position.
		 *
		 * @param position The position from which the broadcast will be sent
		 * @param range The range from position
		 * @param eventName Event name, what will be called
		 * @param args Any arguments, what should be sended to client. Supports entities, strings, numbers and booleans. (Objects and Arrays should be packed to JSON format.)
		 */
		callInRange(position: shared.Vector3Mp, range: number, eventName: string, args?: any[]): void;
		callInRange(position: shared.Vector3Mp, range: number, dimension: number, eventName: string, args?: any[]): void;

		// TODO: wiki
		callUnreliable(eventName: string, args?: any[]): void;
		callUnreliable(players: PlayerMp[], eventName: string, args?: any[]): void;

		// TODO: wiki
		callInDimensionUnreliable(dimension: number, eventName: string, args?: any[]): void;

		// TODO: wiki
		callInRangeUnreliable(position: shared.Vector3Mp, range: number, eventName: string, args?: any[]): void;
		callInRangeUnreliable(position: shared.Vector3Mp, range: number, dimension: number, eventName: string, args?: any[]): void;

		// TODO: wiki
		reloadResources(...args: any[]): void;
	}

	export interface VehicleMpPool extends EntityMpPool<VehicleMp> {
		'new'(
			model: VehicleHash | shared.HashOrString,
			position: shared.Vector3Mp,
			options?: {
				alpha?: number;
				color?: [shared.Array2d, shared.Array2d] | [shared.RGB, shared.RGB];
				dimension?: number;
				engine?: boolean;
				heading?: number;
				locked?: boolean;
				numberPlate?: string;
			}
		): VehicleMp;
	}

	export interface CheckpointMp extends EntityMp {
		/**
		 * Property related to the Checkpoint's color.
		 */
		color: number;

		/**
		 * This property is used to set or retrieve the direction of the checkpoint.
		 */
		destination: shared.Vector3Mp;

		/**
		 * This property is used to set or get the radius of the checkpoint.
		 */
		radius: number;

		/**
		 * This property is used to set or get the visible of the checkpoint.
		 */
		visible: boolean;

		/**
		 * Returns an array of 4 numbers, with a checkpoint color.
		 */
		getColor(): number[];

		/**
		 * Hiding a checkpoint for a particular player.
		 */
		hideFor(player: PlayerMp): void;

		/**
		 * Sets the checkpoint color.
		 *
		 * @param red Red color value (0 to 255)
		 * @param green Green color value (0 to 255)
		 * @param blue Blue color value (0 to 255)
		 * @param alpha Alpha color value (0 to 255)
		 */
		setColor(red: number, green: number, blue: number, alpha: number): void;

		/**
		 * Showing a checkpoint for a particular player.
		 */
		showFor(player: PlayerMp): void;
	}

	export interface ColshapeMp extends EntityMp {
		/**
		 * Returns type of colshape.
		 */
		readonly shapeType: ColshapeType;

		/**
		 * Checking if a point is within the colshape.
		 *
		 * @param point Vector3
		 */
		isPointWithin(point: shared.Vector3Mp): boolean;
	}

	export interface ColshapeMpPool extends EntityMpPool<ColshapeMp> {
		/**
		 * Create a ColShape of circle in the 2D plane
		 *
		 * @param x Number in float
		 * @param y Number in float
		 * @param range Number in float
		 * @param dimension  Number (optional parameter)
		 */
		newCircle(x: number, y: number, range: number, dimension?: number): ColshapeMp;

		/**
		 * Creates a cuboid ColShape in 3D space
		 *
		 * @param x Number in float
		 * @param y Number in float
		 * @param z Number in float
		 * @param width Number in float
		 * @param depth Number in float
		 * @param height Number in float
		 * @param dimension Number (optional)
		 */
		newCuboid(x: number, y: number, z: number, width: number, depth: number, height: number, dimension?: number): ColshapeMp;

		/**
		 * Creates a rectangle (square) ColShape 2D plane
		 *
		 * @param x Number in float
		 * @param y Number in float
		 * @param width Number in float
		 * @param height Number in float
		 * @param dimension Number (optional)
		 */
		newRectangle(x: number, y: number, width: number, height: number, dimension?: number): ColshapeMp;

		/**
		 * Creates a Sphere ColShape
		 *
		 * @param x Number in float
		 * @param y Number in float
		 * @param z Number in float
		 * @param range Number in float
		 * @param dimension Number (optional parameter)
		 */
		newSphere(x: number, y: number, z: number, range: number, dimension?: number): ColshapeMp;

		/**
		 * Creates a Colshape into the shape of a Tube.
		 *
		 * @param x Number in float
		 * @param y Number in float
		 * @param z Number in float
		 * @param height Number in float
		 * @param range Number in float
		 * @param dimension Number in float
		 */
		newTube(x: number, y: number, z: number, height: number, range: number, dimension?: number): ColshapeMp;
	}

	export interface CheckpointMpPool extends EntityMpPool<CheckpointMp> {
		'new'(
			type: number,
			position: shared.Vector3Mp,
			radius: number,
			options?: {
				color?: shared.RGBA;
				dimension?: number;
				direction?: shared.Vector3Mp;
				visible?: boolean;
			}
		): CheckpointMp;
	}

	export interface IServerEvents {
		entityCreated: (entity: EntityMp) => void;
		entityDestroyed: (entity: EntityMp) => void;
		entityModelChange: (entity: EntityMp, oldModel: number) => void;
		incomingConnection: (ip: string, serial: string, rgscName: string, rgscId: string, gameType: string) => void;
		packagesLoaded: () => void;
		playerChat: (player: PlayerMp, text: string) => void;
		playerCommand: (player: PlayerMp, command: string) => void;
		playerDamage: (player: PlayerMp, healthLoss: number, armorLoss: number) => void;
		playerDeath: (player: PlayerMp, reason: number, killer?: PlayerMp) => void;
		playerEnterCheckpoint: (player: PlayerMp, checkpoint: CheckpointMp) => void;
		playerEnterColshape: (player: PlayerMp, colshape: ColshapeMp) => void;
		playerEnterVehicle: () => void;
		playerExitCheckpoint: (player: PlayerMp, checkpoint: CheckpointMp) => void;
		playerExitColshape: (player: PlayerMp, colshape: ColshapeMp) => void;
		playerExitVehicle: (player: PlayerMp, vehicle: VehicleMp, seat: number) => void;
		playerJoin: (player: PlayerMp) => void;
		playerQuit: (player: PlayerMp, exitType: string, reason: string) => void;
		playerReachWaypoint: (player: PlayerMp) => void;
		playerReady: (player: PlayerMp) => void;
		playerSpawn: (player: PlayerMp) => void;
		playerStartEnterVehicle: (player: PlayerMp, vehicle: VehicleMp) => void;
		playerStartExitVehicle: (player: PlayerMp) => void;
		playerStreamIn: (player: PlayerMp, forPlayer: PlayerMp) => void;
		playerStreamOut: (player: PlayerMp, forPlayer: PlayerMp) => void;
		playerWeaponChange: (player: PlayerMp, oldWeapon: number, newWeapon: number) => void;
		serverShutdown: () => void;
		trailerAttached: (vehicle: VehicleMp, trailer: VehicleMp) => void;
		vehicleDamage: (vehicle: VehicleMp, bodyHealthLoss: number, engineHealthLoss: number) => void;
		vehicleDeath: (vehicle: VehicleMp) => void;
		vehicleHornToggle: (vehicle: VehicleMp, toggle: boolean) => void;
		vehicleSirenToggle: (vehicle: VehicleMp, toggle: boolean) => void;
	}

	export interface EventMp {
		destroy(): void;
	}

	export interface EventMpPool {
		/**
		 * This function delays server's shutdown till you finish all your async tasks.
		 */
		delayShutdown: boolean;

		/**
		 * This function delays server's initialization of packages to run early functions.
		 */
		delayInitialization: boolean;

		/**
		 * This function registers event handlers.
		 *
		 * Returning true will destroy automatically the event handler.
		 *
		 * @param eventName The name of the event you wish to attach a handler to
		 * @param callback The function that you want the event to trigger, which has to be defined before you add the handler
		 */
		add<K extends keyof IServerEvents>(eventName: K, callback: IServerEvents[K]): void;
		add(eventName: string, callback: (...args: any[]) => void): void;

		/**
		 * This function registers a command handler.
		 *
		 * @param commandName The name of the command you wish to attach a handler to
		 * @param callback The function that you want the command to trigger, which has to be defined before you add the handler
		 */
		addCommand(commandName: string, callback: (player: PlayerMp, fullText: string, ...args: string[]) => void): void;
		addCommand(commands: { [commandName: string]: (player: PlayerMp, fullText: string, ...args: string[]) => void }): void;

		/**
		 * This function register the specified player's Remote Prodecure Call (RPC) event and expects a callback.
		 *
		 * @param procedureName The name of the procedure you wish to attach a handler to
		 * @param callback The function that you want the RPC to trigger, which has to be defined before you add the handler
		 */
		addProc(procedureName: string, callback: (...args: any[]) => void): void;
		addProc(procedures: { [name: string]: (...args: any[]) => void }): void;

		/**
		 * This function calls registered event handlers. This function can call serverside events from serverside and clientside events from clientside.
		 *
		 * 1.1 - If you're sending number more than 2^31 to client, you need to arg.toString() transform your number on server and parseInt(arg) on client.
		 *
		 * @param eventName The name of the event you wish to call
		 * @param args Args
		 */
		call(eventName: string, ...args: any[]): void;

		/**
		 * This function gets all handlers of the specified event.
		 *
		 * @param eventName Name of the event you want to gets all handlers
		 */
		getAllOf(eventName: string): EventMp[];

		/**
		 * Removes the specified event from events tree.
		 *
		 * @param eventName Name of the event you want to remove
		 * @param handler Handler
		 */
		remove(eventName: string, handler?: (...args: any[]) => void): void;
		remove(eventNames: string[]): void;

		/**
		 * Resets the whole event manager.
		 */
		reset(): void;
	}

	export interface BlipMp extends EntityMp {
		/**
		 * Property related to the Blip's color. [Colors](https://wiki.rage.mp/index.php?title=Blip::color)
		 */
		color: number;

		/**
		 * This function is used to change the name of the blip shown on the map. When you press Esc and hover over the blip, it will have this name.
		 */
		name: string;

		/**
		 * Property used to have a fade in/out of the blip when you're in range of the draw distance.
		 */
		drawDistance: number;

		/**
		 * This function is used to change the blip rotation.
		 */
		rotation: number;

		/**
		 * This function is used to change the blip scale.
		 */
		scale: number;

		/**
		 * Changes the behavior of the Blip on the minimap.
		 */
		shortRange: boolean;

		/**
		 * This function is used to change the blip sprite. [Sprites](https://wiki.rage.mp/index.php?title=Blip::sprite)
		 */
		sprite: number;

		/**
		 * Creates a route to the blip from the player's location.
		 *
		 * @param player Player object or an array of player objects
		 * @param color All colors available on [Blip Colors](https://wiki.rage.mp/index.php?title=Blips#Blip_colors) page
		 * @param scale Float
		 */
		routeFor(player: PlayerMp | PlayerMp[] | undefined, color: number, scale: number): void;

		/**
		 * This function used for remove route to blip for player.
		 *
		 * @param player Array or object of player to which to remove route
		 */
		unrouteFor(player: PlayerMp | PlayerMp[]): void;
	}

	export interface BlipMpPool extends EntityMpPool<BlipMp> {
		'new'(
			sprite: number,
			position: shared.Vector3Mp,
			options?: {
				alpha?: number;
				color?: number;
				dimension?: number;
				drawDistance?: number;
				name?: string;
				rotation?: number;
				scale?: number;
				shortRange?: boolean;
			}
		): BlipMp;
	}

	export interface TextLabelMp extends EntityMp {
		/**
		 * Update the color of the selected label
		 */
		color: shared.RGB;

		/**
		 * Update the draw distance of the selected label
		 */
		drawDistance: number;

		/**
		 * Updates the los(Line of Sight) on the selected label.
		 */
		los: boolean;

		/**
		 * Updates the text of a created label.
		 */
		text: string;
	}

	export interface TextLabelMpPool extends EntityMpPool<TextLabelMp> {
		'new'(
			text: string,
			position: shared.Vector3Mp,
			options?: {
				color?: shared.RGBA;
				dimension?: number;
				drawDistance?: number;
				font?: number;
				los?: boolean;
			}
		): TextLabelMp;
	}

	export interface MarkerMp extends EntityMp {
		// TODO: wiki
		direction: shared.Vector3Mp;

		/**
		 * Sets the scale of the selected marker
		 */
		scale: number;

		// TODO: wiki
		visible: boolean;

		/**
		 * Gets the marker's color.
		 */
		getColor(): number[];

		/**
		 * Hiding a marker for a particular player.
		 */
		hideFor(player: PlayerMp): void;

		/**
		 * Sets the marker color.
		 *
		 * @param red Red color value (0 to 255)
		 * @param green Green color value (0 to 255)
		 * @param blue Blue color value (0 to 255)
		 * @param alpha Alpha color value (0 to 255)
		 */
		setColor(red: number, green: number, blue: number, alpha: number): void;

		/**
		 * Showing a marker for a particular player.
		 */
		showFor(player: PlayerMp): void;
	}

	export interface MarkerMpPool extends EntityMpPool<MarkerMp> {
		'new'(
			type: number,
			position: shared.Vector3Mp,
			scale: number,
			options?: {
				color?: shared.RGBA;
				dimension?: number;
				direction?: shared.Vector3Mp;
				rotation?: shared.Vector3Mp;
				visible?: boolean;
			}
		): MarkerMp;
	}

	export interface ObjectMp extends EntityMp {
		rotation: shared.Vector3Mp;
	}

	export interface ObjectMpPool extends EntityMpPool<ObjectMp> {
		'new'(
			model: shared.HashOrString,
			position: shared.Vector3Mp,
			options?: {
				alpha?: number;
				dimension?: number;
				rotation?: shared.Vector3Mp;
			}
		): ObjectMp;
	}

	export interface PedMp extends EntityMp {
		controller: PlayerMp;
	}

	export interface PedMpPool extends EntityMpPool<PedMp> {
		'new'(
			modelHash: number,
			position: shared.Vector3Mp,
			options?: {
				dynamic?: boolean;
				frozen?: boolean;
				invincible?: boolean;
				lockController?: boolean;
			}
		): PedMp;
	}

	export interface WorldMp {
		/**
		 * This property gets/sets game weather.
		 *
		 * [Weather](https://wiki.rage.mp/index.php?title=Weather)
		 */
		weather: Weather | string;

		/**
		 * This function sets time.
		 */
		time: {
			hour: number;
			minute: number;
			second: number;

			set(hour: number, minute: number, second: number): void;
		};

		trafficLights: {
			/**
			 * This property locks the traffic lights in their current position.
			 */
			locked: boolean;

			/**
			 * This property set the traffic lights state. (If you want to make your own traffic lights system, make sure of locking the traffic lights to avoid the game to change them by itself)
			 */
			state: number;
		};

		/**
		 * This function remove an IPL and sync it to every client
		 *
		 * @param ipl [IPLs](https://wiki.rage.mp/index.php?title=Interiors_and_Locations)
		 */
		removeIpl(ipl: string): void;

		/**
		 * This function will request an IPL and sync it to every client.
		 *
		 * @param name ipl [IPLs](https://wiki.rage.mp/index.php?title=Interiors_and_Locations)
		 */
		requestIpl(name: string): void;

		/**
		 * This function start a weather transition to the weather specified and sync it to all clients.
		 *
		 * @param weather [Weather](https://wiki.rage.mp/index.php?title=Weather)
		 * @param duration Weather transitioning time
		 */
		setWeatherTransition(weather: Weather | string, duration?: number): void;
	}

	export const players: PlayerMpPool;
	export const vehicles: VehicleMpPool;
	export const colshapes: ColshapeMpPool;
	export const checkpoints: CheckpointMpPool;
	export const events: EventMpPool;
	export const blips: BlipMpPool;
	export const labels: TextLabelMpPool;
	export const markers: MarkerMpPool;
	export const objects: ObjectMpPool;
	export const peds: PedMpPool;
	export const world: WorldMp;

	export const Vector3: shared.Vector3Mp;

	export * from 'rage-shared';
}
