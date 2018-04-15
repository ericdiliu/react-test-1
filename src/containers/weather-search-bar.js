import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        // this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({term: event.target.value});

    }

    render () {
        return (
            <form className='input-group'>
                <input
                    placeholder="Search for a city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn"><button type="submit" className="btn btn-secondary">Submit</button></span>
            </form>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {
//         books: state.books
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({selectBook: selectBook}, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
export default SearchBar;