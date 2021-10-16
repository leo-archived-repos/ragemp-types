/// <reference types="@ragemp/types-shared"/>

declare module 'rage-client' {
	import * as shared from 'rage-shared';

	// Temp
	export type Handle = number;
	export type Hash = number;

	/** [https://wiki.rage.mp/index.php?title=HUD_Components](https://wiki.rage.mp/index.php?title=HUD_Components) */
	export const enum HudComponent {
		HUD = 0,
		WANTED_STARS = 1,
		WEAPON_ICON = 2,
		CASH = 3,
		MP_CASH = 4,
		MP_MESSAGE = 5,
		VEHICLE_NAME = 6,
		AREA_NAME = 7,
		VEHICLE_CLASS = 8,
		STREET_NAME = 9,
		HELP_TEXT = 10,
		FLOATING_HELP_TEXT_1 = 11,
		FLOATING_HELP_TEXT_2 = 12,
		CASH_CHANGE = 13,
		RETICLE = 14,
		SUBTITLE_TEXT = 15,
		RADIO_STATIONS = 16,
		SAVING_GAME = 17,
		GAME_STREAM = 18,
		WEAPON_WHEEL = 19,
		WEAPON_WHEEL_STATS = 20
	}

	export const enum InputGroup {
		INPUTGROUP_MOVE = 0,
		INPUTGROUP_LOOK = 1,
		INPUTGROUP_WHEEL = 2,
		INPUTGROUP_CELLPHONE_NAVIGATE = 3,
		INPUTGROUP_CELLPHONE_NAVIGATE_UD = 4,
		INPUTGROUP_CELLPHONE_NAVIGATE_LR = 5,
		INPUTGROUP_FRONTEND_DPAD_ALL = 6,
		INPUTGROUP_FRONTEND_DPAD_UD = 7,
		INPUTGROUP_FRONTEND_DPAD_LR = 8,
		INPUTGROUP_FRONTEND_LSTICK_ALL = 9,
		INPUTGROUP_FRONTEND_RSTICK_ALL = 10,
		INPUTGROUP_FRONTEND_GENERIC_UD = 11,
		INPUTGROUP_FRONTEND_GENERIC_LR = 12,
		INPUTGROUP_FRONTEND_GENERIC_ALL = 13,
		INPUTGROUP_FRONTEND_BUMPERS = 14,
		INPUTGROUP_FRONTEND_TRIGGERS = 15,
		INPUTGROUP_FRONTEND_STICKS = 16,
		INPUTGROUP_SCRIPT_DPAD_ALL = 17,
		INPUTGROUP_SCRIPT_DPAD_UD = 18,
		INPUTGROUP_SCRIPT_DPAD_LR = 19,
		INPUTGROUP_SCRIPT_LSTICK_ALL = 20,
		INPUTGROUP_SCRIPT_RSTICK_ALL = 21,
		INPUTGROUP_SCRIPT_BUMPERS = 22,
		INPUTGROUP_SCRIPT_TRIGGERS = 23,
		INPUTGROUP_WEAPON_WHEEL_CYCLE = 24,
		INPUTGROUP_FLY = 25,
		INPUTGROUP_SUB = 26,
		INPUTGROUP_VEH_MOVE_ALL = 27,
		INPUTGROUP_CURSOR = 28,
		INPUTGROUP_CURSOR_SCROLL = 29,
		INPUTGROUP_SNIPER_ZOOM_SECONDARY = 30,
		INPUTGROUP_VEH_HYDRAULICS_CONTROL = 31,
		MAX_INPUTGROUPS = 32,
		INPUTGROUP_INVALID = 33
	}

	export const enum Controls {
		/**
		 * V (Back on Xbox)
		 */
		INPUT_NEXT_CAMERA = 0,
		/**
		 * Left Mouse Button
		 */
		INPUT_LOOK_LR = 1,
		/**
		 * Right Mouse Button
		 */
		INPUT_LOOK_UD = 2,
		/**
		 * Control-Break Processing
		 */
		INPUT_LOOK_UP_ONLY = 3,
		/**
		 * Middle Mouse Button
		 */
		INPUT_LOOK_DOWN_ONLY = 4,
		/**
		 * undefined */
		INPUT_LOOK_LEFT_ONLY = 5,
		/**
		 * Right Mouse Button
		 */
		INPUT_LOOK_RIGHT_ONLY = 6,
		/**
		 * undefined */
		INPUT_CINEMATIC_SLOWMO = 7,
		/**
		 * S
		 */
		INPUT_SCRIPTED_FLY_UD = 8,
		/**
		 * D
		 */
		INPUT_SCRIPTED_FLY_LR = 9,
		/**
		 * PAGE UP
		 */
		INPUT_SCRIPTED_FLY_ZUP = 10,
		/**
		 * PAGE DOWN
		 */
		INPUT_SCRIPTED_FLY_ZDOWN = 11,
		/**
		 * MOUSE DOWN
		 */
		INPUT_WEAPON_WHEEL_UD = 12,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_WEAPON_WHEEL_LR = 13,
		/**
		 * MOUSE SCROLL WHEEL DOWN
		 */
		INPUT_WEAPON_WHEEL_NEXT = 14,
		/**
		 * MOUSE SCROLL WHEEL UP
		 */
		INPUT_WEAPON_WHEEL_PREV = 15,
		/**
		 * MOUSE SCROLL WHEEL DOWN
		 */
		INPUT_SELECT_NEXT_WEAPON = 16,
		/**
		 * MOUSE SCROLL WHEEL UP
		 */
		INPUT_SELECT_PREV_WEAPON = 17,
		/**
		 * ENTER / LEFT MOUSE BUTTON / SPACEBAR
		 */
		INPUT_SKIP_CUTSCENE = 18,
		/**
		 * LEFT ALT
		 */
		INPUT_CHARACTER_WHEEL = 19,
		/**
		 * Z
		 */
		INPUT_MULTIPLAYER_INFO = 20,
		/**
		 * Shift Key
		 */
		INPUT_SPRINT = 21,
		/**
		 * Space Key
		 */
		INPUT_JUMP = 22,
		/**
		 * Enter Key
		 */
		INPUT_ENTER = 23,
		/**
		 * Left Mouse Button
		 */
		INPUT_ATTACK = 24,
		/**
		 * Right Mouse Button
		 */
		INPUT_AIM = 25,
		/**
		 * C
		 */
		INPUT_LOOK_BEHIND = 26,
		/**
		 * ARROW UP/SCROLLWHEEL BUTTON (press)
		 */
		INPUT_PHONE = 27,
		INPUT_SPECIAL_ABILITY = 28,
		/**
		 * B
		 */
		INPUT_SPECIAL_ABILITY_SECONDARY = 29,
		/**
		 * D
		 */
		INPUT_MOVE_LR = 30,
		/**
		 * S
		 */
		INPUT_MOVE_UD = 31,
		/**
		 * W
		 */
		INPUT_MOVE_UP_ONLY = 32,
		/**
		 * S
		 */
		INPUT_MOVE_DOWN_ONLY = 33,
		/**
		 * A
		 */
		INPUT_MOVE_LEFT_ONLY = 34,
		/**
		 * D
		 */
		INPUT_MOVE_RIGHT_ONLY = 35,
		/**
		 * LEFT CONTROL
		 */
		INPUT_DUCK = 36,
		/**
		 * TAB
		 */
		INPUT_SELECT_WEAPON = 37,
		/**
		 * E
		 */
		INPUT_PICKUP = 38,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM = 39,
		/**
		 * ]
		 */
		INPUT_SNIPER_ZOOM_IN_ONLY = 40,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT_ONLY = 41,
		/**
		 * ]
		 */
		INPUT_SNIPER_ZOOM_IN_SECONDARY = 42,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT_SECONDARY = 43,
		/**
		 * Q
		 */
		INPUT_COVER = 44,
		/**
		 * R
		 */
		INPUT_RELOAD = 45,
		/**
		 * E
		 */
		INPUT_TALK = 46,
		/**
		 * G
		 */
		INPUT_DETONATE = 47,
		/**
		 * Z
		 */
		INPUT_HUD_SPECIAL = 48,
		/**
		 * F
		 */
		INPUT_ARREST = 49,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_ACCURATE_AIM = 50,
		/**
		 * E
		 */
		INPUT_CONTEXT = 51,
		/**
		 * Q
		 */
		INPUT_CONTEXT_SECONDARY = 52,
		INPUT_WEAPON_SPECIAL = 53,
		/**
		 * E
		 */
		INPUT_WEAPON_SPECIAL_TWO = 54,
		/**
		 * SPACEBAR
		 */
		INPUT_DIVE = 55,
		/**
		 * F9
		 */
		INPUT_DROP_WEAPON = 56,
		/**
		 * F10
		 */
		INPUT_DROP_AMMO = 57,
		/**
		 * G
		 */
		INPUT_THROW_GRENADE = 58,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_LR = 59,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_UD = 60,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_MOVE_UP_ONLY = 61,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_DOWN_ONLY = 62,
		/**
		 * A
		 */
		INPUT_VEH_MOVE_LEFT_ONLY = 63,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_RIGHT_ONLY = 64,
		INPUT_VEH_SPECIAL = 65,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_LR = 66,
		/**
		 * MOUSE DOWN
		 */
		INPUT_VEH_GUN_UD = 67,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_AIM = 68,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_ATTACK = 69,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_ATTACK2 = 70,
		/**
		 * W
		 */
		INPUT_VEH_ACCELERATE = 71,
		/**
		 * S
		 */
		INPUT_VEH_BRAKE = 72,
		/**
		 * X
		 */
		INPUT_VEH_DUCK = 73,
		/**
		 * H
		 */
		INPUT_VEH_HEADLIGHT = 74,
		/**
		 * F
		 */
		INPUT_VEH_EXIT = 75,
		/**
		 * SPACEBAR
		 */
		INPUT_VEH_HANDBRAKE = 76,
		/**
		 * W
		 */
		INPUT_VEH_HOTWIRE_LEFT = 77,
		/**
		 * S
		 */
		INPUT_VEH_HOTWIRE_RIGHT = 78,
		/**
		 * C
		 */
		INPUT_VEH_LOOK_BEHIND = 79,
		/**
		 * R
		 */
		INPUT_VEH_CIN_CAM = 80,
		/**
		 * .
		 */
		INPUT_VEH_NEXT_RADIO = 81,
		/**
		 * ,
		 */
		INPUT_VEH_PREV_RADIO = 82,
		/**
		 * =
		 */
		INPUT_VEH_NEXT_RADIO_TRACK = 83,
		/**
		 * -
		 */
		INPUT_VEH_PREV_RADIO_TRACK = 84,
		/**
		 * Q
		 */
		INPUT_VEH_RADIO_WHEEL = 85,
		/**
		 * E
		 */
		INPUT_VEH_HORN = 86,
		/**
		 * W
		 */
		INPUT_VEH_FLY_THROTTLE_UP = 87,
		/**
		 * S
		 */
		INPUT_VEH_FLY_THROTTLE_DOWN = 88,
		/**
		 * A
		 */
		INPUT_VEH_FLY_YAW_LEFT = 89,
		/**
		 * D
		 */
		INPUT_VEH_FLY_YAW_RIGHT = 90,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_PASSENGER_AIM = 91,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_PASSENGER_ATTACK = 92,
		/**
		 *
		 */
		INPUT_VEH_SPECIAL_ABILITY_FRANKLIN = 93,
		/**
		 *
		 */
		INPUT_VEH_STUNT_UD = 94,
		/**
		 * MOUSE DOWN
		 */
		INPUT_VEH_CINEMATIC_UD = 95,
		/**
		 * NUMPAD- / SCROLLWHEEL UP
		 */
		INPUT_VEH_CINEMATIC_UP_ONLY = 96,
		/**
		 * NUMPAD+ / SCROLLWHEEL DOWN
		 */
		INPUT_VEH_CINEMATIC_DOWN_ONLY = 97,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_CINEMATIC_LR = 98,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_VEH_SELECT_NEXT_WEAPON = 99,
		/**
		 * [
		 */
		INPUT_VEH_SELECT_PREV_WEAPON = 100,
		/**
		 * H
		 */
		INPUT_VEH_ROOF = 101,
		/**
		 * SPACEBAR
		 */
		INPUT_VEH_JUMP = 102,
		/**
		 * E
		 */
		INPUT_VEH_GRAPPLING_HOOK = 103,
		/**
		 * H
		 */
		INPUT_VEH_SHUFFLE = 104,
		/**
		 * X
		 */
		INPUT_VEH_DROP_PROJECTILE = 105,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_MOUSE_CONTROL_OVERRIDE = 106,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_FLY_ROLL_LR = 107,
		/**
		 * NUMPAD 4
		 */
		INPUT_VEH_FLY_ROLL_LEFT_ONLY = 108,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_FLY_ROLL_RIGHT_ONLY = 109,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_FLY_PITCH_UD = 110,
		/**
		 * NUMPAD 8
		 */
		INPUT_VEH_FLY_PITCH_UP_ONLY = 111,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_FLY_PITCH_DOWN_ONLY = 112,
		/**
		 * G
		 */
		INPUT_VEH_FLY_UNDERCARRIAGE = 113,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_FLY_ATTACK = 114,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_VEH_FLY_SELECT_NEXT_WEAPON = 115,
		/**
		 * [
		 */
		INPUT_VEH_FLY_SELECT_PREV_WEAPON = 116,
		/**
		 * NUMPAD 7
		 */
		INPUT_VEH_FLY_SELECT_TARGET_LEFT = 117,
		/**
		 * NUMPAD 9
		 */
		INPUT_VEH_FLY_SELECT_TARGET_RIGHT = 118,
		/**
		 * E
		 */
		INPUT_VEH_FLY_VERTICAL_FLIGHT_MODE = 119,
		/**
		 * X
		 */
		INPUT_VEH_FLY_DUCK = 120,
		/**
		 * INSERT
		 */
		INPUT_VEH_FLY_ATTACK_CAMERA = 121,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_FLY_MOUSE_CONTROL_OVERRIDE = 122,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_SUB_TURN_LR = 123,
		/**
		 * NUMPAD 4
		 */
		INPUT_VEH_SUB_TURN_LEFT_ONLY = 124,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_SUB_TURN_RIGHT_ONLY = 125,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_SUB_PITCH_UD = 126,
		/**
		 * NUMPAD 8
		 */
		INPUT_VEH_SUB_PITCH_UP_ONLY = 127,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_SUB_PITCH_DOWN_ONLY = 128,
		/**
		 * W
		 */
		INPUT_VEH_SUB_THROTTLE_UP = 129,
		/**
		 * S
		 */
		INPUT_VEH_SUB_THROTTLE_DOWN = 130,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_SUB_ASCEND = 131,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_SUB_DESCEND = 132,
		/**
		 * A
		 */
		INPUT_VEH_SUB_TURN_HARD_LEFT = 133,
		/**
		 * D
		 */
		INPUT_VEH_SUB_TURN_HARD_RIGHT = 134,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_SUB_MOUSE_CONTROL_OVERRIDE = 135,
		/**
		 * W
		 */
		INPUT_VEH_PUSHBIKE_PEDAL = 136,
		/**
		 * CAPSLOCK
		 */
		INPUT_VEH_PUSHBIKE_SPRINT = 137,
		/**
		 * Q
		 */
		INPUT_VEH_PUSHBIKE_FRONT_BRAKE = 138,
		/**
		 * S
		 */
		INPUT_VEH_PUSHBIKE_REAR_BRAKE = 139,
		/**
		 * R
		 */
		INPUT_MELEE_ATTACK_LIGHT = 140,
		/**
		 * Q
		 */
		INPUT_MELEE_ATTACK_HEAVY = 141,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_MELEE_ATTACK_ALTERNATE = 142,
		/**
		 * SPACEBAR
		 */
		INPUT_MELEE_BLOCK = 143,
		/**
		 * F / LEFT MOUSE BUTTON
		 */
		INPUT_PARACHUTE_DEPLOY = 144,
		/**
		 * F
		 */
		INPUT_PARACHUTE_DETACH = 145,
		/**
		 * D
		 */
		INPUT_PARACHUTE_TURN_LR = 146,
		/**
		 * A
		 */
		INPUT_PARACHUTE_TURN_LEFT_ONLY = 147,
		/**
		 * D
		 */
		INPUT_PARACHUTE_TURN_RIGHT_ONLY = 148,
		/**
		 * S
		 */
		INPUT_PARACHUTE_PITCH_UD = 149,
		/**
		 * W
		 */
		INPUT_PARACHUTE_PITCH_UP_ONLY = 150,
		/**
		 * S
		 */
		INPUT_PARACHUTE_PITCH_DOWN_ONLY = 151,
		/**
		 * Q
		 */
		INPUT_PARACHUTE_BRAKE_LEFT = 152,
		/**
		 * E
		 */
		INPUT_PARACHUTE_BRAKE_RIGHT = 153,
		/**
		 * X
		 */
		INPUT_PARACHUTE_SMOKE = 154,
		/**
		 * LEFT SHIFT
		 */
		INPUT_PARACHUTE_PRECISION_LANDING = 155,
		INPUT_MAP = 156,
		/**
		 * 1
		 */
		INPUT_SELECT_WEAPON_UNARMED = 157,
		/**
		 * 2
		 */
		INPUT_SELECT_WEAPON_MELEE = 158,
		/**
		 * 6
		 */
		INPUT_SELECT_WEAPON_HANDGUN = 159,
		/**
		 * 3
		 */
		INPUT_SELECT_WEAPON_SHOTGUN = 160,
		/**
		 * 7
		 */
		INPUT_SELECT_WEAPON_SMG = 161,
		/**
		 * 8
		 */
		INPUT_SELECT_WEAPON_AUTO_RIFLE = 162,
		/**
		 * 9
		 */
		INPUT_SELECT_WEAPON_SNIPER = 163,
		/**
		 * 4
		 */
		INPUT_SELECT_WEAPON_HEAVY = 164,
		/**
		 * 5
		 */
		INPUT_SELECT_WEAPON_SPECIAL = 165,
		/**
		 * F5
		 */
		INPUT_SELECT_CHARACTER_MICHAEL = 166,
		/**
		 * F6
		 */
		INPUT_SELECT_CHARACTER_FRANKLIN = 167,
		/**
		 * F7
		 */
		INPUT_SELECT_CHARACTER_TREVOR = 168,
		/**
		 * F8
		 */
		INPUT_SELECT_CHARACTER_MULTIPLAYER = 169,
		/**
		 * F3
		 */
		INPUT_SAVE_REPLAY_CLIP = 170,
		/**
		 * CAPSLOCK
		 */
		INPUT_SPECIAL_ABILITY_PC = 171,
		/**
		 * ARROW UP
		 */
		INPUT_CELLPHONE_UP = 172,
		/**
		 * ARROW DOWN
		 */
		INPUT_CELLPHONE_DOWN = 173,
		/**
		 * ARROW LEFT
		 */
		INPUT_CELLPHONE_LEFT = 174,
		/**
		 * ARROW RIGHT
		 */
		INPUT_CELLPHONE_RIGHT = 175,
		/**
		 * ENTER/LEFT MOUSE BUTTON
		 */
		INPUT_CELLPHONE_SELECT = 176,
		/**
		 * BACKSPACE/ESC/RIGHT MOUSE BUTTON
		 */
		INPUT_CELLPHONE_CANCEL = 177,
		/**
		 * DELETE
		 */
		INPUT_CELLPHONE_OPTION = 178,
		/**
		 * SPACEBAR
		 */
		INPUT_CELLPHONE_EXTRA_OPTION = 179,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_CELLPHONE_SCROLL_FORWARD = 180,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_CELLPHONE_SCROLL_BACKWARD = 181,
		/**
		 * L
		 */
		INPUT_CELLPHONE_CAMERA_FOCUS_LOCK = 182,
		/**
		 * G
		 */
		INPUT_CELLPHONE_CAMERA_GRID = 183,
		/**
		 * E
		 */
		INPUT_CELLPHONE_CAMERA_SELFIE = 184,
		/**
		 * F
		 */
		INPUT_CELLPHONE_CAMERA_DOF = 185,
		/**
		 * X
		 */
		INPUT_CELLPHONE_CAMERA_EXPRESSION = 186,
		/**
		 * ARROW DOWN
		 */
		INPUT_FRONTEND_DOWN = 187,
		/**
		 * ARROW UP
		 */
		INPUT_FRONTEND_UP = 188,
		/**
		 * ARROW LEFT
		 */
		INPUT_FRONTEND_LEFT = 189,
		/**
		 * ARROW RIGHT
		 */
		INPUT_FRONTEND_RIGHT = 190,
		/**
		 * ENTER
		 */
		INPUT_FRONTEND_RDOWN = 191,
		/**
		 * TAB
		 */
		INPUT_FRONTEND_RUP = 192,
		INPUT_FRONTEND_RLEFT = 193,
		/**
		 * BACKSPACE
		 */
		INPUT_FRONTEND_RRIGHT = 194,
		/**
		 * D
		 */
		INPUT_FRONTEND_AXIS_X = 195,
		/**
		 * S
		 */
		INPUT_FRONTEND_AXIS_Y = 196,
		/**
		 * ]
		 */
		INPUT_FRONTEND_RIGHT_AXIS_X = 197,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_FRONTEND_RIGHT_AXIS_Y = 198,
		/**
		 * P
		 */
		INPUT_FRONTEND_PAUSE = 199,
		/**
		 * ESC
		 */
		INPUT_FRONTEND_PAUSE_ALTERNATE = 200,
		/**
		 * ENTER/NUMPAD ENTER
		 */
		INPUT_FRONTEND_ACCEPT = 201,
		/**
		 * BACKSPACE/ESC
		 */
		INPUT_FRONTEND_CANCEL = 202,
		/**
		 * SPACEBAR
		 */
		INPUT_FRONTEND_X = 203,
		/**
		 * TAB
		 */
		INPUT_FRONTEND_Y = 204,
		/**
		 * Q
		 */
		INPUT_FRONTEND_LB = 205,
		/**
		 * E
		 */
		INPUT_FRONTEND_RB = 206,
		/**
		 * PAGE DOWN
		 */
		INPUT_FRONTEND_LT = 207,
		/**
		 * PAGE UP
		 */
		INPUT_FRONTEND_RT = 208,
		/**
		 * LEFT SHIFT
		 */
		INPUT_FRONTEND_LS = 209,
		/**
		 * LEFT CTRL
		 */
		INPUT_FRONTEND_RS = 210,
		/**
		 * TAB
		 */
		INPUT_FRONTEND_LEADERBOARD = 211,
		/**
		 * HOME
		 */
		INPUT_FRONTEND_SOCIAL_CLUB = 212,
		/**
		 * HOME
		 */
		INPUT_FRONTEND_SOCIAL_CLUB_SECONDARY = 213,
		/**
		 * DELETE
		 */
		INPUT_FRONTEND_DELETE = 214,
		/**
		 * ENTER
		 */
		INPUT_FRONTEND_ENDSCREEN_ACCEPT = 215,
		/**
		 * SPACEBAR
		 */
		INPUT_FRONTEND_ENDSCREEN_EXPAND = 216,
		/**
		 * CAPSLOCK
		 */
		INPUT_FRONTEND_SELECT = 217,
		/**
		 * D
		 */
		INPUT_SCRIPT_LEFT_AXIS_X = 218,
		/**
		 * S
		 */
		INPUT_SCRIPT_LEFT_AXIS_Y = 219,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_SCRIPT_RIGHT_AXIS_X = 220,
		/**
		 * MOUSE DOWN
		 */
		INPUT_SCRIPT_RIGHT_AXIS_Y = 221,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RUP = 222,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RDOWN = 223,
		/**
		 * LEFT CTRL
		 */
		INPUT_SCRIPT_RLEFT = 224,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RRIGHT = 225,
		INPUT_SCRIPT_LB = 226,
		INPUT_SCRIPT_RB = 227,
		INPUT_SCRIPT_LT = 228,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RT = 229,
		INPUT_SCRIPT_LS = 230,
		INPUT_SCRIPT_RS = 231,
		/**
		 * W
		 */
		INPUT_SCRIPT_PAD_UP = 232,
		/**
		 * S
		 */
		INPUT_SCRIPT_PAD_DOWN = 233,
		/**
		 * A
		 */
		INPUT_SCRIPT_PAD_LEFT = 234,
		/**
		 * D
		 */
		INPUT_SCRIPT_PAD_RIGHT = 235,
		/**
		 * V
		 */
		INPUT_SCRIPT_SELECT = 236,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_CURSOR_ACCEPT = 237,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_CURSOR_CANCEL = 238,
		INPUT_CURSOR_X = 239,
		INPUT_CURSOR_Y = 240,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_CURSOR_SCROLL_UP = 241,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_CURSOR_SCROLL_DOWN = 242,
		/**
		 * ~ / `
		 */
		INPUT_ENTER_CHEAT_CODE = 243,
		/**
		 * M
		 */
		INPUT_INTERACTION_MENU = 244,
		/**
		 * T
		 */
		INPUT_MP_TEXT_CHAT_ALL = 245,
		/**
		 * Y
		 */
		INPUT_MP_TEXT_CHAT_TEAM = 246,
		INPUT_MP_TEXT_CHAT_FRIENDS = 247,
		INPUT_MP_TEXT_CHAT_CREW = 248,
		/**
		 * N
		 */
		INPUT_PUSH_TO_TALK = 249,
		/**
		 * R
		 */
		INPUT_CREATOR_LS = 250,
		/**
		 * F
		 */
		INPUT_CREATOR_RS = 251,
		/**
		 * X
		 */
		INPUT_CREATOR_LT = 252,
		/**
		 * C
		 */
		INPUT_CREATOR_RT = 253,
		/**
		 * LEFT SHIFT
		 */
		INPUT_CREATOR_MENU_TOGGLE = 254,
		/**
		 * SPACEBAR
		 */
		INPUT_CREATOR_ACCEPT = 255,
		/**
		 * DELETE
		 */
		INPUT_CREATOR_DELETE = 256,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_ATTACK2 = 257,
		INPUT_RAPPEL_JUMP = 258,
		INPUT_RAPPEL_LONG_JUMP = 259,
		INPUT_RAPPEL_SMASH_WINDOW = 260,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_PREV_WEAPON = 261,
		/**
		 * undefined | probably Scroll Down */
		INPUT_NEXT_WEAPON = 262,
		/**
		 * R
		 */
		INPUT_MELEE_ATTACK1 = 263,
		/**
		 * Q
		 */
		INPUT_MELEE_ATTACK2 = 264,
		INPUT_WHISTLE = 265,
		/**
		 * D
		 */
		INPUT_MOVE_LEFT = 266,
		/**
		 * D
		 */
		INPUT_MOVE_RIGHT = 267,
		/**
		 * S
		 */
		INPUT_MOVE_UP = 268,
		/**
		 * S
		 */
		INPUT_MOVE_DOWN = 269,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_LOOK_LEFT = 270,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_LOOK_RIGHT = 271,
		/**
		 * MOUSE DOWN
		 */
		INPUT_LOOK_UP = 272,
		/**
		 * MOUSE DOWN
		 */
		INPUT_LOOK_DOWN = 273,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_IN = 274,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT = 275,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_IN_ALTERNATE = 276,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT_ALTERNATE = 277,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_LEFT = 278,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_RIGHT = 279,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_UP = 280,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_DOWN = 281,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_LEFT = 282,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_RIGHT = 283,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_UP = 284,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_DOWN = 285,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_LOOK_LEFT = 286,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_LOOK_RIGHT = 287,
		/**
		 * F1
		 */
		INPUT_REPLAY_START_STOP_RECORDING = 288,
		/**
		 * F2
		 */
		INPUT_REPLAY_START_STOP_RECORDING_SECONDARY = 289,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_SCALED_LOOK_LR = 290,
		/**
		 * MOUSE DOWN
		 */
		INPUT_SCALED_LOOK_UD = 291,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_UP_ONLY = 292,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_DOWN_ONLY = 293,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_LEFT_ONLY = 294,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_RIGHT_ONLY = 295,
		/**
		 * DELETE
		 */
		INPUT_REPLAY_MARKER_DELETE = 296,
		/**
		 * DELETE
		 */
		INPUT_REPLAY_CLIP_DELETE = 297,
		/**
		 * SPACEBAR
		 */
		INPUT_REPLAY_PAUSE = 298,
		/**
		 * ARROW DOWN
		 */
		INPUT_REPLAY_REWIND = 299,
		/**
		 * ARROW UP
		 */
		INPUT_REPLAY_FFWD = 300,
		/**
		 * M
		 */
		INPUT_REPLAY_NEWMARKER = 301,
		/**
		 * S
		 */
		INPUT_REPLAY_RECORD = 302,
		/**
		 * U
		 */
		INPUT_REPLAY_SCREENSHOT = 303,
		/**
		 * H
		 */
		INPUT_REPLAY_HIDEHUD = 304,
		/**
		 * B
		 */
		INPUT_REPLAY_STARTPOINT = 305,
		/**
		 * N
		 */
		INPUT_REPLAY_ENDPOINT = 306,
		/**
		 * ARROW RIGHT
		 */
		INPUT_REPLAY_ADVANCE = 307,
		/**
		 * ARROW LEFT
		 */
		INPUT_REPLAY_BACK = 308,
		/**
		 * T
		 */
		INPUT_REPLAY_TOOLS = 309,
		/**
		 * R
		 */
		INPUT_REPLAY_RESTART = 310,
		/**
		 * K
		 */
		INPUT_REPLAY_SHOWHOTKEY = 311,
		/**
		 * [
		 */
		INPUT_REPLAY_CYCLEMARKERLEFT = 312,
		/**
		 * ]
		 */
		INPUT_REPLAY_CYCLEMARKERRIGHT = 313,
		/**
		 * NUMPAD+
		 */
		INPUT_REPLAY_FOVINCREASE = 314,
		/**
		 * NUMPAD-
		 */
		INPUT_REPLAY_FOVDECREASE = 315,
		/**
		 * PAGE UP
		 */
		INPUT_REPLAY_CAMERAUP = 316,
		/**
		 * PAGE DOWN
		 */
		INPUT_REPLAY_CAMERADOWN = 317,
		/**
		 * F5
		 */
		INPUT_REPLAY_SAVE = 318,
		/**
		 * C
		 */
		INPUT_REPLAY_TOGGLETIME = 319,
		/**
		 * V
		 */
		INPUT_REPLAY_TOGGLETIPS = 320,
		/**
		 * SPACEBAR
		 */
		INPUT_REPLAY_PREVIEW = 321,
		/**
		 * ESC
		 */
		INPUT_REPLAY_TOGGLE_TIMELINE = 322,
		/**
		 * X
		 */
		INPUT_REPLAY_TIMELINE_PICKUP_CLIP = 323,
		/**
		 * C
		 */
		INPUT_REPLAY_TIMELINE_DUPLICATE_CLIP = 324,
		/**
		 * V
		 */
		INPUT_REPLAY_TIMELINE_PLACE_CLIP = 325,
		/**
		 * LEFT CTRL
		 */
		INPUT_REPLAY_CTRL = 326,
		/**
		 * F5
		 */
		INPUT_REPLAY_TIMELINE_SAVE = 327,
		/**
		 * SPACEBAR
		 */
		INPUT_REPLAY_PREVIEW_AUDIO = 328,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_DRIVE_LOOK = 329,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_DRIVE_LOOK2 = 330,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_FLY_ATTACK2 = 331,
		/**
		 * MOUSE DOWN
		 */
		INPUT_RADIO_WHEEL_UD = 332,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_RADIO_WHEEL_LR = 333,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_VEH_SLOWMO_UD = 334,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_VEH_SLOWMO_UP_ONLY = 335,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_VEH_SLOWMO_DOWN_ONLY = 336,
		/**
		 * X
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_TOGGLE = 337,
		/**
		 * A
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_LEFT = 338,
		/**
		 * D
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_RIGHT = 339,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_UP = 340,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_DOWN = 341,
		/**
		 * D
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_LR = 342,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_UD = 343,
		/**
		 * F11
		 */
		INPUT_SWITCH_VISOR = 344,
		/**
		 * X
		 */
		INPUT_VEH_MELEE_HOLD = 345,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_MELEE_LEFT = 346,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_MELEE_RIGHT = 347,
		/**
		 * SCROLLWHEEL BUTTON (PRESS)
		 */
		INPUT_MAP_POI = 348,
		/**
		 * TAB
		 */
		INPUT_REPLAY_SNAPMATIC_PHOTO = 349,
		/**
		 * E
		 */
		INPUT_VEH_CAR_JUMP = 350,
		/**
		 * E
		 */
		INPUT_VEH_ROCKET_BOOST = 351,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_FLY_BOOST = 352,
		/**
		 * SPACEBAR
		 */
		INPUT_VEH_PARACHUTE = 353,
		/**
		 * X
		 */
		INPUT_VEH_BIKE_WINGS = 354,
		/**
		 * E
		 */
		INPUT_VEH_FLY_BOMB_BAY = 355,
		/**
		 * E
		 */
		INPUT_VEH_FLY_COUNTER = 356,
		/**
		 * X
		 */
		INPUT_VEH_TRANSFORM = 357
	}

	export const enum Scripts {
		ABIGAIL1 = 'abigail1',
		ABIGAIL2 = 'abigail2',
		ACHIEVEMENT_CONTROLLER = 'achievement_controller',
		ACT_CINEMA = 'act_cinema',
		AF_INTRO_T_SANDY = 'af_intro_t_sandy',
		AGENCY_HEIST1 = 'agency_heist1',
		AGENCY_HEIST2 = 'agency_heist2',
		AGENCY_HEIST3A = 'agency_heist3a',
		AGENCY_HEIST3B = 'agency_heist3b',
		AGENCY_PREP1 = 'agency_prep1',
		AGENCY_PREP2AMB = 'agency_prep2amb',
		AICOVER_TEST = 'aicover_test',
		AINEWENGLAND_TEST = 'ainewengland_test',
		ALTRUIST_CULT = 'altruist_cult',
		AMBIENTBLIMP = 'ambientblimp',
		AMBIENT_DIVING = 'ambient_diving',
		AMBIENT_MRSPHILIPS = 'ambient_mrsphilips',
		AMBIENT_SOLOMON = 'ambient_solomon',
		AMBIENT_SONAR = 'ambient_sonar',
		AMBIENT_TONYA = 'ambient_tonya',
		AMBIENT_TONYACALL = 'ambient_tonyacall',
		AMBIENT_TONYACALL2 = 'ambient_tonyacall2',
		AMBIENT_TONYACALL5 = 'ambient_tonyacall5',
		AMBIENT_UFOS = 'ambient_ufos',
		AM_AIRSTRIKE = 'am_airstrike',
		AM_AMMO_DROP = 'am_ammo_drop',
		AM_ARMWRESTLING = 'am_armwrestling',
		AM_ARMYBASE = 'am_armybase',
		AM_BACKUP_HELI = 'am_backup_heli',
		AM_BOAT_TAXI = 'am_boat_taxi',
		AM_BRU_BOX = 'am_bru_box',
		AM_CAR_MOD_TUT = 'am_car_mod_tut',
		AM_CHALLENGES = 'am_challenges',
		AM_CONTACT_REQUESTS = 'am_contact_requests',
		AM_CP_COLLECTION = 'am_cp_collection',
		AM_CRATE_DROP = 'am_crate_drop',
		AM_CRIMINAL_DAMAGE = 'am_criminal_damage',
		AM_CR_SECURITYVAN = 'am_cr_securityvan',
		AM_DARTS = 'am_darts',
		AM_DEAD_DROP = 'am_dead_drop',
		AM_DESTROY_VEH = 'am_destroy_veh',
		AM_DISTRACT_COPS = 'am_distract_cops',
		AM_DOORS = 'am_doors',
		AM_FERRISWHEEL = 'am_ferriswheel',
		AM_GANG_CALL = 'am_gang_call',
		AM_GA_PICKUPS = 'am_ga_pickups',
		AM_HEIST_INT = 'am_heist_int',
		AM_HELI_TAXI = 'am_heli_taxi',
		AM_HOLD_UP = 'am_hold_up',
		AM_HOT_PROPERTY = 'am_hot_property',
		AM_HOT_TARGET = 'am_hot_target',
		AM_HUNT_THE_BEAST = 'am_hunt_the_beast',
		AM_IMP_EXP = 'am_imp_exp',
		AM_JOYRIDER = 'am_joyrider',
		AM_KILL_LIST = 'am_kill_list',
		AM_KING_OF_THE_CASTLE = 'am_king_of_the_castle',
		AM_LAUNCHER = 'am_launcher',
		AM_LESTER_CUT = 'am_lester_cut',
		AM_LOWRIDER_INT = 'am_lowrider_int',
		AM_MISSION_LAUNCH = 'am_mission_launch',
		AM_MP_CARWASH_LAUNCH = 'am_mp_carwash_launch',
		AM_MP_GARAGE_CONTROL = 'am_mp_garage_control',
		AM_MP_PROPERTY_EXT = 'am_mp_property_ext',
		AM_MP_PROPERTY_INT = 'am_mp_property_int',
		AM_MP_YACHT = 'am_mp_yacht',
		AM_NPC_INVITES = 'am_npc_invites',
		AM_PASS_THE_PARCEL = 'am_pass_the_parcel',
		AM_PENNED_IN = 'am_penned_in',
		AM_PI_MENU = 'am_pi_menu',
		AM_PLANE_TAKEDOWN = 'am_plane_takedown',
		AM_PRISON = 'am_prison',
		AM_PROSTITUTE = 'am_prostitute',
		AM_ROLLERCOASTER = 'am_rollercoaster',
		AM_RONTREVOR_CUT = 'am_rontrevor_cut',
		AM_TAXI = 'am_taxi',
		AM_VEHICLE_SPAWN = 'am_vehicle_spawn',
		ANIMAL_CONTROLLER = 'animal_controller',
		APPBROADCAST = 'appbroadcast',
		APPCAMERA = 'appcamera',
		APPCHECKLIST = 'appchecklist',
		APPCONTACTS = 'appcontacts',
		APPEMAIL = 'appemail',
		APPEXTRACTION = 'appextraction',
		APPHS_SLEEP = 'apphs_sleep',
		APPINTERNET = 'appinternet',
		APPJIPMP = 'appjipmp',
		APPMEDIA = 'appmedia',
		APPMPBOSSAGENCY = 'appmpbossagency',
		APPMPEMAIL = 'appmpemail',
		APPMPJOBLISTNEW = 'appmpjoblistnew',
		APPORGANISER = 'apporganiser',
		APPREPEATPLAY = 'apprepeatplay',
		APPSETTINGS = 'appsettings',
		APPSIDETASK = 'appsidetask',
		APPTEXTMESSAGE = 'apptextmessage',
		APPTRACKIFY = 'apptrackify',
		APPVLSI = 'appvlsi',
		APPZIT = 'appzit',
		ARMENIAN1 = 'armenian1',
		ARMENIAN2 = 'armenian2',
		ARMENIAN3 = 'armenian3',
		ASSASSIN_BUS = 'assassin_bus',
		ASSASSIN_CONSTRUCTION = 'assassin_construction',
		ASSASSIN_HOOKER = 'assassin_hooker',
		ASSASSIN_MULTI = 'assassin_multi',
		ASSASSIN_RANKUP = 'assassin_rankup',
		ASSASSIN_VALET = 'assassin_valet',
		ATM_TRIGGER = 'atm_trigger',
		AUDIOTEST = 'audiotest',
		AUTOSAVE_CONTROLLER = 'autosave_controller',
		BAILBOND1 = 'bailbond1',
		BAILBOND2 = 'bailbond2',
		BAILBOND3 = 'bailbond3',
		BAILBOND4 = 'bailbond4',
		BAILBOND_LAUNCHER = 'bailbond_launcher',
		BARRY1 = 'barry1',
		BARRY2 = 'barry2',
		BARRY3 = 'barry3',
		BARRY3A = 'barry3a',
		BARRY3C = 'barry3c',
		BARRY4 = 'barry4',
		BENCHMARK = 'benchmark',
		BIGWHEEL = 'bigwheel',
		BJ = 'bj',
		BLIMPTEST = 'blimptest',
		BLIP_CONTROLLER = 'blip_controller',
		BOOTYCALLHANDLER = 'bootycallhandler',
		BOOTYCALL_DEBUG_CONTROLLER = 'bootycall_debug_controller',
		BUDDYDEATHRESPONSE = 'buddydeathresponse',
		BUGSTAR_MISSION_EXPORT = 'bugstar_mission_export',
		BUILDINGSITEAMBIENCE = 'buildingsiteambience',
		BUILDING_CONTROLLER = 'building_controller',
		CABLECAR = 'cablecar',
		CAMERA_TEST = 'camera_test',
		CAM_COORD_SENDER = 'cam_coord_sender',
		CANDIDATE_CONTROLLER = 'candidate_controller',
		CARMOD_SHOP = 'carmod_shop',
		CARSTEAL1 = 'carsteal1',
		CARSTEAL2 = 'carsteal2',
		CARSTEAL3 = 'carsteal3',
		CARSTEAL4 = 'carsteal4',
		CARWASH1 = 'carwash1',
		CARWASH2 = 'carwash2',
		CAR_ROOF_TEST = 'car_roof_test',
		CELEBRATIONS = 'celebrations',
		CELEBRATION_EDITOR = 'celebration_editor',
		CELLPHONE_CONTROLLER = 'cellphone_controller',
		CELLPHONE_FLASHHAND = 'cellphone_flashhand',
		CHARACTERGOALS = 'charactergoals',
		CHARANIMTEST = 'charanimtest',
		CHEAT_CONTROLLER = 'cheat_controller',
		CHINESE1 = 'chinese1',
		CHINESE2 = 'chinese2',
		CHOP = 'chop',
		CLOTHES_SHOP_MP = 'clothes_shop_mp',
		CLOTHES_SHOP_SP = 'clothes_shop_sp',
		CODE_CONTROLLER = 'code_controller',
		COMBAT_TEST = 'combat_test',
		COMMS_CONTROLLER = 'comms_controller',
		COMPLETIONPERCENTAGE_CONTROLLER = 'completionpercentage_controller',
		COMPONENT_CHECKER = 'component_checker',
		CONTEXT_CONTROLLER = 'context_controller',
		CONTROLLER_AMBIENTAREA = 'controller_ambientarea',
		CONTROLLER_RACES = 'controller_races',
		CONTROLLER_TAXI = 'controller_taxi',
		CONTROLLER_TOWING = 'controller_towing',
		CONTROLLER_TRAFFICKING = 'controller_trafficking',
		COORDINATE_RECORDER = 'coordinate_recorder',
		COUNTRY_RACE = 'country_race',
		COUNTRY_RACE_CONTROLLER = 'country_race_controller',
		CREATION_STARTUP = 'creation_startup',
		CREATOR = 'creator',
		CUSTOM_CONFIG = 'custom_config',
		CUTSCENEMETRICS = 'cutscenemetrics',
		CUTSCENESAMPLES = 'cutscenesamples',
		CUTSCENE_TEST = 'cutscene_test',
		DARTS = 'darts',
		DEBUG = 'debug',
		DEBUG_APP_SELECT_SCREEN = 'debug_app_select_screen',
		DEBUG_LAUNCHER = 'debug_launcher',
		DENSITY_TEST = 'density_test',
		DIALOGUE_HANDLER = 'dialogue_handler',
		DIRECTOR_MODE = 'director_mode',
		DOCKS2ASUBHANDLER = 'docks2asubhandler',
		DOCKS_HEISTA = 'docks_heista',
		DOCKS_HEISTB = 'docks_heistb',
		DOCKS_PREP1 = 'docks_prep1',
		DOCKS_PREP2B = 'docks_prep2b',
		DOCKS_SETUP = 'docks_setup',
		DREYFUSS1 = 'dreyfuss1',
		DRF1 = 'drf1',
		DRF2 = 'drf2',
		DRF3 = 'drf3',
		DRF4 = 'drf4',
		DRF5 = 'drf5',
		DRUNK = 'drunk',
		DRUNK_CONTROLLER = 'drunk_controller',
		DYNAMIXTEST = 'dynamixtest',
		EMAIL_CONTROLLER = 'email_controller',
		EMERGENCYCALL = 'emergencycall',
		EMERGENCYCALLLAUNCHER = 'emergencycalllauncher',
		EPSCARS = 'epscars',
		EPSDESERT = 'epsdesert',
		EPSILON1 = 'epsilon1',
		EPSILON2 = 'epsilon2',
		EPSILON3 = 'epsilon3',
		EPSILON4 = 'epsilon4',
		EPSILON5 = 'epsilon5',
		EPSILON6 = 'epsilon6',
		EPSILON7 = 'epsilon7',
		EPSILON8 = 'epsilon8',
		EPSILONTRACT = 'epsilontract',
		EPSROBES = 'epsrobes',
		EVENT_CONTROLLER = 'event_controller',
		EXILE1 = 'exile1',
		EXILE2 = 'exile2',
		EXILE3 = 'exile3',
		EXILE_CITY_DENIAL = 'exile_city_denial',
		EXTREME1 = 'extreme1',
		EXTREME2 = 'extreme2',
		EXTREME3 = 'extreme3',
		EXTREME4 = 'extreme4',
		FAIRGROUNDHUB = 'fairgroundhub',
		FAKE_INTERIORS = 'fake_interiors',
		FAMEORSHAME_EPS = 'fameorshame_eps',
		FAMEORSHAME_EPS_1 = 'fameorshame_eps_1',
		FAME_OR_SHAME_SET = 'fame_or_shame_set',
		FAMILY1 = 'family1',
		FAMILY1TAXI = 'family1taxi',
		FAMILY2 = 'family2',
		FAMILY3 = 'family3',
		FAMILY4 = 'family4',
		FAMILY5 = 'family5',
		FAMILY6 = 'family6',
		FAMILY_SCENE_F0 = 'family_scene_f0',
		FAMILY_SCENE_F1 = 'family_scene_f1',
		FAMILY_SCENE_M = 'family_scene_m',
		FAMILY_SCENE_T0 = 'family_scene_t0',
		FAMILY_SCENE_T1 = 'family_scene_t1',
		FANATIC1 = 'fanatic1',
		FANATIC2 = 'fanatic2',
		FANATIC3 = 'fanatic3',
		FBI1 = 'fbi1',
		FBI2 = 'fbi2',
		FBI3 = 'fbi3',
		FBI4 = 'fbi4',
		FBI4_INTRO = 'fbi4_intro',
		FBI4_PREP1 = 'fbi4_prep1',
		FBI4_PREP2 = 'fbi4_prep2',
		FBI4_PREP3 = 'fbi4_prep3',
		FBI4_PREP3AMB = 'fbi4_prep3amb',
		FBI4_PREP4 = 'fbi4_prep4',
		FBI4_PREP5 = 'fbi4_prep5',
		FBI5A = 'fbi5a',
		FILENAMESTXT = 'filenames.txt',
		FINALEA = 'finalea',
		FINALEB = 'finaleb',
		FINALEC1 = 'finalec1',
		FINALEC2 = 'finalec2',
		FINALE_CHOICE = 'finale_choice',
		FINALE_CREDITS = 'finale_credits',
		FINALE_ENDGAME = 'finale_endgame',
		FINALE_HEIST1 = 'finale_heist1',
		FINALE_HEIST2A = 'finale_heist2a',
		FINALE_HEIST2B = 'finale_heist2b',
		FINALE_HEIST2_INTRO = 'finale_heist2_intro',
		FINALE_HEIST_PREPA = 'finale_heist_prepa',
		FINALE_HEIST_PREPB = 'finale_heist_prepb',
		FINALE_HEIST_PREPC = 'finale_heist_prepc',
		FINALE_HEIST_PREPD = 'finale_heist_prepd',
		FINALE_HEIST_PREPEAMB = 'finale_heist_prepeamb',
		FINALE_INTRO = 'finale_intro',
		FLOATING_HELP_CONTROLLER = 'floating_help_controller',
		FLOWINTROTITLE = 'flowintrotitle',
		FLOWSTARTACCEPT = 'flowstartaccept',
		FLOW_AUTOPLAY = 'flow_autoplay',
		FLOW_CONTROLLER = 'flow_controller',
		FLOW_HELP = 'flow_help',
		FLYUNDERBRIDGES = 'flyunderbridges',
		FMMC_LAUNCHER = 'fmmc_launcher',
		FMMC_PLAYLIST_CONTROLLER = 'fmmc_playlist_controller',
		FM_BJ_RACE_CONTROLER = 'fm_bj_race_controler',
		FM_CAPTURE_CREATOR = 'fm_capture_creator',
		FM_DEATHMATCH_CONTROLER = 'fm_deathmatch_controler',
		FM_DEATHMATCH_CREATOR = 'fm_deathmatch_creator',
		FM_HIDEOUT_CONTROLER = 'fm_hideout_controler',
		FM_HOLD_UP_TUT = 'fm_hold_up_tut',
		FM_HORDE_CONTROLER = 'fm_horde_controler',
		FM_IMPROMPTU_DM_CONTROLER = 'fm_impromptu_dm_controler',
		FM_INTRO = 'fm_intro',
		FM_INTRO_CUT_DEV = 'fm_intro_cut_dev',
		FM_LTS_CREATOR = 'fm_lts_creator',
		FM_MAINTAIN_CLOUD_HEADER_DATA = 'fm_maintain_cloud_header_data',
		FM_MAINTAIN_TRANSITION_PLAYERS = 'fm_maintain_transition_players',
		FM_MAIN_MENU = 'fm_main_menu',
		FM_MISSION_CONTROLLER = 'fm_mission_controller',
		FM_MISSION_CREATOR = 'fm_mission_creator',
		FM_RACE_CONTROLER = 'fm_race_controler',
		FM_RACE_CREATOR = 'fm_race_creator',
		FORSALESIGNS = 'forsalesigns',
		FPS_TEST = 'fps_test',
		FPS_TEST_MAG = 'fps_test_mag',
		FRANKLIN0 = 'franklin0',
		FRANKLIN1 = 'franklin1',
		FRANKLIN2 = 'franklin2',
		FREEMODE = 'freemode',
		FREEMODE_INIT = 'freemode_init',
		FRIENDACTIVITY = 'friendactivity',
		FRIENDS_CONTROLLER = 'friends_controller',
		FRIENDS_DEBUG_CONTROLLER = 'friends_debug_controller',
		FULLMAP_TEST = 'fullmap_test',
		FULLMAP_TEST_FLOW = 'fullmap_test_flow',
		GAME_SERVER_TEST = 'game_server_test',
		GB_ASSAULT = 'gb_assault',
		GB_BELLYBEAST = 'gb_bellybeast',
		GB_CARJACKING = 'gb_carjacking',
		GB_COLLECT_MONEY = 'gb_collect_money',
		GB_DEATHMATCH = 'gb_deathmatch',
		GB_FINDERSKEEPERS = 'gb_finderskeepers',
		GB_FIVESTAR = 'gb_fivestar',
		GB_HUNT_THE_BOSS = 'gb_hunt_the_boss',
		GB_POINT_TO_POINT = 'gb_point_to_point',
		GB_ROB_SHOP = 'gb_rob_shop',
		GB_SIGHTSEER = 'gb_sightseer',
		GB_TERMINATE = 'gb_terminate',
		GB_YACHT_ROB = 'gb_yacht_rob',
		GENERAL_TEST = 'general_test',
		GOLF = 'golf',
		GOLF_AI_FOURSOME = 'golf_ai_foursome',
		GOLF_AI_FOURSOME_PUTTING = 'golf_ai_foursome_putting',
		GOLF_MP = 'golf_mp',
		GPB_ANDYMOON = 'gpb_andymoon',
		GPB_BAYGOR = 'gpb_baygor',
		GPB_BILLBINDER = 'gpb_billbinder',
		GPB_CLINTON = 'gpb_clinton',
		GPB_GRIFF = 'gpb_griff',
		GPB_JANE = 'gpb_jane',
		GPB_JEROME = 'gpb_jerome',
		GPB_JESSE = 'gpb_jesse',
		GPB_MANI = 'gpb_mani',
		GPB_MIME = 'gpb_mime',
		GPB_PAMELADRAKE = 'gpb_pameladrake',
		GPB_SUPERHERO = 'gpb_superhero',
		GPB_TONYA = 'gpb_tonya',
		GPB_ZOMBIE = 'gpb_zombie',
		GTEST_AIRPLANE = 'gtest_airplane',
		GTEST_AVOIDANCE = 'gtest_avoidance',
		GTEST_BOAT = 'gtest_boat',
		GTEST_DIVINGFROMCAR = 'gtest_divingfromcar',
		GTEST_DIVINGFROMCARWHILEFLEEING = 'gtest_divingfromcarwhilefleeing',
		GTEST_HELICOPTER = 'gtest_helicopter',
		GTEST_NEARLYMISSEDBYCAR = 'gtest_nearlymissedbycar',
		GUNCLUB_SHOP = 'gunclub_shop',
		GUNFIGHTTEST = 'gunfighttest',
		HAIRDO_SHOP_MP = 'hairdo_shop_mp',
		HAIRDO_SHOP_SP = 'hairdo_shop_sp',
		HAO1 = 'hao1',
		HEADERTEST = 'headertest',
		HEATMAP_TEST = 'heatmap_test',
		HEATMAP_TEST_FLOW = 'heatmap_test_flow',
		HEIST_CTRL_AGENCY = 'heist_ctrl_agency',
		HEIST_CTRL_DOCKS = 'heist_ctrl_docks',
		HEIST_CTRL_FINALE = 'heist_ctrl_finale',
		HEIST_CTRL_JEWEL = 'heist_ctrl_jewel',
		HEIST_CTRL_RURAL = 'heist_ctrl_rural',
		HELI_GUN = 'heli_gun',
		HELI_STREAMING = 'heli_streaming',
		HUD_CREATOR = 'hud_creator',
		HUNTING1 = 'hunting1',
		HUNTING2 = 'hunting2',
		HUNTING_AMBIENT = 'hunting_ambient',
		IDLEWARPER = 'idlewarper',
		INGAMEHUD = 'ingamehud',
		INITIAL = 'initial',
		JEWELRY_HEIST = 'jewelry_heist',
		JEWELRY_PREP1A = 'jewelry_prep1a',
		JEWELRY_PREP1B = 'jewelry_prep1b',
		JEWELRY_PREP2A = 'jewelry_prep2a',
		JEWELRY_SETUP1 = 'jewelry_setup1',
		JOSH1 = 'josh1',
		JOSH2 = 'josh2',
		JOSH3 = 'josh3',
		JOSH4 = 'josh4',
		LAMAR1 = 'lamar1',
		LAPTOP_TRIGGER = 'laptop_trigger',
		LAUNCHER_ABIGAIL = 'launcher_abigail',
		LAUNCHER_BARRY = 'launcher_barry',
		LAUNCHER_BASEJUMPHELI = 'launcher_basejumpheli',
		LAUNCHER_BASEJUMPPACK = 'launcher_basejumppack',
		LAUNCHER_CARWASH = 'launcher_carwash',
		LAUNCHER_DARTS = 'launcher_darts',
		LAUNCHER_DREYFUSS = 'launcher_dreyfuss',
		LAUNCHER_EPSILON = 'launcher_epsilon',
		LAUNCHER_EXTREME = 'launcher_extreme',
		LAUNCHER_FANATIC = 'launcher_fanatic',
		LAUNCHER_GOLF = 'launcher_golf',
		LAUNCHER_HAO = 'launcher_hao',
		LAUNCHER_HUNTING = 'launcher_hunting',
		LAUNCHER_HUNTING_AMBIENT = 'launcher_hunting_ambient',
		LAUNCHER_JOSH = 'launcher_josh',
		LAUNCHER_MAUDE = 'launcher_maude',
		LAUNCHER_MINUTE = 'launcher_minute',
		LAUNCHER_MRSPHILIPS = 'launcher_mrsphilips',
		LAUNCHER_NIGEL = 'launcher_nigel',
		LAUNCHER_OFFROADRACING = 'launcher_offroadracing',
		LAUNCHER_OMEGA = 'launcher_omega',
		LAUNCHER_PAPARAZZO = 'launcher_paparazzo',
		LAUNCHER_PILOTSCHOOL = 'launcher_pilotschool',
		LAUNCHER_RACING = 'launcher_racing',
		LAUNCHER_RAMPAGE = 'launcher_rampage',
		LAUNCHER_RANGE = 'launcher_range',
		LAUNCHER_STUNTS = 'launcher_stunts',
		LAUNCHER_TENNIS = 'launcher_tennis',
		LAUNCHER_THELASTONE = 'launcher_thelastone',
		LAUNCHER_TONYA = 'launcher_tonya',
		LAUNCHER_TRIATHLON = 'launcher_triathlon',
		LAUNCHER_YOGA = 'launcher_yoga',
		LESTER1 = 'lester1',
		LESTERHANDLER = 'lesterhandler',
		LETTERSCRAPS = 'letterscraps',
		LINE_ACTIVATION_TEST = 'line_activation_test',
		LIVERECORDER = 'liverecorder',
		LOCATES_TESTER = 'locates_tester',
		LUXE_VEH_ACTIVITY = 'luxe_veh_activity',
		MAGDEMO = 'magdemo',
		MAGDEMO2 = 'magdemo2',
		MAIN = 'main',
		MAINTRANSITION = 'maintransition',
		MAIN_INSTALL = 'main_install',
		MAIN_PERSISTENT = 'main_persistent',
		MARTIN1 = 'martin1',
		MAUDE1 = 'maude1',
		MAUDE_POSTBAILBOND = 'maude_postbailbond',
		ME_AMANDA1 = 'me_amanda1',
		ME_JIMMY1 = 'me_jimmy1',
		ME_TRACEY1 = 'me_tracey1',
		MG_RACE_TO_POINT = 'mg_race_to_point',
		MICHAEL1 = 'michael1',
		MICHAEL2 = 'michael2',
		MICHAEL3 = 'michael3',
		MICHAEL4 = 'michael4',
		MICHAEL4LEADOUT = 'michael4leadout',
		MINIGAME_ENDING_STINGER = 'minigame_ending_stinger',
		MINIGAME_STATS_TRACKER = 'minigame_stats_tracker',
		MINUTE1 = 'minute1',
		MINUTE2 = 'minute2',
		MINUTE3 = 'minute3',
		MISSION_RACE = 'mission_race',
		MISSION_REPEAT_CONTROLLER = 'mission_repeat_controller',
		MISSION_STAT_ALERTER = 'mission_stat_alerter',
		MISSION_STAT_WATCHER = 'mission_stat_watcher',
		MISSION_TRIGGERER_A = 'mission_triggerer_a',
		MISSION_TRIGGERER_B = 'mission_triggerer_b',
		MISSION_TRIGGERER_C = 'mission_triggerer_c',
		MISSION_TRIGGERER_D = 'mission_triggerer_d',
		MPSTATSINIT = 'mpstatsinit',
		MPTESTBED = 'mptestbed',
		MP_AWARDS = 'mp_awards',
		MP_FM_REGISTRATION = 'mp_fm_registration',
		MP_MENUPED = 'mp_menuped',
		MP_PROP_GLOBAL_BLOCK = 'mp_prop_global_block',
		MP_PROP_SPECIAL_GLOBAL_BLOCK = 'mp_prop_special_global_block',
		MP_REGISTRATION = 'mp_registration',
		MP_SAVE_GAME_GLOBAL_BLOCK = 'mp_save_game_global_block',
		MP_UNLOCKS = 'mp_unlocks',
		MP_WEAPONS = 'mp_weapons',
		MRSPHILIPS1 = 'mrsphilips1',
		MRSPHILIPS2 = 'mrsphilips2',
		MURDERMYSTERY = 'murdermystery',
		NAVMESHTEST = 'navmeshtest',
		NET_BOT_BRAIN = 'net_bot_brain',
		NET_BOT_SIMPLEBRAIN = 'net_bot_simplebrain',
		NET_CLOUD_MISSION_LOADER = 'net_cloud_mission_loader',
		NET_COMBAT_SOAKTEST = 'net_combat_soaktest',
		NET_JACKING_SOAKTEST = 'net_jacking_soaktest',
		NET_RANK_TUNABLE_LOADER = 'net_rank_tunable_loader',
		NET_SESSION_SOAKTEST = 'net_session_soaktest',
		NET_TUNABLE_CHECK = 'net_tunable_check',
		NIGEL1 = 'nigel1',
		NIGEL1A = 'nigel1a',
		NIGEL1B = 'nigel1b',
		NIGEL1C = 'nigel1c',
		NIGEL1D = 'nigel1d',
		NIGEL2 = 'nigel2',
		NIGEL3 = 'nigel3',
		NODEVIEWER = 'nodeviewer',
		OB_ABATDOOR = 'ob_abatdoor',
		OB_ABATTOIRCUT = 'ob_abattoircut',
		OB_AIRDANCER = 'ob_airdancer',
		OB_BONG = 'ob_bong',
		OB_CASHREGISTER = 'ob_cashregister',
		OB_DRINKING_SHOTS = 'ob_drinking_shots',
		OB_FOUNDRY_CAULDRON = 'ob_foundry_cauldron',
		OB_FRANKLIN_BEER = 'ob_franklin_beer',
		OB_FRANKLIN_TV = 'ob_franklin_tv',
		OB_FRANKLIN_WINE = 'ob_franklin_wine',
		OB_HUFFING_GAS = 'ob_huffing_gas',
		OB_MP_BED_HIGH = 'ob_mp_bed_high',
		OB_MP_BED_LOW = 'ob_mp_bed_low',
		OB_MP_BED_MED = 'ob_mp_bed_med',
		OB_MP_SHOWER_MED = 'ob_mp_shower_med',
		OB_MP_STRIPPER = 'ob_mp_stripper',
		OB_MR_RASPBERRY_JAM = 'ob_mr_raspberry_jam',
		OB_POLEDANCER = 'ob_poledancer',
		OB_SOFA_FRANKLIN = 'ob_sofa_franklin',
		OB_SOFA_MICHAEL = 'ob_sofa_michael',
		OB_TELESCOPE = 'ob_telescope',
		OB_TV = 'ob_tv',
		OB_VEND1 = 'ob_vend1',
		OB_VEND2 = 'ob_vend2',
		OB_WHEATGRASS = 'ob_wheatgrass',
		OFFROAD_RACES = 'offroad_races',
		OMEGA1 = 'omega1',
		OMEGA2 = 'omega2',
		PAPARAZZO1 = 'paparazzo1',
		PAPARAZZO2 = 'paparazzo2',
		PAPARAZZO3 = 'paparazzo3',
		PAPARAZZO3A = 'paparazzo3a',
		PAPARAZZO3B = 'paparazzo3b',
		PAPARAZZO4 = 'paparazzo4',
		PARADISE = 'paradise',
		PARADISE2 = 'paradise2',
		PAUSEMENU = 'pausemenu',
		PAUSEMENU_EXAMPLE = 'pausemenu_example',
		PAUSEMENU_MAP = 'pausemenu_map',
		PAUSEMENU_MULTIPLAYER = 'pausemenu_multiplayer',
		PAUSEMENU_SP_REPEAT = 'pausemenu_sp_repeat',
		PB_BUSKER = 'pb_busker',
		PB_HOMELESS = 'pb_homeless',
		PB_PREACHER = 'pb_preacher',
		PB_PROSTITUTE = 'pb_prostitute',
		PHOTOGRAPHYMONKEY = 'photographymonkey',
		PHOTOGRAPHYWILDLIFE = 'photographywildlife',
		PHYSICS_PERF_TEST = 'physics_perf_test',
		PHYSICS_PERF_TEST_LAUNCHER = 'physics_perf_test_launcher',
		PICKUPTEST = 'pickuptest',
		PICKUPVEHICLES = 'pickupvehicles',
		PICKUP_CONTROLLER = 'pickup_controller',
		PILOT_SCHOOL = 'pilot_school',
		PILOT_SCHOOL_MP = 'pilot_school_mp',
		PI_MENU = 'pi_menu',
		PLACEHOLDERMISSION = 'placeholdermission',
		PLACEMENTTEST = 'placementtest',
		PLANEWARPTEST = 'planewarptest',
		PLAYER_CONTROLLER = 'player_controller',
		PLAYER_CONTROLLER_B = 'player_controller_b',
		PLAYER_SCENE_FT_FRANKLIN1 = 'player_scene_ft_franklin1',
		PLAYER_SCENE_F_LAMGRAFF = 'player_scene_f_lamgraff',
		PLAYER_SCENE_F_LAMTAUNT = 'player_scene_f_lamtaunt',
		PLAYER_SCENE_F_TAXI = 'player_scene_f_taxi',
		PLAYER_SCENE_MF_TRAFFIC = 'player_scene_mf_traffic',
		PLAYER_SCENE_M_CINEMA = 'player_scene_m_cinema',
		PLAYER_SCENE_M_FBI2 = 'player_scene_m_fbi2',
		PLAYER_SCENE_M_KIDS = 'player_scene_m_kids',
		PLAYER_SCENE_M_SHOPPING = 'player_scene_m_shopping',
		PLAYER_SCENE_T_BBFIGHT = 'player_scene_t_bbfight',
		PLAYER_SCENE_T_CHASECAR = 'player_scene_t_chasecar',
		PLAYER_SCENE_T_INSULT = 'player_scene_t_insult',
		PLAYER_SCENE_T_PARK = 'player_scene_t_park',
		PLAYER_SCENE_T_TIE = 'player_scene_t_tie',
		PLAYER_TIMETABLE_SCENE = 'player_timetable_scene',
		PLAYTHROUGH_BUILDER = 'playthrough_builder',
		PM_DEFEND = 'pm_defend',
		PM_DELIVERY = 'pm_delivery',
		PM_GANG_ATTACK = 'pm_gang_attack',
		PM_PLANE_PROMOTION = 'pm_plane_promotion',
		PM_RECOVER_STOLEN = 'pm_recover_stolen',
		POSTKILLED_BAILBOND2 = 'postkilled_bailbond2',
		POSTRC_BARRY1AND2 = 'postrc_barry1and2',
		POSTRC_BARRY4 = 'postrc_barry4',
		POSTRC_EPSILON4 = 'postrc_epsilon4',
		POSTRC_NIGEL3 = 'postrc_nigel3',
		PROFILER_REGISTRATION = 'profiler_registration',
		PROLOGUE1 = 'prologue1',
		PROP_DROP = 'prop_drop',
		RACETEST = 'racetest',
		RAMPAGE1 = 'rampage1',
		RAMPAGE2 = 'rampage2',
		RAMPAGE3 = 'rampage3',
		RAMPAGE4 = 'rampage4',
		RAMPAGE5 = 'rampage5',
		RAMPAGE_CONTROLLER = 'rampage_controller',
		RANDOMCHAR_CONTROLLER = 'randomchar_controller',
		RANGE_MODERN = 'range_modern',
		RANGE_MODERN_MP = 'range_modern_mp',
		REPLAY_CONTROLLER = 'replay_controller',
		RERECORD_RECORDING = 'rerecord_recording',
		RESPAWN_CONTROLLER = 'respawn_controller',
		RESTRICTEDAREAS = 'restrictedareas',
		RE_ABANDONEDCAR = 're_abandonedcar',
		RE_ACCIDENT = 're_accident',
		RE_ARMYBASE = 're_armybase',
		RE_ARRESTS = 're_arrests',
		RE_ATMROBBERY = 're_atmrobbery',
		RE_BIKETHIEF = 're_bikethief',
		RE_BORDER = 're_border',
		RE_BURIALS = 're_burials',
		RE_BUS_TOURS = 're_bus_tours',
		RE_CARTHEFT = 're_cartheft',
		RE_CHASETHIEVES = 're_chasethieves',
		RE_CRASHRESCUE = 're_crashrescue',
		RE_CULTSHOOTOUT = 're_cultshootout',
		RE_DEALGONEWRONG = 're_dealgonewrong',
		RE_DOMESTIC = 're_domestic',
		RE_DRUNKDRIVER = 're_drunkdriver',
		RE_DUEL = 're_duel',
		RE_GANGFIGHT = 're_gangfight',
		RE_GANG_INTIMIDATION = 're_gang_intimidation',
		RE_GETAWAY_DRIVER = 're_getaway_driver',
		RE_HITCH_LIFT = 're_hitch_lift',
		RE_HOMELAND_SECURITY = 're_homeland_security',
		RE_LOSSANTOSINTL = 're_lossantosintl',
		RE_LURED = 're_lured',
		RE_MONKEY = 're_monkey',
		RE_MOUNTDANCE = 're_mountdance',
		RE_MUGGINGS = 're_muggings',
		RE_PAPARAZZI = 're_paparazzi',
		RE_PRISON = 're_prison',
		RE_PRISONERLIFT = 're_prisonerlift',
		RE_PRISONVANBREAK = 're_prisonvanbreak',
		RE_RESCUEHOSTAGE = 're_rescuehostage',
		RE_SEAPLANE = 're_seaplane',
		RE_SECURITYVAN = 're_securityvan',
		RE_SHOPROBBERY = 're_shoprobbery',
		RE_SNATCHED = 're_snatched',
		RE_STAG_DO = 're_stag_do',
		RE_YETARIAN = 're_yetarian',
		ROLLERCOASTER = 'rollercoaster',
		RURAL_BANK_HEIST = 'rural_bank_heist',
		RURAL_BANK_PREP1 = 'rural_bank_prep1',
		RURAL_BANK_SETUP = 'rural_bank_setup',
		SAVEGAME_BED = 'savegame_bed',
		SAVE_ANYWHERE = 'save_anywhere',
		SCALEFORMGRAPHICTEST = 'scaleformgraphictest',
		SCALEFORMMINIGAMETEST = 'scaleformminigametest',
		SCALEFORMPROFILING = 'scaleformprofiling',
		SCALEFORMTEST = 'scaleformtest',
		SCENE_BUILDER = 'scene_builder',
		SCLUB_FRONT_BOUNCER = 'sclub_front_bouncer',
		SCRIPTED_CAM_EDITOR = 'scripted_cam_editor',
		SCRIPTPLAYGROUND = 'scriptplayground',
		SCRIPTTEST1 = 'scripttest1',
		SCRIPTTEST2 = 'scripttest2',
		SCRIPTTEST3 = 'scripttest3',
		SCRIPTTEST4 = 'scripttest4',
		SCRIPT_METRICS = 'script_metrics',
		SCTV = 'sctv',
		SC_LB_GLOBAL_BLOCK = 'sc_lb_global_block',
		SELECTOR = 'selector',
		SELECTOR_EXAMPLE = 'selector_example',
		SELLING_SHORT_1 = 'selling_short_1',
		SELLING_SHORT_2 = 'selling_short_2',
		SHOOTING_CAMERA = 'shooting_camera',
		SHOPROBBERIES = 'shoprobberies',
		SHOP_CONTROLLER = 'shop_controller',
		SHOT_BIKEJUMP = 'shot_bikejump',
		SHRINKLETTER = 'shrinkletter',
		SH_INTRO_F_HILLS = 'sh_intro_f_hills',
		SH_INTRO_M_HOME = 'sh_intro_m_home',
		SMOKETEST = 'smoketest',
		SOCIAL_CONTROLLER = 'social_controller',
		SOLOMON1 = 'solomon1',
		SOLOMON2 = 'solomon2',
		SOLOMON3 = 'solomon3',
		SPACESHIPPARTS = 'spaceshipparts',
		SPAWN_ACTIVITIES = 'spawn_activities',
		SPEECH_REVERB_TRACKER = 'speech_reverb_tracker',
		SPMC_INSTANCER = 'spmc_instancer',
		SPMC_PRELOADER = 'spmc_preloader',
		SP_DLC_REGISTRATION = 'sp_dlc_registration',
		SP_EDITOR_MISSION_INSTANCE = 'sp_editor_mission_instance',
		SP_MENUPED = 'sp_menuped',
		SP_PILOTSCHOOL_REG = 'sp_pilotschool_reg',
		STANDARD_GLOBAL_INIT = 'standard_global_init',
		STANDARD_GLOBAL_REG = 'standard_global_reg',
		STARTUP = 'startup',
		STARTUP_INSTALL = 'startup_install',
		STARTUP_LOCATIONTEST = 'startup_locationtest',
		STARTUP_POSITIONING = 'startup_positioning',
		STARTUP_SMOKETEST = 'startup_smoketest',
		STATS_CONTROLLER = 'stats_controller',
		STOCK_CONTROLLER = 'stock_controller',
		STREAMING = 'streaming',
		STRIPCLUB = 'stripclub',
		STRIPCLUB_DRINKING = 'stripclub_drinking',
		STRIPCLUB_MP = 'stripclub_mp',
		STRIPPERHOME = 'stripperhome',
		STUNT_PLANE_RACES = 'stunt_plane_races',
		TASKLIST_1 = 'tasklist_1',
		TATTOO_SHOP = 'tattoo_shop',
		TAXILAUNCHER = 'taxilauncher',
		TAXISERVICE = 'taxiservice',
		TAXITUTORIAL = 'taxitutorial',
		TAXI_CLOWNCAR = 'taxi_clowncar',
		TAXI_CUTYOUIN = 'taxi_cutyouin',
		TAXI_DEADLINE = 'taxi_deadline',
		TAXI_FOLLOWCAR = 'taxi_followcar',
		TAXI_GOTYOUNOW = 'taxi_gotyounow',
		TAXI_GOTYOURBACK = 'taxi_gotyourback',
		TAXI_NEEDEXCITEMENT = 'taxi_needexcitement',
		TAXI_PROCEDURAL = 'taxi_procedural',
		TAXI_TAKEITEASY = 'taxi_takeiteasy',
		TAXI_TAKETOBEST = 'taxi_taketobest',
		TEMPALPHA = 'tempalpha',
		TEMPTEST = 'temptest',
		TENNIS = 'tennis',
		TENNIS_AMBIENT = 'tennis_ambient',
		TENNIS_FAMILY = 'tennis_family',
		TENNIS_NETWORK_MP = 'tennis_network_mp',
		TEST_STARTUP = 'test_startup',
		THELASTONE = 'thelastone',
		TIMERSHUD = 'timershud',
		TITLE_UPDATE_REGISTRATION = 'title_update_registration',
		TONYA1 = 'tonya1',
		TONYA2 = 'tonya2',
		TONYA3 = 'tonya3',
		TONYA4 = 'tonya4',
		TONYA5 = 'tonya5',
		TOWING = 'towing',
		TRAFFICKINGSETTINGS = 'traffickingsettings',
		TRAFFICKINGTELEPORT = 'traffickingteleport',
		TRAFFICK_AIR = 'traffick_air',
		TRAFFICK_GROUND = 'traffick_ground',
		TRAIN_CREATE_WIDGET = 'train_create_widget',
		TRAIN_TESTER = 'train_tester',
		TREVOR1 = 'trevor1',
		TREVOR2 = 'trevor2',
		TREVOR3 = 'trevor3',
		TREVOR4 = 'trevor4',
		TRIATHLONSP = 'triathlonsp',
		TUNABLES_REGISTRATION = 'tunables_registration',
		TUNEABLES_PROCESSING = 'tuneables_processing',
		UFO = 'ufo',
		UGC_GLOBAL_REGISTRATION = 'ugc_global_registration',
		UNDERWATERPICKUPS = 'underwaterpickups',
		UTVC = 'utvc',
		VEHICLE_AI_TEST = 'vehicle_ai_test',
		VEHICLE_FORCE_WIDGET = 'vehicle_force_widget',
		VEHICLE_GEN_CONTROLLER = 'vehicle_gen_controller',
		VEHICLE_PLATE = 'vehicle_plate',
		VEH_PLAY_WIDGET = 'veh_play_widget',
		WALKING_PED = 'walking_ped',
		WARDROBE_MP = 'wardrobe_mp',
		WARDROBE_SP = 'wardrobe_sp',
		WEAPON_AUDIO_WIDGET = 'weapon_audio_widget',
		WP_PARTYBOOMBOX = 'wp_partyboombox',
		XML_MENUS = 'xml_menus',
		YOGA = 'yoga'
	}

	/** [https://wiki.rage.mp/index.php?title=Peds](https://wiki.rage.mp/index.php?title=Peds) */
	export const enum PedHash {
		/** ![ig_abigail](https://wiki.rage.mp//images/thumb/8/88/Abigail.png/58px-Abigail.png) */
		IG_ABIGAIL = 0x400aec41,
		/** ![csb_abigail](https://wiki.rage.mp//images/thumb/6/69/AbigailCutscene.png/58px-AbigailCutscene.png) */
		CSB_ABIGAIL = 0x89768941,
		/** ![u_m_y_abner](https://wiki.rage.mp//images/thumb/8/86/Abner.png/81px-Abner.png) */
		U_M_Y_ABNER = 0xf0ac2626,
		/** ![a_m_m_acult_01](https://wiki.rage.mp//images/thumb/c/c6/Acult01AMM.png/58px-Acult01AMM.png) */
		A_M_M_ACULT_01 = 0x5442c66b,
		/** ![a_m_o_acult_01](https://wiki.rage.mp//images/thumb/6/60/Acult01AMO.png/58px-Acult01AMO.png) */
		A_M_O_ACULT_01 = 0x55446010,
		/** ![a_m_y_acult_01](https://wiki.rage.mp//images/thumb/6/60/Acult01AMY.png/58px-Acult01AMY.png) */
		A_M_Y_ACULT_01 = 0xb564882b,
		/** ![a_m_o_acult_02](https://wiki.rage.mp//images/thumb/c/cf/Acult02AMO.png/58px-Acult02AMO.png) */
		A_M_O_ACULT_02 = 0x4ba14cca,
		/** ![a_m_y_acult_02](https://wiki.rage.mp//images/thumb/4/47/Acult02AMY.png/58px-Acult02AMY.png) */
		A_M_Y_ACULT_02 = 0x80e59f2e,
		/** ![a_m_m_afriamer_01](https://wiki.rage.mp//images/thumb/3/3e/AfriAmer01AMM.png/58px-AfriAmer01AMM.png) */
		A_M_M_AFRIAMER_01 = 0xd172497e,
		/** ![ig_mp_agent14](https://wiki.rage.mp//images/thumb/5/53/Agent14.png/58px-Agent14.png) */
		IG_MP_AGENT14 = 0xfbf98469,
		/** ![csb_mp_agent14](https://wiki.rage.mp//images/thumb/0/05/Agent14Cutscene.png/58px-Agent14Cutscene.png) */
		CSB_MP_AGENT14 = 0x6dbbfc8b,
		/** ![csb_agent](https://wiki.rage.mp//images/thumb/d/df/AgentCutscene.png/58px-AgentCutscene.png) */
		CSB_AGENT = 0xd770c9b4,
		/** ![s_f_y_airhostess_01](https://wiki.rage.mp//images/thumb/1/1c/AirHostess01SFY.png/58px-AirHostess01SFY.png) */
		S_F_Y_AIRHOSTESS_01 = 0x5d71a46f,
		/** ![s_m_y_airworker](https://wiki.rage.mp//images/thumb/f/f7/AirWorkerSMY.png/58px-AirWorkerSMY.png) */
		S_M_Y_AIRWORKER = 0x62018559,
		/** ![u_m_m_aldinapoli](https://wiki.rage.mp//images/thumb/6/63/AlDiNapoli.png/58px-AlDiNapoli.png) */
		U_M_M_ALDINAPOLI = 0xf0ec56e2,
		/** ![ig_amandatownley](https://wiki.rage.mp//images/thumb/2/2b/AmandaTownley.png/58px-AmandaTownley.png) */
		IG_AMANDATOWNLEY = 0x6d1e15f7,
		/** ![cs_amandatownley](https://wiki.rage.mp//images/thumb/5/5b/AmandaTownleyCutscene.png/58px-AmandaTownleyCutscene.png) */
		CS_AMANDATOWNLEY = 0x95ef18e3,
		/** ![s_m_y_ammucity_01](https://wiki.rage.mp//images/thumb/d/db/AmmuCity01SMY.png/58px-AmmuCity01SMY.png) */
		S_M_Y_AMMUCITY_01 = 0x9e08633d,
		/** ![s_m_m_ammucountry](https://wiki.rage.mp//images/thumb/9/9e/AmmuCountrySMM.png/58px-AmmuCountrySMM.png) */
		S_M_M_AMMUCOUNTRY = 0x0de9a30a,
		/** ![ig_andreas](https://wiki.rage.mp//images/thumb/5/53/Andreas.png/58px-Andreas.png) */
		IG_ANDREAS = 0x47e4eea0,
		/** ![cs_andreas](https://wiki.rage.mp//images/thumb/9/94/AndreasCutscene.png/58px-AndreasCutscene.png) */
		CS_ANDREAS = 0xe7565327,
		/** ![csb_anita](https://wiki.rage.mp//images/thumb/5/5f/AnitaCutscene.png/58px-AnitaCutscene.png) */
		CSB_ANITA = 0x0703f106,
		/** ![u_m_y_antonb](https://wiki.rage.mp//images/thumb/4/47/AntonB.png/58px-AntonB.png) */
		U_M_Y_ANTONB = 0xcf623a2c,
		/** ![csb_anton](https://wiki.rage.mp//images/thumb/9/9a/AntonCutscene.png/58px-AntonCutscene.png) */
		CSB_ANTON = 0xa5c787b6,
		/** ![g_m_m_armboss_01](https://wiki.rage.mp//images/thumb/2/2d/ArmBoss01GMM.png/58px-ArmBoss01GMM.png) */
		G_M_M_ARMBOSS_01 = 0xf1e823a2,
		/** ![g_m_m_armgoon_01](https://wiki.rage.mp//images/thumb/2/21/ArmGoon01GMM.png/58px-ArmGoon01GMM.png) */
		G_M_M_ARMGOON_01 = 0xfda94268,
		/** ![g_m_y_armgoon_02](https://wiki.rage.mp//images/thumb/0/0f/ArmGoon02GMY.png/58px-ArmGoon02GMY.png) */
		G_M_Y_ARMGOON_02 = 0xc54e878a,
		/** ![g_m_m_armlieut_01](https://wiki.rage.mp//images/thumb/f/fb/ArmLiuet01GMM.png/58px-ArmLiuet01GMM.png) */
		G_M_M_ARMLIEUT_01 = 0xe7714013,
		/** ![mp_s_m_armoured_01](https://wiki.rage.mp//images/thumb/8/8f/Armoured01.png/58px-Armoured01.png) */
		MP_S_M_ARMOURED_01 = 0xcdef5408,
		/** ![s_m_m_armoured_01](https://wiki.rage.mp//images/thumb/f/f1/Armoured01SMM.png/58px-Armoured01SMM.png) */
		S_M_M_ARMOURED_01 = 0x95c76ecd,
		/** ![s_m_m_armoured_02](https://wiki.rage.mp//images/thumb/d/d1/Armoured02SMM.png/58px-Armoured02SMM.png) */
		S_M_M_ARMOURED_02 = 0x63858a4a,
		/** ![s_m_y_armymech_01](https://wiki.rage.mp//images/thumb/0/02/ArmyMech01SMY.png/58px-ArmyMech01SMY.png) */
		S_M_Y_ARMYMECH_01 = 0x62cc28e2,
		/** ![ig_ashley](https://wiki.rage.mp//images/thumb/b/b2/Ashley.png/58px-Ashley.png) */
		IG_ASHLEY = 0x7ef440db,
		/** ![cs_ashley](https://wiki.rage.mp//images/thumb/7/70/AshleyCutscene.png/58px-AshleyCutscene.png) */
		CS_ASHLEY = 0x26c3d079,
		/** ![s_m_y_autopsy_01](https://wiki.rage.mp//images/thumb/e/eb/Autopsy01SMY.png/58px-Autopsy01SMY.png) */
		S_M_Y_AUTOPSY_01 = 0xb2273d4e,
		/** ![s_m_m_autoshop_01](https://wiki.rage.mp//images/thumb/2/24/AutoShop01SMM.png/58px-AutoShop01SMM.png) */
		S_M_M_AUTOSHOP_01 = 0x040eabe3,
		/** ![s_m_m_autoshop_02](https://wiki.rage.mp//images/thumb/2/29/Autoshop02SMM.png/58px-Autoshop02SMM.png) */
		S_M_M_AUTOSHOP_02 = 0xf06b849d,
		/** ![ig_money](https://wiki.rage.mp//images/thumb/4/4a/AviSchwartzman.png/58px-AviSchwartzman.png) */
		IG_MONEY = 0x37facda6,
		/** ![csb_money](https://wiki.rage.mp//images/thumb/2/2c/AviSchwartzmanCutscene.png/58px-AviSchwartzmanCutscene.png) */
		CSB_MONEY = 0x989dfd9a,
		/** ![g_m_y_azteca_01](https://wiki.rage.mp//images/thumb/f/fd/Azteca01GMY.png/58px-Azteca01GMY.png) */
		G_M_Y_AZTECA_01 = 0x68709618,
		/** ![u_m_y_babyd](https://wiki.rage.mp//images/thumb/b/b4/BabyD.png/58px-BabyD.png) */
		U_M_Y_BABYD = 0xda116e7e,
		/** ![g_m_y_ballaeast_01](https://wiki.rage.mp//images/thumb/e/e3/BallaEast01GMY.png/58px-BallaEast01GMY.png) */
		G_M_Y_BALLAEAST_01 = 0xf42ee883,
		/** ![g_m_y_ballaorig_01](https://wiki.rage.mp//images/thumb/d/d4/BallaOrig01GMY.png/58px-BallaOrig01GMY.png) */
		G_M_Y_BALLAORIG_01 = 0x231af63f,
		/** ![g_f_y_ballas_01](https://wiki.rage.mp//images/thumb/e/ee/Ballas01GFY.png/58px-Ballas01GFY.png) */
		G_F_Y_BALLAS_01 = 0x158c439c,
		/** ![ig_ballasog](https://wiki.rage.mp//images/thumb/c/c1/BallasOG.png/58px-BallasOG.png) */
		IG_BALLASOG = 0xa70b4a92,
		/** ![csb_ballasog](https://wiki.rage.mp//images/thumb/6/65/BallasOGCutscene.png/58px-BallasOGCutscene.png) */
		CSB_BALLASOG = 0xabef0004,
		/** ![g_m_y_ballasout_01](https://wiki.rage.mp//images/thumb/6/6c/BallaSout01GMY.png/58px-BallaSout01GMY.png) */
		G_M_Y_BALLASOUT_01 = 0x23b88069,
		/** ![u_m_m_bankman](https://wiki.rage.mp//images/thumb/c/ca/Bankman01.png/58px-Bankman01.png) */
		U_M_M_BANKMAN = 0xc306d6f5,
		/** ![ig_bankman](https://wiki.rage.mp//images/thumb/b/bb/Bankman.png/58px-Bankman.png) */
		IG_BANKMAN = 0x909d9e7f,
		/** ![cs_bankman](https://wiki.rage.mp//images/thumb/c/cb/BankmanCutscene.png/58px-BankmanCutscene.png) */
		CS_BANKMAN = 0x9760192e,
		/** ![s_m_y_barman_01](https://wiki.rage.mp//images/thumb/6/64/Barman01SMY.png/58px-Barman01SMY.png) */
		S_M_Y_BARMAN_01 = 0xe5a11106,
		/** ![ig_barry](https://wiki.rage.mp//images/thumb/f/f2/Barry.png/58px-Barry.png) */
		IG_BARRY = 0x2f8845a3,
		/** ![cs_barry](https://wiki.rage.mp//images/thumb/0/0c/BarryCutscene.png/58px-BarryCutscene.png) */
		CS_BARRY = 0x69591cf7,
		/** ![s_f_y_bartender_01](https://wiki.rage.mp//images/thumb/3/36/Bartender01SFY.png/58px-Bartender01SFY.png) */
		S_F_Y_BARTENDER_01 = 0x780c01bd,
		/** ![u_m_y_baygor](https://wiki.rage.mp//images/thumb/5/5e/Baygor.png/58px-Baygor.png) */
		U_M_Y_BAYGOR = 0x5244247d,
		/** ![s_f_y_baywatch_01](https://wiki.rage.mp//images/thumb/2/26/BayWatch01SFY.png/58px-BayWatch01SFY.png) */
		S_F_Y_BAYWATCH_01 = 0x4a8e5536,
		/** ![s_m_y_baywatch_01](https://wiki.rage.mp//images/thumb/3/35/BayWatch01SMY.png/58px-BayWatch01SMY.png) */
		S_M_Y_BAYWATCH_01 = 0x0b4a6862,
		/** ![a_f_m_beach_01](https://wiki.rage.mp//images/thumb/6/6b/Beach01AFM.png/58px-Beach01AFM.png) */
		A_F_M_BEACH_01 = 0x303638a7,
		/** ![a_f_y_beach_01](https://wiki.rage.mp//images/thumb/a/a1/Beach01AFY.png/58px-Beach01AFY.png) */
		A_F_Y_BEACH_01 = 0xc79f6928,
		/** ![a_m_m_beach_01](https://wiki.rage.mp//images/thumb/b/bd/Beach01AMM.png/58px-Beach01AMM.png) */
		A_M_M_BEACH_01 = 0x403db4fd,
		/** ![a_m_o_beach_01](https://wiki.rage.mp//images/thumb/2/29/Beach01AMO.png/58px-Beach01AMO.png) */
		A_M_O_BEACH_01 = 0x8427d398,
		/** ![a_m_y_beach_01](https://wiki.rage.mp//images/thumb/1/17/Beach01AMY.png/58px-Beach01AMY.png) */
		A_M_Y_BEACH_01 = 0xd1feb884,
		/** ![a_m_m_beach_02](https://wiki.rage.mp//images/thumb/4/49/Beach02AMM.png/58px-Beach02AMM.png) */
		A_M_M_BEACH_02 = 0x787fa588,
		/** ![a_m_y_beach_02](https://wiki.rage.mp//images/thumb/6/6e/Beach02AMY.png/58px-Beach02AMY.png) */
		A_M_Y_BEACH_02 = 0x23c7dc11,
		/** ![a_m_y_beach_03](https://wiki.rage.mp//images/thumb/5/5c/Beach03AMY.png/58px-Beach03AMY.png) */
		A_M_Y_BEACH_03 = 0xe7a963d9,
		/** ![a_m_y_beachvesp_01](https://wiki.rage.mp//images/thumb/5/57/BeachVesp01AMY.png/58px-BeachVesp01AMY.png) */
		A_M_Y_BEACHVESP_01 = 0x7e0961b8,
		/** ![a_m_y_beachvesp_02](https://wiki.rage.mp//images/thumb/2/25/Beachvesp02AMY.png/58px-Beachvesp02AMY.png) */
		A_M_Y_BEACHVESP_02 = 0xca56fa52,
		/** ![ig_benny](https://wiki.rage.mp//images/thumb/2/22/Benny.png/58px-Benny.png) */
		IG_BENNY = 0xc4b715d2,
		/** ![ig_bestmen](https://wiki.rage.mp//images/thumb/8/87/BestMen.png/58px-BestMen.png) */
		IG_BESTMEN = 0x5746cd96,
		/** ![ig_beverly](https://wiki.rage.mp//images/thumb/9/99/Beverly.png/58px-Beverly.png) */
		IG_BEVERLY = 0xbda21e5c,
		/** ![cs_beverly](https://wiki.rage.mp//images/thumb/9/92/BeverlyCutscene.png/58px-BeverlyCutscene.png) */
		CS_BEVERLY = 0xb46ec356,
		/** ![a_f_m_bevhills_01](https://wiki.rage.mp//images/thumb/7/79/BevHills01AFM.png/58px-BevHills01AFM.png) */
		A_F_M_BEVHILLS_01 = 0xbe086efd,
		/** ![a_f_y_bevhills_01](https://wiki.rage.mp//images/thumb/4/41/Bevhills01AFY.png/58px-Bevhills01AFY.png) */
		A_F_Y_BEVHILLS_01 = 0x445ac854,
		/** ![a_m_m_bevhills_01](https://wiki.rage.mp//images/thumb/6/69/BevHills01AMM.png/58px-BevHills01AMM.png) */
		A_M_M_BEVHILLS_01 = 0x54dbee1f,
		/** ![a_m_y_bevhills_01](https://wiki.rage.mp//images/thumb/8/82/BevHills01AMY.png/58px-BevHills01AMY.png) */
		A_M_Y_BEVHILLS_01 = 0x76284640,
		/** ![a_f_m_bevhills_02](https://wiki.rage.mp//images/thumb/c/c7/BevHills02AFM.png/58px-BevHills02AFM.png) */
		A_F_M_BEVHILLS_02 = 0xa039335f,
		/** ![a_f_y_bevhills_02](https://wiki.rage.mp//images/thumb/9/98/BevHills02AFY.png/58px-BevHills02AFY.png) */
		A_F_Y_BEVHILLS_02 = 0x5c2cf7f8,
		/** ![a_m_m_bevhills_02](https://wiki.rage.mp//images/thumb/c/cd/BevHills02AMM.png/58px-BevHills02AMM.png) */
		A_M_M_BEVHILLS_02 = 0x3fb5c3d3,
		/** ![a_m_y_bevhills_02](https://wiki.rage.mp//images/thumb/8/8c/BevHills02AMY.png/58px-BevHills02AMY.png) */
		A_M_Y_BEVHILLS_02 = 0x668ba707,
		/** ![a_f_y_bevhills_03](https://wiki.rage.mp//images/thumb/8/82/Bevhills03AFY.png/58px-Bevhills03AFY.png) */
		A_F_Y_BEVHILLS_03 = 0x20c8012f,
		/** ![a_f_y_bevhills_04](https://wiki.rage.mp//images/thumb/0/00/BevHills04AFY.png/58px-BevHills04AFY.png) */
		A_F_Y_BEVHILLS_04 = 0x36df2d5d,
		/** ![u_m_m_bikehire_01](https://wiki.rage.mp//images/thumb/f/fe/BikeHire01.png/58px-BikeHire01.png) */
		U_M_M_BIKEHIRE_01 = 0x76474545,
		/** ![u_f_y_bikerchic](https://wiki.rage.mp//images/thumb/9/97/BikerChic.png/58px-BikerChic.png) */
		U_F_Y_BIKERCHIC = 0xfa389d4f,
		/** ![s_m_y_blackops_01](https://wiki.rage.mp//images/thumb/0/0d/BlackOps01SMY.png/58px-BlackOps01SMY.png) */
		S_M_Y_BLACKOPS_01 = 0xb3f3ee34,
		/** ![s_m_y_blackops_02](https://wiki.rage.mp//images/thumb/1/19/BlackOps02SMY.png/58px-BlackOps02SMY.png) */
		S_M_Y_BLACKOPS_02 = 0x7a05fa59,
		/** ![s_m_y_blackops_03](https://wiki.rage.mp//images/thumb/0/00/BlackOps03SMY.png/58px-BlackOps03SMY.png) */
		S_M_Y_BLACKOPS_03 = 0x5076a73b,
		/** ![a_c_boar](https://wiki.rage.mp//images/thumb/6/6f/Boar.png/101px-Boar.png) */
		A_C_BOAR = 0xce5ff074,
		/** ![mp_f_boatstaff_01](https://wiki.rage.mp//images/thumb/3/35/BoatStaff01F.png/58px-BoatStaff01F.png) */
		MP_F_BOATSTAFF_01 = 0x3293b9ce,
		/** ![mp_m_boatstaff_01](https://wiki.rage.mp//images/thumb/8/83/BoatStaff01M.png/58px-BoatStaff01M.png) */
		MP_M_BOATSTAFF_01 = 0xc85f0a88,
		/** ![a_f_m_bodybuild_01](https://wiki.rage.mp//images/thumb/3/3d/BodyBuild01AFM.png/58px-BodyBuild01AFM.png) */
		A_F_M_BODYBUILD_01 = 0x3bd99114,
		/** ![s_m_m_bouncer_01](https://wiki.rage.mp//images/thumb/4/43/Bouncer01SMM.png/58px-Bouncer01SMM.png) */
		S_M_M_BOUNCER_01 = 0x9fd4292d,
		/** ![ig_brad](https://wiki.rage.mp//images/thumb/6/60/Brad.png/58px-Brad.png) */
		IG_BRAD = 0xbdbb4922,
		/** ![cs_bradcadaver](https://wiki.rage.mp//images/thumb/f/f7/BradCadaverCutscene.png/58px-BradCadaverCutscene.png) */
		CS_BRADCADAVER = 0x7228af60,
		/** ![cs_brad](https://wiki.rage.mp//images/thumb/4/4a/BradCutscene.png/58px-BradCutscene.png) */
		CS_BRAD = 0xefe5afe6,
		/** ![a_m_y_breakdance_01](https://wiki.rage.mp//images/thumb/a/a7/BreakDance01AMY.png/58px-BreakDance01AMY.png) */
		A_M_Y_BREAKDANCE_01 = 0x379f9596,
		/** ![ig_bride](https://wiki.rage.mp//images/thumb/f/f1/Bride.png/58px-Bride.png) */
		IG_BRIDE = 0x6162ec47,
		/** ![csb_bride](https://wiki.rage.mp//images/thumb/8/81/BrideCutscene.png/58px-BrideCutscene.png) */
		CSB_BRIDE = 0x82bf7ea1,
		/** ![u_m_y_burgerdrug_01](https://wiki.rage.mp//images/thumb/5/57/BurgerDrug.png/58px-BurgerDrug.png) */
		U_M_Y_BURGERDRUG_01 = 0x8b7d3766,
		/** ![csb_burgerdrug](https://wiki.rage.mp//images/thumb/d/d3/BurgerDrugCutscene.png/58px-BurgerDrugCutscene.png) */
		CSB_BURGERDRUG = 0x8cdcc057,
		/** ![s_m_y_busboy_01](https://wiki.rage.mp//images/thumb/8/82/BusBoy01SMY.png/58px-BusBoy01SMY.png) */
		S_M_Y_BUSBOY_01 = 0xd8f9cd47,
		/** ![a_m_y_busicas_01](https://wiki.rage.mp//images/thumb/a/a7/Busicas01AMY.png/58px-Busicas01AMY.png) */
		A_M_Y_BUSICAS_01 = 0x9ad32fe9,
		/** ![a_f_y_business_01](https://wiki.rage.mp//images/thumb/1/10/Business01AFY.png/58px-Business01AFY.png) */
		A_F_Y_BUSINESS_01 = 0x2799efd8,
		/** ![a_m_m_business_01](https://wiki.rage.mp//images/thumb/6/69/Business01AMM.png/58px-Business01AMM.png) */
		A_M_M_BUSINESS_01 = 0x7e6a64b7,
		/** ![a_m_y_business_01](https://wiki.rage.mp//images/thumb/9/9a/Business01AMY.png/58px-Business01AMY.png) */
		A_M_Y_BUSINESS_01 = 0xc99f21c4,
		/** ![a_f_m_business_02](https://wiki.rage.mp//images/thumb/b/b3/Business02AFM.png/58px-Business02AFM.png) */
		A_F_M_BUSINESS_02 = 0x1fc37dbc,
		/** ![a_f_y_business_02](https://wiki.rage.mp//images/thumb/e/e4/Business02AFY.png/58px-Business02AFY.png) */
		A_F_Y_BUSINESS_02 = 0x31430342,
		/** ![a_m_y_business_02](https://wiki.rage.mp//images/thumb/c/cc/Business02AMY.png/58px-Business02AMY.png) */
		A_M_Y_BUSINESS_02 = 0xb3b3f5e6,
		/** ![a_f_y_business_03](https://wiki.rage.mp//images/thumb/c/cc/Business03AFY.png/58px-Business03AFY.png) */
		A_F_Y_BUSINESS_03 = 0xae86fdb4,
		/** ![a_m_y_business_03](https://wiki.rage.mp//images/thumb/f/f0/Business03AMY.png/58px-Business03AMY.png) */
		A_M_Y_BUSINESS_03 = 0xa1435105,
		/** ![a_f_y_business_04](https://wiki.rage.mp//images/thumb/4/42/Business04AFY.png/58px-Business04AFY.png) */
		A_F_Y_BUSINESS_04 = 0xb7c61032,
		/** ![s_m_o_busker_01](https://wiki.rage.mp//images/thumb/c/c5/Busker01SMO.png/58px-Busker01SMO.png) */
		S_M_O_BUSKER_01 = 0xad9ef1bb,
		/** ![ig_car3guy1](https://wiki.rage.mp//images/thumb/b/b9/Car3Guy1.png/58px-Car3Guy1.png) */
		IG_CAR3GUY1 = 0x84f9e937,
		/** ![csb_car3guy1](https://wiki.rage.mp//images/thumb/3/35/Car3Guy1Cutscene.png/58px-Car3Guy1Cutscene.png) */
		CSB_CAR3GUY1 = 0x04430687,
		/** ![ig_car3guy2](https://wiki.rage.mp//images/thumb/e/ef/Car3Guy2.png/58px-Car3Guy2.png) */
		IG_CAR3GUY2 = 0x75c34aca,
		/** ![csb_car3guy2](https://wiki.rage.mp//images/thumb/5/5e/Car3Guy2Cutscene.png/58px-Car3Guy2Cutscene.png) */
		CSB_CAR3GUY2 = 0x1383a508,
		/** ![cs_carbuyer](https://wiki.rage.mp//images/thumb/8/84/CarBuyerCutscene.png/58px-CarBuyerCutscene.png) */
		CS_CARBUYER = 0x8cce790f,
		/** ![ig_casey](https://wiki.rage.mp//images/thumb/1/1e/Casey.png/58px-Casey.png) */
		IG_CASEY = 0xe0fa2554,
		/** ![cs_casey](https://wiki.rage.mp//images/thumb/3/3e/CaseyCutscene.png/58px-CaseyCutscene.png) */
		CS_CASEY = 0xea969c40,
		/** ![a_c_cat_01](https://wiki.rage.mp//images/thumb/0/05/Cat.png/99px-Cat.png) */
		A_C_CAT_01 = 0x573201b8,
		/** ![s_m_m_ccrew_01](https://wiki.rage.mp//images/thumb/c/cd/CCrew01SMM.png/58px-CCrew01SMM.png) */
		S_M_M_CCREW_01 = 0xc9e5f56b,
		/** ![s_m_y_chef_01](https://wiki.rage.mp//images/thumb/4/4b/Chef01SMY.png/58px-Chef01SMY.png) */
		S_M_Y_CHEF_01 = 0x0f977ceb,
		/** ![ig_chef2](https://wiki.rage.mp//images/thumb/6/64/Chef2.png/58px-Chef2.png) */
		IG_CHEF2 = 0x85889ac3,
		/** ![csb_chef2](https://wiki.rage.mp//images/thumb/6/68/Chef2Cutscene.png/58px-Chef2Cutscene.png) */
		CSB_CHEF2 = 0xae5be23a,
		/** ![ig_chef](https://wiki.rage.mp//images/thumb/e/e5/Chef.png/58px-Chef.png) */
		IG_CHEF = 0x49eadbf6,
		/** ![csb_chef](https://wiki.rage.mp//images/thumb/1/1e/ChefCutscene.png/68px-ChefCutscene.png) */
		CSB_CHEF = 0xa347ca8a,
		/** ![s_m_m_chemsec_01](https://wiki.rage.mp//images/thumb/c/c7/ChemSec01SMM.png/58px-ChemSec01SMM.png) */
		S_M_M_CHEMSEC_01 = 0x2efeafd5,
		/** ![g_m_m_chemwork_01](https://wiki.rage.mp//images/thumb/2/26/ChemWork01GMM.png/58px-ChemWork01GMM.png) */
		G_M_M_CHEMWORK_01 = 0xf6157d8f,
		/** ![g_m_m_chiboss_01](https://wiki.rage.mp//images/thumb/e/eb/ChiBoss01GMM.png/58px-ChiBoss01GMM.png) */
		G_M_M_CHIBOSS_01 = 0xb9dd0300,
		/** ![a_c_chickenhawk](https://wiki.rage.mp//images/thumb/b/b6/ChickenHawk.png/107px-ChickenHawk.png) */
		A_C_CHICKENHAWK = 0xaab71f62,
		/** ![g_m_m_chicold_01](https://wiki.rage.mp//images/thumb/9/97/ChiCold01GMM.png/58px-ChiCold01GMM.png) */
		G_M_M_CHICOLD_01 = 0x106d9a99,
		/** ![g_m_m_chigoon_01](https://wiki.rage.mp//images/thumb/5/5c/ChiGoon01GMM.png/58px-ChiGoon01GMM.png) */
		G_M_M_CHIGOON_01 = 0x7e4f763f,
		/** ![g_m_m_chigoon_02](https://wiki.rage.mp//images/thumb/e/ea/ChiGoon02GMM.png/58px-ChiGoon02GMM.png) */
		G_M_M_CHIGOON_02 = 0xff71f826,
		/** ![a_c_chimp](https://wiki.rage.mp//images/thumb/d/db/Chimp.png/67px-Chimp.png) */
		A_C_CHIMP = 0xa8683715,
		/** ![csb_chin_goon](https://wiki.rage.mp//images/thumb/7/79/ChinGoonCutscene.png/58px-ChinGoonCutscene.png) */
		CSB_CHIN_GOON = 0xa8c22996,
		/** ![u_m_y_chip](https://wiki.rage.mp//images/thumb/6/6f/Chip.png/58px-Chip.png) */
		U_M_Y_CHIP = 0x24604b2b,
		/** ![a_c_chop](https://wiki.rage.mp//images/thumb/e/e3/Chop.png/71px-Chop.png) */
		A_C_CHOP = 0x14ec17ea,
		/** ![s_m_m_ciasec_01](https://wiki.rage.mp//images/thumb/5/5a/CIASec01SMM.png/58px-CIASec01SMM.png) */
		S_M_M_CIASEC_01 = 0x625d6958,
		/** ![mp_m_claude_01](https://wiki.rage.mp//images/thumb/1/1d/Claude01.png/58px-Claude01.png) */
		MP_M_CLAUDE_01 = 0xc0f371b7,
		/** ![ig_clay](https://wiki.rage.mp//images/thumb/a/a2/Clay.png/58px-Clay.png) */
		IG_CLAY = 0x6ccfe08a,
		/** ![cs_clay](https://wiki.rage.mp//images/thumb/5/54/ClayCutscene.png/58px-ClayCutscene.png) */
		CS_CLAY = 0xdbcb9834,
		/** ![ig_claypain](https://wiki.rage.mp//images/thumb/3/3e/ClayPain.png/58px-ClayPain.png) */
		IG_CLAYPAIN = 0x9d0087a8,
		/** ![ig_cletus](https://wiki.rage.mp//images/thumb/d/dd/Cletus.png/58px-Cletus.png) */
		IG_CLETUS = 0xe6631195,
		/** ![csb_cletus](https://wiki.rage.mp//images/thumb/e/ed/CletusCutscene.png/58px-CletusCutscene.png) */
		CSB_CLETUS = 0xcae9e5d5,
		/** ![s_m_y_clown_01](https://wiki.rage.mp//images/thumb/3/35/Clown01SMY.png/58px-Clown01SMY.png) */
		S_M_Y_CLOWN_01 = 0x04498dde,
		/** ![s_m_m_cntrybar_01](https://wiki.rage.mp//images/thumb/7/7d/CntryBar01SMM.png/58px-CntryBar01SMM.png) */
		S_M_M_CNTRYBAR_01 = 0x1a021b83,
		/** ![u_f_y_comjane](https://wiki.rage.mp//images/thumb/c/c4/ComJane.png/58px-ComJane.png) */
		U_F_Y_COMJANE = 0xb6aa85ce,
		/** ![s_m_y_construct_01](https://wiki.rage.mp//images/thumb/c/cb/Construct01SMY.png/58px-Construct01SMY.png) */
		S_M_Y_CONSTRUCT_01 = 0xd7da9e99,
		/** ![s_m_y_construct_02](https://wiki.rage.mp//images/thumb/3/31/Construct02SMY.png/58px-Construct02SMY.png) */
		S_M_Y_CONSTRUCT_02 = 0xc5fefade,
		/** ![s_f_y_cop_01](https://wiki.rage.mp//images/thumb/6/6f/Cop01SFY.png/58px-Cop01SFY.png) */
		S_F_Y_COP_01 = 0x15f8700d,
		/** ![s_m_y_cop_01](https://wiki.rage.mp//images/thumb/9/98/Cop01SMY.png/58px-Cop01SMY.png) */
		S_M_Y_COP_01 = 0x5e3da4a4,
		/** ![csb_cop](https://wiki.rage.mp//images/thumb/5/58/CopCutscene.png/58px-CopCutscene.png) */
		CSB_COP = 0x9ab35f63,
		/** ![a_c_cormorant](https://wiki.rage.mp//images/thumb/9/96/Cormorant.png/82px-Cormorant.png) */
		A_C_CORMORANT = 0x56e29962,
		/** ![u_f_m_corpse_01](https://wiki.rage.mp//images/thumb/5/5b/Corpse01.png/58px-Corpse01.png) */
		U_F_M_CORPSE_01 = 0x2e140314,
		/** ![u_f_y_corpse_02](https://wiki.rage.mp//images/thumb/d/dd/Corpse02.png/58px-Corpse02.png) */
		U_F_Y_CORPSE_02 = 0x0d9c72f8,
		/** ![a_c_cow](https://wiki.rage.mp//images/thumb/8/84/Cow.png/70px-Cow.png) */
		A_C_COW = 0xfcfa9e1e,
		/** ![a_c_coyote](https://wiki.rage.mp//images/thumb/0/02/Coyote.png/63px-Coyote.png) */
		A_C_COYOTE = 0x644ac75e,
		/** ![ig_chrisformage](https://wiki.rage.mp//images/thumb/c/c8/CrisFormage.png/58px-CrisFormage.png) */
		IG_CHRISFORMAGE = 0x286e54a7,
		/** ![cs_chrisformage](https://wiki.rage.mp//images/thumb/6/63/CrisFormageCutscene.png/58px-CrisFormageCutscene.png) */
		CS_CHRISFORMAGE = 0xc1f380e6,
		/** ![a_c_crow](https://wiki.rage.mp//images/thumb/f/fa/Crow.png/84px-Crow.png) */
		A_C_CROW = 0x18012a9f,
		/** ![csb_customer](https://wiki.rage.mp//images/thumb/6/6f/CustomerCutscene.png/58px-CustomerCutscene.png) */
		CSB_CUSTOMER = 0xa44f6f8b,
		/** ![u_m_y_cyclist_01](https://wiki.rage.mp//images/thumb/f/f3/Cyclist01.png/58px-Cyclist01.png) */
		U_M_Y_CYCLIST_01 = 0x2d0efceb,
		/** ![a_m_y_cyclist_01](https://wiki.rage.mp//images/thumb/a/a7/Cyclist01amy.png/58px-Cyclist01amy.png) */
		A_M_Y_CYCLIST_01 = 0xfdc653c7,
		/** ![ig_dale](https://wiki.rage.mp//images/thumb/1/19/Dale.png/58px-Dale.png) */
		IG_DALE = 0x467415e9,
		/** ![cs_dale](https://wiki.rage.mp//images/thumb/9/91/DaleCutscene.png/58px-DaleCutscene.png) */
		CS_DALE = 0x0ce81655,
		/** ![ig_davenorton](https://wiki.rage.mp//images/thumb/f/f8/DaveNorton.png/58px-DaveNorton.png) */
		IG_DAVENORTON = 0x15cd4c33,
		/** ![cs_davenorton](https://wiki.rage.mp//images/thumb/f/f4/DaveNortonCutscene.png/58px-DaveNortonCutscene.png) */
		CS_DAVENORTON = 0x8587248c,
		/** ![s_m_y_dealer_01](https://wiki.rage.mp//images/thumb/8/87/Dealer01SMY.png/58px-Dealer01SMY.png) */
		S_M_Y_DEALER_01 = 0xe497bbef,
		/** ![cs_debra](https://wiki.rage.mp//images/thumb/a/a3/DebraCutscene.png/58px-DebraCutscene.png) */
		CS_DEBRA = 0xecd04fe9,
		/** ![a_c_deer](https://wiki.rage.mp//images/thumb/2/27/Deer.png/68px-Deer.png) */
		A_C_DEER = 0xd86b5a95,
		/** ![ig_denise](https://wiki.rage.mp//images/thumb/b/b3/Denise.png/58px-Denise.png) */
		IG_DENISE = 0x820b33bd,
		/** ![cs_denise](https://wiki.rage.mp//images/thumb/5/5b/DeniseCutscene.png/58px-DeniseCutscene.png) */
		CS_DENISE = 0x6f802738,
		/** ![csb_denise_friend](https://wiki.rage.mp//images/thumb/2/29/DeniseFriendCutscene.png/58px-DeniseFriendCutscene.png) */
		CSB_DENISE_FRIEND = 0xb58d2529,
		/** ![ig_devin](https://wiki.rage.mp//images/thumb/9/99/Devin.png/58px-Devin.png) */
		IG_DEVIN = 0x7461a0b0,
		/** ![cs_devin](https://wiki.rage.mp//images/thumb/e/ef/DevinCutscene.png/58px-DevinCutscene.png) */
		CS_DEVIN = 0x2f016d02,
		/** ![s_m_y_devinsec_01](https://wiki.rage.mp//images/thumb/1/17/DevinSec01SMY.png/58px-DevinSec01SMY.png) */
		S_M_Y_DEVINSEC_01 = 0x9b557274,
		/** ![a_m_y_dhill_01](https://wiki.rage.mp//images/thumb/b/b7/DHill01AMY.png/58px-DHill01AMY.png) */
		A_M_Y_DHILL_01 = 0xff3e88ab,
		/** ![u_m_m_doa_01](https://wiki.rage.mp//images/thumb/1/1f/DoaMan.png/58px-DoaMan.png) */
		U_M_M_DOA_01 = 0x621e6bfd,
		/** ![s_m_m_dockwork_01](https://wiki.rage.mp//images/thumb/c/c2/DockWork01SMM.png/58px-DockWork01SMM.png) */
		S_M_M_DOCKWORK_01 = 0x14d7b4e0,
		/** ![s_m_y_dockwork_01](https://wiki.rage.mp//images/thumb/5/5a/DockWork01SMY.png/58px-DockWork01SMY.png) */
		S_M_Y_DOCKWORK_01 = 0x867639d1,
		/** ![s_m_m_doctor_01](https://wiki.rage.mp//images/thumb/d/d6/Doctor01SMM.png/58px-Doctor01SMM.png) */
		S_M_M_DOCTOR_01 = 0xd47303ac,
		/** ![a_c_dolphin](https://wiki.rage.mp//images/thumb/0/0b/Dolphin.png/120px-Dolphin.png) */
		A_C_DOLPHIN = 0x8bbab455,
		/** ![ig_dom](https://wiki.rage.mp//images/thumb/8/8e/Dom.png/58px-Dom.png) */
		IG_DOM = 0x9c2db088,
		/** ![cs_dom](https://wiki.rage.mp//images/thumb/c/c0/DomCutscene.png/58px-DomCutscene.png) */
		CS_DOM = 0x4772af42,
		/** ![s_m_y_doorman_01](https://wiki.rage.mp//images/thumb/9/91/Doorman01SMY.png/58px-Doorman01SMY.png) */
		S_M_Y_DOORMAN_01 = 0x22911304,
		/** ![a_f_m_downtown_01](https://wiki.rage.mp//images/thumb/2/21/DownTown01AFM.png/58px-DownTown01AFM.png) */
		A_F_M_DOWNTOWN_01 = 0x654ad86e,
		/** ![a_m_y_downtown_01](https://wiki.rage.mp//images/thumb/2/27/DownTown01AMY.png/58px-DownTown01AMY.png) */
		A_M_Y_DOWNTOWN_01 = 0x2dadf4aa,
		/** ![ig_dreyfuss](https://wiki.rage.mp//images/thumb/8/88/Dreyfuss.png/58px-Dreyfuss.png) */
		IG_DREYFUSS = 0xda890932,
		/** ![cs_dreyfuss](https://wiki.rage.mp//images/thumb/8/8b/DreyfussCutscene.png/58px-DreyfussCutscene.png) */
		CS_DREYFUSS = 0x3c60a153,
		/** ![ig_drfriedlander](https://wiki.rage.mp//images/thumb/2/21/DrFriedlander.png/58px-DrFriedlander.png) */
		IG_DRFRIEDLANDER = 0xcbfc0df5,
		/** ![cs_drfriedlander](https://wiki.rage.mp//images/thumb/f/fe/DrFriedlanderCutscene.png/58px-DrFriedlanderCutscene.png) */
		CS_DRFRIEDLANDER = 0xa3a35c2f,
		/** ![mp_f_deadhooker](https://wiki.rage.mp//images/thumb/5/57/Drowned.png/58px-Drowned.png) */
		MP_F_DEADHOOKER = 0x73dea88b,
		/** ![s_m_y_dwservice_01](https://wiki.rage.mp//images/thumb/e/e5/DWService01SMY.png/58px-DWService01SMY.png) */
		S_M_Y_DWSERVICE_01 = 0x75d30a91,
		/** ![s_m_y_dwservice_02](https://wiki.rage.mp//images/thumb/f/ff/DWService02SMY.png/58px-DWService02SMY.png) */
		S_M_Y_DWSERVICE_02 = 0xf5908a06,
		/** ![a_f_m_eastsa_01](https://wiki.rage.mp//images/thumb/3/39/EastSA01AFM.png/58px-EastSA01AFM.png) */
		A_F_M_EASTSA_01 = 0x9d3dcb7a,
		/** ![a_f_y_eastsa_01](https://wiki.rage.mp//images/thumb/5/54/EastSA01AFY.png/58px-EastSA01AFY.png) */
		A_F_Y_EASTSA_01 = 0xf5b0079d,
		/** ![a_m_m_eastsa_01](https://wiki.rage.mp//images/thumb/a/a3/EastSA01AMM.png/58px-EastSA01AMM.png) */
		A_M_M_EASTSA_01 = 0xf9a6f53f,
		/** ![a_m_y_eastsa_01](https://wiki.rage.mp//images/thumb/a/a7/Eastsa01AMY.png/71px-Eastsa01AMY.png) */
		A_M_Y_EASTSA_01 = 0xa4471173,
		/** ![a_f_m_eastsa_02](https://wiki.rage.mp//images/thumb/8/87/EastSA02AFM.png/58px-EastSA02AFM.png) */
		A_F_M_EASTSA_02 = 0x63c8d891,
		/** ![a_f_y_eastsa_02](https://wiki.rage.mp//images/thumb/e/e5/EastSA02AFY.png/58px-EastSA02AFY.png) */
		A_F_Y_EASTSA_02 = 0x0438a4ae,
		/** ![a_m_m_eastsa_02](https://wiki.rage.mp//images/thumb/3/3a/EastSa02AMM.png/58px-EastSa02AMM.png) */
		A_M_M_EASTSA_02 = 0x07dd91ac,
		/** ![a_m_y_eastsa_02](https://wiki.rage.mp//images/thumb/b/bd/EastSA02AMY.png/58px-EastSA02AMY.png) */
		A_M_Y_EASTSA_02 = 0x168775f6,
		/** ![a_f_y_eastsa_03](https://wiki.rage.mp//images/thumb/2/2d/EastSA03AFY.png/58px-EastSA03AFY.png) */
		A_F_Y_EASTSA_03 = 0x51c03fa4,
		/** ![u_m_m_edtoh](https://wiki.rage.mp//images/thumb/a/a5/EdToh.png/58px-EdToh.png) */
		U_M_M_EDTOH = 0x2a797197,
		/** ![a_f_y_epsilon_01](https://wiki.rage.mp//images/thumb/0/09/Epsilon01AFY.png/58px-Epsilon01AFY.png) */
		A_F_Y_EPSILON_01 = 0x689c2a80,
		/** ![a_m_y_epsilon_01](https://wiki.rage.mp//images/thumb/9/9c/Epsilon01AMY.png/58px-Epsilon01AMY.png) */
		A_M_Y_EPSILON_01 = 0x77d41a3e,
		/** ![a_m_y_epsilon_02](https://wiki.rage.mp//images/thumb/6/68/Epsilon02AMY.png/58px-Epsilon02AMY.png) */
		A_M_Y_EPSILON_02 = 0xaa82ff9b,
		/** ![mp_m_exarmy_01](https://wiki.rage.mp//images/thumb/7/7b/ExArmy01.png/58px-ExArmy01.png) */
		MP_M_EXARMY_01 = 0x45348dbb,
		/** ![ig_fabien](https://wiki.rage.mp//images/thumb/2/2f/Fabien.png/58px-Fabien.png) */
		IG_FABIEN = 0xd090c350,
		/** ![cs_fabien](https://wiki.rage.mp//images/thumb/d/dc/FabienCutscene.png/58px-FabienCutscene.png) */
		CS_FABIEN = 0x47035ec1,
		/** ![s_f_y_factory_01](https://wiki.rage.mp//images/thumb/e/e0/Factory01SFY.png/58px-Factory01SFY.png) */
		S_F_Y_FACTORY_01 = 0x69f46bf3,
		/** ![s_m_y_factory_01](https://wiki.rage.mp//images/thumb/d/d3/Factory01SMY.png/58px-Factory01SMY.png) */
		S_M_Y_FACTORY_01 = 0x4163a158,
		/** ![g_m_y_famca_01](https://wiki.rage.mp//images/thumb/7/7e/FamCA01GMY.png/58px-FamCA01GMY.png) */
		G_M_Y_FAMCA_01 = 0xe83b93b7,
		/** ![mp_m_famdd_01](https://wiki.rage.mp//images/thumb/d/de/FamDD01.png/58px-FamDD01.png) */
		MP_M_FAMDD_01 = 0x33a464e5,
		/** ![g_m_y_famdnf_01](https://wiki.rage.mp//images/thumb/d/d8/FamDNF01GMY.png/58px-FamDNF01GMY.png) */
		G_M_Y_FAMDNF_01 = 0xdb729238,
		/** ![g_m_y_famfor_01](https://wiki.rage.mp//images/thumb/3/39/FamFor01GMY.png/58px-FamFor01GMY.png) */
		G_M_Y_FAMFOR_01 = 0x84302b09,
		/** ![g_f_y_families_01](https://wiki.rage.mp//images/thumb/3/3d/Families01GFY.png/58px-Families01GFY.png) */
		G_F_Y_FAMILIES_01 = 0x4e0ce5d3,
		/** ![a_m_m_farmer_01](https://wiki.rage.mp//images/thumb/e/eb/Farmer01AMM.png/58px-Farmer01AMM.png) */
		A_M_M_FARMER_01 = 0x94562dd7,
		/** ![a_f_m_fatbla_01](https://wiki.rage.mp//images/thumb/5/54/FatBla01AFM.png/58px-FatBla01AFM.png) */
		A_F_M_FATBLA_01 = 0xfab48bcb,
		/** ![a_f_m_fatcult_01](https://wiki.rage.mp//images/thumb/0/08/FatCult01AFM.png/58px-FatCult01AFM.png) */
		A_F_M_FATCULT_01 = 0xb5cf80e4,
		/** ![a_m_m_fatlatin_01](https://wiki.rage.mp//images/thumb/a/a8/FatLatin01AMM.png/58px-FatLatin01AMM.png) */
		A_M_M_FATLATIN_01 = 0x61d201b3,
		/** ![a_f_m_fatwhite_01](https://wiki.rage.mp//images/thumb/d/dc/FatWhite01AFM.png/58px-FatWhite01AFM.png) */
		A_F_M_FATWHITE_01 = 0x38bad33b,
		/** ![ig_fbisuit_01](https://wiki.rage.mp//images/thumb/7/7b/FBISuit01.png/58px-FBISuit01.png) */
		IG_FBISUIT_01 = 0x3ae4a33b,
		/** ![cs_fbisuit_01](https://wiki.rage.mp//images/thumb/d/d9/FBISuit01Cutscene.png/58px-FBISuit01Cutscene.png) */
		CS_FBISUIT_01 = 0x585c0b52,
		/** ![s_f_m_fembarber](https://wiki.rage.mp//images/thumb/b/bb/FemBarberSFM.png/58px-FemBarberSFM.png) */
		S_F_M_FEMBARBER = 0x163b875b,
		/** ![u_m_m_fibarchitect](https://wiki.rage.mp//images/thumb/d/dc/FIBArchitect.png/58px-FIBArchitect.png) */
		U_M_M_FIBARCHITECT = 0x342333d3,
		/** ![u_m_y_fibmugger_01](https://wiki.rage.mp//images/thumb/5/5f/FIBMugger01.png/58px-FIBMugger01.png) */
		U_M_Y_FIBMUGGER_01 = 0x85b9c668,
		/** ![s_m_m_fiboffice_01](https://wiki.rage.mp//images/thumb/e/e1/FIBOffice01SMM.png/58px-FIBOffice01SMM.png) */
		S_M_M_FIBOFFICE_01 = 0xedbc7546,
		/** ![s_m_m_fiboffice_02](https://wiki.rage.mp//images/thumb/8/88/FIBOffice02SMM.png/58px-FIBOffice02SMM.png) */
		S_M_M_FIBOFFICE_02 = 0x26f067ad,
		/** ![mp_m_fibsec_01](https://wiki.rage.mp//images/thumb/c/c5/FIBSec01.png/58px-FIBSec01.png) */
		MP_M_FIBSEC_01 = 0x5cdef405,
		/** ![s_m_m_fibsec_01](https://wiki.rage.mp//images/thumb/9/9a/FIBSec01SMM.png/58px-FIBSec01SMM.png) */
		S_M_M_FIBSEC_01 = 0x7b8b434b,
		/** ![u_m_m_filmdirector](https://wiki.rage.mp//images/thumb/1/13/FilmDirector.png/58px-FilmDirector.png) */
		U_M_M_FILMDIRECTOR = 0x2b6e1bb6,
		/** ![u_m_o_filmnoir](https://wiki.rage.mp//images/thumb/4/4c/FilmNoir.png/58px-FilmNoir.png) */
		U_M_O_FILMNOIR = 0x2bacc2db,
		/** ![u_m_o_finguru_01](https://wiki.rage.mp//images/thumb/c/c4/FinGuru01.png/58px-FinGuru01.png) */
		U_M_O_FINGURU_01 = 0x46e39e63,
		/** ![s_m_y_fireman_01](https://wiki.rage.mp//images/thumb/7/70/Fireman01SMY.png/58px-Fireman01SMY.png) */
		S_M_Y_FIREMAN_01 = 0xb6b1eda8,
		/** ![a_c_fish](https://wiki.rage.mp//images/thumb/f/fb/Fish.png/120px-Fish.png) */
		A_C_FISH = 0x2fd800b7,
		/** ![a_f_y_fitness_01](https://wiki.rage.mp//images/thumb/c/c0/Fitness01AFY.png/58px-Fitness01AFY.png) */
		A_F_Y_FITNESS_01 = 0x457c64fb,
		/** ![a_f_y_fitness_02](https://wiki.rage.mp//images/thumb/f/f8/Fitness02AFY.png/58px-Fitness02AFY.png) */
		A_F_Y_FITNESS_02 = 0x13c4818c,
		/** ![ig_floyd](https://wiki.rage.mp//images/thumb/9/98/Floyd.png/58px-Floyd.png) */
		IG_FLOYD = 0xb1b196b2,
		/** ![cs_floyd](https://wiki.rage.mp//images/thumb/c/cb/FloydCutscene.png/58px-FloydCutscene.png) */
		CS_FLOYD = 0x062547e7,
		/** ![csb_fos_rep](https://wiki.rage.mp//images/thumb/0/00/FosRepCutscene.png/58px-FosRepCutscene.png) */
		CSB_FOS_REP = 0x1bcc157b,
		/** ![player_one](https://wiki.rage.mp//images/thumb/3/37/Franklin.png/58px-Franklin.png) */
		PLAYER_ONE = 0x9b22dbaf,
		/** ![mp_f_freemode_01](https://wiki.rage.mp//images/thumb/3/34/FreemodeFemale01.png/58px-FreemodeFemale01.png) */
		MP_F_FREEMODE_01 = 0x9c9effd8,
		/** ![mp_m_freemode_01](https://wiki.rage.mp//images/thumb/7/7a/FreeModeMale01.png/58px-FreeModeMale01.png) */
		MP_M_FREEMODE_01 = 0x705e61f2,
		/** ![ig_g](https://wiki.rage.mp//images/thumb/f/f7/G.png/58px-G.png) */
		IG_G = 0x841ba933,
		/** ![s_m_m_gaffer_01](https://wiki.rage.mp//images/thumb/3/32/Gaffer01SMM.png/58px-Gaffer01SMM.png) */
		S_M_M_GAFFER_01 = 0xa956bd9e,
		/** ![s_m_y_garbage](https://wiki.rage.mp//images/thumb/3/36/GarbageSMY.png/58px-GarbageSMY.png) */
		S_M_Y_GARBAGE = 0xee75a00f,
		/** ![s_m_m_gardener_01](https://wiki.rage.mp//images/thumb/6/62/Gardener01SMM.png/58px-Gardener01SMM.png) */
		S_M_M_GARDENER_01 = 0x49ea5685,
		/** ![a_m_y_gay_01](https://wiki.rage.mp//images/thumb/d/d1/Gay01AMY.png/58px-Gay01AMY.png) */
		A_M_Y_GAY_01 = 0xd1cce036,
		/** ![a_m_y_gay_02](https://wiki.rage.mp//images/thumb/f/fa/Gay02AMY.png/58px-Gay02AMY.png) */
		A_M_Y_GAY_02 = 0xa5720781,
		/** ![csb_g](https://wiki.rage.mp//images/thumb/2/2b/GCutscene.png/58px-GCutscene.png) */
		CSB_G = 0xa28e71d7,
		/** ![a_m_m_genfat_01](https://wiki.rage.mp//images/thumb/e/e1/GenFat01AMM.png/58px-GenFat01AMM.png) */
		A_M_M_GENFAT_01 = 0x06dd569f,
		/** ![a_m_m_genfat_02](https://wiki.rage.mp//images/thumb/c/c0/GenFat02AMM.png/58px-GenFat02AMM.png) */
		A_M_M_GENFAT_02 = 0x13aef042,
		/** ![a_f_y_genhot_01](https://wiki.rage.mp//images/thumb/f/f9/GenHot01AFY.png/58px-GenHot01AFY.png) */
		A_F_Y_GENHOT_01 = 0x2f4aec3e,
		/** ![a_f_o_genstreet_01](https://wiki.rage.mp//images/thumb/b/ba/GenStreet01AFO.png/58px-GenStreet01AFO.png) */
		A_F_O_GENSTREET_01 = 0x61c81c85,
		/** ![a_m_o_genstreet_01](https://wiki.rage.mp//images/thumb/b/bc/GenStreet01AMO.png/58px-GenStreet01AMO.png) */
		A_M_O_GENSTREET_01 = 0xad54e7a8,
		/** ![a_m_y_genstreet_01](https://wiki.rage.mp//images/thumb/8/82/GenStreet01AMY.png/58px-GenStreet01AMY.png) */
		A_M_Y_GENSTREET_01 = 0x9877ef71,
		/** ![a_m_y_genstreet_02](https://wiki.rage.mp//images/thumb/7/7a/GenStreet02AMY.png/58px-GenStreet02AMY.png) */
		A_M_Y_GENSTREET_02 = 0x3521a8d2,
		/** ![s_m_m_gentransport](https://wiki.rage.mp//images/thumb/b/bc/GenTransportSMM.png/58px-GenTransportSMM.png) */
		S_M_M_GENTRANSPORT = 0x1880ed06,
		/** ![u_m_m_glenstank_01](https://wiki.rage.mp//images/thumb/9/98/GlenStank01.png/58px-GlenStank01.png) */
		U_M_M_GLENSTANK_01 = 0x45bb1666,
		/** ![a_f_y_golfer_01](https://wiki.rage.mp//images/thumb/6/64/Golfer01AFY.png/58px-Golfer01AFY.png) */
		A_F_Y_GOLFER_01 = 0x7dd8fb58,
		/** ![a_m_m_golfer_01](https://wiki.rage.mp//images/thumb/a/aa/Golfer01AMM.png/58px-Golfer01AMM.png) */
		A_M_M_GOLFER_01 = 0xa9eb0e42,
		/** ![a_m_y_golfer_01](https://wiki.rage.mp//images/thumb/f/f7/Golfer01AMY.png/58px-Golfer01AMY.png) */
		A_M_Y_GOLFER_01 = 0xd71fe131,
		/** ![u_m_m_griff_01](https://wiki.rage.mp//images/thumb/d/d1/Griff01.png/58px-Griff01.png) */
		U_M_M_GRIFF_01 = 0xc454bcbb,
		/** ![s_m_y_grip_01](https://wiki.rage.mp//images/thumb/8/8f/Grip01SMY.png/58px-Grip01SMY.png) */
		S_M_Y_GRIP_01 = 0x309e7dea,
		/** ![ig_groom](https://wiki.rage.mp//images/thumb/b/bb/Groom.png/58px-Groom.png) */
		IG_GROOM = 0xfece8b85,
		/** ![csb_groom](https://wiki.rage.mp//images/thumb/0/03/GroomCutscene.png/58px-GroomCutscene.png) */
		CSB_GROOM = 0x7aab19d2,
		/** ![csb_grove_str_dlr](https://wiki.rage.mp//images/thumb/e/ea/GroveStrDlrCutscene.png/58px-GroveStrDlrCutscene.png) */
		CSB_GROVE_STR_DLR = 0xe8594e22,
		/** ![cs_guadalope](https://wiki.rage.mp//images/thumb/a/ac/GuadalopeCutscene.png/58px-GuadalopeCutscene.png) */
		CS_GUADALOPE = 0x0f9513f1,
		/** ![u_m_y_guido_01](https://wiki.rage.mp//images/thumb/3/31/Guido01.png/58px-Guido01.png) */
		U_M_Y_GUIDO_01 = 0xc6b49a2f,
		/** ![u_m_y_gunvend_01](https://wiki.rage.mp//images/thumb/a/a0/GunVend01.png/58px-GunVend01.png) */
		U_M_Y_GUNVEND_01 = 0xb3229752,
		/** ![cs_gurk](https://wiki.rage.mp//images/thumb/a/a3/GurkCutscene.png/58px-GurkCutscene.png) */
		CS_GURK = 0xc314f727,
		/** ![hc_hacker](https://wiki.rage.mp//images/thumb/e/e2/Hacker.png/58px-Hacker.png) */
		HC_HACKER = 0x99bb00f8,
		/** ![s_m_m_hairdress_01](https://wiki.rage.mp//images/thumb/d/dc/HairDress01SMM.png/58px-HairDress01SMM.png) */
		S_M_M_HAIRDRESS_01 = 0x418dff92,
		/** ![a_c_sharkhammer](https://wiki.rage.mp//images/thumb/e/e1/HammerShark.png/120px-HammerShark.png) */
		A_C_SHARKHAMMER = 0x3c831724,
		/** ![ig_hao](https://wiki.rage.mp//images/thumb/c/cd/Hao.png/58px-Hao.png) */
		IG_HAO = 0x65978363,
		/** ![csb_hao](https://wiki.rage.mp//images/thumb/2/25/HaoCutscene.png/58px-HaoCutscene.png) */
		CSB_HAO = 0xec9e8f1c,
		/** ![a_m_m_hasjew_01](https://wiki.rage.mp//images/thumb/1/1a/HasJew01AMM.png/58px-HasJew01AMM.png) */
		A_M_M_HASJEW_01 = 0x6bd9b68c,
		/** ![a_m_y_hasjew_01](https://wiki.rage.mp//images/thumb/a/a7/HasJew01AMY.png/58px-HasJew01AMY.png) */
		A_M_Y_HASJEW_01 = 0xe16d8f01,
		/** ![a_c_hen](https://wiki.rage.mp//images/thumb/f/f1/Hen.png/100px-Hen.png) */
		A_C_HEN = 0x6af51faf,
		/** ![s_m_m_highsec_01](https://wiki.rage.mp//images/thumb/1/11/HighSec01SMM.png/58px-HighSec01SMM.png) */
		S_M_M_HIGHSEC_01 = 0xf161d212,
		/** ![s_m_m_highsec_02](https://wiki.rage.mp//images/thumb/3/3b/HighSec02SMM.png/58px-HighSec02SMM.png) */
		S_M_M_HIGHSEC_02 = 0x2930c1ab,
		/** ![a_f_y_hiker_01](https://wiki.rage.mp//images/thumb/0/04/Hiker01AFY.png/58px-Hiker01AFY.png) */
		A_F_Y_HIKER_01 = 0x30830813,
		/** ![a_m_y_hiker_01](https://wiki.rage.mp//images/thumb/8/83/Hiker01AMY.png/58px-Hiker01AMY.png) */
		A_M_Y_HIKER_01 = 0x50f73c0c,
		/** ![a_m_m_hillbilly_01](https://wiki.rage.mp//images/thumb/c/c7/HillBilly01AMM.png/58px-HillBilly01AMM.png) */
		A_M_M_HILLBILLY_01 = 0x6c9b2849,
		/** ![a_m_m_hillbilly_02](https://wiki.rage.mp//images/thumb/8/8d/HillBilly02AMM.png/58px-HillBilly02AMM.png) */
		A_M_M_HILLBILLY_02 = 0x7b0e452f,
		/** ![u_m_y_hippie_01](https://wiki.rage.mp//images/thumb/b/b0/Hippie01.png/58px-Hippie01.png) */
		U_M_Y_HIPPIE_01 = 0xf041880b,
		/** ![a_f_y_hippie_01](https://wiki.rage.mp//images/thumb/a/a2/Hippie01AFY.png/58px-Hippie01AFY.png) */
		A_F_Y_HIPPIE_01 = 0x1475b827,
		/** ![a_m_y_hippy_01](https://wiki.rage.mp//images/thumb/b/b7/Hippy01AMY.png/58px-Hippy01AMY.png) */
		A_M_Y_HIPPY_01 = 0x7d03e617,
		/** ![a_f_y_hipster_01](https://wiki.rage.mp//images/thumb/1/12/Hipster01AFY.png/58px-Hipster01AFY.png) */
		A_F_Y_HIPSTER_01 = 0x8247d331,
		/** ![a_m_y_hipster_01](https://wiki.rage.mp//images/thumb/e/e5/Hipster01AMY.png/58px-Hipster01AMY.png) */
		A_M_Y_HIPSTER_01 = 0x2307a353,
		/** ![a_f_y_hipster_02](https://wiki.rage.mp//images/thumb/e/ea/Hipster02AFY.png/58px-Hipster02AFY.png) */
		A_F_Y_HIPSTER_02 = 0x97f5fe8d,
		/** ![a_m_y_hipster_02](https://wiki.rage.mp//images/thumb/4/46/Hipster02AMY.png/58px-Hipster02AMY.png) */
		A_M_Y_HIPSTER_02 = 0x14d506ee,
		/** ![a_f_y_hipster_03](https://wiki.rage.mp//images/thumb/9/9a/Hipster03AFY.png/58px-Hipster03AFY.png) */
		A_F_Y_HIPSTER_03 = 0xa5ba9a16,
		/** ![a_m_y_hipster_03](https://wiki.rage.mp//images/thumb/c/c2/Hipster03AMY.png/58px-Hipster03AMY.png) */
		A_M_Y_HIPSTER_03 = 0x4e4179c6,
		/** ![a_f_y_hipster_04](https://wiki.rage.mp//images/thumb/e/e9/Hipster04AFY.png/58px-Hipster04AFY.png) */
		A_F_Y_HIPSTER_04 = 0x199881dc,
		/** ![s_f_y_hooker_01](https://wiki.rage.mp//images/thumb/5/50/Hooker01SFY.png/58px-Hooker01SFY.png) */
		S_F_Y_HOOKER_01 = 0x028abf95,
		/** ![s_f_y_hooker_02](https://wiki.rage.mp//images/thumb/1/1b/Hooker02SFY.png/58px-Hooker02SFY.png) */
		S_F_Y_HOOKER_02 = 0x14c3e407,
		/** ![s_f_y_hooker_03](https://wiki.rage.mp//images/thumb/f/f2/Hooker03SFY.png/58px-Hooker03SFY.png) */
		S_F_Y_HOOKER_03 = 0x031640ac,
		/** ![u_f_y_hotposh_01](https://wiki.rage.mp//images/thumb/d/d2/HotPosh01.png/58px-HotPosh01.png) */
		U_F_Y_HOTPOSH_01 = 0x969b6dfe,
		/** ![csb_hugh](https://wiki.rage.mp//images/thumb/5/57/HughCutscene.png/58px-HughCutscene.png) */
		CSB_HUGH = 0x6f139b54,
		/** ![a_c_humpback](https://wiki.rage.mp//images/thumb/9/94/Humpback.png/120px-Humpback.png) */
		A_C_HUMPBACK = 0x471be4b2,
		/** ![ig_hunter](https://wiki.rage.mp//images/thumb/4/4b/Hunter.png/58px-Hunter.png) */
		IG_HUNTER = 0xce1324de,
		/** ![cs_hunter](https://wiki.rage.mp//images/thumb/2/2d/HunterCutscene.png/58px-HunterCutscene.png) */
		CS_HUNTER = 0x5b44892c,
		/** ![a_c_husky](https://wiki.rage.mp//images/thumb/5/50/Husky.png/74px-Husky.png) */
		A_C_HUSKY = 0x4e8f95a2,
		/** ![s_m_y_hwaycop_01](https://wiki.rage.mp//images/thumb/0/02/HWayCop01SMY.png/58px-HWayCop01SMY.png) */
		S_M_Y_HWAYCOP_01 = 0x739b1ef5,
		/** ![u_m_y_imporage](https://wiki.rage.mp//images/thumb/6/69/ImpoRage.png/58px-ImpoRage.png) */
		U_M_Y_IMPORAGE = 0x348065f5,
		/** ![csb_imran](https://wiki.rage.mp//images/thumb/b/b3/ImranCutscene.png/58px-ImranCutscene.png) */
		CSB_IMRAN = 0xe3420bdb,
		/** ![a_f_o_indian_01](https://wiki.rage.mp//images/thumb/7/77/Indian01AFO.png/58px-Indian01AFO.png) */
		A_F_O_INDIAN_01 = 0xbad7bb80,
		/** ![a_f_y_indian_01](https://wiki.rage.mp//images/thumb/6/6d/Indian01AFY.png/58px-Indian01AFY.png) */
		A_F_Y_INDIAN_01 = 0x092d9cc1,
		/** ![a_m_m_indian_01](https://wiki.rage.mp//images/thumb/d/db/Indian01AMM.png/58px-Indian01AMM.png) */
		A_M_M_INDIAN_01 = 0xddcaaa2c,
		/** ![a_m_y_indian_01](https://wiki.rage.mp//images/thumb/b/b2/Indian01AMY.png/58px-Indian01AMY.png) */
		A_M_Y_INDIAN_01 = 0x2a22fbce,
		/** ![csb_jackhowitzer](https://wiki.rage.mp//images/thumb/e/e4/JackHowitzerCutscene.png/58px-JackHowitzerCutscene.png) */
		CSB_JACKHOWITZER = 0x44bc7bb1,
		/** ![ig_janet](https://wiki.rage.mp//images/thumb/8/84/Janet.png/58px-Janet.png) */
		IG_JANET = 0x0d6d9c49,
		/** ![cs_janet](https://wiki.rage.mp//images/thumb/6/6b/JanetCutscene.png/58px-JanetCutscene.png) */
		CS_JANET = 0x3034f9e2,
		/** ![csb_janitor](https://wiki.rage.mp//images/thumb/2/26/JanitorCutscene.png/58px-JanitorCutscene.png) */
		CSB_JANITOR = 0xc2005a40,
		/** ![s_m_m_janitor](https://wiki.rage.mp//images/thumb/4/43/JanitorSMM.png/58px-JanitorSMM.png) */
		S_M_M_JANITOR = 0xa96bd9ec,
		/** ![ig_jay_norris](https://wiki.rage.mp//images/thumb/c/c4/JayNorris.png/58px-JayNorris.png) */
		IG_JAY_NORRIS = 0x7a32ee74,
		/** ![u_m_m_jesus_01](https://wiki.rage.mp//images/thumb/f/f1/Jesus01.png/58px-Jesus01.png) */
		U_M_M_JESUS_01 = 0xce2cb751,
		/** ![a_m_y_jetski_01](https://wiki.rage.mp//images/thumb/4/42/JetSki01AMY.png/58px-JetSki01AMY.png) */
		A_M_Y_JETSKI_01 = 0x2db7eef3,
		/** ![u_f_y_jewelass_01](https://wiki.rage.mp//images/thumb/1/1f/JewelAss01.png/58px-JewelAss01.png) */
		U_F_Y_JEWELASS_01 = 0xf0d4be2e,
		/** ![ig_jewelass](https://wiki.rage.mp//images/thumb/3/31/JewelAss.png/58px-JewelAss.png) */
		IG_JEWELASS = 0x0f5d26bb,
		/** ![cs_jewelass](https://wiki.rage.mp//images/thumb/9/94/JewelAssCutscene.png/58px-JewelAssCutscene.png) */
		CS_JEWELASS = 0x4440a804,
		/** ![u_m_m_jewelsec_01](https://wiki.rage.mp//images/thumb/3/39/JewelSec01.png/58px-JewelSec01.png) */
		U_M_M_JEWELSEC_01 = 0xacccbdb6,
		/** ![u_m_m_jewelthief](https://wiki.rage.mp//images/thumb/b/b8/JewelThief.png/58px-JewelThief.png) */
		U_M_M_JEWELTHIEF = 0xe6cc3cdc,
		/** ![ig_jimmyboston](https://wiki.rage.mp//images/thumb/9/9c/JimmyBoston.png/58px-JimmyBoston.png) */
		IG_JIMMYBOSTON = 0xeda0082d,
		/** ![cs_jimmyboston](https://wiki.rage.mp//images/thumb/2/25/JimmyBostonCutscene.png/58px-JimmyBostonCutscene.png) */
		CS_JIMMYBOSTON = 0x039677bd,
		/** ![ig_jimmydisanto](https://wiki.rage.mp//images/thumb/8/8a/JimmyDisanto.png/58px-JimmyDisanto.png) */
		IG_JIMMYDISANTO = 0x570462b9,
		/** ![cs_jimmydisanto](https://wiki.rage.mp//images/thumb/1/1d/JimmyDisantoCutscene.png/58px-JimmyDisantoCutscene.png) */
		CS_JIMMYDISANTO = 0xb8cc92b4,
		/** ![ig_joeminuteman](https://wiki.rage.mp//images/thumb/5/55/JoeMinuteman.png/58px-JoeMinuteman.png) */
		IG_JOEMINUTEMAN = 0xbe204c9b,
		/** ![cs_joeminuteman](https://wiki.rage.mp//images/thumb/a/a2/JoeMinutemanCutscene.png/58px-JoeMinutemanCutscene.png) */
		CS_JOEMINUTEMAN = 0xf09d5e29,
		/** ![ig_johnnyklebitz](https://wiki.rage.mp//images/thumb/3/38/JohnnyKlebitz.png/58px-JohnnyKlebitz.png) */
		IG_JOHNNYKLEBITZ = 0x87ca80ae,
		/** ![cs_johnnyklebitz](https://wiki.rage.mp//images/thumb/c/c1/JohnnyKlebitzCutscene.png/58px-JohnnyKlebitzCutscene.png) */
		CS_JOHNNYKLEBITZ = 0xfa8ab881,
		/** ![ig_josef](https://wiki.rage.mp//images/thumb/4/43/Josef.png/58px-Josef.png) */
		IG_JOSEF = 0xe11a9fb4,
		/** ![cs_josef](https://wiki.rage.mp//images/thumb/f/fe/JosefCutscene.png/58px-JosefCutscene.png) */
		CS_JOSEF = 0x459762ca,
		/** ![ig_josh](https://wiki.rage.mp//images/thumb/c/cf/Josh.png/58px-Josh.png) */
		IG_JOSH = 0x799e9eee,
		/** ![cs_josh](https://wiki.rage.mp//images/thumb/2/20/JoshCutscene.png/58px-JoshCutscene.png) */
		CS_JOSH = 0x450eef9d,
		/** ![a_f_y_juggalo_01](https://wiki.rage.mp//images/thumb/f/fb/Juggalo01AFY.png/58px-Juggalo01AFY.png) */
		A_F_Y_JUGGALO_01 = 0xdb134533,
		/** ![a_m_y_juggalo_01](https://wiki.rage.mp//images/thumb/2/2c/Juggalo01AMY.png/58px-Juggalo01AMY.png) */
		A_M_Y_JUGGALO_01 = 0x91ca3e2c,
		/** ![u_m_y_justin](https://wiki.rage.mp//images/thumb/2/20/Justin.png/58px-Justin.png) */
		U_M_Y_JUSTIN = 0x7dc3908f,
		/** ![ig_karen_daniels](https://wiki.rage.mp//images/thumb/8/8e/KarenDaniels.png/58px-KarenDaniels.png) */
		IG_KAREN_DANIELS = 0xeb51d959,
		/** ![cs_karen_daniels](https://wiki.rage.mp//images/thumb/6/65/KarenDanielsCutscene.png/58px-KarenDanielsCutscene.png) */
		CS_KAREN_DANIELS = 0x4baf381c,
		/** ![ig_kerrymcintosh](https://wiki.rage.mp//images/thumb/b/b9/KerryMcintosh.png/58px-KerryMcintosh.png) */
		IG_KERRYMCINTOSH = 0x5b3bd90d,
		/** ![a_c_killerwhale](https://wiki.rage.mp//images/thumb/4/48/KillerWhale.png/120px-KillerWhale.png) */
		A_C_KILLERWHALE = 0x8d8ac8b9,
		/** ![g_m_m_korboss_01](https://wiki.rage.mp//images/thumb/6/65/KorBoss01GMM.png/58px-KorBoss01GMM.png) */
		G_M_M_KORBOSS_01 = 0x352a026f,
		/** ![g_m_y_korean_01](https://wiki.rage.mp//images/thumb/8/89/Korean01GMY.png/58px-Korean01GMY.png) */
		G_M_Y_KOREAN_01 = 0x247502a9,
		/** ![g_m_y_korean_02](https://wiki.rage.mp//images/thumb/0/0d/Korean02GMY.png/58px-Korean02GMY.png) */
		G_M_Y_KOREAN_02 = 0x8fedd989,
		/** ![g_m_y_korlieut_01](https://wiki.rage.mp//images/thumb/9/91/KorLieut01GMY.png/58px-KorLieut01GMY.png) */
		G_M_Y_KORLIEUT_01 = 0x7ccbe17a,
		/** ![a_f_m_ktown_01](https://wiki.rage.mp//images/thumb/3/3b/KTown01AFM.png/58px-KTown01AFM.png) */
		A_F_M_KTOWN_01 = 0x52c824de,
		/** ![a_f_o_ktown_01](https://wiki.rage.mp//images/thumb/d/d4/KTown01AFO.png/58px-KTown01AFO.png) */
		A_F_O_KTOWN_01 = 0x47cf5e96,
		/** ![a_m_m_ktown_01](https://wiki.rage.mp//images/thumb/2/20/KTown01AMM.png/58px-KTown01AMM.png) */
		A_M_M_KTOWN_01 = 0xd15d7e71,
		/** ![a_m_o_ktown_01](https://wiki.rage.mp//images/thumb/3/38/KTown01AMO.png/58px-KTown01AMO.png) */
		A_M_O_KTOWN_01 = 0x1536d95a,
		/** ![a_m_y_ktown_01](https://wiki.rage.mp//images/thumb/7/79/KTown01AMY.png/58px-KTown01AMY.png) */
		A_M_Y_KTOWN_01 = 0x1af6542c,
		/** ![a_f_m_ktown_02](https://wiki.rage.mp//images/thumb/2/25/KTown02AFM.png/58px-KTown02AFM.png) */
		A_F_M_KTOWN_02 = 0x41018151,
		/** ![a_m_y_ktown_02](https://wiki.rage.mp//images/thumb/8/8c/KTown02AMY.png/58px-KTown02AMY.png) */
		A_M_Y_KTOWN_02 = 0x297ff13f,
		/** ![ig_lamardavis](https://wiki.rage.mp//images/thumb/c/ca/LamarDavis.png/58px-LamarDavis.png) */
		IG_LAMARDAVIS = 0x65b93076,
		/** ![cs_lamardavis](https://wiki.rage.mp//images/thumb/3/3f/LamarDavisCutscene.png/58px-LamarDavisCutscene.png) */
		CS_LAMARDAVIS = 0x45463a0d,
		/** ![s_m_m_lathandy_01](https://wiki.rage.mp//images/thumb/d/dd/Lathandy01SMM.png/58px-Lathandy01SMM.png) */
		S_M_M_LATHANDY_01 = 0x9e80d2ce,
		/** ![a_m_y_latino_01](https://wiki.rage.mp//images/thumb/e/ee/Latino01AMY.png/58px-Latino01AMY.png) */
		A_M_Y_LATINO_01 = 0x132c1a8e,
		/** ![ig_lazlow](https://wiki.rage.mp//images/thumb/c/c8/Lazlow.png/58px-Lazlow.png) */
		IG_LAZLOW = 0xdfe443e5,
		/** ![cs_lazlow](https://wiki.rage.mp//images/thumb/c/c7/LazlowCutscene.png/58px-LazlowCutscene.png) */
		CS_LAZLOW = 0x38951a1b,
		/** ![ig_lestercrest](https://wiki.rage.mp//images/thumb/f/f0/LesterCrest.png/58px-LesterCrest.png) */
		IG_LESTERCREST = 0x4da6e849,
		/** ![cs_lestercrest](https://wiki.rage.mp//images/thumb/8/8c/LesterCrestCutscene.png/58px-LesterCrestCutscene.png) */
		CS_LESTERCREST = 0xb594f5c3,
		/** ![ig_lifeinvad_01](https://wiki.rage.mp//images/thumb/d/df/LifeInvad01.png/58px-LifeInvad01.png) */
		IG_LIFEINVAD_01 = 0x5389a93c,
		/** ![cs_lifeinvad_01](https://wiki.rage.mp//images/thumb/7/7e/LifeInvad01Cutscene.png/58px-LifeInvad01Cutscene.png) */
		CS_LIFEINVAD_01 = 0x72551375,
		/** ![s_m_m_lifeinvad_01](https://wiki.rage.mp//images/thumb/4/4f/LifeInvad01SMM.png/58px-LifeInvad01SMM.png) */
		S_M_M_LIFEINVAD_01 = 0xde0077fd,
		/** ![ig_lifeinvad_02](https://wiki.rage.mp//images/thumb/7/7c/LifeInvad02.png/58px-LifeInvad02.png) */
		IG_LIFEINVAD_02 = 0x27bd51d4,
		/** ![s_m_m_linecook](https://wiki.rage.mp//images/thumb/5/52/LineCookSMM.png/58px-LineCookSMM.png) */
		S_M_M_LINECOOK = 0xdb9c0997,
		/** ![g_f_y_lost_01](https://wiki.rage.mp//images/thumb/2/2b/Lost01GFY.png/58px-Lost01GFY.png) */
		G_F_Y_LOST_01 = 0xfd5537de,
		/** ![g_m_y_lost_01](https://wiki.rage.mp//images/thumb/3/36/Lost01GMY.png/58px-Lost01GMY.png) */
		G_M_Y_LOST_01 = 0x4f46d607,
		/** ![g_m_y_lost_02](https://wiki.rage.mp//images/thumb/f/f5/Lost02GMY.png/58px-Lost02GMY.png) */
		G_M_Y_LOST_02 = 0x3d843282,
		/** ![g_m_y_lost_03](https://wiki.rage.mp//images/thumb/f/f5/Lost03GMY.png/58px-Lost03GMY.png) */
		G_M_Y_LOST_03 = 0x32b11cdc,
		/** ![s_m_m_lsmetro_01](https://wiki.rage.mp//images/thumb/6/66/LSMetro01SMM.png/58px-LSMetro01SMM.png) */
		S_M_M_LSMETRO_01 = 0x765aaae4,
		/** ![ig_magenta](https://wiki.rage.mp//images/thumb/f/f1/Magenta.png/58px-Magenta.png) */
		IG_MAGENTA = 0xfcdc910a,
		/** ![cs_magenta](https://wiki.rage.mp//images/thumb/d/d1/MagentaCutscene.png/58px-MagentaCutscene.png) */
		CS_MAGENTA = 0x5816c61a,
		/** ![s_f_m_maid_01](https://wiki.rage.mp//images/thumb/6/66/Maid01SFM.png/58px-Maid01SFM.png) */
		S_F_M_MAID_01 = 0xe093c5c6,
		/** ![a_m_m_malibu_01](https://wiki.rage.mp//images/thumb/1/1d/Malibu01AMM.png/58px-Malibu01AMM.png) */
		A_M_M_MALIBU_01 = 0x2fde6eb7,
		/** ![u_m_y_mani](https://wiki.rage.mp//images/thumb/e/eb/Mani.png/58px-Mani.png) */
		U_M_Y_MANI = 0xc8bb1e52,
		/** ![ig_manuel](https://wiki.rage.mp//images/thumb/2/2b/Manuel.png/58px-Manuel.png) */
		IG_MANUEL = 0xfd418e10,
		/** ![cs_manuel](https://wiki.rage.mp//images/thumb/f/f8/ManuelCutscene.png/58px-ManuelCutscene.png) */
		CS_MANUEL = 0xfbb374ca,
		/** ![s_m_m_mariachi_01](https://wiki.rage.mp//images/thumb/8/8b/Mariachi01SMM.png/58px-Mariachi01SMM.png) */
		S_M_M_MARIACHI_01 = 0x7ea4ffa6,
		/** ![s_m_m_marine_01](https://wiki.rage.mp//images/thumb/1/10/Marine01SMM.png/58px-Marine01SMM.png) */
		S_M_M_MARINE_01 = 0xf2daa2ed,
		/** ![s_m_y_marine_01](https://wiki.rage.mp//images/thumb/e/eb/Marine01SMY.png/58px-Marine01SMY.png) */
		S_M_Y_MARINE_01 = 0x65793043,
		/** ![s_m_m_marine_02](https://wiki.rage.mp//images/thumb/e/ed/Marine02SMM.png/58px-Marine02SMM.png) */
		S_M_M_MARINE_02 = 0xf0259d83,
		/** ![s_m_y_marine_02](https://wiki.rage.mp//images/thumb/e/e2/Marine02SMY.png/58px-Marine02SMY.png) */
		S_M_Y_MARINE_02 = 0x58d696fe,
		/** ![s_m_y_marine_03](https://wiki.rage.mp//images/thumb/4/45/Marine03SMY.png/58px-Marine03SMY.png) */
		S_M_Y_MARINE_03 = 0x72c0cad2,
		/** ![u_m_m_markfost](https://wiki.rage.mp//images/thumb/7/72/Markfost.png/58px-Markfost.png) */
		U_M_M_MARKFOST = 0x1c95cb0b,
		/** ![ig_marnie](https://wiki.rage.mp//images/thumb/5/52/Marnie.png/58px-Marnie.png) */
		IG_MARNIE = 0x188232d0,
		/** ![cs_marnie](https://wiki.rage.mp//images/thumb/8/88/MarnieCutscene.png/58px-MarnieCutscene.png) */
		CS_MARNIE = 0x574de134,
		/** ![mp_m_marston_01](https://wiki.rage.mp//images/thumb/8/8e/Marston01.png/58px-Marston01.png) */
		MP_M_MARSTON_01 = 0x38430167,
		/** ![cs_martinmadrazo](https://wiki.rage.mp//images/thumb/2/24/MartinMadrazo.png/58px-MartinMadrazo.png) */
		CS_MARTINMADRAZO = 0x43595670,
		/** ![ig_maryann](https://wiki.rage.mp//images/thumb/c/c7/Maryann.png/58px-Maryann.png) */
		IG_MARYANN = 0xa36f9806,
		/** ![cs_maryann](https://wiki.rage.mp//images/thumb/1/12/MaryannCutscene.png/58px-MaryannCutscene.png) */
		CS_MARYANN = 0x0998c7ad,
		/** ![ig_maude](https://wiki.rage.mp//images/thumb/b/b1/Maude.png/58px-Maude.png) */
		IG_MAUDE = 0x3be8287e,
		/** ![csb_maude](https://wiki.rage.mp//images/thumb/7/7b/MaudeCutscene.png/58px-MaudeCutscene.png) */
		CSB_MAUDE = 0xbcc475cb,
		/** ![csb_mweather](https://wiki.rage.mp//images/thumb/8/89/MerryWeatherCutscene.png/58px-MerryWeatherCutscene.png) */
		CSB_MWEATHER = 0x613e626c,
		/** ![a_m_y_methhead_01](https://wiki.rage.mp//images/thumb/e/ee/MethHead01AMY.png/58px-MethHead01AMY.png) */
		A_M_Y_METHHEAD_01 = 0x696be0a9,
		/** ![g_m_m_mexboss_01](https://wiki.rage.mp//images/thumb/1/1c/MexBoss01GMM.png/58px-MexBoss01GMM.png) */
		G_M_M_MEXBOSS_01 = 0x5761f4ad,
		/** ![g_m_m_mexboss_02](https://wiki.rage.mp//images/thumb/4/47/MexBoss02GMM.png/58px-MexBoss02GMM.png) */
		G_M_M_MEXBOSS_02 = 0x4914d813,
		/** ![a_m_m_mexcntry_01](https://wiki.rage.mp//images/thumb/7/76/MexCntry01AMM.png/58px-MexCntry01AMM.png) */
		A_M_M_MEXCNTRY_01 = 0xdd817ead,
		/** ![g_m_y_mexgang_01](https://wiki.rage.mp//images/thumb/a/a2/MexGang01GMY.png/58px-MexGang01GMY.png) */
		G_M_Y_MEXGANG_01 = 0xbddd5546,
		/** ![g_m_y_mexgoon_01](https://wiki.rage.mp//images/thumb/2/23/MexGoon01GMY.png/58px-MexGoon01GMY.png) */
		G_M_Y_MEXGOON_01 = 0x26ef3426,
		/** ![g_m_y_mexgoon_02](https://wiki.rage.mp//images/thumb/3/34/MexGoon02GMY.png/58px-MexGoon02GMY.png) */
		G_M_Y_MEXGOON_02 = 0x31a3498e,
		/** ![g_m_y_mexgoon_03](https://wiki.rage.mp//images/thumb/0/01/MexGoon03GMY.png/58px-MexGoon03GMY.png) */
		G_M_Y_MEXGOON_03 = 0x964d12dc,
		/** ![a_m_m_mexlabor_01](https://wiki.rage.mp//images/thumb/f/fd/MexLabor01AMM.png/58px-MexLabor01AMM.png) */
		A_M_M_MEXLABOR_01 = 0xb25d16b2,
		/** ![a_m_y_mexthug_01](https://wiki.rage.mp//images/thumb/d/da/Mexthug01AMY.png/58px-Mexthug01AMY.png) */
		A_M_Y_MEXTHUG_01 = 0x3053e555,
		/** ![player_zero](https://wiki.rage.mp//images/thumb/f/f3/Michael.png/58px-Michael.png) */
		PLAYER_ZERO = 0x0d7114c9,
		/** ![ig_michelle](https://wiki.rage.mp//images/thumb/9/9f/Michelle.png/58px-Michelle.png) */
		IG_MICHELLE = 0xbf9672f4,
		/** ![cs_michelle](https://wiki.rage.mp//images/thumb/4/40/MichelleCutscene.png/58px-MichelleCutscene.png) */
		CS_MICHELLE = 0x70aeb9c8,
		/** ![s_f_y_migrant_01](https://wiki.rage.mp//images/thumb/e/e3/Migrant01SFY.png/58px-Migrant01SFY.png) */
		S_F_Y_MIGRANT_01 = 0xd55b2bf5,
		/** ![s_m_m_migrant_01](https://wiki.rage.mp//images/thumb/7/7f/Migrant01SMM.png/58px-Migrant01SMM.png) */
		S_M_M_MIGRANT_01 = 0xed0ce4c6,
		/** ![u_m_y_militarybum](https://wiki.rage.mp//images/thumb/e/e2/MilitaryBum.png/58px-MilitaryBum.png) */
		U_M_Y_MILITARYBUM = 0x4705974a,
		/** ![ig_milton](https://wiki.rage.mp//images/thumb/8/84/Milton.png/58px-Milton.png) */
		IG_MILTON = 0xcb3059b2,
		/** ![cs_milton](https://wiki.rage.mp//images/thumb/9/9e/MiltonCutscene.png/58px-MiltonCutscene.png) */
		CS_MILTON = 0xb76a330f,
		/** ![s_m_y_mime](https://wiki.rage.mp//images/thumb/2/2d/MimeSMY.png/58px-MimeSMY.png) */
		S_M_Y_MIME = 0x3cdca742,
		/** ![u_f_m_miranda](https://wiki.rage.mp//images/thumb/1/1d/Miranda.png/58px-Miranda.png) */
		U_F_M_MIRANDA = 0x414fa27b,
		/** ![u_f_y_mistress](https://wiki.rage.mp//images/thumb/9/91/Mistress.png/58px-Mistress.png) */
		U_F_Y_MISTRESS = 0x5dca2528,
		/** ![mp_f_misty_01](https://wiki.rage.mp//images/thumb/f/f6/Misty01.png/58px-Misty01.png) */
		MP_F_MISTY_01 = 0xd128ff9d,
		/** ![ig_molly](https://wiki.rage.mp//images/thumb/0/04/Molly.png/58px-Molly.png) */
		IG_MOLLY = 0xaf03dde1,
		/** ![cs_molly](https://wiki.rage.mp//images/thumb/f/f3/MollyCutscene.png/58px-MollyCutscene.png) */
		CS_MOLLY = 0x45918e44,
		/** ![a_m_y_motox_01](https://wiki.rage.mp//images/thumb/f/fa/Motox01AMY.png/58px-Motox01AMY.png) */
		A_M_Y_MOTOX_01 = 0x64fdea7d,
		/** ![a_m_y_motox_02](https://wiki.rage.mp//images/thumb/d/dc/Motox02AMY.png/58px-Motox02AMY.png) */
		A_M_Y_MOTOX_02 = 0x77ac8fda,
		/** ![a_c_mtlion](https://wiki.rage.mp//images/thumb/c/ce/MountainLion.png/96px-MountainLion.png) */
		A_C_MTLION = 0x1250d7ba,
		/** ![s_m_m_movalien_01](https://wiki.rage.mp//images/thumb/3/32/MovAlien01.png/58px-MovAlien01.png) */
		S_M_M_MOVALIEN_01 = 0x64611296,
		/** ![cs_movpremf_01](https://wiki.rage.mp//images/thumb/8/8b/MoviePremFemaleCutscene.png/58px-MoviePremFemaleCutscene.png) */
		CS_MOVPREMF_01 = 0x4bba84d9,
		/** ![cs_movpremmale](https://wiki.rage.mp//images/thumb/0/00/MoviePremMaleCutscene.png/58px-MoviePremMaleCutscene.png) */
		CS_MOVPREMMALE = 0x8d67ee7d,
		/** ![u_f_o_moviestar](https://wiki.rage.mp//images/thumb/e/e7/MovieStar.png/58px-MovieStar.png) */
		U_F_O_MOVIESTAR = 0x35578634,
		/** ![s_f_y_movprem_01](https://wiki.rage.mp//images/thumb/5/5b/MovPrem01SFY.png/58px-MovPrem01SFY.png) */
		S_F_Y_MOVPREM_01 = 0x2300c816,
		/** ![s_m_m_movprem_01](https://wiki.rage.mp//images/thumb/8/80/MovPrem01SMM.png/58px-MovPrem01SMM.png) */
		S_M_M_MOVPREM_01 = 0xd85e6d28,
		/** ![s_m_m_movspace_01](https://wiki.rage.mp//images/thumb/6/6b/MovSpace01SMM.png/58px-MovSpace01SMM.png) */
		S_M_M_MOVSPACE_01 = 0xe7b31432,
		/** ![mp_g_m_pros_01](https://wiki.rage.mp//images/thumb/f/f9/MPros01.png/58px-MPros01.png) */
		MP_G_M_PROS_01 = 0x6c9dd7c9,
		/** ![ig_mrk](https://wiki.rage.mp//images/thumb/2/20/MrK.png/58px-MrK.png) */
		IG_MRK = 0xeddcab6d,
		/** ![cs_mrk](https://wiki.rage.mp//images/thumb/4/49/MrKCutscene.png/58px-MrKCutscene.png) */
		CS_MRK = 0xc3cc9a75,
		/** ![ig_mrsphillips](https://wiki.rage.mp//images/thumb/0/0b/MrsPhillips.png/58px-MrsPhillips.png) */
		IG_MRSPHILLIPS = 0x3862eea8,
		/** ![cs_mrsphillips](https://wiki.rage.mp//images/thumb/f/f1/MrsPhillipsCutscene.png/58px-MrsPhillipsCutscene.png) */
		CS_MRSPHILLIPS = 0xcbfda3cf,
		/** ![ig_mrs_thornhill](https://wiki.rage.mp//images/thumb/5/55/MrsThornhill.png/58px-MrsThornhill.png) */
		IG_MRS_THORNHILL = 0x1e04a96b,
		/** ![cs_mrs_thornhill](https://wiki.rage.mp//images/thumb/e/e4/MrsThornhillCutscene.png/58px-MrsThornhillCutscene.png) */
		CS_MRS_THORNHILL = 0x4f921e6e,
		/** ![a_m_y_musclbeac_01](https://wiki.rage.mp//images/thumb/2/2f/MuscBeac01AMY.png/58px-MuscBeac01AMY.png) */
		A_M_Y_MUSCLBEAC_01 = 0x4b652906,
		/** ![a_m_y_musclbeac_02](https://wiki.rage.mp//images/thumb/d/da/MusclBeac02AMY.png/58px-MusclBeac02AMY.png) */
		A_M_Y_MUSCLBEAC_02 = 0xc923247c,
		/** ![ig_natalia](https://wiki.rage.mp//images/thumb/8/82/Natalia.png/58px-Natalia.png) */
		IG_NATALIA = 0xde17dd3b,
		/** ![cs_natalia](https://wiki.rage.mp//images/thumb/b/b7/NataliaCutscene.png/58px-NataliaCutscene.png) */
		CS_NATALIA = 0x4efeb1f0,
		/** ![ig_nervousron](https://wiki.rage.mp//images/thumb/b/b2/NervousRon.png/58px-NervousRon.png) */
		IG_NERVOUSRON = 0xbd006af1,
		/** ![cs_nervousron](https://wiki.rage.mp//images/thumb/5/5c/NervousRonCutscene.png/58px-NervousRonCutscene.png) */
		CS_NERVOUSRON = 0x7896da94,
		/** ![ig_nigel](https://wiki.rage.mp//images/thumb/7/7f/Nigel.png/58px-Nigel.png) */
		IG_NIGEL = 0xc8b7167d,
		/** ![cs_nigel](https://wiki.rage.mp//images/thumb/a/a7/NigelCutscene.png/58px-NigelCutscene.png) */
		CS_NIGEL = 0xe1479c0b,
		/** ![mp_m_niko_01](https://wiki.rage.mp//images/thumb/5/5b/Niko01.png/58px-Niko01.png) */
		MP_M_NIKO_01 = 0xeedacfc9,
		/** ![a_m_m_og_boss_01](https://wiki.rage.mp//images/thumb/4/46/OGBoss01AMM.png/58px-OGBoss01AMM.png) */
		A_M_M_OG_BOSS_01 = 0x681bd012,
		/** ![ig_old_man1a](https://wiki.rage.mp//images/thumb/6/6c/OldMan1A.png/58px-OldMan1A.png) */
		IG_OLD_MAN1A = 0x719d27f4,
		/** ![cs_old_man1a](https://wiki.rage.mp//images/thumb/c/cf/OldMan1aCutscene.png/58px-OldMan1aCutscene.png) */
		CS_OLD_MAN1A = 0x1eec7bdc,
		/** ![ig_old_man2](https://wiki.rage.mp//images/thumb/d/d5/OldMan2.png/58px-OldMan2.png) */
		IG_OLD_MAN2 = 0xef154c47,
		/** ![cs_old_man2](https://wiki.rage.mp//images/thumb/0/05/OldMan2Cutscene.png/58px-OldMan2Cutscene.png) */
		CS_OLD_MAN2 = 0x98f9e770,
		/** ![ig_omega](https://wiki.rage.mp//images/thumb/b/b2/Omega.png/58px-Omega.png) */
		IG_OMEGA = 0x60e6a7d8,
		/** ![cs_omega](https://wiki.rage.mp//images/thumb/1/11/OmegaCutscene.png/58px-OmegaCutscene.png) */
		CS_OMEGA = 0x8b70b405,
		/** ![ig_oneil](https://wiki.rage.mp//images/thumb/6/6b/Oneil.png/58px-Oneil.png) */
		IG_ONEIL = 0x2dc6d3e7,
		/** ![ig_orleans](https://wiki.rage.mp//images/thumb/7/7e/Orleans.png/58px-Orleans.png) */
		IG_ORLEANS = 0x61d4c771,
		/** ![cs_orleans](https://wiki.rage.mp//images/thumb/c/cb/OrleansCutscene.png/58px-OrleansCutscene.png) */
		CS_ORLEANS = 0xad340f5a,
		/** ![ig_ortega](https://wiki.rage.mp//images/thumb/3/3b/Ortega.png/58px-Ortega.png) */
		IG_ORTEGA = 0x26a562b7,
		/** ![csb_ortega](https://wiki.rage.mp//images/thumb/4/4b/OrtegaCutscene.png/58px-OrtegaCutscene.png) */
		CSB_ORTEGA = 0xc0db04cf,
		/** ![csb_oscar](https://wiki.rage.mp//images/thumb/a/a8/OscarCutscene.png/58px-OscarCutscene.png) */
		CSB_OSCAR = 0xf41f399b,
		/** ![ig_paige](https://wiki.rage.mp//images/thumb/2/2f/Paige.png/58px-Paige.png) */
		IG_PAIGE = 0x154fcf3f,
		/** ![csb_paige](https://wiki.rage.mp//images/thumb/8/88/PaigeCutscene.png/58px-PaigeCutscene.png) */
		CSB_PAIGE = 0x5b1fa0c3,
		/** ![a_m_m_paparazzi_01](https://wiki.rage.mp//images/thumb/f/f9/Paparazzi01AMM.png/58px-Paparazzi01AMM.png) */
		A_M_M_PAPARAZZI_01 = 0xecca8c15,
		/** ![u_m_y_paparazzi](https://wiki.rage.mp//images/thumb/7/7d/Paparazzi.png/58px-Paparazzi.png) */
		U_M_Y_PAPARAZZI = 0x5048b328,
		/** ![ig_paper](https://wiki.rage.mp//images/thumb/b/b2/Paper.png/58px-Paper.png) */
		IG_PAPER = 0x999b00c6,
		/** ![cs_paper](https://wiki.rage.mp//images/thumb/3/36/PaperCutscene.png/58px-PaperCutscene.png) */
		CS_PAPER = 0x6b38b8f8,
		/** ![s_m_m_paramedic_01](https://wiki.rage.mp//images/thumb/a/a4/Paramedic01SMM.png/58px-Paramedic01SMM.png) */
		S_M_M_PARAMEDIC_01 = 0xb353629e,
		/** ![u_m_y_party_01](https://wiki.rage.mp//images/thumb/7/7f/Party01.png/58px-Party01.png) */
		U_M_Y_PARTY_01 = 0x36e70600,
		/** ![u_m_m_partytarget](https://wiki.rage.mp//images/thumb/a/aa/PartyTarget.png/58px-PartyTarget.png) */
		U_M_M_PARTYTARGET = 0x81f74de7,
		/** ![ig_patricia](https://wiki.rage.mp//images/thumb/1/1e/Patricia.png/58px-Patricia.png) */
		IG_PATRICIA = 0xc56e118c,
		/** ![cs_patricia](https://wiki.rage.mp//images/thumb/f/ff/PatriciaCutscene.png/58px-PatriciaCutscene.png) */
		CS_PATRICIA = 0xdf8b1301,
		/** ![s_m_y_pestcont_01](https://wiki.rage.mp//images/thumb/5/55/PestCont01SMY.png/58px-PestCont01SMY.png) */
		S_M_Y_PESTCONT_01 = 0x48114518,
		/** ![hc_driver](https://wiki.rage.mp//images/thumb/8/8b/PestContDriver.png/58px-PestContDriver.png) */
		HC_DRIVER = 0x3b474adf,
		/** ![hc_gunman](https://wiki.rage.mp//images/thumb/1/1b/PestContGunman.png/58px-PestContGunman.png) */
		HC_GUNMAN = 0x0b881aee,
		/** ![a_c_pig](https://wiki.rage.mp//images/thumb/3/30/Pig.png/75px-Pig.png) */
		A_C_PIG = 0xb11bab56,
		/** ![a_c_pigeon](https://wiki.rage.mp//images/thumb/9/9e/Pigeon.png/83px-Pigeon.png) */
		A_C_PIGEON = 0x06a20728,
		/** ![s_m_m_pilot_01](https://wiki.rage.mp//images/thumb/2/26/Pilot01SMM.png/58px-Pilot01SMM.png) */
		S_M_M_PILOT_01 = 0xe75b4b1c,
		/** ![s_m_y_pilot_01](https://wiki.rage.mp//images/thumb/6/65/Pilot01SMY.png/58px-Pilot01SMY.png) */
		S_M_Y_PILOT_01 = 0xab300c07,
		/** ![s_m_m_pilot_02](https://wiki.rage.mp//images/thumb/a/a4/Pilot02SMM.png/58px-Pilot02SMM.png) */
		S_M_M_PILOT_02 = 0xf63de8e1,
		/** ![u_m_y_pogo_01](https://wiki.rage.mp//images/thumb/3/3a/Pogo01.png/58px-Pogo01.png) */
		U_M_Y_POGO_01 = 0xdc59940d,
		/** ![g_m_y_pologoon_01](https://wiki.rage.mp//images/thumb/9/9e/PoloGoon01GMY.png/58px-PoloGoon01GMY.png) */
		G_M_Y_POLOGOON_01 = 0x4f3fba06,
		/** ![g_m_y_pologoon_02](https://wiki.rage.mp//images/thumb/f/f7/PoloGoon02GMY.png/58px-PoloGoon02GMY.png) */
		G_M_Y_POLOGOON_02 = 0xa2e86156,
		/** ![a_m_m_polynesian_01](https://wiki.rage.mp//images/thumb/8/8e/Polynesian01AMM.png/58px-Polynesian01AMM.png) */
		A_M_M_POLYNESIAN_01 = 0xa9d9b69e,
		/** ![a_m_y_polynesian_01](https://wiki.rage.mp//images/thumb/7/71/Polynesian01AMY.png/58px-Polynesian01AMY.png) */
		A_M_Y_POLYNESIAN_01 = 0x8384fc9f,
		/** ![a_c_poodle](https://wiki.rage.mp//images/thumb/7/7d/Poodle.png/70px-Poodle.png) */
		A_C_POODLE = 0x431d501c,
		/** ![ig_popov](https://wiki.rage.mp//images/thumb/a/a9/Popov.png/58px-Popov.png) */
		IG_POPOV = 0x267630fe,
		/** ![csb_popov](https://wiki.rage.mp//images/thumb/e/e6/PopovCutscene.png/58px-PopovCutscene.png) */
		CSB_POPOV = 0x617d89e2,
		/** ![u_f_y_poppymich](https://wiki.rage.mp//images/thumb/7/78/PoppyMich.png/58px-PoppyMich.png) */
		U_F_Y_POPPYMICH = 0x23e9a09e,
		/** ![csb_porndudes](https://wiki.rage.mp//images/thumb/9/95/PornDudesCutscene.png/58px-PornDudesCutscene.png) */
		CSB_PORNDUDES = 0x2f4afe35,
		/** ![s_m_m_postal_01](https://wiki.rage.mp//images/thumb/2/23/Postal01SMM.png/58px-Postal01SMM.png) */
		S_M_M_POSTAL_01 = 0x62599034,
		/** ![s_m_m_postal_02](https://wiki.rage.mp//images/thumb/c/c1/Postal02SMM.png/58px-Postal02SMM.png) */
		S_M_M_POSTAL_02 = 0x7367324f,
		/** ![ig_priest](https://wiki.rage.mp//images/thumb/1/14/Priest.png/58px-Priest.png) */
		IG_PRIEST = 0x6437e77d,
		/** ![cs_priest](https://wiki.rage.mp//images/thumb/a/ac/PriestCutscene.png/58px-PriestCutscene.png) */
		CS_PRIEST = 0x4d6de57e,
		/** ![u_f_y_princess](https://wiki.rage.mp//images/thumb/f/f2/Princess.png/58px-Princess.png) */
		U_F_Y_PRINCESS = 0xd2e3a284,
		/** ![s_m_m_prisguard_01](https://wiki.rage.mp//images/thumb/6/6a/PrisGuard01SMM.png/58px-PrisGuard01SMM.png) */
		S_M_M_PRISGUARD_01 = 0x56c96fc6,
		/** ![s_m_y_prismuscl_01](https://wiki.rage.mp//images/thumb/7/79/PrisMuscl01SMY.png/58px-PrisMuscl01SMY.png) */
		S_M_Y_PRISMUSCL_01 = 0x5f2113a1,
		/** ![u_m_y_prisoner_01](https://wiki.rage.mp//images/thumb/a/a7/Prisoner01.png/58px-Prisoner01.png) */
		U_M_Y_PRISONER_01 = 0x7b9b4bc0,
		/** ![s_m_y_prisoner_01](https://wiki.rage.mp//images/thumb/e/eb/Prisoner01SMY.png/58px-Prisoner01SMY.png) */
		S_M_Y_PRISONER_01 = 0xb1bb9b59,
		/** ![u_m_y_proldriver_01](https://wiki.rage.mp//images/thumb/d/da/PrologueDriver.png/58px-PrologueDriver.png) */
		U_M_Y_PROLDRIVER_01 = 0x855e36a3,
		/** ![csb_prologuedriver](https://wiki.rage.mp//images/thumb/4/41/PrologueDriverCutscene.png/58px-PrologueDriverCutscene.png) */
		CSB_PROLOGUEDRIVER = 0xf00b49db,
		/** ![u_f_o_prolhost_01](https://wiki.rage.mp//images/thumb/1/14/PrologueHostage01.png/58px-PrologueHostage01.png) */
		U_F_O_PROLHOST_01 = 0xc512dd23,
		/** ![a_f_m_prolhost_01](https://wiki.rage.mp//images/thumb/8/8e/PrologueHostage01AFM.png/58px-PrologueHostage01AFM.png) */
		A_F_M_PROLHOST_01 = 0x169bd1e1,
		/** ![a_m_m_prolhost_01](https://wiki.rage.mp//images/thumb/d/dd/PrologueHostage01AMM.png/58px-PrologueHostage01AMM.png) */
		A_M_M_PROLHOST_01 = 0x9712c38f,
		/** ![u_f_m_promourn_01](https://wiki.rage.mp//images/thumb/3/37/PrologueMournFemale01.png/58px-PrologueMournFemale01.png) */
		U_F_M_PROMOURN_01 = 0xa20899e7,
		/** ![u_m_m_promourn_01](https://wiki.rage.mp//images/thumb/5/52/PrologueMournMale01.png/58px-PrologueMournMale01.png) */
		U_M_M_PROMOURN_01 = 0xce96030b,
		/** ![u_m_m_prolsec_01](https://wiki.rage.mp//images/thumb/2/2d/PrologueSec01.png/58px-PrologueSec01.png) */
		U_M_M_PROLSEC_01 = 0x709220c7,
		/** ![csb_prolsec](https://wiki.rage.mp//images/thumb/7/73/PrologueSec01Cutscene.png/58px-PrologueSec01Cutscene.png) */
		CSB_PROLSEC = 0x7fa2f024,
		/** ![ig_prolsec_02](https://wiki.rage.mp//images/thumb/1/10/PrologueSec02.png/58px-PrologueSec02.png) */
		IG_PROLSEC_02 = 0x27b3ad75,
		/** ![cs_prolsec_02](https://wiki.rage.mp//images/thumb/a/a2/PrologueSec02Cutscene.png/58px-PrologueSec02Cutscene.png) */
		CS_PROLSEC_02 = 0x1e9314a2,
		/** ![a_c_pug](https://wiki.rage.mp//images/thumb/2/21/Pug.png/77px-Pug.png) */
		A_C_PUG = 0x6d362854,
		/** ![a_c_rabbit_01](https://wiki.rage.mp//images/thumb/f/fd/Rabbit.png/87px-Rabbit.png) */
		A_C_RABBIT_01 = 0xdfb55c81,
		/** ![ig_ramp_gang](https://wiki.rage.mp//images/thumb/a/a2/RampGang.png/58px-RampGang.png) */
		IG_RAMP_GANG = 0xe52e126c,
		/** ![csb_ramp_gang](https://wiki.rage.mp//images/thumb/9/9a/RampGangCutscene.png/58px-RampGangCutscene.png) */
		CSB_RAMP_GANG = 0xc2800dbe,
		/** ![ig_ramp_hic](https://wiki.rage.mp//images/thumb/b/b3/RampHic.png/58px-RampHic.png) */
		IG_RAMP_HIC = 0x45753032,
		/** ![csb_ramp_hic](https://wiki.rage.mp//images/thumb/3/3a/RampHicCutscene.png/58px-RampHicCutscene.png) */
		CSB_RAMP_HIC = 0x858c94b8,
		/** ![ig_ramp_hipster](https://wiki.rage.mp//images/thumb/b/be/RampHipster.png/58px-RampHipster.png) */
		IG_RAMP_HIPSTER = 0xdeef9f6e,
		/** ![csb_ramp_hipster](https://wiki.rage.mp//images/thumb/0/04/RampHipsterCutscene.png/58px-RampHipsterCutscene.png) */
		CSB_RAMP_HIPSTER = 0x21f58bb4,
		/** ![csb_ramp_marine](https://wiki.rage.mp//images/thumb/f/f9/RampMarineCutscene.png/58px-RampMarineCutscene.png) */
		CSB_RAMP_MARINE = 0x616c97b9,
		/** ![ig_ramp_mex](https://wiki.rage.mp//images/thumb/d/d2/RampMex.png/58px-RampMex.png) */
		IG_RAMP_MEX = 0xe6ac74a4,
		/** ![csb_ramp_mex](https://wiki.rage.mp//images/thumb/b/b2/RampMexCutscene.png/58px-RampMexCutscene.png) */
		CSB_RAMP_MEX = 0xf64ed7d0,
		/** ![s_f_y_ranger_01](https://wiki.rage.mp//images/thumb/7/7b/Ranger01SFY.png/58px-Ranger01SFY.png) */
		S_F_Y_RANGER_01 = 0x9fc7f637,
		/** ![s_m_y_ranger_01](https://wiki.rage.mp//images/thumb/e/ee/Ranger01SMY.png/58px-Ranger01SMY.png) */
		S_M_Y_RANGER_01 = 0xef7135ae,
		/** ![ig_rashcosvki](https://wiki.rage.mp//images/thumb/6/6b/Rashkovsky.png/58px-Rashkovsky.png) */
		IG_RASHCOSVKI = 0x380c4de6,
		/** ![csb_rashcosvki](https://wiki.rage.mp//images/thumb/b/b9/RashkovskyCutscene.png/77px-RashkovskyCutscene.png) */
		CSB_RASHCOSVKI = 0x188099a9,
		/** ![a_c_rat](https://wiki.rage.mp//images/thumb/8/8b/Rat.png/75px-Rat.png) */
		A_C_RAT = 0xc3b52966,
		/** ![csb_reporter](https://wiki.rage.mp//images/thumb/7/77/ReporterCutscene.png/58px-ReporterCutscene.png) */
		CSB_REPORTER = 0x2e420a24,
		/** ![a_c_retriever](https://wiki.rage.mp//images/thumb/b/b1/Retriever.png/77px-Retriever.png) */
		A_C_RETRIEVER = 0x349f33e1,
		/** ![a_c_rhesus](https://wiki.rage.mp//images/thumb/b/b4/Rhesus.png/58px-Rhesus.png) */
		A_C_RHESUS = 0xc2d06f53,
		/** ![u_m_m_rivalpap](https://wiki.rage.mp//images/thumb/0/0f/RivalPaparazzi.png/58px-RivalPaparazzi.png) */
		U_M_M_RIVALPAP = 0x60d5d6da,
		/** ![a_m_y_roadcyc_01](https://wiki.rage.mp//images/thumb/6/66/RoadCyc01AMY.png/58px-RoadCyc01AMY.png) */
		A_M_Y_ROADCYC_01 = 0xf561a4c6,
		/** ![s_m_y_robber_01](https://wiki.rage.mp//images/thumb/9/92/Robber01SMY.png/58px-Robber01SMY.png) */
		S_M_Y_ROBBER_01 = 0xc05e1399,
		/** ![ig_roccopelosi](https://wiki.rage.mp//images/thumb/b/ba/RoccoPelosi.png/58px-RoccoPelosi.png) */
		IG_ROCCOPELOSI = 0xd5ba52ff,
		/** ![csb_roccopelosi](https://wiki.rage.mp//images/thumb/2/25/RoccoPelosiCutscene.png/58px-RoccoPelosiCutscene.png) */
		CSB_ROCCOPELOSI = 0xaa64168c,
		/** ![a_c_rottweiler](https://wiki.rage.mp//images/thumb/5/54/Rottweiler.png/89px-Rottweiler.png) */
		A_C_ROTTWEILER = 0x9563221d,
		/** ![u_m_y_rsranger_01](https://wiki.rage.mp//images/thumb/2/24/RsRanger01AMO.png/58px-RsRanger01AMO.png) */
		U_M_Y_RSRANGER_01 = 0x3c438cd2,
		/** ![a_f_y_runner_01](https://wiki.rage.mp//images/thumb/e/e2/Runner01AFY.png/58px-Runner01AFY.png) */
		A_F_Y_RUNNER_01 = 0xc7496729,
		/** ![a_m_y_runner_01](https://wiki.rage.mp//images/thumb/a/a7/Runner01AMY.png/58px-Runner01AMY.png) */
		A_M_Y_RUNNER_01 = 0x25305eee,
		/** ![a_m_y_runner_02](https://wiki.rage.mp//images/thumb/4/41/Runner02AMY.png/58px-Runner02AMY.png) */
		A_M_Y_RUNNER_02 = 0x843d9d0f,
		/** ![a_f_y_rurmeth_01](https://wiki.rage.mp//images/thumb/b/bc/RurMeth01AFY.png/58px-RurMeth01AFY.png) */
		A_F_Y_RURMETH_01 = 0x3f789426,
		/** ![a_m_m_rurmeth_01](https://wiki.rage.mp//images/thumb/7/72/RurMeth01AMM.png/58px-RurMeth01AMM.png) */
		A_M_M_RURMETH_01 = 0x3bad4184,
		/** ![ig_russiandrunk](https://wiki.rage.mp//images/thumb/f/fd/RussianDrunk.png/58px-RussianDrunk.png) */
		IG_RUSSIANDRUNK = 0x3d0a5eb1,
		/** ![cs_russiandrunk](https://wiki.rage.mp//images/thumb/1/13/RussianDrunkCutscene.png/58px-RussianDrunkCutscene.png) */
		CS_RUSSIANDRUNK = 0x46521a32,
		/** ![a_f_m_salton_01](https://wiki.rage.mp//images/thumb/d/dc/Salton01AFM.png/58px-Salton01AFM.png) */
		A_F_M_SALTON_01 = 0xde0e0969,
		/** ![a_f_o_salton_01](https://wiki.rage.mp//images/thumb/0/07/Salton01AFO.png/58px-Salton01AFO.png) */
		A_F_O_SALTON_01 = 0xccff7d8a,
		/** ![a_m_m_salton_01](https://wiki.rage.mp//images/thumb/f/f3/Salton01AMM.png/58px-Salton01AMM.png) */
		A_M_M_SALTON_01 = 0x4f2e038a,
		/** ![a_m_o_salton_01](https://wiki.rage.mp//images/thumb/d/d5/Salton01AMO.png/58px-Salton01AMO.png) */
		A_M_O_SALTON_01 = 0x20208e4d,
		/** ![a_m_y_salton_01](https://wiki.rage.mp//images/thumb/b/be/Salton01AMY.png/58px-Salton01AMY.png) */
		A_M_Y_SALTON_01 = 0xd7606c30,
		/** ![a_m_m_salton_02](https://wiki.rage.mp//images/thumb/a/a3/Salton02AMM.png/58px-Salton02AMM.png) */
		A_M_M_SALTON_02 = 0x60f4a717,
		/** ![a_m_m_salton_03](https://wiki.rage.mp//images/thumb/4/48/Salton03AMM.png/58px-Salton03AMM.png) */
		A_M_M_SALTON_03 = 0xb28c4a45,
		/** ![a_m_m_salton_04](https://wiki.rage.mp//images/thumb/8/8a/Salton04AMM.png/58px-Salton04AMM.png) */
		A_M_M_SALTON_04 = 0x964511b7,
		/** ![g_m_y_salvaboss_01](https://wiki.rage.mp//images/thumb/a/a3/SalvaBoss01GMY.png/58px-SalvaBoss01GMY.png) */
		G_M_Y_SALVABOSS_01 = 0x905ce0ca,
		/** ![g_m_y_salvagoon_01](https://wiki.rage.mp//images/thumb/9/9e/SalvaGoon01GMY.png/58px-SalvaGoon01GMY.png) */
		G_M_Y_SALVAGOON_01 = 0x278c8cb7,
		/** ![g_m_y_salvagoon_02](https://wiki.rage.mp//images/thumb/c/c9/SalvaGoon02GMY.png/58px-SalvaGoon02GMY.png) */
		G_M_Y_SALVAGOON_02 = 0x3273a285,
		/** ![g_m_y_salvagoon_03](https://wiki.rage.mp//images/thumb/2/2c/SalvaGoon03GMY.png/58px-SalvaGoon03GMY.png) */
		G_M_Y_SALVAGOON_03 = 0x03b8c510,
		/** ![u_m_y_sbike](https://wiki.rage.mp//images/thumb/c/ca/SBikeAMO.png/58px-SBikeAMO.png) */
		U_M_Y_SBIKE = 0x6af4185d,
		/** ![a_f_y_scdressy_01](https://wiki.rage.mp//images/thumb/c/c4/SCDressy01AFY.png/58px-SCDressy01AFY.png) */
		A_F_Y_SCDRESSY_01 = 0xdb5ec400,
		/** ![s_m_m_scientist_01](https://wiki.rage.mp//images/thumb/0/00/Scientist01SMM.png/58px-Scientist01SMM.png) */
		S_M_M_SCIENTIST_01 = 0x4117d39b,
		/** ![ig_screen_writer](https://wiki.rage.mp//images/thumb/1/15/ScreenWriter.png/58px-ScreenWriter.png) */
		IG_SCREEN_WRITER = 0xffe63677,
		/** ![csb_screen_writer](https://wiki.rage.mp//images/thumb/0/04/ScreenWriterCutscene.png/58px-ScreenWriterCutscene.png) */
		CSB_SCREEN_WRITER = 0x8be12cec,
		/** ![s_f_y_scrubs_01](https://wiki.rage.mp//images/thumb/9/98/Scrubs01SFY.png/58px-Scrubs01SFY.png) */
		S_F_Y_SCRUBS_01 = 0xab594ab6,
		/** ![a_c_seagull](https://wiki.rage.mp//images/thumb/9/9a/Seagull.png/82px-Seagull.png) */
		A_C_SEAGULL = 0xd3939dfd,
		/** ![s_m_m_security_01](https://wiki.rage.mp//images/thumb/7/79/Security01SMM.png/58px-Security01SMM.png) */
		S_M_M_SECURITY_01 = 0xd768b228,
		/** ![a_c_shepherd](https://wiki.rage.mp//images/thumb/8/80/Shepherd.png/76px-Shepherd.png) */
		A_C_SHEPHERD = 0x431fc24c,
		/** ![s_f_y_sheriff_01](https://wiki.rage.mp//images/thumb/2/21/Sheriff01SFY.png/58px-Sheriff01SFY.png) */
		S_F_Y_SHERIFF_01 = 0x4161d042,
		/** ![s_m_y_sheriff_01](https://wiki.rage.mp//images/thumb/8/84/Sheriff01SMY.png/58px-Sheriff01SMY.png) */
		S_M_Y_SHERIFF_01 = 0xb144f9b9,
		/** ![s_f_m_shop_high](https://wiki.rage.mp//images/thumb/d/da/ShopHighSFM.png/58px-ShopHighSFM.png) */
		S_F_M_SHOP_HIGH = 0xae47e4b0,
		/** ![mp_m_shopkeep_01](https://wiki.rage.mp//images/thumb/d/d2/ShopKeep01.png/58px-ShopKeep01.png) */
		MP_M_SHOPKEEP_01 = 0x18ce57d0,
		/** ![s_f_y_shop_low](https://wiki.rage.mp//images/thumb/d/dc/ShopLowSFY.png/58px-ShopLowSFY.png) */
		S_F_Y_SHOP_LOW = 0xa96e2604,
		/** ![s_m_y_shop_mask](https://wiki.rage.mp//images/thumb/b/bb/ShopMaskSMY.png/58px-ShopMaskSMY.png) */
		S_M_Y_SHOP_MASK = 0x6e122c06,
		/** ![s_f_y_shop_mid](https://wiki.rage.mp//images/thumb/e/e4/ShopMidSFY.png/58px-ShopMidSFY.png) */
		S_F_Y_SHOP_MID = 0x3eecba5d,
		/** ![ig_siemonyetarian](https://wiki.rage.mp//images/thumb/c/cb/SiemonYetarian.png/58px-SiemonYetarian.png) */
		IG_SIEMONYETARIAN = 0x4c7b2f05,
		/** ![cs_siemonyetarian](https://wiki.rage.mp//images/thumb/b/b1/SiemonYetarianCutscene.png/58px-SiemonYetarianCutscene.png) */
		CS_SIEMONYETARIAN = 0xc0937202,
		/** ![a_f_y_skater_01](https://wiki.rage.mp//images/thumb/e/ec/Skater01AFY.png/58px-Skater01AFY.png) */
		A_F_Y_SKATER_01 = 0x695fe666,
		/** ![a_m_m_skater_01](https://wiki.rage.mp//images/thumb/4/46/Skater01AMM.png/58px-Skater01AMM.png) */
		A_M_M_SKATER_01 = 0xd9d7588c,
		/** ![a_m_y_skater_01](https://wiki.rage.mp//images/thumb/2/23/Skater01AMY.png/58px-Skater01AMY.png) */
		A_M_Y_SKATER_01 = 0xc1c46677,
		/** ![a_m_y_skater_02](https://wiki.rage.mp//images/thumb/8/86/Skater02AMY.png/58px-Skater02AMY.png) */
		A_M_Y_SKATER_02 = 0xaffac2e4,
		/** ![a_f_m_skidrow_01](https://wiki.rage.mp//images/thumb/6/6c/Skidrow01AFM.png/58px-Skidrow01AFM.png) */
		A_F_M_SKIDROW_01 = 0xb097523b,
		/** ![a_m_m_skidrow_01](https://wiki.rage.mp//images/thumb/7/71/SkidRow01AMM.png/58px-SkidRow01AMM.png) */
		A_M_M_SKIDROW_01 = 0x01eea6bd,
		/** ![s_m_m_snowcop_01](https://wiki.rage.mp//images/thumb/7/79/SnowCop01SMM.png/58px-SnowCop01SMM.png) */
		S_M_M_SNOWCOP_01 = 0x1ae8bb58,
		/** ![a_m_m_socenlat_01](https://wiki.rage.mp//images/thumb/8/89/SoCenLat01AMM.png/58px-SoCenLat01AMM.png) */
		A_M_M_SOCENLAT_01 = 0x0b8d69e3,
		/** ![ig_solomon](https://wiki.rage.mp//images/thumb/8/89/Solomon.png/58px-Solomon.png) */
		IG_SOLOMON = 0x86bdfe26,
		/** ![cs_solomon](https://wiki.rage.mp//images/thumb/f/f6/SolomonCutscene.png/58px-SolomonCutscene.png) */
		CS_SOLOMON = 0xf6d1e04e,
		/** ![a_f_m_soucent_01](https://wiki.rage.mp//images/thumb/e/e1/SouCent01AFM.png/58px-SouCent01AFM.png) */
		A_F_M_SOUCENT_01 = 0x745855a1,
		/** ![a_f_o_soucent_01](https://wiki.rage.mp//images/thumb/0/08/SouCent01AFO.png/58px-SouCent01AFO.png) */
		A_F_O_SOUCENT_01 = 0x3dfa1830,
		/** ![a_f_y_soucent_01](https://wiki.rage.mp//images/thumb/9/9b/SouCent01AFY.png/58px-SouCent01AFY.png) */
		A_F_Y_SOUCENT_01 = 0x2c641d7a,
		/** ![a_m_m_soucent_01](https://wiki.rage.mp//images/thumb/3/3a/SouCent01AMM.png/58px-SouCent01AMM.png) */
		A_M_M_SOUCENT_01 = 0x6857c9b7,
		/** ![a_m_o_soucent_01](https://wiki.rage.mp//images/thumb/f/f9/SouCent01AMO.png/58px-SouCent01AMO.png) */
		A_M_O_SOUCENT_01 = 0x2ad8921b,
		/** ![a_m_y_soucent_01](https://wiki.rage.mp//images/thumb/c/c8/SouCent01AMY.png/58px-SouCent01AMY.png) */
		A_M_Y_SOUCENT_01 = 0xe716bdcb,
		/** ![a_f_m_soucent_02](https://wiki.rage.mp//images/thumb/4/46/SouCent02AFM.png/58px-SouCent02AFM.png) */
		A_F_M_SOUCENT_02 = 0xf322d338,
		/** ![a_f_o_soucent_02](https://wiki.rage.mp//images/thumb/3/39/SouCent02AFO.png/58px-SouCent02AFO.png) */
		A_F_O_SOUCENT_02 = 0xa56de716,
		/** ![a_f_y_soucent_02](https://wiki.rage.mp//images/thumb/1/16/SouCent02AFY.png/58px-SouCent02AFY.png) */
		A_F_Y_SOUCENT_02 = 0x5a8ef9cf,
		/** ![a_m_m_soucent_02](https://wiki.rage.mp//images/thumb/d/d2/SouCent02AMM.png/58px-SouCent02AMM.png) */
		A_M_M_SOUCENT_02 = 0x9f6d37e1,
		/** ![a_m_o_soucent_02](https://wiki.rage.mp//images/thumb/2/2a/SouCent02AMO.png/58px-SouCent02AMO.png) */
		A_M_O_SOUCENT_02 = 0x4086bd77,
		/** ![a_m_y_soucent_02](https://wiki.rage.mp//images/thumb/c/ca/SouCent02AMY.png/58px-SouCent02AMY.png) */
		A_M_Y_SOUCENT_02 = 0xaca3c8ca,
		/** ![a_f_y_soucent_03](https://wiki.rage.mp//images/thumb/c/c3/SouCent03AFY.png/58px-SouCent03AFY.png) */
		A_F_Y_SOUCENT_03 = 0x87b25415,
		/** ![a_m_m_soucent_03](https://wiki.rage.mp//images/thumb/d/d6/SouCent03AMM.png/58px-SouCent03AMM.png) */
		A_M_M_SOUCENT_03 = 0x8bd990ba,
		/** ![a_m_o_soucent_03](https://wiki.rage.mp//images/thumb/4/4e/SouCent03AMO.png/58px-SouCent03AMO.png) */
		A_M_O_SOUCENT_03 = 0x0e32d8d0,
		/** ![a_m_y_soucent_03](https://wiki.rage.mp//images/thumb/7/7e/SouCent03AMY.png/58px-SouCent03AMY.png) */
		A_M_Y_SOUCENT_03 = 0xc3f0f764,
		/** ![a_m_m_soucent_04](https://wiki.rage.mp//images/thumb/5/5d/SouCent04AMM.png/58px-SouCent04AMM.png) */
		A_M_M_SOUCENT_04 = 0xc2fbfefe,
		/** ![a_m_y_soucent_04](https://wiki.rage.mp//images/thumb/3/3a/SouCent04AMY.png/58px-SouCent04AMY.png) */
		A_M_Y_SOUCENT_04 = 0x8a3703f1,
		/** ![a_f_m_soucentmc_01](https://wiki.rage.mp//images/thumb/9/9d/SouCentMC01AFM.png/58px-SouCentMC01AFM.png) */
		A_F_M_SOUCENTMC_01 = 0xcde955d2,
		/** ![u_m_m_spyactor](https://wiki.rage.mp//images/thumb/0/04/SpyActor.png/58px-SpyActor.png) */
		U_M_M_SPYACTOR = 0xac0ea5d8,
		/** ![u_f_y_spyactress](https://wiki.rage.mp//images/thumb/a/a1/SpyActress.png/58px-SpyActress.png) */
		U_F_Y_SPYACTRESS = 0x5b81d86c,
		/** ![u_m_y_staggrm_01](https://wiki.rage.mp//images/thumb/8/8c/StagGrm01AMO.png/58px-StagGrm01AMO.png) */
		U_M_Y_STAGGRM_01 = 0x9194ce03,
		/** ![a_m_y_stbla_01](https://wiki.rage.mp//images/thumb/1/15/StBla01AMY.png/58px-StBla01AMY.png) */
		A_M_Y_STBLA_01 = 0xcf92ade9,
		/** ![a_m_y_stbla_02](https://wiki.rage.mp//images/thumb/6/60/Stbla02AMY.png/58px-Stbla02AMY.png) */
		A_M_Y_STBLA_02 = 0x98c7404f,
		/** ![ig_stevehains](https://wiki.rage.mp//images/thumb/2/22/SteveHain.png/58px-SteveHain.png) */
		IG_STEVEHAINS = 0x382121c8,
		/** ![cs_stevehains](https://wiki.rage.mp//images/thumb/c/c8/SteveHainsCutscene.png/58px-SteveHainsCutscene.png) */
		CS_STEVEHAINS = 0xa4e0a1fe,
		/** ![a_c_stingray](https://wiki.rage.mp//images/thumb/3/3a/Stingray.png/120px-Stingray.png) */
		A_C_STINGRAY = 0xa148614d,
		/** ![a_m_y_stlat_01](https://wiki.rage.mp//images/thumb/f/f5/StLat01AMY.png/58px-StLat01AMY.png) */
		A_M_Y_STLAT_01 = 0x8674d5fc,
		/** ![a_m_m_stlat_02](https://wiki.rage.mp//images/thumb/a/a0/StLat02AMM.png/58px-StLat02AMM.png) */
		A_M_M_STLAT_02 = 0xc2a87702,
		/** ![ig_stretch](https://wiki.rage.mp//images/thumb/3/36/Stretch_skin.png/58px-Stretch_skin.png) */
		IG_STRETCH = 0x36984358,
		/** ![cs_stretch](https://wiki.rage.mp//images/thumb/5/56/StretchCutscene.png/58px-StretchCutscene.png) */
		CS_STRETCH = 0x893d6805,
		/** ![csb_stripper_01](https://wiki.rage.mp//images/thumb/2/26/Stripper01Cutscene.png/58px-Stripper01Cutscene.png) */
		CSB_STRIPPER_01 = 0xaeea76b5,
		/** ![s_f_y_stripper_01](https://wiki.rage.mp//images/thumb/2/2b/Stripper01SFY.png/58px-Stripper01SFY.png) */
		S_F_Y_STRIPPER_01 = 0x52580019,
		/** ![csb_stripper_02](https://wiki.rage.mp//images/thumb/4/4f/Stripper02Cutscene.png/58px-Stripper02Cutscene.png) */
		CSB_STRIPPER_02 = 0x81441b71,
		/** ![s_f_y_stripper_02](https://wiki.rage.mp//images/thumb/4/41/Stripper02SFY.png/58px-Stripper02SFY.png) */
		S_F_Y_STRIPPER_02 = 0x6e0fb794,
		/** ![mp_f_stripperlite](https://wiki.rage.mp//images/thumb/a/a1/StripperLite.png/58px-StripperLite.png) */
		MP_F_STRIPPERLITE = 0x2970a494,
		/** ![s_f_y_stripperlite](https://wiki.rage.mp//images/thumb/d/dd/StripperLiteSFY.png/58px-StripperLiteSFY.png) */
		S_F_Y_STRIPPERLITE = 0x5c14edfa,
		/** ![s_m_m_strperf_01](https://wiki.rage.mp//images/thumb/4/4c/StrPerf01SMM.png/58px-StrPerf01SMM.png) */
		S_M_M_STRPERF_01 = 0x795ac7a8,
		/** ![s_m_m_strpreach_01](https://wiki.rage.mp//images/thumb/f/f9/StrPreach01SMM.png/58px-StrPreach01SMM.png) */
		S_M_M_STRPREACH_01 = 0x1c0077fb,
		/** ![g_m_y_strpunk_01](https://wiki.rage.mp//images/thumb/d/da/StrPunk01GMY.png/58px-StrPunk01GMY.png) */
		G_M_Y_STRPUNK_01 = 0xfd1c49bb,
		/** ![g_m_y_strpunk_02](https://wiki.rage.mp//images/thumb/f/ff/StrPunk02GMY.png/58px-StrPunk02GMY.png) */
		G_M_Y_STRPUNK_02 = 0x0da1eac6,
		/** ![s_m_m_strvend_01](https://wiki.rage.mp//images/thumb/b/b1/StrVend01SMM.png/58px-StrVend01SMM.png) */
		S_M_M_STRVEND_01 = 0xce9113a9,
		/** ![s_m_y_strvend_01](https://wiki.rage.mp//images/thumb/d/d5/StrVend01SMY.png/58px-StrVend01SMY.png) */
		S_M_Y_STRVEND_01 = 0x927f2323,
		/** ![a_m_y_stwhi_01](https://wiki.rage.mp//images/thumb/9/9d/StWhi01AMY.png/58px-StWhi01AMY.png) */
		A_M_Y_STWHI_01 = 0x2418c430,
		/** ![a_m_y_stwhi_02](https://wiki.rage.mp//images/thumb/3/38/StWhi02AMY.png/58px-StWhi02AMY.png) */
		A_M_Y_STWHI_02 = 0x36c6e98c,
		/** ![a_m_y_sunbathe_01](https://wiki.rage.mp//images/thumb/3/34/SunBathe01AMY.png/58px-SunBathe01AMY.png) */
		A_M_Y_SUNBATHE_01 = 0xb7292f0c,
		/** ![a_m_y_surfer_01](https://wiki.rage.mp//images/thumb/c/ca/Surfer01AMY.png/58px-Surfer01AMY.png) */
		A_M_Y_SURFER_01 = 0xeac2c7ee,
		/** ![s_m_y_swat_01](https://wiki.rage.mp//images/thumb/6/6c/SWAT01SMY.png/58px-SWAT01SMY.png) */
		S_M_Y_SWAT_01 = 0x8d8f1b10,
		/** ![s_f_m_sweatshop_01](https://wiki.rage.mp//images/thumb/2/21/SweatShop01SFM.png/58px-SweatShop01SFM.png) */
		S_F_M_SWEATSHOP_01 = 0x312b5bc0,
		/** ![s_f_y_sweatshop_01](https://wiki.rage.mp//images/thumb/d/d2/SweatShop01SFY.png/58px-SweatShop01SFY.png) */
		S_F_Y_SWEATSHOP_01 = 0x8502b6b2,
		/** ![ig_talina](https://wiki.rage.mp//images/thumb/1/14/Talina.png/58px-Talina.png) */
		IG_TALINA = 0xe793c8e8,
		/** ![ig_tanisha](https://wiki.rage.mp//images/thumb/3/3d/Tanisha.png/58px-Tanisha.png) */
		IG_TANISHA = 0x0d810489,
		/** ![cs_tanisha](https://wiki.rage.mp//images/thumb/0/05/TanishaCutscene.png/58px-TanishaCutscene.png) */
		CS_TANISHA = 0x42fe5370,
		/** ![ig_taocheng](https://wiki.rage.mp//images/thumb/f/ff/TaoCheng.png/58px-TaoCheng.png) */
		IG_TAOCHENG = 0xdc5c5ea5,
		/** ![cs_taocheng](https://wiki.rage.mp//images/thumb/d/d5/TaoChengCutscene.png/58px-TaoChengCutscene.png) */
		CS_TAOCHENG = 0x8864083d,
		/** ![ig_taostranslator](https://wiki.rage.mp//images/thumb/2/2a/TaosTranslator.png/58px-TaosTranslator.png) */
		IG_TAOSTRANSLATOR = 0x7c851464,
		/** ![cs_taostranslator](https://wiki.rage.mp//images/thumb/5/54/TaosTranslatorCutscene.png/58px-TaosTranslatorCutscene.png) */
		CS_TAOSTRANSLATOR = 0x53536529,
		/** ![u_m_o_taphillbilly](https://wiki.rage.mp//images/thumb/c/ce/TapHillBilly.png/58px-TapHillBilly.png) */
		U_M_O_TAPHILLBILLY = 0x9a1e5e52,
		/** ![u_m_y_tattoo_01](https://wiki.rage.mp//images/thumb/4/49/Tattoo01AMO.png/58px-Tattoo01AMO.png) */
		U_M_Y_TATTOO_01 = 0x94ae2b8c,
		/** ![a_f_y_tennis_01](https://wiki.rage.mp//images/thumb/a/ac/Tennis01AFY.png/72px-Tennis01AFY.png) */
		A_F_Y_TENNIS_01 = 0x550c79c6,
		/** ![a_m_m_tennis_01](https://wiki.rage.mp//images/thumb/0/08/Tennis01AMM.png/58px-Tennis01AMM.png) */
		A_M_M_TENNIS_01 = 0x546a5344,
		/** ![ig_tenniscoach](https://wiki.rage.mp//images/thumb/3/31/TennisCoach.png/58px-TennisCoach.png) */
		IG_TENNISCOACH = 0xa23b5f57,
		/** ![cs_tenniscoach](https://wiki.rage.mp//images/thumb/0/08/TennisCoachCutscene.png/58px-TennisCoachCutscene.png) */
		CS_TENNISCOACH = 0x5c26040a,
		/** ![ig_terry](https://wiki.rage.mp//images/thumb/1/1a/Terry.png/58px-Terry.png) */
		IG_TERRY = 0x67000b94,
		/** ![cs_terry](https://wiki.rage.mp//images/thumb/2/25/TerryCutscene.png/58px-TerryCutscene.png) */
		CS_TERRY = 0x3a5201c5,
		/** ![a_c_sharktiger](https://wiki.rage.mp//images/thumb/4/46/TigerShark.png/120px-TigerShark.png) */
		A_C_SHARKTIGER = 0x06c3f072,
		/** ![cs_tom](https://wiki.rage.mp//images/thumb/0/00/TomCutscene.png/58px-TomCutscene.png) */
		CS_TOM = 0x69e8abc3,
		/** ![ig_tomepsilon](https://wiki.rage.mp//images/thumb/1/15/TomEpsilon.png/58px-TomEpsilon.png) */
		IG_TOMEPSILON = 0xcd777aaa,
		/** ![cs_tomepsilon](https://wiki.rage.mp//images/thumb/c/cc/TomEpsilonCutscene.png/58px-TomEpsilonCutscene.png) */
		CS_TOMEPSILON = 0x8c0fd4e2,
		/** ![ig_tonya](https://wiki.rage.mp//images/thumb/a/a0/Tonya.png/58px-Tonya.png) */
		IG_TONYA = 0xcac85344,
		/** ![csb_tonya](https://wiki.rage.mp//images/thumb/d/da/TonyaCutscene.png/58px-TonyaCutscene.png) */
		CSB_TONYA = 0x6343dd19,
		/** ![a_f_y_topless_01](https://wiki.rage.mp//images/thumb/5/59/Topless01AFY.png/58px-Topless01AFY.png) */
		A_F_Y_TOPLESS_01 = 0x9cf26183,
		/** ![a_f_m_tourist_01](https://wiki.rage.mp//images/thumb/3/31/Tourist01AFM.png/58px-Tourist01AFM.png) */
		A_F_M_TOURIST_01 = 0x505603b9,
		/** ![a_f_y_tourist_01](https://wiki.rage.mp//images/thumb/6/6f/Tourist01AFY.png/58px-Tourist01AFY.png) */
		A_F_Y_TOURIST_01 = 0x563b8570,
		/** ![a_m_m_tourist_01](https://wiki.rage.mp//images/thumb/d/df/Tourist01AMM.png/58px-Tourist01AMM.png) */
		A_M_M_TOURIST_01 = 0xc89f0184,
		/** ![a_f_y_tourist_02](https://wiki.rage.mp//images/thumb/9/9b/Tourist02AFY.png/58px-Tourist02AFY.png) */
		A_F_Y_TOURIST_02 = 0x9123fb40,
		/** ![ig_tracydisanto](https://wiki.rage.mp//images/thumb/c/ce/TracyDisanto.png/58px-TracyDisanto.png) */
		IG_TRACYDISANTO = 0xde352a35,
		/** ![cs_tracydisanto](https://wiki.rage.mp//images/thumb/4/4c/TracyDisantoCutScene.png/58px-TracyDisantoCutScene.png) */
		CS_TRACYDISANTO = 0x0609b130,
		/** ![ig_trafficwarden](https://wiki.rage.mp//images/thumb/d/df/TrafficWarden.png/58px-TrafficWarden.png) */
		IG_TRAFFICWARDEN = 0x5719786d,
		/** ![csb_trafficwarden](https://wiki.rage.mp//images/thumb/f/f9/TrafficWardenCutscene.png/58px-TrafficWardenCutscene.png) */
		CSB_TRAFFICWARDEN = 0xde2937f3,
		/** ![u_m_o_tramp_01](https://wiki.rage.mp//images/thumb/f/f5/Tramp01.png/58px-Tramp01.png) */
		U_M_O_TRAMP_01 = 0x6a8f1f9b,
		/** ![a_f_m_tramp_01](https://wiki.rage.mp//images/thumb/7/73/Tramp01AFM.png/58px-Tramp01AFM.png) */
		A_F_M_TRAMP_01 = 0x48f96f5b,
		/** ![a_m_m_tramp_01](https://wiki.rage.mp//images/thumb/3/37/Tramp01AMM.png/58px-Tramp01AMM.png) */
		A_M_M_TRAMP_01 = 0x1ec93fd0,
		/** ![a_m_o_tramp_01](https://wiki.rage.mp//images/thumb/2/2f/Tramp01AMO.png/58px-Tramp01AMO.png) */
		A_M_O_TRAMP_01 = 0x174d4245,
		/** ![a_f_m_trampbeac_01](https://wiki.rage.mp//images/thumb/5/52/TrampBeac01AFM.png/58px-TrampBeac01AFM.png) */
		A_F_M_TRAMPBEAC_01 = 0x8ca0c266,
		/** ![a_m_m_trampbeac_01](https://wiki.rage.mp//images/thumb/3/3d/TrampBeac01AMM.png/58px-TrampBeac01AMM.png) */
		A_M_M_TRAMPBEAC_01 = 0x53b57eb0,
		/** ![a_m_m_tranvest_01](https://wiki.rage.mp//images/thumb/5/58/TranVest01AMM.png/58px-TranVest01AMM.png) */
		A_M_M_TRANVEST_01 = 0xe0e69974,
		/** ![a_m_m_tranvest_02](https://wiki.rage.mp//images/thumb/8/8b/TranVest02AMM.png/58px-TranVest02AMM.png) */
		A_M_M_TRANVEST_02 = 0xf70ec5c4,
		/** ![player_two](https://wiki.rage.mp//images/thumb/0/03/Trevor.png/58px-Trevor.png) */
		PLAYER_TWO = 0x9b810fa2,
		/** ![s_m_m_trucker_01](https://wiki.rage.mp//images/thumb/e/ed/Trucker01SMM.png/58px-Trucker01SMM.png) */
		S_M_M_TRUCKER_01 = 0x59511a6c,
		/** ![ig_tylerdix](https://wiki.rage.mp//images/thumb/1/1b/TylerDixon.png/58px-TylerDixon.png) */
		IG_TYLERDIX = 0x5265f707,
		/** ![csb_undercover](https://wiki.rage.mp//images/thumb/b/b7/UndercoverCopCutscene.png/58px-UndercoverCopCutscene.png) */
		CSB_UNDERCOVER = 0xef785a6a,
		/** ![s_m_m_ups_01](https://wiki.rage.mp//images/thumb/6/62/UPS01SMM.png/58px-UPS01SMM.png) */
		S_M_M_UPS_01 = 0x9fc37f22,
		/** ![s_m_m_ups_02](https://wiki.rage.mp//images/thumb/0/0f/UPS02SMM.png/58px-UPS02SMM.png) */
		S_M_M_UPS_02 = 0xd0bde116,
		/** ![s_m_y_uscg_01](https://wiki.rage.mp//images/thumb/4/45/USCG01SMY.png/58px-USCG01SMY.png) */
		S_M_Y_USCG_01 = 0xca0050e9,
		/** ![g_f_y_vagos_01](https://wiki.rage.mp//images/thumb/9/90/Vagos01GFY.png/58px-Vagos01GFY.png) */
		G_F_Y_VAGOS_01 = 0x5aa42c21,
		/** ![mp_m_g_vagfun_01](https://wiki.rage.mp//images/thumb/8/85/VagosFun01.png/58px-VagosFun01.png) */
		MP_M_G_VAGFUN_01 = 0xc4a617bd,
		/** ![ig_vagspeak](https://wiki.rage.mp//images/thumb/d/dc/VagosSpeak.png/58px-VagosSpeak.png) */
		IG_VAGSPEAK = 0xf9fd068c,
		/** ![csb_vagspeak](https://wiki.rage.mp//images/thumb/a/a9/VagosSpeakCutscene.png/58px-VagosSpeakCutscene.png) */
		CSB_VAGSPEAK = 0x48ff4ca9,
		/** ![s_m_y_valet_01](https://wiki.rage.mp//images/thumb/d/d2/Valet01SMY.png/58px-Valet01SMY.png) */
		S_M_Y_VALET_01 = 0x3b96f23e,
		/** ![a_m_y_vindouche_01](https://wiki.rage.mp//images/thumb/c/c2/VinDouche01AMY.png/58px-VinDouche01AMY.png) */
		A_M_Y_VINDOUCHE_01 = 0xc19377e7,
		/** ![a_f_y_vinewood_01](https://wiki.rage.mp//images/thumb/8/86/Vinewood01AFY.png/58px-Vinewood01AFY.png) */
		A_F_Y_VINEWOOD_01 = 0x19f41f65,
		/** ![a_m_y_vinewood_01](https://wiki.rage.mp//images/thumb/d/d7/VineWood01AMY.png/58px-VineWood01AMY.png) */
		A_M_Y_VINEWOOD_01 = 0x4b64199d,
		/** ![a_f_y_vinewood_02](https://wiki.rage.mp//images/thumb/4/4e/Vinewood02AFY.png/58px-Vinewood02AFY.png) */
		A_F_Y_VINEWOOD_02 = 0xdab6a0eb,
		/** ![a_m_y_vinewood_02](https://wiki.rage.mp//images/thumb/7/73/VineWood02AMY.png/58px-VineWood02AMY.png) */
		A_M_Y_VINEWOOD_02 = 0x5d15bd00,
		/** ![a_f_y_vinewood_03](https://wiki.rage.mp//images/thumb/2/2a/Vinewood03AFY.png/58px-Vinewood03AFY.png) */
		A_F_Y_VINEWOOD_03 = 0x379ddab8,
		/** ![a_m_y_vinewood_03](https://wiki.rage.mp//images/thumb/8/8f/Vinewood03AMY.png/58px-Vinewood03AMY.png) */
		A_M_Y_VINEWOOD_03 = 0x1fdf4294,
		/** ![a_f_y_vinewood_04](https://wiki.rage.mp//images/thumb/8/81/Vinewood04AFY.png/58px-Vinewood04AFY.png) */
		A_F_Y_VINEWOOD_04 = 0xfae46146,
		/** ![a_m_y_vinewood_04](https://wiki.rage.mp//images/thumb/1/1a/Vinewood04AMY.png/58px-Vinewood04AMY.png) */
		A_M_Y_VINEWOOD_04 = 0x31c9e669,
		/** ![ig_wade](https://wiki.rage.mp//images/thumb/f/fc/Wade.png/58px-Wade.png) */
		IG_WADE = 0x92991b72,
		/** ![cs_wade](https://wiki.rage.mp//images/thumb/b/b6/WadeCutscene.png/58px-WadeCutscene.png) */
		CS_WADE = 0xd266d9d6,
		/** ![s_m_y_waiter_01](https://wiki.rage.mp//images/thumb/c/c8/Waiter01SMY.png/58px-Waiter01SMY.png) */
		S_M_Y_WAITER_01 = 0xad4c724c,
		/** ![ig_chengsr](https://wiki.rage.mp//images/thumb/5/57/WeiCheng.png/58px-WeiCheng.png) */
		IG_CHENGSR = 0xaae4ea7b,
		/** ![cs_chengsr](https://wiki.rage.mp//images/thumb/f/f8/WeiChengCutscene.png/58px-WeiChengCutscene.png) */
		CS_CHENGSR = 0x30db9d7b,
		/** ![a_c_westy](https://wiki.rage.mp//images/thumb/7/7a/Westy.png/95px-Westy.png) */
		A_C_WESTY = 0xad7844bb,
		/** ![u_m_m_willyfist](https://wiki.rage.mp//images/thumb/2/2f/WillyFist.png/58px-WillyFist.png) */
		U_M_M_WILLYFIST = 0x90769a8f,
		/** ![s_m_y_winclean_01](https://wiki.rage.mp//images/thumb/2/20/WinClean01SMY.png/58px-WinClean01SMY.png) */
		S_M_Y_WINCLEAN_01 = 0x550d8d9d,
		/** ![s_m_y_xmech_01](https://wiki.rage.mp//images/thumb/2/23/XMech01SMY.png/58px-XMech01SMY.png) */
		S_M_Y_XMECH_01 = 0x441405ec,
		/** ![s_m_y_xmech_02](https://wiki.rage.mp//images/thumb/3/3b/XMech02SMY.png/58px-XMech02SMY.png) */
		S_M_Y_XMECH_02 = 0xbe20fa04,
		/** ![a_f_y_yoga_01](https://wiki.rage.mp//images/thumb/d/da/Yoga01AFY.png/58px-Yoga01AFY.png) */
		A_F_Y_YOGA_01 = 0xc41b062e,
		/** ![a_m_y_yoga_01](https://wiki.rage.mp//images/thumb/6/61/Yoga01AMY.png/58px-Yoga01AMY.png) */
		A_M_Y_YOGA_01 = 0xab0a7155,
		/** ![ig_zimbor](https://wiki.rage.mp//images/thumb/5/5f/Zimbor.png/58px-Zimbor.png) */
		IG_ZIMBOR = 0x0b34d6f5,
		/** ![cs_zimbor](https://wiki.rage.mp//images/thumb/2/20/ZimborCutscene.png/58px-ZimborCutscene.png) */
		CS_ZIMBOR = 0xeaacaaf0,
		/** ![u_m_y_zombie_01](https://wiki.rage.mp//images/thumb/9/95/Zombie01.png/58px-Zombie01.png) */
		U_M_Y_ZOMBIE_01 = 0xac4b4506,
		/** ![a_f_y_femaleagent](https://wiki.rage.mp//images/thumb/0/07/A_f_y_femaleagent.png/61px-A_f_y_femaleagent.png) */
		A_F_Y_FEMALEAGENT = 0x50610c43,
		/** ![g_f_importexport_01](https://wiki.rage.mp//images/thumb/2/20/G_f_importexport_01.png/61px-G_f_importexport_01.png) */
		G_F_IMPORTEXPORT_01 = 0x84a1b11a,
		/** ![g_m_importexport_01](https://wiki.rage.mp//images/thumb/f/f5/G_m_importexport_01.png/61px-G_m_importexport_01.png) */
		G_M_IMPORTEXPORT_01 = 0xbca2ccea,
		/** ![ig_agent](https://wiki.rage.mp//images/thumb/a/a2/Ig_agent.png/61px-Ig_agent.png) */
		IG_AGENT = 0x246af208,
		/** ![ig_malc](https://wiki.rage.mp//images/thumb/d/d1/Ig_malc.png/61px-Ig_malc.png) */
		IG_MALC = 0xf1bca919,
		/** ![mp_f_cardesign_01](https://wiki.rage.mp//images/thumb/a/a5/Mp_f_cardesign_01.png/61px-Mp_f_cardesign_01.png) */
		MP_F_CARDESIGN_01 = 0x242c34a7,
		/** ![mp_f_chbar_01](https://wiki.rage.mp//images/thumb/b/bc/Mp_f_chbar_01.png/61px-Mp_f_chbar_01.png) */
		MP_F_CHBAR_01 = 0xc3f6e385,
		/** ![mp_f_cocaine_01](https://wiki.rage.mp//images/thumb/4/43/Mp_f_cocaine_01.png/61px-Mp_f_cocaine_01.png) */
		MP_F_COCAINE_01 = 0x4b657af8,
		/** ![mp_f_counterfeit_01](https://wiki.rage.mp//images/thumb/c/cb/Mp_f_counterfeit_01.png/61px-Mp_f_counterfeit_01.png) */
		MP_F_COUNTERFEIT_01 = 0xb788f1f5,
		/** ![mp_f_execpa_01](https://wiki.rage.mp//images/thumb/0/04/Mp_f_execpa_01.png/61px-Mp_f_execpa_01.png) */
		MP_F_EXECPA_01 = 0x432ca064,
		/** ![mp_f_execpa_02](https://wiki.rage.mp//images/thumb/e/e9/Mp_f_execpa_02.png/50px-Mp_f_execpa_02.png) */
		MP_F_EXECPA_02 = 0x5972ccf0,
		/** ![mp_f_forgery_01](https://wiki.rage.mp//images/thumb/9/9f/Mp_f_forgery_01.png/61px-Mp_f_forgery_01.png) */
		MP_F_FORGERY_01 = 0x781a3cf8,
		/** ![mp_f_helistaff_01](https://wiki.rage.mp//images/thumb/7/77/Mp_f_helistaff_01.png/61px-Mp_f_helistaff_01.png) */
		MP_F_HELISTAFF_01 = 0x19b6ff06,
		/** ![mp_f_meth_01](https://wiki.rage.mp//images/thumb/9/9c/Mp_f_meth_01.png/61px-Mp_f_meth_01.png) */
		MP_F_METH_01 = 0xd2b27ec1,
		/** ![mp_f_weed_01](https://wiki.rage.mp//images/thumb/4/40/Mp_f_weed_01.png/61px-Mp_f_weed_01.png) */
		MP_F_WEED_01 = 0xb26573a3,
		/** ![mp_m_cocaine_01](https://wiki.rage.mp//images/thumb/9/96/Mp_m_cocaine_01.png/61px-Mp_m_cocaine_01.png) */
		MP_M_COCAINE_01 = 0x56d38f95,
		/** ![mp_m_counterfeit_01](https://wiki.rage.mp//images/thumb/a/a1/Mp_m_counterfeit_01.png/61px-Mp_m_counterfeit_01.png) */
		MP_M_COUNTERFEIT_01 = 0x9855c974,
		/** ![mp_m_execpa_01](https://wiki.rage.mp//images/thumb/4/4f/Mp_m_execpa_01.png/61px-Mp_m_execpa_01.png) */
		MP_M_EXECPA_01 = 0x3e8417bc,
		/** ![mp_m_forgery_01](https://wiki.rage.mp//images/thumb/4/4f/Mp_m_forgery_01.png/61px-Mp_m_forgery_01.png) */
		MP_M_FORGERY_01 = 0x613e709b,
		/** ![mp_m_meth_01](https://wiki.rage.mp//images/thumb/c/c1/Mp_m_meth_01.png/61px-Mp_m_meth_01.png) */
		MP_M_METH_01 = 0xedb42f3f,
		/** ![mp_m_securoguard_01](https://wiki.rage.mp//images/thumb/0/08/Mp_m_securoguard_01.png/61px-Mp_m_securoguard_01.png) */
		MP_M_SECUROGUARD_01 = 0xda2c984e,
		/** ![mp_m_waremech_01](https://wiki.rage.mp//images/thumb/b/b3/Mp_m_waremech_01.png/61px-Mp_m_waremech_01.png) */
		MP_M_WAREMECH_01 = 0xf7a74139,
		/** ![mp_m_weapexp_01](https://wiki.rage.mp//images/thumb/7/71/Mp_m_weapexp_01.png/61px-Mp_m_weapexp_01.png) */
		MP_M_WEAPEXP_01 = 0x36ea5b09,
		/** ![mp_m_weapwork_01](https://wiki.rage.mp//images/thumb/2/20/Mp_m_weapwork_01.png/61px-Mp_m_weapwork_01.png) */
		MP_M_WEAPWORK_01 = 0x4186506e,
		/** ![mp_m_weed_01](https://wiki.rage.mp//images/thumb/9/9d/Mp_m_weed_01.png/61px-Mp_m_weed_01.png) */
		MP_M_WEED_01 = 0x917ed459,
		/** ![s_m_y_xmech_02_mp](https://wiki.rage.mp//images/thumb/7/79/S_m_y_xmech_02_mp.png/61px-S_m_y_xmech_02_mp.png) */
		S_M_Y_XMECH_02_MP = 0x69147a0d,
		/** ![u_f_m_drowned_01](https://wiki.rage.mp//images/thumb/9/9e/U_f_m_drowned_01.png/61px-U_f_m_drowned_01.png) */
		U_F_M_DROWNED_01 = 0xd7f37609,
		/** ![u_f_y_corpse_01](https://wiki.rage.mp//images/thumb/e/e1/U_f_y_corpse_01.png/61px-U_f_y_corpse_01.png) */
		U_F_Y_CORPSE_01 = 0x9c70109d,
		/** ![u_m_m_streetart_01](https://wiki.rage.mp//images/thumb/b/b5/U_m_m_streetart_01.png/61px-U_m_m_streetart_01.png) */
		U_M_M_STREETART_01 = 0x6c19e962,
		/** ![ig_lestercrest_2](https://wiki.rage.mp//images/thumb/4/40/Ig_lestercrest_2.png/61px-Ig_lestercrest_2.png) */
		IG_LESTERCREST_2 = 0x6e42fd26,
		/** ![ig_avon](https://wiki.rage.mp//images/thumb/7/79/Ig_avon.png/61px-Ig_avon.png) */
		IG_AVON = 0xfce270c2,
		/** ![u_m_y_juggernaut_01](https://wiki.rage.mp//images/thumb/7/72/U_m_y_juggernaut_01.png/61px-U_m_y_juggernaut_01.png) */
		U_M_Y_JUGGERNAUT_01 = 0x90ef5134,
		/** ![mp_m_avongoon](https://wiki.rage.mp//images/thumb/9/9f/Mp_m_avongoon.png/61px-Mp_m_avongoon.png) */
		MP_M_AVONGOON = 0x9c13cb95,
		/** ![mp_m_bogdangoon](https://wiki.rage.mp//images/thumb/c/c1/Mp_m_bogdangoon.png/61px-Mp_m_bogdangoon.png) */
		MP_M_BOGDANGOON = 0x4d5696f7,
		/** ![u_m_y_corpse_01](https://wiki.rage.mp//images/thumb/0/06/U_m_y_corpse_01.png/61px-U_m_y_corpse_01.png) */
		U_M_Y_CORPSE_01 = 0x94c2a03f,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![a_c_panther](https://wiki.rage.mp//images/thumb/9/97/0xE71D5E68.png/93px-0xE71D5E68.png)
	 */
		A_C_PANTHER = 0xe71d5e68,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![a_f_y_beach_02](https://wiki.rage.mp//images/thumb/a/a5/0xB920CC2B.png/54px-0xB920CC2B.png)
	 */
		A_F_Y_BEACH_02 = 0xb920cc2b,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![a_f_y_clubcust_04](https://wiki.rage.mp//images/thumb/1/11/0x2EE1E9A0.png/45px-0x2EE1E9A0.png)
	 */
		A_F_Y_CLUBCUST_04 = 0x2ee1e9a0,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![a_m_o_beach_02](https://wiki.rage.mp//images/thumb/a/ae/0xC1534DF2.png/57px-0xC1534DF2.png)
	 */
		A_M_O_BEACH_02 = 0xc1534df2,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![a_m_y_beach_04](https://wiki.rage.mp//images/thumb/b/b4/0xB91A86BC.png/53px-0xB91A86BC.png)
	 */
		A_M_Y_BEACH_04 = 0xb91a86bc,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![a_m_y_clubcust_04](https://wiki.rage.mp//images/thumb/d/d3/0xE2210515.png/58px-0xE2210515.png)
	 */
		A_M_Y_CLUBCUST_04 = 0xe2210515,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![cs_patricia_02](https://wiki.rage.mp//images/thumb/1/17/0x2EFAA8C3.png/44px-0x2EFAA8C3.png)
	 */
		CS_PATRICIA_02 = 0x2efaa8c3,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_ary](https://wiki.rage.mp//images/thumb/7/7d/0xB65C594E.png/58px-0xB65C594E.png)
	 */
		CSB_ARY = 0xb65c594e,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_englishdave_02](https://wiki.rage.mp//images/thumb/8/89/0xDD59656F.png/62px-0xDD59656F.png)
	 */
		CSB_ENGLISHDAVE_02 = 0xdd59656f,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_gustavo](https://wiki.rage.mp//images/thumb/f/f1/0x8AF43D22.png/63px-0x8AF43D22.png)
	 */
		CSB_GUSTAVO = 0x8af43d22,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_helmsmanpavel](https://wiki.rage.mp//images/thumb/4/44/0x9F7E81F8.png/57px-0x9F7E81F8.png)
	 */
		CSB_HELMSMANPAVEL = 0x9f7e81f8,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_isldj_00](https://wiki.rage.mp//images/thumb/8/85/0x7A5EE1A5.png/51px-0x7A5EE1A5.png)
	 */
		CSB_ISLDJ_00 = 0x7a5ee1a5,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_isldj_01](https://wiki.rage.mp//images/thumb/0/04/0x34DFD6A4.png/59px-0x34DFD6A4.png)
	 */
		CSB_ISLDJ_01 = 0x34dfd6a4,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_iSLdj_02](https://wiki.rage.mp//images/thumb/a/af/0x66143910.png/62px-0x66143910.png)
	 */
		CSB_ISLDJ_02 = 0x66143910,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_isldj_03](https://wiki.rage.mp//images/thumb/7/73/0x917B0FDD.png/61px-0x917B0FDD.png)
	 */
		CSB_ISLDJ_03 = 0x917b0fdd,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_isldj_04](https://wiki.rage.mp//images/thumb/c/cb/0xB2BC525F.png/48px-0xB2BC525F.png)
	 */
		CSB_ISLDJ_04 = 0xb2bc525f,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_jio](https://wiki.rage.mp//images/thumb/1/1d/0xA28B9E2D.png/52px-0xA28B9E2D.png)
	 */
		CSB_JIO = 0xa28b9e2d,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_juanstrickler](https://wiki.rage.mp//images/thumb/9/98/0xD74B8139.png/53px-0xD74B8139.png)
	 */
		CSB_JUANSTRICKLER = 0xd74b8139,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_miguelmadrazo](https://wiki.rage.mp//images/thumb/2/26/0xDBB17082.png/58px-0xDBB17082.png)
	 */
		CSB_MIGUELMADRAZO = 0xdbb17082,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_mjo](https://wiki.rage.mp//images/thumb/0/0e/0xA0FDA755.png/50px-0xA0FDA755.png)
	 */
		CSB_MJO = 0xa0fda755,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![csb_sss](https://wiki.rage.mp//images/thumb/3/3b/0xE0DBDC60.png/56px-0xE0DBDC60.png)
	 */
		CSB_SSS = 0xe0dbdc60,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![g_m_m_cartelguards_01](https://wiki.rage.mp//images/thumb/2/2d/0x7ED5AD78.png/59px-0x7ED5AD78.png)
	 */
		G_M_M_CARTELGUARDS_01 = 0x7ed5ad78,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![g_m_m_cartelguards_02](https://wiki.rage.mp//images/thumb/4/42/0x6C8C08E5.png/51px-0x6C8C08E5.png)
	 */
		G_M_M_CARTELGUARDS_02 = 0x6c8c08e5,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_ary](https://wiki.rage.mp//images/thumb/2/25/0xCF0C7037.png/62px-0xCF0C7037.png)
	 */
		IG_ARY = 0xcf0c7037,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_englishdave_02](https://wiki.rage.mp//images/thumb/5/5f/0x35FFA54A.png/63px-0x35FFA54A.png)
	 */
		IG_ENGLISHDAVE_02 = 0x35ffa54a,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_gustavo](https://wiki.rage.mp//images/thumb/0/0f/0xB585B217.png/61px-0xB585B217.png)
	 */
		IG_GUSTAVO = 0xb585b217,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_helmsmanpavel](https://wiki.rage.mp//images/thumb/9/9b/0xD7C1E2B1.png/50px-0xD7C1E2B1.png)
	 */
		IG_HELMSMANPAVEL = 0xd7c1e2b1,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_isldj_00](https://wiki.rage.mp//images/thumb/7/7c/0xE2A32E68.png/62px-0xE2A32E68.png)
	 */
		IG_ISLDJ_00 = 0xe2a32e68,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_isldj_01](https://wiki.rage.mp//images/thumb/6/6b/0x6F4747CE.png/54px-0x6F4747CE.png)
	 */
		IG_ISLDJ_01 = 0x6f4747ce,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_isldj_02](https://wiki.rage.mp//images/thumb/b/b2/0x5D1DA37B.png/57px-0x5D1DA37B.png)
	 */
		IG_ISLDJ_02 = 0x5d1da37b,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_isldj_03](https://wiki.rage.mp//images/thumb/9/95/0x13360FA9.png/56px-0x13360FA9.png)
	 */
		IG_ISLDJ_03 = 0x13360fa9,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_isldj_04](https://wiki.rage.mp//images/thumb/6/69/0x806E6A1C.png/58px-0x806E6A1C.png)
	 */
		IG_ISLDJ_04 = 0x806e6a1c,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_isldj_04_d_01](https://wiki.rage.mp//images/thumb/a/ab/0xB193BD6A.png/49px-0xB193BD6A.png)
	 */
		IG_ISLDJ_04_D_01 = 0xb193bd6a,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_isldj_04_d_02](https://wiki.rage.mp//images/thumb/6/68/0xFDF6562E.png/49px-0xFDF6562E.png)
	 */
		IG_ISLDJ_04_D_02 = 0xfdf6562e,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_isldj_04_e_01](https://wiki.rage.mp//images/thumb/9/9d/0x232D795D.png/48px-0x232D795D.png)
	 */
		IG_ISLDJ_04_E_01 = 0x232d795d,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_jackie](https://wiki.rage.mp//images/thumb/f/fc/0x799E61F6.png/57px-0x799E61F6.png)
	 */
		IG_JACKIE = 0x799e61f6,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_jio](https://wiki.rage.mp//images/thumb/d/d8/0x73775F3F.png/59px-0x73775F3F.png)
	 */
		IG_JIO = 0x73775f3f,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_juanstrickler](https://wiki.rage.mp//images/thumb/8/8c/0x1E3E327D.png/70px-0x1E3E327D.png)
	 */
		IG_JUANSTRICKLER = 0x1e3e327d,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_kaylee](https://wiki.rage.mp//images/thumb/9/9d/0xA7810923.png/65px-0xA7810923.png)
	 */
		IG_KAYLEE = 0xa7810923,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_miguelmadrazo](https://wiki.rage.mp//images/thumb/0/06/0xA5CD7CD8.png/66px-0xA5CD7CD8.png)
	 */
		IG_MIGUELMADRAZO = 0xa5cd7cd8,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_mjo](https://wiki.rage.mp//images/thumb/7/79/0x2D5DB362.png/68px-0x2D5DB362.png)
	 */
		IG_MJO = 0x2d5db362,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_oldrichguy](https://wiki.rage.mp//images/thumb/0/0c/0x3C04504A.png/58px-0x3C04504A.png)
	 */
		IG_OLDRICHGUY = 0x3c04504a,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_patricia_02](https://wiki.rage.mp//images/thumb/3/3b/0xC3114CB1.png/62px-0xC3114CB1.png)
	 */
		IG_PATRICIA_02 = 0xc3114cb1,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_pilot](https://wiki.rage.mp//images/thumb/6/66/0x864ED68E.png/70px-0x864ED68E.png)
	 */
		IG_PILOT = 0x864ed68e,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![ig_sss](https://wiki.rage.mp//images/thumb/4/4a/0x3B18E305.png/75px-0x3B18E305.png)
	 */
		IG_SSS = 0x3b18e305,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![s_f_y_beachbarstaff_01](https://wiki.rage.mp//images/thumb/d/da/0xC2E31A0A.png/68px-0xC2E31A0A.png)
	 */
		S_F_Y_BEACHBARSTAFF_01 = 0xc2e31a0a,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![s_f_y_clubbar_02](https://wiki.rage.mp//images/thumb/6/6f/0x55C5627B.png/66px-0x55C5627B.png)
	 */
		S_F_Y_CLUBBAR_02 = 0x55c5627b,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![s_m_m_bouncer_02](https://wiki.rage.mp//images/thumb/8/8d/0x52060D92.png/63px-0x52060D92.png)
	 */
		S_M_M_BOUNCER_02 = 0x52060d92,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![s_m_m_drugprocess_01](https://wiki.rage.mp//images/thumb/a/ad/0x5C366C83.png/66px-0x5C366C83.png)
	 */
		S_M_M_DRUGPROCESS_01 = 0x5c366c83,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![s_m_m_fieldworker_01](https://wiki.rage.mp//images/thumb/5/55/0x9074CA50.png/64px-0x9074CA50.png)
	 */
		S_M_M_FIELDWORKER_01 = 0x9074ca50,
		/**
	 * DLC: TheCayoPericoHeist

	 * ![s_m_m_highsec_04](https://wiki.rage.mp//images/thumb/8/87/0x55FE9B46.png/79px-0x55FE9B46.png)
	 */
		S_M_M_HIGHSEC_04 = 0x55fe9b46
	}

	export const enum ConsoleVerbosity {
		ERROR = 'error',
		FATAL = 'fatal',
		INFO = 'info',
		WARNING = 'warning'
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

	interface PickupMp extends EntityMp {}

	interface PickupMpPool extends EntityMpPool<PickupMp> {
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

	export interface GameMp {
		app: GameAppMp;
		audio: GameAudioMp;
		brain: GameBrainMp;
		cam: GameCamMp;
		controls: GameControlsMp;
		cutscene: GameCutsceneMp;
		datafile: GameDatafileMp;
		decisionevent: GameDecisioneventMp;
		decorator: GameDecoratorMp;
		dlc1: GameDlc1Mp;
		dlc2: GameDlc2Mp;
		entity: GameEntityMp;
		fire: GameFireMp;
		gameplay: GameGameplayMp;
		graphics: GameGraphicsMp;
		gxt: GameGxtMp;
		interior: GameInteriorMp;
		itemset: GameItemsetMp;
		mobile: GameMobileMp;
		object: GameObjectMp;
		pathfind: GamePathfindMp;
		ped: GamePedMp;
		player: GamePlayerMp;
		rope: GameRopeMp;
		script: GameScriptMp;
		stats: GameStatsMp;
		streaming: GameStreamingMp;
		system: GameSystemMp;
		time: GameTimeMp;
		ui: GameUiMp;
		unk: GameUnkMp;
		recorder: GameRecorderMp;
		vehicle: GameVehicleMp;
		water: GameWaterMp;
		weapon: GameWeaponMp;
		worldprobe: GameWorldprobeMp;
		zone: GameZoneMp;

		invoke(hash: string, ...args: any[]): any;
		invokeFloat(hash: string, ...args: any[]): any;
		invokeString(hash: string, ...args: any[]): any;
		invokeVector3(hash: string, ...args: any[]): any;
		joaat(text: string): Hash;
		joaat(textArray: string[]): Hash[];
		wait(ms: number): void;
		waitAsync(ms: number): Promise<void>;
	}

	export interface GameAudioMp {
		addLineToConversation(
			p0: any,
			p1: any,
			p2: any,
			p3: any,
			p4: any,
			p5: boolean,
			p6: boolean,
			p7: boolean,
			p8: boolean,
			p9: any,
			p10: boolean,
			p11: boolean,
			p12: boolean
		): void;
		addPedToConversation(p0: any, p1: any, p2: string): void;
		cancelMusicEvent(eventName: string): boolean;
		clearAmbientZoneListState(p0: any, p1: boolean): void;
		clearAmbientZoneState(p0: any, p1: boolean): void;
		findRadioStationIndex(station: number): number;
		freezeRadioStation(radioStation: string): void;
		getNetworkIdFromSoundId(soundId: number): number;
		getNumberOfPassengerVoiceVariations(p0: any): number;
		getPlayerHeadsetSoundAlternate(p0: string, p1: number): void;
		getRadioStationName(radioStation: number): string;
		getSoundIdFromNetworkId(netId: number): number;
		getSynchronizedAudioEventPositionThisFrame(p0: string, p1: Handle): void;
		getVehicleDefaultHorn(vehicle: Handle): Hash;
		hasSoundFinished(soundId: number): boolean;
		hintAmbientAudioBank(p0: any, p1: any): void;
		hintScriptAudioBank(p0: any, p1: any): void;
		interruptConversation(p0: any, p1: any, p2: any): void;
		isAlarmPlayer(alarmName: string): boolean;
		isAmbientSpeechPlaying(p0: Handle): boolean;
		isAmbientZoneEnabled(ambientZone: string): boolean;
		isAudioSceneActive(scene: string): boolean;
		isScriptedSpeechPlaying(p0: any): boolean;
		loadStream(streamName: string, soundSet: string): boolean;
		loadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): boolean;
		overrideTrevorRage(p0: any): void;
		overrideUnderwaterStream(p0: any, p1: boolean): void;
		pauseScriptedConversation(p0: boolean): void;
		playAmbientSpeechAtCoords(p0: string, p1: string, p2: number, p3: number, p4: number, p5: string): void;
		playAmbientSpeechWithVoice(p0: Handle, speechName: string, voiceName: string, speechParam: string, p4: boolean): void;
		playEndCreditsMusic(play: boolean): void;
		playMissionCompleteAudio(audioName: string): void;
		playPain(painId: number, p1: number, p2: number): void;
		playPedRingtone(ringtoneName: string, ped: Handle, p2: boolean): void;
		playPoliceReport(name: string, p1: number): void;
		playSound(soundId: number, audioName: string, audioRef: string, p3: boolean, p4: any, p5: boolean): void;
		playSoundFromCoord(
			soundId: number,
			audioName: string,
			x: number,
			y: number,
			z: number,
			audioRef: string,
			p6: boolean,
			p7: any,
			p8: boolean
		): void;
		playSoundFromEntity(soundId: number, audioName: string, entity: Handle, audioRef: string, p4: boolean, p5: any): void;
		playSoundFrontend(soundId: number, audioName: string, audioRef: string, p3: boolean): void;
		playStreamFromObject(object: Handle): void;
		playSynchronizedAudioEvent(p0: any): boolean;
		preloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
		preloadScriptPhoneConversation(p0: boolean, p1: boolean): void;
		prepareAlarm(alarmName: string): boolean;
		prepareMusicEvent(eventName: string): boolean;
		prepareSynchronizedAudioEvent(p0: string, p1: any): void;
		prepareSynchronizedAudioEventForScene(p0: any, p1: any): boolean;
		registerScriptWithAudio(p0: any): void;
		releasedNamedScriptAudioBank(audioBank: string): void;
		releaseSoundId(soundId: number): void;
		requestAmbientAudioBank(p0: string, p1: boolean): boolean;
		requestMissionAudioBank(p0: string, p1: boolean): boolean;
		requestScriptAudioBank(p0: string, p1: boolean): boolean;
		resetPedAudioFlags(p0: any): void;
		setAggressiveHorns(toggle: boolean): void;
		setAmbientZoneListState(p0: any, p1: boolean, p2: boolean): void;
		setAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
		setAmbientZoneState(p0: any, p1: boolean, p2: boolean): void;
		setAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
		setAnimalMood(p0: any, p1: any): void;
		setAudioFlag(flagName: string, toggle: boolean): void;
		setAudioSceneVariable(p0: any, p1: any, p2: number): void;
		setCutsceneAudioOverride(p0: string): void;
		setEmitterRadioStation(emitterName: string, radioStation: string): void;
		setFrontendRadioActive(active: boolean): void;
		setGpsActive(active: boolean): void;
		setInitialPlayerStation(radioStation: string): void;
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
		setMobilePhoneRadioState(state: boolean): void;
		setMobileRadioEnabledDuringGameplay(toggle: boolean): void;
		setPlayerAngry(playerPed: Handle, disabled: boolean): void;
		setRadioAutoUnfreeze(p0: boolean): void;
		setRadioToStationIndex(radioStation: number): void;
		setRadioToStationName(stationName: string): void;
		setRadioTrack(radioStation: string, radioTrack: string): void;
		setStaticEmitterEnabled(emitterName: string, toggle: boolean): void;
		setUserRadioControlEnabled(p0: boolean): void;
		setVariableOnSound(soundId: number, p1: any, p2: number): void;
		setVariableOnStream(p0: string, p1: number): void;
		specialFrontendEqual(x: number, y: number, z: number): void;
		startAlarm(alarmName: string, p2: boolean): void;
		startAudioScene(sceneName: string): boolean;
		startScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
		startScriptPhoneConversation(p0: boolean, p1: boolean): void;
		stopAlarm(alarmName: string, toggle: boolean): void;
		stopAllAlarms(stop: boolean): void;
		stopAudioScene(scene: string): void;
		stopCurrentPlayerAmbientSpeech(p0: Handle): void;
		stopScriptedConversation(p0: boolean): void;
		stopSound(soundId: number): void;
		stopSynchronizedAudioEvent(p0: any): boolean;
		triggerMusicEvent(eventName: string): boolean;
		unfreezeRadioStation(radioStation: string): void;
		unlockMissionNewsStory(newsStory: number): void;
	}

	export interface GameAppMp {
		appDeleteAppData(appName: string): boolean;
		appGetFloat(property: string): number;
		appGetString(property: string): string;
		appGetInt(property: string): number;
		appHasSyncedData(property: string): boolean;
		appSetApp(appName: string): void;
		appSetBlock(blockName: string): void;
		appSetFloat(property: string, value: number): void;
		appSetInt(property: string, value: number): void;
		appSetString(property: string, value: string): void;
	}

	export interface GameBrainMp {
		addScriptToRandom(name: string, model: Hash, p2: number, p3: number): void;
		disableScriptBrainSet(brainSet: number): void;
		enableScriptBrainSet(brainSet: number): void;
		isObjectWithinBrainActivationRange(object: Handle): boolean;
		registerObjectScriptBrain(stringName: string, p1: Hash, p2: number, p3: number, p4: number, p5: number): void;
		registerWorldPointScriptBrain(p0: any, p1: number, p2: any): void;
	}

	export interface GameCamMp {
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
		animateGameplayCamZoom(p0: number, distance: number): void;
		clampGameplayCamPitch(minimum: number, maximum: number): void;
		clampGameplayCamYaw(minimum: number, maximum: number): void;
		createCam(camName: string, p1: boolean): Handle;
		createCamera(camHash: number, p1: boolean): Handle;
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
			p9: any
		): Handle;
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
			p9: any
		): Handle;
		createCinematicShot(p0: any, p1: number, p2: any, entity: Handle): void;
		destroyAllCams(destroy: boolean): void;
		doScreenFadeIn(duration: number): void;
		doScreenFadeOut(duration: number): void;
		getCamSplineNodeIndex(cam: number): boolean;
		getCamSplineNodePhase(p0: any): number;
		getGameplayCamRelativeHeading(): number;
		getGameplayCamRot(p0: number): shared.Vector3Mp;
		getGameplayCamRot(p0: number): shared.Vector3Mp;
		getIsMultiplayerBrief(p0: boolean): void;
		isCamSplinePaused(p0: any): boolean;
		isCinematicShotActive(p0: any): boolean;
		isSphereVisible(x: number, y: number, z: number, radius: number): boolean;
		overrideCamSplineMotionBlur(p0: any, p1: any, p2: number, p3: number): void;
		overrideCamSplineVelocity(cam: number, p1: number, p2: number, p3: number): void;
		playSynchronizedCamAnim(p0: any, p1: any, animName: string, animDictionary: string): boolean;
		renderScriptCams(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean): void;
		setCamEffect(p0: number): void;
		setCamSplineDuration(cam: number, timeDuration: number): void;
		setCamSplinePhase(cam: number, p1: number): void;
		setCinematicButtonActive(p0: boolean): void;
		setCinematicCamShakeAmplitude(p0: number): void;
		setCinematicModeActive(p0: boolean): void;
		setFollowPedCamCutsceneChat(p0: string, p1: number): void;
		setFollowPedCamViewMode(viewMode: number): void;
		setFollowVehicleCamViewMode(viewMode: number): void;
		setFollowVehicleCamZoomLevel(zoomLevel: number): void;
		setGameplayCamRawPitch(pitch: number): void;
		setGameplayCamRawYaw(yaw: number): void;
		setGameplayCamRelativeHeading(heading: number): void;
		setGameplayCamRelativePitch(x: number, p1: number): void;
		setGameplayCamShakeAmplitude(amplitude: number): void;
		setGameplayCoordHint(p0: number, p1: number, p2: number, p3: any, p4: any, p5: any, p6: any): void;
		setGameplayEntityHint(p0: any, p1: number, p2: number, p3: number, p4: boolean, p5: any, p6: any, p7: any, p8: any): void;
		setGameplayHintFov(fov: number): void;
		setGameplayObjectHint(p0: any, p1: number, p2: number, p3: number, p4: boolean, p5: any, p6: any, p7: any): void;
		setGameplayPedHint(p0: Handle, x1: number, y1: number, z1: number, p4: boolean, p5: any, p6: any, p7: any): void;
		setGameplayVehicleHint(p0: any, p1: number, p2: number, p3: number, p4: boolean, p5: any, p6: any, p7: any): void;
		setTimeIdleDrop(p0: boolean, p1: boolean): void;
		setWidescreenBorders(p0: boolean, p1: number): void;
		shakeCinematicCam(p0: string, p1: number): void;
		shakeGameplayCam(shakeName: string, intensity: number): void;
		stopCinematicCamShaking(p0: boolean): void;
		stopCinematicShot(p0: any): void;
		stopGameplayCamShaking(p0: boolean): void;
		stopGameplayHint(p0: boolean): void;
	}

	export interface GameControlsMp {
		useDefaultVehicleEntering: boolean;

		disableAllControlActions(inputGroup: number | InputGroup): void;
		disableControlAction(inputGroup: number | InputGroup, control: number | Controls, disable: boolean): void;
		enableAllControlActions(inputGroup: number | InputGroup): void;
		enableControlAction(inputGroup: number | InputGroup, control: number | Controls, enable: boolean): void;
		getControlActionName(inputGroup: number | InputGroup, control: number | Controls, p2: boolean): string;
		getControlNormal(inputGroup: number | InputGroup, control: number | Controls): number;
		getControlValue(inputGroup: number | InputGroup, control: number | Controls): number;
		getDisabledControlNormal(inputGroup: number | InputGroup, control: number | Controls): number;
		isControlEnabled(inputGroup: number | InputGroup, control: number | Controls): boolean;
		isControlJustPressed(inputGroup: number | InputGroup, control: number | Controls): boolean;
		isControlJustReleased(inputGroup: number | InputGroup, control: number | Controls): boolean;
		isControlPressed(inputGroup: number | InputGroup, control: number | Controls): boolean;
		isControlReleased(inputGroup: number | InputGroup, control: number | Controls): boolean;
		isDisabledControlJustPressed(inputGroup: number | InputGroup, control: number | Controls): boolean;
		isDisabledControlJustReleased(inputGroup: number | InputGroup, control: number | Controls): boolean;
		isDisabledControlPressed(inputGroup: number | InputGroup, control: number | Controls): boolean;
		isInputDisabled(inputGroup: number | InputGroup): boolean;
		isInputJustDisabled(inputGroup: number | InputGroup): boolean;
		setControlNormal(inputGroup: number | InputGroup, control: number | Controls, amount: number): boolean;
		setInputExclusive(inputGroup: number | InputGroup, control: number | Controls): void;
		setPadShake(p0: number, duration: number, frequency: number): void;
		setPlayerpadShakesWhenControllerDisabled(toggle: boolean): void;
		stopPadShake(p0: any): void;
	}

	export interface GameCutsceneMp {
		setCutscenePedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: Hash): void;
		getEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: Hash): EntityMp;
		startCutscene(p0: number): void;
		startCutsceneAtCoords(x: number, y: number, z: number, p3: number): void;
		hasThisCutsceneLoaded(cutsceneName: string): boolean;
		doesCutsceneEntityExist(cutsceneEntName: string, modelHash: Hash): boolean;
		canSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: Hash): boolean;
		canSetEnterForRegisteredEntity(cutsceneEntName: string, modelHash: Hash): boolean;
		requestCutscene(cutsceneName: string, p1: number): void;
		setCutsceneFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
		setCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
		canSetExitStateForCamera(p0: boolean): boolean;
		setCutsceneOrigin(p0: any, p1: any, p2: any, p3: any, p4: any): void;
		setCutscenePedComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;
		getEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: Hash): EntityMp;
		requestCutscene2(cutsceneName: string, p1: number, p2: number): void;
		stopCutscene(p0: boolean): void;
		registerEntityForCutscene(cutscenePed: Handle, cutsceneEntName: string, p2: number, modelHash: number, p4: number): void;
	}

	export interface GameDatafileMp {
		arrayValueAddBoolean(arrayData: any, value: boolean): void;
		arrayValueAddFloat(arrayData: any, value: number): void;
		arrayValueAddInteger(arrayData: any, value: number): void;
		arrayValueAddObject(arrayData: any): void;
		arrayValueAddString(arrayData: any, value: string): void;
		arrayValueAddVector3(arrayData: any, valueX: number, valueY: number, valueZ: number): void;
		arrayValueGetBoolean(arrayData: any, arrayIndex: number): boolean;
		arrayValueGetFloat(arrayData: any, arrayIndex: number): number;
		arrayValueGetInteger(arrayData: any, arrayIndex: number): number;
		arrayValueGetObject(arrayData: any, arrayIndex: number): any;
		arrayValueGetSize(arrayData: any): number;
		arrayValueGetString(arrayData: any, arrayIndex: number): string;
		arrayValueGetType(arrayData: any, arrayIndex: number): number;
		arrayValueGetVector3(arrayData: any, arraayIndex: number): shared.Vector3Mp;
		loadUgcFile(filename: string): boolean;
		objectValueAddArray(objectData: any, key: string): void;
		objectValueAddBoolean(arrayData: any, key: string, value: boolean): void;
		objectValueAddFloat(objectData: any, key: string, value: number): void;
		objectValueAddInteger(objectData: any, key: string, value: number): void;
		objectValueAddObject(objectData: any, key: string): void;
		objectValueAddString(objectData: any, key: string, value: string): void;
		objectValueAddVector3(objectData: any, key: string, valueX: number, valueY: number, valueZ: number): void;
		objectValueGetArray(objectData: any, key: string): any;
		objectValueGetBoolean(objectData: any, key: string): boolean;
		objectValueGetFloat(objectData: any, key: string): number;
		objectValueGetInteger(objectData: any, key: string): number;
		objectValueGetObject(objectData: any, key: string): void;
		objectValueGetString(objectData: any, key: string): string;
		objectValueGetType(objectData: any, key: string): number;
		objectValueGetVector3(objectData: any, key: string): shared.Vector3Mp;
	}

	export interface GameDecisioneventMp {
		addShockingEventAtPosition(type: number, x: number, y: number, z: number, duration: number): GameScriptMp;
		addShockingEventForEntity(type: number, entity: Handle, duration: number): GameScriptMp;
		blockDecisionMakerEvent(name: Hash, type: number): void;
		clearDecisionMakerEventResponse(name: Hash, type: number): void;
		isShockingEventInSphere(type: number, x: number, y: number, z: number, radius: number): boolean;
		removeAllShockingEvents(p0: boolean): void;
		removeShockingEvent(event: GameScriptMp): boolean;
		suppressShockingEvent(type: number): void;
		unblockDecisionMakerEvent(name: Hash, type: number): void;
	}

	export interface GameDecoratorMp {
		decorIsRegisteredAsType(propertyName: string, type: number): boolean;
		decorRegister(propertyName: string, type: number): void;
	}

	export interface GameDlc1Mp {
		getDlcVehicleData(dlcVehicleIndex: number, outData: any): boolean;
		getDlcVehicleFlags(p0: number): number;
		getDlcVehicleModel(dlcVehicleIndex: number): Hash;
		getDlcWeaponComponentData(
			p0: any,
			p1: any,
			componentDataPtr: {
				attachBone: number;
				padding1: number;
				bActiveByDefault: number;
				padding2: number;
				unk: number;
				padding3: number;
				componentHash: number;
				padding4: number;
				unk2: number;
				padding5: number;
				componentCost: number;
				padding6: number;
				nameLabel: string;
				descLabel: string;
			}
		): boolean;
		getDlcWeaponData(
			dlcWeaponIndex: number,
			outData: {
				emptyCheck: number;
				padding1: number;
				weaponHash: number;
				padding2: number;
				unk: number;
				padding3: number;
				weaponCost: number;
				padding4: number;
				ammoCost: number;
				padding5: number;
				ammoType: number;
				padding6: number;
				defaultClipSize: number;
				padding7: number;
				nameLabel: string;
				descLabel: string;
				desc2Label: string;
				upperCaseNameLabel: string;
			}
		): boolean;
		getForcedComponent(componentHash: Hash, componentId: number, p2: any, p3: any, p4: any): void;
		getNumDlcWeaponComponents(dlcWeaponIndex: number): number;
		getNumForcedComponents(componentHash: Hash): number;
		getNumPropsFromOutfit(p0: number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;
		getPropFromOutfit(outfit: any, slot: number, item: any): boolean;
		getShopPedComponent(p0: any, p1: any): void;
		getShopPedOutfit(p0: any, p1: any): void;
		getShopPedQueryComponent(componentId: number, outComponent: number): number;
		getShopPedQueryOutput(
			p0: any,
			outfit: {
				mask: number;
				torso: number;
				pants: number;
				parachute: number;
				shoes: number;
				misc1: number;
				tops1: number;
				armour: number;
				crew: number;
				tops2: number;
				hat: number;
				glasses: number;
				earpiece: number;
				maskTexture: number;
				torsoTexture: number;
				pantsTexture: number;
				parachuteTexture: number;
				shoesTexture: number;
				misc1Texture: number;
				tops1Texture: number;
				armourTexture: number;
				crewTexture: number;
				tops2Texture: number;
				hatTexture: number;
				glassesTexture: number;
				earpiceTexture: number;
			}
		): void;
		getShopPedQueryProp(p0: any, p1: any): void;
		getVariantComponent(componentHash: Hash, componentId: number, p2: any, p3: any, p4: any): void;
		initShopPedComponent(outComponent: number): number;
		initShopPedProp(outProp: number): number;
		isDlcDataEmpty(dlcData: number): boolean;
	}

	export interface GameDlc2Mp {
		isDlcPresent(dlcHash: Hash): boolean;
		nullify(variable: any, unused: any): boolean;
	}

	export interface GameEntityMp {
		createForcedObject(x: number, y: number, z: number, p3: any, modelHash: Hash, p5: boolean): void;
		createModelHide(x: number, y: number, z: number, radius: number, model: Hash, p5: boolean): void;
		createModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, model: Hash, p5: boolean): void;
		createModelSwap(x: number, y: number, z: number, radius: number, originalModel: Hash, newModel: Hash, p6: boolean): void;
		findAnimEventPhase(animDictionary: string, animName: string, p2: string, p3: any, p4: any): boolean;
		getEntityAnimDuration(animDict: string, animName: string): number;
		isAnEntity(handle: Handle): boolean;
		playSynchronizedMapEntityAnim(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: any,
			p5: any,
			p6: any,
			p7: any,
			p8: number,
			p9: number,
			p10: any,
			p11: number
		): boolean;
		removeForcedObject(p0: any, p1: any, p2: any, p3: any, p4: any): void;
		removeModelHide(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
		removeModelSwap(x: number, y: number, z: number, radius: number, originModel: Hash, newModel: Hash, p6: boolean): void;
		setObjectAsNoLongerNeeded(object: Handle): void;
		stopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: any, p5: number): boolean;
		wouldEntityBeOccluded(hash: Hash, x: number, y: number, z: number, p4: boolean): boolean;
	}

	export interface GameFireMp {
		addSpecfxExplosion(
			x: number,
			y: number,
			z: number,
			explosionType: number,
			explosionFx: Hash,
			damageScale: number,
			isAudible: boolean,
			isInvisible: boolean,
			cameraShake: number
		): void;
		getClosestFirePos(outPosition: shared.Vector3Mp, x: number, y: number, z: number): shared.Vector3Mp;
		getNumberOfFiresInRange(x: number, y: number, z: number, radius: number): number;
		getPedInsideExplosionArea(
			explosionType: number,
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			radius: number
		): EntityMp;
		isExplosionInAngledArea(
			explosionType: number,
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			angle: number
		): boolean;
		isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
		isExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): boolean;
		removeScriptFire(fireHandle: Handle): void;
		startScriptFire(x: number, y: number, z: number, maxChildren: number, isGasFire: boolean): number;
		stopFireInRange(x: number, y: number, z: number, radius: number): void;
	}

	export interface GameGameplayMp {
		absf(value: number): number;
		absi(value: number): number;
		acos(p0: number): number;
		addHospitalRestart(x: number, y: number, z: number, p3: number, p4: any): number;
		addPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: any): void;
		addStuntJump(
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
			p13: number,
			p14: number,
			p15: any,
			p16: any
		): number;
		addStuntJumpAngled(
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
			p13: number,
			p14: number,
			p15: number,
			p16: number,
			p17: any,
			p18: any
		): number;
		areStringsEqual(string1: string, string2: string): boolean;
		asin(p0: number): number;
		atan(p0: number): number;
		atan2(p0: number, p1: number): number;
		beginReplayStats(p0: any, p1: any): void;
		clearAngledAreaOfVehicles(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: boolean,
			p8: boolean,
			p9: boolean,
			p10: boolean,
			p11: boolean
		): void;
		clearArea(X: number, Y: number, Z: number, radius: number, p4: boolean, ignoreCopCars: boolean, ignoreObjects: boolean, p7: boolean): void;
		clearAreaOfCops(x: number, y: number, z: number, radius: number, flags: number): void;
		clearAreaOfEverything(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
		clearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: number): void;
		clearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: number): void;
		clearAreaOfProjectiles(x: number, y: number, z: number, radius: number, flags: number): void;
		clearAreaOfVehicles(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean): void;
		clearBit(address: number, offset: number): number;
		compareStrings(str1: string, str2: string, matchCase: boolean, maxLength: number): number;
		createIncident(p0: number, p2: number, p3: number, p4: number, p5: number, p6: number, outIncident: number): number;
		createIncidentWithEntity(p0: number, p1: EntityMp, p2: number, p3: number, outIncident: number): number;
		deleteIncident(incidentId: number): number;
		deleteStuntJump(p0: number): void;
		disableAutomaticRespawn(disableRespawn: boolean): void;
		disableHospitalRestart(hospitalIndex: number, toggle: boolean): void;
		disablePoliceRestart(policeIndex: number, toggle: boolean): void;
		disableStuntJumpSet(p0: number): void;
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
		enableDispatchService(dispatchType: number, toggle: boolean): void;
		enableMpDlcMaps(toggle: boolean): void;
		enableStuntJumpSet(p0: number): void;
		findSpawnPointInDirection(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			distance: number,
			spawnPoint: shared.Vector3Mp
		): shared.Vector3Mp;
		getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): number;
		getBitsInRange(vars: number, rangeStart: number, rangeEnd: number): number;
		getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;
		getFreeStackSlotsCount(stackSize: number): number;
		getGroundZFor3dCoord(x: number, y: number, z: number, groundZ: number, unk: boolean): number;
		getHashKey(value: string): Hash;
		getHeadingFromVector2d(dx: number, dy: number): number;
		getModelDimensions(modelHash: Hash): {
			min: shared.Vector3Mp;
			max: shared.Vector3Mp;
		};
		getProfileSetting(profileSetting: number): number;
		getRandomFloatInRange(startRange: number, endRange: number): number;
		getRandomIntInRange(startRange: number, endRange: number): number;
		getWeatherTypeTransition(p0: any, p1: any, progress_or_time: number): number;
		hasBulletImpactedInArea(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: boolean): boolean;
		hasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): boolean;
		hasButtonCombinationJustBeenEntered(hash: Hash, amount: number): boolean;
		hasCheatStringJustBeenEntered(hash: Hash): boolean;
		ignoreNextRestart(toggle: boolean): void;
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
			p11: any,
			p12: boolean
		): boolean;
		isBitSet(address: number, offset: number): boolean;
		isBulletInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): boolean;
		isBulletInArea(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean;
		isBulletInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): boolean;
		isIncidentValid(incidentId: number): number;
		isNextWeatherType(weatherType: string): boolean;
		isPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: any): boolean;
		isPositionOccupied(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: boolean,
			p5: boolean,
			p6: boolean,
			p7: boolean,
			p8: boolean,
			p9: any,
			p10: boolean
		): boolean;
		isPrevWeatherType(weatherType: string): boolean;
		isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
		isProjectileTypeInAngledArea(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: any,
			p8: boolean
		): boolean;
		isProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, p7: boolean): boolean;
		isSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
		isStringNull(string: string): boolean;
		isStringNullOrEmpty(string: string): boolean;
		overrideSaveHouse(p0: boolean, p1: number, p2: number, p3: number, p4: number, p5: boolean, p6: number, p7: number): boolean;
		registerBoolToSave(p0: any, name: string): void;
		registerEnumToSave(p0: any, name: string): void;
		registerFloatToSave(p0: any, name: string): void;
		registerIntToSave(p0: any, name: string): void;
		registerSaveHouse(p0: number, p1: number, p2: number, p3: number, p4: any, p5: any, p6: any): void;
		registerTextLabelToSave(p0: any, name: string): void;
		removeDispatchSpawnBlockingArea(p0: any): void;
		setBit(address: number, offset: number): number;
		setBitsInRange(vars: number, rangeStart: number, rangeEnd: number, p3: number): number;
		setCloudHatTransition(type: string, transitionTime: number): void;
		setCreditsActive(toggle: boolean): void;
		setDispatchIdealSpawnDistance(p0: number): void;
		setDispatchTimeBetweenSpawnAttempts(p0: any, p1: number): void;
		setDispatchTimeBetweenSpawnAttemptsMultiplier(p0: any, p1: number): void;
		setExplosiveAmmoThisFrame(): void;
		setExplosiveMeleeThisFrame(): void;
		setFadeInAfterDeathArrest(toggle: boolean): void;
		setFadeInAfterLoad(toggle: boolean): void;
		setFadeOutAfterArrest(toggle: boolean): void;
		setFadeOutAfterDeath(toggle: boolean): void;
		setFakeWantedLevel(fakeWantedLevel: number): void;
		setFireAmmoThisFrame(): void;
		setGamePaused(toggle: boolean): void;
		setGravityLevel(level: number): void;
		setMinigameInProgress(toggle: boolean): void;
		setMissionFlag(toggle: boolean): void;
		setOverrideWeather(weatherType: string): void;
		setRainFxIntensity(intensity: number): void;
		setRandomEventFlag(p0: boolean): void;
		setRandomSeed(time: number): void;
		setSaveHouse(p0: any, p1: boolean, p2: boolean): void;
		setSaveMenuActive(unk: boolean): void;
		setSuperJumpThisFrame(): void;
		setThisScriptCanBePaused(toggle: boolean): void;
		setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;
		setTimeScale(time: number): void;
		setUnkMapFlag(flag: number): void;
		setWeatherTypeNow(weatherType: string): void;
		setWeatherTypeNowPersist(weatherType: string): void;
		setWeatherTypeOverTime(weatherType: string, time: number): void;
		setWeatherTypePersist(weatherType: string): void;
		setWeatherTypeTransition(sourceWeather: Hash, targetWeather: Hash, transitionTime: number): void;
		setWind(p0: number): void;
		setWindDirection(direction: number): void;
		setWindSpeed(speed: number): void;
		shootSingleBulletBetweenCoords(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			damage: number,
			p7: boolean,
			weaponHash: Hash,
			ownerPed: Handle,
			isAudible: boolean,
			isInvisible: boolean,
			speed: number
		): void;
		startSaveArray(p0: any, p1: number, arrayName: string): void;
		startSaveData(p0: any, p1: any, p2: boolean): void;
		startSaveStruct(p0: any, p1: number, structName: string): void;
		stringToInt(string: string, outInteger: number): number;
		tan(p0: number): number;
		terminateAllScriptsWithThisName(scriptName: string): void;
		usingMissionCreator(toggle: boolean): void;
	}

	export interface GameGraphicsMp {
		addDecal(
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
			p13: number,
			p14: number,
			p15: number,
			p16: number,
			p17: boolean,
			p18: boolean,
			p19: boolean
		): number;
		addPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): void;
		beginTextComponent(componentType: string): void;
		callScaleformMovieFunctionFloatParams(
			scaleform: number,
			functionName: string,
			param1: number,
			param2: number,
			param3: number,
			param4: number,
			param5: number
		): void;
		callScaleformMovieFunctionMixedParams(
			scaleform: number,
			functionName: string,
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
		callScaleformMovieFunctionStringParams(
			scaleform: number,
			functionName: string,
			param1: string,
			param2: string,
			param3: string,
			param4: string,
			param5: string
		): void;
		callScaleformMovieMethod(scaleform: number, method: string): void;
		createCheckpoint(
			type: number,
			posX1: number,
			posY1: number,
			posZ1: number,
			posX2: number,
			posY2: number,
			posZ2: number,
			radius: number,
			colorR: number,
			colorG: number,
			colorB: number,
			alpha: number,
			reserved: number
		): number;
		destroyTrackedPoint(point: Handle): void;
		disableVehicleDistantlights(toggle: boolean): void;
		doesParticleFxLoopedExist(ptfxHandle: number): boolean;
		drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number, alpha: number): void;
		drawDebugBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number, alpha: number): void;
		drawDebugCross(x: number, y: number, z: number, size: number, r: number, g: number, b: number, alpha: number): void;
		drawDebugLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number, alpha: number): void;
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
		drawDebugSphere(x: number, y: number, z: number, radius: number, r: number, g: number, b: number, alpha: number): void;
		drawDebugText(text: string, x: number, y: number, z: number, r: number, g: number, b: number, alpha: number): void;
		drawDebugText2d(text: string, x: number, y: number, z: number, r: number, g: number, b: number, alpha: number): void;
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
		drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number, alpha: number): void;
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
			colorR: number,
			colorG: number,
			colorB: number,
			alpha: number,
			bobUpAndDown: boolean,
			faceCamera: boolean,
			p19: number,
			rotate: boolean,
			textureDict: string,
			textureName: string,
			drawOnEnts: boolean
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
			r: number,
			g: number,
			b: number,
			alpha: number
		): void;
		drawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a: number): void;
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
			p9: number
		): void;
		drawScaleformMovie3d(
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
			p13: any
		): void;
		drawScaleformMovie3dNonAdditive(
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
			p13: any
		): void;
		drawScaleformMovieFullscreen(scaleform: number, red: number, green: number, blue: number, alpha: number, unk: boolean): void;
		drawScaleformMovieFullscreenMasked(scaleform1: number, scaleform2: number, red: number, green: number, blue: number, alpha: number): void;
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
			roundness: number,
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
			shadow: number
		): void;
		drawSprite(
			textureDict: string,
			textureName: string,
			screenX: number,
			screenY: number,
			scaleX: number,
			scaleY: number,
			heading: number,
			colorR: number,
			colorG: number,
			colorB: number,
			alpha: number
		): void;
		drawText(
			text: string,
			position: shared.Array3d | shared.Array2d,
			data?: {
				font: number;
				color: shared.RGBA;
				scale: shared.Array2d;
				outline: boolean;
				centre?: boolean;
			}
		): void;
		drawTvChannel(
			xPos: number,
			yPos: number,
			xScale: number,
			yScale: number,
			rotation: number,
			r: number,
			g: number,
			b: number,
			alpha: number
		): void;
		enableAlienBloodVfx(toggle: boolean): void;
		enableClownBloodVfx(toggle: boolean): void;
		enableMovieSubtitles(toggle: boolean): void;
		enableLights(toggle: boolean): void;
		fadeDecalsInRange(p0: any, p1: any, p2: any, p3: any, p4: any): void;
		getDecalWashLevel(decal: number): number;
		getSafeZoneSize(): number;
		getScreenActiveResolution(
			x: number,
			y: number
		): {
			x: number;
			y: number;
		};
		getScreenAspectRatio(b: boolean): number;
		getScreenEffectIsActive(effectName: string): number;
		getScreenResolution(
			x: number,
			y: number
		): {
			x: number;
			y: number;
		};
		getTextureResolution(textureDict: string, textureName: string): shared.Vector3Mp;
		hasHudScaleformLoaded(componentIndex: HudComponent | number): boolean;
		hasNamedScaleformMovieLoaded(scaleformName: string): boolean;
		hasScaleformContainerMovieLoadedIntoParent(scaleformHandle: number): boolean;
		hasScaleformMovieLoaded(scaleformHandle: number): boolean;
		hasStreamedTextureDictLoaded(textureDict: string): boolean;
		isDecalAlive(decal: number): boolean;
		isTrackedPointVisible(point: Handle): boolean;
		loadMovieMeshSet(movieMeshSetName: string): number;
		loadTvChannel(tvChannel: Hash): boolean;
		moveVehicleDecals(p0: any, p1: any): void;
		notify(text: string): void;
		pushScaleformMovieFunction(scaleform: number, functionName: string): boolean;
		pushScaleformMovieFunctionFromHudComponent(componentIndex: HudComponent | number, functionName: string): boolean;
		pushScaleformMovieFunctionN(functionName: string): boolean;
		popScaleformMovieFunctionVoid(): void;
		pushScaleformMovieFunctionParameterBool(value: boolean): void;
		pushScaleformMovieFunctionParameterFloat(value: number): void;
		pushScaleformMovieFunctionParameterInt(value: number): void;
		pushScaleformMovieFunctionParameterString(value: string): void;
		releaseMovieMeshSet(movieMeshSet: number): void;
		removeDecal(decal: number): void;
		removeDecalsFromObject(obj: Handle): void;
		removeDecalsFromObjectFacing(obj: Handle, x: number, y: number, z: number): void;
		removeDecalsInRange(x: number, y: number, z: number, range: number): void;
		removeParticleFx(ptfxHandle: number, p1: boolean): void;
		removeParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;
		requestHudScaleform(componentIndex: HudComponent | number): void;
		requestScaleformMovie(scaleformName: string): number;
		requestScaleformMovie3(scaleformName: string): number;
		requestScaleformMovieInstance(scaleformName: string): number;
		requestStreamedTextureDict(textureDict: string, p1: boolean): void;
		screen2dToWorld3d(vector2: shared.Vector3Mp): shared.Vector3Mp;
		set2dLayer(layer: number): void;
		setBlackout(enable: boolean): void;
		setDebugLinesAndSpheresDrawingActive(enabled: boolean): void;
		setDrawOrigin(x: number, y: number, z: number, p3: any): void;
		setFarShadowsSuppressed(toggle: boolean): void;
		setFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number): void;
		setForcePedFootstepsTracks(toggle: boolean): void;
		setForceVehicleTrails(toggle: boolean): void;
		setFrozenRenderingDisabled(enabled: boolean): void;
		setNightvision(toggle: boolean): void;
		setNoiseoveride(toggle: boolean): void;
		setNoisinessoveride(value: number): void;
		setParticleFxBloodScale(p0: boolean): void;
		setParticleFxCamInsideNonplayerVehicle(p0: any, p1: boolean): void;
		setParticleFxCamInsideVehicle(p0: boolean): void;
		setParticleFxLoopedAlpha(ptfxHandle: number, alpha: number): void;
		setParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number, p4: boolean): void;
		setParticleFxLoopedEvolution(ptfxHandle: number, propertyName: string, amount: number, Id: boolean): void;
		setParticleFxLoopedOffsets(ptfxHandle: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;
		setParticleFxLoopedRange(ptfxHandle: number, range: number): void;
		setParticleFxLoopedScale(ptfxHandle: number, scale: number): void;
		setParticleFxNonLoopedAlpha(alpha: number): void;
		setParticleFxNonLoopedColour(r: number, g: number, b: number): void;
		setParticleFxShootoutBoat(p0: any): void;
		setPtfxAssetNextCall(name: string): void;
		setPtfxAssetOldToNew(oldAsset: string, newAsset: string): void;
		setScaleformMovieAsNoLongerNeeded(scaleformHandle: number): number;
		setScaleformMovieToUseSystemTime(scaleform: number, toggle: boolean): void;
		setScreenDrawPosition(x: number, y: number): void;
		setSeethrough(toggle: boolean): void;
		setStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;
		setTimecycleModifier(modifierName: string): void;
		setTimecycleModifierStrength(strength: number): void;
		setTrackedPointInfo(point: Handle, x: number, y: number, z: number, radius: number): void;
		setTransitionTimecycleModifier(modifierName: string, transition: number): void;
		setTvAudioFrontend(toggle: boolean): void;
		setTvChannel(channel: number): void;
		setTvVolume(volume: number): void;
		sittingTv(scaleform: number): string;
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
		startParticleFxLoopedOnEntity(
			effectName: string,
			entity: Handle,
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
		startParticleFxLoopedOnEntity2(
			effectName: string,
			entity: Handle,
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
			entity: Handle,
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
		startParticleFxLoopedOnEntityBone2(
			effectName: string,
			entity: Handle,
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
		startParticleFxLoopedOnPedBone(
			effectName: string,
			ped: Handle,
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
		): boolean;
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
			zAxis: boolean
		): boolean;
		startParticleFxNonLoopedOnEntity(
			effectName: string,
			entity: Handle,
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
		startParticleFxNonLoopedOnEntity2(
			effectName: string,
			entity: Handle,
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
		): boolean;
		startParticleFxNonLoopedOnPedBone(
			effectName: string,
			ped: Handle,
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
		startParticleFxNonLoopedOnPedBone2(
			effectName: string,
			ped: Handle,
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
		startScreenEffect(effectName: string, duration: number, looped: boolean): void;
		stopParticleFxLooped(ptfxHandle: number, p1: boolean): void;
		stopScreenEffect(effectName: string): void;
		transitionFromBlurred(transitionTime: number): boolean;
		transitionToBlurred(transitionTime: number): boolean;
		washDecalsInRange(p0: any, p1: any, p2: any, p3: any, p4: any): void;
		world3dToScreen2d(
			worldX: number,
			worldY: number,
			worldZ: number
		): {
			x: number;
			y: number;
		};
		setLightsState(id: number, toggle: boolean): void;
	}

	export interface GameInteriorMp {
		addPickupToInteriorRoomByName(pickup: PickupMp, roomName: string): void;
		areCoordsCollidingWithExterior(x: number, y: number, z: number): boolean;
		capInterior(interiorId: number, toggle: boolean): void;
		disableInterior(interiorId: number, toggle: boolean): void;
		disableInteriorProp(interiorId: number, propName: string): void;
		enableInteriorProp(interiorId: number, propName: string): void;
		getInteriorAtCoords(x: number, y: number, z: number): number;
		getInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;
		getInteriorFromCollision(x: number, y: number, z: number): number;
		getInteriorGroupId(interiorId: number): number;
		getOffsetFromInteriorInWorldCoords(interiorId: number, x: number, y: number, z: number): shared.Vector3Mp;
		hideMapObjectThisFrame(mapObjectHash: number): void;
		hideMapObjectThisFrame(mapObjectHash: string): void;
		isInteriorCapped(interiorId: number): boolean;
		isInteriorDisabled(interiorId: number): boolean;
		isInteriorPropEnabled(interiorId: number, propName: string): boolean;
		isInteriorReady(interiorId: number): boolean;
		isValidInterior(interiorId: number): boolean;
		refreshInterior(interiorId: number): void;
		unkGetInteriorAtCoords(x: number, y: number, z: number, unk: number): number;
		unpinInterior(interiorId: number): void;
	}

	export interface GameItemsetMp {
		addToItemset(itemset: number, p1: any): boolean;
		cleanItemset(itemset: number): void;
		createItemset(p0: boolean): number;
		destroyItemset(itemset: number): void;
		getIndexedItemInItemset(itemset: number, p1: any): any;
		getItemsetSize(itemset: number): number;
		isInItemset(itemset: number, p1: any): boolean;
		isItemsetValid(itemset: number): boolean;
		removeFromItemset(itemset: number, p1: any): void;
	}

	export interface GameMobileMp {
		cellCamActivate(p0: boolean, p1: boolean): void;
		createMobilePhone(phoneType: number): void;
		getMobilePhonePosition(position: shared.Vector3Mp): shared.Vector3Mp;
		getMobilePhoneRenderId(renderId: number): number;
		getMobilePhoneRotation(rotation: shared.Vector3Mp, p1: any): shared.Vector3Mp;
		moveFinger(direction: number): void;
		scriptIsMovingMobilePhoneOffscreen(toggle: boolean): void;
		setMobilePhonePosition(posX: number, posY: number, posZ: number): void;
		setMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: any): void;
		setMobilePhoneScale(scale: number): void;
		setPhoneLean(toggle: boolean): void;
	}

	export interface GameObjectMp {
		addDoorToSystem(doorHash: Hash, modelHash: Hash, x: number, y: number, z: number, p5: number, p6: number, p7: number): void;
		createAmbientPickup(
			pickupHash: Hash,
			posX: number,
			posY: number,
			posZ: number,
			p4: number,
			value: number,
			modelHash: Hash,
			p7: boolean,
			p8: boolean
		): PickupMp;
		createMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: Hash): void;
		/**
		 * Creates an object (prop) with the specified model centered at the specified position.
		 This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
		 *
		 * @param {Hash} modelHash - The model to spawn.
		 *
		 * @param {number} x - Spawn coordinate X component.
		 * @param {number} y - Spawn coordinate Y component.
		 * @param {number} z - Spawn coordinate Z component.
		 * @param {boolean} networkHandle - Whether to create a network object for the object. If false, the object exists only locally.
		 * @param {boolean} createHandle - Whether to register the object as pinned to the script host in the R\* network model.
		 * @param {boolean} dynamic - False to create a door archetype (archetype flag bit 26 set) as a door. Required to be set to true to create door models in network mode.
		 *
		 * @return {Handle} - A script handle (fwScriptGuid index) for the object, or `0` if the object failed to be created.
		 *
		 * {@link https://wiki.rage.mp/index.php?title=Object::createObject|Object::createObject}
		 */
		createObject(modelHash: Hash, x: number, y: number, z: number, networkHandle: boolean, createHandle: boolean, dynamic: boolean): Handle;
		createObjectNoOffset(
			modelHash: Hash,
			x: number,
			y: number,
			z: number,
			networkHandle: boolean,
			createHandle: boolean,
			dynamic: boolean
		): Handle;
		createPickup(pickupHash: Hash, posX: number, posY: number, posZ: number, p4: number, value: number, p6: boolean, modelHash: Hash): PickupMp;
		createPickupRotate(
			pickupHash: Hash,
			posX: number,
			posY: number,
			posZ: number,
			rotX: number,
			rotY: number,
			rotZ: number,
			flag: number,
			amount: number,
			p9: any,
			p10: boolean,
			modelHash: Hash
		): PickupMp;
		createPortablePickup(pickupHash: Hash, x: number, y: number, z: number, placeOnGround: boolean, modelHash: Hash): PickupMp;
		createPortablePickup2(pickupHash: Hash, x: number, y: number, z: number, placeOnGround: boolean, modelHash: Hash): PickupMp;
		deleteObject(object: Handle): Handle;
		doesDoorExist(doorHash: Hash): boolean;
		doesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: Hash, p5: boolean): boolean;
		doesPickupExist(p0: any): boolean;
		doesPickupObjectExist(p0: any): boolean;
		doorControl(doorHash: Hash, x: number, y: number, z: number, locked: boolean, p5: number, p6: number, p7: number): void;
		getClosestObjectOfType(
			x: number,
			y: number,
			z: number,
			radius: number,
			modelHash: Hash,
			isMissing: boolean,
			p6: boolean,
			p7: boolean
		): Handle;
		getObjectFragmentDamageHealth(p0: any, p1: boolean): number;
		getObjectOffsetFromCoords(
			xPos: number,
			yPos: number,
			zPos: number,
			heading: number,
			xOffset: number,
			yOffset: number,
			zOffset: number
		): shared.Vector3Mp;
		getPickupCoords(p0: any): number;
		getSafePickupCoords(x: number, y: number, z: number, p3: any, p4: any): shared.Vector3Mp;
		getStateOfClosestDoorOfType(
			type: Hash,
			x: number,
			y: number,
			z: number,
			locked: number,
			heading: number
		): {
			locked: number;
			heading: number;
		};
		hasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: Hash, p5: any): boolean;
		hasPickupBeenCollected(p0: any): boolean;
		highlightPlacementCoords(x: number, y: number, z: number, colorIndex: number): void;
		isAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;
		isDoorClosed(door: Hash): boolean;
		isGarageEmpty(garage: any, p1: boolean, p2: number): boolean;
		isObjectNearPoint(objectHash: Hash, x: number, y: number, z: number, range: number): boolean;
		isPickupWithinRadius(pickupHash: Hash, x: number, y: number, z: number, radius: number): boolean;
		isPointInAngledArea(
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
			p10: boolean,
			p11: boolean
		): boolean;
		removeAllPickupsOfType(p0: any): void;
		removeDoorFromSystem(doorHash: Hash): void;
		removePickup(pickup: PickupMp): void;
		setDoorAccelerationLimit(doorHash: Hash, limit: number, p2: boolean, p3: boolean): void;
		setDoorAjarAngle(doorHash: Hash, ajar: number, p2: boolean, p3: boolean): void;
		setForceObjectThisFrame(p0: any, p1: any, p2: any, p3: any): void;
		setPickupRegenerationTime(p0: any, p1: any): void;
		setStateOfClosestDoorOfType(type: Hash, x: number, y: number, z: number, locked: boolean, heading: number, p6: boolean): void;
		setTeamPickupObject(p0: any, p1: any, p2: any): void;
		trackObjectVisibility(p0: any): void;
	}

	export interface GamePathfindMp {
		addNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: any): void;
		addNavmeshRequiredRegion(p0: number, p1: number, p2: number): void;
		calculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
		disableNavmeshInArea(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
		generateDirectionsToCoord(
			x: number,
			y: number,
			z: number,
			p3: any,
			p4: number,
			vehicle: Handle,
			p6: number
		): {
			p4: number;
			vehicle: Handle;
			p6: number;
		};
		getClosestMajorVehicleNode(
			x: number,
			y: number,
			z: number,
			outPosition: shared.Vector3Mp,
			unknown1: number,
			unknown2: number
		): shared.Vector3Mp;
		getClosestRoad(
			x: number,
			y: number,
			z: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: number,
			p10: boolean
		): boolean;
		getClosestVehicleNode(
			x: number,
			y: number,
			z: number,
			outPosition: shared.Vector3Mp,
			nodeType: number,
			p5: number,
			p6: number
		): shared.Vector3Mp;
		getClosestVehicleNodeWithHeading(
			x: number,
			y: number,
			z: number,
			outPosition: shared.Vector3Mp,
			outHeading: number,
			nodeType: number,
			p6: number,
			p7: number
		): {
			outPosition: shared.Vector3Mp;
			outHeading: number;
		};
		getIsSlowRoadFlag(nodeID: number): boolean;
		getNthClosestVehicleNode(
			x: number,
			y: number,
			z: number,
			nthClosest: number,
			outPosition: shared.Vector3Mp,
			unknown1: any,
			unknown2: any,
			unknown3: any
		): shared.Vector3Mp;
		getNthClosestVehicleNodeFavourDirection(
			x: number,
			y: number,
			z: number,
			desiredX: number,
			desiredY: number,
			desiredZ: number,
			nthClosest: number,
			outPosition: shared.Vector3Mp,
			outHeading: number,
			nodetype: number,
			p10: any,
			p11: any
		): {
			outPosition: shared.Vector3Mp;
			outHeading: number;
		};
		getNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): number;
		getNthClosestVehicleNodeIdWithHeading(
			x: number,
			y: number,
			z: number,
			nthClosest: number,
			outPosition: shared.Vector3Mp,
			outHeading: number,
			p6: any,
			p7: number,
			p8: number
		): shared.Vector3Mp;
		getNthClosestVehicleNodeWithHeading(
			x: number,
			y: number,
			z: number,
			nthClosest: number,
			outPosition: shared.Vector3Mp,
			heading: number,
			unknown1: any,
			unknown2: number,
			unknown3: number,
			unknown4: number
		): {
			outPosition: shared.Vector3Mp;
			heading: number;
			unknown1: any;
		};
		getRandomVehicleNode(
			x: number,
			y: number,
			z: number,
			radius: number,
			p4: boolean,
			p5: boolean,
			p6: boolean,
			outPosition: shared.Vector3Mp,
			heading: number
		): {
			outPosition: shared.Vector3Mp;
			outHeading: number;
		};
		getSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, outPosition: shared.Vector3Mp, flags: number): shared.Vector3Mp;
		getStreetNameAtCoord(
			x: number,
			y: number,
			z: number,
			streetName: number,
			crossingRoad: number
		): {
			streetName: number;
			crossingRoad: number;
		};
		getSupportsGpsRouteFlag(nodeID: number): boolean;
		getVehicleNodePosition(nodeId: number, outPosition: shared.Vector3Mp): shared.Vector3Mp;
		getVehicleNodeProperties(
			x: number,
			y: number,
			z: number,
			density: number,
			flags: number
		): {
			density: number;
			flags: number;
		};
		isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
		isPointOnRoad(x: number, y: number, z: number, vehicle: Handle): boolean;
		isVehicleNodeIdValid(vehicleNodeId: number): boolean;
		loadAllPathNodes(keepInMemory: boolean): boolean;
		removeNavmeshBlockingObject(p0: any): void;
		setGpsDisabledZone(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
		setIgnoreNoGpsFlag(ignore: boolean): void;
		setPedPathsBackToOriginal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
		setPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: boolean): void;
		setRoadsBackToOriginal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
		setRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: number): void;
		setRoadsInAngledArea(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			angle: number,
			unknown1: boolean,
			unknown2: boolean,
			unknown3: boolean
		): void;
		setRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown1: boolean, unknown2: boolean): void;
		updateNavmeshBlockingObject(p0: any, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any): void;
	}

	export interface GamePedMp {
		addRelationshipGroup(name: string, groupHash: Hash): Hash;
		addScenarioBlockingArea(
			p0: number,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: boolean,
			p7: boolean,
			p8: boolean,
			p9: boolean
		): void;
		attachSynchronizedSceneToEntity(sceneId: number, entity: Handle, boneIndexId: number): void;
		canCreateRandomPed(unk: boolean): boolean;
		clearPedAlternateWalkAnim(p0: any, p1: number): void;
		clearRelationshipBetweenGroups(relationship: number, group1: Hash, group2: Hash): void;
		createGroup(unused: number): number;
		createNmMessage(startImmediately: boolean, messageId: number): void;
		createPed(
			pedType: number,
			modelHash: Hash,
			x: number,
			y: number,
			z: number,
			heading: number,
			networkHandle: boolean,
			pedHandle: boolean
		): Handle;
		createRandomPed(posX: number, posY: number, posZ: number): Handle;
		createSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: number): number;
		detachSynchronizedScene(sceneId: number): void;
		disposeSynchronizedScene(scene: number): void;
		doesGroupExist(groupId: number): boolean;
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
		getClosestPed(
			x: number,
			y: number,
			z: number,
			radius: number,
			p4: boolean,
			p5: boolean,
			outPed: Handle,
			p7: boolean,
			p8: boolean,
			pedType: number
		): Handle;
		getFirstParentIdForPedType(type: number): number;
		getGroupSize(groupId: number, unknown: any, sizeInMembers: number): number;
		getNumHeadOverlayValues(overlayId: number): number;
		getNumParentPedsOfType(type: number): number;
		getPeadheadshotTxdString(handle: number): string;
		getPedAsGroupLeader(groupId: number): Handle;
		getPedAsGroupMember(groupId: number, memberNumber: number): Handle;
		getRandomPedAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: number): Handle;
		getRelationshipBetweenGroups(group1: Hash, group2: Hash): number;
		getSynchronizedScenePhase(sceneId: number): number;
		getSynchronizedSceneRate(sceneId: number): number;
		getTattooZone(collection: Hash, overlay: Hash): number;
		hasActionModeAssetLoaded(asset: string): boolean;
		hasPedReceivedEvent(p0: any, p1: any): boolean;
		hasStealthModeAssetLoaded(asset: string): boolean;
		isAnyPedNearPoint(x: number, y: number, z: number, radius: number): boolean;
		isAnyPedShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): boolean;
		isAValidBlushColor(colorId: number): boolean;
		isAValidHairColor(colorId: number): boolean;
		isAValidLipstickColor(colorId: number): boolean;
		isCopPedInArea3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
		isPedheadshotReady(handle: number): boolean;
		isPedheadshotValid(handle: number): number;
		isPedRespondingToEvent(p0: any, p1: any): boolean;
		isSynchronizedSceneLooped(sceneId: number): boolean;
		isSynchronizedSceneRunning(sceneId: number): boolean;
		removeActionModeAsset(asset: string): void;
		removeGroup(groupId: number): void;
		removeRelationshipGroup(groupHash: Hash): void;
		removeScenarioBlockingArea(p0: any, p1: boolean): void;
		removeStealthModeAsset(asset: string): void;
		requestActionModeAsset(asset: string): void;
		requestStealthModeAsset(asset: string): void;
		resetGroupFormationDefaultSpacing(groupHandle: number): void;
		setAiMeleeWeaponDamageModifier(modifier: number): void;
		setAiWeaponDamageModifier(value: number): void;
		setCreateRandomCops(toggle: boolean): void;
		setCreateRandomCopsNotOnScenarios(toggle: boolean): void;
		setCreateRandomCopsOnScenarios(toggle: boolean): void;
		setGroupFormation(groupId: number, formationType: number): void;
		setGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number): void;
		setGroupSeparationRange(groundHandle: number, separationRange: number): void;
		setPedAlternateWalkAnim(p0: any, p1: any, p2: any, p3: number, p4: boolean): void;
		setPedDensityMultiplierThisFrame(multiplier: number): void;
		setPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
		setPedReserveParachuteTintIndex(p0: any, p1: any): void;
		setPedToRagdollWithFall(
			p0: any,
			p1: any,
			p2: any,
			p3: any,
			p4: any,
			p5: any,
			p6: any,
			p7: any,
			p8: any,
			p9: any,
			p10: any,
			p11: any,
			p12: any,
			p13: any
		): boolean;
		setRelationshipBetweenGroups(relationship: number, group1: Hash, group2: Hash): void;
		setScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;
		setScenarioPedsSpawnInSphereArea(p0: any, p1: any, p2: any, p3: any, p4: any): void;
		setScenarioPedsToBeReturnedByNextCommand(value: boolean): void;
		setScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;
		setSynchronizedSceneLooped(sceneId: number, toggle: boolean): void;
		setSynchronizedSceneOrigin(sceneId: number, x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p7: boolean): void;
		setSynchronizedScenePhase(sceneId: number, phase: number): void;
		setSynchronizedSceneRate(sceneId: number, rate: number): void;
		setTimeExclusiveDisplayTexture(p0: any, p1: boolean): void;
	}

	export interface GamePlayerMp {
		areFlashingStarsAboutToDrop(): boolean;
		areStarsGreyedOut(): boolean;
		canStartMission(): boolean;
		disableFiring(toggle: boolean): void;
		disableVehicleRewards(): void;
		displaySystemSigninUi(unk: boolean): void;
		enableSpecialAbility(toggle: boolean): void;
		forceCleanup(cleanupFlags: number): void;
		forceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void;
		forceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;
		getEntityIsFreeAimingAt(entity: Handle): boolean;
		getTargetEntity(entity: Handle): boolean;
		getTimeSinceDroveAgainstTraffic(): number;
		getTimeSinceDroveOnPavement(): number;
		getTimeSinceHitPed(): number;
		getTimeSinceHitVehicle(): number;
		getWantedLevelRadius(): boolean;
		getWantedLevelThreshold(wantedLevel: number): number;
		giveAchievementTo(achievement: number): boolean;
		hasAchievementBeenPassed(achievement: number): boolean;
		hasForceCleanupOccurred(cleanupFlags: number): boolean;
		intToParticipantindex(value: number): number;
		intToindex(value: number): Handle;
		isFreeAiming(): boolean;
		isFreeAimingAtEntity(entity: Handle): boolean;
		isTargettingEntity(entity: Handle): boolean;
		isSpecialAbilityActive(): boolean;
		isSpecialAbilityEnabled(): boolean;
		isSpecialAbilityMeterFull(): boolean;
		isSpecialAbilityUnlocked(playerModel: Hash): boolean;
		playerAttachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
		reportCrime(crimeType: number, wantedLvlThresh: number): void;
		reserveEntityExplodesOnHighExplosionCombo(p1: number): void;
		resetWantedLevelDifficulty(): void;
		restoreStamina(p1: number): void;
		setAirDragMultiplierForsVehicle(multiplier: number): void;
		setAllRandomPedsFlee(toggle: boolean): void;
		setAllRandomPedsFleeThisFrame(): void;
		setAreasGeneratorOrientation(): void;
		setAutoGiveParachuteWhenEnterPlane(toggle: boolean): void;
		setCanDoDriveBy(toggle: boolean): void;
		setDisableAmbientMeleeMove(toggle: boolean): void;
		setDispatchCopsFor(toggle: boolean): void;
		setHealthRechargeMultiplier(regenRate: number): void;
		setHudAnimStopLevel(toggle: boolean): void;
		setIgnoreLowPriorityShockingEvents(toggle: boolean): void;
		setInvincible(toggle: boolean): void;
		setMaxWantedLevel(maxWantedLevel: number): void;
		setMeleeWeaponDefenseModifier(modifier: number): void;
		setClothLockCounter(value: number): void;
		setClothPackageIndex(index: number): void;
		setTargetingMode(targetMode: number): void;
		setPoliceRadarBlips(toggle: boolean): void;
		setRunSprintMultiplierFor(multiplier: number): void;
		setSpecialAbilityMultiplier(multiplier: number): void;
		setSwimMultiplierFor(multiplier: number): void;
		setWantedLevelDifficulty(difficulty: number): void;
		setWantedLevelMultiplier(multiplier: number): void;
		simulateInputGait(amount: number, gaitType: number, speed: number, p4: boolean, p5: boolean): void;
		specialAbilityChargeAbsolute(p1: number, p2: boolean): void;
		specialAbilityChargeContinuous(p1: boolean): void;
		specialAbilityChargeLarge(p1: boolean, p2: boolean): void;
		specialAbilityChargeMedium(p1: boolean, p2: boolean): void;
		specialAbilityChargeNormalized(normalizedValue: number, p2: boolean): void;
		specialAbilityChargeSmall(p1: boolean, p2: boolean): void;
		specialAbilityDeactivate(): void;
		specialAbilityDeactivateFast(): void;
		specialAbilityDepleteMeter(p1: boolean): void;
		specialAbilityFillMeter(p1: boolean): void;
		specialAbilityLock(playerModel: Hash): void;
		specialAbilityReset(): void;
		specialAbilityUnlock(playerModel: Hash): void;
		startFiringAmnesty(duration: number): void;
		startTeleport(x: number, y: number, z: number, heading: number, p5: boolean, p6: boolean, p7: boolean): void;
	}

	export interface GameRecorderMp {
		isRecording(): boolean;
		start(mode: number): void;
		stop(save: boolean): void;
	}

	export interface GameRopeMp {
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
			p10: number,
			p11: boolean,
			p12: boolean,
			rigid: boolean,
			p14: number,
			breakWhenShot: boolean,
			unkPtr: any
		): Handle;
		applyImpulseToCloth(posX: number, posY: number, posZ: number, vecX: number, vecY: number, vecZ: number, impulse: number): void;
		attachEntitiesToRope(
			rope: Handle,
			ent1: Handle,
			ent2: Handle,
			ent1_x: number,
			ent1_y: number,
			ent1_z: number,
			ent2_x: number,
			ent2_y: number,
			ent2_z: number,
			length: number,
			p10: boolean,
			p11: boolean,
			p12: any,
			p13: any
		): void;
		attachRopeToEntity(rope: Handle, entity: Handle, x: number, y: number, z: number, p5: boolean): void;
		breakEntityGlass(
			p0: any,
			p1: number,
			p2: number,
			p3: number,
			p4: number,
			p5: number,
			p6: number,
			p7: number,
			p8: number,
			p9: any,
			p10: boolean
		): void;
		deleteChildRope(rope: Handle): any;
		deleteRope(rope: Handle): void;
		detachRopeFromEntity(rope: Handle, entity: Handle): void;
		doesRopeExist(rope: Handle): Handle;
		getCgoffset(rope: Handle): shared.Vector3Mp;
		getRopeLastVertexCoord(rope: Handle): void;
		getRopeLength(rope: Handle): number;
		getRopeVertexCoord(rope: Handle, vertex: number): any;
		getRopeVertexCount(rope: Handle): number;
		loadRopeData(rope: Handle, rope_preset: string): any;
		pinRopeVertex(rope: Handle, vertex: number, x: number, y: number, z: number): void;
		ropeConvertToSimple(rope: Handle): void;
		ropeDrawShadowEnabled(rope: Handle, toggle: boolean): Handle;
		ropeForceLength(rope: Handle, length: number): any;
		ropeResetLength(rope: Handle, length: boolean): any;
		ropeSetUpdatePinverts(rope: Handle): void;
		setCgAtBoundcenter(rope: Handle): void;
		setCgoffset(rope: Handle, x: number, y: number, z: number): void;
		setDamping(rope: Handle, vertex: number, value: number): void;
		setDisableBreaking(rope: Handle, enabled: boolean): void;
		setDisableFragDamage(object: Handle, toggle: boolean): void;
		startRopeUnwindingFront(rope: Handle): void;
		startRopeWinding(rope: Handle): void;
		stopRopeUnwindingFront(rope: Handle): void;
		stopRopeWinding(rope: Handle): void;
		unpinRopeVertex(rope: Handle, vertex: number): any;
	}

	export interface GameScriptMp {
		doesScriptExist(scriptName: string): boolean;
		/**
		 * Event Group Type:
		 *
		 * **0** - CEventGroupScriptAI
		 *
		 * **1** - CEventGroupScriptNetwork
		 *
		 * {@link https://wiki.rage.mp/index.php?title=Script::getEventAtIndex|Script::getEventAtIndex}
		 * */
		getEventAtIndex(eventGroup: number, eventIndex: number): number;
		/**
		 * Event Group Type:
		 *
		 * **0** - CEventGroupScriptAI
		 *
		 * **1** - CEventGroupScriptNetwork
		 *
		 * {@link https://wiki.rage.mp/index.php?title=Script::getEventData|Script::getEventData}
		 * */
		getEventdata(eventGroup: number, eventIndex: number, eventData: number, eventDataSize: number): number;
		/**
		 * Event Group Type:
		 *
		 * **0** - CEventGroupScriptAI
		 *
		 * **1** - CEventGroupScriptNetwork
		 *
		 * {@link https://wiki.rage.mp/index.php?title=Script::getEventData|Script::getEventData}
		 * */
		getEventExists(eventGroup: number, eventIndex: number): boolean;
		/**
		 * Event Group Type:
		 *
		 * **0** - CEventGroupScriptAI
		 *
		 * **1** - CEventGroupScriptNetwork
		 *
		 * {@link https://wiki.rage.mp/index.php?title=Script::getNumberOfEvents|Script::getNumberOfEvents}
		 * */
		getNumberOfEvents(eventGroup: number): number;
		getNumberOfInstancesOfStreamedScript(scriptHash: Hash): number;
		getThreadName(threadId: number): string;
		hasScriptLoaded(scriptName: string): boolean;
		hasStreamedScriptLoaded(scriptHash: Hash): boolean;
		isStreamedScriptRunning(scriptHash: Hash): boolean;
		isThreadActive(threadId: number): boolean;
		/**
		 * @param scriptName - Script Name
		 *
		 * {@link https://wiki.rage.mp/index.php?title=Script::requestScript|Script::requestScript}
		 */
		requestScript(scriptName: Scripts | string): void;
		requestStreamedScript(scriptHash: Hash): void;
		setNoLoadingScreen(toggle: boolean): void;
		setScriptAsNoLongerNeeded(scriptName: string): void;
		setStreamedScriptAsNoLongerNeeded(scriptHash: Hash): void;
		terminateThread(threadId: number): void;
		triggerScriptEvent(p0: number, argsStruct: shared.Vector3Mp, argsStructSize: number, bitset: number): shared.Vector3Mp;
	}

	export interface GameStatsMp {
		leaderboards2ReadByHandle(p0: any, p1: any): boolean;
		leaderboards2ReadByRadius(p0: any, p1: any, p2: any): boolean;
		leaderboards2ReadByRank(p0: any, p1: any, p2: any): boolean;
		leaderboards2ReadByRow(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): boolean;
		leaderboards2ReadByScoreFloat(p0: any, p1: number, p2: any): boolean;
		leaderboards2ReadByScoreInt(p0: any, p1: any, p2: any): boolean;
		leaderboards2ReadFriendsByRow(p0: any, p1: any, p2: any, p3: boolean, p4: any, p5: any): boolean;
		leaderboards2WriteData(p0: any): boolean;
		leaderboardsCacheDataRow(p0: any): boolean;
		leaderboardsGetCacheDataRow(p0: any, p1: any, p2: any): boolean;
		leaderboardsGetCacheExists(p0: any): boolean;
		leaderboardsGetCacheTime(p0: any): any;
		leaderboardsGetColumnId(p0: any, p1: any, p2: any): any;
		leaderboardsGetColumnType(p0: any, p1: any, p2: any): any;
		leaderboardsGetNumberOfColumns(p0: any, p1: any): any;
		leaderboardsReadClear(p0: any, p1: any, p2: any): any;
		leaderboardsReadPending(p0: any, p1: any, p2: any): boolean;
		leaderboardsReadSuccessful(p0: any, p1: any, p2: any): boolean;
		playstatsAwardXp(p0: any, p1: any, p2: any): void;
		playstatsCheatApplied(cheat: string): void;
		playstatsClothChange(p0: any, p1: any, p2: any, p3: any, p4: any): void;
		playstatsFriendActivity(p0: any, p1: any): void;
		playstatsMatchStarted(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
		playstatsMissionCheckpoint(p0: any, p1: any, p2: any, p3: any): void;
		playstatsMissionOver(p0: any, p1: any, p2: any, p3: boolean, p4: boolean, p5: boolean): void;
		playstatsMissionStarted(p0: any, p1: any, p2: any, p3: boolean): void;
		playstatsNpcInvite(p0: any): void;
		playstatsOddjobDone(p0: any, p1: any, p2: any): void;
		playstatsPropChange(p0: any, p1: any, p2: any, p3: any): void;
		playstatsRaceCheckpoint(p0: any, p1: any, p2: any, p3: any, p4: any): void;
		playstatsRankUp(p0: any): void;
		playstatsShopItem(p0: any, p1: any, p2: any, p3: any, p4: any): void;
		playstatsWebsiteVisited(scaleformHash: Hash, p1: number): void;
		statClearSlotForReload(statSlot: number): any;
		statDeleteSlot(p0: any): any;
		statGetBool(statHash: Hash, outValue: boolean, p2: any): boolean;
		statGetBoolMasked(statName: Hash, mask: number, p2: number): boolean;
		statGetDate(statHash: Hash, p1: any, p2: any, p3: any): boolean;
		statGetFloat(statHash: Hash, outValue: number, p2: any): number;
		statGetInt(statHash: Hash, outValue: number, p2: number): number;
		statGetLicensePlate(statName: Hash): string;
		statGetMaskedInt(p0: any, p1: any, p2: any, p3: any, p4: any): boolean;
		statGetNumberOfDays(statName: Hash): number;
		statGetNumberOfHours(statName: Hash): number;
		statGetNumberOfMinutes(statName: Hash): number;
		statGetNumberOfSeconds(statName: Hash): number;
		statGetPos(p0: any, p1: any, p2: any, p3: any, p4: any): boolean;
		statGetString(statHash: Hash, p1: number): string;
		statGetUserId(p0: any): string;
		statIncrement(statName: Hash, value: number): void;
		statLoad(p0: number): boolean;
		statLoadPending(p0: any): boolean;
		statSave(p0: number, p1: boolean, p2: number): boolean;
		statSetBool(statName: Hash, value: boolean, save: boolean): boolean;
		statSetBoolMasked(statName: Hash, value: boolean, mask: number, save: boolean): boolean;
		statSetCurrentPosixTime(statName: Hash, p1: boolean): boolean;
		statSetDate(
			statName: Hash,
			value: {
				year: number;
				month: number;
				day: number;
				hour: number;
				minute: number;
				second: number;
				milisecond: number;
			},
			numFields: number,
			save: boolean
		): void;
		statSetFloat(statName: Hash, value: number, save: boolean): boolean;
		statSetGxtLabel(statName: Hash, value: string, save: boolean): boolean;
		statSetInt(statName: Hash, value: number, save: boolean): boolean;
		statSetLicensePlate(statName: Hash, str: string): boolean;
		statSetMaskedInt(statName: Hash, p1: any, p2: any, p3: number, save: boolean): boolean;
		statSetPos(statName: Hash, x: number, y: number, z: number, save: boolean): boolean;
		statSetProfileSetting(profileSetting: number, value: number): void;
		statSetString(statName: Hash, value: string, save: boolean): boolean;
		statSetUserId(statName: Hash, value: string, save: boolean): boolean;
		statSlotIsLoaded(p0: any): boolean;
	}

	export interface GameStreamingMp {
		doesAnimDictExist(animDict: string): boolean;
		forceStreamingUpdate(): boolean;
		getIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
		hasAnimDictLoaded(animDict: string): boolean;
		hasAnimSetLoaded(animSet: string): boolean;
		hasClipSetLoaded(clipSet: string): boolean;
		hasCollisionForModelLoaded(model: Hash): boolean;
		hasModelLoaded(model: Hash): boolean;
		hasNamedPtfxAssetLoaded(fxName: string): boolean;
		isIplActive(iplName: string): boolean;
		isModelAVehicle(model: Hash): boolean;
		isModelInCdimage(model: Hash): boolean;
		isModelValid(model: Hash): boolean;
		loadScene(x: number, y: number, z: number): void;
		newLoadSceneStart(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: any): boolean;
		newLoadSceneStartSafe(p0: number, p1: number, p2: number, p3: number, p4: any): boolean;
		prefetchSrl(p0: any): void;
		removeAnimDict(animDict: string): void;
		removeAnimSet(animSet: string): void;
		removeClipSet(clipSet: string): void;
		removeIpl(iplName: string): void;
		removeNamedPtfxAsset(fxName: string): void;
		requestAdditionalCollisionAtCoord(p0: number, p1: number, p2: number): void;
		requestAnimDict(animDict: string): void;
		requestAnimSet(animSet: string): void;
		requestClipSet(clipSet: string): void;
		requestCollisionAtCoord(x: number, y: number, z: number): any;
		requestCollisionForModel(model: Hash): void;
		requestIpl(iplName: string): void;
		requestModel(model: Hash, cb?: Function): void;
		requestModel2(model: Hash): void;
		requestNamedPtfxAsset(fxName: string): void;
		setDitchPoliceModels(toggle: boolean): void;
		setFocusArea(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;
		setGamePausesForStreaming(toggle: boolean): void;
		setHdArea(x: number, y: number, z: number, ground: number): void;
		setInteriorActive(interiorID: number, toggle: boolean): void;
		setModelAsNoLongerNeeded(model: Hash): void;
		setPedPopulationBudget(p0: number): void;
		setPlayerSwitchLocation(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any): void;
		setReducePedModelBudget(toggle: boolean): void;
		setReduceVehicleModelBudget(toggle: boolean): void;
		setSrlTime(p0: number): void;
		setStreaming(toggle: boolean): void;
		setUnkCameraSettings(x: number, y: number, z: number, rad: number, p4: any, p5: any): any;
		setVehiclePopulationBudget(p0: number): void;
		startPlayerSwitch(from: Handle, to: Handle, flags: number, switchType: number): void;
	}

	export interface GameSystemMp {
		ceil(value: number): number;
		cos(value: number): number;
		floor(value: number): number;
		pow(base: number, exponent: number): number;
		round(value: number): number;
		settimera(value: number): void;
		settimerb(value: number): void;
		shiftLeft(value: number, bitShift: number): number;
		shiftRight(value: number, bitShift: number): number;
		sin(value: number): number;
		sqrt(value: number): number;
		startNewScript(scriptName: string, stackSize: number): number;
		startNewScriptWithArgs(scriptName: string, args: any, argCount: number, stackSize: number): number;
		startNewStreamedScript(scriptHash: Hash, stackSize: number): number;
		startNewStreamedScriptWithArgs(scriptHash: Hash, args: any, argCount: number, stackSize: number): number;
		toFloat(value: number): number;
		vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
		vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
		vmag(p0: number, p1: number, p2: number): number;
		vmag2(p0: number, p1: number, p2: number): number;
	}

	export interface GameTimeMp {
		addToClockTime(hour: number, minute: number, second: number): void;
		advanceClockTimeTo(hour: number, minute: number, second: number): void;
		getLocalTime(
			year: number,
			month: number,
			day: number,
			hour: number,
			minute: number,
			second: number
		): {
			year: number;
			month: number;
			day: number;
			hour: number;
			minute: number;
			second: number;
		};
		getLocalTimeGmt(
			year: number,
			month: number,
			day: number,
			hour: number,
			minute: number,
			second: number
		): {
			year: number;
			month: number;
			day: number;
			hour: number;
			minute: number;
			second: number;
		};
		getPosixTime(
			year: number,
			month: number,
			day: number,
			hour: number,
			minute: number,
			second: number
		): {
			year: number;
			month: number;
			day: number;
			hour: number;
			minute: number;
			second: number;
		};
		pauseClock(toggle: boolean): void;
		setClockDate(day: number, month: number, year: number): void;
		setClockTime(hour: number, minute: number, second: number): void;

		// RAGE.MP extensions
		serverTickCount: number;
	}

	export interface GameUiMp {
		activateFrontendMenu(menuhash: Hash, Toggle_Pause: boolean, p2: number): void;
		addBlipForCoord(x: number, y: number, z: number): BlipMp;
		addBlipForPickup(pickup: PickupMp): BlipMp;
		addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): BlipMp;
		addNextMessageToPreviousBriefs(p0: boolean): void;
		addTextComponentFloat(value: number, decimalPlaces: number): void;
		addTextComponentInteger(value: number): void;
		addTextComponentItemString(labelName: string): void;
		addTextComponentSubstringCash(cashAmount: number, p1: boolean): void;
		addTextComponentSubstringLocalized(gxtEntryHash: Hash): void;
		addTextComponentSubstringPlayerName(text: string): void;
		addTextComponentSubstringTime(timestamp: number, flags: number): void;
		addTextComponentSubstringWebsite(website: string): void;
		addTrevorRandomModifier(headDisplayId: number): boolean;
		beginTextCommandSetBlipName(gxtentry: string): void;
		clearAdditionalText(p0: number, p1: boolean): void;
		clearFloatingHelp(p0: any, p1: boolean): void;
		clearHelp(toggle: boolean): void;
		clearThisPrint(p0: string): void;
		displayAmmoThisFrame(display: boolean): void;
		displayAreaName(toggle: boolean): void;
		displayCash(toggle: boolean): void;
		displayHelpTextFromStringLabel(p0: any, loop: boolean, beep: boolean, shape: number): void;
		displayHelpTextThisFrame(message: string, p1: boolean): void;
		displayHud(toggle: boolean): void;
		displayRadar(Toggle: boolean): any;
		doesTextBlockExist(gxt: string): boolean;
		doesTextLabelExist(gxt: string): boolean;
		drawNotification(blink: boolean, p1: boolean): number;
		drawNotification2(blink: boolean, p1: boolean): number;
		drawNotification3(blink: boolean, p1: boolean): number;
		drawNotification4(blink: boolean, p1: boolean): number;
		drawSubtitleTimed(time: number, p1: boolean): void;
		drawText(x: number, y: number): void;
		enableDeathbloodSeethrough(p0: boolean): void;
		flashAbilityBar(p0: any): void;
		flashWantedDisplay(p0: boolean): any;
		getBlipInfoIdCoord(p0: number): shared.Vector3Mp;
		getHudColour(
			hudIndex: number,
			r: number,
			g: number,
			b: number,
			a: number
		): {
			hudIndex: number;
			r: number;
			g: number;
			b: number;
			a: number;
		};
		getHudComponentPosition(componentIndex: HudComponent | number): number;
		getLabelText(labelName: string): string;
		getLengthOfLiteralString(string: string): number;
		getLengthOfStringWithThisTextLabel(gxt: string): number;
		getNamedRendertargetRenderId(p0: string): any;
		getStreetNameFromHashKey(hash: Hash): string;
		getTextScaleHeight(size: number, font: number): number;
		getTextScreenWidth(p0: boolean): number;
		getTextSubstring(text: string, position: number, length: number): string;
		getTextSubstringSafe(text: string, position: number, length: number, maxLength: number): string;
		getTextSubstringSlice(text: string, startPosition: number, endPosition: number): string;
		hasAdditionalTextLoaded(slot: number): boolean;
		hasHeadDisplayLoaded(headDisplayId: number): boolean;
		hasThisAdditionalTextLoaded(gxt: string, slot: number): boolean;
		hideHudComponentThisFrame(componentIndex: HudComponent | number): void;
		hideScriptedHudComponentThisFrame(componentIndex: HudComponent | number): void;
		hideSpecialAbilityLockonOperation(p0: any, p1: boolean): void;
		isHudComponentActive(componentIndex: HudComponent | number): boolean;
		isMinimapAreaRevealed(x: number, y: number, radius: number): boolean;
		isNamedRendertargetLinked(hash: Hash): boolean;
		isNamedRendertargetRegistered(p0: string): boolean;
		isPauseMenuActive(): boolean;
		isScriptedHudComponentActive(componentIndex: HudComponent | number): boolean;
		isStreamingAdditionalText(p0: number): boolean;
		keyHudColour(p0: boolean, p1: any): void;
		linkNamedRendertarget(hash: Hash): void;
		lockMinimapAngle(angle: number): void;
		lockMinimapPosition(x: number, y: number): void;
		objectDecalToggle(hash: Hash): void;
		registerNamedRendertarget(p0: string, p1: boolean): boolean;
		releaseNamedRendertarget(p0: any): boolean;
		removeBlip(blip: Hash): void;
		removeNotification(notifactionId: number): void;
		requestAdditionalText(gxt: string, slot: number): void;
		requestAdditionalText2(gxt: string, slot: number): void;
		resetHudComponentValues(componentIndex: HudComponent | number): void;
		respondingAsTemp(p0: number): void;
		restartFrontendMenu(menuHash: Hash, p1: number): void;
		setAbilityBarValue(p0: number, p1: number): void;
		setCursorSprite(spriteId: number): void;
		setFrontendActive(active: boolean): void;
		setGpsFlags(p0: number, p1: number): void;
		setGpsFlashes(toggle: boolean): void;
		setHeadDisplayFlag(headDisplayId: number, sprite: number, toggle: boolean): void;
		setHeadDisplayString(headDisplayId: number, string: string): void;
		setHeadDisplayWanted(headDisplayId: number, wantedlvl: number): void;
		setHudColour(componentIndex: HudComponent | number, r: number, g: number, b: number, a: number): void;
		setHudComponentPosition(componentIndex: HudComponent | number, x: number, y: number): void;
		setLoadingPromptTextEntry(string: string): void;
		setMinimapAttitudeIndicatorLevel(altitude: number, p1: boolean): void;
		setMinimapBlockWaypoint(toggle: boolean): void;
		setMinimapComponent(p0: number, p1: boolean, p2: number): any;
		setMinimapRevealed(toggle: boolean): void;
		setMinimapVisible(toggle: boolean): void;
		setMissionName(p0: boolean, name: string): void;
		setMultiplayerHudCash(p0: number, p1: number): void;
		setNewWaypoint(x: number, y: number): void;
		setNotificationFlashColor(red: number, green: number, blue: number, alpha: number): void;
		setNotificationMessage(picName1: string, picName2: string, flash: boolean, iconType: number, sender: string, subject: string): number;
		setNotificationMessageClanTag(
			picName1: string,
			picName2: string,
			flash: boolean,
			iconType: number,
			sender: string,
			subject: string,
			duration: number,
			clanTag: string
		): number;
		setNotificationMessageClanTag2(
			picName1: string,
			picName2: string,
			flash: boolean,
			iconType1: number,
			sender: string,
			subject: string,
			duration: number,
			clanTag: string,
			iconType2: number,
			p9: number
		): number;
		setNotificationTextEntry(type: string): void;
		setPauseMenuActive(toggle: boolean): void;
		setPlayerBlipPositionThisFrame(x: number, y: number): void;
		setPlayerCashChange(cash: number, bank: number): void;
		setRadarAsInteriorThisFrame(interior: Hash, x: number, y: number, z: number, p4: number): void;
		setRadarBigmapEnabled(toggleBigMap: boolean, showFullMap: boolean): void;
		setRadarZoom(zoomLevel: number): void;
		setRadarZoomLevelThisFrame(zoomLevel: number): void;
		setTextCentre(align: boolean): void;
		setTextChatUnk(p0: boolean): void;
		setTextColour(red: number, green: number, blue: number, alpha: number): void;
		setTextComponentFormat(inputType: string): void;
		setTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;
		setTextEdge(p0: number, r: number, g: number, b: number, a: number): void;
		setTextEntry(text: string): void;
		setTextEntry2(p0: string): void;
		setTextEntryForWidth(text: string): void;
		setTextFont(fontType: number): void;
		setTextGxtEntry(entry: string): void;
		setTextJustification(justifyType: number): void;
		setTextLeading(p0: boolean): void;
		setTextProportional(p0: boolean): void;
		setTextRenderId(renderId: number): void;
		setTextRightJustify(toggle: boolean): void;
		setTextScale(sizex: number, sizey: number): void;
		setTextWrap(start: number, end: number): void;
		setUseridsUihidden(p0: any, p1: any): boolean;
		setWarningMessage(
			entryLine1: string,
			instructionalKey: number,
			entryLine2: string,
			p3: boolean,
			p4: any,
			p5: any,
			p6: any,
			background: boolean
		): void;
		setWarningMessage2(
			entryHeader: string,
			entryLine1: string,
			instructionalKey: number,
			entryLine2: string,
			p4: boolean,
			p5: any,
			p6: any,
			p7: any,
			background: boolean
		): void;
		setWarningMessage3(
			entryHeader: string,
			entryLine1: string,
			instructionalKey: any,
			entryLine2: string,
			p4: any,
			p5: any,
			p6: any,
			p7: any,
			p8: any,
			p9: boolean
		): void;
		setWidescreenFormat(p0: any): void;
		showHudComponentThisFrame(componentIndex: HudComponent | number): void;
		showLoadingPrompt(busySpinnerType: number): void;
		showWeaponWheel(forcedShow: boolean): void;
		toggleStealthRadar(toggle: boolean): void;
	}

	export interface GameUnkMp {
		getBroadcastFinishedLosSound(p0: boolean): void;
	}

	export interface GameVehicleMp {
		addVehicleStuckCheckWithWarp(p0: any, p1: number, p2: any, p3: boolean, p4: boolean, p5: boolean, p6: any): void;
		createMissionTrain(variation: number, x: number, y: number, z: number, direction: boolean): Handle;
		createScriptVehicleGenerator(
			x: number,
			y: number,
			z: number,
			heading: number,
			p4: number,
			p5: number,
			modelHash: Hash,
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
		createVehicle(modelHash: Hash, x: number, y: number, z: number, heading: number, networkHandle: boolean, vehiclehandle: boolean): any;
		deleteMissionTrain(train: Handle): Handle;
		deleteScriptVehicleGenerator(vehicleGenerator: number): void;
		disableVehicleWeapon(disabled: boolean, weaponHash: Hash, vehicle: Handle, owner: Handle): void;
		displayDistantVehicles(toggle: boolean): void;
		doesScriptVehicleGeneratorExist(vehicleGenerator: number): boolean;
		doesVehicleExistWithDecorator(decorator: string): boolean;
		getClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: Hash, flags: number): Handle;
		getCurrentPlaybackForVehicle(p0: any): any;
		getDisplayNameFromVehicleModel(modelHash: Hash): string;
		getNumModColors(p0: number, p1: boolean): number;
		getPositionInRecording(p0: any): number;
		getPositionOfVehicleRecordingAtTime(p0: any, p1: number, p2: any): number;
		getRandomVehicleBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): Handle;
		getRandomVehicleFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): Handle;
		getRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: Hash, flags: number): Handle;
		getRandomVehicleModelInMemory(
			p0: boolean,
			modelHash: number,
			p2: number
		): {
			modelHash: number;
			p2: number;
		};
		getRotationOfVehicleRecordingAtTime(p0: any, p1: number, p2: any): number;
		getTimePositionInRecording(p0: any): number;
		getTotalDurationOfVehicleRecording(p0: any, p1: any): any;
		getTotalDurationOfVehicleRecordingId(p0: any): number;
		getVehicleClassFromName(modelHash: Hash): number;
		getVehicleClassMaxAcceleration(p0: any): number;
		getVehicleClassMaxAgility(p0: any): number;
		getVehicleClassMaxBraking(p0: any): number;
		getVehicleClassMaxTraction(p0: any): number;
		getVehicleModelAcceleration(modelHash: Hash): number;
		getVehicleModelMaxBraking(modelHash: Hash): number;
		getVehicleModelMaxNumberOfPassengers(modelHash: Hash): number;
		getVehicleModelMaxSpeed(modelHash: Hash): number;
		getVehicleModelMaxTraction(modelHash: Hash): number;
		getVehicleRecordingId(p0: any, p1: any): any;
		hasPreloadModsFinished(p0: any): boolean;
		hasVehicleAssetLoaded(vehicleAsset: number): boolean;
		hasVehicleRecordingBeenLoaded(p0: any, p1: any): boolean;
		isAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): boolean;
		isCopVehicleInArea3d(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): boolean;
		isPlaybackGoingOnForVehicle(p0: any): boolean;
		isPlaybackUsingAiGoingOnForVehicle(p0: any): boolean;
		isThisModelABicycle(model: Hash): boolean;
		isThisModelABike(model: Hash): boolean;
		isThisModelABoat(model: Hash): boolean;
		isThisModelACar(model: Hash): boolean;
		isThisModelAHeli(model: Hash): boolean;
		isThisModelAnEmergencyBoat(model: Hash): boolean;
		isThisModelAPlane(model: Hash): boolean;
		isThisModelAQuadbike(model: Hash): boolean;
		isThisModelATrain(model: Hash): boolean;
		isVehicleInGarageArea(garageName: string, vehicle: Handle): boolean;
		pausePlaybackRecordedVehicle(p0: any): void;
		preloadVehicleMod(p0: any, p1: any, p2: any): void;
		removeVehicleAsset(vehicleAsset: number): void;
		removeVehicleRecording(p0: any, p1: any): void;
		removeVehiclesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unk: any): void;
		removeVehicleStuckCheck(p0: any): void;
		requestVehicleAsset(vehicleHash: Hash, vehicleAsset: number): void;
		requestVehicleRecording(p0: any, p1: any): void;
		setAllLowPriorityVehicleGeneratorsActive(active: boolean): void;
		setAllVehicleGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): void;
		setCargobobHookPosition(p0: any, p1: number, p2: number, p3: boolean): void;
		setFarDrawVehicles(toggle: boolean): void;
		setGarbageTrucks(toggle: boolean): any;
		setMissionTrainAsNoLongerNeeded(train: Handle, p1: boolean): Handle;
		setNumberOfParkedVehicles(value: number): any;
		setParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;
		setPlaybackSpeed(p0: any, speed: number): any;
		setPlaybackToUseAiTryToRevertBackLater(p0: any, p1: any, p2: any, p3: boolean): void;
		setRandomBoats(toggle: boolean): any;
		setRandomTrains(toggle: boolean): void;
		setRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;
		setScriptVehicleGenerator(vehicleGenerator: any, enabled: boolean): void;
		setVehicleDensityMultiplierThisFrame(multiplier: number): void;
		setVehicleModelIsSuppressed(model: Hash, suppressed: boolean): void;
		setVehicleShootAtTarget(driver: Handle, entity: Handle, xTarget: number, yTarget: number, zTarget: number): void;
		skipTimeInPlaybackRecordedVehicle(p0: any, p1: number): void;
		skipToEndAndStopPlaybackRecordedVehicle(p0: any): void;
		startPlaybackRecordedVehicle(p0: any, p1: any, p2: any, p3: boolean): void;
		startPlaybackRecordedVehicleUsingAi(p0: any, p1: any, p2: any, p3: number, p4: any): void;
		startPlaybackRecordedVehicleWithFlags(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
		stopPlaybackRecordedVehicle(p0: any): void;
		switchTrainTrack(intersectionId: number, state: boolean): any;
		unpausePlaybackRecordedVehicle(p0: any): void;

		// RAGE.MP extensions
		repairOnExtraToggle: boolean;
		defaultEngineBehaviour: boolean;

		addModelOverride(model: string, replaceToModel: string): void;
		clearModelOverrides(): void;
		removeModelOverride(model: string): void;
	}

	export interface GameWaterMp {
		getWaterHeight(x: number, y: number, z: number, height: number): number;
		getWaterHeightNoWaves(x: number, y: number, z: number, height: number): number;
		modifyWater(x: number, y: number, radius: number, height: number): void;
		setWavesIntensity(intensity: number): void;
		testProbeAgainstAllWater(
			startX: number,
			startY: number,
			startZ: number,
			endX: number,
			endY: number,
			endZ: number,
			p6: any,
			p7s: any
		): boolean;
		testProbeAgainstWater(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, p6: boolean): boolean;
		testVerticalProbeAgainstAllWater(x: number, y: number, z: number, p3: any, p4: any): boolean;
	}

	export interface GameWeaponMp {
		canUseWeaponOnParachute(weaponHash: Hash): boolean;
		createWeaponObject(
			weaponHash: Hash,
			ammoCount: number,
			x: number,
			y: number,
			z: number,
			showWorldModel: boolean,
			heading: number,
			p7: any
		): Handle;
		doesWeaponTakeWeaponComponent(weaponHash: Hash, componentHash: Hash): boolean;
		enableLaserSightRendering(toggle: boolean): void;
		getWeaponClipSize(weaponHash: Hash): number;
		getWeaponComponentHudStats(p0: any, p1: any): boolean;
		getWeaponComponentTypeModel(componentHash: Hash): Hash;
		getWeaponDamageType(weaponHash: Hash): number;
		getWeaponHudStats(
			weaponHash: Hash,
			data: {
				hudDamage: number;
				hudSpeed: number;
				hudCapacity: number;
				hudAccuracy: number;
				hudRange: number;
			}
		): boolean;
		getWeaponObjectTintIndex(weapon: EntityMp): number;
		getWeaponTintCount(weaponHash: Hash): number;
		getWeapontypeGroup(weaponHash: Hash): Hash;
		getWeapontypeModel(weaponHash: Hash): Hash;
		getWeapontypeSlot(weaponHash: Hash): Hash;
		giveWeaponComponentToWeaponObject(weaponObject: Handle, addonHash: Hash): void;
		giveWeaponObjectToPed(weaponObject: Handle, ped: Handle): void;
		hasVehicleGotProjectileAttached(driver: Handle, vehicle: Handle, weapon: Hash, p3: any): boolean;
		hasWeaponAssetLoaded(weaponHash: Hash): boolean;
		hasWeaponGotWeaponComponent(weapon: Handle, addonHash: Hash): boolean;
		isWeaponValid(weaponHash: Hash): boolean;
		removeAllProjectilesOfType(weaponhash: Hash, p1: boolean): void;
		removeWeaponAsset(weaponHash: Hash): void;
		removeWeaponComponentFromWeaponObject(weaponObject: Handle, componentHash: Hash): void;
		requestWeaponAsset(weaponHash: Hash, p1: number, p2: number): void;
		requestWeaponHighDetailModel(weaponObject: Handle): void;
		setFlashLightFadeDistance(distance: number): void;
		setPedAmmoToDrop(p0: any, p1: any): void;
		setWeaponObjectTintIndex(weapon: EntityMp, tint: number): void;
		unequipEmptyWeapons: boolean;
	}

	export interface GameWorldprobeMp {
		castRayPointToPoint(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			flags: number,
			ignoreEntity: EntityMp,
			p8: number
		): number;
		getShapeTestResult(
			rayHandle: number,
			hit: boolean,
			endCoords: shared.Vector3Mp,
			surfaceNormal: shared.Vector3Mp,
			entityHit: EntityMp
		): {
			hit: boolean;
			endCoords: shared.Vector3Mp;
			surfaceNormal: shared.Vector3Mp;
			entityHit: EntityMp;
		};
		getShapeTestResultEx(
			rayHandle: number,
			hit: boolean,
			endCoords: shared.Vector3Mp,
			surfaceNormal: shared.Vector3Mp,
			materialHash: number,
			entityHit: EntityMp
		): {
			hit: boolean;
			endCoords: shared.Vector3Mp;
			surfaceNormal: shared.Vector3Mp;
			materialHash: number;
			entityHit: EntityMp;
		};
		startShapeTestBox(
			x: number,
			y: number,
			z: number,
			sizeX: number,
			sizeY: number,
			sizeZ: number,
			rotationX: number,
			rotationY: number,
			rotationZ: number,
			rotationOrder: number,
			flags: number,
			ignoreEntity: EntityMp | number,
			p12: number
		): number;
		startShapeTestCapsule(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			radius: number,
			flags: number,
			ignoreEntity: EntityMp,
			p9: number
		): number;
		startShapeTestLosProbe(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
			flags: number,
			ignoreEntity: EntityMp,
			p8: number
		): number;
	}

	export interface GameZoneMp {
		clearPopscheduleOverrideVehicleModel(scheduleId: number): void;
		getHashOfMapAreaAtCoords(x: number, y: number, z: number): number;
		getHashOfMapAreaAtCoords(x: number, y: number, z: number): string;
		getZoneAtCoords(x: number, y: number, z: number): number;
		getZoneFromNameId(zoneName: string): number;
		getNameOfZone(x: number, y: number, z: number): string;
		getZonePopschedule(zoneId: number): number;
		getZoneScumminess(zoneId: number): number;
		overridePopscheduleVehicleModel(scheduleId: number, vehicleHash: number): void;
		overridePopscheduleVehicleModel(scheduleId: number, vehicleHash: string): void;
		setZoneEnabled(zoneId: number, toggle: boolean): void;
	}

	export interface GameGxtMp {
		set(labelNameOrHash: string, newLabelValue: string): void;
		get(labelNameOrHash: string): string;
		getDefault(labelNameOrHash: string): string;
		reset(): void;
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

	export const enum ScreenshotType {
		JPG = 0,
		PNG = 1,
		BMP = 2
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

	export const enum Markers {
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/60/Markers_0.png/200px-Markers_0.png)
		 */
		UPSIDE_DOWN_CONE = 0,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/5/53/Markers_1.png/200px-Markers_1.png)
		 */
		VERTICAL_CYLINDER = 1,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/7/76/Markers_2.png/200px-Markers_2.png)
		 */
		THICK_CHEVRON_UP = 2,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/67/Markers_3.png/200px-Markers_3.png)
		 */
		THIN_CHEVRON_UP = 3,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/8/84/Markers_4.png/200px-Markers_4.png)
		 */
		CHECKERED_FLAG_RECT = 4,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/5/50/Markers_5.png/200px-Markers_5.png)
		 */
		CHECKERED_FLAG_CIRCLE = 5,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/b/b6/Markers_6.png/200px-Markers_6.png)
		 */
		VERTICAL_CIRCLE = 6,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/d/d1/Markers_7.png/200px-Markers_7.png)
		 */
		PLANE_MODEL = 7,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/c/c2/Markers_8.png/200px-Markers_8.png)
		 */
		LOST_MC_TRANSPARENT = 8,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/68/Markers_9.png/200px-Markers_9.png)
		 */
		LOST_MC = 9,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/7/70/Markers_10.png/200px-Markers_10.png)
		 */
		NUMBER_0 = 10,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/b/b4/Markers_11.png/200px-Markers_11.png)
		 */
		NUMBER_1 = 11,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/c/c2/Markers_12.png/200px-Markers_12.png)
		 */
		NUMBER_2 = 12,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/7/7d/Markers_13.png/200px-Markers_13.png)
		 */
		NUMBER_3 = 13,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/6e/Markers_14.png/200px-Markers_14.png)
		 */
		NUMBER_4 = 14,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/b/be/Markers_15.png/200px-Markers_15.png)
		 */
		NUMBER_5 = 15,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/9/95/Markers_16.png/200px-Markers_16.png)
		 */
		NUMBER_6 = 16,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/b/bc/Markers_17.png/200px-Markers_17.png)
		 */
		NUMBER_7 = 17,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/1/14/Markers_18.png/200px-Markers_18.png)
		 */
		NUMBER_8 = 18,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/c/c9/Markers_19.png/200px-Markers_19.png)
		 */
		NUMBER_9 = 19,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/8/8f/Markers_20.png/200px-Markers_20.png)
		 */
		CHEVRON_UP = 20,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/9/9e/Markers_21.png/200px-Markers_21.png)
		 */
		DOUBLE_CHEVRON_UP = 21,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/d/dd/Markers_22.png/200px-Markers_22.png)
		 */
		TRIPLE_CHEVRON_UP = 22,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/8/8a/Markers_23.png/200px-Markers_23.png)
		 */
		HORIZONTAL_CIRCLE_FLAT = 23,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/64/Markers_24.png/200px-Markers_24.png)
		 */
		REPLAY_ICON = 24,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/2/27/Markers_25.png/200px-Markers_25.png)
		 */
		HORIZONTAL_CIRCLE_SKINNY = 25,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/c/ca/Markers_26.png/200px-Markers_26.png)
		 */
		HORIZONTAL_CIRCLE_SKINNY_ARROW = 26,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/5/54/Markers_27.png/200px-Markers_27.png)
		 */
		HORIZONTAL_SPLIT_ARROW_CIRCLE = 27,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/0/00/Markers_28.png/200px-Markers_28.png)
		 */
		SPHERE = 28,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/d/d2/Markers_29.png/200px-Markers_29.png)
		 */
		DOLLOR_SIGN = 29,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/64/Markers_30.png/200px-Markers_30.png)
		 */
		HORIZONTAL_BARS = 30,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/d/d0/Markers_31.png/200px-Markers_31.png)
		 */
		WOLF_HEAD = 31,
		/**
		 * ![](https://docs.fivem.net//markers/32.png)
		 */
		QUESTION_MARK = 32,
		/**
		 * ![](https://docs.fivem.net//markers/33.png)
		 */
		PLANE = 33,
		/**
		 * ![](https://docs.fivem.net//markers/34.png)
		 */
		HELICOPTER = 34,
		/**
		 * ![](https://docs.fivem.net//markers/35.png)
		 */
		BOAT = 35,
		/**
		 * ![](https://docs.fivem.net//markers/35.png)
		 */
		CAR = 36,
		/**
		 * ![](https://docs.fivem.net//markers/37.png)
		 */
		MOTORCYCLE = 37,
		/**
		 * ![](https://docs.fivem.net//markers/38.png)
		 */
		BIKE = 38,
		/**
		 * ![](https://docs.fivem.net//markers/39.png)
		 */
		TRUCK = 39,
		/**
		 * ![](https://docs.fivem.net//markers/40.png)
		 */
		PARACHUTE = 40,
		/**
		 * ![](https://docs.fivem.net//markers/41.png)
		 */
		JETPACK = 41,
		/**
		 * ![](https://docs.fivem.net//markers/42.png)
		 */
		SAWBLADE = 42,
		/**
		 * ![](https://docs.fivem.net//markers/43.png)
		 */
		CUBE = 43
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

	export const blips: BlipMpPool;
	export const browsers: BrowserMpPool;
	export const cameras: CameraMpPool;
	export const checkpoints: CheckpointMpPool;
	export const colshapes: ColshapeMpPool;
	export const discord: DiscordMp;
	export const dummies: DummyEntityMpPool;
	export const events: EventMpPool;
	export const game: GameMp;
	export const players: PlayerMpPool;
	export const vehicles: VehicleMpPool;
	export const pickups: PickupMpPool;
	export const peds: PedMpPool;
	export const gui: GuiMp;
	export const keys: KeysMp;
	export const labels: TextLabelMpPool;
	export const markers: MarkerMpPool;
	export const nametags: NametagsMp;
	export const objects: ObjectMpPool;
	export const raycasting: RaycastingMp;
	export const storage: StorageMp;
	export const system: SystemMp;
	export const user: UserMp;
	export const voiceChat: VoiceChatMp;
	export const console: ConsoleMp;

	export const Vector3: shared.Vector3Mp;

	export * from 'rage-shared';
}
