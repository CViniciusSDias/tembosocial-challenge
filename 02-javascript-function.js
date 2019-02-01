function getTopTen(data) {
    const withResponses = data.filter(line => line.Responses >= 1);

    withResponses.sort((a, b) => {
        const responseDiff = b.Responses - a.Responses;
        return responseDiff !== 0
            ? responseDiff
            : a.name < b.name ? -1 : 1;
    });

    return withResponses.slice(0, 10);
}

