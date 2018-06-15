import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const mapStateToProps = state => ({
    user: state.user,
});

class FavoriteButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favoriteChecked: false,
            detailsArray: [],
        };
    }

    handleChange = id => event => {
        if (this.state.favoriteChecked === false) {
            this.props.dispatch({ type: 'POST_TRAIL', payload: this.props.favorite })
            this.setState({
                favoriteChecked: true,
            });
        } else if (this.state.favoriteChecked === true){
            console.log('You need to add an update to the state!')
            this.props.dispatch({ type: 'DELETE_TRAIL', payload: this.props.favorite })
            this.setState({
                favoriteChecked: false,
            });
        }
    };

    render() {
        return (
            <div>

                <FormControlLabel
          control={
            <Checkbox checked={this.state.favoriteChecked} onChange={this.handleChange(this.props.id)} icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />
          }
          label="Favorite"
        />

                {/* <Checkbox
                    checked={this.state.favoriteChecked}
                    onChange={this.handleChange(this.props.id)}
                /> */}
                {this.props.detailsArray}
            </div>
        );
    }
}

export default connect(mapStateToProps)(FavoriteButton);