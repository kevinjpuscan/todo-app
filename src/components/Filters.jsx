import React from 'react';
import Wrapeer from './Wrapper';

export default function Filters(){
    return(
        <Wrapeer>
            <div className="filters">
                <div className="filter-element pointer active">All</div>
                <div className="filter-element pointer">Active</div>
                <div className="filter-element pointer">Completed</div>
            </div>
        </Wrapeer>
    )
}