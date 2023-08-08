import React from "react";
import "./style/ViewDashboard.css";
import IconDashboard from "./img/dashboard.png";
import IconCustomer from "./img/customer.png";
import IconProduct from "./img/products.png";
import IconPayment from "./img/payment.png";
import IconMessage from "./img/message.png";
import IconSetting from "./img/settings.png";
import IconProduct2 from "./img/product2.png";
import IconMessage2 from "./img/message2.png";

const ViewDashboard = () => {

    //const { newCustomers } = useUserContext();

    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="dashboard-container">

                <div className="side-menu">
                    <div className="brand-name">
                        <h1 className="heading">Brand</h1>
                    </div>
                    <ul>
                        <li><img src={IconDashboard} alt=""></img>
                            <a href="/dashboard">&nbsp; DashBoard</a>
                        </li>
                        <li><img src={IconCustomer} alt=""></img>
                            <a href="/dashboard/users">&nbsp; Customer</a>
                        </li>
                        <li><img src={IconProduct} alt=""></img>
                            <a href="/dashboard/products">&nbsp; Pending</a>
                        </li>
                        <li><img src={IconPayment} alt=""></img>
                            <a href="/dashboard/payments">&nbsp; Payment</a>
                        </li>
                        <li><img src={IconMessage} alt=""></img>
                            <a href="/dashboard/message">&nbsp; Message</a>
                        </li>
                        <li><img src={IconSetting} alt=""></img>
                            <a href="/dashboard/settings">&nbsp; Settings</a>
                        </li>
                    </ul>
                </div>

                <div className="content-dashboard">
                    <div className="cards">
                        <div className="card">
                            <div className="box">
                                <h1>2194</h1>
                                <h3>Customer</h3>
                            </div>
                            <div className="icon-case">
                                <img src={IconCustomer} alt=""></img>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <h1>223</h1>
                                <h3>Paiement</h3>
                            </div>
                            <div className="icon-case">
                                <img src={IconProduct2} alt=""></img>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <h1>234</h1>
                                <h3>Payment</h3>
                            </div>
                            <div className="icon-case">
                                <img src={IconPayment} alt=""></img>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <h1>194</h1>
                                <h3>Message</h3>
                            </div>
                            <div className="icon-case">
                                <img src={IconMessage2} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="content-dashboard-2">
                        <div className="recent-payments">
                            <div className="title">
                                <h2 className="h2">Recent Payments</h2>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#" className="btn-payements">View All</a>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="white">Name</th>
                                        <th className="white">Product</th>
                                        <th className="white">Quantity</th>
                                        <th className="white">Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="font">Allen</th>
                                        <th className="font">Milo</th>
                                        <th className="font">32</th>
                                        <th className="font">234</th>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <td><a href="#" className="btn-table">View</a></td>
                                    </tr>
                                    <tr>
                                        <th className="font">Ramel</th>
                                        <th className="font">Tv</th>
                                        <th className="font">31</th>
                                        <th className="font">2459</th>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <td><a href="#" className="btn-table">View</a></td>
                                    </tr>
                                    <tr>
                                        <th className="font">Christian</th>
                                        <th className="font">Computer</th>
                                        <th className="font">64</th>
                                        <th className="font">34021</th>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <td><a href="#" className="btn-table">View</a></td>
                                    </tr>
                                    <tr>
                                        <th className="font">Klan</th>
                                        <th className="font">Telephone</th>
                                        <th className="font">42</th>
                                        <th className="font">23412</th>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <td><a href="#" className="btn-table">View</a></td>
                                    </tr>
                                    <tr>
                                        <th className="font">Jefferson</th>
                                        <th className="font">Mouse</th>
                                        <th className="font">69</th>
                                        <th className="font">430</th>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <td><a href="#" className="btn-table">View</a></td>
                                    </tr>
                                    <tr>
                                        <th className="font">Makoy</th>
                                        <th className="font">Keyboard</th>
                                        <th className="font">90</th>
                                        <th className="font">521</th>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <td><a href="#" className="btn-table">View</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="new-customers">
                            <div className="title">
                                <h2 className="h2">New Customer</h2>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#" className="btn-customer">View All</a>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="white">First Name</th>
                                        <th className="white">Last Name</th>
                                        <th className="white">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {newCustomers.map((customer, index) => (
                                        <tr key={index}>
                                            <td className="font">{customer.firstName}</td>
                                            <td className="font">{customer.lastName}</td>
                                            <td className="font">{customer.email}</td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDashboard;