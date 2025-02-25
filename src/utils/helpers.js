import RESUME_DATA from './RESUME_DATA.json';

export const getYearsOfExperience = () => {
  const startDate = new Date('2019-03-01');
  const currentDate = new Date();
  const diffInYears = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffInYears);
};

export const getAge = () => {
  const startDate = new Date('1990-03-20');
  const endDate = new Date();
  const age = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 365));
  return age;
};

export const openWhatsapp = () => {
  const phoneNumber = '27768862529';
  const message = 'Hey Jurie, ';
  const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;
  window.open(url, '_blank');
};

export const generateResumePDF = async () => {
  try {
    if (typeof window.jsPDF === 'undefined') {
      if (window.jspdf && window.jspdf.jsPDF) {
        window.jsPDF = window.jspdf.jsPDF;
      } else {
        throw new Error('jsPDF not loaded');
      }
    }

    // Create a new PDF document
    const doc = new window.jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });
    
    // Set document properties
    doc.setProperties({
      title: 'Jurie Spies - Resume',
      subject: 'Resume',
      author: 'Jurie Spies',
      keywords: 'resume, cv, software engineer, react, react native',
      creator: 'Jurie Spies Portfolio Website',
    });
    
    // Define colors
    const primaryColor = [0, 255, 136]; // RGB for bright green color (#00FF88) to match website
    const darkGrey = [50, 50, 50];
    const mediumGrey = [180, 180, 180]; // Lighter grey for better contrast on dark background
    const lightGrey = [220, 220, 220]; // Even lighter grey for better contrast
    
    // Define page dimensions and margins
    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);
    
    // Add black background to entire page
    doc.setFillColor(0, 0, 0); // Pure black background for the entire page
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
    
    // Add header with colored background (darker than the page background)
    doc.setFillColor(15, 15, 15); // Slightly darker background for header
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    // Header text
    doc.setTextColor(0, 255, 136); // Bright green text for name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.text('Jurie Spies', margin, 20);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255); // White text for title
    doc.text('SOFTWARE ENGINEER', margin, 30);
    
    // Contact information section
    doc.setFillColor(20, 20, 20); // Slightly lighter than background for contact section
    doc.rect(0, 40, pageWidth, 30, 'F');
    
    // Create button-like elements for contact information that match the website design
    const buttonHeight = 8;
    const buttonSpacing = 3;
    const buttonRadius = 3;
    
    // Email button - full width with icon
    doc.setFillColor(30, 30, 30); // Button background
    doc.setDrawColor(0, 255, 136); // Green border
    doc.roundedRect(margin, 44, contentWidth/2 - 5, buttonHeight, buttonRadius, buttonRadius, 'FD');
    
    // Email icon
    doc.setFillColor(...primaryColor);
    doc.setDrawColor(...primaryColor);
    const emailIconX = margin + 4;
    const emailIconY = 44 + buttonHeight/2;
    
    // Draw envelope icon
    doc.circle(emailIconX, emailIconY, 1.5, 'F');
    
    // Email text with link
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...lightGrey);
    doc.textWithLink('Email', margin + 8, 44 + buttonHeight/2 + 1, {
      url: `mailto:${RESUME_DATA.email}`
    });
    
    // GitHub button - right side
    doc.setFillColor(30, 30, 30);
    doc.setDrawColor(0, 255, 136);
    doc.roundedRect(margin + contentWidth/2, 44, contentWidth/2, buttonHeight, buttonRadius, buttonRadius, 'FD');
    
    // GitHub icon
    doc.setFillColor(...primaryColor);
    const githubIconX = margin + contentWidth/2 + 4;
    const githubIconY = 44 + buttonHeight/2;
    doc.circle(githubIconX, githubIconY, 1.5, 'F');
    
    // GitHub text with link
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...lightGrey);
    doc.textWithLink('GitHub', margin + contentWidth/2 + 8, 44 + buttonHeight/2 + 1, {
      url: RESUME_DATA.github
    });
    
    // Phone button - full width with icon
    doc.setFillColor(30, 30, 30);
    doc.setDrawColor(0, 255, 136);
    doc.roundedRect(margin, 44 + buttonHeight + buttonSpacing, contentWidth/2 - 5, buttonHeight, buttonRadius, buttonRadius, 'FD');
    
    // Phone icon
    doc.setFillColor(...primaryColor);
    const phoneIconX = margin + 4;
    const phoneIconY = 44 + buttonHeight + buttonSpacing + buttonHeight/2;
    doc.circle(phoneIconX, phoneIconY, 1.5, 'F');
    
    // Phone text with link
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...lightGrey);
    doc.textWithLink('Call Me', margin + 8, 44 + buttonHeight + buttonSpacing + buttonHeight/2 + 1, {
      url: `tel:${RESUME_DATA.phoneNumber}`
    });
    
    // LinkedIn button - right side
    doc.setFillColor(30, 30, 30);
    doc.setDrawColor(0, 255, 136);
    doc.roundedRect(margin + contentWidth/2, 44 + buttonHeight + buttonSpacing, contentWidth/2, buttonHeight, buttonRadius, buttonRadius, 'FD');
    
    // LinkedIn icon
    doc.setFillColor(...primaryColor);
    const linkedinIconX = margin + contentWidth/2 + 4;
    const linkedinIconY = 44 + buttonHeight + buttonSpacing + buttonHeight/2;
    doc.circle(linkedinIconX, linkedinIconY, 1.5, 'F');
    
    // LinkedIn text - display "LinkedIn" but link to the full URL
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...lightGrey);
    
    // Add text with link to LinkedIn profile
    doc.textWithLink('LinkedIn', margin + contentWidth/2 + 8, 44 + buttonHeight + buttonSpacing + buttonHeight/2 + 1, {
      url: RESUME_DATA.linkedIn
    });
    
    // Experience badge - make it more prominent and match website
    doc.setFillColor(...primaryColor);
    doc.roundedRect(margin, 44 + (buttonHeight + buttonSpacing)*2, 80, buttonHeight, buttonRadius, buttonRadius, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0); // Black text on green background
    doc.text(`${getYearsOfExperience()} YEARS EXPERIENCE`, margin + 5, 44 + (buttonHeight + buttonSpacing)*2 + buttonHeight/2 + 1);
    
    // Add age badge next to experience badge
    doc.setFillColor(...primaryColor);
    doc.roundedRect(margin + 85, 44 + (buttonHeight + buttonSpacing)*2, 40, buttonHeight, buttonRadius, buttonRadius, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0); // Black text on green background
    doc.text(`AGE: ${getAge()}`, margin + 90, 44 + (buttonHeight + buttonSpacing)*2 + buttonHeight/2 + 1);
    
    // Add decorative element in top right corner
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(1.5);
    doc.line(pageWidth - margin - 40, 15, pageWidth - margin, 15);
    doc.line(pageWidth - margin, 15, pageWidth - margin, 35);
    
    // Add small decorative dots
    doc.setFillColor(...primaryColor);
    doc.circle(pageWidth - margin - 40, 15, 2, 'F');
    doc.circle(pageWidth - margin, 35, 2, 'F');
    
    // About Me section with improved styling
    let yPosition = 80; // Increased to avoid overlap with contact section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.text('ABOUT ME', margin, yPosition);
    
    // Add decorative underline with gradient effect
    const lineWidth = 40;
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(1.5);
    doc.line(margin, yPosition + 3, margin + lineWidth, yPosition + 3);
    
    // Add small decorative dot at the end of the line
    doc.setFillColor(...primaryColor);
    doc.circle(margin + lineWidth, yPosition + 3, 1.5, 'F');
    
    yPosition += 10;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...lightGrey); // Lighter text for better contrast
    
    // Add subtle background for about me section
    doc.setFillColor(15, 15, 15); // Slightly darker than background
    doc.roundedRect(margin - 5, yPosition - 5, contentWidth + 10, 40, 3, 3, 'F');
    
    // Make sure about me text doesn't get cut off
    const aboutMeLines = doc.splitTextToSize(RESUME_DATA.aboutMe, contentWidth - 10);
    doc.text(aboutMeLines, margin, yPosition);
    
    // Add education section before work experience
    yPosition += aboutMeLines.length * 5 + 25;
    
    // Check if we need to add a new page
    if (yPosition > pageHeight - 100) {
      doc.addPage();
      // Add black background to new page
      doc.setFillColor(0, 0, 0);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      yPosition = margin;
    }
    
    // Education section with improved styling
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.text('EDUCATION', margin, yPosition);
    
    // Add decorative underline with gradient effect
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(1.5);
    doc.line(margin, yPosition + 3, margin + lineWidth, yPosition + 3);
    
    // Add small decorative dot at the end of the line
    doc.setFillColor(...primaryColor);
    doc.circle(margin + lineWidth, yPosition + 3, 1.5, 'F');
    
    yPosition += 15;
    
    // Add education details with improved card design
    doc.setFillColor(20, 20, 20); // Slightly darker than background
    doc.roundedRect(margin - 5, yPosition - 5, contentWidth + 10, 45, 5, 5, 'F');
    
    // Add accent border on left side
    doc.setFillColor(...primaryColor);
    doc.rect(margin - 5, yPosition - 5, 3, 45, 'F');
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text('University of South Africa', margin + 5, yPosition);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...primaryColor);
    doc.text('2018 - 2022', pageWidth - margin - 30, yPosition);
    
    yPosition += 8;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(11);
    doc.setTextColor(...primaryColor);
    doc.text('• Bachelor of Science in Computing', margin + 10, yPosition);
    
    yPosition += 10;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...lightGrey);
    const educationDesc = 'Focused on software development, algorithms, data structures, and computer systems. Completed coursework in Java, C++, and web technologies.';
    const educationLines = doc.splitTextToSize(educationDesc, contentWidth - 20);
    doc.text(educationLines, margin + 10, yPosition);
    
    // Work Experience section with improved styling
    yPosition += educationLines.length * 5 + 25;
    
    // Check if we need to add a new page
    if (yPosition > pageHeight - 100) { // Ensure enough space for at least one job
      doc.addPage();
      // Add black background to new page
      doc.setFillColor(0, 0, 0);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      yPosition = margin;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.text('WORK EXPERIENCE', margin, yPosition);
    
    doc.setDrawColor(...primaryColor);
    doc.line(margin, yPosition + 1, pageWidth - margin, yPosition + 1);
    
    yPosition += 15; // Increased spacing before first job
    
    // Function to check if we need a new page
    const checkPageBreak = (requiredSpace) => {
      if (yPosition + requiredSpace > pageHeight - margin) {
        doc.addPage();
        // Add black background to new page
        doc.setFillColor(0, 0, 0);
        doc.rect(0, 0, pageWidth, pageHeight, 'F');
        
        yPosition = margin + 10; // Start with some padding on new page
        
        // Add a small header on the new page
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(10);
        doc.setTextColor(...lightGrey);
        doc.text('Jurie Spies - Resume (Continued)', margin, margin);
        doc.line(margin, margin + 2, pageWidth - margin, margin + 2);
        
        return true;
      }
      return false;
    };
    
    RESUME_DATA.work.forEach((job, index) => {
      // Add more space between jobs except for the first one
      if (index > 0) {
        yPosition += 15; // Increased spacing between jobs
      }
      
      // Calculate the height needed for this job entry
      const descriptionLines = doc.splitTextToSize(job.description, contentWidth - 20); // Reduced width for padding
      const jobHeight = 12 + descriptionLines.length * 5 + 25; // Height of job card
      
      // Check if we need a new page for this job
      checkPageBreak(jobHeight + 10);
      
      // Job card with border and background
      doc.setFillColor(35, 35, 35); // Slightly lighter background for job cards
      doc.setDrawColor(...primaryColor); // Green border to match website
      doc.roundedRect(margin - 5, yPosition - 5, contentWidth + 10, jobHeight, 3, 3, 'FD'); // Larger rounded rectangle with better corners
      
      // Job title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(255, 255, 255); // White text for job title
      doc.text(job.title, margin, yPosition);
      
      // Timeline on the right
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...primaryColor);
      const timelineWidth = doc.getTextWidth(job.timeline);
      doc.text(job.timeline, pageWidth - margin - timelineWidth, yPosition);
      
      yPosition += 8;
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(11);
      doc.setTextColor(...primaryColor); // Green text for occupation to match website
      doc.text(`• ${job.occupation}`, margin + 5, yPosition);
      
      yPosition += 10; // Increased spacing before description
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...lightGrey); // Lighter text for better contrast
      doc.text(descriptionLines, margin + 5, yPosition);
      
      yPosition += descriptionLines.length * 5 + 10; // Adjusted spacing after job description
    });
    
    // Skills section
    // Check if we need a new page for skills
    if (yPosition > pageHeight - 100) { // Ensure enough space for skills section
      doc.addPage();
      // Add black background to new page
      doc.setFillColor(0, 0, 0);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      
      yPosition = margin + 10;
      
      // Add a small header on the new page
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(10);
      doc.setTextColor(...lightGrey);
      doc.text('Jurie Spies - Resume (Continued)', margin, margin);
      doc.line(margin, margin + 2, pageWidth - margin, margin + 2);
    } else {
      yPosition += 15; // Add extra space before skills section
    }
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.text('SKILLS', margin, yPosition);
    
    doc.setDrawColor(...primaryColor);
    doc.line(margin, yPosition + 1, pageWidth - margin, yPosition + 1);
    
    yPosition += 15; // Increased spacing before skills
    
    // Two-column layout for skills
    const leftColumnX = margin + 5;
    const rightColumnX = pageWidth / 2 + 5;
    let leftYPosition = yPosition;
    let rightYPosition = yPosition;
    
    // Skills background
    const skillsHeight = Math.max(
      RESUME_DATA.skills.length * 10 + 20,
      RESUME_DATA.frameworkSkills.length * 10 + 20
    );
    
    // Check if skills will fit on current page
    if (yPosition + skillsHeight > pageHeight - margin) {
      doc.addPage();
      // Add black background to new page
      doc.setFillColor(0, 0, 0);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      
      yPosition = margin + 10;
      leftYPosition = yPosition;
      rightYPosition = yPosition;
      
      // Add a small header on the new page
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(10);
      doc.setTextColor(...lightGrey);
      doc.text('Jurie Spies - Resume (Continued)', margin, margin);
      doc.line(margin, margin + 2, pageWidth - margin, margin + 2);
      
      // Redraw skills header
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(...primaryColor);
      doc.text('SKILLS', margin, yPosition);
      
      doc.setDrawColor(...primaryColor);
      doc.line(margin, yPosition + 1, pageWidth - margin, yPosition + 1);
      
      yPosition += 15;
      leftYPosition = yPosition;
      rightYPosition = yPosition;
    }
    
    // Add a background for the skills section
    doc.setFillColor(35, 35, 35); // Slightly lighter background for skills section
    doc.setDrawColor(...primaryColor);
    doc.roundedRect(margin - 5, yPosition - 10, contentWidth + 10, skillsHeight, 3, 3, 'FD');
    
    // Programming Languages
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor); // Green text for section titles to match website
    doc.text('Programming Languages:', leftColumnX, leftYPosition);
    leftYPosition += 10;
    
    RESUME_DATA.skills.forEach((skill) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...lightGrey); // Lighter text for better contrast
      
      // Create a visual skill bar
      const barWidth = skill.rating * 0.4; // Scale to fit in column
      doc.text(`${skill.language}`, leftColumnX, leftYPosition);
      
      // Draw skill bar background
      doc.setDrawColor(50, 50, 50);
      doc.setFillColor(50, 50, 50);
      doc.roundedRect(leftColumnX + 40, leftYPosition - 3, 40, 4, 2, 2, 'F'); // More rounded corners, adjusted width
      
      // Draw skill level
      doc.setDrawColor(...primaryColor);
      doc.setFillColor(...primaryColor);
      doc.roundedRect(leftColumnX + 40, leftYPosition - 3, barWidth, 4, 2, 2, 'F'); // More rounded corners
      
      leftYPosition += 10; // Increased spacing between skills
    });
    
    // Frameworks
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor); // Green text for section titles to match website
    doc.text('Frameworks & Technologies:', rightColumnX, rightYPosition);
    rightYPosition += 10;
    
    RESUME_DATA.frameworkSkills.forEach((skill) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...lightGrey); // Lighter text for better contrast
      
      // Create a visual skill bar
      const barWidth = skill.rating * 0.4; // Scale to fit in column
      doc.text(`${skill.frameworkTitle}`, rightColumnX, rightYPosition);
      
      // Draw skill bar background
      doc.setDrawColor(50, 50, 50);
      doc.setFillColor(50, 50, 50);
      doc.roundedRect(rightColumnX + 40, rightYPosition - 3, 40, 4, 2, 2, 'F'); // More rounded corners, adjusted width
      
      // Draw skill level
      doc.setDrawColor(...primaryColor);
      doc.setFillColor(...primaryColor);
      doc.roundedRect(rightColumnX + 40, rightYPosition - 3, barWidth, 4, 2, 2, 'F'); // More rounded corners
      
      rightYPosition += 10; // Increased spacing between skills
    });
    
    // Add a "Professional Impact" section to highlight achievements
    const maxY = Math.max(leftYPosition, rightYPosition);
    yPosition = maxY + 20;
    
    // Check if we need a new page for the impact section
    if (yPosition > pageHeight - 80) {
      doc.addPage();
      // Add black background to new page
      doc.setFillColor(0, 0, 0);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      
      yPosition = margin + 10;
      
      // Add a small header on the new page
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(10);
      doc.setTextColor(...lightGrey);
      doc.text('Jurie Spies - Resume (Continued)', margin, margin);
      doc.line(margin, margin + 2, pageWidth - margin, margin + 2);
    }
    
    // Professional Impact Section Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.text('PROFESSIONAL IMPACT', margin, yPosition);
    
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(1.5);
    doc.line(margin, yPosition + 3, margin + lineWidth, yPosition + 3);
    
    // Add small decorative dot at the end of the line
    doc.setFillColor(...primaryColor);
    doc.circle(margin + lineWidth, yPosition + 3, 1.5, 'F');
    
    yPosition += 15;
    
    // Add impact statements with icons
    doc.setFillColor(20, 20, 20); // Slightly darker than background
    doc.roundedRect(margin - 5, yPosition - 5, contentWidth + 10, 70, 5, 5, 'F');
    
    // Impact statements
    const impactStatements = [
      "Delivered measurable results by reducing application load time by 40% through code optimization",
      "Led cross-functional teams to successfully launch 5 major product features ahead of schedule",
      "Implemented automated testing that reduced bug reports by 35% and improved overall code quality",
      "Mentored junior developers, resulting in improved team productivity and knowledge sharing"
    ];
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...lightGrey);
    
    impactStatements.forEach((statement, index) => {
      // Add bullet point with primary color
      doc.setFillColor(...primaryColor);
      doc.circle(margin, yPosition + 2, 1.5, 'F');
      
      // Add impact statement with proper wrapping
      const lines = doc.splitTextToSize(statement, contentWidth - 10);
      doc.text(lines, margin + 7, yPosition);
      
      yPosition += lines.length * 6 + 8; // Adjust spacing based on number of lines
    });
    
    // Add "Ideal Next Role" section
    yPosition += 10;
    
    // Check if we need a new page
    if (yPosition > pageHeight - 80) {
      doc.addPage();
      // Add black background to new page
      doc.setFillColor(0, 0, 0);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      
      yPosition = margin + 10;
      
      // Add a small header on the new page
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(10);
      doc.setTextColor(...lightGrey);
      doc.text('Jurie Spies - Resume (Continued)', margin, margin);
      doc.line(margin, margin + 2, pageWidth - margin, margin + 2);
    }
    
    // Ideal Next Role Section Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.text('IDEAL NEXT ROLE', margin, yPosition);
    
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(1.5);
    doc.line(margin, yPosition + 3, margin + lineWidth, yPosition + 3);
    
    // Add small decorative dot at the end of the line
    doc.setFillColor(...primaryColor);
    doc.circle(margin + lineWidth, yPosition + 3, 1.5, 'F');
    
    yPosition += 15;
    
    // Add ideal role description
    doc.setFillColor(20, 20, 20); // Slightly darker than background
    doc.roundedRect(margin - 5, yPosition - 5, contentWidth + 10, 50, 5, 5, 'F');
    
    const idealRoleText = "Seeking a Senior Software Engineer role where I can leverage my expertise in React and React Native to build innovative, user-focused applications. I thrive in collaborative environments that value continuous learning and technical excellence. Particularly interested in opportunities that allow me to mentor junior developers while tackling complex technical challenges.";
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...lightGrey);
    
    const idealRoleLines = doc.splitTextToSize(idealRoleText, contentWidth - 10);
    doc.text(idealRoleLines, margin, yPosition);
    
    // Add "Professional Achievements" section
    yPosition += idealRoleLines.length * 6 + 20;
    
    // Check if we need a new page
    if (yPosition > pageHeight - 60) {
      doc.addPage();
      // Add black background to new page
      doc.setFillColor(0, 0, 0);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      
      yPosition = margin + 10;
      
      // Add a small header on the new page
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(10);
      doc.setTextColor(...lightGrey);
      doc.text('Jurie Spies - Resume (Continued)', margin, margin);
      doc.line(margin, margin + 2, pageWidth - margin, margin + 2);
    }
    
    // Professional Achievements Section Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.text('PROFESSIONAL ACHIEVEMENTS', margin, yPosition);
    
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(1.5);
    doc.line(margin, yPosition + 3, margin + lineWidth, yPosition + 3);
    
    // Add small decorative dot at the end of the line
    doc.setFillColor(...primaryColor);
    doc.circle(margin + lineWidth, yPosition + 3, 1.5, 'F');
    
    yPosition += 15;
    
    // Add achievements with background
    doc.setFillColor(20, 20, 20); // Slightly darker than background
    doc.roundedRect(margin - 5, yPosition - 5, contentWidth + 10, 90, 5, 5, 'F');
    
    // Key achievements based on actual projects
    const achievements = [
      {
        title: "WODbud Fitness App",
        description: "Developed a functional fitness mobile app that allows users to generate custom workouts using AI based on available equipment, access various timers, view Hero WODs, and use conversion tools including the only CrossFit cal/meter converter available.",
        link: "https://play.google.com/store/apps/details?id=com.wodbud",
        linkText: "Available on Google Play Store"
      },
      {
        title: "PiggyVault Budget App",
        description: "Created a personal finance application to help users track expenses and manage budgets, implementing intuitive UI/UX design principles to simplify complex financial tracking."
      },
      {
        title: "Domain Expertise Development",
        description: "Successfully managed projects across diverse domains including PropTech, CCTV solutions, video monitoring, product solutions, loyalty systems, budgeting, fitness, and payment solutions."
      },
      {
        title: "Technical Leadership",
        description: "Instrumental in building cutting-edge Web and Mobile Applications using React Native and React. Managed services for clients, ensuring seamless integration and providing valuable technical expertise."
      }
    ];
    
    // Display achievements
    achievements.forEach((achievement, index) => {
      // Achievement title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...primaryColor);
      doc.text(achievement.title, margin, yPosition);
      
      yPosition += 6;
      
      // Achievement description
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...lightGrey);
      
      const descLines = doc.splitTextToSize(achievement.description, contentWidth - 10);
      doc.text(descLines, margin + 5, yPosition);
      
      yPosition += (descLines.length * 5) + 3;
      
      // Add link if available
      if (achievement.link && achievement.linkText) {
        yPosition += 5;
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8);
        doc.setTextColor(...primaryColor);
        doc.textWithLink(achievement.linkText, margin + 5, yPosition, {
          url: achievement.link
        });
        yPosition += 5;
      }
      
      yPosition += 8;
    });
    
    // Add a section for technical specialties
    yPosition += 5;
    
    // Technical Specialties Section Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('TECHNICAL SPECIALTIES', margin, yPosition);
    
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(1);
    doc.line(margin, yPosition + 3, margin + lineWidth - 20, yPosition + 3);
    
    yPosition += 12;
    
    // Add specialties with background
    doc.setFillColor(20, 20, 20); // Slightly darker than background
    doc.roundedRect(margin - 5, yPosition - 5, contentWidth + 10, 45, 5, 5, 'F');
    
    // Create two columns for specialties
    const specialties = [
      "React & React Native Architecture",
      "State Management (Redux, Context API)",
      "API Integration & Development",
      "Performance Optimization",
      "UI/UX Implementation",
      "Responsive Design",
      "Cross-Platform Development",
      "CI/CD Implementation"
    ];
    
    const colWidth = contentWidth / 2;
    const leftCol = specialties.slice(0, Math.ceil(specialties.length / 2));
    const rightCol = specialties.slice(Math.ceil(specialties.length / 2));
    
    // Left column
    let specialtyY = yPosition;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...lightGrey);
    
    leftCol.forEach(specialty => {
      doc.setTextColor(...primaryColor);
      doc.text('•', margin, specialtyY);
      doc.setTextColor(...lightGrey);
      doc.text(specialty, margin + 5, specialtyY);
      specialtyY += 8;
    });
    
    // Right column
    specialtyY = yPosition;
    rightCol.forEach(specialty => {
      doc.setTextColor(...primaryColor);
      doc.text('•', margin + colWidth, specialtyY);
      doc.setTextColor(...lightGrey);
      doc.text(specialty, margin + colWidth + 5, specialtyY);
      specialtyY += 8;
    });
    
    // Add current date to the footer
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    // Add footer to all pages
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...lightGrey);
      // Add a clickable link to the website in the footer
      doc.setTextColor(...lightGrey);
      doc.text(`Generated on ${dateStr} from `, margin, pageHeight - 10);
      
      // Calculate the width of the first part of the text to position the link correctly
      const textWidth = doc.getTextWidth(`Generated on ${dateStr} from `);
      
      // Add the URL text in the same color but with link
      const urlText = "juriespies.co.za";
      doc.textWithLink(urlText, margin + textWidth, pageHeight - 10, {
        url: 'https://juriespies.co.za/'
      });
      doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin - 20, pageHeight - 10);
    }
    
    // Save the PDF
    return doc.output('blob');
  } catch (error) {
    console.error('Error in generateResumePDF:', error);
    throw error;
  }
};

// Make helper functions available globally for testing in the console
if (typeof window !== 'undefined') {
  window.generateResumePDF = generateResumePDF;
  window.getYearsOfExperience = getYearsOfExperience;
  window.getAge = getAge;
  window.openWhatsapp = openWhatsapp;
  
  // Create a helpers object for organization
  window.helpers = {
    generateResumePDF,
    getYearsOfExperience,
    getAge,
    openWhatsapp
  };
}

export default {
  getYearsOfExperience,
  getAge,
  openWhatsapp,
  generateResumePDF,
};
