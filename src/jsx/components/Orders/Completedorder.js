import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Dropdownblog2 from './Dropdownblog2';

const Completedorder = () => {
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
		{
			id: '#5552323',	date: '28 March 2020',ResName: 'Domino`s Pizza',	customer: 'Franky Sihotang',location: '32 The Green London',amount: '$86',
			status: <Link to={""} className="btn bgl-success text-success  btn-sm">Delivered</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552358',	date: '15 March 2020',	ResName: 'Domino`s Pizza',customer: 'Olivia Shine',location: 'New York',	amount: '$372',
			status: <Link to={""} className="btn bgl-success text-success  btn-sm">Delivered</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552388',	date: '05 March 2020',ResName: 'M H Maisur House & Fency Dhosa',	customer: 'Samantha Bake',	location: '981 St. John’s Road London',	amount: '$90',
			status: <Link to={""} className="btn bgl-success text-success  btn-sm">Delivered</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552356',	date: '07 March 2020',	ResName: 'Domino`s Pizza',customer: 'Olivia Shine',	location: 'London',	amount: '$313',
			status: <Link to={""} className="btn bgl-success text-success  btn-sm">Delivered</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552388',	date: '05 March 2020',ResName: 'M H Maisur House & Fency Dhosa',	customer: 'Samantha Bake',	location: '981 St. John’s Road London',	amount: '$90',
			status: <Link to={""} className="btn bgl-success text-success  btn-sm">Delivered</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552356',	date: '07 March 2020',ResName: 'Patel`s Puff House',	customer: 'Olivia Shine',	location: 'London',	amount: '$313',
			status: <Link to={""} className="btn bgl-success text-success  btn-sm">Delivered</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552311',	date: '26 March 2020 ',ResName: 'Domino`s Pizza',	customer: 'David Horison',	location: '11 Church Road',		amount: '$320',
			status: <Link to={""} className="btn bgl-success text-success  btn-sm">Delivered</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552322',	date: '27 March 2020',	ResName: 'KHODIYAR KRUPA DABELI & VADAPAV',customer: '21 King Street London',	location: 'Tokyo',	amount: '$170',
			status: <Link to={""} className="btn bgl-success text-success  btn-sm">Delivered</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552323',	date: '28 March 2020',ResName: 'Domino`s Pizza',	customer: 'Franky Sihotang',location: '32 The Green London',amount: '$86',
			status: <Link to={""} className="btn bgl-success text-success  btn-sm">Delivered</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552349',	date: '21 March 2020',ResName: 'Patel`s Puff House',	customer: 'James WItcwicky',location: '32 The Green London',	amount: '$433',
			status: <Link to={""} className="btn bgl-success text-success  btn-sm">Delivered</Link>,
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
export default Completedorder;