fetch('https://example.com/file.zip')
.then(response => {
  const total = response.headers.get('content-length');
  let loaded = 0;
  
  response.body.on('data', chunk => {
    loaded += chunk.length;
    console.log(`Downloaded ${(loaded / total * 100).toFixed(2)}%`);
  });
  response.body.on('end', () => {
    console.log('Download complete');
  });
});
