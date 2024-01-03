import React from "react";

export const Cards = (props) => {
    const tool = props.tool
    return (
        <>
            <div className="card my-2 text-start bg-dark text-light">
                <div className="card-header">
                   By {tool?.creator}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{tool?.name}</h5>
                    <p className="card-text">{tool?.description}</p>
                    <a href={tool.website} className="btn btn-outline-light">Visit website</a>
                </div>
            </div>
        </>
    )
}