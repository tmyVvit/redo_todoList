import {connect} from 'react-redux'
import dataAPI from '../api/dataAPI'
import List from '../component/List'
import {check, modify} from '../action'

const mapStateToProps = (state, props) => {
    return {
        list: state.todoList,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
       onCheck: (id)=>{
           dispatch(check(dataAPI.checkItem(id)));
       },
       onModify: (id, text)=>{
           dispatch(modify(dataAPI.modifyItem(id, text)));
       },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)