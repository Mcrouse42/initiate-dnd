import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_DM } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ addDungeonMaster: '', email: '', password: '' });
  const [addDungeonMaster, { error }] = useMutation(ADD_DM);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // execute addDungeonMaster and pass in variable data from form
      const { data } = await addDungeonMaster({
        variables: { ...formState }
      });
      Auth.login(data.addDungeonMaster.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='flex-row justify-center m-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Sign Up</h4>
          <div className='card-body'>
            <form className="form" onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your Dungeon Master Name'
                name='dungeonMaster'
                type='dungeonMaster'
                id='dungeonMaster'
                value={formState.dungeonMaster}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Sign up failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
