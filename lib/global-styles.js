export const BREAKPOINT = '992px';

const globalStyles = `
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	html, body {
		height: 100%;
		font-family: var(--copy-font);
		color: #1C2838;
		font-size: 16px;
	}
	html {
		height: 100%;
		width: 100%;
		-webkit-font-smoothing: subpixel-antialiased;
		background: #ece9e6; /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #ece9e6, #ffffff); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #ece9e6, #ffffff);

	}
	.hero__header {
		font-weight: 800;
		font-size: 48px;
		margin-bottom: 24px;
	}
	.hero__sub-header {
		font-weight: 100;
		font-size: 32px;
		margin-bottom: 24px;
	}
	:root {
		--primary-light: #ece9e6;
	}
`;
export default globalStyles;
