import icons from '../../img/icons.svg'; // Parcel 1
export default class View {
    _data;
    
    /**
     * Render the received object to the DOM 
     * @param {Object | Object[]} data The data to be rendered (e.g Recipe)
     * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
     * @returns {undefined | string} A markup string is returned if render = false
     * @this {Object} View instance 
     * @author Eduardo Vera
     * @todo Finish Implementation
     */

    render (data, render = true) {
        if (!data || (Array.isArray(data) && data.length === 0)) 
            return this.renderError();

        this._data = data;
        const markup = this._generateMarkup();

        if (!render) return markup;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update (data) {
        this._data = data;
        const newMarkup = this._generateMarkup();

        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        
        // console.log(curElements);
        // console.log(newElements);

        // Updates changed: TEXT
        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];
            // console.log(curEl, newEl.isEqualNode(curEl));
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
                // console.log(newEl.firstChild.nodeValue.trim(), '🇻🇪');
                curEl.textContent = newEl.textContent;
            }

            // Updates changed: Attributes
            if (!newEl.isEqualNode(curEl)) {
                Array.from(newEl.attributes).forEach(attr => {
                    // console.log(Array.from(newEl.attributes));
                    curEl.setAttribute(attr.name, attr.value);
                })
            }
        });


    }

    _clear () {
        this._parentElement.innerHTML = '';
    }

    renderSpinner () {
        const markup = `
        <div class="spinner">
            <svg>
            <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
        `;
        this._clear;
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError (message = this._errorMessage) {
        const markup = `
            <div class="error">
                <div>
                    <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage (message = this._message) {
        const markup = `
            <div class="message">
                <div>
                    <svg>
                    <use href="${icons}#icon-smile"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}