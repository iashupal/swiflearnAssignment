import React, { Fragment, Component } from 'react';
import Header from './components/header/Header';
import Heading from './components/heading/Heading';
import StudySlider from './components/studySlider/StudySlider';
import Tab from './components/Tab/Tab';
import './App.css';

class  App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 0
    }
  }
  // const [tab, setTab] = useState(0);
   changeTab(tab){
    this.setState({tab: tab})
    console.log(tab)
  }
  render(){
    const {tab} = this.state;
  return (
    <div className="App">
      <Fragment>
        <Header />
        <Heading heading="Concept Videos" number="Select a number"/>
        <StudySlider />
        <Heading heading="Live Classes" number="Select a number"/>
        <div className="tabs">
          <Tab selected = {tab === 0} text="5" onClick={() => this.changeTab(0)}/>
          <Tab selected = {tab === 1} text="6" onClick={() => this.changeTab(1)}/>
          <Tab selected = {tab === 2} text="7" onClick={() => this.changeTab(2)}/>
          <Tab selected = {tab === 3} text="8" onClick={() => this.changeTab(3)}/>
          <Tab selected = {tab === 4} text="9" onClick={() => this.changeTab(4)}/>
        </div>
        <div className="tabs__content">
          {tab === 0 && <Heading width='100%' number="Study material of 5th standard"/>}
          {tab === 1 && <Heading width='100%' number="Study material of 6th standard"/>}
          {tab === 2 && <Heading width='100%' number="Study material of 7th standard"/>}
          {tab === 3 && <Heading width='100%' number="Study material of 8th standard"/>}
          {tab === 4 && <Heading width='100%' number="Study material of 9th standard"/>}
        </div>
        
      </Fragment>
    </div>
  );
  }
}

export default App;
