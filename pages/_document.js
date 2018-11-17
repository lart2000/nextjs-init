import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<html lang="es">
				<Head>					
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<meta name="robots" content="noindex"/>
					<meta name="description" content="default content ..."/>
					<link rel="icon" type="image/x-icon" href="/static/buffalo.png" />
				</Head>
				<body className="custom_class">
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
