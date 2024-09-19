// import React, { useState } from 'react';
// import "./RegisterStartUp.css";


// const RegisterStartup = () => {
//   const [startupName, setStartupName] = useState('');
//   const [documents, setDocuments] = useState(null);
//   const [funds, setFunds] = useState('');
//   const [problemStatement, setProblemStatement] = useState('');
//   const [solution, setSolution] = useState('');
//   const [team, setTeam] = useState('');
//   const [additionalInfo, setAdditionalInfo] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log({
//       startupName,
//       documents,
//       funds,
//       problemStatement,
//       solution,
//       team,
//       additionalInfo,
//     });
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">Register Your Startup</h1>
//       <form onSubmit={handleSubmit} className='Form'>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Name of Startup
//           </label>
//           <input
//             type="text"
//             value={startupName}
//             onChange={(e) => setStartupName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Upload Documents
//           </label>
//           <input
//             type="file"
//             onChange={(e) => setDocuments(e.target.files)}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none"
//             required
//             multiple
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Funds (in INR)
//           </label>
//           <input
//             type="number"
//             value={funds}
//             onChange={(e) => setFunds(e.target.value)}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Problem Statement
//           </label>
//           <textarea
//             value={problemStatement}
//             onChange={(e) => setProblemStatement(e.target.value)}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Solution
//           </label>
//           <textarea
//             value={solution}
//             onChange={(e) => setSolution(e.target.value)}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Team Information
//           </label>
//           <textarea
//             value={team}
//             onChange={(e) => setTeam(e.target.value)}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Additional Information
//           </label>
//           <textarea
//             value={additionalInfo}
//             onChange={(e) => setAdditionalInfo(e.target.value)}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none"
//           />
//         </div>

//         <button
//           type="submit"
//           className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterStartup;

















import React, { useState } from 'react';
import "./RegisterStartUp.css";
import { Link } from 'react-router-dom';

const RegisterStartup = () => {
  const [startupName, setStartupName] = useState('');
  const [documents, setDocuments] = useState(null);
  const [funds, setFunds] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [solution, setSolution] = useState('');
  const [team, setTeam] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      startupName,
      documents,
      funds,
      problemStatement,
      solution,
      team,
      additionalInfo,
    });
  };

  return (
    <div className='main'>
        <header className="home-header">
        <div className="logo">AYUSH Startup India</div>
        <nav>
        <ul>
    
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        </nav>
        </header>


        <div className="container">
        <h1>Register Your Startup</h1>
        <form onSubmit={handleSubmit} className='Form'>
            <div className="form-group">
            <label>Name of Startup</label>
            <input
                type="text"
                value={startupName}
                onChange={(e) => setStartupName(e.target.value)}
                required
            />
            </div>

            <div className="form-group">
            <label>Upload Documents</label>
            <input
                type="file"
                onChange={(e) => setDocuments(e.target.files)}
                required
                multiple
            />
            </div>

            <div className="form-group">
            <label>Funds (in INR)</label>
            <input
                type="number"
                value={funds}
                onChange={(e) => setFunds(e.target.value)}
                required
            />
            </div>

            <div className="form-group">
            <label>Problem Statement</label>
            <textarea
                value={problemStatement}
                onChange={(e) => setProblemStatement(e.target.value)}
                required
            />
            </div>

            <div className="form-group">
            <label>Solution</label>
            <textarea
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                required
            />
            </div>

            <div className="form-group">
            <label>Team Information</label>
            <textarea
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                required
            />
            </div>

            <div className="form-group">
            <label>Additional Information</label>
            <textarea
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
            />
            </div>

            <button type="submit">Submit</button>
        </form>
        </div>
    </div>
  );
};

export default RegisterStartup;
