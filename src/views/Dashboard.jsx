import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import axios from 'axios';
import moment from 'moment';

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";
import Axios from "axios";

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      balance: 'Kg '+'0',
      name: '',
      value1:0,
      value2:0,
      value3:0,
      type1:'',
      type2:'',
      type3:'',
      date1:'',
      date2:'',
      date3:'',
      time1:'',
      time2:'',
      time3:'',
      user1:'',
      user2:'',
      user3:'',
      user4:'',
      user5:'',
      user6:'',
      user7:'',
      user8:'',
      user9:'',
      user10:'',
      balance1:0,
      balance2:0,
      balance3:0,
      balance4:0,
      balance5:0,
      balance6:0,
      balance7:0,
      balance8:0,
      balance9:0,
      balance10:0,
    }
    this.refreshMyWallet = this.refreshMyWallet.bind(this);
  }

  func(){
    console.log('in the leader');
    Axios.get("http://192.168.43.151:3000/getUsers")
    .then(res=>{
      for(var i=0;i<10;i++){
          var user = "user";
          var balance = "balance";
          this.setState({
            [user+(i+1)] : res.data[i].name.toUpperCase(),
            [balance+(i+1)] : Math.floor((res.data[i].walletBalance)*1000)/1000,
          })
      }
    })
  }

  componentWillMount(){
    if(sessionStorage.getItem("user") !== undefined){
    this.setState({
      name:sessionStorage.getItem("user"),
    },function(v){
    axios.post("http://192.168.43.151:3000/getUserProfile",this.state)
    .then(res=>{
      console.log(res.data.walletBalance);
      this.setState({
        balance: 'Kg '+(Math.floor(res.data.walletBalance*1000) /1000),
      })
    })
  })
  }}

  componentDidMount(){
    axios.post("http://192.168.43.151:3000/getTransactions",
    { "_id": "5d9e4fe8c91666199cbca4be" }
    ).then(res=>{
      for(var i=0;i<3;i++){
        var value= "value";
        var type="type";
        var date="date";
        var time="time";
        this.setState({
          [value+(i+1)] : Math.floor((res.data[i].amount)*1000)/1000,
        })
        if(res.data[i].fromUser === "5d9e4fe8c91666199cbca4be"){
          this.setState({
            [type+(i+1)] : 'Debit',
          })
        }
        else{
          this.setState({
            [type+(i+1)] : 'Credit',
          })
        }
        this.setState({
          [date+(i+1)] : moment(res.data[i].createdAt).format("YYYY-MM-DD"),
          [time+(i+1)] : moment(res.data[i].createdAt).format("hh:mm:ss")
        })
      }
    })

    
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  refreshMyWallet(){
    if(sessionStorage.getItem("user")){
    this.setState({
      name:sessionStorage.getItem("user"),
    },function(v){
      axios.post("http://192.168.43.151:3000/getUserProfile",this.state)
    .then(res=>{
      console.log(res.data.walletBalance);
      this.setState({
        balance: 'Kg '+(Math.floor(res.data.walletBalance*1000) /1000),
      })
    })
    });
    
  }}

  render() {
    return (
      <div className="content">
        {this.func()}
        <Grid fluid >
          <Row>
            {/* <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Cap
                acity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col> */}
            <Col lg={6} sm={6}>
            
              <StatsCard
                bigIcon={<i className="pe-7s-wallet " style={{float:'left',color:'green'}}/>}
                statsText="CO2 Balance"
                statsValue = {this.state.balance}
                click={this.refreshMyWallet}
                
              >
               
                </StatsCard>
               
            </Col>
            {/* <Col lg={6} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col> */}
            {/* <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col> */}
            <Col md={6} >
            
            <Card
                
                id="chartActivity"
                title="Recent Transactions"
                category=""
                stats=""
                statsIcon="fa"
                content={
                  <div className="ct-chart" style={{maxHeight:'150px',marginTop:'0px'}}>
                    
<table class="table table-striped">
    <thead>
        <tr>
            <th>Amount (Kg)</th>
            <th>Type</th>
            <th>Date</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{this.state.value1}</td>
            <td>{this.state.type1}</td>
            <td>{this.state.date1}</td>
            <td>{this.state.time1}</td>
        </tr>
        <tr>
            <td>{this.state.value2}</td>
            <td>{this.state.type2}</td>
            <td>{this.state.date2}</td>
            <td>{this.state.time2}</td>
        </tr>
        <tr>
            <td>{this.state.value3}</td>
            <td>{this.state.type3}</td>
            <td>{this.state.date3}</td>
            <td>{this.state.time3}</td>
        </tr>            
    </tbody>
</table>
                  </div>
                }
                
                
              />
             
          </Col>
            
          </Row>
          <Row>
            {/* <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col> */}
            {/* <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col> */}
            
          </Row>

          <Row>
            


            <Col md={6}>
              <Card
                title="LeaderBoard"
                category=""
                stats=""
                statsIcon=""
                content={
                  <div className="table-full-width">
                    <table class="table table-striped">
    <thead>
        <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Balance</th>
        </tr>
    </thead>
    <tbody style={{maxHeight:'400px'}}>
        <tr>
            <td>1</td>
            <td>{this.state.user1}</td>
            <td>{this.state.balance1}</td>
            
        </tr>
        <tr>
            <td>2</td>
            <td>{this.state.user2}</td>
            <td>{this.state.balance2}</td>
            
        </tr>
        <tr>
            <td>3</td>
            <td>{this.state.user3}</td>
            <td>{this.state.balance3}</td>
           
        </tr>      
        <tr>
            <td>4</td>
            <td>{this.state.user4}</td>
            <td>{this.state.balance4}</td>
            
        </tr>  
        <tr>
            <td>5</td>
            <td>{this.state.user5}</td>
            <td>{this.state.balance5}</td>
          
        </tr>  
        <tr>
            <td>6</td>
            <td>{this.state.user6}</td>
            <td>{this.state.balance6}</td>
            
        </tr>  
        <tr>
            <td>7</td>
            <td>{this.state.user7}</td>
            <td>{this.state.balance7}</td>
            
        </tr>  
        <tr>
            <td>8</td>
            <td>{this.state.user8}</td>
            <td>{this.state.balance8}</td>
            
        </tr>  
        <tr>
            <td>9</td>
            <td>{this.state.user9}</td>
            <td>{this.state.balance9}</td>
          
        </tr>  
        <tr>
            <td>10</td>
            <td>{this.state.user10}</td>
            <td>{this.state.balance10}</td>
        </tr>        
    </tbody>
</table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
