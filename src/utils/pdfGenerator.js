import RESUME_DATA from './RESUME_DATA.json';
import { getYearsOfExperience } from './helpers';

export const generatePDF = () => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof window.jsPDF === 'undefined') {
        throw new Error('jsPDF not loaded');
      }

      const doc = new window.jsPDF('p', 'mm', 'a4');
      
      // Header
      doc.setFontSize(24);
      doc.text('Jurie Spies', 20, 20);
      
      doc.setFontSize(16);
      doc.text('Software Engineer', 20, 30);
      
      // Contact Info
      doc.setFontSize(12);
      doc.text(`Email: ${RESUME_DATA.email}`, 20, 40);
      doc.text(`Phone: ${RESUME_DATA.phoneNumber}`, 20, 47);
      doc.text(`GitHub: ${RESUME_DATA.github}`, 20, 54);
      doc.text(`LinkedIn: ${RESUME_DATA.linkedIn}`, 20, 61);
      doc.text(`Years of Experience: ${getYearsOfExperience()}`, 20, 68);
      
      // About Me
      doc.setFontSize(16);
      doc.text('About Me', 20, 80);
      doc.setFontSize(12);
      const aboutMeLines = doc.splitTextToSize(RESUME_DATA.aboutMe, 170);
      doc.text(aboutMeLines, 20, 90);
      
      // Work Experience
      let yPos = 120;
      doc.setFontSize(16);
      doc.text('Work Experience', 20, yPos);
      yPos += 10;
      
      RESUME_DATA.work.forEach(job => {
        doc.setFontSize(14);
        doc.text(job.title, 20, yPos);
        yPos += 7;
        
        doc.setFontSize(12);
        doc.text(job.timeline, 20, yPos);
        yPos += 7;
        
        doc.text(job.occupation, 20, yPos);
        yPos += 7;
        
        const descLines = doc.splitTextToSize(job.description, 170);
        doc.text(descLines, 20, yPos);
        yPos += (descLines.length * 7) + 10;
        
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
      });
      
      // Skills
      if (yPos > 230) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(16);
      doc.text('Skills', 20, yPos);
      yPos += 10;
      
      doc.setFontSize(14);
      doc.text('Programming Languages:', 20, yPos);
      yPos += 7;
      
      RESUME_DATA.skills.forEach(skill => {
        doc.setFontSize(12);
        doc.text(`${skill.language} (${skill.rating}%)`, 25, yPos);
        yPos += 7;
      });
      
      yPos += 5;
      doc.setFontSize(14);
      doc.text('Frameworks & Technologies:', 20, yPos);
      yPos += 7;
      
      RESUME_DATA.frameworkSkills.forEach(skill => {
        doc.setFontSize(12);
        doc.text(`${skill.frameworkTitle} (${skill.rating}%)`, 25, yPos);
        yPos += 7;
      });
      
      // Footer
      const today = new Date();
      const dateStr = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      const pageCount = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 238); // Blue color for link
        doc.text(`Generated on ${dateStr} from `, 20, 287);
        doc.textWithLink('juriespies.com', 20 + doc.getTextWidth(`Generated on ${dateStr} from `), 287, { url: 'https://juriespies.com' });
        doc.setTextColor(0); // Reset text color to black
        doc.text(`Page ${i} of ${pageCount}`, 180, 287);
      }
      
      resolve(doc.output('blob'));
    } catch (error) {
      reject(error);
    }
  });
}; 