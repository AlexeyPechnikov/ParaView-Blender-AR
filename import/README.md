# Blender data import

See [ParaView data export](https://github.com/mobigroup/ParaView-Blender/tree/master/export) for details how to properly export data from ParaView.

## Import colored isosurface or DEM surface with image on it as .PLY file

* Use File -> Import -> Stanford (.ply) to load the file.
* Use Object -> Set Origin -> Origin to Geometry to fill "Object Properties" tab.
* Set Location X,Y,Z to 0 and Scale X,Y to 1e-4 and Scale Z to the same or some different value (1e-2 for the screenshot below).

![](Blender_import_ply.png)

## Prepare isosurface from .STL/.PLY file to use for simulations

Use Meshlab to automatically fix input file and MeshMixer for some manual manipulations if needed. We could use MeshMixer's Extrusion tool with Offset=500mm and Density=50 (20 by default produces permeable surface sometimes) and Direction=Normal to build Effector for Blender's fluid simulation (use as Effector Type=Collision and Planar and Surface Thickness=0).


