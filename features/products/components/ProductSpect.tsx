import React from "react";
import { ProductDetail } from "../types/product";

type ProductSpectProp = {
  detail: ProductDetail;
};

export default function ProductSpect({ detail }: ProductSpectProp) {
  return (
    <section className="product-specs">
      <h2>SPECIFICATIONS</h2>

      <div className="product-specs__list">
        <div className="product-specs__spec-item">
          <div>BRAND</div>
          <div>{detail.brand}</div>
        </div>
        <div className="product-specs__spec-item">
          <div>NAME</div>
          <div>{detail.name}</div>
        </div>
        <div className="product-specs__spec-item">
          <div>DESCRIPTION</div>
          <div>{detail.description}</div>
        </div>
        <div className="product-specs__spec-item">
          <div>SCREEN</div>
          <div>{detail.specs.screen}</div>
        </div>
        <div className="product-specs__spec-item">
          <div>RESOLUTION</div>
          <div>{detail.specs.resolution}</div>
        </div>
        <div className="product-specs__spec-item">
          <div>PROCESSOR</div>
          <div>{detail.specs.processor}</div>
        </div>
        <div className="product-specs__spec-item">
          <div>MAIN CAMERA</div>
          <div>{detail.specs.mainCamera}</div>
        </div>
        <div className="product-specs__spec-item">
          <div>SELFIE CAMERA</div>
          <div>{detail.specs.selfieCamera}</div>
        </div>
        <div className="product-specs__spec-item">
          <div>BATTERY</div>
          <div>{detail.specs.battery}</div>
        </div>
        <div className="product-specs__spec-item">
          <div>OS</div>
          <div>{detail.specs.os}</div>
        </div>
        <div className="product-specs__spec-item">
          <div>SCREEN REFRESH RATE</div>
          <div>{detail.specs.screenRefreshRate}</div>
        </div>
      </div>
    </section>
  );
}
