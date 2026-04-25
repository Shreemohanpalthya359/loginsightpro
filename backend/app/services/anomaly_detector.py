import pandas as pd
from sklearn.ensemble import IsolationForest

def detect_anomalies(df):
    """
    Train an Isolation Forest on the logs to detect anomalies based on
    response time and HTTP status code.
    """
    if df is None or df.empty or len(df) < 10:
        return {"anomaly_count": 0, "anomalous_logs": []}

    # Features for anomaly detection
    # We will use 'response_time' and 'status'
    features = df[['response_time', 'status']].copy()
    features.fillna(0, inplace=True)

    # Train the model
    # contamination=0.01 means we expect roughly 1% of traffic to be anomalous
    model = IsolationForest(contamination=0.01, random_state=42)
    predictions = model.fit_predict(features)

    # Predictions: 1 for inliers, -1 for outliers/anomalies
    df['is_anomaly'] = predictions
    anomalies_df = df[df['is_anomaly'] == -1]

    anomaly_count = len(anomalies_df)

    # Sort anomalies by response time to show the most severe ones first
    top_anomalies = anomalies_df.sort_values(by='response_time', ascending=False).head(20)

    anomalous_logs = []
    for _, row in top_anomalies.iterrows():
        log = {
            "timestamp": row['timestamp'].strftime("%Y-%m-%d %H:%M:%S") if pd.notnull(row['timestamp']) else "",
            "ip": row.get('ip', 'Unknown'),
            "method": row.get('method', 'GET'),
            "path": row.get('path', '/'),
            "status": int(row.get('status', 0)),
            "response_time": int(row.get('response_time', 0))
        }
        anomalous_logs.append(log)

    # Drop the temporary column so we don't modify the original df state unnecessarily
    df.drop(columns=['is_anomaly'], inplace=True)

    return {
        "anomaly_count": anomaly_count,
        "anomalous_logs": anomalous_logs
    }
