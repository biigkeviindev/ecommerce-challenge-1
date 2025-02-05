import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCartContext } from "@/features/cart/hooks/useCartContext";
import { useProductById } from "@/features/products/hooks/useProducts";
import { useRouter } from "next/router";
import {
  ProductColorOptionType,
  ProductStorageOptionType,
} from "../types/product";

export default function ProductDetail() {
  const router = useRouter();
  const { items, setItems } = useCartContext();

  const {
    data: productDetail,
    isLoading,
    error,
  } = useProductById(String(router.query.detail));

  const [finalPrice, setFinalPrice] = useState<number | undefined>(undefined);
  const [styleSelector, setStyleSelector] = useState<
    ProductColorOptionType | undefined
  >(undefined);
  const [capacitySelector, setCapacitySelector] = useState<
    ProductStorageOptionType | undefined
  >(undefined);

  const defaultImage = productDetail?.colorOptions[0]?.imageUrl;

  const addToCart = () => {
    if (!styleSelector || !capacitySelector) return;

    const itemToAdd = {
      id: uuidv4(),
      image: styleSelector.imageUrl,
      name: productDetail.name,
      customize: {
        color: styleSelector.name,
        capacity: capacitySelector.capacity,
      },
      price: finalPrice,
    };
    setItems([...items, itemToAdd]);
  };

  useEffect(() => {
    let priceFinal = productDetail?.basePrice + capacitySelector?.price;
    setFinalPrice(priceFinal);
  }, [capacitySelector]);

  if (error || !productDetail) return <p>No se encontro el telefono.</p>;

  return (
    <section className="detail-view">
      <div>
        <div>
          <img
            className="detail-view__image-url"
            src={styleSelector ? styleSelector.imageUrl : defaultImage}
            alt=""
          />
        </div>

        <div>
          <h3 className="detail-view__product-name">{productDetail?.name}</h3>
          <p className="detail-view__product-price">
            {finalPrice
              ? `${finalPrice} EUR`
              : `From ${productDetail?.basePrice} EUR`}
          </p>
        </div>

        <div className="detail-view__phone-selectors">
          <section>
            <p>Storage ¿hOW MUCH SPACE DO YOU NEED?</p>
            <div className="detail-view__feature-box">
              {productDetail?.storageOptions.map(
                (storage: ProductStorageOptionType) => (
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
                )
              )}
            </div>
          </section>

          <section className="Color">
            <p>color. pick your favourite.</p>
            <div className="detail-view__feature-box">
              {productDetail?.colorOptions.map(
                (style: ProductColorOptionType) => (
                  <div
                    className="detail-view__color-box"
                    onClick={() => setStyleSelector(style)}
                    style={{
                      backgroundColor: style.hexCode,
                      outline:
                        style?.hexCode === styleSelector?.hexCode
                          ? "2px solid #000000"
                          : "",
                    }}
                  />
                )
              )}
            </div>
            <p>{styleSelector?.name}</p>
          </section>
          <button
            disabled={!styleSelector || !capacitySelector}
            className="detail-view__add-cart"
            onClick={addToCart}
          >
            AÑADIR
          </button>
        </div>
      </div>
    </section>
  );
}
