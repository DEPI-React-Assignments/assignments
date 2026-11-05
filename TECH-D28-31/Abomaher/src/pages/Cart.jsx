import CartItem from "../components/CartItem";

export default function Cart({ items, onAdd, onDecrease, onDelete, onReset }) {
    return (
        <section>
            <div className="grid gap-3">
                {items.length > 0 ? (
                    items.map((item) => (
                        <CartItem
                            item={item}
                            key={item.id}
                            onAdd={() => onAdd(item.id)}
                            onDecrease={() => onDecrease(item.id)}
                            onDelete={() => onDelete(item.id)}
                        />
                    ))
                ) : (
                    <p className="my-2">Your cart is empty.</p>
                )}
            </div>
            <button
                className="mt-5 cursor-pointer border border-[#99c7c2] bg-white px-2 py-[3px] text-[#0f766e]"
                onClick={onReset}
                type="button"
            >
                Reset
            </button>
        </section>
    );
}
