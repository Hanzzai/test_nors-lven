var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_norslven_daro_1 = new ol.format.GeoJSON();
var features_norslven_daro_1 = format_norslven_daro_1.readFeatures(json_norslven_daro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_norslven_daro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_norslven_daro_1.addFeatures(features_norslven_daro_1);
var lyr_norslven_daro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_norslven_daro_1, 
                style: style_norslven_daro_1,
                popuplayertitle: 'norsälven_daro',
                interactive: true,
                title: '<img src="styles/legend/norslven_daro_1.png" /> norsälven_daro'
            });
var format_vattenfrekommster_norslven_2 = new ol.format.GeoJSON();
var features_vattenfrekommster_norslven_2 = format_vattenfrekommster_norslven_2.readFeatures(json_vattenfrekommster_norslven_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vattenfrekommster_norslven_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vattenfrekommster_norslven_2.addFeatures(features_vattenfrekommster_norslven_2);
var lyr_vattenfrekommster_norslven_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vattenfrekommster_norslven_2, 
                style: style_vattenfrekommster_norslven_2,
                popuplayertitle: 'vattenförekommster_norsälven',
                interactive: true,
                title: '<img src="styles/legend/vattenfrekommster_norslven_2.png" /> vattenförekommster_norsälven'
            });
var format_sjar_norslven_daro_3 = new ol.format.GeoJSON();
var features_sjar_norslven_daro_3 = format_sjar_norslven_daro_3.readFeatures(json_sjar_norslven_daro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sjar_norslven_daro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sjar_norslven_daro_3.addFeatures(features_sjar_norslven_daro_3);
var lyr_sjar_norslven_daro_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sjar_norslven_daro_3, 
                style: style_sjar_norslven_daro_3,
                popuplayertitle: 'sjöar_norsälven_daro',
                interactive: true,
                title: '<img src="styles/legend/sjar_norslven_daro_3.png" /> sjöar_norsälven_daro'
            });
var format_vriga_sjar_norslven_daro_4 = new ol.format.GeoJSON();
var features_vriga_sjar_norslven_daro_4 = format_vriga_sjar_norslven_daro_4.readFeatures(json_vriga_sjar_norslven_daro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vriga_sjar_norslven_daro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vriga_sjar_norslven_daro_4.addFeatures(features_vriga_sjar_norslven_daro_4);
var lyr_vriga_sjar_norslven_daro_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vriga_sjar_norslven_daro_4, 
                style: style_vriga_sjar_norslven_daro_4,
                popuplayertitle: 'övriga_sjöar_norsälven_daro',
                interactive: true,
                title: '<img src="styles/legend/vriga_sjar_norslven_daro_4.png" /> övriga_sjöar_norsälven_daro'
            });
var format_mtstationer_norslven_5 = new ol.format.GeoJSON();
var features_mtstationer_norslven_5 = format_mtstationer_norslven_5.readFeatures(json_mtstationer_norslven_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mtstationer_norslven_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mtstationer_norslven_5.addFeatures(features_mtstationer_norslven_5);
var lyr_mtstationer_norslven_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mtstationer_norslven_5, 
                style: style_mtstationer_norslven_5,
                popuplayertitle: 'mätstationer_norsälven',
                interactive: true,
                title: '<img src="styles/legend/mtstationer_norslven_5.png" /> mätstationer_norsälven'
            });
var group_Norslven = new ol.layer.Group({
                                layers: [lyr_norslven_daro_1,lyr_vattenfrekommster_norslven_2,lyr_sjar_norslven_daro_3,lyr_vriga_sjar_norslven_daro_4,lyr_mtstationer_norslven_5,],
                                fold: "open",
                                title: 'Norsälven'});

