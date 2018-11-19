// import React from 'react'
// import App, { Container,} from 'next/app'
// import Head from 'next/head'
import Header from './../src/layout/header';
// import NoSSR from './../src/components/no-ssr/index';
// export default class MyApp extends App {
//   static async getInitialProps({ Component, router, ctx } ) {
// 	// console.log(router);
// 	// console.log(ctx);

//     let pageProps = {}
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
// 	}
// 	// console.log(pageProps.name);

//     return { pageProps }
//   }
//   componentDidCatch (error, errorInfo) {
//     console.log('CUSTOM ERROR HANDLING', error)
//     // This is needed to render errors correctly in development / production
//     super.componentDidCatch(error, errorInfo)
//   }
//   render () {
// 	// const { Component,router } = this.props ;//for defaultt
// 	const { Component,pageProps } = this.props;

//     return (
//     	<Container>
// 			<NoSSR>
// 			</NoSSR>
// 			<Header/>
// 			<Head>
// 				<title>My new cool app</title>
// 			</Head>
// 		// este es layout genral
//         	<Component {...pageProps}/>
// 		</Container>
// 	)

//   }


// }




import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';

class MyApp extends App {
	constructor(props) {
		super(props);
		this.pageContext = getPageContext();
	}

	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<Head>
					<title>My page</title>
				</Head>
				{/* Wrap every page in Jss and Theme providers */}
				<JssProvider
					registry={this.pageContext.sheetsRegistry}
					generateClassName={this.pageContext.generateClassName}
				>
					{/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
					<MuiThemeProvider
						theme={this.pageContext.theme}
						sheetsManager={this.pageContext.sheetsManager}
					>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						{/* Pass pageContext to the _document though the renderPage enhancer
				to render collected styles on server side. */}
						<Header />
						<Component pageContext={this.pageContext} {...pageProps} />
					</MuiThemeProvider>
				</JssProvider>
			</Container>
		);
	}
}

export default MyApp;