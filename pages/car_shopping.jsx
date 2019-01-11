import React, { Component } from 'react'
import Card from './../src/components/card'
import List from '../src/components/list';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import './../src/components/demo-import.tsx';
export default class Car_shopping extends Component {
	state={
		data : [
			{
				id         : 1,
				title      : "Zapatos de hombre",
				description: "El zapato es un accesorio de la vestimenta hecho con la intención de proveer protección y comodidad al pie, mientras éste realiza varias actividades. Los zapatos, como el resto de las prendas, también se diseñan atendiendo a fines estéticos y/u ortopédicos",
			},
			{
				id         : 2,
				title      : "Polo",
				description: "a veces también conocido como pilo o pilos, gorro o corona cilíndrica alta que típicamente portaban las diosas mitológicas de la antigua Grecia.",
			},
			{
				id         : 3,
				title      : "CASACA CON CAPUCHA ESSENTIALS",
				description: "Un esencial para el dia a dia que lo es todo menos básico, esta casaca de cierre completo y capucha para hombres está hecha de tejido polar combinado con algodón y presenta un cordón de sujeción plano y trenzado en la capucha ajustable. Un gran logo de adidas desciende sobre la manga.",
			},
		]
	}
  render() {
	return (
	  <React.Fragment >
		{/* <Grid container> */}
			<Grid container >
				<Hidden only={["sm","md","lg"]} >
					<Grid container>
						<Grid item xs={12}>
							<List/>
						</Grid>
					</Grid>
				</Hidden>
				<Grid item xs={9}>
					<Grid container spacing={16}  justify="center">
					{
						(()=>{
							return this.state.data.map(el=>(
								<Grid item xs={12} sm={6}  lg={4} key={el.title}>
									<Grid container justify="center">
										<Card product={el} />
									</Grid>
								</Grid>
								)
							)
						})()		
					}
					</Grid>
				</Grid>
				<Hidden only="xs">
					<Grid item xs={3}>
						<List/>
					</Grid>
				</Hidden>
			</Grid>
			{/* <Grid > */}
			{/* </Grid> */}
		{/* </Grid> */}
	  </React.Fragment>
	)
  }
}
