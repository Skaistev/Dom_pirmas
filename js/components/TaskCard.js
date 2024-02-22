class TaskCard {
    constructor(data){
   this.title = data.title;
   this.description = data.description;
   this.status = data.status;


    }

render () {
    return `<li>${this.title}</li>`
}
}

export { TaskCard };