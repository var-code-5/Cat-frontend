"use client"
import "./page.css";
import Image from "next/image";
import { useState } from "react";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function Home() {
  const [isdark,setdark] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  function handledark(){
    isdark?setdark(false):setdark(true);
  }
    return (
      <div>
        <div className="section over-hide z-bigger">
          <input className="checkbox" type="checkbox" name="general" id="general" />
          <label className="for-checkbox" htmlFor="general" onClick={handledark}></label>
          <div className="background-color"></div>
          <div className="section over-hide z-bigger">
            <div className="container pb-5">
              <div className="row justify-content-center pb-5">
                <div className="col-12 pt-5">
                  <p className="mb-4 pb-2">Inspections</p>
                </div>
                <div className="col-12 pb-5">
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-1" defaultChecked />
                  <label className="for-checkbox-tools" htmlFor="tool-1">
                    <i className='uil uil-line-alt'></i>
                    Header
                  </label>
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-2" />
                  <label className="for-checkbox-tools" htmlFor="tool-2">
                    <i className='uil uil-vector-square'></i>
                    Tires
                  </label>
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-3" />
                  <label className="for-checkbox-tools" htmlFor="tool-3">
                    <i className='uil uil-ruler'></i>
                    Battery
                  </label>
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-4" />
                  <label className="for-checkbox-tools" htmlFor="tool-4">
                    <i className='uil uil-crop-alt'></i>
                    Exterior
                  </label>
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-5" />
                  <label className="for-checkbox-tools" htmlFor="tool-5">
                    <i className='uil uil-brush-alt'></i>
                    Brakes
                  </label>
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-6" />
                  <label className="for-checkbox-tools" htmlFor="tool-6">
                    <i className='uil uil-image-resize-landscape'></i>
                    Engine
                  </label>
                  <input className="checkbox-tools" type="radio" name="tools" id="tool-6" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        <a href="https://front.codes" className="link-to-page " target="_blank">
          {isdark?<Image src="/cat-short-white.png" alt="cat logo" width={100} height={100} className="w-[60px] ml-[6px]"/>:<Image src="/cat-short.png" alt="cat logo" width={200} height={100} />}
        </a>
      </div>
    );
  }