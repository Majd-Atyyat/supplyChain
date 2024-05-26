import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import MainPagetitle from '../../layouts/MainPagetitle';
import { IMAGES } from '../../constant/theme';

const cardBlog = [
    {title: 'Education', image: IMAGES.Books},
    {title: 'News', image: IMAGES.News},
    {title: 'Ranking', image: IMAGES.Heart},
    {title: 'File Manager', image: IMAGES.File},
];

const postDetial = [
    {image: IMAGES.Friends1, image2: IMAGES.contact1, theme: 'secondary', maintitle:'DESIGNER', subtitle: 'Good programmers write code that humans can understand.', name : 'Marry', date: 'May 05'},
    {image: IMAGES.Friends2, image2: IMAGES.contact2, theme: 'primary', maintitle:'SOFTWARE', subtitle: "Rogramming isn't about what you know; it's about what you can figure out.", name : 'Jarry', date: 'April 05'},
    {image: IMAGES.Friends3, image2: IMAGES.contact3, theme: 'warning', maintitle:'MARKTING', subtitle: "Debugging is like being a detective in a crime movie where you're also the murderer.", name : 'Honey', date: 'May 10'},
    {image: IMAGES.Friends4, image2: IMAGES.contact7, theme: 'success', maintitle:'SOFTWARE', subtitle: 'The best way to predict the future is to invent it.', name : 'Harry ', date: 'June 12'},
    {image: IMAGES.Friends2, image2: IMAGES.contact1, theme: 'secondary', maintitle:'HARDWARE', subtitle: 'The best way to predict the future is to invent it.', name : 'Marry ', date: 'April 30'},
];
const usersDetial = [
    {image1: IMAGES.Blogs1, image2: IMAGES.contact1, theme: 'warning', maintitle:'DESIGNER',  name : 'Marry', date: 'May 05'},
    {image1: IMAGES.Blogs2, image2: IMAGES.contact2, theme: 'primary', maintitle:'SOFTWARE',  name : 'Jarry', date: 'April 05'},
    {image1: IMAGES.Blogs3, image2: IMAGES.contact5, theme: 'secondary', maintitle:'MARKTING',  name : 'Honey', date: 'May 10'},
    {image1: IMAGES.Blogs4, image2: IMAGES.contact1, theme: 'info', maintitle:'SOFTWARE',  name : 'Harry ', date: 'June 12'},
];
const seoToolsData = [
    {image1: IMAGES.Blogs5, image2: IMAGES.contact1, theme: 'secondary',  title: "Debugging is like being a detective movie where you're also the murderer." ,name : 'Marry', date: 'May 05'},
    {image1: IMAGES.Blogs6, image2: IMAGES.contact2, theme: 'info', title: "There are many variations of passages of Lorem Ipsum available." , name : 'Jarry', date: 'April 05'},
    {image1: IMAGES.Blogs3, image2: IMAGES.contact1, theme: 'primary', title: "Debugging is like being a detective movie where you're also the murderer.",  name : 'Honey', date: 'May 10'},
    {image1: IMAGES.Blogs4, image2: IMAGES.contact1, theme: 'info',  title:"Contrary to popular belief, Lorem Ipsum is not simply random text.", name : 'Harry ', date: 'June 12'},
];




const Blog = () => {
    const nav = useNavigate();
    const submitHandle = (e) => {
        e.preventDefault(e);
        nav("#");
    }
    return (
        <>          
           <div className="container">
				<div className="row">
                    {/* {cardBlog.map((item, index)=>(
                        <div className="col-xl-3 col-md-3 col-6" key={index}>
                            <div className="card  blog-card">
                                <div className="card-body text-center">
                                    <img src={item.image} alt="" />  
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))} */}
                    <div className="col-xl-12">
								<div className="card">
									<div className="card-header border-0">
										<h4 className="heading mb-0 blog-title">Steel News</h4>
										<Link to={"#"} className="btn btn-primary btn-sm">More</Link>
									</div>
									<div className="card-body">
                                        {seoToolsData.map((item, ind)=>(
                                            <div className="third-post" key={ind}>
                                                <img src={item.image1} />
                                                <div className="post-1">
                                                    <div className="post-data">
                                                        <span className={`badge border-0 badge-sm badge-${item.theme} `}>SEO Tools</span>
                                                        <h4>{item.title}</h4>
                                                        <div className="mb-2">
                                                            <img src={item.image2} className="avatar rounded-circle me-2 small-post" alt="" />
                                                            {" "}<span><b className="text-primary">{item.name}</b> in {item.date}, 2023</span>
                                                        </div>
                                                        <span>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                        </span>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        ))}										
									</div>
								</div>
							</div>
                    
                    
                </div>   
            </div>   
        </>
    );
};

export default Blog;