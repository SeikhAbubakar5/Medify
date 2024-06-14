import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchCity.css"

const SearchCity = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [medicalCenters, setMedicalCenters] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch list of states on component mount
        axios.get('https://meddata-backend.onrender.com/states')
            .then(response => {
                setStates(response.data);
            })
            .catch(error => {
                console.error('Error fetching states:', error);
            });
    }, []);

    useEffect(() => {
        if (selectedState) {
            // Fetch list of cities when a state is selected
            axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`)
                .then(response => {
                    setCities(response.data);
                })
                .catch(error => {
                    console.error('Error fetching cities:', error);
                });
        } else {
            setCities([]);
        }
    }, [selectedState]);

    const fetchMedicalCenters = () => {
        if (selectedState && selectedCity) {
            // Fetch list of medical centers
            axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`)
                .then(response => {
                    setMedicalCenters(response.data);
                    // Navigate to the Bookslot page
                    navigate('/bookslot', { state: { medicalCenters: response.data } });
                })
                .catch(error => {
                    console.error('Error fetching medical centers:', error);
                });
        }
    };

        return (
            <div className='Search'>
                <div className='inputContainer'>
                    <SearchIcon className="icon" />
                    <select
                        id="state"
                        value={selectedState}
                        onChange={e => setSelectedState(e.target.value)}
                    >
                        <option value="">State</option>
                        {states.map(state => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className='inputContainer'>
                    <SearchIcon className="icon" />
                    <select
                        id="city"
                        value={selectedCity}
                        onChange={e => setSelectedCity(e.target.value)}
                    >
                        <option value="">City</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                
                <button onClick={fetchMedicalCenters}><SearchIcon />Search</button>
            </div>
        );
};

export default SearchCity;
