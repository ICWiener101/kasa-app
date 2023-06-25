import React from 'react';
import Rating from './../../components/Rating/index';
import Dropdown from './../Dropdown/index';
import '../../styles/info.scss';

function Info({
      title,
      description,
      hostName,
      hostPicture,
      equipments,
      location,
      tags,
      rating,
}) {
      return (
            <div className="info-wrapper">
                  <div className="location-host">
                        <div className="location-info">
                              <div className="name-location">
                                    <h2>{title}</h2>
                                    <h3>{location}</h3>
                              </div>

                              <div className="tags-div">
                                    {tags.map((tag) => (
                                          <p className="tag">{tag}</p>
                                    ))}
                              </div>
                        </div>
                        <div className="host-rating">
                              <div className="host-info">
                                    <h3>{hostName}</h3>
                                    <div className="host-pic">
                                          <img
                                                src={hostPicture}
                                                alt="host picture"
                                          />
                                    </div>
                              </div>
                              <Rating rating={rating} />
                        </div>
                  </div>
                  <div className="equip-desc">
                        <Dropdown description={description} />
                        <Dropdown equipments={equipments} />
                  </div>
            </div>
      );
}

export default Info;
