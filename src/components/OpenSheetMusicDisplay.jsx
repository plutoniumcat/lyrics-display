import React, { Component } from 'react';
import { OpenSheetMusicDisplay as OSMD } from 'opensheetmusicdisplay';
import {isMobile} from 'react-device-detect';

class OpenSheetMusicDisplay extends Component {
    constructor(props) {
      super(props);
      this.state = { dataReady: false };
      this.osmd = undefined;
      this.divRef = React.createRef();
    }
  
    setupOsmd() {
      const options = {
        autoResize: this.props.autoResize !== undefined ? this.props.autoResize : true,
        drawTitle: this.props.drawTitle !== undefined ? this.props.drawTitle : false,
        drawingParameters: this.props.drawingParameters !== undefined ? this.props.drawingParameters : "compacttight"
      }
      this.osmd = new OSMD(this.divRef.current, options);
      this.osmd.EngravingRules.LyricsXPaddingFactorForLongLyrics = 1.0;
      this.osmd.EngravingRules.LyricsXPaddingWidthThreshold = 2;
      this.osmd.EngravingRules.MaximumLyricsElongationFactor = 6;
      this.osmd.EngravingRules.HorizontalBetweenLyricsDistance = 1;
      this.osmd.Zoom = 0.3; // not having any effect
      this.osmd.load(this.props.file).then(() => this.osmd.render());
    }
  
    resize() {
      this.forceUpdate();
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.resize)
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.drawTitle !== prevProps.drawTitle) {
        this.setupOsmd();
      } else {
        this.osmd.load(this.props.file).then(() => this.osmd.render());
      }
      window.addEventListener('resize', this.resize)
    }
  
    // Called after render
    componentDidMount() {
      this.setupOsmd();
    }
  
    render() {
      return (<div className='sheet-music' ref={this.divRef} />);
    }
  }

  export default OpenSheetMusicDisplay;