import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
// import { StyleRoot } from 'radium';
import './StudySlider.css';

class StudySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <div className="coverflow__slider">
          <Coverflow
            width={960}
            height={500}
            displayQuantityOfSide={3}
            navigation={true}
            infiniteScroll
            enableHeading={true}
            active={this.state.active}
            media={{
                    '@media (min-width: 900px)': {
                    height: '600px'
                    },
                    '@media screen (max-width:899px)':{
                      height: '800px'
                    }
                }}
          >
            <div className="coverflow__content"
              role="menuitem"
              tabIndex="0"
            >
              <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  // allowFullScreen
                  title='video ' style={{width: '100%', height:'100%'}}/>
              <p className="slider__heading">See what <span className="slider__text">Leena Barua</span> thanks about our plans</p>
            </div>
            <div className="coverflow__content"
              role="menuitem"
              tabIndex="0"
            >
              <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  // allowFullScreen
                  title='video ' style={{width: '100%',height:'100%'}}/>
                   <p className="slider__heading">See what <span className="slider__text">Leena Barua</span> thanks about our plans</p>
            </div>
            <div className="coverflow__content"
              role="menuitem"
              tabIndex="0"
            >
              <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  // allowFullScreen
                  title='video ' style={{width: '100%',height:'100%'}}/>
                   <p className="slider__heading">See what <span className="slider__text">Leena Barua</span> thanks about our plans</p>
            </div>
            <div className="coverflow__content"
              role="menuitem"
              tabIndex="0"
            >
              <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  // allowFullScreen
                  title='video ' style={{width: '100%',height:'100%'}}/>
                   <p className="slider__heading">See what <span className="slider__text">Leena Barua</span> thanks about our plans</p>
            </div>
            <div className="coverflow__content"
              role="menuitem"
              tabIndex="0"
            >
              <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  // allowFullScreen
                  title='video ' style={{width: '100%',height:'100%'}}/>
                   <p className="slider__heading">See what <span className="slider__text">Leena Barua</span> thanks about our plans</p>
            </div>
            <div className="coverflow__content"
              role="menuitem"
              tabIndex="0"
            >
              <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  // allowFullScreen
                  title='video ' style={{width: '100%', height:'100%'}}/>
                   <p className="slider__heading">See what <span className="slider__text">Leena Barua</span> thanks about our plans</p>
            </div>
            
          </Coverflow>
      </div>
    );
  }
};
export default StudySlider;

