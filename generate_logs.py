import random
from datetime import datetime, timedelta

ips = [f"192.168.1.{i}" for i in range(1, 50)]
methods = ["GET", "POST", "PUT"]
paths = ["/login", "/dashboard", "/api/data", "/logout", "/settings"]
status_codes = [200, 200, 200, 404, 403, 500]
response_times = [50, 80, 120, 200, 350, 500]

start_time = datetime(2025, 1, 20, 9, 0, 0)

with open("large_test.log", "w") as f:
    for i in range(50000):  # 🔥 50,000 lines
        timestamp = start_time + timedelta(seconds=i * random.randint(1, 3))
        ip = random.choice(ips)
        method = random.choice(methods)
        path = random.choice(paths)
        status = random.choice(status_codes)
        response_time = random.choice(response_times)

        log_line = (
            f"{timestamp.strftime('%Y-%m-%d %H:%M:%S')} "
            f"{ip} {method} {path} {status} {response_time}\n"
        )
        f.write(log_line)

print("✅ large_test.log generated with 50,000+ lines")
