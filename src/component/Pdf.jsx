import React, { useState } from 'react';
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import pdfStyle from './pdfStyle.css'

  
//PDFjs worker from an external cdn
const url = 
"https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"
  
export function Pdf() {

    
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

    //for onchange event
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfFileError, setPdfFileError] = useState('');

    //for submit event
    const [viewPdf, setViewPdf] = useState(null);

    //onchange event
    const fileType = ['application/pdf']
    const handlePdfFileChange = (e) =>{
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile && fileType.includes(selectedFile.type)){
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    //src code of pdf and set error to false
                    setPdfFile(e.target.result);
                    setPdfFileError('');
                }
            }else{
                setPdfFile(null);
                setPdfFileError('Please input valild file ')
            }
        }else{
            console.log('Select your file')
        }
    }

    //onSubmit event 
    const handlePdfFileSubmit = (e) =>{
        e.preventDefault();
        //show pdf if it is not null
        if(pdfFile !==null){
            setViewPdf(pdfFile);
        }else{
            setViewPdf(null);
        }
    }
    return (
        <div className='container'>
            <form className='form-group' onSubmit={handlePdfFileSubmit}>
                <input type="file" className='form-control'required onChange={handlePdfFileChange}/>
                {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
                <br />
                <button type='submit' className='btn btn-submit btn-lg'>
                        UPLOAD
                </button>
            </form>
            <br />
            <p>View PDF</p>
            <div className='pdf-container'>
                {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer fileUrl={viewPdf}
                plugins={[defaultLayoutPluginInstance]} />
                </Worker></>}

                {!viewPdf&&<>No pdf file selected</>}
            </div>
        </div>
    );
}

export default Pdf;