import React from "react";
import { categories } from "../utils/categories";

export const Addtool = () => {
    return (
        <>
            <div className="main">
                <div className="container w-75">
                    <h1>Add a tool</h1>
                    <form className="bg-dark text-light p-2" >
                        <div className="form-group  mt-3 mx-3">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                required
                            />
                        </div>
                        <div className="form-group  mt-3 mx-3">
                            <label>Creator</label>
                            <input
                                type="text"
                                className="form-control"
                                name="creator"
                                required
                            />
                        </div>
                        <div className="form-group  mt-3 mx-3">
                            <label>Descripcion</label>
                            <textarea
                                type="text"
                                className="form-control"
                                name="description"
                                required
                            />
                        </div>
                        <div className="form-group  mt-3 mx-3">
                            <label>Category</label>
                            <select 
                            className="form-select">
                             <option>Category</option>
                                {categories.map((cat) =>{
                                    return(
                                        <option>{cat}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-group mt-3 mx-3">
                        </div>
                        <div className="form-group m-3">
                        </div>
                        <div className="form-group m-3">
                            <button  className="btn btn-primary">Add tool</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}