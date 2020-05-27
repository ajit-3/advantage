import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dinnningArray: [1, 2, 3],
      isImage: false,
    };
  }

  updateArray = (value) => {
    let { dinnningArray } = this.state;
    if (value == "dec") {
      dinnningArray.pop();
    } else {
      dinnningArray.push(3);
    }
    this.setState({ dinnningArray });
  };

  popupImage = (e) => {
    let { isImage } = this.state;
    this.setState({ isImage: !isImage });
  };

  render() {
    const { dinnningArray, isImage } = this.state;
    return (
      <div className="block">
        {isImage ? (
          <div
            onClick={() => {
              this.popupImage();
            }}
            className="image-section"
          >
            <img
              className="image-block"
              src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
          </div>
        ) : (
          <div>
            <div className="dynamic-page">
              <span
                onClick={() => {
                  this.updateArray("dec");
                }}
              >
                -
              </span>
              <span
                onClick={() => {
                  this.updateArray("inc");
                }}
              >
                +
              </span>
            </div>
            <div className="block-section">
              {dinnningArray.map((data) => {
                return (
                  <div
                    className="section"
                    onClick={(e) => {
                      this.popupImage(e);
                    }}
                  >
                    <img
                      className="image"
                      src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    />
                    <button>
                      <a href="https://www.thesitewizard.com/" target="_blank">
                        BUY  a car sdssdfdxcx zxcxz
                      </a>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
