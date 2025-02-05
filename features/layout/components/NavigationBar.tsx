import { useCartContext } from "@/features/cart/hooks/useCartContext";
import { useRouter } from "next/router";

type NavigationBarProps = {
  showCart: boolean | undefined;
};

export default function NavigationBar({ showCart = true }: NavigationBarProps) {
  const { push } = useRouter();
  const { items } = useCartContext();

  return (
    <div className="navigation-bar">
      <img src="/Logo.svg" alt="Logo" />
      <div className="navigation-bar__actions">
        {showCart && (
          <>
            <div
              onClick={() => push("/cart")}
              className="navigation-bar__icon-container"
            >
              <img
                className="navigation-bar__icon"
                src="/cartIcon.svg"
                alt="Logo"
              />
              <p>{items.length || 0}</p>
            </div>
            <img
              onClick={() => push("/")}
              className="navigation-bar__btn-home"
              src="/home.png"
              alt=""
            />
          </>
        )}
      </div>
    </div>
  );
}
