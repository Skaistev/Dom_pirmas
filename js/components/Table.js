/*
OOP - "objektinis" programavimas

Klase yra kaip "receptura".
O is jos sukurtas objektas, jau yra "valgomas".

Klase sudaro:
- savybes (properties)
- funkcionalumas (methods)
*/

import { TaskCard } from "./TaskCard.js";

class Table {
    constructor(selector, title, emptyTableText,data) {
        // this - lt. šis, šito, šio
        // this - kontekstinis kintamasis
        this.selector = selector;
        this.DOM = null;
        this.titleDOM = null;
        this.tableDOM = null;
      

        this.title = title;
        this.emptyTableText = emptyTableText;
        this.data = data;


        // this.columnNames = [];
        
        this.tasks = []; 
        // taskCard objektai 

        this.init();
       
    }

    init() {
        if (!this.isValidSelector()) {
            return 'ERROR: nevalidus selector\'ius';
        }

        if (!this.isValidMainElement()) {
            return 'ERROR: pagal pateikta selector\'iu, nepavyko rasti norimo elemento';
        }

        if (!this.isValidTitleElement()) {
            return 'ERROR: nepavyko rasti "title" elemento';
        }

        if (!this.isValidTableElement()) {
            return 'ERROR: nepavyko rasti "table" elemento';
        }

        this.renderColumns();
        this.createTaskObjects();

        // vykdom turinio generavima...
    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            return false;
        }

        if (this.selector === '') {
            return false;
        }

        return true;
    }

    isValidMainElement() {
        this.DOM = document.querySelector(this.selector);

        if (this.DOM === null) {
            return false;
        }

        return true;
    }

    isValidTitleElement() {
        this.titleDOM = this.DOM.querySelector('.main-title');

        if (this.titleDOM === null) {
            return false;
        }

        this.titleDOM.innerText = this.title;

        return true;
    }

    isValidTableElement() {
        this.tableDOM = this.DOM.querySelector('.table-content');

        if (this.tableDOM === null) {
            return false;
        }

        return true;
    }

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
    
    createTaksObjects(){
        for(const task of this.data.tasks){
            this.tasks.push(new TaskCard(task))
        }
        console.log(this.tasks)
    }
    renderColumns(){

        let HTML = "";

        console.log(this.data.columns);

        for (const column of this.data.columns){

            let taskListHTML = '';

            for(const taskObj of this.tasks){
                if(column.status!== taskObj.status){
                    continue
                }

                taskListHTML += `<li>${task.title}</li>`
            }

            HTML += `<div class="table-column">
            <h2>${column.title}</h2>
            <ul>
            <li>${taskListHTML}</li>
            </ul>
            </div>`
        }
        this.tableDOM.innerHTML = HTML;
    }
}

export { Table };