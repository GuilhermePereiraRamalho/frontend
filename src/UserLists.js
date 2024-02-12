import React from "react";
import ListComponent from "./ListComponent";

export default class UserLists extends React.Component{
    state = { lists:null, loading: true }
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] ='Token 99bac42d4f4ffde4b583bb1a8335a950219998de'
        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data)
        this.setState({lists: data, loading: false});
    }
    render()
    {
        return (
            <div>
                <ListComponent listname={'Minha lista'} />
                <ListComponent listname={'Minha lista 2'} />
            </div>
        )
    }
    
}