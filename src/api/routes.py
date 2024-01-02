"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Tool
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import os 
import json

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

tool_path = os.path.join(os.path.dirname(__file__), "tools.json")

@api.route("/populate", methods=["GET"])
def personal_population():
    with open(tool_path, "r") as file:
        data = json.load(file)
        file.close

        for tool in data:
            tool = Tool(
                name=tool["name"],
                category=tool["category"],
                creator=tool["creator"],
                website=tool["website"],
                description=tool["description"],
            )
            db.session.add(tool)
            try:
                db.session.commit()
            except Exception as error:
                print("error:", error.args)
                return jsonify("rodo fallo"), 500
        
    return jsonify("todo funciono"), 201
        
#get all tools
@api.route('/tools', methods=['GET'])
def get_tools():
    tools = Tool.query.all()
    return jsonify(list(map(lambda tool : tool.serialize(), tools))), 200

#get tool by id
@api.route('/tools/<int:id>', methods=['GET'])
def get_tool(id):
    tool = Tool.query.filter_by(id=id).one_or_none()
    if tool:
        return jsonify(tool.serialize()), 200
    else: 
        return jsonify({"error":"no tool found"}), 400

#post tool
@api.route('/addtool', methods=['POST'])
def addtool():
    body = request.json
    name = body.get("name")
    creator = body.get("creator")
    description = body.get("description")
    website = body.get("website")
    category = body.get("category")

    if name is None or creator is None or description is None or website is None or category is None:
        return jsonify({"error":"bad request"}), 400
    
    tool = Tool(name=name, creator=creator, description=description, website=website, category=category)
    db.session.add(tool)

    try:
        db.session.commit()
        return jsonify({"message":"tool added"}), 201
    except Exception as error:
        db.session.rollback()
        return jsonify({"error":f"{error}"})

#edit tool
@api.route('/edit_tool/<int:id>', methods=['PUT'])
def edittool(id):
    body = request.json
    name = body.get("name")
    creator = body.get("creator")
    description = body.get("description")
    website = body.get("website")
    category = body.get("category")
    tool = Tool.query.filter_by(id=id).one_or_none()

    if name is None or creator is None or description is None or website is None or category is None:
        return jsonify({"error":"bad request"}), 400
    
    tool.name = name
    tool.creator = creator
    tool.description = description
    tool.website = website
    tool.category = category

    try:
        db.session.commit()
        return jsonify({"messaage":"tool edited"})
    except Exception as error:
        db.session.rollback()
        return jsonify({"error":f"{error}"})
