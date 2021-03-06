// Mapping of step names to colors.
var colors = {
"HUMANI": "#023858",
"WEE": "#00441b",
"FNS": "#7f0000",
"ROLES": "#3f007d",
"CIND22": "#045a8d",
"CIND4": "#0570b0",
"CIND5": "#3690c0",
"TD1": "#006d2c",
"TD3": "#238b45",
"CIND16": "#41ab5d",
"CIND17": "#74c476",
"CIND18": "#a1d99b",
"CIND13": "#b30000",
"CIND14": "#d7301f",
"CIND15": "#ef6548",
"CIND21": "#fc8d59",
"CIND1": "#54278f",
"CIND19": "#6a51a3",
"CIND20": "#807dba",
"CIND23": "#9e9ac8",
"CIND24": "#bcbddc",
"CIND25": "#dadaeb",
"ND#22": "#74a9cf",
"ND#4": "#74a9cf",
"ND#5": "#74a9cf",
"TD#1": "#c7e9c0",
"TD#3": "#c7e9c0",
"PL#16": "#c7e9c0",
"PNF#16": "#c7e9c0",
"PROLEMPA#16": "#c7e9c0",
"PDR#17": "#c7e9c0",
"PNF#17": "#c7e9c0",
"PROLEMPA#17": "#c7e9c0",
"PNF#18": "#c7e9c0",
"ACS#13": "#fdbb84",
"PL#13": "#fdbb84",
"PNF#13": "#fdbb84",
"ACS#14": "#fdbb84",
"HGSA#14": "#fdbb84",
"PL#14": "#fdbb84",
"PNF#14": "#fdbb84",
"ACS#15": "#fdbb84",
"DPCO#15": "#fdbb84",
"PL#15": "#fdbb84",
"PNF#15": "#fdbb84",
"ACS#21": "#fdbb84",
"DPCO#21": "#fdbb84",
"PDR#21": "#fdbb84",
"PL#21": "#fdbb84",
"PNF#21": "#fdbb84",
"SG#21": "#fdbb84",
"PDR#1": "#efedf5",
"PNF#1": "#efedf5",
"PDR#19": "#efedf5",
"PNF#19": "#efedf5",
"PROLEMPA#19": "#efedf5",
"SG#19": "#efedf5",
"PDR#20": "#efedf5",
"PL#20": "#efedf5",
"PROLEMPA#20": "#efedf5",
"SG#20": "#efedf5",
"PNF#23": "#efedf5",
"TD#24": "#efedf5",
"PNF#25": "#efedf5",
"PROLEMPA#25": "#efedf5",
"HNIND1": "#fff7fb",
"HNIND2": "#fff7fb",
"HNIND3": "#fff7fb",
"HNIND4": "#e5f5e0",
"HNIND5": "#e5f5e0",
"HNIND6": "#e5f5e0",
"HNIND7": "#e5f5e0",
"HNIND8": "#e5f5e0",
"HNIND9": "#e5f5e0",
"HNIND10": "#e5f5e0",
"HNIND11": "#e5f5e0",
"HNIND12": "#e5f5e0",
"HNIND13": "#e5f5e0",
"HNIND14": "#e5f5e0",
"HNIND15": "#e5f5e0",
"HNIND16": "#e5f5e0",
"HNIND17": "#e5f5e0",
"HNIND18": "#e5f5e0",
"HNIND19": "#e5f5e0",
"HNIND20": "#e5f5e0",
"HNIND21": "#e5f5e0",
"HNIND22": "#e5f5e0",
"HNIND23": "#e5f5e0",
"HNIND24": "#e5f5e0",
"HNIND25": "#fff7ec",
"HNIND26": "#fff7ec",
"HNIND27": "#fff7ec",
"HNIND28": "#fff7ec",
"HNIND29": "#fff7ec",
"HNIND30": "#fff7ec",
"HNIND31": "#fff7ec",
"HNIND32": "#fff7ec",
"HNIND33": "#fff7ec",
"HNIND34": "#fff7ec",
"HNIND35": "#fff7ec",
"HNIND36": "#fff7ec",
"HNIND37": "#fff7ec",
"HNIND38": "#fff7ec",
"HNIND39": "#fff7ec",
"HNIND40": "#fff7ec",
"HNIND41": "#fff7ec",
"HNIND42": "#fff7ec",
"HNIND43": "#fff7ec",
"HNIND44": "#fff7ec",
"HNIND45": "#fff7ec",
"HNIND46": "#fff7ec",
"HNIND47": "#fff7ec",
"HNIND48": "#fff7ec",
"HNIND49": "#fff7ec",
"HNIND50": "#fff7ec",
"HNIND51": "#fff7ec",
"HNIND52": "#fff7ec",
"HNIND53": "#fff7ec",
"HNIND54": "#fff7ec",
"HNIND55": "#fff7ec",
"HNIND56": "#fff7ec",
"HNIND57": "#fff7ec",
"HNIND58": "#fff7ec",
"HNIND59": "#fff7ec",
"HNIND60": "#fff7ec",
"HNIND61": "#fff7ec",
"HNIND62": "#fff7ec",
"HNIND63": "#fff7ec",
"HNIND64": "#fff7ec",
"HNIND65": "#fff7ec",
"HNIND66": "#fff7ec",
"HNIND67": "#fff7ec",
"HNIND68": "#fff7ec",
"HNIND69": "#fff7ec",
"HNIND70": "#fff7ec",
"HNIND71": "#fff7ec",
"HNIND72": "#fff7ec",
"HNIND73": "#fff7ec",
"HNIND74": "#fff7ec",
"HNIND75": "#fff7ec",
"HNIND76": "#fff7ec",
"HNIND77": "#fff7ec",
"HNIND78": "#fff7ec",
"HNIND79": "#fff7ec",
"HNIND80": "#fff7ec",
"HNIND81": "#fff7ec",
"HNIND82": "#fcfbfd",
"HNIND83": "#fcfbfd",
"HNIND84": "#fcfbfd",
"HNIND85": "#fcfbfd",
"HNIND86": "#fcfbfd",
"HNIND87": "#fcfbfd",
"HNIND88": "#fcfbfd",
"HNIND89": "#fcfbfd",
"HNIND90": "#fcfbfd",
"HNIND91": "#fcfbfd",
"HNIND92": "#fcfbfd",
"HNIND93": "#fcfbfd",
"HNIND94": "#fcfbfd",
"HNIND95": "#fcfbfd",
"HNIND96": "#fcfbfd",
"HNIND97": "#fcfbfd",
"HNIND98": "#fcfbfd",
"HNIND99": "#fcfbfd",
"HNIND100": "#fcfbfd",
"HNIND101": "#fcfbfd",
"HNIND102": "#fcfbfd",
"HNIND103": "#fcfbfd",
"HNIND104": "#fcfbfd",
"HNIND105": "#fcfbfd",
"HNIND106": "#fcfbfd",
"HNIND107": "#fcfbfd"
};