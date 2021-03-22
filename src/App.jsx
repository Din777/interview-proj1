import React, { Component } from 'react'
import './assets/styles/styles.scss'
import fish from './assets/img/fish.jpg'
import meat from './assets/img/meat.jpg'
import dessert from './assets/img/dessert.jpg'



export class App extends Component {
  render() {
    return (<React.Fragment>
      <div className="main-app">
        <div className="hero flex">
          <div className="hero-left-side">
            <div className="hero-logo">Logo</div>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, pariatur?</p>
            <div><button>press here</button></div>
          </div>
          <div className="hero-right-side"></div>
        </div>
        <div className="middle-up flex">
          <div className="middle-up-pic"></div>
          <div className="middle-up-text">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, veritatis.</p>
          </div>
        </div>
        <div className="middle-down flex">
          <div className="middle-down-text">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, veritatis.</p>
          </div>
          <div className="middle-down-pic"></div>
        </div>
        <div className="pixel-perfect flex">
          <div className="pixel-perfect-left">
            <div className="pixel-perfect-left-title">
              <p>A few highlights from our menu</p>
            </div>
            <div className="pixel-perfect-left-descript"><p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                Our menu is revamped every season.</p></div>
          </div>
          <div className="pixel-perfect-right">
            <ul>
              <li className="item flex">
                <div className="item-pic">
                  <img src={fish} alt="" />
                </div>
                <div>
                  <p className="item-title">Seared Salmon Fillet</p>
                  <p className="item-desc">Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
                </div>
              </li>
              <li className="item flex">
                <div className="item-pic">
                  <img src={meat} alt="" />
                </div>
                <div>
                  <p className="item-title">Rosemary Filet Mignon</p>
                  <p className="item-desc">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
                </div>
              </li>
              <li className="item flex">
                <div className="item-pic">
                  <img src={dessert} alt="" />
                </div>
                <div>
                  <p className="item-title">Summer Fruit Chocolate Mousse</p>
                  <p className="item-desc">Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="reserve-sec">
          <div className="reserve-sec-pic"></div>
          <div className="reserve-sec-text">
            <h1>Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sed?</p>
            <div><button>press here</button></div>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </div>
        <div className="bottom-hero flex">
          <h1>Ready</h1>
          <button>Book a table</button>
        </div>
        <footer className="footer flex">
          <div className="footer-logo">Logo</div>
          <div className="address">
            <ul>
              <li>street</li>
              <li>country</li>
              <li>tel</li>
            </ul>
          </div>
          <div className="open-hours"></div>
          <ul>
            <li>Open times</li>
            <li>days1</li>
            <li>days2</li>
          </ul>
        </footer>

      </div>
    </React.Fragment>
    )

  }
}

