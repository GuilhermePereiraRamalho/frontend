import React from "react";
import ListComponent from "./ListComponent";

export default function UserLists(){
    return (
        <div>
            <ListComponent listname={'Minha lista'} />
            <ListComponent listname={'Minha lista 2'} />
        </div>
    )
}