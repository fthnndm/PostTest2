
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "Positron_0": {
            "type": "raster",
            "tiles": ["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "clip7_1": {
            "type": "geojson",
            "data": json_clip7_1
        }
                    ,
        "cleaneddalan_2": {
            "type": "geojson",
            "data": json_cleaneddalan_2
        }
                    ,
        "reproject_Halte_fixHalte_3": {
            "type": "geojson",
            "data": json_reproject_Halte_fixHalte_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_Positron_0_0",
            "type": "raster",
            "source": "Positron_0"
        },
        {
            "id": "lyr_clip7_1_0",
            "type": "fill",
            "source": "clip7_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'cost_level'], 400], 1.0, ['==', ['get', 'cost_level'], 800], 1.0, ['==', ['get', 'cost_level'], 1200], 1.0, 1.0], 'fill-color': ['case', ['==', ['get', 'cost_level'], 400], '#2b83ba', ['==', ['get', 'cost_level'], 800], '#c7e8ad', ['==', ['get', 'cost_level'], 1200], '#fec980', '#d7191c']}
        }
,
        {
            "id": "lyr_cleaneddalan_2_0",
            "type": "line",
            "source": "cleaneddalan_2",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#ffffff'}
        }
,
        {
            "id": "lyr_reproject_Halte_fixHalte_3_0",
            "type": "circle",
            "source": "reproject_Halte_fixHalte_3",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'Name'], 'Halte Bundaran ITS Trans Semanggi'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Galaxy 1'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Galaxy 2'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Gramedia Manyar'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte ITATS'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte ITS'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Kalijudan 1'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Kalijudan 2'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Kejawan Putih'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Kertajaya Indah'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Klampis'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte KONI Jatim'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte KONI MERR'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Kopertis'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Manyar Kertoadi (Halte Kertajaya Indah 2)'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Mulyorejo'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Mulyorejo 2'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Park and Ride Arief Rahman Hakim'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte PENS'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte PENS 1'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte RS Haji 1'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte RS Haji 2'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte RSIA 1'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte RSIA 2'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Samsat Manyar Kertoarjo'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Semampir'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Semolowaru 1'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Semolowaru 2'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Sentra UKM Merr'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte SMPN 19'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Superindo'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Unair 1'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Unair 2'], ['/', 10.714285714285714, 2], ['==', ['get', 'Name'], 'Halte Universitas Katolik Darma Cendika'], ['/', 10.714285714285714, 2], ['/', 10.714285714285714, 2]], 'circle-color': ['case', ['==', ['get', 'Name'], 'Halte Bundaran ITS Trans Semanggi'], '#90d63b', ['==', ['get', 'Name'], 'Halte Galaxy 1'], '#7be376', ['==', ['get', 'Name'], 'Halte Galaxy 2'], '#cf59cb', ['==', ['get', 'Name'], 'Halte Gramedia Manyar'], '#ddd127', ['==', ['get', 'Name'], 'Halte ITATS'], '#c40de0', ['==', ['get', 'Name'], 'Halte ITS'], '#46b5c9', ['==', ['get', 'Name'], 'Halte Kalijudan 1'], '#2a27e4', ['==', ['get', 'Name'], 'Halte Kalijudan 2'], '#3a89d7', ['==', ['get', 'Name'], 'Halte Kejawan Putih'], '#dc5262', ['==', ['get', 'Name'], 'Halte Kertajaya Indah'], '#6894eb', ['==', ['get', 'Name'], 'Halte Klampis'], '#2d4be0', ['==', ['get', 'Name'], 'Halte KONI Jatim'], '#dab53a', ['==', ['get', 'Name'], 'Halte KONI MERR'], '#5d41d6', ['==', ['get', 'Name'], 'Halte Kopertis'], '#78e35b', ['==', ['get', 'Name'], 'Halte Manyar Kertoadi (Halte Kertajaya Indah 2)'], '#723fd2', ['==', ['get', 'Name'], 'Halte Mulyorejo'], '#e8207a', ['==', ['get', 'Name'], 'Halte Mulyorejo 2'], '#a6d71e', ['==', ['get', 'Name'], 'Halte Park and Ride Arief Rahman Hakim'], '#69dd78', ['==', ['get', 'Name'], 'Halte PENS'], '#d66717', ['==', ['get', 'Name'], 'Halte PENS 1'], '#e65e52', ['==', ['get', 'Name'], 'Halte RS Haji 1'], '#dc436f', ['==', ['get', 'Name'], 'Halte RS Haji 2'], '#25e7c3', ['==', ['get', 'Name'], 'Halte RSIA 1'], '#cb74ba', ['==', ['get', 'Name'], 'Halte RSIA 2'], '#5ce0de', ['==', ['get', 'Name'], 'Halte Samsat Manyar Kertoarjo'], '#e61495', ['==', ['get', 'Name'], 'Halte Semampir'], '#28a2db', ['==', ['get', 'Name'], 'Halte Semolowaru 1'], '#bd73dd', ['==', ['get', 'Name'], 'Halte Semolowaru 2'], '#d3e530', ['==', ['get', 'Name'], 'Halte Sentra UKM Merr'], '#81d7b7', ['==', ['get', 'Name'], 'Halte SMPN 19'], '#8e2ee9', ['==', ['get', 'Name'], 'Halte Superindo'], '#3fee73', ['==', ['get', 'Name'], 'Halte Unair 1'], '#d95529', ['==', ['get', 'Name'], 'Halte Unair 2'], '#cd9e5c', ['==', ['get', 'Name'], 'Halte Universitas Katolik Darma Cendika'], '#6dd72c', '#4de694'], 'circle-opacity': ['case', ['==', ['get', 'Name'], 'Halte Bundaran ITS Trans Semanggi'], 1.0, ['==', ['get', 'Name'], 'Halte Galaxy 1'], 1.0, ['==', ['get', 'Name'], 'Halte Galaxy 2'], 1.0, ['==', ['get', 'Name'], 'Halte Gramedia Manyar'], 1.0, ['==', ['get', 'Name'], 'Halte ITATS'], 1.0, ['==', ['get', 'Name'], 'Halte ITS'], 1.0, ['==', ['get', 'Name'], 'Halte Kalijudan 1'], 1.0, ['==', ['get', 'Name'], 'Halte Kalijudan 2'], 1.0, ['==', ['get', 'Name'], 'Halte Kejawan Putih'], 1.0, ['==', ['get', 'Name'], 'Halte Kertajaya Indah'], 1.0, ['==', ['get', 'Name'], 'Halte Klampis'], 1.0, ['==', ['get', 'Name'], 'Halte KONI Jatim'], 1.0, ['==', ['get', 'Name'], 'Halte KONI MERR'], 1.0, ['==', ['get', 'Name'], 'Halte Kopertis'], 1.0, ['==', ['get', 'Name'], 'Halte Manyar Kertoadi (Halte Kertajaya Indah 2)'], 1.0, ['==', ['get', 'Name'], 'Halte Mulyorejo'], 1.0, ['==', ['get', 'Name'], 'Halte Mulyorejo 2'], 1.0, ['==', ['get', 'Name'], 'Halte Park and Ride Arief Rahman Hakim'], 1.0, ['==', ['get', 'Name'], 'Halte PENS'], 1.0, ['==', ['get', 'Name'], 'Halte PENS 1'], 1.0, ['==', ['get', 'Name'], 'Halte RS Haji 1'], 1.0, ['==', ['get', 'Name'], 'Halte RS Haji 2'], 1.0, ['==', ['get', 'Name'], 'Halte RSIA 1'], 1.0, ['==', ['get', 'Name'], 'Halte RSIA 2'], 1.0, ['==', ['get', 'Name'], 'Halte Samsat Manyar Kertoarjo'], 1.0, ['==', ['get', 'Name'], 'Halte Semampir'], 1.0, ['==', ['get', 'Name'], 'Halte Semolowaru 1'], 1.0, ['==', ['get', 'Name'], 'Halte Semolowaru 2'], 1.0, ['==', ['get', 'Name'], 'Halte Sentra UKM Merr'], 1.0, ['==', ['get', 'Name'], 'Halte SMPN 19'], 1.0, ['==', ['get', 'Name'], 'Halte Superindo'], 1.0, ['==', ['get', 'Name'], 'Halte Unair 1'], 1.0, ['==', ['get', 'Name'], 'Halte Unair 2'], 1.0, ['==', ['get', 'Name'], 'Halte Universitas Katolik Darma Cendika'], 1.0, 1.0], 'circle-stroke-width': ['case', ['==', ['get', 'Name'], 'Halte Bundaran ITS Trans Semanggi'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Galaxy 1'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Galaxy 2'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Gramedia Manyar'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte ITATS'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte ITS'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Kalijudan 1'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Kalijudan 2'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Kejawan Putih'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Kertajaya Indah'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Klampis'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte KONI Jatim'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte KONI MERR'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Kopertis'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Manyar Kertoadi (Halte Kertajaya Indah 2)'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Mulyorejo'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Mulyorejo 2'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Park and Ride Arief Rahman Hakim'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte PENS'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte PENS 1'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte RS Haji 1'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte RS Haji 2'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte RSIA 1'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte RSIA 2'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Samsat Manyar Kertoarjo'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Semampir'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Semolowaru 1'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Semolowaru 2'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Sentra UKM Merr'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte SMPN 19'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Superindo'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Unair 1'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Unair 2'], 2.142857142857143, ['==', ['get', 'Name'], 'Halte Universitas Katolik Darma Cendika'], 2.142857142857143, 2.142857142857143], 'circle-stroke-color': ['case', ['==', ['get', 'Name'], 'Halte Bundaran ITS Trans Semanggi'], '#ffffff', ['==', ['get', 'Name'], 'Halte Galaxy 1'], '#ffffff', ['==', ['get', 'Name'], 'Halte Galaxy 2'], '#ffffff', ['==', ['get', 'Name'], 'Halte Gramedia Manyar'], '#ffffff', ['==', ['get', 'Name'], 'Halte ITATS'], '#ffffff', ['==', ['get', 'Name'], 'Halte ITS'], '#ffffff', ['==', ['get', 'Name'], 'Halte Kalijudan 1'], '#ffffff', ['==', ['get', 'Name'], 'Halte Kalijudan 2'], '#ffffff', ['==', ['get', 'Name'], 'Halte Kejawan Putih'], '#ffffff', ['==', ['get', 'Name'], 'Halte Kertajaya Indah'], '#ffffff', ['==', ['get', 'Name'], 'Halte Klampis'], '#ffffff', ['==', ['get', 'Name'], 'Halte KONI Jatim'], '#ffffff', ['==', ['get', 'Name'], 'Halte KONI MERR'], '#ffffff', ['==', ['get', 'Name'], 'Halte Kopertis'], '#ffffff', ['==', ['get', 'Name'], 'Halte Manyar Kertoadi (Halte Kertajaya Indah 2)'], '#ffffff', ['==', ['get', 'Name'], 'Halte Mulyorejo'], '#ffffff', ['==', ['get', 'Name'], 'Halte Mulyorejo 2'], '#ffffff', ['==', ['get', 'Name'], 'Halte Park and Ride Arief Rahman Hakim'], '#ffffff', ['==', ['get', 'Name'], 'Halte PENS'], '#ffffff', ['==', ['get', 'Name'], 'Halte PENS 1'], '#ffffff', ['==', ['get', 'Name'], 'Halte RS Haji 1'], '#ffffff', ['==', ['get', 'Name'], 'Halte RS Haji 2'], '#ffffff', ['==', ['get', 'Name'], 'Halte RSIA 1'], '#ffffff', ['==', ['get', 'Name'], 'Halte RSIA 2'], '#ffffff', ['==', ['get', 'Name'], 'Halte Samsat Manyar Kertoarjo'], '#ffffff', ['==', ['get', 'Name'], 'Halte Semampir'], '#ffffff', ['==', ['get', 'Name'], 'Halte Semolowaru 1'], '#ffffff', ['==', ['get', 'Name'], 'Halte Semolowaru 2'], '#ffffff', ['==', ['get', 'Name'], 'Halte Sentra UKM Merr'], '#ffffff', ['==', ['get', 'Name'], 'Halte SMPN 19'], '#ffffff', ['==', ['get', 'Name'], 'Halte Superindo'], '#ffffff', ['==', ['get', 'Name'], 'Halte Unair 1'], '#ffffff', ['==', ['get', 'Name'], 'Halte Unair 2'], '#ffffff', ['==', ['get', 'Name'], 'Halte Universitas Katolik Darma Cendika'], '#ffffff', '#ffffff']}
        }
],
}