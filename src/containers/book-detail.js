import React, { Component } from 'react';
import {connect} from 'react-redux';
// import selectBook from '../actions/index';
// import {bindActionCreators} from 'redux';

class BookDetail extends Component {
    render () {
        if (!this.props.activeBook) {
            return <div>Please select a book.</div>
        }
        return (
            <div>
                <h3>Details for {this.props.activeBook.title}</h3>
                <div>It has {this.props.activeBook.pages} pages</div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        activeBook: state.activeBook
    };
};

// const mapDispatchToProps = (dispatch) = > {
//     return bindActionCreators({selectBook: selectBook}, dispatch);
// };


export default connect(mapStateToProps)(BookDetail);