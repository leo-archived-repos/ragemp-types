Remember to 🌟 this Github if you 💖 it.

> This package contains types definitions for RAGE:MP client-side module.

## 📥 Installation

#### `CLIENT-SIDE`

```bash
# With npm
npm i --save-dev github:rysemultiplayer/ragemp-types#types-client

# With yarn
yarn add -D github:rysemultiplayer/ragemp-types#types-client

# With pnpm
pnpm add -D github:rysemultiplayer/ragemp-types#types-client
```

#### `SHARED-MODULE`

```bash
# With npm
npm i --save-dev github:rysemultiplayer/ragemp-types#types-shared

# With yarn
yarn add -D github:rysemultiplayer/ragemp-types#types-shared

# With pnpm
pnpm add -D github:rysemultiplayer/ragemp-types#types-shared
```

> To make these types detectable, you've to add `typeRoots` property below to your project's `tsconfig.json`

```json
{
	"compilerOptions": {
		"typeRoots": ["./node_modules/@types", "./node_modules/@ragemp"]
	}
}
```

## 🤓 Usage

🔴 **These types must be used together with the [rollup](https://rollupjs.org/guide/en/), because you'll need the [rollup-plugin-external-globals](https://www.npmjs.com/package/rollup-plugin-external-globals) to be able to remove the module in order to run the server.**

```js
// rollup.config.js

// your imports
import externalGlobalsPlugin from 'rollup-plugin-external-globals';

export default [
	{
		// your config
		plugins: [
			// your plugins
			externalGlobalsPlugin({
				'rage-server': 'mp'
			})
		]
	},
	{
		// your config
		plugins: [
			// your plugins
			externalGlobalsPlugin({
				'rage-client': 'mp'
			})
		]
	}
];
```

```ts
// index.ts
import mp from 'rage-client'; // this module will be replaced on build using rollup

interface CustomMp {
	myMethod(player: PlayerMp): any;
}

declare module 'rage-client' {
	export interface Mp {
		custom: CustomMp;
	}
}

mp.custom = {
	myMethod: (player: PlayerMp) => {
		// your code
	}
};

mp.events.add('playerReady', (player: PlayerMp) => {
	mp.custom.myMethod(player);
});
```

```js
// index.js
mp.custom = {
	myMethod: (player) => {
		// your code
	}
};

mp.events.add('playerReady', (player) => {
	mp.custom.myMethod(player);
});
```

## 👨‍💻 Contributing

To contribute to this repository, feel free to create a new fork of the repository and submit a pull request.

1. Fork / Clone and select the `main` branch.
2. Create a new branch in your fork.
3. Make your changes.
4. Commit your changes, and push them.
5. Submit a Pull Request [here](https://github.com/rysemultiplayer/ragemp-types/pulls)!

## 🎉 Thanks

-   [CocaColaBear](https://github.com/CocaColaBear/) - Creator of [types-ragemp-s](https://github.com/CocaColaBear/types-ragemp-s) & [types-ragemp-c](https://github.com/CocaColaBear/types-ragemp-c)

## 📋 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
