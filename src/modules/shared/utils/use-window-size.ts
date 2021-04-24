import { useEffect, useState } from 'react';

interface WindowSize {
    width: Number | undefined,
    height: Number | undefined,
}

export const useWindowSize = (): WindowSize =>
{
    const isClient = typeof window === 'object';

    const getSize = () => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const handleResize = () => {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return {
        width: windowSize.width,
        height: windowSize.height
    };
}
