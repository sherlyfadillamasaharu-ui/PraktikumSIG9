var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KotaSemarang_BatasADM_1 = new ol.format.GeoJSON();
var features_KotaSemarang_BatasADM_1 = format_KotaSemarang_BatasADM_1.readFeatures(json_KotaSemarang_BatasADM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaSemarang_BatasADM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaSemarang_BatasADM_1.addFeatures(features_KotaSemarang_BatasADM_1);
var lyr_KotaSemarang_BatasADM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaSemarang_BatasADM_1, 
                style: style_KotaSemarang_BatasADM_1,
                popuplayertitle: 'Kota Semarang_Batas ADM',
                interactive: true,
                title: '<img src="styles/legend/KotaSemarang_BatasADM_1.png" /> Kota Semarang_Batas ADM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KotaSemarang_BatasADM_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KotaSemarang_BatasADM_1];
lyr_KotaSemarang_BatasADM_1.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_KotaSemarang_BatasADM_1.set('fieldImages', {'GID_3': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', });
lyr_KotaSemarang_BatasADM_1.set('fieldLabels', {'GID_3': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'GID_2': 'hidden field', 'NAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'NAME_3': 'inline label - always visible', 'VARNAME_3': 'hidden field', 'NL_NAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'CC_3': 'hidden field', 'HASC_3': 'hidden field', });
lyr_KotaSemarang_BatasADM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});