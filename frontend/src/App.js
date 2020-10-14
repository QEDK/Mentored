import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import MentorsPage from './pages/MentorsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import { CookiesProvider } from "react-cookie";
import MakeList from './pages/MakeList';
import MentorPage from './pages/MentorPage'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
        loggedin: cookies.get('loggedin') || cookies.set('loggedin', "abcd", '/'),
        uid: cookies.get('uid') || cookies.set('uid', "1234", '/')
    };
}
  // componentDidMount(loggedin,uid, cookies){
  //   loggedin = cookies.set('loggedin', loggedin, '/')
  //   uid = cookies.set('uid', uid, '/')
  //   this.setState({
  //     loggedin: this.state.loggedin,
  //     uid: this.state.uid
  //   })
  // }
  render() {
    return (
      <CookiesProvider>
        <Router>
          <Header />
          <main className='py-3'>
            <Container>
              <Route path='/' component={LandingPage} exact />
              <Route path='/curated' component={HomePage} exact />
              <Route path='/curated/:id' component={ListPage} exact />
              <Route path='/mentors' component={MentorsPage} exact />
              <Route path='/login' component={LoginPage} exact />
              <Route path='/signup' component={SignupPage} exact />
              <Route path='/profile' component={ProfilePage} exact />
              <Route path='/mentor/:id' component={MentorPage} exact />
              <Route path='/profile/makelist' component={MakeList} exact />
            </Container>
          </main>
          <Footer />
        </Router>
      </CookiesProvider>
    );
  }
}

export default withCookies(App);
