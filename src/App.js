import React from 'react';
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Container from '@material-ui/core/Container';
import { Grid, Hidden } from '@mui/material';
import UsersContainer from './components/Users/UsersContainer';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import ProfileFormContainer from './components/Profile/ProfileFormContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Container maxWidth="lg" >
          <Grid container spacing={2} >
            <Grid item xs={12} md={12} >
              <Header />
              <ToastContainer />
            </Grid>
            <Hidden only={['xs', 'sm']}>
              <Grid item xs={2} md={2}>
                <Navbar />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={10}>
              <Routes>
                <Route path='/users/:page' element={<UsersContainer />} />
                <Route path='/edit/:userId' element={<ProfileFormContainer />} />
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </Provider>
    </HashRouter>
  )
}

export default App;
