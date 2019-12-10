// import React from 'react';
//
// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status
//     };
//
//     activateEditMode = () => {
//
//         this.setState({
//             editMode: true
//         })
//     };
//     deActivateEditMode = () => {
//
//         this.setState({
//             editMode: false
//         });
//         this.props.updateStatus(this.state.status);
//     };
//
//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//
//     };
//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.status !== this.props.status)
//             this.setState({
//                 status: this.props.status
//             })
//     }
//     render() {
//         return (
//             <div>
//                 {!this.state.editMode &&
//                 <div>
//                     <span onDoubleClick={this.activateEditMode}>{this.props.status || "____________"}</span>
//                 </div>
//                 }
//                 {this.state.editMode &&
//                 <div>
//                     <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode}
//                            value={this.state.status}/>
//                 </div>
//                 }
//             </div>
//         )
//
//     }
// }
//
// export default ProfileStatus;

import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"It-kamasutrra-com"} />);
        const instance = component.getInstance()
        expect(instance.state.status).toBe("It-kamasutrra-com");
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status={"It-kamasutrra-com"} />);
        const root = component.root;
       let span =  root.findByType("span")
        expect(span.length).not.toBeNull();
    });

    test("after creation span should be corrected", () => {
        const component = create(<ProfileStatus status={"It-kamasutrra-com"} />);
        const root = component.root;
        let span =  root.findByType("span")
        expect(span.innerText).toBe("It-kamasutrra-com");
    });

    test("callBack should be called", () => { // bu yerda callBack ishlayotgani tekshirilmoqda
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="It-kamasutrra-com" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});