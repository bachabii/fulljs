import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

class App extends React.Component {

    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };

    componentDidMount() {
        //usually put ajax fetching here
        //fire timers, listeners here

        // ajax request to fetch data using axios
        // axios.get('/api/contests')
        //     .then(resp => {
        //         this.setState({
        //             contests: resp.data.contests
        //         });
        //     })
        //     .catch(console.error);
    }

    componentWillUnmount() {
        // clean timers and listeners
    }

    render () {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <ContestList contests={this.state.contests} />
            </div>
        );
    }
}

export default App;
