// import React, { useState, useRef, useEffect } from 'react';

import React, { Component } from 'react';
import OpenSheetMusicDisplay from './OpenSheetMusicDisplay';

export default class SheetMusicContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { file: props.filename };
      }


  render() {
    return (
      <div>
        <OpenSheetMusicDisplay file={this.state.file} />
      </div>
    )
  }
}


// const SheetMusicContainer = ({ filename }) => {
//   const osmdRef = useRef(null);
//   const [file, setFile] = useState(filename);

//   useEffect(() => {
//     if (osmdRef.current) {
//       const osmd = new OpenSheetMusicDisplay(osmdRef.current);
//       osmd.load(file).then(() => {
//         // Do any additional setup after loading the music file
//       }).catch((error) => {
//         console.error('Error loading file', error);
//       });
//     }
//   }, [file]);

//   return (
//     <div ref={osmdRef} />
//   );
// };

// export default SheetMusicContainer;
