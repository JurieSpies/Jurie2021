// This script dynamically loads jsPDF and makes it available globally
// Copy and paste this entire script into your browser console

(function() {
  console.log('=== jsPDF Loader ===');
  
  // Check if jsPDF is already available
  if (typeof window.jsPDF === 'function') {
    console.log('✅ jsPDF is already available as window.jsPDF');
    return;
  }
  
  if (window.jspdf && typeof window.jspdf.jsPDF === 'function') {
    console.log('✅ jsPDF is available as window.jspdf.jsPDF');
    window.jsPDF = window.jspdf.jsPDF;
    return;
  }
  
  console.log('❌ jsPDF not found. Attempting to load it...');
  
  // Function to load script dynamically
  function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    script.onerror = function() {
      console.error(`❌ Failed to load script: ${url}`);
    };
    document.head.appendChild(script);
  }
  
  // Load jsPDF from CDN
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', function() {
    console.log('✅ jsPDF script loaded successfully');
    
    // Check if jspdf is now available
    if (window.jspdf && typeof window.jspdf.jsPDF === 'function') {
      window.jsPDF = window.jspdf.jsPDF;
      console.log('✅ Set window.jsPDF = window.jspdf.jsPDF');
    } else {
      console.error('❌ jsPDF still not available after loading script');
    }
  });
})();
