import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateLanguage from '../containers/language/CreateLanguage';
import UpdateLanguage from '../containers/language/UpdateLanguage';
import Home from './Home';
import LanguageContainer from '../containers/language/LanguageContainer';
import LanguageDetails from '../containers/language/LanguageDetails';
import Users from '../containers/user/ReadUsers';
import UserDetails from '../containers/user/UserDetails';
import CreateUser from '../containers/user/CreateUser';
import UpdateUser from '../containers/user/UpdateUser';
import UpdateUserLanguages from '../containers/user/UpdateUserLanguages';
import MessageBoard from "../containers/message/MessageBoard";
import CreateMessage from "../containers/message/CreateMessage";
import CreateUserLanguages from '../containers/userLanguages/CreateUserLanguages';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/languages' component = {LanguageContainer} />
            <Route exact path='/languages/add' component = { CreateLanguage } />
            <Route exact path='/languages/edit/:id' component = { UpdateLanguage } />
            <Route exact path='/languages/:id' component = { LanguageDetails } /> 
            <Route exact path='/users' component = { Users } />
            <Route exact path='/users/register' component = { CreateUser } />
            <Route exact path='/users/edit/:id' component = { UpdateUser } />
            <Route exact path='/users/:id' component = { UserDetails } /> 
            <Route exact path='/userlanguages/edit/:id' component = { UpdateUserLanguages } />
            <Route exact path='/userlanguages/create' component = { CreateUserLanguages } />
            {/* <Route exact path='/file' component ={ UploadAvatar } /> */}

           {/* Messages */}
            <Route exact path='/messages' component ={ MessageBoard } />
            <Route exact path='/users/contact/:id' component ={ CreateMessage } />

           
            

        </Switch>    
    </main>    
)

export default Main;