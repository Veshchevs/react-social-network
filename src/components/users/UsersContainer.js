import {connect} from 'react-redux'
import Users from "./Users";
import {followThunk, getUsersThunk, setCurrentPage, setUsers, unfollowThunk,} from "../../redux/usersPageReducer";
import {compose} from "redux";
import {currentPage, getUsers, pageSize, portionSize, totalUsersCount} from "./UsersSelectors";



const mapStateToProps = (state) => {
    return (
        {
            users: getUsers(state),
            pageSize: pageSize(state),
            totalUsersCount: totalUsersCount(state),
            currentPage: currentPage(state),
            portionSize: portionSize(state)
        }
    )
}


const UsersContainer = compose(connect(mapStateToProps
    ,{followThunk, unfollowThunk
        ,setCurrentPage, setUsers, getUsersThunk}))(Users)




export default UsersContainer