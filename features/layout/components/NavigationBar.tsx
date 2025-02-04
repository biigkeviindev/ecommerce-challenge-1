import { useRouter } from "next/router";

export default function NavigationBar() {
  const { push } = useRouter();

  return (
    <div onClick={() => push("cart")} className="navigation-bar">
      <img src="/Logo.svg" alt="Logo" />
      <img className="navigation-bar__icon" src="/Cart.svg" alt="Logo" />
    </div>
  );
}
