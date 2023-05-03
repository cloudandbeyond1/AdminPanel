import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Dropdownblog2 from './Dropdownblog2';

const NewOrder = () => {
  const data = {
    columns: [
		{label: 'Order ID', field: 'id', sort: 'asc',  width: 100},
		{label: 'date', field: 'date',   sort: 'asc', },
        {label: 'Restaurant Name', field: 'ResName',	sort: 'asc', 	},
		{label: 'Customer Name', field: 'customer',	sort: 'asc', 	},
		{label: 'Location', field: 'location', sort: 'asc', 	},
		{label: 'Amount', field: 'amount', sort: 'asc', 	},
		{label: 'Status', field: 'status',  sort: 'asc',	},
		{label: 'Action', field: 'dropdown',sort: 'asc',	},
    ],	
    rows: [
		{	id: '#5552311',	date: '26 March 2020 ',	ResName: 'KFC',customer: 'David Horison',	location: '11 Church Road',	amount: '$320',
			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">Pending</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552349',	date: '21 March 2020',ResName: 'Domino`s Pizza',	customer: 'James WItcwicky',location: '32 The Green London',amount: '$433',
			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">Pending</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552388',	date: '18 March 2020',ResName: 'Domino`s Pizza',	customer: 'Rendy Greenlee',	location: 'Tokyo',	amount: '$327',
			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">Pending</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552397',	date: '10 March 2020',ResName: 'Domino`s Pizza',	customer: '35 Station Road London',	location: 'Edinburgh',	amount: '$103',
			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">Pending</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552358',	date: '20 March 2020',	ResName: 'Domino`s Pizza',customer: 'Rendy Greenlee',	location: '981 St. John’s Road London',	amount: '$470',
			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">Pending</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552322',	date: '06 March 2020',	ResName: 'Domino`s Pizza',customer: 'Franky Sihotang',	location: 'London',	amount: '$385',
			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">Pending</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552358',	date: '20 March 2020',	ResName: 'M H Maisur House & Fency Dhosa',customer: 'Rendy Greenlee',	location: '981 St. John’s Road London',	amount: '$470',
			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">Pending</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552311',	date: '26 March 2020 ',ResName: 'Domino`s Pizza',	customer: 'David Horison',	location: '11 Church Road',		amount: '$320',
			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">Pending</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552349',	date: '21 March 2020',ResName: 'Patel`s Puff House',	customer: 'James WItcwicky',location: '32 The Green London',	amount: '$433',
			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">Pending</Link>,
			dropdown: <Dropdownblog2 />,
		},
	]
};

	return (
		<Fragment>
			<div className="row">
				<div className="col-xl-12">
					<div className="table-responsive">
						<div  className="display mb-4 dataTablesCard">					
							<MDBDataTable  striped 	small	data={data}	/>		
						</div>
					</div>
				</div>	
			</div>
		</Fragment>
					
	);
}
export default NewOrder;