import React,{useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

import Rain from './../../../assets/images/rainbow.gif';

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import { IMAGES, SVGICON } from '../../constant/theme';

import ProjectOverviewTab from './elements/ProjectOverviewTab';
import ToDoList from './elements/ToDoList';
import ActiveProjects from './elements/ActiveProjects';
import RunningSwiper from './RunningSwiper';
import UpcomingBlog from './elements/UpcomingBlog';
import AllProjectBlog from './elements/AllProjectBlog';

const RevenueChart = loadable(() =>
	pMinDelay(import("./elements/RevenueChart"), 1000)
);
const ExpensesBarChart = loadable(() =>
	pMinDelay(import("./elements/ExpensesBarChart"), 1000)
);
const TotalDeposit = loadable(() =>
	pMinDelay(import("./elements/TotalDeposit"), 1000)
);
const MyProgressChart = loadable(() =>
	pMinDelay(import("./elements/MyProgressChart"), 1000)
);


const Home = () => {
	const { changeBackground } = useContext(ThemeContext);	
	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
	}, []);
		
	return(
		<>			
			
				<div className="row">
					<div className="col-xl-9 col-xxl-12">
						<div className="row">
							<div className="col-xl-12">
								<div className="row">  
									<div className="col-xl-6">
										<div className="row">
											<div className="col-xl-6 col-sm-6">
												<div className="card bg-primary text-white">
													<div className="card-header border-0 flex-wrap">
														<div className="revenue-date">
															<span>Revenue</span>
															<h4 className="text-white">$310.435</h4>
														</div>
														<div className="avatar-list avatar-list-stacked me-2">
															<img src={IMAGES.contact5} className="avatar rounded-circle" alt="" />{" "}
															<img src={IMAGES.contact6} className="avatar rounded-circle" alt="" />{" "}
															<span className="avatar rounded-circle bg-white">25+</span>
														</div>
														
													</div>
													<div className="card-body pb-0 custome-tooltip d-flex align-items-center">															
														<RevenueChart />
														<div>
															{SVGICON.WhiteArrowUp}
															<span className="d-block font-w600">45%</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-6 col-sm-6">
												<div className="card bg-secondary text-white">
													<div className="card-header border-0">
														<div className="revenue-date">
															<span className="text-black">Expenses</span>
															<h4 className="text-black">$920.035</h4>
														</div>
														<div className="avatar-list avatar-list-stacked me-2">
															<span className="avatar rounded-circle bg-white">
																<Link to={"#"}>
																	{SVGICON.PlusSymbal}
																</Link>
															</span>
														</div>
														
													</div>
													<div className="card-body pb-0 custome-tooltip d-flex align-items-center">
														<ExpensesBarChart />
														<div>
															{SVGICON.DarkArrowUp}
															<span className="d-block font-w600 text-black">45%</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-6 col-sm-6">
												<div className="card">
													<div className="card-body depostit-card">
														<div className="depostit-card-media d-flex justify-content-between style-1">
															<div>
																<h6>Tasks Not Finisheds</h6>
																<h3>20</h3>
															</div>
															<div className="icon-box bg-secondary">
																{SVGICON.Shiled}
															</div>
														</div>
														<div className="progress-box mt-0">
															<div className="d-flex justify-content-between">
																<p className="mb-0">Complete Task</p>
																<p className="mb-0">20/28</p>
															</div>
															<div className="progress">
																<div className="progress-bar bg-secondary" style={{width:"50%", height:"5px", borderRadius:"4px"}}></div>
															</div>
														</div>
													</div>
												</div>	
											</div>
											<div className="col-xl-6 col-sm-6">
												<div className="card same-card">
													<div className="card-body depostit-card p-0">
														<div className="depostit-card-media d-flex justify-content-between pb-0">
															<div>
																<h6>Total Deposit</h6>
																<h3>$1200.00</h3>
															</div>
															<div className="icon-box bg-primary">
																{SVGICON.Doller}
															</div>
														</div>															
														<TotalDeposit />
													</div>
												</div>
											</div>
										</div>	
									</div>
									<div className="col-xl-3 col-sm-6">
										<div className="card bg-success rainbow-box" style={{backgroundImage: 'url('+ Rain +')', backgroundSize: "cover", backgroundBlendMode: "luminosity"}}>
											<div className="card-header border-0">
												{SVGICON.WhiteLogo}
											</div>
											<div className="card-body pt-0">
												<div className="finance"> 
													<h4>Your Finances, safe and Secure</h4>
													<p>
														It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
													</p>
												</div>
												<div className="d-flex pt-3"> 
													<div className="avatar-list avatar-list-stacked">
														<img src={IMAGES.contact5} className="avatar rounded-circle" alt="" />
														<img src={IMAGES.contact6} className="avatar rounded-circle" alt="" />
														<img src={IMAGES.contact7} className="avatar rounded-circle" alt="" />
													</div>
													<div className="ratting-data">
														<h4>15k+</h4>
														<span>Happy Clients</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-sm-6">
										<div className="card">
											<div className="card-body">
												<MyProgressChart />
												<span className="right-sign"> 
													{SVGICON.RightCheck}
												</span>
												<div className="redia-date text-center">
													<h4>My Progress</h4>
													<p>
														Lorem ipsum dolor sit amet, consectetur
													</p>
													<Link to={"/crm"} className="btn btn-secondary text-black">More Details</Link>
												</div>
											</div>

										</div>
									</div>
									<div className="col-xl-8">
										<ProjectOverviewTab height={300}/>
									</div>
									<div className="col-xl-4">
										<ToDoList />
									</div>

								</div>									
							</div>
						</div>
					</div>
					<div className="col-xl-3 respo col-xxl-4 col-lg-5">
						<div className="row">
							<div className="col-xl-12">
								<UpcomingBlog />
							</div>
							<div className="col-xl-12">
								<AllProjectBlog />
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-xxl-12">
						<ActiveProjects />
						
					</div>
					<div className="col-xl-6 col-xxl-8 col-lg-7">
						<div className="card h-auto">
							<div className="card-header border-0 pb-3">
								<h4 className="heading mb-0">Running Projects</h4>
								<Link to={"#"} className="btn btn-sm btn-primary">View All</Link>
							</div>
							<div className="card-body py-0">
								<RunningSwiper />
							</div>
						</div>
					</div>
				</div>			
			
		</>
	)
}
export default Home;