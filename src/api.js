export const API_URL = "https://hacker-news.firebaseio.com/v0/";

const API_URL_BUILDER = (path) => { return API_URL + path + ".json" };

// Stories
export const TOP_STORIES = () => { return API_URL_BUILDER("topstories") };
export const NEW_STORIES = () => { return API_URL_BUILDER("newstories") };
export const BEST_STORIES = () => { return API_URL_BUILDER("beststories") };
export const ASK_STORIES = () => { return API_URL_BUILDER("askstories") };
export const SHOW_STORIES = () => { return API_URL_BUILDER("showstories") };
export const JOB_STORIES = () => { return API_URL_BUILDER("jobstories") };

// Items
export const GET_ITEM = (itemId) => { return API_URL_BUILDER("item/" + itemId) };

// Users
export const GET_USER = (user) => { return API_URL_BUILDER("user/" + user) };
