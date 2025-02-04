import { useProductById } from "@/features/products/hooks/useProducts";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function ProductDetail() {
  const router = useRouter();

  const {
    data: productDetail,
    isLoading,
    error,
  } = useProductById(String(router.query.detail));

  const [styleSelector, setStyleSelector] = useState(
    productDetail?.colorOptions[0]
  );
  const [capacitySelector, setCapacitySelector] = useState(
    productDetail?.storageOptions[0]
  );

  if (error || !productDetail) return <p>No se encontro el telefono.</p>;

  return (
    <section className="detail-view">
      <div>
        <div>
          <img
            className="detail-view__image-url"
            src={styleSelector?.imageUrl}
            alt=""
          />
        </div>

        <div>
          <h3 className="detail-view__product-name">{productDetail?.name}</h3>
          <p className="detail-view__product-price">
            From {productDetail?.basePrice} EUR
          </p>
        </div>

        <div className="detail-view__phone-selectors">
          <section>
            <p>Storage ¿hOW MUCH SPACE DO YOU NEED?</p>
            <div className="detail-view__feature-box">
              {productDetail?.storageOptions.map((storage: any) => (
                <div
                  onClick={() => setCapacitySelector(storage)}
                  className="detail-view__capacity-box"
                  style={{
                    borderColor:
                      storage?.capacity === capacitySelector?.capacity
                        ? "black"
                        : "",
                  }}
                >
                  <p>{storage.capacity}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="Color">
            <p>color. pick your favourite.</p>
            <div className="detail-view__feature-box">
              {productDetail?.colorOptions.map((style: any) => (
                <div
                  className="detail-view__color-box"
                  onClick={() => setStyleSelector(style)}
                  style={{
                    backgroundColor: style.hexCode,
                    borderColor:
                      style?.hex === styleSelector?.hex ? "#000" : "",
                  }}
                />
              ))}
            </div>
            <p>{styleSelector?.name}</p>
          </section>
          <button className="detail-view__add-cart">AÑADIR</button>
        </div>
      </div>
    </section>
  );
}
