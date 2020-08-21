// Function to mask clouds using the Sentinel-2 QA band.
function maskS2clouds(image) {
  var qa = image.select('QA60')

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0).and(
             qa.bitwiseAnd(cirrusBitMask).eq(0))

  // Return the masked and scaled data, without the QA bands.
  return image.updateMask(mask).divide(10000)
      .select("B.*")
      .copyProperties(image, ["system:time_start"])
}

var point = ee.Geometry.Point(124.826365,1.272965);

// Load Sentinel-2 surface reflectance data.
var collection = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterDate('2010-01-01', '2020-12-31')
  // Pre-filter to get less cloudy granules.
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
  .map(maskS2clouds)
  .filterBounds(point);

print ("count", collection.size());
var raster = collection.median();

var area = point.buffer(20000, 1).bounds()

// Display as composite
var visParams = {bands: ['B4', 'B3', 'B2'], min: 0, max: 0.3};

Map.centerObject(point,11);
Map.addLayer(raster, visParams, 'Sentinel-2 Composite');
Map.addLayer(area, {color: 'FF0000', pointRadius: 100, alpha: 0.2}, 'Lahendong');

// Export the image, specifying scale and region.
Export.image.toDrive({
  image: raster.visualize(visParams),
  description: 'COPERNICUS_S2_Lahendong_buffer20km_15m_32651',
  scale: 15,
  crs: 'EPSG:32651',
  fileFormat: 'GeoTIFF',
  region: area,
  maxPixels: 1e9
});
