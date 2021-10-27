import React, { useState, useEffect, useRef } from "react";

const useDebounce = (callback, delay, ...otherArgs) => {
    const latestCallback = useRef();
    const [lastCalledAt, setLastCalledAt] = useState(null);

    useEffect(() => {
        latestCallback.current = () => callback(...otherArgs);
    }, [callback, otherArgs]);

    useEffect(() => {
        if (lastCalledAt) {
            const fire = () => {
                setLastCalledAt(null);
                latestCallback.current();
            };

            const fireAt = lastCalledAt + delay;
            const id = setTimeout(fire, fireAt - Date.now());
            return () => clearTimeout(id);
        }
    }, [lastCalledAt, delay]);

    return () => setLastCalledAt(Date.now());
};

export default useDebounce;
