// App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserAccountButton from './components/account/UserAccountButton';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <UserAccountButton />
            <Footer />
        </div>
    );
};

export default App;