#!/bin/sh

usdzconvert \
    Minahasa.apple.glb \
    -m Material.GEBCO12_47_Reservoir -diffuseColor 0.799,0.421,0.05 -opacity 0.8 -metallic 0 -roughness 1 \
    -m Material.measurements_temp_new -diffuseColor measuments_temp_large.png \
    -m Material.COPERNICUS_S2_Lahendong_50m_32651 -diffuseColor COPERNICUS_S2_Lahendong_50m_32651.png -opacity 0.5 -metallic 0 -roughness 1 \
    -m Material.COPERNICUS_S2_Lahendong_50m_32651.back -diffuseColor 0.043,0.325,0.271 -opacity 0.1 -metallic 0 -roughness 1 \
    -metersPerUnit 0.5 \
    ../docs/Minahasa.usdz
