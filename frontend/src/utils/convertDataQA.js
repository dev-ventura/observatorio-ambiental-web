function csvToJson(csv) {
    // Eliminar el BOM si está presente
    if (csv.charCodeAt(0) === 0xFEFF) {
      csv = csv.substr(1);
    }
  
    // Reemplazar los nombres de los encabezados
    csv = csv.replace(/latitude/g, 'lat').replace(/longitude/g, 'lng');
  
    // Dividir las líneas considerando posibles retornos de carro
    const lines = csv.trim().split(/\r?\n/);
    const headers = lines[0].trim().split(',').map(h => h.trim());
  
    console.log('Headers:', headers); // Verificar los encabezados
  
    const jsonData = [];
  
    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].trim();
      if (!currentLine) continue; // Saltar líneas vacías
  
      const values = currentLine.split(',');
  
      if (values.length !== headers.length) {
        console.warn(`Línea ${i} tiene ${values.length} valores, se esperaban ${headers.length}. Se omitirá esta línea.`);
        continue; // Omitir líneas con columnas incompletas
      }
  
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        const header = headers[j];
        let value = values[j].trim();
  
        // Convertir a número si es necesario
        if (header === 'lat' || header === 'lng' || header === 'value_pm25') {
          value = parseFloat(value);
        }
  
        obj[header] = value;
      }
  
      if (isNaN(obj['value_pm25'])) {
        console.warn(`value_pm25 es NaN en la línea ${i}.`);
      }
  
      obj.size = obj['value_pm25'] / 100; // Ajusta según sea necesario
      jsonData.push(obj);
    }
  
    return jsonData;
  }
  
  export { csvToJson };
  