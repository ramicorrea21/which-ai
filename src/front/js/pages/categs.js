import React from "react";
import { categories } from "../utils/categories";

export const Categs = () =>{
    return(
        <>
        <div className="text-center mt-5">
            <h1>All Categories</h1>
        </div>
        <div className="container d-flex justify-content-center mt-3">
            <div className="row">
                <div className="col w-100">
                    {categories.map((categ) => {
                        return(
                            <p>{categ}</p>
                        )
                    })}
                </div>

            </div>
        </div>
        </>
    )
}