import React from 'react';
import { FaGithub, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons

const ContentViewer = ({ activeTab, setActiveTab }) => {
  const content = {
    '_hello': [
      '  \n\n\n\n\t\t\t\tHey I am Naman Sharma\n\n',
      ' * Welcome to my portfolio!',
      ' * Navigate to other sections',
    ],
    '_about-me': [
      ' \t\t\t\t\t My Introduction : \n',
      ' \t\t\t_________________________________\n ',
      '* I am a passionate developer, constantly learning and improving my skills.',
      '* With a strong background in web development and a focus on React and Tailwind CSS.',
      '* I build user-friendly applications that solve real-world problems.',
      "* Let's build something amazing together!",
      '* Let\'s explore!',
      '\t\t\tView My Resume : https://drive.google.com/file/d/15tEdyas7tTvnV0Cj4FwCGI7nJskFLUaq/view?usp=drive_link',
    ],
    '_education': [
      ' 1 .',
      ' * B-Tech (Computer Science and Engineering)',
      ' * JIS College of Engineering',
      ' * 2023-2027',
      ' */',
      ' 2 .',
      ' * Higher Secondary Education',
      ' * AUTHPUR NATIONAL MODEL SCHOOL',
      ' * 2014-2023',
    ],
    '_skills': [
      ' \t\t\t\t\t My Skills : \n',
      ' \t\t\t____________________________\n ',
      'Programming Languages :',
      '_______________________',
      '* C++\n','* Java\n','* Python\n','* JavaScript\n\n',
      'Web Technologies :',
      '___________________',
      'Proficient in HTML ,CSS , Javascript\n\n',
      '\t\tFrontend Development : ',
      '\t\t____________________',
      '* React Js\n','* Tailwind CSS\n\n',
      '\t\tBackend Development : ',
      '\t\t_____________________',
      '* Express Js\n','* Node Js\n','* Mongo DB\n\n\n\n',
    ],
    '_projects': [
      '\t\t\t\tProjects',
      '\t\t_______________________\n\n',
      '1.\n',
      'Linkify - URL Shortner Application\n',
      'Linkify Shortens Your long Url to Memorable Urls.\n\n',
      'Tech Stack : React Js , Node Js ,\n\t\t\t Express Js , Mongo DB\n\n',
      'Live Preview : https://url-shortner-frontned.vercel.app/\n\n',
      'GitHub Repo : https://github.com/Naman12678/linkify ',
      '\n2.\n',
      'Food Plaza\n',
      'Dynamic Platform to Search Recepies\n Using third Party APIs \n\n',
      'Tech Stack : React Js , HTML ,\n\t\t\t Tailwind CSS\n\n',
      'Live Preview : https://food-plaza-three.vercel.app/\n\n',
      'GitHub Repo : https://github.com/Naman12678/Food-Plaza',
      '\n3.\n',
      'Weather Notifier\n',
      'A Microsoft Edge Add on to give Weather NOtification\n\n',
      'Tech Stack :HTML , Tailwind CSS\n\t\t\t JavaScript\n\n',
      'Live Preview : https://microsoftedge.microsoft.com/addons/detail/weather-notifier/imdgnpjepbklifjmgpgfhnmlibcoocfj\n\n',
      'GitHub Repo : https://github.com/Naman12678/weatherExtension',
    ],
    '_contact-me': [
      '\t\t\tContact Me',
      '\t\t___________________\n\n',      
      ' * Let\'s connect!\n\n',
      '',
      'const email = "namansharma12678@gmail.com";',
      'const github = "https://github.com/Naman12678";',
      '\n\nconsole.log("Feel free to reach out!");',
    ],
  };

  const renderLineWithLinks = (line) => {
    const emailRegex = /const email = "([^"]+)";/;
    const githubRegex = /const github = "([^"]+)";/;
    const resumeRegex = /View My Resume : (https:\/\/drive\.google\.com\/[^\s]+)/;
    const livePreviewRegex = /Live Preview : (https:\/\/[^\s]+)/;
    const repoRegex = /GitHub Repo : (https:\/\/[^\s]+)/;

    if (emailRegex.test(line)) {
      const emailMatch = line.match(emailRegex);
      return (
        <div className="flex items-center space-x-2">
          <FaEnvelope className="h-5 w-5 text-gray-400" />
          <a href={`mailto:${emailMatch[1]}`} className="text-black">
            {emailMatch[1]}
          </a>
        </div>
      );
    }

    if (githubRegex.test(line)) {
      const githubMatch = line.match(githubRegex);
      return (
        <div className="flex items-center space-x-2">
          <FaGithub className="h-5 w-5 text-gray-400" />
          <a href={githubMatch[1]} target="_blank" rel="noopener noreferrer" className="text-blue-400">
            GitHub Profile
          </a>
        </div>
      );
    }

    if (resumeRegex.test(line)) {
      const resumeMatch = line.match(resumeRegex);
      return (
        <div>
          <a href={resumeMatch[1]} target="_blank" rel="noopener noreferrer" className="text-green-400">
            View My Resume
          </a>
        </div>
      );
    }

    // Handle Live Preview and GitHub Repo Links in Projects
    if (livePreviewRegex.test(line)) {
      const livePreviewMatch = line.match(livePreviewRegex);
      return (
        <div>
          <FaExternalLinkAlt className="h-3 w-3 text-gray-400 inline" />
          <a href={livePreviewMatch[1]} target="_blank" rel="noopener noreferrer" className="text-purple-400">Live Preview
          </a>
        </div>
      );
    }

    if (repoRegex.test(line)) {
      const repoMatch = line.match(repoRegex);
      return (
        <div>
          <FaGithub className="h-5 w-5 text-gray-400 inline" />
          <a href={repoMatch[1]} target="_blank" rel="noopener noreferrer" className="text-blue-400">
            View GitHub Repo
          </a>
        </div>
      );
    }

    return <div>{line}</div>;
  };

  return (
    <div
      className="p-6 text-green-400 font-mono text-sm overflow-y-auto bg-black rounded-lg"
      style={{ height: '100vh', width: '100%' }}
    >
      <pre>
        {content[activeTab]?.map((line, index) => (
          <div key={index}>
            {renderLineWithLinks(line)}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default ContentViewer;
