import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Timeline, Typography } from 'antd';

const { Title } = Typography;

class App extends React.Component{
  /*return (
    <div className="App">
      <Timeline>
        <Timeline.Item>step1 2015-09-01</Timeline.Item>
        <Timeline.Item>step2 2015-09-01</Timeline.Item>
        <Timeline.Item>step3 2015-09-01</Timeline.Item>
        <Timeline.Item>step4 2015-09-01</Timeline.Item>
      </Timeline>

    </div>
  );*/
  render() {
    return(
      <Timeline>
      <Timeline.Item>
        <Title level={3}>h2. Ant Design</Title>
        <Title level={4}>h2. Ant Design</Title>

          <ul>
            <li>This is an example item</li>
          </ul>
        
        </Timeline.Item>
      <Timeline.Item>step2 2015-09-01</Timeline.Item>
      <Timeline.Item>step3 2015-09-01</Timeline.Item>
      <Timeline.Item>step4 2015-09-01</Timeline.Item>
    </Timeline>
    )
  }

}

export default App;
