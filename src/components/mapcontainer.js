import React from "react";

const LocationMap = ({ selectedPlace, ...extraProps }) => {
  return (
    <div  className={"rounded shadow-sm border-4 border border-indigo-800  overflow-hidden w-11/12 mx-auto h-96 mb-8"}>
        <div className="mapouter  w-full h-full h-96">
            <div>
                <iframe id="gmap_canvas"  style={{overflow:"hidden", background:"none, !important"}}
                        src="https://maps.google.com/maps?q=53.41561155973524,%20-1.442938707955667&t=k&z=19&ie=UTF8&iwloc=&output=embed"
                        className=" w-full h-96"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
        </div>
    </div>
  );
};

export default LocationMap;
