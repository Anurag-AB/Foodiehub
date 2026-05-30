import React from "react"
import User from "./User"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);

        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("component did mount")
    }
    render(){
       return(
         <div>
            <h1>About</h1>
            <div>
                LoggedIn User
               <UserContext.Consumer>
                 {({ loggedInUser }) => (
                     <h1 className="text-xl font-bold">{loggedInUser}</h1>
                 )}
                </UserContext.Consumer>
            </div>
            <h2>This is about page</h2>
            <User name={"Anurag (function)"}/>

            <UserClass name={"1st About (Class)"}/>
             <UserClass name={"2nd About (Class)"}/>
        </div>
       )
    }
};
export default About;