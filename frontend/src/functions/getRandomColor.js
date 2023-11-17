const lerp = (start, end, t) => start + t * (end - start);

export const getRandomColor = (startColor, endColor, t) => {
    const startRGB = [
        parseInt(startColor.slice(1, 3), 16),
        parseInt(startColor.slice(3, 5), 16),
        parseInt(startColor.slice(5, 7), 16),
    ];

    const endRGB = [
        parseInt(endColor.slice(1, 3), 16),
        parseInt(endColor.slice(3, 5), 16),
        parseInt(endColor.slice(5, 7), 16),
    ];

    const interpolatedRGB = startRGB.map((start, index) =>
        Math.round(lerp(start, endRGB[index], t))
    );

    return `#${interpolatedRGB.map((value) => value.toString(16).padStart(2, '0')).join('')}`;
};