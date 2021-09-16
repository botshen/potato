import React, {FC} from 'react';
import {Button} from 'antd';
import {Rate} from 'antd';


import './App.css';

const App: FC = () => (
    <div className="App">
        <Button type="ghost">Button</Button>
        <Rate/>
    </div>
);

export default App;
