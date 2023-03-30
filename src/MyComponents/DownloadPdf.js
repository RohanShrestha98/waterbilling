import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

function DownloadPdf() {
  const divRef = useRef(null);

  function downloadDivContent() {
    const contentDiv = divRef.current;
    html2canvas(contentDiv).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'content.png';
      link.href = imgData;
      link.click();
    });
  }
  
  return (
    <div>
      <div ref={divRef}>
        <h1>Hello, world!</h1>
        <p>This is some content in the div.</p>
      </div>
      <button onClick={downloadDivContent}>Download Image</button>
    </div>
  );
}

export default DownloadPdf;




// import React, { useRef } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// function DownloadPdf() {
//     function downloadPDF() {
//       const doc = new jsPDF();
//       const tableData = [
//         ['Name', 'Email'],
//         ['John Doe', 'john.doe@example.com'],
//         ['Jane Doe', 'jane.doe@example.com'],
//       ];
//       doc.autoTable({
//         head: [tableData[0]],
//         body: tableData.slice(1),
//       });
//       doc.save('test.pdf');
//     }
  
//     return (
//       <div>
//         <button onClick={downloadPDF}>Download PDF</button>
//       </div>
//     );
//   }
  
// export default DownloadPdf;

