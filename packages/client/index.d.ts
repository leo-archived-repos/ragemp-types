/// <reference types="@ragemp/types-shared"/>
/// <reference path="enums.d.ts"/>

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

	const mp: Mp;

	export default mp;

	export * from 'rage-shared';
}
