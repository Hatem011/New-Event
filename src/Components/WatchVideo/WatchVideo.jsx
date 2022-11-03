import React from 'react'
const src="https://www.youtube.com/embed/mR6e5GbyNfE"
export default function WatchVideo() {
  return (
    <>
    <div className="watchVideo mt-5 py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="watch-text">
                        <h5 className='pb-3'>WATCH VIDEO</h5>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eum soluta ex
                             accusamus officia voluptatum perferendis eveniet illo praesentium cum!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit ad, ducimus cum tempora
                             perferendis quia magnam qui possimus tenetur!magnam qui possimus tenetur!magnam qui possimus
                              tenetur!magnam qui possimus tenetur!magnam qui possimus tenetur!
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="watch-iframe">
                    <iframe width="100%" height="315" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
