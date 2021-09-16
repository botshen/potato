import * as  React from 'react';
import {Link} from 'react-router-dom';

class Components extends React.Component {
    public render() {
        return (
            <div className="Component">
                登录
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default Components;
