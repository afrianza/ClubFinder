import "./club-item.js";

class ClubList extends HTMLElement {
    set clublist(clubs) {
        this._clublist = clubs;
        this.render();
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
    }

    render() {
        this.innerHTML = "";
        this._clublist.forEach(club => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.clubitem = club;
            this.appendChild(clubItemElement)
        })  
    }
}

customElements.define("club-list", ClubList);