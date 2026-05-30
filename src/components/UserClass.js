import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:1,
             userInfo:{
                name:"dummy",
                avatar_url:"dummy.photo",
                
             },
        }
    }
    componentDidMount() {
        this.fetchUser();
    }

    async fetchUser() {
        console.log(this.props.name + " child component did mount");

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }
    
    componentDidUpdate(){
        console.log("component did updated");
    }

    componentWillUnmount(){
        console.log("component will unmound called")    
    }

    render(){
      

        //Destructure it
        const{count2}=this.state;
        return (
            <div className='user-card'>
        <h2>{this.state.userInfo.name}</h2>
        <img  alt="user avatar"  src={this.state.userInfo.avatar_url
}></img>
        <h2>count={this.state.count}</h2>
        <button onClick={()=>{
            //never Update State variavle directly

            this.setState({
                count:this.state.count+1,
            })

        }}>count increase</button>
        <h2>count2={count2}</h2>
        
    </div>
        );
    }
}

export default UserClass