export default function CartItem({ item, onAdd, onDecrease, onDelete }) {
    return (
        <article className="flex min-h-[52px] items-center gap-2 border border-[#7db8b2] p-2 sm:gap-[14px]">
            <span className="min-w-[60px] rounded-full bg-gradient-to-br from-[#2aa198] to-[#0f766e] px-[14px] py-2 text-center text-sm text-white">
                {item.name}
            </span>
            <span className="min-w-5 border border-[#a8d1cc] px-1 py-0.5 text-center">
                {item.amount}
            </span>
            <button
                className="min-w-[22px] cursor-pointer border border-[#9ed5bd] bg-white text-[#216d4e]"
                onClick={onAdd}
                type="button"
            >
                +
            </button>
            <button
                className="min-w-[22px] cursor-pointer border border-[#e4b7b7] bg-white text-[#9d4646] disabled:cursor-not-allowed disabled:opacity-55"
                disabled={item.amount <= 1}
                onClick={onDecrease}
                type="button"
            >
                -
            </button>
            <button
                className="ml-1 cursor-pointer border border-[#e0b0b0] bg-white px-2 py-[3px] text-[#9d4646]"
                onClick={onDelete}
                type="button"
            >
                Delete
            </button>
        </article>
    );
}
