// import React from 'react';
// import styles from "./users.module.css";
// import {NavLink} from "react-router-dom";
//
// const Users = (props) => {
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // bu yerda pagesCount-jami stranitsa soni = Math.ceil-matematik bo'lish
//     // props.totalUsersCount = jami foydalanuvchilar soni
//     // props.pageSize = stranitsa hajmi
//     // ya'ni maksimal foydalanuvchilar sonini stranitsa hajmiga bo'linmoqda. Masalan props.totalUsersCount= 120 pageSize=5 120/5=24 ta stranitsa.
//
//     let pages = []; // stranitsa
//     for (let i = 1; i <= pagesCount; i++) { // bu yerda i=1 agar i kichik bo'lsa jami stranitsa hajmidan i qo'shilishda davom etadi.
//         pages.push(i);
//     }
//     return <div>
//         {
//             props.users.map(u => <div key={u.id}>
//                     <span>
//                         <div>
//                             <NavLink to={'/profile/' + u.id}>
//                             <img src={u.photos.small != null ? u.photos.small : userPhoto}
//                                 //className={styles.userPhoto}
//                                  alt={'asd'}/>
//                             </NavLink>
//                         </div>
//                         <div>
//                             {u.followed
//                                 ?
//                                 <button disabled={props.followInProgress.some(id => id === u.id)} className={styles.btn}
//                                         onClick={() => {
//                                             props.unFollow(u.id)
//                                         }}> unFollow </button>
//                                 :
//                                 <button disabled={props.followInProgress.some(id => id === u.id)} className={styles.btn2}
//                                         onClick={() => {
//                                             props.follow(u.id)
//                                         }}> Follow </button>}
//                         </div>
//                     </span>
//
//                 <span>
//                         <span>
//                             <div>Name: {u.name}  </div>
//                             <div>Status: {u.status}  </div>
//                         </span>
//                     </span>
//             </div>)
//
//         }
//         <div>
//             {pages.map(p => {
//                 return <button className={styles.pageStyle}>
//                       <span className={props.page === p && styles.selectedPage}
//                             onClick={() => {
//                                 props.onPageChanged(p)
//                             }}>{p}</span></button>
//             })}
//         </div>
//     </div>
// };
//
// export default Users;