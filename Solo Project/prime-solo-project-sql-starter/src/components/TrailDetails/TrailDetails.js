import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
// import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
   user: state.user,
 });
 
 class TrailDetails extends Component {
   render() {
     let content = null;
     return (
         <div>
         <Nav />
         { content }
         
         <p>Trail Details</p>
       </div>
     );
   }
 }

export default connect(mapStateToProps)(TrailDetails);///