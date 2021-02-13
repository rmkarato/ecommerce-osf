import { COLORS }  from "../Constants";

const GlobalStyle = () => (
	<style jsx global>
		{`
			html,
			body {
				margin: 0;
				padding: 0;
				overflow: auto;
				font-family: Lato;
				min-height: 100vh;
				background: ${COLORS.background};
				text: ${COLORS.textPrimary};
			}
		`}
	</style>
);

export default GlobalStyle;