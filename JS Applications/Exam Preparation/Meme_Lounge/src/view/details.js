
import { getMemeById } from "../api/data.js";
import { getUserData } from "../util.js";
import { html } from "../lib.js";



const detailsTemplate = (meme, isOwner) => html`
       <section id="meme-details">
            <h1>Meme Title: ${meme.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${meme.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${meme.description}</p>

                    ${isOwner ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
                    <button class="button danger">Delete</button>` : null} 
                </div>
            </div>
        </section>`;

  export async function detailsPage(ctx) {
      const meme = await getMemeById(ctx.params.id);

      const userData = getUserData();
      const isOwner = userData && meme._ownerId == userData.id;
     
     ctx.render(detailsTemplate(meme, isOwner));
      
      
  }      