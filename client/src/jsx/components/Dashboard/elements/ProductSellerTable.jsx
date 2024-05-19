import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { IMAGES } from '../../../constant/theme';

const tableData = [
    {image : IMAGES.contact1 , title:'Daniel Arran', product:'Laptop', company:'Apple', price:'9,123', status:'Inprogress', color:'primary'},
    {image : IMAGES.contact2 , title:'Oliver Noah', product:'Mobile', company:'Vivo', price:'7,625', status:'Success', color:'success'},
    {image : IMAGES.contact5 , title:'Elijah James', product:'Tablet', company:'Samsung', price:'1,665', status:'Pending', color:'secondary'},
    {image : IMAGES.contact6 , title:'William Risher', product:'Harddisk', company:'Dell', price:'15.75', status:'Cancle', color:'danger'},
    {image : IMAGES.contact2 , title:'Oliver Noah', product:'Mobile', company:'Vivo', price:'7,625', status:'Success', color:'success'},
    {image : IMAGES.contact5 , title:'Elijah James', product:'Tablet', company:'Samsung', price:'1,665', status:'Pending', color:'secondary'},
    {image : IMAGES.contact1 , title:'Daniel Arran', product:'Laptop', company:'Apple', price:'9,123', status:'Inprogress', color:'primary'},
    {image : IMAGES.contact6 , title:'William Risher', product:'Harddisk', company:'Dell', price:'15.75', status:'Cancle', color:'danger'},
]

const headersTitle = [
    {label:'Seller Name', key:'title'}, 
    {label:'Product', key:'product'}, 
    {label:'Company', key:'company'}, 
    {label:'Status', key:'status'}, 
    {label:'Theme', key:'color'}, 
]

const csvlink = {
    headers : headersTitle,
    data : tableData,
    filename: "csvfile.csv"
}

const ProductSellerTable = () => {
    const [data, setData] = useState(
		document.querySelectorAll("#product-seller tbody tr")
	);
	const sort = 4;
	const activePag = useRef(0);
	const [test, settest] = useState(0);
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove("d-none");
			} else {
				data[i].classList.add("d-none");
			}
		}
	};   
   useEffect(() => {
      setData(document.querySelectorAll("#product-seller tbody tr"));
	}, [test]);

   activePag.current === 0 && chageData(0, sort);
   let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);
	const onClick = (i) => {
		activePag.current = i;
		chageData(activePag.current * sort, (activePag.current + 1) * sort);
		settest(i);
	};
    return (
        <div className="table-responsive active-projects style-1">
            <div className="tbl-caption">
                <h4 className=" mb-0">Best Seller</h4>
                <div>
                    <CSVLink {...csvlink} className="btn btn-primary light btn-sm me-2"><i className="fa-solid fa-file-excel" /> Export Report</CSVLink> 
                </div>
            </div>
            <div id="product-seller" className="dataTables_wrapper no-footer">
                <table id="projects-tbl" className="table mb-2 mb-sm-0">
                    <thead>
                        <tr>
                            <th>SELLER NAME</th>
                            <th>PRODUCT</th>
                            <th>COMPANY</th>
                            <th>REVENUE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, ind)=>(
                            <tr key={ind}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={item.image} className="avatar avatar-md rounded-circle" alt="" />
                                        <p className="mb-0 ms-2">{item.title}</p>	
                                    </div>
                                </td>	
                                <td>{item.product}</td>
                                <td>{item.company}</td>
                                <td>${item.price}</td>
                                <td>
                                    <span className={`badge badge-${item.color} light border-0`}>{item.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="d-sm-flex text-center justify-content-between align-items-center">
                    <div className="dataTables_info">
                        Showing {activePag.current * sort + 1} to{" "}
                        {data.length > (activePag.current + 1) * sort
                            ? (activePag.current + 1) * sort
                            : data.length}{" "}
                        of {data.length} entries
                    </div>
                    <div
                        className="dataTables_paginate paging_simple_numbers justify-content-center"
                        id="example2_paginate"
                    >
                        <Link
                            className="paginate_button previous disabled"
                            to="#"
                            onClick={() =>
                            activePag.current > 0 &&
                            onClick(activePag.current - 1)
                            }
                        >
                            <i className="fa-solid fa-angle-left" />
                        </Link>
                        <span>
                            {paggination.map((number, i) => (
                            <Link
                                key={i}
                                to="#"
                                className={`paginate_button  ${
                                    activePag.current === i ? "current" : ""
                                } `}
                                onClick={() => onClick(i)}
                            >
                                {number}
                            </Link>
                            ))}
                        </span>
                        <Link
                            className="paginate_button next"
                            to="#"
                            onClick={() =>
                            activePag.current + 1 < paggination.length &&
                            onClick(activePag.current + 1)
                            }
                        >
                            <i className="fa-solid fa-angle-right" />
                        </Link>
                    </div>
                </div> 
            </div>
        </div>  
    );
};

export default ProductSellerTable;