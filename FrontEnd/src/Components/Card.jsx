import React from 'react'

function Card({item}) {
  return (
    <div>
      

      <div className="card w-96 bg-base-100 shadow-xl gap-1">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
   {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">oldPrice X {item.oldPrice}</div> 
      <div className="badge badge-outline">newPrice {item.newPrice}</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
