import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { MdOutlineDelete } from "react-icons/md";

const ShoppingCartViewScreen = () => {
  const [breadcrumbItems] = useState([
    { label: "Shop", path: "/products" },
    { label: "Cart & Checkout", path: "/cart" },
  ]);

  const { items, totalItems, totalPrice, increase, decrease, removeItem, clearCart } = useCart();
  const cartList = Object.values(items);

  return (
    <div className="app-container flex flex-col h-full">
      <div className="nav-container flex-1">
        <Navbar
          pageIcon="cart"
          showSearchBar={false}
          showmenuOtions={false}
          breadcrumbItems={breadcrumbItems}
          showCartIcon={false}
          userIconType="user-icon-rounded"
        />

        <main className="container mx-auto px-4 py-8 max-w-3xl">
          <h1 className="text-2xl font-semibold text-slate-900 mb-6">
            Your Cart {totalItems > 0 && `(${totalItems} items)`}
          </h1>

          {cartList.length === 0 ? (
            <div className="text-center py-24 text-slate-400">
              <p className="text-lg">Your cart is empty.</p>
              <a href="/products" className="mt-4 inline-block text-sm text-slate-900 underline">
                Continue shopping
              </a>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                {cartList.map(({ product, quantity }) => (
                  <div
                    key={product._id}
                    className="flex items-center gap-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-4"
                  >
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-20 h-20 object-cover rounded-xl bg-slate-50 flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 uppercase tracking-wider">
                        {product.category}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 truncate">
                        {product.title}
                      </p>
                      <p className="text-sm text-slate-500">₹{product.price}</p>
                    </div>

                    <div className="item-cart__counter flex-shrink-0">
                      <button
                        type="button"
                        className="item-cart__icon-btn"
                        onClick={() => decrease(product._id)}
                        aria-label={quantity === 1 ? "Remove item" : "Decrease quantity"}
                      >
                        {quantity === 1
                          ? <MdOutlineDelete size={18} />
                          : <span>−</span>
                        }
                      </button>
                      <span className="item-cart__count">{quantity}</span>
                      <button
                        type="button"
                        className="item-cart__icon-btn"
                        onClick={() => increase(product._id)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm font-semibold text-slate-900 w-20 text-right flex-shrink-0">
                      ₹{product.price * quantity}
                    </p>

                    <button
                      type="button"
                      className="text-slate-300 hover:text-red-400 transition flex-shrink-0"
                      onClick={() => removeItem(product._id)}
                      aria-label="Remove item"
                    >
                      <MdOutlineDelete size={20} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6 flex flex-col gap-3">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Total items</span>
                  <span>{totalItems}</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-slate-900">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    type="button"
                    className="item-card__button item-card__button--secondary flex-1"
                    onClick={clearCart}
                  >
                    Clear cart
                  </button>
                  <button
                    type="button"
                    className="item-card__button item-card__button--primary flex-1"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCartViewScreen;
