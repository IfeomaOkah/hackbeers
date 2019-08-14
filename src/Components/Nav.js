import {Link} from "react-router-dom";
import React, {Component} from 'react';
import { withRouter } from "react-router"; 
import Auth from "../Utilities/Auth";
const auth = new Auth();

class Nav extends Component {

    state = {
        user: null
    }

    handleLogout = (e)=> {
        e.preventDefault();
        var fixProps = this.props;
        auth.logout()
            .then(()=> {
                this.setState({user: null}, ()=> {
                    fixProps.history.push("/");
                })
                
            })
            .catch((error)=> {
                this.setState({error: error.message})
            })
    }

    componentDidMount() {
        this.setState({
            user: auth.getUser()
        })
    }

    render() {
        return (
            <nav>
                {
                  this.state.user? 
                    <div>
                        <Link to="/home">
                            Home
                        </Link>
                        <p className="welcome">Welcome {this.state.user.username}</p>
                        <a href="#" onClick={this.handleLogout}>Logout</a>    
                    </div>
                    :
                    <Link to="/auth/signup">Sign up</Link>
                }
​
            </nav>
        )
    }
}

export default withRouter(Nav);