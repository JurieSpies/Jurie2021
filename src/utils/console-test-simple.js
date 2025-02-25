// Copy and paste this entire script into your browser console to test jsPDF

(function() {
  console.clear();
  console.log('=== Simple jsPDF Test ===');
  
  // First, check if jsPDF is available
  if (typeof window.jsPDF === 'function') {
    console.log('✅ jsPDF is available as window.jsPDF');
  } else if (window.jspdf && typeof window.jspdf.jsPDF === 'function') {
    console.log('✅ jsPDF is available as window.jspdf.jsPDF');
    window.jsPDF = window.jspdf.jsPDF;
    console.log('   Set window.jsPDF = window.jspdf.jsPDF');
  } else {
    console.log('❌ jsPDF is not available. Loading it now...');
    
    // Create and append script element
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.async = true;
    
    script.onload = function() {
      console.log('✅ jsPDF script loaded successfully');
      
      if (window.jspdf && typeof window.jspdf.jsPDF === 'function') {
        window.jsPDF = window.jspdf.jsPDF;
        console.log('✅ Set window.jsPDF = window.jspdf.jsPDF');
        createSimplePDF();
      } else {
        console.error('❌ jsPDF still not available after loading script');
      }
    };
    
    script.onerror = function() {
      console.error('❌ Failed to load jsPDF script');
    };
    
    document.head.appendChild(script);
    return; // Exit early, the onload callback will continue execution
  }
  
  // If we got here, jsPDF is available, so test it
  createSimplePDF();
  
  function createSimplePDF() {
    try {
      console.log('Creating a simple PDF...');
      var doc = new window.jsPDF();
      doc.text('Hello World!', 10, 10);
      console.log('✅ PDF created successfully');
      
      // Create download link
      var blob = doc.output('blob');
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = 'test.pdf';
      
      console.log('✅ PDF blob created. Download?');
      if (confirm('Test PDF created successfully! Download it?')) {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(function() { URL.revokeObjectURL(url); }, 100);
        console.log('✅ PDF downloaded');
      } else {
        console.log('Download canceled');
      }
    } catch (error) {
      console.error('❌ Error creating PDF:', error);
    }
  }
})(); 
