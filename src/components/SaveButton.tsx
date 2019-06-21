import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const SaveButton = () => {
  const _exportPdf = () => {
  const element = document.querySelector("#capture")!;
    html2canvas(element as HTMLElement).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf"); 
    });
  }

  return (
    <button onClick={_exportPdf}>Save PDF</button>
  );
};

export default SaveButton;