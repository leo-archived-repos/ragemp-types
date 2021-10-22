/// <reference types="@ragemp/types-shared"/>
/// <reference path="enums.d.ts"/>
/// <reference path="natives.d.ts"/>

declare module 'rage-client' {
	import * as shared from 'rage-shared';

	// Temp
	export type Handle = number;
	export type Hash = number;

	export interface Mp {
		blips: BlipMpPool;
		browsers: BrowserMpPool;
		cameras: CameraMpPool;
		checkpoints: CheckpointMpPool;
		colshapes: ColshapeMpPool;
		console: ConsoleMp;
		discord: DiscordMp;
		dummies: DummyEntityMpPool;
		events: EventMpPool;
		gui: GuiMp;
		game: GameMp;
		keys: KeysMp;
		labels: TextLabelMpPool;
		markers: MarkerMpPool;
		nametags: NametagsMp;
		objects: ObjectMpPool;
		peds: PedMpPool;
		pickups: PickupMpPool;
		players: PlayerMpPool;
		raycasting: RaycastingMp;
		storage: StorageMp;
		system: SystemMp;
		user: UserMp;
		vehicles: VehicleMpPool;
		voiceChat: VoiceChatMp;

		Vector3: shared.Vector3Mp;
	}

	export interface DiscordMp {
		/**
		 * This function will let you set further details for the [Discord Rich Presence](https://discord.com/developers/docs/rich-presence/how-to) field for a player if they have Discord running. Each argument represents one line under the 'playing a game' section.
		 *
		 * @param status Status
		 * @param state State
		 */
		update(status: string, state: string): void;
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
		streamed: T[];

		// TODO: wiki
		apply(callingFunction: (...args: any[]) => void, ...args: any[]): void;

		/**
		 * This function is used to return an element from a pool at an ID.
		 *
		 * @param id Element ID, what you need get from the pool.
		 */
		at(id: number): T;

		/**
		 * Function to get the entity with the given handle from his entity pool.
		 *
		 * @param handle Handle of the entity
		 */
		atHandle(handle: number): T;

		/**
		 * This function returns the entity object, if valid from the server-side generated entity.id. This is important to know, because the client-side entity.id may be different to the entity.id server-side.
		 *
		 * @param remoteId Entity remote ID (entity.remoteId)
		 */
		atRemoteId(remoteId: number): T;

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
		 * This function is used for calling a function for each element in a pool, but only if it in range of position.
		 *
		 * @param callingFunction Function, what will be called.
		 */
		forEachInRange(position: shared.Vector3Mp, range: number, callingFunction: (entity: T) => void): void;

		/**
		 * This function is used to call a function for each elements in the pool.
		 *
		 * @param dimension Int, dimension
		 * @param callingFunction Function, what will be called.
		 */
		forEachInDimension(position: shared.Vector3Mp, range: number, dimension: number, callingFunction: (entity: T) => void): void;

		/**
		 * This function is used for calling a function for each element that is in a client's streaming range in a pool.
		 *
		 * @param callingFunction Function, what will be called.
		 */
		forEachInStreamRange(callingFunction: (entity: T) => void): void;

		/**
		 * Sorts the closest entities to a certain specified point in the entities pool.
		 *
		 * @param position Vector3
		 * @param limit Int (Default is 1)
		 */
		getClosest(position: shared.Vector3Mp, limit?: number): T | T[];

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
		 * This property is used for getting shared entity ID.
		 *
		 * This ID is unique for an entity and shared between serverside and clientside.
		 */
		readonly remoteId: number;

		/**
		 * Returns an entity handle
		 */
		readonly handle: any;

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

		applyForceTo(
			forceType: number,
			x: number,
			y: number,
			z: number,
			xRot: number,
			yRot: number,
			zRot: number,
			boneIndex: number,
			isRel: number,
			p9: boolean,
			highForce: boolean,
			p11: boolean,
			p12: boolean
		): void;
		applyForceToCenterOfMass(
			forceType: number,
			x: number,
			y: number,
			z: number,
			p4: boolean,
			isRel: boolean,
			highForce: boolean,
			p7: boolean
		): void;
		attachTo(
			entity: Handle,
			boneIndex: number,
			xPos: number,
			yPos: number,
			zPos: number,
			xRot: number,
			yRot: number,
			zRot: number,
			p8: boolean,
			useSoftPinning: boolean,
			collision: boolean,
			isPed: boolean,
			vertexIndex: number,
			fixedRot: boolean
		): void;
		attachToPhysically(
			entity: Handle,
			boneIndex1: number,
			boneIndex2: number,
			xPos1: number,
			yPos1: number,
			zPos1: number,
			xPos2: number,
			yPos2: number,
			zPos2: number,
			xRot: number,
			yRot: number,
			zRot: number,
			breakForce: number,
			fixedRot: boolean,
			p14: boolean,
			collision: boolean,
			p16: boolean,
			p17: number
		): void;
		clearLastDamage(): void;
		destroy(): void;
		detach(p0: boolean, collision: boolean): void;
		dist(position: shared.Vector3Mp): number;
		distSquared(position: shared.Vector3Mp): number;
		doesBelongToThisScript(p0: boolean): boolean;
		doesExist(): boolean;
		doesHaveDrawable(): boolean;
		doesHavePhysics(): boolean;
		forceAiAndAnimationUpdate(): void;
		forceStreamingUpdate(): void;
		freezePosition(toggle: boolean): void;
		getAlpha(): number;
		getAnimCurrentTime(animDict: string, animName: string): number;
		getAnimTotalTime(animDict: string, animName: string): number;
		getAttachedTo(): Handle;
		getBoneIndexByName(boneName: string): number;
		getCollisionNormalOfLastHitFor(): shared.Vector3Mp;
		getCoords(alive: boolean): shared.Vector3Mp;
		getForwardVector(): shared.Vector3Mp;
		getForwardX(): number;
		getForwardY(): number;
		getHeading(): number;
		getHealth(): number;
		getHeight(x: number, y: number, z: number, atTop: boolean, inWorldCoords: boolean): number;
		getHeightAboveGround(): number;
		getLastMaterialHitBy(): Hash;
		getLodDist(): number;
		getMatrix(
			rightVector: shared.Vector3Mp,
			forwardVector: shared.Vector3Mp,
			upVector: shared.Vector3Mp,
			position: shared.Vector3Mp
		): {
			rightVector: shared.Vector3Mp;
			forwardVector: shared.Vector3Mp;
			upVector: shared.Vector3Mp;
			position: shared.Vector3Mp;
		};
		getMaxHealth(): number;
		getModel(): Hash;
		getNearestPlayerTo(): Handle;
		getNearestPlayerToOnTeam(team: number): Handle;
		getObjectIndexFromIndex(): Handle;
		getOffsetFromGivenWorldCoords(posX: number, posY: number, posZ: number): shared.Vector3Mp;
		getOffsetFromInWorldCoords(offsetX: number, offsetY: number, offsetZ: number): shared.Vector3Mp;
		getPedIndexFromIndex(): Handle;
		getPhysicsHeading(): number;
		getPitch(): number;
		getPopulationType(): number;
		getQuaternion(
			x: number,
			y: number,
			z: number,
			w: number
		): {
			x: number;
			y: number;
			z: number;
			w: number;
		};
		getRoll(): number;
		getRotation(rotationOrder: number): shared.Vector3Mp;
		getRotationVelocity(): shared.Vector3Mp;
		getScript(script: Handle): Handle;
		getSpeed(): number;
		getSpeedVector(relative: boolean): shared.Vector3Mp;
		getSubmergedLevel(): number;
		getType(): number;
		getUprightValue(): number;
		getVariable(value: string): any;
		getVehicleIndexFromIndex(): Handle;
		getVelocity(): shared.Vector3Mp;
		getWorldPositionOfBone(boneIndex: number): shared.Vector3Mp;
		hasAnimEventFired(actionHash: Hash): boolean;
		hasAnimFinished(animDict: string, animName: string, p2: number): boolean;
		hasBeenDamagedBy(entity: Handle, p1: boolean): boolean;
		hasBeenDamagedByAnyObject(): boolean;
		hasBeenDamagedByAnyPed(): boolean;
		hasBeenDamagedByAnyVehicle(): boolean;
		hasClearLosTo(entity: Handle, traceType: number): boolean;
		hasClearLosToInFront(entity: Handle): boolean;
		hasCollidedWithAnything(): boolean;
		hasCollisionLoadedAround(): boolean;
		isAMission(): boolean;
		isAnObject(): boolean;
		isAPed(): boolean;
		isAt(entity: Handle, xSize: number, ySize: number, zSize: number, p4: boolean, p5: boolean, p6: number): boolean;
		isAtCoord(
			xPos: number,
			yPos: number,
			zPos: number,
			xSize: number,
			ySize: number,
			zSize: number,
			p6: boolean,
			p7: boolean,
			p8: number
		): boolean;
		isAttached(): boolean;
		isAttachedTo(to: Handle): boolean;
		isAttachedToAnyObject(): boolean;
		isAttachedToAnyPed(): boolean;
		isAttachedToAnyVehicle(): boolean;
		isAVehicle(): boolean;
		isCollisonDisabled(): boolean;
		isDead(): boolean;
		isInAir(): boolean;
		isInAngledArea(
			originX: number,
			originY: number,
			originZ: number,
			edgeX: number,
			edgeY: number,
			edgeZ: number,
			angle: number,
			p7: boolean,
			p8: boolean,
			p9: any
		): boolean;
		isInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean, p8: any): boolean;
		isInWater(): boolean;
		isInZone(zone: string): boolean;
		isOccluded(): boolean;
		isOnScreen(): boolean;
		isPlayingAnim(animDict: string, animName: string, p2: number): boolean;
		isStatic(): boolean;
		isTouching(targetEntity: Handle): boolean;
		isTouchingModel(modelHash: Hash): boolean;
		isUpright(angle: number): boolean;
		isUpsidedown(): boolean;
		isVisible(): boolean;
		isVisibleToScript(): boolean;
		isWaitingForWorldCollision(): boolean;
		playAnim(animName: string, propName: string, p2: number, p3: boolean, p4: boolean, p5: boolean, delta: number, bitset: any): boolean;
		playSynchronizedAnim(syncedScene: number, animation: string, propName: string, p3: number, p4: number, p5: any, p6: number): boolean;
		processAttachments(): void;
		resetAlpha(): void;
		setAlpha(alphaLevel: number, skin: boolean): void;
		setAlwaysPrerender(toggle: boolean): void;
		setAnimCurrentTime(animDict: string, animName: string, time: number): void;
		setAnimSpeed(animDict: string, animName: string, speedMultiplier: number): void;
		setAsMission(p0: boolean, byThisScript: boolean): void;
		setCanBeDamaged(toggle: boolean): void;
		setCanBeDamagedByRelationshipGroup(p0: boolean, p1: any): void;
		setCanBeTargetedWithoutLos(toggle: boolean): void;
		setCollision(toggle: boolean, keepPhysics: boolean): void;
		setCoords(xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;
		setCoords2(xPos: number, yPos: number, zPos: number, xAxis: number, yAxis: number, zAxis: number, clearArea: boolean): void;
		setCoordsNoOffset(xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;
		setDynamic(toggle: boolean): void;
		setHasGravity(toggle: boolean): void;
		setHeading(heading: number): void;
		setHealth(health: number): void;
		setInvincible(toggle: boolean): void;
		setIsTargetPriority(p0: boolean, p1: number): void;
		setLights(toggle: boolean): void;
		setLoadCollisionFlag(toggle: boolean): void;
		setLodDist(value: number): void;
		setMaxHealth(value: number): void;
		setMaxSpeed(speed: number): void;
		setMotionBlur(toggle: boolean): void;
		setNoCollision(entity: Handle, collision: boolean): void;
		setOnlyDamagedByPlayer(toggle: boolean): void;
		setOnlyDamagedByRelationshipGroup(p0: boolean, p1: any): void;
		setProofs(
			bulletProof: boolean,
			fireProof: boolean,
			explosionProof: boolean,
			collisionProof: boolean,
			meleeProof: boolean,
			p5: boolean,
			p6: boolean,
			drownProof: boolean
		): void;
		setQuaternion(x: number, y: number, z: number, w: number): void;
		setRecordsCollisions(toggle: boolean): void;
		setRenderScorched(toggle: boolean): void;
		setRotation(pitch: number, roll: number, yaw: number, rotationOrder: number, p4: boolean): void;
		setTrafficlightOverride(state: number): void;
		setVariable(key: string, value: any): any;
		setVelocity(x: number, y: number, z: number): void;
		setVisible(toggle: boolean, p1: boolean): void;
		stopAnim(animation: string, animGroup: string, p2: number): void;
		stopSynchronizedAnim(p0: number, p1: boolean): boolean;
	}

	export interface PedBaseMp extends EntityMp {
		applyBlood(boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string): void;
		applyBloodByZone(p1: any, p2: number, p3: number, p4: any): void;
		applyBloodDamageByZone(p1: any, p2: number, p3: number, p4: any): void;
		applyBloodSpecific(p1: any, p2: number, p3: number, p4: number, p5: number, p6: any, p7: number, p8: any): void;
		applyDamageDecal(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: string): void;
		applyDamagePack(damagePack: string, damage: number, mult: number): void;
		applyDamageTo(damageAmount: number, p2: boolean): void;
		canInCombatSeeTarget(target: Handle): boolean;
		canKnockOffVehicle(): boolean;
		canRagdoll(): boolean;
		clearAllProps(): void;
		clearAlternateMovementAnim(stance: number, p2: number): void;
		clearBloodDamage(): void;
		clearBloodDamageByZone(p1: number): void;
		clearDamageDecalByZone(p1: number, p2: string): void;
		clearDecorations(): void;
		clearDriveByClipsetOverride(): void;
		clearDrivebyTaskUnderneathDrivingTask(): void;
		clearFacialDecorations(): void;
		clearFacialIdleAnimOverride(): void;
		clearLastDamageBone(): void;
		clearProp(propId: number): void;
		clearTasks(): void;
		clearTasksImmediately(): void;
		clearWetness(): void;
		clone(heading: number, networkHandle: boolean, pedHandle: boolean): Handle;
		cloneToTarget(ped2: Handle): void;
		controlMountedWeapon(): boolean;
		forceMotionState(motionStateHash: Hash, p2: boolean, p3: boolean, p4: boolean): boolean;
		forceToOpenParachute(): void;
		getAccuracy(): number;
		getAlertness(): number;
		getAmmoInClip(weapon: Hash): number;
		getArmour(): number;
		getBoneCoords(boneId: number, offsetX: number, offsetY: number, offsetZ: number): shared.Vector3Mp;
		getBoneIndex(boneId: number): number;
		getCauseOfDeath(): Hash;
		getCombatFloat(ped: Handle, p1: number): number;
		getCombatMovement(): number;
		getCombatRange(): number;
		getConfigFlag(flagId: number, p2: boolean): boolean;
		getDeadPickupCoords(p1: number, p2: number): shared.Vector3Mp;
		getDecorationsState(): number;
		getDefensiveAreaPosition(p1: boolean): shared.Vector3Mp;
		getDesiredMoveBlendRatio(): number;
		getDrawableVariation(componentId: number): number;
		getEnveffScale(): number;
		getExtractedDisplacement(worldSpace: boolean): shared.Vector3Mp;
		getFloodInvincibility(p1: boolean): void;
		getGroupIndex(): number;
		getHeadBlendData(headBlendData: {
			shapeFirst: number;
			shapeSecond: number;
			shapeThird: number;
			skinFirst: number;
			skinSecond: number;
			skinThird: number;
			shapeMix: number;
			skinMix: number;
			thirdMix: number;
		}): void;
		getHeadOverlayValue(overlayID: number): number;
		getIsTaskActive(taskNumber: number): boolean;
		getJackTarget(): Handle;
		getLastDamageBone(outBone: number): number;
		getMaxHealth(): number;
		getMeleeTargetFor(): Handle;
		getMoney(): number;
		getMount(): Handle;
		getNavmeshRouteDistanceRemaining(p1: any, p2: any): any;
		getNearbyPeds(sizeAndPeds: number, ignore: number): number;
		getNearbyVehicles(sizeAndVehs: number): number;
		getNumberOfDrawableVariations(componentId: number): number;
		getNumberOfPropDrawableVariations(propId: number): number;
		getNumberOfPropTextureVariations(propId: number, drawableId: number): number;
		getNumberOfTextureVariations(componentId: number, drawableId: number): number;
		getPaletteVariation(componentId: number): number;
		getParachuteLandingType(): number;
		getParachuteState(): number;
		getParachuteTintIndex(tintIndex: number): number;
		getPhoneGestureAnimCurrentTime(): number;
		getPhoneGestureAnimTotalTime(): number;
		getPlayerIsFollowing(): Handle;
		getPropIndex(componentId: number): number;
		getPropTextureIndex(componentId: number): number;
		getRagdollBoneIndex(bone: number): number;
		getRelationshipBetweens(ped2: Handle): void;
		getRelationshipGroupDefaultHash(): Hash;
		getRelationshipGroupHash(): Hash;
		getResetFlag(flagId: number): boolean;
		getScriptTaskStatus(taskHash: Hash): number;
		getSeatIsTryingToEnter(): number;
		getSequenceProgress(): number;
		getsJacker(): Handle;
		getSourceOfDeath(): Handle;
		getTextureVariation(componentId: number): number;
		getTimeOfDeath(): number;
		getType(): number;
		getVehicleIsIn(getLastVehicle: boolean): Handle;
		getVehicleIsTryingToEnter(): Handle;
		getVehicleIsUsing(): Handle;
		giveHelmet(cannotRemove: boolean, helmetFlag: number, textureIndex: number): void;
		giveNmMessage(): void;
		giveWeapon(weapon: shared.WeaponHash | Hash, ammo: number, equipNow: boolean): void;
		hasHeadBlendFinished(): boolean;
		isActiveInScenario(): boolean;
		isAimingFromCover(): boolean;
		isBeingArrested(atArresting: boolean): boolean;
		isBeingJacked(): boolean;
		isBeingStealthKilled(): boolean;
		isBeingStunned(p1: number): boolean;
		isComponentVariationValid(componentId: number, drawableId: number, textureId: number): boolean;
		isConversationDead(): boolean;
		isCuffed(): boolean;
		isDead(): boolean;
		isDeadOrDying(p1: boolean): boolean;
		isDiving(): boolean;
		isDoingDriveby(): boolean;
		isDrivebyTaskUnderneathDrivingTask(): boolean;
		isDucking(): boolean;
		isEvasiveDiving(evadingEntity: Handle): boolean;
		isFacingPed(otherPed: Handle, angle: number): boolean;
		isFalling(): boolean;
		isFatallyInjured(): boolean;
		isFleeing(): boolean;
		isGettingIntoAVehicle(): boolean;
		isGettingUp(): boolean;
		isGoingIntoCover(): boolean;
		isGroupMember(groupId: number): boolean;
		isHangingOnToVehicle(): boolean;
		isHeadtracking(entity: Handle): boolean;
		isHeadtrackingPed(ped2: Handle): boolean;
		isHuman(): boolean;
		isHurt(): boolean;
		isInAnyBoat(): boolean;
		isInAnyHeli(): boolean;
		isInAnyPlane(): boolean;
		isInAnyPoliceVehicle(): boolean;
		isInAnySub(): boolean;
		isInAnyTaxi(): boolean;
		isInAnyTrain(): boolean;
		isInAnyVehicle(atGetIn: boolean): boolean;
		isInCombat(target: Handle): boolean;
		isInCoverFacingLeft(): boolean;
		isInFlyingVehicle(): boolean;
		isInGroup(): boolean;
		isInjured(): boolean;
		isInMeleeCombat(): boolean;
		isInModel(modelHash: Hash): boolean;
		isInParachuteFreeFall(): boolean;
		isInVehicle(vehicle: Handle, atGetIn: boolean): boolean;
		isInWrithe(): boolean;
		isJacking(): boolean;
		isJumpingOutOfVehicle(): boolean;
		isMale(): boolean;
		isModel(modelHash: Hash): boolean;
		isMountedWeaponTaskUnderneathDrivingTask(): boolean;
		isMoveBlendRatioRunning(): boolean;
		isMoveBlendRatioSprinting(): boolean;
		isMoveBlendRatioStill(): boolean;
		isMoveBlendRatioWalking(): boolean;
		isOnAnyBike(): boolean;
		isOnFoot(): boolean;
		isOnMount(): boolean;
		isOnSpecificVehicle(vehicle: Handle): boolean;
		isOnVehicle(): boolean;
		isPerformingStealthKill(): boolean;
		isPlantingBomb(): boolean;
		isPlayingPhoneGestureAnim(): boolean;
		isProne(): boolean;
		isPropValid(componentId: number, drawableId: number, TextureId: number): boolean;
		isRagdoll(): boolean;
		isReloading(): boolean;
		isRunning(): boolean;
		isRunningArrestTask(): boolean;
		isRunningMobilePhoneTask(): boolean;
		isRunningRagdollTask(): boolean;
		isScriptedScenarioUsingConditionalAnim(animDict: string, anim: string): boolean;
		isShooting(): boolean;
		isShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean): boolean;
		isSittingInAnyVehicle(): boolean;
		isSittingInVehicle(vehicle: Handle): boolean;
		isSprinting(): boolean;
		isStill(): boolean;
		isStopped(): boolean;
		isStrafing(): boolean;
		isSwimming(): boolean;
		isSwimmingUnderWater(): boolean;
		isTracked(): boolean;
		isTrackedVisible(): boolean;
		isTryingToEnterALockedVehicle(): boolean;
		isUsingActionMode(): boolean;
		isUsingAnyScenario(): boolean;
		isUsingScenario(scenario: string): boolean;
		isVaulting(): boolean;
		isWalking(): boolean;
		isWearingHelmet(): boolean;
		knockOffProp(p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;
		knockOffVehicle(): void;
		playAnimOnRunningScenario(animDict: string, animName: string): void;
		playFacialAnim(animName: string, animDict: string): void;
		registerHatedTargetsAround(radius: number): void;
		registerheadshot(): number;
		registerTarget(target: Handle): void;
		removeDefensiveArea(toggle: boolean): void;
		removeFromGroup(): void;
		removeHelmet(p2: boolean): void;
		removePreferredCoverSet(): void;
		removeWeapon(weapon: shared.WeaponHash | Hash): void;
		removeAllWeapons(): void;
		resetInVehicleContext(): void;
		resetLastVehicle(): void;
		resetMovementClipset(p1: number): void;
		resetRagdollTimer(): void;
		resetStrafeClipset(): void;
		resetVisibleDamage(): void;
		resetWeaponMovementClipset(): void;
		resurrect(): void;
		reviveInjured(): void;
		setAccuracy(accuracy: number): void;
		setAlertness(value: number): void;
		setAllowedToDuck(toggle: boolean): void;
		setAllowVehiclesOverride(toggle: boolean): void;
		setAlternateMovementAnim(stance: number, animDictionary: string, animationName: string, p4: number, p5: boolean): void;
		setAmmoInClip(weapon: shared.WeaponHash | Hash, ammo: number): void;
		setAngledDefensiveArea(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: boolean): void;
		setArmour(amount: number): void;
		setAsCop(toggle: boolean): void;
		setAsEnemy(toggle: boolean): void;
		setAsGroupLeader(groupId: number): void;
		setAsGroupMember(groupId: number): void;
		setBlendFromParents(p1: any, p2: any, p3: number, p4: number): void;
		setBlockingOfNonTemporaryEvents(toggle: boolean): void;
		setBoundsOrientation(p1: number, p2: number, p3: number, p4: number, p5: number): void;
		setCanArmIk(toggle: boolean): void;
		setCanAttackFriendly(toggle: boolean, p2: boolean): void;
		setCanBeDraggedOut(toggle: boolean): void;
		setCanBeKnockedOffVehicle(state: number): void;
		setCanBeShotInVehicle(toggle: boolean): void;
		setCanBeTargetedWhenInjured(toggle: boolean): void;
		setCanBeTargetedWithoutLos(toggle: boolean): void;
		setCanBeTargetted(toggle: boolean): void;
		setCanBeTargettedByPlayer(player: Handle, toggle: boolean): void;
		setCanBeTargettedByTeam(team: number, toggle: boolean): void;
		setCanCowerInCover(toggle: boolean): void;
		setCanEvasiveDive(toggle: boolean): void;
		setCanHeadIk(toggle: boolean): void;
		setCanLegIk(toggle: boolean): void;
		setCanPeekInCover(toggle: boolean): void;
		setCanPlayAmbientAnims(toggle: boolean): void;
		setCanPlayAmbientBaseAnims(toggle: boolean): void;
		setCanPlayGestureAnims(toggle: boolean): void;
		setCanPlayVisemeAnims(p1: boolean, p2: boolean): void;
		setCanRagdoll(toggle: boolean): void;
		setCanRagdollFromPlayerImpact(toggle: boolean): void;
		setCanSmashGlass(p1: boolean, p2: boolean): void;
		setCanSwitchWeapon(toggle: boolean): void;
		setCanTeleportToGroupLeader(groupHandle: number, toggle: boolean): void;
		setCanTorsoIk(toggle: boolean): void;
		setCanUseAutoConversationLookat(toggle: boolean): void;
		setCapsule(value: number): void;
		setCombatAbility(p1: number): void;
		setCombatAttributes(attributeIndex: number, enabled: boolean): void;
		setCombatFloat(combatType: number, p2: number): void;
		setCombatMovement(combatMovement: number): void;
		setCombatRange(p1: number): void;
		setComponentVariation(componentId: number, drawableId: number, textureId: number, paletteId: number): void;
		setConfigFlag(flagId: number, value: boolean): void;
		setCoordsKeepVehicle(posX: number, posY: number, posZ: number): void;
		setCoordsNoGang(posX: number, posY: number, posZ: number): void;
		setCowerHash(p1: string): void;
		setDecoration(collection: Hash, overlay: Hash): void;
		setDefaultComponentVariation(): void;
		setDefensiveAreaAttachedToPed(
			attachPed: Handle,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: boolean,
			p10: boolean
		): void;
		setDefensiveAreaDirection(p1: number, p2: number, p3: number, p4: boolean): void;
		setDefensiveSphereAttachedToPed(p1: any, p2: number, p3: number, p4: number, p5: number, p6: boolean): void;
		setDesiredHeading(heading: number): void;
		setDesiredMoveBlendRatio(p1: number): void;
		setDiesInSinkingVehicle(toggle: boolean): void;
		setDiesInstantlyInWater(toggle: boolean): void;
		setDiesInVehicle(toggle: boolean): void;
		setDiesInWater(toggle: boolean): void;
		setDiesWhenInjured(toggle: boolean): void;
		setDriveByClipsetOverride(clipset: string): void;
		setDriverAbility(ability: number): void;
		setDriverAggressiveness(aggressiveness: number): void;
		setDriveTaskCruiseSpeed(cruiseSpeed: number): void;
		setDriveTaskDrivingStyle(drivingStyle: number): void;
		setDucking(toggle: boolean): void;
		setEnableBoundAnkles(toggle: boolean): void;
		setEnableEnveffScale(toggle: boolean): void;
		setEnableHandcuffs(toggle: boolean): void;
		setEnableScuba(toggle: boolean): void;
		setEnableWeaponBlocking(toggle: boolean): void;
		setEnveffScale(value: number): void;
		setExclusivePhoneRelationships(): Handle;
		setEyeColor(index: number): void;
		setFaceFeature(index: number, scale: number): void;
		setFacialDecoration(collection: Hash, overlay: Hash): void;
		setFacialIdleAnimOverride(animName: string, animDict: string): void;
		setFiringPattern(patternHash: Hash): void;
		setFleeAttributes(attributes: number, p2: boolean): void;
		setGeneratesDeadBodyEvents(toggle: boolean): void;
		setGestureGroup(p1: any): void;
		setGetOutUpsideDownVehicle(toggle: boolean): void;
		setGravity(toggle: boolean): void;
		setGroupMemberPassengerIndex(index: number): void;
		setHairColor(colorID: number, highlightColorID: number): void;
		setHeadBlendData(
			shapeFirstID: number,
			shapeSecondID: number,
			shapeThirdID: number,
			skinFirstID: number,
			skinSecondID: number,
			skinThirdID: number,
			shapeMix: number,
			skinMix: number,
			thirdMix: number,
			isParent: boolean
		): void;
		setHeadOverlay(overlayID: number, index: number, opacity: number, firstColor: number, secondColor: number): void;
		setHeadOverlayColor(overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
		setHearingRange(value: number): void;
		setHelmet(canWearHelmet: boolean): void;
		setHelmetFlag(helmetFlag: number): void;
		setHelmetPropIndex(propIndex: number): void;
		setHelmetTextureIndex(textureIndex: number): void;
		setHighFallTask(p1: any, p2: any, p3: any): void;
		setIdRange(value: number): void;
		setIkTarget(
			p1: number,
			targetPed: Handle,
			boneLookAt: number,
			x: number,
			y: number,
			z: number,
			p7: any,
			duration: number,
			duration1: number
		): void;
		setIntoVehicle(vehicle: Handle, seatIndex: number): void;
		setInVehicleContext(context: Hash): void;
		setKeepTask(toggle: boolean): void;
		setLegIkMode(mode: number): void;
		setLodMultiplier(multiplier: number): void;
		setMaxHealth(value: number): void;
		setMaxMoveBlendRatio(value: number): void;
		setMaxTimeInWater(value: number): void;
		setMaxTimeUnderwater(value: number): void;
		setMinGroundTimeForStungun(ms: number): void;
		setMinMoveBlendRatio(value: number): void;
		setModelIsSuppressed(toggle: boolean): void;
		setMoney(amount: number): void;
		setMotionBlur(toggle: boolean): void;
		setMountedWeaponTarget(targetEntity: Handle, p2: any, x: number, y: number, z: number): void;
		setMoveAnimsBlendOut(): void;
		setMovementClipset(clipSet: string, p2: number): void;
		setMoveRateOverride(value: number): void;
		setNameDebug(name: string): void;
		setNeverLeavesGroup(toggle: boolean): void;
		setParachuteTaskTarget(x: number, y: number, z: number): void;
		setParachuteTaskThrust(thrust: number): void;
		setParachuteTintIndex(tintIndex: number): void;
		setPathAvoidFire(avoidFire: boolean): void;
		setPathCanDropFromHeight(Toggle: boolean): void;
		setPathCanUseClimbovers(Toggle: boolean): void;
		setPathCanUseLadders(Toggle: boolean): void;
		setPathPreferToAvoidWater(avoidWater: boolean): void;
		setPathsWidthPlant(mayEnterWater: boolean): void;
		setPinnedDown(pinned: boolean, i: number): void;
		setPlaysHeadOnHornAnimWhenDiesInVehicle(toggle: boolean): void;
		setPreferredCoverSet(itemSet: any): void;
		setPrimaryLookat(lookAt: Handle): void;
		setPropIndex(componentId: number, drawableId: number, TextureId: number, attach: boolean): void;
		setRagdollFlag(flag: number): void;
		setRagdollForceFall(): void;
		setRagdollOnCollision(toggle: boolean): void;
		setRandomComponentVariation(p1: boolean): void;
		setRandomProps(): void;
		setRelationshipGroupDefaultHash(hash: Hash): void;
		setRelationshipGroupHash(hash: Hash): void;
		setResetFlag(flagId: number, doReset: boolean): void;
		setResetFlagPreferRearSeats(flags: number): void;
		setResetRagdollFlag(flag: number): void;
		setScriptedAnimSeatOffset(p1: number): void;
		setSeeingRange(value: number): void;
		setShootRate(shootRate: number): void;
		setShootsAtCoord(x: number, y: number, z: number, toggle: boolean): void;
		setSphereDefensiveArea(x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;
		setStayInVehicleWhenJacked(toggle: boolean): void;
		setStealthMovement(p1: boolean, action: string): void;
		setSteersAroundObjects(toggle: boolean): void;
		setSteersAroundPeds(toggle: boolean): void;
		setSteersAroundVehicles(toggle: boolean): void;
		setStrafeClipset(clipSet: string): void;
		setSuffersCriticalHits(toggle: boolean): void;
		setSweat(sweat: number): void;
		setTargetLossResponse(responseType: number): void;
		setTaskVehicleChaseBehaviorFlag(flag: number, set: boolean): void;
		setTaskVehicleChaseIdealPursuitDistance(distance: number): void;
		setToInformRespectedFriends(radius: number, maxFriends: number): void;
		setToLoadCover(toggle: boolean): void;
		setToRagdoll(time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): boolean;
		setUsingActionMode(p1: boolean, p2: any, action: string): void;
		setVisualFieldCenterAngle(angle: number): void;
		setVisualFieldMaxAngle(value: number): void;
		setVisualFieldMaxElevationAngle(angle: number): void;
		setVisualFieldMinAngle(value: number): void;
		setVisualFieldMinElevationAngle(angle: number): void;
		setVisualFieldPeripheralRange(range: number): void;
		setWeaponMovementClipset(clipSet: string): void;
		setWetnessEnabledThisFrame(): void;
		setWetnessHeight(height: number): void;
		stopAnimPlayback(p1: any, p2: boolean): void;
		stopAnimTask(animDictionary: string, animationName: string, p3: number): void;
		stopWeaponFiringWhenDropped(): void;
		taskAchieveHeading(heading: number, timeout: number): void;
		taskAimGunAt(entity: Handle, duration: number, p3: boolean): void;
		taskAimGunAtCoord(x: number, y: number, z: number, time: number, p5: boolean, p6: boolean): void;
		taskAimGunScripted(scriptTask: Hash, p2: boolean, p3: boolean): void;
		taskArrest(target: Handle): void;
		taskBoatMission(
			boat: Handle,
			p2: any,
			p3: any,
			x: number,
			y: number,
			z: number,
			p7: any,
			maxSpeed: number,
			p9: any,
			p10: number,
			p11: any
		): void;
		taskChatTo(target: Handle, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number): void;
		taskClearLookAt(): void;
		taskClimb(unused: boolean): void;
		taskClimbLadder(p1: number): void;
		taskCombat(targetPed: Handle, p2: number, p3: number): void;
		taskCombatHatedTargetsAround(radius: number, p2: number): void;
		taskCombatHatedTargetsInArea(x: number, y: number, z: number, radius: number, p5: any): void;
		taskCower(duration: number): void;
		taskDriveBy(
			targetPed: Handle,
			p2: any,
			targetX: number,
			targetY: number,
			targetZ: number,
			p6: number,
			p7: any,
			p8: boolean,
			firingPattern: Hash
		): void;
		taskEnterVehicle(vehicle: Handle, timeout: number, seat: number, speed: number, p5: number, p6: any): void;
		taskFollowNavMeshToCoord(
			x: number,
			y: number,
			z: number,
			speed: number,
			timeout: number,
			stoppingRange: number,
			persistFollowing: boolean,
			unk: number
		): void;
		taskFollowNavMeshToCoordAdvanced(
			x: number,
			y: number,
			z: number,
			speed: number,
			timeout: number,
			unkFloat: number,
			unkInt: number,
			unkX: number,
			unkY: number,
			unkZ: number,
			unk2: number
		): void;
		taskFollowPointRoute(speed: number, unknown: number): void;
		taskFollowToOffsetOf(
			entity: Handle,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			movementSpeed: number,
			timeout: number,
			stoppingRange: number,
			persistFollowing: boolean
		): void;
		taskForceMotionState(state: Hash, p2: boolean): void;
		taskGetOffBoat(boat: Handle): void;
		taskGoStraightToCoord(x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void;
		taskGotoAiming(target: Handle, distanceToStopAt: number, StartAimingDist: number): void;
		taskGoToCoordAndAimAtHatedEntitiesNearCoord(
			gotoX: number,
			gotoY: number,
			gotoZ: number,
			aimNearX: number,
			aimNearY: number,
			aimNearZ: number,
			speed: number,
			shoot: boolean,
			unknown1: number,
			unknown2: number,
			unkTrue: boolean,
			unknown3: number,
			heading: boolean,
			firingPattern: Hash
		): void;
		taskGoToCoordAnyMeans(x: number, y: number, z: number, speed: number, p5: any, p6: boolean, walkingStyle: number, p8: number): void;
		taskGoToCoordAnyMeansExtraParams(
			x: number,
			y: number,
			z: number,
			speed: number,
			p5: any,
			p6: boolean,
			walkingStyle: number,
			p8: number,
			p9: any,
			p10: any,
			p11: any
		): void;
		taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(
			x: number,
			y: number,
			z: number,
			speed: number,
			p5: any,
			p6: boolean,
			walkingStyle: number,
			p8: number,
			p9: any,
			p10: any,
			p11: any,
			p12: any
		): void;
		taskGoToCoordWhileAimingAtCoord(
			x: number,
			y: number,
			z: number,
			aimAtX: number,
			aimAtY: number,
			aimAtZ: number,
			moveSpeed: number,
			p8: boolean,
			p9: number,
			p10: number,
			p11: boolean,
			flags: any,
			p13: boolean,
			firingPattern: Hash
		): void;
		taskGuardCurrentPosition(p1: number, p2: number, p3: number): void;
		taskGuardSphereDefensiveArea(
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: any,
			p7: number,
			p8: number,
			p9: number,
			p10: number
		): void;
		taskHandsUp(duration: number, facingPed: Handle, p3: number, p4: boolean): void;
		taskHeliChase(entityToFollow: Handle, x: number, y: number, z: number): void;
		taskHeliMission(
			vehicle: Handle,
			p2: any,
			pedToFollow: Handle,
			posX: number,
			posY: number,
			posZ: number,
			mode: number,
			speed: number,
			radius: number,
			angle: number,
			p11: number,
			height: number,
			p13: number,
			p14: number
		): void;
		taskJump(unused: boolean): void;
		taskLeaveAnyVehicle(p1: number, p2: number): void;
		taskLeaveVehicle(vehicle: Handle, flags: number): void;
		taskLookAt(lookAt: Handle, duration: number, unknown1: number, unknown2: number): void;
		taskMoveNetwork(task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;
		taskMoveNetworkAdvanced(
			p1: string,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: any,
			p9: number,
			p10: boolean,
			animDict: string,
			flags: number
		): void;
		taskOpenVehicleDoor(vehicle: Handle, timeOut: number, doorIndex: number, speed: number): void;
		taskParachute(p1: boolean): void;
		taskParachuteToTarget(x: number, y: number, z: number): void;
		taskPatrol(p1: string, p2: any, p3: boolean, p4: boolean): void;
		taskPause(ms: number): void;
		taskPerformSequence(taskSequence: Handle): void;
		taskPlaneChase(entityToFollow: Handle, x: number, y: number, z: number): void;
		taskPlaneLand(
			plane: Handle,
			runwayStartX: number,
			runwayStartY: number,
			runwayStartZ: number,
			runwayEndX: number,
			runwayEndY: number,
			runwayEndZ: number
		): void;
		taskPlaneMission(
			plane: Handle,
			targetVehicle: Handle,
			targetPed: Handle,
			destinationX: number,
			destinationY: number,
			destinationZ: number,
			p7: number,
			physicsSpeed: number,
			p9: number,
			p10: number,
			maxAltitude: number,
			minAltitude: number
		): void;
		taskPlantBomb(x: number, y: number, z: number, heading: number): void;
		taskPlayAnim(
			animDictionary: string,
			animationName: string,
			speed: number,
			speedMultiplier: number,
			duration: number,
			flag: number,
			playbackRate: number,
			lockX: boolean,
			lockY: boolean,
			lockZ: boolean
		): void;
		taskPlayAnimAdvanced(
			animDict: string,
			animName: string,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			speed: number,
			speedMultiplier: number,
			duration: number,
			flag: any,
			animTime: number,
			p14: any,
			p15: any
		): void;
		taskPlayPhoneGestureAnimation(p1: any, p2: any, p3: any, p4: number, p5: number, p6: boolean, p7: boolean): void;
		taskPutDirectlyIntoCover(
			x: number,
			y: number,
			z: number,
			timeout: any,
			p5: boolean,
			p6: number,
			p7: boolean,
			p8: boolean,
			p9: object,
			p10: boolean
		): void;
		taskPutDirectlyIntoMelee(meleeTarget: Handle, p2: number, p3: number, p4: number, p5: boolean): void;
		taskRappelFromHeli(p1: number): void;
		taskReactAndFlee(fleeTarget: Handle): void;
		taskReloadWeapon(doReload: boolean): void;
		taskScriptedAnimation(p1: any, p2: any, p3: any, p4: number, p5: number): void;
		taskSeekCoverFrom(target: Handle, duration: number, p3: boolean): void;
		taskSeekCoverToCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: any, p8: boolean): void;
		taskSetBlockingOfNonTemporaryEvents(toggle: boolean): void;
		taskSetDecisionMaker(p1: Hash): void;
		taskShockingEventReact(eventHandle: number): void;
		taskShootAtCoord(x: number, y: number, z: number, duration: number, firingPattern: Hash): void;
		taskShuffleToNextVehicleSeat(vehicle: Handle): void;
		taskSkyDive(): void;
		taskSlideToCoord(x: number, y: number, z: number, heading: number, p5: number): void;
		taskSlideToCoordHdgRate(x: number, y: number, z: number, heading: number, p5: number, p6: number): void;
		taskSmartFlee(fleeTarget: Handle, distance: number, fleeTime: any, p4: boolean, p5: boolean): void;
		taskSmartFleeCoord(x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean): void;
		taskStandGuard(x: number, y: number, z: number, heading: number, scenarioName: string): void;
		taskStandStill(time: number): void;
		taskStartScenarioAtPosition(scenarioName: string, x: number, y: number, z: number, heading: number, p6: any, p7: boolean, p8: boolean): void;
		taskStartScenarioInPlace(scenarioName: string, unkDelay: number, playEnterAnim: boolean): void;
		taskStayInCover(): void;
		taskStealthKill(target: Handle, killType: Hash, p3: number, p4: boolean): void;
		taskStopPhoneGestureAnimation(): void;
		taskSwapWeapon(p1: boolean): void;
		taskSweepAim(anim: string, p2: string, p3: string, p4: string, p5: number, vehicle: Handle, p7: number, p8: number): void;
		taskSynchronizedScene(
			scene: number,
			animDictionary: string,
			animationName: string,
			speed: number,
			speedMultiplier: number,
			duration: number,
			flag: number,
			playbackRate: number,
			p9: any
		): void;
		taskTurnToFace(entity: Handle, duration: number): void;
		taskTurnToFaceCoord(x: number, y: number, z: number, duration: number): void;
		taskUseMobilePhone(p1: number): void;
		taskUseMobilePhoneTimed(duration: number): void;
		taskUseNearestScenarioToCoordWarp(x: number, y: number, z: number, radius: number, p5: any): void;
		taskVehicleAimAt(target: Handle): void;
		taskVehicleChase(targetEnt: Handle): void;
		taskVehicleDriveToCoord(
			vehicle: Handle,
			x: number,
			y: number,
			z: number,
			speed: number,
			p6: any,
			vehicleModel: Hash,
			drivingMode: number,
			stopRange: number,
			p10: number
		): void;
		taskVehicleDriveToCoordLongrange(vehicle: Handle, x: number, y: number, z: number, speed: number, driveMode: number, stopRange: number): void;
		taskVehicleDriveWander(vehicle: Handle, speed: number, drivingStyle: number): void;
		taskVehicleEscort(
			vehicle: Handle,
			targetVehicle: Handle,
			mode: number,
			speed: number,
			drivingStyle: number,
			minDistance: number,
			p7: number,
			noRoadsDistance: number
		): void;
		taskVehicleFollow(vehicle: Handle, targetEntity: Handle, drivingStyle: number, speed: number, minDistance: number): void;
		taskVehicleFollowWaypointRecording(
			vehicle: Handle,
			WPRecording: string,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: boolean,
			p9: number
		): void;
		taskVehicleGotoNavmesh(vehicle: Handle, x: number, y: number, z: number, speed: number, behaviorFlag: number, stoppingRange: number): void;
		taskVehicleHeliProtect(
			vehicle: Handle,
			entityToFollow: Handle,
			targetSpeed: number,
			p4: number,
			radius: number,
			altitude: number,
			p7: number
		): void;
		taskVehicleMissionCoorsTarget(
			vehicle: Handle,
			x: number,
			y: number,
			z: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: boolean
		): void;
		taskVehicleMissionTarget(
			vehicle: Handle,
			pedTarget: Handle,
			mode: number,
			maxSpeed: number,
			drivingStyle: number,
			minDistance: number,
			p7: number,
			p8: boolean
		): void;
		taskVehiclePark(vehicle: Handle, x: number, y: number, z: number, heading: number, mode: number, radius: number, keepEngineOn: boolean): void;
		taskVehicleTempAction(vehicle: Handle, action: number, time: number): void;
		taskWanderInArea(x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
		taskWanderStandard(p1: number, p2: number): void;
		taskWarpIntoVehicle(vehicle: Handle, seat: number): void;
		taskWrithe(target: Handle, time: number, p3: number): void;
		uncuff(): void;
		unregisterheadshot(): void;
		updateHeadBlendData(shapeMix: number, skinMix: number, thirdMix: number): void;
		updateTaskAimGunScriptedTarget(p1: Handle, p2: number, p3: number, p4: number, p5: boolean): void;
		updateTaskHandsUpDuration(duration: number): void;
		wasKilledByStealth(): boolean;
		wasKilledByTakedown(): boolean;
		wasSkeletonUpdated(): boolean;
	}

	export interface PedMp extends PedBaseMp {
		spawnPosition: shared.Vector3Mp;
		taskPlayAnim(
			animDictionary: string,
			animationName: string,
			speed: number,
			speedMultiplier: number,
			duration: number,
			flag: number,
			playbackRate: number,
			lockX: boolean,
			lockY: boolean,
			lockZ: boolean
		): void;
		setHeadOverlay(overlayID: number, index: number, opacity: number): void;
		setHeadOverlayColor(overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
		setComponentVariation(componentId: number, drawableId: number, textureId: number, paletteId: number): void;
		setHairColor(colorID: number, highlightColorID: number): void;
		setEyeColor(index: number): void;
		setHeadBlendData(
			shapeFirstID: number,
			shapeSecondID: number,
			shapeThirdID: number,
			skinFirstID: number,
			skinSecondID: number,
			skinThirdID: number,
			shapeMix: number,
			skinMix: number,
			thirdMix: number,
			isParent: boolean
		): void;
		setFaceFeature(index: number, scale: number): void;
	}

	export interface PedMpPool extends EntityMpPool<PedMp> {
		'new'(model: PedHash | Hash, position: shared.Vector3Mp, heading: number, dimension?: number): PedMp;
	}

	export interface PlayerMp extends PedBaseMp {
		armour: number;
		eyeColour: number;
		hairColour: number;
		hairHighlightColour: number;
		heading: number;
		health: number;
		name: string;
		p2pEnabled: boolean;
		p2pConnected: boolean;
		voiceAutoVolume: boolean;
		voiceVolume: number;
		voice3d: any; // TODO
		weapon: Hash;
		readonly action: string;
		readonly aimTarget: boolean;
		readonly ip: string;
		readonly isAiming: boolean;
		readonly isClimbing: boolean;
		readonly isEnteringVehicle: boolean;
		readonly isInCover: boolean;
		readonly isJumping: boolean;
		readonly isLeavingVehicle: boolean;
		readonly isTypingInTextChat: boolean;
		readonly isVoiceActive: boolean;
		readonly ping: number;
		readonly vehicle: VehicleMp;

		addVehicleSubtaskAttack(ped2: Handle): void;
		addVehicleSubtaskAttackCoord(x: number, y: number, z: number): void;
		call(eventName: string, ...args: any[]): void;
		canPedHear(ped: Handle): boolean;
		changePed(ped: Handle, b2: boolean, b3: boolean): void;
		clearHasDamagedAtLeastOneNonAnimalPed(): void;
		clearHasDamagedAtLeastOnePed(): void;
		clearParachuteModelOverride(): void;
		clearParachutePackModelOverride(): void;
		clearParachuteVariationOverride(): void;
		clearSecondaryTask(): void;
		clearWantedLevel(): void;
		explodeHead(weaponHash: Hash): void;
		getCurrentStealthNoise(): number;
		getGroup(): number;
		getHasReserveParachute(): boolean;
		getInvincible(): boolean;
		getMaxArmour(): number;
		getName(): string;
		getParachutePackTintIndex(tintIndex: number): number;
		getParachuteSmokeTrailColor(
			r: number,
			g: number,
			b: number
		): {
			r: number;
			g: number;
			b: number;
		};
		getPed(): Handle;
		getPedScriptIndex(): Handle;
		getReserveParachuteTintIndex(tintIndex: number): number;
		getRgbColour(
			r: number,
			g: number,
			b: number
		): {
			r: number;
			g: number;
			b: number;
		};
		getSprintStaminaRemaining(): number;
		getSprintTimeRemaining(): number;
		getTeam(): number;
		getUnderwaterTimeRemaining(): number;
		getVoiceAttribute(attribute: any): any; // TODO
		getWantedCentrePosition(): shared.Vector3Mp;
		getWantedLevel(): number;
		giveRagdollControl(toggle: boolean): void;
		hasBeenSpottedInStolenVehicle(): boolean;
		hasDamagedAtLeastOneNonAnimalPed(): boolean;
		hasDamagedAtLeastOnePed(): boolean;
		hasLeftTheWorld(): boolean;
		hasTeleportFinished(): boolean;
		hasUseScenarioTask(): boolean;
		hideBloodDamageByZone(p1: any, p2: boolean): void;
		isControlOn(): boolean;
		isFreeAiming(): boolean;
		isFreeForAmbientTask(): boolean;
		isPlaying(): boolean;
		isPressingHorn(): boolean;
		isReadyForCutscene(): boolean;
		isRidingTrain(): boolean;
		isScriptControlOn(): boolean;
		isTargettingAnything(): boolean;
		isWantedLevelGreater(wantedLevel: number): boolean;
		resetArrestState(): void;
		resetInputGait(): void;
		resetStamina(): void;
		setCanBeHassledByGangs(toggle: boolean): void;
		setCanDoDriveBy(toggle: boolean): void;
		setCanLeaveParachuteSmokeTrail(enabled: boolean): void;
		setCanUseCover(toggle: boolean): void;
		setClothPinFrames(toggle: boolean): void;
		setControl(toggle: boolean, possiblyFlags: number): void;
		setEveryoneIgnore(toggle: boolean): void;
		setForcedAim(toggle: boolean): void;
		setForcedZoom(toggle: boolean): void;
		setForceSkipAimIntro(toggle: boolean): void;
		setHasReserveParachute(): void;
		setLockon(toggle: boolean): void;
		setLockonRangeOverride(range: number): void;
		setMaxArmour(value: number): void;
		setMayNotEnterAnyVehicle(): void;
		setMayOnlyEnterThisVehicle(vehicle: Handle): void;
		setMeleeWeaponDamageModifier(modifier: number): void;
		setModel(model: Hash): void;
		setNoiseMultiplier(multiplier: number): void;
		setParachuteModelOverride(model: Hash): void;
		setParachutePackModelOverride(model: Hash): void;
		setParachutePackTintIndex(tintIndex: number): void;
		setParachuteSmokeTrailColor(r: number, g: number, b: number): void;
		setParachuteVariationOverride(p1: number, p2: any, p3: any, p4: boolean): void;
		setPoliceIgnore(toggle: boolean): void;
		setReserveParachuteTintIndex(tintIndex: number): void;
		setSimulateAiming(toggle: boolean): void;
		setSneakingNoiseMultiplier(multiplier: number): void;
		setSprint(toggle: boolean): void;
		setStealthPerceptionModifier(value: number): void;
		setTeam(team: number): void;
		setVehicleDamageModifier(damageAmount: number): void;
		setVehicleDefenseModifier(modifier: number): void;
		setVoiceAttribute(attribute: any, value: any): void; // TODO
		setWantedCentrePosition(x: number, y: number, z: number): void;
		setWantedLevel(wantedLevel: number, disableNoMission: boolean): void;
		setWantedLevelNoDrop(wantedLevel: number, p2: boolean): void;
		setWantedLevelNow(p1: boolean): void;
		setWeaponDamageModifier(damageAmount: number): void;
		setWeaponDefenseModifier(modifier: number): void;
		taskGotoOffset(p1: any, p2: any, x: number, y: number, z: number, duration: number): void;
		taskGoToWhileAimingAtEntity(
			entityToWalkTo: Handle,
			entityToAimAt: Handle,
			speed: number,
			shootatEntity: boolean,
			p5: number,
			p6: number,
			p7: boolean,
			p8: boolean,
			firingPattern: Hash
		): void;
		taskVehicleShootAt(target: Handle, p2: number): void;
		updateTaskSweepAim(entity: Handle): void;
	}

	export interface PlayerMpPool extends EntityMpPool<PlayerMp> {
		local: PlayerMp;
	}

	export interface PickupMp extends EntityMp {}

	export interface PickupMpPool extends EntityMpPool<PickupMp> {
		'new'(...args: any[]): PickupMp; // TODO
	}

	export interface VehicleMp extends EntityMp {
		gear: number;
		rpm: number;
		steeringAngle: number;

		addUpsidedownCheck(): void;
		areAllWindowsIntact(): boolean;
		attachToCargobob(cargobob: Handle, p1: number, x: number, y: number, z: number): void;
		attachToTowTruck(vehicle: Handle, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;
		attachToTrailer(trailer: Handle, radius: number): void;
		canShuffleSeat(p0: any): boolean;
		cargobobMagnetGrab(toggle: boolean): void;
		clearCustomPrimaryColour(): void;
		clearCustomSecondaryColour(): void;
		closeBombBayDoors(): void;
		detachFromAnyCargobob(): boolean;
		detachFromAnyTowTruck(): boolean;
		detachFromCargobob(cargobob: Handle): void;
		detachFromTowTruck(vehicle: Handle): void;
		detachFromTrailer(): void;
		detachWindscreen(): void;
		disableImpactExplosionActivation(toggle: boolean): void;
		disablePlaneAileron(p0: boolean, p1: boolean): void;
		doesExtraExist(extraId: number): boolean;
		doesHaveRoof(): boolean;
		doesHaveStuckVehicleCheck(): boolean;
		doesHaveWeapon(): boolean;
		ejectJb700Roof(x: number, y: number, z: number): void;
		enableCargobobHook(state: number): void;
		explode(isAudible: boolean, isInvisble: boolean): void;
		explodeInCutscene(p0: boolean): void;
		fixWindow(index: number): void;
		getAcceleration(): number;
		getAttachedToCargobob(): Handle;
		getAttachedToTowTruck(): Handle;
		getBoatAnchor(): boolean;
		getBodyHealth(): number;
		getBodyHealth2(): number;
		getCargobobHookPosition(): shared.Vector3Mp;
		getCauseOfDestruction(): Hash;
		getClass(): number;
		getColor(
			r: number,
			g: number,
			b: number
		): {
			r: number;
			g: number;
			b: number;
		};
		getColourCombination(): number;
		getColours(
			colorPrimary: number,
			colorSecondary: number
		): {
			colorPrimary: number;
			colorSecondary: number;
		};
		getConvertibleRoofState(): number;
		getCustomPrimaryColour(
			r: number,
			g: number,
			b: number
		): {
			r: number;
			g: number;
			b: number;
		};
		getCustomSecondaryColour(
			r: number,
			g: number,
			b: number
		): {
			r: number;
			g: number;
			b: number;
		};
		getDeformationAtPos(offsetX: number, offsetY: number, offsetZ: number): shared.Vector3Mp;
		getDirtLevel(): number;
		getDoorAngleRatio(door: number): number;
		getDoorLockStatus(): number;
		getDoorsLockedForPlayer(player: Handle): boolean;
		getEngineHealth(): number;
		getExtraColours(
			pearlescentColor: number,
			wheelColor: number
		): {
			pearlescentColor: number;
			wheelColor: number;
		};
		getHandling(typeName: string): number | string;
		getDefaultHandling(typeName: string): number | string;
		getHeliEngineHealth(): number;
		getHeliMainRotorHealth(): number;
		getHeliTailRotorHealth(): number;
		getIsEngineRunning(): number;
		getIsLeftHeadlightDamaged(): boolean;
		getIsPrimaryColourCustom(): boolean;
		getIsRightHeadlightDamaged(): boolean;
		getIsSecondaryColourCustom(): boolean;
		getLandingGearState(): number;
		getLastPedInSeat(seatIndex: number): Handle;
		getLayoutHash(): Hash;
		getLightsState(
			lightsOn: number,
			highbeamsOn: number
		): {
			lightsOn: boolean;
			highbeamsOn: boolean;
		};
		getLivery(): number;
		getLiveryCount(): number;
		getLiveryName(liveryIndex: number): string;
		getMaxBreaking(): number;
		getMaxNumberOfPassengers(): number;
		getMaxTraction(): number;
		getMod(modType: number): number;
		getModColor1(
			paintType: number,
			color: number,
			p2: number
		): {
			paintType: number;
			color: number;
			p2: number;
		};
		getModColor1TextLabel(p0: boolean): string;
		getModColor2(
			paintType: number,
			color: number
		): {
			paintType: number;
			color: number;
			p2: number;
		};
		getModColor2TextLabel(): string;
		getModKit(): number;
		getModKitType(): number;
		getModModifierValue(modType: number, modIndex: number): any; // TODO
		getModSlotName(modType: number): string;
		getModTextLabel(modType: number, modValue: number): string;
		getModVariation(modType: number): boolean;
		getNeonLightsColour(
			r: number,
			g: number,
			b: number
		): {
			r: number;
			g: number;
			b: number;
		};
		getNumberOfColours(): number;
		getNumberOfPassengers(): number;
		getNumberPlateText(): string;
		getNumberPlateTextIndex(): number;
		getNumModKits(): number;
		getNumMods(modType: number): number;
		getOwner(entity: Handle): boolean;
		getPaintFade(): number;
		getPedInSeat(index: number): Handle;
		getPedUsingDoor(doorIndex: number): Handle;
		getPetrolTankHealth(): number;
		getPlateType(): number;
		getSuspensionHeight(): number;
		getTrailer(vehicle: Handle): Handle;
		getTrainCarriage(cariage: number): Handle;
		getTyresCanBurst(): boolean;
		getTyreSmokeColor(
			r: number,
			g: number,
			b: number
		): {
			r: number;
			g: number;
			b: number;
		};
		getVehicleTrailer(vehicle: Handle): Handle;
		getWheelType(): number;
		getWindowTint(): number;
		isAConvertible(p0: boolean): boolean;
		isAlarmActivated(): boolean;
		isAnySeatEmpty(): boolean;
		isAttachedToCargobob(vehicleAttached: Handle): boolean;
		isAttachedToTowTruck(vehicle: Handle): boolean;
		isAttachedToTrailer(): boolean;
		isBig(): boolean;
		isBumperBrokenOff(front: boolean): boolean;
		isCargobobHookActive(): boolean;
		isCargobobMagnetActive(): boolean;
		isDamaged(): boolean;
		isDoorDamaged(doorId: number): boolean;
		isDriveable(p0: boolean): boolean;
		isExtraTurnedOn(extraId: number): boolean;
		isHeliPartBroken(p0: boolean, p1: boolean, p2: boolean): boolean;
		isHighDetail(): boolean;
		isInBurnout(): boolean;
		isModel(model: Hash): boolean;
		isNeonLightEnabled(index: number): boolean;
		isOnAllWheels(): boolean;
		isSearchlightOn(): boolean;
		isSeatFree(seatIndex: number): boolean;
		isSirenOn(): boolean;
		isSirenSoundOn(): boolean;
		isStolen(): boolean;
		isStopped(): boolean;
		isStoppedAtTrafficLights(): boolean;
		isStuckOnRoof(): boolean;
		isStuckTimerUp(p0: number, p1: number): boolean;
		isTaxiLightOn(): boolean;
		isToggleModOn(modType: number): boolean;
		isTyreBurst(wheelId: number, completely: boolean): boolean;
		isVisible(): boolean;
		isWindowIntact(windowIndex: number): boolean;
		jitter(p0: boolean, yaw: number, pitch: number, roll: number): void;
		lowerConvertibleRoof(instantlyLower: boolean): void;
		movable(): boolean;
		openBombBayDoors(): void;
		raiseConvertibleRoof(instantlyRaise: boolean): void;
		releasePreloadMods(): void;
		removeHighDetailModel(): void;
		removeMod(modType: number): void;
		removeUpsidedownCheck(): void;
		removeWindow(windowIndex: number): void;
		requestHighDetailModel(): void;
		resetStuckTimer(reset: boolean): void;
		resetWheels(toggle: boolean): void;
		retractCargobobHook(): void;
		rollDownWindow(windowIndex: number): void;
		rollDownWindows(): void;
		rollUpWindow(windowIndex: number): void;
		setAlarm(state: boolean): void;
		setAllowNoPassengersLockon(toggle: boolean): void;
		setAllsSpawns(p0: boolean, p1: boolean, p2: boolean): void;
		setAutomaticallyAttaches(p0: any, p1: any): void;
		setBikeLeanAngle(x: number, y: number): void;
		setBoatAnchor(toggle: boolean): void;
		setBodyHealth(value: number): void;
		setBrakeLights(toggle: boolean): void;
		setBurnout(toggle: boolean): void;
		setCanBeTargetted(state: boolean): void;
		setCanBeUsedByFleeingPeds(toggle: boolean): void;
		setCanBeVisiblyDamaged(state: boolean): void;
		setCanBreak(toggle: boolean): void;
		setCanRespray(state: boolean): void;
		setCeilingHeight(p0: number): void;
		setColourCombination(numCombos: number): void;
		setColours(colorPrimary: number, colorSecondary: number): void;
		setConvertibleRoof(p0: boolean): void;
		setCreatesMoneyPickupsWhenExploded(toggle: boolean): void;
		setCustomPrimaryColour(r: number, g: number, b: number): void;
		setCustomSecondaryColour(r: number, g: number, b: number): void;
		setDamage(xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, focusOnModel: boolean): void;
		setDeformationFixed(): void;
		setDirtLevel(dirtLevel: number): void;
		setDisablePetrolTankDamage(toggle: boolean): void;
		setDisablePetrolTankFires(toggle: boolean): void;
		setDoorBreakable(doorIndex: number, isBreakable: boolean): void;
		setDoorBroken(doorIndex: number, createDoorObject: boolean): void;
		setDoorControl(doorIndex: number, speed: number, angle: number): void;
		setDoorLatched(doorIndex: number, p1: boolean, p2: boolean, p3: boolean): void;
		setDoorOpen(doorIndex: number, loose: boolean, openInstantly: boolean): void;
		setDoorShut(doorIndex: number, closeInstantly: boolean): void;
		setDoorsLocked(doorLockStatus: number): void;
		setDoorsLockedForAllPlayers(toggle: boolean): void;
		setDoorsLockedForPlayer(player: Handle, toggle: boolean): void;
		setDoorsLockedForTeam(team: number, toggle: boolean): void;
		setDoorsShut(closeInstantly: boolean): void;
		setEngineCanDegrade(toggle: boolean): void;
		setEngineHealth(health: number): void;
		setEngineOn(value: boolean, instantly: boolean, otherwise: boolean): void;
		setEnginePowerMultiplier(value: number): void;
		setEngineTorqueMultiplier(value: number): void;
		setExclusiveDriver(ped: Handle, p1: number): void;
		setExplodesOnHighExplosionDamage(toggle: boolean): void;
		setExtra(extraId: number, toggle: number): void;
		setExtraColours(pearlescentColor: number, wheelColor: number): void;
		setFixed(): void;
		setForwardSpeed(speed: number): void;
		setFrictionOverride(friction: number): void;
		setFullbeam(toggle: boolean): void;
		setGravity(toggle: boolean): void;
		setHalt(distance: number, killEngine: number, unknown: boolean): void;
		setHandbrake(toggle: boolean): void;
		setHandling(typeName: string, value: number | string): void;
		setHasBeenOwnedByPlayer(owned: boolean): void;
		setHasStrongAxles(toggle: boolean): void;
		setHeliBladesFullSpeed(): void;
		setHeliBladeSpeed(speed: number): void;
		setHelicopterRollPitchYawMult(multiplier: number): void;
		setIndicatorLights(turnSignal: number, toggle: boolean): void;
		setInteriorLight(toggle: boolean): void;
		setIsConsideredByPlayer(toggle: boolean): void;
		setIsStolen(isStolen: boolean): void;
		setIsWanted(state: boolean): void;
		setJetEngineOn(toggle: boolean): void;
		setLandingGear(state: number): void;
		setLightMultiplier(multiplier: number): void;
		setLights(state: number | boolean): void;
		setLivery(livery: number): void;
		setLodMultiplier(multiplier: number): void;
		setMissionTrainCoords(x: number, y: number, z: number): void;
		setMod(modType: number, modIndex: number): void;
		setModColor1(paintType: number, color: number, p2: number): void;
		setModColor2(paintType: number, color: number): void;
		setModKit(modKit: number): void;
		setNameDebug(name: string): void;
		setNeedsToBeHotwired(toggle: boolean): void;
		setNeonLightEnabled(index: number, toggle: boolean): void;
		setNeonLightsColour(r: number, g: number, b: number): void;
		setNumberPlateText(plateText: string): void;
		setNumberPlateTextIndex(plateIndex: number): void;
		setOnGroundProperly(): boolean;
		setOutOfControl(killDriver: boolean, explodeOnImpact: boolean): void;
		setPaintFade(fade: number): void;
		setPedEnabledBikeRingtone(p0: any): boolean;
		setPedTargettableDestory(vehicleComponent: number, destroyType: number): void;
		setPetrolTankHealth(fix: number): void;
		setPlaneMinHeightAboveGround(height: number): void;
		setPlaybackToUseAi(flag: number): void;
		setPlayersLast(): void;
		setProvidesCover(toggle: boolean): void;
		setReduceGrip(toggle: boolean): void;
		setRenderTrainAsDerailed(toggle: boolean): void;
		setRudderBroken(p0: boolean): void;
		setSearchlight(toggle: boolean, canBeUsedByAI: boolean): void;
		setSilent(toggle: boolean): void;
		setSiren(toggle: boolean): void;
		setSteerBias(value: number): void;
		setStrong(toggle: boolean): void;
		setTaxiLights(state: boolean): void;
		setTimedExplosion(ped: Handle, toggle: boolean): void;
		setTowTruckCraneHeight(height: number): void;
		setTrainCruiseSpeed(speed: number): void;
		setTrainSpeed(speed: number): void;
		setTyreBurst(tyreIndex: number, onRim: boolean, p2: number): void;
		setTyreFixed(tyreIndex: number): void;
		setTyresCanBurst(toggle: boolean): void;
		setTyreSmokeColor(r: number, g: number, b: number): void;
		setUndriveable(toggle: boolean): void;
		setWheelsCanBreak(enabled: boolean): void;
		setWheelsCanBreakOffWhenBlowUp(toggle: boolean): void;
		setWheelType(wheelType: number): void;
		setWindowTint(tint: number): void;
		smashWindow(index: number): void;
		startAlarm(): void;
		startHorn(duration: number, model: Hash, forever: boolean): void;
		steerUnlockBias(toggle: boolean): void;
		toggleMod(modType: number, toggle: boolean): void;
		trackVisibility(): void;
		wasCounterActivated(p0: any): boolean;
	}

	export interface VehicleMpPool extends EntityMpPool<VehicleMp> {
		'new'(
			model: shared.HashOrString,
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

	export interface BlipMp {
		// TODO: wiki
		dimension: number;

		// TODO: wiki
		handle: number;

		// TODO: wiki
		id: number;

		// TODO: wiki
		remoteId: number;

		// TODO: wiki
		type: string;

		// TODO: wiki
		addTextComponentSubstringName(): void;

		/**
		 * A function to check if a blip exists.
		 */
		doesExist(): boolean;

		// TODO: wiki
		endTextCommandSetName(): void;

		/**
		 * Function to return the alpha value of the blip.
		 */
		getAlpha(): number;

		/**
		 * Function to return the colour value of the blip.
		 */
		getColour(): number;

		/**
		 * Function to return the coordinates of the blip.
		 */
		getCoords(): shared.Vector3Mp;

		// TODO: wiki
		getFirstInfoId(): BlipMp;

		// TODO: wiki
		getInfoIdDisplay(): number;

		// TODO: wiki
		getInfoIdEntityIndex(): Handle;

		/**
		 * This function is hard-coded to always return 0.
		 */
		getInfoIdPickupIndex(): PickupMp;

		/**
		 * Returns a value based on what the blip is attached to.
		 *
		 * @link https://wiki.rage.mp/index.php?title=Blip::getInfoIdType
		 */
		getInfoIdType(): number;

		// TODO: wiki
		getHudColour(): number;

		// TODO: wiki
		getNextInfoId(): BlipMp;

		// TODO: wiki
		getSprite(): number;

		/**
		 * Function to return the flashing status of blip.
		 */
		isFlashing(): boolean;

		/**
		 * Function to return whether the blip is [set as mission creator](https://wiki.rage.mp/index.php?title=Blip::setAsMissionCreator).
		 */
		isMissionCreator(): boolean;

		/**
		 * Function to return whether the blip is visible on client's minimap.
		 */
		isOnMinimap(): boolean;

		/**
		 * Function to find out whether blip is [set as short range](https://wiki.rage.mp/index.php?title=Blip::setAsShortRange).
		 */
		isShortRange(): boolean;

		// TODO: wiki
		hideNumberOn(): void;

		// TODO: wiki
		pulse(): void;

		/**
		 * Function to set alpha-channel for blip color.
		 *
		 * @param alpha Alpha value in 0 to 255
		 */
		setAlpha(alpha: number): void;

		/**
		 * Function to set a blip as friendly.
		 *
		 * @param toggle `true` to set as friendly (blue) or `false` for the opposite (red)
		 */
		setAsFriendly(toggle: boolean): void;

		/**
		 * Function to set a blip as Mission Creator.
		 *
		 * @param toggle `true` or `false`
		 */
		setAsMissionCreator(toggle: boolean): void;

		/**
		 * Function to set a blip as short range (gone when it is not in minimap range)
		 *
		 * @param toggle `true` or `false`
		 */
		setAsShortRange(toggle: boolean): void;

		// TODO: wiki
		setBright(toggle: boolean): void;

		/**
		 * @link https://wiki.rage.mp/index.php?title=Blip::setCategory
		 */
		setCategory(index: number): void;

		/**
		 * Function to set a blip color. Default to yellow if not used.
		 *
		 * @param color [Color List](https://wiki.rage.mp/index.php?title=Blips#Blip_colors)
		 */
		setColour(color: number): void;

		// TODO: wiki
		setCoords(position: shared.Vector3Mp): void;

		/**
		 * @link https://wiki.rage.mp/index.php?title=Blip::setDisplay
		 */
		setDisplay(displayId: number): void;

		// TODO: wiki
		setFade(opacity: number, duration: number): void;

		/**
		 * Function to set a blip flashes (blinking).
		 *
		 * @param toggle `true` or `false`
		 */
		setFlashes(toggle: boolean): void;

		// TODO: wiki
		setFlashesAlternate(toggle: boolean): void;

		// TODO: wiki
		setFlashInterval(p1: any): void;

		/**
		 * Adds up after viewing multiple R* scripts. I believe that the duration is in miliseconds.
		 *
		 * @param duration Flash Duration
		 */
		setFlashTimer(duration: number): void;

		// TODO: wiki
		setHighDetail(toggle: boolean): void;

		// TODO: wiki
		setNameFromTextFile(gxtEntry: string): void;

		/**
		 * Function to set blip name to player [social club gamer tag name](https://wiki.rage.mp/index.php?title=Player::socialClub).
		 *
		 * @param player Player
		 */
		setNameToPlayerName(player: PlayerMp): void;

		/**
		 * Function to set blip priority (i.e. orders in map legend)
		 *
		 * @param priority Priority
		 */
		setPriority(priority: number): void;

		/**
		 * After some testing, looks like you need to use UI:CEIL() on the rotation (vehicle/ped heading) before using it there.
		 *
		 * @param rotation Rotation
		 */
		setRotation(rotation: number): void;

		/**
		 * Enable/Disable showing route for the Blip-object.
		 *
		 * @param enabled `true` or `false`
		 */
		setRoute(enabled: boolean): void;

		// TODO: wiki
		setRouteColour(colour: number): void;

		// TODO: wiki
		setScale(scale: number): void;

		// TODO: wiki
		setSecondaryColour(r: number, g: number, b: number): void;

		// TODO: wiki
		setShowCone(toggle: boolean): void;

		/**
		 * Adds the GTA:Online player heading indicator to a blip.
		 *
		 * @param toggle `true` or `false`
		 */
		setShowHeadingIndicator(toggle: boolean): void;

		/**
		 * Takes a blip object and adds a sprite to it on the map.
		 *
		 * @param spriteId [Sprite Id](https://pastebin.com/Bpj9Sfft) - - [Images + IDs](https://gtaxscripting.blogspot.com/2016/05/gta-v-blips-id-and-image.html)
		 */
		setSprite(spriteId: number): void;

		// TODO: wiki
		showNumberOn(number: number): void;
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

	export interface BrowserMp {
		/**
		 * Gets or sets if the browser is active
		 */
		active: boolean;

		/**
		 * Set or get the url of a browser
		 */
		url: string;

		/**
		 * Destroys browser instance.
		 */
		destroy(): void;

		/**
		 * Calls JavaScript code inside the browser.
		 *
		 * @param executedCode JavaScript code to be executed in browser.
		 */
		execute(executedCode: string): void;

		/**
		 * This marks the browser as the chat for the server.
		 */
		markAsChat(): void;

		/**
		 * Reloads current page.
		 *
		 * @param ignoreCache true to ignore cache
		 */
		reload(ignoreCache: boolean): void;

		// TODO: wiki
		call(eventName: string, ...args: any[]): void;

		/**
		 * This function calls registered Remote Prodecure Call (RPC) from browser to client-side and expects a callback.
		 *
		 * @param eventProcName Procedure Name
		 * @param args Procedure Args
		 */
		callProc(eventProcName: string, ...args: any[]): Promise<any>;

		// TODO: wiki
		executeCached(executedCode: string): void;
	}

	export interface BrowserMpPool extends EntityMpPool<BrowserMp> {
		'new'(url: string): BrowserMp;
	}

	export interface CameraMp {
		/**
		 * Returns an entity handle
		 */
		handle: Handle;

		animatedShake(p0: string, p1: string, p2: string, p3: number): void;

		/**
		 * Attaches your camera to an object.
		 */
		attachTo(
			entity: Handle,
			boneIndex: number,
			xPos: number,
			yPos: number,
			zPos: number,
			xRot: number,
			yRot: number,
			zRot: number,
			p8: boolean,
			useSoftPinning: boolean,
			collision: boolean,
			isPed: boolean,
			vertexIndex: number,
			fixedRot: boolean
		): void;

		/**
		 * Attaches a camera to the bone specified.
		 *
		 * @param ped Ped handle or object
		 * @param boneIndex [Bone Ids](https://wiki.rage.mp/index.php?title=Bones)
		 * @param x X
		 * @param y Y
		 * @param z Z
		 * @param heading Boolean
		 */
		attachToPedBone(ped: Handle, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;

		/**
		 * Removes the camera.
		 *
		 * @param destroy `true` or `false`
		 */
		destroy(destroy?: boolean): void;

		// TODO: wiki
		detach(): void;

		/**
		 * Returns whether or not the passed camera handle exists.
		 */
		doesExist(): boolean;

		// TODO: wiki
		getAnimCurrentPhase(): number;
		getCoord(): shared.Vector3Mp;
		getDirection(): shared.Vector3Mp;
		getFarClip(): number;
		getFarDof(): number;
		getFov(): number;
		getNearClip(): number;

		/**
		 * The last parameter, as in other 'ROT' methods, is usually 2.
		 */
		getRot(p0: number): shared.Vector3Mp;

		/**
		 * Can use this with SET_Camera_SPLINE_PHASE to set the float it this native returns.
		 *
		 * (returns 1.0f when no nodes has been added, reached end of non existing spline)
		 */
		getSplinePhase(): number;

		/**
		 * Returns whether or not the passed camera handle is active.
		 */
		isActive(): boolean;

		// TODO: wiki
		isInterpolating(): boolean;
		isPlayingAnim(animName: string, animDictionary: string): boolean;
		isRendering(): boolean;
		isShaking(): boolean;

		/**
		 * Atleast one time in a script for the zRot Rockstar uses GET_ENTITY_HEADING to help fill the parameter.
		 *
		 * p9 is unknown at this time.
		 *
		 * p10 throughout all the X360 Scripts is always 2.
		 */
		playAnim(
			animName: string,
			animDictionary: string,
			x: number,
			y: number,
			z: number,
			xRot: number,
			yRot: number,
			zRot: number,
			p8: boolean,
			p9: number
		): void;

		/**
		 * p5 always seems to be 1 i.e TRUE
		 */
		pointAt(entity: EntityMp, offsetX: number, offsetY: number, offsetZ: number, p4: boolean): void;

		// TODO: wiki
		pointAtCoord(x: number, y: number, z: number): void;

		/**
		 * Sets the camera so it's pointing towards a ped's bone.
		 *
		 * [Bone List](https://wiki.rage.mp/index.php?title=Bones)
		 */
		pointAtPedBone(ped: Handle, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;

		/**
		 * Set camera as active/inactive.
		 *
		 * @param active `true` or  `false`
		 */
		setActive(active: boolean): void;

		// TODO: wiki
		setActiveWithInterp(camFrom: Handle, duration: number, easeLocation: number, easeRotation: number): void;

		/**
		 * Allows you to aim and shoot at the direction the camera is facing.
		 *
		 * @param toggle `true` or  `false`
		 */
		setAffectsAiming(toggle: boolean): void;

		// TODO: wiki
		setAnimCurrentPhase(phase: number): void;

		/**
		 * Sets the position of the camera.
		 */
		setCoord(posX: number, posY: number, posZ: number): void;

		/**
		 * Debugging functions are not present in the retail version of the game.
		 */
		setDebugName(name: string): void;

		/**
		 * This native has its name defined inside its code
		 */
		setDofFnumberOfLens(p1: number): void;

		/**
		 * This native has a name defined inside its code
		 */
		setDofFocusDistanceBias(p0: number): void;

		/**
		 * This native has a name defined inside its code
		 */
		setDofMaxNearInFocusDistance(p0: number): void;

		/**
		 * This native has a name defined inside its code
		 */
		setDofMaxNearInFocusDistanceBlendLevel(p1: number): void;

		// TODO: wiki
		setDofPlanes(p0: number, p1: number, p2: number, p3: number): void;
		setDofStrength(dofStrength: number): void;
		setFarClip(farClip: number): void;
		setFarDof(farDof: number): void;

		/**
		 * Sets the field of view of the camera.
		 *
		 * Min: 1.0f
		 * Max: 130.0f
		 */
		setFov(fieldOfView: number): void;

		/**
		 * The native seems to only be called once.
		 *
		 * The native is used as so:
		 *
		 * Camera::SET_Camera_INHERIT_ROLL_VEHICLE(l_544, getElem(2, &l_525, 4));
		 *
		 * In the exile1 script.
		 */
		setInheritRollVehicle(p1: boolean): void;

		// TODO: wiki
		setMotionBlurStrength(strength: number): void;
		setNearClip(nearClip: number): void;
		setNearDof(nearDof: number): void;
		setParams(
			x: number,
			y: number,
			z: number,
			xRot: number,
			yRot: number,
			zRot: number,
			fov: number,
			duration: number,
			p8: number,
			p9: number,
			p10: number
		): void;

		/**
		 * Sets the rotation of the camera.
		 *
		 * Last parameter unknown.
		 *
		 * Last parameter seems to always be set to 2.
		 */
		setRot(rotX: number, rotY: number, rotZ: number, p3: number): void;

		// TODO: wiki
		setShakeAmplitude(amplitude: number): void;
		setUseShallowDofMode(toggle: boolean): void;

		/**
		 * Possible [shake types](https://wiki.rage.mp/index.php?title=Camera::shake) (updated b617d):
		 */
		shake(type: string, amplitude: number): void;

		// TODO: wiki
		stopPointing(): void;
		stopShaking(p0: boolean): void;
	}

	export interface CameraMpPool extends EntityMpPool<CameraMp> {
		'new'(name: string, position?: shared.Vector3Mp, rotation?: shared.Vector3Mp, fov?: number): CameraMp;
	}

	export interface CheckpointMp extends EntityMp {}

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

	export interface ColshapeMp extends EntityMp {
		triggered: boolean;
	}

	export interface ColshapeMpPool extends EntityMpPool<ColshapeMp> {
		newCircle(x: number, y: number, range: number, dimension?: number): ColshapeMp;
		newCuboid(x: number, y: number, z: number, width: number, depth: number, height: number, dimension?: number): ColshapeMp;
		newRectangle(x: number, y: number, width: number, height: number, dimension?: number): ColshapeMp;
		newSphere(x: number, y: number, z: number, range: number, dimension?: number): ColshapeMp;
		newTube(x: number, y: number, z: number, range: number, height: number, dimension?: number): ColshapeMp;
	}

	export interface ConsoleMp {
		logInfo(message: string, save?: boolean, saveAsync?: boolean): void;
		logWarning(message: string, save?: boolean, saveAsync?: boolean): void;
		logError(message: string, save?: boolean, saveAsync?: boolean): void;
		logFatal(message: string, save?: boolean, saveAsync?: boolean): void;
		clear(): void;
		reset(): void;
		verbosity: ConsoleVerbosity | string;
	}

	export interface DummyEntityMp {
		// TODO (temporary solution):
		// Since this is a very abstract concept, it is not at all a familiar essence, but it has most of its properties.
		// The easiest option is, of course, to inherit the EntityMpPool interface, but this will add
		// non-existent methods and parameters associated with the dimension and position.
		// It is proposed in the future to introduce a more abstract concept than an entity, which will have only an ID, a type and several basic
		// methods such as deletion, enumeration and transformation into an array. The same goes for the entity pool.

		readonly dummyType: number;
		readonly id: number;
		readonly remoteId: number;
		readonly type: string;

		getVariable(value: string): any;
	}

	export interface DummyEntityMpPool extends EntityMpPool<DummyEntityMp> {
		forEachByType(dummyType: number, fn: (entity: DummyEntityMp) => void): void;
	}

	export interface IClientEvents {
		browserCreated: (browser: BrowserMp) => void;
		browserDomReady: (browser: BrowserMp) => void;
		browserLoadingFailed: (browser: BrowserMp) => void;
		click: (
			x: number,
			y: number,
			upOrDown: string,
			leftOrRight: string,
			relativeX: number,
			relativeY: number,
			worldPosition: shared.Vector3Mp, // Vector3MpLike
			hitEntity: number
		) => void;
		consoleCommand: (command: string) => void;
		dummyEntityCreated: (dummyType: number, dummy: DummyEntityMp) => void;
		dummyEntityDestroyed: (dummyType: number, dummy: DummyEntityMp) => void;
		entityControllerChange: (entity: EntityMp, newController: PlayerMp) => void;
		entityCreated: (entity: EntityMp) => void;
		entityStreamIn: (entity: EntityMp) => void;
		entityStreamOut: (entity: EntityMp) => void;
		guiReady: () => void;
		incomingDamage: (
			sourceEntity: EntityMp,
			sourcePlayer: PlayerMp,
			targetEntity: EntityMp,
			weapon: number,
			boneIndex: number,
			damage: number
		) => void;
		outgoingDamage: (
			sourceEntity: EntityMp,
			targetEntity: EntityMp,
			targetPlayer: PlayerMp,
			weapon: number,
			boneIndex: number,
			damage: number
		) => void;
		playerChat: (text: string) => void;
		playerCommand: (command: string) => void;
		playerCreateWaypoint: (position: shared.Vector3Mp) => void;
		playerDeath: (player: PlayerMp, reason: number, killer: PlayerMp) => void;
		playerEnterCheckpoint: (checkpoint: CheckpointMp) => void;
		playerEnterColshape: (colshape: ColshapeMp) => void;
		playerEnterVehicle: (vehicle: VehicleMp, seat: number) => void;
		playerExitCheckpoint: (checkpoint: CheckpointMp) => void;
		playerExitColshape: (colshape: ColshapeMp) => void;
		playerJoin: (player: PlayerMp) => void;
		playerLeaveVehicle: (vehicle: VehicleMp, seat: number) => void;
		playerQuit: (player: PlayerMp) => void;
		playerReachWaypoint: (player: PlayerMp) => void;
		playerReady: () => void;
		playerRemoveWaypoint: () => void;
		playerResurrect: () => void;
		playerRuleTriggered: (rule: string, counter: number) => void;
		playerSpawn: (player: PlayerMp) => void;
		playerStartTalking: (player: PlayerMp) => void;
		playerStopTalking: (player: PlayerMp) => void;
		playerWeaponShot: (targetPosition: shared.Vector3Mp, targetEntity?: undefined | EntityMp) => void;
		vehicleDeath: (vehicle: VehicleMp) => void;
		render: (nametags: [PlayerMp, number, number, number][]) => void;
	}

	export interface EventMpPool {
		addDataHandler(keyName: string, callback: (...args: any[]) => void): void;

		/**
		 * This function registers event handlers.
		 * Returning true will destroy automatically the event handler.
		 */
		add<K extends keyof IClientEvents>(eventName: K, callback: IClientEvents[K]): void;
		add(eventName: string, callback: (...args: any[]) => void): void;

		addProc(procName: string, callback: (...args: any[]) => void): void;
		addProc(procs: { [name: string]: (...args: any[]) => void }): void;

		call(eventName: string, ...args: any[]): void;
		callRemoteProc(procName: string, ...args: any[]): Promise<any>;
		callRemoteUnreliable(eventName: string, ...args: any[]): void;
		callRemote(eventName: string, ...args: any[]): void;

		cancelPendingRpc(procName?: string): void;
		hasPendingRpc(procName?: string): boolean;

		remove(eventName: string, handler?: (...args: any[]) => void): void;
		remove(eventNames: string[]): void;
	}

	export interface GuiMp {
		chat: GuiChatMp;
		cursor: GuiCursorMp;

		execute(code: string): void;
		takeScreenshot(name: string, type: ScreenshotType | number, quality: number, compressionQuality: number): void;
	}

	export interface GuiChatMp {
		colors: boolean;
		safe: boolean;

		activate(state: boolean): void;
		push(text: string): void;
		show(state: boolean): void;
	}

	export interface GuiCursorMp {
		position: shared.Array2d;
		visible: boolean;

		show(freezeControls: boolean, state: boolean): void;
	}

	export interface KeysMp {
		bind(keyCode: number, keyHold: boolean, handler: Function): void;
		isUp(keyCode: number): boolean;
		isDown(keyCode: number): boolean;
		unbind(keyCode: number, keyHold: boolean, handler?: Function): void;
	}

	export interface TextLabelMp extends EntityMp {
		color: shared.RGB;
		drawDistance: number;
		los: boolean;
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

	interface MarkerMp extends EntityMp {
		// TODO
	}

	interface MarkerMpPool extends EntityMpPool<MarkerMp> {
		'new'(
			type: Markers | number,
			position: shared.Vector3Mp,
			scale: number,
			options?: {
				bobUpAndDown?: boolean;
				color?: shared.RGBA;
				dimension?: number;
				direction?: shared.Vector3Mp;
				rotation?: shared.Vector3Mp;
				visible?: boolean;
			}
		): MarkerMp;
	}

	export interface NametagsMp {
		enabled: boolean;

		set(style: {
			font: number;
			outline: boolean;
			offset: number;
			veh_offset: number;
			color: shared.RGBA;
			size: number;

			hbar?: {
				size: [number, number];
				color: shared.RGBA;
				bg_color: shared.RGBA;
			};
		}): void;
	}

	interface ObjectMp extends EntityMp {
		hidden: boolean;
		isWeak: boolean;
		notifyStreaming: boolean;
		streamingRange: number;
		rotation: shared.Vector3Mp;

		hasBeenBroken(): boolean;
		isVisible(): boolean;
		markForDeletion(): void;
		placeOnGroundProperly(): boolean;
		setActivatePhysicsAsSoonAsItIsUnfrozen(toggle: boolean): void;
		setPhysicsParams(
			weight: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			gravity: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			buoyancy: number
		): void;
		setTargettable(targettable: boolean): void;
		slide(toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;
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
		newWeak(handle: number): ObjectMp;
	}

	export interface RaycastResult {
		entity: EntityMp | Handle; // Not weak world objects return the handle
		position: shared.Vector3Mp;
		surfaceNormal: shared.Vector3Mp;
	}

	export interface RaycastingMp {
		testPointToPoint(startPos: shared.Vector3Mp, endPos: shared.Vector3Mp, ignoreEntity?: EntityMp, flags?: number): RaycastResult;
		testCapsule(startPos: shared.Vector3Mp, endPos: shared.Vector3Mp, radius: number, ignoreEntity?: EntityMp, flags?: number[]): RaycastResult;
	}

	export interface StorageMp {
		data: { [key: string]: any };
		/** Keeps data saved over resource reloads, but is cleared on reconnect.
		 *
		 *  {@link https://wiki.rage.mp/index.php?title=Storage.sessionData|Storage.sessionData}
		 */
		sessionData: unknown;

		flush(): void;
	}

	export interface SystemMp {
		isFullscreen: boolean;
		isFocused: boolean;
		notify(args: { title: string; text: string; attribute: string; duration: number; silent: boolean }): void;
	}

	export interface UserMp {
		preferences: UserPreferencesMp;
	}

	export interface UserPreferencesMp {
		lowQualityAssets: boolean;
		language: string;
	}

	export interface VoiceChatMp {
		minVad: number;
		muted: boolean;

		readonly isAllowed: boolean;
		readonly lastVad: number;

		getPreprocessingParam(param: number): any; // TODO
		setPreprocessingParam(param: number, value: any): void; // TODO
		cleanupAndReload(p0: boolean, p1: boolean, p2: boolean): void;
	}

	export interface GameMp {
		system: GameSystemMp;
		app: GameAppMp;
		audio: GameAudioMp;
		brain: GameBrainMp;
		cam: GameCamMp;
		controls: GamePadMp;
		cutscene: GameCutsceneMp;
		clock: GameClockMp;
		datafile: GameDatafileMp;
		decorator: GameDecoratorMp;
		dlc: GameDlcMp;
		entity: GameEntityMp;
		event: GameEventMp;
		files: GameFilesMp;
		fire: GameFireMp;
		gameplay: GameGameplayMp;
		graphics: GameGraphicsMp;
		hud: GameHudMp;
		interior: GameInteriorMp;
		itemset: GameItemsetMp;
		loadingscreen: GameLoadingScreenMp;
		localization: GameLocalizationMp;
		misc: GameGameplayMp;
		mobile: GameMobileMp;
		network: GameNetworkMp;
		object: GameObjectMp;
		pad: GamePadMp;
		pathfind: GamePathfindMp;
		ped: GamePedMp;
		physics: GamePhysicsMp;
		player: GamePlayerMp;
		recording: GameRecordingMp;
		replay: GameReplayMp;
		script: GameScriptMp;
		shapetest: GameShapetestMp;
		stats: GameStatsMp;
		streaming: GameStreamingMp;
		task: GameTaskMp;
		vehicle: GameVehicleMp;
		water: GameWaterMp;
		weapon: GameWeaponMp;
		zone: GameZoneMp;
		ai: GameTaskMp;
		time: GameClockMp;
		rope: GamePhysicsMp;
		ui: GameHudMp;

		invoke(hash: string, ...args: any[]): any;
		invokeFloat(hash: string, ...args: any[]): any;
		invokeString(hash: string, ...args: any[]): any;
		invokeVector3(hash: string, ...args: any[]): any;
		joaat(text: string): Hash;
		joaat(textArray: string[]): Hash[];
		wait(ms: number): void;
		waitAsync(ms: number): Promise<void>;
	}

	export interface GameSystem extends GameSystemLegacy {
		wait(ms: number): void;
		startNewScript(scriptName: string, stackSize: number): number;
		startNewScriptWithArgs(scriptName: string, argCount: number, stackSize: number): StartNewScriptWithArgsResult;
		startNewScriptWithNameHash(scriptHash: number, stackSize: number): number;
		startNewScriptWithNameHashAndArgs(scriptHash: number, argCount: number, stackSize: number): StartNewScriptWithNameHashAndArgsResult;
		timera(): number;
		timerb(): number;
		settimera(value: number): void;
		settimerb(value: number): void;
		timestep(): number;
		sin(value: number): number;
		cos(value: number): number;
		sqrt(value: number): number;
		pow(base: number, exponent: number): number;
		log10(value: number): number;
		vmag(x: number, y: number, z: number): number;
		vmag2(x: number, y: number, z: number): number;
		vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
		vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
		shiftLeft(value: number, bitShift: number): number;
		shiftRight(value: number, bitShift: number): number;
		floor(value: number): number;
		ceil(value: number): number;
		round(value: number): number;
		toFloat(value: number): number;
		setThreadPriority(priority: number): void;
	}

	export interface GameSystemLegacy {
		startNewStreamedScript(scriptHash: number, stackSize: number): number;
		startNewStreamedScriptWithArgs(scriptHash: number, argCount: number, stackSize: number): StartNewScriptWithNameHashAndArgsResult;
	}

	export interface StartNewScriptWithArgsResult {
		args: number;
		result: number;
	}

	export interface StartNewScriptWithNameHashAndArgsResult {
		args: number;
		result: number;
	}

	export interface GameApp extends GameAppLegacy {
		dataValid(): boolean;
		getInt(property: string): number;
		getFloat(property: string): number;
		getString(property: string): string;
		setInt(property: string, value: number): void;
		setFloat(property: string, value: number): void;
		setString(property: string, value: string): void;
		setApp(appName: string): void;
		setBlock(blockName: string): void;
		clearBlock(): void;
		closeApp(): void;
		closeBlock(): void;
		hasLinkedSocialClubAccount(): boolean;
		hasSyncedData(appName: string): boolean;
		saveData(): void;
		getDeletedFileStatus(): number;
		deleteAppData(appName: string): boolean;
	}

	export interface GameAppLegacy {
		appGetInt(property: string): number;
		appGetFloat(property: string): number;
		appGetString(property: string): string;
		appSetInt(property: string, value: number): void;
		appSetFloat(property: string, value: number): void;
		appSetString(property: string, value: string): void;
		appSetApp(appName: string): void;
		appSetBlock(blockName: string): void;
		appHasSyncedData(appName: string): boolean;
		appDeleteAppData(appName: string): boolean;
	}

	export interface GameAudio extends GameAudioLegacy {
		playPedRingtone(ringtoneName: string, ped: number, p2: boolean): void;
		isPedRingtonePlaying(ped: number): boolean;
		stopPedRingtone(ped: number): void;
		isMobilePhoneCallOngoing(): boolean;
		createNewScriptedConversation(): void;
		addLineToConversation(
			index: number,
			p1: string,
			p2: string,
			p3: number,
			p4: number,
			p5: boolean,
			p6: boolean,
			p7: boolean,
			p8: boolean,
			p9: number,
			p10: boolean,
			p11: boolean,
			p12: boolean
		): void;
		addPedToConversation(index: number, ped: number, p2: string): void;
		setMicrophonePosition(
			p0: boolean,
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			x3: number,
			y3: number,
			z3: number
		): void;
		startScriptPhoneConversation(p0: boolean, p1: boolean): void;
		preloadScriptPhoneConversation(p0: boolean, p1: boolean): void;
		startScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
		preloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
		startPreloadedConversation(): void;
		getIsPreloadedConversationReady(): boolean;
		isScriptedConversationOngoing(): boolean;
		isScriptedConversationLoaded(): boolean;
		getCurrentScriptedConversationLine(): number;
		pauseScriptedConversation(p0: boolean): void;
		restartScriptedConversation(): void;
		stopScriptedConversation(p0: boolean): number;
		skipToNextScriptedConversationLine(): void;
		interruptConversation(p0: number): InterruptConversationResult;
		interruptConversationAndPause(ped: number, p1: string, p2: string): void;
		registerScriptWith(p0: number): void;
		unregisterScriptWith(): void;
		requestMissionBank(p0: string, p1: boolean, p2: number): boolean;
		requestAmbientBank(p0: string, p1: boolean, p2: number): boolean;
		requestScriptBank(p0: string, p1: boolean, p2: number): boolean;
		hintAmbientBank(p0: number, p1: number, p2: number): number;
		hintScriptBank(p0: number, p1: number, p2: number): number;
		releaseMissionBank(): void;
		releaseAmbientBank(): void;
		releaseNamedScriptBank(audioBank: string): void;
		releaseScriptBank(): void;
		getSoundId(): number;
		releaseSoundId(soundId: number): void;
		playSound(soundId: number, audioName: string, audioRef: string, p3: boolean, p4: number, p5: boolean): void;
		playSoundFrontend(soundId: number, audioName: string, audioRef: string, p3: boolean): void;
		playDeferredSoundFrontend(soundName: string, soundsetName: string): void;
		playSoundFromEntity(soundId: number, audioName: string, entity: number, audioRef: string, isNetwork: boolean, p5: number): void;
		playSoundFromCoord(
			soundId: number,
			audioName: string,
			x: number,
			y: number,
			z: number,
			audioRef: string,
			isNetwork: boolean,
			range: number,
			p8: boolean
		): void;
		stopSound(soundId: number): void;
		getNetworkIdFromSoundId(soundId: number): number;
		getSoundIdFromNetworkId(netId: number): number;
		setVariableOnSound(soundId: number, p2: number): number;
		setVariableOnStream(p0: string, p1: number): void;
		overrideUnderwaterStream(p1: boolean): number;
		setVariableOnUnderWaterStream(variableName: string, value: number): void;
		hasSoundFinished(soundId: number): boolean;
		playPedAmbientSpeechNative(ped: number, speechName: string, speechParam: string, p3: number): void;
		playPedAmbientSpeechAndCloneNative(ped: number, speechName: string, speechParam: string, p3: number): void;
		playPedAmbientSpeechWithVoiceNative(ped: number, speechName: string, voiceName: string, speechParam: string, p4: boolean): void;
		playAmbientSpeechFromPositionNative(speechName: string, voiceName: string, x: number, y: number, z: number, speechParam: string): void;
		overrideTrevorRage(voiceEffect: string): void;
		resetTrevorRage(): void;
		setPlayerAngry(ped: number, toggle: boolean): void;
		playPain(ped: number, painID: number, p1: number, p3: number): void;
		releaseWeapon(): void;
		activateSlowmoMode(p0: string): void;
		deactivateSlowmoMode(p0: string): void;
		setAmbientVoiceName(ped: number, name: string): void;
		setAmbientVoiceNameHash(ped: number, hash: number): void;
		getAmbientVoiceNameHash(ped: number): number;
		setPedScream(ped: number): void;
		setPedVoiceGroup(ped: number, voiceGroupHash: number): void;
		setPedGender(ped: number, p1: boolean): void;
		stopCurrentPlayingSpeech(ped: number): void;
		stopCurrentPlayingAmbientSpeech(ped: number): void;
		isAmbientSpeechPlaying(ped: number): boolean;
		isScriptedSpeechPlaying(p0: number): boolean;
		isAnySpeechPlaying(ped: number): boolean;
		canPedSpeak(ped: number, speechName: string, unk: boolean): boolean;
		isPedInCurrentConversation(ped: number): boolean;
		setPedIsDrunk(ped: number, toggle: boolean): void;
		playAnimalVocalization(pedHandle: number, p1: number, speechName: string): void;
		isAnimalVocalizationPlaying(pedHandle: number): boolean;
		setAnimalMood(animal: number, mood: number): void;
		isMobilePhoneRadioActive(): boolean;
		setMobilePhoneRadioState(state: boolean): void;
		getPlayerRadioStationIndex(): number;
		getPlayerRadioStationName(): string;
		getRadioStationName(radioStation: number): string;
		getPlayerRadioStationGenre(): number;
		isRadioRetuning(): boolean;
		isRadioFadedOut(): boolean;
		setRadioToStationName(stationName: string): void;
		setVehRadioStation(vehicle: number, radioStation: string): void;
		setEmitterRadioStation(emitterName: string, radioStation: string): void;
		setStaticEmitterEnabled(emitterName: string, toggle: boolean): void;
		linkStaticEmitterToEntity(emitterName: string, entity: number): void;
		setRadioToStationIndex(radioStation: number): void;
		setFrontendRadioActive(active: boolean): void;
		unlockMissionNewsStory(newsStory: number): void;
		isMissionNewsStoryUnlocked(newsStory: number): boolean;
		getAudibleMusicTrackTextId(): number;
		playEndCreditsMusic(play: boolean): void;
		skipRadioForward(): void;
		freezeRadioStation(radioStation: string): void;
		unfreezeRadioStation(radioStation: string): void;
		setRadioAutoUnfreeze(toggle: boolean): void;
		setInitialPlayerStation(radioStation: string): void;
		setUserRadioControlEnabled(toggle: boolean): void;
		setRadioTrack(radioStation: string, radioTrack: string): void;
		setRadioTrackMix(radioStationName: string, mixName: string, p2: number): void;
		setVehicleRadioLoud(vehicle: number, toggle: boolean): void;
		isVehicleRadioLoud(vehicle: number): boolean;
		setMobileRadioEnabledDuringGameplay(toggle: boolean): void;
		doesPlayerVehHaveRadio(): boolean;
		isPlayerVehRadioEnable(): boolean;
		setVehicleRadioEnabled(vehicle: number, toggle: boolean): void;
		setCustomRadioTrackList(radioStation: string, trackListName: string, p2: boolean): void;
		clearCustomRadioTrackList(radioStation: string): void;
		getNumUnlockedRadioStations(): number;
		findRadioStationIndex(station: number): number;
		setRadioStationMusicOnly(radioStation: string, toggle: boolean): void;
		setRadioFrontendFadeTime(fadeTime: number): void;
		unlockRadioStationTrackList(radioStation: string, trackListName: string): void;
		updateLsur(enableMixes: boolean): void;
		lockRadioStation(radioStationName: string, toggle: boolean): void;
		getCurrentRadioStationHash(radioStationName: string): number;
		setAmbientZoneState(zoneName: string, p1: boolean, p2: boolean): void;
		clearAmbientZoneState(zoneName: string, p1: boolean): void;
		setAmbientZoneListState(p1: boolean, p2: boolean): number;
		clearAmbientZoneListState(p1: boolean): number;
		setAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
		setAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
		isAmbientZoneEnabled(ambientZone: string): boolean;
		setCutsceneOverride(name: string): void;
		setVariableOnCutscene(variableName: string, value: number): void;
		playPoliceReport(name: string, p1: number): number;
		cancelCurrentPoliceReport(): void;
		blipSiren(vehicle: number): void;
		overrideVehHorn(vehicle: number, override: boolean, hornHash: number): void;
		isHornActive(vehicle: number): boolean;
		setAggressiveHorns(toggle: boolean): void;
		isStreamPlaying(): boolean;
		getStreamPlayTime(): number;
		loadStream(streamName: string, soundSet: string): boolean;
		loadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): boolean;
		playStreamFromPed(ped: number): void;
		playStreamFromVehicle(vehicle: number): void;
		playStreamFromObject(object: number): void;
		playStreamFrontend(): void;
		playStreamFromPosition(x: number, y: number, z: number): void;
		stopStream(): void;
		stopPedSpeaking(ped: number, shaking: boolean): void;
		disablePedPain(ped: number, toggle: boolean): void;
		isAmbientSpeechDisabled(ped: number): boolean;
		setSirenWithNoDriver(vehicle: number, toggle: boolean): void;
		triggerSiren(vehicle: number): void;
		soundVehicleHornThisFrame(vehicle: number): void;
		setHornEnabled(vehicle: number, toggle: boolean): void;
		setVehiclePriority(vehicle: number, p1: number): void;
		useSirenAsHorn(vehicle: number, toggle: boolean): void;
		forceVehicleEngine(vehicle: number, audioName: string): void;
		preloadVehicle(vehicleModel: number): void;
		setVehicleEngineDamageFactor(vehicle: number, damageFactor: number): void;
		setVehicleBodyDamageFactor(vehicle: number, p1: number): void;
		enableVehicleExhaustPops(vehicle: number, toggle: boolean): void;
		setVehicleBoostActive(vehicle: number, toggle: boolean): void;
		setScriptUpdateDoor(doorHash: number, toggle: boolean): void;
		playVehicleDoorOpenSound(vehicle: number, doorIndex: number): void;
		playVehicleDoorCloseSound(vehicle: number, doorIndex: number): void;
		enableStallWarningSounds(vehicle: number, toggle: boolean): void;
		isGameInControlOfMusic(): boolean;
		setGpsActive(active: boolean): void;
		playMissionComplete(audioName: string): void;
		isMissionCompletePlaying(): boolean;
		isMissionCompleteReadyForUi(): boolean;
		blockDeathJingle(toggle: boolean): void;
		startScene(scene: string): boolean;
		stopScene(scene: string): void;
		stopScenes(): void;
		isSceneActive(scene: string): boolean;
		setSceneVariable(scene: string, variable: string, value: number): void;
		setScriptCleanupTime(time: number): void;
		addEntityToMixGroup(entity: number, groupName: string, p2: number): void;
		removeEntityFromMixGroup(entity: number, p1: number): void;
		isScriptedMusicPlaying(): boolean;
		prepareMusicEvent(eventName: string): boolean;
		cancelMusicEvent(eventName: string): boolean;
		triggerMusicEvent(eventName: string): boolean;
		isMusicOneshotPlaying(): boolean;
		getMusicPlaytime(): number;
		recordBrokenGlass(x: number, y: number, z: number, radius: number): void;
		clearAllBrokenGlass(): void;
		prepareAlarm(alarmName: string): boolean;
		startAlarm(alarmName: string, p2: boolean): void;
		stopAlarm(alarmName: string, toggle: boolean): void;
		stopAllAlarms(stop: boolean): void;
		isAlarmPlaying(alarmName: string): boolean;
		getVehicleDefaultHorn(vehicle: number): number;
		getVehicleDefaultHornIgnoreMods(vehicle: number): number;
		resetPedFlags(ped: number): void;
		setPedFootstepLoud(ped: number, toggle: boolean): void;
		setPedFootstepQuiet(ped: number, toggle: boolean): void;
		overridePlayerGroundMaterial(hash: number, toggle: boolean): void;
		overrideMicrophoneSettings(hash: number, toggle: boolean): void;
		freezeMicrophone(): void;
		distantCopCarSirens(value: boolean): void;
		setFlag(flagName: string, toggle: boolean): void;
		prepareSynchronizedEvent(p0: string, p1: number): number;
		prepareSynchronizedEventForScene(p0: number): number;
		playSynchronizedEvent(p0: number): boolean;
		stopSynchronizedEvent(p0: number): boolean;
		setSynchronizedEventPositionThisFrame(p0: string, p1: number): void;
		setSpecialEffectMode(mode: number): void;
		setPortalSettingsOverride(p0: string, p1: string): void;
		removePortalSettingsOverride(p0: string): void;
		setPedTalk(ped: number): void;
		stopCutscene(): void;
		hasMultiplayerDataLoaded(): boolean;
		hasMultiplayerDataUnloaded(): boolean;
		getVehicleDefaultHornVariation(vehicle: number): number;
		setVehicleHornVariation(vehicle: number, value: number): void;

		unk: GameAudioUnk;
	}

	export interface GameAudioUnk {
		_0xC8B1B2425604CDD0(): boolean;
		_0x33E3C6C6F2F0B506(p0: number, p1: number, p2: number, p3: number): void;
		_0x892B6AB8F33606F5(p0: number, entity: number): void;
		_0x0B568201DD99F0EB(p0: boolean): void;
		_0x61631F5DF50D1C34(p0: boolean): void;
		_0xAA19F5572C38B564(): _0xAA19F5572C38B564Result;
		_0xB542DE8C3D1CB210(p0: boolean): void;
		_0x40763EA7B9B783E7(p0: number, p1: number, p2: number): number;
		_0x19AF7ED9B9D23058(): void;
		_0x9AC92EED5E4793AB(): void;
		_0x11579D940949C49E(p0: number): void;
		_0x5B9853296731E88D(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		_0x7EC3C679D0E7E46B(p0: number, p1: number, p2: number, p3: number): void;
		_0x1B7ABE26CBCBF8C7(ped: number, p1: number, p2: number): void;
		_0x30CA2EF91D15ADF8(): number;
		_0xFF266D1D0EB1195D(): void;
		_0xDD6BCF9E94425DF9(): void;
		_0x0BE4BE946463F917(vehicle: number): boolean;
		_0xC1805D05E6D4FE10(vehicle: number): void;
		_0x55ECF4D13D9903B0(p0: number, p1: number, p2: number, p3: number): void;
		_0xDA07819E452FFE8F(p0: number): void;
		_0xC64A06D939F826F5(): _0xC64A06D939F826F5Result;
		_0x34D66BC058019CE0(radioStationName: string): number;
		_0xF3365489E0DD50F9(vehicle: number, toggle: boolean): void;
		_0x5D2BFAAB8D956E0E(): void;
		_0x02E93C796ABD3A97(p0: boolean): void;
		_0x58BB377BEC7CD5F4(p0: boolean, p1: boolean): void;
		_0x9BD7BD55E4533183(p0: number, p1: number, p2: number): void;
		_0xF8AD2EED7C47E8FE(ped: number, p1: boolean, p2: boolean): void;
		_0xAB6781A5F3101470(p0: number, p1: number): void;
		_0xA8A7D434AFB4B97B(p0: string, p1: number): void;
		_0x2ACABED337622DF2(p0: string): void;
		_0x9D3AF56E94C9AE98(vehicle: number, p1: number): void;
		_0xF1F8157B8C3F171C(vehicle: number, p1: string, p2: string): void;
		_0xD2DCCD8E16E20997(p0: number): void;
		_0x5DB8010EE71FDEF2(vehicle: number): boolean;
		_0x1C073274E065C6D2(vehicle: number, toggle: boolean): void;
		_0x6FDDAD856E36988A(vehicle: number, toggle: boolean): void;
		_0x2DD39BF3E2F9C47F(): number;
		_0x159B7318403A1CD8(p0: number): void;
		_0x70B8EC8FC108A634(p0: boolean, p1: number): void;
		_0x149AEE66F0CB3A99(p0: number, p1: number): void;
		_0x8BF907833BE275DE(p0: number, p1: number): void;
		_0x062D5EAD4DA2FA6A(): void;
		_0xBF4DC1784BE94DFA(ped: number, p1: boolean, hash: number): void;
		_0x43FA0DFC5DF87815(vehicle: number, p1: boolean): void;
		_0xB81CF134AEB56FFB(): void;
		_0xC8EDE9BDBCCBA6D4(p1: number, p2: number, p3: number): number;
		_0xE4E6DD5566D28C82(): void;
		_0x3A48AB4445D499BE(): number;
		_0x0150B6FF25A9E2E5(): void;
		_0xBEF34B1D9624D5DD(p0: boolean): void;
	}

	export interface _0xC64A06D939F826F5Result {
		p0: number;
		p1: number;
		p2: number;
		result: boolean;
	}

	export interface _0xAA19F5572C38B564Result {
		p0: number;
		result: number;
	}

	export interface InterruptConversationResult {
		p1: number;
		p2: number;
	}

	export interface GameAudioLegacy {
		registerScriptWithAudio(p0: number): void;
		requestMissionAudioBank(p0: string, p1: boolean, p2: number): boolean;
		requestAmbientAudioBank(p0: string, p1: boolean, p2: number): boolean;
		requestScriptAudioBank(p0: string, p1: boolean, p2: number): boolean;
		hintAmbientAudioBank(p0: number, p1: number, p2: number): number;
		hintScriptAudioBank(p0: number, p1: number, p2: number): number;
		releaseNamedScriptAudioBank(audioBank: string): void;
		playAmbientSpeechWithVoice(ped: number, speechName: string, voiceName: string, speechParam: string, p4: boolean): void;
		playAmbientSpeechAtCoords(speechName: string, voiceName: string, x: number, y: number, z: number, speechParam: string): void;
		getNumberOfPassengerVoiceVariations(newsStory: number): boolean;
		setCutsceneAudioOverride(name: string): void;
		getPlayerHeadsetSoundAlternate(variableName: string, value: number): void;
		specialFrontendEqual(x: number, y: number, z: number): void;
		playMissionCompleteAudio(audioName: string): void;
		startAudioScene(scene: string): boolean;
		stopAudioScene(scene: string): void;
		isAudioSceneActive(scene: string): boolean;
		setAudioSceneVariable(scene: string, variable: string, value: number): void;
		resetPedAudioFlags(ped: number): void;
		setAudioFlag(flagName: string, toggle: boolean): void;
		prepareSynchronizedAudioEvent(p0: string, p1: number): number;
		prepareSynchronizedAudioEventForScene(p0: number): number;
		playSynchronizedAudioEvent(p0: number): boolean;
		stopSynchronizedAudioEvent(p0: number): boolean;
		setSynchronizedAudioEventPositionThisFrame(p0: string, p1: number): void;
	}

	export interface GameBrain extends GameBrainLegacy {
		addScriptToRandomPed(name: string, model: number, p2: number, p3: number): void;
		registerObjectScript(scriptName: string, modelHash: number, p2: number, activationRange: number, p4: number, p5: number): void;
		isObjectWithinActivationRange(object: number): boolean;
		registerWorldPointScript(scriptName: string, activationRange: number, p2: number): void;
		isWorldPointWithinActivationRange(): boolean;
		enableScriptSet(brainSet: number): void;
		disableScriptSet(brainSet: number): void;

		unk: GameBrainUnk;
	}

	export interface GameBrainLegacy {
		registerObjectScriptBrain(scriptName: string, modelHash: number, p2: number, activationRange: number, p4: number, p5: number): void;
		isObjectWithinBrainActivationRange(object: number): boolean;
		registerWorldPointScriptBrain(scriptName: string, activationRange: number, p2: number): void;
		enableScriptBrainSet(brainSet: number): void;
		disableScriptBrainSet(brainSet: number): void;
	}

	export interface GameBrainUnk {
		_0x0B40ED49D7D6FF84(): void;
		_0x4D953DF78EBF8158(): void;
		_0x6D6840CEE8845831(action: string): void;
		_0x6E91B04E08773030(action: string): void;
	}

	export interface GameCam extends GameCamLegacy {
		renderScriptS(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean, p5: number): void;
		stopRenderingScriptCamsUsingCatchUp(render: boolean, p1: number, p2: number, p3: number): void;
		create(camName: string, p1: boolean): number;
		createWithParams(
			camName: string,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			fov: number,
			p8: boolean,
			p9: number
		): number;
		createEra(camHash: number, p1: boolean): number;
		createEraWithParams(
			camHash: number,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			fov: number,
			p8: boolean,
			p9: number
		): number;
		destroy(cam: number, bScriptHostCam: boolean): void;
		destroyAllS(bScriptHostCam: boolean): void;
		doesExist(cam: number): boolean;
		setActive(cam: number, active: boolean): void;
		isActive(cam: number): boolean;
		isRendering(cam: number): boolean;
		getRendering(): number;
		getCoord(cam: number): shared.Vector3Mp;
		getRot(cam: number, rotationOrder: number): shared.Vector3Mp;
		getFov(cam: number): number;
		getNearClip(cam: number): number;
		getFarClip(cam: number): number;
		getFarDof(cam: number): number;
		setParams(
			cam: number,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			fieldOfView: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number
		): void;
		setCoord(cam: number, posX: number, posY: number, posZ: number): void;
		setRot(cam: number, rotX: number, rotY: number, rotZ: number, rotationOrder: number): void;
		setFov(cam: number, fieldOfView: number): void;
		setNearClip(cam: number, nearClip: number): void;
		setFarClip(cam: number, farClip: number): void;
		setMotionBlurStrength(cam: number, strength: number): void;
		setNearDof(cam: number, nearDOF: number): void;
		setFarDof(cam: number, farDOF: number): void;
		setDofStrength(cam: number, dofStrength: number): void;
		setDofPlanes(cam: number, p1: number, p2: number, p3: number, p4: number): void;
		setUseShallowDofMode(cam: number, toggle: boolean): void;
		setUseHiDof(): void;
		setDofFnumberOfLens(camera: number, p1: number): void;
		setDofFocalLengthMultiplier(camera: number, multiplier: number): void;
		setDofFocusDistanceBias(camera: number, p1: number): void;
		setDofMaxNearInFocusDistance(camera: number, p1: number): void;
		setDofMaxNearInFocusDistanceBlendLevel(camera: number, p1: number): void;
		attachToEntity(cam: number, entity: number, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;
		attachToPedBone(cam: number, ped: number, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;
		attachToPedBone2(
			cam: number,
			ped: number,
			boneIndex: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: boolean
		): void;
		attachToVehicleBone(
			cam: number,
			vehicle: number,
			boneIndex: number,
			relativeRotation: boolean,
			rotX: number,
			rotY: number,
			rotZ: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			fixedDirection: boolean
		): void;
		detach(cam: number): void;
		setInheritRollVehicle(cam: number, p1: boolean): void;
		pointAtCoord(cam: number, x: number, y: number, z: number): void;
		pointAtEntity(cam: number, entity: number, p2: number, p3: number, p4: number, p5: boolean): void;
		pointAtPedBone(cam: number, ped: number, boneIndex: number, x: number, y: number, z: number, p6: boolean): void;
		stopPointing(cam: number): void;
		setAffectsAiming(cam: number, toggle: boolean): void;
		setDebugName(camera: number, name: string): void;
		addSplineNode(
			camera: number,
			x: number,
			y: number,
			z: number,
			xRot: number,
			yRot: number,
			zRot: number,
			length: number,
			p8: number,
			p9: number
		): void;
		addSplineNodeUsingCameraFrame(cam: number, cam2: number, p2: number, p3: number): void;
		addSplineNodeUsingCamera(cam: number, cam2: number, p2: number, p3: number): void;
		addSplineNodeUsingGameplayFrame(cam: number, p1: number, p2: number): void;
		setSplinePhase(cam: number, p1: number): void;
		getSplinePhase(cam: number): number;
		getSplineNodePhase(cam: number): number;
		setSplineDuration(cam: number, timeDuration: number): void;
		setSplineSmoothingStyle(cam: number, smoothingStyle: number): void;
		getSplineNodeIndex(cam: number): number;
		setSplineNodeEase(cam: number, p1: number, p2: number, p3: number): void;
		setSplineNodeVelocityScale(cam: number, p1: number, scale: number): void;
		overrideSplineVelocity(cam: number, p1: number, p2: number, p3: number): void;
		overrideSplineMotionBlur(cam: number, p1: number, p2: number, p3: number): void;
		setSplineNodeExtraFlags(cam: number, p1: number, flags: number): void;
		isSplinePaused(p0: number): boolean;
		setActiveWithInterp(camTo: number, camFrom: number, duration: number, easeLocation: number, easeRotation: number): void;
		isInterpolating(cam: number): boolean;
		shake(cam: number, type: string, amplitude: number): void;
		animatedShake(cam: number, p1: string, p2: string, p3: string, amplitude: number): void;
		isShaking(cam: number): boolean;
		setShakeAmplitude(cam: number, amplitude: number): void;
		stopShaking(cam: number, p1: boolean): void;
		shakeScriptGlobal(p0: string, p1: number): void;
		animatedShakeScriptGlobal(p0: string, p1: string, p2: string, p3: number): void;
		isScriptGlobalShaking(): boolean;
		stopScriptGlobalShaking(p0: boolean): void;
		playAnim(
			cam: number,
			animName: string,
			animDictionary: string,
			x: number,
			y: number,
			z: number,
			xRot: number,
			yRot: number,
			zRot: number,
			p9: boolean,
			p10: number
		): boolean;
		isPlayingAnim(cam: number, animName: string, animDictionary: string): boolean;
		setAnimCurrentPhase(cam: number, phase: number): void;
		getAnimCurrentPhase(cam: number): number;
		playSynchronizedAnim(p0: number, p1: number, animName: string, animDictionary: string): boolean;
		setFlyHorizontalResponse(cam: number, p1: number, p2: number, p3: number): void;
		setFlyVerticalSpeedMultiplier(cam: number, p1: number, p2: number, p3: number): void;
		setFlyMaxHeight(cam: number, height: number): void;
		setFlyCoordAndConstrain(cam: number, x: number, y: number, z: number): void;
		isScreenFadedOut(): boolean;
		isScreenFadedIn(): boolean;
		isScreenFadingOut(): boolean;
		isScreenFadingIn(): boolean;
		doScreenFadeIn(duration: number): void;
		doScreenFadeOut(duration: number): void;
		setWidescreenBorders(p0: boolean, p1: number): void;
		getGameplayCoord(): shared.Vector3Mp;
		getGameplayRot(rotationOrder: number): shared.Vector3Mp;
		getGameplayFov(): number;
		getGameplayRelativeHeading(): number;
		setGameplayRelativeHeading(heading: number): void;
		getGameplayRelativePitch(): number;
		setGameplayRelativePitch(angle: number, scalingFactor: number): void;
		setGameplayRelativeRotation(roll: number, pitch: number, yaw: number): void;
		setGameplayRawYaw(yaw: number): void;
		setGameplayRawPitch(pitch: number): void;
		shakeGameplay(shakeName: string, intensity: number): void;
		isGameplayShaking(): boolean;
		setGameplayShakeAmplitude(amplitude: number): void;
		stopGameplayShaking(p0: boolean): void;
		setGameplayFollowPedThisUpdate(ped: number): void;
		isGameplayRendering(): boolean;
		enableCrosshairThisFrame(): void;
		isGameplayLookingBehind(): boolean;
		disableCollisionForEntity(entity: number): void;
		disableCollisionForObject(entity: number): void;
		isSphereVisible(x: number, y: number, z: number, radius: number): boolean;
		isFollowPedActive(): boolean;
		setFollowPedThisUpdate(camName: string, p1: number): boolean;
		clampGameplayYaw(minimum: number, maximum: number): void;
		clampGameplayPitch(minimum: number, maximum: number): void;
		animateGameplayZoom(p0: number, distance: number): void;
		setInVehicleStateThisUpdate(p0: number, p1: number): void;
		disableFirstPersonThisFrame(): void;
		getFollowPedZoomLevel(): number;
		getFollowPedViewMode(): number;
		setFollowPedViewMode(viewMode: number): void;
		isFollowVehicleActive(): boolean;
		getFollowVehicleZoomLevel(): number;
		setFollowVehicleZoomLevel(zoomLevel: number): void;
		getFollowVehicleViewMode(): number;
		setFollowVehicleViewMode(viewMode: number): void;
		useStuntEraThisFrame(): void;
		setGameplayHash(camName: string): void;
		setFollowTurretSeat(seatIndex: number): void;
		isAimActive(): boolean;
		isAimThirdPersonActive(): boolean;
		isFirstPersonAimActive(): boolean;
		disableAimThisUpdate(): void;
		getFirstPersonAimZoomFactor(): number;
		setFirstPersonAimZoomFactor(zoomFactor: number): void;
		setFirstPersonPitchRange(p0: number, p1: number): void;
		setFirstPersonAimNearClipThisUpdate(p0: number): void;
		setThirdPersonAimNearClipThisUpdate(p0: number): void;
		getFinalRenderedCoord(): shared.Vector3Mp;
		getFinalRenderedRot(rotationOrder: number): shared.Vector3Mp;
		getFinalRenderedInWhenFriendlyRot(player: number, rotationOrder: number): shared.Vector3Mp;
		getFinalRenderedFov(): number;
		getFinalRenderedInWhenFriendlyFov(player: number): number;
		getFinalRenderedNearClip(): number;
		getFinalRenderedFarClip(): number;
		getFinalRenderedNearDof(): number;
		getFinalRenderedFarDof(): number;
		getFinalRenderedMotionBlurStrength(): number;
		setGameplayCoordHint(x: number, y: number, z: number, duration: number, blendOutDuration: number, blendInDuration: number, unk: number): void;
		setGameplayPedHint(p0: number, x1: number, y1: number, z1: number, p4: boolean, p5: number, p6: number, p7: number): void;
		setGameplayVehicleHint(
			vehicle: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			p4: boolean,
			time: number,
			easeInTime: number,
			easeOutTime: number
		): void;
		setGameplayObjectHint(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: number, p6: number, p7: number): void;
		setGameplayEntityHint(
			entity: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			p4: boolean,
			p5: number,
			p6: number,
			p7: number,
			p8: number
		): void;
		isGameplayHintActive(): boolean;
		stopGameplayHint(p0: boolean): void;
		setGameplayHintFov(FOV: number): void;
		setGameplayHintFollowDistanceScalar(value: number): void;
		setGameplayHintBaseOrbitPitchOffset(value: number): void;
		setGameplayHintAnimOffsetx(xOffset: number): void;
		setGameplayHintAnimOffsety(yOffset: number): void;
		setGameplayHintAnimCloseup(toggle: boolean): void;
		setCinematicButtonActive(p0: boolean): void;
		isCinematicRendering(): boolean;
		shakeCinematic(p0: string, p1: number): void;
		isCinematicShaking(): boolean;
		setCinematicShakeAmplitude(p0: number): void;
		stopCinematicShaking(p0: boolean): void;
		disableVehicleFirstPersonThisFrame(): void;
		invalidateVehicleIdle(): void;
		invalidateIdle(): void;
		isCinematicIdleRendering(): boolean;
		isInVehicleDisabled(): boolean;
		createCinematicShot(p0: number, p1: number, p2: number, entity: number): void;
		isCinematicShotActive(p0: number): boolean;
		stopCinematicShot(p0: number): void;
		forceCinematicRenderingThisUpdate(p0: boolean): void;
		setCinematicModeActive(toggle: boolean): void;
		isCinematicActive(): boolean;
		stopCutsceneShaking(): void;
		getFocusPedOnScreen(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;
		setEffect(p0: number): void;
		setGameplayVehicleCamera(vehicleName: string): void;
		setGameplayVehicleCameraName(vehicleModel: number): void;
		replayFreeGetMaxRange(): number;

		unk: GameCamUnk;
	}

	export interface GameCamLegacy {
		renderScriptCams(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean, p5: number): void;
		createCam(camName: string, p1: boolean): number;
		createCamWithParams(
			camName: string,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			fov: number,
			p8: boolean,
			p9: number
		): number;
		createCamera(camHash: number, p1: boolean): number;
		createCameraWithParams(
			camHash: number,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			fov: number,
			p8: boolean,
			p9: number
		): number;
		destroyAllCams(bScriptHostCam: boolean): void;
		addCamSplineNode(
			camera: number,
			x: number,
			y: number,
			z: number,
			xRot: number,
			yRot: number,
			zRot: number,
			length: number,
			p8: number,
			p9: number
		): void;
		setCamSplinePhase(cam: number, p1: number): void;
		getCamSplineNodePhase(cam: number): number;
		setCamSplineDuration(cam: number, timeDuration: number): void;
		getCamSplineNodeIndex(cam: number): number;
		overrideCamSplineVelocity(cam: number, p1: number, p2: number, p3: number): void;
		overrideCamSplineMotionBlur(cam: number, p1: number, p2: number, p3: number): void;
		isCamSplinePaused(p0: number): boolean;
		playSynchronizedCamAnim(p0: number, p1: number, animName: string, animDictionary: string): boolean;
		getGameplayCamRot(rotationOrder: number): shared.Vector3Mp;
		getGameplayCamRelativeHeading(): number;
		setGameplayCamRelativeHeading(heading: number): void;
		setGameplayCamRelativePitch(angle: number, scalingFactor: number): void;
		setGameplayCamRawYaw(yaw: number): void;
		setGameplayCamRawPitch(pitch: number): void;
		shakeGameplayCam(shakeName: string, intensity: number): void;
		setGameplayCamShakeAmplitude(amplitude: number): void;
		stopGameplayCamShaking(p0: boolean): void;
		setFollowPedCamCutsceneChat(camName: string, p1: number): boolean;
		clampGameplayCamYaw(minimum: number, maximum: number): void;
		clampGameplayCamPitch(minimum: number, maximum: number): void;
		animateGameplayCamZoom(p0: number, distance: number): void;
		setFollowPedCamViewMode(viewMode: number): void;
		setFollowVehicleCamZoomLevel(zoomLevel: number): void;
		setFollowVehicleCamViewMode(viewMode: number): void;
		getGameplayCamRot(rotationOrder: number): shared.Vector3Mp;
		getIsMultiplayerBrief(toggle: boolean): void;
		shakeCinematicCam(p0: string, p1: number): void;
		setCinematicCamShakeAmplitude(p0: number): void;
		stopCinematicCamShaking(p0: boolean): void;
		setCamEffect(p0: number): void;
	}

	export interface GameCamUnk {
		_0xAABD62873FFB1A33(p0: number, p1: number): void;
		_0xF55E4046F6F831DC(p0: number, p1: number): void;
		_0xE111A7C0D200CBC5(p0: number, p1: number): void;
		_0x202A5ED9CE01D6E7(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;
		_0x661B5C8654ADD825(cam: number, p1: boolean): void;
		_0xA2767257A320FC82(p0: number, p1: boolean): void;
		_0x271017B9BA825366(p0: number, p1: boolean): void;
		_0x5D96CFB59DA076A0(vehicle: number, p1: number, p2: number): void;
		_0xC8B5C4A79CC18B94(cam: number): void;
		_0x5C48A1D6E3B33179(cam: number): boolean;
		_0x4879E4FE39074CDF(): boolean;
		_0x487A82C650EB7799(p0: number): void;
		_0x0225778816FDC28C(p0: number): void;
		_0x28B022A17B068A3A(p0: number, p1: number): void;
		_0x469F2ECDEC046337(p0: boolean): void;
		_0x3044240D2E0FA842(): boolean;
		_0x705A276EBFF3133D(): boolean;
		_0xDB90C6CCA48940F1(p0: boolean): void;
		_0xA7092AFE81944852(): void;
		_0xFD3151CD37EA2245(entity: number): void;
		_0xB1381B97F70C7B30(): void;
		_0xDD79DF9F4D26E1C9(): void;
		_0x271401846BD26E92(p0: boolean, p1: boolean): void;
		_0xC8391C309684595A(): void;
		_0x59424BD75174C9B1(): void;
		_0x9F97DA93681F87EA(): void;
		_0x91EF6EE6419E5B97(p0: boolean): void;
		_0x9DFE13ECDC1EC196(p0: boolean, p1: boolean): void;
		_0x79C0E43EB9B944E2(hash: number): boolean;
		_0xEE778F8C7E1142E2(p0: number): number;
		_0x2A2173E46DAECD12(p0: number, p1: number): void;
		_0x19CAFA3C87F7C2FF(): number;
		_0x0AA27680A0BD43FA(): void;
		_0xCED08CBE8EBB97C7(p0: number, p1: number): void;
		_0x2F7F2B26DD3F18EE(p0: number, p1: number): void;
		_0x4008EDF7D6E48175(p0: boolean): void;
		_0x380B4968D1E09E55(): void;
		_0xCCD078C2665D2973(p0: boolean): void;
		_0x247ACBC4ABBC9D1C(p0: boolean): void;
		_0xBF72910D0F26F025(): number;
		_0x62ECFCFDEE7885D6(): void;
		_0xDC9DA9E8789F5246(): void;
		_0x1F2300CB7FA7B7F6(): number;
		_0x17FCA7199A530203(): number;
		_0xD7360051C885628B(): number;
		_0x7B8A361C1813FBEF(): void;
		_0x324C5AA411DA7737(p0: number): void;
		_0x12DED8CA53D47EA5(p0: number): void;
		_0x5A43C76F7FC7BA5F(): void;
		_0x5C41E6BABC9E2112(p0: number): void;
		_0xEAF0FA793D05C592(): number;
		_0x62374889A4D59F72(): void;
	}

	export interface GamePad extends GamePadLegacy {
		isControlEnabled(padIndex: number, control: number): boolean;
		isControlPressed(padIndex: number, control: number): boolean;
		isControlReleased(padIndex: number, control: number): boolean;
		isControlJustPressed(padIndex: number, control: number): boolean;
		isControlJustReleased(padIndex: number, control: number): boolean;
		getControlValue(padIndex: number, control: number): number;
		getControlNormal(padIndex: number, control: number): number;
		getControlUnboundNormal(padIndex: number, control: number): number;
		setControlNormal(padIndex: number, control: number, amount: number): boolean;
		isDisabledControlPressed(padIndex: number, control: number): boolean;
		isDisabledControlReleased(padIndex: number, control: number): boolean;
		isDisabledControlJustPressed(padIndex: number, control: number): boolean;
		isDisabledControlJustReleased(padIndex: number, control: number): boolean;
		getDisabledControlNormal(padIndex: number, control: number): number;
		getDisabledControlUnboundNormal(padIndex: number, control: number): number;
		isUsingKeyboard(padIndex: number): boolean;
		isUsingKeyboard2(padIndex: number): boolean;
		setCursorLocation(x: number, y: number): boolean;
		getControlInstructionalButton(padIndex: number, control: number, p2: boolean): string;
		getControlGroupInstructionalButton(padIndex: number, controlGroup: number, p2: boolean): string;
		setControlLightEffectColor(padIndex: number, red: number, green: number, blue: number): void;
		setShake(padIndex: number, duration: number, frequency: number): void;
		stopShake(padIndex: number): void;
		isLookInverted(): boolean;
		getLocalPlayerAimState(): number;
		getLocalPlayerAimState2(): number;
		getIsUsingAlternateDriveby(): boolean;
		getAllowMovementWhileZoomed(): boolean;
		setPlayerShakesWhenControllerDisabled(toggle: boolean): void;
		setInputExclusive(padIndex: number, control: number): void;
		disableControlAction(padIndex: number, control: number, disable: boolean): void;
		enableControlAction(padIndex: number, control: number, enable: boolean): void;
		disableAllControlActions(padIndex: number): void;
		enableAllControlActions(padIndex: number): void;
		switchToInputMappingScheme(name: string): boolean;
		switchToInputMappingScheme2(name: string): boolean;
		resetInputMappingScheme(): void;

		unk: GamePadUnk;
	}

	export interface GamePadLegacy {
		isInputDisabled(padIndex: number): boolean;
		isInputJustDisabled(padIndex: number): boolean;
		getControlActionName(padIndex: number, control: number, p2: boolean): string;
		setPadShake(padIndex: number, duration: number, frequency: number): void;
		stopPadShake(padIndex: number): void;
		setPlayerpadShakesWhenControllerDisabled(toggle: boolean): void;
	}

	export interface GamePadUnk {
		_0x5B73C77D9EB66E24(p0: boolean): void;
		_0xD7D22F5592AED8BA(p0: number): number;
		_0x23F09EADC01449D6(padIndex: number): boolean;
		_0x6CD79468A1E595C6(padIndex: number): boolean;
		_0xCB0360EFEFB2580D(padIndex: number): void;
		_0x14D29BB12D47F68C(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		_0xF239400E16C23E08(p0: number, p1: number): void;
		_0xA0CEFCEA390AAB9B(p0: number): void;
		_0xE1615EC03B3BB4FD(): boolean;
		_0x25AAA32BDC98F2A3(): number;
		_0x7F4724035FDCA1DD(padIndex: number): void;
	}

	export interface GameCutscene extends GameCutsceneLegacy {
		request(cutsceneName: string, flags: number): void;
		requestWithPlaybackList(cutsceneName: string, playbackFlags: number, flags: number): void;
		remove(): void;
		hasLoaded(): boolean;
		hasThisLoaded(cutsceneName: string): boolean;
		canRequestAssetsForEntity(): boolean;
		isPlaybackFlagSet(flag: number): boolean;
		setEntityStreamingFlags(cutsceneEntName: string, p1: number, p2: number): void;
		requestCutFile(cutsceneName: string): void;
		hasCutFileLoaded(cutsceneName: string): boolean;
		removeCutFile(cutsceneName: string): void;
		getCutFileNumSections(cutsceneName: string): number;
		start(flags: number): void;
		startAtCoords(x: number, y: number, z: number, flags: number): void;
		stop(p0: boolean): void;
		stopImmediately(): void;
		setOrigin(x: number, y: number, z: number, p3: number, p4: number): void;
		getTime(): number;
		getTotalDuration(): number;
		wasSkipped(): boolean;
		hasFinished(): boolean;
		isActive(): boolean;
		isPlaying(): boolean;
		getSectionPlaying(): number;
		getEntityIndexOfEntity(cutsceneEntName: string, modelHash: number): number;
		registerEntityFor(cutscenePed: number, cutsceneEntName: string, p2: number, modelHash: number, p4: number): void;
		getEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: number): number;
		setTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		canSetEnterStateForRegisteredEntity(cutsceneEntName: string, modelHash: number): boolean;
		canSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: number): boolean;
		canSetExitStateForCamera(p0: boolean): boolean;
		setFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
		setCanBeSkipped(p0: boolean): void;
		registerSynchronisedScriptSpeech(): void;
		setPedComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;
		setPedComponentVariationFromPed(cutsceneEntName: string, ped: number, modelHash: number): void;
		doesEntityExist(cutsceneEntName: string, modelHash: number): boolean;
		setPedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;
		hasCutThisFrame(): boolean;

		unk: GameCutsceneUnk;
	}

	export interface GameCutsceneLegacy {
		requestCutscene(cutsceneName: string, flags: number): void;
		requestCutscene2(cutsceneName: string, playbackFlags: number, flags: number): void;
		hasThisCutsceneLoaded(cutsceneName: string): boolean;
		startCutscene(flags: number): void;
		startCutsceneAtCoords(x: number, y: number, z: number, flags: number): void;
		stopCutscene(p0: boolean): void;
		setCutsceneOrigin(x: number, y: number, z: number, p3: number, p4: number): void;
		getEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: number): number;
		registerEntityForCutscene(cutscenePed: number, cutsceneEntName: string, p2: number, modelHash: number, p4: number): void;
		setCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		setCutsceneFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
		setCutscenePedComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;
		doesCutsceneEntityExist(cutsceneEntName: string, modelHash: number): boolean;
		setCutscenePedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;
	}

	export interface GameCutsceneUnk {
		_0x8D9DF6ECA8768583(threadId: number): void;
		_0x011883F41211432A(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: number): void;
		_0x971D7B15BCDBEF99(): number;
		_0x583DF8E3D4AFBD98(): number;
		_0x4CEBC1ED31E8925E(cutsceneName: string): boolean;
		_0x4FCD976DA686580C(p0: number): number;
		_0x7F96F23FA9B73327(modelHash: number): void;
		_0xC61B86C9F61EB404(toggle: boolean): void;
		_0x20746F7B1032A3C7(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
		_0x06EE9048FD080382(p0: boolean): void;
		_0xA0FE76168A189DDB(): number;
		_0x2F137B508DE238F2(p0: boolean): void;
		_0xE36A98D8AB3D3C66(p0: boolean): void;
		_0x5EDEF0CF8C1DAB3C(): number;
	}

	export interface GameClock extends GameClockLegacy {
		setTime(hour: number, minute: number, second: number): void;
		pause(toggle: boolean): void;
		advanceTimeTo(hour: number, minute: number, second: number): void;
		addToTime(hours: number, minutes: number, seconds: number): void;
		getHours(): number;
		getMinutes(): number;
		getSeconds(): number;
		setDate(day: number, month: number, year: number): void;
		getDayOfWeek(): number;
		getDayOfMonth(): number;
		getMonth(): number;
		getYear(): number;
		getMillisecondsPerGameMinute(): number;
		getPosixTime(): GetPosixTimeResult;
		getUtcTime(): GetUtcTimeResult;
		getLocalTime(): GetLocalTimeResult;
	}

	export interface GameClockLegacy {
		setClockTime(hour: number, minute: number, second: number): void;
		pauseClock(toggle: boolean): void;
		advanceClockTimeTo(hour: number, minute: number, second: number): void;
		addToClockTime(hours: number, minutes: number, seconds: number): void;
		setClockDate(day: number, month: number, year: number): void;
		getLocalTimeGmt(): GetUtcTimeResult;
	}

	export interface GetPosixTimeResult {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		second: number;
	}

	export interface GetUtcTimeResult {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		second: number;
	}

	export interface GetLocalTimeResult {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		second: number;
	}

	export interface GameDatafile extends GameDatafileLegacy {
		watchRequestId(id: number): void;
		clearWatchList(): void;
		isValidRequestId(index: number): boolean;
		hasLoadedFileData(p0: number): boolean;
		hasValidFileData(p0: number): boolean;
		selectActiveFile(p0: number): boolean;
		deleteRequestedFile(p0: number): boolean;
		ugcCreateContent(
			dataCount: number,
			contentName: string,
			description: string,
			tagsCsv: string,
			contentTypeName: string,
			publish: boolean
		): number;
		ugcCreateMission(contentName: string, description: string, tagsCsv: string, contentTypeName: string, publish: boolean): boolean;
		ugcUpdateContent(
			contentId: string,
			dataCount: number,
			contentName: string,
			description: string,
			tagsCsv: string,
			contentTypeName: string
		): number;
		ugcUpdateMission(contentId: string, contentName: string, description: string, tagsCsv: string, contentTypeName: string): boolean;
		ugcSetPlayerData(contentId: string, rating: number, contentTypeName: string): boolean;
		selectUgcData(p0: number): boolean;
		selectUgcStats(p0: number, p1: boolean): boolean;
		selectUgcPlayerData(p0: number): boolean;
		selectCreatorStats(p0: number): boolean;
		loadOfflineUgc(filename: string): boolean;
		create(): void;
		delete(): void;
		storeMissionHeader(): void;
		flushMissionHeader(): void;
		getFileDict(): string;
		startSaveToCloud(filename: string): boolean;
		updateSaveToCloud(): boolean;
		isSavePending(): boolean;
		datadictSetBool(key: string, value: boolean): number;
		datadictSetInt(key: string, value: number): number;
		datadictSetFloat(key: string, value: number): number;
		datadictSetString(key: string, value: string): number;
		datadictSetVector(key: string, valueX: number, valueY: number, valueZ: number): number;
		datadictCreateDict(key: string): DatadictCreateDictResult;
		datadictCreateArray(key: string): DatadictCreateArrayResult;
		datadictGetBool(key: string): number;
		datadictGetInt(key: string): DatadictGetIntResult;
		datadictGetFloat(key: string): DatadictGetFloatResult;
		datadictGetString(key: string): DatadictGetStringResult;
		datadictGetVector(key: string): DatadictGetVectorResult;
		datadictGetDict(key: string): DatadictGetDictResult;
		datadictGetArray(key: string): DatadictGetArrayResult;
		datadictGetType(key: string): DatadictGetTypeResult;
		dataarrayAddBool(value: boolean): number;
		dataarrayAddInt(value: number): number;
		dataarrayAddFloat(value: number): number;
		dataarrayAddString(value: string): number;
		dataarrayAddVector(valueX: number, valueY: number, valueZ: number): number;
		dataarrayAddDict(): DataarrayAddDictResult;
		dataarrayGetBool(arrayIndex: number): number;
		dataarrayGetInt(arrayIndex: number): DataarrayGetIntResult;
		dataarrayGetFloat(arrayIndex: number): DataarrayGetFloatResult;
		dataarrayGetString(arrayIndex: number): DataarrayGetStringResult;
		dataarrayGetVector(arrayIndex: number): DataarrayGetVectorResult;
		dataarrayGetDict(arrayIndex: number): DataarrayGetDictResult;
		dataarrayGetCount(): DataarrayGetCountResult;
		dataarrayGetType(arrayIndex: number): DataarrayGetTypeResult;

		unk: GameDatafileUnk;
	}

	export interface GameDatafileLegacy {
		loadUgcFile(filename: string): boolean;
		objectValueAddBoolean(key: string, value: boolean): number;
		objectValueAddInteger(key: string, value: number): number;
		objectValueAddFloat(key: string, value: number): number;
		objectValueAddString(key: string, value: string): number;
		objectValueAddVector3(key: string, valueX: number, valueY: number, valueZ: number): number;
		objectValueAddObject(key: string): DatadictCreateDictResult;
		objectValueAddArray(key: string): DatadictCreateArrayResult;
		objectValueGetBoolean(key: string): number;
		objectValueGetInteger(key: string): DatadictGetIntResult;
		objectValueGetFloat(key: string): DatadictGetFloatResult;
		objectValueGetString(key: string): DatadictGetStringResult;
		objectValueGetVector3(key: string): DatadictGetVectorResult;
		objectValueGetObject(key: string): DatadictGetDictResult;
		objectValueGetArray(key: string): DatadictGetArrayResult;
		objectValueGetType(key: string): DatadictGetTypeResult;
		arrayValueAddBoolean(value: boolean): number;
		arrayValueAddInteger(value: number): number;
		arrayValueAddFloat(value: number): number;
		arrayValueAddString(value: string): number;
		arrayValueAddVector3(valueX: number, valueY: number, valueZ: number): number;
		arrayValueAddObject(): DataarrayAddDictResult;
		arrayValueGetBoolean(arrayIndex: number): number;
		arrayValueGetInteger(arrayIndex: number): DataarrayGetIntResult;
		arrayValueGetFloat(arrayIndex: number): DataarrayGetFloatResult;
		arrayValueGetString(arrayIndex: number): DataarrayGetStringResult;
		arrayValueGetVector3(arrayIndex: number): DataarrayGetVectorResult;
		arrayValueGetObject(arrayIndex: number): DataarrayGetDictResult;
		arrayValueGetSize(): DataarrayGetCountResult;
		arrayValueGetType(arrayIndex: number): DataarrayGetTypeResult;
	}

	export interface DatadictCreateDictResult {
		objectData: number;
		result: number;
	}

	export interface DatadictCreateArrayResult {
		objectData: number;
		result: number;
	}

	export interface DatadictGetIntResult {
		objectData: number;
		result: number;
	}

	export interface DatadictGetFloatResult {
		objectData: number;
		result: number;
	}

	export interface DatadictGetStringResult {
		objectData: number;
		result: string;
	}

	export interface DatadictGetVectorResult {
		objectData: number;
	}

	export interface DatadictGetDictResult {
		objectData: number;
		result: number;
	}

	export interface DatadictGetArrayResult {
		objectData: number;
		result: number;
	}

	export interface DatadictGetTypeResult {
		objectData: number;
		result: number;
	}

	export interface DataarrayAddDictResult {
		arrayData: number;
		result: number;
	}

	export interface DataarrayGetIntResult {
		arrayData: number;
		result: number;
	}

	export interface DataarrayGetFloatResult {
		arrayData: number;
		result: number;
	}

	export interface DataarrayGetStringResult {
		arrayData: number;
		result: string;
	}

	export interface DataarrayGetVectorResult {
		arrayData: number;
	}

	export interface DataarrayGetDictResult {
		arrayData: number;
		result: number;
	}

	export interface DataarrayGetCountResult {
		arrayData: number;
		result: number;
	}

	export interface DataarrayGetTypeResult {
		arrayData: number;
		result: number;
	}

	export interface GameDatafileUnk {
		_0xA6EEF01087181EDD(p0: number, p1: number): number;
		_0x6AD0BD5E087866CB(p0: number): void;
		_0xDBF860CF1DB8E599(p0: number): number;
	}

	export interface GameDecoratorLegacy {}

	export interface GameDecorator extends GameDecoratorLegacy {
		decorSetTime(entity: number, propertyName: string, timestamp: number): boolean;
		decorSetBool(entity: number, propertyName: string, value: boolean): boolean;
		decorSetFloat(entity: number, propertyName: string, value: number): boolean;
		decorSetInt(entity: number, propertyName: string, value: number): boolean;
		decorGetBool(entity: number, propertyName: string): boolean;
		decorGetFloat(entity: number, propertyName: string): number;
		decorGetInt(entity: number, propertyName: string): number;
		decorExistOn(entity: number, propertyName: string): boolean;
		decorRemove(entity: number, propertyName: string): boolean;
		decorRegister(propertyName: string, type: number): void;
		decorIsRegisteredAsType(propertyName: string, type: number): boolean;
		decorRegisterLock(): void;
	}

	export interface GameDlc extends GameDlcLegacy {
		isPresent(dlcHash: number): boolean;
		getExtraContentPackHasBeenInstalled(): boolean;
		getIsLoadingScreenActive(): boolean;
		hasCloudRequestsFinished(unused: number): boolean;
		onEnterSp(): void;
		onEnterMp(): void;

		unk: GameDlcUnk;
	}

	export interface GameDlcLegacy {
		isDlcPresent(dlcHash: number): boolean;
		nullify(unused: number): boolean;
	}

	export interface GameDlcUnk {
		_0x241FCA5B1AA14F75(): boolean;
		_0xF2E07819EF1A5289(): boolean;
		_0x9489659372A81585(): boolean;
		_0xA213B11DFF526300(): boolean;
		_0xC4637A6D03C24CC3(): boolean;
	}

	export interface GameEntity extends GameEntityLegacy {
		doesExist(entity: number): boolean;
		doesBelongToThisScript(entity: number, p1: boolean): boolean;
		doesHaveDrawable(entity: number): boolean;
		doesHavePhysics(entity: number): boolean;
		hasAnimFinished(entity: number, animDict: string, animName: string, p3: number): boolean;
		hasBeenDamagedByAnyObject(entity: number): boolean;
		hasBeenDamagedByAnyPed(entity: number): boolean;
		hasBeenDamagedByAnyVehicle(entity: number): boolean;
		hasBeenDamagedByEntity(entity1: number, entity2: number, p2: boolean): boolean;
		hasClearLosToEntity(entity1: number, entity2: number, traceType: number): boolean;
		hasClearLosToEntity2(entity1: number, entity2: number, traceType: number): number;
		hasClearLosToEntityInFront(entity1: number, entity2: number): boolean;
		hasCollidedWithAnything(entity: number): boolean;
		getLastMaterialHitBy(entity: number): number;
		getCollisionNormalOfLastHitFor(entity: number): shared.Vector3Mp;
		forceAiAndAnimationUpdate(entity: number): void;
		getAnimCurrentTime(entity: number, animDict: string, animName: string): number;
		getAnimTotalTime(entity: number, animDict: string, animName: string): number;
		getAnimDuration(animDict: string, animName: string): number;
		getAttachedTo(entity: number): number;
		getCoords(entity: number, alive: boolean): shared.Vector3Mp;
		getForwardVector(entity: number): shared.Vector3Mp;
		getForwardX(entity: number): number;
		getForwardY(entity: number): number;
		getHeading(entity: number): number;
		getPhysicsHeading(entity: number): number;
		getHealth(entity: number): number;
		getMaxHealth(entity: number): number;
		setMaxHealth(entity: number, value: number): void;
		getHeight(entity: number, X: number, Y: number, Z: number, atTop: boolean, inWorldCoords: boolean): number;
		getHeightAboveGround(entity: number): number;
		getMatrix(entity: number): GetEntityMatrixResult;
		getModel(entity: number): number;
		getOffsetFromGivenWorldCoords(entity: number, posX: number, posY: number, posZ: number): shared.Vector3Mp;
		getOffsetFromInWorldCoords(entity: number, offsetX: number, offsetY: number, offsetZ: number): shared.Vector3Mp;
		getPitch(entity: number): number;
		getQuaternion(entity: number): GetEntityQuaternionResult;
		getRoll(entity: number): number;
		getRotation(entity: number, rotationOrder: number): shared.Vector3Mp;
		getRotationVelocity(entity: number): shared.Vector3Mp;
		getScript(entity: number): GetEntityScriptResult;
		getSpeed(entity: number): number;
		getSpeedVector(entity: number, relative: boolean): shared.Vector3Mp;
		getUprightValue(entity: number): number;
		getVelocity(entity: number): shared.Vector3Mp;
		getObjectIndexFromIndex(entity: number): number;
		getPedIndexFromIndex(entity: number): number;
		getVehicleIndexFromIndex(entity: number): number;
		getWorldPositionOfBone(entity: number, boneIndex: number): shared.Vector3Mp;
		getNearestPlayerTo(entity: number): number;
		getNearestPlayerToOnTeam(entity: number, team: number): number;
		getType(entity: number): number;
		getPopulationType(entity: number): number;
		isAn(handle: number): boolean;
		isAPed(entity: number): boolean;
		isAMissionEntity(entity: number): boolean;
		isAVehicle(entity: number): boolean;
		isAnObject(entity: number): boolean;
		isAtCoord(
			entity: number,
			xPos: number,
			yPos: number,
			zPos: number,
			xSize: number,
			ySize: number,
			zSize: number,
			p7: boolean,
			p8: boolean,
			p9: number
		): boolean;
		isAtEntity(entity1: number, entity2: number, xSize: number, ySize: number, zSize: number, p5: boolean, p6: boolean, p7: number): boolean;
		isAttached(entity: number): boolean;
		isAttachedToAnyObject(entity: number): boolean;
		isAttachedToAnyPed(entity: number): boolean;
		isAttachedToAnyVehicle(entity: number): boolean;
		isAttachedToEntity(from: number, to: number): boolean;
		isDead(entity: number, p1: boolean): boolean;
		isInAir(entity: number): boolean;
		isInAngledArea(
			entity: number,
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			width: number,
			debug: boolean,
			includeZ: boolean,
			p10: number
		): boolean;
		isInArea(
			entity: number,
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			p7: boolean,
			p8: boolean,
			p9: number
		): boolean;
		isInZone(entity: number, zone: string): boolean;
		isInWater(entity: number): boolean;
		getSubmergedLevel(entity: number): number;
		isOnScreen(entity: number): boolean;
		isPlayingAnim(entity: number, animDict: string, animName: string, taskFlag: number): boolean;
		isStatic(entity: number): boolean;
		isTouchingEntity(entity: number, targetEntity: number): boolean;
		isTouchingModel(entity: number, modelHash: number): boolean;
		isUpright(entity: number, angle: number): boolean;
		isUpsidedown(entity: number): boolean;
		isVisible(entity: number): boolean;
		isVisibleToScript(entity: number): boolean;
		isOccluded(entity: number): boolean;
		wouldBeOccluded(entityModelHash: number, x: number, y: number, z: number, p4: boolean): boolean;
		isWaitingForWorldCollision(entity: number): boolean;
		applyForceToCenterOfMass(
			entity: number,
			forceType: number,
			x: number,
			y: number,
			z: number,
			p5: boolean,
			isDirectionRel: boolean,
			isForceRel: boolean,
			p8: boolean
		): void;
		applyForceTo(
			entity: number,
			forceFlags: number,
			x: number,
			y: number,
			z: number,
			offX: number,
			offY: number,
			offZ: number,
			boneIndex: number,
			isDirectionRel: boolean,
			ignoreUpVec: boolean,
			isForceRel: boolean,
			p12: boolean,
			p13: boolean
		): void;
		attachToEntity(
			entity1: number,
			entity2: number,
			boneIndex: number,
			xPos: number,
			yPos: number,
			zPos: number,
			xRot: number,
			yRot: number,
			zRot: number,
			p9: boolean,
			useSoftPinning: boolean,
			collision: boolean,
			isPed: boolean,
			vertexIndex: number,
			fixedRot: boolean
		): void;
		attachBoneToEntityBone(entity1: number, entity2: number, boneIndex1: number, boneIndex2: number, p4: boolean, p5: boolean): void;
		attachBoneToEntityBonePhysically(entity1: number, entity2: number, boneIndex1: number, boneIndex2: number, p4: boolean, p5: boolean): void;
		attachToEntityPhysically(
			entity1: number,
			entity2: number,
			boneIndex1: number,
			boneIndex2: number,
			xPos1: number,
			yPos1: number,
			zPos1: number,
			xPos2: number,
			yPos2: number,
			zPos2: number,
			xRot: number,
			yRot: number,
			zRot: number,
			breakForce: number,
			fixedRot: boolean,
			p15: boolean,
			collision: boolean,
			p17: boolean,
			p18: number
		): void;
		processAttachments(entity: number): void;
		getBoneIndexByName(entity: number, boneName: string): number;
		clearLastDamageEntity(entity: number): void;
		delete(entity: number): number;
		detach(entity: number, dynamic: boolean, collision: boolean): void;
		freezePosition(entity: number, toggle: boolean): void;
		setCleanupByEngine(entity: number, toggle: boolean): void;
		playAnim(
			entity: number,
			animName: string,
			animDict: string,
			p3: number,
			loop: boolean,
			stayInAnim: boolean,
			p6: boolean,
			delta: number,
			bitset: number
		): boolean;
		playSynchronizedAnim(
			entity: number,
			syncedScene: number,
			animation: string,
			propName: string,
			p4: number,
			p5: number,
			p6: number,
			p7: number
		): boolean;
		playSynchronizedMapAnim(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number
		): PlaySynchronizedMapEntityAnimResult;
		stopSynchronizedMapAnim(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): boolean;
		stopAnim(entity: number, animation: string, animGroup: string, p3: number): number;
		stopSynchronizedAnim(entity: number, p1: number, p2: boolean): boolean;
		hasAnimEventFired(entity: number, actionHash: number): boolean;
		findAnimEventPhase(animDictionary: string, animName: string, p2: string): FindAnimEventPhaseResult;
		setAnimCurrentTime(entity: number, animDictionary: string, animName: string, time: number): void;
		setAnimSpeed(entity: number, animDictionary: string, animName: string, speedMultiplier: number): void;
		setAsMissionEntity(entity: number, p1: boolean, p2: boolean): void;
		setAsNoLongerNeeded(entity: number): number;
		setPedAsNoLongerNeeded(ped: number): number;
		setVehicleAsNoLongerNeeded(vehicle: number): number;
		setObjectAsNoLongerNeeded(object: number): number;
		setCanBeDamaged(entity: number, toggle: boolean): void;
		getCanBeDamaged(entity: number): boolean;
		setCanBeDamagedByRelationshipGroup(entity: number, bCanBeDamaged: boolean, relGroup: number): void;
		setCanBeTargetedWithoutLos(entity: number, toggle: boolean): void;
		setCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;
		getCollisionDisabled(entity: number): boolean;
		setCompletelyDisableCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;
		setCoords(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;
		setCoordsWithoutPlantsReset(
			entity: number,
			xPos: number,
			yPos: number,
			zPos: number,
			alive: boolean,
			deadFlag: boolean,
			ragdollFlag: boolean,
			clearArea: boolean
		): void;
		setCoordsNoOffset(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;
		setDynamic(entity: number, toggle: boolean): void;
		setHeading(entity: number, heading: number): void;
		setHealth(entity: number, health: number, p2: number): void;
		setInvincible(entity: number, toggle: boolean): void;
		setIsTargetPriority(entity: number, p1: boolean, p2: number): void;
		setLights(entity: number, toggle: boolean): void;
		setLoadCollisionFlag(entity: number, toggle: boolean, p2: number): void;
		hasCollisionLoadedAround(entity: number): boolean;
		setMaxSpeed(entity: number, speed: number): void;
		setOnlyDamagedByPlayer(entity: number, toggle: boolean): void;
		setOnlyDamagedByRelationshipGroup(entity: number, p1: boolean, p2: number): void;
		setProofs(
			entity: number,
			bulletProof: boolean,
			fireProof: boolean,
			explosionProof: boolean,
			collisionProof: boolean,
			meleeProof: boolean,
			p6: boolean,
			p7: boolean,
			drownProof: boolean
		): void;
		getProofs(entity: number): GetEntityProofsResult;
		setQuaternion(entity: number, x: number, y: number, z: number, w: number): void;
		setRecordsCollisions(entity: number, toggle: boolean): void;
		setRotation(entity: number, pitch: number, roll: number, yaw: number, rotationOrder: number, p5: boolean): void;
		setVisible(entity: number, toggle: boolean, unk: boolean): void;
		setVelocity(entity: number, x: number, y: number, z: number): void;
		setHasGravity(entity: number, toggle: boolean): void;
		setLodDist(entity: number, value: number): void;
		getLodDist(entity: number): number;
		setAlpha(entity: number, alphaLevel: number, skin: boolean): void;
		getAlpha(entity: number): number;
		resetAlpha(entity: number): void;
		setAlwaysPrerender(entity: number, toggle: boolean): void;
		setRenderScorched(entity: number, toggle: boolean): void;
		setTrafficlightOverride(entity: number, state: number): void;
		createModelSwap(x: number, y: number, z: number, radius: number, originalModel: number, newModel: number, p6: boolean): void;
		removeModelSwap(x: number, y: number, z: number, radius: number, originalModel: number, newModel: number, p6: boolean): void;
		createModelHide(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): void;
		createModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): void;
		removeModelHide(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): void;
		createForcedObject(x: number, y: number, z: number, p3: number, modelHash: number, p5: boolean): void;
		removeForcedObject(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		setNoCollisionEntity(entity1: number, entity2: number, thisFrameOnly: boolean): void;
		setMotionBlur(entity: number, toggle: boolean): void;
		setCanAutoVaultOn(entity: number, toggle: boolean): void;
		setCanClimbOn(entity: number, toggle: boolean): void;
		setDecalsDisabled(entity: number, p1: boolean): void;
		getBoneRotation(entity: number, boneIndex: number): shared.Vector3Mp;
		getBonePosition2(entity: number, boneIndex: number): shared.Vector3Mp;
		getBoneRotationLocal(entity: number, boneIndex: number): shared.Vector3Mp;
		getBoneCount(entity: number): number;
		enableUnk(entity: number): void;
		getPickup(entity: number, modelHash: number): number;

		unk: GameEntityUnk;
	}

	export interface GameEntityUnk {
		_0x694E00132F2823ED(entity: number, toggle: boolean): void;
		_0x352E2B5CF420BF3B(p0: number, p1: number): void;
		_0xC34BC448DA29F5E9(entity: number, toggle: boolean): void;
		_0xE66377CDDADA4810(entity: number, p1: boolean): void;
		_0x490861B88F4FD846(p0: number): void;
		_0xCEA7C8E1B48FF68C(p0: number, p1: number): void;
		_0x5C3B791D580E0BC2(entity: number, p1: number): void;
		_0x78E8E3A640178255(entity: number): void;
		_0xDC6F8601FAF2E893(entity: number, toggle: boolean): void;
		_0x1A092BB0C3808B96(entity: number, p1: boolean): void;
		_0xB17BC6453F6CF5AC(p0: number, p1: number): void;
		_0x68B562E124CC0AEF(pickup: number, pickup2: number): void;
		_0x36F32DE87082343E(p0: number, p1: number): void;
		_0xD7B80E7C3BEFC396(pickup: number, toggle: boolean): void;
	}

	export interface GetEntityProofsResult {
		bulletProof: boolean;
		fireProof: boolean;
		explosionProof: boolean;
		collisionProof: boolean;
		meleeProof: boolean;
		steamProof: boolean;
		p7: boolean;
		drownProof: boolean;
		result: boolean;
	}

	export interface FindAnimEventPhaseResult {
		p3: number;
		p4: number;
		result: boolean;
	}

	export interface PlaySynchronizedMapEntityAnimResult {
		p6: number;
		p7: number;
		result: boolean;
	}

	export interface GetEntityMatrixResult {
		forwardVector: shared.Vector3Mp;
		rightVector: shared.Vector3Mp;
		upVector: shared.Vector3Mp;
		position: shared.Vector3Mp;
	}

	interface GetEntityQuaternionResult {
		x: number;
		y: number;
		z: number;
		w: number;
	}

	interface GetEntityScriptResult {
		script: number;
		result: string;
	}

	export interface GameEntityLegacy {
		getEntityAnimDuration(animDict: string, animName: string): number;
		isAnEntity(handle: number): boolean;
		wouldEntityBeOccluded(entityModelHash: number, x: number, y: number, z: number, p4: boolean): boolean;
		playSynchronizedMapEntityAnim(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number
		): PlaySynchronizedMapEntityAnimResult;
		stopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): boolean;
	}

	export interface GameEvent extends GameEventLegacy {
		setDecisionMaker(ped: number, name: number): void;
		clearDecisionMakerResponse(name: number, eventType: number): void;
		blockDecisionMaker(name: number, eventType: number): void;
		unblockDecisionMaker(name: number, eventType: number): void;
		addShockingAtPosition(eventType: number, x: number, y: number, z: number, duration: number): number;
		addShockingForEntity(eventType: number, entity: number, duration: number): number;
		isShockingInSphere(eventType: number, x: number, y: number, z: number, radius: number): boolean;
		removeShocking(event: number): boolean;
		removeAllShockingS(p0: boolean): void;
		removeShockingSpawnBlockingAreas(): void;
		suppressShockingEventsNextFrame(): void;
		suppressShockingTypeNextFrame(eventType: number): void;
		suppressAgitationEventsNextFrame(): void;
	}

	export interface GameEventLegacy {
		clearDecisionMakerEventResponse(name: number, eventType: number): void;
		blockDecisionMakerEvent(name: number, eventType: number): void;
		unblockDecisionMakerEvent(name: number, eventType: number): void;
		addShockingEventAtPosition(eventType: number, x: number, y: number, z: number, duration: number): number;
		addShockingEventForEntity(eventType: number, entity: number, duration: number): number;
		isShockingEventInSphere(eventType: number, x: number, y: number, z: number, radius: number): boolean;
		removeShockingEvent(event: number): boolean;
		removeAllShockingEvents(p0: boolean): void;
		suppressShockingEventTypeNextFrame(eventType: number): void;
	}

	export interface GameFiles extends GameFilesLegacy {
		getNumTattooShopDlcItems(character: number): number;
		getTattooShopDlcItemData(characterType: number, decorationIndex: number): number;
		initShopPedComponent(): number;
		initShopPedProp(): number;
		setupShopPedApparelQuery(p0: number, p1: number, p2: number, p3: number): number;
		setupShopPedApparelQueryTu(character: number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;
		getShopPedQueryComponent(componentId: number): number;
		getShopPedComponent(componentHash: number): number;
		getShopPedQueryProp(componentId: number): number;
		getShopPedProp(componentHash: number): number;
		getHashNameForComponent(entity: number, componentId: number, drawableVariant: number, textureVariant: number): number;
		getHashNameForProp(entity: number, componentId: number, propIndex: number, propTextureIndex: number): number;
		getShopPedApparelVariantComponentCount(componentHash: number): number;
		getShopPedApparelVariantPropCount(propHash: number): number;
		getVariantComponent(componentHash: number, variantComponentIndex: number): GetVariantComponentResult;
		getVariantProp(componentHash: number, variantPropIndex: number): GetVariantPropResult;
		getShopPedApparelForcedComponentCount(componentHash: number): number;
		getShopPedApparelForcedPropCount(componentHash: number): number;
		getForcedComponent(componentHash: number, forcedComponentIndex: number): GetForcedComponentResult;
		getForcedProp(componentHash: number, forcedPropIndex: number): GetForcedPropResult;
		doesShopPedApparelHaveRestrictionTag(componentHash: number, restrictionTagHash: number, componentId: number): boolean;
		setupShopPedOutfitQuery(character: number, p1: boolean): number;
		getShopPedQueryOutfit(outfitIndex: number): number;
		getShopPedOutfit(p0: number): number;
		getShopPedOutfitLocate(p0: number): number;
		getShopPedOutfitPropVariant(outfitHash: number, variantIndex: number): number;
		getShopPedOutfitComponentVariant(outfitHash: number, variantIndex: number): number;
		getNumDlcVehicles(): number;
		getDlcVehicleModel(dlcVehicleIndex: number): number;
		getDlcVehicleData(dlcVehicleIndex: number): number;
		getDlcVehicleFlags(dlcVehicleIndex: number): number;
		getNumDlcWeapons(): number;
		getNumDlcWeaponsSp(): number;
		getDlcWeaponData(dlcWeaponIndex: number): number;
		getDlcWeaponDataSp(dlcWeaponIndex: number): number;
		getNumDlcWeaponComponents(dlcWeaponIndex: number): number;
		getNumDlcWeaponComponentsSp(dlcWeaponIndex: number): number;
		getDlcWeaponComponentData(dlcWeaponIndex: number, dlcWeapCompIndex: number): number;
		getDlcWeaponComponentDataSp(dlcWeaponIndex: number, dlcWeapCompIndex: number): number;
		isContentItemLocked(itemHash: number): boolean;
		isDlcVehicleMod(hash: number): boolean;
		getDlcVehicleModLockHash(hash: number): number;
		loadContentChangeSetGroup(hash: number): void;
		unloadContentChangeSetGroup(hash: number): void;

		unk: GameFilesUnk;
	}

	export interface GameFilesLegacy {
		getNumPropsFromOutfit(character: number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;
		getNumForcedComponents(componentHash: number): number;
		getPropFromOutfit(outfitHash: number, variantIndex: number): number;
		isDlcDataEmpty(itemHash: number): boolean;
	}

	export interface GameFilesUnk {
		_0x10144267DD22866C(overlayHash: number, p1: number, character: number): number;
		_0x96E2929292A4DB77(componentHash: number): number;
		_0x6CEBE002E58DEE97(componentHash: number): number;
	}

	export interface GetVariantComponentResult {
		nameHash: number;
		enumValue: number;
		componentType: number;
	}

	export interface GetVariantPropResult {
		nameHash: number;
		enumValue: number;
		anchorPoint: number;
	}

	export interface GetForcedComponentResult {
		nameHash: number;
		enumValue: number;
		componentType: number;
	}

	export interface GetForcedPropResult {
		nameHash: number;
		enumValue: number;
		anchorPoint: number;
	}

	export interface GameFire extends GameFireLegacy {
		startScript(X: number, Y: number, Z: number, maxChildren: number, isGasFire: boolean): number;
		removeScript(fireHandle: number): void;
		startEntity(entity: number): number;
		stopEntity(entity: number): void;
		isEntityOn(entity: number): boolean;
		getNumberOfFiresInRange(x: number, y: number, z: number, radius: number): number;
		setSpreadRate(p0: number): void;
		stopInRange(x: number, y: number, z: number, radius: number): void;
		getClosestPos(x: number, y: number, z: number): shared.Vector3Mp;
		addExplosion(
			x: number,
			y: number,
			z: number,
			explosionType: number,
			damageScale: number,
			isAudible: boolean,
			isInvisible: boolean,
			cameraShake: number,
			noDamage: boolean
		): void;
		addOwnedExplosion(
			ped: number,
			x: number,
			y: number,
			z: number,
			explosionType: number,
			damageScale: number,
			isAudible: boolean,
			isInvisible: boolean,
			cameraShake: number
		): void;
		addExplosionWithUserVfx(
			x: number,
			y: number,
			z: number,
			explosionType: number,
			explosionFx: number,
			damageScale: number,
			isAudible: boolean,
			isInvisible: boolean,
			cameraShake: number
		): void;
		isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
		isExplosionActiveInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
		isExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): boolean;
		getEntityInsideExplosionSphere(explosionType: number, x: number, y: number, z: number, radius: number): number;
		isExplosionInAngledArea(
			explosionType: number,
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			width: number
		): boolean;
		getEntityInsideExplosionArea(
			explosionType: number,
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			radius: number
		): number;
	}

	export interface GameFireLegacy {
		startScriptFire(X: number, Y: number, Z: number, maxChildren: number, isGasFire: boolean): number;
		removeScriptFire(fireHandle: number): void;
		stopFireInRange(x: number, y: number, z: number, radius: number): void;
		getClosestFirePos(x: number, y: number, z: number): shared.Vector3Mp;
		addSpecfxExplosion(
			x: number,
			y: number,
			z: number,
			explosionType: number,
			explosionFx: number,
			damageScale: number,
			isAudible: boolean,
			isInvisible: boolean,
			cameraShake: number
		): void;
		getPedInsideExplosionArea(
			explosionType: number,
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			radius: number
		): number;
	}

	export interface GameGameplayLegacy {
		getFreeStackSlotsCount(stackSize: number): number;
		setWeatherTypeOverTime(weatherType: string, time: number): void;
		setRainFxIntensity(intensity: number): void;
		setCloudHatTransition(name: string, transitionTime: number): void;
		clearAreaOfEverything(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
		disableAutomaticRespawn(toggle: boolean): void;
		enableMpDlcMaps(p0: number): void;
		setUnkMapFlag(flag: number): void;
		startSaveStruct(size: number, structName: string): number;
		startSaveArray(size: number, arrayName: string): number;
	}

	export interface GameGameplay extends GameGameplayLegacy {
		getAllocatedStackSize(): number;
		getNumberOfFreeStacksOfThisSize(stackSize: number): number;
		setRandomSeed(seed: number): void;
		setTimeScale(timeScale: number): void;
		setMissionFlag(toggle: boolean): void;
		getMissionFlag(): boolean;
		setRandomEventFlag(toggle: boolean): void;
		getRandomEventFlag(): boolean;
		getGlobalCharBuffer(): string;
		hasResumedFromSuspend(): boolean;
		getBaseElementMetadata(p2: number, p3: boolean): GetBaseElementMetadataResult;
		getPrevWeatherTypeHashName(): number;
		getNextWeatherTypeHashName(): number;
		isPrevWeatherType(weatherType: string): boolean;
		isNextWeatherType(weatherType: string): boolean;
		setWeatherTypePersist(weatherType: string): void;
		setWeatherTypeNowPersist(weatherType: string): void;
		setWeatherTypeNow(weatherType: string): void;
		setWeatherTypeOvertimePersist(weatherType: string, time: number): void;
		setRandomWeatherType(): void;
		clearWeatherTypePersist(): void;
		getWeatherTypeTransition(): GetWeatherTypeTransitionResult;
		setWeatherTypeTransition(weatherType1: number, weatherType2: number, percentWeather2: number): void;
		setOverrideWeather(weatherType: string): void;
		clearOverrideWeather(): void;
		waterOverrideSetShorewaveamplitude(amplitude: number): void;
		waterOverrideSetShorewaveminamplitude(minAmplitude: number): void;
		waterOverrideSetShorewavemaxamplitude(maxAmplitude: number): void;
		waterOverrideSetOceannoiseminamplitude(minAmplitude: number): void;
		waterOverrideSetOceanwaveamplitude(amplitude: number): void;
		waterOverrideSetOceanwaveminamplitude(minAmplitude: number): void;
		waterOverrideSetOceanwavemaxamplitude(maxAmplitude: number): void;
		waterOverrideSetRipplebumpiness(bumpiness: number): void;
		waterOverrideSetRippleminbumpiness(minBumpiness: number): void;
		waterOverrideSetRipplemaxbumpiness(maxBumpiness: number): void;
		waterOverrideSetRippledisturb(disturb: number): void;
		waterOverrideSetStrength(strength: number): void;
		waterOverrideFadeIn(p0: number): void;
		waterOverrideFadeOut(p0: number): void;
		setWind(speed: number): void;
		setWindSpeed(speed: number): void;
		getWindSpeed(): number;
		setWindDirection(direction: number): void;
		getWindDirection(): shared.Vector3Mp;
		setRainLevel(intensity: number): void;
		getRainLevel(): number;
		setSnowLevel(level: number): void;
		getSnowLevel(): number;
		forceLightningFlash(): void;
		preloadCloudHat(name: string): void;
		loadCloudHat(name: string, transitionTime: number): void;
		unloadCloudHat(name: string, p1: number): void;
		clearCloudHat(): void;
		setCloudHatOpacity(opacity: number): void;
		getCloudHatOpacity(): number;
		getGameTimer(): number;
		getFrameTime(): number;
		getBenchmarkTime(): number;
		getFrameCount(): number;
		getRandomFloatInRange(startRange: number, endRange: number): number;
		getRandomIntInRange(startRange: number, endRange: number): number;
		getRandomIntInRange2(startRange: number, endRange: number): number;
		getGroundZFor3DCoord(x: number, y: number, z: number, ignoreWater: boolean, p5: boolean): number;
		getGroundZAndNormalFor3DCoord(x: number, y: number, z: number): GetGroundZAndNormalFor3DCoordResult;
		getGroundZFor3DCoord2(x: number, y: number, z: number, p4: boolean, p5: boolean): number;
		asin(p0: number): number;
		acos(p0: number): number;
		tan(p0: number): number;
		atan(p0: number): number;
		atan2(p0: number, p1: number): number;
		getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;
		getAngleBetween2DVectors(x1: number, y1: number, x2: number, y2: number): number;
		getHeadingFromVector2D(dx: number, dy: number): number;
		setBit(offset: number): number;
		clearBit(offset: number): number;
		getHashKey(string: string): number;
		slerpNearQuaternion(
			t: number,
			x: number,
			y: number,
			z: number,
			w: number,
			x1: number,
			y1: number,
			z1: number,
			w1: number
		): SlerpNearQuaternionResult;
		isAreaOccupied(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: boolean,
			p7: boolean,
			p8: boolean,
			p9: boolean,
			p10: boolean,
			p11: number,
			p12: boolean
		): boolean;
		isPositionOccupied(
			x: number,
			y: number,
			z: number,
			range: number,
			p4: boolean,
			checkVehicles: boolean,
			checkPeds: boolean,
			p7: boolean,
			p8: boolean,
			ignoreEntity: number,
			p10: boolean
		): boolean;
		isPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): boolean;
		clearArea(X: number, Y: number, Z: number, radius: number, p4: boolean, ignoreCopCars: boolean, ignoreObjects: boolean, p7: boolean): void;
		clearAreaLeaveVehicleHealth(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
		clearAreaOfVehicles(
			x: number,
			y: number,
			z: number,
			radius: number,
			p4: boolean,
			p5: boolean,
			p6: boolean,
			p7: boolean,
			p8: boolean,
			p9: boolean
		): void;
		clearAngledAreaOfVehicles(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			width: number,
			p7: boolean,
			p8: boolean,
			p9: boolean,
			p10: boolean,
			p11: boolean,
			p12: number
		): void;
		clearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: number): void;
		clearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: number): void;
		clearAreaOfCops(x: number, y: number, z: number, radius: number, flags: number): void;
		clearAreaOfProjectiles(x: number, y: number, z: number, radius: number, flags: number): void;
		setSaveMenuActive(ignoreVehicle: boolean): void;
		setCreditsActive(toggle: boolean): void;
		haveCreditsReachedEnd(): boolean;
		terminateAllScriptsWithThisName(scriptName: string): void;
		networkSetScriptIsSafeForNetworkGame(): void;
		addHospitalRestart(x: number, y: number, z: number, p3: number, p4: number): number;
		disableHospitalRestart(hospitalIndex: number, toggle: boolean): void;
		addPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: number): number;
		disablePoliceRestart(policeIndex: number, toggle: boolean): void;
		setRestartCustomPosition(x: number, y: number, z: number, heading: number): void;
		clearRestartCustomPosition(): void;
		pauseDeathArrestRestart(toggle: boolean): void;
		ignoreNextRestart(toggle: boolean): void;
		setFadeOutAfterDeath(toggle: boolean): void;
		setFadeOutAfterArrest(toggle: boolean): void;
		setFadeInAfterDeathArrest(toggle: boolean): void;
		setFadeInAfterLoad(toggle: boolean): void;
		registerSaveHouse(p0: number, p1: number, p2: number, p3: number, p5: number, p6: number): RegisterSaveHouseResult;
		setSaveHouse(p0: number, p1: boolean, p2: boolean): void;
		overrideSaveHouse(p0: boolean, p1: number, p2: number, p3: number, p4: number, p5: boolean, p6: number, p7: number): boolean;
		doAutoSave(): void;
		getIsAutoSaveOff(): boolean;
		isAutoSaveInProgress(): boolean;
		beginReplayStats(p0: number, p1: number): void;
		addReplayStatValue(value: number): void;
		endReplayStats(): void;
		getReplayStatMissionType(): number;
		getReplayStatCount(): number;
		getReplayStatAtIndex(index: number): number;
		clearReplayStats(): void;
		isMemoryCardInUse(): boolean;
		shootSingleBulletBetweenCoords(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			damage: number,
			p7: boolean,
			weaponHash: number,
			ownerPed: number,
			isAudible: boolean,
			isInvisible: boolean,
			speed: number
		): void;
		shootSingleBulletBetweenCoordsIgnoreEntity(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			damage: number,
			p7: boolean,
			weaponHash: number,
			ownerPed: number,
			isAudible: boolean,
			isInvisible: boolean,
			speed: number,
			entity: number,
			p14: number
		): void;
		shootSingleBulletBetweenCoordsIgnoreEntityNew(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			damage: number,
			p7: boolean,
			weaponHash: number,
			ownerPed: number,
			isAudible: boolean,
			isInvisible: boolean,
			speed: number,
			entity: number,
			p14: boolean,
			p15: boolean,
			p16: boolean,
			p17: boolean,
			p18: number,
			p19: number,
			p20: number
		): void;
		getModelDimensions(modelHash: number): GetModelDimensionsResult;
		setFakeWantedLevel(fakeWantedLevel: number): void;
		getFakeWantedLevel(): number;
		isBitSet(address: number, offset: number): boolean;
		usingMissionCreator(toggle: boolean): void;
		allowMissionCreatorWarp(toggle: boolean): void;
		setMinigameInProgress(toggle: boolean): void;
		isMinigameInProgress(): boolean;
		isThisAMinigameScript(): boolean;
		isSniperInverted(): boolean;
		shouldUseMetricMeasurements(): boolean;
		getProfileSetting(profileSetting: number): number;
		areStringsEqual(string1: string, string2: string): boolean;
		compareStrings(str1: string, str2: string, matchCase: boolean, maxLength: number): number;
		absi(value: number): number;
		absf(value: number): number;
		isSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
		isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
		isProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, ownedByPlayer: boolean): boolean;
		isProjectileTypeInAngledArea(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			width: number,
			p7: number,
			ownedByPlayer: boolean
		): boolean;
		isProjectileTypeWithinDistance(x: number, y: number, z: number, projectileHash: number, radius: number, ownedByPlayer: boolean): boolean;
		getCoordsOfProjectileTypeInArea(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			projectileHash: number,
			ownedByPlayer: boolean
		): shared.Vector3Mp;
		getCoordsOfProjectileTypeWithinDistance(
			ped: number,
			weaponHash: number,
			radius: number,
			ownedByPlayer: boolean
		): GetCoordsOfProjectileTypeWithinDistanceResult;
		getProjectileNearPed(ped: number, weaponhash: number, p2: number, p3: number, p4: number, p5: boolean): boolean;
		isBulletInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, ownedByPlayer: boolean): boolean;
		isBulletInArea(x: number, y: number, z: number, radius: number, ownedByPlayer: boolean): boolean;
		isBulletInBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
		hasBulletImpactedInArea(x: number, y: number, z: number, p3: number, p4: boolean, p5: boolean): boolean;
		hasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): boolean;
		isOrbisVersion(): boolean;
		isDurangoVersion(): boolean;
		isXbox360Version(): boolean;
		isPs3Version(): boolean;
		isPcVersion(): boolean;
		isAussieVersion(): boolean;
		isStringNull(string: string): boolean;
		isStringNullOrEmpty(string: string): boolean;
		stringToInt(string: string): number;
		setBitsInRange(rangeStart: number, rangeEnd: number, p3: number): number;
		getBitsInRange(variable: number, rangeStart: number, rangeEnd: number): number;
		addStuntJump(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			x3: number,
			y3: number,
			z3: number,
			x4: number,
			y4: number,
			z4: number,
			camX: number,
			camY: number,
			camZ: number,
			p15: number,
			p16: number,
			p17: number
		): number;
		addStuntJumpAngled(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			radius1: number,
			x3: number,
			y3: number,
			z3: number,
			x4: number,
			y4: number,
			z4: number,
			radius2: number,
			camX: number,
			camY: number,
			camZ: number,
			p17: number,
			p18: number,
			p19: number
		): number;
		deleteStuntJump(p0: number): void;
		enableStuntJumpSet(p0: number): void;
		disableStuntJumpSet(p0: number): void;
		setStuntJumpsCanTrigger(toggle: boolean): void;
		isStuntJumpInProgress(): boolean;
		isStuntJumpMessageShowing(): boolean;
		getNumSuccessfulStuntJumps(): number;
		getTotalSuccessfulStuntJumps(): number;
		cancelStuntJump(): void;
		setGamePaused(toggle: boolean): void;
		setThisScriptCanBePaused(toggle: boolean): void;
		setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;
		hasButtonCombinationJustBeenEntered(hash: number, amount: number): boolean;
		hasCheatStringJustBeenEntered(hash: number): boolean;
		setInstancePriorityMode(p0: number): void;
		setInstancePriorityHint(flag: number): void;
		isFrontendFading(): boolean;
		populateNow(): void;
		getIndexOfCurrentLevel(): number;
		setGravityLevel(level: number): void;
		startSaveData(p1: number, p2: boolean): number;
		stopSaveData(): void;
		getSizeOfSaveData(p0: boolean): number;
		registerIntToSave(name: string): number;
		registerInt64ToSave(name: string): number;
		registerEnumToSave(name: string): number;
		registerFloatToSave(name: string): number;
		registerBoolToSave(name: string): number;
		registerTextLabelToSave(name: string): number;
		registerTextLabelToSave2(name: string): number;
		startSaveStructWithSize(size: number, structName: string): number;
		stopSaveStruct(): void;
		startSaveArrayWithSize(size: number, arrayName: string): number;
		stopSaveArray(): void;
		copyMemory(size: number): CopyMemoryResult;
		enableDispatchService(dispatchService: number, toggle: boolean): void;
		blockDispatchServiceResourceCreation(dispatchService: number, toggle: boolean): void;
		getNumDispatchedUnitsForPlayer(dispatchService: number): number;
		createIncident(dispatchService: number, x: number, y: number, z: number, numUnits: number, radius: number, p7: number, p8: number): number;
		createIncidentWithEntity(dispatchService: number, ped: number, numUnits: number, radius: number, p5: number, p6: number): number;
		deleteIncident(incidentId: number): void;
		isIncidentValid(incidentId: number): boolean;
		setIncidentRequestedUnits(incidentId: number, dispatchService: number, numUnits: number): void;
		setIncidentUnk(incidentId: number, p1: number): void;
		findSpawnPointInDirection(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, distance: number): shared.Vector3Mp;
		addPopMultiplierArea(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			p6: number,
			p7: number,
			p8: boolean,
			p9: boolean
		): number;
		doesPopMultiplierAreaExist(id: number): boolean;
		removePopMultiplierArea(id: number, p1: boolean): void;
		isPopMultiplierAreaUnk(id: number): boolean;
		addPopMultiplierSphere(
			x: number,
			y: number,
			z: number,
			radius: number,
			pedMultiplier: number,
			vehicleMultiplier: number,
			p6: boolean,
			p7: boolean
		): number;
		doesPopMultiplierSphereExist(id: number): boolean;
		removePopMultiplierSphere(id: number, p1: boolean): void;
		enableTennisMode(ped: number, toggle: boolean, p2: boolean): void;
		isTennisMode(ped: number): boolean;
		playTennisSwingAnim(ped: number, animDict: string, animName: string, p3: number, p4: number, p5: boolean): void;
		getTennisSwingAnimComplete(ped: number): boolean;
		playTennisDiveAnim(ped: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;
		resetDispatchSpawnLocation(): void;
		setDispatchSpawnLocation(x: number, y: number, z: number): void;
		resetDispatchIdealSpawnDistance(): void;
		setDispatchIdealSpawnDistance(p0: number): void;
		resetDispatchTimeBetweenSpawnAttempts(p0: number): void;
		setDispatchTimeBetweenSpawnAttempts(p0: number, p1: number): void;
		setDispatchTimeBetweenSpawnAttemptsMultiplier(p0: number, p1: number): void;
		addDispatchSpawnBlockingAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): number;
		addDispatchSpawnBlockingArea(x1: number, y1: number, x2: number, y2: number): number;
		removeDispatchSpawnBlockingArea(p0: number): void;
		resetDispatchSpawnBlockingAreas(): void;
		addTacticalAnalysisPoint(x: number, y: number, z: number): void;
		clearTacticalAnalysisPoints(): void;
		setRiotModeEnabled(toggle: boolean): void;
		displayOnscreenKeyboardWithLongerInitialString(
			p0: number,
			windowTitle: string,
			defaultText: string,
			defaultConcat1: string,
			defaultConcat2: string,
			defaultConcat3: string,
			defaultConcat4: string,
			defaultConcat5: string,
			defaultConcat6: string,
			defaultConcat7: string,
			maxInputLength: number
		): number;
		displayOnscreenKeyboard(
			p0: number,
			windowTitle: string,
			p2: string,
			defaultText: string,
			defaultConcat1: string,
			defaultConcat2: string,
			defaultConcat3: string,
			maxInputLength: number
		): void;
		updateOnscreenKeyboard(): number;
		getOnscreenKeyboardResult(): string;
		cancelOnscreenKeyboard(): void;
		nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(p0: number): void;
		removeStealthKill(hash: number, p1: boolean): void;
		setExplosiveAmmoThisFrame(player: number): void;
		setFireAmmoThisFrame(player: number): void;
		setExplosiveMeleeThisFrame(player: number): void;
		setSuperJumpThisFrame(player: number): void;
		setBeastModeActive(player: number): void;
		setForcePlayerToJump(player: number): void;
		areProfileSettingsValid(): boolean;
		forceGameStatePlaying(): void;
		scriptRaceInit(p0: number, p1: number, p2: number, p3: number): void;
		scriptRaceShutdown(): void;
		scriptRaceGetPlayerSplitTime(player: number): ScriptRaceGetPlayerSplitTimeResult;
		startBenchmarkRecording(): void;
		stopBenchmarkRecording(): void;
		resetBenchmarkRecording(): void;
		saveBenchmarkRecording(): void;
		uiIsSingleplayerPauseMenuActive(): boolean;
		landingMenuIsActive(): boolean;
		isCommandLineBenchmarkValueSet(): boolean;
		getBenchmarkIterationsFromCommandLine(): number;
		getBenchmarkPassFromCommandLine(): number;
		restartGame(): void;
		forceSocialClubUpdate(): void;
		hasAsyncInstallFinished(): boolean;
		cleanupAsyncInstall(): void;
		isInPowerSavingMode(): boolean;
		getPowerSavingModeDuration(): number;
		setPlayerIsInAnimalForm(toggle: boolean): void;
		getIsPlayerInAnimalForm(): boolean;
		setPlayerRockstarEditorDisabled(toggle: boolean): void;

		unk: GameGameplayUnk;
	}

	export interface GameGameplayUnk {
		_0x4DCDF92BF64236CD(p0: string, p1: string): void;
		_0x31125FD509D9043F(p0: string): void;
		_0xEBD3205A207939ED(p0: string): void;
		_0x97E7E2C04245115B(p0: number): void;
		_0x916CA67D26FD1E37(p0: string): void;
		_0xEB078CA2B5E82ADD(p0: string, p1: string): void;
		_0x703CC7F60CBB2B57(p0: string): void;
		_0x8951EB9C6906D3C8(): void;
		_0xBA4B8D83BDC75551(p0: string): void;
		_0x65D2EBB47E1CEC21(toggle: boolean): void;
		_0x6F2135B6129620C1(toggle: boolean): void;
		_0x8D74E26F54B4E5C3(p0: string): void;
		_0x0CF97F497FE7D048(p0: number): void;
		_0x1178E104409FE58C(p0: number, p1: number): void;
		_0x02DEAAC8F8EA7FE7(p0: string): void;
		_0x7F8F6405F4777AF6(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: boolean
		): number;
		_0x21C235BC64831E5A(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: boolean
		): shared.Vector3Mp;
		_0xF56DFB7B61BE7276(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number
		): number;
		_0xA0AD167E4B39D9A2(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number,
			p12: number,
			p13: number
		): number;
		_0x39455BF4F4F55186(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number,
			p12: number
		): number;
		_0x7EC6F9A478A6A512(): void;
		_0x397BAA01068BAA96(): number;
		_0xB51B9AB9EF81868C(toggle: boolean): void;
		_0xA4A0065E39C9F25C(): _0xA4A0065E39C9F25CResult;
		_0x2107A3773771186D(): boolean;
		_0x06462A961E94B67C(): void;
		_0xD642319C54AADEB6(): number;
		_0x5B1F2E327B6B6FE1(): number;
		_0x72DE52178C291CB5(): number;
		_0x44A0BDC559B35F6E(): boolean;
		_0xEB2104E905C6F2E9(): number;
		_0x2B5E102E4A42F2BF(): number;
		_0xFB80AB299D2EE1BD(toggle: boolean): void;
		_0xFA3FFB0EEBC288A3(p0: boolean): void;
		_0x48F069265A0E4BEC(name: string): number;
		_0x8269816F6CFD40F8(name: string): number;
		_0xFAA457EF263E8763(name: string): number;
		_0x19BFED045C647C49(ped: number): boolean;
		_0xE95B0C7D5BA3B96B(ped: number): boolean;
		_0x54F157E0336A3822(ped: number, p1: string, p2: number): void;
		_0xD9F692D349249528(): void;
		_0xE532EC1A63231B4F(p0: number, p1: number): void;
		_0x1EAE0A6E978894A2(p0: number, p1: boolean): void;
		_0x6FDDF453C0C756EC(): boolean;
		_0xFB00CA71DA386228(): void;
		_0xE3D969D2785FFB5E(): void;
		_0x1BB299305C3E8C13(p0: number, p1: number, p2: number, p3: number): void;
		_0x23227DF0B2115469(): void;
		_0xD10282B6E3751BA0(): number;
		_0x693478ACBD7F18E7(): void;
	}

	export interface GetCoordsOfProjectileTypeWithinDistanceResult {
		entity: number;
	}

	export interface ScriptRaceGetPlayerSplitTimeResult {
		p1: number;
		p2: number;
		result: boolean;
	}

	export interface _0xA4A0065E39C9F25CResult {
		p0: shared.Vector3Mp;
		p1: number;
		fadeInAfterLoad: boolean;
		p3: boolean;
		result: boolean;
	}

	export interface CopyMemoryResult {
		dst: number;
		src: number;
	}

	export interface GetModelDimensionsResult {
		minimum: shared.Vector3Mp;
		maximum: shared.Vector3Mp;
	}

	export interface RegisterSaveHouseResult {
		p4: number;
		result: number;
	}

	export interface SlerpNearQuaternionResult {
		outX: number;
		outY: number;
		outZ: number;
		outW: number;
	}

	export interface GetGroundZAndNormalFor3DCoordResult {
		groundZ: number;
		normal: shared.Vector3Mp;
		result: boolean;
	}

	export interface GetWeatherTypeTransitionResult {
		weatherType1: number;
		weatherType2: number;
		percentWeather2: number;
	}

	export interface GetBaseElementMetadataResult {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface GameGraphics extends GameGraphicsLegacy {
		setDebugLinesAndSpheresDrawingActive(enabled: boolean): void;
		drawDebugLine(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
		drawDebugLineWithTwoColours(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			r1: number,
			g1: number,
			b1: number,
			r2: number,
			g2: number,
			b2: number,
			alpha1: number,
			alpha2: number
		): void;
		drawDebugSphere(x: number, y: number, z: number, radius: number, red: number, green: number, blue: number, alpha: number): void;
		drawDebugBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
		drawDebugCross(x: number, y: number, z: number, size: number, red: number, green: number, blue: number, alpha: number): void;
		drawDebugText(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;
		drawDebugText2D(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;
		drawLine(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			red: number,
			green: number,
			blue: number,
			alpha: number
		): void;
		drawPoly(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			x3: number,
			y3: number,
			z3: number,
			red: number,
			green: number,
			blue: number,
			alpha: number
		): void;
		drawSpritePoly(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			x3: number,
			y3: number,
			z3: number,
			red: number,
			green: number,
			blue: number,
			alpha: number,
			textureDict: string,
			textureName: string,
			u1: number,
			v1: number,
			w1: number,
			u2: number,
			v2: number,
			w2: number,
			u3: number,
			v3: number,
			w3: number
		): void;
		drawSpritePoly2(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			x3: number,
			y3: number,
			z3: number,
			red1: number,
			green1: number,
			blue1: number,
			alpha1: number,
			red2: number,
			green2: number,
			blue2: number,
			alpha2: number,
			red3: number,
			green3: number,
			blue3: number,
			alpha3: number,
			textureDict: string,
			textureName: string,
			u1: number,
			v1: number,
			w1: number,
			u2: number,
			v2: number,
			w2: number,
			u3: number,
			v3: number,
			w3: number
		): void;
		drawBox(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			red: number,
			green: number,
			blue: number,
			alpha: number
		): void;
		setBackfaceculling(toggle: boolean): void;
		beginTakeMissionCreatorPhoto(): number;
		getStatusOfTakeMissionCreatorPhoto(): number;
		freeMemoryForMissionCreatorPhoto(): void;
		loadMissionCreatorPhoto(p1: number, p2: number, p3: number): number;
		getStatusOfLoadMissionCreatorPhoto(): GetStatusOfLoadMissionCreatorPhotoResult;
		beginTakeHighQualityPhoto(): boolean;
		getStatusOfTakeHighQualityPhoto(): number;
		freeMemoryForHighQualityPhoto(): void;
		saveHighQualityPhoto(unused: number): boolean;
		getStatusOfSaveHighQualityPhoto(): number;
		freeMemoryForLowQualityPhoto(): void;
		drawLowQualityPhotoToPhone(p0: boolean, p1: boolean): void;
		getMaximumNumberOfPhotos(): number;
		getMaximumNumberOfCloudPhotos(): number;
		getCurrentNumberOfCloudPhotos(): number;
		getStatusOfSortedListOperation(p0: number): number;
		returnTwo(p0: number): number;
		drawLightWithRangeAndShadow(
			x: number,
			y: number,
			z: number,
			r: number,
			g: number,
			b: number,
			range: number,
			intensity: number,
			shadow: number
		): void;
		drawLightWithRange(
			posX: number,
			posY: number,
			posZ: number,
			colorR: number,
			colorG: number,
			colorB: number,
			range: number,
			intensity: number
		): void;
		drawSpotLight(
			posX: number,
			posY: number,
			posZ: number,
			dirX: number,
			dirY: number,
			dirZ: number,
			colorR: number,
			colorG: number,
			colorB: number,
			distance: number,
			brightness: number,
			hardness: number,
			radius: number,
			falloff: number
		): void;
		drawSpotLightWithShadow(
			posX: number,
			posY: number,
			posZ: number,
			dirX: number,
			dirY: number,
			dirZ: number,
			colorR: number,
			colorG: number,
			colorB: number,
			distance: number,
			brightness: number,
			roundness: number,
			radius: number,
			falloff: number,
			shadowId: number
		): void;
		fadeUpPedLight(p0: number): void;
		updateLightsOnEntity(entity: number): void;
		drawMarker(
			type: number,
			posX: number,
			posY: number,
			posZ: number,
			dirX: number,
			dirY: number,
			dirZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			scaleX: number,
			scaleY: number,
			scaleZ: number,
			red: number,
			green: number,
			blue: number,
			alpha: number,
			bobUpAndDown: boolean,
			faceCamera: boolean,
			p19: number,
			rotate: boolean,
			textureDict: string,
			textureName: string,
			drawOnEnts: boolean
		): void;
		drawMarker2(
			type: number,
			posX: number,
			posY: number,
			posZ: number,
			dirX: number,
			dirY: number,
			dirZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			scaleX: number,
			scaleY: number,
			scaleZ: number,
			red: number,
			green: number,
			blue: number,
			alpha: number,
			bobUpAndDown: boolean,
			faceCamera: boolean,
			p19: number,
			rotate: boolean,
			textureDict: string,
			textureName: string,
			drawOnEnts: boolean,
			p24: boolean,
			p25: boolean
		): void;
		drawSphere(x: number, y: number, z: number, radius: number, red: number, green: number, blue: number, alpha: number): void;
		createCheckpoint(
			type: number,
			posX1: number,
			posY1: number,
			posZ1: number,
			posX2: number,
			posY2: number,
			posZ2: number,
			diameter: number,
			red: number,
			green: number,
			blue: number,
			alpha: number,
			reserved: number
		): number;
		setCheckpointScale(checkpoint: number, p0: number): void;
		setCheckpointIconScale(checkpoint: number, scale: number): void;
		setCheckpointCylinderHeight(checkpoint: number, nearHeight: number, farHeight: number, radius: number): void;
		setCheckpointRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;
		setCheckpointRgba2(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;
		deleteCheckpoint(checkpoint: number): void;
		dontRenderInGameUi(p0: boolean): void;
		forceRenderInGameUi(toggle: boolean): void;
		requestStreamedTextureDict(textureDict: string, p1: boolean): void;
		hasStreamedTextureDictLoaded(textureDict: string): boolean;
		setStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;
		drawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a: number, p8: boolean): void;
		setScriptGfxDrawBehindPausemenu(toggle: boolean): void;
		setScriptGfxDrawOrder(drawOrder: number): void;
		setScriptGfxAlign(horizontalAlign: number, verticalAlign: number): void;
		resetScriptGfxAlign(): void;
		setScriptGfxAlignParams(x: number, y: number, w: number, h: number): void;
		getScriptGfxPosition(x: number, y: number): GetScriptGfxPositionResult;
		getSafeZoneSize(): number;
		drawSprite(
			textureDict: string,
			textureName: string,
			screenX: number,
			screenY: number,
			width: number,
			height: number,
			heading: number,
			red: number,
			green: number,
			blue: number,
			alpha: number,
			p11: boolean
		): void;
		drawInteractiveSprite(
			textureDict: string,
			textureName: string,
			screenX: number,
			screenY: number,
			width: number,
			height: number,
			heading: number,
			red: number,
			green: number,
			blue: number,
			alpha: number
		): void;
		drawSpriteUv(
			textureDict: string,
			textureName: string,
			x: number,
			y: number,
			width: number,
			height: number,
			u1: number,
			v1: number,
			u2: number,
			v2: number,
			heading: number,
			red: number,
			green: number,
			blue: number,
			alpha: number
		): void;
		addEntityIcon(entity: number, icon: string): number;
		setEntityIconVisibility(entity: number, toggle: boolean): void;
		setEntityIconColor(entity: number, red: number, green: number, blue: number, alpha: number): void;
		setDrawOrigin(x: number, y: number, z: number, p3: number): void;
		clearDrawOrigin(): void;
		setBinkMovie(name: string): number;
		playBinkMovie(binkMovie: number): void;
		stopBinkMovie(binkMovie: number): void;
		releaseBinkMovie(binkMovie: number): void;
		drawBinkMovie(
			binkMovie: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			r: number,
			g: number,
			b: number,
			a: number
		): void;
		setBinkMovieTime(binkMovie: number, progress: number): void;
		getBinkMovieTime(binkMovie: number): number;
		setBinkMovieVolume(binkMovie: number, value: number): void;
		attachTvAudioToEntity(entity: number): void;
		setBinkMovieUnk2(binkMovie: number, p1: boolean): void;
		setTvAudioFrontend(toggle: boolean): void;
		setBinkShouldSkip(binkMovie: number, bShouldSkip: boolean): void;
		loadMovieMeshSet(movieMeshSetName: string): number;
		releaseMovieMeshSet(movieMeshSet: number): void;
		queryMovieMeshSetState(p0: number): number;
		getScreenResolution(): GetScreenResolutionResult;
		getActiveScreenResolution(): GetActiveScreenResolutionResult;
		getAspectRatio(b: boolean): number;
		getIsWidescreen(): boolean;
		getIsHidef(): boolean;
		setNightvision(toggle: boolean): void;
		getRequestingnightvision(): boolean;
		getUsingnightvision(): boolean;
		setNoiseoveride(toggle: boolean): void;
		setNoisinessoveride(value: number): void;
		getScreenCoordFromWorldCoord(worldX: number, worldY: number, worldZ: number): GetScreenCoordFromWorldCoordResult;
		getTextureResolution(textureDict: string, textureName: string): shared.Vector3Mp;
		overridePedBadgeTexture(ped: number, txd: string, txn: string): boolean;
		setFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number): void;
		disableOcclusionThisFrame(): void;
		setArtificialLightsState(state: boolean): void;
		setArtificialLightsStateAffectsVehicles(toggle: boolean): void;
		createTrackedPoint(): number;
		setTrackedPointInfo(point: number, x: number, y: number, z: number, radius: number): void;
		isTrackedPointVisible(point: number): boolean;
		destroyTrackedPoint(point: number): void;
		grassLodShrinkScriptAreas(x: number, y: number, z: number, radius: number, p4: number, p5: number, p6: number): void;
		grassLodResetScriptAreas(): void;
		cascadeShadowsInitSession(): void;
		cascadeShadowsSetCascadeBounds(p0: number, p1: boolean, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number): void;
		cascadeShadowsSetCascadeBoundsScale(p0: number): void;
		cascadeShadowsSetEntityTrackerScale(p0: number): void;
		cascadeShadowsEnableEntityTracker(toggle: boolean): void;
		cascadeShadowsSetShadowSampleType(type: string): void;
		cascadeShadowsClearShadowSampleType(): void;
		cascadeShadowsSetAircraftMode(p0: boolean): void;
		cascadeShadowsSetDynamicDepthMode(p0: boolean): void;
		cascadeShadowsSetDynamicDepthValue(p0: number): void;
		golfTrailSetEnabled(toggle: boolean): void;
		golfTrailSetPath(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean): void;
		golfTrailSetRadius(p0: number, p1: number, p2: number): void;
		golfTrailSetColour(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number
		): void;
		golfTrailSetTessellation(p0: number, p1: number): void;
		golfTrailSetFixedControlPoint(
			type: number,
			xPos: number,
			yPos: number,
			zPos: number,
			p4: number,
			red: number,
			green: number,
			blue: number,
			alpha: number
		): void;
		golfTrailSetShaderParams(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		golfTrailSetFacing(p0: boolean): void;
		golfTrailGetMaxHeight(): number;
		golfTrailGetVisualControlPoint(p0: number): shared.Vector3Mp;
		setSeethrough(toggle: boolean): void;
		getUsingseethrough(): boolean;
		seethroughReset(): void;
		seethroughSetFadeStartDistance(distance: number): void;
		seethroughSetFadeEndDistance(distance: number): void;
		seethroughGetMaxThickness(): number;
		seethroughSetMaxThickness(thickness: number): void;
		seethroughSetNoiseAmountMin(amount: number): void;
		seethroughSetNoiseAmountMax(amount: number): void;
		seethroughSetHiLightIntensity(intensity: number): void;
		seethroughSetHiLightNoise(noise: number): void;
		seethroughSetHeatscale(index: number, heatScale: number): void;
		seethroughSetColorNear(red: number, green: number, blue: number): void;
		triggerScreenblurFadeIn(transitionTime: number): boolean;
		triggerScreenblurFadeOut(transitionTime: number): boolean;
		disableScreenblurFade(): void;
		getScreenblurFadeCurrentTime(): number;
		isScreenblurFadeRunning(): boolean;
		togglePausedRenderphases(toggle: boolean): void;
		getTogglePausedRenderphasesStatus(): boolean;
		resetPausedRenderphases(): void;
		setHidofEnvBlurParams(p0: boolean, p1: boolean, nearplaneOut: number, nearplaneIn: number, farplaneOut: number, farplaneIn: number): void;
		startParticleFxNonLoopedAtCoord(
			effectName: string,
			xPos: number,
			yPos: number,
			zPos: number,
			xRot: number,
			yRot: number,
			zRot: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean
		): number;
		startNetworkedParticleFxNonLoopedAtCoord(
			effectName: string,
			xPos: number,
			yPos: number,
			zPos: number,
			xRot: number,
			yRot: number,
			zRot: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean,
			p11: boolean
		): boolean;
		startParticleFxNonLoopedOnPedBone(
			effectName: string,
			ped: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			boneIndex: number,
			scale: number,
			axisX: boolean,
			axisY: boolean,
			axisZ: boolean
		): boolean;
		startNetworkedParticleFxNonLoopedOnPedBone(
			effectName: string,
			ped: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			boneIndex: number,
			scale: number,
			axisX: boolean,
			axisY: boolean,
			axisZ: boolean
		): boolean;
		startParticleFxNonLoopedOnEntity(
			effectName: string,
			entity: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			scale: number,
			axisX: boolean,
			axisY: boolean,
			axisZ: boolean
		): boolean;
		startNetworkedParticleFxNonLoopedOnEntity(
			effectName: string,
			entity: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			scale: number,
			axisX: boolean,
			axisY: boolean,
			axisZ: boolean
		): boolean;
		startNetworkedParticleFxNonLoopedOnEntityBone(
			effectName: string,
			entity: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			boneIndex: number,
			scale: number,
			axisX: boolean,
			axisY: boolean,
			axisZ: boolean
		): boolean;
		setParticleFxNonLoopedColour(r: number, g: number, b: number): void;
		setParticleFxNonLoopedAlpha(alpha: number): void;
		startParticleFxLoopedAtCoord(
			effectName: string,
			x: number,
			y: number,
			z: number,
			xRot: number,
			yRot: number,
			zRot: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean,
			p11: boolean
		): number;
		startParticleFxLoopedOnPedBone(
			effectName: string,
			ped: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			xRot: number,
			yRot: number,
			zRot: number,
			boneIndex: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean
		): number;
		startParticleFxLoopedOnEntity(
			effectName: string,
			entity: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			xRot: number,
			yRot: number,
			zRot: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean
		): number;
		startParticleFxLoopedOnEntityBone(
			effectName: string,
			entity: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			xRot: number,
			yRot: number,
			zRot: number,
			boneIndex: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean
		): number;
		startNetworkedParticleFxLoopedOnEntity(
			effectName: string,
			entity: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			xRot: number,
			yRot: number,
			zRot: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean,
			p12: number,
			p13: number,
			p14: number,
			p15: number
		): number;
		startNetworkedParticleFxLoopedOnEntityBone(
			effectName: string,
			entity: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			xRot: number,
			yRot: number,
			zRot: number,
			boneIndex: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean,
			p13: number,
			p14: number,
			p15: number,
			p16: number
		): number;
		stopParticleFxLooped(ptfxHandle: number, p1: boolean): void;
		removeParticleFx(ptfxHandle: number, p1: boolean): void;
		removeParticleFxFromEntity(entity: number): void;
		removeParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;
		doesParticleFxLoopedExist(ptfxHandle: number): boolean;
		setParticleFxLoopedOffsets(ptfxHandle: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;
		setParticleFxLoopedEvolution(ptfxHandle: number, propertyName: string, amount: number, noNetwork: boolean): void;
		setParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number, p4: boolean): void;
		setParticleFxLoopedAlpha(ptfxHandle: number, alpha: number): void;
		setParticleFxLoopedScale(ptfxHandle: number, scale: number): void;
		setParticleFxLoopedFarClipDist(ptfxHandle: number, range: number): void;
		setParticleFxCamInsideVehicle(p0: boolean): void;
		setParticleFxCamInsideNonplayerVehicle(vehicle: number, p1: boolean): void;
		setParticleFxShootoutBoat(p0: number): void;
		enableClownBloodVfx(toggle: boolean): void;
		enableAlienBloodVfx(toggle: boolean): void;
		setParticleFxBulletImpactScale(scale: number): void;
		useParticleFxAsset(name: string): void;
		setParticleFxOverride(oldAsset: string, newAsset: string): void;
		resetParticleFxOverride(name: string): void;
		washDecalsInRange(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		washDecalsFromVehicle(vehicle: number, p1: number): void;
		fadeDecalsInRange(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		removeDecalsInRange(x: number, y: number, z: number, range: number): void;
		removeDecalsFromObject(obj: number): void;
		removeDecalsFromObjectFacing(obj: number, x: number, y: number, z: number): void;
		removeDecalsFromVehicle(vehicle: number): void;
		addDecal(
			decalType: number,
			posX: number,
			posY: number,
			posZ: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			width: number,
			height: number,
			rCoef: number,
			gCoef: number,
			bCoef: number,
			opacity: number,
			timeout: number,
			p17: boolean,
			p18: boolean,
			p19: boolean
		): number;
		addPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): number;
		startPetrolTrailDecals(p0: number): void;
		addPetrolTrailDecalInfo(x: number, y: number, z: number, p3: number): void;
		endPetrolTrailDecals(): void;
		removeDecal(decal: number): void;
		isDecalAlive(decal: number): boolean;
		getDecalWashLevel(decal: number): number;
		setDisableDecalRenderingThisFrame(): void;
		getIsPetrolDecalInRange(xCoord: number, yCoord: number, zCoord: number, radius: number): boolean;
		patchDecalDiffuseMap(decalType: number, textureDict: string, textureName: string): void;
		unpatchDecalDiffuseMap(decalType: number): void;
		moveVehicleDecals(p0: number, p1: number): void;
		addVehicleCrewEmblem(
			vehicle: number,
			ped: number,
			boneIndex: number,
			x1: number,
			x2: number,
			x3: number,
			y1: number,
			y2: number,
			y3: number,
			z1: number,
			z2: number,
			z3: number,
			scale: number,
			p13: number,
			alpha: number
		): boolean;
		removeVehicleCrewEmblem(vehicle: number, p1: number): void;
		getVehicleCrewEmblemRequestState(vehicle: number, p1: number): number;
		doesVehicleHaveCrewEmblem(vehicle: number, p1: number): boolean;
		overrideInteriorSmokeName(name: string): void;
		overrideInteriorSmokeLevel(level: number): void;
		overrideInteriorSmokeEnd(): void;
		registerNoirScreenEffectThisFrame(): void;
		disableVehicleDistantlights(toggle: boolean): void;
		setForcePedFootstepsTracks(toggle: boolean): void;
		setForceVehicleTrails(toggle: boolean): void;
		disableScriptAmbientEffects(p0: number): void;
		presetInteriorAmbientCache(timecycleModifierName: string): void;
		setTimecycleModifier(modifierName: string): void;
		setTimecycleModifierStrength(strength: number): void;
		setTransitionTimecycleModifier(modifierName: string, transition: number): void;
		clearTimecycleModifier(): void;
		getTimecycleModifierIndex(): number;
		getTimecycleTransitionModifierIndex(): number;
		pushTimecycleModifier(): void;
		popTimecycleModifier(): void;
		setCurrentPlayerTcmodifier(modifierName: string): void;
		setPlayerTcmodifierTransition(value: number): void;
		setNextPlayerTcmodifier(modifierName: string): void;
		addTcmodifierOverride(modifierName1: string, modifierName2: string): void;
		removeTcmodifierOverride(p0: string): void;
		setExtraTimecycleModifier(modifierName: string): void;
		clearExtraTimecycleModifier(): void;
		getExtraTimecycleModifierIndex(): number;
		setExtraTimecycleModifierStrength(strength: number): void;
		resetExtraTimecycleModifierStrength(): void;
		requestScaleformMovie(scaleformName: string): number;
		requestScaleformMovie2(scaleformName: string): number;
		requestScaleformMovieInstance(scaleformName: string): number;
		requestScaleformMovieInteractive(scaleformName: string): number;
		hasScaleformMovieLoaded(scaleformHandle: number): boolean;
		hasScaleformMovieFilenameLoaded(scaleformName: string): boolean;
		hasScaleformContainerMovieLoadedIntoParent(scaleformHandle: number): boolean;
		setScaleformMovieAsNoLongerNeeded(scaleformHandle: number): number;
		setScaleformMovieToUseSystemTime(scaleform: number, toggle: boolean): void;
		setScaleformFitRendertarget(scaleformHandle: number, toggle: boolean): void;
		drawScaleformMovie(
			scaleformHandle: number,
			x: number,
			y: number,
			width: number,
			height: number,
			red: number,
			green: number,
			blue: number,
			alpha: number,
			unk: number
		): void;
		drawScaleformMovieFullscreen(scaleform: number, red: number, green: number, blue: number, alpha: number, unk: number): void;
		drawScaleformMovieFullscreenMasked(scaleform1: number, scaleform2: number, red: number, green: number, blue: number, alpha: number): void;
		drawScaleformMovie3D(
			scaleform: number,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			p7: number,
			p8: number,
			p9: number,
			scaleX: number,
			scaleY: number,
			scaleZ: number,
			p13: number
		): void;
		drawScaleformMovie3DSolid(
			scaleform: number,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			p7: number,
			p8: number,
			p9: number,
			scaleX: number,
			scaleY: number,
			scaleZ: number,
			p13: number
		): void;
		callScaleformMovieMethod(scaleform: number, method: string): void;
		callScaleformMovieMethodWithNumber(
			scaleform: number,
			methodName: string,
			param1: number,
			param2: number,
			param3: number,
			param4: number,
			param5: number
		): void;
		callScaleformMovieMethodWithString(
			scaleform: number,
			methodName: string,
			param1: string,
			param2: string,
			param3: string,
			param4: string,
			param5: string
		): void;
		callScaleformMovieMethodWithNumberAndString(
			scaleform: number,
			methodName: string,
			floatParam1: number,
			floatParam2: number,
			floatParam3: number,
			floatParam4: number,
			floatParam5: number,
			stringParam1: string,
			stringParam2: string,
			stringParam3: string,
			stringParam4: string,
			stringParam5: string
		): void;
		beginScaleformScriptHudMovieMethod(hudComponent: number, methodName: string): boolean;
		beginScaleformMovieMethod(scaleform: number, methodName: string): boolean;
		beginScaleformMovieMethodOnFrontend(methodName: string): boolean;
		beginScaleformMovieMethodOnFrontendHeader(methodName: string): boolean;
		endScaleformMovieMethod(): void;
		endScaleformMovieMethodReturnValue(): number;
		isScaleformMovieMethodReturnValueReady(methodReturn: number): boolean;
		getScaleformMovieMethodReturnValueInt(methodReturn: number): number;
		getScaleformMovieMethodReturnValueBool(methodReturn: number): boolean;
		getScaleformMovieMethodReturnValueString(methodReturn: number): string;
		scaleformMovieMethodAddParamInt(value: number): void;
		scaleformMovieMethodAddParamFloat(value: number): void;
		scaleformMovieMethodAddParamBool(value: boolean): void;
		beginTextCommandScaleformString(componentType: string): void;
		endTextCommandScaleformString(): void;
		endTextCommandScaleformString2(): void;
		scaleformMovieMethodAddParamTextureNameString2(string: string): void;
		scaleformMovieMethodAddParamTextureNameString(string: string): void;
		scaleformMovieMethodAddParamPlayerNameString(string: string): void;
		scaleformMovieMethodAddParamLatestBriefString(value: number): void;
		requestScaleformScriptHudMovie(hudComponent: number): void;
		hasScaleformScriptHudMovieLoaded(hudComponent: number): boolean;
		removeScaleformScriptHudMovie(hudComponent: number): void;
		setTvChannel(channel: number): void;
		getTvChannel(): number;
		setTvVolume(volume: number): void;
		getTvVolume(): number;
		drawTvChannel(
			xPos: number,
			yPos: number,
			xScale: number,
			yScale: number,
			rotation: number,
			red: number,
			green: number,
			blue: number,
			alpha: number
		): void;
		setTvChannelPlaylist(tvChannel: number, playlistName: string, restart: boolean): void;
		setTvChannelPlaylistAtHour(tvChannel: number, playlistName: string, hour: number): void;
		clearTvChannelPlaylist(tvChannel: number): void;
		isPlaylistUnk(tvChannel: number, p1: number): boolean;
		isTvPlaylistItemPlaying(videoCliphash: number): boolean;
		enableMovieKeyframeWait(toggle: boolean): void;
		enableMovieSubtitles(toggle: boolean): void;
		ui3DsceneIsAvailable(): boolean;
		ui3DscenePushPreset(presetName: string): boolean;
		terraingridActivate(toggle: boolean): void;
		terraingridSetParams(
			x: number,
			y: number,
			z: number,
			p3: number,
			rotation: number,
			p5: number,
			width: number,
			height: number,
			p8: number,
			scale: number,
			glowIntensity: number,
			normalHeight: number,
			heightDiff: number
		): void;
		terraingridSetColours(
			lowR: number,
			lowG: number,
			lowB: number,
			lowAlpha: number,
			r: number,
			g: number,
			b: number,
			alpha: number,
			highR: number,
			highG: number,
			highB: number,
			highAlpha: number
		): void;
		animpostfxPlay(effectName: string, duration: number, looped: boolean): void;
		animpostfxStop(effectName: string): void;
		animpostfxGetUnk(effectName: string): number;
		animpostfxIsRunning(effectName: string): boolean;
		animpostfxStopAll(): void;
		animpostfxStopAndDoUnk(effectName: string): void;

		unk: GameGraphicsUnk;
	}

	export interface GameGraphicsLegacy {
		setScreenDrawPosition(horizontalAlign: number, verticalAlign: number): void;
		getScreenActiveResolution(): GetActiveScreenResolutionResult;
		getScreenAspectRatio(b: boolean): number;
		setBlackout(state: boolean): void;
		setFarShadowsSuppressed(toggle: boolean): void;
		transitionToBlurred(transitionTime: number): boolean;
		transitionFromBlurred(transitionTime: number): boolean;
		setFrozenRenderingDisabled(toggle: boolean): void;
		startParticleFxNonLoopedAtCoord2(
			effectName: string,
			xPos: number,
			yPos: number,
			zPos: number,
			xRot: number,
			yRot: number,
			zRot: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean,
			p11: boolean
		): boolean;
		startParticleFxNonLoopedOnPedBone2(
			effectName: string,
			ped: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			boneIndex: number,
			scale: number,
			axisX: boolean,
			axisY: boolean,
			axisZ: boolean
		): boolean;
		startParticleFxNonLoopedOnEntity2(
			effectName: string,
			entity: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			scale: number,
			axisX: boolean,
			axisY: boolean,
			axisZ: boolean
		): boolean;
		startParticleFxLoopedOnEntityBone(
			effectName: string,
			entity: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			xRot: number,
			yRot: number,
			zRot: number,
			boneIndex: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean
		): number;
		startParticleFxLoopedOnEntity2(
			effectName: string,
			entity: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			xRot: number,
			yRot: number,
			zRot: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean,
			p12: number,
			p13: number,
			p14: number,
			p15: number
		): number;
		startParticleFxLoopedOnEntityBone2(
			effectName: string,
			entity: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			xRot: number,
			yRot: number,
			zRot: number,
			boneIndex: number,
			scale: number,
			xAxis: boolean,
			yAxis: boolean,
			zAxis: boolean,
			p13: number,
			p14: number,
			p15: number,
			p16: number
		): number;
		setParticleFxLoopedRange(ptfxHandle: number, range: number): void;
		setPtfxAssetNextCall(name: string): void;
		setPtfxAssetOldToNew(oldAsset: string, newAsset: string): void;
		requestScaleformMovie3(scaleformName: string): number;
		hasNamedScaleformMovieLoaded(scaleformName: string): boolean;
		callScaleformMovieFunctionFloatParams(
			scaleform: number,
			methodName: string,
			param1: number,
			param2: number,
			param3: number,
			param4: number,
			param5: number
		): void;
		callScaleformMovieFunctionStringParams(
			scaleform: number,
			methodName: string,
			param1: string,
			param2: string,
			param3: string,
			param4: string,
			param5: string
		): void;
		callScaleformMovieFunctionMixedParams(
			scaleform: number,
			methodName: string,
			floatParam1: number,
			floatParam2: number,
			floatParam3: number,
			floatParam4: number,
			floatParam5: number,
			stringParam1: string,
			stringParam2: string,
			stringParam3: string,
			stringParam4: string,
			stringParam5: string
		): void;
		pushScaleformMovieFunctionFromHudComponent(hudComponent: number, methodName: string): boolean;
		pushScaleformMovieFunction(scaleform: number, methodName: string): boolean;
		pushScaleformMovieFunctionN(methodName: string): boolean;
		popScaleformMovieFunctionVoid(): void;
		popScaleformMovieFunction(): number;
		sittingTv(methodReturn: number): string;
		pushScaleformMovieFunctionParameterInt(value: number): void;
		pushScaleformMovieFunctionParameterFloat(value: number): void;
		pushScaleformMovieFunctionParameterBool(value: boolean): void;
		beginTextComponent(componentType: string): void;
		endTextComponent(): void;
		pushScaleformMovieFunctionParameterString(string: string): void;
		requestHudScaleform(hudComponent: number): void;
		hasHudScaleformLoaded(hudComponent: number): boolean;
		loadTvChannel(videoCliphash: number): boolean;
		startScreenEffect(effectName: string, duration: number, looped: boolean): void;
		stopScreenEffect(effectName: string): void;
		getScreenEffectIsActive(effectName: string): boolean;
		stopAllScreenEffects(): void;
	}

	export interface GetActiveScreenResolutionResult {
		x: number;
		y: number;
	}

	export interface GameGraphicsUnk {
		_0xC5C8F970D4EDFF71(p0: number): void;
		_0x7FA5D82B8F58EC06(): number;
		_0x5B0316762AFD4A64(): number;
		_0x346EF3ECAAAB149E(): void;
		_0x1BBC135A4D25EDDE(p0: boolean): void;
		_0xF3F776ADA161E47D(p0: number, p1: number): void;
		_0xADD6627C4D325458(p0: number): void;
		_0x759650634F07B6B4(p0: number): boolean;
		_0xCB82A0BF0E3E3265(p0: number): number;
		_0x2A893980E96B659A(p0: number): number;
		_0x4AF92ACD3141D96C(): void;
		_0xE791DF1F73ED2C8B(p0: number): number;
		_0xEC72C258667BE5EA(p0: number): number;
		_0x9641588DAB93B4B5(p0: number): void;
		_0x393BD2275CEB7793(): number;
		_0xF51D36185993515D(checkpoint: number, posX: number, posY: number, posZ: number, unkX: number, unkY: number, unkZ: number): void;
		_0xFCF6788FC4860CD4(checkpoint: number): void;
		_0x615D3925E87A3B26(checkpoint: number): void;
		_0xDB1EA9411C8911EC(p0: number): void;
		_0x3C788E7F6438754D(p0: number, p1: number, p2: number, p3: number): void;
		_0x2D3B147AFAD49DE0(
			textureDict: string,
			textureName: string,
			x: number,
			y: number,
			width: number,
			height: number,
			p6: number,
			red: number,
			green: number,
			blue: number,
			alpha: number,
			p11: number
		): void;
		_0xB2EBE8CBC58B90E9(): number;
		_0xEFABC7722293DA7C(): void;
		_0xEF398BEEE4EF45F9(p0: boolean): void;
		_0x814AF7DCAACC597B(p0: number): void;
		_0x43FA7CBE20DAB219(p0: number): void;
		_0xE2892E7E55D7073A(p0: number): void;
		_0xC35A6D07C93802B2(): void;
		_0xBE197EAA669238F4(p0: number, p1: number, p2: number, p3: number): number;
		_0x61F95E5BB3E0A8C6(p0: number): void;
		_0xAE51BC858F32BA66(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		_0x649C97D52332341A(p0: number): void;
		_0x2C42340F916C5930(p0: number): number;
		_0x14FC5833464340A8(): void;
		_0x0218BA067D249DEA(): void;
		_0x1612C45F9E3E0D44(): void;
		_0x5DEBD9C4DC995692(): void;
		_0xAAE9BE70EC7C69AB(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
		_0x36F6626459D91457(p0: number): void;
		_0x259BA6D4E6F808F1(p0: number): void;
		_0x25FC3E33A31AD0C9(p0: boolean): void;
		_0x0AE73D8DF3A762B2(p0: boolean): void;
		_0xCA465D9CC0D231BA(p0: number): void;
		_0xC0416B061F2B7E5E(p0: boolean): void;
		_0xB3C641F3630BF6DA(p0: number): void;
		_0xE59343E9E96529E7(): number;
		_0x6A51F78772175A51(toggle: boolean): void;
		_0xE63D7C6EECECB66B(toggle: boolean): void;
		_0xE3E2C1B4C59DBC77(unk: number): void;
		_0x851CD923176EBA7C(): void;
		_0xB569F41F3E7E83A4(p0: number): void;
		_0x7AC24EAB6D74118D(p0: boolean): boolean;
		_0xBCEDB009461DA156(): number;
		_0x27FEB5254759CDE3(textureDict: string, p1: boolean): boolean;
		_0x8CDE909A0370BB3A(toggle: boolean): void;
		_0xBA0127DA25FD54C9(p0: number, p1: number): void;
		_0x2A251AA48B2B46DB(): void;
		_0x908311265D42A820(p0: number): void;
		_0xCFD16F0DB5A3535C(toggle: boolean): void;
		_0x5F6DF3D92271E8A1(toggle: boolean): void;
		_0x2B40A97646381508(p0: number): void;
		_0xBB90E12CAC1DAB25(p0: number): void;
		_0xCA4AE345A153D573(p0: boolean): void;
		_0x54E22EA2C1956A8D(p0: number): void;
		_0x949F397A288B28B3(p0: number): void;
		_0xBA3D194057C79A7B(p0: string): void;
		_0x5DBF05DB5926D089(p0: number): void;
		_0x9B079E5221D984D3(p0: boolean): void;
		_0xA46B73FAA3460AE1(p0: boolean): void;
		_0xF78B803082D4386F(p0: number): void;
		_0xD9454B5752C857DC(): void;
		_0x27CFB1B1E078CB2D(): void;
		_0x82ACC484FFA3B05F(p0: number): number;
		_0x0E4299C549F0D1F1(toggle: boolean): void;
		_0x02369D5C8A51FDCF(toggle: boolean): void;
		_0x46D1A61A21F566FC(p0: number): void;
		_0x03300B57FCAC6DDB(p0: boolean): void;
		_0x98EDF76A7271E4F2(): void;
		_0x1CBA05AE7BD7EE05(p0: number): void;
		_0x98D18905BF723B99(): number;
		_0x2FCB133CA50A49EB(val: number): boolean;
		_0x86255B1FC929E33E(val: number): boolean;
		_0x32F34FF7F617643B(p0: number, p1: number): void;
		_0x5E657EF1099EDD65(p0: number): boolean;
		_0xD1C7CB175E012964(scaleformHandle: number): boolean;
		_0xD1C55B110E4DF534(p0: number): void;
		_0x30432A0118736E00(): number;
		_0x98C4FE6EC34154CA(presetName: string, ped: number, p2: number, posX: number, posY: number, posZ: number): boolean;
		_0x7A42B2E236E71415(): void;
		_0x108BE26959A9D9BB(toggle: boolean): void;
	}

	export interface GetScreenResolutionResult {
		x: number;
		y: number;
	}

	export interface GetActiveScreenResolutionResult {
		x: number;
		y: number;
	}

	export interface GetScreenCoordFromWorldCoordResult {
		screenX: number;
		screenY: number;
		result: boolean;
	}

	export interface GetScriptGfxPositionResult {
		calculatedX: number;
		calculatedY: number;
	}

	export interface GetStatusOfLoadMissionCreatorPhotoResult {
		p0: number;
		result: number;
	}

	export interface GameHud extends GameHudLegacy {
		beginTextCommandBusyspinnerOn(string: string): void;
		endTextCommandBusyspinnerOn(busySpinnerType: number): void;
		busyspinnerOff(): void;
		preloadBusyspinner(): void;
		busyspinnerIsOn(): boolean;
		busyspinnerIsDisplaying(): boolean;
		setMouseCursorActiveThisFrame(): void;
		setMouseCursorSprite(spriteId: number): void;
		setMouseCursorVisibleInMenus(toggle: boolean): void;
		thefeedOnlyShowTooltips(toggle: boolean): void;
		thefeedSetScriptedMenuHeight(pos: number): void;
		thefeedDisableLoadingScreenTips(): void;
		thefeedHideThisFrame(): void;
		thefeedDisplayLoadingScreenTips(): void;
		thefeedFlushQueue(): void;
		thefeedRemoveItem(notificationId: number): void;
		thefeedForceRenderOn(): void;
		thefeedForceRenderOff(): void;
		thefeedPause(): void;
		thefeedResume(): void;
		thefeedIsPaused(): boolean;
		thefeedSpsExtendWidescreenOn(): void;
		thefeedSpsExtendWidescreenOff(): void;
		thefeedGetFirstVisibleDeleteRemaining(): number;
		thefeedCommentTeleportPoolOn(): void;
		thefeedCommentTeleportPoolOff(): void;
		thefeedSetNextPostBackgroundColor(hudColorIndex: number): void;
		thefeedSetAnimpostfxColor(red: number, green: number, blue: number, alpha: number): void;
		thefeedSetAnimpostfxCount(count: number): void;
		thefeedSetAnimpostfxSound(toggle: boolean): void;
		thefeedResetAllParameters(): void;
		thefeedFreezeNextPost(): void;
		thefeedClearFrozenPost(): void;
		thefeedSetFlushAnimpostfx(p0: boolean): void;
		thefeedAddTxdRef(): ThefeedAddTxdRefResult;
		beginTextCommandThefeedPost(text: string): void;
		endTextCommandThefeedPostStats(
			statTitle: string,
			iconEnum: number,
			stepVal: boolean,
			barValue: number,
			isImportant: boolean,
			pictureTextureDict: string,
			pictureTextureName: string
		): number;
		endTextCommandThefeedPostMessagetext(
			txdName: string,
			textureName: string,
			flash: boolean,
			iconType: number,
			sender: string,
			subject: string
		): number;
		endTextCommandThefeedPostMessagetextGxtEntry(
			txdName: string,
			textureName: string,
			flash: boolean,
			iconType: number,
			sender: string,
			subject: string
		): number;
		endTextCommandThefeedPostMessagetextTu(
			txdName: string,
			textureName: string,
			flash: boolean,
			iconType: number,
			sender: string,
			subject: string,
			duration: number
		): number;
		endTextCommandThefeedPostMessagetextWithCrewTag(
			txdName: string,
			textureName: string,
			flash: boolean,
			iconType: number,
			sender: string,
			subject: string,
			duration: number,
			clanTag: string
		): number;
		endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(
			txdName: string,
			textureName: string,
			flash: boolean,
			iconType1: number,
			sender: string,
			subject: string,
			duration: number,
			clanTag: string,
			iconType2: number,
			p9: number
		): number;
		endTextCommandThefeedPostTicker(blink: boolean, p1: boolean): number;
		endTextCommandThefeedPostTickerForced(blink: boolean, p1: boolean): number;
		endTextCommandThefeedPostTickerWithTokens(blink: boolean, p1: boolean): number;
		endTextCommandThefeedPostAward(textureDict: string, textureName: string, rpBonus: number, colorOverlay: number, titleLabel: string): number;
		endTextCommandThefeedPostCrewtag(
			p0: boolean,
			p1: boolean,
			p3: number,
			isLeader: boolean,
			unk0: boolean,
			clanDesc: number,
			R: number,
			G: number,
			B: number
		): EndTextCommandThefeedPostCrewtagResult;
		endTextCommandThefeedPostCrewtagWithGameName(
			p0: boolean,
			p1: boolean,
			p3: number,
			isLeader: boolean,
			unk0: boolean,
			clanDesc: number,
			playerName: string,
			R: number,
			G: number,
			B: number
		): EndTextCommandThefeedPostCrewtagWithGameNameResult;
		endTextCommandThefeedPostUnlock(p0: number, p1: number, p2: number): number;
		endTextCommandThefeedPostUnlockTu(p0: number, p1: number, p2: number, p3: number): number;
		endTextCommandThefeedPostUnlockTuWithColor(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;
		endTextCommandThefeedPostMpticker(blink: boolean, p1: boolean): number;
		endTextCommandThefeedPostCrewRankup(p0: string, p1: string, p2: string, p3: boolean, p4: boolean): number;
		endTextCommandThefeedPostVersusTu(p2: number, p5: number, p6: number, p7: number): EndTextCommandThefeedPostVersusTuResult;
		endTextCommandThefeedPostReplayIcon(type: number, image: number, text: string): number;
		endTextCommandThefeedPostReplayInput(type: number, button: string, text: string): number;
		beginTextCommandPrint(GxtEntry: string): void;
		endTextCommandPrint(duration: number, drawImmediately: boolean): void;
		beginTextCommandIsMessageDisplayed(text: string): void;
		endTextCommandIsMessageDisplayed(): boolean;
		beginTextCommandDisplayText(text: string): void;
		endTextCommandDisplayText(x: number, y: number, p2: number): void;
		beginTextCommandGetWidth(text: string): void;
		endTextCommandGetWidth(p0: boolean): number;
		beginTextCommandLineCount(entry: string): void;
		endTextCommandLineCount(x: number, y: number): number;
		beginTextCommandDisplayHelp(inputType: string): void;
		endTextCommandDisplayHelp(p0: number, loop: boolean, beep: boolean, shape: number): void;
		beginTextCommandIsThisHelpMessageBeingDisplayed(labelName: string): void;
		endTextCommandIsThisHelpMessageBeingDisplayed(p0: number): boolean;
		beginTextCommandSetBlipName(textLabel: string): void;
		endTextCommandSetBlipName(blip: number): void;
		beginTextCommandObjective(p0: string): void;
		endTextCommandObjective(p0: boolean): void;
		beginTextCommandClearPrint(text: string): void;
		endTextCommandClearPrint(): void;
		beginTextCommandOverrideButtonText(gxtEntry: string): void;
		endTextCommandOverrideButtonText(p0: number): void;
		addTextComponentInteger(value: number): void;
		addTextComponentFloat(value: number, decimalPlaces: number): void;
		addTextComponentSubstringTextLabel(labelName: string): void;
		addTextComponentSubstringTextLabelHashKey(gxtEntryHash: number): void;
		addTextComponentSubstringBlipName(blip: number): void;
		addTextComponentSubstringPlayerName(text: string): void;
		addTextComponentSubstringTime(timestamp: number, flags: number): void;
		addTextComponentFormattedInteger(value: number, commaSeparated: boolean): void;
		addTextComponentSubstringPhoneNumber(p0: string, p1: number): void;
		addTextComponentSubstringWebsite(website: string): void;
		addTextComponentSubstringKeyboardDisplay(string: string): void;
		setColourOfNextTextComponent(hudColor: number): void;
		getTextSubstring(text: string, position: number, length: number): string;
		getTextSubstringSafe(text: string, position: number, length: number, maxLength: number): string;
		getTextSubstringSlice(text: string, startPosition: number, endPosition: number): string;
		getLabelText(labelName: string): string;
		clearPrints(): void;
		clearBrief(): void;
		clearAllHelpMessages(): void;
		clearThisPrint(p0: string): void;
		clearSmallPrints(): void;
		doesTextBlockExist(gxt: string): boolean;
		requestAdditionalText(gxt: string, slot: number): void;
		requestAdditionalTextForDlc(gxt: string, slot: number): void;
		hasAdditionalTextLoaded(slot: number): boolean;
		clearAdditionalText(p0: number, p1: boolean): void;
		isStreamingAdditionalText(p0: number): boolean;
		hasThisAdditionalTextLoaded(gxt: string, slot: number): boolean;
		isMessageBeingDisplayed(): boolean;
		doesTextLabelExist(gxt: string): boolean;
		getLengthOfStringWithThisTextLabel(gxt: string): number;
		getLengthOfLiteralString(string: string): number;
		getLengthOfLiteralStringInBytes(string: string): number;
		getStreetNameFromHashKey(hash: number): string;
		isPreferenceSwitchedOn(): boolean;
		isRadarPreferenceSwitchedOn(): boolean;
		isSubtitlePreferenceSwitchedOn(): boolean;
		display(toggle: boolean): void;
		displayWhenDeadThisFrame(): void;
		displayWhenPausedThisFrame(): void;
		displayRadar(toggle: boolean): void;
		isHidden(): boolean;
		isRadarHidden(): boolean;
		isMinimapRendering(): boolean;
		setBlipRoute(blip: number, enabled: boolean): void;
		clearAllBlipRoutes(): void;
		setBlipRouteColour(blip: number, colour: number): void;
		addNextMessageToPreviousBriefs(p0: boolean): void;
		setRadarZoomPrecise(zoom: number): void;
		setRadarZoom(zoomLevel: number): void;
		setRadarZoomToBlip(blip: number, zoom: number): void;
		setRadarZoomToDistance(zoom: number): void;
		getColour(hudColorIndex: number): GetHudColourResult;
		setScriptVariableColour(r: number, g: number, b: number, a: number): void;
		setScriptVariable2Colour(r: number, g: number, b: number, a: number): void;
		replaceColour(hudColorIndex: number, hudColorIndex2: number): void;
		replaceColourWithRgba(hudColorIndex: number, r: number, g: number, b: number, a: number): void;
		setAbilityBarVisibilityInMultiplayer(visible: boolean): void;
		setAllowAbilityBarInMultiplayer(toggle: boolean): void;
		flashAbilityBar(millisecondsToFlash: number): void;
		setAbilityBarValue(p0: number, p1: number): void;
		flashWantedDisplay(p0: boolean): void;
		getRenderedCharacterHeight(size: number, font: number): number;
		setTextScale(scale: number, size: number): void;
		setTextColour(red: number, green: number, blue: number, alpha: number): void;
		setTextCentre(align: boolean): void;
		setTextRightJustify(toggle: boolean): void;
		setTextJustification(justifyType: number): void;
		setTextWrap(start: number, end: number): void;
		setTextLeading(p0: number): void;
		setTextProportional(p0: boolean): void;
		setTextFont(fontType: number): void;
		setTextDropShadow(): void;
		setTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;
		setTextOutline(): void;
		setTextEdge(p0: number, r: number, g: number, b: number, a: number): void;
		setTextRenderId(renderId: number): void;
		getDefaultScriptRendertargetRenderId(): number;
		registerNamedRendertarget(name: string, p1: boolean): boolean;
		isNamedRendertargetRegistered(name: string): boolean;
		releaseNamedRendertarget(name: string): boolean;
		linkNamedRendertarget(modelHash: number): void;
		getNamedRendertargetRenderId(name: string): number;
		isNamedRendertargetLinked(modelHash: number): boolean;
		clearHelp(toggle: boolean): void;
		isHelpMessageOnScreen(): boolean;
		isHelpMessageBeingDisplayed(): boolean;
		isHelpMessageFadingOut(): boolean;
		setHelpMessageTextStyle(style: number, hudColor: number, alpha: number, p3: number, p4: number): void;
		getStandardBlipEnumId(): boolean;
		getWaypointBlipEnumId(): number;
		getNumberOfActiveBlips(): number;
		getNextBlipInfoId(blipSprite: number): number;
		getFirstBlipInfoId(blipSprite: number): number;
		getClosestBlipOfType(blipSprite: number): number;
		getBlipInfoIdCoord(blip: number): shared.Vector3Mp;
		getBlipInfoIdDisplay(blip: number): number;
		getBlipInfoIdType(blip: number): number;
		getBlipInfoIdEntityIndex(blip: number): number;
		getBlipInfoIdPickupIndex(blip: number): number;
		getBlipFromEntity(entity: number): number;
		addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): number;
		addBlipForArea(x: number, y: number, z: number, width: number, height: number): number;
		addBlipForEntity(entity: number): number;
		addBlipForPickup(pickup: number): number;
		addBlipForCoord(x: number, y: number, z: number): number;
		triggerSonarBlip(posX: number, posY: number, posZ: number, radius: number, p4: number): void;
		allowSonarBlips(toggle: boolean): void;
		setBlipCoords(blip: number, posX: number, posY: number, posZ: number): void;
		getBlipCoords(blip: number): shared.Vector3Mp;
		setBlipSprite(blip: number, spriteId: number): void;
		getBlipSprite(blip: number): number;
		setBlipNameFromTextFile(blip: number, gxtEntry: string): void;
		setBlipNameToPlayerName(blip: number, player: number): void;
		setBlipAlpha(blip: number, alpha: number): void;
		getBlipAlpha(blip: number): number;
		setBlipFade(blip: number, opacity: number, duration: number): void;
		setBlipRotation(blip: number, rotation: number): void;
		setBlipSquaredRotation(blip: number, heading: number): void;
		setBlipFlashTimer(blip: number, duration: number): void;
		setBlipFlashInterval(blip: number, p1: number): void;
		setBlipColour(blip: number, color: number): void;
		setBlipSecondaryColour(blip: number, r: number, g: number, b: number): void;
		getBlipColour(blip: number): number;
		getBlipColour(blip: number): number;
		isBlipShortRange(blip: number): boolean;
		isBlipOnMinimap(blip: number): boolean;
		doesBlipHaveGpsRoute(blip: number): boolean;
		setBlipHiddenOnLegend(blip: number, toggle: boolean): void;
		setBlipHighDetail(blip: number, toggle: boolean): void;
		setBlipAsMissionCreatorBlip(blip: number, toggle: boolean): void;
		isMissionCreatorBlip(blip: number): boolean;
		getNewSelectedMissionCreatorBlip(): number;
		isHoveringOverMissionCreatorBlip(): boolean;
		showStartMissionInstructionalButton(p0: boolean): void;
		setBlipFlashes(blip: number, toggle: boolean): void;
		setBlipFlashesAlternate(blip: number, toggle: boolean): void;
		isBlipFlashing(blip: number): boolean;
		setBlipAsShortRange(blip: number, toggle: boolean): void;
		setBlipScale(blip: number, scale: number): void;
		setBlipScaleTransformation(blip: number, xScale: number, yScale: number): void;
		setBlipPriority(blip: number, priority: number): void;
		setBlipDisplay(blip: number, displayId: number): void;
		setBlipCategory(blip: number, index: number): void;
		removeBlip(): number;
		setBlipAsFriendly(blip: number, toggle: boolean): void;
		pulseBlip(blip: number): void;
		showNumberOnBlip(blip: number, number: number): void;
		hideNumberOnBlip(blip: number): void;
		showHeightOnBlip(blip: number, toggle: boolean): void;
		showTickOnBlip(blip: number, toggle: boolean): void;
		showHeadingIndicatorOnBlip(blip: number, toggle: boolean): void;
		showOutlineIndicatorOnBlip(blip: number, toggle: boolean): void;
		showFriendIndicatorOnBlip(blip: number, toggle: boolean): void;
		showCrewIndicatorOnBlip(blip: number, toggle: boolean): void;
		setBlipDisplayIndicatorOnBlip(blip: number, toggle: boolean): void;
		setBlipShrink(blip: number, toggle: boolean): void;
		setRadiusBlipEdge(blip: number, toggle: boolean): void;
		doesBlipExist(blip: number): boolean;
		setWaypointOff(): void;
		deleteWaypoint(): void;
		refreshWaypoint(): void;
		isWaypointActive(): boolean;
		setNewWaypoint(x: number, y: number): void;
		setBlipBright(blip: number, toggle: boolean): void;
		setBlipShowCone(blip: number, toggle: boolean, p2: number): void;
		setMinimapComponent(componentId: number, toggle: boolean, overrideColor: number): number;
		setMinimapSonarEnabled(toggle: boolean): void;
		showSigninUi(): void;
		getMainPlayerBlipId(): number;
		hideLoadingOnFadeThisFrame(): void;
		setRadarAsInteriorThisFrame(interior: number, x: number, y: number, z: number, zoom: number): void;
		setRadarAsExteriorThisFrame(): void;
		setPlayerBlipPositionThisFrame(x: number, y: number): void;
		isMinimapInInterior(): boolean;
		hideMinimapExteriorMapThisFrame(): void;
		hideMinimapInteriorMapThisFrame(): void;
		setToggleMinimapHeistIsland(toggle: boolean): void;
		dontTiltMinimapThisFrame(): void;
		setWidescreenFormat(p0: number): void;
		displayAreaName(toggle: boolean): void;
		displayCash(toggle: boolean): void;
		setPlayerCashChange(cash: number, bank: number): void;
		displayAmmoThisFrame(display: boolean): void;
		displaySniperScopeThisFrame(): void;
		hideAndRadarThisFrame(): void;
		setMultiplayerWalletCash(): void;
		removeMultiplayerWalletCash(): void;
		setMultiplayerBankCash(): void;
		removeMultiplayerBankCash(): void;
		setMultiplayerCash(p0: number, p1: number): void;
		removeMultiplayerCash(): void;
		hideHelpTextThisFrame(): void;
		displayHelpTextThisFrame(message: string, p1: boolean): void;
		forceWeaponWheel(show: boolean): void;
		displayLoadingScreenTips(): void;
		weaponWheelIgnoreSelection(): void;
		weaponWheelGetSelectedHash(): number;
		setWeaponWheelTopSlot(weaponHash: number): void;
		weaponWheelGetSlotHash(weaponTypeIndex: number): number;
		weaponWheelIgnoreControlInput(toggle: boolean): void;
		setGpsFlags(p0: number, p1: number): void;
		clearGpsFlags(): void;
		setRaceTrackRender(toggle: boolean): void;
		clearGpsRaceTrack(): void;
		startGpsCustomRoute(hudColor: number, displayOnFoot: boolean, followPlayer: boolean): void;
		addPointToGpsCustomRoute(x: number, y: number, z: number): void;
		setGpsCustomRouteRender(toggle: boolean, radarThickness: number, mapThickness: number): void;
		clearGpsCustomRoute(): void;
		startGpsMultiRoute(hudColor: number, routeFromPlayer: boolean, displayOnFoot: boolean): void;
		addPointToGpsMultiRoute(x: number, y: number, z: number): void;
		setGpsMultiRouteRender(toggle: boolean): void;
		clearGpsMultiRoute(): void;
		clearGpsPlayerWaypoint(): void;
		setGpsFlashes(toggle: boolean): void;
		flashMinimapDisplay(): void;
		flashMinimapDisplayWithColor(hudColorIndex: number): void;
		toggleStealthRadar(toggle: boolean): void;
		setMinimapInSpectatorMode(toggle: boolean, ped: number): void;
		setMissionName(p0: boolean, name: string): void;
		setMissionName2(p0: boolean, name: string): void;
		setMinimapBlockWaypoint(toggle: boolean): void;
		setMinimapInPrologue(toggle: boolean): void;
		setMinimapHideFow(toggle: boolean): void;
		getMinimapFowDiscoveryRatio(): number;
		getMinimapFowCoordinateIsRevealed(x: number, y: number, z: number): boolean;
		setMinimapFowRevealCoordinate(x: number, y: number, z: number): void;
		setMinimapGolfCourse(hole: number): void;
		setMinimapGolfCourseOff(): void;
		lockMinimapAngle(angle: number): void;
		unlockMinimapAngle(): void;
		lockMinimapPosition(x: number, y: number): void;
		unlockMinimapPosition(): void;
		setMinimapAltitudeIndicatorLevel(altitude: number, p1: boolean, p2: number): void;
		setHealthDisplayValues(health: number, capacity: number, wasAdded: boolean): void;
		setMaxHealthDisplay(maximumValue: number): void;
		setMaxArmourDisplay(maximumValue: number): void;
		setBigmapActive(toggleBigMap: boolean, showFullMap: boolean): void;
		isComponentActive(id: number): boolean;
		isScriptedComponentActive(id: number): boolean;
		hideScriptedComponentThisFrame(id: number): void;
		showScriptedComponentThisFrame(id: number): void;
		isScriptedComponentHiddenThisFrame(id: number): boolean;
		hideComponentThisFrame(id: number): void;
		showComponentThisFrame(id: number): void;
		hideAreaAndVehicleNameThisFrame(): void;
		resetReticuleValues(): void;
		resetComponentValues(id: number): void;
		setComponentPosition(id: number, x: number, y: number): void;
		getComponentPosition(id: number): shared.Vector3Mp;
		clearReminderMessage(): void;
		getScreenPositionFromWorldPosition(worldX: number, worldY: number, worldZ: number): GetHudScreenPositionFromWorldPositionResult;
		openReportugcMenu(): void;
		forceCloseReportugcMenu(): void;
		isReportugcMenuOpen(): boolean;
		isFloatingHelpTextOnScreen(hudIndex: number): boolean;
		setFloatingHelpTextScreenPosition(hudIndex: number, x: number, y: number): void;
		setFloatingHelpTextWorldPosition(hudIndex: number, x: number, y: number, z: number): void;
		setFloatingHelpTextToEntity(hudIndex: number, entity: number, offsetX: number, offsetY: number): void;
		setFloatingHelpTextStyle(hudIndex: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		clearFloatingHelp(hudIndex: number, p1: boolean): void;
		createMpGamerTagWithCrewColor(
			player: number,
			username: string,
			pointedClanTag: boolean,
			isRockstarClan: boolean,
			clanTag: string,
			clanFlag: number,
			r: number,
			g: number,
			b: number
		): void;
		isMpGamerTagMovieActive(): boolean;
		createFakeMpGamerTag(
			ped: number,
			username: string,
			pointedClanTag: boolean,
			isRockstarClan: boolean,
			clanTag: string,
			clanFlag: number
		): number;
		removeMpGamerTag(gamerTagId: number): void;
		isMpGamerTagActive(gamerTagId: number): boolean;
		isMpGamerTagFree(gamerTagId: number): boolean;
		setMpGamerTagVisibility(gamerTagId: number, component: number, toggle: boolean, p3: number): void;
		setMpGamerTagEnabled(gamerTagId: number, toggle: boolean): void;
		setMpGamerTagIcons(gamerTagId: number, toggle: boolean): void;
		setMpGamerHealthBarDisplay(gamerTagId: number, toggle: boolean): void;
		setMpGamerHealthBarMax(gamerTagId: number, value: number, maximumValue: number): void;
		setMpGamerTagColour(gamerTagId: number, component: number, hudColorIndex: number): void;
		setMpGamerTagHealthBarColour(gamerTagId: number, hudColorIndex: number): void;
		setMpGamerTagAlpha(gamerTagId: number, component: number, alpha: number): void;
		setMpGamerTagWantedLevel(gamerTagId: number, wantedlvl: number): void;
		setMpGamerTagUnk(gamerTagId: number, p1: number): void;
		setMpGamerTagName(gamerTagId: number, string: string): void;
		isValidMpGamerTagMovie(gamerTagId: number): boolean;
		setMpGamerTagBigText(gamerTagId: number, string: string): void;
		getCurrentWebpageId(): number;
		getCurrentWebsiteId(): number;
		getGlobalActionscriptFlag(flagIndex: number): number;
		resetGlobalActionscriptFlag(flagIndex: number): void;
		isWarningMessageActive2(): boolean;
		setWarningMessage(
			titleMsg: string,
			flags: number,
			promptMsg: string,
			p3: boolean,
			p4: number,
			p5: string,
			p6: string,
			showBackground: boolean,
			p8: number
		): void;
		setWarningMessageWithHeader(
			entryHeader: string,
			entryLine1: string,
			instructionalKey: number,
			entryLine2: string,
			p4: boolean,
			p5: number,
			p8: boolean,
			p9: number
		): SetWarningMessageWithHeaderResult;
		setWarningMessageWithHeaderAndSubstringFlags(
			entryHeader: string,
			entryLine1: string,
			instructionalKey: number,
			entryLine2: string,
			p4: boolean,
			p5: number,
			p6: number,
			p9: boolean,
			p10: number
		): SetWarningMessageWithHeaderAndSubstringFlagsResult;
		setWarningMessageWithHeaderUnk(
			entryHeader: string,
			entryLine1: string,
			flags: number,
			entryLine2: string,
			p4: boolean,
			p5: number,
			showBg: boolean,
			p9: number,
			p10: number
		): SetWarningMessageWithHeaderUnkResult;
		setWarningMessageWithAlert(
			labelTitle: string,
			labelMessage: string,
			p2: number,
			p3: number,
			labelMessage2: string,
			p5: boolean,
			p6: number,
			p7: number,
			p8: string,
			p9: string,
			background: boolean,
			errorCode: number
		): void;
		getWarningMessageTitleHash(): number;
		setWarningMessageListRow(index: number, name: string, cash: number, rp: number, lvl: number, colour: number): boolean;
		removeWarningMessageListItems(): void;
		isWarningMessageActive(): boolean;
		clearDynamicPauseMenuErrorMessage(): void;
		raceGalleryFullscreen(toggle: boolean): void;
		raceGalleryNextBlipSprite(spriteId: number): void;
		raceGalleryAddBlip(x: number, y: number, z: number): number;
		clearRaceGalleryBlips(): void;
		forceSonarBlipsThisFrame(): number;
		getNorthRadarBlip(): number;
		displayPlayerNameTagsOnBlips(toggle: boolean): void;
		activateFrontendMenu(menuhash: number, togglePause: boolean, component: number): void;
		restartFrontendMenu(menuHash: number, p1: number): void;
		getCurrentFrontendMenuVersion(): number;
		setPauseMenuActive(toggle: boolean): void;
		disableFrontendThisFrame(): void;
		suppressFrontendRenderingThisFrame(): void;
		allowPauseMenuWhenDeadThisFrame(): void;
		setFrontendActive(active: boolean): void;
		isPauseMenuActive(): boolean;
		getPauseMenuState(): number;
		isPauseMenuRestarting(): boolean;
		logDebugInfo(p0: string): void;
		pauseMenuActivateContext(contextHash: number): void;
		pauseMenuDeactivateContext(contextHash: number): void;
		pauseMenuIsContextActive(contextHash: number): boolean;
		pauseMenuIsContextMenuActive(): number;
		pauseMenuSetBusySpinner(p0: boolean, p1: number, p2: number): void;
		isFrontendReadyForControl(): boolean;
		takeControlOfFrontend(): void;
		releaseControlOfFrontend(): void;
		isNavigatingMenuContent(): number;
		getPauseMenuSelection(): GetPauseMenuSelectionResult;
		getPauseMenuSelectionData(): GetPauseMenuSelectionDataResult;
		getMenuPedIntStat(p0: number): number;
		getMenuPedMaskedIntStat(p0: number, p2: number, p3: number): number;
		getMenuPedFloatStat(p0: number): number;
		getMenuPedBoolStat(p0: number): number;
		clearPedInPauseMenu(): void;
		givePedToPauseMenu(ped: number, p1: number): void;
		setPauseMenuPedLighting(state: boolean): void;
		setPauseMenuPedSleepState(state: boolean): void;
		openOnlinePoliciesMenu(): void;
		isOnlinePoliciesMenuActive(): boolean;
		openSocialClubMenu(): void;
		closeSocialClubMenu(): void;
		setSocialClubTour(name: string): void;
		isSocialClubActive(): boolean;
		forceCloseTextInputBox(): void;
		overrideMultiplayerChatPrefix(gxtEntryHash: number): void;
		isMultiplayerChatActive(): boolean;
		closeMultiplayerChat(): void;
		overrideMultiplayerChatColour(p0: number, hudColor: number): void;
		setTextChatUnk(p0: boolean): void;
		flagPlayerContextInTournament(toggle: boolean): void;
		setPedHasAiBlip(ped: number, hasCone: boolean): void;
		setPedHasAiBlipWithColor(ped: number, hasCone: boolean, color: number): void;
		doesPedHaveAiBlip(ped: number): boolean;
		setPedAiBlipGangId(ped: number, gangId: number): void;
		setPedAiBlipHasCone(ped: number, toggle: boolean): void;
		setPedAiBlipForcedOn(ped: number, toggle: boolean): void;
		setPedAiBlipNoticeRange(ped: number, range: number): void;
		setPedAiBlipSprite(ped: number, spriteId: number): void;
		getAiBlip2(ped: number): number;
		getAiBlip(ped: number): number;
		hasDirectorModeBeenTriggered(): boolean;
		setDirectorModeClearTriggeredFlag(): void;
		setPlayerIsInDirectorMode(toggle: boolean): void;

		unk: GameHudUnk;
	}

	export interface GameHudLegacy {
		setLoadingPromptTextEntry(string: string): void;
		showLoadingPrompt(busySpinnerType: number): void;
		setCursorSprite(spriteId: number): void;
		removeNotification(notificationId: number): void;
		setNotificationFlashColor(red: number, green: number, blue: number, alpha: number): void;
		setNotificationTextEntry(text: string): void;
		setNotificationMessage(txdName: string, textureName: string, flash: boolean, iconType: number, sender: string, subject: string): number;
		setNotificationMessageClanTag(
			txdName: string,
			textureName: string,
			flash: boolean,
			iconType: number,
			sender: string,
			subject: string,
			duration: number,
			clanTag: string
		): number;
		setNotificationMessageClanTag2(
			txdName: string,
			textureName: string,
			flash: boolean,
			iconType1: number,
			sender: string,
			subject: string,
			duration: number,
			clanTag: string,
			iconType2: number,
			p9: number
		): number;
		drawNotification(blink: boolean, p1: boolean): number;
		drawNotification2(blink: boolean, p1: boolean): number;
		drawNotification3(blink: boolean, p1: boolean): number;
		drawNotification4(blink: boolean, p1: boolean): number;
		setTextEntry2(GxtEntry: string): void;
		drawSubtitleTimed(duration: number, drawImmediately: boolean): void;
		setTextEntry(text: string): void;
		drawText(x: number, y: number, p2: number): void;
		setTextEntryForWidth(text: string): void;
		getTextScreenWidth(p0: boolean): number;
		setTextGxtEntry(entry: string): void;
		setTextComponentFormat(inputType: string): void;
		displayHelpTextFromStringLabel(p0: number, loop: boolean, beep: boolean, shape: number): void;
		addTextComponentItemString(labelName: string): void;
		addTextComponentSubstringLocalized(gxtEntryHash: number): void;
		addTextComponentSubstringCash(value: number, commaSeparated: boolean): void;
		requestAdditionalText2(gxt: string, slot: number): void;
		displayHud(toggle: boolean): void;
		respondingAsTemp(zoom: number): void;
		setRadarZoomLevelThisFrame(zoom: number): void;
		getHudColour(hudColorIndex: number): GetHudColourResult;
		setHudColour(hudColorIndex: number, r: number, g: number, b: number, a: number): void;
		getTextScaleHeight(size: number, font: number): number;
		setMultiplayerHudCash(p0: number, p1: number): void;
		showWeaponWheel(show: boolean): void;
		keyHudColour(toggle: boolean, ped: number): void;
		setMinimapVisible(toggle: boolean): void;
		setMinimapRevealed(toggle: boolean): void;
		isMinimapAreaRevealed(x: number, y: number, z: number): boolean;
		setMinimapAttitudeIndicatorLevel(altitude: number, p1: boolean, p2: number): void;
		setRadarBigmapEnabled(toggleBigMap: boolean, showFullMap: boolean): void;
		isHudComponentActive(id: number): boolean;
		isScriptedHudComponentActive(id: number): boolean;
		hideScriptedHudComponentThisFrame(id: number): void;
		hideHudComponentThisFrame(id: number): void;
		showHudComponentThisFrame(id: number): void;
		resetHudComponentValues(id: number): void;
		setHudComponentPosition(id: number, x: number, y: number): void;
		getHudComponentPosition(id: number): shared.Vector3Mp;
		hasHeadDisplayLoaded(gamerTagId: number): boolean;
		addTrevorRandomModifier(gamerTagId: number): boolean;
		setHeadDisplayFlag(gamerTagId: number, component: number, toggle: boolean, p3: number): void;
		setHeadDisplayWanted(gamerTagId: number, wantedlvl: number): void;
		setHeadDisplayString(gamerTagId: number, string: string): void;
		setWarningMessage2(
			entryHeader: string,
			entryLine1: string,
			instructionalKey: number,
			entryLine2: string,
			p4: boolean,
			p5: number,
			p8: boolean,
			p9: number
		): SetWarningMessageWithHeaderResult;
		setWarningMessage3(
			entryHeader: string,
			entryLine1: string,
			instructionalKey: number,
			entryLine2: string,
			p4: boolean,
			p5: number,
			p6: number,
			p9: boolean,
			p10: number
		): SetWarningMessageWithHeaderAndSubstringFlagsResult;
		objectDecalToggle(contextHash: number): void;
		setUseridsUihidden(p0: number): number;
		hideSpecialAbilityLockonOperation(ped: number, toggle: boolean): void;
	}

	export interface ThefeedAddTxdRefResult {
		p0: number;
		p1: number;
		p2: number;
		p3: number;
	}

	export interface SetWarningMessageWithHeaderAndSubstringFlagsResult {
		p7: number;
		p8: number;
	}

	export interface SetWarningMessageWithHeaderResult {
		showBackground: number;
		p7: number;
	}

	export interface GetHudColourResult {
		r: number;
		g: number;
		b: number;
		a: number;
	}

	export interface EndTextCommandThefeedPostCrewtagResult {
		p2: number;
		result: number;
	}

	export interface GameHudUnk {
		_0x9245E81072704B8A(p0: boolean): void;
		_0x3D9ACB1EB139E702(): number;
		_0x632B2940C67F4EA9(scaleformHandle: number): _0x632B2940C67F4EA9Result;
		_0x98C3CF913D895111(string: string, length: number): string;
		_0xCD74233600C4EA6B(toggle: boolean): void;
		_0xC2D2AD9EAAE265B8(): boolean;
		_0x0C698D8F099174C7(p0: number): void;
		_0xE4C3B169876D33D7(p0: number): void;
		_0xEB81A3DADD503187(): void;
		_0x2790F4B17D098E26(toggle: boolean): void;
		_0x6CDD58146A436083(p0: number): void;
		_0xD1942374085C8469(p0: number): void;
		_0x57D760D55F54E071(p0: number): void;
		_0xD2049635DEB9C375(): void;
		_0xBA8D65C1C65702E5(toggle: boolean): void;
		_0x214CD562A939246A(): boolean;
		_0x9FCB3CBFB3EAD69A(p0: number, p1: number): void;
		_0xB7B873520C84C118(): void;
		_0x2C173AE2BDB9385E(blip: number): number;
		_0x003E92BA477F9D7F(blip: number): number;
		_0x2916A928514C9827(): void;
		_0xB552929B85FC27EC(p0: number, p1: number): void;
		_0x4B5B620C9B59ED34(p0: number, p1: number): void;
		_0x2C9F302398E13141(p0: number, p1: number): void;
		_0xC594B315EDF2D4AF(ped: number): void;
		_0xF83D0FEBE75E62C9(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;
		_0x35A3CD97B2C0A6D2(blip: number): void;
		_0x8410C5E0CD847B9D(): void;
		_0x41350B4FC28E3941(p0: boolean): void;
		_0x504DFE62A1692296(toggle: boolean): void;
		_0xA17784FCA9548D15(p0: number, p1: number, p2: number): void;
		_0x55F5A5F07134DE60(): void;
		_0x170F541E1CADD1DE(p0: boolean): void;
		_0xE67C6DFD386EA5E7(p0: boolean): void;
		_0x801879A9B4F4B2FB(): boolean;
		_0x7B21E0BB01E8224A(p0: number): void;
		_0x817B86108EB94E51(p0: boolean): _0x817B86108EB94E51Result;
		_0x62E849B7EB28E770(p0: boolean): void;
		_0xDAF87174BE7454FF(p0: number): boolean;
		_0x211C4EF450086857(): void;
		_0xBF4F34A85CA2970C(): void;
		_0x2F057596F2BD0061(): boolean;
		_0x5BFF36D6ED83E0AE(): shared.Vector3Mp;
		_0x77F16B447824DA6C(p0: number): void;
		_0xCDCA26E80FAECB8F(): void;
		_0x2DE6C5E2E996F178(p0: number): void;
		_0xDE03620F8703A9DF(): number;
		_0x359AF31A4B52F5ED(): number;
		_0x13C4B962653A5280(): number;
		_0xC8E1071177A23BE5(): _0xC8E1071177A23BE5Result;
		_0x4895BDEA16E7C080(p0: number): void;
		_0xF06EBB91A81E09E3(p0: boolean): void;
		_0x66E7CB63C97B7D20(): number;
		_0x593FEAE1F73392D4(): number;
		_0xF284AC67940C6812(): number;
		_0x2E22FEFA0100275E(): boolean;
		_0x0CF54F20DE43879C(p0: number): void;
		_0xA238192F33110615(): _0xA238192F33110615Result;
		_0xCA6B2F7CE32AB653(p0: number, p2: number): number;
		_0x24A49BEAF468DC90(p0: number, p2: number, p3: number, p4: number): number;
		_0x8F08017F9D7C47BD(p0: number, p2: number): number;
		_0xF13FE2A80C05C561(): boolean;
		_0x1185A8087587322C(p0: boolean): void;
		_0x577599CCED639CA2(p0: number): void;
		_0x7C226D5346D4D10A(p0: number): void;
		_0x04655F9D075D0AE5(toggle: boolean): void;
		_0x243296A510B562B6(): void;
	}

	export interface _0x632B2940C67F4EA9Result {
		p1: number;
		p2: number;
		p3: number;
		result: boolean;
	}

	export interface _0xA238192F33110615Result {
		p0: number;
		p1: number;
		p2: number;
		result: boolean;
	}

	export interface _0xC8E1071177A23BE5Result {
		p0: number;
		p1: number;
		p2: number;
		result: boolean;
	}

	export interface _0x817B86108EB94E51Result {
		p1: number;
		p2: number;
		p3: number;
		p4: number;
		p5: number;
		p6: number;
		p7: number;
		p8: number;
	}

	export interface GetPauseMenuSelectionResult {
		lastItemMenuId: number;
		selectedItemUniqueId: number;
	}

	export interface GetPauseMenuSelectionDataResult {
		lastItemMenuId: number;
		selectedItemMenuId: number;
		selectedItemUniqueId: number;
	}

	export interface SetWarningMessageWithHeaderUnkResult {
		p6: number;
		p7: number;
	}

	export interface GetHudScreenPositionFromWorldPositionResult {
		screenX: number;
		screenY: number;
		result: boolean;
	}

	export interface EndTextCommandThefeedPostCrewtagWithGameNameResult {
		p2: number;
		result: number;
	}

	export interface EndTextCommandThefeedPostVersusTuResult {
		p0: number;
		p1: number;
		p3: number;
		p4: number;
		result: number;
	}

	export interface GameInterior extends GameInteriorLegacy {
		getHeading(interior: number): number;
		getInfo(interior: number): GetInteriorInfoResult;
		getGroupId(interior: number): number;
		getOffsetFromInWorldCoords(interior: number, x: number, y: number, z: number): shared.Vector3Mp;
		isScene(): boolean;
		isValid(interior: number): boolean;
		clearRoomForEntity(entity: number): void;
		forceRoomForEntity(entity: number, interior: number, roomHashKey: number): void;
		getRoomKeyFromEntity(entity: number): number;
		getKeyForEntityInRoom(entity: number): number;
		getFromEntity(entity: number): number;
		clearForEntity(entity: number): void;
		forceRoomForGameViewport(interiorID: number, roomHashKey: number): void;
		getRoomKeyForGameViewport(): number;
		clearRoomForGameViewport(): void;
		getFromGameplayCam(): number;
		getAtCoords(x: number, y: number, z: number): number;
		addPickupToRoomByName(pickup: number, roomName: string): void;
		pinInMemory(interior: number): void;
		unpin(interior: number): void;
		isReady(interior: number): boolean;
		getAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;
		getAtCoordsWithTypehash(x: number, y: number, z: number, typeHash: number): number;
		isCollisionMarkedOutside(x: number, y: number, z: number): boolean;
		getFromCollision(x: number, y: number, z: number): number;
		activateEntitySet(interior: number, entitySetName: string): void;
		deactivateEntitySet(interior: number, entitySetName: string): void;
		isEntitySetActive(interior: number, entitySetName: string): boolean;
		setEntitySetColor(interior: number, entitySetName: string, color: number): void;
		refresh(interior: number): void;
		enableExteriorCullModelThisFrame(mapObjectHash: number): void;
		enableScriptCullModelThisFrame(mapObjectHash: number): void;
		disable(interior: number, toggle: boolean): void;
		isDisabled(interior: number): boolean;
		cap(interior: number, toggle: boolean): void;
		isCapped(interior: number): boolean;

		unk: GameInteriorUnk;
	}

	export interface GameInteriorLegacy {
		getInteriorGroupId(interior: number): number;
		getOffsetFromInteriorInWorldCoords(interior: number, x: number, y: number, z: number): shared.Vector3Mp;
		isValidInterior(interior: number): boolean;
		getInteriorAtCoords(x: number, y: number, z: number): number;
		addPickupToInteriorRoomByName(pickup: number, roomName: string): void;
		unpinInterior(interior: number): void;
		isInteriorReady(interior: number): boolean;
		getInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;
		unkGetInteriorAtCoords(x: number, y: number, z: number, typeHash: number): number;
		areCoordsCollidingWithExterior(x: number, y: number, z: number): boolean;
		getInteriorFromCollision(x: number, y: number, z: number): number;
		enableInteriorProp(interior: number, entitySetName: string): void;
		disableInteriorProp(interior: number, entitySetName: string): void;
		isInteriorPropEnabled(interior: number, entitySetName: string): boolean;
		refreshInterior(interior: number): void;
		hideMapObjectThisFrame(mapObjectHash: number): void;
		disableInterior(interior: number, toggle: boolean): void;
		isInteriorDisabled(interior: number): boolean;
		capInterior(interior: number, toggle: boolean): void;
		isInteriorCapped(interior: number): boolean;
	}

	export interface GameInteriorUnk {
		_0x82EBB79E258FA2B7(entity: number, interior: number): void;
		_0x38C1CB1CB119A016(p0: number, p1: number): void;
		_0xAF348AFCB575A441(roomName: string): void;
		_0x405DC2AEF6AF95B9(roomHashKey: number): void;
		_0x4C2330E61D3DEB56(interior: number): number;
		_0x483ACA1176CA93F1(): void;
		_0x7ECDF98587E92DEC(p0: number): void;
		_0x9E6542F0CE8E70A3(toggle: boolean): void;
		_0x7241CCB7D020DB69(entity: number, toggle: boolean): void;
	}

	export interface GetInteriorInfoResult {
		position: shared.Vector3Mp;
		nameHash: number;
	}

	export interface GameItemset extends GameItemsetLegacy {
		create(p0: boolean): number;
		destroy(p0: number): void;
		isValid(p0: number): boolean;
		addTo(p0: number, p1: number): boolean;
		removeFrom(p0: number, p1: number): void;
		getSize(x: number): number;
		getIndexedItemIn(p0: number, p1: number): number;
		isIn(p0: number, p1: number): boolean;
		clean(p0: number): void;
	}

	export interface GameItemsetLegacy {
		createItemset(p0: boolean): number;
		destroyItemset(p0: number): void;
		isItemsetValid(p0: number): boolean;
		addToItemset(p0: number, p1: number): boolean;
		removeFromItemset(p0: number, p1: number): void;
		getItemsetSize(x: number): number;
		getIndexedItemInItemset(p0: number, p1: number): number;
		isInItemset(p0: number, p1: number): boolean;
		cleanItemset(p0: number): void;
	}

	export interface GameLoadingScreen extends GameLoadingScreenLegacy {
		getLoadFreemode(): boolean;
		setLoadFreemode(toggle: boolean): void;
		getLoadFreemodeWithEventName(): boolean;
		setLoadFreemodeWithEventName(toggle: boolean): void;
		isLoadingFreemode(): boolean;
		setIsLoadingFreemode(toggle: boolean): void;

		unk: GameLoadingScreenUnk;
	}

	export interface GameLoadingScreenLegacy {
		getBroadcastFinshedLosSound(toggle: boolean): void;
	}

	export interface GameLoadingScreenUnk {
		_0xF2CA003F167E21D2(): number;
		_0xFA1E0E893D915215(toggle: boolean): void;
	}

	export interface GameLocalization extends GameLocalizationLegacy {
		getSystemLanguage(): number;
		getCurrentLanguage(): number;
		getSystemDateFormat(): number;
	}

	export interface GameMobile extends GameMobileLegacy {
		createPhone(phoneType: number): void;
		destroyPhone(): void;
		setPhoneScale(scale: number): void;
		setPhoneRotation(rotX: number, rotY: number, rotZ: number, p3: number): void;
		getPhoneRotation(p1: number): shared.Vector3Mp;
		setPhonePosition(posX: number, posY: number, posZ: number): void;
		getPhonePosition(): shared.Vector3Mp;
		scriptIsMovingPhoneOffscreen(toggle: boolean): void;
		canPhoneBeSeenOnScreen(): boolean;
		setPhoneUnk(toggle: boolean): void;
		cellCamMoveFinger(direction: number): void;
		cellCamSetLean(toggle: boolean): void;
		cellCamActivate(p0: boolean, p1: boolean): void;
		cellCamDisableThisFrame(toggle: boolean): void;
		cellCamIsCharVisibleNoFaceCheck(entity: number): boolean;
		getPhoneRenderId(): number;

		unk: GameMobileUnk;
	}

	export interface GameMobileLegacy {
		createMobilePhone(phoneType: number): void;
		setMobilePhoneScale(scale: number): void;
		setMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: number): void;
		getMobilePhoneRotation(p1: number): shared.Vector3Mp;
		setMobilePhonePosition(posX: number, posY: number, posZ: number): void;
		getMobilePhonePosition(): shared.Vector3Mp;
		scriptIsMovingMobilePhoneOffscreen(toggle: boolean): void;
		moveFinger(direction: number): void;
		setPhoneLean(toggle: boolean): void;
		getMobilePhoneRenderId(): number;
	}

	export interface GameMobileUnk {
		_0xA2CCBE62CD4C91A4(): number;
		_0x1B0B4AEED5B9B41C(p0: number): void;
		_0x53F4892D18EC90A4(p0: number): void;
		_0x3117D84EFA60F77B(p0: number): void;
		_0x15E69E2802C24B8D(p0: number): void;
		_0xAC2890471901861C(p0: number): void;
		_0xD6ADE981781FCA09(p0: number): void;
		_0xF1E22DC13F5EEBAD(p0: number): void;
		_0x466DA42C89865553(p0: number): void;
	}

	export interface GameLocalizationLegacy {}

	export interface GameNetworkLegacy {
		getPosixTime(): number;
	}

	export interface GameNetwork extends GameNetworkLegacy {
		getOnlineVersion(): string;
		isSignedIn(): boolean;
		isSignedOnline(): boolean;
		hasValidRosCredentials(): boolean;
		isCloudAvailable(): boolean;
		hasSocialClubAccount(): boolean;
		areSocialClubPoliciesCurrent(): boolean;
		isHost(): boolean;
		haveOnlinePrivileges(): boolean;
		hasAgeRestrictedProfile(): boolean;
		haveUserContentPrivileges(p0: number): boolean;
		haveCommunicationPrivileges(p0: number, player: number): boolean;
		checkUserContentPrivileges(p0: number, p1: number, p2: boolean): boolean;
		checkCommunicationPrivileges(p0: number, p1: number, p2: boolean): boolean;
		hasSocialNetworkingSharingPriv(): boolean;
		getAgeGroup(): number;
		haveOnlinePrivilege2(): boolean;
		canBail(): boolean;
		bail(p0: number, p1: number, p2: number): void;
		transitionTrack(hash: number, p1: number, p2: number, state: number, p4: number): void;
		canAccessMultiplayer(): number;
		isMultiplayerDisabled(): boolean;
		canEnterMultiplayer(): boolean;
		sessionEnter(p0: number, p1: number, p2: number, maxPlayers: number, p4: number, p5: number): number;
		sessionFriendMatchmaking(p0: number, p1: number, maxPlayers: number, p3: boolean): boolean;
		sessionCrewMatchmaking(p0: number, p1: number, p2: number, maxPlayers: number, p4: boolean): boolean;
		sessionActivityQuickmatch(p0: number, p1: number, p2: number, p3: number): boolean;
		sessionHost(p0: number, maxPlayers: number, p2: boolean): boolean;
		sessionHostClosed(p0: number, maxPlayers: number): boolean;
		sessionHostFriendsOnly(p0: number, maxPlayers: number): boolean;
		sessionIsClosedFriends(): boolean;
		sessionIsClosedCrew(): boolean;
		sessionIsSolo(): boolean;
		sessionIsPrivate(): boolean;
		sessionEnd(p0: boolean, p1: boolean): boolean;
		sessionKickPlayer(player: number): void;
		sessionGetKickVote(player: number): boolean;
		joinPreviouslyFailedSession(): boolean;
		joinPreviouslyFailedTransition(): boolean;
		sessionSetMatchmakingGroup(matchmakingGroup: number): void;
		sessionSetMatchmakingGroupMax(playerType: number, playerCount: number): void;
		sessionGetMatchmakingGroupFree(p0: number): number;
		sessionSetMatchmakingPropertyId(p0: boolean): void;
		sessionSetMatchmakingMentalState(p0: number): void;
		sessionValidateJoin(p0: boolean): void;
		addFollowers(p1: number): number;
		clearFollowers(): void;
		getGlobalMultiplayerClock(): NetworkGetGlobalMultiplayerClockResult;
		getTargetingMode(): number;
		findGamersInCrew(p0: number): boolean;
		findMatchedGamers(p0: number, p1: number, p2: number, p3: number): boolean;
		isFindingGamers(): boolean;
		getNumFoundGamers(): number;
		getFoundGamer(p1: number): number;
		clearFoundGamers(): void;
		getGamerStatus(): number;
		getGamerStatusResult(p1: number): number;
		clearGetGamerStatus(): void;
		sessionJoinInvite(): void;
		sessionCancelInvite(): void;
		sessionForceCancelInvite(): void;
		hasPendingInvite(): boolean;
		acceptInvite(): boolean;
		sessionWasInvited(): boolean;
		sessionGetInviter(): number;
		suppressInvite(toggle: boolean): void;
		blockInvites(toggle: boolean): void;
		blockJoinQueueInvites(toggle: boolean): void;
		blockKickedPlayers(p0: boolean): void;
		setScriptReadyForEvents(toggle: boolean): void;
		isOfflineInvitePending(): boolean;
		sessionHostSinglePlayer(p0: number): void;
		sessionLeaveSinglePlayer(): void;
		isGameInProgress(): boolean;
		isSessionActive(): boolean;
		isInSession(): boolean;
		isSessionStarted(): boolean;
		isSessionBusy(): boolean;
		canSessionEnd(): boolean;
		sessionMarkVisible(toggle: boolean): void;
		sessionIsVisible(): boolean;
		sessionBlockJoinRequests(toggle: boolean): void;
		sessionChangeSlots(p0: number, p1: boolean): void;
		sessionGetPrivateSlots(): number;
		sessionVoiceHost(): void;
		sessionVoiceLeave(): void;
		sessionVoiceConnectToPlayer(): number;
		sessionVoiceRespondToRequest(p0: boolean, p1: number): void;
		sessionVoiceSetTimeout(timeout: number): void;
		sessionIsInVoiceSession(): boolean;
		sessionIsVoiceSessionBusy(): boolean;
		sendTextMessage(message: string): number;
		setActivitySpectator(toggle: boolean): void;
		isActivitySpectator(): boolean;
		setActivitySpectatorMax(maxSpectators: number): void;
		getActivityPlayerNum(p0: boolean): number;
		isActivitySpectatorFromHandle(): number;
		hostTransition(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: boolean,
			p6: boolean,
			p7: number,
			p8: number,
			p9: number
		): boolean;
		doTransitionQuickmatch(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): boolean;
		doTransitionQuickmatchAsync(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): boolean;
		doTransitionQuickmatchWithGroup(p0: number, p1: number, p2: number, p3: number, p5: number, p6: number, p7: number): number;
		joinGroupActivity(): number;
		isTransitionClosedFriends(): boolean;
		isTransitionClosedCrew(): boolean;
		isTransitionSolo(): boolean;
		isTransitionPrivate(): boolean;
		setTransitionCreatorHandle(): number;
		clearTransitionCreatorHandle(): void;
		inviteGamersToTransition(p1: number): number;
		setGamerInvitedToTransition(): number;
		leaveTransition(): boolean;
		launchTransition(): boolean;
		bailTransition(p0: number, p1: number, p2: number): void;
		doTransitionToGame(p0: boolean, maxPlayers: number): boolean;
		doTransitionToNewGame(p0: boolean, maxPlayers: number, p2: boolean): boolean;
		doTransitionToFreemode(p1: number, p2: boolean, players: number, p4: boolean): number;
		doTransitionToNewFreemode(players: number, p3: boolean, p4: boolean, p5: boolean): NetworkDoTransitionToNewFreemodeResult;
		isTransitionToGame(): boolean;
		getTransitionMembers(dataCount: number): NetworkGetTransitionMembersResult;
		applyTransitionParameter(p0: number, p1: number): void;
		applyTransitionParameterString(p0: number, string: string, p2: boolean): void;
		sendTransitionGamerInstruction(p1: string, p2: number, p3: number, p4: boolean): number;
		markTransitionGamerAsFullyJoined(): number;
		isTransitionHost(): boolean;
		isTransitionHostFromHandle(): number;
		getTransitionHost(): number;
		isInTransition(): boolean;
		isTransitionStarted(): boolean;
		isTransitionBusy(): boolean;
		isTransitionMatchmaking(): boolean;
		openTransitionMatchmaking(): void;
		closeTransitionMatchmaking(): void;
		isTransitionOpenToMatchmaking(): boolean;
		setTransitionVisibilityLock(p0: boolean, p1: boolean): void;
		isTransitionVisibilityLocked(): boolean;
		setTransitionActivityId(p0: number): void;
		changeTransitionSlots(p0: number, p1: number): void;
		hasPlayerStartedTransition(player: number): boolean;
		areTransitionDetailsValid(p0: number): boolean;
		joinTransition(player: number): boolean;
		hasInvitedGamerToTransition(): number;
		isActivitySession(): boolean;
		sendInviteViaPresence(p2: number, p3: number): NetworkSendInviteViaPresenceResult;
		sendPresenceTransitionInvite(p2: number, p3: number): NetworkSendPresenceTransitionInviteResult;
		getNumPresenceInvites(): number;
		acceptPresenceInvite(p0: number): boolean;
		removePresenceInvite(p0: number): boolean;
		getPresenceInviteId(p0: number): number;
		getPresenceInviteInviter(p0: number): number;
		getPresenceInviteHandle(p0: number): number;
		getPresenceInviteSessionId(p0: number): number;
		getPresenceInviteContentId(p0: number): number;
		getPresenceInvitePlaylistLength(p0: number): number;
		getPresenceInvitePlaylistCurrent(p0: number): number;
		getPresenceInviteFromAdmin(p0: number): boolean;
		getPresenceInviteIsTournament(p0: number): boolean;
		hasFollowInvite(): boolean;
		actionFollowInvite(): number;
		clearFollowInvite(): number;
		removeTransitionInvite(): number;
		removeAllTransitionInvite(): void;
		inviteGamers(p1: number): NetworkInviteGamersResult;
		hasInvitedGamer(): number;
		getCurrentlySelectedGamerHandleFromInviteMenu(): number;
		setCurrentlySelectedGamerHandleFromInviteMenu(): number;
		setInviteOnCallForInviteMenu(): number;
		checkDataManagerSucceededForHandle(p0: number): number;
		filloutPmPlayerList(p1: number, p2: number): number;
		filloutPmPlayerListWithNames(p2: number, p3: number): FilloutPmPlayerListWithNamesResult;
		refreshPlayerListStats(p0: number): boolean;
		setCurrentDataManagerHandle(): number;
		isInPlatformParty(): boolean;
		getPlatformPartyUnk(): number;
		getPlatformPartyMembers(dataSize: number): NetworkGetPlatformPartyMembersResult;
		isInPlatformPartyChat(): boolean;
		isChattingInPlatformParty(): number;
		seedRandomNumberGenerator(seed: number): void;
		getRandomInt(): number;
		getRandomIntRanged(rangeStart: number, rangeEnd: number): number;
		playerIsCheater(): boolean;
		playerGetCheaterReason(): number;
		playerIsBadsport(): boolean;
		triggerScriptCrcCheckOnPlayer(player: number, p1: number, scriptHash: number): boolean;
		remoteCheatDetected(player: number, a: number, b: number): boolean;
		badSportPlayerLeftDetected(event: number, amountReceived: number): number;
		applyPedScarData(ped: number, p1: number): void;
		setThisScriptIsNetworkScript(lobbySize: number, p1: boolean, playerId: number): void;
		isThisScriptMarked(p0: number, p1: boolean, p2: number): boolean;
		getThisScriptIsNetworkScript(): boolean;
		getMaxNumParticipants(): number;
		getNumParticipants(): number;
		getScriptStatus(): number;
		registerHostBroadcastVariables(numVars: number): number;
		registerPlayerBroadcastVariables(numVars: number): number;
		finishBroadcastingData(): void;
		hasReceivedHostBroadcastData(): boolean;
		getPlayerIndex(player: number): number;
		getParticipantIndex(index: number): number;
		getPlayerIndexFromPed(ped: number): number;
		getNumConnectedPlayers(): number;
		isPlayerConnected(player: number): boolean;
		getTotalNumPlayers(): number;
		isParticipantActive(p0: number): boolean;
		isPlayerActive(player: number): boolean;
		isPlayerAParticipant(player: number): boolean;
		isHostOfThisScript(): boolean;
		getHostOfThisScript(): number;
		getHostOfScript(scriptName: string, p1: number, p2: number): number;
		setMissionFinished(): void;
		isScriptActive(scriptName: string, player: number, p2: boolean, p3: number): boolean;
		isScriptActiveByHash(scriptHash: number, p1: number, p2: boolean, p3: number): boolean;
		getNumScriptParticipants(p1: number, p2: number): NetworkGetNumScriptParticipantsResult;
		isPlayerAParticipantOnScript(player1: number, script: string, player2: number): boolean;
		participantId(): number;
		participantIdToInt(): number;
		getDestroyerOfNetworkId(netId: number): NetworkGetDestroyerOfNetworkIdResult;
		getDestroyerOfEntity(p0: number, p1: number): number;
		getEntityKillerOfPlayer(player: number): NetworkGetEntityKillerOfPlayerResult;
		resurrectLocalPlayer(x: number, y: number, z: number, heading: number, unk: boolean, changetime: boolean, p6: number): void;
		setLocalPlayerInvincibleTime(time: number): void;
		isLocalPlayerInvincible(): boolean;
		disableInvincibleFlashing(player: number, toggle: boolean): void;
		setLocalPlayerSyncLookAt(toggle: boolean): void;
		hasEntityBeenRegisteredWithThisThread(entity: number): boolean;
		getNetworkIdFromEntity(entity: number): number;
		getEntityFromNetworkId(netId: number): number;
		getEntityIsNetworked(entity: number): boolean;
		getEntityIsLocal(entity: number): boolean;
		registerEntityAsNetworked(entity: number): void;
		unregisterNetworkedEntity(entity: number): void;
		doesNetworkIdExist(netId: number): boolean;
		doesEntityExistWithNetworkId(netId: number): boolean;
		requestControlOfNetworkId(netId: number): boolean;
		hasControlOfNetworkId(netId: number): boolean;
		requestControlOfEntity(entity: number): boolean;
		requestControlOfDoor(doorID: number): boolean;
		hasControlOfEntity(entity: number): boolean;
		hasControlOfPickup(pickup: number): boolean;
		hasControlOfDoor(doorHash: number): boolean;
		isDoorNetworked(doorHash: number): boolean;
		vehToNet(vehicle: number): number;
		pedToNet(ped: number): number;
		objToNet(object: number): number;
		netToVeh(netHandle: number): number;
		netToPed(netHandle: number): number;
		netToObj(netHandle: number): number;
		netToEnt(netHandle: number): number;
		getLocalHandle(bufferSize: number): number;
		handleFromUserId(userId: string, bufferSize: number): number;
		handleFromMemberId(memberId: string, bufferSize: number): number;
		handleFromPlayer(player: number, bufferSize: number): number;
		hashFromPlayerHandle(player: number): number;
		hashFromGamerHandle(): NetworkHashFromGamerHandleResult;
		handleFromFriend(friendIndex: number, bufferSize: number): number;
		gamertagFromHandleStart(): number;
		gamertagFromHandlePending(): boolean;
		gamertagFromHandleSucceeded(): boolean;
		getGamertagFromHandle(): NetworkGetGamertagFromHandleResult;
		getDisplaynamesFromHandles(p0: number, p1: number, p2: number): number;
		areHandlesTheSame(): NetworkAreHandlesTheSameResult;
		isHandleValid(bufferSize: number): number;
		getPlayerFromGamerHandle(): NetworkGetPlayerFromGamerHandleResult;
		memberIdFromGamerHandle(): NetworkMemberIdFromGamerHandleResult;
		isGamerInMySession(): number;
		showProfileUi(): number;
		playerGetName(player: number): string;
		playerGetUserid(player: number): NetworkPlayerGetUseridResult;
		playerIsRockstarDev(player: number): boolean;
		playerIndexIsCheater(player: number): boolean;
		getEntityNetScriptId(entity: number): number;
		isInactiveProfile(): number;
		getMaxFriends(): number;
		getFriendCount(): number;
		getFriendName(friendIndex: number): string;
		getFriendNameFromIndex(friendIndex: number): string;
		isFriendOnline(name: string): boolean;
		isFriendHandleOnline(): number;
		isFriendInSameTitle(friendName: string): boolean;
		isFriendInMultiplayer(friendName: string): boolean;
		isFriend(): number;
		isPendingFriend(p0: number): number;
		isAddingFriend(): number;
		addFriend(message: string): number;
		isFriendIndexOnline(friendIndex: number): boolean;
		setPlayerIsPassive(toggle: boolean): void;
		getPlayerOwnsWaypoint(player: number): boolean;
		canSetWaypoint(): boolean;
		hasHeadset(): boolean;
		isLocalTalking(): boolean;
		gamerHasHeadset(): number;
		isGamerTalking(): number;
		canCommunicateWithGamer2(): number;
		canCommunicateWithGamer(): number;
		isGamerMutedByMe(): number;
		amIMutedByGamer(): number;
		isGamerBlockedByMe(): number;
		amIBlockedByGamer(): number;
		canViewGamerUserContent(): number;
		hasViewGamerUserContentResult(): number;
		canPlayMultiplayerWithGamer(): number;
		canGamerPlayMultiplayerWithMe(): number;
		isPlayerTalking(player: number): boolean;
		playerHasHeadset(player: number): boolean;
		isPlayerMutedByMe(player: number): boolean;
		amIMutedByPlayer(player: number): boolean;
		isPlayerBlockedByMe(player: number): boolean;
		amIBlockedByPlayer(player: number): boolean;
		getPlayerLoudness(player: number): number;
		setTalkerProximity(value: number): void;
		getTalkerProximity(): number;
		setVoiceActive(toggle: boolean): void;
		overrideTransitionChat(p0: boolean): void;
		setTeamOnlyChat(toggle: boolean): void;
		overrideTeamRestrictions(team: number, toggle: boolean): void;
		setOverrideSpectatorMode(toggle: boolean): void;
		setNoSpectatorChat(toggle: boolean): void;
		overrideChatRestrictions(player: number, toggle: boolean): void;
		overrideSendRestrictions(player: number, toggle: boolean): void;
		overrideSendRestrictionsAll(toggle: boolean): void;
		overrideReceiveRestrictions(player: number, toggle: boolean): void;
		overrideReceiveRestrictionsAll(toggle: boolean): void;
		setVoiceChannel(channel: number): void;
		clearVoiceChannel(): void;
		applyVoiceProximityOverride(x: number, y: number, z: number): void;
		clearVoiceProximityOverride(): void;
		isTextChatActive(): boolean;
		shutdownAndLaunchSinglePlayerGame(): void;
		shutdownAndLoadMostRecentSave(): boolean;
		setFriendlyFireOption(toggle: boolean): void;
		setRichPresence(p0: number, p1: number, p2: number, p3: number): void;
		setRichPresenceString(p0: number, textLabel: string): void;
		getTimeoutTime(): number;
		respawnCoords(player: number, x: number, y: number, z: number, p4: boolean, p5: boolean): void;
		removeAllStickyBombsFromEntity(entity: number, ped: number): void;
		clanServiceIsValid(): boolean;
		clanPlayerIsActive(): number;
		clanPlayerGetDesc(bufferSize: number): NetworkClanPlayerGetDescResult;
		clanIsRockstarClan(bufferSize: number): number;
		clanGetUiFormattedTag(bufferSize: number): NetworkClanGetUiFormattedTagResult;
		clanGetLocalMembershipsCount(): number;
		clanGetMembershipDesc(p1: number): number;
		clanDownloadMembership(): number;
		clanDownloadMembershipPending(): number;
		isClanMembershipFinishedDownloading(): boolean;
		clanRemoteMembershipsAreInCache(): number;
		clanGetMembershipCount(): NetworkClanGetMembershipCountResult;
		clanGetMembershipValid(p1: number): number;
		clanGetMembership(p2: number): NetworkClanGetMembershipResult;
		clanJoin(clanDesc: number): boolean;
		clanAnimation(animDict: string, animName: string): boolean;
		clanGetEmblemTxdName(): NetworkClanGetEmblemTxdNameResult;
		clanRequestEmblem(p0: number): boolean;
		clanIsEmblemReady(p0: number): number;
		clanReleaseEmblem(p0: number): void;
		getPrimaryClanDataClear(): number;
		getPrimaryClanDataCancel(): void;
		getPrimaryClanDataStart(p1: number): number;
		getPrimaryClanDataPending(): number;
		getPrimaryClanDataSuccess(): number;
		getPrimaryClanDataNew(): NetworkGetPrimaryClanDataNewResult;
		setIdCanMigrate(netId: number, toggle: boolean): void;
		setIdExistsOnAllMachines(netId: number, toggle: boolean): void;
		setIdAlwaysExistsForPlayer(netId: number, player: number, toggle: boolean): void;
		setEntityCanBlend(entity: number, toggle: boolean): void;
		setEntityInvisibleToNetwork(entity: number, toggle: boolean): void;
		setIdVisibleInCutscene(netId: number, p1: boolean, p2: boolean): void;
		setCutsceneEntities(toggle: boolean): void;
		isIdOwnedByParticipant(netId: number): boolean;
		setLocalPlayerVisibleInCutscene(p0: boolean, p1: boolean): void;
		setLocalPlayerInvisibleLocally(p0: boolean): void;
		setLocalPlayerVisibleLocally(p0: boolean): void;
		setPlayerInvisibleLocally(player: number, toggle: boolean): void;
		setPlayerVisibleLocally(player: number, toggle: boolean): void;
		fadeOutLocalPlayer(p0: boolean): void;
		fadeOutEntity(entity: number, normal: boolean, slow: boolean): void;
		fadeInEntity(entity: number, state: boolean, p2: number): void;
		isPlayerFading(player: number): boolean;
		isEntityFading(entity: number): boolean;
		isPlayerInCutscene(player: number): boolean;
		setEntityVisibleInCutscene(p0: number, p1: boolean, p2: boolean): void;
		setEntityLocallyInvisible(entity: number): void;
		setEntityLocallyVisible(entity: number): void;
		isDamageTrackerActiveOnId(netID: number): boolean;
		activateDamageTrackerOnId(netID: number, toggle: boolean): void;
		isDamageTrackerActiveOnPlayer(player: number): boolean;
		activateDamageTrackerOnPlayer(player: number, toggle: boolean): void;
		isSphereVisibleToAnotherMachine(p0: number, p1: number, p2: number, p3: number): boolean;
		isSphereVisibleToPlayer(p0: number, p1: number, p2: number, p3: number, p4: number): boolean;
		reserveMissionObjects(amount: number): void;
		reserveMissionPeds(amount: number): void;
		reserveMissionVehicles(amount: number): void;
		reserveLocalObjects(amount: number): void;
		reserveLocalPeds(amount: number): void;
		reserveLocalVehicles(amount: number): void;
		canRegisterMissionObjects(amount: number): boolean;
		canRegisterMissionPeds(amount: number): boolean;
		canRegisterMissionVehicles(amount: number): boolean;
		canRegisterMissionPickups(amount: number): boolean;
		canRegisterMissionEntities(ped_amt: number, vehicle_amt: number, object_amt: number, pickup_amt: number): boolean;
		getNumReservedMissionObjects(p0: boolean, p1: number): number;
		getNumReservedMissionPeds(p0: boolean, p1: number): number;
		getNumReservedMissionVehicles(p0: boolean, p1: number): number;
		getNumCreatedMissionObjects(p0: boolean): number;
		getNumCreatedMissionPeds(p0: boolean): number;
		getNumCreatedMissionVehicles(p0: boolean): number;
		getMaxNumObjects(): number;
		getMaxNumPeds(): number;
		getMaxNumVehicles(): number;
		getMaxNumPickups(): number;
		getTime(): number;
		getTimeAccurate(): number;
		hasTimeStarted(): boolean;
		getTimeOffset(timeA: number, timeB: number): number;
		isTimeLessThan(timeA: number, timeB: number): boolean;
		isTimeMoreThan(timeA: number, timeB: number): boolean;
		isTimeEqualTo(timeA: number, timeB: number): boolean;
		getTimeDifference(timeA: number, timeB: number): number;
		getTimeAsString(time: number): string;
		getCloudTimeAsString(): string;
		getCloudTimeAsInt(): number;
		convertPosixTime(posixTime: number): number;
		setInSpectatorMode(toggle: boolean, playerPed: number): void;
		setInSpectatorModeExtended(toggle: boolean, playerPed: number, p2: boolean): void;
		setInFreeCamMode(toggle: boolean): void;
		setChoiceMigrateOptions(toggle: boolean, player: number): void;
		isInSpectatorMode(): boolean;
		setInMpCutscene(p0: boolean, p1: boolean): void;
		isInMpCutscene(): boolean;
		isPlayerInMpCutscene(player: number): boolean;
		setVehicleRespotTimer(netId: number, time: number, p2: number, p3: number): void;
		setVehicleAsGhost(vehicle: number, toggle: boolean): void;
		setLocalPlayerAsGhost(toggle: boolean, p1: boolean): void;
		isEntityGhostedToLocalPlayer(entity: number): boolean;
		setRelationshipToPlayer(player: number, p1: boolean): void;
		setGhostedEntityAlpha(alpha: number): void;
		resetGhostedEntityAlpha(): void;
		setEntityGhostedWithOwner(entity: number, p1: boolean): void;
		usePlayerColourInsteadOfTeamColour(toggle: boolean): void;
		createSynchronisedScene(
			x: number,
			y: number,
			z: number,
			xRot: number,
			yRot: number,
			zRot: number,
			rotationOrder: number,
			useOcclusionPortal: boolean,
			looped: boolean,
			p9: number,
			animTime: number,
			p11: number
		): number;
		addPedToSynchronisedScene(
			ped: number,
			netScene: number,
			animDict: string,
			animnName: string,
			speed: number,
			speedMultiplier: number,
			duration: number,
			flag: number,
			playbackRate: number,
			p9: number
		): void;
		addEntityToSynchronisedScene(
			entity: number,
			netScene: number,
			animDict: string,
			animName: string,
			speed: number,
			speedMulitiplier: number,
			flag: number
		): void;
		forceLocalUseOfSyncedSceneCamera(netScene: number, animDict: string, animName: string): void;
		attachSynchronisedSceneToEntity(netScene: number, entity: number, bone: number): void;
		startSynchronisedScene(netScene: number): void;
		stopSynchronisedScene(netScene: number): void;
		convertSynchronisedSceneToSynchronizedScene(netScene: number): number;
		startRespawnSearchForPlayer(
			player: number,
			x: number,
			y: number,
			z: number,
			radius: number,
			p5: number,
			p6: number,
			p7: number,
			flags: number
		): boolean;
		startRespawnSearchInAngledAreaForPlayer(
			player: number,
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			width: number,
			p8: number,
			p9: number,
			p10: number,
			flags: number
		): boolean;
		queryRespawnResults(): NetworkQueryRespawnResultsResult;
		cancelRespawnSearch(): void;
		getRespawnResult(randomInt: number): NetworkGetRespawnResultResult;
		getRespawnResultFlags(p0: number): number;
		startSoloTutorialSession(): void;
		endTutorialSession(): void;
		isInTutorialSession(): boolean;
		isTutorialSessionChangePending(): boolean;
		getPlayerTutorialSessionInstance(player: number): number;
		isPlayerEqualToIndex(player: number, index: number): boolean;
		concealPlayer(player: number, toggle: boolean, p2: boolean): void;
		isPlayerConcealed(player: number): boolean;
		concealEntity(entity: number, toggle: boolean): void;
		isEntityConcealed(entity: number): boolean;
		overrideClockTime(hours: number, minutes: number, seconds: number): void;
		overrideClockMillisecondsPerGameMinute(ms: number): void;
		clearClockTimeOverride(): void;
		isClockTimeOverridden(): boolean;
		addEntityArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;
		addEntityAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): number;
		addEntityDisplayedBoundaries(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;
		removeEntityArea(p0: number): boolean;
		entityAreaDoesExist(areaHandle: number): boolean;
		entityAreaIsOccupied(areaHandle: number): boolean;
		setNetworkIdDynamic(netID: number, toggle: boolean): void;
		requestCloudBackgroundScripts(): boolean;
		isCloudBackgroundScriptRequestPending(): boolean;
		requestCloudTunables(): void;
		isTunableCloudRequestPending(): boolean;
		getTunableCloudCrc(): number;
		doesTunableExist(tunableContext: string, tunableName: string): boolean;
		accessTunableInt(tunableContext: string, tunableName: string): number;
		accessTunableFloat(tunableContext: string, tunableName: string): number;
		accessTunableBool(tunableContext: string, tunableName: string): boolean;
		doesTunableExistHash(tunableContext: number, tunableName: number): boolean;
		allocateTunablesRegistrationDataMap(): boolean;
		accessTunableIntHash(tunableContext: number, tunableName: number): number;
		registerTunableIntHash(contextHash: number, nameHash: number): number;
		accessTunableFloatHash(tunableContext: number, tunableName: number): number;
		registerTunableFloatHash(contextHash: number, nameHash: number): number;
		accessTunableBoolHash(tunableContext: number, tunableName: number): boolean;
		registerTunableBoolHash(contextHash: number, nameHash: number): boolean;
		tryAccessTunableBoolHash(tunableContext: number, tunableName: number, defaultValue: boolean): boolean;
		getContentModifierListId(contentHash: number): number;
		resetBodyTracker(): void;
		getNumBodyTrackers(): number;
		setVehicleWheelsDestructible(entity: number, toggle: boolean): void;
		explodeVehicle(vehicle: number, isAudible: boolean, isInvisible: boolean, p3: boolean): void;
		overrideCoordsAndHeading(entity: number, x: number, y: number, z: number, heading: number): void;
		disableProximityMigration(netID: number): void;
		setPropertyId(id: number): void;
		clearPropertyId(): void;
		cacheLocalPlayerHeadBlendData(): void;
		hasCachedPlayerHeadBlendData(player: number): boolean;
		applyCachedPlayerHeadBlendData(ped: number, player: number): boolean;
		getNumCommerceItems(): number;
		isCommerceDataValid(): boolean;
		getCommerceItemId(index: number): string;
		getCommerceItemName(index: number): string;
		getCommerceProductPrice(index: number): string;
		getCommerceItemNumCats(index: number): number;
		getCommerceItemCat(index: number, index2: number): string;
		openCommerceStore(p0: string, p1: string, p2: number): void;
		isCommerceStoreOpen(): boolean;
		setStoreEnabled(toggle: boolean): void;
		requestCommerceItemImage(index: number): boolean;
		releaseAllCommerceItemImages(): void;
		getCommerceItemTexturename(index: number): string;
		isStoreAvailableToUser(): boolean;
		cloudDeleteMemberFile(p0: string): number;
		cloudHasRequestCompleted(handle: number): boolean;
		cloudDidRequestSucceed(handle: number): boolean;
		cloudCheckAvailability(): void;
		cloudIsCheckingAvailability(): boolean;
		cloudGetAvailabilityCheckResult(): boolean;
		clearLaunchParams(): void;
		ugcCopyContent(): UgcCopyContentResult;
		ugcHasCreateFinished(): boolean;
		ugcGetCreateResult(): number;
		ugcGetCreateContentId(): number;
		ugcClearCreateResult(): void;
		ugcQueryMyContent(p0: number, p1: number, p3: number, p4: number, p5: number): number;
		ugcQueryByContentId(contentId: string, latestVersion: boolean, contentTypeName: string): boolean;
		ugcQueryByContentIds(count: number, latestVersion: boolean, contentTypeName: string): number;
		ugcQueryRecentlyCreatedContent(offset: number, count: number, contentTypeName: string, p3: number): boolean;
		ugcGetBookmarkedContent(p0: number, p1: number): UgcGetBookmarkedContentResult;
		ugcGetMyContent(p0: number, p1: number): UgcGetMyContentResult;
		ugcGetFriendContent(p0: number, p1: number): UgcGetFriendContentResult;
		ugcGetCrewContent(p0: number, p1: number, p2: number): UgcGetCrewContentResult;
		ugcGetGetByCategory(p0: number, p1: number, p2: number): UgcGetGetByCategoryResult;
		setBalanceAddMachine(contentId: string, contentTypeName: string): boolean;
		setBalanceAddMachines(dataCount: number, contentTypeName: string): number;
		ugcCancelQuery(): void;
		ugcIsGetting(): boolean;
		ugcHasGetFinished(): boolean;
		ugcDidGetSucceed(): number;
		ugcGetQueryResult(): number;
		ugcGetContentNum(): number;
		ugcGetContentTotal(): number;
		ugcGetContentHash(): number;
		ugcClearQueryResults(): void;
		ugcGetContentUserId(p0: number): string;
		ugcGetContentUserName(p0: number): number;
		ugcGetContentCategory(p0: number): number;
		ugcGetContentId(p0: number): string;
		ugcGetRootContentId(p0: number): string;
		ugcGetContentName(p0: number): number;
		ugcGetContentDescriptionHash(p0: number): number;
		ugcGetContentPath(p0: number, p1: number): string;
		ugcGetContentUpdatedDate(p0: number): number;
		ugcGetContentFileVersion(p0: number, p1: number): number;
		ugcGetContentLanguage(p0: number): number;
		ugcGetContentIsPublished(p0: number): boolean;
		ugcGetContentIsVerified(p0: number): boolean;
		ugcGetContentRating(p0: number, p1: number): number;
		ugcGetContentRatingCount(p0: number, p1: number): number;
		ugcGetContentRatingPositiveCount(p0: number, p1: number): number;
		ugcGetContentRatingNegativeCount(p0: number, p1: number): number;
		ugcGetContentHasPlayerRecord(p0: number): boolean;
		ugcGetContentHasPlayerBookmarked(p0: number): boolean;
		ugcRequestContentDataFromIndex(p0: number, p1: number): number;
		ugcRequestContentDataFromParams(contentTypeName: string, contentId: string, p2: number, p3: number, p4: number): number;
		ugcRequestCachedDescription(p0: number): number;
		ugcGetCachedDescription(p0: number, p1: number): number;
		ugcPublish(contentId: string, baseContentId: string, contentTypeName: string): boolean;
		ugcSetBookmarked(contentId: string, bookmarked: boolean, contentTypeName: string): boolean;
		ugcSetDeleted(p1: boolean): UgcSetDeletedResult;
		ugcHasModifyFinished(): boolean;
		ugcGetModifyResult(): number;
		ugcClearModifyResult(): void;
		ugcGetCreatorNum(): number;
		ugcPoliciesMakePrivate(p0: number): boolean;
		ugcClearOfflineQuery(): void;
		ugcSetQueryDataFromOffline(p0: boolean): void;
		ugcIsLanguageSupported(p0: number): boolean;
		facebookSetHeistComplete(heistName: string, cashEarned: number, xpEarned: number): boolean;
		facebookSetCreateCharacterComplete(): boolean;
		facebookSetMilestoneComplete(milestoneId: number): boolean;
		facebookIsSendingData(): boolean;
		facebookDoUnkCheck(): boolean;
		facebookIsAvailable(): boolean;
		textureDownloadRequest(FilePath: string, Name: string, p3: boolean): TextureDownloadRequestResult;
		titleTextureDownloadRequest(FilePath: string, Name: string, p2: boolean): number;
		ugcTextureDownloadRequest(p1: number, p2: number, p3: number, p5: boolean): UgcTextureDownloadRequestResult;
		textureDownloadRelease(p0: number): void;
		textureDownloadHasFailed(p0: number): boolean;
		textureDownloadGetName(p0: number): string;
		getStatusOfTextureDownload(p0: number): number;
		shouldShowConnectivityTroubleshooting(): boolean;
		isCableConnected(): boolean;
		getRosPrivilege9(): boolean;
		haveRosSocialClubPriv(): boolean;
		haveRosBannedPriv(): boolean;
		haveRosCreateTicketPriv(): boolean;
		haveRosMultiplayerPriv(): boolean;
		haveRosLeaderboardWritePriv(): boolean;
		hasRosPrivilege(index: number): boolean;
		hasRosPrivilegeEndDate(privilege: number): NetworkHasRosPrivilegeEndDateResult;
		getRosPrivilege24(): boolean;
		getRosPrivilege25(): boolean;
		startUserContentPermissionsCheck(): NetworkStartUserContentPermissionsCheckResult;
		hasGameBeenAltered(): boolean;
		updatePlayerScars(): void;
		disableLeaveRemotePedBehind(toggle: boolean): void;
		allowLocalEntityAttachment(entity: number, toggle: boolean): void;
		getNumUnackedForPlayer(player: number): number;
		getUnreliableResendCountForPlayer(player: number): number;
		getOldestResendCountForPlayer(player: number): number;
		reportMyself(): void;
		getPlayerCoords(player: number): shared.Vector3Mp;

		unk: GameNetworkUnk;
	}

	export interface GameNetworkUnk {
		_0xBD545D44CCE70597(): boolean;
		_0xEBCAB9E5048434F4(): number;
		_0x74FB3E29E6D10FA9(): number;
		_0x7808619F31FF22DB(): number;
		_0xA0FA4EC6A05DA44E(): number;
		_0x8D11E61A4ABF49CC(): boolean;
		_0x4237E822315D8BA9(): boolean;
		_0x78321BEA235FD8CD(p0: number, p1: boolean): boolean;
		_0x07EAB372C8841D99(p0: number, p1: number, p2: number): number;
		_0x906CA41A4B74ECA4(): number;
		_0x023ACAB2DC9DC4A4(): number;
		_0x0CF6CC51AA18F0F8(p0: number, p1: number, p2: number): number;
		_0x64E5C4CC82847B73(): boolean;
		_0x1F7BC3539F9E0224(): void;
		_0xA8ACB6459542A8C8(): number;
		_0x83FE8D7229593017(): void;
		_0x53C10C8BD774F2C9(): number;
		_0x283B6062A2C01E9B(): void;
		_0x8B4FFC790CA131EF(p0: number, p1: number, p2: number, p3: number): number;
		_0x04918A41BC9B8157(p0: number, p1: number, p2: number): number;
		_0xB9351A07A0D458B1(p0: number): number;
		_0x041C7F2A6C9894E6(p0: number, p1: number, p2: number): number;
		_0xCAE55F48D3D7875C(p0: number): void;
		_0xF49ABC20D8552257(p0: number): void;
		_0x4811BBAC21C5FCD5(p0: number): void;
		_0x5539C3EBF104A53A(p0: boolean): void;
		_0x702BC4D605522539(p0: number): void;
		_0x5ECD378EE64450AB(p0: number): void;
		_0x59D421683D31835A(p0: number): void;
		_0x1153FA02A659051C(): void;
		_0x600F8CB31C7AAB6E(p0: number): void;
		_0xF9B83B77929D8863(): number;
		_0x2CC848A861D01493(): number;
		_0x94A8394D150B013A(): number;
		_0x5AE17C6B0134B7F1(): number;
		_0xC42DD763159F3461(): boolean;
		_0xD313DE83394AF134(): boolean;
		_0xBDB6F89C729CF388(): boolean;
		_0xF814FEC6A19FD6E0(): void;
		_0x140E6A44870A11CE(): void;
		_0x4C9034162368E206(): number;
		_0xB5D3453C98456528(): number;
		_0x0E4F77F7B9D74D84(p0: number): void;
		_0x1888694923EF4591(): void;
		_0xB13E88E655E5A3BC(): void;
		_0x617F49C2668E6155(): number;
		_0x261E97AD7BCF3D40(p0: boolean): void;
		_0x39917E1B4CB0F911(p0: boolean): void;
		_0x2CE9D95E4051AECD(p0: number): void;
		_0xA2E9C1AB8A92E8CD(toggle: boolean): void;
		_0xC571D0E77D8BBC29(): boolean;
		_0x1398582B7F72B3ED(p0: number): void;
		_0x1F8E00FB18239600(p0: number): void;
		_0xF6F4383B7C92F11A(p0: number): void;
		_0x973D76AA760A6CB6(p0: boolean): void;
		_0x3F9990BF5F22759C(): number;
		_0x4A9FDE3A5A6D0437(toggle: boolean): void;
		_0x1171A97A3D3981B6(p2: number, p3: number): _0x1171A97A3D3981B6Result;
		_0x742B58F723233ED9(p0: number): number;
		_0xEBF8284D8CADEB53(): void;
		_0xF083835B70BA9BFE(): void;
		_0x71DC455F5CD1C2B1(): number;
		_0x3855FB5EB2C5E8B2(p0: number): number;
		_0x4AD490AE1536933B(p0: number, p1: number): number;
		_0x0D77A82DC2D0DA59(): _0x0D77A82DC2D0DA59Result;
		_0x2BF66D2E7414F686(): number;
		_0x14922ED3E38761F0(): boolean;
		_0x6CE50E47F5543D0C(): void;
		_0xFA2888E3833C8E96(): void;
		_0x25D990F8E0E3F13C(): void;
		_0xA12D3A5A3753CC23(): number;
		_0xF287F506767CC8A9(): number;
		_0xEA8C0DDB10E2822A(p0: number, p1: number): void;
		_0xD6D7478CA62B8D41(p0: number, p1: number): void;
		_0x560B423D73015E77(p0: number): number;
		_0x638A3A81733086DB(): number;
		_0x2302C0264EA58D31(): void;
		_0x741A3D8380319A81(): void;
		_0x2DA41ED6E1FCD7A5(p0: number, p1: number): number;
		_0xC434133D9BA52777(p0: number, p1: number): number;
		_0x83660B734994124D(p0: number, p1: number, p2: number): number;
		_0x7242F8B741CE1086(netId: number): boolean;
		_0xD66C9E72B3CC4982(p1: number): _0xD66C9E72B3CC4982Result;
		_0x37D5F739FD494675(p0: number): number;
		_0x4C2A9FDC22377075(): void;
		_0xB309EBEA797E001F(p0: number): number;
		_0x26F07DD83A5F7F98(): number;
		_0x7D395EA61622E116(p0: boolean): void;
		_0xCFEB46DCD7D8D5EB(p0: boolean): void;
		_0x265559DA40B3F327(p0: number): void;
		_0x4348BFDA56023A2F(p0: number, p1: number): number;
		_0x3C5C1E2C2FF814B1(toggle: boolean): void;
		_0x9D7AFCBF21C51712(toggle: boolean): void;
		_0x6A5D89D7769A40D8(toggle: boolean): void;
		_0x5E3AA4CA2B6FB0EE(p0: number): void;
		_0xCA575C391FEA25CC(p0: number): void;
		_0xADB57E5B663CCA8B(p0: number): _0xADB57E5B663CCA8BResult;
		_0x8EF52ACAECC51D9C(toggle: boolean): void;
		_0xBF22E0F32968E967(player: number, p1: boolean): void;
		_0x17C9E241111A674D(p0: number, p1: number): void;
		_0x2E4C123D1C8A710E(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
		_0x2B51EDBEFC301339(p0: number, p1: string): boolean;
		_0xC32EA7A2F6CA7557(): number;
		_0x9D724B400A7E8FFC(p0: number, p1: number): void;
		_0x0379DAF89BA09AA5(p0: number, p1: number): void;
		_0x32EBD154CB6B8B99(p0: number, p1: number, p2: number): void;
		_0x76B3F29D3F967692(p0: number, p1: number): void;
		_0x3FA36981311FA4FF(netId: number, state: boolean): void;
		_0xE16AA70CE9BEEDC3(p0: number): number;
		_0xE42D626EEC94E5D9(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		_0xBA7F0B77D80A4EB7(p0: number, p1: number): void;
		_0x0F1A4B45B7693B95(p0: number, p1: number): void;
		_0xFAC18E7356BD3210(): void;
		_0xA2A707979FE754DC(p0: number, p1: number): void;
		_0x838DA0936A24ED4D(p0: number, p1: number): void;
		_0x13F1FCB111B820B0(p0: boolean): void;
		_0xD7B6C73CAD419BCF(p0: boolean): void;
		_0x7EF7649B64D7FF10(entity: number): boolean;
		_0xA5EAFE473E45C442(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number
		): void;
		_0x45F35C0EDC33B03B(
			netScene: number,
			modelHash: number,
			x: number,
			y: number,
			z: number,
			p5: number,
			p6: string,
			p7: number,
			p8: number,
			flags: number
		): void;
		_0xC9B43A33D09CADA7(p0: number): void;
		_0x144DA052257AE7D8(p0: number): void;
		_0xFB1F9381E80FA13F(p0: number, p1: number): number;
		_0xFB680D403909DC70(p0: number, p1: number): void;
		_0xB37E4E6A2388CA7B(): boolean;
		_0x2B1C623823DB0D9D(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
		_0x4DF7CFFF471A7FB1(p0: number): boolean;
		_0xA6FCECCF4721D679(p0: number): void;
		_0x95BAF97C82464629(p0: number, p1: number): void;
		_0x7DB53B37A2F211A0(): number;
		_0x2E0BF682CC778D49(p0: number): boolean;
		_0x0EDE326D47CD0F3E(ped: number, player: number): boolean;
		_0x38B7C51AB1EDC7D8(entity: number, toggle: boolean): void;
		_0x3FC795691834481D(p0: number, p1: number): void;
		_0x2A5E0621DD815A9A(p0: number, p1: number, p2: number, p3: number): void;
		_0xCD71A4ECAB22709E(entity: number): void;
		_0xE6717E652B8C8D8A(p0: number, p1: number): void;
		_0x367EF5E2F439B4C6(p0: number): void;
		_0x94538037EE44F5CF(p0: boolean): void;
		_0xB606E6CC59664972(p0: number): void;
		_0x1D4DC17C38FEAFF0(): boolean;
		_0x265635150FB0D82E(): void;
		_0x444C4525ECE0A4B9(): void;
		_0x59328EB08C5CEB2B(): boolean;
		_0xFAE628F1E9ADB239(p0: number, p1: number, p2: number): void;
		_0x754615490A029508(): number;
		_0x155467ACA0F55705(): number;
		_0x8B0C2964BA471961(): number;
		_0x88B588B41FF7868E(): number;
		_0x67FC09BC554A75E5(): number;
		_0x9FEDF86898F100E9(): number;
		_0x24E4E51FC16305F9(): number;
		_0x692D58DF40657E8C(p0: number, p1: number, p2: number, p4: number, p5: boolean): number;
		_0xA7862BC5ED1DFD7E(p0: number, p1: number): _0xA7862BC5ED1DFD7EResult;
		_0x97A770BEEF227E2B(p0: number, p1: number): _0x97A770BEEF227E2BResult;
		_0x5324A0E3E4CE3570(p0: number, p1: number): _0x5324A0E3E4CE3570Result;
		_0xC87E740D9F3872CC(): number;
		_0x584770794D758C18(p0: number): number;
		_0x8C8D2739BA44AF0F(p0: number): boolean;
		_0xAEAB987727C5A8A4(p0: number): boolean;
		_0x1D610EB0FEA716D9(p0: number): boolean;
		_0x7FCC39C46C3C03BD(p0: number): boolean;
		_0x2D5DC831176D0114(p0: number): boolean;
		_0xEBFA8D50ADDC54C4(p0: number): boolean;
		_0x162C23CA83ED0A62(p0: number): boolean;
		_0x5A34CD9C3C5BEC44(p0: number): boolean;
		_0x68103E2247887242(): void;
		_0x45E816772E93A9DB(): number;
		_0x793FF272D5B365F4(): number;
		_0xB746D20B17F2A229(): _0xB746D20B17F2A229Result;
		_0x63B406D7884BFA95(): number;
		_0x4D02279C83BE69FE(): number;
		_0xFD75DABC0957BF33(p0: boolean): void;
		_0x60EDD13EB3AC1FF3(): boolean;
		_0x36391F397731595D(p0: number): number;
		_0x9465E683B12D3F6B(): void;
		_0xCA59CCAE5D01E4CE(): void;
		_0x6BFF5F84102DF80A(player: number): void;
		_0x5C497525F803486B(): void;
		_0x6FB7BB3607D27FA2(): number;
		_0x45A83257ED02D9BC(): void;
		_0x16D3D49902F697BB(player: number): boolean;
		_0xD414BE129BB81B32(player: number): number;
		_0x0E3A041ED6AC2B45(player: number): number;
		_0x350C23949E43686C(player: number): number;
		_0x64D779659BC37B19(entity: number): shared.Vector3Mp;
		_0x33DE49EDF4DDE77A(entity: number): shared.Vector3Mp;
		_0xAA5FAFCD2C5F5E47(entity: number): shared.Vector3Mp;
		_0xAEDF1BC1C133D6E3(): number;
		_0x2555CF7DA5473794(): number;
		_0x6FD992C4A1C1B986(): number;
		_0xDB663CC9FF3407A9(player: number): number;
	}

	export interface _0xB746D20B17F2A229Result {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface _0xA7862BC5ED1DFD7EResult {
		p2: number;
		p3: number;
		result: boolean;
	}

	export interface _0x97A770BEEF227E2BResult {
		p2: number;
		p3: number;
		result: boolean;
	}

	export interface _0x5324A0E3E4CE3570Result {
		p2: number;
		p3: number;
		result: boolean;
	}

	export interface _0xADB57E5B663CCA8BResult {
		p1: number;
		p2: number;
	}

	export interface _0xD66C9E72B3CC4982Result {
		p0: number;
		result: number;
	}

	export interface _0x0D77A82DC2D0DA59Result {
		p0: number;
		p1: number;
	}

	export interface _0x1171A97A3D3981B6Result {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface NetworkHasRosPrivilegeEndDateResult {
		banType: number;
		timeData: number;
		result: boolean;
	}

	export interface NetworkStartUserContentPermissionsCheckResult {
		netHandle: number;
		result: number;
	}

	export interface TextureDownloadRequestResult {
		PlayerHandle: number;
		result: number;
	}

	export interface UgcTextureDownloadRequestResult {
		p0: number;
		p4: number;
		result: number;
	}

	export interface UgcCopyContentResult {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface UgcGetBookmarkedContentResult {
		p2: number;
		p3: number;
		result: boolean;
	}

	export interface UgcGetMyContentResult {
		p2: number;
		p3: number;
		result: boolean;
	}

	export interface UgcGetFriendContentResult {
		p2: number;
		p3: number;
		result: boolean;
	}

	export interface UgcGetCrewContentResult {
		p3: number;
		p4: number;
		result: boolean;
	}

	export interface UgcGetGetByCategoryResult {
		p3: number;
		p4: number;
		result: boolean;
	}

	export interface UgcSetDeletedResult {
		p0: number;
		p2: number;
		result: boolean;
	}

	export interface NetworkQueryRespawnResultsResult {
		p0: number;
		result: number;
	}

	export interface NetworkGetRespawnResultResult {
		coordinates: shared.Vector3Mp;
		heading: number;
	}

	export interface NetworkClanPlayerGetDescResult {
		clanDesc: number;
		networkHandle: number;
		result: boolean;
	}

	export interface NetworkClanGetUiFormattedTagResult {
		clanDesc: number;
	}

	export interface NetworkClanGetMembershipCountResult {
		p0: number;
		result: number;
	}

	export interface NetworkClanGetMembershipResult {
		p0: number;
		clanMembership: number;
		result: boolean;
	}

	export interface NetworkClanGetEmblemTxdNameResult {
		netHandle: number;
		result: boolean;
	}

	export interface NetworkGetPrimaryClanDataNewResult {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface NetworkQueryRespawnResultsResult {
		p0: number;
		result: number;
	}

	export interface NetworkGetRespawnResultResult {
		coordinates: shared.Vector3Mp;
		heading: number;
	}

	export interface NetworkGetPlatformPartyMembersResult {
		data: number;
		result: number;
	}

	export interface NetworkGetNumScriptParticipantsResult {
		p0: number;
		result: number;
	}

	export interface NetworkGetDestroyerOfNetworkIdResult {
		weaponHash: number;
		result: number;
	}

	export interface NetworkGetEntityKillerOfPlayerResult {
		weaponHash: number;
		result: number;
	}

	export interface NetworkHashFromGamerHandleResult {
		networkHandle: number;
		result: number;
	}

	export interface NetworkGetGamertagFromHandleResult {
		networkHandle: number;
		result: string;
	}

	export interface NetworkAreHandlesTheSameResult {
		netHandle1: number;
		netHandle2: number;
		result: boolean;
	}

	export interface NetworkGetPlayerFromGamerHandleResult {
		networkHandle: number;
		result: number;
	}

	export interface NetworkMemberIdFromGamerHandleResult {
		networkHandle: number;
		result: string;
	}

	export interface NetworkPlayerGetUseridResult {
		userID: number;
		result: string;
	}
	export interface NetworkClanPlayerGetDescResult {
		clanDesc: number;
		networkHandle: number;
		result: boolean;
	}

	export interface NetworkClanGetUiFormattedTagResult {
		clanDesc: number;
	}

	export interface NetworkClanGetMembershipCountResult {
		p0: number;
		result: number;
	}

	export interface NetworkClanGetMembershipResult {
		p0: number;
		clanMembership: number;
		result: boolean;
	}
	export interface NetworkClanGetEmblemTxdNameResult {
		netHandle: number;
		result: boolean;
	}

	export interface NetworkGetPrimaryClanDataNewResult {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface NetworkQueryRespawnResultsResult {
		p0: number;
		result: number;
	}

	export interface NetworkGetRespawnResultResult {
		coordinates: shared.Vector3Mp;
		heading: number;
	}

	export interface FilloutPmPlayerListWithNamesResult {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface NetworkGetPlatformPartyMembersResult {
		data: number;
		result: number;
	}

	export interface NetworkGetNumScriptParticipantsResult {
		p0: number;
		result: number;
	}

	export interface NetworkGetDestroyerOfNetworkIdResult {
		weaponHash: number;
		result: number;
	}

	export interface NetworkGetEntityKillerOfPlayerResult {
		weaponHash: number;
		result: number;
	}

	export interface NetworkHashFromGamerHandleResult {
		networkHandle: number;
		result: number;
	}

	export interface NetworkGetGamertagFromHandleResult {
		networkHandle: number;
		result: string;
	}
	export interface NetworkAreHandlesTheSameResult {
		netHandle1: number;
		netHandle2: number;
		result: boolean;
	}

	export interface NetworkGetPlayerFromGamerHandleResult {
		networkHandle: number;
		result: number;
	}

	export interface NetworkMemberIdFromGamerHandleResult {
		networkHandle: number;
		result: string;
	}

	export interface NetworkPlayerGetUseridResult {
		userID: number;
		result: string;
	}

	export interface NetworkGetGlobalMultiplayerClockResult {
		hours: number;
		minutes: number;
		seconds: number;
	}

	export interface NetworkDoTransitionToNewFreemodeResult {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface NetworkGetTransitionMembersResult {
		data: number;
		result: number;
	}

	export interface NetworkSendInviteViaPresenceResult {
		networkHandle: number;
		p1: number;
		result: boolean;
	}

	export interface NetworkSendPresenceTransitionInviteResult {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface NetworkInviteGamersResult {
		p0: number;
		p2: number;
		p3: number;
		result: boolean;
	}

	export interface GameObjectLegacy {
		createObject(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;
		createObjectNoOffset(
			modelHash: number,
			x: number,
			y: number,
			z: number,
			isNetwork: boolean,
			bScriptHostObj: boolean,
			dynamic: boolean
		): number;
		deleteObject(object: number): number;
		getClosestObjectOfType(
			x: number,
			y: number,
			z: number,
			radius: number,
			modelHash: number,
			isMission: boolean,
			p6: boolean,
			p7: boolean
		): number;
		hasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: number, p5: number): boolean;
		getObjectOffsetFromCoords(
			xPos: number,
			yPos: number,
			zPos: number,
			heading: number,
			xOffset: number,
			yOffset: number,
			zOffset: number
		): shared.Vector3Mp;
		setDoorAccelerationLimit(doorHash: number, state: number, requestDoor: boolean, forceUpdate: boolean): void;
		setDoorAjarAngle(doorHash: number, ajar: number, requestDoor: boolean, forceUpdate: boolean): void;
		doesDoorExist(doorHash: number): boolean;
		doesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: number, p5: boolean): boolean;
		getObjectFragmentDamageHealth(p0: number, p1: boolean): number;
		isAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;
		isObjectNearPoint(objectHash: number, x: number, y: number, z: number, range: number): boolean;
		trackObjectVisibility(object: number): void;
		doesPickupObjectExist(pickupObject: number): boolean;
		isPickupWithinRadius(pickupHash: number, x: number, y: number, z: number, radius: number): boolean;
		setTeamPickupObject(object: number, p1: number, p2: boolean): void;
		highlightPlacementCoords(x: number, y: number, z: number, colorIndex: number): void;
		setForceObjectThisFrame(x: number, y: number, z: number, p3: number): void;
	}

	interface GameObject extends GameObjectLegacy {
		create(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;
		createNoOffset(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;
		delete(object: number): number;
		placeOnGroundProperly(object: number): boolean;
		placeOnGroundProperly2(object: number): boolean;
		slide(object: number, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;
		setTargettable(object: number, targettable: boolean): void;
		setSomething(object: number, p1: boolean): void;
		getClosestOfType(x: number, y: number, z: number, radius: number, modelHash: number, isMission: boolean, p6: boolean, p7: boolean): number;
		hasBeenBroken(object: number, p1: number): boolean;
		hasClosestOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: number, p5: number): boolean;
		hasClosestOfTypeBeenCompletelyDestroyed(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): boolean;
		getOffsetFromCoords(
			xPos: number,
			yPos: number,
			zPos: number,
			heading: number,
			xOffset: number,
			yOffset: number,
			zOffset: number
		): shared.Vector3Mp;
		getCoordsAndRotationOfClosestOfType(
			x: number,
			y: number,
			z: number,
			radius: number,
			modelHash: number,
			rotationOrder: number
		): GetCoordsAndRotationOfClosestObjectOfTypeResult;
		setStateOfClosestDoorOfType(type: number, x: number, y: number, z: number, locked: boolean, heading: number, p6: boolean): void;
		getStateOfClosestDoorOfType(type: number, x: number, y: number, z: number): GetStateOfClosestDoorOfTypeResult;
		doorControl(modelHash: number, x: number, y: number, z: number, locked: boolean, xRotMult: number, yRotMult: number, zRotMult: number): void;
		addDoorToSystem(
			doorHash: number,
			modelHash: number,
			x: number,
			y: number,
			z: number,
			p5: boolean,
			scriptDoor: boolean,
			isLocal: boolean
		): void;
		removeDoorFromSystem(doorHash: number): void;
		doorSystemSetDoorState(doorHash: number, state: number, requestDoor: boolean, forceUpdate: boolean): void;
		doorSystemGetDoorState(doorHash: number): number;
		doorSystemGetDoorPendingState(doorHash: number): number;
		doorSystemSetAutomaticRate(doorHash: number, rate: number, requestDoor: boolean, forceUpdate: boolean): void;
		doorSystemSetAutomaticDistance(doorHash: number, distance: number, requestDoor: boolean, forceUpdate: boolean): void;
		doorSystemSetOpenRatio(doorHash: number, ajar: number, requestDoor: boolean, forceUpdate: boolean): void;
		doorSystemGetOpenRatio(doorHash: number): number;
		doorSystemSetSpringRemoved(doorHash: number, removed: boolean, requestDoor: boolean, forceUpdate: boolean): void;
		doorSystemSetHoldOpen(doorHash: number, toggle: boolean): void;
		isDoorRegisteredWithSystem(doorHash: number): boolean;
		isDoorClosed(doorHash: number): boolean;
		doorSystemGetIsPhysicsLoaded(p0: number): boolean;
		doorSystemFindExistingDoor(x: number, y: number, z: number, modelHash: number): number;
		isGarageEmpty(garageHash: number, p1: boolean, p2: number): boolean;
		isPlayerEntirelyInsideGarage(garageHash: number, player: number, p2: number, p3: number): boolean;
		isPlayerPartiallyInsideGarage(garageHash: number, player: number, p2: number): boolean;
		areEntitiesEntirelyInsideGarage(garageHash: number, p1: boolean, p2: boolean, p3: boolean, p4: number): boolean;
		isAnyEntityEntirelyInsideGarage(garageHash: number, p1: boolean, p2: boolean, p3: boolean, p4: number): boolean;
		isEntirelyInsideGarage(garageHash: number, entity: number, p2: number, p3: number): boolean;
		isPartiallyInsideGarage(garageHash: number, entity: number, p2: number): boolean;
		clearGarageArea(garageHash: number, isNetwork: boolean): void;
		enableSavingInGarage(garageHash: number, toggle: boolean): void;
		doesOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: number, p5: boolean): boolean;
		isPointInAngledArea(
			xPos: number,
			yPos: number,
			zPos: number,
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			width: number,
			debug: boolean,
			includeZ: boolean
		): boolean;
		setAllowLowLodBuoyancy(object: number, toggle: boolean): void;
		setPhysicsParams(
			object: number,
			weight: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			gravity: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number,
			buoyancy: number
		): void;
		getFragmentDamageHealth(p0: number, p1: boolean): number;
		setActivatePhysicsAsSoonAsItIsUnfrozen(object: number, toggle: boolean): void;
		isAnyNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;
		isNearPoint(objectHash: number, x: number, y: number, z: number, range: number): boolean;
		removeHighDetailModel(object: number): void;
		breakFragmentChild(p0: number, p1: number, p2: boolean): void;
		trackVisibility(object: number): void;
		isVisible(object: number): boolean;
		setUnkGlobalBoolRelatedToDamage(value: boolean): void;
		setCreateWeaponLightSource(object: number, toggle: boolean): void;
		getRayfireMap(x: number, y: number, z: number, radius: number, name: string): number;
		setStateOfRayfireMap(object: number, state: number): void;
		getStateOfRayfireMap(object: number): number;
		doesRayfireMapExist(object: number): boolean;
		getRayfireMapAnimPhase(object: number): number;
		createPickup(pickupHash: number, posX: number, posY: number, posZ: number, p4: number, value: number, p6: boolean, modelHash: number): number;
		createPickupRotate(
			pickupHash: number,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			flag: number,
			amount: number,
			p9: number,
			p10: boolean,
			modelHash: number
		): number;
		createAmbientPickup(
			pickupHash: number,
			posX: number,
			posY: number,
			posZ: number,
			flags: number,
			value: number,
			modelHash: number,
			p7: boolean,
			p8: boolean
		): number;
		createPortablePickup(pickupHash: number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: number): number;
		createPortablePickup2(pickupHash: number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: number): number;
		attachPortablePickupToPed(pickupObject: number, ped: number): void;
		detachPortablePickupFromPed(pickupObject: number): void;
		hidePickup(pickupObject: number, toggle: boolean): void;
		setMaxNumPortablePickupsCarriedByPlayer(modelHash: number, p1: number): void;
		setLocalPlayerCanCollectPortablePickups(p0: boolean): void;
		getSafePickupCoords(x: number, y: number, z: number, p3: number, p4: number): shared.Vector3Mp;
		getPickupCoords(pickup: number): shared.Vector3Mp;
		removeAllPickupsOfType(pickupHash: number): void;
		hasPickupBeenCollected(pickup: number): boolean;
		removePickup(pickup: number): void;
		createMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: number): void;
		doesPickupExist(pickup: number): boolean;
		doesPickupExist(pickupObject: number): boolean;
		getPickup(pickup: number): number;
		isAPortablePickup(object: number): boolean;
		isAPickup(object: number): boolean;
		doesPickupOfTypeExistInArea(pickupHash: number, x: number, y: number, z: number, radius: number): boolean;
		setPickupRegenerationTime(pickup: number, duration: number): void;
		forcePickupRegenerate(p0: number): void;
		toggleUsePickupsForPlayer(player: number, pickupHash: number, toggle: boolean): void;
		setLocalPlayerCanUsePickupsWithThisModel(modelHash: number, toggle: boolean): void;
		setTeamPickup(object: number, p1: number, p2: boolean): void;
		preventCollectionOfPortablePickup(object: number, p1: boolean, p2: boolean): void;
		setPickupGenerationRangeMultiplier(multiplier: number): void;
		getPickupGenerationRangeMultiplier(): number;
		setPickupUncollectable(p0: number, p1: number): void;
		setPickupHiddenWhenUncollectable(p0: number, p1: number): void;
		renderFakePickupGlow(x: number, y: number, z: number, colorIndex: number): void;
		getWeaponTypeFromPickupType(pickupHash: number): number;
		getPickupHashFromWeapon(weaponHash: number): number;
		isPickupWeaponValid(object: number): boolean;
		getTextureVariation(object: number): number;
		setTextureVariation(object: number, textureVariation: number): void;
		setTextureVariationOfClosestOfType(x: number, y: number, z: number, radius: number, modelHash: number, textureVariation: number): boolean;
		setLightColor(object: number, p1: boolean, r: number, g: number, b: number): number;
		setStuntPropSpeedup(object: number, p1: number): void;
		setStuntPropDuration(object: number, duration: number): void;
		getPickupHash(pickupHash: number): number;
		setForceThisFrame(x: number, y: number, z: number, p3: number): void;
		markForDeletion(object: number): void;
		setEnableArenaPropPhysics(object: number, toggle: boolean, p2: number): void;
		setEnableArenaPropPhysicsOnPed(object: number, toggle: boolean, p2: number, ped: number): void;
		getIsArenaPropPhysicsDisabled(object: number, p1: number): boolean;

		unk: GameObjectUnk;
	}

	export interface GameObjectUnk {
		_0xAFE24E4D29249E4A(object: number, p1: number, p2: number, p3: boolean): boolean;
		_0x2542269291C6AC84(p0: number): number;
		_0x006E4B040ED37EC3(p0: number): void;
		_0xE851471AEFC3374F(p0: number): number;
		_0xA85A21582451E951(doorHash: number, p1: boolean): void;
		_0xC7F29CA00F46350E(p0: boolean): void;
		_0x701FDA1E82076BA4(): void;
		_0x190428512B240692(garageHash: number, vehicles: boolean, peds: boolean, objects: boolean, isNetwork: boolean): void;
		_0x659F9D71F52843F8(id: number, toggle: boolean): void;
		_0x66A49D021870FE88(): void;
		_0xE05F6AEEFEB0BB02(p0: number, p1: number, p2: number): void;
		_0xF9C1681347C8BD15(object: number): void;
		_0xC6033D32241F6FB5(object: number, toggle: boolean): void;
		_0xEB6F1A9B5510A5D2(p0: number, p1: boolean): void;
		_0x394CD08E31313C28(): void;
		_0x826D1EE4D1CAFC78(p0: number, p1: number): void;
		_0x1E3F1B1B891A2AAA(p0: number, p1: number): void;
		_0xD4A7A435B3710D05(x: number, y: number, z: number, radius: number): void;
		_0xB7C6D80FB371659A(): void;
		_0x8DCA505A5C196F05(p0: number, p1: number): void;
		_0xFDC07C58E8AAB715(pickupHash: number): void;
		_0x0596843B34B95CE5(p0: number, p1: number): void;
		_0xA08FE5E49BDC39DD(p0: number, p1: number, p2: boolean): void;
		_0x62454A641B41F3C5(p0: number): void;
		_0x39A5FB7EAF150840(p0: number, p1: number): void;
		_0xDB41D07A45A6D4B7(p0: number): number;
		_0x31F924B53EADDF65(p0: boolean): void;
		_0x858EC9FD25DE04AA(p0: number, p1: number): void;
		_0x8881C98A31117998(p0: number, p1: number): void;
		_0x8CFF648FBD7330F1(p0: number): void;
		_0x46F3ADD1E2D5BAF2(p0: number, p1: number): void;
		_0x641F272B52E2F0F8(p0: number, p1: number): void;
		_0x4C134B4DF76025D0(pickup: number, toggle: boolean): void;
		_0xAA059C615DE9DD03(pickup: number, toggle: boolean): void;
		_0xF92099527DB8E2A7(p0: number, p1: number): void;
		_0xA2C1F5E92AFE49ED(): void;
		_0x762DB2D380B48D04(p0: number): void;
		_0x7813E8B8C4AE4799(pickup: number): void;
		_0xBFFE53AE7E67FCDC(pickup: number, toggle: boolean): void;
		_0xD05A3241B9A86F19(entity: number, toggle: boolean): void;
		_0xB2D0BDE54F0E8E5A(object: number, toggle: boolean): void;
		_0x31574B1B41268673(p0: number, p1: number): void;
		_0xADF084FB8F075D06(object: number): boolean;
		_0x3B2FD68DB5F8331C(object: number, toggle: boolean): void;
		_0x8CAAB2BD3EA58BD4(p0: number): void;
		_0x63ECF581BC70E363(p0: number, p1: number): void;
		_0x734E1714D077DA9A(object: number, toggle: boolean): void;
		_0x1A6CBB06E2D0D79D(object: number, p1: boolean): void;
		_0x3BD770D281982DB5(p0: number, p1: number): number;
		_0x1C57C94A6446492A(object: number, toggle: boolean): void;
		_0xB5B7742424BD4445(object: number, toggle: boolean): void;
	}

	export interface GetCoordsAndRotationOfClosestObjectOfTypeResult {
		outPosition: shared.Vector3Mp;
		outRotation: shared.Vector3Mp;
		result: number;
	}

	export interface GetStateOfClosestDoorOfTypeResult {
		locked: boolean;
		heading: number;
	}

	export interface GamePathfindLegacy {
		getSupportsGpsRouteFlag(nodeID: number): boolean;
		getIsSlowRoadFlag(nodeID: number): boolean;
	}

	export interface GamePathfind extends GamePathfindLegacy {
		setRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, nodeEnabled: boolean, unknown2: boolean): void;
		setRoadsInAngledArea(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			width: number,
			unknown1: boolean,
			unknown2: boolean,
			unknown3: boolean
		): void;
		setPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: boolean, p7: number): void;
		getSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, flags: number): shared.Vector3Mp;
		getClosestVehicleNode(x: number, y: number, z: number, nodeType: number, p5: number, p6: number): shared.Vector3Mp;
		getClosestMajorVehicleNode(x: number, y: number, z: number, unknown1: number, unknown2: number): shared.Vector3Mp;
		getClosestVehicleNodeWithHeading(
			x: number,
			y: number,
			z: number,
			nodeType: number,
			p6: number,
			p7: number
		): GetClosestVehicleNodeWithHeadingResult;
		getNthClosestVehicleNode(
			x: number,
			y: number,
			z: number,
			nthClosest: number,
			unknown1: number,
			unknown2: number,
			unknown3: number
		): shared.Vector3Mp;
		getNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): number;
		getNthClosestVehicleNodeWithHeading(
			x: number,
			y: number,
			z: number,
			nthClosest: number,
			unknown2: number,
			unknown3: number,
			unknown4: number
		): GetNthClosestVehicleNodeWithHeadingResult;
		getNthClosestVehicleNodeIdWithHeading(
			x: number,
			y: number,
			z: number,
			nthClosest: number,
			p6: number,
			p7: number,
			p8: number
		): GetNthClosestVehicleNodeIdWithHeadingResult;
		getNthClosestVehicleNodeFavourDirection(
			x: number,
			y: number,
			z: number,
			desiredX: number,
			desiredY: number,
			desiredZ: number,
			nthClosest: number,
			nodetype: number,
			p10: number,
			p11: number
		): GetNthClosestVehicleNodeFavourDirectionResult;
		getVehicleNodeProperties(x: number, y: number, z: number): GetVehicleNodePropertiesResult;
		isVehicleNodeIdValid(vehicleNodeId: number): boolean;
		getVehicleNodePosition(nodeId: number): shared.Vector3Mp;
		getVehicleNodeIsGpsAllowed(nodeID: number): boolean;
		getVehicleNodeIsSwitchedOff(nodeID: number): boolean;
		getClosestRoad(x: number, y: number, z: number, p3: number, p4: number, p10: boolean): GetClosestRoadResult;
		setAllPathsCacheBoundingstruct(toggle: boolean): void;
		setAiGlobalPathNodesType(type: number): void;
		areNodesLoadedForArea(x1: number, y1: number, x2: number, y2: number): boolean;
		requestPathsPreferAccurateBoundingstruct(x1: number, y1: number, x2: number, y2: number): boolean;
		setRoadsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		setRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, p7: number): void;
		setAmbientPedRangeMultiplierThisFrame(multiplier: number): void;
		setPedPathsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		getRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean): GetRandomVehicleNodeResult;
		getStreetNameAtCoord(x: number, y: number, z: number): GetStreetNameAtCoordResult;
		generateDirectionsToCoord(x: number, y: number, z: number, p3: boolean): GenerateDirectionsToCoordResult;
		setIgnoreNoGpsFlag(toggle: boolean): void;
		setIgnoreSecondaryRouteNodes(toggle: boolean): void;
		setGpsDisabledZone(x1: number, y1: number, z1: number, x2: number, y2: number, z3: number): void;
		getGpsBlipRouteLength(): number;
		getGpsBlipRouteFound(): boolean;
		getRoadSidePointWithHeading(x: number, y: number, z: number, heading: number): shared.Vector3Mp;
		getPointOnRoadSide(x: number, y: number, z: number, p3: number): shared.Vector3Mp;
		isPointOnRoad(x: number, y: number, z: number, vehicle: number): boolean;
		getNextGpsDisabledZoneIndex(): number;
		setGpsDisabledZoneAtIndex(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, index: number): void;
		clearGpsDisabledZoneAtIndex(index: number): void;
		addNavmeshRequiredRegion(x: number, y: number, radius: number): void;
		removeNavmeshRequiredRegions(): void;
		isNavmeshRequiredRegionOwnedByAnyThread(): boolean;
		disableNavmeshInArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		areAllNavmeshRegionsLoaded(): boolean;
		isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
		addNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: number): number;
		updateNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;
		removeNavmeshBlockingObject(p0: number): void;
		doesNavmeshBlockingObjectExist(p0: number): boolean;
		getHeightmapTopZForPosition(x: number, y: number): number;
		getHeightmapTopZForArea(x1: number, y1: number, x2: number, y2: number): number;
		getHeightmapBottomZForPosition(x: number, y: number): number;
		getHeightmapBottomZForArea(x1: number, y1: number, x2: number, y2: number): number;
		calculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

		unk: GamePathfindUnk;
	}

	export interface GamePathfindUnk {
		_0xAA76052DDA9BFC3E(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		_0xF3162836C28F9DA5(p0: number, p1: number, p2: number, p3: number): number;
		_0x01708E8DD3FF8C65(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;
	}

	export interface GetNthClosestVehicleNodeWithHeadingResult {
		outPosition: shared.Vector3Mp;
		outHeading: number;
		unknown1: number;
		result: boolean;
	}

	export interface GetNthClosestVehicleNodeIdWithHeadingResult {
		outPosition: shared.Vector3Mp;
		outHeading: number;
		result: number;
	}

	export interface GetNthClosestVehicleNodeFavourDirectionResult {
		outPosition: shared.Vector3Mp;
		outHeading: number;
		result: boolean;
	}

	export interface GetVehicleNodePropertiesResult {
		density: number;
		flags: number;
		result: boolean;
	}

	export interface GetClosestRoadResult {
		p5: shared.Vector3Mp;
		p6: shared.Vector3Mp;
		p7: number;
		p8: number;
		p9: number;
		result: number;
	}

	export interface GetRandomVehicleNodeResult {
		outPosition: shared.Vector3Mp;
		nodeId: number;
		result: boolean;
	}

	export interface GetStreetNameAtCoordResult {
		streetName: number;
		crossingRoad: number;
	}

	export interface GenerateDirectionsToCoordResult {
		direction: number;
		p5: number;
		distToNxJunction: number;
		result: number;
	}

	export interface GetGroupSizeResult {
		unknown: number;
		sizeInMembers: number;
	}

	export interface GetClosestVehicleNodeWithHeadingResult {
		outPosition: shared.Vector3Mp;
		outHeading: number;
		result: boolean;
	}

	export interface GamePedLegacy {
		createPed(
			pedType: number,
			modelHash: number,
			x: number,
			y: number,
			z: number,
			heading: number,
			isNetwork: boolean,
			bScriptHostPed: boolean
		): number;
		isAnyPedShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): boolean;
		canCreateRandomPed(unk: boolean): boolean;
		createRandomPed(posX: number, posY: number, posZ: number): number;
		setPedDensityMultiplierThisFrame(multiplier: number): void;
		setScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;
		setPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
		setPedReserveParachuteTintIndex(ped: number, p1: number): void;
		isPedRespondingToEvent(ped: number, event: number): boolean;
		setExclusivePhoneRelationships(ped: number): number;
		getPedAsGroupMember(groupID: number, memberNumber: number): number;
		getPedAsGroupLeader(groupID: number): number;
		setPedAlternateWalkAnim(ped: number, animDict: string, animName: string, p3: number, p4: boolean): void;
		clearPedAlternateWalkAnim(ped: number, p1: number): void;
		getNumHeadOverlayValues(overlayID: number): number;
		isAValidHairColor(colorID: number): boolean;
		isAValidLipstickColor(colorID: number): boolean;
		isAValidBlushColor(colorID: number): boolean;
		getFirstParentIdForPedType(type: number): number;
		getRandomPedAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: number): number;
		getClosestPed(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p7: boolean, p8: boolean, pedType: number): number;
		setPedToRagdoll(ped: number, time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): boolean;
		setPedToRagdollWithFall(
			ped: number,
			time: number,
			p2: number,
			ragdollType: number,
			x: number,
			y: number,
			z: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number,
			p12: number,
			p13: number
		): boolean;
		getTattooZone(collection: number, overlay: number): number;
		isAnyPedNearPoint(x: number, y: number, z: number, radius: number): boolean;
		hasPedReceivedEvent(ped: number, eventId: number): boolean;
		setSynchronizedSceneLooped(sceneID: number, toggle: boolean): void;
		isSynchronizedSceneLooped(sceneID: number): boolean;
		isPedheadshotValid(id: number): boolean;
		isPedheadshotReady(id: number): boolean;
		getPedheadshotTxdString(id: number): string;
	}

	export interface GamePed extends GamePedLegacy {
		create(
			pedType: number,
			modelHash: number,
			x: number,
			y: number,
			z: number,
			heading: number,
			isNetwork: boolean,
			bScriptHostPed: boolean
		): number;
		delete(ped: number): number;
		clone(ped: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number;
		cloneEx(ped: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean, p4: number): number;
		cloneToTarget(ped: number, targetPed: number): void;
		cloneToTargetEx(ped: number, targetPed: number, p2: number): void;
		isInVehicle(ped: number, vehicle: number, atGetIn: boolean): boolean;
		isInModel(ped: number, modelHash: number): boolean;
		isInAnyVehicle(ped: number, atGetIn: boolean): boolean;
		isCopInArea3D(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
		isInjured(ped: number): boolean;
		isHurt(ped: number): boolean;
		isFatallyInjured(ped: number): boolean;
		isDeadOrDying(ped: number, p1: boolean): boolean;
		isConversationDead(ped: number): boolean;
		isAimingFromCover(ped: number): boolean;
		isReloading(ped: number): boolean;
		isAPlayer(ped: number): boolean;
		createInsideVehicle(vehicle: number, pedType: number, modelHash: number, seat: number, isNetwork: boolean, bScriptHostPed: boolean): number;
		setDesiredHeading(ped: number, heading: number): void;
		freezeCameraRotation(ped: number): void;
		isFacingPed(ped: number, otherPed: number, angle: number): boolean;
		isInMeleeCombat(ped: number): boolean;
		isStopped(ped: number): boolean;
		isShootingInArea(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean): boolean;
		isAnyShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): boolean;
		isShooting(ped: number): boolean;
		setAccuracy(ped: number, accuracy: number): void;
		getAccuracy(ped: number): number;
		isModel(ped: number, modelHash: number): boolean;
		explodeHead(ped: number, weaponHash: number): void;
		removeElegantly(): number;
		addArmourTo(ped: number, amount: number): void;
		setArmour(ped: number, amount: number): void;
		setIntoVehicle(ped: number, vehicle: number, seatIndex: number): void;
		setAllowVehiclesOverride(ped: number, toggle: boolean): void;
		canCreateRandom(unk: boolean): boolean;
		createRandom(posX: number, posY: number, posZ: number): number;
		createRandomAsDriver(vehicle: number, returnHandle: boolean): number;
		canCreateRandomDriver(): boolean;
		canCreateRandomBikeRider(): boolean;
		setMoveAnimsBlendOut(ped: number): void;
		setCanBeDraggedOut(ped: number, toggle: boolean): void;
		isMale(ped: number): boolean;
		isHuman(ped: number): boolean;
		getVehicleIsIn(ped: number, includeLastVehicle: boolean): number;
		resetLastVehicle(ped: number): void;
		setDensityMultiplierThisFrame(multiplier: number): void;
		setScenarioDensityMultiplierThisFrame(p0: number, p1: number): void;
		setScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;
		setNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
		clearNonCreationArea(): void;
		instantlyFillPopulation(): void;
		isOnMount(ped: number): boolean;
		getMount(ped: number): number;
		isOnVehicle(ped: number): boolean;
		isOnSpecificVehicle(ped: number, vehicle: number): boolean;
		setMoney(ped: number, amount: number): void;
		getMoney(ped: number): number;
		setAmbientPedsDropMoney(p0: boolean): void;
		setSuffersCriticalHits(ped: number, toggle: boolean): void;
		isSittingInVehicle(ped: number, vehicle: number): boolean;
		isSittingInAnyVehicle(ped: number): boolean;
		isOnFoot(ped: number): boolean;
		isOnAnyBike(ped: number): boolean;
		isPlantingBomb(ped: number): boolean;
		getDeadPickupCoords(ped: number, p1: number, p2: number): shared.Vector3Mp;
		isInAnyBoat(ped: number): boolean;
		isInAnySub(ped: number): boolean;
		isInAnyHeli(ped: number): boolean;
		isInAnyPlane(ped: number): boolean;
		isInFlyingVehicle(ped: number): boolean;
		setDiesInWater(ped: number, toggle: boolean): void;
		setDiesInSinkingVehicle(ped: number, toggle: boolean): void;
		getArmour(ped: number): number;
		setStayInVehicleWhenJacked(ped: number, toggle: boolean): void;
		setCanBeShotInVehicle(ped: number, toggle: boolean): void;
		getLastDamageBone(ped: number): number;
		clearLastDamageBone(ped: number): void;
		setAiWeaponDamageModifier(value: number): void;
		resetAiWeaponDamageModifier(): void;
		setAiMeleeWeaponDamageModifier(modifier: number): void;
		resetAiMeleeWeaponDamageModifier(): void;
		setCanBeTargetted(ped: number, toggle: boolean): void;
		setCanBeTargettedByTeam(ped: number, team: number, toggle: boolean): void;
		setCanBeTargettedByPlayer(ped: number, player: number, toggle: boolean): void;
		isInAnyPoliceVehicle(ped: number): boolean;
		forceToOpenParachute(ped: number): void;
		isInParachuteFreeFall(ped: number): boolean;
		isFalling(ped: number): boolean;
		isJumping(ped: number): boolean;
		isClimbing(ped: number): boolean;
		isVaulting(ped: number): boolean;
		isDiving(ped: number): boolean;
		isJumpingOutOfVehicle(ped: number): boolean;
		isOpeningADoor(ped: number): boolean;
		getParachuteState(ped: number): number;
		getParachuteLandingType(ped: number): number;
		setParachuteTintIndex(ped: number, tintIndex: number): void;
		getParachuteTintIndex(ped: number): number;
		setReserveParachuteTintIndex(ped: number, p1: number): void;
		createParachuteBagObject(ped: number, p1: boolean, p2: boolean): number;
		setDucking(ped: number, toggle: boolean): void;
		isDucking(ped: number): boolean;
		isInAnyTaxi(ped: number): boolean;
		setIdRange(ped: number, value: number): void;
		setHighlyPerceptive(ped: number, toggle: boolean): void;
		setSeeingRange(ped: number, value: number): void;
		setHearingRange(ped: number, value: number): void;
		setVisualFieldMinAngle(ped: number, value: number): void;
		setVisualFieldMaxAngle(ped: number, value: number): void;
		setVisualFieldMinElevationAngle(ped: number, angle: number): void;
		setVisualFieldMaxElevationAngle(ped: number, angle: number): void;
		setVisualFieldPeripheralRange(ped: number, range: number): void;
		setVisualFieldCenterAngle(ped: number, angle: number): void;
		getVisualFieldCenterAngle(ped: number): number;
		setStealthMovement(ped: number, p1: boolean, action: string): void;
		getStealthMovement(ped: number): boolean;
		createGroup(unused: number): number;
		setAsGroupLeader(ped: number, groupId: number): void;
		setAsGroupMember(ped: number, groupId: number): void;
		setCanTeleportToGroupLeader(pedHandle: number, groupHandle: number, toggle: boolean): void;
		removeGroup(groupId: number): void;
		removeFromGroup(ped: number): void;
		isGroupMember(ped: number, groupId: number): boolean;
		isHangingOnToVehicle(ped: number): boolean;
		setGroupSeparationRange(groupHandle: number, separationRange: number): void;
		setMinGroundTimeForStungun(ped: number, ms: number): void;
		isProne(ped: number): boolean;
		isInCombat(ped: number, target: number): boolean;
		canInCombatSeeTarget(ped: number, target: number): boolean;
		isDoingDriveby(ped: number): boolean;
		isJacking(ped: number): boolean;
		isBeingJacked(ped: number): boolean;
		isBeingStunned(ped: number, p1: number): boolean;
		getPedsJacker(ped: number): number;
		getJackTarget(ped: number): number;
		isFleeing(ped: number): boolean;
		isInCover(ped: number, exceptUseWeapon: boolean): boolean;
		isInCoverFacingLeft(ped: number): boolean;
		isInHighCover(ped: number): boolean;
		isGoingIntoCover(ped: number): boolean;
		setPinnedDown(ped: number, pinned: boolean, i: number): number;
		getSeatIsTryingToEnter(ped: number): number;
		getVehicleIsTryingToEnter(ped: number): number;
		getSourceOfDeath(ped: number): number;
		getCauseOfDeath(ped: number): number;
		getTimeOfDeath(ped: number): number;
		setRelationshipGroupDefaultHash(ped: number, hash: number): void;
		setRelationshipGroupHash(ped: number, hash: number): void;
		setRelationshipBetweenGroups(relationship: number, group1: number, group2: number): void;
		clearRelationshipBetweenGroups(relationship: number, group1: number, group2: number): void;
		addRelationshipGroup(name: string): number;
		removeRelationshipGroup(groupHash: number): void;
		doesRelationshipGroupExist(groupHash: number): boolean;
		getRelationshipBetweenS(ped1: number, ped2: number): number;
		getRelationshipGroupDefaultHash(ped: number): number;
		getRelationshipGroupHash(ped: number): number;
		getRelationshipBetweenGroups(group1: number, group2: number): number;
		setRelationshipGroupDontAffectWantedLevel(group: number, p1: boolean): void;
		setCanBeTargetedWithoutLos(ped: number, toggle: boolean): void;
		setToInformRespectedFriends(ped: number, radius: number, maxFriends: number): void;
		isRespondingToEvent(ped: number, event: number): boolean;
		getEventData(ped: number, eventType: number): number;
		setFiringPattern(ped: number, patternHash: number): void;
		setShootRate(ped: number, shootRate: number): void;
		setCombatFloat(ped: number, combatType: number, p2: number): void;
		getCombatFloat(ped: number, p1: number): number;
		getGroupSize(groupID: number): GetGroupSizeResult;
		doesGroupExist(groupId: number): boolean;
		getGroupIndex(ped: number): number;
		isInGroup(ped: number): boolean;
		getPlayerIsFollowing(ped: number): number;
		setGroupFormation(groupId: number, formationType: number): void;
		setGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number): void;
		resetGroupFormationDefaultSpacing(groupHandle: number): void;
		getVehicleIsUsing(ped: number): number;
		getVehicleIsEntering(ped: number): number;
		setGravity(ped: number, toggle: boolean): void;
		applyDamageTo(ped: number, damageAmount: number, p2: boolean, p3: number): void;
		getTimeOfLastWeaponDamage(ped: number, weaponHash: number): number;
		setAllowedToDuck(ped: number, toggle: boolean): void;
		setNeverLeavesGroup(ped: number, toggle: boolean): void;
		getType(ped: number): number;
		setAsCop(ped: number, toggle: boolean): void;
		setMaxHealth(ped: number, value: number): void;
		getMaxHealth(ped: number): number;
		setMaxTimeInWater(ped: number, value: number): void;
		setMaxTimeUnderwater(ped: number, value: number): void;
		setVehicleForcedSeatUsage(ped: number, vehicle: number, seatIndex: number, flags: number, p4: number): void;
		clearAllVehicleForcedSeatUsage(ped: number): void;
		setCanBeKnockedOffVehicle(ped: number, state: number): void;
		canKnockOffVehicle(ped: number): boolean;
		knockOffVehicle(ped: number): void;
		setCoordsNoGang(ped: number, posX: number, posY: number, posZ: number): void;
		getAsGroupMember(groupID: number, memberNumber: number): number;
		getAsGroupLeader(groupID: number): number;
		setKeepTask(ped: number, toggle: boolean): void;
		isSwimming(ped: number): boolean;
		isSwimmingUnderWater(ped: number): boolean;
		setCoordsKeepVehicle(ped: number, posX: number, posY: number, posZ: number): void;
		setDiesInVehicle(ped: number, toggle: boolean): void;
		setCreateRandomCops(toggle: boolean): void;
		setCreateRandomCopsNotOnScenarios(toggle: boolean): void;
		setCreateRandomCopsOnScenarios(toggle: boolean): void;
		canCreateRandomCops(): boolean;
		setAsEnemy(ped: number, toggle: boolean): void;
		setCanSmashGlass(ped: number, p1: boolean, p2: boolean): void;
		isInAnyTrain(ped: number): boolean;
		isGettingIntoAVehicle(ped: number): boolean;
		isTryingToEnterALockedVehicle(ped: number): boolean;
		setEnableHandcuffs(ped: number, toggle: boolean): void;
		setEnableBoundAnkles(ped: number, toggle: boolean): void;
		setEnableScuba(ped: number, toggle: boolean): void;
		setCanAttackFriendly(ped: number, toggle: boolean, p2: boolean): void;
		getAlertness(ped: number): number;
		setAlertness(ped: number, value: number): void;
		setGetOutUpsideDownVehicle(ped: number, toggle: boolean): void;
		setMovementClipset(ped: number, clipSet: string, p2: number): void;
		resetMovementClipset(ped: number, p1: number): void;
		setStrafeClipset(ped: number, clipSet: string): void;
		resetStrafeClipset(ped: number): void;
		setWeaponMovementClipset(ped: number, clipSet: string): void;
		resetWeaponMovementClipset(ped: number): void;
		setDriveByClipsetOverride(ped: number, clipset: string): void;
		clearDriveByClipsetOverride(ped: number): void;
		setCoverClipsetOverride(ped: number, p1: string): void;
		clearCoverClipsetOverride(ped: number): void;
		setInVehicleContext(ped: number, context: number): void;
		resetInVehicleContext(ped: number): void;
		isScriptedScenarioUsingConditionalAnim(ped: number, animDict: string, anim: string): boolean;
		setAlternateWalkAnim(ped: number, animDict: string, animName: string, p3: number, p4: boolean): void;
		clearAlternateWalkAnim(ped: number, p1: number): void;
		setAlternateMovementAnim(ped: number, stance: number, animDictionary: string, animationName: string, p4: number, p5: boolean): void;
		clearAlternateMovementAnim(ped: number, stance: number, p2: number): void;
		setGestureGroup(ped: number, animGroupGesture: string): void;
		getAnimInitialOffsetPosition(
			animDict: string,
			animName: string,
			x: number,
			y: number,
			z: number,
			xRot: number,
			yRot: number,
			zRot: number,
			p8: number,
			p9: number
		): shared.Vector3Mp;
		getAnimInitialOffsetRotation(
			animDict: string,
			animName: string,
			x: number,
			y: number,
			z: number,
			xRot: number,
			yRot: number,
			zRot: number,
			p8: number,
			p9: number
		): shared.Vector3Mp;
		getDrawableVariation(ped: number, componentId: number): number;
		getNumberOfDrawableVariations(ped: number, componentId: number): number;
		getTextureVariation(ped: number, componentId: number): number;
		getNumberOfTextureVariations(ped: number, componentId: number, drawableId: number): number;
		getNumberOfPropDrawableVariations(ped: number, propId: number): number;
		getNumberOfPropTextureVariations(ped: number, propId: number, drawableId: number): number;
		getPaletteVariation(ped: number, componentId: number): number;
		isComponentVariationValid(ped: number, componentId: number, drawableId: number, textureId: number): boolean;
		setComponentVariation(ped: number, componentId: number, drawableId: number, textureId: number, paletteId: number): void;
		setRandomComponentVariation(ped: number, p1: number): void;
		setRandomProps(ped: number): void;
		setDefaultComponentVariation(ped: number): void;
		setBlendFromParents(ped: number, p1: number, p2: number, p3: number, p4: number): void;
		setHeadBlendData(
			ped: number,
			shapeFirstID: number,
			shapeSecondID: number,
			shapeThirdID: number,
			skinFirstID: number,
			skinSecondID: number,
			skinThirdID: number,
			shapeMix: number,
			skinMix: number,
			thirdMix: number,
			isParent: boolean
		): void;
		getHeadBlendData(ped: number): number;
		updateHeadBlendData(ped: number, shapeMix: number, skinMix: number, thirdMix: number): void;
		setEyeColor(ped: number, index: number): void;
		getEyeColor(ped: number): number;
		setHeadOverlay(ped: number, overlayID: number, index: number, opacity: number): void;
		getHeadOverlayValue(ped: number, overlayID: number): number;
		getHeadOverlayNum(overlayID: number): number;
		setHeadOverlayColor(ped: number, overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
		setHairColor(ped: number, colorID: number, highlightColorID: number): void;
		getNumHairColors(): number;
		getNumMakeupColors(): number;
		getHairRgbColor(hairColorIndex: number): GetPedHairRgbColorResult;
		getMakeupRgbColor(makeupColorIndex: number): GetPedMakeupRgbColorResult;
		isHairColorValid2(colorId: number): boolean;
		isLipstickColorValid2(colorId: number): boolean;
		isBlushColorValid2(colorId: number): boolean;
		isHairColorValid(colorID: number): boolean;
		isLipstickColorValid(colorID: number): boolean;
		isBlushColorValid(colorID: number): boolean;
		isBodyBlemishValid(colorId: number): boolean;
		setFaceFeature(ped: number, index: number, scale: number): void;
		hasHeadBlendFinished(ped: number): boolean;
		finalizeHeadBlend(ped: number): void;
		setHeadBlendPaletteColor(ped: number, r: number, g: number, b: number, id: number): void;
		disableHeadBlendPaletteColor(ped: number): void;
		getHeadBlendFirstIndex(type: number): number;
		getNumParentPedsOfType(type: number): number;
		setPreloadVariationData(ped: number, slot: number, drawableId: number, textureId: number): number;
		hasPreloadVariationDataFinished(ped: number): boolean;
		releasePreloadVariationData(ped: number): void;
		setPreloadPropData(ped: number, componentId: number, drawableId: number, TextureId: number): boolean;
		hasPreloadPropDataFinished(ped: number): boolean;
		releasePreloadPropData(ped: number): void;
		getPropIndex(ped: number, componentId: number): number;
		setPropIndex(ped: number, componentId: number, drawableId: number, TextureId: number, attach: boolean): void;
		knockOffProp(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;
		clearProp(ped: number, propId: number): void;
		clearAllProps(ped: number): void;
		dropAmbientProp(ped: number): void;
		getPropTextureIndex(ped: number, componentId: number): number;
		clearParachutePackVariation(ped: number): void;
		setScubaGearVariation(ped: number): void;
		clearScubaGearVariation(ped: number): void;
		setBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;
		setBoundsOrientation(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		registerTarget(ped: number, target: number): void;
		registerHatedTargetsAround(ped: number, radius: number): void;
		getRandomAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: number): number;
		getClosest(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p7: boolean, p8: boolean, pedType: number): number;
		setScenarioPedsToBeReturnedByNextCommand(value: boolean): void;
		setDriverRacingModifier(driver: number, modifier: number): void;
		setDriverAbility(driver: number, ability: number): void;
		setDriverAggressiveness(driver: number, aggressiveness: number): void;
		canRagdoll(ped: number): boolean;
		setToRagdoll(ped: number, time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): boolean;
		setToRagdollWithFall(
			ped: number,
			time: number,
			p2: number,
			ragdollType: number,
			x: number,
			y: number,
			z: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number,
			p12: number,
			p13: number
		): boolean;
		setRagdollOnCollision(ped: number, toggle: boolean): void;
		isRagdoll(ped: number): boolean;
		isRunningRagdollTask(ped: number): boolean;
		setRagdollForceFall(ped: number): void;
		resetRagdollTimer(ped: number): void;
		setCanRagdoll(ped: number, toggle: boolean): void;
		isRunningMeleeTask(ped: number): boolean;
		isRunningMobilePhoneTask(ped: number): boolean;
		setRagdollBlockingFlags(ped: number, flags: number): void;
		clearRagdollBlockingFlags(ped: number, flags: number): void;
		setAngledDefensiveArea(
			ped: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: boolean,
			p9: boolean
		): void;
		setSphereDefensiveArea(ped: number, x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;
		setDefensiveSphereAttachedToPed(
			ped: number,
			target: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			radius: number,
			p6: boolean
		): void;
		setDefensiveSphereAttachedToVehicle(
			ped: number,
			target: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			radius: number,
			p6: boolean
		): void;
		setDefensiveAreaAttachedToPed(
			ped: number,
			attachPed: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: boolean,
			p10: boolean
		): void;
		setDefensiveAreaDirection(ped: number, p1: number, p2: number, p3: number, p4: boolean): void;
		removeDefensiveArea(ped: number, toggle: boolean): void;
		getDefensiveAreaPosition(ped: number, p1: boolean): shared.Vector3Mp;
		isDefensiveAreaActive(ped: number, p1: boolean): boolean;
		setPreferredCoverSet(ped: number, itemSet: number): void;
		removePreferredCoverSet(ped: number): void;
		reviveInjured(ped: number): void;
		resurrect(ped: number): void;
		setNameDebug(ped: number, name: string): void;
		getExtractedDisplacement(ped: number, worldSpace: boolean): shared.Vector3Mp;
		setDiesWhenInjured(ped: number, toggle: boolean): void;
		setEnableWeaponBlocking(ped: number, toggle: boolean): void;
		resetVisibleDamage(ped: number): void;
		applyBloodDamageByZone(ped: number, p1: number, p2: number, p3: number, p4: number): void;
		applyBlood(ped: number, boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string): void;
		applyBloodByZone(ped: number, p1: number, p2: number, p3: number): number;
		applyBloodSpecific(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): number;
		applyDamageDecal(
			ped: number,
			damageZone: number,
			xOffset: number,
			yOffset: number,
			heading: number,
			scale: number,
			alpha: number,
			variation: number,
			fadeIn: boolean,
			decalName: string
		): void;
		applyDamagePack(ped: number, damagePack: string, damage: number, mult: number): void;
		clearBloodDamage(ped: number): void;
		clearBloodDamageByZone(ped: number, p1: number): void;
		hideBloodDamageByZone(ped: number, p1: number, p2: boolean): void;
		clearDamageDecalByZone(ped: number, p1: number, p2: string): void;
		getDecorationsState(ped: number): number;
		clearWetness(ped: number): void;
		setWetnessHeight(ped: number, height: number): void;
		setWetnessEnabledThisFrame(ped: number): void;
		clearEnvDirt(ped: number): void;
		setSweat(ped: number, sweat: number): void;
		addDecorationFromHashes(ped: number, collection: number, overlay: number): void;
		addDecorationFromHashesInCorona(ped: number, collection: number, overlay: number): void;
		getDecorationZoneFromHashes(collection: number, overlay: number): number;
		clearDecorations(ped: number): void;
		clearDecorationsLeaveScars(ped: number): void;
		wasSkeletonUpdated(ped: number): boolean;
		getBoneCoords(ped: number, boneId: number, offsetX: number, offsetY: number, offsetZ: number): shared.Vector3Mp;
		createNmMessage(startImmediately: boolean, messageId: number): void;
		giveNmMessage(ped: number): void;
		addScenarioBlockingArea(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			p6: boolean,
			p7: boolean,
			p8: boolean,
			p9: boolean
		): number;
		removeScenarioBlockingAreas(): void;
		removeScenarioBlockingArea(p0: number, p1: boolean): void;
		setScenarioPedsSpawnInSphereArea(x: number, y: number, z: number, range: number, p4: number): void;
		doesScenarioBlockingAreaExist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
		isUsingScenario(ped: number, scenario: string): boolean;
		isUsingAnyScenario(ped: number): boolean;
		setPanicExitScenario(p0: number, p1: number, p2: number, p3: number): number;
		setShouldPlayNormalScenarioExit(ped: number): void;
		setShouldPlayImmediateScenarioExit(ped: number): void;
		setShouldPlayFleeScenarioExit(ped: number, p1: number, p2: number, p3: number): number;
		playFacialAnim(ped: number, animName: string, animDict: string): void;
		setFacialClipsetOverride(ped: number, animDict: string): void;
		setFacialIdleAnimOverride(ped: number, animName: string, animDict: string): void;
		clearFacialIdleAnimOverride(ped: number): void;
		setCanPlayGestureAnims(ped: number, toggle: boolean): void;
		setCanPlayVisemeAnims(ped: number, toggle: boolean, p2: boolean): void;
		setCanPlayInjuredAnims(ped: number, p1: boolean): void;
		setCanPlayAmbientAnims(ped: number, toggle: boolean): void;
		setCanPlayAmbientBaseAnims(ped: number, toggle: boolean): void;
		setCanArmIk(ped: number, toggle: boolean): void;
		setCanHeadIk(ped: number, toggle: boolean): void;
		setCanLegIk(ped: number, toggle: boolean): void;
		setCanTorsoIk(ped: number, toggle: boolean): void;
		setCanTorsoReactIk(ped: number, p1: boolean): void;
		setCanUseAutoConversationLookat(ped: number, toggle: boolean): void;
		isHeadtrackingPed(ped1: number, ped2: number): boolean;
		isHeadtrackingEntity(ped: number, entity: number): boolean;
		setPrimaryLookat(ped: number, lookAt: number): void;
		setClothPackageIndex(p0: number, p1: number): void;
		setClothProne(p0: number, p1: number): void;
		setConfigFlag(ped: number, flagId: number, value: boolean): void;
		setResetFlag(ped: number, flagId: number, doReset: boolean): void;
		getConfigFlag(ped: number, flagId: number, p2: boolean): boolean;
		getResetFlag(ped: number, flagId: number): boolean;
		setGroupMemberPassengerIndex(ped: number, index: number): void;
		setCanEvasiveDive(ped: number, toggle: boolean): void;
		isEvasiveDiving(ped: number): number;
		setShootsAtCoord(ped: number, x: number, y: number, z: number, toggle: boolean): void;
		setModelIsSuppressed(modelHash: number, toggle: boolean): void;
		stopAnyModelBeingSuppressed(): void;
		setCanBeTargetedWhenInjured(ped: number, toggle: boolean): void;
		setGeneratesDeadBodyEvents(ped: number, toggle: boolean): void;
		blockDeadBodyShockingEvents(ped: number, toggle: boolean): void;
		setCanRagdollFromPlayerImpact(ped: number, toggle: boolean): void;
		giveHelmet(ped: number, cannotRemove: boolean, helmetFlag: number, textureIndex: number): void;
		removeHelmet(ped: number, instantly: boolean): void;
		isTakingOffHelmet(ped: number): boolean;
		setHelmet(ped: number, canWearHelmet: boolean): void;
		setHelmetFlag(ped: number, helmetFlag: number): void;
		setHelmetPropIndex(ped: number, propIndex: number, p2: boolean): void;
		setHelmetUnk(ped: number, p1: boolean, p2: number, p3: number): void;
		isHelmetUnk(ped: number): boolean;
		setHelmetTextureIndex(ped: number, textureIndex: number): void;
		isWearingHelmet(ped: number): boolean;
		clearStoredHatProp(ped: number): void;
		getHelmetStoredHatPropIndex(ped: number): number;
		getHelmetStoredHatTexIndex(ped: number): number;
		setToLoadCover(ped: number, toggle: boolean): void;
		setCanCowerInCover(ped: number, toggle: boolean): void;
		setCanPeekInCover(ped: number, toggle: boolean): void;
		setPlaysHeadOnHornAnimWhenDiesInVehicle(ped: number, toggle: boolean): void;
		setLegIkMode(ped: number, mode: number): void;
		setMotionBlur(ped: number, toggle: boolean): void;
		setCanSwitchWeapon(ped: number, toggle: boolean): void;
		setDiesInstantlyInWater(ped: number, toggle: boolean): void;
		stopWeaponFiringWhenDropped(ped: number): void;
		setScriptedAnimSeatOffset(ped: number, p1: number): void;
		setCombatMovement(ped: number, combatMovement: number): void;
		getCombatMovement(ped: number): number;
		setCombatAbility(ped: number, p1: number): void;
		setCombatRange(ped: number, p1: number): void;
		getCombatRange(ped: number): number;
		setCombatAttributes(ped: number, attributeIndex: number, enabled: boolean): void;
		setTargetLossResponse(ped: number, responseType: number): void;
		isPerformingMeleeAction(ped: number): boolean;
		isPerformingStealthKill(ped: number): boolean;
		isPerformingDependentComboLimit(ped: number): boolean;
		isBeingStealthKilled(ped: number): boolean;
		getMeleeTargetFor(ped: number): number;
		wasKilledByStealth(ped: number): boolean;
		wasKilledByTakedown(ped: number): boolean;
		wasKnockedOut(ped: number): boolean;
		setFleeAttributes(ped: number, attributeFlags: number, enable: boolean): void;
		setCowerHash(ped: number, p1: string): void;
		setSteersAroundPeds(ped: number, toggle: boolean): void;
		setSteersAroundObjects(ped: number, toggle: boolean): void;
		setSteersAroundVehicles(ped: number, toggle: boolean): void;
		setIncreasedAvoidanceRadius(ped: number): void;
		setBlocksPathingWhenDead(ped: number, toggle: boolean): void;
		isAnyNearPoint(x: number, y: number, z: number, radius: number): boolean;
		forceAiAndAnimationUpdate(ped: number, p1: boolean, p2: boolean): void;
		isHeadingTowardsPosition(ped: number, x: number, y: number, z: number, p4: number): boolean;
		requestVisibilityTracking(ped: number): void;
		requestVehicleVisibilityTracking(ped: number, p1: boolean): void;
		isTrackedVisible(ped: number): boolean;
		isTracked(ped: number): boolean;
		hasReceivedEvent(ped: number, eventId: number): boolean;
		canSeeHatedPed(ped1: number, ped2: number): boolean;
		getBoneIndex(ped: number, boneId: number): number;
		getRagdollBoneIndex(ped: number, bone: number): number;
		setEnveffScale(ped: number, value: number): void;
		getEnveffScale(ped: number): number;
		setEnableEnveffScale(ped: number, toggle: boolean): void;
		setEnveffColorModulator(ped: number, p1: number, p2: number, p3: number): void;
		setEmissiveIntensity(ped: number, intensity: number): void;
		getEmissiveIntensity(ped: number): number;
		isShaderEffectValid(ped: number): boolean;
		setAoBlobRendering(ped: number, toggle: boolean): void;
		createSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: number): number;
		createSynchronizedScene2(x: number, y: number, z: number, radius: number, object: number): number;
		isSynchronizedSceneRunning(sceneId: number): boolean;
		setSynchronizedSceneOrigin(sceneID: number, x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p7: boolean): void;
		setSynchronizedScenePhase(sceneID: number, phase: number): void;
		getSynchronizedScenePhase(sceneID: number): number;
		setSynchronizedSceneRate(sceneID: number, rate: number): void;
		getSynchronizedSceneRate(sceneID: number): number;
		setSynchronizedSceneLoo(sceneID: number, toggle: boolean): void;
		isSynchronizedSceneLoo(sceneID: number): boolean;
		setSynchronizedSceneHoldLastFrame(sceneID: number, toggle: boolean): void;
		isSynchronizedSceneHoldLastFrame(sceneID: number): boolean;
		attachSynchronizedSceneToEntity(sceneID: number, entity: number, boneIndex: number): void;
		detachSynchronizedScene(sceneID: number): void;
		disposeSynchronizedScene(scene: number): void;
		forceMotionState(ped: number, motionStateHash: number, p2: boolean, p3: number, p4: boolean): boolean;
		getCurrentMovementSpeed(ped: number): GetPedCurrentMovementSpeedResult;
		setMaxMoveBlendRatio(ped: number, value: number): void;
		setMinMoveBlendRatio(ped: number, value: number): void;
		setMoveRateOverride(ped: number, value: number): void;
		getNearbyVehicles(ped: number): GetPedNearbyVehiclesResult;
		getNearbyPeds(ped: number, ignore: number): GetPedNearbyPedsResult;
		haveAllStreamingRequestsCompleted(ped: number): boolean;
		isUsingActionMode(ped: number): boolean;
		setUsingActionMode(ped: number, p1: boolean, p2: number, action: string): void;
		setMovementModeOverride(ped: number, name: string): void;
		setCapsule(ped: number, value: number): void;
		registerHeadshot(ped: number): number;
		registerHeadshot3(ped: number): number;
		registerHeadshotTransparent(ped: number): number;
		unregisterHeadshot(id: number): void;
		isHeadshotValid(id: number): boolean;
		isHeadshotReady(id: number): boolean;
		getHeadshotTxdString(id: number): string;
		requestHeadshotImgUpload(id: number): boolean;
		releaseHeadshotImgUpload(id: number): void;
		isHeadshotImgUploadAvailable(): boolean;
		hasHeadshotImgUploadFailed(): boolean;
		hasHeadshotImgUploadSucceeded(): boolean;
		setHeatscaleOverride(ped: number, heatScale: number): void;
		disableHeatscaleOverride(ped: number): void;
		spawnpointsStartSearch(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			interiorFlags: number,
			scale: number,
			duration: number
		): void;
		spawnpointsStartSearchInAngledArea(
			x: number,
			y: number,
			z: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			interiorFlags: number,
			scale: number,
			duration: number
		): void;
		spawnpointsCancelSearch(): void;
		spawnpointsIsSearchActive(): boolean;
		spawnpointsIsSearchComplete(): boolean;
		spawnpointsIsSearchFailed(): boolean;
		spawnpointsGetNumSearchResults(): number;
		spawnpointsGetSearchResult(randomInt: number): SpawnpointsGetSearchResultResult;
		spawnpointsGetSearchResultFlags(p0: number): number;
		setIkTarget(
			ped: number,
			ikIndex: number,
			entityLookAt: number,
			boneLookAt: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			p7: number,
			blendInDuration: number,
			blendOutDuration: number
		): void;
		requestActionModeAsset(asset: string): void;
		hasActionModeAssetLoaded(asset: string): boolean;
		removeActionModeAsset(asset: string): void;
		requestStealthModeAsset(asset: string): void;
		hasStealthModeAssetLoaded(asset: string): boolean;
		removeStealthModeAsset(asset: string): void;
		setLodMultiplier(ped: number, multiplier: number): void;
		setForceFootstepUpdate(ped: number, toggle: boolean): void;
		setForceStepType(ped: number, p1: boolean, type: number, p3: number): void;
		isAnyHostileNearPoint(ped: number, x: number, y: number, z: number, radius: number): boolean;
		setPopControlSphereThisFrame(x: number, y: number, z: number, min: number, max: number): void;
		isSwappingWeapon(Ped: number): boolean;
		setEnableScubaGearLight(ped: number, toggle: boolean): void;
		isScubaGearLightEnabled(ped: number): boolean;
		clearFacialClipsetOverride(ped: number): void;

		unk: GamePedUnk;
	}

	export interface GamePedUnk {
		_0x87DDEB611B329A9C(multiplier: number): void;
		_0xF2BEBCDFAFDAA19E(toggle: boolean): void;
		_0x5A7F62FDA59759BD(): void;
		_0xFF4803BC019852D9(p0: number, p1: number): void;
		_0x9911F4A24485F653(p0: boolean): void;
		_0xAFC976FD0580C7B3(ped: number, toggle: boolean): void;
		_0x2F3C3D9F50681DE4(p0: number, p1: boolean): void;
		_0x061CB768363D6424(ped: number, toggle: boolean): void;
		_0xFD325494792302D7(ped: number, toggle: boolean): void;
		_0x412F1364FA066CFB(p0: number): number;
		_0x451D05012CCEC234(p0: number): number;
		_0x2F074C904D85129E(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		_0xEC4B4B3B9908052A(ped: number, unk: number): void;
		_0x733C87D4CE22BEA2(p0: number): void;
		_0x5407B7288D0478B7(p0: number): number;
		_0x336B3D200AB007CB(p0: number, p1: number, p2: number, p3: number, p4: number): number;
		_0xAD27D957598E49E9(ped: number, p1: number, p2: number, hash: number, p4: number, p5: number): void;
		_0x2735233A786B1BEF(ped: number, p1: number): void;
		_0xB282749D5E028163(p0: number, p1: number): void;
		_0x49E50BDB8BA4DAB2(ped: number, toggle: boolean): void;
		_0x80054D7FCC70EEC6(ped: number): void;
		_0x9E30E91FB03A2CAF(): _0x9E30E91FB03A2CAFResult;
		_0x1E77FA7A62EE6C4C(p0: number): number;
		_0xF033419D1B81FAE8(p0: number): number;
		_0xEA9960D07DADCF10(p0: number): number;
		_0xAAA6A3698A69E048(p0: number): number;
		_0xC56FBF2F228E1DAC(modelHash: number, p1: number, p2: number): number;
		_0xFEC9A3B1820F3331(p0: number): boolean;
		_0x03EA03AF85A85CB7(
			ped: number,
			p1: boolean,
			p2: boolean,
			p3: boolean,
			p4: boolean,
			p5: boolean,
			p6: boolean,
			p7: boolean,
			p8: number
		): boolean;
		_0xA3F3564A5B3646C0(ped: number): boolean;
		_0xF9ACF4A08098EA25(ped: number, p1: boolean): void;
		_0x2B694AFCF64E6994(ped: number, p1: boolean): void;
		_0x9A77DFD295E29B09(p0: number, p1: boolean): void;
		_0x25361A96E0F7E419(p0: number, p1: number, p2: number, p3: number): number;
		_0xEC6935EBE0847B90(p0: number, p1: number, p2: number, p3: number): number;
		_0x425AECF167663F48(ped: number, p1: boolean): void;
		_0x5B6010B3CBC29095(p0: number, p1: boolean): void;
		_0xCEDA60A74219D064(p0: number, p1: boolean): void;
		_0xC30BDAEE47256C13(p0: number): number;
		_0xC2EE020F5FB4DB53(ped: number): void;
		_0x6647C5F6F5792496(ped: number, p1: boolean): void;
		_0xA660FAF550EB37E5(p0: number, p1: boolean): void;
		_0x3E9679C1DFCF422C(p0: number, p1: number): void;
		_0xF2385935BFFD4D92(p0: number): boolean;
		_0x1A330D297AAC6BC1(ped: number, p1: number): void;
		_0x2016C603D6B8987C(ped: number, toggle: boolean): void;
		_0xA9B61A329BFDCBEA(p0: number, p1: boolean): void;
		_0xA52D5247A4227E14(p0: number): void;
		_0xCD018C591F94CB43(ped: number, p1: boolean): void;
		_0x75BA1CB3B7D40CAF(ped: number, p1: boolean): void;
		_0x511F1A683387C7E2(ped: number): number;
		_0x9C6A6C19B6C0C496(ped: number): number;
		_0x2DFC81C9B9608549(ped: number): number;
		_0x110F526AB784111F(ped: number, p1: number): void;
		_0xE906EC930F5FE7C8(p0: number, p1: number): void;
		_0x1216E0BFA72CC703(p0: number, p1: number): void;
		_0xB8B52E498014F5B0(ped: number): boolean;
		_0x0B3E35AC043707D9(p0: number, p1: number): void;
		_0x46B05BCAE43856B0(ped: number, flag: number): boolean;
		_0xED3C76ADFA6D07C4(ped: number): void;
		_0xE861D0B05C7662B8(ped: number, p1: boolean, p2: number): void;
		_0x820E9892A77E97CD(p0: number, p1: number): void;
		_0x06087579E7AA85A9(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): boolean;
		_0xD33DAA36272177C4(ped: number): void;
		_0x711794453CFD692B(p0: number, p1: number): void;
		_0x83A169EABCDB10A2(p0: number, p1: number): void;
		_0x288DF530C92DAD6F(p0: number, p1: number): void;
		_0x0F62619393661D6E(p0: number, p1: number, p2: number): void;
		_0xDFE68C4B787E1BFB(ped: number): void;
		_0xFAB944D4D481ACCB(ped: number, toggle: boolean): void;
	}

	export interface _0x9E30E91FB03A2CAFResult {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface GetPedHairRgbColorResult {
		outR: number;
		outG: number;
		outB: number;
	}

	export interface GetPedMakeupRgbColorResult {
		outR: number;
		outG: number;
		outB: number;
	}

	export interface GetPedCurrentMovementSpeedResult {
		speedX: number;
		speedY: number;
		result: boolean;
	}

	export interface GetPedNearbyVehiclesResult {
		sizeAndVehs: number;
		result: number;
	}

	export interface GetPedNearbyPedsResult {
		sizeAndPeds: number;
		result: number;
	}

	export interface SpawnpointsGetSearchResultResult {
		x: number;
		y: number;
		z: number;
	}

	export interface GamePhysicsLegacy {
		getRopeLength(ropeId: number): number;
	}

	export interface GamePhysics extends GamePhysicsLegacy {
		addRope(
			x: number,
			y: number,
			z: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			length: number,
			ropeType: number,
			maxLength: number,
			minLength: number,
			windingSpeed: number,
			p11: boolean,
			p12: boolean,
			rigid: boolean,
			p14: number,
			breakWhenShot: boolean
		): AddRopeResult;
		deleteRope(): number;
		deleteChildRope(ropeId: number): void;
		doesRopeExist(): number;
		ropeDrawShadowEnabled(toggle: boolean): number;
		loadRopeData(ropeId: number, rope_preset: string): void;
		pinRopeVertex(ropeId: number, vertex: number, x: number, y: number, z: number): void;
		unpinRopeVertex(ropeId: number, vertex: number): void;
		getRopeVertexCount(ropeId: number): number;
		attachEntitiesToRope(
			ropeId: number,
			ent1: number,
			ent2: number,
			ent1_x: number,
			ent1_y: number,
			ent1_z: number,
			ent2_x: number,
			ent2_y: number,
			ent2_z: number,
			length: number,
			p10: boolean,
			p11: boolean
		): AttachEntitiesToRopeResult;
		attachRopeToEntity(ropeId: number, entity: number, x: number, y: number, z: number, p5: boolean): void;
		detachRopeFromEntity(ropeId: number, entity: number): void;
		ropeSetUpdatePinverts(ropeId: number): void;
		ropeSetUpdateOrder(ropeId: number, p1: number): void;
		getRopeLastVertexCoord(ropeId: number): shared.Vector3Mp;
		getRopeVertexCoord(ropeId: number, vertex: number): shared.Vector3Mp;
		startRopeWinding(ropeId: number): void;
		stopRopeWinding(ropeId: number): void;
		startRopeUnwindingFront(ropeId: number): void;
		stopRopeUnwindingFront(ropeId: number): void;
		ropeConvertToSimple(ropeId: number): void;
		ropeLoadTextures(): void;
		ropeAreTexturesLoaded(): boolean;
		ropeUnloadTextures(): void;
		doesRopeBelongToThisScript(ropeId: number): boolean;
		ropeGetDistanceBetweenEnds(ropeId: number): number;
		ropeForceLength(ropeId: number, length: number): void;
		ropeResetLength(ropeId: number, length: number): void;
		applyImpulseToCloth(posX: number, posY: number, posZ: number, vecX: number, vecY: number, vecZ: number, impulse: number): void;
		setDamping(entity: number, vertex: number, value: number): void;
		activate(entity: number): void;
		setCgoffset(entity: number, x: number, y: number, z: number): void;
		getCgoffset(entity: number): shared.Vector3Mp;
		setCgAtBoundcenter(entity: number): void;
		breakEntityGlass(
			entity: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: boolean
		): void;
		getHasObjectFragInst(object: number): boolean;
		setDisableBreaking(object: number, toggle: boolean): void;
		setDisableFragDamage(object: number, toggle: boolean): void;
		setEntityProofUnk(entity: number, toggle: boolean): void;
		setLaunchControlEnabled(toggle: boolean): void;

		unk: GamePhysicsUnk;
	}

	export interface GamePhysicsUnk {
		_0xA1AE736541B0FCA3(p1: boolean): number;
		_0x36CCB9BE67B970FD(ropeId: number, p1: boolean): void;
		_0x84DE3B5FB3E666F0(): number;
		_0xBC0CE682D4D05650(
			ropeId: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number,
			p12: number,
			p13: number
		): void;
		_0xB1B6216CA2E7B55E(p0: number, p1: boolean, p2: boolean): void;
		_0xB743F735C03D7810(ropeId: number, p1: number): void;
		_0xCC6E963682533882(object: number): void;
		_0x9EBD751E5787BAF2(p0: boolean): void;
	}

	export interface AddRopeResult {
		unkPtr: number;
		result: number;
	}

	export interface AttachEntitiesToRopeResult {
		p12: number;
		p13: number;
	}

	export interface GamePlayerLegacy {
		reserveEntityExplodesOnHighExplosionCombo(p1: number): void;
		playerAttachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
	}

	export interface GamePlayer extends GamePlayerLegacy {
		getPed(): number;
		getPedScriptIndex(): number;
		setModel(model: number): void;
		changePed(ped: number, p2: boolean, resetDamage: boolean): void;
		getRgbColour(): GetPlayerRgbColourResult;
		getNumberOfS(): number;
		getTeam(): number;
		setTeam(team: number): void;
		getNumberOfPlayersInTeam(team: number): number;
		getName(): string;
		getWantedLevelRadius(): number;
		getWantedCentrePosition(): shared.Vector3Mp;
		setWantedCentrePosition(p2: boolean, p3: boolean): shared.Vector3Mp;
		getWantedLevelThreshold(wantedLevel: number): number;
		setWantedLevel(wantedLevel: number, disableNoMission: boolean): void;
		setWantedLevelNoDrop(wantedLevel: number, p2: boolean): void;
		setWantedLevelNow(p1: boolean): void;
		areFlashingStarsAboutToDrop(): boolean;
		areStarsGreyedOut(): boolean;
		setDispatchCopsFor(toggle: boolean): void;
		isWantedLevelGreater(wantedLevel: number): boolean;
		clearWantedLevel(): void;
		isDead(): boolean;
		isPressingHorn(): boolean;
		setControl(bHasControl: boolean, flags: number): void;
		getWantedLevel(): number;
		setMaxWantedLevel(maxWantedLevel: number): void;
		setPoliceRadarBlips(toggle: boolean): void;
		setPoliceIgnore(toggle: boolean): void;
		isPlaying(): boolean;
		setEveryoneIgnore(toggle: boolean): void;
		setAllRandomPedsFlee(toggle: boolean): void;
		setAllRandomPedsFleeThisFrame(): void;
		setIgnoreLowPriorityShockingEvents(toggle: boolean): void;
		setWantedLevelMultiplier(multiplier: number): void;
		setWantedLevelDifficulty(difficulty: number): void;
		resetWantedLevelDifficulty(): void;
		startFiringAmnesty(duration: number): void;
		reportCrime(crimeType: number, wantedLvlThresh: number): void;
		switchCrimeType(p1: number): void;
		reportPoliceSpotted(): void;
		canStartMission(): boolean;
		isReadyForCutscene(): boolean;
		isTargettingEntity(entity: number): boolean;
		getTargetEntity(): number;
		isFreeAiming(): boolean;
		isFreeAimingAtEntity(entity: number): boolean;
		setLockonRangeOverride(range: number): void;
		setCanDoDriveBy(toggle: boolean): void;
		setCanBeHassledByGangs(toggle: boolean): void;
		setCanUseCover(toggle: boolean): void;
		getMaxWantedLevel(): number;
		isTargettingAnything(): boolean;
		setSprint(toggle: boolean): void;
		resetStamina(): void;
		restoreStamina(p1: number): void;
		getSprintStaminaRemaining(): number;
		getSprintTimeRemaining(): number;
		getUnderwaterTimeRemaining(): number;
		setUnderwaterTimeRemaining(time: number): number;
		getGroup(): number;
		getMaxArmour(): number;
		isControlOn(): boolean;
		isCamControlDisabled(): boolean;
		isScriptControlOn(): boolean;
		isClimbing(): boolean;
		isBeingArrested(atArresting: boolean): boolean;
		resetArrestState(): void;
		getPlayersLastVehicle(): number;
		getIndex(): number;
		intToIndex(value: number): number;
		intToParticipantindex(value: number): number;
		getTimeSinceHitVehicle(): number;
		getTimeSinceHitPed(): number;
		getTimeSinceDroveOnPavement(): number;
		getTimeSinceDroveAgainstTraffic(): number;
		isFreeForAmbientTask(): boolean;
		id(): number;
		pedId(): number;
		networkIdToInt(): number;
		hasForceCleanupOccurred(cleanupFlags: number): boolean;
		forceCleanup(cleanupFlags: number): void;
		forceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void;
		forceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;
		getCauseOfMostRecentForceCleanup(): number;
		setMayOnlyEnterThisVehicle(vehicle: number): void;
		setMayNotEnterAnyVehicle(): void;
		giveAchievementTo(achievement: number): boolean;
		setAchievementProgress(achievement: number, progress: number): boolean;
		getAchievementProgress(achievement: number): number;
		hasAchievementBeenPassed(achievement: number): boolean;
		isOnline(): boolean;
		isLoggingInNp(): boolean;
		displaySystemSigninUi(unk: boolean): void;
		isSystemUiBeingDisplayed(): boolean;
		setInvincible(toggle: boolean): void;
		getInvincible(): boolean;
		setInvincibleKeepRagdollEnabled(toggle: boolean): void;
		removeHelmet(p2: boolean): void;
		giveRagdollControl(toggle: boolean): void;
		setLockon(toggle: boolean): void;
		setTargetingMode(targetMode: number): void;
		setTargetLevel(targetLevel: number): void;
		clearHasDamagedAtLeastOnePed(): void;
		hasDamagedAtLeastOnePed(): boolean;
		clearHasDamagedAtLeastOneNonAnimalPed(): void;
		hasDamagedAtLeastOneNonAnimalPed(): boolean;
		setAirDragMultiplierForPlayersVehicle(multiplier: number): void;
		setSwimMultiplierFor(multiplier: number): void;
		setRunSprintMultiplierFor(multiplier: number): void;
		getTimeSinceLastArrest(): number;
		getTimeSinceLastDeath(): number;
		assistedMovementCloseRoute(): void;
		assistedMovementFlushRoute(): void;
		setForcedAim(toggle: boolean): void;
		setForcedZoom(toggle: boolean): void;
		setForceSkipAimIntro(toggle: boolean): void;
		disableFiring(toggle: boolean): void;
		setDisableAmbientMeleeMove(toggle: boolean): void;
		setMaxArmour(value: number): void;
		specialAbilityActivate(p0: number, p1: number): void;
		setSpecialAbility(p1: number, p2: number): void;
		specialAbilityDeplete(p0: number, p1: number): void;
		specialAbilityDeactivate(p1: number): void;
		specialAbilityDeactivateFast(p1: number): void;
		specialAbilityReset(p1: number): void;
		specialAbilityChargeOnMissionFailed(p1: number): void;
		specialAbilityChargeSmall(p1: boolean, p2: boolean, p3: number): void;
		specialAbilityChargeMedium(p1: boolean, p2: boolean, p3: number): void;
		specialAbilityChargeLarge(p1: boolean, p2: boolean, p3: number): void;
		specialAbilityChargeContinuous(p1: number, p2: number): void;
		specialAbilityChargeAbsolute(p1: number, p2: boolean, p3: number): void;
		specialAbilityChargeNormalized(normalizedValue: number, p2: boolean, p3: number): void;
		specialAbilityFillMeter(p1: boolean, p2: number): void;
		specialAbilityDepleteMeter(p1: boolean, p2: number): void;
		specialAbilityLock(playerModel: number, p1: number): void;
		specialAbilityUnlock(playerModel: number, p1: number): void;
		isSpecialAbilityUnlocked(playerModel: number): boolean;
		isSpecialAbilityActive(p1: number): boolean;
		isSpecialAbilityMeterFull(p1: number): boolean;
		enableSpecialAbility(toggle: boolean, p2: number): void;
		isSpecialAbilityEnabled(p1: number): boolean;
		setSpecialAbilityMultiplier(multiplier: number): void;
		startTeleport(x: number, y: number, z: number, heading: number, p5: boolean, findCollisionLand: boolean, p7: boolean): void;
		updateTeleport(): boolean;
		stopTeleport(): void;
		isTeleportActive(): boolean;
		getCurrentStealthNoise(): number;
		setHealthRechargeMultiplier(regenRate: number): void;
		getHealthRechargeLimit(): number;
		setHealthRechargeLimit(limit: number): void;
		setFallDistance(p0: number, p1: number): void;
		setWeaponDamageModifier(modifier: number): void;
		setWeaponDefenseModifier(modifier: number): void;
		setWeaponDefenseModifier2(modifier: number): void;
		setMeleeWeaponDamageModifier(modifier: number, p2: boolean): void;
		setMeleeWeaponDefenseModifier(modifier: number): void;
		setVehicleDamageModifier(modifier: number): void;
		setVehicleDefenseModifier(modifier: number): void;
		setParachuteTintIndex(tintIndex: number): void;
		getParachuteTintIndex(): number;
		setReserveParachuteTintIndex(index: number): void;
		getReserveParachuteTintIndex(): number;
		setParachutePackTintIndex(tintIndex: number): void;
		getParachutePackTintIndex(): number;
		setHasReserveParachute(): void;
		getHasReserveParachute(): boolean;
		setCanLeaveParachuteSmokeTrail(enabled: boolean): void;
		setParachuteSmokeTrailColor(r: number, g: number, b: number): void;
		getParachuteSmokeTrailColor(): GetPlayerParachuteSmokeTrailColorResult;
		setResetFlagPreferRearSeats(flags: number): void;
		setNoiseMultiplier(multiplier: number): void;
		setSneakingNoiseMultiplier(multiplier: number): void;
		canPedHear(ped: number): boolean;
		simulateInputGait(amount: number, gaitType: number, speed: number, p4: boolean, p5: boolean): void;
		resetInputGait(): void;
		setAutoGiveParachuteWhenEnterPlane(toggle: boolean): void;
		setAutoGiveScubaGearWhenExitVehicle(toggle: boolean): void;
		setStealthPerceptionModifier(value: number): void;
		setSimulateAiming(toggle: boolean): void;
		setClothPinFrames(p1: number): void;
		setClothPackageIndex(index: number): void;
		setClothLockCounter(value: number): void;
		attachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
		detachVirtualBound(): void;
		hasBeenSpottedInStolenVehicle(): boolean;
		isBattleAware(): boolean;
		extendWorldBoundaryFor(x: number, y: number, z: number): void;
		resetWorldBoundaryFor(): void;
		isRidingTrain(): boolean;
		hasLeftTheWorld(): boolean;
		setLeavePedBehind(toggle: boolean): void;
		setParachuteVariationOverride(p1: number, p2: number, p3: number, p4: boolean): void;
		clearParachuteVariationOverride(): void;
		setParachuteModelOverride(model: number): void;
		clearParachuteModelOverride(): void;
		setParachutePackModelOverride(model: number): void;
		clearParachutePackModelOverride(): void;
		disableVehicleRewards(): void;
		setBluetoothState(state: boolean): void;
		isBluetoothEnable(): boolean;
		getFakeWantedLevel(): number;
		setHomingRocketDisabled(p0: number, p1: number): void;

		unk: GamePlayerUnk;
	}

	export interface GamePlayerUnk {
		_0x7E07C78925D5FD96(p0: number): number;
		_0xDE45D1A1EF45EE61(toggle: boolean): void;
		_0xC3376F42B1FACCC6(): void;
		_0xFAC75988A7D078D3(): void;
		_0x49B856B1360C47C7(p0: number, p1: number, p2: number): void;
		_0x823EC8E82BA45986(p0: number): void;
		_0xBC9490CA15AEA8FB(): void;
		_0x4669B3ED80F24B4E(): void;
		_0x2F41A3BAE005E5FA(p0: number, p1: number): void;
		_0xAD73CE5A09E42D12(): void;
		_0x36F1B38855F2A8DF(): void;
		_0xB45EFF719D8427A6(p0: number): void;
		_0x0032A6DBA562C518(): void;
		_0xDCC07526B8EC45AF(): boolean;
		_0xCAC57395B151135F(p1: boolean): void;
		_0xB9CF1F793A9F1BF1(): boolean;
		_0xCB645E85E97EA48B(): boolean;
		_0xB885852C39CC265D(): void;
		_0xFFEE8FA29AB9A18E(p1: number): void;
		_0x5FC472C501CCADB3(): boolean;
		_0xF10B44FD479D69F3(p1: number): boolean;
		_0xDD2620B7B9D16FF1(p1: number): boolean;
		_0x8D768602ADEF2245(p1: number): void;
		_0xD821056B9ACF8052(p0: number, p1: number): void;
		_0x31E90B8873A4CD3B(p0: number, p1: number): void;
		_0x690A61A6D13583F6(): boolean;
		_0x9EDD76E87D5D51BA(): void;
		_0xBC0753C9CA14B506(p1: number, p2: boolean): boolean;
		_0x2F7CEB6520288061(p0: boolean): void;
		_0x5501B7A5CDB79D37(): void;
		_0x55FCC0C390620314(p0: number, p1: number, p2: number): void;
		_0x2382AB11450AE7BA(p0: number, p1: number): void;
		_0x6E4361FF3E8CD7CA(p0: number): number;
		_0x237440E46D918649(p0: number): void;
		_0x9097EB6D4BB9A12A(entity: number): void;
		_0x9F260BFB59ADBCA3(entity: number): void;
		_0x7BAE68775557AE0B(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		_0x7148E0F43D11F0D9(): void;
		_0x70A382ADEC069DD3(coordX: number, coordY: number, coordZ: number): void;
	}

	export interface GetPlayerParachuteSmokeTrailColorResult {
		r: number;
		g: number;
		b: number;
	}

	export interface GetPlayerRgbColourResult {
		r: number;
		g: number;
		b: number;
	}

	export interface GameRecordingLegacy {
		isRecording(): boolean;
	}

	export interface GameRecording extends GameRecordingLegacy {
		stopThisFrame(): void;
		disableRockstarEditorCameraChanges(): void;
		start(mode: number): void;
		stopAndSaveClip(): void;
		stopAndDiscardClip(): void;
		saveClip(): boolean;
		is(): boolean;

		unk: GameRecordingUnk;
	}

	export interface GameRecordingUnk {
		_0x48621C9FCA3EBD28(p0: number): void;
		_0x81CBAE94390F9F89(): void;
		_0x13B350B8AD0EEE10(): void;
		_0x293220DA1B46CEBC(p0: number, p1: number, p2: number): void;
		_0x208784099002BC30(missionNameLabel: string, p1: number): void;
		_0xF854439EFBB3B583(): void;
		_0x66972397E0757E7A(p0: number, p1: number, p2: number): void;
		_0xDF4B952F7D381B95(): number;
		_0x4282E08174868BE3(): number;
		_0x33D47E85B476ABCD(p0: boolean): boolean;
	}

	export interface GameReplayLegacy {}

	export interface GameReplay extends GameReplayLegacy {
		isInteriorRenderingDisabled(): boolean;
		resetEditorValues(): void;
		activateRockstarEditor(): void;

		unk: GameReplayUnk;
	}

	export interface GameReplayUnk {
		_0x7E2BD3EF6C205F09(p0: string, p1: boolean): void;
		_0x5AD3932DAEB1E5D3(): void;
		_0xE058175F8EAFE79A(p0: boolean): void;
	}

	export interface GameScriptLegacy {
		requestScript(scriptName: string): void;
		setScriptAsNoLongerNeeded(scriptName: string): void;
		hasScriptLoaded(scriptName: string): boolean;
		doesScriptExist(scriptName: string): boolean;
		requestStreamedScript(scriptHash: number): void;
		setStreamedScriptAsNoLongerNeeded(scriptHash: number): void;
		hasStreamedScriptLoaded(scriptHash: number): boolean;
		isStreamedScriptRunning(scriptHash: number): boolean;
		getThreadName(threadId: number): string;
		getNumberOfInstancesOfStreamedScript(scriptHash: number): number;
		triggerScriptEvent(eventGroup: number, eventDataSize: number, playerBits: number): number;
	}

	export interface GameScript extends GameScriptLegacy {
		request(scriptName: string): void;
		setAsNoLongerNeeded(scriptName: string): void;
		hasLoaded(scriptName: string): boolean;
		doesExist(scriptName: string): boolean;
		requestWithNameHash(scriptHash: number): void;
		setWithNameHashAsNoLongerNeeded(scriptHash: number): void;
		hasWithNameHashLoaded(scriptHash: number): boolean;
		doesWithNameHashExist(scriptHash: number): boolean;
		terminateThread(threadId: number): void;
		isThreadActive(threadId: number): boolean;
		getNameOfThread(threadId: number): string;
		threadIteratorReset(): void;
		threadIteratorGetNextThreadId(): number;
		getIdOfThisThread(): number;
		terminateThisThread(): void;
		getNumberOfReferencesOfWithNameHash(scriptHash: number): number;
		getThisName(): string;
		getHashOfThisName(): number;
		getNumberOfEvents(eventGroup: number): number;
		getEventExists(eventGroup: number, eventIndex: number): boolean;
		getEventAtIndex(eventGroup: number, eventIndex: number): number;
		getEventData(eventGroup: number, eventIndex: number, eventDataSize: number): number;
		triggerEvent(eventGroup: number, eventDataSize: number, playerBits: number): number;
		shutdownLoadingScreen(): void;
		setNoLoadingScreen(toggle: boolean): void;
		getNoLoadingScreen(): boolean;
		bgStartContextHash(contextHash: number): void;
		bgEndContextHash(contextHash: number): void;
		bgStartContext(contextName: string): void;
		bgEndContext(contextName: string): void;
		triggerEvent2(eventGroup: number, eventDataSize: number, playerBits: number): number;

		unk: GameScriptUnk;
	}

	export interface GameScriptUnk {
		_0xB1577667C3708F9B(): void;
		_0x836B62713E0534CA(): boolean;
		_0x760910B49D2B98EA(): void;
		_0x0F6F1EBBC4E1D5E6(scriptIndex: number, p1: string): boolean;
		_0x22E21FBCFC88C149(scriptIndex: number, p1: string): number;
		_0x829CD22E043A2577(p0: number): number;
	}

	export interface GameShapetestLegacy {}

	export interface GameShapetest extends GameShapetestLegacy {
		startShapeTestLosProbe(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			flags: number,
			entity: number,
			p8: number
		): number;
		startExpensiveSynchronousShapeTestLosProbe(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			flags: number,
			entity: number,
			p8: number
		): number;
		startShapeTestBoundingBox(entity: number, flags1: number, flags2: number): number;
		startShapeTestBox(
			x: number,
			y: number,
			z: number,
			x1: number,
			y2: number,
			z2: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			p9: number,
			flags: number,
			entity: number,
			p12: number
		): number;
		startShapeTestBound(entity: number, flags1: number, flags2: number): number;
		startShapeTestCapsule(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			radius: number,
			flags: number,
			entity: number,
			p9: number
		): number;
		startShapeTestSweptSphere(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			radius: number,
			flags: number,
			entity: number,
			p9: number
		): number;
		startShapeTestSurroundingCoords(flag: number, entity: number, flag2: number): StartShapeTestSurroundingCoordsResult;
		getShapeTestResult(shapeTestHandle: number): GetShapeTestResultResult;
		getShapeTestResultIncludingMaterial(shapeTestHandle: number): GetShapeTestResultIncludingMaterialResult;
		releaseScriptGuidFromEntity(entityHit: number): void;
	}

	export interface StartShapeTestSurroundingCoordsResult {
		pVec1: shared.Vector3Mp;
		pVec2: shared.Vector3Mp;
		result: number;
	}

	export interface GetShapeTestResultResult {
		hit: boolean;
		endCoords: shared.Vector3Mp;
		surfaceNormal: shared.Vector3Mp;
		entityHit: number;
		result: number;
	}

	export interface GetShapeTestResultIncludingMaterialResult {
		hit: boolean;
		endCoords: shared.Vector3Mp;
		surfaceNormal: shared.Vector3Mp;
		materialHash: number;
		entityHit: number;
		result: number;
	}

	export interface GameStatsLegacy {
		statSetProfileSetting(profileSetting: number, value: number): void;
		playstatsNpcInvite(): number;
		playstatsAwardXp(amount: number, type: number, category: number): void;
		playstatsRankUp(rank: number): void;
		playstatsMissionStarted(p1: number, p2: number, p3: boolean): number;
		playstatsMissionOver(p1: number, p2: number, p3: boolean, p4: boolean, p5: boolean): number;
		playstatsMissionCheckpoint(p1: number, p2: number, p3: number): number;
		playstatsRaceCheckpoint(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		playstatsMatchStarted(p0: number, p1: number, p2: number): void;
		playstatsShopItem(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		playstatsWebsiteVisited(scaleformHash: number, p1: number): void;
		playstatsFriendActivity(p0: number, p1: number): void;
		playstatsOddjobDone(p0: number, p1: number, p2: number): void;
		playstatsPropChange(p0: number, p1: number, p2: number, p3: number): void;
		playstatsClothChange(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		playstatsCheatApplied(cheat: string): void;
	}

	export interface GameStats extends GameStatsLegacy {
		statClearSlotForReload(statSlot: number): number;
		statLoad(p0: number): boolean;
		statSave(p0: number, p1: boolean, p2: number, p3: number): boolean;
		statLoadPending(p0: number): boolean;
		statSavePending(): boolean;
		statSavePendingOrRequested(): boolean;
		statDeleteSlot(p0: number): number;
		statSlotIsLoaded(p0: number): boolean;
		statSetBlockSaves(toggle: boolean): void;
		statSetInt(statName: number, value: number, save: boolean): boolean;
		statSetFloat(statName: number, value: number, save: boolean): boolean;
		statSetBool(statName: number, value: boolean, save: boolean): boolean;
		statSetGxtLabel(statName: number, value: string, save: boolean): boolean;
		statSetDate(statName: number, numFields: number, save: boolean): number;
		statSetString(statName: number, value: string, save: boolean): boolean;
		statSetPos(statName: number, x: number, y: number, z: number, save: boolean): boolean;
		statSetMaskedInt(statName: number, p1: number, p2: number, p3: number, save: boolean): boolean;
		statSetUserId(statName: number, value: string, save: boolean): boolean;
		statSetCurrentPosixTime(statName: number, p1: boolean): boolean;
		statGetInt(statHash: number, p2: number): number;
		statGetFloat(statHash: number, p2: number): number;
		statGetBool(statHash: number, p2: number): boolean;
		statGetDate(statHash: number, p2: number, p3: number): number;
		statGetString(statHash: number, p1: number): string;
		statGetPos(p0: number, p4: number): StatGetPosResult;
		statGetMaskedInt(p0: number, p2: number, p3: number, p4: number): number;
		statGetUserId(p0: number): string;
		statGetLicensePlate(statName: number): string;
		statSetLicensePlate(statName: number, str: string): boolean;
		statIncrement(statName: number, value: number): void;
		statGetNumberOfDays(statName: number): number;
		statGetNumberOfHours(statName: number): number;
		statGetNumberOfMinutes(statName: number): number;
		statGetNumberOfSeconds(statName: number): number;
		statSetProfileSettingValue(profileSetting: number, value: number): void;
		statGetPackedBoolMask(p0: number): number;
		statGetPackedIntMask(p0: number): number;
		getPackedBoolStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;
		getPackedIntStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;
		getPackedTuBoolStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;
		getPackedTuIntStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;
		getNgstatBoolHash(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;
		getNgstatIntHash(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;
		statGetBoolMasked(statName: number, mask: number, p2: number): boolean;
		statSetBoolMasked(statName: number, value: boolean, mask: number, save: boolean): boolean;
		playBackgroundScriptAction(action: string, value: number): void;
		playNpcInvite(): number;
		playAwardXp(amount: number, type: number, category: number): void;
		playRankUp(rank: number): void;
		playStartOfflineMode(): void;
		playActivityDone(p0: number, p1: number): void;
		playLeaveJobChain(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		playMissionStarted(p1: number, p2: number, p3: boolean): number;
		playMissionOver(p1: number, p2: number, p3: boolean, p4: boolean, p5: boolean): number;
		playMissionCheckpoint(p1: number, p2: number, p3: number): number;
		playRandomMissionDone(name: string, p1: number, p2: number, p3: number): void;
		playRosBet(amount: number, act: number, player: number, cm: number): void;
		playRaceCheckpoint(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		playMatchStarted(p0: number, p1: number, p2: number): void;
		playShopItem(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		playCrateDropMissionDone(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
		playCrateCreatedMissionDone(p0: number, p1: number, p2: number): void;
		playHoldUpMissionDone(p0: number, p1: number, p2: number, p3: number): void;
		playImportExportMissionDone(p0: number, p1: number, p2: number, p3: number): void;
		playRaceToPointMissionDone(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number
		): void;
		playAcquiredHiddenPackage(p0: number): void;
		playWebsiteVisited(scaleformHash: number, p1: number): void;
		playFriendActivity(p0: number, p1: number): void;
		playOddjobDone(p0: number, p1: number, p2: number): void;
		playPropChange(p0: number, p1: number, p2: number, p3: number): void;
		playClothChange(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		playWeaponModeChange(weaponHash: number, componentHashTo: number, componentHashFrom: number): void;
		playCheatApplied(cheat: string): void;
		playQuickfixTool(element: number, item: string): void;
		playIdleKick(time: number): void;
		playHeistSaveCheat(hash: number, p1: number): void;
		playDirectorMode(): number;
		playAwardBadsport(id: number): void;
		playPegasaircraft(modelHash: number): void;
		playPiMenuHideSettings(): number;
		leaderboardsGetNumberOfColumns(p0: number, p1: number): number;
		leaderboardsGetColumnId(p0: number, p1: number, p2: number): number;
		leaderboardsGetColumnType(p0: number, p1: number, p2: number): number;
		leaderboardsReadClearAll(): number;
		leaderboardsReadClear(p0: number, p1: number, p2: number): number;
		leaderboardsReadPending(p0: number, p1: number, p2: number): boolean;
		leaderboardsReadAnyPending(): boolean;
		leaderboardsReadSuccessful(p0: number, p1: number, p2: number): boolean;
		leaderboards2ReadFriendsByRow(p2: number, p3: boolean, p4: number, p5: number): Leaderboards2ReadFriendsByRowResult;
		leaderboards2ReadByHandle(): Leaderboards2ReadByHandleResult;
		leaderboards2ReadByRow(p2: number, p4: number, p6: number): Leaderboards2ReadByRowResult;
		leaderboards2ReadByRank(p1: number, p2: number): number;
		leaderboards2ReadByRadius(p1: number): Leaderboards2ReadByRadiusResult;
		leaderboards2ReadByScoreInt(p1: number, p2: number): number;
		leaderboards2ReadByScoreFloat(p1: number, p2: number): number;
		leaderboards2ReadRankPrediction(): Leaderboards2ReadRankPredictionResult;
		leaderboards2ReadByPlatform(gamerHandleCsv: string, platformName: string): number;
		leaderboards2WriteData(): number;
		leaderboardsWriteAddColumn(p0: number, p1: number, p2: number): void;
		leaderboardsWriteAddColumnLong(p0: number, p1: number, p2: number): void;
		leaderboardsCacheDataRow(): number;
		leaderboardsClearCacheData(): void;
		leaderboardsGetCacheExists(p0: number): boolean;
		leaderboardsGetCacheTime(p0: number): number;
		leaderboardsGetCacheNumberOfRows(p0: number): number;
		leaderboardsGetCacheDataRow(p0: number, p1: number): number;
		updateStatInt(statHash: number, value: number, p2: number): void;
		updateStatFloat(statHash: number, value: number, p2: number): void;
		setProfileSettingPrologueComplete(): void;
		statSetCheatIsActive(): void;
		leaderboards2WriteDataForEventType(): Leaderboards2WriteDataForEventTypeResult;
		statMigrateSave(platformName: string): boolean;
		statSaveMigrationStatusStart(): boolean;
		statGetSaveMigrationStatus(): StatGetSaveMigrationStatusResult;
		statSaveMigrationCancel(): boolean;
		statGetCancelSaveMigrationStatus(): number;
		statSaveMigrationConsumeContentUnlock(contentId: number, srcPlatform: string, srcGamerHandle: string): boolean;
		statGetSaveMigrationConsumeContentUnlockStatus(): StatGetSaveMigrationConsumeContentUnlockStatusResult;
		setHasContentUnlocksFlags(value: number): void;
		setSaveMigrationTransactionId(transactionId: number): void;
		playSpentPiCustomLoadout(amount: number): void;
		playBuyContraband(): number;
		playSellContraband(): number;
		playDefendContraband(): number;
		playRecoverContraband(): number;
		hiredLimo(p0: number, p1: number): void;
		orderedBossVehicle(p0: number, p1: number, vehicleHash: number): void;
		playStuntPerformedEventAllowTrigger(): void;
		playStuntPerformedEventDisallowTrigger(): void;
		playChangeMcEmblem(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		playEarnedMcPoints(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		playCopyRankIntoNewSlot(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		playDupeDetection(): number;
		playBanAlert(p0: number): void;
		playGunrunMissionEnded(): number;
		playStoneHatchetEnd(): number;
		playSmugMissionEnded(): number;
		playH2FmprepEnd(): number;
		playH2InstanceEnd(p1: number, p2: number, p3: number): number;
		playDarMissionEnd(): number;
		playEnterSessionPack(): number;
		playDroneUsage(p0: number, p1: number, p2: number): void;
		playSpectatorWheelSpin(p0: number, p1: number, p2: number, p3: number): void;
		playArenaWarSpectator(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		playArenaWarsEnded(): number;
		playPassiveMode(p0: boolean, p1: number, p2: number, p3: number): void;
		playCollectible(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;
		playCasinoStoryMissionEnded(p0: number, p1: number): void;
		playCasinoChip(p0: number): void;
		playCasinoRoulette(p0: number): void;
		playCasinoBlackjack(p0: number): void;
		playCasinoThreecardpoker(p0: number): void;
		playCasinoSlotmachine(p0: number): void;
		playCasinoInsidetrack(p0: number): void;
		playCasinoLuckyseven(p0: number): void;
		playCasinoRouletteLight(p0: number): void;
		playCasinoBlackjackLight(p0: number): void;
		playCasinoThreecardpokerLight(p0: number): void;
		playCasinoSlotmachineLight(p0: number): void;
		playCasinoInsidetrackLight(p0: number): void;
		playArcadegame(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		playCasinoMissionEnded(): number;

		unk: GameStatsUnk;
	}

	export interface GameStatsUnk {
		_0x5688585E6D563CD8(p0: number): void;
		_0x7F2C4CDF2E82DF4C(p0: number): boolean;
		_0xE496A53BA5F50A56(p0: number): number;
		_0x6A7F19756F1A9016(): boolean;
		_0x7E6946F68A38B74F(p0: number): boolean;
		_0xA8733668D1047B51(p0: number): void;
		_0xECB41AC6AB754401(): boolean;
		_0x9B4BD21D69B1E609(): void;
		_0xC0E0D686DDFC6EAE(): number;
		_0x5A556B229A169402(): boolean;
		_0xB1D2BB1E1631F5B1(): boolean;
		_0xBED9F5693F34ED17(statName: number, p1: number): number;
		_0x26D7399B9587FE89(p0: number): void;
		_0xA78B8FA58200DA56(p0: number): void;
		_0x6DEE77AFF8C21BD1(): _0x6DEE77AFF8C21BD1Result;
		_0xF8C54A461C3E11DC(): _0xF8C54A461C3E11DCResult;
		_0xF5BB8DAC426A52C0(): _0xF5BB8DAC426A52C0Result;
		_0xA736CF7FB7C5BFF4(): _0xA736CF7FB7C5BFF4Result;
		_0x14E0B2D1AD1044E0(): _0x14E0B2D1AD1044E0Result;
		_0xD1032E482629049E(p0: number): void;
		_0x6A60E43998228229(p0: number): void;
		_0xBFAFDB5FAAA5C5AB(p0: number): void;
		_0x8C9D11605E59D955(p0: number): void;
		_0x3DE3AA516FB126A4(p0: number): void;
		_0xBAA2F0490E146BE8(p0: number): void;
		_0x1A7CE7CD3E653485(p0: number): void;
		_0x419615486BBF1956(p0: number): void;
		_0x84DFC579C2FC214C(p0: number): void;
		_0x0A9C7F36E5D7B683(p0: number): void;
		_0x164C5FF663790845(p0: number): void;
		_0xEDBF6C9B0D2C65C8(p0: number): void;
		_0x6551B1F7F6CD46EA(p0: number): void;
		_0x2CD90358F67D0AA8(p0: number): void;
		_0xA0F93D5465B3094D(): number;
		_0x71B008056E5692D6(): void;
		_0x34770B9CE0E03B91(p0: number): number;
		_0x88578F6EC36B4A3A(p0: number, p1: number): number;
		_0x38491439B6BA7F7D(p0: number, p1: number): number;
		_0x8EC74CEB042E7CFF(p0: number): void;
		_0x6483C25849031C4F(p0: number, p1: number, p2: number): number;
		_0x5EAD2BF6484852E4(): boolean;
		_0xC141B8917E0017EC(): void;
		_0xC67E2DA1CBE759E2(): void;
		_0xF1A1803D3476F215(value: number): void;
		_0x38BAAA5DD4C9D19F(value: number): void;
		_0x55384438FC55AD8E(value: number): void;
		_0x723C1CE13FBFDB67(p0: number, p1: number): void;
		_0x0D01D20616FC73FB(p0: number, p1: number): void;
		_0x428EAF89E24F6C36(p0: number, p1: number): void;
		_0x6F361B8889A792A3(): void;
		_0xC847B43F369AC0B5(): void;
		_0x9A62EC95AE10E011(): number;
		_0x4C89FE2BDEB3F169(): number;
		_0xC6E0E2616A7576BB(): number;
		_0x5BD5F255321C4AAF(p0: number): number;
		_0xDEAAF77EB3687E97(p0: number): _0xDEAAF77EB3687E97Result;
		_0x98E2BC1CA26287C3(): void;
		_0x629526ABA383BCAA(): void;
		_0xBE3DB208333D9844(): number;
		_0x33D72899E24C3365(p0: number, p1: number): number;
		_0xA761D4AC6115623D(): number;
		_0xF11F01D98113536A(p0: number): number;
		_0x8B9CDBD6C566C38C(): number;
		_0xE8853FBCE7D8D0D6(): number;
		_0xA943FD1722E11EFD(): number;
		_0x84A810B375E69C0E(): number;
		_0x9EC8858184CD253A(): number;
		_0xBA9749CC94C1FD85(): number;
		_0x55A8BECAF28A4EB7(): number;
		_0x32CAC93C9DE73D32(): number;
		_0xAFF47709F1D5DCCE(): number;
		_0x6E0A5253375C4584(): number;
		_0x1A8EA222F9C67DBB(p0: number): number;
		_0xF9F2922717B819EC(): number;
		_0x0B8B7F74BF061C6D(): number;
		_0xB3DA2606774A8E2D(): boolean;
		_0x6BC0ACD0673ACEBE(p0: number, p1: number, p2: number): void;
		_0x8D8ADB562F09A245(p0: number): void;
		_0xD1A1EE3B4FA8E760(p0: number): void;
		_0x88087EE1F28024AE(p0: number): void;
		_0xFCC228E07217FCAC(p0: number): void;
		_0x678F86D8FC040BDB(p0: number): void;
		_0xA6F54BB2FFCA35EA(p0: number): void;
		_0x5FF2C33B13A02A11(p0: number): void;
		_0x282B6739644F4347(p0: number): void;
		_0xF06A6F41CB445443(p0: number): void;
		_0x7B18DA61F6BAE9D5(p0: number): void;
		_0x06EAF70AE066441E(p0: number): void;
		_0x14EDA9EE27BD1626(p0: number): void;
		_0x930F504203F561C9(p0: number): void;
		_0xE3261D791EB44ACB(p0: number): void;
		_0x73001E34F85137F8(p0: number): void;
		_0x53CAE13E9B426993(p0: number): void;
		_0x7D36291161859389(p0: number): void;
		_0x60EEDC12AF66E846(p0: number): void;
		_0x3EBEAC6C3F81F6BD(p0: number): void;
		_0x96E6D5150DBF1C09(p0: number, p1: number, p2: number): void;
		_0xA3C53804BDB68ED2(p0: number, p1: number): void;
		_0x6BCCF9948492FD85(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		_0xD1C9B92BDD3F151D(p0: number, p1: number, p2: number): void;
		_0x44919CC079BB60BF(p0: number): void;
		_0x7033EEFD9B28088E(p0: number): void;
		_0xAA525DFF66BB82F5(p0: number, p1: number, p2: number): void;
		_0x015B03EE1C43E6EC(p0: number): void;
		_0xBF371CD2B64212FD(p0: number): void;
		_0x7D8BA05688AD64C7(p0: number): void;
		_0x0B565B0AAE56A0E8(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		_0x28ECB8AC2F607DB2(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		_0xCC25A4553DFBF9EA(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		_0xF534D94DFA2EAD26(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		_0xD558BEC0BBA7E8D2(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		_0x03C2EEBB04B3FB72(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		_0x8989CBD7B4E82534(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		_0x27AA1C973CACFE63(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number
		): void;
		_0xDAF80797FC534BEC(p0: number): void;
		_0x316DB59CD14C1774(p0: number): void;
		_0x2D7A9B577E72385E(p0: number): void;
		_0x830C3A44EB3F2CF9(p0: number): void;
		_0xB26F670685631727(p0: number, p1: number): void;
		_0xC14BD9F5337219B2(p0: number, p1: number): void;
		_0x4FCDBD3F0A813C25(p0: number, p1: number): void;
		_0xDFBD93BF2943E29B(p0: number): void;
		_0x92FC0EEDFAC04A14(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		_0x0077F15613D36993(p0: number, p1: number, p2: number, p3: number): void;
		_0xF9096193DF1F99D4(p0: number): void;
		_0x2E0259BABC27A327(p0: number): void;
		_0x53C31853EC9531FF(p0: number): void;
		_0x810B5FCC52EC7FF0(p0: number, p1: number, p2: number, p3: number): void;
		_0x5BF29846C6527C54(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		_0xC03FAB2C2F92289B(p0: number): void;
		_0x5CDAED54B34B0ED0(p0: number): void;
		_0x4AFF7E02E485E92B(): void;
		_0xDFCDB14317A9B361(p0: number): void;
		_0xC1E963C58664B556(p0: number): void;
		_0x2FA3173480008493(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		_0xD4367D310F079DB0(p0: number, p1: number, p2: number, p3: number): void;
		_0x4DC416F246A41FC8(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		_0x2818FF6638CB09DE(p0: number): void;
		_0xD6CA58B3B53A0F22(p0: number): void;
	}

	export interface _0xDEAAF77EB3687E97Result {
		p1: number;
		result: number;
	}

	export interface _0x6DEE77AFF8C21BD1Result {
		playerAccountId: number;
		posixTime: number;
		result: boolean;
	}

	export interface _0xF8C54A461C3E11DCResult {
		p0: number;
		p1: number;
		p2: number;
		p3: number;
	}

	export interface _0xF5BB8DAC426A52C0Result {
		p0: number;
		p1: number;
		p2: number;
		p3: number;
	}

	export interface _0xA736CF7FB7C5BFF4Result {
		p0: number;
		p1: number;
		p2: number;
		p3: number;
	}

	export interface _0x14E0B2D1AD1044E0Result {
		p0: number;
		p1: number;
		p2: number;
		p3: number;
	}

	export interface Leaderboards2ReadFriendsByRowResult {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface Leaderboards2ReadByHandleResult {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface Leaderboards2ReadByRowResult {
		p0: number;
		p1: number;
		p3: number;
		p5: number;
		result: boolean;
	}

	export interface Leaderboards2ReadByRadiusResult {
		p0: number;
		p2: number;
		result: boolean;
	}

	export interface Leaderboards2ReadRankPredictionResult {
		p0: number;
		p1: number;
		p2: number;
		result: boolean;
	}

	export interface Leaderboards2WriteDataForEventTypeResult {
		p0: number;
		p1: number;
		result: boolean;
	}

	export interface StatGetSaveMigrationStatusResult {
		data: number;
		result: number;
	}

	export interface StatGetSaveMigrationConsumeContentUnlockStatusResult {
		p0: number;
		result: number;
	}

	export interface StatGetPosResult {
		p1: number;
		p2: number;
		p3: number;
		result: boolean;
	}

	export interface GameStreamingLegacy {
		requestModel2(model: number): void;
		setStreaming(toggle: boolean): void;
		setGamePausesForStreaming(toggle: boolean): void;
		removeNamedPtfxAsset(fxName: string): void;
		setFocusArea(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;
		setUnkCameraSettings(x: number, y: number, z: number, rad: number, p4: number, p5: number): number;
		newLoadSceneStartSafe(x: number, y: number, z: number, radius: number, p4: number): boolean;
		setPlayerSwitchLocation(
			cameraCoordX: number,
			cameraCoordY: number,
			cameraCoordZ: number,
			camRotationX: number,
			camRotationY: number,
			camRotationZ: number,
			camFov: number,
			camFarClip: number,
			rotationOrder: number
		): void;
	}

	export interface GameStreaming extends GameStreamingLegacy {
		loadAllObjectsNow(): void;
		loadScene(x: number, y: number, z: number): void;
		networkUpdateLoadScene(): boolean;
		isNetworkLoadingScene(): boolean;
		setInteriorActive(interiorID: number, toggle: boolean): void;
		requestModel(model: number): void;
		requestMenuPedModel(model: number): void;
		hasModelLoaded(model: number): boolean;
		requestModelsInRoom(interior: number, roomName: string): void;
		setModelAsNoLongerNeeded(model: number): void;
		isModelInCdimage(model: number): boolean;
		isModelValid(model: number): boolean;
		isModelAPed(model: number): boolean;
		isModelAVehicle(model: number): boolean;
		requestCollisionAtCoord(x: number, y: number, z: number): void;
		requestCollisionForModel(model: number): void;
		hasCollisionForModelLoaded(model: number): boolean;
		requestAdditionalCollisionAtCoord(x: number, y: number, z: number): void;
		doesAnimDictExist(animDict: string): boolean;
		requestAnimDict(animDict: string): void;
		hasAnimDictLoaded(animDict: string): boolean;
		removeAnimDict(animDict: string): void;
		requestAnimSet(animSet: string): void;
		hasAnimSetLoaded(animSet: string): boolean;
		removeAnimSet(animSet: string): void;
		requestClipSet(clipSet: string): void;
		hasClipSetLoaded(clipSet: string): boolean;
		removeClipSet(clipSet: string): void;
		requestIpl(iplName: string): void;
		removeIpl(iplName: string): void;
		isIplActive(iplName: string): boolean;
		set(toggle: boolean): void;
		loadGlobalWaterType(waterType: number): void;
		getGlobalWaterType(): number;
		setGamePausesFor(toggle: boolean): void;
		setReducePedModelBudget(toggle: boolean): void;
		setReduceVehicleModelBudget(toggle: boolean): void;
		setDitchPoliceModels(toggle: boolean): void;
		getNumberOfRequests(): number;
		requestPtfxAsset(): void;
		hasPtfxAssetLoaded(): boolean;
		removePtfxAsset(): void;
		requestNamedPtfxAsset(fxName: string): void;
		hasNamedPtfxAssetLoaded(fxName: string): boolean;
		removeNamedPtfxAsset(fxName: string): void;
		setVehiclePopulationBudget(p0: number): void;
		setPedPopulationBudget(p0: number): void;
		clearFocus(): void;
		setFocusPosAndVel(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;
		setFocusEntity(entity: number): void;
		isEntityFocus(entity: number): boolean;
		setMapdatacullboxEnabled(name: string, toggle: boolean): void;
		formatFocusHeading(x: number, y: number, z: number, rad: number, p4: number, p5: number): number;
		newLoadSceneStart(
			posX: number,
			posY: number,
			posZ: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			radius: number,
			p7: number
		): boolean;
		newLoadSceneStartSphere(x: number, y: number, z: number, radius: number, p4: number): boolean;
		newLoadSceneStop(): void;
		isNewLoadSceneActive(): boolean;
		isNewLoadSceneLoaded(): boolean;
		startPlayerSwitch(from: number, to: number, flags: number, switchType: number): void;
		stopPlayerSwitch(): void;
		isPlayerSwitchInProgress(): boolean;
		getPlayerSwitchType(): number;
		getIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
		getPlayerSwitchState(): number;
		getPlayerShortSwitchState(): number;
		getPlayerSwitchJumpCutIndex(): number;
		setPlayerSwitchOutro(
			cameraCoordX: number,
			cameraCoordY: number,
			cameraCoordZ: number,
			camRotationX: number,
			camRotationY: number,
			camRotationZ: number,
			camFov: number,
			camFarClip: number,
			rotationOrder: number
		): void;
		setPlayerSwitchEstablishingShot(name: string): void;
		allowPlayerSwitchPan(): void;
		allowPlayerSwitchOutro(): void;
		allowPlayerSwitchAscent(): void;
		allowPlayerSwitchDescent(): void;
		isSwitchReadyForDescent(): boolean;
		enableSwitchPauseBeforeDescent(): void;
		disableSwitchOutroFx(): void;
		switchOutPlayer(ped: number, flags: number, switchType: number): void;
		switchInPlayer(ped: number): void;
		getPlayerSwitchInterpOutDuration(): number;
		isSwitchSkippingDescent(): boolean;
		getLodscale(): number;
		overrideLodscaleThisFrame(scaling: number): void;
		prefetchSrl(srl: string): void;
		isSrlLoaded(): boolean;
		beginSrl(): void;
		endSrl(): void;
		setSrlTime(p0: number): void;
		setHdArea(x: number, y: number, z: number, radius: number): void;
		clearHdArea(): void;
		initCreatorBudget(): void;
		shutdownCreatorBudget(): void;
		addModelToCreatorBudget(modelHash: number): boolean;
		removeModelFromCreatorBudget(modelHash: number): void;
		getUsedCreatorModelMemoryPercentage(): number;
		setIslandHopperEnabled(name: string, toggle: boolean): void;

		unk: GameStreamingUnk;
	}

	export interface GameStreamingUnk {
		_0x0811381EF5062FEC(p0: number): void;
		_0x4E52E752C76E7E7A(p0: number): void;
		_0x1F3F018BC3AFA77C(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;
		_0x0AD9710CEE2F590F(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
		_0x1EE7D8DF4425F053(p0: number): void;
		_0x7D41E9D2D17C5B2D(p0: number): number;
		_0x07C313F94746702C(p0: number): number;
		_0xBC9823AB80A3DCAC(): number;
		_0x71E7B2E657449AAD(): number;
		_0x5F2013F8BC24EE69(p0: number): void;
		_0x933BBEEB8C61B5F4(): boolean;
		_0x5B48A06DD0E792A5(): number;
		_0x1E9057A74FD73E23(): void;
		_0xBED8CA5FF5E04113(p0: number, p1: number, p2: number, p3: number): void;
		_0x472397322E92A856(): void;
		_0x40AEFD1A244741F2(p0: boolean): void;
		_0x03F1A106BDA7DD3E(): void;
		_0x95A7DABDDBB78AE7(iplName1: string, iplName2: string): void;
		_0x63EB2B972A218CAC(): void;
		_0xFB199266061F820A(): boolean;
		_0xF4A0DADB70F57FA6(): void;
		_0x5068F488DDB54DD8(): number;
		_0xEF39EE20C537E98C(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		_0xBEB2D9A1D9A8F55A(p0: number, p1: number, p2: number, p3: number): void;
		_0x20C6C7E4EB082A7F(p0: boolean): void;
		_0xF8155A7F03DDFC8E(p0: number): void;
	}

	export interface GameTaskLegacy {
		taskPause(ped: number, ms: number): void;
		taskStandStill(ped: number, time: number): void;
		taskJump(ped: number, unused: boolean, p2: number, p3: number): void;
		taskCower(ped: number, duration: number): void;
		taskHandsUp(ped: number, duration: number, facingPed: number, p3: number, p4: boolean): void;
		updateTaskHandsUpDuration(ped: number, duration: number): void;
		taskOpenVehicleDoor(ped: number, vehicle: number, timeOut: number, seat: number, speed: number): void;
		taskEnterVehicle(ped: number, vehicle: number, timeout: number, seat: number, speed: number, flag: number, p6: number): void;
		taskLeaveVehicle(ped: number, vehicle: number, flags: number): void;
		taskGetOffBoat(ped: number, boat: number): void;
		taskSkyDive(ped: number, p1: boolean): void;
		taskParachute(ped: number, p1: boolean, p2: boolean): void;
		taskParachuteToTarget(ped: number, x: number, y: number, z: number): void;
		setParachuteTaskTarget(ped: number, x: number, y: number, z: number): void;
		setParachuteTaskThrust(ped: number, thrust: number): void;
		taskRappelFromHeli(ped: number, p1: number): void;
		taskVehicleDriveToCoord(
			ped: number,
			vehicle: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			p6: number,
			vehicleModel: number,
			drivingMode: number,
			stopRange: number,
			p10: number
		): void;
		taskVehicleDriveToCoordLongrange(
			ped: number,
			vehicle: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			driveMode: number,
			stopRange: number
		): void;
		taskVehicleDriveWander(ped: number, vehicle: number, speed: number, drivingStyle: number): void;
		taskGoStraightToCoord(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			timeout: number,
			targetHeading: number,
			distanceToSlide: number
		): void;
		taskAchieveHeading(ped: number, heading: number, timeout: number): void;
		taskFollowPointRoute(ped: number, speed: number, unknown: number): void;
		taskSmartFleeCoord(ped: number, x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean): void;
		taskShockingEventReact(ped: number, eventHandle: number): void;
		taskWanderInArea(ped: number, x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
		taskWanderStandard(ped: number, p1: number, p2: number): void;
		taskVehiclePark(
			ped: number,
			vehicle: number,
			x: number,
			y: number,
			z: number,
			heading: number,
			mode: number,
			radius: number,
			keepEngineOn: boolean
		): void;
		taskStealthKill(killer: number, target: number, actionType: number, p3: number, p4: number): void;
		taskPlantBomb(ped: number, x: number, y: number, z: number, heading: number): void;
		taskFollowNavMeshToCoord(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			timeout: number,
			stoppingRange: number,
			persistFollowing: boolean,
			unk: number
		): void;
		taskFollowNavMeshToCoordAdvanced(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			timeout: number,
			unkFloat: number,
			unkInt: number,
			unkX: number,
			unkY: number,
			unkZ: number,
			unk_40000f: number
		): void;
		taskGoToCoordAnyMeans(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			p5: number,
			p6: boolean,
			walkingStyle: number,
			p8: number
		): void;
		taskGoToCoordAnyMeansExtraParams(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			p5: number,
			p6: boolean,
			walkingStyle: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number,
			p12: number
		): void;
		taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			p5: number,
			p6: boolean,
			walkingStyle: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number,
			p12: number,
			p13: number
		): void;
		taskPlayAnim(
			ped: number,
			animDictionary: string,
			animationName: string,
			blendInSpeed: number,
			blendOutSpeed: number,
			duration: number,
			flag: number,
			playbackRate: number,
			lockX: boolean,
			lockY: boolean,
			lockZ: boolean
		): void;
		taskPlayAnimAdvanced(
			ped: number,
			animDict: string,
			animName: string,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			animEnterSpeed: number,
			animExitSpeed: number,
			duration: number,
			flag: number,
			animTime: number,
			p14: number,
			p15: number
		): void;
		stopAnimTask(ped: number, animDictionary: string, animationName: string, p3: number): void;
		taskScriptedAnimation(ped: number, p4: number, p5: number): TaskScriptedAnimationResult;
		taskPlayPhoneGestureAnimation(
			ped: number,
			animDict: string,
			animation: string,
			boneMaskType: string,
			p4: number,
			p5: number,
			p6: boolean,
			p7: boolean
		): void;
		taskStopPhoneGestureAnimation(ped: number, p1: number): void;
		taskClearLookAt(ped: number): void;
		taskPerformSequence(ped: number, taskSequenceId: number): void;
		getIsTaskActive(ped: number, taskIndex: number): boolean;
		getScriptTaskStatus(ped: number, taskHash: number): number;
		taskLeaveAnyVehicle(ped: number, p1: number, flags: number): void;
		taskAimGunScripted(ped: number, scriptTask: number, p2: boolean, p3: boolean): void;
		updateTaskAimGunScriptedTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;
		taskAimGunAtCoord(ped: number, x: number, y: number, z: number, time: number, p5: boolean, p6: boolean): void;
		taskShootAtCoord(ped: number, x: number, y: number, z: number, duration: number, firingPattern: number): void;
		taskShuffleToNextVehicleSeat(ped: number, vehicle: number, p2: number): void;
		clearPedSecondaryTask(ped: number): void;
		taskGotoEntityOffset(ped: number, p1: number, p2: number, x: number, y: number, z: number, duration: number): void;
		taskVehicleTempAction(driver: number, vehicle: number, action: number, time: number): void;
		taskVehicleMission(
			driver: number,
			vehicle: number,
			vehicleTarget: number,
			missionType: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			DriveAgainstTraffic: boolean
		): void;
		taskVehicleMissionCoorsTarget(
			ped: number,
			vehicle: number,
			x: number,
			y: number,
			z: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			DriveAgainstTraffic: boolean
		): void;
		taskVehicleEscort(
			ped: number,
			vehicle: number,
			targetVehicle: number,
			mode: number,
			speed: number,
			drivingStyle: number,
			minDistance: number,
			p7: number,
			noRoadsDistance: number
		): void;
		taskVehicleFollow(driver: number, vehicle: number, targetEntity: number, speed: number, drivingStyle: number, minDistance: number): void;
		taskVehicleChase(driver: number, targetEnt: number): void;
		taskVehicleHeliProtect(
			pilot: number,
			vehicle: number,
			entityToFollow: number,
			targetSpeed: number,
			p4: number,
			radius: number,
			altitude: number,
			p7: number
		): void;
		setTaskVehicleChaseBehaviorFlag(ped: number, flag: number, set: boolean): void;
		setTaskVehicleChaseIdealPursuitDistance(ped: number, distance: number): void;
		taskHeliChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;
		taskPlaneChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;
		taskPlaneLand(
			pilot: number,
			plane: number,
			runwayStartX: number,
			runwayStartY: number,
			runwayStartZ: number,
			runwayEndX: number,
			runwayEndY: number,
			runwayEndZ: number
		): void;
		taskHeliMission(
			pilot: number,
			aircraft: number,
			targetVehicle: number,
			targetPed: number,
			destinationX: number,
			destinationY: number,
			destinationZ: number,
			missionFlag: number,
			maxSpeed: number,
			landingRadius: number,
			targetHeading: number,
			unk1: number,
			unk2: number,
			unk3: number,
			landingFlags: number
		): void;
		taskPlaneMission(
			pilot: number,
			aircraft: number,
			targetVehicle: number,
			targetPed: number,
			destinationX: number,
			destinationY: number,
			destinationZ: number,
			missionFlag: number,
			angularDrag: number,
			unk: number,
			targetHeading: number,
			maxZ: number,
			minZ: number,
			p13: number
		): void;
		taskBoatMission(
			pedDriver: number,
			boat: number,
			p2: number,
			p3: number,
			x: number,
			y: number,
			z: number,
			p7: number,
			maxSpeed: number,
			drivingStyle: number,
			p10: number,
			p11: number
		): void;
		taskDriveBy(
			driverPed: number,
			targetPed: number,
			targetVehicle: number,
			targetX: number,
			targetY: number,
			targetZ: number,
			distanceToShoot: number,
			pedAccuracy: number,
			p8: boolean,
			firingPattern: number
		): void;
		clearDrivebyTaskUnderneathDrivingTask(ped: number): void;
		isDrivebyTaskUnderneathDrivingTask(ped: number): boolean;
		isMountedWeaponTaskUnderneathDrivingTask(ped: number): boolean;
		taskUseMobilePhone(ped: number, p1: number, p2: number): void;
		taskUseMobilePhoneTimed(ped: number, duration: number): void;
		taskClimb(ped: number, unused: boolean): void;
		taskClimbLadder(ped: number, p1: number): void;
		taskSetDecisionMaker(ped: number, p1: number): void;
		taskSeekCoverToCoords(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: number, p8: boolean): void;
		taskGuardCurrentPosition(p0: number, p1: number, p2: number, p3: boolean): void;
		taskGuardSphereDefensiveArea(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number
		): void;
		taskStandGuard(ped: number, x: number, y: number, z: number, heading: number, scenarioName: string): void;
		setDriveTaskCruiseSpeed(driver: number, cruiseSpeed: number): void;
		setDriveTaskDrivingStyle(ped: number, drivingStyle: number): void;
		taskStartScenarioInPlace(ped: number, scenarioName: string, unkDelay: number, playEnterAnim: boolean): void;
		taskStartScenarioAtPosition(
			ped: number,
			scenarioName: string,
			x: number,
			y: number,
			z: number,
			heading: number,
			duration: number,
			sittingScenario: boolean,
			teleport: boolean
		): void;
		taskUseNearestScenarioToCoord(ped: number, x: number, y: number, z: number, distance: number, duration: number): void;
		taskUseNearestScenarioToCoordWarp(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;
		pedHasUseScenarioTask(ped: number): boolean;
		taskCombatHatedTargetsInArea(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;
		taskSwapWeapon(ped: number, p1: boolean): void;
		taskReloadWeapon(ped: number, unused: boolean): void;
		taskWrithe(ped: number, target: number, time: number, p3: number, p4: number, p5: number): void;
		taskPatrol(ped: number, p1: string, p2: number, p3: boolean, p4: boolean): void;
		taskStayInCover(ped: number): void;
		taskVehicleShootAtPed(ped: number, target: number, p2: number): void;
		taskVehicleGotoNavmesh(
			ped: number,
			vehicle: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			behaviorFlag: number,
			stoppingRange: number
		): void;
		taskGoToCoordWhileAimingAtCoord(
			ped: number,
			x: number,
			y: number,
			z: number,
			aimAtX: number,
			aimAtY: number,
			aimAtZ: number,
			moveSpeed: number,
			p8: boolean,
			p9: number,
			p10: number,
			p11: boolean,
			flags: number,
			p13: boolean,
			firingPattern: number
		): void;
		taskGoToCoordAndAimAtHatedEntitiesNearCoord(
			pedHandle: number,
			goToLocationX: number,
			goToLocationY: number,
			goToLocationZ: number,
			focusLocationX: number,
			focusLocationY: number,
			focusLocationZ: number,
			speed: number,
			shootAtEnemies: boolean,
			distanceToStopAt: number,
			noRoadsDistance: number,
			unkTrue: boolean,
			unkFlag: number,
			aimingFlag: number,
			firingPattern: number
		): void;
		setHighFallTask(ped: number, p1: number, p2: number, p3: number): void;
		taskVehicleFollowWaypointRecording(
			ped: number,
			vehicle: number,
			WPRecording: string,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: boolean,
			p9: number
		): void;
		taskSetBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;
		taskForceMotionState(ped: number, state: number, p2: boolean): void;
		taskMoveNetwork(ped: number, task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;
		taskMoveNetworkAdvanced(
			ped: number,
			p1: string,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: boolean,
			animDict: string,
			flags: number
		): void;
		taskSynchronizedScene(
			ped: number,
			scene: number,
			animDictionary: string,
			animationName: string,
			speed: number,
			speedMultiplier: number,
			duration: number,
			flag: number,
			playbackRate: number,
			p9: number
		): void;
		updateTaskSweepAimEntity(ped: number, entity: number): void;
	}

	export interface GameTask extends GameTaskLegacy {
		pause(ped: number, ms: number): void;
		standStill(ped: number, time: number): void;
		jump(ped: number, unused: boolean, p2: number, p3: number): void;
		cower(ped: number, duration: number): void;
		handsUp(ped: number, duration: number, facingPed: number, p3: number, p4: boolean): void;
		updateHandsUpDuration(ped: number, duration: number): void;
		openVehicleDoor(ped: number, vehicle: number, timeOut: number, seat: number, speed: number): void;
		enterVehicle(ped: number, vehicle: number, timeout: number, seat: number, speed: number, flag: number, p6: number): void;
		leaveVehicle(ped: number, vehicle: number, flags: number): void;
		getOffBoat(ped: number, boat: number): void;
		skyDive(ped: number, p1: boolean): void;
		parachute(ped: number, p1: boolean, p2: boolean): void;
		parachuteToTarget(ped: number, x: number, y: number, z: number): void;
		setParachuteTarget(ped: number, x: number, y: number, z: number): void;
		setParachuteThrust(ped: number, thrust: number): void;
		rappelFromHeli(ped: number, p1: number): void;
		vehicleDriveToCoord(
			ped: number,
			vehicle: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			p6: number,
			vehicleModel: number,
			drivingMode: number,
			stopRange: number,
			p10: number
		): void;
		vehicleDriveToCoordLongrange(
			ped: number,
			vehicle: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			driveMode: number,
			stopRange: number
		): void;
		vehicleDriveWander(ped: number, vehicle: number, speed: number, drivingStyle: number): void;
		followToOffsetOfEntity(
			ped: number,
			entity: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			movementSpeed: number,
			timeout: number,
			stoppingRange: number,
			persistFollowing: boolean
		): void;
		goStraightToCoord(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			timeout: number,
			targetHeading: number,
			distanceToSlide: number
		): void;
		goStraightToCoordRelativeToEntity(entity1: number, entity2: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		achieveHeading(ped: number, heading: number, timeout: number): void;
		flushRoute(): void;
		extendRoute(x: number, y: number, z: number): void;
		followPointRoute(ped: number, speed: number, unknown: number): void;
		goToEntity(entity: number, target: number, duration: number, distance: number, speed: number, p5: number, p6: number): void;
		smartFleeCoord(ped: number, x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean): void;
		smartFleePed(ped: number, fleeTarget: number, distance: number, fleeTime: number, p4: boolean, p5: boolean): void;
		reactAndFleePed(ped: number, fleeTarget: number): void;
		shockingEventReact(ped: number, eventHandle: number): void;
		wanderInArea(ped: number, x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
		wanderStandard(ped: number, p1: number, p2: number): void;
		wanderSpecific(p0: number, p1: number, p2: number, p3: number): void;
		vehiclePark(
			ped: number,
			vehicle: number,
			x: number,
			y: number,
			z: number,
			heading: number,
			mode: number,
			radius: number,
			keepEngineOn: boolean
		): void;
		stealthKill(killer: number, target: number, actionType: number, p3: number, p4: number): void;
		plantBomb(ped: number, x: number, y: number, z: number, heading: number): void;
		followNavMeshToCoord(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			timeout: number,
			stoppingRange: number,
			persistFollowing: boolean,
			unk: number
		): void;
		followNavMeshToCoordAdvanced(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			timeout: number,
			unkFloat: number,
			unkInt: number,
			unkX: number,
			unkY: number,
			unkZ: number,
			unk_40000f: number
		): void;
		setPedPathCanUseClimbovers(ped: number, Toggle: boolean): void;
		setPedPathCanUseLadders(ped: number, Toggle: boolean): void;
		setPedPathCanDropFromHeight(ped: number, Toggle: boolean): void;
		setPedPathClimbCostModifier(ped: number, modifier: number): void;
		setPedPathMayEnterWater(ped: number, mayEnterWater: boolean): void;
		setPedPathPreferToAvoidWater(ped: number, avoidWater: boolean): void;
		setPedPathAvoidFire(ped: number, avoidFire: boolean): void;
		setGlobalMinBirdFlightHeight(height: number): void;
		getNavmeshRouteDistanceRemaining(ped: number): GetNavmeshRouteDistanceRemainingResult;
		getNavmeshRouteResult(ped: number): number;
		goToCoordAnyMeans(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			p5: number,
			p6: boolean,
			walkingStyle: number,
			p8: number
		): void;
		goToCoordAnyMeansExtraParams(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			p5: number,
			p6: boolean,
			walkingStyle: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number,
			p12: number
		): void;
		goToCoordAnyMeansExtraParamsWithCruiseSpeed(
			ped: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			p5: number,
			p6: boolean,
			walkingStyle: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number,
			p12: number,
			p13: number
		): void;
		playAnim(
			ped: number,
			animDictionary: string,
			animationName: string,
			blendInSpeed: number,
			blendOutSpeed: number,
			duration: number,
			flag: number,
			playbackRate: number,
			lockX: boolean,
			lockY: boolean,
			lockZ: boolean
		): void;
		playAnimAdvanced(
			ped: number,
			animDict: string,
			animName: string,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			animEnterSpeed: number,
			animExitSpeed: number,
			duration: number,
			flag: number,
			animTime: number,
			p14: number,
			p15: number
		): void;
		stopAnim(ped: number, animDictionary: string, animationName: string, p3: number): void;
		scriptedAnimation(ped: number, p4: number, p5: number): TaskScriptedAnimationResult;
		playEntityScriptedAnim(p0: number, p4: number, p5: number): PlayEntityScriptedAnimResult;
		stopAnimPlayback(ped: number, p1: number, p2: boolean): void;
		setAnimWeight(p0: number, p1: number, p2: number, p3: number, p4: boolean): void;
		setAnimRate(p0: number, p1: number, p2: number, p3: boolean): void;
		setAnimLooped(p0: number, p1: boolean, p2: number, p3: boolean): void;
		playPhoneGestureAnimation(
			ped: number,
			animDict: string,
			animation: string,
			boneMaskType: string,
			p4: number,
			p5: number,
			p6: boolean,
			p7: boolean
		): void;
		stopPhoneGestureAnimation(ped: number, p1: number): void;
		isPlayingPhoneGestureAnim(ped: number): boolean;
		getPhoneGestureAnimCurrentTime(ped: number): number;
		getPhoneGestureAnimTotalTime(ped: number): number;
		vehiclePlayAnim(vehicle: number, animationSet: string, animationName: string): void;
		lookAtCoord(entity: number, x: number, y: number, z: number, duration: number, p5: number, p6: number): void;
		lookAtEntity(ped: number, lookAt: number, duration: number, unknown1: number, unknown2: number): void;
		clearLookAt(ped: number): void;
		openSequence(): number;
		closeSequence(taskSequenceId: number): void;
		performSequence(ped: number, taskSequenceId: number): void;
		performSequenceLocally(ped: number, taskSequenceId: number): void;
		clearSequence(): number;
		setSequenceToRepeat(taskSequenceId: number, repeat: boolean): void;
		getSequenceProgress(ped: number): number;
		getIsActive(ped: number, taskIndex: number): boolean;
		getScriptStatus(ped: number, taskHash: number): number;
		getActiveVehicleMissionType(vehicle: number): number;
		leaveAnyVehicle(ped: number, p1: number, flags: number): void;
		aimGunScripted(ped: number, scriptTask: number, p2: boolean, p3: boolean): void;
		aimGunScriptedWithTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): void;
		updateAimGunScriptedTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;
		getClipSetForScriptedGun(p0: number): string;
		aimGunAtEntity(ped: number, entity: number, duration: number, p3: boolean): void;
		turnPedToFaceEntity(ped: number, entity: number, duration: number): void;
		aimGunAtCoord(ped: number, x: number, y: number, z: number, time: number, p5: boolean, p6: boolean): void;
		shootAtCoord(ped: number, x: number, y: number, z: number, duration: number, firingPattern: number): void;
		shuffleToNextVehicleSeat(ped: number, vehicle: number, p2: number): void;
		clearPedS(ped: number): void;
		clearPedSecondary(ped: number): void;
		everyoneLeaveVehicle(vehicle: number): void;
		gotoEntityOffset(ped: number, p1: number, p2: number, x: number, y: number, z: number, duration: number): void;
		gotoEntityOffsetXy(p0: number, oed: number, duration: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): void;
		turnPedToFaceCoord(ped: number, x: number, y: number, z: number, duration: number): void;
		vehicleTempAction(driver: number, vehicle: number, action: number, time: number): void;
		vehicleMission(
			driver: number,
			vehicle: number,
			vehicleTarget: number,
			missionType: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			DriveAgainstTraffic: boolean
		): void;
		vehicleMissionPedTarget(
			ped: number,
			vehicle: number,
			pedTarget: number,
			missionType: number,
			maxSpeed: number,
			drivingStyle: number,
			minDistance: number,
			p7: number,
			DriveAgainstTraffic: boolean
		): void;
		vehicleMissionCoorsTarget(
			ped: number,
			vehicle: number,
			x: number,
			y: number,
			z: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			DriveAgainstTraffic: boolean
		): void;
		vehicleEscort(
			ped: number,
			vehicle: number,
			targetVehicle: number,
			mode: number,
			speed: number,
			drivingStyle: number,
			minDistance: number,
			p7: number,
			noRoadsDistance: number
		): void;
		vehicleFollow(driver: number, vehicle: number, targetEntity: number, speed: number, drivingStyle: number, minDistance: number): void;
		vehicleChase(driver: number, targetEnt: number): void;
		vehicleHeliProtect(
			pilot: number,
			vehicle: number,
			entityToFollow: number,
			targetSpeed: number,
			p4: number,
			radius: number,
			altitude: number,
			p7: number
		): void;
		setVehicleChaseBehaviorFlag(ped: number, flag: number, set: boolean): void;
		setVehicleChaseIdealPursuitDistance(ped: number, distance: number): void;
		heliChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;
		planeChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;
		planeLand(
			pilot: number,
			plane: number,
			runwayStartX: number,
			runwayStartY: number,
			runwayStartZ: number,
			runwayEndX: number,
			runwayEndY: number,
			runwayEndZ: number
		): void;
		clearVehicleS(vehicle: number): void;
		planeGotoPreciseVtol(
			ped: number,
			vehicle: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number
		): void;
		submarineGotoAndStop(p0: number, submarine: number, x: number, y: number, z: number, p5: number): void;
		heliMission(
			pilot: number,
			aircraft: number,
			targetVehicle: number,
			targetPed: number,
			destinationX: number,
			destinationY: number,
			destinationZ: number,
			missionFlag: number,
			maxSpeed: number,
			landingRadius: number,
			targetHeading: number,
			unk1: number,
			unk2: number,
			unk3: number,
			landingFlags: number
		): void;
		heliEscortHeli(pilot: number, heli1: number, heli2: number, p3: number, p4: number, p5: number): void;
		planeMission(
			pilot: number,
			aircraft: number,
			targetVehicle: number,
			targetPed: number,
			destinationX: number,
			destinationY: number,
			destinationZ: number,
			missionFlag: number,
			angularDrag: number,
			unk: number,
			targetHeading: number,
			maxZ: number,
			minZ: number,
			p13: number
		): void;
		planeTaxi(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		boatMission(
			pedDriver: number,
			boat: number,
			p2: number,
			p3: number,
			x: number,
			y: number,
			z: number,
			p7: number,
			maxSpeed: number,
			drivingStyle: number,
			p10: number,
			p11: number
		): void;
		driveBy(
			driverPed: number,
			targetPed: number,
			targetVehicle: number,
			targetX: number,
			targetY: number,
			targetZ: number,
			distanceToShoot: number,
			pedAccuracy: number,
			p8: boolean,
			firingPattern: number
		): void;
		setDrivebyTarget(shootingPed: number, targetPed: number, targetVehicle: number, x: number, y: number, z: number): void;
		clearDrivebyUnderneathDrivingTask(ped: number): void;
		isDrivebyUnderneathDrivingTask(ped: number): boolean;
		controlMountedWeapon(ped: number): boolean;
		setMountedWeaponTarget(
			shootingPed: number,
			targetPed: number,
			targetVehicle: number,
			x: number,
			y: number,
			z: number,
			p6: number,
			p7: number
		): void;
		isMountedWeaponUnderneathDrivingTask(ped: number): boolean;
		useMobilePhone(ped: number, p1: number, p2: number): void;
		useMobilePhoneTimed(ped: number, duration: number): void;
		chatToPed(ped: number, target: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
		warpPedIntoVehicle(ped: number, vehicle: number, seat: number): void;
		shootAtEntity(entity: number, target: number, duration: number, firingPattern: number): void;
		climb(ped: number, unused: boolean): void;
		climbLadder(ped: number, p1: number): void;
		rappelDownWall(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number
		): void;
		clearPedTasksImmediately(ped: number): void;
		performSequenceFromProgress(p0: number, p1: number, p2: number, p3: number): void;
		setNextDesiredMoveState(p0: number): void;
		setPedDesiredMoveBlendRatio(ped: number, p1: number): void;
		getPedDesiredMoveBlendRatio(ped: number): number;
		gotoEntityAiming(ped: number, target: number, distanceToStopAt: number, StartAimingDist: number): void;
		setDecisionMaker(ped: number, p1: number): void;
		setSphereDefensiveArea(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		clearDefensiveArea(p0: number): void;
		pedSlideToCoord(ped: number, x: number, y: number, z: number, heading: number, p5: number): void;
		pedSlideToCoordHdgRate(ped: number, x: number, y: number, z: number, heading: number, p5: number, p6: number): void;
		addCoverPoint(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): number;
		removeCoverPoint(coverpoint: number): void;
		doesScriptedCoverPointExistAtCoords(x: number, y: number, z: number): boolean;
		getScriptedCoverPointCoords(coverpoint: number): shared.Vector3Mp;
		combatPed(ped: number, targetPed: number, p2: number, p3: number): void;
		combatPedTimed(p0: number, ped: number, p2: number, p3: number): void;
		seekCoverFromPos(ped: number, x: number, y: number, z: number, duration: number, p5: boolean): void;
		seekCoverFromPed(ped: number, target: number, duration: number, p3: boolean): void;
		seekCoverToCoverPoint(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): void;
		seekCoverToCoords(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: number, p8: boolean): void;
		putPedDirectlyIntoCover(
			ped: number,
			x: number,
			y: number,
			z: number,
			timeout: number,
			p5: boolean,
			p6: number,
			p7: boolean,
			p8: boolean,
			p9: number,
			p10: boolean
		): void;
		exitCover(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		putPedDirectlyIntoMelee(ped: number, meleeTarget: number, p2: number, p3: number, p4: number, p5: boolean): void;
		toggleDuck(p0: boolean, p1: boolean): void;
		guardCurrentPosition(p0: number, p1: number, p2: number, p3: boolean): void;
		guardAssignedDefensiveArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
		guardSphereDefensiveArea(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number
		): void;
		standGuard(ped: number, x: number, y: number, z: number, heading: number, scenarioName: string): void;
		setDriveCruiseSpeed(driver: number, cruiseSpeed: number): void;
		setDriveMaxCruiseSpeed(p0: number, p1: number): void;
		setDriveDrivingStyle(ped: number, drivingStyle: number): void;
		addCoverBlockingArea(
			playerX: number,
			playerY: number,
			playerZ: number,
			radiusX: number,
			radiusY: number,
			radiusZ: number,
			p6: boolean,
			p7: boolean,
			p8: boolean,
			p9: boolean
		): void;
		removeAllCoverBlockingAreas(): void;
		startScenarioInPlace(ped: number, scenarioName: string, unkDelay: number, playEnterAnim: boolean): void;
		startScenarioAtPosition(
			ped: number,
			scenarioName: string,
			x: number,
			y: number,
			z: number,
			heading: number,
			duration: number,
			sittingScenario: boolean,
			teleport: boolean
		): void;
		useNearestScenarioToCoord(ped: number, x: number, y: number, z: number, distance: number, duration: number): void;
		useNearestScenarioToCoordWarp(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;
		useNearestScenarioChainToCoord(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		useNearestScenarioChainToCoordWarp(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		doesScenarioExistInArea(x: number, y: number, z: number, radius: number, b: boolean): boolean;
		doesScenarioOfTypeExistInArea(p0: number, p1: number, p2: number, p4: number, p5: boolean): number;
		isScenarioOccupied(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean;
		pedHasUseScenario(ped: number): boolean;
		playAnimOnRunningScenario(ped: number, animDict: string, animName: string): void;
		doesScenarioGroupExist(scenarioGroup: string): boolean;
		isScenarioGroupEnabled(scenarioGroup: string): boolean;
		setScenarioGroupEnabled(scenarioGroup: string, p1: boolean): void;
		resetScenarioGroupsEnabled(): void;
		setExclusiveScenarioGroup(scenarioGroup: string): void;
		resetExclusiveScenarioGroup(): void;
		isScenarioTypeEnabled(scenarioType: string): boolean;
		setScenarioTypeEnabled(scenarioType: string, toggle: boolean): void;
		resetScenarioTypesEnabled(): void;
		isPedActiveInScenario(ped: number): boolean;
		isPedPlayingBaseClipInScenario(ped: number): boolean;
		setPedCanPlayAmbientIdles(ped: number, p1: boolean, p2: boolean): void;
		combatHatedTargetsInArea(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;
		combatHatedTargetsAroundPed(ped: number, radius: number, p2: number): void;
		combatHatedTargetsAroundPedTimed(p0: number, p1: number, p2: number, p3: number): void;
		throwProjectile(ped: number, x: number, y: number, z: number, p4: number, p5: number): void;
		swapWeapon(ped: number, p1: boolean): void;
		reloadWeapon(ped: number, unused: boolean): void;
		isPedGettingUp(ped: number): boolean;
		writhe(ped: number, target: number, time: number, p3: number, p4: number, p5: number): void;
		isPedInWrithe(ped: number): boolean;
		openPatrolRoute(patrolRoute: string): void;
		closePatrolRoute(): void;
		addPatrolRouteNode(p0: number, p1: string, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p8: number): void;
		addPatrolRouteLink(p0: number, p1: number): void;
		createPatrolRoute(): void;
		deletePatrolRoute(patrolRoute: string): void;
		patrol(ped: number, p1: string, p2: number, p3: boolean, p4: boolean): void;
		stayInCover(ped: number): void;
		addVehicleSubAttackCoord(ped: number, x: number, y: number, z: number): void;
		addVehicleSubAttackPed(ped: number, ped2: number): void;
		vehicleShootAtPed(ped: number, target: number, p2: number): void;
		vehicleAimAtPed(ped: number, target: number): void;
		vehicleShootAtCoord(ped: number, x: number, y: number, z: number, p4: number): void;
		vehicleAimAtCoord(ped: number, x: number, y: number, z: number): void;
		vehicleGotoNavmesh(
			ped: number,
			vehicle: number,
			x: number,
			y: number,
			z: number,
			speed: number,
			behaviorFlag: number,
			stoppingRange: number
		): void;
		goToCoordWhileAimingAtCoord(
			ped: number,
			x: number,
			y: number,
			z: number,
			aimAtX: number,
			aimAtY: number,
			aimAtZ: number,
			moveSpeed: number,
			p8: boolean,
			p9: number,
			p10: number,
			p11: boolean,
			flags: number,
			p13: boolean,
			firingPattern: number
		): void;
		goToCoordWhileAimingAtEntity(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: boolean,
			p7: number,
			p8: number,
			p9: boolean,
			p10: number,
			p11: boolean,
			p12: number,
			p13: number
		): void;
		goToCoordAndAimAtHatedEntitiesNearCoord(
			pedHandle: number,
			goToLocationX: number,
			goToLocationY: number,
			goToLocationZ: number,
			focusLocationX: number,
			focusLocationY: number,
			focusLocationZ: number,
			speed: number,
			shootAtEnemies: boolean,
			distanceToStopAt: number,
			noRoadsDistance: number,
			unkTrue: boolean,
			unkFlag: number,
			aimingFlag: number,
			firingPattern: number
		): void;
		goToEntityWhileAimingAtCoord(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: boolean,
			p7: number,
			p8: number,
			p9: boolean,
			p10: boolean,
			p11: number
		): void;
		goToEntityWhileAimingAtEntity(
			ped: number,
			entityToWalkTo: number,
			entityToAimAt: number,
			speed: number,
			shootatEntity: boolean,
			p5: number,
			p6: number,
			p7: boolean,
			p8: boolean,
			firingPattern: number
		): void;
		setHighFall(ped: number, p1: number, p2: number, p3: number): void;
		requestWaypointRecording(name: string): void;
		getIsWaypointRecordingLoaded(name: string): boolean;
		removeWaypointRecording(name: string): void;
		waypointRecordingGetNumPoints(name: string): number;
		waypointRecordingGetCoord(name: string, point: number): shared.Vector3Mp;
		waypointRecordingGetSpeedAtPoint(name: string, point: number): number;
		waypointRecordingGetClosestWaypoint(name: string, x: number, y: number, z: number): number;
		followWaypointRecording(p0: number, p1: number, p2: number, p3: number, p4: number): void;
		isWaypointPlaybackGoingOnForPed(p0: number): boolean;
		getPedWaypointProgress(ped: number): number;
		getPedWaypointDistance(p0: number): number;
		setPedWaypointRouteOffset(p0: number, p1: number, p2: number, p3: number): number;
		getWaypointDistanceAlongRoute(p0: string, p1: number): number;
		waypointPlaybackGetIsPaused(p0: number): boolean;
		waypointPlaybackPause(p0: number, p1: boolean, p2: boolean): void;
		waypointPlaybackResume(p0: number, p1: boolean, p2: number, p3: number): void;
		waypointPlaybackOverrideSpeed(p0: number, p1: number, p2: boolean): void;
		waypointPlaybackUseDefaultSpeed(p0: number): void;
		useWaypointRecordingAsAssistedMovementRoute(name: string, p1: boolean, p2: number, p3: number): void;
		waypointPlaybackStartAimingAtPed(p0: number, p1: number, p2: boolean): void;
		waypointPlaybackStartAimingAtCoord(p0: number, p1: number, p2: number, p3: number, p4: boolean): void;
		waypointPlaybackStartShootingAtPed(p0: number, p1: number, p2: boolean, p3: number): void;
		waypointPlaybackStartShootingAtCoord(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: number): void;
		waypointPlaybackStopAimingOrShooting(p0: number): void;
		assistedMovementRequestRoute(route: string): void;
		assistedMovementRemoveRoute(route: string): void;
		assistedMovementIsRouteLoaded(route: string): boolean;
		assistedMovementSetRouteProperties(route: string, props: number): void;
		assistedMovementOverrideLoadDistanceThisFrame(dist: number): void;
		vehicleFollowWaypointRecording(
			ped: number,
			vehicle: number,
			WPRecording: string,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: boolean,
			p9: number
		): void;
		isWaypointPlaybackGoingOnForVehicle(vehicle: number): boolean;
		getVehicleWaypointProgress(vehicle: number): number;
		getVehicleWaypointTargetPoint(vehicle: number): number;
		vehicleWaypointPlaybackPause(vehicle: number): void;
		vehicleWaypointPlaybackResume(vehicle: number): void;
		vehicleWaypointPlaybackUseDefaultSpeed(vehicle: number): void;
		vehicleWaypointPlaybackOverrideSpeed(vehicle: number, speed: number): void;
		setBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;
		forceMotionState(ped: number, state: number, p2: boolean): void;
		moveNetworkByName(ped: number, task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;
		moveNetworkAdvancedByName(
			ped: number,
			p1: string,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: boolean,
			animDict: string,
			flags: number
		): void;
		moveNetworkByNameWithInitParams(ped: number, p1: string, p3: number, p4: boolean, animDict: string, flags: number): number;
		isMoveNetworkActive(ped: number): boolean;
		isMoveNetworkReadyForTransition(ped: number): boolean;
		requestMoveNetworkStateTransition(ped: number, name: string): boolean;
		getMoveNetworkState(ped: number): string;
		setMoveNetworkSignalFloat(ped: number, signalName: string, value: number): void;
		setMoveNetworkSignalFloat2(ped: number, signalName: string, value: number): void;
		setMoveNetworkSignalBool(ped: number, signalName: string, value: boolean): void;
		getMoveNetworkSignalFloat(ped: number, signalName: string): number;
		getMoveNetworkSignalBool(ped: number, signalName: string): boolean;
		getMoveNetworkEvent(ped: number, eventName: string): boolean;
		isMoveBlendRatioStill(ped: number): boolean;
		isMoveBlendRatioWalking(ped: number): boolean;
		isMoveBlendRatioRunning(ped: number): boolean;
		isMoveBlendRatioSprinting(ped: number): boolean;
		isPedStill(ped: number): boolean;
		isPedWalking(ped: number): boolean;
		isPedRunning(ped: number): boolean;
		isPedSprinting(ped: number): boolean;
		isPedStrafing(ped: number): boolean;
		synchronizedScene(
			ped: number,
			scene: number,
			animDictionary: string,
			animationName: string,
			speed: number,
			speedMultiplier: number,
			duration: number,
			flag: number,
			playbackRate: number,
			p9: number
		): void;
		agitatedAction(ped: number, ped2: number): void;
		sweepAimEntity(ped: number, anim: string, p2: string, p3: string, p4: string, p5: number, vehicle: number, p7: number, p8: number): void;
		updateSweepAimEntity(ped: number, entity: number): void;
		sweepAimPosition(p0: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): TaskSweepAimPositionResult;
		updateSweepAimPosition(p0: number, p1: number, p2: number, p3: number): void;
		arrestPed(ped: number, target: number): void;
		isPedRunningArrest(ped: number): boolean;
		isPedBeingArrested(ped: number): boolean;
		uncuffPed(ped: number): void;
		isPedCuffed(ped: number): boolean;

		unk: GameTaskUnk;
	}

	export interface GameTaskUnk {
		_0x3E38E28A1D80DDF6(ped: number): boolean;
		_0x6100B3CEFD43452E(p0: number): void;
		_0x53DDC75BC3AC0A90(vehicle: number): void;
		_0x9D252648778160DF(p0: number): number;
		_0xFA83CA6776038F64(x: number, y: number, z: number): void;
		_0x1F351CF1C6475734(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number
		): void;
		_0x29682E2CCF21E9B5(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number,
			p11: number,
			p12: number,
			p13: number
		): void;
		_0xAB13A5565480B6D9(ped: number, p1: string): number;
		_0x8423541E8B3A1589(p0: number, p1: number, p2: number): void;
		_0x8634CEF2522D987B(ped: number, p1: string, value: number): void;
		_0x0FFB3C758E8C07B9(ped: number, p1: boolean): number;
	}

	export interface TaskSweepAimPositionResult {
		p1: number;
		p2: number;
		p3: number;
		p4: number;
	}

	export interface TaskScriptedAnimationResult {
		p1: number;
		p2: number;
		p3: number;
	}

	export interface PlayEntityScriptedAnimResult {
		p1: number;
		p2: number;
		p3: number;
	}

	export interface TaskSweepAimPositionResult {
		p1: number;
		p2: number;
		p3: number;
		p4: number;
	}

	export interface GetNavmeshRouteDistanceRemainingResult {
		distanceRemaining: number;
		isPathReady: boolean;
		result: number;
	}

	export interface GameVehicleLegacy {
		createVehicle(
			modelHash: number,
			x: number,
			y: number,
			z: number,
			heading: number,
			isNetwork: boolean,
			bScriptHostVeh: boolean,
			p7: boolean
		): number;
		doesScriptVehicleGeneratorExist(vehicleGenerator: number): boolean;
		createScriptVehicleGenerator(
			x: number,
			y: number,
			z: number,
			heading: number,
			p4: number,
			p5: number,
			modelHash: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number,
			p11: boolean,
			p12: boolean,
			p13: boolean,
			p14: boolean,
			p15: boolean,
			p16: number
		): number;
		deleteScriptVehicleGenerator(vehicleGenerator: number): void;
		setScriptVehicleGenerator(vehicleGenerator: number, enabled: boolean): void;
		setAllVehicleGeneratorsActiveInArea(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			p6: boolean,
			p7: boolean
		): void;
		setAllVehicleGeneratorsActive(): void;
		setAllLowPriorityVehicleGeneratorsActive(active: boolean): void;
		getVehicleModelMaxNumberOfPassengers(modelHash: number): number;
		setVehicleDensityMultiplierThisFrame(multiplier: number): void;
		setRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;
		setParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;
		setFarDrawVehicles(toggle: boolean): void;
		setNumberOfParkedVehicles(value: number): void;
		isVehicleInGarageArea(garageName: string, vehicle: number): boolean;
		removeVehicleStuckCheck(vehicle: number): void;
		getVehicleRecordingId(recording: number, script: string): number;
		requestVehicleRecording(recording: number, script: string): void;
		hasVehicleRecordingBeenLoaded(recording: number, script: string): boolean;
		removeVehicleRecording(recording: number, script: string): void;
		getPositionOfVehicleRecordingAtTime(
			recording: number,
			time: number,
			script: string
		): shared.Vector3Mp;
		getRotationOfVehicleRecordingAtTime(
			recording: number,
			time: number,
			script: string
		): shared.Vector3Mp;
		getTotalDurationOfVehicleRecordingId(id: number): number;
		getTotalDurationOfVehicleRecording(
			recording: number,
			script: string
		): number;
		startPlaybackRecordedVehicle(
			vehicle: number,
			recording: number,
			script: string,
			p3: boolean
		): void;
		startPlaybackRecordedVehicleWithFlags(
			vehicle: number,
			recording: number,
			script: string,
			flags: number,
			time: number,
			drivingStyle: number
		): void;
		stopPlaybackRecordedVehicle(vehicle: number): void;
		pausePlaybackRecordedVehicle(vehicle: number): void;
		unpausePlaybackRecordedVehicle(vehicle: number): void;
		isPlaybackGoingOnForVehicle(vehicle: number): boolean;
		isPlaybackUsingAiGoingOnForVehicle(vehicle: number): boolean;
		getCurrentPlaybackForVehicle(vehicle: number): number;
		skipToEndAndStopPlaybackRecordedVehicle(vehicle: number): void;
		startPlaybackRecordedVehicleUsingAi(
			vehicle: number,
			recording: number,
			script: string,
			speed: number,
			drivingStyle: number
		): void;
		skipTimeInPlaybackRecordedVehicle(vehicle: number, time: number): void;
		addVehicleStuckCheckWithWarp(
			p0: number,
			p1: number,
			p2: number,
			p3: boolean,
			p4: boolean,
			p5: boolean,
			p6: number
		): void;
		setVehicleModelIsSuppressed(model: number, suppressed: boolean): void;
		getRandomVehicleInSphere(
			x: number,
			y: number,
			z: number,
			radius: number,
			modelHash: number,
			flags: number
		): number;
		getRandomVehicleFrontBumperInSphere(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number
		): number;
		getRandomVehicleBackBumperInSphere(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number
		): number;
		getClosestVehicle(
			x: number,
			y: number,
			z: number,
			radius: number,
			modelHash: number,
			flags: number
		): number;
		isThisModelAnEmergencyBoat(model: number): boolean;
		getRandomVehicleModelInMemory(
			p0: boolean
		): GetRandomVehicleModelInMemoryResult;
		setVehicleDamage(
			vehicle: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			damage: number,
			radius: number,
			focusOnModel: boolean
		): void;
		getDisplayNameFromVehicleModel(modelHash: number): string;
		isAnyVehicleNearPoint(
			x: number,
			y: number,
			z: number,
			radius: number
		): boolean;
		requestVehicleAsset(vehicleHash: number, vehicleAsset: number): void;
		hasVehicleAssetLoaded(vehicleAsset: number): boolean;
		removeVehicleAsset(vehicleAsset: number): void;
		getVehicleModelMaxSpeed(modelHash: number): number;
		getVehicleModelMaxBraking(modelHash: number): number;
		getVehicleModelMaxTraction(modelHash: number): number;
		getVehicleModelAcceleration(modelHash: number): number;
		getVehicleClassMaxTraction(vehicleClass: number): number;
		getVehicleClassMaxAgility(vehicleClass: number): number;
		getVehicleClassMaxAcceleration(vehicleClass: number): number;
		getVehicleClassMaxBraking(vehicleClass: number): number;
		setVehicleMod(
			vehicle: number,
			modType: number,
			modIndex: number,
			customTires: boolean
		): void;
		getVehicleMod(vehicle: number, modType: number): number;
		preloadVehicleMod(p0: number, modType: number, p2: number): void;
		setVehicleShootAtTarget(
			driver: number,
			entity: number,
			xTarget: number,
			yTarget: number,
			zTarget: number
		): void;
		setCargobobHookPosition(
			cargobob: number,
			length1: number,
			length2: number,
			p3: boolean
		): void;
		disableVehicleWeapon(
			disabled: boolean,
			weaponHash: number,
			vehicle: number,
			owner: number
		): void;
		getVehicleClass(vehicle: number): number;
		getVehicleClassFromName(modelHash: number): number;
		doesVehicleExistWithDecorator(decorator: string): boolean;
		displayDistantVehicles(toggle: boolean): void;
	}

	export interface GameVehicle extends GameVehicleLegacy {
		create(
			modelHash: number,
			x: number,
			y: number,
			z: number,
			heading: number,
			isNetwork: boolean,
			bScriptHostVeh: boolean,
			p7: boolean
		): number;
		delete(vehicle: number): number;
		setCanBeLockedOn(
			vehicle: number,
			canBeLockedOn: boolean,
			unk: boolean
		): void;
		setAllowNoPassengersLockon(veh: number, toggle: boolean): void;
		getHomingLockonState(vehicle: number): number;
		isModel(vehicle: number, model: number): boolean;
		doesScriptGeneratorExist(vehicleGenerator: number): boolean;
		createScriptGenerator(
			x: number,
			y: number,
			z: number,
			heading: number,
			p4: number,
			p5: number,
			modelHash: number,
			p7: number,
			p8: number,
			p9: number,
			p10: number,
			p11: boolean,
			p12: boolean,
			p13: boolean,
			p14: boolean,
			p15: boolean,
			p16: number
		): number;
		deleteScriptGenerator(vehicleGenerator: number): void;
		setScriptGenerator(vehicleGenerator: number, enabled: boolean): void;
		setAllGeneratorsActiveInArea(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			p6: boolean,
			p7: boolean
		): void;
		setAllGeneratorsActive(): void;
		setAllLowPriorityGeneratorsActive(active: boolean): void;
		setOnGroundProperly(vehicle: number, p1: number): boolean;
		setUseCutsceneWheelCompression(
			p0: number,
			p1: boolean,
			p2: boolean,
			p3: boolean
		): number;
		isStuckOnRoof(vehicle: number): boolean;
		addUpsidedownCheck(vehicle: number): void;
		removeUpsidedownCheck(vehicle: number): void;
		isStopped(vehicle: number): boolean;
		getNumberOfPassengers(vehicle: number): number;
		getMaxNumberOfPassengers(vehicle: number): number;
		getModelNumberOfSeats(modelHash: number): number;
		isSeatWarpOnly(vehicle: number, seatIndex: number): boolean;
		isTurretSeat(vehicle: number, seatIndex: number): boolean;
		doesAllowRappel(vehicle: number): boolean;
		setDensityMultiplierThisFrame(multiplier: number): void;
		setRandomDensityMultiplierThisFrame(multiplier: number): void;
		setParkedDensityMultiplierThisFrame(multiplier: number): void;
		setDisableRandomTrainsThisFrame(toggle: boolean): void;
		setAmbientRangeMultiplierThisFrame(value: number): void;
		setFarDrawS(toggle: boolean): void;
		setNumberOfParkedS(value: number): void;
		setDoorsLocked(vehicle: number, doorLockStatus: number): void;
		setIndividualDoorsLocked(
			vehicle: number,
			doorIndex: number,
			destroyType: number
		): void;
		setHasMutedSirens(vehicle: number, toggle: boolean): void;
		setDoorsLockedForPlayer(
			vehicle: number,
			player: number,
			toggle: boolean
		): void;
		getDoorsLockedForPlayer(vehicle: number, player: number): boolean;
		setDoorsLockedForAllPlayers(vehicle: number, toggle: boolean): void;
		setDoorsLockedForNonScriptPlayers(vehicle: number, toggle: boolean): void;
		setDoorsLockedForTeam(vehicle: number, team: number, toggle: boolean): void;
		setDoorsLockedForUnk(vehicle: number, toggle: boolean): void;
		explode(vehicle: number, isAudible: boolean, isInvisible: boolean): void;
		setOutOfControl(
			vehicle: number,
			killDriver: boolean,
			explodeOnImpact: boolean
		): void;
		setTimedExplosion(vehicle: number, ped: number, toggle: boolean): void;
		addPhoneExplosiveDevice(vehicle: number): void;
		clearPhoneExplosiveDevice(): void;
		hasPhoneExplosiveDevice(): boolean;
		detonatePhoneExplosiveDevice(): void;
		setTaxiLights(vehicle: number, state: boolean): void;
		isTaxiLightOn(vehicle: number): boolean;
		isInGarageArea(garageName: string, vehicle: number): boolean;
		setColours(
			vehicle: number,
			colorPrimary: number,
			colorSecondary: number
		): void;
		setFullbeam(vehicle: number, toggle: boolean): void;
		setIsRacing(vehicle: number, toggle: boolean): void;
		setCustomPrimaryColour(
			vehicle: number,
			r: number,
			g: number,
			b: number
		): void;
		getCustomPrimaryColour(vehicle: number): GetVehicleCustomPrimaryColourResult;
		clearCustomPrimaryColour(vehicle: number): void;
		getIsPrimaryColourCustom(vehicle: number): boolean;
		setCustomSecondaryColour(
			vehicle: number,
			r: number,
			g: number,
			b: number
		): void;
		getCustomSecondaryColour(
			vehicle: number
		): GetVehicleCustomSecondaryColourResult;
		clearCustomSecondaryColour(vehicle: number): void;
		getIsSecondaryColourCustom(vehicle: number): boolean;
		setEnveffScale(vehicle: number, fade: number): void;
		getEnveffScale(vehicle: number): number;
		setCanRespray(vehicle: number, state: boolean): void;
		forceSubmarineSurfaceMode(vehicle: number, toggle: boolean): void;
		setSubmarineCrushDepths(
			vehicle: number,
			p1: boolean,
			depth1: number,
			depth2: number,
			depth3: number
		): void;
		getSubmarineIsBelowFirstCrushDepth(submarine: number): boolean;
		getSubmarineCrushDepthWarningState(submarine: number): number;
		setBoatAnchor(vehicle: number, toggle: boolean): void;
		canAnchorBoatHere(vehicle: number): boolean;
		canAnchorBoatHere2(vehicle: number): boolean;
		setBoatFrozenWhenAnchored(vehicle: number, toggle: boolean): void;
		setBoatMovementResistance(vehicle: number, value: number): void;
		isBoatAnchoredAndFrozen(vehicle: number): boolean;
		setBoatSinksWhenWrecked(vehicle: number, toggle: boolean): void;
		setBoatIsSinking(p0: number): void;
		setSiren(vehicle: number, toggle: boolean): void;
		isSirenOn(vehicle: number): boolean;
		isSirenAudioOn(vehicle: number): boolean;
		setStrong(vehicle: number, toggle: boolean): void;
		removeStuckCheck(vehicle: number): void;
		getColours(vehicle: number): GetVehicleColoursResult;
		isSeatFree(
			vehicle: number,
			seatIndex: number,
			isTaskRunning: boolean
		): boolean;
		getPedInSeat(vehicle: number, seatIndex: number, p2: boolean): number;
		getLastPedInSeat(vehicle: number, seatIndex: number): number;
		getLightsState(vehicle: number): GetVehicleLightsStateResult;
		isTyreBurst(vehicle: number, wheelID: number, completely: boolean): boolean;
		setForwardSpeed(vehicle: number, speed: number): void;
		bringToHalt(
			vehicle: number,
			distance: number,
			duration: number,
			unknown: boolean
		): void;
		stopBringToHalt(vehicle: number): void;
		isBeingHalted(vehicle: number): boolean;
		setForkliftForkHeight(vehicle: number, height: number): void;
		isEntityAttachedToHandlerFrame(vehicle: number, entity: number): boolean;
		isAnyEntityAttachedToHandlerFrame(vehicle: number): boolean;
		findCarryingThisEntity(entity: number): number;
		isHandlerFrameAboveContainer(vehicle: number, entity: number): boolean;
		detachContainerFromHandlerFrame(vehicle: number): void;
		setBoatDisableAvoidance(vehicle: number, p1: boolean): void;
		isHeliLandingAreaBlocked(vehicle: number): boolean;
		setHeliTurbulenceScalar(vehicle: number, p1: number): void;
		setCarBootOpen(vehicle: number): void;
		setTyreBurst(
			vehicle: number,
			index: number,
			onRim: boolean,
			p3: number
		): void;
		setDoorsShut(vehicle: number, closeInstantly: boolean): void;
		setTyresCanBurst(vehicle: number, toggle: boolean): void;
		getTyresCanBurst(vehicle: number): boolean;
		setWheelsCanBreak(vehicle: number, enabled: boolean): void;
		setDoorOpen(
			vehicle: number,
			doorIndex: number,
			loose: boolean,
			openInstantly: boolean
		): void;
		removeWindow(vehicle: number, windowIndex: number): void;
		rollDownWindows(vehicle: number): void;
		rollDownWindow(vehicle: number, windowIndex: number): void;
		rollUpWindow(vehicle: number, windowIndex: number): void;
		smashWindow(vehicle: number, index: number): void;
		fixWindow(vehicle: number, index: number): void;
		popOutWindscreen(vehicle: number): void;
		ejectJb700Roof(vehicle: number, x: number, y: number, z: number): void;
		setLights(vehicle: number, state: number): void;
		setUsePlayerLightSettings(vehicle: number, toggle: boolean): void;
		setLightsMode(vehicle: number, p1: number): void;
		setAlarm(vehicle: number, state: boolean): void;
		startAlarm(vehicle: number): void;
		isAlarmActivated(vehicle: number): boolean;
		setInteriorlight(vehicle: number, toggle: boolean): void;
		setLightMultiplier(vehicle: number, multiplier: number): void;
		attachToTrailer(vehicle: number, trailer: number, radius: number): void;
		attachOnToTrailer(
			vehicle: number,
			trailer: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number,
			coordsX: number,
			coordsY: number,
			coordsZ: number,
			rotationX: number,
			rotationY: number,
			rotationZ: number,
			disableCollisions: number
		): void;
		stabiliseEntityAttachedToHeli(
			vehicle: number,
			entity: number,
			p2: number
		): void;
		detachFromTrailer(vehicle: number): void;
		isAttachedToTrailer(vehicle: number): boolean;
		setTrailerInverseMassScale(vehicle: number, p1: number): void;
		setTrailerLegsRaised(vehicle: number): void;
		setTrailerLegsLowered(p0: number): void;
		setTyreFixed(vehicle: number, tyreIndex: number): void;
		setNumberPlateText(vehicle: number, plateText: string): void;
		getNumberPlateText(vehicle: number): string;
		getNumberOfNumberPlates(): number;
		setNumberPlateTextIndex(vehicle: number, plateIndex: number): void;
		getNumberPlateTextIndex(vehicle: number): number;
		setRandomTrains(toggle: boolean): void;
		createMissionTrain(
			variation: number,
			x: number,
			y: number,
			z: number,
			direction: boolean
		): number;
		switchTrainTrack(trackId: number, state: boolean): void;
		setTrainTrackSpawnFrequency(trackIndex: number, frequency: number): void;
		deleteAllTrains(): void;
		setTrainSpeed(train: number, speed: number): void;
		setTrainCruiseSpeed(train: number, speed: number): void;
		setRandomBoats(toggle: boolean): void;
		setGarbageTrucks(toggle: boolean): void;
		doesHaveStuckVehicleCheck(vehicle: number): boolean;
		getRecordingId(recording: number, script: string): number;
		requestRecording(recording: number, script: string): void;
		hasRecordingBeenLoaded(recording: number, script: string): boolean;
		removeRecording(recording: number, script: string): void;
		getPositionOfRecordingIdAtTime(id: number, time: number): shared.Vector3Mp;
		getPositionOfRecordingAtTime(
			recording: number,
			time: number,
			script: string
		): shared.Vector3Mp;
		getRotationOfRecordingIdAtTime(id: number, time: number): shared.Vector3Mp;
		getRotationOfRecordingAtTime(
			recording: number,
			time: number,
			script: string
		): shared.Vector3Mp;
		getTotalDurationOfRecordingId(id: number): number;
		getTotalDurationOfRecording(recording: number, script: string): number;
		getPositionInRecording(vehicle: number): number;
		getTimePositionInRecording(vehicle: number): number;
		startPlaybackRecorded(
			vehicle: number,
			recording: number,
			script: string,
			p3: boolean
		): void;
		startPlaybackRecordedWithFlags(
			vehicle: number,
			recording: number,
			script: string,
			flags: number,
			time: number,
			drivingStyle: number
		): void;
		forcePlaybackRecordedUpdate(vehicle: number, p1: boolean): void;
		stopPlaybackRecorded(vehicle: number): void;
		pausePlaybackRecorded(vehicle: number): void;
		unpausePlaybackRecorded(vehicle: number): void;
		isPlaybackGoingOnFor(vehicle: number): boolean;
		isPlaybackUsingAiGoingOnFor(vehicle: number): boolean;
		getCurrentPlaybackFor(vehicle: number): number;
		skipToEndAndStopPlaybackRecorded(vehicle: number): void;
		setPlaybackSpeed(vehicle: number, speed: number): void;
		startPlaybackRecordedUsingAi(
			vehicle: number,
			recording: number,
			script: string,
			speed: number,
			drivingStyle: number
		): void;
		skipTimeInPlaybackRecorded(vehicle: number, time: number): void;
		setPlaybackToUseAi(vehicle: number, drivingStyle: number): void;
		setPlaybackToUseAiTryToRevertBackLater(
			vehicle: number,
			time: number,
			drivingStyle: number,
			p3: boolean
		): void;
		explodeInCutscene(vehicle: number, p1: boolean): void;
		addStuckCheckWithWarp(
			p0: number,
			p1: number,
			p2: number,
			p3: boolean,
			p4: boolean,
			p5: boolean,
			p6: number
		): void;
		setModelIsSuppressed(model: number, suppressed: boolean): void;
		getRandomInSphere(
			x: number,
			y: number,
			z: number,
			radius: number,
			modelHash: number,
			flags: number
		): number;
		getRandomFrontBumperInSphere(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number
		): number;
		getRandomBackBumperInSphere(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number
		): number;
		getClosest(
			x: number,
			y: number,
			z: number,
			radius: number,
			modelHash: number,
			flags: number
		): number;
		getTrainCarriage(train: number, trailerNumber: number): number;
		deleteMissionTrain(train: number): number;
		setMissionTrainAsNoLongerNeeded(train: number, p1: boolean): number;
		setMissionTrainCoords(train: number, x: number, y: number, z: number): void;
		isThisModelABoat(model: number): boolean;
		isThisModelAJetski(model: number): boolean;
		isThisModelAPlane(model: number): boolean;
		isThisModelAHeli(model: number): boolean;
		isThisModelACar(model: number): boolean;
		isThisModelATrain(model: number): boolean;
		isThisModelABike(model: number): boolean;
		isThisModelABicycle(model: number): boolean;
		isThisModelAQuadbike(model: number): boolean;
		isThisModelAnAmphibiousCar(model: number): boolean;
		isThisModelAnAmphibiousQuadbike(model: number): boolean;
		setHeliBladesFullSpeed(vehicle: number): void;
		setHeliBladesSpeed(vehicle: number, speed: number): void;
		setCanBeTargetted(vehicle: number, state: boolean): void;
		setCanBeVisiblyDamaged(vehicle: number, state: boolean): void;
		setHasUnbreakableLights(vehicle: number, p1: boolean): void;
		getDirtLevel(vehicle: number): number;
		setDirtLevel(vehicle: number, dirtLevel: number): void;
		isDamaged(vehicle: number): boolean;
		isDoorFullyOpen(vehicle: number, doorIndex: number): boolean;
		setEngineOn(
			vehicle: number,
			value: boolean,
			instantly: boolean,
			disableAutoStart: boolean
		): void;
		setUndriveable(vehicle: number, toggle: boolean): void;
		setProvidesCover(vehicle: number, toggle: boolean): void;
		setDoorControl(
			vehicle: number,
			doorIndex: number,
			speed: number,
			angle: number
		): void;
		setDoorLatched(
			vehicle: number,
			doorIndex: number,
			p2: boolean,
			p3: boolean,
			p4: boolean
		): void;
		getDoorAngleRatio(vehicle: number, door: number): number;
		getPedUsingDoor(vehicle: number, doorIndex: number): number;
		setDoorShut(
			vehicle: number,
			doorIndex: number,
			closeInstantly: boolean
		): void;
		setDoorBroken(
			vehicle: number,
			doorIndex: number,
			deleteDoor: boolean
		): void;
		setCanBreak(vehicle: number, toggle: boolean): void;
		doesHaveRoof(vehicle: number): boolean;
		isBig(vehicle: number): boolean;
		getNumberOfColours(vehicle: number): number;
		setColourCombination(vehicle: number, colorCombination: number): void;
		getColourCombination(vehicle: number): number;
		setXenonLightsColor(vehicle: number, colorIndex: number): void;
		getXenonLightsColor(vehicle: number): number;
		setIsConsideredByPlayer(vehicle: number, toggle: boolean): void;
		getRandomModelInMemory(p0: boolean): GetRandomVehicleModelInMemoryResult;
		getDoorLockStatus(vehicle: number): number;
		getDoorDestroyType(vehicle: number, doorIndex: number): number;
		isDoorDamaged(veh: number, doorID: number): boolean;
		setDoorCanBreak(
			vehicle: number,
			doorIndex: number,
			isBreakable: boolean
		): void;
		isBumperBouncing(vehicle: number, frontBumper: boolean): boolean;
		isBumperBrokenOff(vehicle: number, front: boolean): boolean;
		isCopInArea3D(
			x1: number,
			x2: number,
			y1: number,
			y2: number,
			z1: number,
			z2: number
		): boolean;
		isOnAllWheels(vehicle: number): boolean;
		getModelMonetaryValue(vehicleModel: number): number;
		getLayoutHash(vehicle: number): number;
		setRenderTrainAsDerailed(train: number, toggle: boolean): void;
		setExtraColours(
			vehicle: number,
			pearlescentColor: number,
			wheelColor: number
		): void;
		getExtraColours(vehicle: number): GetVehicleExtraColoursResult;
		setInteriorColor(vehicle: number, color: number): void;
		getInteriorColor(vehicle: number): number;
		setDashboardColor(vehicle: number, color: number): void;
		getDashboardColor(vehicle: number): number;
		stopAllGarageActivity(): void;
		setFixed(vehicle: number): void;
		setDeformationFixed(vehicle: number): void;
		setCanEngineOperateOnFire(vehicle: number, toggle: boolean): void;
		setCanLeakOil(vehicle: number, toggle: boolean): void;
		setCanLeakPetrol(vehicle: number, toggle: boolean): void;
		setDisablePetrolTankFires(vehicle: number, toggle: boolean): void;
		setDisablePetrolTankDamage(vehicle: number, toggle: boolean): void;
		setDisableEngineFires(vehicle: number, toggle: boolean): void;
		setDisablePretendOccupants(vehicle: number, toggle: boolean): void;
		removeVehiclesFromGeneratorsInArea(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			unk: number
		): void;
		setSteerBias(vehicle: number, value: number): void;
		isExtraTurnedOn(vehicle: number, extraId: number): boolean;
		setExtra(vehicle: number, extraId: number, disable: boolean): void;
		doesExtraExist(vehicle: number, extraId: number): boolean;
		doesTyreExist(vehicle: number, tyreIndex: number): boolean;
		setConvertibleRoof(vehicle: number, p1: boolean): void;
		lowerConvertibleRoof(vehicle: number, instantlyLower: boolean): void;
		raiseConvertibleRoof(vehicle: number, instantlyRaise: boolean): void;
		getConvertibleRoofState(vehicle: number): number;
		isAConvertible(vehicle: number, p1: boolean): boolean;
		transformToSubmarine(vehicle: number, noAnimation: boolean): void;
		transformSubmarineTo(vehicle: number, noAnimation: boolean): void;
		getIsSubmarineTransformed(vehicle: number): boolean;
		isStoppedAtTrafficLights(vehicle: number): boolean;
		setDamage(
			vehicle: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			damage: number,
			radius: number,
			focusOnModel: boolean
		): void;
		getEngineHealth(vehicle: number): number;
		setEngineHealth(vehicle: number, health: number): void;
		setPlaneEngineHealth(vehicle: number, health: number): void;
		getPetrolTankHealth(vehicle: number): number;
		setPetrolTankHealth(vehicle: number, health: number): void;
		isStuckTimerUp(vehicle: number, p1: number, p2: number): boolean;
		resetStuckTimer(vehicle: number, nullAttributes: number): void;
		isDriveable(vehicle: number, isOnFireCheck: boolean): boolean;
		setHasBeenOwnedByPlayer(vehicle: number, owned: boolean): void;
		setNeedsToBeHotwired(vehicle: number, toggle: boolean): void;
		startHorn(
			vehicle: number,
			duration: number,
			mode: number,
			forever: boolean
		): void;
		setSilent(vehicle: number, toggle: boolean): void;
		setHasStrongAxles(vehicle: number, toggle: boolean): void;
		getDisplayNameFromModel(modelHash: number): string;
		getMakeNameFromModel(modelHash: number): string;
		getDeformationAtPos(
			vehicle: number,
			offsetX: number,
			offsetY: number,
			offsetZ: number
		): shared.Vector3Mp;
		setLivery(vehicle: number, livery: number): void;
		getLivery(vehicle: number): number;
		getLiveryCount(vehicle: number): number;
		setRoofLivery(vehicle: number, livery: number): void;
		getRoofLivery(vehicle: number): number;
		getRoofLiveryCount(vehicle: number): number;
		isWindowIntact(vehicle: number, windowIndex: number): boolean;
		areAllWindowsIntact(vehicle: number): boolean;
		areAnySeatsFree(vehicle: number): boolean;
		resetWheels(vehicle: number, toggle: boolean): void;
		isHeliPartBroken(
			vehicle: number,
			p1: boolean,
			p2: boolean,
			p3: boolean
		): boolean;
		getHeliMainRotorHealth(vehicle: number): number;
		getHeliTailRotorHealth(vehicle: number): number;
		getHeliTailBoomHealth(vehicle: number): number;
		setHeliTailRotorHealth(vehicle: number, health: number): void;
		setHeliTailExplodeThrowDashboard(vehicle: number, p1: boolean): void;
		setNameDebug(vehicle: number, name: string): void;
		setExplodesOnHighExplosionDamage(vehicle: number, toggle: boolean): void;
		setDisableTowing(vehicle: number, toggle: boolean): void;
		doesHaveLandingGear(vehicle: number): boolean;
		controlLandingGear(vehicle: number, state: number): void;
		getLandingGearState(vehicle: number): number;
		isAnyNearPoint(x: number, y: number, z: number, radius: number): boolean;
		requestHighDetailModel(vehicle: number): void;
		removeHighDetailModel(vehicle: number): void;
		isHighDetail(vehicle: number): boolean;
		requestAsset(vehicleHash: number, vehicleAsset: number): void;
		hasAssetLoaded(vehicleAsset: number): boolean;
		removeAsset(vehicleAsset: number): void;
		setTowTruckArmPosition(vehicle: number, position: number): void;
		attachToTowTruck(
			towTruck: number,
			vehicle: number,
			rear: boolean,
			hookOffsetX: number,
			hookOffsetY: number,
			hookOffsetZ: number
		): void;
		detachFromTowTruck(towTruck: number, vehicle: number): void;
		detachFromAnyTowTruck(vehicle: number): boolean;
		isAttachedToTowTruck(towTruck: number, vehicle: number): boolean;
		getEntityAttachedToTowTruck(towTruck: number): number;
		setAutomaticallyAttaches(vehicle: number, p1: boolean, p2: number): number;
		setBulldozerArmPosition(
			vehicle: number,
			position: number,
			p2: boolean
		): void;
		setTankTurretPosition(vehicle: number, position: number, p2: boolean): void;
		setTurretSpeedThisFrame(vehicle: number, speed: number): void;
		disableTurretMovementThisFrame(vehicle: number): void;
		setFlightNozzlePosition(vehicle: number, angleRatio: number): void;
		setFlightNozzlePositionImmediate(vehicle: number, angle: number): void;
		getFlightNozzlePosition(plane: number): number;
		setDisableFlightNozzlePosition(vehicle: number, toggle: boolean): void;
		setBurnout(vehicle: number, toggle: boolean): void;
		isInBurnout(vehicle: number): boolean;
		setReduceGrip(vehicle: number, toggle: boolean): void;
		setReduceTraction(vehicle: number, val: number): void;
		setIndicatorLights(
			vehicle: number,
			turnSignal: number,
			toggle: boolean
		): void;
		setBrakeLights(vehicle: number, toggle: boolean): void;
		setHandbrake(vehicle: number, toggle: boolean): void;
		setBrake(vehicle: number, toggle: boolean): void;
		instantlyFillPopulation(): void;
		hasFilledPopulation(): boolean;
		getTrailerVehicle(vehicle: number): number;
		setUsesLargeRearRamp(vehicle: number, toggle: boolean): void;
		setRudderBroken(vehicle: number, toggle: boolean): void;
		setConvertibleRoofLatchState(vehicle: number, state: boolean): void;
		getEstimatedMaxSpeed(vehicle: number): number;
		getMaxBraking(vehicle: number): number;
		getMaxTraction(vehicle: number): number;
		getAcceleration(vehicle: number): number;
		getModelEstimatedMaxSpeed(modelHash: number): number;
		getModelMaxBraking(modelHash: number): number;
		getModelMaxBrakingMaxMods(modelHash: number): number;
		getModelMaxTraction(modelHash: number): number;
		getModelAcceleration(modelHash: number): number;
		getModelEstimatedAgility(modelHash: number): number;
		getModelMaxKnots(modelHash: number): number;
		getModelMoveResistance(modelHash: number): number;
		getClassEstimatedMaxSpeed(vehicleClass: number): number;
		getClassMaxTraction(vehicleClass: number): number;
		getClassMaxAgility(vehicleClass: number): number;
		getClassMaxAcceleration(vehicleClass: number): number;
		getClassMaxBraking(vehicleClass: number): number;
		addRoadNodeSpeedZone(
			x: number,
			y: number,
			z: number,
			radius: number,
			speed: number,
			p5: boolean
		): number;
		removeRoadNodeSpeedZone(speedzone: number): boolean;
		openBombBayDoors(vehicle: number): void;
		closeBombBayDoors(vehicle: number): void;
		areBombBayDoorsOpen(aircraft: number): boolean;
		isSearchlightOn(vehicle: number): boolean;
		setSearchlight(heli: number, toggle: boolean, canBeUsedByAI: boolean): void;
		doesHaveSearchlight(vehicle: number): boolean;
		isSeatAccessible(
			ped: number,
			vehicle: number,
			seatIndex: number,
			side: boolean,
			onEnter: boolean
		): boolean;
		getEntryPositionOfDoor(vehicle: number, doorIndex: number): shared.Vector3Mp;
		canShuffleSeat(vehicle: number, seatIndex: number): boolean;
		getNumModKits(vehicle: number): number;
		setModKit(vehicle: number, modKit: number): void;
		getModKit(vehicle: number): number;
		getModKitType(vehicle: number): number;
		getWheelType(vehicle: number): number;
		setWheelType(vehicle: number, WheelType: number): void;
		getNumModColors(paintType: number, p1: boolean): number;
		setModColor1(
			vehicle: number,
			paintType: number,
			color: number,
			pearlescentColor: number
		): void;
		setModColor2(vehicle: number, paintType: number, color: number): void;
		getModColor1(vehicle: number): GetVehicleModColor1Result;
		getModColor2(vehicle: number): GetVehicleModColor2Result;
		getModColor1Name(vehicle: number, p1: boolean): string;
		getModColor2Name(vehicle: number): string;
		haveModsStreamedIn(vehicle: number): boolean;
		setMod(
			vehicle: number,
			modType: number,
			modIndex: number,
			customTires: boolean
		): void;
		getMod(vehicle: number, modType: number): number;
		getModVariation(vehicle: number, modType: number): boolean;
		getNumMods(vehicle: number, modType: number): number;
		removeMod(vehicle: number, modType: number): void;
		toggleMod(vehicle: number, modType: number, toggle: boolean): void;
		isToggleModOn(vehicle: number, modType: number): boolean;
		getModTextLabel(
			vehicle: number,
			modType: number,
			modValue: number
		): string;
		getModSlotName(vehicle: number, modType: number): string;
		getLiveryName(vehicle: number, liveryIndex: number): string;
		getModModifierValue(
			vehicle: number,
			modType: number,
			modIndex: number
		): number;
		getModIdentifierHash(
			vehicle: number,
			modType: number,
			modIndex: number
		): number;
		preloadMod(p0: number, modType: number, p2: number): void;
		hasPreloadModsFinished(p0: number): boolean;
		releasePreloadMods(vehicle: number): void;
		setTyreSmokeColor(vehicle: number, r: number, g: number, b: number): void;
		getTyreSmokeColor(vehicle: number): GetVehicleTyreSmokeColorResult;
		setWindowTint(vehicle: number, tint: number): void;
		getWindowTint(vehicle: number): number;
		getNumWindowTints(): number;
		getColor(vehicle: number): GetVehicleColorResult;
		getCauseOfDestruction(vehicle: number): number;
		getIsLeftHeadlightDamaged(vehicle: number): boolean;
		getIsRightHeadlightDamaged(vehicle: number): boolean;
		isEngineOnFire(vehicle: number): boolean;
		modifyTopSpeed(vehicle: number, value: number): void;
		setMaxSpeed(vehicle: number, speed: number): void;
		addCombatAngledAvoidanceArea(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number
		): number;
		removeCombatAvoidanceArea(p0: number): void;
		isAnyPedRappellingFromHeli(vehicle: number): boolean;
		setCheatPowerIncrease(vehicle: number, value: number): void;
		setIsWanted(vehicle: number, state: boolean): void;
		setBoatBoomPositionRatio(vehicle: number, ratio: number): void;
		getBoatBoomPositionRatio2(vehicle: number, p1: boolean): void;
		getBoatBoomPositionRatio3(vehicle: number, p1: boolean): void;
		getBoatBoomPositionRatio(vehicle: number): number;
		disablePlaneAileron(vehicle: number, p1: boolean, p2: boolean): void;
		getIsEngineRunning(vehicle: number): boolean;
		setUseAlternateHandling(vehicle: number, toggle: boolean): void;
		setBikeOnStand(vehicle: number, x: number, y: number): void;
		setLastDriven(vehicle: number): void;
		getLastDriven(): number;
		clearLastDriven(): void;
		setHasBeenDrivenFlag(vehicle: number, toggle: boolean): void;
		setTaskGotoPlaneMinHeightAboveTerrain(plane: number, height: number): void;
		setLodMultiplier(vehicle: number, multiplier: number): void;
		setCanSaveInGarage(vehicle: number, toggle: boolean): void;
		getNumberOfBrokenOffBones(vehicle: number): number;
		getNumberOfBrokenBones(vehicle: number): number;
		copyDamages(sourceVehicle: number, targetVehicle: number): void;
		setLightsCutoffDistanceTweak(distance: number): void;
		setShootAtTarget(
			driver: number,
			entity: number,
			xTarget: number,
			yTarget: number,
			zTarget: number
		): void;
		getLockOnTarget(vehicle: number): number;
		setForceHd(vehicle: number, toggle: boolean): void;
		getPlateType(vehicle: number): number;
		trackVisibility(vehicle: number): void;
		isVisible(vehicle: number): boolean;
		setGravity(vehicle: number, toggle: boolean): void;
		setEnableSlipstreaming(toggle: boolean): void;
		getCurrentSlipstreamDraft(vehicle: number): number;
		isSlipstreamLeader(vehicle: number): boolean;
		setInactiveDuringPlayback(vehicle: number, toggle: boolean): void;
		setActiveDuringPlayback(p0: number, p1: boolean): void;
		isSprayable(vehicle: number): boolean;
		setEngineCanDegrade(vehicle: number, toggle: boolean): void;
		setShadowEffect(vehicle: number, p1: number, p2: number): void;
		removeShadowEffect(vehicle: number): void;
		isPlaneLandingGearIntact(plane: number): boolean;
		arePlanePropellersIntact(plane: number): boolean;
		setCanDeformWheels(vehicle: number, toggle: boolean): void;
		isStolen(vehicle: number): boolean;
		setIsStolen(vehicle: number, isStolen: boolean): void;
		setPlaneTurbulenceMultiplier(vehicle: number, multiplier: number): void;
		arePlaneWingsIntact(plane: number): boolean;
		detachFromCargobob(vehicle: number, cargobob: number): void;
		detachFromAnyCargobob(vehicle: number): boolean;
		detachEntityFromCargobob(cargobob: number, entity: number): number;
		isAttachedToCargobob(cargobob: number, vehicleAttached: number): boolean;
		getAttachedToCargobob(cargobob: number): number;
		getEntityAttachedToCargobob(p0: number): number;
		attachToCargobob(
			vehicle: number,
			cargobob: number,
			p2: number,
			x: number,
			y: number,
			z: number
		): void;
		attachEntityToCargobob(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number
		): void;
		setCargobobHookCanDetach(cargobob: number, toggle: boolean): void;
		getCargobobHookPosition(cargobob: number): shared.Vector3Mp;
		doesCargobobHavePickUpRope(cargobob: number): boolean;
		createPickUpRopeForCargobob(cargobob: number, state: number): void;
		removePickUpRopeForCargobob(cargobob: number): void;
		setPickupRopeLengthForCargobob(
			cargobob: number,
			length1: number,
			length2: number,
			p3: boolean
		): void;
		setCargobobPickupRopeDampingMultiplier(p0: number, p1: number): void;
		setCargobobPickupRopeType(p0: number, p1: number): void;
		doesCargobobHavePickupMagnet(cargobob: number): boolean;
		setCargobobPickupMagnetActive(cargobob: number, isActive: boolean): void;
		setCargobobPickupMagnetStrength(cargobob: number, strength: number): void;
		setCargobobPickupMagnetEffectRadius(cargobob: number, p1: number): void;
		setCargobobPickupMagnetReducedFalloff(cargobob: number, p1: number): void;
		setCargobobPickupMagnetPullRopeLength(cargobob: number, p1: number): void;
		setCargobobPickupMagnetPullStrength(cargobob: number, p1: number): void;
		setCargobobPickupMagnetFalloff(vehicle: number, p1: number): void;
		setCargobobPickupMagnetReducedStrength(
			vehicle: number,
			cargobob: number
		): void;
		doesHaveWeapons(vehicle: number): boolean;
		disableWeapon(
			disabled: boolean,
			weaponHash: number,
			vehicle: number,
			owner: number
		): void;
		isWeaponDisabled(
			weaponHash: number,
			vehicle: number,
			owner: number
		): boolean;
		setActiveForPedNavigation(vehicle: number, toggle: boolean): void;
		getClass(vehicle: number): number;
		getClassFromName(modelHash: number): number;
		setPlayersLast(vehicle: number): void;
		setCanBeUsedByFleeingPeds(vehicle: number, toggle: boolean): void;
		setDropsMoneyWhenBlownUp(vehicle: number, toggle: boolean): void;
		setJetEngineOn(vehicle: number, toggle: boolean): void;
		setHandlingHashForAi(vehicle: number, hash: number): void;
		setExtendedRemovalRange(vehicle: number, range: number): void;
		setSteeringBiasScalar(p0: number, p1: number): void;
		setHelicopterRollPitchYawMult(helicopter: number, multiplier: number): void;
		setFrictionOverride(vehicle: number, friction: number): void;
		setWheelsCanBreakOffWhenBlowUp(vehicle: number, toggle: boolean): void;
		setCeilingHeight(vehicle: number, height: number): void;
		clearRouteHistory(vehicle: number): void;
		doesExistWithDecorator(decorator: string): boolean;
		setExclusiveDriver(vehicle: number, ped: number, index: number): void;
		isPedExclusiveDriverOf(ped: number, vehicle: number): number;
		disablePlanePropeller(vehicle: number, p1: number): void;
		setForceAfterburner(vehicle: number, toggle: boolean): void;
		setDisableWindowCollisions(vehicle: number, toggle: boolean): void;
		setDistantCarsEnabled(toggle: boolean): void;
		setNeonLightsColour(
			vehicle: number,
			r: number,
			g: number,
			b: number
		): void;
		getNeonLightsColour(vehicle: number): GetVehicleNeonLightsColourResult;
		setNeonLightEnabled(vehicle: number, index: number, toggle: boolean): void;
		isNeonLightEnabled(vehicle: number, index: number): boolean;
		disableNeonLights(vehicle: number, toggle: boolean): void;
		setDisableSuperdummyMode(vehicle: number, p1: boolean): void;
		requestDashboardScaleformMovie(vehicle: number): void;
		getBodyHealth(vehicle: number): number;
		setBodyHealth(vehicle: number, value: number): void;
		getSuspensionBounds(vehicle: number): GetVehicleSuspensionBoundsResult;
		getSuspensionHeight(vehicle: number): number;
		setCarHighSpeedBumpSeverityMultiplier(multiplier: number): void;
		getNumberOfDoors(vehicle: number): number;
		setHydraulicRaised(p0: number, p1: number): void;
		getBodyHealth2(
			vehicle: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number
		): number;
		setKersAllowed(vehicle: number, toggle: boolean): void;
		getHasKers(vehicle: number): boolean;
		setHydraulicWheelValue(
			vehicle: number,
			wheelId: number,
			value: number
		): void;
		setCamberedWheelsDisabled(p0: number, p1: number): void;
		setHydraulicWheelState(p0: number, p1: number): void;
		setHydraulicWheelStateTransition(
			vehicle: number,
			wheelId: number,
			state: number,
			value: number,
			p4: number
		): void;
		setDamageModifier(vehicle: number, p1: number): number;
		setUnkDamageMultiplier(vehicle: number, multiplier: number): void;
		setControlsInverted(vehicle: number, state: boolean): void;
		setRampLaunchModifier(p0: number, p1: number): void;
		getIsDoorValid(vehicle: number, doorIndex: number): boolean;
		setRocketBoostRefillTime(vehicle: number, seconds: number): void;
		getHasRocketBoost(vehicle: number): boolean;
		isRocketBoostActive(vehicle: number): boolean;
		setRocketBoostActive(vehicle: number, active: boolean): void;
		getHasRetractableWheels(vehicle: number): boolean;
		getIsWheelsLoweredStateActive(vehicle: number): boolean;
		raiseRetractableWheels(vehicle: number): void;
		lowerRetractableWheels(vehicle: number): void;
		getCanJump(vehicle: number): boolean;
		setUseHigherJumpForce(vehicle: number, toggle: boolean): void;
		setWeaponCapacity(
			vehicle: number,
			weaponIndex: number,
			capacity: number
		): void;
		getWeaponCapacity(vehicle: number, weaponIndex: number): number;
		getHasParachute(vehicle: number): boolean;
		getCanActivateParachute(vehicle: number): boolean;
		setParachuteActive(vehicle: number, active: boolean): void;
		setReceivesRampDamage(vehicle: number, toggle: boolean): void;
		setRampSidewaysLaunchMotion(p0: number, p1: number): void;
		setRampUpwardsLaunchMotion(p0: number, p1: number): void;
		setWeaponsDisabled(p0: number, p1: number): void;
		setParachuteModel(vehicle: number, modelHash: number): void;
		setParachuteTextureVariatiion(
			vehicle: number,
			textureVariation: number
		): void;
		getAllS(): GetAllVehiclesResult;
		setRocketBoostPercentage(vehicle: number, percentage: number): void;
		setOppressorTransformState(vehicle: number, state: boolean): void;
		disableWorldCollision(vehicle: number): void;
		setCargobobHookCanAttach(vehicle: number, toggle: boolean): void;
		setBombCount(vehicle: number, bombCount: number): void;
		getBombCount(vehicle: number): number;
		setCountermeasureCount(vehicle: number, counterMeasureCount: number): void;
		getCountermeasureCount(vehicle: number): number;
		setHoverTransformRatio(vehicle: number, ratio: number): void;
		setHoverTransformPercentage(vehicle: number, percentage: number): void;
		setHoverTransformEnabled(vehicle: number, toggle: boolean): void;
		setHoverTransformActive(vehicle: number, toggle: boolean): void;
		findRandomPointInSpace(ped: number): shared.Vector3Mp;
		setDeployHeliStubWings(vehicle: number, deploy: boolean, p2: boolean): void;
		areHeliStubWingsDeployed(vehicle: number): boolean;
		setTurretUnk(vehicle: number, index: number, toggle: boolean): void;
		setSpecialflightWingRatio(vehicle: number, ratio: number): void;
		setDisableTurretMovementThisFrame(vehicle: number, turretId: number): void;
		setUnkFloat0X104ForSubmarineTask(vehicle: number, value: number): void;
		setUnkBool0X102ForSubmarineTask(vehicle: number, value: boolean): void;
		getIsShuntBoostActive(vehicle: number): boolean;
		getLastRammed(vehicle: number): number;
		setDisableUnk(toggle: boolean): void;
		setNitroEnabled(
			vehicle: number,
			toggle: boolean,
			level: number,
			power: number,
			rechargeTime: number,
			disableSound: boolean
		): void;
		setWheelsDealDamage(vehicle: number, toggle: boolean): void;
		setDisableUnk2(toggle: boolean): void;
		getDoesHaveTombstone(vehicle: number): boolean;
		hideTombstone(vehicle: number, toggle: boolean): void;
		getIsEmpDisabled(vehicle: number): boolean;
		getTyreHealth(vehicle: number, wheelIndex: number): number;
		setTyreHealth(vehicle: number, wheelIndex: number, health: number): void;
		getTyreWearMultiplier(vehicle: number, wheelIndex: number): number;
		setTyreWearMultiplier(
			vehicle: number,
			wheelIndex: number,
			multiplier: number
		): void;
		setTyreSoftnessMultiplier(
			vehicle: number,
			wheelIndex: number,
			multiplier: number
		): void;
		setTyreTractionLossMultiplier(
			vehicle: number,
			wheelIndex: number,
			multiplier: number
		): void;

		unk: GameVehicleUnk;
	}

	export interface GameVehicleUnk {
		_0x7D6F9A3EF26136A0(vehicle: number, toggle: boolean, p2: boolean): void;
		_0x6EAAEFC76ACC311F(p0: number): number;
		_0x407DC5E97DB1A4D3(p0: number, p1: number): void;
		_0x9A75585FB2E54FAD(x: number, y: number, z: number, radius: number): void;
		_0x0A436B8643716D14(): void;
		_0x76D26A22750E849E(vehicle: number): void;
		_0xAB31EF4DE6800CE9(p0: number, p1: number): void;
		_0x1B212B26DD3C04DF(vehicle: number, toggle: boolean): void;
		_0xC67DB108A9ADE3BE(p0: number, p1: number): void;
		_0xED5EDE9E676643C9(p0: number, p1: number): void;
		_0xB28B1FE5BFADD7F5(vehicle: number, p1: boolean): void;
		_0x6501129C9E0FFA05(p0: number, p1: number): void;
		_0xDCE97BDF8A0EABC8(vehicle: number, p1: number): void;
		_0x9849DE24FCF23CCC(vehicle: number, toggle: boolean): void;
		_0x8664170EF165C4A6(p0: number, p1: number): void;
		_0x6A98C2ECF57FA5D4(vehicle: number, entity: number): void;
		_0x8AA9180DE2FEDD45(vehicle: number, p1: boolean): void;
		_0x107A473D7A6647A9(vehicle: number): void;
		_0x3B458DDB57038F08(
			vehicle: number,
			doorIndex: number,
			toggle: boolean
		): void;
		_0xA247F9EF01D8082E(p0: number): void;
		_0x8821196D91FA2DE5(vehicle: number, toggle: boolean): void;
		_0x5845066D8A1EA7F7(
			vehicle: number,
			x: number,
			y: number,
			z: number,
			p4: number
		): void;
		_0x796A877E459B99EA(p0: number, p1: number, p2: number, p3: number): void;
		_0xFAF2A78061FD9EF4(p0: number, p1: number, p2: number, p3: number): void;
		_0x063AE2B2CC273588(vehicle: number, p1: boolean): void;
		_0x99CAD8E7AFDB60FA(vehicle: number, p1: number, p2: number): void;
		_0xDBC631F109350B8C(vehicle: number, p1: boolean): void;
		_0x2311DD7159F00582(vehicle: number, p1: boolean): void;
		_0x065D03A9D6B2C6B5(p0: number, p1: number): void;
		_0xC4B3347BD68BD609(p0: number): void;
		_0xD3301660A57C9272(p0: number): void;
		_0xB9562064627FF9DB(p0: number, p1: number): void;
		_0xBE5C1255A1830FF5(vehicle: number, toggle: boolean): void;
		_0x9BECD4B9FEF3F8A6(vehicle: number, p1: boolean): void;
		_0x88BC673CA9E0AE99(vehicle: number, p1: boolean): void;
		_0xE851E480B814D4BA(vehicle: number, p1: boolean): void;
		_0xA01BC64DD4BFBBAC(vehicle: number, p1: number): number;
		_0xC50CE861B55EAB8B(vehicle: number, p1: boolean): void;
		_0x6EBFB22D646FFC18(vehicle: number, p1: boolean): void;
		_0x35BB21DE06784373(p0: number, p1: number): void;
		_0x9F3F689B814F2599(vehicle: number, p1: boolean): void;
		_0x4E74E62E0A97E901(vehicle: number, p1: boolean): void;
		_0x4056EA1105F5ABD7(p0: number, p1: number): void;
		_0xD565F438137F0E10(p0: number, p1: number): void;
		_0x3441CAD2F2231923(vehicle: number, p1: boolean): void;
		_0x0581730AB9380412(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number
		): void;
		_0x737E398138550FFF(p0: number, p1: number): void;
		_0xA4822F1CF23F4810(
			p1: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number
		): _0xA4822F1CF23F4810Result;
		_0x51DB102F4A3BA5E0(toggle: boolean): void;
		_0xA4A9A4C40E615885(p0: number): void;
		_0xEEBFC7A7EFDC35B4(vehicle: number): number;
		_0x5EE5632F47AE9695(vehicle: number, health: number): void;
		_0x1CF38D529D7441D9(vehicle: number, toggle: boolean): void;
		_0x1F9FB66F3A3842D2(vehicle: number, p1: boolean): void;
		_0x59C3757B3B7408E8(vehicle: number, toggle: boolean, p2: number): void;
		_0x0AD9E8F87FF7C16F(p0: number, p1: boolean): void;
		_0xAB04325045427AAE(vehicle: number, p1: boolean): void;
		_0xCFD778E7904C255E(vehicle: number): void;
		_0x4D9D109F63FEE1D4(p0: number, p1: boolean): void;
		_0x279D50DE5652D935(vehicle: number, toggle: boolean): void;
		_0xF25E02CB9C5818F8(): void;
		_0x182F266C2D9E2BEB(vehicle: number, p1: number): void;
		_0xF051D9BFB6BA39C0(p0: number): void;
		_0x4C815EB175086F84(p0: number, p1: number): number;
		_0xB264C4D2F2B0A78B(vehicle: number): void;
		_0x1F34B0626C594380(p0: number, p1: number): void;
		_0x2C1D8B3B19E517CC(p0: number, p1: number): number;
		_0xC0ED6438E6D39BA8(p0: number, p1: number, p2: number): void;
		_0x9BDDC73CC6A115D4(vehicle: number, p1: boolean, p2: boolean): void;
		_0x56EB5E94318D3FB6(vehicle: number, p1: boolean): void;
		_0x2C4A1590ABF43E8B(vehicle: number, p1: boolean): void;
		_0xE05DD0E9707003A3(p0: number, p1: boolean): void;
		_0xE5810AC70602F2F5(vehicle: number, p1: number): void;
		_0x6A973569BA094650(vehicle: number, p1: number): void;
		_0xF78F94D60248C737(vehicle: number, p1: boolean): boolean;
		_0x5E569EC46EC21CAE(vehicle: number, toggle: boolean): void;
		_0x41062318F23ED854(vehicle: number, toggle: boolean): void;
		_0x4AD280EB48B2D8E6(vehicle: number, togle: boolean): void;
		_0xB68CFAF83A02768D(vehicle: number, toggle: boolean): void;
		_0x0205F5365292D2EB(vehicle: number, p1: number): void;
		_0xCF9159024555488C(p0: number): void;
		_0xB93B2867F7B479D1(vehicle: number, index: number): void;
		_0x35E0654F4BAD7971(p0: boolean): void;
		_0xA7DCDF4DED40A8F4(vehicle: number, p1: boolean): void;
		_0xD4C4642CB7F50B5D(vehicle: number): boolean;
		_0xC361AA040D6637A8(vehicle: number, p1: boolean): void;
		_0xE16142B94664DEFD(vehicle: number, p1: boolean): void;
		_0x26D99D5A82FD18E8(p0: number): void;
		_0x5BA68A0840D546AC(p0: number, p1: number): number;
		_0x4419966C9936071A(vehicle: number): void;
		_0x870B8B7A766615C8(p0: number, p1: number, p2: number): void;
		_0x8533CAFDE1F0F336(p0: number): number;
		_0xD4196117AF7BB974(p0: number, p1: number): number;
		_0xBB2333BB87DDD87F(p0: number, p1: number): void;
		_0x73561D4425A021A2(p0: number, p1: number): void;
		_0x7BBE7FF626A591FE(p0: number): void;
		_0x65B080555EA48149(p0: number): void;
		_0x428AD3E26C8D9EB0(
			vehicle: number,
			x: number,
			y: number,
			z: number,
			p4: number
		): void;
		_0xE2F53F172B45EDE1(): void;
		_0xBA91D045575699AD(vehicle: number): boolean;
		_0x80E3357FDEF45C21(p0: number, p1: number): void;
		_0xB2E0C0D6922D31F2(vehicle: number, toggle: boolean): void;
		_0x3DE51E9C80B116CF(p0: number): number;
		_0x9D30687C57BAA0BB(p0: number): void;
		_0x41290B40FA63E6DA(p0: number): void;
		_0x0419B167EE128F33(p0: number, p1: number): number;
		_0xF3B0E0AED097A3F5(p0: number, p1: number): number;
		_0xD3E51C0AB8C26EEE(p0: number, p1: number): number;
		_0x72BECCF4B829522E(p0: number, p1: number): void;
		_0x66E3AAFACE2D1EB8(p0: number, p1: number, p2: number): void;
		_0x1312DDD8385AEE4E(p0: number, p1: number): void;
		_0xEDBC8405B3895CC9(p0: number, p1: number): void;
		_0x26E13D440E7F6064(vehicle: number, value: number): void;
		_0x2FA2494B47FDD009(p0: number, p1: number): void;
		_0x78CEEE41F49F421F(p0: number, p1: number): void;
		_0xAF60E6A2936F982A(p0: number, p1: number): void;
		_0x430A7631A84C9BE7(p0: number): void;
		_0x8235F1BEAD557629(vehicle: number, toggle: boolean): void;
		_0x9640E30A7F395E4B(
			vehicle: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number
		): void;
		_0x0BBB9A7A8FFE931B(p0: number, p1: number, p2: number): void;
		_0x0A3F820A9A9A9AC5(vehicle: number, x: number, y: number, z: number): void;
		_0x51F30DB60626A20E(
			vehicle: number,
			x: number,
			y: number,
			z: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			p7: number,
			p8: number
		): boolean;
		_0x97841634EF7DF1D6(vehicle: number, toggle: boolean): void;
		_0x3A9128352EAC9E85(p0: number): number;
		_0xAA653AE61924B0A0(vehicle: number, toggle: boolean): void;
		_0x887FA38787DE8C72(vehicle: number): void;
		_0x36DE109527A2C0C4(toggle: boolean): void;
		_0x82E0AC411E41A5B4(toggle: boolean): void;
		_0x99A05839C46CE316(toggle: boolean): void;
		_0xE8718FAF591FD224(vehicle: number): boolean;
		_0x5BBCF35BF6E456F7(toggle: boolean): void;
		_0x8F0D5BA1C2CC91D7(toggle: boolean): void;
		_0xF8B49F5BA7F850E7(vehicle: number, p1: number): void;
	}

	export interface _0xA4822F1CF23F4810Result {
		outVec: shared.Vector3Mp;
		outVec1: shared.Vector3Mp;
		result: boolean;
	}

	export interface GetAllVehiclesResult {
		vehsStruct: number;
		result: number;
	}

	export interface GetVehicleCustomPrimaryColourResult {
		r: number;
		g: number;
		b: number;
	}

	export interface GetVehicleCustomSecondaryColourResult {
		r: number;
		g: number;
		b: number;
	}

	export interface GetVehicleColoursResult {
		colorPrimary: number;
		colorSecondary: number;
	}

	export interface GetVehicleLightsStateResult {
		lightsOn: boolean;
		highbeamsOn: boolean;
		result: boolean;
	}

	export interface GetRandomVehicleModelInMemoryResult {
		modelHash: number;
		successIndicator: number;
	}

	export interface GetVehicleExtraColoursResult {
		pearlescentColor: number;
		wheelColor: number;
	}

	export interface _0xA4822F1CF23F4810Result {
		outVec: shared.Vector3Mp;
		outVec1: shared.Vector3Mp;
		result: boolean;
	}

	export interface GetVehicleModColor1Result {
		paintType: number;
		color: number;
		pearlescentColor: number;
	}

	export interface GetVehicleModColor2Result {
		paintType: number;
		color: number;
	}

	export interface GetVehicleTyreSmokeColorResult {
		r: number;
		g: number;
		b: number;
	}

	export interface GetVehicleColorResult {
		r: number;
		g: number;
		b: number;
	}

	export interface GetVehicleNeonLightsColourResult {
		r: number;
		g: number;
		b: number;
	}

	export interface GetVehicleSuspensionBoundsResult {
		out1: shared.Vector3Mp;
		out2: shared.Vector3Mp;
	}

	export interface GameWaterLegacy {
		getWaterHeight(x: number, y: number, z: number): number;
		getWaterHeightNoWaves(x: number, y: number, z: number): number;
		testProbeAgainstWater(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number
		): shared.Vector3Mp;
		testProbeAgainstAllWater(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number
		): boolean;
		testVerticalProbeAgainstAllWater(
			x: number,
			y: number,
			z: number,
			p3: number
		): number;
		modifyWater(x: number, y: number, radius: number, height: number): void;
		setWavesIntensity(intensity: number): void;
	}

	export interface GameWater extends GameWaterLegacy {
		getHeight(x: number, y: number, z: number): number;
		getHeightNoWaves(x: number, y: number, z: number): number;
		testProbeAgainst(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number
		): shared.Vector3Mp;
		testProbeAgainstAll(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number
		): boolean;
		testVerticalProbeAgainstAll(
			x: number,
			y: number,
			z: number,
			p3: number
		): number;
		modify(x: number, y: number, radius: number, height: number): void;
		addCurrentRise(
			x: number,
			y: number,
			z: number,
			radius: number,
			unk: number
		): number;
		removeCurrentRise(p0: number): void;
		setDeepOceanScaler(intensity: number): void;
		getDeepOceanScaler(): number;
		resetDeepOceanScaler(): void;

		unk: GameWaterUnk;
	}

	export interface GameWaterUnk {
		_0x547237AA71AB44DE(p0: number): void;
	}

	export interface GameWeaponLegacy {
		getWeaponComponentTypeModel(componentHash: number): number;
		getWeapontypeModel(weaponHash: number): number;
		getWeapontypeSlot(weaponHash: number): number;
		getWeapontypeGroup(weaponHash: number): number;
		isWeaponValid(weaponHash: number): boolean;
		requestWeaponAsset(weaponHash: number, p1: number, p2: number): void;
		hasWeaponAssetLoaded(weaponHash: number): boolean;
		removeWeaponAsset(weaponHash: number): void;
		createWeaponObject(
			weaponHash: number,
			ammoCount: number,
			x: number,
			y: number,
			z: number,
			showWorldModel: boolean,
			scale: number,
			p7: number,
			p8: number,
			p9: number
		): number;
		giveWeaponComponentToWeaponObject(
			weaponObject: number,
			addonHash: number
		): void;
		removeWeaponComponentFromWeaponObject(p0: number, p1: number): void;
		hasWeaponGotWeaponComponent(weapon: number, addonHash: number): boolean;
		giveWeaponObjectToPed(weaponObject: number, ped: number): void;
		doesWeaponTakeWeaponComponent(
			weaponHash: number,
			componentHash: number
		): boolean;
		setWeaponObjectTintIndex(weapon: number, tintIndex: number): void;
		getWeaponObjectTintIndex(weapon: number): number;
		getWeaponTintCount(weaponHash: number): number;
		getWeaponHudStats(weaponHash: number): number;
		getWeaponComponentHudStats(componentHash: number): number;
		getWeaponClipSize(weaponHash: number): number;
		requestWeaponHighDetailModel(weaponObject: number): void;
		getWeaponDamageType(weaponHash: number): number;
		canUseWeaponOnParachute(weaponHash: number): boolean;
	}

	export interface GameWeapon extends GameWeaponLegacy {
		enableLaserSightRendering(toggle: boolean): void;
		getComponentTypeModel(componentHash: number): number;
		getTypeModel(weaponHash: number): number;
		getTypeSlot(weaponHash: number): number;
		getTypeGroup(weaponHash: number): number;
		getComponentVariantExtraComponentCount(componentHash: number): number;
		getComponentVariantExtraComponentModel(
			componentHash: number,
			extraComponentIndex: number
		): number;
		setCurrentPed(ped: number, weaponHash: number, bForceInHand: boolean): void;
		getCurrentPed(ped: number, p2: boolean): number;
		getCurrentPedEntityIndex(ped: number, p1: number): number;
		getBestPed(ped: number, p1: boolean): number;
		setCurrentPedVehicle(ped: number, weaponHash: number): boolean;
		getCurrentPedVehicle(ped: number): number;
		isPedArmed(ped: number, typeFlags: number): boolean;
		isValid(weaponHash: number): boolean;
		hasPedGot(ped: number, weaponHash: number, p2: boolean): boolean;
		isPedReadyToShoot(ped: number): boolean;
		getPedTypeInSlot(ped: number, weaponSlot: number): number;
		getAmmoInPed(ped: number, weaponhash: number): number;
		addAmmoToPed(ped: number, weaponHash: number, ammo: number): void;
		setPedAmmo(
			ped: number,
			weaponHash: number,
			ammo: number,
			p3: boolean
		): void;
		setPedInfiniteAmmo(ped: number, toggle: boolean, weaponHash: number): void;
		setPedInfiniteAmmoClip(ped: number, toggle: boolean): void;
		giveToPed(
			ped: number,
			weaponHash: number,
			ammoCount: number,
			isHidden: boolean,
			bForceInHand: boolean
		): void;
		giveDelayedToPed(
			ped: number,
			weaponHash: number,
			ammoCount: number,
			bForceInHand: boolean
		): void;
		removeAllPedS(ped: number, p1: boolean): void;
		removeFromPed(ped: number, weaponHash: number): void;
		hidePedForScriptedCutscene(ped: number, toggle: boolean): void;
		setPedCurrentVisible(
			ped: number,
			visible: boolean,
			deselectWeapon: boolean,
			p3: boolean,
			p4: boolean
		): void;
		setPedDropsWeaponsWhenDead(ped: number, toggle: boolean): void;
		hasPedBeenDamagedBy(
			ped: number,
			weaponHash: number,
			weaponType: number
		): boolean;
		clearPedLastDamage(ped: number): void;
		hasEntityBeenDamagedBy(
			entity: number,
			weaponHash: number,
			weaponType: number
		): boolean;
		clearEntityLastDamage(entity: number): void;
		setPedDrops(ped: number): void;
		setPedDropsInventory(
			ped: number,
			weaponHash: number,
			xOffset: number,
			yOffset: number,
			zOffset: number,
			ammoCount: number
		): void;
		getMaxAmmoInClip(ped: number, weaponHash: number, p2: boolean): number;
		getAmmoInClip(ped: number, weaponHash: number): number;
		setAmmoInClip(ped: number, weaponHash: number, ammo: number): boolean;
		getMaxAmmo(ped: number, weaponHash: number): number;
		getMaxAmmoByType(ped: number, ammoTypeHash: number): number;
		addAmmoToPedByType(ped: number, ammoTypeHash: number, ammo: number): void;
		setPedAmmoByType(ped: number, ammoTypeHash: number, ammo: number): void;
		getPedAmmoByType(ped: number, ammoTypeHash: number): number;
		setPedAmmoToDrop(ped: number, p1: number): void;
		setPickupAmmoAmountScaler(p0: number): void;
		getPedAmmoTypeFrom(ped: number, weaponHash: number): number;
		getPedAmmoTypeFrom2(ped: number, weaponHash: number): number;
		getPedLastImpactCoord(ped: number): shared.Vector3Mp;
		setPedGadget(ped: number, gadgetHash: number, p2: boolean): void;
		getIsPedGadgetEquipped(ped: number, gadgetHash: number): boolean;
		getSelectedPed(ped: number): number;
		explodeProjectiles(ped: number, weaponHash: number, p2: boolean): void;
		removeAllProjectilesOfType(weaponHash: number, explode: boolean): void;
		getLockonDistanceOfCurrentPed(ped: number): number;
		getMaxRangeOfCurrentPed(ped: number): number;
		hasVehicleGotProjectileAttached(
			driver: number,
			vehicle: number,
			weaponHash: number,
			p3: number
		): boolean;
		giveComponentToPed(
			ped: number,
			weaponHash: number,
			componentHash: number
		): void;
		removeComponentFromPed(
			ped: number,
			weaponHash: number,
			componentHash: number
		): void;
		hasPedGotComponent(
			ped: number,
			weaponHash: number,
			componentHash: number
		): boolean;
		isPedComponentActive(
			ped: number,
			weaponHash: number,
			componentHash: number
		): boolean;
		refillAmmoInstantly(ped: number): boolean;
		makePedReload(ped: number): boolean;
		requestAsset(weaponHash: number, p1: number, p2: number): void;
		hasAssetLoaded(weaponHash: number): boolean;
		removeAsset(weaponHash: number): void;
		createObject(
			weaponHash: number,
			ammoCount: number,
			x: number,
			y: number,
			z: number,
			showWorldModel: boolean,
			scale: number,
			p7: number,
			p8: number,
			p9: number
		): number;
		giveComponentToWeaponObject(weaponObject: number, addonHash: number): void;
		removeComponentFromWeaponObject(p0: number, p1: number): void;
		hasGotWeaponComponent(weapon: number, addonHash: number): boolean;
		giveObjectToPed(weaponObject: number, ped: number): void;
		doesTakeWeaponComponent(weaponHash: number, componentHash: number): boolean;
		getObjectFromPed(ped: number, p1: boolean): number;
		giveLoadoutToPed(ped: number, loadoutHash: number): void;
		setPedTintIndex(ped: number, weaponHash: number, tintIndex: number): void;
		getPedTintIndex(ped: number, weaponHash: number): number;
		setObjectTintIndex(weapon: number, tintIndex: number): void;
		getObjectTintIndex(weapon: number): number;
		getTintCount(weaponHash: number): number;
		setPedLiveryColor(
			ped: number,
			weaponHash: number,
			camoComponentHash: number,
			colorIndex: number
		): void;
		getPedLiveryColor(
			ped: number,
			weaponHash: number,
			camoComponentHash: number
		): number;
		setObjectLiveryColor(
			weaponObject: number,
			camoComponentHash: number,
			colorIndex: number
		): void;
		getObjectLiveryColor(
			weaponObject: number,
			camoComponentHash: number
		): number;
		getHudStats(weaponHash: number): number;
		getComponentHudStats(componentHash: number): number;
		getDamage(weaponHash: number, componentHash: number): number;
		getClipSize(weaponHash: number): number;
		getTimeBetweenShots(weaponHash: number): number;
		setPedChanceOfFiringBlanks(ped: number, xBias: number, yBias: number): void;
		setPedShootOrdnance(ped: number, p1: number): number;
		requestHighDetailModel(weaponObject: number): void;
		setDamageModifierThisFrame(
			weaponHash: number,
			damageMultiplier: number
		): void;
		isPedCurrentSilenced(ped: number): boolean;
		isFlashLightOn(ped: number): boolean;
		setFlashLightFadeDistance(distance: number): number;
		setFlashLightEnabled(ped: number, toggle: boolean): void;
		setAnimationOverride(ped: number, animStyle: number): void;
		getDamageType(weaponHash: number): number;
		canUseOnParachute(weaponHash: number): boolean;
		createAirDefenseSphere(
			x: number,
			y: number,
			z: number,
			radius: number,
			p4: number,
			p5: number,
			p6: number,
			weaponHash: number
		): number;
		createAirDefenseArea(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			weaponHash: number
		): number;
		removeAirDefenseZone(zoneId: number): boolean;
		removeAllAirDefenseZones(): void;
		setPlayerAirDefenseZoneFlag(
			player: number,
			zoneId: number,
			enable: boolean
		): void;
		isAnyAirDefenseZoneInsideSphere(
			x: number,
			y: number,
			z: number,
			radius: number
		): number;
		fireAirDefense(zoneId: number, x: number, y: number, z: number): void;
		doesAirDefenseZoneExist(zoneId: number): boolean;
		setCanPedEquip(ped: number, weaponHash: number, toggle: boolean): void;
		setCanPedEquipAllS(ped: number, toggle: boolean): void;

		unk: GameWeaponUnk;
	}

	export interface GameWeaponUnk {
		_0x50276EF8172F5F12(ped: number): void;
		_0x24C024BA8379A70A(p0: number, p1: number): void;
		_0xA2C9AC24B4061285(ped: number, weaponHash: number): number;
		_0x977CA98939E82E4B(weaponObject: number, p1: number): void;
		_0xE4DCEC7FD5B739A5(ped: number): void;
	}

	export interface GameZoneLegacy {
		getZoneAtCoords(x: number, y: number, z: number): number;
		getZoneFromNameId(zoneName: string): number;
		getZonePopschedule(zoneId: number): number;
		getNameOfZone(x: number, y: number, z: number): string;
		setZoneEnabled(zoneId: number, toggle: boolean): void;
		getZoneScumminess(zoneId: number): number;
	}

	export interface GameZone extends GameZoneLegacy {
		getAtCoords(x: number, y: number, z: number): number;
		getFromNameId(zoneName: string): number;
		getPopschedule(zoneId: number): number;
		getNameOf(x: number, y: number, z: number): string;
		setEnabled(zoneId: number, toggle: boolean): void;
		getScumminess(zoneId: number): number;
		overridePopscheduleVehicleModel(
			scheduleId: number,
			vehicleHash: number
		): void;
		clearPopscheduleOverrideVehicleModel(scheduleId: number): void;
		getHashOfMapAreaAtCoords(x: number, y: number, z: number): number;
	}

	export interface GameSystemMp extends GameSystem {}

	export interface GameAppMp extends GameApp {}

	export interface GameAudioMp extends GameAudio {}

	export interface GameBrainMp extends GameBrain {}

	export interface GameCamMp extends GameCam {}

	export interface GamePadMp extends GamePad {}

	export interface GameCutsceneMp extends GameCutscene {}

	export interface GameClockMp extends GameClock {}

	export interface GameDatafileMp extends GameDatafile {}

	export interface GameDecoratorMp extends GameDecorator {}

	export interface GameDlcMp extends GameDlc {}

	export interface GameEntityMp extends GameEntity {}

	export interface GameEventMp extends GameEvent {}

	export interface GameFilesMp extends GameFiles {}

	export interface GameFireMp extends GameFire {}

	export interface GameGameplayMp extends GameGameplay {}

	export interface GameGraphicsMp extends GameGraphics {}

	export interface GameHudMp extends GameHud {}

	export interface GameInteriorMp extends GameInterior {}

	export interface GameItemsetMp extends GameItemset {}

	export interface GameLoadingScreenMp extends GameLoadingScreen {}

	export interface GameLocalizationMp extends GameLocalization {}

	export interface GameMobileMp extends GameMobile {}

	export interface GameNetworkMp extends GameNetwork {}

	export interface GameObjectMp extends GameObject {}

	export interface GamePathfindMp extends GamePathfind {}

	export interface GamePedMp extends GamePed {}

	export interface GamePhysicsMp extends GamePhysics {}

	export interface GamePlayerMp extends GamePlayer {}

	export interface GameRecordingMp extends GameRecording {}

	export interface GameReplayMp extends GameReplay {}

	export interface GameScriptMp extends GameScript {}

	export interface GameShapetestMp extends GameShapetest {}

	export interface GameStatsMp extends GameStats {}

	export interface GameStreamingMp extends GameStreaming {}

	export interface GameTaskMp extends GameTask {}

	export interface GameVehicleMp extends GameVehicle {}

	export interface GameWaterMp extends GameWater {}

	export interface GameWeaponMp extends GameWeapon {}

	export interface GameZoneMp extends GameZone {}

	const mp: Mp;

	export default mp;

	export * from 'rage-shared';
}
