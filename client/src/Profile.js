import React, { useState } from 'react'; 
import Navbar from "./AuthNavbar";

export default function Profile() {

  const [summary, setSummary] = useState("Waiting for input");
  const [patent, setPatent] = useState("Your Patent Document");
  const [data, setData] = useState([])
  const [formData, setFormData] = useState("Your Patent Document")

  const handleChange = (event) => {
    setFormData(event.target.value)
  }
  function handlePatentChange(event){
    setPatent(event.target.value);
  }
  function handleSummaryChange(event){
    setSummary(event.target.value);
  }

  const submitForm = () => {
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData, // Use your own property name / key
      }),
    })
      .then((res) => res.json())
      .then((result) => setSummary(result.summary))
      .catch((err) => console.log('error'))
  }
  const handleSubmit = (event) => {
    
    setSummary("Cooking up your summary!");
    alert("Submitted your Patent Document!");
    event.preventDefault();
    submitForm();
  }
/*
  async function handleSubmit(event)
  {

    event.preventDefault();
    const ResJson="{patentbody:"+ patent+"}";
    
    console.log(typeof(ResJson));

    try{
      fetch('http://localhost:3001/api', {
        method: 'POST',
        headers: {
          "Content-Type": "text/plain",
          "Accept": "application/json"
        },
        body: (ResJson)
      }).then(response => setState(response.data));

    }
    catch(err){
      console.log(err);
    }
  }
*/

  return (
    <main>
      <Navbar transparent />
      <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("./register_bg_2.png") + ")",
            }}
          ></div>
        <div className="container mx-auto px-4 h-full max-w-md">
          <div className="flex content-center items-center justify-center h-full max-w-md">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative flex flex-col break-words max-w-md mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                      Search Patent with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 zoom"
                      type="button" 
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("./google.svg")}
                      />
                      <a href="https://patents.google.com/" target="blank">Google Patents</a>
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-100 text-center mb-3 font-bold">
                    Paste descrption of the Patent below
                  </div>


                  <form id="ourForm" onSubmit={handleSubmit}>
                    <div >
                      
                      
                      <textarea
                        id="patentbody"
                        name="patentbody"
                        placeholder={formData} onChange={handleChange}
                        className="overflow-y-auto px-3 py-3 placeholder-gray-900 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 autoresizing"
                        rows="6"
                        
                      />
                    </div>
                    
                    <div className="text-center mt-6">
                    
                      <input
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-2 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                        value="Summarize"

                        /
                      >
                    </div>
                    </form>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-gray-100 text-center mb-3 font-bold">
                      Summary of your Patent document
                      </div>
                      <div className="relative w-full mb-3 float:left w-200">
                        <textarea
                          id="summarybody"
                          value={summary}
                          onChange={handleSummaryChange}
                          className="overflow-y-auto px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 autoresizing"
                          rows="6"
                        >
                        </textarea>  
                      </div>  
                    </div>
                  
                  </div>
                </div>
            </div>
          </div>
        </div>  
      </section> 
    </main>
  );
}
