import React from "react";

const Footer = () => {
	var d = new Date();
	return (
		<div className="footer out-footer">
			<div className="copyright">
				<p>Copyright © 					
					{" "}Developed by{" "}
					<a href="http://hello.com/" target="_blank"  rel="noreferrer">
						the winning team
					</a>{" "}
					{d.getFullYear()}
				</p>
			</div>
		</div>
	);
};

export default Footer;
