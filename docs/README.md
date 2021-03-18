<!-- Import the component -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<style>
model-viewer {
  width: 500px;
  height: 300px;
}
</style>

<!-- Change left block -->
<script>
document.querySelector("header h1").textContent = '21st Geology'
this.img = document.createElement("img");
this.img.src = "https://avatars.githubusercontent.com/u/7342379?s=460&u=37e514700d78db61a39b9b298b7e70b63b1f390a&v=4";
src = document.querySelector("p.view");
src.appendChild(this.img);
</script>

## Augmented Reality (AR) Geological Model of Lahendong Geothermal Reservoir on Minahasa Compartment, North Sulawesi, Indonesia

Published Lahendong Well Temperatures mapped as blue (below 150°C), white (between 150-250°C), red (up to 350°C). Our geological inversion model built by custom software and processed in ParaView and post-prorecessed in Blender to build the AR scene. Here we clearly see drill holes outside of the reservoir which are cold (blue). The model allows to correct new drill locations to take the most advantage of Indonesia geothermal potential. See our GitHub page [Minahasa project](https://github.com/mobigroup/ParaView-Blender-AR/tree/master/Minahasa) and YouTube video [Enhanced Geothermal Model for Minahasa Compartment and Lahendong Geothermal Field](https://m.youtube.com/watch?v=hQPmpvsdppM)

<model-viewer
    src="Minahasa.glb"
    ios-src="Minahasa.usdz"
    poster="Minahasa.jpg"
    ar
    ar-modes="webxr scene-viewer quick-look fallback"
    camera-controls
    alt="3D model"
>
