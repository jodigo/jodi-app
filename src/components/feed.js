import React, { createRef, useState , useEffect } from 'react'
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'

const feed = [
  {
    id: 'ubc',
    title: 'The University of British Columbia',
    address: '2075 Lower Mall, Vancouver, BC V6T 1Z2',
    heading: 'I decided to make a simple-ish website to practice React\'s Hook and how to use <code>useState</code>, which releases after the new 16.8 React version. I thought might as well make this my portfolio/personal website since I need one :) also, semicolon looks like letter j.',
    other: '',
    coordinates: [ 49.26161773, -123.24955847 ]
  },
  {
    id: 'wip',
    title: 'WIP!',
    address: '3278 W Broadway, Vancouver, BC V6K 2H4',
    heading: '-- This page is a work in progress [Blog coming soon!] --',
    other: '',
    coordinates: [ 49.192879, -123.160660 ]
  },
  // {
  //   id: '720-sweets',
  //   title: '720 Sweets',
  //   address: '3278 W Broadway, Vancouver, BC V6K 2H4',
  //   heading: 'Ice cream spot',
  //   other: '',
  //   coordinates: [ 49.26397, -123.16124 ]
  // },
  // {
  //   id: 'rew',
  //   title: 'Real Estate Wire (REW)',
  //   address: '110 W 2nd Ave, Vancouver, BC V5Y 1C2',
  //   heading: 'I learned a lot from my experience here as a full stack developer. My 8 months here allowed to create customer facing features and learn how to write beautiful codes.',
  //   other: ['Link', 'http://www.rew.ca/news'],
  //   coordinates: [49.268960, -123.106840]
  // },
  // {
  //   id: 'vgh',
  //   title: 'VGH Research Pavilion',
  //   address: '828 W 10th Ave, Vancouver, BC V5Z 1M9',
  //   heading: 'My experience here allowed me to integrate my interest in machine learning and web development by creating a data visualization app to provide NLP analysis result of conversation data between doctors and patients.',
  //   other: '',
  //   coordinates: [49.262530, -123.13140]
  // },
  // {
  //   id: 'trafiq',
  //   title: 'Trafiq',
  //   address: '4216 Main St, Vancouver, BC V5V 3P9',
  //   heading: 'My favourite breakfast spot. Relaxed, elegant European cafe with items ranging from cakes & croissants to soups & sandwiches.',  
  //   other: '',
  //   coordinates: [ 49.24733, -123.10078 ]
  // },
];

function Feed() {
  const refs = feed.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {});

  const handleClick = id => {
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  };
  
  const [viewport, setViewport] = useState({
    latitude: 49.21920015,
    longitude: -123.13836515,
    zoom: 10.5,
    width: '50vw',
    height: '100vh'
  });

  const [selectedSpot, setSelectedSpot] = useState(null);

  useEffect(() => {
    const listener = e => {
        if (e.key === "Escape"){
          setSelectedSpot(null);
        }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    }
  }, [])

  return (
    <div id="feed-container">
      <div className="map-container">
        <div>
          <ReactMapGL 
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1Ijoiam9kaWdvIiwiYSI6ImNqeWZhMXpkczA5Y2ozaG52Z2l0Y29qa3IifQ.zglTcX0xV8BW_o1Umfx6Hg"
          onViewportChange={ viewport => {
              if(viewport.width < 600){
                viewport.width = window.innerWidth;
                viewport.height = 375;
                console.log("smoll")
              }
              setViewport(viewport);
          }}
          >
            {feed.map(spot =>(
              <Marker 
              key={spot.id}
              latitude={spot.coordinates[0]}
              longitude={spot.coordinates[1]}>
                <i className="fa fa-thumb-tack map-marker" id={spot.id} onClick={(e) => {
                  handleClick(e.target.id);
                  e.preventDefault();
                  setSelectedSpot(spot);
                }}></i>
              </Marker>
            ))};

            <div style={{position: 'absolute', bottom: '1%', left: '1%'}}>
              <NavigationControl/>
            </div>
            
            {selectedSpot && (
              <Popup 
                latitude={selectedSpot.coordinates[0]}
                longitude={selectedSpot.coordinates[1]}
                onClose={() => {
                    setSelectedSpot(null);
                }}
                onClick={() => {

                }}>
                <div>
                  <h5>{selectedSpot.title}</h5>
                </div>
              </Popup>
            )}
          </ReactMapGL>
        </div>
      </div>

      <div className="post-container">
        <h1>feed;</h1>
        {feed.map(item => {
          return (
            <section id={item.id} key={item.id} ref={refs[item.id]} className='post-card'>
              <h4 className='post-card-title'>{item.title}</h4>
              <p dangerouslySetInnerHTML={{__html: item.heading}}></p>
              { 
                item.other != '' &&
                <p>
                  <a id="citation" href={item.other[1]}>
                    <small> 
                      {item.other[0]}
                    </small>
                    <br></br>
                    <br></br>
                  </a>
                </p>
              }
              {/* <div><a className="continue-button">Continue reading</a></div> */}
            </section>
          );
        })}
      </div>
    </div>      
  )
};

export default Feed;
