import * as React from 'react';

interface Props { 
    name     : String,
    last_name?: String
}
function MyTsx({name ,last_name="ad"} : Props) {
    let full_name = `${last_name} ${ name}` ;
  return (
    <div>
        {full_name}
    </div>
  )
}

interface State {
    name  :String,
}


class Index extends React.Component<Props,State>{
    componentDidMount(){
        this.setState({
            name : "hola"
        })
    }
    render(){
        return <MyTsx {...this.state}/>
    }
}
export default Index;
