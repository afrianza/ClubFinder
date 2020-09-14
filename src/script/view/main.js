import "../custom-element/club-list.js";
import '../custom-element/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = async () => {
        try{
        const results = await DataSource.searchClub(searchElement.value);
        renderResult(results);
        } catch (message) {
            fallbackResult (message)
        }
    };

    const renderResult = results => {
        clubListElement.clublist = results;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;