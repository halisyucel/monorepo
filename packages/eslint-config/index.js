module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"airbnb",
		"airbnb/hooks",
		"airbnb-typescript",
		"plugin:react/recommended",
		"plugin:import/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:storybook/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	"overrides": [
		{
			"files": ["*.test.ts", "*.test.tsx"],
			"rules": {
				"@typescript-eslint/no-use-before-define": "off",
			}
		},
		{
			"files": ["index.ts"],
			"rules": {
				"no-restricted-exports": "off",
				"import/prefer-default-export": "off",
			}
		}
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint",
	],
	"rules": {
		"react/react-in-jsx-scope": "off",
		"react/require-default-props": "off",
		"react/jsx-props-no-spreading": "off",
		"import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
	}
};
