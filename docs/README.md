<!-- Import the component -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<style>
model-viewer {
  width: 500px;
  height: 300px;
}
</style>
[![View on GitHub](https://img.shields.io/badge/GitHub-View%20on%20GitHub-blue)](https://github.com/AlexeyPechnikov/geo3d)
[![Support on Patreon](https://img.shields.io/badge/Patreon-Support-orange.svg)](https://www.patreon.com/pechnikov)
[![ChatGPT Assistant](https://img.shields.io/badge/ChatGPT-Assistant-green?logo=openai)](https://geo3d.dev/ai)
[![AR/VR at geo3d.dev](https://img.shields.io/badge/AR%2FVR-geo3d.dev%2Far-yellow)](https://geo3d.dev/ar)

## Augmented Reality (AR) Geological Model of Tambora Volcano Structure, Sumbawa, Indonesia

This geological density inversion model built by custom software and processed in ParaView and post-prorecessed in Blender to build the AR scene. Here we are able to see Tambora volcano magma cameras and connections to neighboring Rinjani volcano. See our GitHub page [Minahasa project](https://github.com/mobigroup/ParaView-Blender-AR/tree/master/Tambora) and YouTube video [Blender Tambora Volcano Structural Model and Plume Simulation, Indonesia](https://www.youtube.com/watch?v=0rp30Ez1s1Y)

<div><model-viewer
    loading="eager"
    src="Tambora.glb"
    ios-src="Tambora.usdz"
    poster="Tambora.jpg"
    ar
    ar-modes="webxr scene-viewer quick-look fallback"
    camera-controls
    alt="3D model"
/></div>

## Augmented Reality (AR) Geological Model of Lahendong Geothermal Reservoir on Minahasa Compartment, North Sulawesi, Indonesia

We use published Lahendong well temperatures (see links on our GitHub repository) to map the temperatures: blue (below 150°C), white (between 150-250°C), red (up to 350°C). This geological inversion model built by custom software and processed in ParaView and post-prorecessed in Blender to build the AR scene. Here we clearly see drill holes outside of the reservoir which are cold (blue). The model allows to correct new drill locations to take the most advantage of Indonesia geothermal potential. See our GitHub page [Minahasa project](https://github.com/mobigroup/ParaView-Blender-AR/tree/master/Minahasa) and YouTube video [Enhanced Geothermal Model for Minahasa Compartment and Lahendong Geothermal Field](https://m.youtube.com/watch?v=hQPmpvsdppM)

<div><model-viewer
    src="Minahasa.glb"
    ios-src="Minahasa.usdz"
    poster="Minahasa.jpg"
    ar
    ar-modes="webxr scene-viewer quick-look fallback"
    camera-controls
    alt="3D model"
/></div>
