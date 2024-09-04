
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import './App.css';
import AddChallenge from './components/AddChallenge';
import ChallengeList from './components/ChallengeList';


function App() {
  const [challenges, setChallenges] = useState([]);

  useEffect(()=>{
    
    fetchChallenges();
  }, [])

  const fetchChallenges = async () => {
    try {
      const response = await axios.get("http://localhost:8080/challenges");
      setChallenges(response.data);
    } catch (error) {
      console.error("Error fetching challenges: ", error);
    }
  };

  const handleChallengeAdded = ()=>{
    fetchChallenges();
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Monthly Challenges</h1>

      <AddChallenge onChallengeAdded={handleChallengeAdded} />
      
      <ChallengeList challenges={challenges}></ChallengeList>
    </div>
  );
}

export default App;
