import * as api from './api.js';

const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    games: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    byId: '/data/games/'
}

export async function getRecent() {
    return api.get(endpoints.recent);
}

export async function getAll() {
    return api.get(endpoints.games);
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function create(data) {
   return api.post(endpoints.create, data);
}