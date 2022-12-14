import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactInternetSpeedMeter } from 'react-internet-meter'
import { useNavigate } from "react-router-dom";

export default function NewInternetSpeed() {
  const [testInProgress, setTestInProgress] = useState(false)
  const [downloadSpeeds, setDownloadSpeeds] = useState([])
  const [latestDownloadSpeed, setLatestDownloadSpeed] = useState(null);
  const [stadiumName, setStadiumName] = useState("")
  const [stadiumCity, setStadiumCity] = useState("")
  const navigate = useNavigate()
  const MAX_REQUESTS_FOR_SPEED_TEST = 5
  const SPEED_TEST_PING_INTERVAL_MS = 1000

  useEffect(() => {
    if (latestDownloadSpeed) {
      const newDownloadSpeeds = [...downloadSpeeds, latestDownloadSpeed]
      setDownloadSpeeds(newDownloadSpeeds)
      const sufficientDataPoints = newDownloadSpeeds.length >= MAX_REQUESTS_FOR_SPEED_TEST
      if (sufficientDataPoints) {
        // Send a post request
        const apiEndpoint = `/api/internet_speed`
        const data = {
          "download_units": "mbps",
          "download_speed": (1.0 * newDownloadSpeeds.reduce((partialSum, a) => partialSum + parseFloat(a), 0)) / downloadSpeeds.length,
          "stadium_name": stadiumName,
          "stadium_city": stadiumCity
        }
        fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

          .then((response) => {
            if (response.ok) {
              navigate("/")
            } else {
              // This will stop the speed test.
              location.reload()
            }
            setTestInProgress(false)
            setDownloadSpeeds([])
          })
          .catch((error) => {
            console.error('Network Error:', error);
            location.reload()
          });
      }
    }
  }, [latestDownloadSpeed])


  const stadiumFieldsMissing = stadiumName.length == 0 || stadiumCity.length == 0
  let buttonClass = "w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
  if (stadiumFieldsMissing) {
    buttonClass = "w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full focus:outline-none focus:shadow-outline disabled:opacity-25"
  }

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-4xl text-gray-600 font-semibold">Log internet speed</h2>
        </div>
      </div>

      <div className="md:ml-2 w-96">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Stadium Name
        </label>
        <select
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="placeName"
          onChange={(e) => setStadiumName(e.target.value)}
        >
          <option value="">Select a stadium</option>
          <option value="Stadium 1">{stadium[0]}</option>
          <option value="Stadium 2">Stadium 2</option>
          <option value="Stadium 3">Stadium 3</option>
          ...
        </select>
      </div>
      <div className="md:ml-2 mt-2 w-96">
        <label className="block mb-2 text-sm font-bold text-gray-700">          City
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="city"
          type="text"
          placeholder="City"
          onChange={(e) => setStadiumCity(e.target.value)}
        />
      </div>

      {testInProgress &&
        <div>
          <div>Testing...</div>
          <ReactInternetSpeedMeter
            txtSubHeading="Internet is too slow"
            outputType="alert"
            customClassName={null}
            txtMainHeading="Opps..."
            pingInterval={SPEED_TEST_PING_INTERVAL_MS}
            thresholdUnit='megabyte' // "byte" , "kilobyte", "megabyte" 
            threshold={0}
            imageUrl="https://cdn.speedcheck.org/images/reviews/google-speed-test-mobile.jpg"
            downloadSize="157000"  //bytes
            callbackFunctionOnNetworkTest={(speed) => setLatestDownloadSpeed(speed)}
          />
        </div>
      }
      {!testInProgress && downloadSpeeds.length == 0 && (
        <button
          disabled={stadiumFieldsMissing}
          className={buttonClass}
          type="button"
          onClick={() => setTestInProgress(true)}
        >
          Start speed test
        </button>
      )}
    </div>
  )
}