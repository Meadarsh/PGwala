import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
const EditProperty = ( {Refreshfunc,data,closeBox}) => {
  const[calling,setCalling]=useState(true)
  const [rentalType, setRentalType] = useState(data.rentalType);
  const [rent, setRent] = useState(data.rent);
  const [singleSharingRent, setSingleSharingRent] = useState(data.singleSharingRent);
  const [twinSharingRent, setTwinSharingRent] = useState(data.twinSharingRent);
  const [threeSharingRent, setThreeSharingRent] = useState(data.fourSharingRent);
  const [fourSharingRent, setFourSharingRent] = useState(data.fourSharingRent);
  const [securityDeposit, setSecurityDeposit] = useState(data.securityDeposit);
  const [address, setAddress] = useState(data.address);
  const [location, setLocation] = useState(data.location);
  const [buildingName, setBuildingName] = useState(data.buildingName)
  const [city, setCity] = useState(data.city);
  const [state, setState] = useState(data.state);
  const [carpetArea, setCarpetArea] = useState(data.carpetArea);
  const [furnishing, setFurnishing] = useState(data.furnishing); // default to "null"
  const [flatType, setFlatType] = useState(data.flatType); // default to "null"
  const [bathroom, setBathroom] = useState(data.bathroom); // default to "null"
  const [parking, setParking] = useState(data.parking); // default to "null"
  const [balcony, setBalcony] = useState(data.balcony); // default to "null"
  const [totalFloor, setTotalFloor] = useState(data.totalFloor);
  const [onFloor, setOnFloor] = useState(data.onFloor);
  const [washroom, setWashroom] = useState(data.washroom);
  const [tenantsPreferred, setTenantsPreferred] = useState(data.tenantsPreferred);
  const [selectedItems, setSelectedItems] = useState(data.selectedItems);
  const [selectedBuildingItems, setSelectedBuildingItems] = useState(data.selectedBuildingItems);
  const [amenities, setAmenities] = useState({
    visitorsEntry: "",
    drinking: "",
    smoking: "",
    food: "",
    kitchen: "",
  });
  const allStateValues = {
    id:data._id,
    rentalType,
    rent,
    singleSharingRent,
    twinSharingRent,
    threeSharingRent,
    fourSharingRent,
    securityDeposit,
    address,
    location,
    buildingName,
    city,
    state,
    washroom,
    carpetArea,
    furnishing,
    flatType,
    bathroom,
    parking,
    balcony,
    totalFloor,
    onFloor,
    tenantsPreferred,
    selectedItems,
    selectedBuildingItems,
    amenities,
  };
  const initializeState = () => {
    
    setRent("");
    setSingleSharingRent("");
    setTwinSharingRent("");
    setThreeSharingRent("");
    setFourSharingRent("");
    setSecurityDeposit("");
    setAddress("");
    setBuildingName('')
    setCity("");
    setLocation('');
    setState("");
    setCarpetArea("");
    setFurnishing('0');
    setFlatType('0');
    setWashroom('')
    setBathroom('0');
    setParking('0');
    setBalcony('0');
    setTotalFloor("");
    setOnFloor("");
    setTenantsPreferred("");
    setSelectedItems([]);
    setSelectedBuildingItems([]);
    setAmenities({
      visitorsEntry: "",
      drinking: "",
      smoking: "",
      food: "",
      kitchen: "",
    });
  };
  const handleRadioChange = (category, value) => {
    setAmenities((prevAmenities) => ({
      ...prevAmenities,
      [category]: value,
    }));
    console.log(amenities);
  };

  const handleCheckboxChange = (event) => {
    const itemName = event.target.value;
    if (event.target.checked) {
      // If checkbox is checked, add the item to the selectedItems array
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemName]);
    } else {
      // If checkbox is unchecked, remove the item from the selectedItems array
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== itemName)
      );
    }
  };
  const handleCheckboxChangeBuilding = (event) => {
    const itemName = event.target.value;
    if (event.target.checked) {
      // If checkbox is checked, add the item to the selectedItems array
      setSelectedBuildingItems((prevSelectedItems) => [
        ...prevSelectedItems,
        itemName,
      ]);
    } else {
      // If checkbox is unchecked, remove the item from the selectedItems array
      setSelectedBuildingItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== itemName)
      );
    }
  };



