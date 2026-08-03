import time

cache = {}

def cached(ttl=None):
    """
    ttl=None or ttl=0 → cache forever
    ttl>0             → expire after ttl seconds
    """

    def decorator(func):
        def wrapper(*args, **kwargs):
            key = func.__name__

            # If cached
            if key in cache:
                data, timestamp = cache[key]

                # Infinite caching
                if ttl is None or ttl == 0:
                    print(f"[CACHE HIT] {key} (infinite)")
                    return data

                # TTL-based caching
                if time.time() - timestamp < ttl:
                    print(f"[CACHE HIT] {key}")
                    return data

                print(f"[CACHE EXPIRED] {key}")

            # Cache miss → call function
            print(f"[CACHE MISS] {key}")
            result = func(*args, **kwargs)

            # Store new cache entry
            cache[key] = (result, time.time())
            return result

        return wrapper
    return decorator
