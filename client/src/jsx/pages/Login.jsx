import React, { useState,useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';



import spinning from '../../assets/images/spinning_bg.gif';

function Login (props) {
	const [heartActive, setHeartActive] = useState(true);
	
	const navigate = useNavigate();
    const [email, setEmail] = useState('demo@example.com');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('123456');
    const dispatch = useDispatch();

    function onLogin(e) {
		
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
			return ;
		}		
		dispatch(loadingToggleAction(true));
		dispatch(loginAction(email, password, navigate));
    }
  	return (        
		<div className="page-wraper" >			
			<div className="login-account">
				<div className="row h-100">
					<div className="col-lg-6 align-self-start">
						<div className="account-info-area" style={{backgroundImage: "url("+ spinning +")"}}>
							<div className="login-content">
								<p className="sub-title">Track your supply chain performance with real time KPIs</p>
								<h1 className="title">HAKATHON <span>warning system</span></h1>
								<p className="text"></p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-7 col-sm-12 mx-auto align-self-center">
						<div className="login-form">
							<div className="login-head">
								<h3 className="title">Welcome Back</h3>
								<p>Log in to your steel supply chain warning system with your credentials.</p>
							</div>
							<h6 className="login-title"><span>Login</span></h6>
								
							{props.errorMessage && (
								<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
									{props.errorMessage}
								</div>
							)}
							{props.successMessage && (
								<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
									{props.successMessage}
								</div>
							)}					
							<form  onSubmit={onLogin}>								
								<div className="mb-4">																
									<label className="mb-1 text-dark">Email</label>
									<input type="email" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
									{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
								</div>
								<div className="mb-4">							
									<label className="mb-1 text-dark">Password</label>								
									<input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />	
									{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
								</div>
								<div className="form-row d-flex justify-content-between mt-4 mb-2">
																		
								</div>
								<div className="text-center mb-4">
									<button type="submit" className="btn btn-primary btn-block">Sign Me In</button>
								</div>
							</form>
							
						</div>
					</div>
				</div>
			</div>
		</div>            
    )
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Login);