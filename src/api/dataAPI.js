import * as fType from '../constant/filterType'

const dataAPI = {
    todos : [],
    filter : fType.ALL,

    getList(){
        if(this.filter===fType.ALL){
            return this.todos;
        }
        return this.todos.filter(todo=>todo.status===this.filter);

    },

    addItem(text){
        let item = {
            id: generateUUID(),
            text,
            complete: false,
            status: fType.ACTIVE
        }
        this.todos.push(item);
        return this.getList();
    },

    checkItem(id){
        this.todos.forEach(todo=>{
            if(todo.id===id){
                todo.complete = !todo.complete;
                todo.status = todo.status===fType.COMPLETE?fType.ACTIVE:fType.COMPLETE;
            }
        })
        return this.getList();
    },

    modifyItem(id, text){
        this.todos.forEach(todo=>{
            if(todo.id === id){
                todo.text = text
            }
        })
        return this.getList();
    },

    setFilter(filter){
        this.filter = filter;
        return this.getList();
    },
}

const generateUUID=()=> {
    /*jshint bitwise:false */
    var i,
        random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12
            ? 4
            : (i === 16
                ? (random & 3 | 8)
                : random)).toString(16);
    }
    return uuid;
}

export default dataAPI;