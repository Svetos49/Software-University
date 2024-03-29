import page from '../node_modules/page/page.mjs';
import { addRender } from './middlewares/render.js';

page(addSession);
page(addRender);

import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

// import * as api from './api/games.js';
// window.api = api;

import {logout} from './api/user.js';
import { addSession } from './middlewares/session.js';

page('/', homePage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/logout', onLogout);


page.start();

function onLogout(ctx) {
   logout();
   ctx.page.redirect('/');
}