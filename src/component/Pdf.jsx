import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfStyle from './pdfStyle.css'
  
//PDFjs worker from an external cdn
const url = 
"https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"
  
export function Pdf() {
    
    return (
        <div className='container'>
            <form className='form-group'>
                <input type="file" className='form-group'required/>
                <br />
                <button type='submit' className='btn btn-submit btn-lg'>
                        UPLOAD
                </button>
            </form>
            <br />
            <p>View PDF</p>
            <div className='pdf-container'></div>
        </div>
    );
}

export default Pdf;