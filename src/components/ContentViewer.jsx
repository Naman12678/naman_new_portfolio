import React, { useState, useEffect } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons

const ContentViewer = ({ activeTab }) => {
  const [displayedLines, setDisplayedLines] = useState([]);

  const content = {
    '_hello': [
      '/**',
      ' * Hey I am Naman Sharma',
      ' * Welcome to my portfolio!',
      ' * ',
      ' \t\t\t\t\t My Introduction : \n',
      ' \t\t\t_________________________________\n ',
      ' *  I am a passionate developer, constantly learning and improving my skills.',
      '* With a strong background in web development and a focus on React and Tailwind CSS.',
      ' I build user-friendly applications that solve real-world problems.',
      "* Let's build something amazing together!",
      ' * Let\'s explore!',
      ' */',
      ' \t\t\t\t\t My Skills : \n',
      ' \t\t\t____________________________\n ',
      'Programming Languages :',
      '_______________________',
      '* C++\n','* Java\n','* Python\n','* JavaScript\n\n',
      'Web Technologies :',
      '___________________',
      'Proficient in HTML ,CSS , Javascript',
      '\t\tFrontend Devlopment : ',
      '\t\t____________________',
      '* React Js\n','* Tailwind CSS\n',
      '\t\tBackend Development : ',
      '\t\t_____________________',
      '* Express Js\n','* Node Js\n','* Mongo DB\n\n\n\n',
      'View My Resume : https://drive.google.com/file/d/15tEdyas7tTvnV0Cj4FwCGI7nJskFLUaq/view?usp=drive_link'
    ],
    '_education': [
      '/**',
      ' 1 .',
      ' * B-Tech (Computer Science and Engineering)',
      ' * JIS College of Engineering',
      ' * 2023-2027',
      ' */',
      ' 2 .',
      ' * Higher Secondary Education',
      ' * AUTHPUR NATIONAL MODEL SCHOOL',
      ' * 2014-2023',
      ' */',
    ],
    '_projects': [
      '/**',
      ' * Projects',
      ' * A showcase of some of my favorite work.',
      ' */',
      '',
      'const projects = [',
      '  { \n\t name: "Project One",\n\t tech: ["React",\n\t "Node.js"] \n},',
      '  { \n\tname: "Project Two",\n\t tech: ["Next.js",\n\t"Tailwind CSS"] \n},',
      '];',
    ],
    '_contact-me': [
      '/**',
      ' * Contact Me',
      ' * Let\'s connect!',
      ' */',
      '',
      'const email = "namansharma12678@gmail.com";',
      'const github = "https://github.com/Naman12678";',
      'console.log("Feel free to reach out!");',
    ],
  };

  useEffect(() => {
    if (activeTab && content[activeTab]) {
      setDisplayedLines([]); // Reset the animation
      let index = 0;
      const interval = setInterval(() => {
        if (index < content[activeTab].length) {
          setDisplayedLines((prevLines) => [...prevLines, content[activeTab][index]]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 500); // Typing speed
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  // Function to render email, GitHub, and Resume with clickable links
  const renderLineWithLinks = (line) => {
    const emailRegex = /const email = "([^"]+)";/;
    const githubRegex = /const github = "([^"]+)";/;
    const resumeRegex = /View My Resume : (https:\/\/drive\.google\.com\/[^\s]+)/; // Detect the resume link
    
    // Check and replace email and github with clickable links
    if (emailRegex.test(line)) {
      const emailMatch = line.match(emailRegex);
      if (emailMatch) {
        return (
          <div className="flex items-center space-x-2">
            <FaEnvelope className="h-5 w-5 text-gray-400" />
            <a href={`mailto:${emailMatch[1]}`} className="text-blue-400">
              {emailMatch[1]}
            </a>
          </div>
        );
      }
    }

    if (githubRegex.test(line)) {
      const githubMatch = line.match(githubRegex);
      if (githubMatch) {
        return (
          <div className="flex items-center space-x-2">
            <FaGithub className="h-5 w-5 text-gray-400" />
            <a href={githubMatch[1]} target="_blank" rel="noopener noreferrer" className="text-blue-400">
              GitHub Profile
            </a>
          </div>
        );
      }
    }

    // Check and replace Resume link
    if (resumeRegex.test(line)) {
      const resumeMatch = line.match(resumeRegex);
      if (resumeMatch) {
        return (
          <div>
            <a href={resumeMatch[1]} target="_blank" rel="noopener noreferrer" className="text-blue-400">
              View My Resume
            </a>
          </div>
        );
      }
    }

    return line;
  };

  // Main content rendering with error handling
  try {
    return (
      <div
        className="p-6 text-green-400 font-mono text-sm overflow-y-auto bg-black rounded-lg"
        style={{ height: '100vh', width: '100vw' }} // Full-screen black background
      >
        <pre>
          {displayedLines.length > 0 &&
            displayedLines.map((line, index) => (
              <div key={index}>
                {renderLineWithLinks(line)}
              </div>
            ))}
        </pre>
      </div>
    );
  } catch (error) {
    console.error('Error rendering lines:', error);
    return <div>Error occurred while displaying content.</div>;
  }
};

export default ContentViewer;
