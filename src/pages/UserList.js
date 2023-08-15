import React from 'react'
import { useEffect } from "react";
import MainLayout from '../layout/MainLayout'
import UserListTable from '../components/UserListTable'

function UserList() {

  useEffect (() => {
    document.title='User List';
  },[]);


  return (
    <MainLayout>
      <UserListTable></UserListTable>
    </MainLayout>
  )
}

export default UserList