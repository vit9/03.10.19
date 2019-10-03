import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Avatar } from 'antd';

class Myprofile extends Component {
   
    signOut = () =>{
        const {removeUser} = this.props
        localStorage.removeItem("id")
        removeUser("remove")
    }
    render() {
        const { user, st, mark } = this.props
        let data;
            if(st || !user.login){
                data = <Link to="/login" className="link">
                        <div className="header__auth__container">
                            <div className="avatar">
                                <Avatar icon="user" size={60} style={{ backgroundColor: '#004740' }}/>
                            </div>
                            <div className="text">
                                Мой профиль
                            </div>     
                        </div>    
                       </Link>
        } else {   
                data = <Link to="/market" className="link">
                        <div className="header__auth__container">
                            <div className="avatar">
                                <Avatar icon="user" size={60} style={{ backgroundColor: '#004740' }}/>
                            </div>
                            <div className="text">
                             { mark ||  user.login }
                            </div>                    
                        </div>
                        </Link>    
        }

        return (
            <div style={{ "display": "flex", "justifyContent": "flex-end", "margin":"15px 25px 0px 0px" }}>
            <div className="header__auth">
                {data}
                <p style={{ "paddingTop": "10px" }}>{ st || user.login && `number of  carts are ${user.staffs.length}`}</p>
                {st || user.login &&  <Link to="/login"><button className="logOut" onClick={this.signOut}>Log out</button></Link>}
            </div>
            </div>
        );
    }
}

export default Myprofile;