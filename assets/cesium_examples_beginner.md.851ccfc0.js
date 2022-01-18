import{_ as i,c as a,e as s,a as e,b as t,r,o}from"./app.9c06079b.js";const Q='{"title":"Beginner","description":"Beginner","frontmatter":{"title":"Beginner","head":[["meta",{"name":"description","content":"Beginner"}],["meta",{"name":"keywords","content":"cesium Beginner"}]]},"headers":[{"level":2,"title":"3D Tiles Feature Styling(3D\u74E6\u7247\u7279\u6027\u8BBE\u8BA1)","slug":"3d-tiles-feature-styling3d"},{"level":2,"title":"ArcGis MapServer","slug":"arcgis-mapserver"},{"level":2,"title":"ArcGIS Tiled Elevation Terrain","slug":"arcgis-tiled-elevation-terrain"},{"level":2,"title":"Callback Property","slug":"callback-property"},{"level":2,"title":"Billboards(\u5E7F\u544A\u724C)","slug":"billboards"},{"level":2,"title":"Cardboard(\u5361\u677F)","slug":"cardboard"},{"level":2,"title":"Cesium OSM Buildings(cesium\u5F00\u6E90\u63A5\u5230\u5730\u56FE\u5EFA\u7B51)","slug":"cesium-osm-buildingscesium"},{"level":2,"title":"Cesium Widget","slug":"cesium-widget"},{"level":2,"title":"Clock","slug":"clock"},{"level":2,"title":"Google Earth Enterprise","slug":"google-earth-enterprise"},{"level":2,"title":"Imagery Color To Alpha","slug":"imagery-color-to-alpha"},{"level":2,"title":"Imagery Layers Split","slug":"imagery-layers-split"},{"level":2,"title":"Imagery Layers Texture Filters","slug":"imagery-layers-texture-filters"},{"level":2,"title":"Imagery Layers","slug":"imagery-layers"},{"level":2,"title":"Labels(\u6807\u7B7E)","slug":"labels"},{"level":2,"title":"Map Pins","slug":"map-pins"},{"level":2,"title":"Multiple Synced Views","slug":"multiple-synced-views"},{"level":2,"title":"Offine","slug":"offine"},{"level":2,"title":"Particle System Fireworks","slug":"particle-system-fireworks"},{"level":2,"title":"Particle System Tails","slug":"particle-system-tails"},{"level":2,"title":"Particle System Weather","slug":"particle-system-weather"},{"level":2,"title":"Particle System","slug":"particle-system"},{"level":2,"title":"Points(\u70B9)","slug":"points"},{"level":2,"title":"Boxes(\u76D2)","slug":"boxes"},{"level":2,"title":"Circles and Ellipses(\u5708\u548C\u692D\u5706)","slug":"circles-and-ellipses"},{"level":2,"title":"Corridor(\u8D70\u5ECA)","slug":"corridor"},{"level":2,"title":"Cylinder(\u5706\u67F1)","slug":"cylinder"},{"level":2,"title":"Polygon(\u591A\u8FB9\u5F62)","slug":"polygon"},{"level":2,"title":"Polylines(\u591A\u6BB5\u7EBF)","slug":"polylines"},{"level":2,"title":"Polyline Volumes(\u7EBF\u4F53\u79EF)","slug":"polyline-volumes"},{"level":2,"title":"Spheres and Ellipsoids(\u7403\u548C\u692D\u5706\u4F53)","slug":"spheres-and-ellipsoids"},{"level":2,"title":"Walls(\u5899)","slug":"walls"},{"level":2,"title":"Planes(\u5E73\u9762)","slug":"planes"},{"level":2,"title":"Models(\u6A21\u578B)","slug":"models"}],"relativePath":"cesium/examples/beginner.md","lastUpdated":1642523331220}',h={},d=e("h2",{id:"3d-tiles-feature-styling3d",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#3d-tiles-feature-styling3d"},"#"),t(" 3D Tiles Feature Styling(3D\u74E6\u7247\u7279\u6027\u8BBE\u8BA1)")],-1),n=e("h2",{id:"arcgis-mapserver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#arcgis-mapserver"},"#"),t(" ArcGis MapServer")],-1),c=e("h2",{id:"arcgis-tiled-elevation-terrain",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#arcgis-tiled-elevation-terrain"},"#"),t(" ArcGIS Tiled Elevation Terrain")],-1),g=e("h2",{id:"callback-property",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#callback-property"},"#"),t(" Callback Property")],-1),u=e("h2",{id:"billboards",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#billboards"},"#"),t(" Billboards(\u5E7F\u544A\u724C)")],-1),y=e("h2",{id:"cardboard",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cardboard"},"#"),t(" Cardboard(\u5361\u677F)")],-1),p=e("h2",{id:"cesium-osm-buildingscesium",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cesium-osm-buildingscesium"},"#"),t(" Cesium OSM Buildings(cesium\u5F00\u6E90\u63A5\u5230\u5730\u56FE\u5EFA\u7B51)")],-1),m=e("h2",{id:"cesium-widget",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cesium-widget"},"#"),t(" Cesium Widget")],-1),_=e("h2",{id:"clock",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clock"},"#"),t(" Clock")],-1),b=e("h2",{id:"google-earth-enterprise",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google-earth-enterprise"},"#"),t(" Google Earth Enterprise")],-1),f=e("h2",{id:"imagery-color-to-alpha",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#imagery-color-to-alpha"},"#"),t(" Imagery Color To Alpha")],-1),v=e("h2",{id:"imagery-layers-split",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#imagery-layers-split"},"#"),t(" Imagery Layers Split")],-1),x=e("h2",{id:"imagery-layers-texture-filters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#imagery-layers-texture-filters"},"#"),t(" Imagery Layers Texture Filters")],-1),P=e("h2",{id:"imagery-layers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#imagery-layers"},"#"),t(" Imagery Layers")],-1),w=e("h2",{id:"labels",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#labels"},"#"),t(" Labels(\u6807\u7B7E)")],-1),S=e("h2",{id:"map-pins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#map-pins"},"#"),t(" Map Pins")],-1),M=e("h2",{id:"multiple-synced-views",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#multiple-synced-views"},"#"),t(" Multiple Synced Views")],-1),C=e("h2",{id:"offine",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#offine"},"#"),t(" Offine")],-1),E=e("h2",{id:"particle-system-fireworks",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#particle-system-fireworks"},"#"),t(" Particle System Fireworks")],-1),k=e("h2",{id:"particle-system-tails",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#particle-system-tails"},"#"),t(" Particle System Tails")],-1),B=e("h2",{id:"particle-system-weather",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#particle-system-weather"},"#"),t(" Particle System Weather")],-1),L=e("h2",{id:"particle-system",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#particle-system"},"#"),t(" Particle System")],-1),W=e("h2",{id:"points",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#points"},"#"),t(" Points(\u70B9)")],-1),T=e("h2",{id:"boxes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#boxes"},"#"),t(" Boxes(\u76D2)")],-1),G=e("h2",{id:"circles-and-ellipses",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#circles-and-ellipses"},"#"),t(" Circles and Ellipses(\u5708\u548C\u692D\u5706)")],-1),I=e("h2",{id:"corridor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#corridor"},"#"),t(" Corridor(\u8D70\u5ECA)")],-1),V=e("h2",{id:"cylinder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cylinder"},"#"),t(" Cylinder(\u5706\u67F1)")],-1),N=e("h2",{id:"polygon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#polygon"},"#"),t(" Polygon(\u591A\u8FB9\u5F62)")],-1),X=e("h2",{id:"polylines",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#polylines"},"#"),t(" Polylines(\u591A\u6BB5\u7EBF)")],-1),q=e("h2",{id:"polyline-volumes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#polyline-volumes"},"#"),t(" Polyline Volumes(\u7EBF\u4F53\u79EF)")],-1),j=e("h2",{id:"spheres-and-ellipsoids",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spheres-and-ellipsoids"},"#"),t(" Spheres and Ellipsoids(\u7403\u548C\u692D\u5706\u4F53)")],-1),A=e("h2",{id:"walls",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#walls"},"#"),t(" Walls(\u5899)")],-1),J=e("h2",{id:"planes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#planes"},"#"),t(" Planes(\u5E73\u9762)")],-1),R=e("h2",{id:"models",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#models"},"#"),t(" Models(\u6A21\u578B)")],-1);function F(O,z,Y,K,Z,D){const l=r("CodePen");return o(),a("div",null,[d,s(l,{title:"feature-styling",slug:"ExwQRrP",height:"480"}),n,s(l,{title:"ArcGis-MapServer-imagery-provider",slug:"XWeZxRL",height:"480"}),c,s(l,{title:"ArcGIS-TiledElevation-terrain-provider",slug:"abLqRyb",height:"480"}),g,s(l,{title:"CallbackProperty",slug:"poWaQVg",height:"480"}),u,s(l,{title:"billboards",slug:"KKXMGrw",height:"480"}),y,s(l,{title:"cardboard",slug:"yLzjeZo",height:"480"}),p,s(l,{title:"cesium-OSM-buildings",slug:"XWeBqWJ",height:"480"}),m,s(l,{title:"cesium-wedget",slug:"eYGjrNY",height:"480"}),_,s(l,{title:"clock",slug:"MWEBGPK",height:"480"}),b,s(l,{title:"Google-Earth-Enterprise",slug:"xxXJjmL",height:"480"}),f,s(l,{title:"Imagery-Color-To-Alpha",slug:"yLzqqbq",height:"480"}),v,s(l,{title:"Imagery-layers-Split",slug:"xxXaXvy",height:"480"}),x,s(l,{title:"Imagery-Layers-Texture-Filters",slug:"xxXaXvy",height:"480"}),P,s(l,{title:"Imagery-Layers",slug:"bGoxZKr",height:"480"}),w,s(l,{title:"labels",slug:"NWadyRa",height:"480"}),S,s(l,{title:"Map-Labels",slug:"MWEqRNa",height:"480"}),M,s(l,{title:"Multiple-Synced-Views",slug:"BawqJwr",height:"480"}),C,s(l,{title:"Offine",slug:"VwMEyyP",height:"480"}),E,s(l,{title:"Particle-System-Fireworks",slug:"poWYddo",height:"480"}),k,s(l,{title:"Particle-System-Tails",slug:"ZEXZEJY",height:"480"}),B,s(l,{title:"Particle-System-Weather",slug:"MWERoJM",height:"480"}),L,s(l,{title:"Particle-System",slug:"MWERoJM",height:"480"}),W,s(l,{title:"points",slug:"JjrXdPN",height:"480"}),T,s(l,{title:"boxes",slug:"PoJNWzq",height:"480"}),G,s(l,{title:"circle and ellipses",slug:"eYGZgjj",height:"480"}),I,s(l,{title:"corridor",slug:"dyVMjzL",height:"480"}),V,s(l,{title:"corridor",slug:"YzrqRzB",height:"480"}),N,s(l,{title:"corridor",slug:"VwMaVRw",height:"480"}),X,s(l,{title:"corridor",slug:"BawKbXW",height:"480"}),q,s(l,{title:"polyline-volumes",slug:"oNGLvMq",height:"480"}),j,s(l,{title:"rectangles",slug:"JjrKNmr",height:"480"}),A,s(l,{title:"walls",slug:"rNGLmgy",height:"480"}),J,s(l,{title:"planes",slug:"YzrNeOp",height:"480"}),R,s(l,{title:"Models",slug:"wvrgmXO",height:"480"})])}var U=i(h,[["render",F]]);export{Q as __pageData,U as default};
