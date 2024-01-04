import React from "react";
import { categories } from "../utils/categories";
import { Sections } from "../component/sections";

export const Categs = () =>{
    return(
        <>
        <div className="text-center mt-5">
            <h1>All Categories</h1>
        </div>
        <div className="container d-flex justify-content-center mt-3">
            <div className="row">
                <div className="col w-100">
                    <ul className="list-group list-group-numbered">
                        {categories.map((cat) =>{
                            return(
                                <div key={cat}><Sections category={cat}/></div>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}