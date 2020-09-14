class ClubItem extends HTMLElement {
    set clubitem(club) {
        this._clubitem = club;
        this.render();
    }

    render() {
        this.innerHTML = `
        <img class="fan-art-club" src="${this._clubitem.fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${this._clubitem.name}</h2>
                    <p>${this._clubitem.description}</p>
                </div>        
        `;
    }
}

customElements.define("club-item", ClubItem);