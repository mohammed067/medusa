import React from "react";
// import { SelectScrollable } from "./select2";
import arrow from "../Images/arrow.png";

function Summarybottom() {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevents the default form submission
  
      // Check if any required field is empty
      const firstName = event.target.elements.fname.value;
      const lastName = event.target.elements.lname.value;
      const streetAddress = event.target.elements.streetadress.value;
      const city = event.target.elements.city.value;
      const state = event.target.elements.state.value;
      const zipCode = event.target.elements.zipcode.value;
      const phone = event.target.elements.phone.value;
      const email = event.target.elements.email.value;
  
      if (!firstName || !lastName || !streetAddress || !city || !state || !zipCode || !phone || !email) {
        alert("Please fill in all required fields.");
      } 
    }

  return (
    <div className="px-[1rem]">
      <form onSubmit={handleSubmit}>
        <div className="flex pt-4 gap-4 flex-col md:flex-row ">
          <div className=" md:w-[50vw]">
            <label htmlFor="fname">First name</label>
            <br />
            <input
              className="border-b bg-transparent w-full outline-none border-gray-300"
              type="text"
              id="fname"
              name="lname"
              placeholder="Enter your name"
            />
            {/* <div className="h-[0.2rem] w-[5rem] bg-gray"/> */}
          </div>

          <div className="md:w-[50vw]">
            <label htmlFor="lname">Last name:</label>
            <br />
            <input
              className="border-b bg-transparent outline-none  w-full border-gray-300"
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your Last name
              "
            />
          </div>
        </div>
        <div className="py-[2rem]">
          <p>Country/Region</p>
          <p className=" font-semibold">United States(US)</p>
        </div>

        <div className="w-full">
          <label htmlFor="streetadress">Street address</label>
          <br />
          <input
            className="border-b w-full bg-transparent outline-none border-gray-300 mt-[2rem]"
            type="text"
            id="streetadress"
            name="streetadress"
            placeholder="House number and street name"
          />
          <br />
          <input
            className="border-b w-full outline-none bg-transparent border-gray-300 mt-[2rem]"
            type="text"
            id="streetadress"
            name="streetadress"
            placeholder="Apartment,suite,unit,etc.(optional)"
          />
        </div>

        <div className="pt-[2rem]">
          <label htmlFor="streetadress">Town/City</label>
          <br />
          <input
            className="border-b outline-none w-full bg-transparent border-gray-300 mt-[2rem]"
            type="text"
            id="streetadress"
            name="streetadress"
            placeholder="Enter city name here"
          />
        </div>

        <div className="pt-[2rem]">
          {/* <label htmlFor="streetadress">State</label> */}
          {/* <select className="border-b bg-transparent w-full border-gray-300 mt-[1rem]">
            <option value="" disabled selected>
              Select an option
            </option>
            {countries.map((each) => (
              <option key={each} value={each}>
                {each}
              </option>
            ))}
          </select> */}
          {/* <SelectScrollable/> */}
        </div>

        <div className="pt-[2rem]">
          <label htmlFor="zipcode">ZIP Code</label>
          <br />
          <input
            className="border-b outline-none w-full bg-transparent border-gray-300 mt-[2rem]"
            type="text"
            id="zipcode"
            name="streetadress"
            placeholder="ZIP / Postal Code"
            required
          />
        </div>

        <div className="pt-[2rem]">
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="border-b outline-none w-full bg-transparent border-gray-300 mt-[2rem]"
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone number"
            required

          />
        </div>

        <div className="pt-[2rem]">
          <label htmlFor="email">Email address</label>
          <br />
          <input
            className="border-b outline-none w-full bg-transparent border-gray-300 mt-[2rem]"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="pt-[2rem]">
          <input type="checkbox" id="signme" name="signme" value="Bike" required />
          <label for="signme">
            {" "}
            Sign me up to recieve email updates and news
            <span className="text-gray-400 ml-2">(optional)</span>
          </label>
        </div>

        <div className="pt-[2rem] flex flex-col py-[1rem] bg-transparent">
          
          
          <label for="description">
            {" "}
            Order notes 
            <span className="text-gray-400 ml-2">(optional)</span>
          </label>
          <textarea className="bg-transparent border-b outline-none border-gray-300" id="description" name="description" maxlength="500" rows="4" cols="50"></textarea>
        </div>

        <div>
        <input type="checkbox" id="ship" name="signme" value="Bike" />
          <label for="ship">
            {" "}
           Ship to different address?
            
          </label>
        </div>

        <div className="pt-[2rem]">
          <button className="bg-[#000000] text-[#ffffff] rounded-full w-full py-2" type="submit" value="Submit">Continue to shipping</button>
            
            <div className="flex gap-4 items-center justify-center pt-5">
              <img className="bg-[#000000] w-[1.5rem] rounded-full p-1  -rotate-90" src={arrow}/>
              <p className="text-gray-600">Return to Cart</p>
            </div>
        
        </div>
      </form>
    </div>
  );
}

export default Summarybottom;
