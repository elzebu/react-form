import React from 'react'
import Brands from '../Brands/Brands'
import Tyres from '../Tyres/Tyres'

export default function Home({ brands, tyres, handleBrandClick }) {
    return (
        <div className="row">
          <div className="col">
            <div className="bg-light border p-3">
              <Brands brands={brands} click={handleBrandClick} />
            </div>
          </div>
          <div className="col">
            <div className="bg-light border p-3">
              <Tyres brands={brands} tyres={tyres} />
            </div>
          </div>
        </div>
    )
}