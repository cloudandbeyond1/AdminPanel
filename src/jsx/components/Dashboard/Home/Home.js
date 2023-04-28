import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {Dropdown} from 'react-bootstrap';
import { Tab, Nav } from "react-bootstrap";
//** Import Image */

import {  Sparklines,  SparklinesLine,  } from "react-sparklines";
import Apexspline from './Apexspline';
import ApexchartsNegPost from './ApexNagetivePosative';
import ApexchartsNegPost1 from './ApexNagetivePosative1';

const sampleData1 = [8, 7, 6, 3, 2, 4, 6, 8, 12, 6, 12, 13, 10, 18, 14, 24, 16, 12, 19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17,];
const sampleData2 = [19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17, 12, 6, 12, 13, 10, 18, 14, 24, 16, 12, 8, 7, 6, 3, 2, 7, 6, 8,];
const sampleData3 = [8, 7, 6, 3, 2, 4, 6, 8, 10, 6, 12, 15, 13, 15, 14, 13, 21, 11, 14, 10, 21, 10, 13, 10, 12, 14, 16, 14, 12, 10, 9, 8, 4, 1,];
const sampleData4 = [20, 18, 16, 12, 8, 10, 13, 15, 12, 6, 12, 13, 10, 18, 14, 16, 17, 15, 19, 16, 16, 14, 18, 21, 13, 15, 18, 17, 21, 11, 14, 19, 21, 17,];
const tabData = [
      {
         name: "Home",
         content:
            <ApexchartsNegPost1 />,
      },
      {
         name: "Profile",
         content:
            <ApexchartsNegPost />,
      },
      {
         name: "Contact",
         content:
            <ApexchartsNegPost />,
      },

      {
         name: "Message",
         content:
           <ApexchartsNegPost />,
      },
   ];

