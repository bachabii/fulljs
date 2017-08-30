import React from 'react';
import Header from './Header';


class App extends React.Component {

    state = {
        pageHeader: 'Naming Contests'
    };

    componentDidMount() {
        //usually put ajax fetching here
        //fire timers, listeners here
    }

    componentWillUnmount() {
        // clean timers and listeners
    }

    render () {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    ...
                </div>
            </div>
        );
    }
}

export default App;
