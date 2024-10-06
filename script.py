import json
import csv

def json_to_csv(json_file_path, csv_file_path):
    # Leer el archivo JSON
    with open(json_file_path, 'r') as json_file:
        json_data = json.load(json_file)
    
    # Extraer el header y los datos
    header = json_data[0]['header']
    data_values = json_data[0]['data']
    
    # Obtener los parámetros de la grilla
    nx = header['nx']
    ny = header['ny']
    la1 = header['la1']
    la2 = header['la2']
    lo1 = header['lo1']
    lo2 = header['lo2']
    dx = header['dx']
    dy = header['dy']
    
    # Verificar que la cantidad de datos coincide con nx * ny
    if len(data_values) != nx * ny:
        raise ValueError("La cantidad de datos no coincide con nx * ny.")
    
    # Generar listas de latitudes y longitudes
    latitudes = [la1 - dy * i for i in range(ny)]
    longitudes = [lo1 + dx * j for j in range(nx)]
    
    # Escribir el archivo CSV
    with open(csv_file_path, 'w', newline='') as csv_file:
        csv_writer = csv.writer(csv_file)
        # Escribir el encabezado
        csv_writer.writerow(['latitude', 'longitude', 'value_pm2.5'])
        
        # Iterar sobre los datos y escribir en el CSV
        index = 0
        for i in range(ny):
            lat = latitudes[i]
            for j in range(nx):
                lon = longitudes[j]
                value = data_values[index]
                csv_writer.writerow([lat, lon, value])
                index += 1

# Uso del script
json_file_path = 'response.json'  # Reemplaza con la ruta a tu archivo JSON
csv_file_path = 'pm25_data.csv'  # Reemplaza con la ruta donde quieres guardar el CSV

json_to_csv(json_file_path, csv_file_path)

print(f"Archivo CSV generado en: {csv_file_path}")
