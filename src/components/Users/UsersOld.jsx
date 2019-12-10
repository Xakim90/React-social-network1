// import React from 'react';
//
// import styles from './users.module.css'
// import * as axios from "axios";
// import userPhoto from '../../assets/images/user.png'
//
// let Users = (props) => {
//
//     let requestUsers = () =>
//     {
//         if (props.users.length === 0) {
//
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//                 props.setUsers(response.data.items)
//             });
//         }
//     };
//
//     return <div>
//         <button onClick={requestUsers}>Get Users</button>
//         {
//
//             props.users.map(u => <div key={u.id}>
//                     <span>
//                         <div>
//                             {/*<img src={u.small != null ? u.small : userPhoto} className={styles.userPhoto}*/}
//                                  {/*alt={'asd'}/>*/}
//                         </div>
//
//                         <div>
//
//                             {u.followed
//                                 ? <button onClick={() => {
//                                     props.unfollow(u.id)
//                                 }}> Unfollow </button>
//                                 : <button onClick={() => {
//                                     props.follow(u.id)
//                                 }}> Follow </button>}
//
//                         </div>
//                     </span>
//                 <span>
//                         <span>
//                             <div>{u.name} kasdjasd</div>
//                             <div>{u.status}</div>
//                         </span>
//                         <span>
//                             {/*<div>{"u.country"}</div>*/}
//                             {/*<div>{"u.city"}</div>*/}
//                         </span>
//                     </span>
//             </div>)
//         }
//     </div>
// };
//
// export default Users;