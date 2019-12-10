// import React from 'react';
// import User from "./User";
// import Paginator from "../common/Paginator/Paginator";
//
// let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
//     return <div>
//
//         <div>
//             {
//                 users.map(u => <User user={u}
//                                      followInProgress={props.followInProgress}
//                                      key={u.id}
//                                      unFollow={props.unFollow}
//                                      follow={props.follow}
//                     />
//                 )
//             }
//         </div>
//         <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
//                    totalUsersCount={totalUsersCount} pageSize={pageSize}/>
//     </div>
// };
//
// export default Users;

import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followInProgress={props.followInProgress}
                                     key={u.id}
                                     unFollow={props.unFollow}
                                     follow={props.follow}
                    />
                )
            }
        </div>
    </div>
}
export default Users;