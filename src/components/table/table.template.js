const CODES = {
  A: 65,
  Z: 90
};

function createRow(info, content) {
  return `
  <div class="row">
    <div class="row__info">${info ? info : ''}</div>
    <div class="row__data">${content}</div>
  </div>
`;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

function toColumn(col) {
  return `
    <div class="row__column">
        ${col}
    </div>
  `;
}

function toCell() {
  return `
    <div class="row__cell" contenteditable></div>
  `;
}

export function createTable(rowsCount = 10) {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  rows.push(createRow(null, cols));

  for (let i=0; i<rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');

    rows.push(createRow(i+1, cells));
  }

  return rows.join('');
}
