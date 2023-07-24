import { html } from "../../node_modules/lit-html/lit-html.js";

import * as gamesService from '../api/api.js;'

const homeTemplate = (games) => html`
<section id="welcome-world">

<div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
</div>
<img src="./images/four_slider_img01.png" alt="hero">

<div id="home-page">
    <h1>Latest Games</h1>

   ${games.map(previewTemplate)}
    

    <!-- Display paragraph: If there is no games  -->
    <p class="no-articles">No games yet</p>
</div>
</section>
`;


// export async function homePage(ctx) {
//     const games = await gamesService.getResent();
//     ctx.render(homeTemplate(games));
// }

const previewTemplate = (game) => html`
<div class="game">
        <div class="image-wrap">
            <img src="./images/CoverFire.png">
        </div>
        <h3>Cover Fire</h3>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="#" class="btn details-btn">Details</a>
        </div>
    </div>
`;

export  function homePage(ctx) {
    
    ctx.render(homeTemplate());
}