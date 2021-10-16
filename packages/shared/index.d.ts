/// <reference path="weapon-hash.d.ts"/>
/// <reference path="vehicle-hash.d.ts"/>

declare module 'rage-shared' {
	export type Array2d = [number, number];
	export type Array3d = [number, number, number];
	export type Array4d = [number, number, number, number];
	export type HashOrString = number | string;
	export type RGB = [number, number, number];
	export type RGBA = [number, number, number, number];
	export type KeyValueCollection = { [key: string]: any };

	export interface IVector3 {
		readonly x: number;
		readonly y: number;
		readonly z: number;
	}

	export type Vector3Mp = {
		readonly x: number;
		readonly y: number;
		readonly z: number;

		new (x: number, y: number, z: number): Vector3Mp;
		new (arr: Array3d): Vector3Mp;
		new (obj: IVector3): Vector3Mp;

		/**
		 * This function is used to add a Vector3 to another Vector3 or scalar.
		 *
		 * @param value Vector3 or number: The vector or scalar to be added to the callee.
		 */
		add(otherVec: number | Vector3Mp): Vector3Mp;

		/**
		 * This function returns the angle (in radians) between two vectors.
		 *
		 * @param vector3 Vector3: The other vector to calcuate the angle to.
		 */
		angleTo(otherVec: Vector3Mp): number;

		/**
		 * This function returns a copy of a Vector3.
		 */
		clone(): Vector3Mp;

		/**
		 * This function is used to calculate the cross product of two vectors. The cross product is a vector that is perpendicular to both input vectors.
		 *
		 * @param otherVec Vector3: The other vector.
		 */
		cross(otherVec: Vector3Mp): Vector3Mp;

		/**
		 * This function is used to divide a Vector3 by another Vector3 or scalar.
		 *
		 * @param otherVec Vector3: The vector or scalar to divide the callee by.
		 */
		divide(otherVec: number | Vector3Mp): Vector3Mp;

		/**
		 * This function is used to calculate the dot product of two vectors.
		 *
		 * @param otherVec Vector3: The other vector.
		 */
		dot(otherVec: Vector3Mp): number;

		/**
		 * This function is used to test where two Vector3s equal each other.
		 *
		 * @param vector3 Vector3: The vector to compare to the callee.
		 */
		equals(otherVec: Vector3Mp): boolean;

		/**
		 * This function returns the magnitude of a Vector3.
		 */
		length(): number;

		/**
		 * This function returns the maximum partial of a Vector3.
		 */
		max(): number;

		/**
		 * This function returns the minimum partial of a Vector3.
		 */
		min(): number;

		/**
		 * This function is used to multiply a Vector3 by another Vector3 or scalar.
		 *
		 * @param otherVec Vector3 or number: The vector or scalar to be added to the callee.
		 */
		multiply(otherVec: number | Vector3Mp): Vector3Mp;

		/**
		 * This function returns the opposite of a Vector3 by flipping the sign of each partial.
		 */
		negative(): Vector3Mp;

		/**
		 * This function is used to subtract a Vector3 or scalar from another Vector3.
		 *
		 * @param otherVec Vector3: The vector or scalar to be subtracted from the callee.
		 */
		subtract(value: number | Vector3Mp): Vector3Mp;

		// TODO: wiki
		toAngles(): Array2d;

		/**
		 * This function returns an array of the partials of a Vector3.
		 */
		toArray(): Array3d;

		/**
		 * This function returns a normalized copy of a Vector3- one that has the same direction but with a magnitude of 1.
		 */
		unit(): Vector3Mp;
	};

	export const enum EntityType {
		BLIP = 'blip',
		CHECKPOINT = 'checkpoint',
		COLSHAPE = 'colshape',
		DUMMY = 'dummy',
		MARKER = 'marker',
		OBJECT = 'object',
		PICKUP = 'pickup',
		PLAYER = 'player',
		VEHICLE = 'vehicle',
		PED = 'ped',
		TEXT_LABEL = 'textlabel'
	}
}
