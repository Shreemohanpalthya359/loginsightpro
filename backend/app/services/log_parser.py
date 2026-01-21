import logging
from datetime import datetime

def parse_log_file(file_path):
    logs = []
    skipped = 0

    with open(file_path, "r") as f:
        for line in f:
            try:
                parts = line.strip().split()
                timestamp = datetime.strptime(
                    parts[0] + " " + parts[1], "%Y-%m-%d %H:%M:%S"
                )
                logs.append({
                    "timestamp": timestamp,
                    "ip": parts[2],
                    "method": parts[3],
                    "path": parts[4],
                    "status": int(parts[5]),
                    "response_time": int(parts[6])
                })
            except Exception:
                skipped += 1
                logging.warning("Skipped malformed log line")

    logging.info(f"Parsed logs: {len(logs)}, Skipped: {skipped}")
    return logs
