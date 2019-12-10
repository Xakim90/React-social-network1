import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer"

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer"; bu yerda react.lazy yordamida import qilinmoqda
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
    //     if  (!this.props.initialized) {
    //                 return <Preloader/>
    // }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs'
                           render={() => {
                              return <React.Suspense fallback={ <div> Loading...</div>}>
                               <DialogsContainer/>
                              </React.Suspense>
                           } }/>   bu yerda suspense HOC yordamida o'rab olish uchun refaktoring qilinmoqda*/}
                           <Route path='/dialogs'
                                  render={withSuspense(DialogsContainer)} />
                    {/*<Route path='/profile/:userId?'
                           render={() => {
                               return <React.Suspense fallback={ <div> Loading...</div>}>
                               <ProfileContainer/>
                               </React.Suspense>
                           }}/>*/}
                           <Route path='/profile/:userId?'
                                  render={withSuspense(ProfileContainer)} />
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}
/* *<Route path='/dialogs' component={Dialogs}/> /!*Route exact-aniq urlga yo'naltirish*!/!*!/
 *<Route path='/profile' component={Profile}/>*!/*/
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
const AppContainer = compose(
    withRouter,
    connect (mapStateToProps, {initializeApp})) (App);

const SamuraiJSApp = (props) => {
       return <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
}
export default SamuraiJSApp;
