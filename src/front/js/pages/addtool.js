import React, { useState, useContext } from "react";
import { categories } from "../utils/categories";
import { Context } from "../store/appContext";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";

export const Addtool = () => {
    const navigate = useNavigate()
    const { actions } = useContext(Context)

    const [tool, setTool] = useState({
        name: "",
        creator: "",
        description: "",
        category: "Natural Language Processing",
        website: ""
    })

    const handleChange = (e) => {
        setTool({
            ...tool,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await actions.addTool(tool)
        if (response.status == 201) {
            Swal.fire({
                title: "Good job!",
                text: "Tool Added, you are being redirected home!",
                icon: "success"
            });
            setTimeout(() =>{
                navigate('/')
            }, 1500)
        }
    }


    return (
        <>
            <div className="main">
                <div className="container w-75">
                    <h1 className="text-center">Add a tool</h1>
                    <form className="bg-dark text-light p-2" onSubmit={handleSubmit} autoComplete="off">
                        <div className="form-group  mt-3 mx-3">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={tool.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group  mt-3 mx-3">
                            <label>Creator</label>
                            <input
                                type="text"
                                className="form-control"
                                name="creator"
                                value={tool.creator}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group  mt-3 mx-3">
                            <label>Descripcion</label>
                            <textarea
                                type="text"
                                className="form-control"
                                name="description"
                                value={tool.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group  mt-3 mx-3">
                            <label>Category</label>
                            <select
                                className="form-select"
                                name="category"
                                value={tool.category}
                                onChange={handleChange}
                                required
                            >
                                {categories.map((cat) => {
                                    return (
                                        <option value={cat} key={cat}>{cat}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-group mt-3 mx-3">
                            <label>Website</label>
                            <input
                                type="text"
                                className="form-control"
                                name="website"
                                value={tool.website}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group m-3">
                            <button className="btn btn-primary" type="submit">Add tool</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}