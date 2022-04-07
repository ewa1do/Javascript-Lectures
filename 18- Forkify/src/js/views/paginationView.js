import View from './View.js';
import icons from '../../img/icons.svg';
// import { state } from "../model.js";

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick (handler) {
        this._parentElement.addEventListener('click', function (e) {
            e.preventDefault();
            const btn = e.target.closest('.btn--inline');
            
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            
            handler(goToPage);
        });
    }

    _generateMarkup () {
        const currentPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // Page 1, and there are other pages
        if (currentPage === 1 && numPages > 1) {
            return this._generateMarkupButton();
        }

        // Last Page
        if (currentPage === numPages && numPages > 1) {
            return this._generateMarkupButton(currentPage, -1, 'prev', 'left');
        }
        
        // Other page
        if (currentPage < numPages) {
            return `
                ${this._generateMarkupButton(currentPage, -1, 'prev', 'left')}
                ${this._generateMarkupButton()}
            `;
            
        }

        // Page 1, and there are NO other pages
        return ``;
    }

    // By default is setted to render the next button if you need render prev button change the values when call it
    _generateMarkupButton (page = this._data.page, goNextOrPrev = 1, btnClass = 'next', arrowClass = 'right') {
        return `
        <button data-goto="${page + (goNextOrPrev)}" class="btn--inline pagination__btn--${btnClass}">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-${arrowClass}"></use>
            </svg>
            <span>Page ${page + (goNextOrPrev)}</span>
        </button>
        `;
    }
}

export default new PaginationView();