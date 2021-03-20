#!/bin/sh

usdzconvert \
    Tambora.apple.glb \
    -m Material.Magma -diffuseColor 1,0,0 -opacity 1 -metallic 1 -roughness 0.4 \
    -m Material.Relief -diffuseColor Relief.png -opacity 0.4 -metallic 0 -roughness 1 \
    -m Material.Relief_back -diffuseColor 0.043,0.325,0.271 -opacity 0.4 -metallic 0 -roughness 1 \
    -m Material.Contour -diffuseColor Contour.png -opacity 0.5 -metallic 0 -roughness 1 \
    -m Material.Contour_back -diffuseColor Contour_back.png -opacity 0.5 -metallic 0 -roughness 1 \
    -metersPerUnit 0.5 \
    ../docs/Tambora.usdz
