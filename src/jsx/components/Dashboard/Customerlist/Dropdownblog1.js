import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

class Dropdownblog1 extends React.Component{
	render(){
		return(
			<>
				<Dropdown>
				<Dropdown.Toggle   variant	className="table-dropdown icon-false" >
					<svg width="24px" height="24px"	viewBox="0 0 24 24" version="1.1">
						<g stroke="none"	strokeWidth="1"	fill="none"	fillRule="evenodd" >
							<rect x="0" y="0" width="24" height="24"></rect>
							<circle	fill="#000000"	cx="5"	cy="12"	r="2"></circle>
							<circle	fill="#000000"	cx="12"	cy="12"	r="2"></circle>
							<circle	fill="#000000"	cx="19"	cy="12"	r="2"></circle>
						</g>
					</svg>
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item  > 
						<Link to ={"#"} className="text-black" >
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="#2F4CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M22 4L12 14.01L9 11.01" stroke="#2F4CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Accept order
						</Link>
					</Dropdown.Item>
					<Dropdown.Item > 
						<Link to ={"#"} className="text-black" >
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M15 9L9 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M9 9L15 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
							Reject order
						</Link>
					</Dropdown.Item>	
					<Dropdown.Item > 	
						<Link to ={"#"} className="text-black" >
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M12 16V12" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M12 8H12.01" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
							View Details
						</Link>
					</Dropdown.Item>
					
				</Dropdown.Menu>
			</Dropdown>	
			</>
		)	
	}
} 
export default Dropdownblog1;