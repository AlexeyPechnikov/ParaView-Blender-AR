# ParaView data export

## Export DEM surface with image on it as .PLY file

Unfortunately, there is ParaView bug with .PLY format export coloring and so it's not possible to just save .PLY file and open it in Blender. See for details [PLY export with color with Scalar](https://discourse.paraview.org/t/ply-export-with-color-with-scalar/1804/21)

* Use ParaView data source "NCubeImageOnTopographyBlockSource" from extension [N-Cube ParaView plugin for 3D/4D GIS Data Visualization](https://github.com/mobigroup/ParaView-plugins)
to load DEM with image on it into ParaView as "Unstructured Grid" data format surface.
* Use filter "ExtractSurface" to convert the surface to "Polygonal Mesh".
* Use this "ProgrammableFilter" to save the mesh to Blender-compatible .PLY file.
```
import vtk as VTK
input=self.GetPolyDataInput()
writer=VTK.vtkPLYWriter()

writer.SetInputData(input)
writer.SetFileName("34_geol_karta_Kalmyik.32638.ply")
writer.SetArrayName("colors")

writer.Write()
```
Note: "colors" variable name defined by N-Cube ParaView plugin.
