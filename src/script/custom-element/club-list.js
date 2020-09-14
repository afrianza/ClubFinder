import "./club-item.js";

class ClubList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set clublist(clubs) {
        this._clublist = clubs;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._clublist.forEach(club => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.clubitem = club;
            this.shadowDOM.appendChild(clubItemElement)
        })
    }
    
    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
    }
}

customElements.define("club-list", ClubList);