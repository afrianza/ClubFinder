class AppBar extends HTMLElement {

    constructor () {
        super();
        this.shadowDOM = this.attachShadow({mode: open});
    }

    connectedCallback(){
        this.render();
    }

    render () {
        this.shadowDOM.innerHTML = `
        <style>
            app-bar {
                display: block;
                padding: 16px;
                width: 100%;
                background-color: cornflowerblue;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
        </style>
        <h2>Club Finder</h2>`;
    }

}

customElements.define("app-bar", AppBar);