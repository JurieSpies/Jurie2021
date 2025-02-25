// Copy and paste this entire script into your browser console to test jsPDF

(function() {
  console.log('=== jsPDF Test Script ===');
  
  // Test jsPDF availability
  console.log('Testing jsPDF availability...');
  
  if (typeof window.jsPDF !== 'undefined') {
    console.log('✅ jsPDF is directly available as window.jsPDF');
  } else {
    console.log('❌ window.jsPDF is not available');
  }
  
  if (window.jspdf && typeof window.jspdf.jsPDF !== 'undefined') {
    console.log('✅ jsPDF is available as window.jspdf.jsPDF');
    
    // Make it available globally if it's not already
    if (typeof window.jsPDF === 'undefined') {
      window.jsPDF = window.jspdf.jsPDF;
      console.log('✅ Set window.jsPDF = window.jspdf.jsPDF');
    }
  } else {
    console.log('❌ window.jspdf.jsPDF is not available');
  }
  
  // Try to create a simple PDF
  try {
    console.log('Attempting to create a simple PDF...');
    const doc = new window.jsPDF();
    doc.text('Test PDF', 10, 10);
    console.log('✅ Successfully created a test PDF');
    
    // Try to generate a blob
    const blob = doc.output('blob');
    console.log('✅ Successfully generated PDF blob:', blob);
    
    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'test.pdf';
    
    // Ask user if they want to download
    if (confirm('Test PDF created successfully! Do you want to download it?')) {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 100);
      console.log('✅ Test PDF downloaded');
    } else {
      console.log('Download canceled by user');
    }
    
    return {
      success: true,
      message: 'jsPDF is working correctly',
      blob
    };
  } catch (error) {
    console.error('❌ Error testing jsPDF:', error);
    return {
      success: false,
      message: 'jsPDF test failed',
      error
    };
  }
})(); 
