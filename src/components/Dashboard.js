import React, { Component } from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom';
import { getUser } from '../apiService';
import Button from 'react-bootstrap/Button';



export default class Dashboard extends Component {

    state = {
        randomUser: null
    };

    async componentDidMount() {
        try {
            const randomUserId = Math.floor(Math.random() * 10) + 1;
            const randomUser = await getUser(randomUserId);
            const totalUsers = await this.getTotalUsers();
    
            this.setState({
                randomUser,
                totalUsers,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    async getTotalUsers() {
        try {
            const response = await fetch('https://reqres.in/api/users');
            const data = await response.json();
            return data.total;
        } catch (error) {
            console.error('Error fetching total users:', error);
            return 0; // Return 0 or handle the error as needed
        }
    }


    render() {
        return (
            <body>
                <div className='dashboard-container'>

                    <div className='dashboard-greeting'>
                        <span className='bold-text'>Hi User,</span> your board is all set.
                    </div>

                    <div className='dashboard-cards-container'>
                        <div className='your-cards-handle'>Your cards</div>
                        <div className='cards-stack-container'>
                            <div className='card-1'>
                                <div className='card-gradient'></div>
                                <div className='image'>
                                    <img src="https://mobirisethemes.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg" alt="Profile" />
                                </div>
                                <div className='card-1-content'>
                                    <div className='card-1-name'>John Doe</div>
                                    <div className='card-1-description'>Welcome Back!</div>
                                </div>
                            </div>
                            <div className='card-2'>
                                <div className='card-2-content'>
                                    <div className='card-2-title'>Users</div>
                                    <div className='card-2-number'>{this.state.totalUsers}</div>
                                    <div className='card-2-description'>are registered here in the reqres API</div>
                                </div>
                                <div className='card-2-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="232" height="232" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='card-3'>
                                <div className='card-3-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="232" height="232" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                </div>
                                <div className='card-3-content'>
                                    <div className='card-3-title'>Users</div>
                                    <div className='card-3-number'>8</div>
                                    <div className='card-3-description'>are currently online</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='table-container'>
                        <div className='table-name'>User Preview</div>
                        <table className="table  table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">ID Number</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.randomUser && (
                                    <tr>
                                        <th scope="row">{this.state.randomUser.id}</th>
                                        <td>{this.state.randomUser.first_name}</td>
                                        <td>{this.state.randomUser.last_name}</td>
                                        <td>{this.state.randomUser.email}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <Button variant="dark"><Link to="/UserList" className="link-no-underline">Expand List..</Link></Button>
                    </div>
                </div>
            </body>
        )
    }
}
