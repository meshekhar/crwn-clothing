import React from 'react';
import Directory from "../../components/directory/directory.component";

import './homepage.styles.scss';

const HomePgae = ({history}) => (
    <div className='homepage'>
        <Directory history={history} />
    </div>
);
export default HomePgae;