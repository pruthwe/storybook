import { Button } from '@storybook/angular/demo';
import { withCssResources } from '@storybook/addon-cssresources';

export default { 
	title: 'My Button',
	parameters: {
		cssresources: [
		  {
			id: `bluetheme`,
			//code: `<style>body { background-color: lightblue; }</style>`,
			code: `<link rel="stylesheet" type="text/css" src="./mystyle.css">`,
			picked: false,
			hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
		  },
		],
	  },
	decorators: [withCssResources],
};

export const withText = () => ({
  component: Button,
  props: {
    text: 'Hello Button',
  },
});

export const withEmoji = () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
});
