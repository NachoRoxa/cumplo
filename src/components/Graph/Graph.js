import React, { Component } from 'react';
import { LineChart, Line, XAxis, 
  YAxis, CartesianGrid, Tooltip, 
  Legend, } from 'recharts';
import './Graph.css'

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoaded: false,
      dolares: [],
    }
  }

  componentDidMount = () => {
    fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar/2020?apikey=${process.env.REACT_APP_API_KEY}&formato=json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          dolares: data,
        })
      });
  }

  render() {
    const { isLoaded, dolares } = this.state;
    if(!isLoaded){
      return <div>Error fetching data.</div>
    }else{
      return(
        <LineChart
          data={dolares.Dolares}
          className='chart'
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray='3 3'/>
          <Legend />
          <Line type='monotone' />
        </LineChart>
      );
    }
  }

}

export default Graph;
