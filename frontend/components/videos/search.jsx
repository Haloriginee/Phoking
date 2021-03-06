import React from 'react';
import { Redirect } from 'react-router-dom';
import SearchResults from './search_results';

class Search extends React.Component {
    constructor(props){
        super(props);

        this.update = this.update.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputValue: "", videos: ""
        }
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }


    handleChange(e) {
        e.preventDefault();
        this.setState({ videos: this.props.searchVideos(this.state.inputValue) });

        this.props.searchVideos(this.state.inputValue);

        this.props.history.push('/search_results')



    }

    render() {

        return(
            <form onSubmit={this.handleChange} id="content">
             <input
                type='text'
                htmlFor='search'
                value={this.state.inputValue}
                onChange={this.update('inputValue')}
                className='search-input'>

            </input>
            </form>
            )
        }

};

export default Search;
