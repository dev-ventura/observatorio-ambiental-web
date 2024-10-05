function csvToJson(csv) {
    const csv1 = csv.replace("latitude", "lat");
    const csv2 = csv1.replace("longitude", "lng");
    const lines = csv2.trim().split('\n');
    const headers = lines[0].split(',');
    const jsonData = [];

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');

        headers.forEach((header, index) => {
            obj[header] = currentLine[index];
            obj.size = "0.25";
        });

        jsonData.push(obj);
    }

    return jsonData;
}

export {
    csvToJson
}