lyr_OpenStreetMap_0.setVisible(true);lyr_norslven_daro_1.setVisible(true);lyr_vattenfrekommster_norslven_2.setVisible(true);lyr_sjar_norslven_daro_3.setVisible(true);lyr_vriga_sjar_norslven_daro_4.setVisible(true);lyr_mtstationer_norslven_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Norslven];
lyr_norslven_daro_1.set('fieldAliases', {'id': 'id', 'ARO_UUID': 'ARO_UUID', 'MAINDOWN': 'MAINDOWN', 'NAME': 'NAME', 'LANGUAGE': 'LANGUAGE', 'HARO': 'HARO', 'BARONR': 'BARONR', 'VAROID': 'VAROID', 'DISTRICT': 'DISTRICT', 'COUNTRY': 'COUNTRY', 'AREA': 'AREA', 'AREA_UPSTR': 'AREA_UPSTR', 'VERSION_SV': 'VERSION_SV', });
lyr_vattenfrekommster_norslven_2.set('fieldAliases', {'UUID': 'UUID', 'MS_CD': 'MS_CD', 'EU_CD': 'EU_CD', 'VISS_MS_CD': 'VISS_MS_CD', 'VNAMN': 'VNAMN', 'CATEGORY': 'CATEGORY', 'HARO': 'HARO', 'DAROID_UT': 'DAROID_UT', 'DISTRICT': 'DISTRICT', 'COMP_AUTH': 'COMP_AUTH', 'COUNTRY': 'COUNTRY', 'WB': 'WB', 'VERSION': 'VERSION', 'URL_VISS': 'URL_VISS', 'GVatten': 'GVatten', 'G_EU_CD': 'G_EU_CD', 'G_MS_CD': 'G_MS_CD', });
lyr_sjar_norslven_daro_3.set('fieldAliases', {'UUID': 'UUID', 'MS_CD': 'MS_CD', 'EU_CD': 'EU_CD', 'VISS_MS_CD': 'VISS_MS_CD', 'SJONAMN': 'SJONAMN', 'SJOID': 'SJOID', 'CATEGORY': 'CATEGORY', 'HARO': 'HARO', 'DAROID_UT': 'DAROID_UT', 'DISTRICT': 'DISTRICT', 'COMP_AUTH': 'COMP_AUTH', 'COUNTRY': 'COUNTRY', 'WB': 'WB', 'VERSION': 'VERSION', 'URL_VISS': 'URL_VISS', 'SHAPE_Leng': 'SHAPE_Leng', 'GVatten': 'GVatten', 'G_EU_CD': 'G_EU_CD', 'G_MS_CD': 'G_MS_CD', });
lyr_vriga_sjar_norslven_daro_4.set('fieldAliases', {'UUID': 'UUID', 'VattenID': 'VattenID', 'EU_CD': 'EU_CD', 'VISS_MS_CD': 'VISS_MS_CD', 'SJONAMN': 'SJONAMN', 'SJOID': 'SJOID', 'CATEGORY': 'CATEGORY', 'HARO': 'HARO', 'DAROID_UT': 'DAROID_UT', 'DISTRICT': 'DISTRICT', 'COMP_AUTH': 'COMP_AUTH', 'COUNTRY': 'COUNTRY', 'WB': 'WB', 'VERSION': 'VERSION', 'URL_VISS': 'URL_VISS', 'Shape_Leng': 'Shape_Leng', 'GVatten': 'GVatten', 'G_EU_CD': 'G_EU_CD', 'G_MS_CD': 'G_MS_CD', });
lyr_mtstationer_norslven_5.set('fieldAliases', {'Mätstation': 'Mätstation', 'Värde': 'Värde', 'stations n': 'stations n', 'X': 'X', 'Y': 'Y', });
lyr_norslven_daro_1.set('fieldImages', {'id': '', 'ARO_UUID': '', 'MAINDOWN': '', 'NAME': '', 'LANGUAGE': '', 'HARO': '', 'BARONR': '', 'VAROID': '', 'DISTRICT': '', 'COUNTRY': '', 'AREA': '', 'AREA_UPSTR': '', 'VERSION_SV': '', });
lyr_vattenfrekommster_norslven_2.set('fieldImages', {'UUID': 'TextEdit', 'MS_CD': 'TextEdit', 'EU_CD': 'TextEdit', 'VISS_MS_CD': 'TextEdit', 'VNAMN': 'TextEdit', 'CATEGORY': 'TextEdit', 'HARO': 'TextEdit', 'DAROID_UT': 'TextEdit', 'DISTRICT': 'TextEdit', 'COMP_AUTH': 'TextEdit', 'COUNTRY': 'TextEdit', 'WB': 'TextEdit', 'VERSION': 'TextEdit', 'URL_VISS': 'TextEdit', 'GVatten': 'TextEdit', 'G_EU_CD': 'TextEdit', 'G_MS_CD': 'TextEdit', });
lyr_sjar_norslven_daro_3.set('fieldImages', {'UUID': 'TextEdit', 'MS_CD': 'TextEdit', 'EU_CD': 'TextEdit', 'VISS_MS_CD': 'TextEdit', 'SJONAMN': 'TextEdit', 'SJOID': 'TextEdit', 'CATEGORY': 'TextEdit', 'HARO': 'TextEdit', 'DAROID_UT': 'TextEdit', 'DISTRICT': 'TextEdit', 'COMP_AUTH': 'TextEdit', 'COUNTRY': 'TextEdit', 'WB': 'TextEdit', 'VERSION': 'TextEdit', 'URL_VISS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'GVatten': 'TextEdit', 'G_EU_CD': 'TextEdit', 'G_MS_CD': 'TextEdit', });
lyr_vriga_sjar_norslven_daro_4.set('fieldImages', {'UUID': 'TextEdit', 'VattenID': 'TextEdit', 'EU_CD': 'TextEdit', 'VISS_MS_CD': 'TextEdit', 'SJONAMN': 'TextEdit', 'SJOID': 'TextEdit', 'CATEGORY': 'TextEdit', 'HARO': 'TextEdit', 'DAROID_UT': 'TextEdit', 'DISTRICT': 'TextEdit', 'COMP_AUTH': 'TextEdit', 'COUNTRY': 'TextEdit', 'WB': 'TextEdit', 'VERSION': 'TextEdit', 'URL_VISS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'GVatten': 'TextEdit', 'G_EU_CD': 'TextEdit', 'G_MS_CD': 'TextEdit', });
lyr_mtstationer_norslven_5.set('fieldImages', {'Mätstation': 'TextEdit', 'Värde': 'TextEdit', 'stations n': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_norslven_daro_1.set('fieldLabels', {'id': 'no label', 'ARO_UUID': 'no label', 'MAINDOWN': 'no label', 'NAME': 'no label', 'LANGUAGE': 'no label', 'HARO': 'no label', 'BARONR': 'no label', 'VAROID': 'no label', 'DISTRICT': 'no label', 'COUNTRY': 'no label', 'AREA': 'no label', 'AREA_UPSTR': 'no label', 'VERSION_SV': 'no label', });
lyr_vattenfrekommster_norslven_2.set('fieldLabels', {'UUID': 'no label', 'MS_CD': 'no label', 'EU_CD': 'no label', 'VISS_MS_CD': 'no label', 'VNAMN': 'no label', 'CATEGORY': 'no label', 'HARO': 'no label', 'DAROID_UT': 'no label', 'DISTRICT': 'no label', 'COMP_AUTH': 'no label', 'COUNTRY': 'no label', 'WB': 'no label', 'VERSION': 'no label', 'URL_VISS': 'no label', 'GVatten': 'no label', 'G_EU_CD': 'no label', 'G_MS_CD': 'no label', });
lyr_sjar_norslven_daro_3.set('fieldLabels', {'UUID': 'no label', 'MS_CD': 'no label', 'EU_CD': 'no label', 'VISS_MS_CD': 'no label', 'SJONAMN': 'no label', 'SJOID': 'no label', 'CATEGORY': 'no label', 'HARO': 'no label', 'DAROID_UT': 'no label', 'DISTRICT': 'no label', 'COMP_AUTH': 'no label', 'COUNTRY': 'no label', 'WB': 'no label', 'VERSION': 'no label', 'URL_VISS': 'no label', 'SHAPE_Leng': 'no label', 'GVatten': 'no label', 'G_EU_CD': 'no label', 'G_MS_CD': 'no label', });
lyr_vriga_sjar_norslven_daro_4.set('fieldLabels', {'UUID': 'no label', 'VattenID': 'no label', 'EU_CD': 'no label', 'VISS_MS_CD': 'no label', 'SJONAMN': 'no label', 'SJOID': 'no label', 'CATEGORY': 'no label', 'HARO': 'no label', 'DAROID_UT': 'no label', 'DISTRICT': 'no label', 'COMP_AUTH': 'no label', 'COUNTRY': 'no label', 'WB': 'no label', 'VERSION': 'no label', 'URL_VISS': 'no label', 'Shape_Leng': 'no label', 'GVatten': 'no label', 'G_EU_CD': 'no label', 'G_MS_CD': 'no label', });
lyr_mtstationer_norslven_5.set('fieldLabels', {'Mätstation': 'header label - always visible', 'Värde': 'no label', 'stations n': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_mtstationer_norslven_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});