const handleSubmit = async () => {

    Upload()
}

const Upload= async()=>{
  const result = await fetch(`${import.meta.env.VITE_BASE_URL}/update`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ allStateValues}),
  });
  
  if (result.ok) {
    setCalling(true)
    alert("uploaded");
    initializeState()
    Refreshfunc()
    closeBox()
  }
}
 

  return (
    <div className="bg-white w-full h-full absolute top-0 z-10">
      <div className="flex mb-10 justify-center relative">
        
        <div class="mt-2 lg:mt-8 flex lg:w-[80vw] flex-col relative bg-white border shadow-md rounded-lg p-4">
        <button className="absolute top-0 right-4 font-bold text-4xl " onClick={closeBox}><IoClose/></button>
          <h2 class="text-black font-bold text-lg">Add  <select
                      onChange={(e)=>setRentalType(e.target.value)} // Attach the change event handler
                      value={rentalType}
                      class="bg-gray-200 rounded-md border border-red-500  text-black px-2 py-1"
                      id="country"
                    >
                      <option value="Flat">Flat</option>
                      <option value="Pg">Pg</option>
                    </select> for rent</h2>
          <div className="lg:flex lg:gap-5">
            <div>
            {rentalType=='Flat'?<div class="mt-4">
                <label class="text-black" for="name">
                  Rent
                </label>
                <input
                  placeholder="Rent per month"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setRent(e.target.value)}
                  value={rent}
                />
              </div>:
              <>
              <div class="mt-4 flex gap-2">
               <div >
               <label class="text-black" for="name">
                  Single sharing rent
                </label>
                <input
                  placeholder="Rent per month"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setSingleSharingRent(e.target.value)}
                  value={singleSharingRent}
                />
               </div>
               <div>
               <label class="text-black" for="name">
                  Twin sharing rent
                </label>
                <input
                  placeholder="Rent per month"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setTwinSharingRent(e.target.value)}
                  value={twinSharingRent}
                />
               </div>
              </div>
              <div class="mt-4 flex gap-2">
               <div >
               <label class="text-black" for="name">
                  Triple sharing rent
                </label>
                <input
                  placeholder="Rent per month"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setThreeSharingRent(e.target.value)}
                  value={threeSharingRent}
                />
               </div>
               <div>
               <label class="text-black" for="name">
                  Four sharing rent
                </label>
                <input
                  placeholder="Rent per month"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setFourSharingRent(e.target.value)}
                  value={fourSharingRent}
                />
               </div>
              </div></>}
              <div class="mt-4">
                <label class="text-black" for="name">
                  Security/Deposit
                </label>
                <input
                  placeholder="Enter security deposit"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setSecurityDeposit(e.target.value)}
                  value={securityDeposit}
                />
              </div>

              <div class="mt-4">
                <label class="text-black" for="address">
                  Address
                </label>
                <textarea
                  placeholder="Address"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  id="address"
                  onChange={(e)=>setAddress(e.target.value)}
                  value={address}
                ></textarea>
                <label class="text-black" for="address">
                 Building Name
                </label>
                <input
                  placeholder="Building Name"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  id="address"
                  onChange={(e)=>setBuildingName(e.target.value)}
                  value={buildingName}
                ></input>
                <div class="flex-1">
                    <label class="text-black" for="country">
                      Location
                    </label>
                    <select
                      onChange={(e)=>setLocation(e.target.value)} // Attach the change event handler
                      value={location}
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                    >
                      <option value=""> </option>
                      <option value="Goregaon west">Goregaon west</option>
                      <option value="Goregaon east">Goregaon east</option>
                      <option value="Malad east">Malad east</option>
                      <option value="Malad west">Malad west</option>
                    </select>
                  </div>

              </div>

              <div class="mt-4 flex flex-col lg:flex-row space-x-2">
                <div class="flex-1">
                  <label class="text-black" for="city">
                    City
                  </label>
                  <input
                    placeholder="City name"
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="city"
                    type="text"
                    onChange={(e) => setCity( e.target.value)}
                    value={city}
                  />
                </div>

                <div class="flex-1">
                  <label class="text-black" for="state">
                    State
                  </label>
                  <input
                    placeholder="State name"
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="state"
                    type="text"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                  />
                </div>
              </div>

              <div class="mt-4 flex flex-row space-x-2">
               {rentalType=='Flat'?<div class="flex-1">
                  <label class="text-black" for="zip">
                    Carpet Area
                  </label>
                  <input
                    placeholder="Carpet area"
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="zip"
                    type="number"
                    onChange={(e)=>setCarpetArea(e.target.value)}
                    value={carpetArea}
                  />
                </div>:null}

                <div class="flex flex-row space-x-2">
                {rentalType=='Flat'?<div class="flex-1">
                    <label class="text-black" for="country">
                      Furnishing
                    </label>
                    <select
                      onChange={(e)=>setFurnishing(e.target.value)} // Attach the change event handler
                      value={furnishing}
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                    >
                      <option value="0"></option>
                      <option value="Unfurnished">Unfurnished</option>
                      <option value="Semi furnished">Semi furnished</option>
                      <option value="Full furnished">Full furnished</option>
                    </select>
                  </div>:null}
                </div>
                <div class="flex flex-row space-x-2"></div>
              </div>
              <div class="mt-4 flex flex-row space-x-2">
              {rentalType=='Flat'? <div class="flex-1 min-w-20">
                  <label class="text-black" for="country">
                    Flat type
                  </label>
                  <select
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="country"
                    onChange={(e) => setFlatType(e.target.value)}
                    value={flatType}
                  >
                    <option value=""> </option>
                    <option value="Studio apt">Studio apt</option>
                    <option value="1RK">1RK</option>
                    <option value="1BHK">1BHK</option>
                    <option value="1.5BHK">1.5BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="2.5BHK">2.5BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="3.5BHK">3.5BHK</option>
                    <option value="4BHK">4BHK</option>
                    <option value="4.5BHK">4.5BHK</option>
                  </select>
                </div>:null}
                {rentalType=='Flat'?<div class="flex flex-row space-x-2">
                  <div class="flex-1">
                    <label class="text-black" for="country">
                      Bathroom
                    </label>
                    <select
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e) => setBathroom(e.target.value)}
                      value={bathroom}
                    >
                      <option value="0"> </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>:null}

                {rentalType=='Flat'? <div class="flex flex-row space-x-2">
                  <div class="flex-1">
                    <label class="text-black" for="country">
                      Parking
                    </label>
                    <select
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e) => setParking(e.target.value)}
                      value={parking}
                    >
                      <option value="0"> </option>
                      <option value="0">Not available</option>
                      <option value="1">Available</option>
                    </select>
                  </div>
                </div>:null}
              </div>
              <div class="mt-4 flex flex-row space-x-2">
              {rentalType=='Flat'? <div class="flex-1 min-w-20">
                  <label class="text-black" for="country">
                    Balcony
                  </label>
                  <select
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="country"
                    onChange={(e) => setBalcony(e.target.value)}
                    value={balcony}
                  >
                    <option value="0"> </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                  </select>
                </div>:<div class="flex-1 min-w-20">
                  <label class="text-black" for="country">
                    Sharing
                  </label>
                  <select
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="country"
                    onChange={(e) => setBalcony(e.target.value)}
                    value={balcony}
                  >
                    <option value="0">null</option>
                    <option value="Single sharing">Single sharing</option>
                    <option value="Twin sharing">Twin sharing</option>
                    <option value="Triple sharing">Triple sharing</option>
                    <option value="Four sharing">Four sharing</option>
                  </select>
                </div>}

                {rentalType=='Flat'? <div class="flex flex-row space-x-2">
                  <div class="flex-1">
                    <label class="text-black" for="country">
                    Tenants Preferred
                    </label>
                    <select
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e)=>setTenantsPreferred(e.target.value)}
                      value={tenantsPreferred}
                    >

                      <option value=""></option>
                      <option value="Company">Company</option>
                      <option value="Bachelors">Bachelors</option>
                      <option value="Family">Family</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>
                </div>:
                <div class="flex flex-row space-x-2">
                  <div class="flex-1">
                    <label class="text-black" for="country">
                    Gender
                    </label>
                    <select
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e)=>setTenantsPreferred(e.target.value)}
                      value={tenantsPreferred}
                    >
                      <option value="Independent">Both</option>
                      <option value="Boy">Boy</option>
                      <option value="Girl">Girl</option>
                    </select>
                  </div>
                </div>}
                {rentalType=='Flat'? <div class="flex flex-row space-x-2">
                  <div class="flex-1">
                    <label class="text-black" for="zip">
                      Total floor
                    </label>
                    <input
                      placeholder="Total floor"
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="zip"
                      type="number"
                      onChange={(e)=>setTotalFloor(e.target.value)}
                      value={totalFloor}
                    />
                  </div>
                  <div class="flex-1">
                    <label class="text-black" for="zip">
                      On floor
                    </label>
                    <input
                      placeholder="On floor"
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="zip"
                      type="number"
                      onChange={(e)=>setOnFloor(e.target.value)}
                      value={onFloor}
                    />
                  </div>
                </div>:null}
               
              </div>
              <div class="flex flex-row space-x-2">
              {rentalType=='Flat'?null: <div class="flex-1">
                    <label class="text-black" for="country">
                    Washroom
                    </label>
                    <select
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e)=>setWashroom(e.target.value)}
                      value={washroom}
                    >
                      <option value=""> </option>
                      <option value="Attach washroom">Attach washroom</option>
                      <option value="Common washroom">Common washroom</option>
                    </select>
                  </div>}
                </div>
            </div>
             <div className="lg:border-l-2 lg:pl-3 lg:w-[20vw] flex flex-col justify-between">
              <h1 className="text-xl font-semibold">Building Amenities:</h1>
              {[
                "Visitor parking",
                "Security/FireAlarm",
                "Lifts",
                "InterCom facility",
                "SwimmingPool",
                "Gym",
                "Kids play area",
                "Garden",
                "Maintenance Staff",
                "CCTV Camera",
              ].map((item) => (
                <span key={item}>
                  <input
                    type="checkbox"
                    className=" scale-150"
                    name={item}
                    value={item}
                    id={item}
                    onChange={handleCheckboxChangeBuilding}
                    checked={selectedBuildingItems.includes(item)}
                  />
                  &nbsp; {item}
                </span>
              ))}
              <div></div>
            </div>
            <div className="lg:border-l-2 lg:pl-3 lg:w-[20vw] flex flex-col justify-between">
              <h1 className="text-xl font-semibold">Flat Amenities:</h1>
              {[
                "Dining Table",
                "Washing machine",
                "Sofa",
                "Microwave",
                "Fridge",
                "Water purifier",
                "Bed",
                "TV",
                "Cupboard",
                "Geyser",
                "Modular kitchen",
                "Wardrobe",
                "Air condition",
                "WIFI",
                "Piped gas",
              ].map((item) => (
                <span key={item}>
                  <input
                    type="checkbox"
                    className=" scale-150"
                    name={item}
                    value={item}
                    id={item}
                    onChange={handleCheckboxChange}
                    checked={selectedItems.includes(item)}
                  />
                  &nbsp; {item}
                </span>
              ))}
            </div>
            <div className="lg:w-[10vw] gap-3 flex flex-col">
              <div>
                <p className="text-lg">Visitors entry</p>
                <div className="flex gap-4">
                  <label htmlFor="Visitors entry">
                    <input
                      type="radio"
                      name="Visitors entry"
                      id="yesVisitors"
                      className="scale-125"
                      onChange={() => handleRadioChange("visitorsEntry", "Yes")}
                      checked={amenities.visitorsEntry === "Yes"}
                    />{" "}
                    &nbsp;Yes
                  </label>
                  <label htmlFor="Visitors entry">
                    <input
                      type="radio"
                      className="scale-125"
                      name="Visitors entry"
                      id="noVisitors"
                      onChange={() => handleRadioChange("visitorsEntry", " ")}
                      checked={amenities.visitorsEntry === " "}
                    />
                    &nbsp; 
                  </label>
                </div>
              </div>

              <div>
                <p>Drinking</p>
                <div className="flex gap-4">
                  <label htmlFor="Drinking">
                    <input
                      type="radio"
                      name="Drinking"
                      className="scale-125"
                      id="yesDrinking"
                      onChange={() => handleRadioChange("drinking", "Yes")}
                      checked={amenities.drinking === "Yes"}
                    />{" "}
                    &nbsp;Yes
                  </label>
                  <label htmlFor="Drinking">
                    <input
                      type="radio"
                      name="Drinking"
                      className="scale-125"
                      id="noDrinking"
                      onChange={() => handleRadioChange("drinking", " ")}
                      checked={amenities.drinking === " "}
                    />
                    &nbsp; 
                  </label>
                </div>
              </div>

              <div>
                <p>Smoking</p>
                <div className="flex gap-4">
                  <label htmlFor="smoking">
                    <input
                      type="radio"
                      className="scale-125"
                      name="smoking"
                      id="yesSmoking"
                      onChange={() => handleRadioChange("smoking", "Yes")}
                      checked={amenities.smoking === "Yes"}
                    />{" "}
                    &nbsp;Yes
                  </label>
                  <label htmlFor="smoking">
                    <input
                      type="radio"
                      className="scale-125"
                      name="smoking"
                      id="noSmoking"
                      onChange={() => handleRadioChange("smoking", " ")}
                      checked={amenities.smoking === " "}
                    />
                    &nbsp; 
                  </label>
                </div>
              </div>

              <div>
                <p>Food facility</p>
                <div className="flex gap-4">
                  <label htmlFor="Food">
                    <input
                      type="radio"
                      className="scale-125"
                      name="Food"
                      id="yesFood"
                      onChange={() => handleRadioChange("food", "Yes")}
                      checked={amenities.food === "Yes"}
                    />{" "}
                    &nbsp;Yes
                  </label>
                  <label htmlFor="Food">
                    <input
                      type="radio"
                      className="scale-125"
                      name="Food"
                      id="noFood"
                      onChange={() => handleRadioChange("food", " ")}
                      checked={amenities.food === " "}
                    />
                    &nbsp; 
                  </label>
                </div>
              </div>

             {rentalType=='Pg'? <div>
                <p>Kitchen facility</p>
                <div className="flex gap-4">
                  <label htmlFor="kitchen">
                    <input
                      type="radio"
                      name="kitchen"
                      className="scale-125"
                      id="yesKitchen"
                      onChange={() => handleRadioChange("kitchen", "Yes")}
                      checked={amenities.kitchen === "Yes"}
                    />{" "}
                    &nbsp;Yes
                  </label>
                  <label htmlFor="kitchen">
                    <input
                      type="radio"
                      name="kitchen"
                      className="scale-125"
                      id="noKitchen"
                      onChange={() => handleRadioChange("kitchen", " ")}
                      checked={amenities.kitchen === " "}
                    />
                    &nbsp; 
                  </label>
                </div>
              </div>:null}
            </div>
          </div>
         
          <div class="mt-4 flex justify-center">
            <button
              className="text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-3 bg-red-800 lg:hover:bg-red-500"
              type="submit"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProperty;


