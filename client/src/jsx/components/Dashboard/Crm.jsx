import React, { Fragment } from "react";
import {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import GaugeChartComponent from '../charts/gurage/GaugeChartComponent';
import BarChart1 from "../charts/Chartjs/bar1";
import { ThemeContext } from "../../../context/ThemeContext";
import { IMAGES, SVGICON } from '../../constant/theme';
import DounutProject from './elements/DounutProject';
import TrafficDonutChart from './elements/TrafficDonutChart';
import CrmMarketArea from './elements/CrmMarketArea';
import CrmExtranalChart from './elements/CrmExtranalChart';
import CrmYearlyIncome from './elements/CrmYearlyIncome';

import SalesActiveBar from './elements/SalesActiveBar';
import SalesAvgArea from './elements/SalesAvgArea';
import ActiveSubscriptions from './elements/ActiveSubscriptions';
import SalesOverviewBar from './elements/SalesOverviewBar';

import ProductSellerTable from './elements/ProductSellerTable';

import SalesStatisticsArea from './elements/SalesStatisticsArea';
import { Row, Col, Card } from "react-bootstrap";

import SocialNetworkRadialChart from '../Dashboard/elements/SocialNetworkRadialChart';

import ProjectOverviewTab from '../Dashboard/elements/ProjectOverviewTab';
import ActiveProjects from '../Dashboard/elements/ActiveProjects';
import RevenueHistoryTable from '../Dashboard/elements/RevenueHistoryTable';
// BS
import { Dropdown, Nav, Tab } from "react-bootstrap";
/// Scroll


// images
// import avatar1 from "../../assets/images/avatar/1.jpg";

import PageTitle from "../../layouts/PageTitle";
const cardBlog = [
  {svg:SVGICON.UserSvgGreen, number:'5,652', title:'Kpi 1', changetheme:'success'},
  {svg:SVGICON.CardProgress, number:'585', title:'kpi 2', changetheme:'primary'},
  {svg:SVGICON.ShiledPrimary, number:'5,282', title:'kpi 3', changetheme:'purple'},
  {svg:SVGICON.UserThree, number:'123', title:'kpi 4', changetheme:'danger'},
];

const coloumnBlog = [
  {title:'Avg Subscriptions', subtitle:'month', charts: <SalesAvgArea />,  bg:'primary'},
  {title:'Active Subscriptions', subtitle:'week', charts:  <ActiveSubscriptions />, bg:'secondary'},
];
const smallCard = [
  {title:'Target', price:'55', icon:'up', color:'success'},
  {title:'Last week', price:'15', icon:'down', color:'danger'},
  {title:'Last Year', price:'85', icon:'up', color:'success'},
];

const ApexLine = loadable(() => pMinDelay(import("../../components/charts/apexcharts/Line3"), 1000));

const iconBoxCard = [
    {icon:'fa-solid fa-briefcase', bg:'success', number:'200+', title:'Total Projects'},
    {icon:'fa-solid fa-cart-shopping', bg:'primary', number:'1560', title:'Total Orders'},
    {icon:'fa-solid fa-users ', bg:'secondary', number:'400', title:'Total User'},
    {icon:'fa-solid fa-hand-holding-dollar', bg:'danger', number:'$1500', title:'Total Sales'},
];

const sourceTable = [
    {icon:'fa-brands fa-google', name:'Google', visit:'25,655', page:'1,255', revenue:'9555', trend:'60%', bg:'secondary'},
    {icon:'fa-brands fa-linkedin-in', name:'Linkedin', visit:'55,655', page:'3,100', revenue:'8855', trend:'30%', bg:'info'},
    {icon:'fa-brands fa-facebook-f', name:'Facebook', visit:'25,255', page:'1,205', revenue:'1955', trend:'50%', bg:'primary'},
    {icon:'fa-brands fa-instagram', name:'Daniel Arran', visit:'42,655', page:'2,999', revenue:'9855', trend:'80%', bg:'secondary'},
    {icon:'fa-brands fa-linkedin-in', name:'Linkedin', visit:'55,655', page:'3,100', revenue:'8855', trend:'30%', bg:'info'},
];

const newproductList = [
    {name:'Air Conditioner', image: IMAGES.ac, price:'999'},
    {name:'Bag Pack', image: IMAGES.beg, price:'101'},
    {name:'Dress', image: IMAGES.dress, price:'235'},
    {name:'Jacket', image: IMAGES.jacket, price:'456'},
    {name:'Air Conditioner', image:IMAGES.ac, price:'999'},
];
const topsellinglist = [
    {name:'Air Conditioner', image: IMAGES.ac, price:'999', sold:'55', revenue:'5,956'},
    {name:'Bag Pack', image: IMAGES.beg, price:'101', sold:'485', revenue:'3,156'},
    {name:'Dress', image: IMAGES.dress, price:'235', sold:'1200', revenue:'4,654'},
    {name:'Jacket', image: IMAGES.jacket, price:'456', sold:'301', revenue:'2,923'},
    {name:'Air Conditioner', image:IMAGES.ac, price:'999', sold:'236', revenue:'1,956'},
];

const CrmColumnChart = loadable(() =>
	pMinDelay(import("./elements/CrmColumnChart"), 1000)
);
const CrmTimelineChart = loadable(() =>
	pMinDelay(import("./elements/CrmTimelineChart"), 1000)
);

const groupBlog = [
    {title:'React'},
    {title:'Css'},
    {title:'Scss'},
    {title:'C++'},
    {title:'JavaScript'},
];
const projectList = [
    {title:'UI Kit Design', number1:'100', number2:'200', bg:'primary', icon:'fa-brands fa-uikit text-primary'},
    {title:'CRM Dashboard', number1:'90', number2:'100', bg:'secondary', icon:'fa-sharp fa-solid fa-star text-secondary'},
    {title:'Website Designing', number1:'80', number2:'100',bg:'success', icon:'fas fa-asterisk text-success'},
    {title:'Software Dovelopment', number1:'150', number2:'200', icon:SVGICON.Worldweb, iconbox : true},
    {title:'App Dovelopment', number1:'75', number2:'100',bg:'danger', icon:'fas fa-mobile-alt text-danger'},
    {title:'UI Kit Design', number1:'100', number2:'200',bg:'primary', icon:'fa-brands fa-uikit text-primary'},
    {title:'CRM Dashboard', number1:'90', number2:'100',bg:'secondary', icon:'fa-sharp fa-solid fa-star text-secondary'},
    {title:'Website Designing', number1:'80', number2:'100',bg:'success', icon:'fas fa-asterisk text-success'},
    {title:'Software Dovelopment', number1:'150', number2:'200', icon:SVGICON.Worldweb, iconbox : true},   
];

const netwrokBlog = [
    {image:IMAGES.dribble, title:'Dribble', price:'12,348', bg:'primary' , percent:'+36' },
    {image:IMAGES.facebook, title:'Facebook', price:'10,048', bg:'danger' , percent:'+33' },
    {image:IMAGES.instagram, title:'Instagram', price:'09,059', bg:'info' , percent:'-10' },
    {image:IMAGES.linkdin, title:'Linkedin', price:'13,259', bg:'success' , percent:'-14' },
    {image:IMAGES.pinterest, title:'Pinterest', price:'15,586', bg:'primary' , percent:'-21' },
];
const meetingList = [
    {image:IMAGES.contact1, title:'Liam Risher',  bg:'primary', status:'Business'},
    {image:IMAGES.contact2, title:'Oliver Noah', bg:'primary', status:'Business'},
    {image:IMAGES.contact3, title:'Donald Benjamin', bg:'success', status:'Accountant'},
    {image:IMAGES.contact6, title:'Elijah James',  bg:'info', status:'Manager'},
    {image:IMAGES.contact5, title:'William Risher', bg:'info', status:'Manager'},
];

const tableList = [
    {name:'American Express', amount:'522', total:'4,5226'},
    {name:'Master Card', amount:'756', total:'1,1256'},
    {name:'Visa Card', amount:'3.4125', total:'5,1236'},
    {name:'American Express', amount:'522', total:'4,5226'},
    {name:'Master Card', amount:'756', total:'1,1256'},
    {name:'Visa Card', amount:'3.4125', total:'5,1236'}
];

const cardList =[
    {icon:'fas fa-sitemap', title:'Supplier Diversification Index', subtitle:'@SDI', number:'18.2',},
    {icon:'fas fa-exchange-alt', title:'Inventory Turnover Rate', subtitle:'@ITR', number:'33%',},
    {icon:'fas fa-clock', title:'Sales Lead Time Variability', subtitle:'@whatever', number:'-13',},
    {icon:'fas fa-thumbs-up', title:'Customer Satisfaction Index', subtitle:'@IDK', number:'+25',},
    {icon:'fas fa-chart-line', title:'Labor  Productivity', subtitle:'@lorem', number:'+32',},
    {icon:'fa-solid fa-map', title:'Map', subtitle:'@lorem', number:'-08',},

    
];
const salesblog = [
  {title:'Orders', subtitle:'3,123'},
  {title:'Month', subtitle:'4,248'},
  {title:'Year', subtitle:'7,654'},
  {title:'Profit', subtitle:'2,545'},
];
const Crm = () => {
	const { changeBackground } = useContext(ThemeContext);	
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
	}, []);
    return (

    
        <div className="container-fluid">
          <div className="row">
                    {cardBlog.map((item, ind)=>(
                        <div className="col-xl-3 col-sm-6" key={ind}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className={`icon-box icon-box-lg rounded-circle bg-${item.changetheme}-light`} >
                                            {item.svg}               
                                        </div>
                                        <div className="total-projects ms-3">
                                            <h3 className={`count text-${item.changetheme}`}>{item.number}k</h3> 
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-xl-4 col-lg-5">
				
					</div>
                    
                </div>
                <div className="row">
                <div className="col-xl-6">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header border-0">
                                    <div>
                                        <h4 className="heading mb-0">Steel Price Insights</h4>
                                        <span>Overview of the last 30 days.</span>
                                    </div>
                                </div>
                                <div className="card-body pb-0 pe-2 pt-0 custome-tooltip">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <div>
                                            <h4>1.6</h4>
                                            <span className="text-danger">
                                                <i className="fa-solid fa-arrow-down"></i>
                                                % 52.36 <small className="text-black">This Week</small>
                                            </span>
                                        </div>
                                        <div>
                                            <h4>269.89</h4>
                                            <span className="text-success">
                                                <i className="fa-solid fa-arrow-up"></i>
                                                % 15.36 <small className="text-black">This month</small>
                                            </span>
                                        </div>   
                                        {/* <SalesActiveBar />                                      */}
                                        <SalesAvgArea />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {
                            coloumnBlog.map((item, ind)=>(
                                <div className="col-xl-6 col-sm-6" key={ind}>
                                    <div className="card overflow-hidden">
                                        <div className="card-header border-0">
                                            <h4 className="heading mb-0">Avg Subscriptions</h4>
                                        </div>
                                        <div className="card-body d-flex justify-content-between pb-0 pe-0 pt-0">
                                            <div>
                                                <h4>15,369.59</h4>
                                                <span className={`text-${item.bg}`}>
                                                    <i className="fa-solid fa-arrow-down" /> {" "}
                                                    % 52.36 <small className="text-black">since last month</small>
                                                </span>
                                            </div>                                    
                                            {item.charts}                                           
                                        </div>
                                    </div>
                                </div>
                            ))
                        }                         */}
                    </div>
                </div>
                <div className="col-xl-6">
                <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading mb-0">Steel Price overview</h4>
                        </div>
                        <div className="card-body custome-tooltip">
                        <ApexLine />               
                            {/* <SalesStatisticsArea /> */}
                        </div>
                    </div>
                </div>
                </div>
            <div className="row">
            
                <div className="col-xl-4  col-lg-6">
                    {/* notification part */}
            <div className="card pb-0">
              <div className="card-header border-0 pb-0">
                <h4 className="card-title">Notifications </h4>
              </div>
              <div className="card-body">
                <div
                  style={{ height: "370px" }}
                  id="DZ_W_Todo2"
                  className="widget-media dz-scroll height370  ps--active-y"
                >
                  <ul className="timeline">
                    <li>
                      <div className="timeline-panel">
                        {/* <div className="media me-2">
                          <img  alt="" width="50"  />
                        </div> */}
                        <div className="media-body">
                          <h5 className="mb-1">Notification 1</h5>
                          <small className="d-block">
                            29 July 2022 - 02:26 PM
                          </small>
                        </div>
                        <Dropdown className="dropdown">
                          <Dropdown.Toggle
                            variant="primary light"
                            className=" i-false p-0 sharp"
                          >
                            <svg
                              width="18px"
                              height="18px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24" />
                                <circle fill="#000000" cx="5" cy="12" r="2" />
                                <circle fill="#000000" cx="12" cy="12" r="2" />
                                <circle fill="#000000" cx="19" cy="12" r="2" />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu">
                           
                            <Dropdown.Item
                              className="dropdown-item"
                              to="/widget-basic"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                    
                        <div className="media-body">
                          <h5 className="mb-1">
                            notification 2{" "}
                            <span className="badge badge-warning">Warning</span>
                          </h5>
                          <small className="d-block">
                            29 July 2022 - 02:26 PM
                          </small>
                        </div>
                        <Dropdown className="dropdown">
                          <Dropdown.Toggle
                            variant=" light"
                            className=" btn-info i-false p-0 sharp"
                          >
                            <svg
                              width="18px"
                              height="18px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24" />
                                <circle fill="#000000" cx="5" cy="12" r="2" />
                                <circle fill="#000000" cx="12" cy="12" r="2" />
                                <circle fill="#000000" cx="19" cy="12" r="2" />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu">
                           
                            <Dropdown.Item
                              className="dropdown-item"
                              to="/widget-basic"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                       
                        <div className="media-body">
                          <h5 className="mb-1">notification 3</h5>
                          <small className="d-block">
                            29 July 2022 - 02:26 PM
                          </small>
                        </div>
                        <Dropdown className="dropdown">
                          <Dropdown.Toggle
                            variant=" light"
                            className=" btn-success i-false p-0 sharp"
                          >
                            <svg
                              width="18px"
                              height="18px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24" />
                                <circle fill="#000000" cx="5" cy="12" r="2" />
                                <circle fill="#000000" cx="12" cy="12" r="2" />
                                <circle fill="#000000" cx="19" cy="12" r="2" />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu">
                           
                            <Dropdown.Item
                              className="dropdown-item"
                              to="/widget-basic"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                       
                        <div className="media-body">
                          <h5 className="mb-1">
                          notification 2{" "}
                            <span className="badge light badge-danger">
                              Danger
                            </span>
                          </h5>
                          <small className="d-block">
                            29 July 2022 - 02:26 PM
                          </small>
                        </div>
                        <Dropdown className="dropdown">
                          <Dropdown.Toggle
                            variant="primary light"
                            className=" i-false p-0 sharp"
                          >
                            <svg
                              width="18px"
                              height="18px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24" />
                                <circle fill="#000000" cx="5" cy="12" r="2" />
                                <circle fill="#000000" cx="12" cy="12" r="2" />
                                <circle fill="#000000" cx="19" cy="12" r="2" />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu">
                           
                            <Dropdown.Item
                              className="dropdown-item"
                              to="/widget-basic"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                        
                        <div className="media-body">
                          <h5 className="mb-1">
                            notification 4{" "}
                            <span className="badge light badge-success">
                              Success
                            </span>
                          </h5>
                          <small className="d-block">
                            29 July 2022 - 02:26 PM
                          </small>
                        </div>
                        <Dropdown className="dropdown">
                          <Dropdown.Toggle
                            variant=" light"
                            className="btn-danger i-false p-0 sharp"
                          >
                            <svg
                              width="18px"
                              height="18px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24" />
                                <circle fill="#000000" cx="5" cy="12" r="2" />
                                <circle fill="#000000" cx="12" cy="12" r="2" />
                                <circle fill="#000000" cx="19" cy="12" r="2" />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu">
                            
                            <Dropdown.Item
                              className="dropdown-item"
                              to="/widget-basic"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-panel">
                       
                        <div className="media-body">
                          <h5 className="mb-1">
                           notification 5{" "}
                            <span className="badge light badge-success">
                              Success
                            </span>
                          </h5>
                          <small className="d-block">
                            29 July 2022 - 02:26 PM
                          </small>
                        </div>
                        <Dropdown className="dropdown">
                          <Dropdown.Toggle
                            variant="primary light"
                            className=" i-false p-0 sharp"
                          >
                            <svg
                              width="18px"
                              height="18px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24" />
                                <circle fill="#000000" cx="5" cy="12" r="2" />
                                <circle fill="#000000" cx="12" cy="12" r="2" />
                                <circle fill="#000000" cx="19" cy="12" r="2" />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu">
                            
                            <Dropdown.Item
                              className="dropdown-item"
                              to="/widget-basic"
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

                <div className="col-xl-8 col-lg-7">
                        <ProjectOverviewTab height={350} />
                    </div>
{/*  line charts  */}
            
                <div className="col-xl-12">
                    <div className="row">
                      
                        <div className="col-xl-6">		
                            <div className="card">
                            <div className="card-header border-0">
                            <h4 className="heading mb-0">Labor Productivity Overview</h4>
                        </div>
                                <div className="card-body p-0">
                                    <ApexLine />          
                                </div>            
                            </div>            
                        </div>  
                        <div className="col-xl-6">		
                            <div className="card">
                            <div className="card-header border-0">
                            <h4 className="heading mb-0">Sales Lead time variabilty</h4>
                        </div>
                                <div className="card-body p-0">
                                    <ApexLine />          
                                </div>            
                            </div>            
                        </div>    
                        
                    </div>
                </div>
           
            {/* end of line chart */}
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading mb-0">Inventory Turnover rate</h4>
                        </div>
                        <div className="card-body py-0 custome-tooltip">
                        <BarChart1 />
                            
                        </div>
                       
                    </div>
                </div>
                {/* <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Line</h4>
              </Card.Header>
              <Card.Body>
                <ApexLine />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header> 
                <h4 className="card-title">Line</h4>
              </Card.Header>
              <Card.Body>
              <ApexLine />
              </Card.Body>
            </Card>
          </Col> */}
                <div className="col-xl-4 col-md-6">
                <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading mb-0">Labor Productivity</h4>
                        </div>
                        <div className="card-body py-0 custome-tooltip">
                        <BarChart1 />
                            
                        </div>
                       
                    </div>    
                </div>
                <div className="col-xl-4 col-md-6">
                <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading mb-0">Customer satisfaction index</h4>
                        </div>
                        <div className="card-body py-0 custome-tooltip">
                        <BarChart1 />
                            
                        </div>
                       
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading mb-0">Meeting Plane</h4>
                        </div>
                        <div className="card-body">
                        <GaugeChartComponent />
                        </div>        
                    </div> 
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading mb-0">Meeting Plane</h4>
                        </div>
                        <div className="card-body">
                        <GaugeChartComponent />
                        </div>        
                    </div> 
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading mb-0">Supplier Diversification Index</h4>
                        </div>
                        <div className="card-body">
                        <GaugeChartComponent />
                        </div>        
                    </div> 
                </div>
                 <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading mb-0">Inventory Turnover rate</h4>
                        </div>
                        <div className="card-body">
                        <GaugeChartComponent />
                        </div>        
                    </div> 
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading mb-0">Sales Lead time variability</h4>
                        </div>
                        <div className="card-body">
                        <GaugeChartComponent />
                        </div>        
                    </div> 
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading mb-0">Supllier diverstification</h4>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive payment-tbl">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Card</th>
                                            <th className="text-center">Amount</th>
                                            <th className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableList.map((item, ind)=>(
                                            <tr key={ind}>
                                                <td>
                                                    <h6>{item.name}</h6>
                                                </td>
                                                <td>
                                                    <span>${item.amount}</span>
                                                </td>
                                                <td>
                                                    <span>${item.total}</span>
                                                </td>
                                            </tr>
                                        ))}                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="row">
                      
                        {/* <div className="col-xl-6">		
                            <div className="card">
                                <div className="card-body p-0">
                                    <ProductSellerTable />          
                                </div>            
                            </div>            
                        </div>   */}
                        {/* <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h4 className="heading mb-0">Source of Revenue Generat</h4>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive active-projects">
                                        <table id="projects-tbl3" className="table">
                                            <thead>
                                                <tr>
                                                    <th>SOURCE</th>
                                                    <th>VISITORS</th>
                                                    <th>PAGE VIEW</th>
                                                    <th>REVENUE</th>
                                                    <th>TRENDING</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sourceTable.map((item, ind)=>(
                                                    <tr key={ind}>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className={`icon-box icon-box-sm bg-${item.bg}`}>
                                                                    <i className={` ${item.icon} text-white`} />
                                                                </div>
                                                                <p className="mb-0 ms-2 font-w500">{item.name}</p>	
                                                            </div>
                                                        </td>	
                                                        <td>{item.visit}</td>
                                                        <td>{item.page}</td>
                                                        <td>${item.revenue}</td>
                                                        <td>
                                                            <div className="progress">
                                                                <div className={`progress-bar bg-${item.bg}`} style={{width:item.trend, height:'5px', borderRadius:"4px"}}></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>    */}
                        {/* <div className="col-xl-4">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h4 className="heading mb-0">New Product</h4>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive active-projects">
                                        <table id="projects-tbl4" className="table">
                                            <thead>
                                                <tr>
                                                    <th>PRDUCTS NAME</th>
                                                    <th>PRICE</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {newproductList.map((item, ind)=>(
                                                    <tr key={ind}>
                                                        <td>
                                                            <div className="products">
                                                                <img src={item.image} className="avatar avatar-sm" alt="" />
                                                                <div>
                                                                    <h6><Link to={"#"}>{item.name}</Link></h6>
                                                                    <span>24 Apr 2021</span>	
                                                                </div>	
                                                            </div>
                                                        </td>	
                                                        <td>${item.price}</td>
                                                    </tr>  
                                                ))}
                                            </tbody>     
                                        </table>
                                    </div>    
                                </div>    
                            </div>    
                        </div>     */}
                        {/* <div className="col-xl-8">
                                <div className="card">
									<div className="card-header border-0">
										<h4 className="heading mb-0">Top Selling Products</h4>
									</div>
									<div className="card-body p-0">
										<div className="table-responsive active-projects">
											<table id="projects-tbl2" className="table">
												<thead>
													<tr>
														<th>PRDUCTS NAME</th>
														<th>PRICE</th>
														<th>SOLD</th>
														<th>REVENUE</th>
														
													</tr>
												</thead>
												<tbody>
                                                    {topsellinglist.map((item, ind)=>(
                                                        <tr key={ind}>
                                                            <td>
                                                                <div className="products">
                                                                    <img src={item.image} className="avatar avatar-sm" alt="" />
                                                                    <div>
                                                                        <h6><Link to={"#"}>{item.name}</Link></h6>
                                                                        <span>24 Apr 2021</span>	
                                                                    </div>	
                                                                </div>
                                                            </td>	
                                                            <td>${item.price}</td>
                                                            <td>{item.sold}</td>
                                                            <td>${item.revenue}</td>
                                                        </tr>
                                                   ))}
                                               </tbody>     
                                            </table>
                                        </div>    
                                    </div>   
                                </div>   
                        </div> */}
                    </div>
                </div>
            </div>

          
        </div>
            </div>
        </div>
    );
};

export default Crm;