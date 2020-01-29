import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux/cakes/cakeActions'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of Cakes: {props.numOfCakes}</h1>
            <button onClick={props.onClick}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => ({
    numOfCakes: state.numOfCakes
})

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(buyCake())
})

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
