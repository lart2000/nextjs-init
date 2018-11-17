import React from 'react'
import App, { Container,} from 'next/app'
import Head from 'next/head'
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx } ) {
	// console.log(router);
	// console.log(ctx);
	
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
	}
	// console.log(pageProps.name);

    return { pageProps }
  }

  render () {
	// const { Component,router } = this.props ;//for defaultt
	const { Component,pageProps } = this.props;
	
    return (
    	<Container>
			<Head>
				<title>My new cool app</title>
			</Head>
		// este es layout genral
        	<Component {...pageProps}/>
		</Container>
	)
	
  }


}