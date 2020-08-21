// Function to cloud mask from the pixel_qa band of Landsat 8 SR data.
function maskL8sr(image) {
  // Bits 3 and 5 are cloud shadow and cloud, respectively.
  var cloudShadowBitMask = 1 << 3;
  var cloudsBitMask = 1 << 5;

  // Get the pixel QA band.
  var qa = image.select('pixel_qa');

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudsBitMask).eq(0));

  // Return the masked image, scaled to reflectance, without the QA bands.
  return image.updateMask(mask).divide(10000)
      .select("B[0-9]*")
      .copyProperties(image, ["system:time_start"]);
}

var point = ee.Geometry.Point(124.826365,1.272965);

// Load Landsat-8 surface reflectance data.
var collection = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
  .filterDate('2015-01-01', '2020-12-31')
  // Pre-filter to get less cloudy granules.
  .filter(ee.Filter.lt('CLOUD_COVER', 10))
  .map(maskL8sr)
  .filterBounds(point.buffer(10000, 1).bounds());

print ("count", collection.size());
var raster = collection.median();

var area = point.buffer(45000, 1).bounds()

// Display as composite
var visParams = {bands: ['B4', 'B3', 'B2'], min: 0, max: 0.3};

Map.centerObject(point,9);
Map.addLayer(raster, visParams, 'Landsat-8 Composite');
Map.addLayer(area, {color: 'FF0000', pointRadius: 100, alpha: 0.2}, 'Minahasa');

// Export the image, specifying scale and region.
Export.image.toDrive({
  image: raster.visualize(visParams),
  description: 'LANDSAT_LC08_Minahasa_buffer45km_45m_32651',
  scale: 45,
  crs: 'EPSG:32651',
  fileFormat: 'GeoTIFF',
  region: area,
  maxPixels: 1e9
});
