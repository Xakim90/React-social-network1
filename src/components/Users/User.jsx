import React from 'react';
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png"

let User = ({user, followInProgress, unFollow, follow}) => {
    return <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={styles.userPhoto}
                                 alt={'asd'}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ?
                                <button disabled={followInProgress.some(id => id === user.id)} className={styles.btn}
                                        onClick={() => {
                                            unFollow(user.id)
                                        }}> unFollow </button>
                                :
                                <button disabled={followInProgress.some(id => id === user.id)}
                                        className={styles.btn2}
                                        onClick={() => {
                                            follow(user.id)
                                        }}> Follow </button>}
                        </div>
                    </span>

        <span>
                        <span>
                            <div>Name: {user.name}  </div>
                            <div>Status: {user.status}  </div>
                        </span>
                    </span>
    </div>
};


export default User;