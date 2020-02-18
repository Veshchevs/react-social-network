import React, {useEffect, useState} from 'react';
import cl from './Profile.module.css';


const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(true)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {

        setStatus(props.status)
    }, [props.status])

    let activeEditMode = () => {
        setEditMode(false)
    }
    let deActiveEditMode = () => {
        setEditMode(true)
        props.updateStatusThunk(status)
    }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }
    return (
        <div className={cl.item}>
            <div> {editMode
                ? <span onDoubleClick={activeEditMode}

                > {props.status || "status"}</span>

                : <input onChange={onStatusChange} autoFocus={true} onBlur={deActiveEditMode} value={status}/>}

            </div>

        </div>
    )
};

export default ProfileStatus