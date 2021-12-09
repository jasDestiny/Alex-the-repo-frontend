import React from "react";
import ServiceCard from "../service-card/service-card";

import './card-list.styles.scss'

function CardList({ services,searchInput }) {
  console.log(services);
  const filteredServices = searchInput===""?services: services.filter((service)=>(
    service.city.toLowerCase().includes(searchInput.toLowerCase()) 
  ));

  return (
    <div>
      
    </div>
  );
}

export default CardList;
