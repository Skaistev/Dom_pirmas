import { Table } from "../components/Table.js";
import { data } from "../data/data.js";


new Table(
    'main',
    'Home design 2',
    'Panašu, jog dar neturi jokių užduočių',
    data,
);

//  jei klases viduj kontruojami stulpeliai
// addColumn(columnName) {

    //     if (typeof columnName !== 'string') {
    //         return 'ERROR: stulpelio pavadinimas turi buti "string" tipo';
    //     }

    //     columnName = columnName.trim().replace(/  +/g, ' ');

    //     if (columnName === '') {
    //         return 'ERROR: stulpelio pavadinimas turi buti ne tuscias tekstas';
    //     }

    //     this.columnNames.push(columnName);
    // }
    