import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from '../component/navbar';
import Login from './login';
import Contact from './contact';
import Contact2 from './contact2';
import Projectcheck from './projectcheck';
import Notice from './notice';
import Projects from './projects';
import Fabaomessage from './fabaomessage';
import Waibaomessage from './waibaomessage';
import Adduser from './adduser';
import Changeuser from './changeuser';
import Addemployer from './addemployer';
import Changeemployer from './changeemployer';

const loginstate = true;

const routes = [
  {
    path:"/login",
    component: Login,
  },
  {
    path:"/contact",
    component:Contact
  },
  {
    path:"/contact2",
    component:Contact2
  },
  {
    path:"/projectcheck",
    component:Projectcheck
  },
  {
    path:"/notice",
    component:Notice
  },
  {
    path:"/projects",
    component:Projects
  },
  {
    path:"/fabaomessage",
    component:Fabaomessage
  },
  {
    path:"/waibaomessage",
    component:Waibaomessage
  },
  {
    path:"/adduser",
    component:Adduser
  },
  {
    path:"/changeuser",
    component:Changeuser
  },
  {
    path:'/addemployer',
    component:Addemployer
  },
  {
    path:'/changeemployer',
    component:Changeemployer
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);
function IsLogined(){
  if(loginstate==false){  
    return <Login /> 
  }else{  
    return <div>{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}</div>
  }  
}
const RouteConfigExample = () => (
  <Router>
    <div style={{
        width:document.body.clientWidth,
        height:document.body.clientHeight,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    }}>
      {/* <ul>
        <li>
          <Link to="/tacos">Tacos</Link>
        </li>
        <li>
          <Link to="/sandwiches">Sandwiches</Link>
        </li>
      </ul> */}
      <Navbar />
      <IsLogined />
    </div>
  </Router>
);

export default RouteConfigExample;