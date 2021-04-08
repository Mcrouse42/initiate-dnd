import React, { useState } from 'react';
import { searchMonsterApi } from '../utils/API';
import { Form, Button } from 'react-bootstrap';

const MonsterSearch = () => {
    // create state for holding returned monster api data
    // const [searchedMonsters, setSearchedMonsters] = useState([]);

    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create state to hold saved monsterId values
        // figure out later

    // set up useEffect hook to save 'savedMonsterIds' list to local storage

    // create method to search for monsters and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        else {
            searchMonsterApi(searchInput);
            setSearchInput('');
        }
    }

  return (
        <div className="container flex-row justify-space-between-lg justify-center align-center">
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formMonster">
                    <Form.Label>Find a Monster</Form.Label>
                    <Form.Control
                    placeholder="Enter monster name" 
                    name='searchInput'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>      
  );
};

export default MonsterSearch;