const Home = () => {
	
   return (
      <Fragment>
         <div className="row">
			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">56 <span className="text-success fs-14">+4%</span></h2>
							<p className="mb-0 text-black">Menus</p>
						</div>
						<svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M31.75 6.75H30.0064L30.2189 4.62238C30.2709 4.10111 30.2131 3.57473 30.0493 3.07716C29.8854 2.57959 29.6192 2.12186 29.2676 1.73348C28.9161 1.3451 28.4871 1.03468 28.0082 0.822231C27.5294 0.609781 27.0114 0.500013 26.4875 0.5H7.0125C6.48854 0.500041 5.9704 0.609864 5.49148 0.822391C5.01256 1.03492 4.58348 1.34543 4.23189 1.73392C3.88031 2.12241 3.61403 2.58026 3.45021 3.07795C3.28639 3.57564 3.22866 4.10214 3.28075 4.6235L5.2815 24.6224C5.31508 24.9222 5.38467 25.2168 5.48875 25.5H1.75C1.41848 25.5 1.10054 25.6317 0.866116 25.8661C0.631696 26.1005 0.5 26.4185 0.5 26.75C0.5 27.0815 0.631696 27.3995 0.866116 27.6339C1.10054 27.8683 1.41848 28 1.75 28H31.75C32.0815 28 32.3995 27.8683 32.6339 27.6339C32.8683 27.3995 33 27.0815 33 26.75C33 26.4185 32.8683 26.1005 32.6339 25.8661C32.3995 25.6317 32.0815 25.5 31.75 25.5H28.0115C28.1154 25.2172 28.1849 24.9229 28.2185 24.6235L28.881 18H31.75C32.7442 17.9989 33.6974 17.6035 34.4004 16.9004C35.1035 16.1974 35.4989 15.2442 35.5 14.25V10.5C35.4989 9.50577 35.1035 8.55258 34.4004 7.84956C33.6974 7.14653 32.7442 6.75109 31.75 6.75ZM9.0125 25.5C8.70243 25.501 8.40314 25.3862 8.17327 25.1782C7.9434 24.9701 7.79949 24.6836 7.76975 24.375L5.7685 4.37575C5.75109 4.20188 5.7703 4.0263 5.82488 3.86031C5.87946 3.69432 5.96821 3.5416 6.0854 3.412C6.2026 3.28239 6.34564 3.17877 6.50532 3.10781C6.665 3.03685 6.83777 3.00013 7.0125 3H26.4875C26.6622 3.00012 26.8349 3.03681 26.9945 3.10772C27.1541 3.17863 27.2972 3.28218 27.4143 3.4117C27.5315 3.54123 27.6203 3.69386 27.6749 3.85977C27.7295 4.02568 27.7488 4.20119 27.7315 4.375L25.7308 24.3762C25.7007 24.6848 25.5566 24.971 25.3267 25.1788C25.0967 25.3867 24.7975 25.5012 24.4875 25.5H9.0125ZM33 14.25C32.9998 14.5815 32.868 14.8993 32.6337 15.1337C32.3993 15.368 32.0815 15.4998 31.75 15.5H29.1311L29.7561 9.25H31.75C32.0815 9.2502 32.3993 9.38196 32.6337 9.61634C32.868 9.85071 32.9998 10.1685 33 10.5V14.25Z" fill="#EA4989"/>
						</svg>
					</div>
					<div className="card-body pt-4 p-0">
					{/* Sparkline Chart  */}
						<Sparklines data={sampleData1}>
							<SparklinesLine style={{ strokeWidth: 2}}  color="#ea4989" />
						</Sparklines>
					{/* Sparkline Chart End */}	
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">785 <span className="text-success fs-14">+2.7%</span></h2>
							<p className="mb-0 text-black">Orders</p>
						</div>
						<svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 30.5H22.75C23.7442 30.4989 24.6974 30.1035 25.4004 29.4004C26.1035 28.6974 26.4989 27.7442 26.5 26.75V16.75C26.5 16.4185 26.3683 16.1005 26.1339 15.8661C25.8995 15.6317 25.5815 15.5 25.25 15.5C24.9185 15.5 24.6005 15.6317 24.3661 15.8661C24.1317 16.1005 24 16.4185 24 16.75V26.75C23.9997 27.0814 23.8679 27.3992 23.6336 27.6336C23.3992 27.8679 23.0814 27.9997 22.75 28H4C3.66857 27.9997 3.3508 27.8679 3.11645 27.6336C2.88209 27.3992 2.7503 27.0814 2.75 26.75V9.25C2.7503 8.91857 2.88209 8.6008 3.11645 8.36645C3.3508 8.13209 3.66857 8.0003 4 8H15.25C15.5815 8 15.8995 7.8683 16.1339 7.63388C16.3683 7.39946 16.5 7.08152 16.5 6.75C16.5 6.41848 16.3683 6.10054 16.1339 5.86612C15.8995 5.6317 15.5815 5.5 15.25 5.5H4C3.00577 5.50109 2.05258 5.89653 1.34956 6.59956C0.646531 7.30258 0.251092 8.25577 0.25 9.25V26.75C0.251092 27.7442 0.646531 28.6974 1.34956 29.4004C2.05258 30.1035 3.00577 30.4989 4 30.5Z" fill="#EA4989"/>
							<path d="M25.25 0.5C24.0138 0.5 22.8055 0.866556 21.7777 1.55331C20.7498 2.24007 19.9488 3.21619 19.4757 4.35823C19.0027 5.50027 18.8789 6.75693 19.1201 7.96931C19.3612 9.1817 19.9565 10.2953 20.8306 11.1694C21.7046 12.0435 22.8183 12.6388 24.0307 12.8799C25.243 13.1211 26.4997 12.9973 27.6417 12.5242C28.7838 12.0512 29.7599 11.2501 30.4466 10.2223C31.1334 9.19451 31.5 7.98613 31.5 6.75C31.498 5.093 30.8389 3.50442 29.6672 2.33274C28.4955 1.16106 26.907 0.501952 25.25 0.5ZM25.25 10.5C24.5083 10.5 23.7833 10.2801 23.1666 9.86801C22.5499 9.45596 22.0692 8.87029 21.7854 8.18506C21.5016 7.49984 21.4273 6.74584 21.572 6.01841C21.7167 5.29098 22.0739 4.6228 22.5983 4.09835C23.1228 3.5739 23.7909 3.21675 24.5184 3.07206C25.2458 2.92736 25.9998 3.00162 26.685 3.28545C27.3702 3.56928 27.9559 4.04993 28.368 4.66661C28.78 5.2833 29 6.00832 29 6.75C28.9989 7.74423 28.6034 8.69742 27.9004 9.40044C27.1974 10.1035 26.2442 10.4989 25.25 10.5Z" fill="#EA4989"/>
							<path d="M6.5 13H12.75C13.0815 13 13.3995 12.8683 13.6339 12.6339C13.8683 12.3995 14 12.0815 14 11.75C14 11.4185 13.8683 11.1005 13.6339 10.8661C13.3995 10.6317 13.0815 10.5 12.75 10.5H6.5C6.16848 10.5 5.85054 10.6317 5.61612 10.8661C5.3817 11.1005 5.25 11.4185 5.25 11.75C5.25 12.0815 5.3817 12.3995 5.61612 12.6339C5.85054 12.8683 6.16848 13 6.5 13Z" fill="#EA4989"/>
							<path d="M5.25 16.75C5.25 17.0815 5.3817 17.3995 5.61612 17.6339C5.85054 17.8683 6.16848 18 6.5 18H17.75C18.0815 18 18.3995 17.8683 18.6339 17.6339C18.8683 17.3995 19 17.0815 19 16.75C19 16.4185 18.8683 16.1005 18.6339 15.8661C18.3995 15.6317 18.0815 15.5 17.75 15.5H6.5C6.16848 15.5 5.85054 15.6317 5.61612 15.8661C5.3817 16.1005 5.25 16.4185 5.25 16.75Z" fill="#EA4989"/>
						</svg>
					</div>
					<div className="card-body pt-4 p-0">
						{/* Sparkline Chart  */}
						<Sparklines data={sampleData2}>
							<SparklinesLine style={{ strokeWidth: 2}} color="#ea4989" />
						</Sparklines>
						{/* Sparkline Chart End */}
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">56 <span className="text-danger fs-14">-3%</span></h2>
							<p className="mb-0 text-black">Customers</p>
						</div>
						<svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.25 19.25C12.2389 19.25 13.2056 18.9568 14.0279 18.4074C14.8501 17.8579 15.491 17.0771 15.8694 16.1634C16.2478 15.2498 16.3469 14.2445 16.1539 13.2746C15.961 12.3046 15.4848 11.4137 14.7855 10.7145C14.0863 10.0152 13.1954 9.539 12.2255 9.34608C11.2555 9.15315 10.2502 9.25217 9.33658 9.6306C8.42295 10.009 7.64206 10.6499 7.09265 11.4722C6.54325 12.2944 6.25 13.2611 6.25 14.25C6.25129 15.5757 6.77849 16.8467 7.71589 17.7841C8.65329 18.7215 9.92431 19.2487 11.25 19.25ZM11.25 11.75C11.7445 11.75 12.2278 11.8966 12.6389 12.1713C13.05 12.446 13.3705 12.8365 13.5597 13.2933C13.7489 13.7501 13.7984 14.2528 13.702 14.7377C13.6055 15.2227 13.3674 15.6681 13.0178 16.0178C12.6681 16.3674 12.2227 16.6055 11.7377 16.702C11.2528 16.7984 10.7501 16.7489 10.2933 16.5597C9.83648 16.3705 9.44603 16.0501 9.17133 15.6389C8.89662 15.2278 8.75 14.7445 8.75 14.25C8.75089 13.5872 9.01457 12.9519 9.48322 12.4832C9.95187 12.0146 10.5872 11.7509 11.25 11.75Z" fill="#EA4989"/>
							<path d="M30.78 22.4625C31.1926 21.9098 31.4683 21.2672 31.5844 20.5873C31.7005 19.9074 31.6537 19.2097 31.4477 18.5514L30.6542 15.9696C30.2817 14.7451 29.5243 13.6733 28.4946 12.9132C27.4648 12.1531 26.2174 11.7452 24.9375 11.75H19.3286C18.9971 11.75 18.6792 11.8817 18.4447 12.1161C18.2103 12.3505 18.0786 12.6685 18.0786 13C18.0786 13.3315 18.2103 13.6495 18.4447 13.8839C18.6792 14.1183 18.9971 14.25 19.3286 14.25H24.9375C25.6823 14.2474 26.4081 14.485 27.0072 14.9274C27.6064 15.3698 28.0471 15.9935 28.2639 16.706L29.0574 19.2866C29.1449 19.5713 29.1645 19.8725 29.1145 20.1661C29.0645 20.4597 28.9463 20.7374 28.7694 20.977C28.5925 21.2166 28.3619 21.4114 28.096 21.5456C27.8302 21.6799 27.5366 21.7499 27.2387 21.75H15.7776C15.7422 21.75 15.7126 21.7671 15.6776 21.7701C15.5936 21.7669 15.5125 21.75 15.4272 21.75H7.58975C6.20068 21.7449 4.84702 22.1879 3.72969 23.0132C2.61236 23.8385 1.79094 25.0021 1.38737 26.3312L0.454122 29.3625C0.236133 30.0719 0.187609 30.8225 0.312449 31.554C0.437289 32.2856 0.732013 32.9776 1.17293 33.5746C1.61385 34.1715 2.18866 34.6567 2.85116 34.9911C3.51366 35.3255 4.24538 35.4998 4.9875 35.5H18.0286C18.7708 35.4999 19.5026 35.3256 20.1651 34.9912C20.8277 34.6569 21.4026 34.1717 21.8435 33.5748C22.2845 32.9778 22.5793 32.2857 22.7041 31.5542C22.829 30.8226 22.7805 30.0719 22.5625 29.3625L21.6299 26.3315C21.3936 25.5767 21.0217 24.8713 20.5322 24.25H27.2387C27.9283 24.2532 28.6088 24.0928 29.2243 23.7821C29.8399 23.4714 30.373 23.0192 30.78 22.4625ZM19.8327 32.089C19.6254 32.3726 19.3538 32.6031 19.0402 32.7614C18.7266 32.9198 18.3799 33.0015 18.0286 33H4.9875C4.63649 32.9999 4.2904 32.9175 3.97705 32.7594C3.6637 32.6012 3.39184 32.3717 3.18334 32.0894C2.97484 31.807 2.83552 31.4796 2.77658 31.1336C2.71764 30.7876 2.74073 30.4326 2.844 30.0971L3.77662 27.0661C4.02439 26.2489 4.52922 25.5335 5.21609 25.0261C5.90296 24.5188 6.7352 24.2466 7.58912 24.25H15.4266C16.2805 24.2466 17.1128 24.5188 17.7996 25.0261C18.4865 25.5335 18.9913 26.2489 19.2391 27.0661L20.1717 30.0971C20.2769 30.4323 20.301 30.7877 20.2421 31.134C20.1831 31.4804 20.0429 31.8078 19.8327 32.0894V32.089Z" fill="#EA4989"/>
							<path d="M21.875 9.24999C22.7403 9.24999 23.5861 8.9934 24.3056 8.51267C25.0251 8.03194 25.5858 7.34866 25.917 6.54923C26.2481 5.74981 26.3347 4.87014 26.1659 4.02148C25.9971 3.17281 25.5804 2.39326 24.9686 1.78141C24.3567 1.16955 23.5772 0.752876 22.7285 0.584066C21.8798 0.415256 21.0002 0.501896 20.2008 0.833029C19.4013 1.16416 18.7181 1.72492 18.2373 2.44438C17.7566 3.16384 17.5 4.0097 17.5 4.875C17.5014 6.03489 17.9628 7.14688 18.7829 7.96705C19.6031 8.78722 20.7151 9.2486 21.875 9.24999ZM21.875 3C22.2458 3 22.6083 3.10997 22.9167 3.31599C23.225 3.52202 23.4654 3.81485 23.6073 4.15747C23.7492 4.50008 23.7863 4.87708 23.714 5.24079C23.6416 5.6045 23.463 5.9386 23.2008 6.20082C22.9386 6.46304 22.6045 6.64162 22.2408 6.71397C21.8771 6.78631 21.5001 6.74918 21.1575 6.60727C20.8149 6.46535 20.522 6.22503 20.316 5.91669C20.11 5.60835 20 5.24584 20 4.875C20.0006 4.37789 20.1983 3.9013 20.5498 3.54979C20.9013 3.19829 21.3779 3.00056 21.875 3Z" fill="#EA4989"/>
						</svg>
					</div>
					<div className="card-body pt-4 p-0">
						{/* Sparkline Chart  */}
						<Sparklines data={sampleData3}>
							<SparklinesLine style={{ strokeWidth: 2}} color="#ea4989" />
						</Sparklines>
						{/* Sparkline Chart  End*/}
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">$6231 <span className="text-danger fs-14">-3.7%</span></h2>
							<p className="mb-0 text-black">Income</p>
						</div>
						<svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19.08 24.36C19.08 25.64 18.76 26.8667 18.12 28.04C17.48 29.1867 16.5333 30.1467 15.28 30.92C14.0533 31.6933 12.5733 32.1333 10.84 32.24V35.48H8.68V32.24C6.25333 32.0267 4.28 31.2533 2.76 29.92C1.24 28.56 0.466667 26.84 0.44 24.76H4.32C4.42667 25.88 4.84 26.8533 5.56 27.68C6.30667 28.5067 7.34667 29.0267 8.68 29.24V19.24C6.89333 18.7867 5.45333 18.32 4.36 17.84C3.26667 17.36 2.33333 16.6133 1.56 15.6C0.786667 14.5867 0.4 13.2267 0.4 11.52C0.4 9.36 1.14667 7.57333 2.64 6.16C4.16 4.74666 6.17333 3.96 8.68 3.8V0.479998H10.84V3.8C13.1067 3.98667 14.9333 4.72 16.32 6C17.7067 7.25333 18.5067 8.89333 18.72 10.92H14.84C14.7067 9.98667 14.2933 9.14667 13.6 8.4C12.9067 7.62667 11.9867 7.12 10.84 6.88V16.64C12.6 17.0933 14.0267 17.56 15.12 18.04C16.24 18.4933 17.1733 19.2267 17.92 20.24C18.6933 21.2533 19.08 22.6267 19.08 24.36ZM4.12 11.32C4.12 12.6267 4.50667 13.6267 5.28 14.32C6.05333 15.0133 7.18667 15.5867 8.68 16.04V6.8C7.29333 6.93333 6.18667 7.38667 5.36 8.16C4.53333 8.90667 4.12 9.96 4.12 11.32ZM10.84 29.28C12.28 29.12 13.4 28.6 14.2 27.72C15.0267 26.84 15.44 25.7867 15.44 24.56C15.44 23.2533 15.04 22.2533 14.24 21.56C13.44 20.84 12.3067 20.2667 10.84 19.84V29.28Z" fill="#EA4989"/>
						</svg>
					</div>
					<div className="card-body pt-4 p-0">
						{/* Sparkline Chart  */}
						<Sparklines data={sampleData4}>
							<SparklinesLine style={{ strokeWidth: 2}} color="#ea4989" />
						</Sparklines>
						{/* Sparkline Chart  End */}
					</div>
				</div>	
			</div>
			
			
			
			<div className="col-xl-6 col-lg-12">
				<div className="card">
					<div className="card-header pb-0 border-0">
						<div>
							<h4 className="card-title mb-2">Revenue</h4>
							<p className="fs-13 mb-0">Lorem ipsum dolor sit amet,consecteture</p>
						</div>
						<div className="dropdown">
							<button type="button" className="btn border btn-rounded text-black dropdown-toggle" data-toggle="dropdown">
								Monthly
							</button>
							<div className="dropdown-menu">
								<Link to={"#"} className="dropdown-item" >2020</Link>
								<Link to={"#"} className="dropdown-item" >2019</Link>
								<Link to={"#"} className="dropdown-item" >2018</Link>
							</div>
						</div>
					</div>
					<div className="card-body px-0 px-sm-3">
						<div className="d-flex justify-content-center">
							<div className="text-center px-2 px-md-5">
								<p className="fs-14 mb-1">Income</p>
								<h4 className="text-black font-w600 mb-0 fs-22">$561,623</h4>
							</div>
							<div className="text-center px-2 px-md-5">
								<p className="fs-14 mb-1">Expense</p>
								<h4 className="text-black font-w600 mb-0 fs-22">$126,621</h4>
							</div>
						</div>
						<div>
							<Apexspline />
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-6 col-lg-12">
				<div className="card">
					<Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
						<div className="card-header border-0 d-sm-flex d-block">
							<div>
								<h4 className="card-title mb-2">Customer Map</h4>
								<p className="fs-13 mb-0">Lorem ipsum dolor</p>
							</div>
							<div className="card-action card-tabs mt-3 mt-sm-0 mt-3 mt-sm-0 ">
									<Nav as="ul" className="nav nav-tabs ">
									   {tabData.map(
										  (data, i) =>
											 i !== tabData.length - 1 && (
												<Nav.Item as="li" key={i}>
												   <Nav.Link
													  eventKey={data.name.toLowerCase()}
												   >
													  {" "}
													  {i === 1
														 ? "Weekly"
														 : i === 2
														 ? "Today"
														 : "Monthly"}
												   </Nav.Link>
												</Nav.Item>
											 )
									   )}
									</Nav>
							</div>
						</div>
						<div className="card-body">
							<Tab.Content className="">
							   {tabData.map(
								  (data, i) =>
									 i !== tabData.length - 1 && (
										<Tab.Pane
										   eventKey={data.name.toLowerCase()}
										   key={i}
										>
										   <div>{data.content}</div>
										   
										</Tab.Pane>
									 )
							   )}
							</Tab.Content>
						</div>
					</Tab.Container>
				</div>
			</div>
			<div className="col-xl-9 col-xxl-8 col-lg-12 col-sm-12">
				<div className="card">
					<div className="card-header border-0">
						<div>
							<h4 className="card-title mb-2">Recent Order Request</h4>
							<p className="fs-13 mb-0">Lorem ipsum dolor</p>
						</div>
						<div className="dropdown">
							<button type="button" className="btn border btn-rounded text-black dropdown-toggle" data-toggle="dropdown">
								Newest
							</button>
							<div className="dropdown-menu">
								<Link to={"#"} className="dropdown-item" >2020</Link>
								<Link to={"#"} className="dropdown-item" >2019</Link>
								<Link to={"#"} className="dropdown-item" >2018</Link>
							</div>
						</div>
					</div>
					<div className="card-body p-0">
						<div className="table-responsive ">
							<table className="table order-request ">
								<tbody>
								<tr>
									<td>
										<div className="media align-items-center">
										
											<Link to={"/ecom-product-detail"} >	
												<img className=" mr-3 img-fluid rounded-circle" width="75" src={require("./../../../../images/card/pic1.jpg").default} alt="DexignZone" />
											</Link>
											<div className="media-body">
												<h5 className="mt-0 mb-2"><Link to={"/ecom-product-detail"} className="text-black" >Tuna Soup spinach with himalaya salt.</Link></h5>
												<p className="mb-0 text-primary">#0010235</p>
											</div>
										</div>
									</td>
									<td>
										<h5 className="mb-2 text-black wspace-no">Jimmy Kueai</h5>
										<p className="mb-0">South Corner st41256 london</p>
									</td>
									<td style={{width:"100px"}}>
										<div className="d-flex align-items-center justify-content-center">
											<h4 className="mb-0 mr-3 fs-20 text-black d-inline-block">$7.4</h4>
											<p className="mb-0 fs-20 d-inline-block">x3</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<Link to={"#"} className="btn bgl-warning text-warning" >PENDING</Link>
											<Dropdown>
												<Dropdown.Toggle   variant	className="table-dropdown icon-false " >
													<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item  > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																<path d="M22 4L12 14.01L9 11.01" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="media align-items-center">
											<Link to={"/ecom-product-detail"}>	
												<img className="mr-3 img-fluid rounded-circle" width="75" src={require("./../../../../images/card/pic2.jpg").default} alt="DexignZone" />
											</Link>	
											<div className="media-body">
												<h5 className="mt-0 mb-2"><Link to={"/ecom-product-detail"}  className="text-black">Mozarella Pizza With Random Topping</Link></h5>
												<p className="mb-0 text-primary">#0010299</p>
											</div>
										</div>
									</td>
									<td>
										<h5 className="mb-2 text-black wspace-no">Kinda Alexa</h5>
										<p className="mb-0">Blue Ocean st.41551 London</p>
									</td>
									<td>
										<div className="d-flex align-items-center justify-content-center">
											<h4 className="mb-0 mr-3 fs-20 text-black d-inline-block">$8.2</h4>
											<p className="mb-0 fs-20 d-inline-block">x1</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<Link to={"#"} className="btn bgl-success text-success" >DELIVERED</Link>
											<Dropdown>
												<Dropdown.Toggle   variant	className="table-dropdown icon-false " >
													<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item  > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																<path d="M22 4L12 14.01L9 11.01" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="media align-items-center">
											<Link to={"/ecom-product-detail"}>	
												<img className="mr-3 img-fluid rounded-circle" width="75" src={require("./../../../../images/card/pic3.jpg").default} alt="DexignZone" />
											</Link>	
											<div className="media-body">
												<h5 className="mt-0 mb-2"><Link to={"/ecom-product-detail"}  className="text-black">Sweet Cheezy Pizza for Kids Meal (Small Size)</Link></h5>
												<p className="mb-0 text-primary">#0010235</p>
											</div>
										</div>
									</td>
									<td>
										<h5 className="mb-2 text-black wspace-no">Peter Parkur</h5>
										<p className="mb-0">Franklin Avenue St.66125 London</p>
									</td>
									<td>
										<div className="d-flex align-items-center justify-content-center">
											<h4 className="mb-0 mr-3 fs-20 text-black d-inline-block">$4.2</h4>
											<p className="mb-0 fs-20 d-inline-block">x2</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<Link to={"#"} className="btn bgl-light" >CANCELED</Link>
											<Dropdown>
												<Dropdown.Toggle   variant	className="table-dropdown icon-false " >
													<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item  > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																<path d="M22 4L12 14.01L9 11.01" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="media align-items-center">
											<Link to={"/ecom-product-detail"}>	
												<img className="mr-3 img-fluid rounded-circle" width="75" src={require("./../../../../images/card/pic6.jpg").default} alt="DexignZone" />
											</Link>	
											<div className="media-body">
												<h5 className="mt-0 mb-2"><Link to={"/ecom-product-detail"}  className="text-black">Tuna soup spinach with himalaya salt</Link></h5>
												<p className="mb-0 text-primary">#0010235</p>
											</div>
										</div>
									</td>
									<td>
										<h5 className="mb-2 text-black wspace-no">Jimmy Kueai</h5>
										<p className="mb-0">South Corner st41256 london</p>
									</td>
									<td>
										<div className="d-flex align-items-center justify-content-center">
											<h4 className="mb-0 mr-3 fs-20 text-black d-inline-block">$7.4</h4>
											<p className="mb-0 fs-20 d-inline-block">x3</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<Link to={"#"} className="btn bgl-warning text-warning" >PENDING</Link>
											<Dropdown>
												<Dropdown.Toggle   variant	className="table-dropdown icon-false " >
													<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item  > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																<path d="M22 4L12 14.01L9 11.01" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="media align-items-center">
											<Link to={"/ecom-product-detail"}>	
												<img className="mr-3 img-fluid rounded-circle" width="75" src={require("./../../../../images/card/pic7.jpg").default} alt="DexignZone" />
											</Link>	
											<div className="media-body">
												<h5 className="mt-0 mb-2"><Link to={"/ecom-product-detail"}  className="text-black">Mozarella Pizza With Random Topping</Link></h5>
												<p className="mb-0 text-primary">#0010299</p>
											</div>
										</div>
									</td>
									<td>
										<h5 className="mb-2 text-black wspace-no">Cindy Alexa</h5>
										<p className="mb-0">Blue Ocean St.41551 London</p>
									</td>
									<td>
										<div className="d-flex align-items-center justify-content-center">
											<h4 className="mb-0 mr-3 fs-20 text-black d-inline-block">$8.2</h4>
											<p className="mb-0 fs-20 d-inline-block">x1</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<Link to={"#"} className="btn bgl-light" >CANCELED</Link>
											<Dropdown>
												<Dropdown.Toggle   variant	className="table-dropdown icon-false " >
													<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item  > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																<path d="M22 4L12 14.01L9 11.01" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
										</div>
									</td>
								</tr>												
							</tbody></table>
							<div className="card-footer border-0 pt-0 text-center">
								<Link to={"/ecom-product-list"}  className="btn-link">View More &gt;&gt;</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-xxl-4 col-lg-12 col-sm-12">
				<div className="card">
					<div className="card-header border-0">
						<div>
							<h4 className="card-title mb-2">Daily Trending Menus</h4>
							<p className="mb-0 fs-14">Lorem ipsum dolor</p>
						</div>
					</div>
					<div className="card-body px-0 pt-0 pb-2">
						<div className="widget-media trending-menus">
							<ul className="timeline">
								<li>
									<div className="timeline-panel">
										<div className="media mr-3">
											<Link to={"/ecom-product-detail"}>	
												<img alt="" width="90" src={require("./../../../../images/card/pic8.jpg").default} />
											</Link>	
											<div className="number">#1</div>
										</div>
										<div className="media-body">
											<h5 className="mb-3"><Link to={"/ecom-product-detail"}  className="text-black">Chicken curry special with cucumber</Link></h5>
											<div className="d-flex justify-content-between align-items-center">
												<h4 className="mb-0 text-black font-w600">$5.6</h4>
												<p className="mb-0">Order <strong className="text-black font-w500">89x</strong></p>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media mr-3">
											<Link to={"/ecom-product-detail"}>	
												<img alt="" width="90" src={require("./../../../../images/card/pic4.jpg").default} /> 
											</Link>	
											<div className="number">#2</div>
										</div>
										<div className="media-body">
											<h5 className="mb-3"><Link to={"/ecom-product-detail"}  className="text-black">Watermelon juice with ice</Link></h5>
											<div className="d-flex justify-content-between align-items-center">
												<h4 className="mb-0 text-black font-w600">$4.8</h4>
												<p className="mb-0">Order <strong className="text-black font-w500">67x</strong></p>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media mr-3">
											<Link to={"/ecom-product-detail"}>	
												<img alt="" width="90" src={require("./../../../../images/card/pic9.jpg").default} />
											</Link>	
											<div className="number">#3</div>
										</div>
										<div className="media-body">
											<h5 className="mb-3"><Link to={"/ecom-product-detail"}  className="text-black">Italiano pizza with garlic</Link></h5>
											<div className="d-flex justify-content-between align-items-center">
												<h4 className="mb-0 text-black font-w600">$12.3</h4>
												<p className="mb-0">Order <strong className="text-black font-w500">59x</strong></p>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media mr-3">
											<Link to={"/ecom-product-detail"}>	
												<img alt="" width="90" src={require("./../../../../images/card/pic6.jpg").default} />
											</Link>	
											<div className="number">#4</div>
										</div>
										<div className="media-body">
											<h5 className="mb-3"><Link to={"/ecom-product-detail"}  className="text-black">Tuna soup spinach with himalaya salt</Link></h5>
											<div className="d-flex justify-content-between align-items-center">
												<h4 className="mb-0 text-black font-w600">$3.6</h4>
												<p className="mb-0">Order <strong className="text-black font-w500">49x</strong></p>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media mr-3">
											<Link to={"/ecom-product-detail"}>	
												<img alt="" width="90" src={require("./../../../../images/card/pic10.jpg").default} />
											</Link>	
											<div className="number">#5</div>
										</div>
										<div className="media-body">
											<h5 className="mb-3"><Link to={"/ecom-product-detail"}  className="text-black">Medium Spicy Spagethi Italiano</Link></h5>
											<div className="d-flex justify-content-between align-items-center">
												<h4 className="mb-0 text-black font-w600">$4.2</h4>
												<p className="mb-0">Order <strong className="text-black font-w500">49x</strong></p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
            
        </div>    
            
         
      </Fragment>
   );
};

export default Home;
