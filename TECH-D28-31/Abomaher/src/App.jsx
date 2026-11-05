import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NavBar from "./layout/NavBar";

const initialItems = [
    { id: 1, name: "Burger", amount: 3 },
    { id: 2, name: "Frise", amount: 2 },
    { id: 3, name: "Cola", amount: 4 },
    { id: 4, name: "Water", amount: 1 },
];

export default function App() {
    const [items, setItems] = useState(initialItems);

    const updateAmount = (id, difference) => {
        setItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id
                    ? { ...item, amount: Math.max(1, item.amount + difference) }
                    : item,
            ),
        );
    };

    const deleteItem = (id) => {
        setItems((currentItems) => currentItems.filter((item) => item.id !== id));
    };

    const cartItemCount = items.length;

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-white text-neutral-800">
                <NavBar cartItemCount={cartItemCount} />
                <main className="p-2">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route
                            path="/cart"
                            element={
                                <Cart
                                    items={items}
                                    onAdd={(id) => updateAmount(id, 1)}
                                    onDecrease={(id) => updateAmount(id, -1)}
                                    onDelete={deleteItem}
                                    onReset={() => setItems([])}
                                />
                            }
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}
