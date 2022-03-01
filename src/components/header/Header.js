import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';
  toHTML() {
    return `<input type="text" class="excel__title" value="Новая таблица">

        <div class="excel__buttons">
          <div class="excel__button">
            <span class="material-icons">
              delete
            </span>
          </div>
          <div class="excel__button">
            <span class="material-icons">
              exit_to_app
            </span>
          </div>
        </div>`;
  }
}
