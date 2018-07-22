import {connect} from 'react-redux'
import FilterGroup from '../component/FilterGroup'
import dataAPI from '../api/dataAPI';
import {filterChange} from '../action'

const mapStatusToProps = (state, props)=>{
    return {
        filter: state.filter,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSetFilter: (filter) => {
            dispatch(filterChange(filter, dataAPI.setFilter(filter)));
        }
    }
}

export default connect(mapStatusToProps, mapDispatchToProps)(FilterGroup)