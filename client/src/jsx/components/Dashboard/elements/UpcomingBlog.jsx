import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const eventData = [
    {title:'Development planning' },
    {title:'Desinging planning'},
    {title:'Frontend Designing'},
    {title:'Software planning', bord:'border-0'}
];

const UpcomingBlog = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="card my-calendar">                
                <div className="card-body schedules-cal p-2 dz-calender">
                    <DatePicker selected={startDate} className="form-control" 
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM-dd-yyyy"
                        inline
                    />    
                    
                </div>
            </div>  
        </>
    );
};

export default UpcomingBlog;