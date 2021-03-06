import React from 'react';
import '../stylesheets/summonerPage.css'

let currentMatchesLoaded = 10;

function SummonerPage(props) {
    
    console.log(props.history);

    return(
        <div className='summonerContainer'>
            <div id='profileInfo'>
                <div id='profileIcon'>{props.summoner.profileIconId}</div>
                <div id='summonerName'>{props.summoner.name}</div>
                <div id='summonerLevel'>{props.summoner.summonerLevel}</div>
            </div>
            <div className='matchHistoryContainer'>
                {props.last10}
            </div>
            <div><button onClick={loadMoreMatches()} type="button">Load More</button></div>
        </div>
    );
}

async function loadMoreMatches() {

}



export default SummonerPage;