import React, { Component } from 'react';
import scriptures from "./scriptures";
import ScriptureCard from "./ScriptureCard"; 

class TopicList extends Component {
    render() {
        return (
            <ul>
                {scriptures.map(s => (<ScriptureCard>{s}</ScriptureCard>))}
            </ul>
            );
    }
} 
export default TopicList;