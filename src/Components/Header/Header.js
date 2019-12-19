import React from 'react';
import './Header.scss';
import NavBar from '../NavBar/NavBar';
import { connect } from 'react-redux';

export const Header = ({ user }) => {
  return (
    <header className='header'>
      <h1>Hate It 'N Rate It</h1>
      {!user.name ? null : <p>Welcome <span>{user.name}</span></p>}
      <NavBar />
   </header>
  )
}

 export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);  