import React from "react";
import ServiceCard from "../service-card/service-card";

import './card-list.styles.scss'

function CardList({ services,searchInput }) {
  console.log(searchInput);
  console.log(services);
  const filteredServices = JSON.parse(localStorage.getItem('projectKMS'));
  console.log(filteredServices);

  return (
    <div>
      <div className="card-list">
        {filteredServices.filter(filteredServices=>filteredServices.projectname.includes(searchInput)).map((service) => (
          <div className="">
            <ServiceCard
              key = {service._id}
              providerName={service.projectname}
              providerCity={service.university}
              description={service.description}
              location ={service.githubrepo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
