import React, { Component } from 'react'
import { getUsers, deleteUser, updateUser } from '../apiService';
import AvatarModal from './AvatarModal'; 
import "./userlist.css";
import Button from 'react-bootstrap/Button';


export default class UserListTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            editingUserId: null,
            editingFirstName: "",
            editingLastName: "",
            editingEmail: "",
            isModalOpen: false,
            selectedAvatar: null,
        };
    }

    async componentDidMount() {
        try {
            const usersData = await getUsers();
            this.setState({ users: usersData });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    handleDelete = async (userId) => {
        try {
            await deleteUser(userId);
            const updatedUsers = this.state.users.filter(user => user.id !== userId);
            this.setState({ users: updatedUsers });
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }

    handleEdit = (userId, firstName, lastName, Email) => {
        this.setState({ editingUserId: userId, editingFirstName: firstName, editingLastName: lastName, editingEmail: Email });
    }

    handleCancelEdit = () => {
        this.setState({ editingUserId: null, editingFirstName: "", editingLastName: "", editingEmail: "" });
    }

    handleSaveEdit = async (userId, updatedUserData) => {
        try {
            await updateUser(userId, updatedUserData);
            const updatedUsers = this.state.users.map(user =>
                user.id === userId ? { ...user, ...updatedUserData } : user
            );
            this.setState({ users: updatedUsers, editingUserId: null, editingFirstName: "", editingLastName: "", editingEmail: "" });
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    toggleModal = (avatarUrl) => {
        this.setState((prevState) => ({
            isModalOpen: !prevState.isModalOpen,
            selectedAvatar: avatarUrl || null,
        }));
    };

    render() {
        const { users, editingUserId, editingFirstName, editingLastName, editingEmail, isModalOpen, selectedAvatar } = this.state;
        return (

            <div className='userlist-container'>

                <div className='userlist-greetings-container'>
                    <div className='userlist-title'>User List</div>
                    <div className='userlist-description'>Here is a list of users registered in the site</div>
                </div>

                {isModalOpen && (
                    <AvatarModal avatarUrl={selectedAvatar} onClose={this.toggleModal} />
                )}


                <div className='userlist-table-container'>

                    <table className="table  table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Avatar</th>
                                <th scope="col">ID Number</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>
                                        <img
                                            src={user.avatar}
                                            alt={`Avatar of ${user.firstName} ${user.lastName}`}
                                            className='avatar-image'
                                            onClick={() => this.toggleModal(user.avatar)} 
                                        />
                                    </td>
                                    <td>{user.id}</td> 
                                    <td>                                    {editingUserId === user.id ? (
                                        <input
                                            type="text"
                                            value={editingFirstName}
                                            onChange={(e) => this.setState({ editingFirstName: e.target.value })}
                                        />
                                    ) : (
                                        user.first_name
                                    )}
                                    </td>
                                    <td>                                    {editingUserId === user.id ? (
                                        <input
                                            type="text"
                                            value={editingLastName}
                                            onChange={(e) => this.setState({ editingLastName: e.target.value })}
                                        />
                                    ) : (
                                        user.last_name
                                    )}</td>
                                    <td>                                    {editingUserId === user.id ? (
                                        <input
                                            type="text"
                                            value={editingEmail}
                                            onChange={(e) => this.setState({ editingEmail: e.target.value })}
                                        />
                                    ) : (
                                        user.email
                                    )}</td>
                                    <td>
                                        <div className='action-buttons'>
                                            <Button variant= 'secondary' onClick={() => this.toggleModal(user.avatar)}>
                                                View Avatar
                                            </Button>
                                            {editingUserId === user.id ? (
                                                <>
                                                    <Button
                                                        variant='success'
                                                        onClick={() => this.handleSaveEdit(user.id, { first_name: editingFirstName, last_name: editingLastName, email: editingEmail })}
                                                    >
                                                        Save
                                                    </Button>
                                                    <Button
                                                        variant='secondary'
                                                        onClick={this.handleCancelEdit}
                                                    >
                                                        Cancel
                                                    </Button>
                                                </>
                                            ) : (
                                                <Button
                                                    variant='warning'
                                                    onClick={() => this.handleEdit(user.id, user.first_name, user.last_name, user.email)}
                                                >
                                                    Edit
                                                </Button>
                                            )}
                                            <Button
                                                variant='danger'
                                                onClick={() => this.handleDelete(user.id)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
