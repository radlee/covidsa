import React from 'react';
const  Table = ({ posts }) => {
    return (
     <div class="container p-15">
            <h2 class="heading-two">Update and History on <em class="novel">The Novel COVID-19</em> pandemic in South Africa</h2>
            <h5 class="heading-five"><em>(Statistics displayed update <b>daily and consistently in real-time.</b></em>)</h5> 
            <p class="source"><em>Source : <b><a tartget="__blank" href="https://disease.sh/">The NovelCOVID</a></b></em></p>           
                       
            { (posts.length > 0) ? posts.map( (post, index) => {

            return(

                <div key={ index } class="list-group">
                <a class="list-group-item list-group-item-action flex-column align-items-start ">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="cases mb-1">Cases : {post.Confirmed}</h5>
                    <small className="deaths">Deaths : {post.Deaths}</small>
                    </div>
                    <p class="mb-1 recovered">Recovered : {post.Recovered}</p>
                    <p class="mb-1 active">Active : {post.Active}</p>
                    <small className="date">Date : {post.Date}</small>
                </a>
                <br/>
                
            </div>
            )}) : <button class="btn btn-info">
                    <span class="spinner-border spinner-border-sm"></span> Loading...
                </button> }
        </div>
    );
}

export default Table;