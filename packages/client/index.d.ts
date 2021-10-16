/// <reference types="@ragemp/types-shared"/>

declare module 'rage-client' {
	import * as shared from 'rage-shared';

	// Temp
	export type Handle = number;
	export type Hash = number;

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

	interface PedBaseMp extends EntityMp {
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
		giveWeapon(weapon: WeaponHash | Hash, ammo: number, equipNow: boolean): void;
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
		removeWeapon(weapon: WeaponHash | Hash): void;
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
		setAmmoInClip(weapon: WeaponHash | Hash, ammo: number): void;
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

	export const discord: DiscordMp;
	export const blips: BlipMpPool;
	export const browsers: BrowserMpPool;
	export const cameras: CameraMpPool;

	export * from 'rage-shared';
}
