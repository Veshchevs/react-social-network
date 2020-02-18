import React, {useEffect} from 'react';
import cl from './Users.module.css';
import Paginator from "../common/paginator/Paginator";
import User from "./User";


const Users = (props) => {
    const {
        users, totalUsersCount,
        currentPage, pageSize,
        getUsersThunk, setCurrentPage, portionSize,
        followThunk, unfollowThunk
    } = props || {}

    useEffect(() => {
        getUsersThunk(currentPage, pageSize)
    }, [currentPage, pageSize, getUsersThunk])
    return (

        <div className={cl.item}>
            <Paginator pageSize={pageSize}
                       totalItemsCount={totalUsersCount}
                       currentPage={currentPage}
                       setCurrentPage={setCurrentPage}
                       portionSize={portionSize}/>
            <div>
                {users.map(user =>
                    <User key={user.id}
                          user={user}
                          followThunk={followThunk}
                          unfollowThunk={unfollowThunk}/>
                )}
            </div>
        </div>
    )
}

export default Users