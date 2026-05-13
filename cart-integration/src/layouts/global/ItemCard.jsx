import "../../styles/itemcard.css";
import "../../styles/starrating.css";
import StarRating from "./StarRating";
import { usePermission } from "../../auth/usePermission";
import { useCart } from "../../context/CartContext";
import { MdOutlineDelete } from "react-icons/md";

const ItemCard = ({
  _id,
  image,
  alt,
  category,
  title,
  price,
  subtitle,
  stockText,
  rating,
  note,
  onRate,
  brand,
  onEdit,
  onDelete,
}) => {
  const canEdit   = usePermission("product:update");
  const canDelete = usePermission("product:delete");

  const { addToCart, increase, decrease, getQuantity, isInCart } = useCart();
  const quantity = getQuantity(_id);

  const handleAddToCart = () => {
    addToCart({ _id, image, alt, category, title, price, subtitle, stockText, rating, brand });
  };

  return (
    <article className="item-card">
      <div className="item-card__image">
        <img src={image} alt={alt} />

        {(canEdit || canDelete) && (
          <div className="item-card__overlay">
            {canEdit && (
              <button
                type="button"
                className="item-card__overlay-btn item-card__overlay-btn--edit"
                onClick={() => onEdit && onEdit(_id)}
              >
                ✏️ Edit
              </button>
            )}
            {canDelete && (
              <button
                type="button"
                className="item-card__overlay-btn item-card__overlay-btn--delete"
                onClick={() => onDelete && onDelete(_id)}
              >
                🗑️ Delete
              </button>
            )}
          </div>
        )}
      </div>

      <div className="item-card__body">
        <div className="item-card__header">
          <div>
            <p className="item-card__category">{category}</p>
            <h2 className="item-card__title">{title}</h2>
          </div>
          <span className="item-card__price">₹{price}</span>
        </div>

        <p className="item-card__subtitle">{subtitle}</p>

        <div className="item-card__meta">
          <span className="item-card__stock">{stockText}</span>

          <div className="item-card__rating">
            <StarRating
              rating={Number(rating)}
              isInteractive={false}
              onRate={(value) => onRate && onRate(value, _id)}
            />
            <span className="text-sm text-gray-600">({rating})</span>
          </div>
        </div>

        <p className="item-card__note">{note}</p>

        <div className="item-card__actions">
          <button
            type="button"
            className="item-card__button item-card__button--secondary"
          >
            Quick view
          </button>

          {!isInCart(_id) ? (
            <button
              type="button"
              className="item-card__button item-card__button--primary"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          ) : (
            <div className="item-cart__counter">
              <button
                type="button"
                className="item-cart__icon-btn"
                onClick={() => decrease(_id)}
                aria-label={quantity === 1 ? "Remove from cart" : "Decrease quantity"}
              >
                {quantity === 1 ? <MdOutlineDelete size={18} /> : <span>−</span>}
              </button>

              <span className="item-cart__count">{quantity}</span>

              <button
                type="button"
                className="item-cart__icon-btn"
                onClick={() => increase(_id)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
