import React, { Component } from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { BtnGroup } from './ButtonGroup';
import { CardList } from './Cards';
import { editCard } from './EditCard';
import { Entry } from './Entry';
import { Home } from './Home';
import { Pay } from './Pay';
import { Register } from './Register';

class App extends Component {
    render() {
        return (
            <NativeRouter>
                <View>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Register' component={Register} />
                    <Route exact path='/Entry' component={Entry} />
                    <Route exact path='/Cards' component={CardList} />
                    <Route exact path='/ButtonGroup' component={BtnGroup} />
                    <Route exact path='/EditCard' component={editCard} />
                    <Route exact path='/Pay' component={Pay} />
                </View>
            </NativeRouter>
        );
    }
}

export default App;
