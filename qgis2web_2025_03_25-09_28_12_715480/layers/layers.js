var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_coordUTM_1 = new ol.format.GeoJSON();
var features_coordUTM_1 = format_coordUTM_1.readFeatures(json_coordUTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coordUTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coordUTM_1.addFeatures(features_coordUTM_1);
cluster_coordUTM_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_coordUTM_1
});
var lyr_coordUTM_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_coordUTM_1, 
                style: style_coordUTM_1,
                popuplayertitle: 'coord UTM',
                interactive: true,
                title: '<img src="styles/legend/coordUTM_1.png" /> coord UTM'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_coordUTM_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_coordUTM_1];
lyr_coordUTM_1.set('fieldAliases', {'id': 'id', 'T_pregunt': 'T_pregunt', 'Porc_Co': 'Porc_Co', 'Porc_Inc': 'Porc_Inc', 'video': 'video', 'name': 'name', 'nombre': 'nombre', 'N_pre_c': 'N_pre_c', 'N_pre_i': 'N_pre_i', 'Porc_Tot': 'Porc_Tot', });
lyr_coordUTM_1.set('fieldImages', {'id': 'ExternalResource', 'T_pregunt': 'TextEdit', 'Porc_Co': 'TextEdit', 'Porc_Inc': 'TextEdit', 'video': 'TextEdit', 'name': 'TextEdit', 'nombre': 'TextEdit', 'N_pre_c': '', 'N_pre_i': '', 'Porc_Tot': '', });
lyr_coordUTM_1.set('fieldLabels', {'id': 'no label', 'T_pregunt': 'inline label - always visible', 'Porc_Co': 'inline label - visible with data', 'Porc_Inc': 'inline label - always visible', 'video': 'inline label - always visible', 'name': 'inline label - visible with data', 'nombre': 'inline label - always visible', 'N_pre_c': 'inline label - always visible', 'N_pre_i': 'inline label - always visible', 'Porc_Tot': 'inline label - always visible', });
lyr_coordUTM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});