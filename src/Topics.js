import React, {Component} from "react";
import scriptures from "./Scriptures";

class Topics extends Component {
    constructor(props){
        super(props);

        this.state={
            search:null
        };
    }

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
    }
    
    render() {
        const styleInfo = {
            paddingRight: '10px'
        }
        const elementStyle = {
            border: 'solid',
            borderRadius: '10px',
            position: 'relative',
            left: '10vh',
            height: '3vh',
            width: '20vh',
            marginTop: '5vh',
            marginBottom: '10vh'
        }
        // const items = scriptures.filter((data)=>{
        //         if(this.state.search == null)
        //             return data
        //         else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.topic.toLowerCase().includes(this.state.search.toLowerCase())){
        //             return data
        //         }
        //     }).
        return <div>
            <h1 className="title is-1">This is the About Page</h1>
            <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e) => this.searchSpace(e)}/>
            <p>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
                in efficitur arcu congue. Nam fermentum commodo egestas.
            </p>
        </div>
    }
}

export default Topics;