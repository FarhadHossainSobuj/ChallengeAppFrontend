import axios from "axios";
import { useState } from 'react';
function AddChallenge({onChallengeAdded}) {
    const [month, setMonth] = useState('')
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/challenges", {month, description});
            setMonth('')
            setDescription("")
            onChallengeAdded()
        } catch (error){
            console.error("Error adding challenges: ", error);
        }
    }

    return (
      <div className="card my-5">
        <div className="card-header">Add New Challenge</div>
        <div className="card-body">
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3 form-group">
              <label className="form-label" htmlFor="month">
                Month
              </label>
              <input
                className="form-control"
                placeholder="e.g., January"
                type="text"
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 form-group">
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <textarea
                className="form-control"
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Describe"
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}

export default AddChallenge;