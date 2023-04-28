import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Dropdownblog1 from './Dropdownblog1';

const Customerlist = () => {
	
  const data = {
    columns: [
		{label: <div className="sorting_1 p-0 text-center">
					<div className="custom-control custom-checkbox ml-2">
						<input type="checkbox" className="custom-control-input" id="checkAll" required="" />	
						<label className="custom-control-label" htmlFor="checkAll"></label>						
					</div>
				</div>
		, field: 'check', },
		{label: 'Order ID', field: 'id', sort: 'asc',  width: 100},
		{label: 'date', field: 'date',   sort: 'asc', },
		{label: 'Customer Name', field: 'customer',	sort: 'asc', 	},
		{label: 'Location', field: 'location', sort: 'asc', 	},
		{label: 'Total Spent', field: 'amount', sort: 'asc', 	},
		{label: 'Last Order', field: 'status',  sort: 'asc',	},
		{label: 'Action', field: 'dropdown',sort: 'asc',	},
    ],	
    rows: [
		{	check: <div className="sorting_1 p-0 text-center">
						<div className="custom-control custom-checkbox ml-2">
							<input type="checkbox" className="custom-control-input" id="customCheckBox66" required="" />	
							<label className="custom-control-label" htmlFor="customCheckBox66"></label>						
						</div>
					</div>,
			id: '#5552311',	date: '26 March 2020 ',	customer: 'David Horison',	location: '11 Church Road',	amount: '$164.52',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$14.89</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox67" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox67"></label>						
				</div>
			</div>,	
			id: '#5552322',	date: '27 March 2020',	customer: '21 King Street London',location: 'Tokyo', amount: '$74.92',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$8.13</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox68" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox68"></label>						
				</div>
			</div>,	
			id: '#5552323',	date: '28 March 2020',	customer: 'Franky Sihotang',location: '32 The Green London',amount: '$251.16',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$21.55</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox69" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox69"></label>						
				</div>
			</div>,		
			id: '#5552349',	date: '21 March 2020',	customer: 'James WItcwicky',location: '32 The Green London',amount: '$82.46',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$42.85</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox70" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox70"></label>						
				</div>
			</div>,		
			id: '#5552356',	date: '12 March 2020',	customer: 'Jessica Wong',location: 'Tokyo',	amount: '$24.17 ',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$11.41</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox71" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox71"></label>						
				</div>
			</div>,		
			id: '#5552358',	date: '15 March 2020',	customer: 'Olivia Shine',location: 'New York',	amount: '$24.55 ',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$67.27</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox72" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox72"></label>						
				</div>
			</div>,	
			id: '#5552375',	date: '17 March 2020',	customer: 'Rendy Greenlee',	location: 'San Francisco',	amount: '$45.86',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$11.41</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox73" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox73"></label>						
				</div>
			</div>,	
			id: '#5552388',	date: '18 March 2020',	customer: 'Rendy Greenlee',	location: 'Tokyo',	amount: '$22.18',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$91.68</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox74" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox74"></label>						
				</div>
			</div>,	
			id: '#5552397',	date: '11 March 2020',	customer: '544 Manor Road London',	location: 'San Francisco',	amount: '$45.86',
			status:<Link to ={"#"} className="btn bgl-light text-black btn-sm">$11.41</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox75" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox75"></label>						
				</div>
			</div>,	
			id: '#5552397',	date: '10 March 2020',	customer: '35 Station Road London',	location: 'Edinburgh',	amount: '$44.99',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$91.68</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox76" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox76"></label>						
				</div>
			</div>,	
			id: '#5552388',	date: '05 March 2020',	customer: 'Samantha Bake',	location: '981 St. John’s Road London',	amount: '$34.41',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$91.68</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox77" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox77"></label>						
				</div>
			</div>,	
			id: '#5552323',	date: '28 March 2020',	customer: 'Franky Sihotang',location: '32 The Green London',amount: '$251.16',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$21.55</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox78" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox78"></label>						
				</div>
			</div>,		
			id: '#5552349',	date: '21 March 2020',	customer: 'James WItcwicky',location: '32 The Green London',amount: '$82.46',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$42.85</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox79" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox79"></label>						
				</div>
			</div>,		
			id: '#5552356',	date: '12 March 2020',	customer: 'Jessica Wong',location: 'Tokyo',	amount: '$24.17 ',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$11.41</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox80" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox80"></label>						
				</div>
			</div>,		
			id: '#5552358',	date: '15 March 2020',	customer: 'Olivia Shine',location: 'New York',	amount: '$24.55 ',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$67.27</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox81" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox81"></label>						
				</div>
			</div>,	
			id: '#5552375',	date: '17 March 2020',	customer: 'Rendy Greenlee',	location: 'San Francisco',	amount: '$45.86',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$11.41</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox82" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox82"></label>						
				</div>
			</div>,	
			id: '#5552388',	date: '18 March 2020',	customer: 'Rendy Greenlee',	location: 'Tokyo',	amount: '$22.18',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$91.68</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox83" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox83"></label>						
				</div>
			</div>,	
			id: '#5552397',	date: '11 March 2020',	customer: '544 Manor Road London',	location: 'San Francisco',	amount: '$45.86',
			status:<Link to ={"#"} className="btn bgl-light text-black btn-sm">$11.41</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox84" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox84"></label>						
				</div>
			</div>,		
			id: '#5552349',	date: '21 March 2020',	customer: 'James WItcwicky',location: '32 The Green London',amount: '$82.46',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$42.85</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox85" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox85"></label>						
				</div>
			</div>,		
			id: '#5552356',	date: '12 March 2020',	customer: 'Jessica Wong',location: 'Tokyo',	amount: '$24.17 ',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$11.41</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox86" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox86"></label>						
				</div>
			</div>,		
			id: '#5552358',	date: '15 March 2020',	customer: 'Olivia Shine',location: 'New York',	amount: '$24.55 ',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$67.27</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox87" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox87"></label>						
				</div>
			</div>,	
			id: '#5552375',	date: '17 March 2020',	customer: 'Rendy Greenlee',	location: 'San Francisco',	amount: '$45.86',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$11.41</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox88" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox88"></label>						
				</div>
			</div>,	
			id: '#5552388',	date: '18 March 2020',	customer: 'Rendy Greenlee',	location: 'Tokyo',	amount: '$22.18',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$91.68</Link>,
			dropdown: <Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					<input type="checkbox" className="custom-control-input" id="customCheckBox89" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox89"></label>						
				</div>
			</div>,	
			id: '#5552397',	date: '11 March 2020',	customer: '544 Manor Road London',	location: 'San Francisco',	amount: '$45.86',
			status:<Link to ={"#"} className="btn bgl-light text-black btn-sm">$11.41</Link>,
			dropdown: <Dropdownblog1 />,
		},
		
	]
};

	return (
		<Fragment>
			<div className="row">
				<div className="col-xl-12">
					<div className="table-responsive">
						<div  className="display mb-4 dataTablesCard customer-list-table">		
							<MDBDataTable  striped 	small	data={data}	/>	
						</div>
					</div>
				</div>	
			</div>
		</Fragment>		
	);
}
export default Customerlist;