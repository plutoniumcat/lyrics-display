import React, { Component } from 'react';
import OpenSheetMusicDisplay from './OpenSheetMusicDisplay';

export default class SheetMusicContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fileName: this.props.fileName,
          xmlDocument: null,
          error: null
        };
        this.abortController = new AbortController();
      }
    
      componentDidMount() {
        this.fetchXMLData();
      }

    componentDidUpdate(prevProps) {
        // Check if the props have changed
        if (this.props.fileName !== prevProps.fileName) {
          this.abortController.abort(); // Abort the previous request
          this.abortController = new AbortController(); // Create a new AbortController
            this.setState({ fileName: this.props.fileName }, () => {
              this.fetchXMLData();
            });
          }
      }
    
      fetchXMLData = () => {
        const { signal } = this.abortController;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.state.fileName, true);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (!signal.aborted) {
              if (xhr.status === 200) {
                const xmlDoc = xhr.responseXML;
                this.setState({ xmlDocument: xmlDoc });
              } else {
                this.setState({ error: 'Failed to fetch the file' });
              }
            }
          }
        };
        xhr.send();
      };

      componentWillUnmount() {
        this.abortController.abort(); // Abort any ongoing request when the component is unmounted
      }
    
      render() {
        const { xmlDocument, error } = this.state;
    
        if (error) {
          return <div>Error: {error}</div>;
        }
    
        if (xmlDocument === null) {
          return <div>Loading...</div>;
        }
    
        return (
          <div>
            <OpenSheetMusicDisplay file={this.state.xmlDocument} />
          </div>
        );
      }
    }


// import React, { Component } from 'react';
// import OpenSheetMusicDisplay from './OpenSheetMusicDisplay';

// export default class SheetMusicContainer extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { data: props.data };
//       }

//       componentDidUpdate(prevProps) {
//         // Check if the props have changed
//         if (this.props.data !== prevProps.data) {
//           this.setState({
//             data: this.props.data
//           });
//         }
//       }

//   render() {
//     return (
//       <div>
//         <OpenSheetMusicDisplay file={this.state.data} />
//       </div>
//     )
//   }
// }

// import React, { useState, useEffect } from 'react';
// import OpenSheetMusicDisplay from './OpenSheetMusicDisplay';

// export default function SheetMusicContainer(data) {
//     const [xmlData, setXmlData] = useState(data);

//     useEffect(() => {
//         setXmlData(data);
//     },[data])

//   return (
//     <div>
//       <OpenSheetMusicDisplay file={xmlData} />
//     </div>
//   )
// }
