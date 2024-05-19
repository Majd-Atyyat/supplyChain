import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { CSVLink } from 'react-csv';

const tableData = [
    {name:'Marketing Revenue', date:'April 18, 2023', payouts:'4528.68', status:'Completed', statuscolor:'info', action:'Action', },
    {name:'Brian Market', date:'July 13, 2023', payouts:'1238.50', status:'Inprogress', statuscolor:'primary', action:'Action', },
    {name:'David Market', date:'May 30, 2023', payouts:'3210.52', status:'Pending', statuscolor:'danger', action:'Action', },
    {name:'Edwar Market', date:'June 15, 2023', payouts:'4125.50', status:'Completed', statuscolor:'info', action:'Action', },
    {name:'Donald Revenue', date:'August 10, 2023', payouts:'6541.10', status:'Inprogress', statuscolor:'primary', action:'Action', },
    {name:'Edward Market', date:'July 28, 2023', payouts:'3214.25', status:'Pending', statuscolor:'danger', action:'Action', },
    {name:'Brian Market', date:'July 13, 2023', payouts:'1238.50', status:'Inprogress', statuscolor:'primary', action:'Action', },
    {name:'David Market', date:'May 30, 2023', payouts:'3210.52', status:'Pending', statuscolor:'danger', action:'Action', }
];

const headersTitle = [
    {label:'Market Places', key:'name'}, 
    {label:'Date', key:'date'}, 
    {label:'Payouts', key:'payouts'}, 
    {label:'Status', key:'status'}, 
    {label:'Action', key:'action'}, 
]

const csvlink = {
    headers : headersTitle,
    data : tableData,
    filename: "csvfile.csv"
}

const RevenueHistoryTable = () => {
    const [data, setData] = useState(
		document.querySelectorAll("#revenue-tbl tbody tr")
	);
	const sort = 6;
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
      setData(document.querySelectorAll("#revenue-tbl tbody tr"));
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
        <div className="card">
            <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption">
                        <h4 className="heading mb-0">Revenue History</h4>
                        <div>
                            <CSVLink {...csvlink} className="btn btn-primary light btn-sm me-2"><i className="fa-solid fa-file-excel" /> Export Report</CSVLink> 
                        </div>
                    </div>
                    <div id="revenue-tbl" className="dataTables_wrapper no-footer">
                        <table id="empoloyees-tbl3" className="table  mb-2 mb-sm-0">
                            <thead>
                                <tr>
                                    <th>Marketplaces</th>
                                    <th>Date</th>
                                    <th>Payouts</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item, ind)=>(
                                    <tr key={ind}>
                                        <td>{item.name}</td>
                                        <td>{item.date}</td>
                                        <td>${item.payouts}</td>
                                        <td><span className={`badge border-0 badge-${item.statuscolor}`}>{item.status}</span></td>
                                        <td className="edit-action">
                                            <div className="icon-box icon-box-xs bg-primary me-1">
                                                <i className="fa-solid fa-pencil text-white"></i>
                                            </div>
                                            <div className="icon-box icon-box-xs bg-danger  ms-1">
                                                <i className="fa-solid fa-trash text-white"></i>
                                            </div>
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
                
            </div>
        </div>
    );
};

export default RevenueHistoryTable;