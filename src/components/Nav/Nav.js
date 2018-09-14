import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component {
    render () {
        if (this.props.location.pathname === '/') {
            return null;
        }
        console.log(this.props)
        return (
            <div>
                <h1>Nav</h1>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
                <img src={this.props.profile_pic} alt=""/>
                <p>{this.props.username}</p>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        username: state.username,
        profile_pic: state.profile_pic
    }
}

const navWithRouter = withRouter(Nav)
export default connect (mapStateToProps) (navWithRouter)