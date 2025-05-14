"use client";

import CardComponent from "@/app/components/atoms/card/cardComponent";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { Spinner } from "flowbite-react";

export default function Products() {
    const [products, setProducts] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const isCached = useRef(false);

    useEffect(() => {
        const cachedProducts = localStorage.getItem("cachedProducts");

        if (cachedProducts) {
            try {
                isCached.current = true;
                const parsed = JSON.parse(cachedProducts);
                setProducts(parsed.data);
                setLoading(false);
                return;
                
            } catch (e) {
                console.warn("Failed to parse cached products", e);
            }
        }

        // If no valid cache, fetch from API
        const fetchItems = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products?limit=50 ");
                const data = await response.json();
                isCached.current = false;

                if (data?.products?.length > 0) {
                    setProducts(data.products);
                    localStorage.setItem('cachedProducts', JSON.stringify(data));              }
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        console.log("before fetchItems() call")
        fetchItems();
    }, []);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= Math.ceil(products.length / 10) && pageNumber !== page) {
            setPage(pageNumber);
        }
    };

    return (
        <div className="min-h-screen pb-20 sm:p-8 text-black">
            {/* Search Bar */}
            <div className="flex items-center mb-4 bg-white bg-opacity-50 rounded-2xl px-3 py-2">
                <p className="text-xs sm:text-sm md:text-lg py-2 mr-2 w-full">
                    Aquí encontrarás los productos que buscas. ¿Deseas buscar más productos?
                </p>
                <input
                    type="text"
                    placeholder="Buscar productos, marcas..."
                    value={""}
                    onChange={() => {}}
                    className="p-2 border border-gray-300 rounded-md w-full hover:border-gray-500 focus:border-gray-500 focus:outline-none shadow-md"
                />
            </div>

            {/* Title */}
            <div>
                <h1 className="flex items-center justify-center text-base font-semibold text-gray-800">
                    Todos los productos
                </h1>
                <hr className="my-4 border-gray-300" />
            </div>

            {/* Product Grid */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center">
                {loading && !isCached.current ? (
                    <div className="flex flex-col justify-center items-center min-h-[200px]">
                        <Spinner aria-label="Loading..." size="xl" className="text-blue-500" />
                        <span className="text-lg font-medium animate-glow-red-black">
                            Cargando productos...
                        </span>
                    </div>
                ) : products.length > 0 ? (
                    products
                        .slice((page - 1) * 10, page * 10)
                        .map((item: any, index: number) => (
                            <CardComponent
                                key={item.id || index}
                                title={item.title}
                                brand={item.brand}
                                price={item.price}
                                imgSrc={item.thumbnail}
                            />
                        ))
                ) : (
                    <span>No se encontraron productos.</span>
                )}
            </div>

            {/* Pagination */}
            {!loading && products.length > 0 && (
                <section className="pagination flex justify-center items-center gap-2 mt-6">
                    <span
                        onClick={() => handlePageChange(page - 1)}
                        className={`arrow cursor-pointer px-2 ${
                            page === 1 ? "text-gray-400 cursor-not-allowed" : ""
                        }`}
                    >
                        <MdNavigateBefore size={20} />
                    </span>

                    {Array.from({ length: Math.ceil(products.length / 10) }).map((_, i) => (
                        <span
                            className={`page__number px-2 py-1 rounded cursor-pointer ${
                                page === i + 1
                                    ? "selected__page__number bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </span>
                    ))}

                    <span
                        onClick={() => handlePageChange(page + 1)}
                        className={`arrow cursor-pointer px-2 ${
                            page === Math.ceil(products.length / 10)
                                ? "text-gray-400 cursor-not-allowed"
                                : ""
                        }`}
                    >
                        <MdNavigateNext size={20} />
                    </span>
                </section>
            )}
        </div>
    );
}