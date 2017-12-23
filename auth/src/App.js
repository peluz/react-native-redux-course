import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDGT106AlZemidwqxhDmMESVyTm-gxf4h0",
            authDomain: "auth-d2a8d.firebaseapp.com",
            databaseURL: "https://auth-d2a8d.firebaseio.com",
            projectId: "auth-d2a8d",
            storageBucket: "auth-d2a8d.appspot.com",
            messagingSenderId: "1059549204536"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            }
            else {
                this.setState({ loggedIn: false })
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                           <Button onPress={() => {firebase.auth().signOut()}}>Log Out</Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <Card>
                        <CardSection>
                           <Spinner />
                        </CardSection>
                    </Card>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;