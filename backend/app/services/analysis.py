import pandas as pd
from app.services.anomaly_detector import detect_anomalies

def analyze_logs(logs):
    df = pd.DataFrame(logs)

    total_requests = len(df)
    error_df = df[df["status"] >= 400]

    # Error counts
    error_counts = error_df["status"].value_counts().to_dict()

    # Top IPs
    top_ips = error_df["ip"].value_counts().head(5).to_dict()

    # Hourly errors
    hourly_errors = error_df.groupby(df["timestamp"].dt.hour).size().to_dict()

    # ✅ NEW: Hourly total requests
    hourly_requests = df.groupby(df["timestamp"].dt.hour).size().to_dict()

    # ✅ NEW: Error rate %
    error_rate = {}
    for hour in hourly_requests:
        errors = hourly_errors.get(hour, 0)
        error_rate[hour] = round((errors / hourly_requests[hour]) * 100, 2)

    # ✅ NEW: Endpoint-wise stats
    endpoint_errors = error_df["path"].value_counts().to_dict()

    # ✅ NEW: Response time stats
    avg_response_time = (
        df.groupby("path")["response_time"].mean().round(2).to_dict()
    )

    # ✅ NEW: Anomaly Detection
    anomalies_result = detect_anomalies(df)

    return {
        "total_requests": total_requests,
        "total_errors": len(error_df),
        "error_counts": error_counts,
        "top_ips": top_ips,
        "hourly_errors": hourly_errors,
        "hourly_requests": hourly_requests,
        "error_rate": error_rate,
        "endpoint_errors": endpoint_errors,
        "avg_response_time": avg_response_time,
        "anomaly_count": anomalies_result["anomaly_count"],
        "anomalous_logs": anomalies_result["anomalous_logs"]
    }
