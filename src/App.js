import React, { Component } from "react";
import Rainjs from "./Rain";
import "./App.css";
// import dojdi from "./Rainf";
import { TypeAnimation } from 'react-type-animation';

export default class App extends React.Component {
    render() {
        // dojdi()
        return (
            <div>
                <Rainjs />
                    <div className="tx">
                        <TypeAnimation
                                      sequence={[
                                        'Привет', // Types 'One'
                                        1000, // Waits 1s
                                        'Лиза', // Deletes 'One' and types 'Two'       
                                        2000, // Waits 2s
                                        'Ты топ'
                                        ,// Types 'Three' without deleting 'Two'
                                        
                                        
                                        1000,
                                        "Самая лучшая",
                                        1000,
                                        "Улыбнись :)",
                                        1000,
                                        () => {
                                          console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                        }
                                      ]}
                                      wrapper="div"
                                      cursor={true}
                                      repeat={Infinity}
                                      style={{ fontSize: '5em' }}
                                      />
                        </div>
            </div>
          )
    }
}