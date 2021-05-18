import React from 'react';
import './App.css';
import Musics from "./componets/Musics/Musics";
import News from "./componets/News/News";
import Settings from "./componets/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import NavBarContainer from "./componets/Navbar/NavbarContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import {Login} from "./componets/Login/Login";
import {Loading} from "./componets/common/LoadingComponent/Loading";
import RightNewsPanel from "./componets/RightNewsPanel/RightNewsPanel";
import UserSettings from "./componets/Settings/UserSettings/UserSettings";
import {Redirect, Switch} from "react-router";
import {compose} from "redux";
import {checkAutUser} from "./Redux/Auth-reducer";
import {connect, Provider} from "react-redux";
import Footer from "./componets/Footer/Footer";
import store, {AppStateType} from "./Redux/stor-redax";
import {SuspenseLazyLoading} from "./componets/common/Hoc/withSuspenseLazyLoading";
import EuropeBreakingNews from "./componets/News/europeBreakingNews/europeBreakingNews";
import NewCont from "./componets/News/europeNew/newCont";
import GlobalNews from "./componets/News/GlobalNews/GlobalNews";

type PropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    checkAutUser: (type: boolean) => void
}

class App extends React.Component<PropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: any) => {

    };

    componentDidMount() {
        this.props.checkAutUser(true);
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) return <Loading/>
        return (
            <div className='appWrapper'>
                <HeaderContainer/>
                <NavBarContainer/>
                {/*<RightNewsPanel/>*/}
                <div className='appWrapperContend'>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={"/profile/:id"}/>}/>
                        <Route path="/profile/:id" render={SuspenseLazyLoading(ProfileContainer)}/>
                        <Route path="/users" render={SuspenseLazyLoading(UsersContainer)}/>
                        <Route path="/dialogs" render={SuspenseLazyLoading(DialogsContainer)}/>
                        <Route path="/news" render={SuspenseLazyLoading(News)}/>
                        <Route path="/europeBreakingNews" render={SuspenseLazyLoading(EuropeBreakingNews)}/>
                        <Route path="/nearEast" render={SuspenseLazyLoading(NewCont)}/>
                        <Route path="/global/news" render={SuspenseLazyLoading(GlobalNews)}/>
                        <Route path="/musics" render={SuspenseLazyLoading(Musics)}/>
                        <Route path="/settings" render={SuspenseLazyLoading(Settings)}/>
                        <Route path="/login" render={SuspenseLazyLoading(Login)}/>
                        <Route path="/UserSettings" render={SuspenseLazyLoading(UserSettings)}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    initialized: state.auth.initialized
});

let AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {checkAutUser}))(App);

const MainApp: React.FC = () => (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>;
        </Provider>
    </BrowserRouter>);

export default MainApp;
