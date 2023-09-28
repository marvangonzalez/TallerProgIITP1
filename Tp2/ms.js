const fs = require('fs');

try {
  const contenidoStr = fs.readFileSync('package.json', 'utf-8');
  const contenidoObj = JSON.parse(contenidoStr);
  const size = Buffer.from(contenidoStr).length;

  const info = {
      contenidoStr,
      contenidoObj,
      size,
    }
    
  const ff = JSON.stringify(info)
    
  fs.writeFileSync('texto/ms.txt',ff, 'utf-8')

} catch (error) {
  console.error('Error al leer el archivo:', error);
}

