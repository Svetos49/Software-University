import {html, render} from '../../node_modules/lit-html/lit-html.js';

const root = document.getElementById('main-content');

function ctxRender(content) {
    render(content, root);
}

export function addRender(ctx, next) {
   
    //render(navTemplate(ctx.user), header);
    ctx.render = ctxRender;
 
    next();
}