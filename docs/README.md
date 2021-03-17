<script>
document.querySelector("header h1").textContent = '21st Geology'
this.img = document.createElement("img");
this.img.src = "https://avatars.githubusercontent.com/u/7342379?s=460&u=37e514700d78db61a39b9b298b7e70b63b1f390a&v=4";
src = document.querySelector("p.view");
src.appendChild(this.img);
</script>

## Augmented Reality (AR) geological model of Lahendong Geothermal Reservoir on Minahasa Compartment, North Sulawesi, Indonesia

<!-- Import the component -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<style>
model-viewer {
  width: 600px;
  height: 400px;
}
</style>
<model-viewer
    src="Minahasa.glb"
    ios-src="Minahasa.usdz"
    poster="Minahasa.jpg"
    ar
    ar-modes="webxr scene-viewer quick-look fallback"
    camera-controls
    alt="3D model"
>
