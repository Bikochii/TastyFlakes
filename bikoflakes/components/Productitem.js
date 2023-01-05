import React from 'react'
import Link from 'next/link'

export default function Productitem({ product }) {
    //Pordukt thumbnaile erstellt
  return (
      <div className="card">
          <Link href={`/product/${product.slug}`}>
              <a>
                  <img
                      src={product.image}
                      alt={product.name}
                      className="rounded shadow"
                  />
                  </a>
          </Link>
          <div className="flex flex-col items-center justify-center p-5">
              <Link href={`/product/${product.slug}`}>
                  <a>
                      <h2 className='text-lg'>{product.name}</h2>
                  </a>
                     </Link>
              <p className="mb-2">{product.provider}</p>
              <p >€{product.price}</p>
              <button clasName="primary-button" type="button">
                  Add to Cart
              </button>
             </div> 
    </div>
  )
}
