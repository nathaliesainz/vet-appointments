import {useState, useEffect} from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form's validation
    if ([ name, owner, email, date, symptoms ].includes('') ) {
      console.log('There is at least one empty field')

      setError(true)
      return;
    } 

    setError(false)
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Follow Up Patients</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add patients and {''}
        <span className="text-indigo-600 font-bold">administer</span> them
      </p>

      <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

            {error && (
              <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
                <p>All fields are required</p>
              </div>
            )}

        <div className="mb-5">
          <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
            Pet Name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Name of the Pet"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={ (e) => setName(e.target.value) }
            />
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
            Owner Name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Name of the Owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={ (e) => setOwner(e.target.value) }
            />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            />
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
            Date
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={ (e) => setDate(e.target.value) }
            />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
            value={symptoms}
            onChange={ (e) => setSymptoms(e.target.value) }
            />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700
          cursor-pointer transition-colors"
          value="Add Patient"
        />

      </form>
    </div>
  )
}

export default Form