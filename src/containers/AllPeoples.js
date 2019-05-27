import React from 'react';
import { connect } from 'react-redux';
import { updatePeopleCount } from '../actions/allPeople.action';

function AllPeoples(props) {
    function increaseCount(){
        props.updatePeopleCount();
    }
    return (
        <div>
            <button onClick={increaseCount}>Increment Counter from redux</button>
            <p>People Count: {props.count}</p>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        count: state.peopleReducer.count,
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        updatePeopleCount: () => { dispatch(updatePeopleCount()) },
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(AllPeoples);