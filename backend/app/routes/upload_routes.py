from flask import Blueprint, request, jsonify
import os
import logging
from app.services.log_parser import parse_log_file
from app.services.analysis import analyze_logs

upload_bp = Blueprint("upload", __name__)

@upload_bp.route("/upload", methods=["POST"])
def upload_log():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    file_path = os.path.join("app/static/uploads", file.filename)
    file.save(file_path)

    logging.info(f"File uploaded: {file.filename}")

    parsed_logs = parse_log_file(file_path)
    analysis = analyze_logs(parsed_logs)

    return jsonify(analysis)
