import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Dropdownblog2 from './Dropdownblog2';

const CancelledOrder = () => {
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
			id: '#5552322',	date: '27 March 2020',ResName: 'Domino`s Pizza',	customer: '21 King Street London',location: 'Tokyo', amount: '$170',
			status: <Link to={""} className="btn bgl-light btn-sm">Cancelled</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552356',	date: '12 March 2020',	ResName: 'M H Maisur House & Fency Dhosa',customer: 'Jessica Wong',location: 'Tokyo',	amount: '$162',
			status: <Link to={""} className="btn bgl-light btn-sm">Cancelled</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552358',	date: '15 March 2020',	ResName: 'Domino`s Pizza',customer: 'Olivia Shine',location: 'New York',	amount: '$372',
			status: <Link to={""} className="btn bgl-light btn-sm">Cancelled</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552375',	date: '17 March 2020',	ResName: 'Domino`s Pizza',customer: 'Rendy Greenlee',	location: 'San Francisco',	amount: '$137',
			status: <Link to={""} className="btn bgl-light btn-sm">Cancelled</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552397',	date: '11 March 2020',	ResName: 'Domino`s Pizza',customer: '544 Manor Road London',	location: 'San Francisco',	amount: '$205',
			status:<Link to={""} className="btn bgl-light btn-sm">Cancelled</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552375',	date: '30 March 2020',	ResName: 'Domino`s Pizza',customer: 'Roberto Carlo',	location: 'Corner Street 5th London',	amount: '$342',
			status: <Link to={""} className="btn bgl-light btn-sm">Cancelled</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552358',	date: '20 March 2020',	ResName: 'Domino`s Pizza',customer: 'Rendy Greenlee',	location: '981 St. John’s Road London',	amount: '$470',
			status: <Link to={""} className="btn bgl-light btn-sm">Cancelled</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552356',	date: '07 March 2020',	ResName: 'Domino`s Pizza',customer: 'Olivia Shine',	location: 'London',	amount: '$313',
			status: <Link to={""} className="btn bgl-light btn-sm">Cancelled</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552375',	date: '30 March 2020',ResName: 'KHODIYAR KRUPA DABELI & VADAPAV',	customer: 'Roberto Carlo',	location: 'Corner Street 5th London',	amount: '$342',
			status: <Link to={""} className="btn bgl-light btn-sm">Cancelled</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552322',	date: '27 March 2020',	ResName: 'KHODIYAR KRUPA DABELI & VADAPAV',customer: '21 King Street London',	location: 'Tokyo',	amount: '$170',
			status: <Link to={""} className="btn bgl-light btn-sm">Cancelled</Link>,
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
export default CancelledOrder;