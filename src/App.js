import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Container from '@material-ui/core/Container';
import { Grid } from '@mui/material';
import UsersContainer from './components/Users/UsersContainer';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import ProfileFormContainer from './components/Profile/ProfileFormContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container maxWidth="lg">
          <Header />
          <ToastContainer />
          <Grid container marginTop={2}>
            <Grid item md={2}>
              <Navbar />
            </Grid>
            <Grid item md={10} sx={{paddingLeft: '20px'}}>
              <Routes>
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/edit/:userId' element={<ProfileFormContainer />} />
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
