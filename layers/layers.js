var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_exemple_tracetracks_1 = new ol.format.GeoJSON();
var features_exemple_tracetracks_1 = format_exemple_tracetracks_1.readFeatures(json_exemple_tracetracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_exemple_tracetracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_exemple_tracetracks_1.addFeatures(features_exemple_tracetracks_1);
var lyr_exemple_tracetracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_exemple_tracetracks_1, 
                style: style_exemple_tracetracks_1,
                interactive: true,
                title: '<img src="styles/legend/exemple_tracetracks_1.png" /> exemple_trace — tracks'
            });
var format_Oiseaux2_2 = new ol.format.GeoJSON();
var features_Oiseaux2_2 = format_Oiseaux2_2.readFeatures(json_Oiseaux2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oiseaux2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oiseaux2_2.addFeatures(features_Oiseaux2_2);
var lyr_Oiseaux2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Oiseaux2_2, 
                style: style_Oiseaux2_2,
                interactive: true,
                title: '<img src="styles/legend/Oiseaux2_2.png" /> Oiseaux2'
            });
var format_oiseaux_3 = new ol.format.GeoJSON();
var features_oiseaux_3 = format_oiseaux_3.readFeatures(json_oiseaux_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oiseaux_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oiseaux_3.addFeatures(features_oiseaux_3);
var lyr_oiseaux_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_oiseaux_3, 
                style: style_oiseaux_3,
                interactive: true,
                title: '<img src="styles/legend/oiseaux_3.png" /> oiseaux'
            });
var format_points_ecoute_4 = new ol.format.GeoJSON();
var features_points_ecoute_4 = format_points_ecoute_4.readFeatures(json_points_ecoute_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_ecoute_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_ecoute_4.addFeatures(features_points_ecoute_4);
var lyr_points_ecoute_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_ecoute_4, 
                style: style_points_ecoute_4,
                interactive: true,
                title: '<img src="styles/legend/points_ecoute_4.png" /> points_ecoute'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_exemple_tracetracks_1.setVisible(true);lyr_Oiseaux2_2.setVisible(true);lyr_oiseaux_3.setVisible(true);lyr_points_ecoute_4.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_exemple_tracetracks_1,lyr_Oiseaux2_2,lyr_oiseaux_3,lyr_points_ecoute_4];
lyr_exemple_tracetracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Oiseaux2_2.set('fieldAliases', {'Nom': 'Nom', 'Nombre': 'Nombre', 'contact': 'contact', 'Certitude': 'Certitude', });
lyr_oiseaux_3.set('fieldAliases', {'Nom': 'Nom', 'Nombre': 'Nombre', 'contact': 'contact', 'Certitude': 'Certitude', 'latitude': 'latitude', 'longitude': 'longitude', 'qr code': 'qr code', });
lyr_points_ecoute_4.set('fieldAliases', {'Num_point': 'Num_point', });
lyr_exemple_tracetracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Oiseaux2_2.set('fieldImages', {'Nom': 'TextEdit', 'Nombre': 'Range', 'contact': 'TextEdit', 'Certitude': 'Range', });
lyr_oiseaux_3.set('fieldImages', {'Nom': 'TextEdit', 'Nombre': 'Range', 'contact': 'TextEdit', 'Certitude': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'qr code': 'ExternalResource', });
lyr_points_ecoute_4.set('fieldImages', {'Num_point': 'Range', });
lyr_exemple_tracetracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Oiseaux2_2.set('fieldLabels', {'Nom': 'no label', 'Nombre': 'no label', 'contact': 'no label', 'Certitude': 'no label', });
lyr_oiseaux_3.set('fieldLabels', {'Nom': 'no label', 'Nombre': 'no label', 'contact': 'no label', 'Certitude': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'qr code': 'inline label', });
lyr_points_ecoute_4.set('fieldLabels', {'Num_point': 'no label', });
lyr_points_ecoute_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});