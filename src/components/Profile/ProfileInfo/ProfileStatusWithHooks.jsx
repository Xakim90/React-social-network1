import React, {useState,useEffect} from 'react';

// let arr = [0,() => {}];
// let [a, setA]= arr

const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(false);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1]

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    },[props.status]); // bu yerda (props.status) [props.status] bilan sinxronizatsiya qilinmoqda

    const activateEditMode = () => {
        setEditMode(true)
    };
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>
            <h1>salom salom salom</h1>
            {!editMode && <div><span onDoubleClick={activateEditMode}>{props.status || "____________"}</span></div>}
            {editMode && <div><input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true}
                                     value={status}/></div>}
        </div>
    )
}
export default ProfileStatusWithHooks;
