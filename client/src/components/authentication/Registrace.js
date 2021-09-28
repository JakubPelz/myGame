import React from 'react';
import Header from '../Header';
import RegForm from './registrace/RegForm';
import ListUsers from './registrace/ListUsers';

const Registrace = () => {
    return (
        <div>
            <Header />
            <div className="ui vertical footer segment">
                <div className="ui center aligned container">
                    <div className="ui stackable inverted divided grid">
                        <div className="eight wide column">
                          <div className="ui left aligned container">
                          <RegForm />
                          </div>
                        </div>
                        <div className="eight wide column">
                            tady bude pokec k tomu co bude uživatel vylňovat / vybírat
                            <ListUsers />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registrace
