import React, { createRef, useState , useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

const feed = [
  {
    id: 'ubc',
    title: 'The University of British Columbia',
    address: '2075 Lower Mall, Vancouver, BC V6T 1Z2',
    heading: 'I decided to make a simple-ish website to practice React\'s Hook and how to use `useState`, which releases after the new 16.8 React version. I thought, might as well make this my portfolio/personal website since I need one :)',
    other: '',
    coordinates: [ 49.26161773, -123.24955847 ]
  },
  {
    id: 'trafiq',
    title: 'Trafiq',
    address: '4216 Main St, Vancouver, BC V5V 3P9',
    heading: 'Relaxed, elegant European cafe with items ranging from cakes & croissants to soups & sandwiches.',  
    other: '',
    coordinates: [ 49.24733, -123.10078 ]
  },
  {
    id: '720-sweets',
    title: '720 Sweets',
    address: '3278 W Broadway, Vancouver, BC V6K 2H4',
    heading: 'Ice cream spot',
    other: '',
    coordinates: [ 49.26397, -123.16124 ]
  },
  {
    id: 'charing-cross',
    title: 'Charing Cross Hotel',
    address: '3278 W Broadway, Vancouver, BC V6K 2H4',
    heading: 'Walter writes to Oberstein and convinces him to meet in the smoking room of the Charing Cross Hotel where he promises additional plans for the submarine in exchange for money. The plan works and Holmes and Watson catch both criminals.',
    other: 'Adapted from <a href="http://www.gutenberg.org/files/2346/2346-h/2346-h.htm">Project Gutenberg</a>',
    coordinates: [49.27397, -123.16124]
  },
];

const Feed = () => {
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
    width: '100vw',
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
              <h4>{item.title}</h4>
              <p>{item.heading}</p>
              <small id="citation">
                {item.other}
              </small>
              <div><a className="continue-button">Continue reading</a></div>
            </section>
          );
        })}
      </div>
    </div>      
  )
};

export default Feed;
